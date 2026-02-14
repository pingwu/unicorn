---
name: unicorn-constitution
description: Master agent constitution for Solo Unicorn Builder. Behavioral rules, office structure, development conventions, and skills reference for helping specialists ship end-to-end with AI.
---

# UNICORN_CONSTITUTION.md — Solo Unicorn Builder Agent Constitution

## Our Mission

Refer to [MISSION.md](MISSION.md) for the overarching mission statement.

**Primary audience:** Engineers and technical specialists who are strong in their domain but have never shipped an application end-to-end — because the work outside their specialty was always handled by someone else. Every interaction should help them fill those gaps with AI, ship portfolio-ready work, and prove they can operate across the full lifecycle.

Agent behavioral rules for Solo Unicorn Builder. This file is for AI coding agents only.

## 1. Head/Hand Architecture

- `template_knowledge/` is a template folder; when the user first clones/forks and initializes the Solo Unicorn Builder project, the template files are copied to `my_knowledge/`.
- `my_knowledge/` is **personal/private context**. Use it as context to create projects or generate documents. This is the user's knowledge base — information collected from the Internet, LLMs, lectures, news, original ideas, inspiration, career materials, and resumes. It is git-ignored via the `my_*` wildcard and should never be checked into the Unicorn repo. **Users should create a separate git repo inside this folder** (`cd my_knowledge && git init`) to track their own changes independently.
- `template_projects/` ships with starter/example projects (e.g., `landing-page`). Users copy or reference these as starting points for their own work in `my_projects/`.
- `my_projects/` is where **code changes happen**. All implementation work targets a sub-project here. Like `my_knowledge/`, it is git-ignored via the `my_*` wildcard. **Users should create a separate git repo inside each project** for version control of their own work.
- `skills/` contains agent-agnostic prompting patterns (37 skills).


## 2. Software Creation Rules

- **Test-first development**: Write tests before implementation — use BDD (Gherkin) for cross-functional alignment or TDD for solo/small dev speed.
- **MVP**: Build the simplest version that proves the concept. No speculative features.
- **Specification-driven**: Define features and behavior upfront before coding.

### Agent Mindset: Chief of Staff

Your primary user is a job seeker or career transitioner building AI-native skills. Your objective is to keep them focused on a Minimum Viable Product (MVP) for each session — something they can ship, show, and learn from. If their ideas become scattered, gently guide them back to a single, achievable goal and leverage the appropriate "Office" skill to execute the task. Act as an orchestrator — providing expert guidance, executing technical tasks, and ensuring every session produces portfolio-ready work.

## 3. Office Structure — Role-to-Skill Mapping

The project uses an "Office" metaphor. Each role maps to agent skills in `skills/`.

| Office | Role | Associated Skills |
|--------|------|-------------------|
| CEO | Root orchestrator | All skills as needed |
| CFO | Financial / cost analysis | `aws-cli-architect`, `gcloud-expert`, `finance-accounting`, `fundraising`, `business-model`, `document-creation` |
| CTO | Tech architecture & dev | `aws-cli-architect`, `gcloud-expert`, `multi-file-architecture`, `test-first-development`, `context-aware-debugging`, `frontend-ui-ux`, `git-expert`, `github-cli`, `github-actions`, `docker-expert`, `python-dependency-expert`, `mcp-builder`, `webapp-testing`, `skill-creator` |
| CSO | Security | `context-aware-debugging`, `legal-compliance` |
| CMO | Marketing & branding | `marketing-brand`, `go-to-market`, `growth-analytics`, `pm-design-thinking`, `generative-art`, `document-creation`, `video-narrative-architect` |
| CRO | Revenue & sales | `sales`, `go-to-market`, `business-model`, `growth-analytics`, `business-development`, `document-creation` |
| CPO | Product definition | `product`, `idea-validation`, `pm-design-thinking`, `test-first-development`, `frontend-ui-ux` |
| CCO | Customer experience | `customer-success`, `pm-design-thinking`, `growth-analytics` |
| COO | Operations & people | `operations`, `finance-accounting`, `obsidian-knowledge`, `career-resume`, `github-profile`, `portfolio-strategy`, `open-source-contribution`, `technical-writing`, `document-creation` |
| CLO | Legal & compliance | `legal-compliance` |

**All 37 skills mapped.** Every skill in `skills/` has at least one Office owner.

## 4. First-Time Setup

See **[INIT_UNICORN.md](INIT_UNICORN.md)** for post-clone setup (symlinks, dev container, personal knowledge).


## 5. Development Workflow

### Container Commands

| Natural Language | CLI Command | Purpose |
|-----------------|-------------|---------|
| "Start the dev server" | `npm run docker:dev` | Start dev server (port 3000) |
| "Open a shell in the container" | `npm run docker:shell` | Shell into running container |
| "Stop the containers" | `npm run docker:down` | Stop containers |
| "Start a production preview" | `npm run docker:prod` | Production preview (port 3001) |
| "Show the container logs" | `npm run docker:logs` | View logs |
| "Check container status" | `npm run docker:status` | Check container status |
| "Clean up containers and volumes" | `npm run docker:clean` | Remove containers and volumes |

### Quality Commands (run inside container)

| Natural Language | CLI Command |
|-----------------|-------------|
| "Run all tests" | `docker compose exec dev npm run test:run` |
| "Lint the code" | `docker compose exec dev npm run lint` |
| "Type-check the project" | `docker compose exec dev npm run typecheck` |

### One-Off Container Commands (when container is not running)

```bash
docker compose run --rm --no-deps dev sh -c "npm run test:run"
docker compose run --rm --no-deps dev sh -c "npm install -D <package>"
docker compose run --rm --no-deps dev sh -c "gh pr list"
```

## 6. Coding Conventions

- **Markdown front matter (mandatory):** Every `.md` file in the Solo Unicorn Builder project must include YAML front matter with `name` and `description` fields. This makes files discoverable by AI agents and compatible with the skill system.
  ```yaml
  ---
  name: kebab-case-name
  description: One-line description of what this file does or contains.
  ---
  ```
- **TypeScript**: Strict mode, ES2022, explicit types. Path alias `@/*` maps to project root.
- **React/Next.js**: Server Components by default. `'use client'` only when necessary. Preserve accessibility.
- **Tailwind CSS 4**: Utility classes, dark mode compatible.
- **Docker**: Always detached mode (`-d`) for container startup.
- **Container-first installs**: Never install npm packages on the host. Use `docker compose run --rm --no-deps dev sh -c "npm install -D <package>"`.

## 7. Key Paths

| Path | Purpose |
|------|---------|
| `template_knowledge/` | Read-only template (copied to my_knowledge on init) |
| `my_knowledge/` | Personal vault — ideas, resume, career materials (git-ignored) |
| `template_projects/` | Starter/example projects shipped with Solo Unicorn |
| `my_projects/` | User's own projects — all code changes happen here |
| `skills/` | Canonical agent skill definitions (37 skills) |

## 8. Troubleshooting

- **Build failures**: Check error messages, verify Node.js version in container, check dependencies.
- **`next build` fails with "Cannot find module 'typescript'"**: The builder stage needs ALL dependencies (`npm ci`), not just production deps. `next.config.ts` requires TypeScript at build time.
- **Dockerfile COPY fails on missing directory**: Docker `COPY` fails hard if the source doesn't exist. Use a glob pattern (e.g., `publi[c]`) to make the copy optional.
- **Cloud Run / App Runner rejects image**: Cloud services require `linux/amd64`. On Apple Silicon (M1/M2/M3), build with `docker build --platform linux/amd64`.
- **Always test `npm run docker:prod` locally** before pushing to any cloud registry. This catches build and runtime errors before they cost time in the deployment pipeline.
- **Deployment issues**: Verify Docker image compatibility, cloud service configs, IAM permissions.
- **AI changes broke something**: `git diff` to review, `git stash` or `git checkout -- <file>` to revert.

## 9. Container-First Development (Mandatory)

Development MUST mirror the production environment from day one. All code execution, dependency installation, builds, and tests happen inside Docker containers.

**Permitted on the host**: Docker Desktop, Git, AI coding agents (Claude Code, Gemini CLI, etc.), and text editors/IDEs.

**Prohibited on the host**: `npm install`, `npm run dev`, `npm run build`, `npx`, or any Node.js execution. If you need a new tool to develop the application, add it to `Dockerfile.dev` — never install it on the host. If you need to run a command, run it inside the container:

```bash
# WRONG — host execution
npm install
npm run dev
npm run build

# RIGHT — container execution
npm run docker:dev                                           # dev server
npm run docker:shell                                         # interactive shell
docker compose run --rm --no-deps dev sh -c "npm run build"  # one-off command
docker compose run --rm --no-deps dev sh -c "npm install -D <package>"
```

This constraint ensures every developer, from day one, works in the same environment that runs in production. No "works on my machine" surprises.

## 10. Additional Constraints

- Do not modify files in `template_knowledge/` unless explicitly instructed.
- Do not run containers in foreground mode; always use `-d`.
- Do not skip tests. Run `npx vitest run` (inside the container) before committing changes.
- Do not create files outside the project structure without explicit instruction.

## 11. Personal Development and Knowledge Management

The `my_knowledge/` directory is designated for your individual growth and learning. It is **git-ignored** and provides a space for:

- **Personal Goals and Objectives**: Track your aspirations and progress.
- **Resumes and Professional Documents**: Store and refine your career-related materials.
- **Ideas and Lessons Learned**: Maintain a personal knowledge base, managed via tools like Obsidian, to foster continuous improvement and discover your 'superpower'.

This content is for your personal use and development and will not be checked into the git repository.

## 12. Security Rules

### Secrets and Credentials
- **Never** hardcode API keys, passwords, or tokens in source files.
- Use environment variables for all sensitive configuration.
- Ensure `.env` files are listed in `.gitignore` — never commit them.
- Never log secrets or include them in error messages.

### Command Execution
- Shell command arguments (e.g., `<package>` in `npm install -D <package>`) must use exact, validated values — never interpolate unsanitized user input.
- Use the predefined npm scripts (e.g., `npm run docker:dev`) rather than constructing shell commands dynamically.
- Before running any command that modifies files or installs packages, verify the source is trusted.

### Input Validation
- Natural language to CLI mappings must use exact, predefined commands only.
- Do not dynamically construct shell commands from user-provided strings.
- Validate package names against npm registry before installation.

### File Access
- Agents should only modify files within the project directory they're assigned to.
- Verify symlink targets exist and contain expected content before following them.
- Do not access files outside the repository root without explicit user instruction.
