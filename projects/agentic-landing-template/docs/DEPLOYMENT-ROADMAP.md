# AWS Deployment Roadmap

## From Local Development to Production

**Version**: 1.0
**Last Updated**: 2026-01-25

---

## Overview

This guide walks you through deploying your landing page from local development to AWS production using both traditional CLI commands and agentic (natural language) commands.

---

## Prerequisites Checklist

Before starting deployment:

- [ ] **AWS Account** - [Sign up here](https://aws.amazon.com/)
- [ ] **AWS CLI** - [Installation guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [ ] **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop/)
- [ ] **Project builds locally** - `npm run build` succeeds
- [ ] **Docker image works** - `docker-compose up --build` shows healthy container

---

## Phase 1: Local Development (Day 1)

### Goal
Get the landing page running locally and customize content.

### Steps

#### 1.1 Clone and Install

**Traditional CLI**:
```bash
git clone https://github.com/YOUR-USERNAME/agentic-landing-template.git
cd agentic-landing-template
npm install
```

**Agentic**:
```
"Clone my forked repository and install dependencies"
```

#### 1.2 Start Development Server

**Traditional CLI**:
```bash
npm run dev
# Open http://localhost:3000
```

**Agentic**:
```
"Start the Next.js development server"
```

#### 1.3 Customize Content

**Agentic Examples**:
```
"Update the hero with my name 'Alex Rivera' and title 'Product Designer'"
"Change the services to: Brand Design $2000, UX Audit $1500, Design System $5000"
"Update contact email to alex@mydesignstudio.com"
```

#### 1.4 Verify Build

**Traditional CLI**:
```bash
npm run build
```

**Agentic**:
```
"Build the project for production and report any errors"
```

### Success Criteria
- [ ] Page loads at localhost:3000
- [ ] Content shows your customizations
- [ ] Build completes without errors

---

## Phase 2: Docker Containerization (Day 1-2)

### Goal
Package the application in a Docker container that works identically to production.

### Steps

#### 2.1 Build Docker Image

**Traditional CLI**:
```bash
docker build -t my-landing:v1 .
```

**Agentic**:
```
"Build a Docker image tagged my-landing:v1"
```

#### 2.2 Run Container Locally

**Traditional CLI**:
```bash
docker run -p 3001:3000 my-landing:v1
# Open http://localhost:3001
```

**Agentic**:
```
"Run my-landing:v1 container on port 3001"
```

#### 2.3 Verify Container Health

**Traditional CLI**:
```bash
docker ps
# Should show "healthy" status after ~40 seconds
```

**Agentic**:
```
"Check if my Docker container is running and healthy"
```

#### 2.4 Test with Docker Compose

**Traditional CLI**:
```bash
docker-compose up --build
# Open http://localhost:3001
```

**Agentic**:
```
"Start the application using Docker Compose"
```

### Success Criteria
- [ ] Docker image builds successfully
- [ ] Container shows "healthy" status
- [ ] Page accessible at localhost:3001
- [ ] Content matches development version

---

## Phase 3: AWS Account Setup (Day 2)

### Goal
Configure AWS credentials and create necessary resources.

### Steps

#### 3.1 Configure AWS CLI

**Traditional CLI**:
```bash
aws configure
# Enter:
# - Access Key ID
# - Secret Access Key
# - Default region: us-west-2
# - Default output format: json
```

**Agentic**:
```
"Help me configure AWS CLI with my credentials"
```

#### 3.2 Create ECR Repository

**Traditional CLI**:
```bash
aws ecr create-repository \
  --repository-name my-landing \
  --region us-west-2
```

**Agentic**:
```
"Create an ECR repository named my-landing in us-west-2"
```

#### 3.3 Create IAM Role for App Runner

**Traditional CLI**:
```bash
# Create trust policy file
cat > trust-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "build.apprunner.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

# Create role
aws iam create-role \
  --role-name AppRunnerECRAccessRole \
  --assume-role-policy-document file://trust-policy.json

# Attach ECR policy
aws iam attach-role-policy \
  --role-name AppRunnerECRAccessRole \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess
```

**Agentic**:
```
"Create an IAM role named AppRunnerECRAccessRole that allows App Runner to access ECR"
```

### Success Criteria
- [ ] `aws sts get-caller-identity` returns your account info
- [ ] ECR repository exists
- [ ] IAM role created with correct permissions

---

## Phase 4: Push to ECR (Day 2)

### Goal
Upload your Docker image to AWS container registry.

### Steps

#### 4.1 Authenticate Docker with ECR

**Traditional CLI**:
```bash
aws ecr get-login-password --region us-west-2 | \
  docker login --username AWS --password-stdin \
  <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com
```

**Agentic**:
```
"Authenticate Docker with my ECR registry in us-west-2"
```

#### 4.2 Tag Image for ECR

**Traditional CLI**:
```bash
docker tag my-landing:v1 \
  <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest
```

**Agentic**:
```
"Tag my-landing:v1 for my ECR repository"
```

#### 4.3 Push Image to ECR

**Traditional CLI**:
```bash
docker push \
  <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest
```

**Agentic**:
```
"Push my tagged image to ECR"
```

#### 4.4 Verify Image in ECR

**Traditional CLI**:
```bash
aws ecr describe-images \
  --repository-name my-landing \
  --region us-west-2
```

**Agentic**:
```
"List images in my ECR repository"
```

### Success Criteria
- [ ] Docker login succeeds
- [ ] Push completes without errors
- [ ] Image visible in ECR console/CLI

---

## Phase 5: Deploy to App Runner (Day 2-3)

### Goal
Create and deploy App Runner service with your container.

### Steps

#### 5.1 Create App Runner Service

**Traditional CLI**:
```bash
aws apprunner create-service \
  --service-name my-landing-page \
  --source-configuration '{
    "AuthenticationConfiguration": {
      "AccessRoleArn": "arn:aws:iam::<ACCOUNT_ID>:role/AppRunnerECRAccessRole"
    },
    "ImageRepository": {
      "ImageIdentifier": "<ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest",
      "ImageRepositoryType": "ECR",
      "ImageConfiguration": {
        "Port": "3000"
      }
    }
  }' \
  --instance-configuration '{
    "Cpu": "1024",
    "Memory": "2048"
  }' \
  --region us-west-2
```

**Agentic**:
```
"Deploy my ECR image to App Runner with 1 vCPU and 2GB memory"
```

#### 5.2 Monitor Deployment Status

**Traditional CLI**:
```bash
aws apprunner describe-service \
  --service-arn <SERVICE_ARN> \
  --region us-west-2 \
  --query 'Service.Status'
```

**Agentic**:
```
"Check the status of my App Runner deployment"
```

Status progression:
1. `CREATE_IN_PROGRESS` (2-5 minutes)
2. `RUNNING` (success!)

#### 5.3 Get Public URL

**Traditional CLI**:
```bash
aws apprunner describe-service \
  --service-arn <SERVICE_ARN> \
  --region us-west-2 \
  --query 'Service.ServiceUrl' \
  --output text
```

**Agentic**:
```
"Get the public URL of my App Runner service"
```

#### 5.4 Test Live Site

Open the URL in your browser: `https://<random>.us-west-2.awsapprunner.com`

### Success Criteria
- [ ] Service status is "RUNNING"
- [ ] Public URL accessible
- [ ] Page loads correctly
- [ ] All sections display properly

---

## Phase 6: Monitoring & Maintenance

### Goal
Keep your site running smoothly and update as needed.

### View CloudWatch Logs

**Traditional CLI**:
```bash
# Find log group
aws logs describe-log-groups \
  --log-group-name-prefix /aws/apprunner

# View recent logs
aws logs get-log-events \
  --log-group-name /aws/apprunner/my-landing-page/<service-id>/application \
  --log-stream-name <stream-name>
```

**Agentic**:
```
"Show me recent logs from my App Runner service"
```

### Update Deployment

When you make changes:

1. Rebuild Docker image: `docker build -t my-landing:v2 .`
2. Tag for ECR: `docker tag my-landing:v2 <ecr-uri>:latest`
3. Push to ECR: `docker push <ecr-uri>:latest`
4. App Runner auto-deploys (if auto-deploy enabled) or trigger manually

**Agentic**:
```
"Rebuild my Docker image, push to ECR, and update my App Runner deployment"
```

### Check Costs

**Agentic**:
```
"Estimate my monthly AWS costs for this App Runner deployment"
```

**Expected Costs**:
| Service | Monthly Estimate |
|---------|-----------------|
| App Runner (1 vCPU, 2GB) | $5-15 |
| ECR Storage | <$1 |
| Data Transfer | <$1 |
| **Total** | **$7-17** |

---

## Phase 7: Cleanup (When Done)

### Goal
Delete resources to avoid ongoing charges.

### Delete App Runner Service

**Traditional CLI**:
```bash
aws apprunner delete-service \
  --service-arn <SERVICE_ARN> \
  --region us-west-2
```

**Agentic**:
```
"Delete my App Runner service to stop billing"
```

### Delete ECR Repository

**Traditional CLI**:
```bash
aws ecr delete-repository \
  --repository-name my-landing \
  --force \
  --region us-west-2
```

**Agentic**:
```
"Delete my ECR repository and all images"
```

### Delete IAM Role (Optional)

**Traditional CLI**:
```bash
aws iam detach-role-policy \
  --role-name AppRunnerECRAccessRole \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess

aws iam delete-role \
  --role-name AppRunnerECRAccessRole
```

---

## Quick Reference

### Complete Deployment (All Commands)

```bash
# Phase 2: Docker
docker build -t my-landing:v1 .
docker run -p 3001:3000 my-landing:v1

# Phase 3: AWS Setup
aws configure
aws ecr create-repository --repository-name my-landing --region us-west-2

# Phase 4: Push to ECR
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com
docker tag my-landing:v1 <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest
docker push <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/my-landing:latest

# Phase 5: App Runner
aws apprunner create-service --service-name my-landing-page --source-configuration '...' --instance-configuration '...' --region us-west-2
```

### Agentic Deployment (Natural Language)

```
1. "Build a Docker image tagged my-landing:v1"
2. "Run the container on port 3001 and verify it's healthy"
3. "Configure AWS CLI with my credentials"
4. "Create an ECR repository named my-landing"
5. "Authenticate Docker with ECR and push my image"
6. "Deploy to App Runner with 1 vCPU and 2GB memory"
7. "Get my public URL"
```

---

## Troubleshooting

### Common Issues

| Issue | Symptom | Solution |
|-------|---------|----------|
| ECR login fails | "no basic auth credentials" | Re-run `aws ecr get-login-password` |
| Push fails | "denied: access denied" | Check IAM permissions |
| App Runner stuck | Status stays "CREATE_IN_PROGRESS" | Check CloudWatch logs |
| 503 error | Site shows error page | Container may be unhealthy, check logs |
| High costs | Unexpected AWS charges | Check for forgotten resources |

### Debug Commands

```bash
# Check Docker
docker ps -a
docker logs <container-id>

# Check ECR
aws ecr describe-images --repository-name my-landing

# Check App Runner
aws apprunner describe-service --service-arn <ARN>
aws apprunner list-operations --service-arn <ARN>

# Check CloudWatch
aws logs describe-log-groups --log-group-name-prefix /aws/apprunner
```

---

## Timeline Summary

| Phase | Duration | Milestone |
|-------|----------|-----------|
| 1. Local Dev | 2-4 hours | Customized page running locally |
| 2. Docker | 1-2 hours | Container works locally |
| 3. AWS Setup | 30 min | Credentials and ECR ready |
| 4. ECR Push | 15 min | Image in registry |
| 5. App Runner | 10 min + wait | Live URL! |
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
│                          AWS CLOUD                              │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                        us-west-2                         │   │
│  │                                                          │   │
│  │   ┌─────────────┐         ┌─────────────────────────┐   │   │
│  │   │     ECR     │         │      App Runner         │   │   │
│  │   │             │────────▶│                         │   │   │
│  │   │ my-landing  │  pull   │  ┌─────────────────┐   │   │   │
│  │   │   :latest   │         │  │   Container     │   │   │   │
│  │   └─────────────┘         │  │  my-landing:v1  │   │   │   │
│  │                           │  │     :3000       │   │   │   │
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
│  │   │ CloudWatch  │◀───────────────────┘                  │   │
│  │   │    Logs     │                                       │   │
│  │   └─────────────┘                                       │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    https://xxxxx.us-west-2.awsapprunner.com
                              │
                              ▼
                      ┌───────────────┐
                      │   VISITORS    │
                      │   (Browser)   │
                      └───────────────┘
```

---

**Last Updated**: 2026-01-25
**Version**: 1.0
