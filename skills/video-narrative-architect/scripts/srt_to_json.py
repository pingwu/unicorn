#!/usr/bin/env python3
"""
srt_to_json.py — Convert SRT or VTT subtitle files to normalized JSON.

Parses subtitle files into a structured JSON format compatible with the
V.E.O. pipeline (Phase 2 input). Handles both SubRip (.srt) and WebVTT (.vtt).

Usage:
    python3 srt_to_json.py input.srt
    python3 srt_to_json.py input.vtt -o output.json
    cat input.srt | python3 srt_to_json.py -

Output JSON format:
    {
      "source": "input.srt",
      "format": "srt",
      "total_segments": 42,
      "segments": [
        { "id": 1, "start": 1.2, "end": 5.8, "text": "..." },
        ...
      ]
    }
"""

from __future__ import annotations

import sys
import re
import json
import argparse
from pathlib import Path
from typing import Optional


def timestamp_to_seconds(ts: str) -> float:
    """Convert SRT/VTT timestamp to seconds.

    Accepts:
      HH:MM:SS,mmm  (SRT format)
      HH:MM:SS.mmm  (VTT format)
      MM:SS.mmm      (VTT short format)
    """
    ts = ts.strip().replace(",", ".")

    parts = ts.split(":")
    if len(parts) == 3:
        hours, minutes, secs = parts
        return int(hours) * 3600 + int(minutes) * 60 + float(secs)
    elif len(parts) == 2:
        minutes, secs = parts
        return int(minutes) * 60 + float(secs)
    else:
        return float(ts)


def parse_srt(content: str) -> list[dict]:
    """Parse SRT content into segments."""
    segments = []
    # Split on blank lines to get subtitle blocks
    blocks = re.split(r"\n\s*\n", content.strip())

    for block in blocks:
        lines = block.strip().split("\n")
        if len(lines) < 2:
            continue

        # Find the timestamp line (contains -->)
        ts_line = None
        ts_idx = None
        for i, line in enumerate(lines):
            if "-->" in line:
                ts_line = line
                ts_idx = i
                break

        if ts_line is None:
            continue

        # Parse timestamps
        match = re.search(r"([\d:,\.]+)\s*-->\s*([\d:,\.]+)", ts_line)
        if not match:
            continue

        start = timestamp_to_seconds(match.group(1))
        end = timestamp_to_seconds(match.group(2))

        # Text is everything after the timestamp line
        text_lines = lines[ts_idx + 1 :]
        text = " ".join(line.strip() for line in text_lines if line.strip())

        # Strip HTML-like tags (common in SRT)
        text = re.sub(r"<[^>]+>", "", text)

        if text:
            segments.append(
                {
                    "id": len(segments) + 1,
                    "start": round(start, 3),
                    "end": round(end, 3),
                    "text": text,
                }
            )

    return segments


def parse_vtt(content: str) -> list[dict]:
    """Parse WebVTT content into segments."""
    # Remove WEBVTT header and optional metadata
    content = re.sub(r"^WEBVTT[^\n]*\n", "", content, flags=re.MULTILINE)
    content = re.sub(r"^NOTE[^\n]*\n(?:[^\n]+\n)*\n", "", content, flags=re.MULTILINE)
    content = re.sub(r"^STYLE[^\n]*\n(?:[^\n]+\n)*\n", "", content, flags=re.MULTILINE)

    # VTT uses the same block structure as SRT (after header removal)
    return parse_srt(content)


def detect_format(content: str, filename: str = "") -> str:
    """Detect whether content is SRT or VTT."""
    if filename.lower().endswith(".vtt"):
        return "vtt"
    if filename.lower().endswith(".srt"):
        return "srt"
    if content.strip().startswith("WEBVTT"):
        return "vtt"
    return "srt"


def load_input(filepath: Optional[str]) -> tuple[str, str]:
    """Load content from file or stdin. Returns (content, filename)."""
    if filepath and filepath != "-":
        path = Path(filepath)
        return path.read_text(encoding="utf-8"), path.name
    else:
        return sys.stdin.read(), "stdin"


def main():
    parser = argparse.ArgumentParser(
        description="Convert SRT/VTT subtitle files to normalized JSON."
    )
    parser.add_argument(
        "input",
        nargs="?",
        default=None,
        help="Input SRT/VTT file (default: stdin)",
    )
    parser.add_argument(
        "-o",
        "--output",
        default=None,
        help="Output JSON file (default: stdout)",
    )
    parser.add_argument(
        "--format",
        choices=["srt", "vtt", "auto"],
        default="auto",
        help="Input format (default: auto-detect)",
    )

    args = parser.parse_args()

    try:
        content, filename = load_input(args.input)
    except FileNotFoundError:
        print(f"Error: File not found — {args.input}", file=sys.stderr)
        sys.exit(1)

    if not content.strip():
        print("Error: Empty input.", file=sys.stderr)
        sys.exit(1)

    # Detect format
    if args.format == "auto":
        fmt = detect_format(content, filename)
    else:
        fmt = args.format

    # Parse
    if fmt == "vtt":
        segments = parse_vtt(content)
    else:
        segments = parse_srt(content)

    if not segments:
        print("Error: No valid subtitle segments found.", file=sys.stderr)
        sys.exit(1)

    # Build output
    result = {
        "source": filename,
        "format": fmt,
        "total_segments": len(segments),
        "segments": segments,
    }

    output_json = json.dumps(result, indent=2, ensure_ascii=False)

    if args.output:
        Path(args.output).write_text(output_json + "\n", encoding="utf-8")
        print(f"Converted: {len(segments)} segments → {args.output}", file=sys.stderr)
    else:
        print(output_json)


if __name__ == "__main__":
    main()
