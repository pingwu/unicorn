---
name: solo-unicorn-builder
description: Free, open-source AI command center for engineers who've never shipped end-to-end. 37 AI-powered skills spanning engineering, product, marketing, sales, finance, and operations — AI fills the gaps between your specialty and everything else it takes to go from requirement to production.
---

# Solo Unicorn Builder

**You're great at your specialty. But you've never shipped an application end-to-end — because someone else always handled the parts outside your lane.**

Solo Unicorn Builder is a free, open-source command center that gives you 37 AI-powered skills — spanning engineering, product, marketing, sales, finance, legal, and operations. AI fills the gaps between your expertise and everything else it takes to go from requirement to production.

## Who This Is For

**Engineers and technical specialists who can do their job — but have never carried an application from requirement to production on their own.** You're a frontend engineer who's never set up a CI/CD pipeline. A backend developer who's never written a PRD. A DevOps specialist who's never validated a product idea. A PM who's never deployed to the cloud.

You're good at what you do. But the work outside your specialty — requirements gathering, design, testing, deployment, marketing, legal, finance — was always someone else's job. That gap is what keeps you from building something end-to-end.

Solo Unicorn Builder fills that gap with AI. You bring the expertise in your domain. AI covers the rest — so you can finally ship the whole thing, not just your piece of it.

## Your AI-Augmented Team

The 37 skills are organized as an "Office" — each role is an AI-powered expert you can call on:

| Role | What it does for you | Example skills |
|------|---------------------|----------------|
| **CTO** | Architect, build, test, deploy | `multi-file-architecture`, `test-first-development`, `docker-expert`, `mcp-builder`, `webapp-testing` |
| **CPO** | Define what to build and for whom | `product`, `idea-validation`, `pm-design-thinking`, `frontend-ui-ux` |
| **CMO** | Position, brand, reach your audience | `marketing-brand`, `go-to-market`, `growth-analytics`, `generative-art` |
| **CRO** | Grow revenue, build partnerships | `sales`, `business-development`, `business-model` |
| **CFO** | Manage costs, plan finances | `finance-accounting`, `fundraising`, `aws-cli-architect` |
| **COO** | Run operations, build your career | `operations`, `career-resume`, `portfolio-strategy`, `document-creation` |

You don't need to hire a team. You need to ask the right questions — and let AI handle the execution. [Full list of 37 skills →](docs/skills-reference.md)

## Why This Exists

Here's the real problem:

- **Specialization created blind spots.** You've spent years going deep in one area. But shipping a product requires breadth — requirements, architecture, testing, deployment, marketing, legal, finance. Nobody taught you the other 80%.
- **AI can fill the gaps — but only with structure.** A chatbot can answer questions. It can't guide you through a product launch, a deployment pipeline, or a fundraising round — unless it has a framework for each one.
- **Your thinking is scattered.** A thread in ChatGPT, a conversation in Claude, notes in one app, code in another. Nothing connects.

Solo Unicorn Builder gives you 37 structured skills, a knowledge vault, and a project workspace — so AI can operate as your team across every function you've never done before.

## What You Get

When you clone this project, you get:

- **37 AI-powered skills** — Not just coding. Product development, sales, marketing, legal, finance, operations, and more. Just describe what you need and the AI applies the right expertise. [Full list →](docs/skills-reference.md)
- **A private knowledge vault** — Your ideas, notes, goals, technical decisions, and learning in one place. Never checked into the public repo. Ships with `template_knowledge/` as a starter — copied to your private `my_knowledge/` on init.
- **Starter projects you can build on** — `template_projects/` ships with example projects (like the landing page template) so you're not starting from zero. Your own work lives in `my_projects/` — build and ship real projects with AI-assisted workflows. A "project" can be anything: a blog post, a marketing research brief, a deployed web application, or an automated workflow.
- **AI agent vendor-agnostic** — Works with any CLI coding agent: Claude Code, Gemini CLI, Kiro CLI, Codex CLI, OpenCode, or any tool that reads markdown. No vendor lock-in. [Compare agents →](docs/coding-agents.md)

## Start Here

```bash
# Clone the project
git clone https://github.com/pingwu/solo-unicorn.git
cd solo-unicorn
```

Then start your [CLI coding agent](docs/coding-agents.md) and tell it:
**"Run the init unicorn setup"** — it will create your personal knowledge vault and connect the skills.

**Your first three moves:**
1. **"Build me a personal landing page"** → ship your first project using AI-paired development
2. **"Help me validate this idea"** → the AI uses `idea-validation` and `product` to pressure-test before you build
3. **Contribute back** → participate in the Solo Unicorn Builder project itself. Contributing to an open-source AI-native platform proves you can ship across multiple roles.

Or follow the manual setup in [INIT_UNICORN.md](INIT_UNICORN.md).

## Grow With Your Ambition

Solo Unicorn Builder meets you where you are — and scales with you.

| Stage | You're saying... | How it helps... |
|-------|-----------------|---------------------|
| **Learning the gaps** | "I've never done deployment / product / marketing" | AI walks you through each discipline with structured skills |
| **Building end-to-end** | "I want to ship something from scratch to production" | Architecture, testing, debugging, CI/CD, deployment |
| **Launching** | "I have something — now I need users" | Validate ideas, define your product, go to market |
| **Growing** | "I need to understand the business side" | Revenue models, partnerships, legal, finance, operations |
| **Getting hired** | "I want to prove I can build end-to-end with AI" | Portfolio projects, resume tailoring, GitHub presence |

## The Things AI Can't Do for You

1. **Ask your Why** — What is your core value? What are your ultimate goals?
2. **Listen to your audience, build trust** — Whether 1:1 or 1:many.
3. **Do and implement with meaningful impact** — Without 1 and 2, building is just busyness.

AI handles the heavy lifting. You handle the asking, listening, and trust-building. [Read more →](docs/philosophy.md)

## Contribute Your Skills

This is a community project. If you've solved a real problem for real people, package it as a skill and share it. [How to contribute →](docs/contributing.md)

## Learn More

- [Skills Reference](docs/skills-reference.md) — All 37 skills, organized by stage and category
- [Coding Agents](docs/coding-agents.md) — Compare Claude Code, Gemini CLI, Kiro CLI, OpenCode, and more
- [Philosophy](docs/philosophy.md) — The Ask, Listen, Do framework
- [Contributing](docs/contributing.md) — How to add your own skills
- [PING BOS on YouTube](https://www.youtube.com/@pingbos) — Tutorials and walkthroughs

## Attribution

- Framework based on *Just Ask* by Pinghsien Wu (to be published early March, 2026; To request a copy just ask [ask@ping-ai.com](mailto:ask@ping-ai.com?subject=Just%20Ask%20Unicorn))
- Skills architecture inspired by Anthropic's [knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins/) — an open-source framework for AI-augmented knowledge work.

## License

[MIT](LICENSE)
