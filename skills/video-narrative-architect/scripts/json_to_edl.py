#!/usr/bin/env python3
"""
json_to_edl.py — Convert pruned JSON clip list to CMX 3600 EDL.

Part of the V.E.O. (Video Edit Orchestrator) pipeline — Phase 3 output.

Usage:
    python3 json_to_edl.py < pruned_output.json
    python3 json_to_edl.py pruned_output.json
    python3 json_to_edl.py pruned_output.json -o timeline.edl --fps 30 --title "Interview Cut"
    python3 json_to_edl.py input.json --pre-roll 0.15 --post-roll 0.25

Input JSON format (accepts either "clips" or "segments" key):
    {
      "clips": [
        { "start": 1.2, "end": 5.8, "text": "...", "action": "KEEP", "reason": "..." },
        ...
      ]
    }

Output:
    CMX 3600 EDL file (default: output.edl)
"""

from __future__ import annotations

import sys
import json
import argparse
from pathlib import Path
from typing import Optional


def seconds_to_timecode(seconds: float, fps: int = 24) -> str:
    """Convert seconds (float) to SMPTE timecode HH:MM:SS:FF."""
    if seconds < 0:
        seconds = 0.0
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    frames = int((seconds % 1) * fps)
    return f"{hours:02}:{minutes:02}:{secs:02}:{frames:02}"


def apply_padding(
    clips: list[dict],
    pre_roll: float,
    post_roll: float,
    max_duration: float = 0.0,
) -> list[dict]:
    """Apply breath-room padding to kept clips and merge overlaps."""
    if pre_roll == 0.0 and post_roll == 0.0:
        return clips

    padded = []
    for clip in clips:
        start = max(0.0, float(clip["start"]) - pre_roll)
        end = float(clip["end"]) + post_roll
        if max_duration > 0:
            end = min(end, max_duration)
        padded.append({**clip, "start": round(start, 3), "end": round(end, 3)})

    # Merge overlapping clips
    if not padded:
        return padded

    merged = [padded[0]]
    for clip in padded[1:]:
        prev = merged[-1]
        if float(clip["start"]) <= float(prev["end"]):
            # Overlap — extend previous clip
            prev["end"] = max(float(prev["end"]), float(clip["end"]))
            prev["text"] = prev.get("text", "") + " " + clip.get("text", "")
            prev["reason"] = prev.get("reason", "") + " + " + clip.get("reason", "")
        else:
            merged.append(clip)

    return merged


def generate_edl(
    clips: list[dict],
    title: str = "A_ROLL_CULL",
    fps: int = 24,
    source_name: str = "source_video.mp4",
    pre_roll: float = 0.0,
    post_roll: float = 0.0,
) -> str:
    """Generate CMX 3600 EDL string from a list of clip dicts."""

    # Filter to KEEP clips only
    keep_clips = []
    for clip in clips:
        # Accept both "action" and "tag" fields (V.E.O. Phase 2 uses "tag")
        action = clip.get("action", clip.get("tag", "KEEP")).upper()
        if action in ("KEEP", "MARKER_KEEP", "RETAKE_KEEP"):
            keep_clips.append(clip)

    # Apply padding if specified
    if pre_roll > 0 or post_roll > 0:
        keep_clips = apply_padding(keep_clips, pre_roll, post_roll)

    lines = [
        f"TITLE: {title}",
        "FCM: NON-DROP FRAME",
        "",
    ]

    record_in = 0.0
    event_count = 0

    for clip in keep_clips:
        start = float(clip["start"])
        end = float(clip["end"])
        duration = end - start

        if duration <= 0:
            continue

        event_count += 1
        source_in = seconds_to_timecode(start, fps)
        source_out = seconds_to_timecode(end, fps)
        rec_in = seconds_to_timecode(record_in, fps)
        rec_out = seconds_to_timecode(record_in + duration, fps)

        event_num = f"{event_count:03}"
        lines.append(
            f"{event_num}  AX       V     C        "
            f"{source_in} {source_out} {rec_in} {rec_out}"
        )

        # Optional: include clip name and reasoning as comments
        clip_name = clip.get("source", source_name)
        lines.append(f"* FROM CLIP NAME: {clip_name}")

        reason = clip.get("reason", "")
        if reason:
            lines.append(f"* REASON: {reason}")

        text = clip.get("text", "")
        if text:
            # Truncate long text to keep EDL readable
            preview = text[:80] + ("..." if len(text) > 80 else "")
            lines.append(f"* TEXT: {preview}")

        lines.append("")  # blank line between events
        record_in += duration

    # Append summary as comments
    total_duration = sum(
        float(c["end"]) - float(c["start"])
        for c in keep_clips
        if float(c["end"]) - float(c["start"]) > 0
    )
    lines.append(
        f"* TOTAL PROGRAM DURATION: {seconds_to_timecode(total_duration, fps)}"
    )

    return "\n".join(lines)


def load_input(filepath: Optional[str]) -> dict:
    """Load JSON from file path or stdin."""
    if filepath and filepath != "-":
        with open(filepath, "r", encoding="utf-8") as f:
            return json.load(f)
    else:
        return json.load(sys.stdin)


def main():
    parser = argparse.ArgumentParser(
        description="Convert pruned JSON clip list to CMX 3600 EDL."
    )
    parser.add_argument(
        "input",
        nargs="?",
        default=None,
        help="Input JSON file (default: stdin)",
    )
    parser.add_argument(
        "-o",
        "--output",
        default="output.edl",
        help="Output EDL file (default: output.edl)",
    )
    parser.add_argument(
        "--fps",
        type=int,
        default=24,
        help="Frame rate for timecode (default: 24)",
    )
    parser.add_argument(
        "--title",
        default="A_ROLL_CULL",
        help="EDL title (default: A_ROLL_CULL)",
    )
    parser.add_argument(
        "--source",
        default="source_video.mp4",
        help="Source clip name for EDL entries (default: source_video.mp4)",
    )
    parser.add_argument(
        "--pre-roll",
        type=float,
        default=0.0,
        help="Breath-room padding before each clip in seconds (default: 0.0, V.E.O. default: 0.15)",
    )
    parser.add_argument(
        "--post-roll",
        type=float,
        default=0.0,
        help="Breath-room padding after each clip in seconds (default: 0.0, V.E.O. default: 0.25)",
    )

    args = parser.parse_args()

    try:
        data = load_input(args.input)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON — {e}", file=sys.stderr)
        sys.exit(1)
    except FileNotFoundError:
        print(f"Error: File not found — {args.input}", file=sys.stderr)
        sys.exit(1)

    # Accept both "clips" and "segments" keys (V.E.O. Phase 2 uses "segments")
    clips = data.get("clips", data.get("segments", []))
    if not clips:
        print(
            "Error: No 'clips' or 'segments' array found in input JSON.",
            file=sys.stderr,
        )
        sys.exit(1)

    edl_content = generate_edl(
        clips,
        title=args.title,
        fps=args.fps,
        source_name=args.source,
        pre_roll=args.pre_roll,
        post_roll=args.post_roll,
    )

    output_path = Path(args.output)
    output_path.write_text(edl_content, encoding="utf-8")

    # Summary to stderr so stdout stays clean for piping
    kept = sum(
        1
        for c in clips
        if c.get("action", c.get("tag", "KEEP")).upper()
        in ("KEEP", "MARKER_KEEP", "RETAKE_KEEP")
    )
    print(f"EDL generated: {output_path}", file=sys.stderr)
    print(f"  Events: {kept} clips", file=sys.stderr)
    print(f"  FPS: {args.fps}", file=sys.stderr)


if __name__ == "__main__":
    main()
