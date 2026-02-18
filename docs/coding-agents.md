---
name: coding-agents
description: Complete comparison guide for CLI coding agents — Claude Code, Gemini CLI, Kiro CLI, Codex CLI, OpenCode, and more. Solo Unicorn Builder prefers CLI agents for their ability to translate natural language into system commands.
---

# AI Coding Agents: Complete Comparison Guide

**For builders who want AI as a real development partner**

---

## Why CLI Coding Agents?

The magic of a CLI coding agent is its ability to **translate natural language into system command-line interface (CLI) commands** — and execute them.

You say: *"Set up a Docker container with Node 20, install dependencies, and start the dev server."*

The agent translates that into `docker compose up -d`, `npm install`, `npm run dev` — and runs it. No copy-pasting. No switching between a chat window and a terminal. The AI reads your project, understands the context, and operates your machine.

This is why **Solo Unicorn Builder prefers CLI coding agents**. They don't just suggest code — they execute workflows. They read your `SKILL.md` files, understand your project structure, run tests, manage Git, deploy containers, and orchestrate multi-file changes. All from natural language.

**IDE-based agents** (Copilot, Cursor) are great for real-time autocomplete while typing. But CLI agents are where AI becomes a true **operating partner** — not just a suggestion engine.

---

## What is an AI Coding Agent?

Think of an AI coding agent as a **smart assistant that helps you write, edit, and understand code**. Unlike traditional tools that just highlight syntax or check for errors, AI coding agents:

- **Understand what you're trying to build** (not just what you've written)
- **Suggest entire functions or files** (not just the next line)
- **Explain complex code in plain English** (or write code from your English description)
- **Execute system commands** from natural language instructions
- **Refactor across multiple files** (understanding your whole project)

**For non-coders:** Imagine having a translator who not only translates words but understands the context, suggests better phrasing, and can rewrite entire paragraphs to be clearer. That's what AI coding agents do for software.

**For coders:** It's like pair programming with a senior developer who's read your entire codebase and can suggest refactorings, catch bugs, write tests, and explain architectural decisions — and who can also run the commands for you.

---

## The Evolution: How We Got Here

### Phase 1: Code Completion (2021)
**Tool:** GitHub Copilot
**Capability:** Autocomplete the next line of code
**Like:** Predictive text on your phone, but for code

### Phase 2: Chat-Based Help (2023)
**Tool:** ChatGPT
**Capability:** Answer coding questions, generate code snippets
**Like:** Having an expert you can ask questions, but can't see your files

### Phase 3: Project-Aware CLI Agents (2024-2025)
**Tools:** Claude Code, Gemini CLI, Kiro CLI, Codex CLI, OpenCode
**Capability:** Understand your entire project, execute commands, modify multiple files
**Like:** A senior developer who can both think and type — reading your codebase, running your tests, and shipping your code

### Phase 4: Multi-Agent Systems (Emerging)
**Trend:** Using multiple AI agents for different tasks
**Capability:** One agent plans, another codes, another reviews
**Like:** A full development team, but AI

---

## CLI Agents (Recommended for Solo Unicorn Builder)

These agents run in your terminal and can **read, write, and execute** — the full development loop.

| Agent           | Provider    | Installation                                                                      | Start Command | Key Strength                                                                                                                    |
| --------------- | ----------- | --------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Claude Code** | Anthropic   | `npm install -g @anthropic-ai/claude-code`                                        | `claude`      | **Best reasoning and code quality.** Deep project understanding, multi-file refactoring, architecture decisions.                |
| **Gemini CLI**  | Google      | `npm install -g @google/gemini-cli`                                               | `gemini`      | **Largest context window (1M+ tokens).** Multimodal — understands images, diagrams, screenshots alongside code.                 |
| **Kiro CLI**    | AWS         | See [kiro.dev/cli](https://kiro.dev/cli/)                                         | `kiro-cli`    | **Spec-driven development.** Turns prompts into structured requirements, then code. Deep AWS integration and DevOps automation. |
| **Codex CLI**   | OpenAI      | `npm install -g @openai/codex`                                                    | `codex`       | **OpenAI ecosystem.** Quick code generation, integrates with ChatGPT.                                                           |
| **OpenCode**    | Open Source | `brew install opencode-ai/tap/opencode` or see [opencode.ai](https://opencode.ai) | `opencode`    | **75+ model support.** Works with Claude, OpenAI, Gemini, and local models. Go-based TUI, LSP integration, vim-like editor.     |

### What CLI Agents Can Do That IDE Agents Can't

| Capability | CLI Agent | IDE Agent |
|---|---|---|
| Read and modify files | Yes | Yes |
| Execute shell commands | **Yes** | Limited |
| Run tests, builds, deployments | **Yes** | No |
| Manage Git (commit, push, PR) | **Yes** | Partial |
| Docker operations | **Yes** | No |
| AWS/GCP CLI commands | **Yes** | No |
| Read project configuration (SKILL.md, AGENTS.md) | **Yes** | Partial |
| Multi-turn workflows across tools | **Yes** | No |

---

## IDE Agents (Complementary)

These agents live inside your editor. Great for real-time autocomplete and inline edits, but they don't execute commands.

| Agent | Type | Installation | Key Strength |
|---|---|---|---|
| **Cursor** | AI-powered IDE | Download from [cursor.com](https://cursor.com) | **Complete AI editor.** VS Code fork with chat, multi-file editing, Cmd+K inline edits. |
| **GitHub Copilot** | IDE extension | VS Code / JetBrains extension | **Real-time autocomplete.** Best for day-to-day typing productivity. |
| **Kiro IDE** | AI-powered IDE | Download from [kiro.dev](https://kiro.dev) | **Spec-first development.** Generates requirements and design docs before code. VS Code fork. |
| **Tabnine** | IDE extension | IDE extension — [tabnine.com](https://www.tabnine.com) | **On-premise options.** Code stays private, enterprise compliance. |

**Tip:** Use a CLI agent as your primary development partner and an IDE agent for real-time autocomplete. They complement each other.

---

## Detailed CLI Agent Profiles

### Claude Code - The Thoughtful Architect

**Official Docs:** https://docs.anthropic.com/en/docs/claude-code

**What makes it special:**
- **Best reasoning capabilities** among current agents
- **Reads your entire project** for context-aware suggestions
- **Multi-file refactoring** with preview before applying
- **Ctrl+G feature** - write long prompts in your text editor
- **Strong at code review** - catches subtle bugs and architecture issues
- **Executes commands** - runs tests, manages Git, deploys containers

**Best for:**
- Complex refactoring across multiple files
- Architectural decisions and code reviews
- Security-sensitive code
- Teaching and explaining code concepts

**Limitations:**
- Requires API key and internet connection
- Not free (pay per use via Anthropic API)
- No autocomplete while typing (pair with Copilot for that)

---

### Gemini CLI - The Multimodal Expert

**Official Docs:** https://github.com/google-gemini/gemini-cli

**What makes it special:**
- **Largest context window** (1M+ tokens)
- **Multimodal** - understands images, diagrams, screenshots
- **Long-form analysis** - can analyze entire large codebases
- **Google integration** - works with Google Cloud Platform

**Best for:**
- Analyzing large, complex codebases
- Converting UI screenshots to code
- Understanding system architecture diagrams
- Projects with extensive documentation

**Limitations:**
- Newer tool, smaller community
- Requires Google account
- Less specialized for code than Claude Code

---

### Kiro CLI - The Spec-Driven Builder

**Official Docs:** https://kiro.dev/docs/cli/

**What makes it special:**
- **Spec-driven workflow** - turns natural language into structured requirements before writing code
- **AWS-native** - makes AWS CLI calls, manages cloud resources
- **DevOps automation** - install, configure, and deploy infrastructure from natural language
- **MCP server support** - extensible with Model Context Protocol tools
- **Powered by Claude** - uses Anthropic's frontier models under the hood

**Best for:**
- AWS infrastructure and DevOps workflows
- Spec-first development (requirements → design → code)
- Cloud resource management from the terminal
- Enterprise and production deployments

**Pricing:** Free tier (50 credits/mo), Pro $20/mo, Pro+ $40/mo, Power $200/mo

---

### OpenCode - The Model-Agnostic Powerhouse

**Official Docs:** https://opencode.ai

**What makes it special:**
- **75+ model support** - Claude, OpenAI, Gemini, Groq, Azure, local models via LM Studio
- **Go-based TUI** - fast, native terminal UI with vim-like editor
- **LSP integration** - language server support for Rust, TypeScript, Python, and more
- **Use existing subscriptions** - works with ChatGPT Plus/Pro, GitHub Copilot, or free local models
- **Persistent sessions** - SQLite storage, multi-session management

**Best for:**
- Developers who want maximum model flexibility
- Privacy-conscious builders (local model support)
- Those with existing AI subscriptions they want to leverage
- Polyglot developers working across many languages

**Limitations:**
- Newer project, smaller community than Claude Code
- Go installation required

---

## Choosing Your Agent(s)

### Decision Framework

1. **What's your primary use case?**
   - Complex architecture and refactoring → **Claude Code**
   - Large codebases, multimodal → **Gemini CLI**
   - AWS infrastructure and DevOps → **Kiro CLI**
   - Maximum model flexibility → **OpenCode**
   - Real-time autocomplete → **Copilot** or **Cursor** (IDE)

2. **What's your budget?**
   - Pay per use → Claude Code, Gemini CLI
   - Monthly subscription → Kiro CLI ($0-200), Copilot ($10-20), Cursor ($20)
   - Free/open source → OpenCode (but you pay for LLM API, or use local models)

3. **What cloud do you use?**
   - AWS → Kiro CLI
   - GCP → Gemini CLI
   - Any/none → Claude Code or OpenCode

### Recommended for Solo Unicorn Builder

**Primary:** Pick one CLI agent — Claude Code, Gemini CLI, or Kiro CLI
**Optional:** Add Cursor or Copilot for real-time autocomplete in your IDE

All of Solo Unicorn Builder's skills work with any CLI agent. You describe what you need in natural language, the agent reads the relevant `SKILL.md`, and executes.

---

## The Multi-Agent Workflow

**Best practice:** Use multiple CLI agents for different strengths.

### Example: Building and Deploying a Feature

```
1. Claude Code: "Analyze the codebase and design an OAuth integration"
   → Architectural plan, multi-file changes

2. Kiro CLI: "Deploy this to AWS with a staging environment"
   → Infrastructure setup, container registry, Cloud Run config

3. Gemini CLI: "Generate comprehensive API documentation from the codebase"
   → Large context window handles the full system

4. Claude Code: "Review the PR for security issues before merge"
   → Detailed code review with reasoning
```

Each agent does what it does best. Your job is to ask the right questions.

---

## Common Questions

**Q: Will AI replace developers?**
**A:** No. AI makes developers more productive, but humans still define requirements, make architectural decisions, review suggestions, and handle business logic.

**Q: Which agent should I learn first?**
**A:** Pick one CLI agent and start building. Skills transfer between agents. For Solo Unicorn Builder, Claude Code or Gemini CLI are the most common starting points.

**Q: What happened to Amazon CodeWhisperer?**
**A:** AWS retired CodeWhisperer in April 2024 and merged its features into Amazon Q Developer. Kiro is AWS's newer, more ambitious offering — a spec-first AI development platform available as both an IDE and a CLI.

**Q: Are these tools ready for production?**
**A:** Yes, with caveats: always review AI-generated code, use tests to catch issues, and start with well-understood problems.

**Q: What about code privacy?**
**A:** Varies by tool:
- **Claude Code, Gemini CLI, Kiro CLI:** Code sent to cloud for processing
- **OpenCode:** Can use local LLMs for full privacy
- Check each tool's privacy policy for your compliance needs

---

## Getting Started with Solo Unicorn Builder

Solo Unicorn Builder works with **any CLI coding agent**. The skills in `skills/` are agent-agnostic — they work with Claude Code, Gemini CLI, Kiro CLI, Codex CLI, OpenCode, or any tool that reads markdown files.

**Setup:**
1. Install at least one CLI agent (Claude Code, Gemini CLI, or Kiro CLI)
2. Clone Solo Unicorn Builder and run the init setup
3. Start describing what you want to build — the agent reads the relevant skills and executes

The AI-augmented knowledge worker doesn't need to master every tool. Pick one, start building, and add more as your workflow demands.

---

## Stay Updated

AI coding tools evolve rapidly. Key resources:

- **Claude Code:** https://docs.anthropic.com/en/docs/claude-code
- **Gemini CLI:** https://github.com/google-gemini/gemini-cli
- **Kiro CLI:** https://kiro.dev/docs/cli/
- **Codex CLI:** https://github.com/openai/codex
- **OpenCode:** https://opencode.ai
- **GitHub Copilot:** https://github.com/features/copilot
- **Cursor:** https://cursor.com/docs
