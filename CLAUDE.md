# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Unicorn Project is a solopreneur development framework using AI-assisted development. It follows a "Head and Hand" philosophy:
- **Head** (`/knowledge/`): Obsidian-based PKM system for contacts, companies, daily logs, ideas
- **Hand** (`/projects/`): Actual project codebases (e.g., `agentic-landing-template`)

Read `AGENTS.md` for the full master constitution, C-suite "Office" structure, and development philosophy.

## Setup After Cloning

See **AGENTS.md § 5** for the full post-clone workflow (symlink skills, start dev container). All dev tools live inside the template container — never install on the host.

## Repository Structure

```
unicorn/
├── knowledge/           # Obsidian vault (PKM)
├── projects/            # Sub-projects (the actual work)
│   └── agentic-landing-template/  # Next.js 16 landing page template
├── skills/              # Agent-agnostic prompting patterns (canonical location)
├── .gemini/skills/      # Symlink → skills/ (for Gemini CLI)
├── .claude/skills/      # Symlink → skills/ (for Claude Code)
├── AGENTS.md            # Master constitution (authoritative reference)
├── CLAUDE.md            # This file
└── GEMINI.md            # Gemini CLI system prompt
```

## Development Principles

- **Container-first development.** All projects run inside Docker containers. Use `docker:dev` for local development, not bare-metal `npm run dev`. Additional tools and scripts should run inside a sandbox container as the first choice.
- **Vendor CLIs over custom scripts.** Use official CLI tools for SaaS/IaaS interaction: `gh` (GitHub), `aws` (AWS), `gcloud` (GCP), `az` (Azure). Prefer these over REST API calls or custom automation scripts.
- **TDD, BDD, MVP-first.** Write tests before implementation, use BDD with Gherkin specs where applicable, and build the simplest version that validates the concept.

## Agentic Landing Template (Primary Project)

Located at `projects/agentic-landing-template/`. Next.js 16 + React 19 + TypeScript 5.9 + Tailwind CSS 4.

### Commands

All commands run from `projects/agentic-landing-template/`:

```bash
# Development (container-first)
npm run docker:dev        # Docker dev container with hot-reload (primary workflow)
npm run docker:shell      # Shell into dev container
npm run docker:logs       # View container logs
npm run docker:status     # Check container status

# Quality (run inside container or via docker:shell)
npm run test              # Vitest in watch mode
npm run test:run          # Vitest single run (CI)
npm run lint              # ESLint (flat config, ESLint 9)
npm run typecheck         # TypeScript strict mode check

# Production
npm run build             # Next.js production build
npm run docker:prod       # Test production build in container (port 3001)
npm run docker:down       # Stop containers
npm run docker:clean      # Remove containers and volumes
```

### Code Conventions

- **TypeScript**: Strict mode, ES2022 target, explicit types. Path alias `@/*` maps to project root.
- **React/Next.js**: Server Components by default. Only use `'use client'` when necessary. App Router.
- **Tailwind CSS**: Utility classes, dark mode compatible.
- **Docker**: Always use detached mode (`-d`). Node 20 Alpine, non-root user.
- **Next.js output**: `standalone` mode for Docker/App Runner deployment.

### Project Layout

- `app/` — Next.js App Router pages and layouts
- `components/` — Reusable React components
- `templates/` — Landing page content templates (services, portfolio, resume, enterprise)
- `docs/` — PRDs, deployment guides, tech stack docs

## Agent Skills

The `skills/` directory contains advanced prompting patterns usable with any AI agent. Reference them in prompts:

- `aws-cli-architect` — Cost-aware cloud infrastructure (AWS)
- `gcloud-expert` — Google Cloud Platform CLI
- `bdd-developer` — BDD with Gherkin feature files
- `test-driven-scaffolding` — Write tests before implementation
- `multi-file-architecture` — Coordinated multi-file changes
- `pm-design-thinking` — Product thinking, Jobs-to-be-Done
- `context-aware-debugging` — Structured debugging approach
- `git-expert` / `github-cli` — Git and GitHub workflows

Usage: Read the skill file (e.g., `skills/test-driven-scaffolding/SKILL.md`) then apply its patterns.
