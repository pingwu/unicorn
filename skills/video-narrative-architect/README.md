---
name: video-narrative-architect-readme
description: User-facing guide for the Video Narrative Architect skill — inputs, outputs, setup, and examples.
---

# Video Narrative Architect

**A-Roll structural culling powered by AI.** Give it a transcript, get back a clean edit decision list.

This skill turns your AI coding agent into a post-production assistant that analyzes raw video transcripts, identifies retakes, filler words, and dead air, then outputs a surgical-grade timeline you can import into any NLE (Non-Linear Editor).

## What It Does

| Step | What happens |
|------|-------------|
| **1. Intake** | Reads your SRT, VTT, or JSON transcript |
| **2. Semantic analysis** | Groups subtitle lines into meaning blocks (complete thoughts, not just time segments) |
| **3. Pruning** | Identifies retakes (keeps last take), filler clusters (um, uh), dead air (>2s silence), and human markers ("let's try that again") |
| **4. Output** | Generates a pruned JSON, CMX 3600 EDL, and production log with time saved |

## Inputs

You need **one** of these:

| Format | Extension | Example source |
|--------|-----------|----------------|
| SubRip subtitles | `.srt` | YouTube auto-captions, Whisper, Descript |
| WebVTT subtitles | `.vtt` | Browser-based tools, Zoom recordings |
| JSON transcript | `.json` | Whisper API, AssemblyAI, Deepgram, custom pipelines |

### JSON transcript format

If using JSON, your file should have a `segments` array:

```json
{
  "segments": [
    { "start": 1.2, "end": 5.8, "text": "Welcome to today's session on AI development." },
    { "start": 6.1, "end": 8.4, "text": "Um, so, let's get started." },
    { "start": 9.0, "end": 14.2, "text": "Let's try that again. Welcome to the session." }
  ]
}
```

## Outputs

| Output | Format | What it's for |
|--------|--------|---------------|
| **Pruned JSON** | `.json` | Machine-readable clip list with reasoning tags — use for further automation |
| **EDL** | `.edl` (CMX 3600) | Import into DaVinci Resolve, Premiere Pro, Final Cut Pro, or any NLE |
| **Production Log** | Text summary | Quick overview: how many clips kept/cut/flagged, total time saved |

### Sample EDL output

```
TITLE: A_ROLL_CULL
FCM: NON-DROP FRAME

001  AX       V     C        00:00:01:04 00:00:05:19 00:00:00:00 00:00:04:14
* FROM CLIP NAME: source_video.mp4
* REASON: Core introduction
* TEXT: Welcome to today's session on AI development.
```

## How to Use

### With your AI agent (natural language)

Just describe what you need:

```
"Here's my interview transcript. Analyze it for retakes and filler, 
then generate an EDL I can import into DaVinci Resolve."
```

```
"Clean up this SRT file — remove the repeated takes, cut the ums, 
and show me what you'd keep vs. cut."
```

```
"I recorded a 45-minute tutorial with lots of restarts. 
Here's the Whisper JSON output. Cull the A-Roll and give me the production log."
```

### With the bundled script (CLI)

The `scripts/json_to_edl.py` tool converts the pruned JSON to EDL:

```bash
# From stdin
python3 scripts/json_to_edl.py < pruned_output.json

# From file with options
python3 scripts/json_to_edl.py pruned_output.json \
  -o timeline.edl \
  --fps 30 \
  --title "Interview A-Roll" \
  --source "raw_interview.mp4"
```

**Options:**

| Flag | Default | Description |
|------|---------|-------------|
| `-o, --output` | `output.edl` | Output EDL file path |
| `--fps` | `24` | Frame rate for SMPTE timecodes |
| `--title` | `A_ROLL_CULL` | Title written into EDL header |
| `--source` | `source_video.mp4` | Source clip name for EDL events |

## Importing into Your NLE

| Editor | How to import |
|--------|---------------|
| **DaVinci Resolve** | File > Import > Timeline > EDL... Select your `.edl` file |
| **Adobe Premiere Pro** | File > Import... Select the `.edl` file. Match source clip name. |
| **Final Cut Pro** | File > Import > XML/EDL. Use the "CMX 3600" option. |
| **Avid Media Composer** | File > Import... Select EDL. Map source reel names. |

After importing, link the EDL events to your original video file. The timecodes reference positions in your source footage.

## Typical Workflow

```
1. Record your video (interview, tutorial, talking head)
2. Generate a transcript:
   - Whisper:   whisper raw_video.mp4 --output_format srt
   - Descript:  Export > SRT
   - YouTube:   Download auto-captions as .srt
3. Give the transcript to your AI agent with this skill
4. Review the production log and any "REVIEW_REQUIRED" flags
5. Import the EDL into your editor
6. Fine-tune the edit (the AI got you 80-90% there)
```

## What Gets Cut vs. Flagged

| Category | Confidence threshold | What happens |
|----------|---------------------|--------------|
| **Retakes** | >80% text similarity within 60s | Earlier takes cut, last take kept |
| **Filler words** | >50% of block is filler (um, uh, like, you know) | Block removed |
| **Dead air** | >2.0 seconds of silence | Removed (>5s also marks scene break) |
| **Human markers** | Speaker says "cut that," "let's try again," etc. | Obeys speaker intent immediately |
| **Ambiguous** | 50-80% similarity, unclear intent | Flagged `REVIEW_REQUIRED` — never auto-cut |

## Requirements

- **Python 3.10+** (for the `json_to_edl.py` script)
- **FFmpeg** (optional, for extracting/concatenating video clips)
- No other dependencies — the script uses only Python standard library

## Generating Transcripts

If you don't have a transcript yet, here are common tools:

| Tool | Command / Method | Output |
|------|-----------------|--------|
| [Whisper](https://github.com/openai/whisper) | `whisper video.mp4 --output_format srt` | `.srt` |
| [Whisper API](https://platform.openai.com/docs/guides/speech-to-text) | POST to `/v1/audio/transcriptions` | `.json` or `.srt` |
| [Descript](https://www.descript.com/) | Import video, then Export > SRT | `.srt` |
| [AssemblyAI](https://www.assemblyai.com/) | API or web upload | `.json` |
| YouTube | Upload as unlisted, download auto-captions | `.srt` |
