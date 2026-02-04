# Agentic Landing Page Template

> **"When AI can do anything for you, what will you build?"**

---

## Sovereign AI: Own Your Digital Presence

### The Problem with Platform Lock-In

Companies want to lock you into their solutions. You must use their tools. You can't export your data. You can't move to another platform. You must pay forever.

**"Recurring revenue"** is the business model for WordPress.com, Wix, Squarespace, Salesforce, and countless others.

### Why This Matters

- New platforms appear with better features
- New solutions appear at lower prices
- AI is changing everything — fast

**But you're locked into old solutions.** Your content is trapped. Your data is hostage. Migration is painful or impossible.

### The Sovereign Approach

| Platform Lock-In | Sovereign Development |
|------------------|----------------------|
| Files stored in their cloud | **Files on YOUR computer** |
| Proprietary formats | **Standard formats (React, HTML, CSS)** |
| Can't leave without losing work | **Take everything with you** |
| Pay forever or lose access | **You own it permanently** |

### The Solution

1. **Develop locally** — Your files, your machine, your control
2. **Use standard technologies** — Next.js, React, Docker (no proprietary lock-in)
3. **Deploy to AWS** — Portable containers, exportable anytime
4. **AI assists, you own** — The code is yours, not trapped in a builder

### Natural Language Development

**Forget syntax. Think like an architect.**

| Old Way (Coding) | New Way (Natural Language) |
|------------------|---------------------------|
| Learn JavaScript, React, CSS | **Describe what you want in plain English** |
| Debug semicolons and brackets | **AI handles the syntax** |
| Stack Overflow for every error | **Ask the AI to fix it** |
| Months to become productive | **Productive in hours** |

**Example — instead of writing code:**
```
"Add a contact section with my email, a Calendly booking link,
and social media icons for LinkedIn and GitHub"
```

**You focus on:**
- **What** you want to build (the outcome)
- **Why** it matters (the business logic)
- **How it connects** (system thinking)

**The AI handles:**
- Syntax and formatting
- Best practices and patterns
- File organization and imports

> *"The new professional superpower is not coding; it's orchestrating AI agents to build for you."*
> — MACA Curriculum

**Deploy to AWS is as easy as following this project.**

---

## Learn to Build and Deploy

This template teaches modern cloud development through hands-on practice. You'll deploy a professional landing page while learning containers, cloud services, and AI-assisted coding — skills that transfer to any project you want to build next.

**Course**: CSE651 - Software Development with Agentic AI ([CSTU.edu](https://cstu.edu))
**Demo**: AWS Builder Loft, San Francisco (March 2, 2026)

---

## What You'll Learn

| Phase | You'll Do | You'll Understand |
|-------|-----------|-------------------|
| **1. Local Dev** | Run containers locally | How Docker provides consistent environments |
| **2. Customize** | Edit with AI prompts | How to collaborate with AI coding assistants |
| **3. Preview** | Test production build | Why dev and prod builds differ |
| **4. Deploy** | Push to AWS | How cloud services host applications |

**Time to deployed site: ~1-2 hours**

### The Transformation

| Before | After |
|--------|-------|
| "I need someone to build my site" | "I can build and deploy it myself" |
| "Cloud deployment sounds complex" | "I understand containers and cloud" |
| "AI coding tools are mysterious" | "I collaborate with AI to write code" |

---

## What You'll Build

A modern, responsive landing page that can serve as:
- **Consulting Services** page
- **Professional Portfolio**
- **Digital Resume/CV**
- **Freelance Business** site
- **Personal Brand** presence

### Success Story

> **Mark** started with this template, learned the fundamentals, and was inspired to build a **stock trading signal application** with backtesting. He deployed it to Vercel and is now exploring how to scale and market it.

See more in [docs/SUCCESS-STORIES.md](docs/SUCCESS-STORIES.md)

---

## Prerequisites

| Required | Purpose |
|----------|---------|
| [Docker Desktop](https://www.docker.com/products/docker-desktop/) | Container runtime for development and deployment |
| **Any CLI Coding Agent** (choose one): | AI-assisted development |
| - [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Anthropic's agentic coding assistant; available on AWS Bedrock|
| - [Codex CLI](https://github.com/openai/codex) | OpenAI's agentic coding assistant |
| - [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Google's agentic coding assistant |

---

## Quick Start

After your start (either claude, codex or gemini):
```
"Clone the agentic-landing-template repository from https://github.com/pingwu/agentic-landing-template and start the development container"
```

Or manually from Shell (terminal):
```bash
git clone https://github.com/pingwu/agentic-landing-template.git
cd agentic-landing-template
npm run docker:dev
# Open http://localhost:3000
```

That's it! The container includes Node.js, TypeScript, and all dependencies. Hot-reload is enabled - edit files and see changes instantly.

### Development Commands

| Natural Language (say this to your AI agent)      | CLI Command             |
| ------------------------------------------------- | ----------------------- |
| "Start the development container with hot-reload" | `npm run docker:dev`    |
| "Build and run the production container"          | `npm run docker:prod`   |
| "Stop all running containers"                     | `npm run docker:down`   |
| "Show me the container logs"                      | `npm run docker:logs`   |
| "What's the status of my containers?"             | `npm run docker:status` |
| "Open a shell in the dev container"               | `npm run docker:shell`  |
| "Clean up all containers and volumes"             | `npm run docker:clean`  |

### Customize Your Page

Open a new terminal with CLI coding agent open and tell it what you want:

```
"Update the hero section with my name 'John Smith' and tagline 'Full Stack Developer'"
```

```
"Change the primary color from blue to teal throughout the site"
```

```
"Add a testimonials section with 3 client quotes"
```

The AI assistant reads and edits files while the container serves your app. Changes appear immediately.

---

## Development → Production Pipeline

This template teaches the real-world workflow:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Develop    │ ──▶ │ Containerize│ ──▶ │   Deploy    │
│ docker:dev  │     │ docker:prod │     │ AWS App     │
│             │     │             │     │ Runner      │
└─────────────┘     └─────────────┘     └─────────────┘
```

**Why Docker from Day 1?**
- Same environment locally and in production
- No "works on my machine" issues
- Deployment-ready from the start
- Industry-standard workflow

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | React framework with App Router |
| React | 19.x | UI component library |
| TypeScript | 5.x | Type safety (ES2022 target) |
| Tailwind CSS | 4.x | Utility-first styling |
| ESLint | 9.x | Code quality with flat config |
| Docker | Latest | Containerization |
| AWS App Runner | - | Cloud deployment |
| AWS ECR | - | Container registry |

### Accessibility Features

- **Skip Link** - Keyboard users can skip navigation to main content
- **ARIA Landmarks** - Proper labeling for screen readers (`aria-label` on nav)
- **Mobile Navigation** - Fully accessible hamburger menu with ARIA states
- **Semantic HTML** - Proper use of `<main>`, `<nav>`, `<section>`, `<footer>`
- **Focus Management** - Visible focus states throughout

### Agent Skills (Advanced Prompting)

The `.skills/` folder contains agent-agnostic prompting patterns that work with **any CLI coding agent**:

| Skill | What It Teaches |
|-------|-----------------|
| **aws-cli-architect** | Cloud infrastructure provisioning (cost-aware, security-first) |
| **pm-design-thinking** | Product thinking for web development |
| **multi-file-architecture** | Coordinated changes across entire codebases |
| **test-driven-scaffolding** | Write tests first, then implement |
| **context-aware-debugging** | Effective debugging with AI assistance |

**Usage example**:
```
"Using the test-driven-scaffolding approach from .skills/,
add form validation. Write tests first, show me, then implement."
```

See `AGENTS.md` for detailed skill documentation.

---

## Project Structure

```
agentic-landing-template/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page (EDIT THIS)
│   └── globals.css         # Global styles
├── public/
│   └── images/             # Your images here
├── docs/
│   ├── PRD.md              # Product Requirements
│   ├── TECH-STACK.md       # Technical details
│   ├── DEPLOYMENT-ROADMAP.md # AWS deployment guide
│   └── CONTENT-TEMPLATES.md  # Content examples
├── templates/
│   ├── services.tsx        # Consulting services template
│   ├── portfolio.tsx       # Designer/developer portfolio template
│   ├── resume.tsx          # Digital resume/CV template
│   └── enterprise.tsx      # Enterprise initiative template
├── .skills/                # Agent-agnostic prompting patterns
│   ├── aws-cli-architect/      # Cloud infrastructure skills
│   ├── pm-design-thinking/     # Product management lens
│   ├── multi-file-architecture/# Coordinated multi-file changes
│   ├── test-driven-scaffolding/# TDD patterns
│   └── context-aware-debugging/# Debugging techniques
├── GEMINI.md               # System prompt for Gemini CLI
├── CLAUDE.md               # System prompt for Claude Code
├── AGENTS.md               # Shared agent instructions
├── components/
│   ├── Icons.tsx           # Reusable SVG icon components
│   └── MobileNav.tsx       # Mobile navigation menu (client component)
├── Dockerfile              # Production container (multi-stage, optimized)
├── Dockerfile.dev          # Development container (minimal, non-root)
├── docker-compose.yml      # Docker orchestration
├── eslint.config.mjs       # ESLint 9 flat config
└── package.json            # Dependencies (dev/prod separated)
```

---

## Using Templates

This project includes **4 ready-to-use templates** optimized for different use cases. Choose the one that fits your needs:

### Template Options

| Template | Best For | Key Sections |
|----------|----------|--------------|
| **Default** (`app/page.tsx`) | General personal branding | Hero, About, Services, Work, FAQ, Contact |
| **Services** (`templates/services.tsx`) | Consultants, coaches, freelancers | DIY/DWY/DFY tiers, case studies, testimonials |
| **Portfolio** (`templates/portfolio.tsx`) | Designers, developers, creatives | Project grid, skills, experience timeline |
| **Resume** (`templates/resume.tsx`) | Job seekers, career changers | Experience, skills matrix, education, projects |
| **Enterprise** (`templates/enterprise.tsx`) | Internal initiatives, change management | Vision, benefits, roadmap, FAQ, get involved |

### Quick Start with Templates

| Natural Language | CLI Command |
|-----------------|-------------|
| "Switch to the services template for consultants" | `cp templates/services.tsx app/page.tsx` |
| "Use the portfolio template for my design work" | `cp templates/portfolio.tsx app/page.tsx` |
| "Change to the resume template" | `cp templates/resume.tsx app/page.tsx` |
| "Use the enterprise template for our initiative" | `cp templates/enterprise.tsx app/page.tsx` |

### Customizing Templates

Each template has placeholder content marked with `[brackets]`. Tell your AI agent what to customize:

**Services Template:**
```
"Customize the services template with:
- Name: Sarah Chen
- Specialty: AI Strategy Consulting
- Tier 1: AI Readiness Assessment - $497
- Tier 2: Implementation Coaching - $2,500/month
- Tier 3: Full-Service AI Transformation - Custom"
```

**Portfolio Template:**
```
"Update the portfolio template with:
- Name: Alex Rivera
- Role: Product Designer
- Add 5 projects from my work at [Company]
- Skills: Figma, Framer, React, TailwindCSS"
```

**Resume Template:**
```
"Customize the resume with:
- Name: Jordan Park
- Target role: Senior Software Engineer
- Current: Tech Lead at StartupCo (2022-present)
- Previous: SDE II at BigTech (2019-2022)
- Skills: TypeScript, React, AWS, Go"
```

**Enterprise Template:**
```
"Customize the enterprise template for 'Project Phoenix':
- Initiative: Cloud Migration Program
- Sponsor: CTO Jane Wilson
- Phase 1: Assessment (Complete)
- Phase 2: Pilot Migration (Active - 65%)
- Phase 3: Full Migration (Upcoming)
- Key metric: 40% cost reduction target"
```

---

## Prompt Library

Copy and paste these natural language prompts to your AI agent. Replace bracketed content with your information.

### Setup & Configuration

| Natural Language | What It Does |
|-----------------|--------------|
| "Install all the dependencies for this project" | Runs npm install |
| "Start the development server" | Starts Next.js dev server |
| "Build this project for production" | Creates optimized production build |
| "Check for TypeScript errors and fix them" | Runs type checking |

### Content Customization

#### Hero Section
```
"Update the hero section with:
- Name: [Your Name]
- Title: [Your Title/Profession]
- Tagline: [Your value proposition in one sentence]
- Primary CTA button: [Button text] linking to [#section or URL]
- Secondary CTA: [Button text] linking to [URL]"
```

#### Services Section
```
"Replace the services section with these 3 services:
1. [Service Name]: [Description] - $[Price] or [Pricing model]
2. [Service Name]: [Description] - $[Price] or [Pricing model]
3. [Service Name]: [Description] - $[Price] or [Pricing model]
Include icons that match each service theme."
```

#### About/Authority Section
```
"Update the authority/about section with:
- Years of experience: [X years]
- Key credential 1: [Certification/Degree/Achievement]
- Key credential 2: [Notable client/project/publication]
- Key credential 3: [Award/Recognition]
- Brief bio: [2-3 sentences about your background]"
```

#### Case Studies/Portfolio
```
"Add a case studies section with these projects:
1. [Project Name]: [Problem solved] → [Result achieved] for [Client type]
2. [Project Name]: [Problem solved] → [Result achieved] for [Client type]
3. [Project Name]: [Problem solved] → [Result achieved] for [Client type]
Include metrics where possible (%, $, time saved)."
```

#### Testimonials
```
"Add a testimonials section with these quotes:
1. '[Quote]' - [Name], [Title] at [Company]
2. '[Quote]' - [Name], [Title] at [Company]
3. '[Quote]' - [Name], [Title] at [Company]"
```

#### FAQ Section
```
"Create an FAQ section answering these questions:
1. [Common question about your services]
2. [Question about pricing/process]
3. [Question about qualifications/experience]
4. [Question about getting started]
Make answers concise (2-3 sentences each)."
```

#### Contact Section
```
"Update the contact section with:
- Email: [your@email.com]
- Calendly link: [https://calendly.com/yourusername]
- LinkedIn: [https://linkedin.com/in/yourusername]
- GitHub: [https://github.com/yourusername] (optional)
- Location: [City, State/Country]"
```

### Styling & Design

| Natural Language | What It Does |
|-----------------|--------------|
| "Change the primary color from blue to [green/purple/teal]" | Updates color scheme site-wide |
| "Change the fonts to Poppins for headings and Open Sans for body" | Updates typography |
| "Make sure all sections have proper dark mode styling" | Fixes dark mode issues |
| "Fix the mobile responsiveness in the [section name]" | Improves mobile layout |
| "Add subtle fade-in animations when sections scroll into view" | Adds scroll animations |

### Docker & Container Operations

| Natural Language | CLI Command |
|-----------------|-------------|
| "Build a Docker image tagged my-landing:v1" | `docker build -t my-landing:v1 .` |
| "Run the Docker container on port 3000" | `docker run -p 3000:3000 my-landing:v1` |
| "Show me the status of running containers" | `docker ps` |
| "Show the logs from my running container" | `docker logs <container-id>` |
| "Stop and remove all running containers" | `docker stop $(docker ps -q) && docker rm $(docker ps -aq)` |
| "Rebuild the image and restart the container" | `npm run docker:down && npm run docker:dev` |

### AWS Deployment

| Natural Language | CLI Command |
|-----------------|-------------|
| "Help me configure AWS CLI with my credentials" | `aws configure` |
| "Create an ECR repository named my-landing-page in us-west-2" | `aws ecr create-repository --repository-name my-landing-page --region us-west-2` |
| "Log Docker into my ECR registry" | `aws ecr get-login-password --region us-west-2 \| docker login --username AWS --password-stdin <account>.dkr.ecr.us-west-2.amazonaws.com` |
| "Tag and push my-landing:v1 to ECR" | `docker tag my-landing:v1 <ecr-uri>:latest && docker push <ecr-uri>:latest` |
| "Deploy my ECR image to App Runner with 1 vCPU and 2GB memory" | `aws apprunner create-service --service-name my-landing --source-configuration ...` |
| "Show me the public URL of my App Runner service" | `aws apprunner describe-service --service-arn <arn> --query 'Service.ServiceUrl'` |
| "Check the status of my App Runner deployment" | `aws apprunner describe-service --service-arn <arn>` |
| "Show me recent logs from my App Runner service" | `aws logs tail /aws/apprunner/my-landing/service --follow` |
| "Estimate the monthly cost of running this on App Runner" | Approximately $5-15/month |
| "Delete my App Runner service to avoid charges" | `aws apprunner delete-service --service-arn <arn>` |

### Git & Version Control

| Natural Language | CLI Command |
|-----------------|-------------|
| "Initialize git and create the first commit" | `git init && git add . && git commit -m "Initial commit"` |
| "Create a new branch for adding [feature name]" | `git checkout -b feature/[feature-name]` |
| "Commit my changes with a good message" | `git add . && git commit -m "[message]"` |
| "Push my branch to GitHub" | `git push -u origin [branch-name]` |
| "Create a pull request for my changes" | `gh pr create --title "[title]" --body "[description]"` |

### Troubleshooting

| Natural Language | What To Do |
|-----------------|------------|
| "The build is failing with this error: [paste error]" | AI analyzes and fixes the error |
| "The [section] looks broken on mobile" | AI fixes responsive design |
| "My Docker container exits immediately" | AI debugs container issues |
| "I'm getting this AWS error: [paste error]" | AI diagnoses AWS configuration |
| "Fix all TypeScript errors in the project" | AI runs typecheck and fixes errors |

### Enterprise Initiative Prompts

#### Transform to Initiative Site
```
"Transform this landing page into an internal initiative communication site for [Initiative Name] sponsored by [Executive Name, Title]"
```

#### Vision & Business Context
```
"Replace the about section with a Vision & Business Context section explaining:
- The Challenge: [Current business problem]
- Our Vision: [Future state we're creating]
- Why Now: [Market forces, competitive pressure, opportunity]
- Strategic Alignment: [How this supports company OKRs]"
```

#### Benefits by Stakeholder
```
"Replace the services section with a Benefits section for three audiences:
- For Employees: [How this improves their work]
- For Customers: [How this improves their experience]
- For the Business: [Revenue, cost, competitive impact]"
```

#### Program Roadmap
```
"Replace case studies with a Roadmap showing:
- Phase 1 [Name] (Q1-Q2): [Deliverables] - Status: Active
- Phase 2 [Name] (Q3-Q4): [Deliverables] - Status: Upcoming
- Phase 3 [Name] (Next Year): [Deliverables] - Status: Future
Include success metrics for each phase."
```

#### Internal FAQ
```
"Update FAQ for an internal initiative addressing:
- How will this affect my day-to-day work?
- Will there be job losses?
- What if I have concerns or ideas?
- What's the timeline for my team?"
```

#### Get Involved Section
```
"Replace contact section with a Get Involved section:
- Ways to Participate: [Champion role, working groups, pilot program]
- Stay Informed: [Newsletter, town halls, Slack channel]
- Key Contacts: [Program lead, change management, support]"
```

#### Progress Updates
```
"Add a Metrics Dashboard section showing current vs target:
- Adoption: [X]% → [Y]% employees using new system
- Efficiency: [X] days → [Y] days cycle time
- Savings: $[X]M → $[Y]M annual cost reduction
- Satisfaction: [X] → [Y] employee NPS"
```

---

## Content Templates

Choose a template that matches your use case:

### 1. Services Template (Consultants, Freelancers)
- Hero with value proposition
- 3-tier service offerings (DIY/DWY/DFY)
- Authority/credentials section
- Case studies with metrics
- FAQ section
- Contact with Calendly

### 2. Portfolio Template (Designers, Developers)
- Hero with specialty
- Project gallery with filters
- Skills/technologies section
- Work experience timeline
- Testimonials
- Contact form

### 3. Resume Template (Job Seekers)
- Professional headshot hero
- Experience timeline
- Skills matrix
- Education & certifications
- Publications/projects
- Download PDF option

### 4. Enterprise Initiative Template (Internal Communications)
- Vision & business context section
- Executive sponsor highlight
- Benefits by stakeholder (employees, customers, business)
- Program roadmap with phases
- Metrics dashboard
- FAQ addressing change concerns
- Get involved / participation options
- Progress updates and milestones

See `docs/CONTENT-TEMPLATES.md` for complete examples and prompts.

---

## How to Use This Project Documentation

This project includes comprehensive documentation for each use case. Follow the guide below based on your needs.

### Step 1: Choose Your Use Case

| If you're building... | Start with PRD | Then use Content Template |
|-----------------------|----------------|---------------------------|
| Consulting/Freelance site | [PRD Template 1: Consulting Services](docs/PRD-TEMPLATES.md#prd-template-1-consulting-services) | [Template 1: Consulting Services](docs/CONTENT-TEMPLATES.md#template-1-consulting-services) |
| Designer/Developer portfolio | [PRD Template 2: Portfolio](docs/PRD-TEMPLATES.md#prd-template-2-portfolio-designersdevelopers) | [Template 2: Portfolio](docs/CONTENT-TEMPLATES.md#template-2-portfolio-designersdevelopers) |
| Digital resume/CV | [PRD Template 3: Digital Resume](docs/PRD-TEMPLATES.md#prd-template-3-digital-resume) | [Template 3: Digital Resume](docs/CONTENT-TEMPLATES.md#template-3-digital-resume) |
| Internal initiative site | [PRD Template 4: Enterprise Initiative](docs/PRD-TEMPLATES.md#prd-template-4-enterprise-initiative-communication) | [Template 4: Enterprise Initiative](docs/CONTENT-TEMPLATES.md#template-4-enterprise-initiative-communication) |

### Step 2: Review Your PRD Template

Each PRD template provides:

| Section | What You'll Learn |
|---------|-------------------|
| **Executive Summary** | What your landing page should achieve |
| **Problem Statement** | Who your target audience is and their challenges |
| **User Stories** | Specific requirements with acceptance criteria |
| **Functional Requirements** | Which sections to include and what content |
| **Success Metrics** | How to measure if your page is working |
| **Content Requirements** | Detailed guidance for each section |

**Generate a Custom PRD:**
```
"Create a PRD for my [consulting/portfolio/resume/initiative] landing page
targeting [audience] who need [what they need].
My goal is [primary goal] and success means [success metric]."
```

### Step 3: Customize Content Using Templates

Each content template provides:

| Component | What's Included |
|-----------|-----------------|
| **Section-by-section content** | Exactly what text to include |
| **Examples** | Real-world examples you can adapt |
| **Agentic prompts** | Copy-paste prompts to customize each section |
| **Best practices** | Tips for effective content |

### Step 4: Build and Deploy

| Phase | Documentation | Natural Language |
|-------|---------------|------------------|
| **Local Development** | [Quick Start](#quick-start) | "Start the dev container" |
| **Docker Testing** | [DEPLOYMENT-ROADMAP.md](docs/DEPLOYMENT-ROADMAP.md) | "Build and test the production container" |
| **AWS Deployment** | [DEPLOYMENT-ROADMAP.md](docs/DEPLOYMENT-ROADMAP.md) | "Push to ECR and deploy to App Runner" |

### Documentation Map

```
┌─────────────────────────────────────────────────────────────────┐
│                    PLANNING PHASE                                │
│                                                                  │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │  PRD-TEMPLATES   │────▶│ Choose your PRD  │                 │
│  │  (docs/)         │     │ template (1-4)   │                 │
│  └──────────────────┘     └──────────────────┘                 │
│           │                        │                            │
│           ▼                        ▼                            │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │  TECH-STACK.md   │     │ Understand user  │                 │
│  │  (Skills/Agents) │     │ stories & metrics│                 │
│  └──────────────────┘     └──────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   CUSTOMIZATION PHASE                            │
│                                                                  │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │ CONTENT-TEMPLATES│────▶│ Copy prompts for │                 │
│  │  (docs/)         │     │ each section     │                 │
│  └──────────────────┘     └──────────────────┘                 │
│           │                        │                            │
│           ▼                        ▼                            │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │  GEMINI.md or    │     │ Run prompts with │                 │
│  │  CLAUDE.md       │     │ AI assistant     │                 │
│  └──────────────────┘     └──────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT PHASE                              │
│                                                                  │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │ DEPLOYMENT-      │────▶│ Follow step-by-  │                 │
│  │ ROADMAP.md       │     │ step guide       │                 │
│  └──────────────────┘     └──────────────────┘                 │
│           │                        │                            │
│           ▼                        ▼                            │
│  ┌──────────────────┐     ┌──────────────────┐                 │
│  │ Tell your AI:    │     │ Live site on     │                 │
│  │ "Deploy to AWS"  │     │ App Runner       │                 │
│  └──────────────────┘     └──────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
```

### Quick Reference: Which Doc When?

| When you need to... | Use this document |
|---------------------|-------------------|
| Understand requirements for your use case | `docs/PRD-TEMPLATES.md` |
| Get copy-paste content and prompts | `docs/CONTENT-TEMPLATES.md` |
| Learn the tech stack and AI agents | `docs/TECH-STACK.md` |
| Set up AWS from scratch | `docs/AWS-DEPLOYMENT-GUIDE.md` |
| Learn AWS services | `docs/AWS-GLOSSARY.md` |
| Understand AWS pricing | `docs/AWS-PRICING-GUIDE.md` |
| Deploy to AWS step-by-step | `docs/DEPLOYMENT-ROADMAP.md` |
| Understand the overall project | `docs/PRD.md` |
| Configure Gemini CLI | `GEMINI.md` |
| Configure Claude Code | `CLAUDE.md` |

---

## Deployment Roadmap

### Phase 1: Local Development (Day 1)
1. Fork and clone repository
2. Start dev container: "Start the development container"
3. Customize content with prompts
4. View at http://localhost:3000

### Phase 2: Docker Testing (Day 1-2)
1. "Build and run the production container"
2. Test at http://localhost:3001
3. Verify all sections render
4. Check mobile responsiveness

### Phase 3: AWS Setup (Day 2)
1. Create AWS account (if needed)
2. "Help me configure AWS CLI"
3. "Create an ECR repository"
4. Set up IAM permissions

### Phase 4: Production Deploy (Day 2-3)
1. "Push my image to ECR"
2. "Deploy to App Runner"
3. Configure custom domain (optional)
4. Set up monitoring

### Phase 5: Maintenance
1. Update content as needed
2. Monitor costs (~$5-15/month)
3. "Show me my App Runner logs"
4. Update dependencies quarterly

---

## Cost Estimate

| Service | Monthly Cost |
|---------|-------------|
| AWS App Runner (1 vCPU, 2GB) | $5-15 |
| ECR Storage | <$1 |
| Data Transfer | <$1 |
| **Total** | **~$7-17/month** |

*Costs vary based on traffic. First 12 months may qualify for AWS Free Tier.*

---

## System Prompts

This project includes optimized system prompts for AI assistants:

- **CLAUDE.md** - Configuration for Anthropic's Claude Code (AWS BedRock availalbe; similar token usage costs)
- **AGENTS.md** - Shared instructions for all AI coding agents
- **GEMINI.md** - Configuration for Google's Gemini CLI

These files help the AI understand your project structure and coding standards.

---

## Support

### Documentation
- [**Success Stories**](docs/SUCCESS-STORIES.md) - What learners have built after this template
- [Product Requirements](docs/PRD.md) - Main PRD for the template project
- [PRD Templates by Use Case](docs/PRD-TEMPLATES.md) - Tailored PRDs for each landing page type
- [Tech Stack Details](docs/TECH-STACK.md) - Technology and agent documentation
- [AWS Deployment Guide](docs/AWS-DEPLOYMENT-GUIDE.md) - Complete AWS setup from scratch
- [AWS Glossary](docs/AWS-GLOSSARY.md) - Learn AWS services (ECR, App Runner, etc.)
- [AWS Pricing Guide](docs/AWS-PRICING-GUIDE.md) - Understand costs and free tier
- [Deployment Roadmap](docs/DEPLOYMENT-ROADMAP.md) - Phase-by-phase deployment guide
- [Content Templates](docs/CONTENT-TEMPLATES.md) - Ready-to-use content examples

### Getting Help
- Open an issue on GitHub
- Check the FAQ in documentation
- Tell your AI agent: "The build is failing with this error: [paste error]"

---

## Part of the AI Engineering Template Series

This landing page template is the **starting point** in a series of hands-on AI engineering templates. Master the fundamentals here, then level up:

### The Learning Path

```
┌─────────────────────────────────────────────────────────────────┐
│  FOUNDATION (You Are Here)                                      │
│  Agentic Landing Template                                       │
│  Learn: Containers, Cloud Deploy, AI-Assisted Coding            │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ AI Chat App     │    │ RAG Application │    │ Multi-Agent     │
│ Template        │    │ Template        │    │ Workflow        │
│                 │    │                 │    │ Template        │
│ Learn:          │    │ Learn:          │    │ Learn:          │
│ - LLM APIs      │    │ - Vector DBs    │    │ - Agent Orchestr│
│ - Streaming     │    │ - Embeddings    │    │ - Tool Use      │
│ - Chat UI       │    │ - Retrieval     │    │ - Planning      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Upcoming Templates (Coming Soon)

| Template | What You'll Build | Key Technologies |
|----------|-------------------|------------------|
| **AI Chat Application** | Conversational interface with streaming | OpenAI/Anthropic APIs, WebSockets |
| **RAG Knowledge Base** | Search your own documents | Vector databases, embeddings |
| **Multi-Agent Workflow** | Autonomous task completion | Agent frameworks, tool use |
| **AI-Powered API** | Backend with AI capabilities | AWS Bedrock, Lambda |

**Star this repo** to be notified when new templates are released!

---

## Contributing

We welcome contributions! Here's how:

### Share Your Story
Built something after learning from this template? Add it to [docs/SUCCESS-STORIES.md](docs/SUCCESS-STORIES.md)

### Report Issues
Found a bug or have a suggestion? [Open an issue](https://github.com/pingwu/agentic-landing-template/issues)

### Improve Documentation
Submit a PR with clearer explanations or additional examples

### Suggest Templates
What would you like to learn next? Let us know in the issues!

---

## License

MIT License - Feel free to use for personal or commercial projects.

---

## Project History

This template evolved from [**MACA (Multi-AI-Coding-Agent)**](https://github.com/pingwu/maca), a comprehensive AI-assisted development curriculum created in 2025.

### The Evolution

```
MACA (Sept 2025)                    Agentic Landing Template (2026)
────────────────                    ────────────────────────────────
5 AI coding agents          →       3 focused agents (Claude, Gemini, Codex)
5 portfolio projects        →       1 hands-on project
Comprehensive curriculum    →       Accessible entry point
Multi-domain learning       →       Cloud deployment focus
```

### Core Philosophy (Unchanged)

> *"The new professional superpower is not coding; it's orchestrating AI agents to build for you."*
> — MACA Curriculum

This template carries forward MACA's core insight: **the skill that matters is expressing problems clearly so AI can help solve them**. Whether you're a developer seeking amplification or a domain expert without coding background, the approach is the same — learn to collaborate with AI.

### Why a Simpler Starting Point?

MACA taught us that learners need:
1. **Quick wins** — See results in hours, not weeks
2. **Real outcomes** — Build something they'll actually use
3. **Transferable skills** — Patterns that apply to any project

The landing page template delivers all three while opening the door to deeper learning.

### The Journey Continues

- **MACA** remains the comprehensive resource for those ready to go deeper
- **This template** is the accessible on-ramp
- **Future templates** (Chat, RAG, Multi-Agent) extend the learning path

---

## Credits

**Course**: CSE 651 - Software Development with Agentic AI
**Institution**: [CSTU.edu](https://cstu.edu)
**Instructor**: Ping Wu
**Demo Event**: [AWS Builder Loft, San Francisco - March 2, 2026](https://luma.com/f73qb06t)

### Acknowledgments
- AWS for cloud infrastructure and Builder Loft event
- Anthropic, Google, and OpenAI for AI coding assistants
- The open source community for the amazing tools

---

## The Question

> **"When AI can do anything for you, what will you build?"**

This template gives you the foundation. The skills. The confidence.

**Your answer is next.**

---

**Ready to start?** Jump to [Quick Start](#quick-start) above!
