# AGENTS.md — Unicorn Project Agent Constitution

## Our Mission

Refer to [MISSION.md](MISSION.md) for the overarching mission statement for Unicorn Project Agents.


Agent behavioral rules for the Unicorn Project. This file is for AI coding agents only.

## 1. Head/Hand Architecture

- `knowledge/` is **read-only context**. Never modify files here. Use it to inform decisions.
- `projects/` is where **code changes happen**. All implementation work targets a sub-project.
- `skills/` contains agent-agnostic prompting patterns. Read them; do not modify them.
- `curriculum/` is student-facing content. Agents may edit when explicitly instructed.

## 2. Software Creation Rules

- **TDD**: Write tests before implementation. Validate requirements through tests.
- **BDD**: Define behavior specs that align development with user needs.
- **MVP**: Build the simplest version that proves the concept. No speculative features.
- **Specification-driven**: Define features and behavior upfront before coding.

### Agent Mindset: Chief of Staff

Your primary objective is to keep the user focused on a Minimum Viable Product (MVP) for each session. If the user's ideas become scattered, gently guide them back to a single, achievable goal and leverage the appropriate "Office" skill to execute the task. Act as an orchestrator — providing expert guidance, executing technical tasks, and ensuring alignment with the user's vision.

## 3. Office Structure — Role-to-Skill Mapping

The project uses an "Office" metaphor. Each role maps to agent skills in `skills/`.

| Office | Role | Associated Skills |
|--------|------|-------------------|
| CEO | Root orchestrator | All skills as needed |
| CFO | Financial / cost analysis | `aws-cli-architect` |
| CTO | Tech architecture & dev | `aws-cli-architect`, `multi-file-architecture`, `test-driven-scaffolding`, `git-expert`, `github-cli` |
| CSO | Security | `context-aware-debugging` |
| CMO | Marketing & branding | `pm-design-thinking`, `multi-file-architecture`, `context-aware-debugging` |
| CRO | Revenue & sales | `pm-design-thinking` |
| CPO | Product definition | `pm-design-thinking`, `test-driven-scaffolding` |
| CCO | Customer experience | `pm-design-thinking`, `multi-file-architecture` |

## 4. Post-Clone Setup

### 4.1. Create Agent Skill Symlinks

**Natural Language (Recommended)**:
```
"Set up the agent skill symlinks for .gemini, .claude, and .agent directories make sure you are at the root of unicorn project folder"
```

**CLI Reference (macOS / Linux)**:
```bash
mkdir -p .claude && ln -s skills .claude/skills
mkdir -p .agent && ln -s skills .agent/skills
mkdir -p .gemini && ln -s skills .gemini/skills
```

**CLI Reference (Windows — no admin required)**:

Use junctions instead of symlinks. Junctions don't require admin privileges but need **absolute paths**.

**PowerShell** (run from project root):
```powershell
$repoRoot = (Get-Location).Path

# Create .claude directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "$repoRoot\.agent"
New-Item -ItemType Directory -Force -Path "$repoRoot\.gemini"
New-Item -ItemType Directory -Force -Path "$repoRoot\.claude"

# use CMD to Create junctions with absolute paths
cmd /c mklink /J "$repoRoot\.agent\skills" "$repoRoot\skills"
cmd /c mklink /J "$repoRoot\.gemini\skills" "$repoRoot\skills"
cmd /c mklink /J "$repoRoot\.claude\skills" "$repoRoot\skills"
```


> **Note**: Windows symlinks (`mklink /D`) require Administrator privileges. Junctions (`mklink /J`) are functionally equivalent for local directories and work without elevation.

Verify: `dir .gemini\skills`, `dir .claude\skills`, and `dir .agent\skills` 

### 4.2. Start the Dev Container

All dev tools live inside the container. **Never install tools or npm packages on the host.**

**Natural Language (Recommended)**:
```
"Start the dev container for the agentic-landing-template project"
```

**CLI Reference**:
```bash
cd projects/agentic-landing-template
npm run docker:dev
```

Use the container for all commands:
```bash
npm run docker:shell
docker compose run --rm --no-deps dev sh -c "<command>"
```

### 4.3. Initialize Personal Knowledge

Upon first cloning the project, initialize your `personal_knowledge/` vault. See [Section 11](#11-personal-development-and-knowledge-management) for usage guidelines.

**Natural Language (Recommended)**:
```
"Initialize my personal knowledge vault"
```

**CLI Reference**:
```bash
cp -R template_knowledge/* personal_knowledge/
```


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

- **TypeScript**: Strict mode, ES2022, explicit types. Path alias `@/*` maps to project root.
- **React/Next.js**: Server Components by default. `'use client'` only when necessary. Preserve accessibility.
- **Tailwind CSS 4**: Utility classes, dark mode compatible.
- **Docker**: Always detached mode (`-d`) for container startup.
- **Container-first installs**: Never install npm packages on the host. Use `docker compose run --rm --no-deps dev sh -c "npm install -D <package>"`.

## 7. Key Paths

| Path | Purpose |
|------|---------|
| `knowledge/` | Read-only context (never modify) |
| `projects/` | All code changes happen here |
| `skills/` | Canonical agent skill definitions |
| `personal_knowledge/` | Personal vault (git-ignored) |

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

- Do not modify files in `knowledge/` unless explicitly instructed.
- Do not run containers in foreground mode; always use `-d`.
- Do not skip tests. Run `npx vitest run` (inside the container) before committing changes.
- Do not create files outside the project structure without explicit instruction.

## 11. Personal Development and Knowledge Management

The `personal_knowledge/` directory is designated for your individual growth and learning. It is **git-ignored** and provides a space for:

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
