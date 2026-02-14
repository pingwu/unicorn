---
name: video-narrative-architect-readme
description: User-facing guide for the Video Narrative Architect (V.E.O.) skill — full pipeline from raw footage to final EDL.
---

# Video Narrative Architect (V.E.O.)

**End-to-end video post-production pipeline powered by AI.** Go from raw footage to a clean Edit Decision List in three phases.

This skill turns your AI coding agent into a Video Edit Orchestrator (V.E.O.) that extracts audio, analyzes transcripts for retakes, filler, and dead air, then outputs a surgical-grade EDL you can import into any NLE.

## The Pipeline

```
RAW_FOOTAGE.mp4
    |
    v
Phase 1: Pre-Processor -----> audio_mono.wav + video_specs.json
    |
    v
Phase 2: Input Specialist ---> Master_Semantic_Map.json
    |
    v
Phase 3: Narrative Architect -> Final_Edit.edl + Edit_Summary.txt
```

**You can enter at any phase.** Have raw video? Start at Phase 1. Already have an SRT? Skip to Phase 2. Have a pre-tagged JSON? Jump to Phase 3.

## Phase 1: Pre-Processor

Extracts audio and video metadata from raw footage.

**With your AI agent:**
```
"I have a raw video at tutorial_raw.mp4. Extract the audio for transcription."
```

**With the bundled script:**
```bash
./scripts/extract_audio.sh tutorial_raw.mp4
# Outputs: audio_mono.wav + video_specs.json
```

**Or manually with FFmpeg:**
```bash
# Extract 16kHz mono audio (optimal for Whisper)
ffmpeg -i tutorial_raw.mp4 -vn -acodec pcm_s16le -ar 16000 -ac 1 audio_mono.wav

# Extract video metadata
ffprobe -v quiet -print_format json -show_format -show_streams tutorial_raw.mp4 > video_specs.json
```

## Phase 2: Input Specialist

Converts audio/subtitles into a semantically tagged transcript.

### Step 1: Generate a transcript (if you don't have one)

| Tool | Command | Output |
|------|---------|--------|
| [Whisper](https://github.com/openai/whisper) (local) | `whisper audio_mono.wav --model medium --output_format srt` | `.srt` |
| [Whisper API](https://platform.openai.com/docs/guides/speech-to-text) | POST to `/v1/audio/transcriptions` | `.json` |
| [Descript](https://www.descript.com/) | Import video, Export > SRT | `.srt` |
| [AssemblyAI](https://www.assemblyai.com/) | API or web upload | `.json` |
| YouTube | Upload as unlisted, download auto-captions | `.srt` |

### Step 2: Convert to JSON (if starting from SRT/VTT)

```bash
python3 scripts/srt_to_json.py transcript.srt -o transcript.json
```

### Step 3: Semantic analysis

**With your AI agent:**
```
"Here's my transcript (transcript.json). Analyze it for retakes, filler,
dead air, and human markers. Tag each segment and produce a Master Semantic Map."
```

The AI applies these heuristics in priority order:

| # | Heuristic | What it detects | Result |
|---|-----------|----------------|--------|
| 1 | Human Markers | "Let's try that again," "this one's good" | Obeys speaker intent |
| 2 | Retake Detection | >85% similar text within 60s | Keeps last take only |
| 3 | Filler Clusters | >50% filler words (um, uh, like, you know) | Removes block |
| 4 | Dead Air | Silence >1.2 seconds | Removes (>5s = scene break) |
| 5 | Low Confidence | Below 70% confidence | Flags for human review |

## Phase 3: Narrative Architect

Transforms the tagged transcript into a final EDL.

**With your AI agent:**
```
"Generate a Final EDL and Edit Summary from this semantic map."
```

**With the bundled script:**
```bash
# Basic usage
python3 scripts/json_to_edl.py Master_Semantic_Map.json -o Final_Edit.edl

# With V.E.O. breath-room padding (0.15s pre, 0.25s post)
python3 scripts/json_to_edl.py Master_Semantic_Map.json \
  -o Final_Edit.edl \
  --pre-roll 0.15 \
  --post-roll 0.25 \
  --fps 24 \
  --title "Tutorial Final Cut" \
  --source "tutorial_raw.mp4"
```

## Bundled Scripts

| Script | Phase | Purpose |
|--------|-------|---------|
| `scripts/extract_audio.sh` | 1 | Extract mono WAV + video metadata from raw footage |
| `scripts/srt_to_json.py` | 2 | Convert SRT/VTT subtitles to normalized JSON |
| `scripts/json_to_edl.py` | 3 | Convert pruned JSON to CMX 3600 EDL with optional padding |

### json_to_edl.py options

| Flag | Default | Description |
|------|---------|-------------|
| `-o, --output` | `output.edl` | Output EDL file path |
| `--fps` | `24` | Frame rate for SMPTE timecodes |
| `--title` | `A_ROLL_CULL` | Title written into EDL header |
| `--source` | `source_video.mp4` | Source clip name for EDL events |
| `--pre-roll` | `0.0` | Breath-room padding before each clip (V.E.O. default: 0.15s) |
| `--post-roll` | `0.0` | Breath-room padding after each clip (V.E.O. default: 0.25s) |

### srt_to_json.py options

| Flag | Default | Description |
|------|---------|-------------|
| `-o, --output` | stdout | Output JSON file path |
| `--format` | `auto` | Force input format: `srt`, `vtt`, or `auto`-detect |

### extract_audio.sh options

```bash
./scripts/extract_audio.sh INPUT_VIDEO [OUTPUT_DIR]
```

## Outputs

| Output | Format | What it's for |
|--------|--------|---------------|
| `audio_mono.wav` | PCM 16kHz mono | Feed to Whisper or any speech-to-text engine |
| `video_specs.json` | JSON | FPS, duration, codec, resolution for accurate EDL timecodes |
| `Master_Semantic_Map.json` | JSON | Tagged transcript with confidence scores and reasoning |
| `Final_Edit.edl` | CMX 3600 | Import into DaVinci Resolve, Premiere Pro, Final Cut Pro, Avid |
| `Edit_Summary.txt` | Text | Production log: kept/cut/review counts, duration saved |

### Sample EDL output

```
TITLE: Tutorial Final Cut
FCM: NON-DROP FRAME

001  AX       V     C        00:00:01:03 00:00:05:19 00:00:00:00 00:00:04:15
* FROM CLIP NAME: tutorial_raw.mp4
* REASON: Core introduction
* TEXT: Welcome to today's session on AI development.
```

### Sample Edit Summary

```
V.E.O. Edit Summary
====================
Source:            tutorial_raw.mp4
Original duration: 47m 27.3s
Final duration:    32m 12.8s
Duration saved:    15m 14.5s (32.1%)

Segments: 142 total, 87 kept, 48 cut, 7 review
Cut breakdown: 23 retakes, 14 filler, 11 dead air

[REVIEW] Segments (human decision required):
  #34 (05:12.3 - 05:18.7) "This approach might work, or maybe..."
  #67 (12:44.1 - 12:51.0) "Let me think about this differently..."
```

## Importing into Your NLE

| Editor | How to import |
|--------|---------------|
| **DaVinci Resolve** | File > Import > Timeline > EDL... Select your `.edl` file |
| **Adobe Premiere Pro** | File > Import... Select the `.edl` file. Match source clip name. |
| **Final Cut Pro** | File > Import > XML/EDL. Use the "CMX 3600" option. |
| **Avid Media Composer** | File > Import... Select EDL. Map source reel names. |

After importing, link the EDL events to your original video file. The timecodes reference positions in your source footage.

## Full Pipeline Example

Here's the complete workflow from raw video to final timeline:

```bash
# Phase 1: Extract audio + metadata
./scripts/extract_audio.sh interview_raw.mp4

# Phase 2: Generate transcript (run Whisper)
whisper audio_mono.wav --model medium --output_format srt

# Phase 2: Convert SRT to JSON
python3 scripts/srt_to_json.py audio_mono.srt -o transcript.json

# Phase 2: Tell your AI agent to analyze
# "Analyze transcript.json for retakes, filler, dead air.
#  Output a Master_Semantic_Map.json with tags and confidence scores."

# Phase 3: Generate EDL from the semantic map
python3 scripts/json_to_edl.py Master_Semantic_Map.json \
  -o Final_Edit.edl \
  --pre-roll 0.15 \
  --post-roll 0.25 \
  --fps 24 \
  --source "interview_raw.mp4"

# Import Final_Edit.edl into your NLE
```

Or simply tell your AI agent:

```
"I just finished recording interview_raw.mp4. Walk me through the full
V.E.O. pipeline — extract audio, I'll run Whisper, then analyze the
transcript and give me a Final EDL and Edit Summary for DaVinci Resolve."
```

## Requirements

- **Python 3.8+** (for bundled scripts)
- **FFmpeg + FFprobe** (for Phase 1 audio extraction)
- **Whisper or equivalent** (for Phase 2 transcription — optional if you provide your own SRT)
- No pip dependencies — all scripts use Python standard library only

## What Gets Cut vs. Flagged

| Category | Detection threshold | What happens |
|----------|-------------------|--------------|
| **Human markers** | Speaker says "cut that," "let's try again," etc. | Obeys speaker intent immediately |
| **Retakes** | >85% text similarity within 60s | Earlier takes cut, last take kept |
| **Filler words** | >50% of block is filler (um, uh, like, you know) | Block removed |
| **Dead air** | >1.2 seconds of silence | Removed (>5s also marks scene break) |
| **Ambiguous** | Below 70% confidence | Flagged `[REVIEW]` — never auto-cut |
