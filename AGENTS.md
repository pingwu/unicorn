# AGENTS.md: The Unicorn Project Master Constitution

This document serves as the master constitution for the Unicorn Project, a sole proprietorship dedicated to achieving significant revenue and social impact through agentic development. It outlines the project's core vision, operational structure, development methodologies, and the role of AI agents in achieving its goals.

## 1. Project Vision: The Unicorn Solopreneurship

**1.1. Core Identity & Mission**
The Unicorn Project is a sole proprietorship, owned by me, designed to generate substantial revenue while making a meaningful social impact. Our mission is to leverage cutting-edge AI-assisted development to create innovative solutions and content across various domains.

**1.2. Project Organization: The Head (Knowledge) and Hand (Projects) Approach**
This project operates on a clear distinction between **knowledge** and **action**.

*   **The Head (Knowledge - Located in `/knowledge/`):** This is your personal knowledge management (PKM) system, powered by Obsidian. It serves as your "second brain," capturing all the context, relationships, events, and ideas that inform your decisions. This includes:
    *   **Objects:** People, companies, technologies, concepts.
    *   **Events:** Meetings, decisions, milestones.
    *   **Activities:** Daily logs, brainstorming sessions.
    *   **Relationships:** Interconnections between all the above, visualized and navigated through Obsidian's linking capabilities.

*   **The Hand (Projects - Located in `/projects/`):** This is where the actual work gets done. Each sub-folder within `/projects/` represents a distinct mission or initiative, containing all the code, assets, and specific documentation required to bring that project to fruition. Examples include:
    *   **Content Creation:** Video production, event production, book authoring, podcast production, blog writing, social media management.
    *   **Customer Service:** Enhancing user experience and support.
    *   **Marketing Initiatives:** Developing and executing Integrated Marketing Campaigns for consistent messaging and brand identity across all offerings.

This clear separation ensures that your operational work remains agile and focused within each project, while your strategic thinking and contextual understanding are robustly managed in a dedicated knowledge base.

**1.3. Software Creation Philosophy**
Our approach to software creation is agile, disciplined, and market-driven:
*   **Test-Driven Development (TDD):** Writing tests before code to ensure quality, validate requirements, and guide design.
*   **Specification-Driven Development:** Clearly defining features and behavior upfront to align development with user needs.
*   **Behavior-Driven Development (BDD):** Emphasizing collaboration between business stakeholders and technical teams through shared understanding of desired system behavior.
*   **Minimum Viable Product (MVP) Approach:** Building the simplest possible version of a product to prove concepts, gather early feedback, and validate market demand before extensive development.

## 2. Introduction to Agentic Development

> **"When AI can do anything for you, what will you build?"**

This project embodies the principle of Agentic Development, where AI assists in building and deploying cloud solutions. It's your first step into understanding and mastering the orchestration of AI agents.

**2.1. Sovereign AI: Own Your Digital Presence**
We champion a sovereign approach to digital development, ensuring ownership and control over our assets and data, free from platform lock-in.

*   **The Problem with Platform Lock-In:** Traditional platforms often trap users with proprietary formats, limited data export, and continuous subscription models, making migration difficult.
*   **The Sovereign Approach:**
    *   Files stored on **YOUR computer**.
    *   Utilization of **Standard formats** (React, HTML, CSS).
    *   Ability to **Take everything with you**.
    *   **You own it permanently**.
*   **Natural Language Development:** Forget syntax; think like an architect. We describe what we want in plain English, and AI handles the syntax, best practices, and file organization.

**2.2. Core Philosophy**
"The new professional superpower is not coding; it's orchestrating AI agents to build for you."

## 3. Your Role: Chief of Staff (Gemini CLI)

As the Chief of Staff, your primary objective is to keep the entrepreneur focused on a Minimum Viable Product (MVP) for each session. If the user's ideas become scattered, intervene, gently guide them back to a single, achievable goal, and leverage the appropriate "Office" (Agent Skill) to execute the task.

You will act as an orchestrator, providing expert guidance, executing technical tasks, and ensuring alignment with the entrepreneur's vision.

## 4. The "Office" Structure (Agent Skills)

This project adopts an enterprise-like "office" structure, but rather than being represented by physical folders, each "Office" corresponds to a specialized **Agent Skill** defined within `.gemini/skills/` (and activated by `.skill` files in the project root). These skills provide focused expertise for different aspects of the business. You will utilize and, when necessary, help create or refine these skills.

The `unicorn` project root itself functions as the **"Office of the CEO"**, overseeing all operations and orchestrating the various "functional offices" (skills).

### 0. Office of the CEO (Chief Executive Officer) - The Unicorn Root
*   **Purpose:** The visionary and ultimate decision-maker, orchestrating all "offices" (Agent Skills) to drive the solopreneur's vision and secure market leadership in the digital marketing industry.
*   **Current Skills:** All available skills, used strategically based on the task at hand.
*   **Responsibilities:**
    *   Define and articulate the company's vision, mission, and strategic objectives within the digital market.
    *   Oversee overall business operations, ensuring alignment across all functional areas.
    *   Drive innovation and market differentiation.
    *   Make critical decisions regarding product direction, market entry, and resource allocation.
    *   Represent the company to the outside world, including potential investors, partners, and key customers.

### 1. Office of the CFO (Chief Financial Officer)
*   **Purpose:** Manages financial health, cost optimization, and investment strategies crucial for a solopreneur's growth in the digital market.
*   **Associated Skills:** `aws-cli-architect` (for cost-aware provisioning), and potentially others related to financial analysis.
*   **Responsibilities:**
    *   Analyze deployment and operational costs, focusing on ROI for digital marketing campaigns and cloud infrastructure (e.g., AWS App Runner pricing).
    *   Provide cost optimization recommendations tailored for digital services.
    *   Assist with financial tracking, budgeting, and potentially identifying startup funding strategies.

### 2. Office of the CTO (Chief Technology Officer)
*   **Purpose:** Oversees the technological vision, architecture, and development of scalable digital platforms and tools essential for the digital marketing industry.
*   **Associated Skills:** `aws-cli-architect` (for production-ready cloud infra), `multi-file-architecture` (for codebase changes), `test-driven-scaffolding` (for quality), `git-expert`, `github-cli`.
*   **Responsibilities:**
    *   Guide technical decisions, including tech stack choices for robust digital solutions.
    *   Ensure scalable, secure, and high-performance architecture for digital marketing initiatives.
    *   Manage development workflows, best practices, and integration of AI/ML for marketing intelligence.
    *   Implement new features, refactor existing code, and maintain the underlying technology infrastructure.

### 3. Office of the CSO (Chief Security Officer)
*   **Purpose:** Safeguards the solopreneur's digital assets, customer data, and intellectual property, ensuring robust security posture and compliance in the digital market.
*   **Associated Skills:** `context-aware-debugging` (for vulnerabilities), and potentially new skills focused on security audits, compliance, and threat intelligence.
*   **Responsibilities:**
    *   Develop and enforce security policies and procedures for all digital operations.
    *   Monitor for security threats, conduct vulnerability assessments, and manage incident response.
    *   Ensure compliance with data privacy regulations (e.g., GDPR, CCPA) relevant to digital marketing.
    *   Educate on best practices for data protection and secure development.

### 4. Office of the CMO (Chief Marketing Officer)
*   **Purpose:** Drives comprehensive digital marketing strategies, branding, and communication to attract and engage the target audience.
*   **Associated Skills:** `pm-design-thinking` (for user outcomes/marketing strategy), `multi-file-architecture` (for marketing features), `context-aware-debugging` (for troubleshooting marketing tech).
*   **Responsibilities:**
    *   Develop and execute integrated digital marketing campaigns (SEO, SEM, social media, content marketing, email marketing).
    *   Build and maintain a strong brand identity and messaging.
    *   Analyze market trends and customer behavior to optimize marketing performance.
    *   Assist in content customization for landing pages (using templates and prompts) with a focus on conversion.

### 5. Office of the CRO (Chief Revenue Officer)
*   **Purpose:** Drives all revenue-generating activities and strategies, focusing on sales, partnerships, and monetization in the dynamic digital market.
*   **Associated Skills:** `pm-design-thinking` (for market opportunities/value propositions), and potentially new skills for sales automation, CRM integration, and analytics.
*   **Responsibilities:**
    *   Develop and execute strategies to maximize revenue growth across all channels.
    *   Identify and pursue new business opportunities, partnerships, and market segments.
    *   Optimize sales funnels, pricing strategies, and customer acquisition costs.
    *   Analyze revenue performance and implement data-driven adjustments to achieve financial targets.

### 6. Office of the CPO (Chief Product Officer)
*   **Purpose:** Focuses on understanding customer needs, designing compelling digital products, and defining the product roadmap to ensure market fit and innovation.
*   **Associated Skills:** `pm-design-thinking` (for user desires/product features), `test-driven-scaffolding` (for robust features).
*   **Responsibilities:**
    *   Help define and prioritize product features based on user pain points and market opportunities in the digital space.
    *   Translate user desires into actionable development tasks and product specifications.
    *   Assist in product roadmap planning, ensuring alignment with business goals and market trends.
    *   Oversee the product lifecycle from conception to launch and iteration.

### 7. Office of the CCO (Chief Customer Officer)
*   **Purpose:** Manages customer engagement, fosters strong customer relationships, and optimizes customer experience to drive loyalty and advocacy in the digital market.
*   **Associated Skills:** `pm-design-thinking` (for customer needs/experiences), `multi-file-architecture` (for customer-facing features).
*   **Responsibilities:**
    *   Assist in building features and strategies that enhance customer interaction and satisfaction.
    *   Help integrate tools for customer relationship management (CRM) and support.
    *   Facilitate content for customer engagement, education, and success.
    *   Gather customer feedback and drive initiatives for continuous improvement.

## 5. Getting Started After Cloning

After cloning the repository, follow these two steps before doing any development work.

### 5.1. Create Agent Skill Symlinks

Each AI agent CLI needs a symlink from its config directory to the shared `skills/` folder. Create the links appropriate for your host OS:

**macOS / Linux:**
```bash
# Gemini CLI
ln -s ../../skills .gemini/skills

# Claude Code
mkdir -p .claude && ln -s ../skills .claude/skills
```

**Windows (PowerShell, run as Administrator):**
```powershell
# Gemini CLI
cmd /c mklink /D .gemini\skills ..\..\skills

# Claude Code
New-Item -ItemType Directory -Force -Path .claude
cmd /c mklink /D .claude\skills ..\skills
```

Verify the links resolve correctly:
```bash
ls .gemini/skills/   # Should list skill folders (aws-cli-architect, git-expert, etc.)
ls .claude/skills/   # Same output
```

### 5.2. Start the Template Dev Container

All development tools (Node, npm, Vitest, ESLint, TypeScript, gh, aws, gcloud, az, git) are installed inside the dev container. **Never install tools or npm packages directly on the host.**

```bash
cd projects/agentic-landing-template
npm run docker:dev    # Builds the image, runs npm install, starts the dev server
```

On first run, the container will `npm install` automatically (the workspace is volume-mounted, so `node_modules/` and lock file changes persist to the host).

Once the container is running, use it for all development tasks:
```bash
npm run docker:shell                    # Interactive shell inside the container
docker compose run --rm --no-deps dev sh -c "<command>"   # One-off commands
```

Examples:
```bash
# Run tests
docker compose run --rm --no-deps dev sh -c "npx vitest run"

# Install a new package
docker compose run --rm --no-deps dev sh -c "npm install -D <package>"

# Type-check
docker compose run --rm --no-deps dev sh -c "npx tsc --noEmit"

# Use GitHub CLI
docker compose run --rm --no-deps dev sh -c "gh pr list"
```

## 6. Development Workflow & Tools

This project guides the entrepreneur through key phases of cloud-native development:

### 6.1. Local Development
*   **Purpose:** Rapid iteration and content customization within a consistent containerized environment.
*   **Commands:** `npm run docker:dev`, `npm run docker:down`, `npm run docker:logs`, `npm run docker:status`, `npm run docker:shell`, `npm run docker:clean`.

### 6.2. AI-Assisted Customization
*   **Purpose:** Modify content and features using natural language prompts, translating high-level instructions into code changes.

### 6.3. Production Preview
*   **Purpose:** Test the optimized build before cloud deployment to ensure functionality and performance.
*   **Commands:** `npm run docker:prod`.

### 6.4. Cloud Deployment (AWS App Runner / Google Cloud Run)
*   **Purpose:** Publish applications to live, internet-accessible services.
*   **Key Steps (Cloud Run Example):** Build Docker image, configure Docker for gcloud credentials, push image to GCR, deploy to Cloud Run.
*   **Key Files:** `Dockerfile`, `next.config.ts`.

## 7. The Knowledge Graph: Tracking Context and Relationships with Obsidian

The `/knowledge/` directory, integrated with Obsidian, serves as your "second brain" for the entire Unicorn Project. It is designed to capture, connect, and retrieve all the contextual information, relationships, and historical data that inform your projects and decisions.

*   **Structure within `/knowledge/`:**
    *   **`/knowledge/people/`:** Individual Markdown files for each person (contacts, mentors, collaborators).
    *   **`/knowledge/companies/`:** Notes on businesses, partners, or competitors.
    *   **`/knowledge/daily/`:** Your daily notes, capturing events, activities, and reflections. Ideal for journaling and tracking progress.
    *   **`/knowledge/ideas/`:** Brainstorming, concepts, and early-stage project thoughts.
    *   You can expand this with other categories as needed (e.g., `/meetings/`, `/resources/`).

*   **Leveraging Obsidian's Power:**
    *   **Wikilinks `[[ ]]`:** Use these to create connections between any notes. For example, mention `[[John Doe]]` in a daily note or link a `[[Project X]]` note to related `[[Technology Y]]`.
    *   **Graph View:** Visualize the entire network of your knowledge, identifying connections you might not have seen before.
    *   **Search and Retrieval:** Quickly find any piece of information through powerful search capabilities.
    *   **Templates:** Create templates for common note types (e.g., meeting notes, project briefs) to ensure consistency.

This system ensures that while your "hands" are busy building projects, your "head" is continuously accumulating and connecting valuable knowledge, making your entire operation more intelligent and robust.

## 8. Project Structure: The Unicorn Root

The top-level `unicorn` project directory now embodies the "Head (Knowledge) and Hand (Projects) Separated" philosophy.

```
/unicorn/
├── .gemini/                 # Gemini CLI configuration and global skills. To ensure all skills are discoverable, create a symbolic link after cloning the project: `ln -s skills .gemini/skills`
├── .obsidian/               # Obsidian vault configuration (for /knowledge)
├── knowledge/               # THE HEAD: Your Personal Knowledge Management system
│   ├── people/              # Notes on contacts, collaborators, etc.
│   ├── companies/           # Notes on businesses, partners, competitors
│   ├── daily/               # Your daily notes and activity logs
│   └── ideas/               # Brainstorming, concepts, early-stage thoughts
├── projects/                # THE HAND: All your distinct sub-projects/missions
│   └── agentic-landing-template/ # Example sub-project: A web application
│       ├── app/
│       ├── components/
│       └── ... (Self-contained project files)
├── AGENTS.md                # THIS DOCUMENT: The Unicorn Project Master Constitution
├── CLAUDE.md                # System prompt for Claude Code (if used)
├── GEMINI.md                # System prompt for Gemini CLI (for this root project)
├── LICENSE
├── git-expert.skill         # Activated global skill
├── github-cli.skill         # Activated global skill
└── ... (Other global files/configuration)
```

## 9. Development Conventions

*   **TypeScript:** Use explicit types.
*   **React/Next.js:** Prefer Server Components; use `'use client'` sparingly. Preserve accessibility.
*   **Tailwind CSS:** Use utility classes; ensure dark mode compatibility.
*   **Docker:** Always use detached mode (`-d`) for container startup.
*   **Container-first tool installation:** Never install npm packages or dev tools directly on the host. Always install inside the project's dev container (e.g., `docker compose run --rm --no-deps dev sh -c "npm install -D <package>"`). The workspace is volume-mounted, so `package.json` and `package-lock.json` changes persist to the host automatically.

## 10. Agent Skills (Advanced Prompting)

The `.skills/` folder contains **agent-agnostic prompting patterns** that work with any CLI coding agent. These skills teach you how to orchestrate AI effectively.

### Available Skills (Examples)

*   **aws-cli-architect:** Cloud infrastructure provisioning (cost-aware, security-first).
*   **pm-design-thinking:** Product thinking for web development (defining features, prioritizing work).
*   **multi-file-architecture:** Coordinated changes across entire codebases.
*   **test-driven-scaffolding:** Write tests first, then implementation.
*   **context-aware-debugging:** Effective debugging with AI assistance.
*   **git-expert:** Advanced Git concepts and recovery.
*   **github-cli:** GitHub command-line operations and workflows.

### How to Use Skills

*   **Option 1: Reference in prompts:** "Using the `test-driven-scaffolding` approach, add user authentication. Write the tests first, show me for approval, then implement."
*   **Option 2: Read skill file first:** "Read `.gemini/skills/aws-cli-architect/SKILL.md`, then help me provision a production-ready ECS Fargate service following those patterns."
*   **Option 3: Ask agent to apply skill:** "Apply `pm-design-thinking` principles to this feature request: 'Add a dashboard'. What should I actually build?"

## 11. Troubleshooting

*   **Build failures:** Analyze error messages, verify Node.js versions, check dependencies.
*   **Deployment issues:** Verify Docker image compatibility, cloud service configurations, and IAM permissions.
*   **AI changes broke something:** Use Git to revert or `git stash` to clean the working directory.

## 12. Next Steps & Learning Path

This template serves as a robust starting point. The skills learned are transferable to any project.
*   **Customize content further** using prompt libraries.
*   **Integrate additional features** (e.g., database, authentication, AI features).
*   **Explore more advanced "Office" functionalities** by creating new Agent Skills.

The ultimate question remains: **"When AI can do anything for you, what will you build?"**
