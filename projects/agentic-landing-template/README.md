# Agentic Landing Page Template

> **"When AI can do anything for you, what will you build?"**

A production-ready landing page template that teaches AI-assisted cloud development. Go from `git clone` to a live deployed site using natural language prompts and container commands.

## Quick Start

**Prerequisites:** [Docker Desktop](https://www.docker.com/products/docker-desktop/), [Git](https://git-scm.com/), and an AI coding assistant ([Claude Code](https://docs.anthropic.com/en/docs/claude-code) or [Gemini CLI](https://github.com/google-gemini/gemini-cli)).

> **Zero host installation:** You do NOT need Node.js, npm, or any other dev tools on your machine. Everything runs inside the Docker container.

**Tell your AI agent:**
```
"Clone the agentic-landing-template repo, start the dev container, and open localhost:3000"
```

Then customize with natural language:
```
"Update the hero section with my name 'Your Name' and title 'Your Title'"
```

**CLI Reference:**
```bash
git clone https://github.com/pingwu/agentic-landing-template.git
cd agentic-landing-template
npm run docker:dev
# Open http://localhost:3000
```

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | React framework with App Router |
| React | 19 | Component-based UI |
| TypeScript | 5.9 | Type safety (strict mode) |
| Tailwind CSS | 4 | Utility-first styling |
| Vitest | 4 | Unit and component testing |
| Docker | — | Containerized development |
| AWS App Runner | — | Cloud deployment |

## Use Cases

The default template works for consulting services, professional portfolios, digital resumes, and enterprise initiative sites. Alternative templates are in `templates/`.

## Container Commands

| Natural Language | CLI Command | Purpose |
|-----------------|-------------|---------|
| "Start the dev server" | `npm run docker:dev` | Dev server with hot-reload (port 3000) |
| "Start a production preview" | `npm run docker:prod` | Production preview (port 3001) |
| "Stop the containers" | `npm run docker:down` | Stop containers |
| "Open a shell in the container" | `npm run docker:shell` | Shell into container |
| "Show the container logs" | `npm run docker:logs` | View logs |
| "Run the tests" | `docker compose exec dev npm run test:run` | Run tests |
| "Type-check the project" | `docker compose exec dev npm run typecheck` | TypeScript check |
| "Lint the code" | `docker compose exec dev npm run lint` | ESLint |

## Documentation

| Document | Purpose |
|----------|---------|
| [Prompt Library](docs/prompts/PROMPT-LIBRARY.md) | Copy-paste prompts for customizing every section |
| [Content Templates](docs/prompts/CONTENT-TEMPLATES.md) | Ready-to-use content examples by use case |
| [PRD Templates](docs/product/PRD-TEMPLATES.md) | Product requirements by use case |
| [Tech Stack](docs/reference/TECH-STACK.md) | Detailed technology and agent documentation |
| [Deployment Roadmap](docs/guides/DEPLOYMENT-ROADMAP.md) | Phase-by-phase deployment guide |
| [AWS Deployment Guide](docs/guides/AWS-DEPLOYMENT-GUIDE.md) | Complete AWS setup from scratch |
| [AWS Glossary](docs/reference/AWS-GLOSSARY.md) | AWS services explained |
| [AWS Pricing Guide](docs/reference/AWS-PRICING-GUIDE.md) | Cost estimates and free tier |
| [GCP Deployment Guide](docs/guides/GCP-DEPLOYMENT-GUIDE.md) | Complete GCP Cloud Run setup from scratch |
| [GCP Deployment Roadmap](docs/guides/GCP-DEPLOYMENT-ROADMAP.md) | Phase-by-phase GCP deployment guide |
| [GCP Glossary](docs/reference/GCP-GLOSSARY.md) | GCP services explained |
| [GCP Pricing Guide](docs/reference/GCP-PRICING-GUIDE.md) | GCP cost estimates and free tier |
| [Success Stories](docs/SUCCESS-STORIES.md) | What learners have built |
| [Full Learning Journey](../../curriculum/) | Course curriculum and build guides |

## Agent Instructions

AI coding agents read these files automatically:
- `AGENTS.md` — Project goals, conventions, constraints
- `../../AGENTS.md` — Master constitution (Unicorn organization)

## Contributing

Found an issue? [Open an issue](https://github.com/pingwu/agentic-landing-template/issues) or submit a PR.

## Production Graduation Checklist

Before exposing this app to real users or real traffic, confirm **every item below**.

### Runtime Safety

- Global error boundary is implemented (`app/error.tsx`)
- 404 handling is explicit (`app/not-found.tsx`)
- App does not crash on unexpected runtime errors
- Users never see raw stack traces

### Configuration Safety

- All required environment variables are validated at startup
- Missing or invalid config causes a clear, immediate failure
- No secrets are referenced in client components

### Deployment Signals

- `/health` endpoint returns `200 OK`
- Cloud platform health checks are configured
- Failed deploys are detectable without inspecting logs

### Security Baseline

- Security headers are explicitly set (CSP, frame, content-type, referrer)
- Dependencies are locked (`npm ci`)
- No credentials are committed or logged

### UX & Accessibility

- Keyboard navigation works end-to-end
- Mobile navigation opens and closes reliably
- No major layout shift on page load
- At least one accessibility test runs in CI

### Build & Release Confidence

- Production build runs successfully (`npm run docker:prod`)
- Tests pass in the same container used for production
- Target platform is explicit (`linux/amd64`)
- Rollback strategy is understood (even if manual)

### Documentation Honesty

- README clearly states what the app does **not** include
- Deployment steps exist for at least one platform
- Ownership is clear if the site breaks

## License

MIT — use freely for personal or commercial projects.

---

**Course**: CSE 651 — Software Development with Agentic AI ([CSTU.edu](https://cstu.edu))
**Instructor**: Ping Wu
**Evolved from**: [MACA (Multi-AI-Coding-Agent)](https://github.com/pingwu/maca)
