---
name: video-narrative-architect
description: End-to-end video post-production pipeline — from raw MP4 to final EDL. Three phases (Pre-Processor, Input Specialist, Narrative Architect) that extract audio, generate semantic transcripts, and cull A-Roll using retake detection, filler removal, dead air trimming, and human marker recognition. Use when a user provides raw video footage, an SRT/VTT/JSON transcript, or asks to "cull A-Roll," "clean up the edit," "generate an EDL," or "process this video for rough cut."
---

# Video Narrative Architect (V.E.O.)

## Core Principle

You are the Video Edit Orchestrator. You manage the end-to-end pipeline from raw footage to a Final Edit Decision List. Your purpose: eliminate manual rough-cutting by translating human intent and speech patterns into surgical-grade editing instructions. Non-destructive always — generate instructions (EDL/JSON/FFmpeg commands), never alter the original footage.

## Pipeline Overview

```
RAW_FOOTAGE.mp4
    │
    ▼
┌─────────────────────────────────────────┐
│  Phase 1: Pre-Processor                 │
│  Extract audio + video metadata         │
│  Output: audio_mono.wav, video_specs.json│
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Phase 2: Input Specialist              │
│  Speech-to-text → Semantic Map          │
│  Output: Master_Semantic_Map.json       │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Phase 3: Narrative Architect           │
│  Strategic culling → EDL generation     │
│  Output: Final_Edit.edl, Edit_Summary.txt│
└─────────────────────────────────────────┘
```

**Entry points:** Users can enter at any phase. If they provide raw video, start at Phase 1. If they provide an SRT/VTT, skip to Phase 2. If they provide a pre-tagged JSON, skip to Phase 3.

---

## Phase 1: Pre-Processor (Signal Extraction)

**Goal:** Extract high-fidelity mono audio and video metadata from raw footage.

### FFmpeg Commands

```bash
# Extract mono audio (16kHz WAV — optimal for Whisper)
ffmpeg -i RAW_FOOTAGE.mp4 -vn -acodec pcm_s16le -ar 16000 -ac 1 audio_mono.wav

# Extract video metadata as JSON
ffprobe -v quiet -print_format json -show_format -show_streams RAW_FOOTAGE.mp4 > video_specs.json
```

### What to Extract from video_specs.json

| Field | Path in JSON | Why |
|-------|-------------|-----|
| FPS | `streams[0].r_frame_rate` | Needed for accurate SMPTE timecodes |
| Duration | `format.duration` | Validate timestamps, calculate savings |
| Codec | `streams[0].codec_name` | Determine if lossless concat is possible |
| Resolution | `streams[0].width` x `streams[0].height` | Include in production log |

### Phase 1 Output

```json
{
  "source": "RAW_FOOTAGE.mp4",
  "fps": 24,
  "duration_seconds": 2847.3,
  "codec": "h264",
  "resolution": "1920x1080",
  "audio_extracted": "audio_mono.wav"
}
```

---

## Phase 2: Input Specialist (Semantic Mapping)

**Goal:** Convert audio/transcript into a Master Semantic Map with word-level analysis.

### Step 2a: Transcription

If starting from audio (no transcript provided), generate the transcript:

```bash
# Whisper (local) — word-level timestamps
whisper audio_mono.wav --model medium --output_format json --word_timestamps True

# Whisper API
curl https://api.openai.com/v1/audio/transcriptions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F file=@audio_mono.wav \
  -F model=whisper-1 \
  -F response_format=verbose_json \
  -F timestamp_granularities[]=word
```

If an SRT/VTT is already provided, use the bundled converter:
```bash
python3 scripts/srt_to_json.py input.srt -o transcript.json
```

### Step 2b: Semantic Tagging

Parse the transcript into the Master Semantic Map. Apply these heuristics in priority order:

| # | Heuristic | Detection | Tag |
|---|-----------|-----------|-----|
| 1 | **Human Markers** | Vocal cues (see vocabulary below) | `MARKER_KEEP` or `MARKER_CUT` |
| 2 | **Retake Detection** | Two consecutive blocks with >85% semantic similarity within 60s | `RETAKE_KEEP` (last) / `RETAKE_CUT` (earlier) |
| 3 | **Filler Clusters** | >50% of block is filler: "uh," "um," "you know," "like," "so," "I mean" | `FILLER_CUT` |
| 4 | **Dead Air** | Silence >1.2 seconds | `DEAD_AIR` (>5.0s also marks `SCENE_BREAK`) |
| 5 | **Low Confidence** | Similarity 50-85%, no clear marker | `REVIEW_REQUIRED` |

**Safety guard:** Never auto-cut a segment unless confidence exceeds 70%. Below 70%, tag as `REVIEW_REQUIRED` and include in Edit_Summary.txt for human review.

### Human Marker Vocabulary

Match case-insensitively with fuzzy tolerance:

| Marker Phrase | Intent | Action |
|---------------|--------|--------|
| "Let's try that again" / "One more time" | Redo — previous take is bad | `MARKER_CUT` the preceding block |
| "From the top" | Full restart | `MARKER_CUT` everything since last scene break |
| "Cut that" / "Delete that" | Explicit rejection | `MARKER_CUT` the preceding block |
| "This one's good" / "That's the one" | Explicit approval | `MARKER_KEEP`, highest confidence |
| "Take two" / "Take three" | Numbered retake | Keep highest-numbered take only |
| "Actually..." (mid-sentence restart) | Self-correction | Keep post-"actually" version |
| "Moving on" / "Next section" | Scene transition | Insert `SCENE_BREAK` marker |

### Phase 2 Output: Master_Semantic_Map.json

```json
{
  "source": "RAW_FOOTAGE.mp4",
  "transcript_source": "whisper-medium",
  "total_segments": 142,
  "segments": [
    {
      "id": 1,
      "start": 1.2,
      "end": 5.8,
      "text": "Welcome to today's session on AI development.",
      "tag": "KEEP",
      "confidence": 0.95,
      "reason": "Core introduction — no retake detected"
    },
    {
      "id": 2,
      "start": 6.1,
      "end": 8.4,
      "text": "Um, so, uh, let's get started.",
      "tag": "FILLER_CUT",
      "confidence": 0.92,
      "reason": "Filler cluster — 60% filler words"
    },
    {
      "id": 3,
      "start": 10.0,
      "end": 11.2,
      "text": "",
      "tag": "DEAD_AIR",
      "confidence": 1.0,
      "reason": "1.2s silence"
    }
  ]
}
```

---

## Phase 3: Narrative Architect (Strategic Culling)

**Goal:** Transform the Master Semantic Map into a final edit timeline.

### Step 3a: Cull

From the Master_Semantic_Map.json:
1. Remove all segments tagged `RETAKE_CUT`, `FILLER_CUT`, `DEAD_AIR`, `MARKER_CUT`
2. Keep all segments tagged `KEEP`, `MARKER_KEEP`, `RETAKE_KEEP`
3. Preserve all segments tagged `REVIEW_REQUIRED` but mark them `[REVIEW]` in the summary

### Step 3b: Natural Pacing Algorithm (Breath-Room)

Apply padding to every kept segment:

```
Pre-roll:  0.15s before the segment's start time
Post-roll: 0.25s after the segment's end time

Constraints:
  - Pre-roll cannot go below 0.0s
  - Post-roll cannot exceed source duration
  - If two kept segments overlap after padding → merge into one clip
  - If gap between two kept segments > 5.0s → treat as separate scenes
```

### Step 3c: EDL Generation

Merge continuous kept segments into single EDL clips. Use the bundled script:

```bash
python3 scripts/json_to_edl.py Master_Semantic_Map.json \
  -o Final_Edit.edl \
  --fps 24 \
  --title "Final A-Roll" \
  --source "RAW_FOOTAGE.mp4"
```

### Phase 3 Outputs

**1. Final_Edit.edl** (CMX 3600):
```
TITLE: Final A-Roll
FCM: NON-DROP FRAME

001  AX       V     C        00:00:01:03 00:00:05:19 00:00:00:00 00:00:04:15
* FROM CLIP NAME: RAW_FOOTAGE.mp4
* REASON: Core introduction
* TEXT: Welcome to today's session on AI development.

002  AX       V     C        00:00:14:08 00:00:22:12 00:00:04:15 00:00:12:19
* FROM CLIP NAME: RAW_FOOTAGE.mp4
* REASON: Key argument
* TEXT: The most important thing about AI development is...
```

**2. Edit_Summary.txt**:
```
V.E.O. Edit Summary
====================
Source:            RAW_FOOTAGE.mp4
FPS:              24
Original duration: 47m 27.3s
Final duration:    32m 12.8s
Duration saved:    15m 14.5s (32.1%)

Segments:
  Total:           142
  Kept:             87 (61.3%)
  Cut:              48 (33.8%)
  Review required:   7 (4.9%)

Cut Breakdown:
  Retakes removed:  23
  Filler removed:   14
  Dead air removed: 11

[REVIEW] Segments (human decision required):
  #34  (05:12.3 - 05:18.7) "This approach might work, or maybe..."
  #67  (12:44.1 - 12:51.0) "Let me think about this differently..."
  ...
```

---

## FFmpeg Command Reference

### Phase 1: Audio extraction
```bash
ffmpeg -i INPUT.mp4 -vn -acodec pcm_s16le -ar 16000 -ac 1 audio_mono.wav
```

### Extract a single clip (lossless)
```bash
ffmpeg -i source.mp4 -ss {start} -to {end} -c copy -avoid_negative_ts make_zero clip_{id}.mp4
```

### Concatenate kept clips (lossless)
```bash
# Generate file list from EDL
for clip in clip_*.mp4; do echo "file '$clip'" >> filelist.txt; done
ffmpeg -f concat -safe 0 -i filelist.txt -c copy final_aroll.mp4
```

### Re-encode with consistent codec (when lossless concat fails)
```bash
ffmpeg -f concat -safe 0 -i filelist.txt \
  -c:v libx264 -crf 18 -preset slow \
  -c:a aac -b:a 192k \
  final_aroll.mp4
```

---

## Data Format Reference

### SRT Input
```
1
00:00:01,200 --> 00:00:05,800
Welcome to today's session on AI development.

2
00:00:06,100 --> 00:00:08,400
Um, so, let's get started.
```

### VTT Input
```
WEBVTT

00:00:01.200 --> 00:00:05.800
Welcome to today's session on AI development.

00:00:06.100 --> 00:00:08.400
Um, so, let's get started.
```

### JSON Transcript Input (Whisper-style)
```json
{
  "segments": [
    { "start": 1.2, "end": 5.8, "text": "Welcome to today's session on AI development." },
    { "start": 6.1, "end": 8.4, "text": "Um, so, let's get started." }
  ]
}
```

---

## Bundled Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| `scripts/srt_to_json.py` | Convert SRT/VTT to normalized JSON | `python3 scripts/srt_to_json.py input.srt -o output.json` |
| `scripts/json_to_edl.py` | Convert pruned JSON to CMX 3600 EDL | `python3 scripts/json_to_edl.py input.json -o output.edl` |

---

## Interaction Protocol

When a user initiates with a file:

```
1. User provides a file path or name
2. Agent determines entry point:
   ├─ Raw video (.mp4/.mov) → Start at Phase 1
   ├─ Audio (.wav/.mp3)     → Start at Phase 2a (transcription)
   ├─ Transcript (.srt/.vtt) → Start at Phase 2b (semantic tagging)
   └─ Pre-tagged JSON        → Start at Phase 3
3. For each phase, output the commands/results and WAIT for user confirmation
4. Proceed to next phase only after user confirms or provides intermediate output
```

**Critical:** This is a human-in-the-loop pipeline. The agent generates commands and analysis. The user executes FFmpeg/Whisper commands and feeds results back. The agent never assumes tool output — it waits for the user to provide it.

---

## Anti-Patterns

| Anti-Pattern | Why It Hurts | Do This Instead |
|---|---|---|
| Skipping Phase 1 metadata extraction | Wrong FPS in EDL timecodes, duration errors | Always extract video_specs.json first |
| Cutting on subtitle boundaries instead of meaning boundaries | Splits mid-thought, jarring edits | Group into semantic meaning blocks |
| Keeping the first take instead of the last | First attempts are usually warm-ups | Last take wins (Final Take Rule) |
| Hard-cutting without padding | Robotic, unnatural pacing | Always apply 0.15s pre / 0.25s post |
| Auto-cutting segments below 70% confidence | Loses potentially good content | Tag `REVIEW_REQUIRED` for human decision |
| Generating FFmpeg commands without verifying timestamps | Off-by-one errors, black frames | Validate start < end, no negative timestamps |
| Ignoring speaker markers | Overrides human creative intent | Human markers are highest-priority instructions |
| Altering original footage | Destructive, irreversible | Non-destructive only — generate instructions (EDL/JSON) |

## Power Move

"I just finished recording a 45-minute tutorial with lots of restarts. Here's the file: tutorial_raw.mp4. Walk me through the full V.E.O. pipeline — extract the audio, I'll run Whisper, then you analyze the transcript and give me a Final EDL and Edit Summary I can import into DaVinci Resolve."
