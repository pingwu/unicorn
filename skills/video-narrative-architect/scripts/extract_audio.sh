#!/usr/bin/env bash
# extract_audio.sh — Phase 1: Extract mono audio and video metadata from raw footage.
#
# Usage:
#   ./extract_audio.sh INPUT.mp4
#   ./extract_audio.sh INPUT.mp4 OUTPUT_DIR
#
# Outputs:
#   audio_mono.wav     — 16kHz mono PCM audio (optimal for Whisper)
#   video_specs.json   — Video metadata (FPS, duration, codec, resolution)
#
# Requirements: ffmpeg, ffprobe (both included in FFmpeg)

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 INPUT_VIDEO [OUTPUT_DIR]" >&2
  echo "" >&2
  echo "  INPUT_VIDEO  Path to raw video file (mp4, mov, mkv, etc.)" >&2
  echo "  OUTPUT_DIR   Directory for output files (default: current directory)" >&2
  exit 1
fi

INPUT="$1"
OUTPUT_DIR="${2:-.}"

if [ ! -f "$INPUT" ]; then
  echo "Error: File not found — $INPUT" >&2
  exit 1
fi

# Ensure output directory exists
mkdir -p "$OUTPUT_DIR"

BASENAME=$(basename "${INPUT%.*}")
AUDIO_OUT="$OUTPUT_DIR/audio_mono.wav"
SPECS_OUT="$OUTPUT_DIR/video_specs.json"

echo "=== V.E.O. Phase 1: Pre-Processor ===" >&2
echo "Source: $INPUT" >&2
echo "" >&2

# Step 1: Extract video metadata
echo "[1/2] Extracting video metadata..." >&2
ffprobe -v quiet -print_format json -show_format -show_streams "$INPUT" > "$SPECS_OUT"

# Parse key fields for summary
FPS=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=r_frame_rate -of csv=p=0 "$INPUT" 2>/dev/null | head -1)
DURATION=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$INPUT" 2>/dev/null)
CODEC=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=codec_name -of csv=p=0 "$INPUT" 2>/dev/null | head -1)
WIDTH=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=width -of csv=p=0 "$INPUT" 2>/dev/null | head -1)
HEIGHT=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=height -of csv=p=0 "$INPUT" 2>/dev/null | head -1)

echo "  FPS:        $FPS" >&2
echo "  Duration:   ${DURATION}s" >&2
echo "  Codec:      $CODEC" >&2
echo "  Resolution: ${WIDTH}x${HEIGHT}" >&2
echo "  Saved to:   $SPECS_OUT" >&2
echo "" >&2

# Step 2: Extract mono audio (16kHz, PCM 16-bit — optimal for Whisper)
echo "[2/2] Extracting mono audio (16kHz WAV)..." >&2
ffmpeg -y -i "$INPUT" -vn -acodec pcm_s16le -ar 16000 -ac 1 "$AUDIO_OUT" 2>/dev/null

AUDIO_SIZE=$(du -h "$AUDIO_OUT" | cut -f1)
echo "  Saved to:   $AUDIO_OUT ($AUDIO_SIZE)" >&2
echo "" >&2

echo "Phase 1 complete." >&2
echo "Next: Run speech-to-text on $AUDIO_OUT" >&2
echo "  whisper $AUDIO_OUT --model medium --output_format json --word_timestamps True" >&2
