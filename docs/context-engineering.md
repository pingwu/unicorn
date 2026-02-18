---
name: context-engineering
description: How Solo Unicorn Builder practices context engineering — the daily writing discipline, personal knowledge graph, vendor independence, and the origin story behind the approach.
---

# Context Engineering in Practice

The industry calls it **context engineering** — the discipline of structuring information so AI produces better, more grounded outputs. This project has been practicing it from the start, before the term existed.

## Three Layers of Engineered Context

Solo Unicorn Builder is built on three layers:

| Layer | What | Where |
|-------|------|-------|
| **Skills** — what the AI can do | 36 structured prompting patterns that give the AI domain expertise | `skills/` |
| **Instructions** — how the AI behaves | Cascading rules from mission to constitution to agent config | `CLAUDE.md` → `UNICORN_CONSTITUTION.md` → `MISSION.md` |
| **Knowledge** — what the AI knows about you | Your daily writing, research, ideas, goals, career materials | `my_knowledge/` |

The first two layers ship with the project. The third layer — **your knowledge** — is the one only you can build.

## The Writing Practice

The `my_knowledge/` vault is designed around a daily practice: collect your thoughts, capture external knowledge (news, articles, videos, conversations), and organize it into folders that form a personal knowledge graph.

| Folder | What goes here |
|--------|---------------|
| `daily/` | Daily reflections, what you learned, what you noticed |
| `ideas/` | Raw brainstorms, "what if" sparks, early-stage thinking |
| `companies/` | Research on companies, industries, market trends |
| `people/` | Contacts, collaborators, mentors, relationship notes |
| `career/` | Accomplishments, applications, roles, growth tracking |
| `goals/` | Long-term vision, OKRs, quarterly plans |
| `personal/` | Values, strengths, your "why" |

Over time, these entries connect. An idea on Monday links to a company you researched on Wednesday, which connects to a person you met on Friday, which shapes a goal you set next quarter. The AI reads this graph and produces outputs grounded in *your* actual context — not generic advice.

When a skill like `career-resume` runs, it doesn't generate a generic resume. It reads your accomplishments, your target companies, your goals — and produces something that reflects your real story. That's what context engineering looks like in practice: **the daily discipline of collecting and connecting your knowledge so AI can reason about your specific situation.**

## Where This Practice Came From

This project's author used the same practice to write *[Just Ask](https://www.ping-ai.com)* — a business novel about a laid-off cloud engineer who discovers that the skill behind every AI breakthrough is the same skill behind every human breakthrough: the ability to ask the right question.

The book itself was produced through daily writing and knowledge collection — the same `my_knowledge/` workflow this project gives you. Years of daily reflections, research notes, collected ideas, and external knowledge accumulated into a personal knowledge graph. When it came time to write, the AI didn't start from nothing. It drew from a rich, structured context that the author had been building one day at a time.

In Chapter 2, "Lemon Juice," the protagonist discovers the core insight: **the technology is never the variable — the context is the variable.** The same AI tool that electrifies a room full of fifteen people at a family dinner produces flat, adequate answers the next morning in a quiet kitchen. The difference isn't the model. It's the context surrounding it — the energy, the audience, the frame, the accumulated knowledge that gives the AI something real to work with.

The protagonist's morning writing practice — emptying thoughts onto a blank page with no audience, no optimization — becomes the foundation for everything that follows. Not because writing is magical, but because it builds the context that makes AI useful. Without that daily discipline, the AI has nothing personal to reason about. With it, every tool in the stack becomes grounded in *your* actual situation.

That's the connection between this open-source project and the book. The `my_knowledge/` vault isn't a feature — it's the practice the entire framework was built on.

## Why Your Context Shouldn't Live in a Vendor's Data Center

When you use ChatGPT, Claude.ai, or Gemini through their web apps, every conversation — every question you've asked, every idea you've explored, every decision you've reasoned through — lives in that vendor's data center. Your context is scattered across chat threads you can't search, can't structure, and can't move. Switch vendors, and you start from zero. Your history isn't portable. Your knowledge graph doesn't exist. You're renting your own thinking.

Solo Unicorn Builder takes the opposite approach: **your context is your codebase.** Every piece of knowledge lives as a local markdown file in `my_knowledge/`. Every project lives in `my_projects/`. Every skill is a readable file in `skills/`. The AI agent reads your local files — it doesn't remember you from a previous SaaS session. It doesn't need to. Your context is right here, on your machine, version-controlled, searchable, and portable.

| | SaaS Chat (ChatGPT, Claude.ai, etc.) | Solo Unicorn Builder |
|---|---|---|
| **Where context lives** | Vendor's servers, in chat threads | Your local filesystem, as markdown |
| **Searchable** | Limited, per-conversation | Full-text search across everything |
| **Structured** | Flat list of conversations | Organized folders forming a knowledge graph |
| **Portable** | Locked to vendor | Move anywhere — it's just files |
| **Version-controlled** | No | Git-tracked, with full history |
| **Survives vendor changes** | No | Yes — agent-agnostic by design |

This is the practical difference. With SaaS chat, the AI gets smarter about you only within a single conversation window. With Solo Unicorn Builder, the AI gets smarter about you because your accumulated knowledge is always available as local context — and it compounds over time, across every session, with any agent.

## Same Context, Multiple Models — Discovering Blind Spots

Every LLM has blind spots. Claude reasons deeply but may overcomplicate. Gemini handles massive context but may miss nuance. GPT generates quickly but may skip edge cases. When your context is locked inside one vendor's chat history, you're stuck with that model's blind spots. You can't get a second opinion without re-explaining everything from scratch.

Because Solo Unicorn Builder stores all context as local files, you can run the **exact same knowledge, skills, and instructions** through any model:

1. **Claude Code** architects a feature — deep reasoning, multi-file refactoring
2. **Gemini CLI** reviews the same codebase — catches issues Claude missed with its 1M+ token window
3. **Kiro CLI** deploys it — AWS-native, spec-driven validation
4. **OpenCode** runs a local model for privacy-sensitive analysis — no data leaves your machine

Each model reads the same `my_knowledge/`, the same `skills/`, the same project files. Different models surface different concerns. One catches a security issue. Another questions the architecture. A third flags a cost problem. The context is the constant; the models are the variables.

This is the multi-model advantage that vendor lock-in makes impossible. When your thinking lives in ChatGPT threads, you can't hand it to Claude for a second look. When your thinking lives in files, every model is a fresh pair of eyes on the same foundation.

## A Note on the Term

We didn't set out to build a "context engineering framework." We set out to help specialists ship end-to-end. The writing practice and knowledge structure are how we got there. The industry now has a name for it — and if that name helps people find this project, good. But the practice predates the buzzword.
