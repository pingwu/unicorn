# GCP Deployment Roadmap

## From Local Development to Production on Google Cloud

**Version**: 1.0
**Last Updated**: 2026-02-03

---

## Overview

This guide walks you through deploying your landing page from local development to GCP production using both natural language (AI agent) commands and traditional CLI commands. Cloud Run's generous free tier means a low-traffic landing page costs **$0/month**.

---

## Prerequisites Checklist

Before starting deployment:

- [ ] **Docker Desktop** — [Download](https://www.docker.com/products/docker-desktop/)
- [ ] **Git** — [Download](https://git-scm.com/)
- [ ] **AI Coding Agent** — [Claude Code](https://docs.anthropic.com/en/docs/claude-code) or [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [ ] **GCP Account** — [Sign up here](https://cloud.google.com/) (includes $300 free credit)
- [ ] **gcloud CLI** — Pre-installed inside the dev container
- [ ] **Dev container runs** — `npm run docker:dev` starts successfully
- [ ] **Docker production image works** — `npm run docker:prod` shows healthy container

---

## Phase 1: Local Development (Day 1)

### Goal
Get the landing page running locally inside a Docker container and customize content.

> **Container-first**: All development happens inside Docker from day one — the same environment used in production. Never install npm packages or run builds on the host.

### Steps

#### 1.1 Clone and Start Dev Container

**Natural Language (Recommended)**:
```
"Clone my forked repository and start the dev container"
```

**CLI Reference**:
```bash
git clone https://github.com/YOUR-USERNAME/agentic-landing-template.git
cd agentic-landing-template
npm run docker:dev
# Open http://localhost:3000
```

> Do NOT run `npm install` on the host. The dev container installs dependencies automatically.

#### 1.2 Verify Dev Server

**Natural Language (Recommended)**:
```
"Check if the dev container is running and the page loads"
```

**CLI Reference**:
```bash
npm run docker:status
# Open http://localhost:3000
```

#### 1.3 Customize Content

**Natural Language Examples**:
```
"Update the hero with my name 'Alex Rivera' and title 'Product Designer'"
"Change the services to: Brand Design $2000, UX Audit $1500, Design System $5000"
"Update contact email to alex@mydesignstudio.com"
```

#### 1.4 Verify Build

**Natural Language (Recommended)**:
```
"Build the project inside the container and report any errors"
```

**CLI Reference**:
```bash
docker compose run --rm --no-deps dev sh -c "npm run build"
```

### Success Criteria
- [ ] Dev container starts with `npm run docker:dev`
- [ ] Page loads at localhost:3000
- [ ] Content shows your customizations
- [ ] Build completes without errors inside the container

---

## Phase 2: Docker Containerization (Day 1-2)

### Goal
Package the application in a Docker container that works identically to production.

### Steps

#### 2.1 Build Docker Image

**Natural Language (Recommended)**:
```
"Build a Docker image tagged my-landing:v1"
```

**CLI Reference**:
```bash
docker build -t my-landing:v1 .
```

> **Apple Silicon (M1/M2/M3)**: Cloud services require `linux/amd64`. Add `--platform linux/amd64` when building for deployment:
> ```bash
> docker build --platform linux/amd64 -t my-landing:v1 .
> ```

#### 2.2 Run Container Locally

**Natural Language (Recommended)**:
```
"Run my-landing:v1 container on port 3001"
```

**CLI Reference**:
```bash
docker run -p 3001:3000 my-landing:v1
# Open http://localhost:3001
```

#### 2.3 Verify Container Health

**Natural Language (Recommended)**:
```
"Check if my Docker container is running and healthy"
```

**CLI Reference**:
```bash
docker ps
# Should show "healthy" status after ~40 seconds
```

#### 2.4 Test with Docker Compose

**Natural Language (Recommended)**:
```
"Start the application using Docker Compose"
```

**CLI Reference**:
```bash
docker-compose up --build
# Open http://localhost:3001
```

### Success Criteria
- [ ] Docker image builds successfully
- [ ] Container shows "healthy" status
- [ ] Page accessible at localhost:3001
- [ ] Content matches development version

---

## Phase 3: GCP Account Setup (Day 2)

### Goal
Configure GCP credentials and create necessary resources.

### Steps

#### 3.1 Authenticate gcloud CLI

**Natural Language (Recommended)**:
```
"Help me log in to gcloud CLI and set up my project"
```

**CLI Reference**:
```bash
gcloud auth login
gcloud config set project my-landing-page
gcloud config set run/region us-central1
```

#### 3.2 Create Project and Enable APIs

**Natural Language (Recommended)**:
```
"Create a GCP project named 'my-landing-page', link billing, and enable
Cloud Run, Artifact Registry, and Cloud Build APIs"
```

**CLI Reference**:
```bash
# Create project
gcloud projects create my-landing-page --name="My Landing Page"
gcloud config set project my-landing-page

# Link billing
gcloud billing projects link my-landing-page \
  --billing-account=BILLING_ACCOUNT_ID

# Enable APIs
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com
```

#### 3.3 Create Artifact Registry Repository

**Natural Language (Recommended)**:
```
"Create an Artifact Registry Docker repository named 'my-landing-page' in us-central1"
```

**CLI Reference**:
```bash
gcloud artifacts repositories create my-landing-page \
  --repository-format=docker \
  --location=us-central1 \
  --description="Landing page container images"
```

#### 3.4 Configure Docker Authentication

**Natural Language (Recommended)**:
```
"Configure Docker to authenticate with my Artifact Registry in us-central1"
```

**CLI Reference**:
```bash
gcloud auth configure-docker us-central1-docker.pkg.dev
```

### Success Criteria
- [ ] `gcloud auth list` shows your account as active
- [ ] `gcloud config get project` returns your project ID
- [ ] Artifact Registry repository exists
- [ ] Docker is configured for Artifact Registry auth

---

## Phase 4: Push to Artifact Registry (Day 2)

### Goal
Upload your Docker image to GCP container registry.

### Steps

#### 4.1 Tag Image for Artifact Registry

**Natural Language (Recommended)**:
```
"Tag my-landing:v1 for my Artifact Registry repository in us-central1"
```

**CLI Reference**:
```bash
docker tag my-landing:v1 \
  us-central1-docker.pkg.dev/my-landing-page/my-landing-page/app:latest
```

#### 4.2 Push Image to Artifact Registry

**Natural Language (Recommended)**:
```
"Push my tagged image to Artifact Registry"
```

**CLI Reference**:
```bash
docker push \
  us-central1-docker.pkg.dev/my-landing-page/my-landing-page/app:latest
```

#### 4.3 Verify Image in Artifact Registry

**Natural Language (Recommended)**:
```
"List images in my Artifact Registry repository"
```

**CLI Reference**:
```bash
gcloud artifacts docker images list \
  us-central1-docker.pkg.dev/my-landing-page/my-landing-page
```

### Success Criteria
- [ ] Push completes without errors
- [ ] Image visible in Artifact Registry CLI output
- [ ] Image tagged as `latest`

---

## Phase 5: Deploy to Cloud Run (Day 2-3)

### Goal
Create and deploy a Cloud Run service with your container.

### Steps

#### 5.1 Deploy to Cloud Run

**Natural Language (Recommended)**:
```
"Deploy my Artifact Registry image to Cloud Run with 512MB memory,
scale-to-zero, max 3 instances, and allow public access"
```

**CLI Reference**:
```bash
gcloud run deploy my-landing-page \
  --image us-central1-docker.pkg.dev/my-landing-page/my-landing-page/app:latest \
  --region us-central1 \
  --platform managed \
  --port 3000 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 3 \
  --allow-unauthenticated
```

#### 5.2 Monitor Deployment Status

**Natural Language (Recommended)**:
```
"Check the status of my Cloud Run deployment"
```

**CLI Reference**:
```bash
gcloud run services describe my-landing-page \
  --region us-central1 \
  --format="value(status.conditions[0].type, status.conditions[0].status)"
```

Cloud Run deploys fast — typically under a minute.

#### 5.3 Get Public URL

**Natural Language (Recommended)**:
```
"Get the public URL of my Cloud Run service"
```

**CLI Reference**:
```bash
gcloud run services describe my-landing-page \
  --region us-central1 \
  --format="value(status.url)"
```

#### 5.4 Test Live Site

Open the URL in your browser: `https://my-landing-page-XXXXXX-uc.a.run.app`

### Success Criteria
- [ ] Service shows "Ready" condition as "True"
- [ ] Public URL accessible
- [ ] Page loads correctly
- [ ] All sections display properly

---

## Phase 6: Monitoring & Maintenance

### Goal
Keep your site running smoothly and update as needed.

### View Logs

**Natural Language (Recommended)**:
```
"Show me recent logs from my Cloud Run service"
```

**CLI Reference**:
```bash
# Stream live logs
gcloud beta run services logs tail my-landing-page \
  --region us-central1

# Query recent logs
gcloud logging read \
  "resource.type=cloud_run_revision AND resource.labels.service_name=my-landing-page" \
  --limit 50 \
  --format="table(timestamp,textPayload)"
```

### Update Deployment

**Natural Language (Recommended)**:
```
"Rebuild my Docker image, push to Artifact Registry, and update my Cloud Run deployment"
```

**CLI Reference** (when you make changes):

1. Rebuild: `docker build -t my-landing:v2 .`
2. Tag: `docker tag my-landing:v2 us-central1-docker.pkg.dev/my-landing-page/my-landing-page/app:latest`
3. Push: `docker push us-central1-docker.pkg.dev/my-landing-page/my-landing-page/app:latest`
4. Deploy: `gcloud run deploy my-landing-page --image us-central1-docker.pkg.dev/my-landing-page/my-landing-page/app:latest --region us-central1`

### Check Costs

**Natural Language (Recommended)**:
```
"Estimate my monthly GCP costs for this Cloud Run deployment"
```

**Expected Costs (Low Traffic)**:

| Service | Monthly Estimate |
|---------|-----------------|
| Cloud Run (scale-to-zero) | $0 (free tier) |
| Artifact Registry (< 0.5 GB) | $0 (free tier) |
| Cloud Logging (< 50 GB) | $0 (free tier) |
| **Total** | **$0-2/month** |

**Expected Costs (Medium Traffic)**:

| Service | Monthly Estimate |
|---------|-----------------|
| Cloud Run (moderate requests) | $2-5 |
| Artifact Registry (< 1 GB) | $0.10 |
| Cloud Logging | $0 (free tier) |
| **Total** | **$2-5/month** |

---

## Phase 7: Cleanup (When Done)

### Goal
Delete resources to avoid any charges.

### Delete Cloud Run Service

**Natural Language (Recommended)**:
```
"Delete my Cloud Run service to stop all billing"
```

**CLI Reference**:
```bash
gcloud run services delete my-landing-page \
  --region us-central1 \
  --quiet
```

### Delete Artifact Registry Repository

**Natural Language (Recommended)**:
```
"Delete my Artifact Registry repository and all images"
```

**CLI Reference**:
```bash
gcloud artifacts repositories delete my-landing-page \
  --location us-central1 \
  --quiet
```

### Delete Project (Nuclear Option)

**Natural Language (Recommended)**:
```
"Delete my entire GCP project to remove everything"
```

**CLI Reference**:
```bash
gcloud projects delete my-landing-page
```

This schedules the project for deletion after 30 days, removing all resources.

---

## Quick Reference

### Natural Language Deployment (Recommended)

```
1. "Build a Docker image tagged my-landing:v1"
2. "Run the container on port 3001 and verify it's healthy"
3. "Log in to gcloud and set my project to my-landing-page"
4. "Create an Artifact Registry repository named my-landing-page"
5. "Tag and push my image to Artifact Registry"
6. "Deploy to Cloud Run with scale-to-zero and public access"
7. "Get my public URL"
```

### CLI Reference (All Commands)

```bash
# Phase 2: Docker
docker build -t my-landing:v1 .
docker run -p 3001:3000 my-landing:v1

# Phase 3: GCP Setup
gcloud auth login
gcloud config set project my-landing-page
gcloud services enable run.googleapis.com artifactregistry.googleapis.com
gcloud artifacts repositories create my-landing-page --repository-format=docker --location=us-central1
gcloud auth configure-docker us-central1-docker.pkg.dev

# Phase 4: Push to Artifact Registry
docker tag my-landing:v1 us-central1-docker.pkg.dev/my-landing-page/my-landing-page/app:latest
docker push us-central1-docker.pkg.dev/my-landing-page/my-landing-page/app:latest

# Phase 5: Cloud Run
gcloud run deploy my-landing-page \
  --image us-central1-docker.pkg.dev/my-landing-page/my-landing-page/app:latest \
  --region us-central1 --platform managed --port 3000 \
  --memory 512Mi --cpu 1 --min-instances 0 --max-instances 3 \
  --allow-unauthenticated
```

---

## Troubleshooting

### Common Issues

| Issue | Symptom | Solution |
|-------|---------|----------|
| Docker push fails | "denied: access denied" | Re-run `gcloud auth configure-docker` |
| API not enabled | "API not enabled" error | Run `gcloud services enable <api>` |
| Cloud Run fails | Service shows errors | Check logs with `gcloud beta run services logs tail` |
| 503 error | Site shows error page | Container may be crashing, check logs |
| Permission denied | IAM errors | Verify service account roles |

### Debug Commands

**Natural Language (Recommended)**:
```
"Check if my Docker containers are running and show their logs"
"List the images in my Artifact Registry repository"
"Show me the status and recent revisions for my Cloud Run service"
"Show me the Cloud Run logs for my service"
```

**CLI Reference**:
```bash
# Check Docker
docker ps -a
docker logs <container-id>

# Check Artifact Registry
gcloud artifacts docker images list \
  us-central1-docker.pkg.dev/my-landing-page/my-landing-page

# Check Cloud Run
gcloud run services describe my-landing-page --region us-central1
gcloud run revisions list --service my-landing-page --region us-central1

# Check Logs
gcloud beta run services logs tail my-landing-page --region us-central1
```

---

## Timeline Summary

| Phase | Duration | Milestone |
|-------|----------|-----------|
| 1. Local Dev | 2-4 hours | Customized page running locally |
| 2. Docker | 1-2 hours | Container works locally |
| 3. GCP Setup | 20 min | Project, APIs, and registry ready |
| 4. Artifact Registry Push | 10 min | Image in registry |
| 5. Cloud Run | 5 min | Live URL! |
| 6. Monitoring | Ongoing | Site stays healthy |
| 7. Cleanup | 5 min | Resources deleted |

**Total**: ~1 day from start to live production site

---

## Architecture Diagram

```
┌────────────────────────────────────────────────────────────────┐
│                      YOUR COMPUTER                              │
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐        │
│  │  VS Code    │    │ Claude Code │    │   Docker    │        │
│  │   Editor    │───▶│ /Gemini CLI │───▶│   Desktop   │        │
│  └─────────────┘    └─────────────┘    └─────────────┘        │
│                                              │                  │
│                                              ▼                  │
│                                       ┌─────────────┐          │
│                                       │   Image:    │          │
│                                       │ my-landing  │          │
│                                       │    :v1      │          │
│                                       └─────────────┘          │
└────────────────────────────────────────────│───────────────────┘
                                             │
                                   docker push
                                             │
                                             ▼
┌────────────────────────────────────────────────────────────────┐
│                       GOOGLE CLOUD                              │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      us-central1                         │   │
│  │                                                          │   │
│  │   ┌─────────────┐         ┌─────────────────────────┐   │   │
│  │   │  Artifact   │         │      Cloud Run          │   │   │
│  │   │  Registry   │────────▶│                         │   │   │
│  │   │             │  pull   │  ┌─────────────────┐   │   │   │
│  │   │ my-landing  │         │  │   Container     │   │   │   │
│  │   │   :latest   │         │  │  my-landing:v1  │   │   │   │
│  │   └─────────────┘         │  │     :3000       │   │   │   │
│  │                           │  └─────────────────┘   │   │   │
│  │                           │          │             │   │   │
│  │                           │          ▼             │   │   │
│  │                           │  ┌─────────────────┐   │   │   │
│  │                           │  │  Public HTTPS   │   │   │   │
│  │                           │  │  Load Balancer  │   │   │   │
│  │                           │  └─────────────────┘   │   │   │
│  │                           └──────────│─────────────┘   │   │
│  │                                      │                  │   │
│  │   ┌─────────────┐                    │                  │   │
│  │   │   Cloud     │◀───────────────────┘                  │   │
│  │   │  Logging    │                                       │   │
│  │   └─────────────┘                                       │   │
│  │                                                          │   │
│  │   ┌─────────────────────────────────────────────────┐   │   │
│  │   │            Scale-to-Zero Behavior               │   │   │
│  │   │                                                  │   │   │
│  │   │  No traffic → 0 instances → $0 cost             │   │   │
│  │   │  Request arrives → 1 instance spins up (~1s)    │   │   │
│  │   │  Traffic grows → auto-scales up to max          │   │   │
│  │   │  Traffic drops → scales back to 0               │   │   │
│  │   └─────────────────────────────────────────────────┘   │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    https://my-landing-page-xxxxx-uc.a.run.app
                              │
                              ▼
                      ┌───────────────┐
                      │   VISITORS    │
                      │   (Browser)   │
                      └───────────────┘
```

### GCP vs AWS Cost Comparison

```
┌─────────────────────────────────────────────────────────────┐
│              Monthly Cost: Low-Traffic Landing Page           │
│                                                              │
│  AWS (App Runner)                                            │
│  ├── App Runner:  $5-15/month (no free tier, always-on)     │
│  ├── ECR Storage: ~$0.10                                     │
│  └── Total:       $5-15/month                                │
│                                                              │
│  GCP (Cloud Run)                                             │
│  ├── Cloud Run:   $0/month (free tier, scale-to-zero)       │
│  ├── Artifact Registry: $0 (< 0.5 GB free)                  │
│  └── Total:       $0-2/month                                 │
│                                                              │
│  Savings with GCP: ~$5-15/month                              │
└─────────────────────────────────────────────────────────────┘
```

---

**Last Updated**: 2026-02-03
**Version**: 1.0
