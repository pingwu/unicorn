#!/usr/bin/env python3
"""
json_to_edl.py — Convert pruned JSON clip list to CMX 3600 EDL.

Usage:
    python3 json_to_edl.py < pruned_output.json
    python3 json_to_edl.py pruned_output.json
    python3 json_to_edl.py pruned_output.json -o timeline.edl --fps 30 --title "Interview Cut"

Input JSON format:
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


def generate_edl(
    clips: list[dict],
    title: str = "A_ROLL_CULL",
    fps: int = 24,
    source_name: str = "source_video.mp4",
) -> str:
    """Generate CMX 3600 EDL string from a list of clip dicts."""
    lines = [
        f"TITLE: {title}",
        "FCM: NON-DROP FRAME",
        "",
    ]

    record_in = 0.0

    for i, clip in enumerate(clips):
        # Skip non-KEEP clips
        action = clip.get("action", "KEEP").upper()
        if action != "KEEP":
            continue

        start = float(clip["start"])
        end = float(clip["end"])
        duration = end - start

        if duration <= 0:
            continue

        source_in = seconds_to_timecode(start, fps)
        source_out = seconds_to_timecode(end, fps)
        rec_in = seconds_to_timecode(record_in, fps)
        rec_out = seconds_to_timecode(record_in + duration, fps)

        event_num = f"{i + 1:03}"
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
        for c in clips
        if c.get("action", "KEEP").upper() == "KEEP"
        and float(c["end"]) - float(c["start"]) > 0
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

    args = parser.parse_args()

    try:
        data = load_input(args.input)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON — {e}", file=sys.stderr)
        sys.exit(1)
    except FileNotFoundError:
        print(f"Error: File not found — {args.input}", file=sys.stderr)
        sys.exit(1)

    clips = data.get("clips", [])
    if not clips:
        print("Error: No 'clips' array found in input JSON.", file=sys.stderr)
        sys.exit(1)

    edl_content = generate_edl(
        clips,
        title=args.title,
        fps=args.fps,
        source_name=args.source,
    )

    output_path = Path(args.output)
    output_path.write_text(edl_content, encoding="utf-8")

    # Summary to stderr so stdout stays clean for piping
    kept = sum(1 for c in clips if c.get("action", "KEEP").upper() == "KEEP")
    print(f"EDL generated: {output_path}", file=sys.stderr)
    print(f"  Events: {kept} clips", file=sys.stderr)
    print(f"  FPS: {args.fps}", file=sys.stderr)


if __name__ == "__main__":
    main()
