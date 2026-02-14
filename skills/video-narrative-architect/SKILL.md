---
name: video-narrative-architect
description: A-Roll structural culling and semantic editing for video post-production. Analyzes SRT/VTT/JSON transcripts to identify retakes, filler words, dead air, and human markers — then outputs surgical-grade EDL timelines and FFmpeg commands. Use when a user provides a transcript or subtitle file and asks to "cull A-Roll," "clean up the edit," "remove retakes," or "generate an EDL from this transcript."
---

# Video Narrative Architect

## Core Principle

Distill human intent from raw footage. The speaker's last take is almost always the keeper. Vocal cues ("let's try that again") are higher-priority instructions than any algorithm. Every cut must justify itself with a reasoning tag — if confidence is below 90%, flag for human review instead of cutting.

## Cognitive Workflow

### Step 1: Intake and Semantic Chunking

```
Input arrives → Identify format
  ├─ .srt / .vtt → Parse into timed text segments
  ├─ .json (transcript) → Parse start/end/text fields
  └─ Raw text + separate timecodes → Merge into unified structure

Then:
  1. Group consecutive subtitle lines into "Meaning Blocks"
     (a complete thought, not just a time segment)
  2. Normalize timestamps to seconds (float, 3 decimal places)
  3. Build a working data structure:
     { "blocks": [{ "id", "start", "end", "text", "tags": [] }] }
```

### Step 2: Pruning Logic

Apply these heuristics in order. Tag each block — never delete without tagging first.

| Heuristic | Detection | Action | Tag |
|-----------|-----------|--------|-----|
| **Human Markers** | Phrases: "let's try that again," "cut that," "this one's good," "take two," "from the top," "actually..." | Obey the speaker's intent. Keep what they approve, flag what they reject. | `MARKER_KEEP` or `MARKER_CUT` |
| **Final Take Rule** | Two or more blocks with >80% text similarity within 60s | Keep ONLY the last occurrence (assumed best take). Cut earlier attempts. | `RETAKE_KEEP` / `RETAKE_CUT` |
| **Filler Clusters** | Consecutive fillers: "uh," "um," "you know," "like," "so," "I mean" occupying >50% of a block | Remove the block entirely. | `FILLER_CUT` |
| **Dead Air** | Silence or empty text >2.0 seconds | Remove. If >5.0 seconds, also insert a scene break marker. | `DEAD_AIR_CUT` |
| **Low Confidence** | Any block where none of the above apply cleanly, or similarity is 50-80% | Do NOT cut. Flag for human review. | `REVIEW_REQUIRED` |

**Safety guard:** Never cut a block unless the redundancy/filler confidence exceeds 90%. When in doubt, tag `REVIEW_REQUIRED`.

### Step 3: Padding (Breath-Room Algorithm)

After pruning, apply padding to every kept block:

```
Pre-roll:  0.2s before the block's start time
Post-roll: 0.3s after the block's end time

Constraints:
  - Pre-roll cannot go below 0.0s
  - Post-roll cannot exceed source duration (if known)
  - If two kept blocks overlap after padding, merge them into one
  - If gap between two kept blocks > 5.0s, treat as separate scenes
```

### Step 4: Output Generation

Produce three outputs:

**1. Pruned JSON** — The filtered block list with tags and reasoning:
```json
{
  "source": "filename.srt",
  "total_blocks": 142,
  "kept_blocks": 87,
  "cut_blocks": 48,
  "review_blocks": 7,
  "duration_saved_seconds": 234.5,
  "clips": [
    {
      "id": 1,
      "start": 1.2,
      "end": 5.8,
      "text": "Welcome to today's session...",
      "action": "KEEP",
      "reason": "Core introduction"
    }
  ]
}
```

**2. EDL (CMX 3600)** — Industry-standard edit decision list. Use the bundled script:
```bash
python3 scripts/json_to_edl.py < pruned_output.json
# Produces: output.edl
```

**3. Production Log** — Human-readable summary:
```
A-Roll Cull Report
==================
Source:           raw_interview.mp4
Transcript:       raw_interview.srt
Total segments:   142
Kept:             87 (61.3%)
Cut:              48 (33.8%)
Review required:  7  (4.9%)
Duration saved:   3m 54.5s
```

## FFmpeg Reference

### Extract a single clip (lossless)
```bash
ffmpeg -i source.mp4 -ss {start} -to {end} -c copy -avoid_negative_ts make_zero clip_{id}.mp4
```

### Concatenate kept clips
```bash
# 1. Generate file list
for clip in clip_*.mp4; do echo "file '$clip'" >> filelist.txt; done

# 2. Concatenate (lossless)
ffmpeg -f concat -safe 0 -i filelist.txt -c copy final_aroll.mp4
```

### Re-encode with consistent codec (when lossless concat fails)
```bash
ffmpeg -f concat -safe 0 -i filelist.txt -c:v libx264 -crf 18 -preset slow -c:a aac -b:a 192k final_aroll.mp4
```

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

### JSON Transcript Input
```json
{
  "segments": [
    { "start": 1.2, "end": 5.8, "text": "Welcome to today's session on AI development." },
    { "start": 6.1, "end": 8.4, "text": "Um, so, let's get started." }
  ]
}
```

## Human Marker Vocabulary

These phrases signal speaker intent. Match case-insensitively and with fuzzy tolerance:

| Marker Phrase | Intent | Action |
|---------------|--------|--------|
| "Let's try that again" | Redo — previous take is bad | Cut the preceding block |
| "From the top" | Full restart | Cut everything since last scene break |
| "Cut that" / "Delete that" | Explicit rejection | Cut the preceding block |
| "This one's good" / "That's the one" | Explicit approval | Tag `MARKER_KEEP`, high confidence |
| "Take two" / "Take three" | Numbered retake | Keep highest-numbered take only |
| "Actually..." (mid-sentence restart) | Self-correction | Keep the post-"actually" version |
| "Moving on" / "Next section" | Scene transition | Insert scene break marker |

## Anti-Patterns

| Anti-Pattern | Why It Hurts | Do This Instead |
|---|---|---|
| Cutting on subtitle boundaries instead of meaning boundaries | Splits mid-thought, produces jarring edits | Group into semantic meaning blocks first |
| Keeping the first take instead of the last | First attempts are usually warm-ups | Apply Final Take Rule — last take wins |
| Hard-cutting without padding | Robotic, unnatural pacing | Always apply 0.2s pre / 0.3s post padding |
| Deleting ambiguous segments | Loses potentially good content | Tag `REVIEW_REQUIRED` if confidence < 90% |
| Generating FFmpeg commands without verifying timestamps | Off-by-one errors, black frames | Validate start < end, no negative timestamps |
| Ignoring speaker markers | Overrides human creative intent | Human markers are highest-priority instructions |

## Power Move

"Here's my raw interview transcript (SRT). Analyze it for retakes, filler, and dead air. Generate a pruned JSON with reasoning tags, a CMX 3600 EDL, and a production log showing how much time was saved. Flag anything you're not confident about for my review."
