# Tech Stack Documentation

## Agentic Landing Page Template

**Version**: 1.0
**Last Updated**: 2026-01-25

---

## Overview

This document details the complete technology stack, including core technologies, AI agent skills, and subagents that help accomplish project goals.

---

## Core Technology Stack

### Frontend Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.x | React framework with App Router, SSR/SSG |
| **React** | 19.x | UI component library |
| **TypeScript** | 5.x | Type-safe JavaScript |

**Why Next.js 16?**
- App Router for simplified routing
- Server Components by default (better performance)
- Built-in optimizations (images, fonts, scripts)
- Standalone output for Docker deployment

### Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **PostCSS** | 8.x | CSS processing |
| **@tailwindcss/postcss** | 4.x | Tailwind PostCSS plugin |

**Tailwind CSS 4 Changes**:
```css
/* New v4 syntax */
@import "tailwindcss";

/* Use theme() function */
body {
  background-color: theme(colors.slate.50);
}

/* Old v3 syntax (don't use) */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Containerization

| Technology | Version | Purpose |
|------------|---------|---------|
| **Docker** | Latest | Container runtime |
| **Docker Compose** | Latest | Multi-container orchestration |

**Multi-Stage Dockerfile**:
```dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
# Install production dependencies

# Stage 2: Builder
FROM node:20-alpine AS builder
# Build the application

# Stage 3: Runner
FROM node:20-alpine AS runner
# Production-ready image (~150MB)
```

### Cloud Infrastructure

| Service | Purpose | Cost |
|---------|---------|------|
| **AWS ECR** | Docker image registry | <$1/month |
| **AWS App Runner** | Managed container hosting | $5-15/month |
| **AWS CloudWatch** | Logging and monitoring | Free tier |

---

## AI Agent Tools

### Gemini CLI

**Installation**:
```bash
npm install -g @anthropic-ai/gemini-cli
```

**Configuration**: Uses `GEMINI.md` in project root

**Best For**:
- Quick content updates
- Simple styling changes
- Conversational development

### Claude Code

**Installation**:
```bash
npm install -g @anthropic-ai/claude-code
```

**Configuration**: Uses `CLAUDE.md` in project root

**Best For**:
- Complex refactoring
- Multi-file changes
- Detailed explanations

---

## Top 3 Agent Skills

Agent skills are specialized capabilities that AI tools can invoke to accomplish specific tasks. Here are the most useful skills for this project:

### Skill 1: Code Editor

**Purpose**: Read, edit, and create code files

**Capabilities**:
- Read file contents
- Make targeted edits (find/replace)
- Create new files
- Understand project structure

**Example Usage**:
```
Prompt: "Update the hero section title to 'John Smith'"

Agent Action:
1. Read app/page.tsx
2. Find hero section
3. Edit title text
4. Save file
```

**When to Use**:
- Customizing content
- Fixing bugs
- Adding new sections
- Refactoring code

### Skill 2: Bash/Terminal

**Purpose**: Execute shell commands

**Capabilities**:
- Run npm commands
- Execute Docker commands
- Run AWS CLI commands
- Git operations

**Example Usage**:
```
Prompt: "Build the Docker image and run it"

Agent Action:
1. Execute: docker build -t landing:v1 .
2. Execute: docker run -p 3000:3000 landing:v1
3. Report success/failure
```

**When to Use**:
- Installing dependencies
- Building/running containers
- Deploying to AWS
- Version control operations

### Skill 3: Web Search/Fetch

**Purpose**: Retrieve information from the web

**Capabilities**:
- Search documentation
- Fetch API references
- Find code examples
- Research best practices

**Example Usage**:
```
Prompt: "How do I add Google Analytics to Next.js 16?"

Agent Action:
1. Search for Next.js 16 analytics documentation
2. Find recommended approach
3. Provide implementation steps
```

**When to Use**:
- Learning new concepts
- Debugging errors
- Finding documentation
- Discovering best practices

---

## Top 3 Subagents

Subagents are specialized AI agents that handle specific types of tasks. They work autonomously on complex, multi-step operations.

### Subagent 1: Explore Agent

**Type**: `subagent_type=Explore`

**Purpose**: Understand codebase structure and find relevant code

**Best For**:
- "Where is the services section defined?"
- "How does the dark mode work?"
- "Find all places that use the blue color"
- "What's the project structure?"

**Example**:
```
Prompt: "Find where the contact email is configured"

Explore Agent:
1. Search for email patterns in codebase
2. Check page.tsx for contact section
3. Look for environment variables
4. Report: "Contact email is hardcoded in app/page.tsx line 456"
```

**Capabilities**:
- Pattern matching (glob, grep)
- File reading
- Code structure analysis
- Dependency tracing

### Subagent 2: Plan Agent

**Type**: `subagent_type=Plan`

**Purpose**: Design implementation strategies before coding

**Best For**:
- "Plan how to add a blog section"
- "Design the portfolio template structure"
- "What's the best approach for adding animations?"
- "Plan the AWS deployment steps"

**Example**:
```
Prompt: "Plan how to add a testimonials section"

Plan Agent:
1. Analyze existing section patterns
2. Identify required components
3. Plan data structure for testimonials
4. Outline CSS/styling approach
5. Create step-by-step implementation plan

Output:
- Step 1: Create testimonials data array
- Step 2: Build TestimonialCard component
- Step 3: Add section to page.tsx
- Step 4: Add navigation link
- Step 5: Test responsiveness
```

**Capabilities**:
- Codebase exploration
- Architecture analysis
- Trade-off evaluation
- Step-by-step planning

### Subagent 3: General-Purpose Agent

**Type**: `subagent_type=general-purpose`

**Purpose**: Handle complex, multi-step tasks autonomously

**Best For**:
- "Add dark mode support to all sections"
- "Refactor services section to use components"
- "Update all colors from blue to green"
- "Add SEO metadata to all pages"

**Example**:
```
Prompt: "Change the primary color from blue to purple throughout the site"

General-Purpose Agent:
1. Search for all blue-* Tailwind classes
2. Map blue variants to purple equivalents
3. Edit app/page.tsx (multiple locations)
4. Edit app/globals.css (if needed)
5. Verify dark mode variants updated
6. Report all changes made

Output:
- Changed 47 instances of blue-* to purple-*
- Updated: app/page.tsx (lines 23, 45, 67, ...)
- Dark mode classes also updated
```

**Capabilities**:
- Multi-file editing
- Pattern-based search/replace
- Code refactoring
- Comprehensive changes

---

## Agent Usage Matrix

| Task | Best Skill | Best Subagent |
|------|------------|---------------|
| Update single text | Code Editor | - |
| Change multiple colors | Code Editor | General-Purpose |
| Find where X is defined | - | Explore |
| Add new feature | Code Editor | Plan → General-Purpose |
| Run Docker commands | Bash | - |
| Deploy to AWS | Bash | General-Purpose |
| Understand codebase | - | Explore |
| Debug build error | Bash + Code Editor | - |
| Refactor component | Code Editor | Plan |
| Research documentation | Web Search | - |

---

## Prompt Patterns for Agents

### Invoking Explore Agent
```
"Search the codebase to find..."
"Where is [X] defined?"
"How does [feature] work in this project?"
"Find all files that contain [pattern]"
```

### Invoking Plan Agent
```
"Plan how to implement..."
"Design the approach for..."
"What's the best way to add..."
"Create an implementation plan for..."
```

### Invoking General-Purpose Agent
```
"Update all instances of..."
"Refactor [component] to..."
"Add [feature] throughout the..."
"Perform a comprehensive update to..."
```

---

## Development Workflow with Agents

### 1. Exploration Phase
```bash
# Use Explore agent to understand the project
claude "Search the codebase to understand the landing page structure"
gemini "Find where the services section is defined"
```

### 2. Planning Phase
```bash
# Use Plan agent for complex features
claude "Plan how to add a portfolio gallery section"
gemini "Design the approach for adding contact form validation"
```

### 3. Implementation Phase
```bash
# Use Code Editor skill for changes
claude "Update the hero section with my name 'Sarah Chen'"
gemini "Change the primary color from blue to teal"
```

### 4. Testing Phase
```bash
# Use Bash skill for running commands
claude "Build the Docker image and verify it runs"
gemini "Run npm run build and fix any errors"
```

### 5. Deployment Phase
```bash
# Use General-Purpose agent for multi-step deployment
claude "Deploy this project to AWS App Runner using ECR"
gemini "Push the Docker image to ECR and create App Runner service"
```

---

## Configuration Files

### package.json
```json
{
  "name": "agentic-landing-template",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "next": "^16.1.4",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "tailwindcss": "^4.1.18",
    "typescript": "^5.9.3"
  }
}
```

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",  // Required for Docker
  images: {
    unoptimized: true,   // Simpler for App Runner
  },
};

export default nextConfig;
```

### postcss.config.mjs
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Performance Optimizations

### Build Optimizations
- Next.js standalone output (smaller Docker image)
- Multi-stage Docker build (production deps only)
- Turbopack for faster development builds

### Runtime Optimizations
- Server Components (less client JS)
- Static generation where possible
- Image optimization (unoptimized for App Runner simplicity)

### Tailwind Optimizations
- JIT compilation (only used classes)
- PostCSS processing at build time
- No runtime CSS-in-JS overhead

---

## Security Considerations

| Aspect | Implementation |
|--------|----------------|
| No secrets in code | Use environment variables |
| Non-root container | Docker USER directive |
| HTTPS | App Runner provides by default |
| Dependency audit | Regular `npm audit` |
| Type safety | Strict TypeScript |

---

## Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| "Unknown utility class" | Tailwind v3 syntax | Use `@import "tailwindcss"` |
| Build fails | TypeScript errors | Run `npm run lint` |
| Container exits | Runtime error | Check `docker logs` |
| ECR push fails | Auth expired | Re-run ECR login |
| Page 404 | Wrong port | Use port 3000 in container |

### Debug Commands
```bash
# Check TypeScript
npx tsc --noEmit

# Check Tailwind
npm run build 2>&1 | grep -i tailwind

# Check Docker
docker logs $(docker ps -q)

# Check AWS
aws apprunner describe-service --service-arn <ARN>
```

---

**Last Updated**: 2026-01-25
**Version**: 1.0
