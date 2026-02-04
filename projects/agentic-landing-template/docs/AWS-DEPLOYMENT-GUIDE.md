# AWS Deployment Guide

**Deploy your landing page to AWS using natural language with your AI coding assistant**

This guide walks you through the complete process: creating an AWS account, setting up credentials, and deploying your containerized application—all using natural language commands with Gemini CLI, Claude Code, or Codex.

---

## Table of Contents

1. [AWS CLI vs AWS Console](#aws-cli-vs-aws-console)
2. [Create AWS Account](#1-create-aws-account-manual)
3. [Create Admin IAM User](#2-create-admin-iam-user-manual)
4. [Create Deployment IAM User](#3-create-deployment-iam-user-manual)
5. [Install AWS CLI](#4-install-aws-cli)
6. [Configure AWS CLI](#5-configure-aws-cli-with-ai)
7. [Deploy Infrastructure](#6-deploy-infrastructure-with-ai)
8. [Deploy Application](#7-deploy-application-with-ai)
9. [Verify & Monitor](#8-verify--monitor)
10. [Clean Up](#9-clean-up-resources)

---

## AWS CLI vs AWS Console

### What's the Difference?

| Feature | AWS Console (Web UI) | AWS CLI (Command Line) |
|---------|---------------------|----------------------|
| **What it is** | Website at console.aws.amazon.com | Terminal commands (`aws ...`) |
| **How you access it** | Browser | Terminal/Shell |
| **Best for** | Visual exploration, learning, one-time setups | Automation, scripting, repeatable tasks |
| **Speed** | Slower (clicking through menus) | Faster (single commands) |
| **Reproducibility** | Hard to repeat exactly | Easy to script and share |
| **AI-assisted** | Difficult (manual clicking) | Perfect for natural language commands |

### When to Use Each

**Use AWS Console (Web UI) when:**
- Creating your AWS account (required)
- Setting up IAM users for the first time
- Exploring services you're not familiar with
- Viewing dashboards and visualizations
- Managing billing and payment methods

**Use AWS CLI when:**
- Deploying applications (what we do in this guide)
- Creating repeatable infrastructure
- Automating tasks
- Using AI coding assistants (Gemini CLI, Claude Code)
- Working in CI/CD pipelines

### How They Work Together

```
┌─────────────────────────────────────────────────────────────┐
│                        AWS Cloud                             │
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │    ECR      │    │ App Runner  │    │ CloudWatch  │     │
│  └─────────────┘    └─────────────┘    └─────────────┘     │
│         ▲                  ▲                  ▲              │
│         │                  │                  │              │
│         └──────────────────┼──────────────────┘              │
│                            │                                 │
│                     AWS API Layer                            │
│                            │                                 │
└────────────────────────────┼─────────────────────────────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
     ┌─────────────────┐         ┌─────────────────┐
     │  AWS Console    │         │    AWS CLI      │
     │  (Web Browser)  │         │   (Terminal)    │
     │                 │         │                 │
     │  Click buttons  │         │  aws ecr ...    │
     │  Fill forms     │         │  aws apprunner  │
     │  View dashboards│         │  aws logs ...   │
     └─────────────────┘         └─────────────────┘
              │                             │
              │                             │
              ▼                             ▼
         You (Manual)              AI Agent (Automated)
                                   - Gemini CLI
                                   - Claude Code
                                   - Codex
```

**Key insight**: Both Console and CLI talk to the same AWS APIs. Everything you can do in the Console, you can do with the CLI (and vice versa). The CLI is just faster and automatable.

---

## Cost-Optimized Region

**Recommended Region: `us-east-2` (Ohio)**

| Region | Why |
|--------|-----|
| **us-east-2 (Ohio)** | Lowest cost US region, full App Runner support, good latency |
| us-east-1 (N. Virginia) | Slightly higher cost, most services available |
| us-west-2 (Oregon) | Good for West Coast, moderate cost |

**Estimated Monthly Cost**: $5-15/month for a landing page with low traffic.

---

## 1. Create AWS Account (Manual)

This step must be done manually in your browser (AWS Console).

### Steps

1. **Go to AWS**: https://aws.amazon.com/
2. **Click "Create an AWS Account"**
3. **Enter your email and choose an account name**
   - Use a professional email you check regularly
   - Account name: e.g., "MyLandingPage" or your business name
4. **Verify your email** with the code sent
5. **Set a strong root password** (save it in a password manager)
6. **Choose account type**: Personal or Business
7. **Enter contact information**
8. **Add payment method** (credit/debit card required)
   - You won't be charged unless you exceed free tier
9. **Verify your identity** via phone
10. **Select support plan**: Choose "Basic support - Free"
11. **Complete sign-up**

### Important Security Notes

- **Enable MFA on root account immediately** after creation
- **Never use root account for daily tasks** - create IAM users
- Root account should only be used for billing and initial IAM setup

---

## 2. Create Admin IAM User (Manual)

### Why You Need an Admin User

| Account Type | Purpose | Daily Use? |
|--------------|---------|------------|
| **Root User** | Master account with UNLIMITED access. Can delete entire account. | NO - Only for billing |
| **Admin User** | Full access to AWS services but can be restricted/deleted | YES - For admin tasks |
| **Deployment User** | Limited access for specific tasks (deploy apps) | YES - For CI/CD and deployments |

**Security principle**: Use the least privileged account that can do the job.

### Steps to Create Admin User

1. **Sign in to AWS Console** as root user: https://console.aws.amazon.com/
2. **Search for "IAM"** in the top search bar and open it
3. **Click "Users"** in the left sidebar
4. **Click "Create user"**

### Admin User Configuration

| Setting | Value |
|---------|-------|
| User name | `admin` (or your name, e.g., `john-admin`) |
| Provide user access to Console | ✅ Check this box |
| Console password | Create a custom password |
| Users must create new password | Optional |

5. **Click "Next"**
6. **Select "Attach policies directly"**
7. **Search and select**: `AdministratorAccess`
   - This gives full access to all AWS services
8. **Click "Next"**
9. **Click "Create user"**

### Enable Console Access & MFA

10. **Click on your new admin user**
11. **Go to "Security credentials" tab**
12. **Enable MFA** (Multi-Factor Authentication):
    - Click "Assign MFA device"
    - Choose "Authenticator app"
    - Scan QR code with your phone (Google Authenticator, Authy, etc.)
    - Enter two consecutive codes to verify

### Sign In URL

Save your account's sign-in URL:
```
https://YOUR-ACCOUNT-ID.signin.aws.amazon.com/console
```

Or use the alias:
```
https://YOUR-ACCOUNT-ALIAS.signin.aws.amazon.com/console
```

**From now on, use this Admin user for AWS Console tasks, NOT the root user.**

---

## 3. Create Deployment IAM User (Manual)

Now create a user specifically for deployments with limited permissions.

### Steps

1. **Sign in to AWS Console** as your **Admin user** (not root)
2. **Go to IAM → Users → Create user**

### Deployment User Configuration

| Setting | Value |
|---------|-------|
| User name | `landing-page-deployer` |
| Provide user access to Console | ❌ Uncheck (CLI-only user) |

3. **Click "Next"**
4. **Select "Attach policies directly"**
5. **Search and select these policies**:

| Policy | Purpose |
|--------|---------|
| `AmazonEC2ContainerRegistryFullAccess` | Create and manage ECR repositories, push/pull images |
| `AWSAppRunnerFullAccess` | Create and manage App Runner services |
| `CloudWatchLogsFullAccess` | View application logs for debugging |

6. **Click "Next" → "Create user"**

### Create Access Keys for CLI

7. **Click on the new user** (`landing-page-deployer`)
8. **Go to "Security credentials" tab**
9. **Scroll to "Access keys"**
10. **Click "Create access key"**
11. **Select "Command Line Interface (CLI)"**
12. **Check the confirmation checkbox**
13. **Click "Next" → "Create access key"**

### Download Credentials

**CRITICAL: This is your only chance to see the secret key!**

14. **Click "Download .csv"** to save credentials
15. **Store the file securely** (password manager or encrypted storage)
16. **Note these values**:
    - Access Key ID: `AKIA...` (20 characters)
    - Secret Access Key: `...` (40 characters)

### Security Best Practices

- Never commit credentials to git
- Never share credentials via email or chat
- Rotate keys every 90 days
- Delete the CSV file after configuring CLI

---

## 4. Install AWS CLI

### macOS (Homebrew) - Recommended

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Install AWS CLI using Homebrew" | `brew install awscli` | Downloads and installs the AWS CLI tool from Homebrew's package repository |
| "Verify AWS CLI is installed" | `aws --version` | Prints the installed AWS CLI version to confirm installation succeeded |

### Manual Installation (if not using Homebrew)

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Download and install AWS CLI for macOS" | `curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg" && sudo installer -pkg AWSCLIV2.pkg -target /` | Downloads the official installer package and runs macOS installer |

### Windows

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Install AWS CLI on Windows" | Download from https://awscli.amazonaws.com/AWSCLIV2.msi | Downloads Windows installer; run it to install |

### Linux

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Install AWS CLI on Linux" | `curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && sudo ./aws/install` | Downloads zip, extracts, and runs the installer script |

---

## 5. Configure AWS CLI with AI

Now use your AI coding assistant to configure AWS CLI with your credentials.

### Create a Named Profile

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Configure AWS CLI with a new profile named 'landing-deployer' using region us-east-2" | `aws configure --profile landing-deployer` | Starts interactive setup that saves credentials to ~/.aws/credentials and config to ~/.aws/config |

When prompted, enter:

```
AWS Access Key ID: [paste your access key]
AWS Secret Access Key: [paste your secret key]
Default region name: us-east-2
Default output format: json
```

### Verify Configuration

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Test my AWS credentials are working" | `aws sts get-caller-identity --profile landing-deployer` | Calls AWS Security Token Service to verify credentials and return your IAM identity |
| "List my AWS profiles" | `aws configure list-profiles` | Shows all named profiles stored in your AWS config files |
| "Show my current AWS configuration" | `aws configure list --profile landing-deployer` | Displays the access key, region, and output format for this profile |

**Expected output:**
```json
{
    "UserId": "AIDA...",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/landing-page-deployer"
}
```

### Set as Default Profile (Optional)

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Set landing-deployer as my default AWS profile" | `export AWS_PROFILE=landing-deployer` | Sets environment variable so all AWS commands use this profile without --profile flag |
| "Make this permanent in my shell" | Add to `~/.zshrc` or `~/.bashrc` | Ensures the profile is set automatically when you open a new terminal |

---

## 6. Deploy Infrastructure with AI

Use your AI coding assistant to set up the required AWS infrastructure.

### Step 6.1: Create ECR Repository

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Create an ECR repository named 'my-landing-page' in us-east-2" | `aws ecr create-repository --repository-name my-landing-page --region us-east-2 --profile landing-deployer` | Creates a private Docker image registry in AWS where you'll store your container images |
| "Show me the ECR repository URI" | `aws ecr describe-repositories --repository-names my-landing-page --region us-east-2 --profile landing-deployer --query 'repositories[0].repositoryUri' --output text` | Retrieves the full URI needed to push images (format: account.dkr.ecr.region.amazonaws.com/name) |

**Save the repository URI** - you'll need it for pushing images:
```
123456789012.dkr.ecr.us-east-2.amazonaws.com/my-landing-page
```

### Step 6.2: Create App Runner IAM Role

App Runner needs permission to pull images from your private ECR repository.

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Create a file called trust-policy.json with the App Runner trust relationship" | Create file manually | Defines which AWS service (App Runner) is allowed to assume this role |

Content for `trust-policy.json`:
```json
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
```

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Create the App Runner ECR access role" | `aws iam create-role --role-name AppRunnerECRAccessRole --assume-role-policy-document file://trust-policy.json --profile landing-deployer` | Creates an IAM role that App Runner can assume to get temporary credentials |
| "Attach ECR read policy to the role" | `aws iam attach-role-policy --role-name AppRunnerECRAccessRole --policy-arn arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess --profile landing-deployer` | Grants the role permission to pull images from ECR |
| "Get the role ARN" | `aws iam get-role --role-name AppRunnerECRAccessRole --query 'Role.Arn' --output text --profile landing-deployer` | Retrieves the Amazon Resource Name (unique identifier) for this role |

**Save the role ARN** - you'll need it for App Runner:
```
arn:aws:iam::123456789012:role/AppRunnerECRAccessRole
```

---

## 7. Deploy Application with AI

### Step 7.1: Build Production Docker Image

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Build the production Docker image tagged as my-landing-page:latest" | `docker build -t my-landing-page:latest .` | Reads Dockerfile, downloads base images, installs dependencies, builds Next.js app, creates optimized image |
| "Verify the image was built" | `docker images my-landing-page` | Lists local Docker images matching the name, shows size and creation time |

### Step 7.2: Tag Image for ECR

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Tag my image for ECR" | `docker tag my-landing-page:latest 123456789012.dkr.ecr.us-east-2.amazonaws.com/my-landing-page:latest` | Creates an alias (tag) for your image with the full ECR URI so Docker knows where to push it |

*Replace `123456789012` with your actual AWS account ID.*

### Step 7.3: Authenticate Docker with ECR

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Log Docker into my ECR registry" | `aws ecr get-login-password --region us-east-2 --profile landing-deployer \| docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-2.amazonaws.com` | Gets a temporary authentication token from AWS and passes it to Docker to authenticate with your private registry |

**Expected output:** `Login Succeeded`

### Step 7.4: Push Image to ECR

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Push my landing page image to ECR" | `docker push 123456789012.dkr.ecr.us-east-2.amazonaws.com/my-landing-page:latest` | Uploads all image layers to ECR; subsequent pushes only upload changed layers (faster) |
| "Verify the image is in ECR" | `aws ecr describe-images --repository-name my-landing-page --region us-east-2 --profile landing-deployer` | Lists all images in the repository with their tags, sizes, and push timestamps |

### Step 7.5: Deploy to App Runner

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Create an App Runner service for my landing page" | See command below | Creates a fully managed web service that pulls your image, runs it, handles scaling, and provides a public URL |

**Full deployment command:**

```bash
aws apprunner create-service \
  --service-name my-landing-page \
  --source-configuration '{
    "AuthenticationConfiguration": {
      "AccessRoleArn": "arn:aws:iam::123456789012:role/AppRunnerECRAccessRole"
    },
    "AutoDeploymentsEnabled": false,
    "ImageRepository": {
      "ImageIdentifier": "123456789012.dkr.ecr.us-east-2.amazonaws.com/my-landing-page:latest",
      "ImageRepositoryType": "ECR",
      "ImageConfiguration": {
        "Port": "3000"
      }
    }
  }' \
  --instance-configuration '{
    "Cpu": "0.25 vCPU",
    "Memory": "0.5 GB"
  }' \
  --region us-east-2 \
  --profile landing-deployer
```

**What each part does:**
- `--service-name`: Names your App Runner service
- `AccessRoleArn`: Tells App Runner which IAM role to use for pulling from ECR
- `AutoDeploymentsEnabled`: If true, automatically redeploys when ECR image updates
- `ImageIdentifier`: The full URI of your Docker image in ECR
- `Port`: Which port your app listens on (Next.js uses 3000)
- `Cpu/Memory`: Computing resources allocated (0.25 vCPU is minimum, ~$5/month)

### Step 7.6: Wait for Deployment

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Check the status of my App Runner deployment" | `aws apprunner describe-service --service-arn <service-arn> --region us-east-2 --profile landing-deployer --query 'Service.Status'` | Queries the current state of your service (creating, running, failed, etc.) |
| "Get my App Runner service URL" | `aws apprunner describe-service --service-arn <service-arn> --region us-east-2 --profile landing-deployer --query 'Service.ServiceUrl' --output text` | Returns the public HTTPS URL where your app is accessible |

**Deployment takes 2-5 minutes.** Status progression:
1. `OPERATION_IN_PROGRESS` - Pulling image, starting containers
2. `RUNNING` - Service is live and accepting traffic!

---

## 8. Verify & Monitor

### Check Your Live Site

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Open my deployed landing page in the browser" | Open `https://<service-id>.<region>.awsapprunner.com` | Access your live website via the auto-generated HTTPS URL |
| "Get the full URL of my App Runner service" | `aws apprunner describe-service --service-arn <arn> --query 'Service.ServiceUrl' --output text --profile landing-deployer` | Retrieves the public URL from AWS |

### View Logs

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Show me the logs from my App Runner service" | `aws logs tail /aws/apprunner/my-landing-page/service --follow --profile landing-deployer` | Streams live logs from your application (like console.log output) |
| "Show me the last hour of log entries" | `aws logs tail /aws/apprunner/my-landing-page/service --since 1h --profile landing-deployer` | Retrieves historical logs for debugging |

### Monitor Costs

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Show me my current AWS costs" | `aws ce get-cost-and-usage --time-period Start=2024-01-01,End=2024-01-31 --granularity MONTHLY --metrics BlendedCost --profile landing-deployer` | Queries the Cost Explorer API to show spending by service |

Or check the AWS Console: https://console.aws.amazon.com/cost-management/

---

## 9. Clean Up Resources

**Important:** Delete resources when not in use to avoid charges.

### Delete App Runner Service

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Delete my App Runner service" | `aws apprunner delete-service --service-arn <service-arn> --region us-east-2 --profile landing-deployer` | Stops the running containers and removes the service (stops billing) |
| "Confirm the service was deleted" | `aws apprunner list-services --region us-east-2 --profile landing-deployer` | Lists all services to verify deletion |

### Delete ECR Repository

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Delete my ECR repository and all images" | `aws ecr delete-repository --repository-name my-landing-page --region us-east-2 --force --profile landing-deployer` | Deletes the repository and all stored images (frees storage costs) |

### Delete IAM Role (Optional)

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Detach the policy from App Runner role" | `aws iam detach-role-policy --role-name AppRunnerECRAccessRole --policy-arn arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess --profile landing-deployer` | Removes the permission policy from the role (required before deletion) |
| "Delete the App Runner ECR access role" | `aws iam delete-role --role-name AppRunnerECRAccessRole --profile landing-deployer` | Removes the IAM role from your account |

---

## Quick Reference Card

### One-Time Setup (do once)

| Step | Natural Language | What's Happening |
|------|-----------------|------------------|
| 1 | "Install AWS CLI using Homebrew" | Installs the aws command-line tool |
| 2 | "Configure AWS CLI with profile 'landing-deployer'" | Stores your credentials locally |
| 3 | "Create ECR repository named 'my-landing-page'" | Creates your private Docker registry |
| 4 | "Create IAM role for App Runner to access ECR" | Enables App Runner to pull your images |

### Deploy (repeat for each update)

| Step | Natural Language | What's Happening |
|------|-----------------|------------------|
| 1 | "Build the production Docker image" | Packages your app into a container |
| 2 | "Tag the image for ECR" | Prepares image with ECR destination |
| 3 | "Log Docker into ECR" | Authenticates with your private registry |
| 4 | "Push the image to ECR" | Uploads your container to AWS |
| 5 | "Deploy to App Runner" | Launches your app on AWS infrastructure |

### Monitor

| Task | Natural Language | What's Happening |
|------|-----------------|------------------|
| Check status | "What's the status of my App Runner service?" | Queries service health |
| View logs | "Show me the App Runner logs" | Streams application output |
| Get URL | "What's my App Runner service URL?" | Returns public website address |

### Clean Up

| Task | Natural Language | What's Happening |
|------|-----------------|------------------|
| Stop charges | "Delete my App Runner service and ECR repository" | Removes all billable resources |

---

## Troubleshooting

### Common Issues

| Problem | Natural Language to Fix | What's Happening |
|---------|------------------------|------------------|
| "Access Denied" errors | "Check if my AWS credentials are valid" | Credentials expired or wrong profile |
| Docker login fails | "Re-authenticate Docker with ECR" | Token expired (valid for 12 hours) |
| App Runner stuck | "Check App Runner service events for errors" | Image pull failed or app crashed |
| Image push fails | "Verify ECR repository exists" | Wrong region or repository name |
| Service won't start | "Show me the App Runner logs" | Application error during startup |

### Debug Commands

| Natural Language | CLI Command | What's Happening |
|-----------------|-------------|------------------|
| "Show detailed App Runner info" | `aws apprunner describe-service --service-arn <arn>` | Returns full service configuration and status |
| "List all my App Runner services" | `aws apprunner list-services --region us-east-2` | Shows all services in this region |
| "Show service events" | `aws apprunner list-operations --service-arn <arn>` | Shows deployment history and errors |

---

## Cost Breakdown

### Estimated Monthly Costs (Low Traffic)

| Service | Configuration | Monthly Cost |
|---------|--------------|--------------|
| App Runner | 0.25 vCPU, 0.5 GB | ~$5 |
| ECR Storage | < 1 GB | ~$0.10 |
| Data Transfer | < 1 GB | ~$0.09 |
| **Total** | | **~$5-6/month** |

### Cost Optimization Tips

1. **Use minimum instance size** (0.25 vCPU, 0.5 GB) for landing pages
2. **Enable auto-pause** if traffic is sporadic
3. **Delete unused resources** when not actively using
4. **Monitor with Cost Explorer** to catch unexpected charges

---

## Related Documentation

- [AWS Glossary](./AWS-GLOSSARY.md) - Learn what each AWS service does
- [AWS Pricing Guide](./AWS-PRICING-GUIDE.md) - Understand costs and set up billing alerts
- [Deployment Roadmap](./DEPLOYMENT-ROADMAP.md) - Phase-by-phase walkthrough

---

**Need help?** Tell your AI agent:
```
"I'm getting this AWS error: [paste error]. Help me fix it."
```
