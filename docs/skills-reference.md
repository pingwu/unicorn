---
name: skills-reference
description: Complete reference for all 37 Solo Unicorn Builder skills, organized by stage and category.
---

# Skills Reference

Solo Unicorn Builder comes with 37 built-in skills. Each skill is an AI-powered guide that helps you with a specific task — like having an expert on call.

You don't need all of them. You need the right one for where you are right now.

## By Stage

| Stage | Where you are | Skills that help |
|-------|--------------|-----------------|
| Job seeking / AI-native roles | "I want to work in AI but don't know how to prove it" | `career-resume`, `github-profile`, `portfolio-strategy` |
| Figuring out what to build | "I have an idea but I'm not sure" | `idea-validation`, `product`, `pm-design-thinking`, `business-model` |
| Getting your first clients | "I'm reaching out but nothing sticks" | `go-to-market`, `sales`, `marketing-brand`, `business-development` |
| Growing and keeping clients | "I have some clients but need more" | `growth-analytics`, `customer-success`, `business-development` |
| Running a business | "I need to operate and scale" | `legal-compliance`, `finance-accounting`, `operations`, `fundraising` |
| Building and shipping | "I need to make this real" | `multi-file-architecture`, `test-first-development`, `context-aware-debugging`, `frontend-ui-ux`, `git-expert`, `github-cli`, `github-actions`, `docker-expert`, `python-dependency-expert`, `aws-cli-architect`, `gcloud-expert`, `mcp-builder`, `webapp-testing` |
| Creating documents & visuals | "I need polished deliverables" | `document-creation`, `generative-art` |
| Video post-production | "I need to cull my A-Roll from raw footage" | `video-narrative-architect` |
| Contributing to open source | "I want to build credibility" | `open-source-contribution`, `technical-writing` |
| Managing your knowledge | "I need to organize my thinking" | `obsidian-knowledge` |
| Extending the platform | "I want to create new skills" | `skill-creator` |

## By Category

| Category | Skills | What they do |
|----------|--------|-------------|
| **Career & Portfolio** | `career-resume`, `github-profile`, `portfolio-strategy` | Tailor resumes, build your GitHub presence, showcase your work |
| **Idea & Product** | `idea-validation`, `product`, `pm-design-thinking`, `business-model` | Validate ideas, define products, choose business models |
| **Go to Market** | `go-to-market`, `sales`, `marketing-brand`, `growth-analytics`, `customer-success`, `business-development` | Find clients, close deals, build partnerships, grow revenue |
| **Business Operations** | `legal-compliance`, `finance-accounting`, `operations`, `fundraising` | Handle legal, finances, operations, and fundraising |
| **Building & Shipping** | `multi-file-architecture`, `test-first-development`, `context-aware-debugging`, `frontend-ui-ux`, `git-expert`, `github-cli`, `github-actions`, `docker-expert`, `python-dependency-expert`, `aws-cli-architect`, `gcloud-expert`, `mcp-builder`, `webapp-testing` | Code, test, build UIs, containerize, deploy, build MCP integrations, and manage infrastructure |
| **Documents & Visuals** | `document-creation`, `generative-art` | Create Word docs, PDFs, presentations, spreadsheets, and algorithmic art |
| **Video Production** | `video-narrative-architect` | A-Roll culling, semantic transcript analysis, EDL generation |
| **Open Source & Docs** | `open-source-contribution`, `technical-writing` | Contribute to projects, write clear documentation |
| **Knowledge Management** | `obsidian-knowledge` | Manage your private knowledge vault |
| **Platform** | `skill-creator` | Create and extend Solo Unicorn Builder skills |

## How Skills Work

Each skill lives in `skills/` as a folder with a `SKILL.md` file. When you ask your AI agent for help with a task, it reads the relevant skill and applies that expertise to your situation.

You don't need to memorize skill names. Just describe what you need:
- "Help me write a resume for this job posting" → uses `career-resume`
- "Set up my GitHub profile README" → uses `github-profile`
- "I have a Python dependency conflict with torch and numpy" → uses `python-dependency-expert`
- "Help me contribute to an open-source project" → uses `open-source-contribution`
- "Help me find my first clients" → uses `go-to-market` and `sales`
- "Make this page work better on mobile" → uses `frontend-ui-ux`
- "Write tests before I build this feature" → uses `test-first-development`
- "Build an MCP server for the GitHub API" → uses `mcp-builder`
- "Write Playwright tests for my web app" → uses `webapp-testing`
- "Create a pitch deck as a PowerPoint" → uses `document-creation`
- "Create generative art inspired by ocean waves" → uses `generative-art`
- "Help me create a new skill for database management" → uses `skill-creator`
- "Cull the A-Roll from this interview transcript" → uses `video-narrative-architect`
- "Generate an EDL from this SRT file" → uses `video-narrative-architect`

The AI figures out which skill to use based on what you ask.
