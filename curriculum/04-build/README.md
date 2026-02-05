# Phase 04: BUILD

**You Know What to Build and For Whom. Now Build It.**

---

## The Principle

You have completed the **Delete / Distort / Generalize** arc. You have a content brief built from honest self-examination, real audience research, and the Writitation practice. You know who you serve, what gap you fill, and what your landing page needs to say.

Now ship it.

> "You don't learn something until you create with it."

*From "Just Ask" by Pinghsien Wu, Chapter 6*

Phase 04 turns your content brief into a live, deployed landing page using the **Agentic Landing Template** -- a sovereign, open-source Next.js template that lives on your computer, in standard formats, under your control.

---

## What You Will Do

This phase has three steps:

| Step | Guide | What Happens |
|------|-------|-------------|
| 1. **Setup** | [setup.md](setup.md) | Clone the template, start the dev container, verify it runs |
| 2. **Customize** | [customize.md](customize.md) | Feed your content brief to the AI agent and customize the template |
| 3. **Deploy** | [deploy.md](deploy.md) | Build for production and deploy to the internet |

Each guide is a standalone walkthrough. Follow them in order.

---

## Prerequisites

Before starting Phase 04, confirm you have:

- [ ] A completed **content brief** from Lesson 9 (Just Ask)
- [ ] Docker installed on your machine
- [ ] A terminal (macOS, Linux, or Windows with WSL)
- [ ] A text editor or IDE

If you skipped any lessons, go back. The content brief is the input for everything that follows. A deployed page with unclear content is worse than no page at all -- it is lemon juice at scale.

---

## The Sovereign Approach

Everything you build in this phase:

- Lives on **your computer** as standard React / Next.js / TypeScript files
- Uses **no proprietary page builders** or SaaS lock-in
- Can be **deployed anywhere** -- AWS, Google Cloud, Vercel, or any hosting service
- Is **yours permanently**

The Agentic Landing Template is the starting point. You will customize it with your content, not with someone else's drag-and-drop interface. And because the template uses standard web technologies, you can modify, extend, or migrate it at any time.

---

## How Agentic Development Works Here

You will use AI agents to implement your content brief. The process:

1. **Describe what you want** in natural language -- paste your content brief and tell the agent what to build
2. **The agent writes the code** -- React components, Tailwind styles, content updates
3. **You review and refine** -- preview locally, adjust language, iterate

This is not "no-code." It is "your-code, AI-assisted." You own every file. You can read, edit, or rewrite anything the agent produces.

> "The new professional superpower is not coding; it's orchestrating AI agents to build for you."

---

## Quick Reference

**Tell your AI agent:**
```
"Start the dev container for the landing template"
"Open a shell inside the running container"
"Run all tests inside the container"
"Stop the container"
```

**CLI Reference:**
```bash
cd projects/agentic-landing-template
npm run docker:dev                         # Start dev container
npm run docker:shell                       # Shell into container
docker compose exec dev npm run test:run   # Run tests
npm run docker:down                        # Stop container
```

All development tools live inside the container. Never install Node, npm, or packages directly on the host.

---

## After Deployment

Your landing page is live. Now what?

1. **Share it.** Send the URL to three people from your audience pain points map. Ask: "Does this describe your situation?"
2. **Listen.** Their feedback is data. Not all of it will be useful. But the patterns will be.
3. **Iterate.** Update the content based on real responses. The first version is never the final version. Ship, learn, improve.
4. **Continue the game.** Your landing page is not a finite game (launch, done). It is the beginning of an infinite game -- a conversation that compounds.

> "The game continues."

*From "Just Ask" by Pinghsien Wu, Chapter 9*

---

*Guides in this phase (created by the build teammate):*
- [setup.md](setup.md) -- Environment setup and template installation
- [customize.md](customize.md) -- Applying your content brief to the template
- [deploy.md](deploy.md) -- Production build and cloud deployment
