> **Note:** This document is the local guide for the `agentic-landing-template` project. For the overarching philosophy and structure of the entire Unicorn organization, please see the **[Master Constitution](../../AGENTS.md)**.

# Agentic Landing Page Template

> **"When AI can do anything for you, what will you build?"**

This template teaches you to build and deploy cloud solutions with AI assistance — starting with your professional landing page.

**You'll learn**: Containers • Cloud Deployment • AI-Assisted Coding
**You'll build**: A live site that represents your professional brand
**You'll gain**: The confidence and skills to tackle your next, bigger idea

---

## Why This Exists

This isn't just a landing page template — it's your first step into building cloud-native, AI-assisted solutions.

### For Consultants & Professionals

Expand what you can offer clients by understanding the same tools your technical teams use. After this project, you'll speak the language of modern software development.

### For Students

Learn real-world deployment workflows used by companies worldwide. This is hands-on cloud computing, not just theory.

### For Builders & Founders

Validate ideas quickly. The same skills that deploy this landing page can deploy your MVP, prototype, or client demo.

### The Transformation

| Before | After |
|--------|-------|
| "I need someone to build my site" | "I can build and deploy it myself" |
| "Cloud deployment sounds complex" | "I understand containers and cloud services" |
| "AI coding tools are mysterious" | "I collaborate with AI to write code" |
| "What if I want to build something else?" | "I have the skills to try" |

---

## What You'll Learn

This project is structured as a learning journey with four phases:

| Phase | You'll Do | You'll Understand | Time |
|-------|-----------|-------------------|------|
| **1. Local Dev** | Run `npm run docker:dev` | How containers provide consistent dev environments | 10 min |
| **2. Customize** | Use AI prompts to edit content | How to collaborate with AI coding assistants | 30 min |
| **3. Preview Prod** | Run `npm run docker:prod` | Difference between dev and production builds | 10 min |
| **4. Deploy** | Push to AWS App Runner | How cloud services host your applications | 20 min |

**Total time to deployed site: ~1-2 hours**

### Learning Checkpoints

After each phase, you should be able to answer:

- **Phase 1**: "What is a container and why does it help development?"
- **Phase 2**: "How do I give AI assistants effective instructions?"
- **Phase 3**: "Why are production builds different from development?"
- **Phase 4**: "What happens when I deploy to the cloud?"

---

## Project Overview

**Project**: Agentic Landing Page Template
**Purpose**: Learn AI-assisted development by building something real
**Approach**: Container-first development
**Course**: [Your Course/Project Code]

### Use Cases

The default template works for:
- Consulting/Freelance services
- Professional portfolio
- Digital resume/CV
- Enterprise initiative communications

### Tech Stack

| Technology | What You'll Learn |
|------------|-------------------|
| **Next.js 16** | Modern React framework with App Router |
| **React 19** | Component-based UI development |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS 4** | Utility-first styling approach |
| **Docker** | Containerization for consistent environments |
| **AWS App Runner** | Managed cloud deployment |

---

## Getting Started

### Prerequisites

Before you begin, ensure you have:
- [ ] Docker Desktop installed ([download](https://www.docker.com/products/docker-desktop/))
- [ ] An AI coding assistant (Claude Code, Gemini CLI, or Codex)
- [ ] Basic comfort with terminal/command line
- [ ] A text editor (VS Code recommended)

### Phase 1: Local Development

**Goal**: Get the site running on your machine

```bash
# Navigate to the project directory
cd projects/agentic-landing-template

# Start the development container
npm run docker:dev

# Open http://localhost:3000
```

**What just happened?** Docker created an isolated environment with Node.js and all dependencies. Your code runs the same way on any machine — this is why companies use containers.

✅ **Checkpoint**: Can you see the landing page at localhost:3000?

### Phase 2: Customize with AI

**Goal**: Personalize the content using natural language

Open your AI assistant (Claude Code, Gemini CLI, or Codex) and try these prompts:

```
"Update the hero section with my name 'Your Name' and title 'Your Title'"
```

```
"Change the services section to list my three main offerings"
```

```
"Update the contact section with my email and LinkedIn"
```

**What just happened?** The AI read your code, understood the structure, and made targeted edits. You collaborated with AI to write code without writing code yourself.

✅ **Checkpoint**: Does the site reflect your personal brand?

### Phase 3: Production Preview

**Goal**: Test what will actually deploy to the cloud

```bash
# Stop development container
npm run docker:down

# Build and run production version
npm run docker:prod

# Open http://localhost:3001
```

**What just happened?** Docker built an optimized, smaller version of your site — the same thing that will run in the cloud. Production builds remove development tools and optimize for speed.

✅ **Checkpoint**: Does the production build look correct?

### Phase 4: Deploy to Cloud

**Goal**: Make your site live on the internet

See `docs/DEPLOYMENT-ROADMAP.md` for detailed AWS deployment steps.

Quick summary:
1. Push Docker image to AWS ECR (container registry)
2. Create App Runner service (managed hosting)
3. Get your public URL

**What just happened?** AWS is now running your container 24/7. When someone visits your URL, App Runner serves your site from the cloud.

✅ **Checkpoint**: Can you share your live URL with someone?

---

## Key Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `app/page.tsx` | Main landing page content | Customizing your content |
| `app/layout.tsx` | Site metadata, fonts | Changing title, description |
| `app/globals.css` | Global styles | Advanced styling |
| `components/` | Reusable UI components | Adding new features |
| `docker-compose.yml` | Container configuration | Rarely |
| `Dockerfile` | Production build config | Rarely |

---

## Agent Skills

This project utilizes the global Agent Skills defined in the **[Master Constitution's 'Office' Structure](../../AGENTS.md#4-the-office-structure-agent-skills)**. These skills, such as `aws-cli-architect`, `pm-design-thinking`, and `git-expert`, represent our 'virtual specialists' and can be invoked to assist with any development task.

### How to Use Skills

**Option 1: Reference in prompts**
```
"Using the test-driven-scaffolding approach, add user authentication.
Write the tests first, show me for approval, then implement."
```

**Option 2: Read skill file first**
```
"Read .gemini/skills/aws-cli-architect/SKILL.md, then help me provision
a production-ready ECS Fargate service following those patterns."
```

**Option 3: Ask agent to apply skill**
```
"Apply pm-design-thinking principles to this feature request:
'Add a dashboard'. What should I actually build?"
```

---

## Container Commands Reference

All container commands use **detached mode** (run in background):

| Command | Purpose |
|---------|---------|
| `npm run docker:dev` | Start development with hot-reload |
| `npm run docker:prod` | Test production build locally |
| `npm run docker:down` | Stop all containers |
| `npm run docker:status` | Check container status |
| `npm run docker:logs` | View container logs |
| `npm run docker:shell` | Open terminal in container |
| `npm run docker:clean` | Remove containers and volumes |

---

## Coding Standards

### TypeScript
- Use explicit types (avoid `any`)
- The AI assistant will help with type errors

### React/Next.js
- Server Components by default (no `'use client'`)
- Add `'use client'` only when needed (hooks, interactivity)
- Preserve accessibility attributes

### Tailwind CSS 4
- Use utility classes in JSX
- Maintain dark mode compatibility (`dark:` variants)

---

## Troubleshooting

### Docker won't start
- Ensure Docker Desktop is running
- Try: `npm run docker:clean` then `npm run docker:dev`

### Build fails
- Check terminal for specific error message
- Ask your AI assistant: "The build is failing with this error: [paste error]"

### Site looks broken
- Check browser console for errors
- Ensure you saved all files
- Try: `npm run docker:down && npm run docker:dev`

### AI changes broke something
- Use git to revert: `git checkout app/page.tsx`
- Start fresh: `git stash` to save changes, undo, try again

---

## Where to Go Next

This template is your starting point. The skills you've learned transfer to any project.

### What Past Users Have Built

> **Mark** started with this template, learned the fundamentals, and was inspired to build a **stock trading signal application** with backtesting. He deployed it to Vercel and is now exploring how to scale and market it.

Your next project could be:
- A client proposal or demo site
- An internal tool for your business
- A prototype to validate a new idea
- A dashboard or data visualization
- An AI-powered application

### Go Deeper with MACA

This template evolved from [**MACA (Multi-AI-Coding-Agent)**](https://github.com/pingwu/maca) — a comprehensive curriculum for AI-assisted development.

> *"The new professional superpower is not coding; it's orchestrating AI agents to build for you."*

MACA covers:
- 5 AI coding agents (Claude, Gemini, Cursor, Copilot, DeepAgent)
- 5 portfolio projects across different domains
- Advanced agent orchestration patterns

### Expanding Your Skills

| If You Want To... | Explore... |
|-------------------|------------|
| Add a database | Supabase, PlanetScale, or AWS RDS |
| Add authentication | NextAuth.js, Clerk, or Auth0 |
| Build an API | Next.js API routes or AWS Lambda |
| Add AI features | OpenAI API, Anthropic API, or AWS Bedrock |
| Deploy elsewhere | Vercel, Netlify, or AWS Amplify |

### The Question Remains

> **"When AI can do anything for you, what will you build?"**

You now have the foundation. The tools. The experience. What matters most to you?

---

## Constraints (What Not To Do)

### Do Not
- Run blocking container commands (always use `-d` flag or npm scripts)
- Remove accessibility attributes from HTML
- Delete TypeScript types without replacement
- Use deprecated Tailwind v3 patterns

### Always
- Use detached mode for container startup
- Keep TypeScript valid (ask AI to fix errors)
- Preserve mobile responsiveness
- Test changes before committing

---

## About This Project

**Course**: [Your Course/Project Code]
**Institution**: [Your Institution]
**Instructor**: [Your Name]
**Demo**: [Your Event/Date]

### Contributing

Found an issue? Have a suggestion?
- Open a GitHub issue
- Submit a pull request
- Share your success story

---

## Files That Delegate Here

These files point to this shared instruction set:
- `CLAUDE.md` — For Anthropic's Claude Code
- `GEMINI.md` — For Google's Gemini CLI
- `AGENT.md` — For other AI coding assistants
