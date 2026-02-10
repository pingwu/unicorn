# The Unicorn Project

**When AI can do anything for you, what will you build?**

Unicorn is your command center to realize your solopreneur unicorn.

## What Is This?

The Unicorn Project is a product incubator where you discover what to build, who to build for, and how to build it using AI. You will move from idea to deployed product through hands-on projects. It features the WRITITATION™ framework to guide your attention to find your interest, collect and synthesize knowledge, and create and release your ideas in the form of software applications, videos, blogs, lectures, speeches, books — anything that can be created via keyboard and mouse.

## The WRITITATION™ Framework

1. **Attention** — What keeps pulling at you?
2. **Capture** — Use AI to summarize. Save to your knowledge base.
3. **Synthesize** — Connect the dots. Form your own thoughts.
4. **Create** — Make something. Share it. Learn from the making.

## The Three Questions

Before you build anything, answer these:

### 1. DELETE -- What problem are you actually solving?

Strip away assumptions. What is the real pain point? What would happen if this product did not exist? If nothing changes, the problem is not worth solving.

### 2. DISTORT -- What is your unique value?

Reframe the problem. What perspective do you bring that nobody else does? Your solution does not need to be better at everything -- it needs to be different in a way that matters.

### 3. GENERALIZE -- Who needs this and how will you deliver?

Identify your audience and your delivery mechanism. A great idea with no path to users is just a journal entry.

## Repo Map

| Directory | Purpose |
|-----------|---------|
| `projects/agentic-landing-template/` | The build project (your hands) |
| `template_knowledge/` | Template for your personal knowledge vault (see below) |
| `skills/` | AI agent patterns (power tools) |

## Your Personal Knowledge Vault

When you initialize the Unicorn project for the first time, `template_knowledge/` is copied to `personal_knowledge/`. This becomes your private Obsidian vault for:

- Ideas and inventions
- Learning and study notes
- News and insights
- Relationships and people
- Daily reflections

**Important:** `personal_knowledge/` is git-ignored and should NOT be checked in. This is your private vault.

## Managing Your Projects

Each project in `projects/` should be tracked in its own separate git repository. This gives you full control over visibility (public or private) for each project independently.

### First Sample Project: `agentic-landing-template`

Your first project is a personal landing page powered by AI. It solves a common problem: you need a professional web presence but don't want to spend weeks building one from scratch. The template generates a polished landing page that tells your story and showcases your work.

To make it yours, update it with your own personal story and resume from your `personal_knowledge/` vault. Point your AI agent at your profile, goals, and resume files and ask it to rebuild the landing page content around you. The result is a deployed site that reflects who you are and what you're building.

### Creating New Projects

```bash
# 1. Add your project to .gitignore so it's not tracked by the parent repo
echo "projects/my-new-project/" >> .gitignore

# 2. Initialize and push to your own GitHub account
cd projects/my-new-project
git init
gh repo create my-new-project --private --source=. --push
```

Use `--private` for projects you want to keep private, or `--public` for open source projects.

## Getting Started

Follow [PING BOS](https://www.youtube.com/@pingbos) (Product Incubator Next Gen, Business Operating System) on YouTube for tutorials and walkthroughs.

## For AI Agents

Agent behavioral instructions are in:
- `AGENTS.md` -- Master agent constitution
- `CLAUDE.md` -- Claude Code system prompt
- `GEMINI.md` -- Gemini CLI system prompt

## Attribution

Framework based on *Just Ask* by Pinghsien Wu.

## License

[MIT](LICENSE)
