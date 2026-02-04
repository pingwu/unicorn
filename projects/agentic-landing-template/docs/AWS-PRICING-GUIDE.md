# AWS Pricing Guide

**Understanding AWS costs, billing, and how to avoid surprises**

This guide explains AWS's pricing model, how to monitor costs, and how to keep your landing page deployment affordable.

---

## Table of Contents

1. [AWS Pricing Philosophy](#aws-pricing-philosophy)
2. [Pricing Models](#pricing-models)
3. [Free Tier](#aws-free-tier)
4. [Cost Management Tools](#cost-management-tools)
5. [Service-Specific Pricing](#service-specific-pricing)
6. [Cost Optimization Tips](#cost-optimization-tips)
7. [Billing Alerts](#setting-up-billing-alerts)

---

## AWS Pricing Philosophy

### Pay-As-You-Go

AWS charges you only for what you use. No upfront costs, no long-term contracts (unless you choose them for discounts).

**The Good**:
- Start small, scale as needed
- No wasted capacity
- Experiment without commitment

**The Risk**:
- Costs can grow unexpectedly
- Easy to forget resources running
- Auto-scaling can surprise you

### Three Core Pricing Dimensions

| Dimension | Description | Example |
|-----------|-------------|---------|
| **Compute** | CPU time and memory used | EC2 hours, Lambda invocations |
| **Storage** | Data stored | S3 GB-months, EBS volumes |
| **Data Transfer** | Data moving in/out of AWS | Downloads, cross-region traffic |

**Key insight**: Data INTO AWS is usually free. Data OUT of AWS costs money.

---

## Pricing Models

### 1. On-Demand (Pay-As-You-Go)

**How it works**: Pay by the hour or second with no commitment.

| Pros | Cons |
|------|------|
| No upfront cost | Highest per-unit price |
| Stop anytime | Unpredictable monthly bills |
| Perfect for testing | Not cost-effective long-term |

**Best for**: Development, testing, unpredictable workloads, short-term projects.

---

### 2. Reserved Instances / Savings Plans

**How it works**: Commit to 1 or 3 years of usage for 30-70% discount.

| Pros | Cons |
|------|------|
| Significant savings | Upfront commitment |
| Predictable costs | Locked into specific resources |
| Can pay upfront for more savings | Wasted if needs change |

**Best for**: Production workloads with predictable, steady usage.

---

### 3. Spot Instances (EC2 only)

**How it works**: Bid for unused EC2 capacity at up to 90% discount. AWS can terminate with 2-minute notice.

| Pros | Cons |
|------|------|
| Up to 90% discount | Can be interrupted |
| Great for batch jobs | Not for critical workloads |
| Available immediately | Availability varies |

**Best for**: Batch processing, data analysis, CI/CD pipelines, fault-tolerant workloads.

---

### 4. Per-Request Pricing

**How it works**: Pay per API call or request (Lambda, API Gateway, Bedrock).

| Pros | Cons |
|------|------|
| Pay only when used | Costs scale with traffic |
| Zero cost when idle | Can spike unexpectedly |
| Great for variable traffic | Need to monitor closely |

**Best for**: APIs, serverless applications, AI/ML inference.

---

## AWS Free Tier

AWS offers three types of free usage:

### 1. Always Free

Services that are always free within limits:

| Service | Free Limit |
|---------|------------|
| Lambda | 1M requests/month, 400,000 GB-seconds |
| DynamoDB | 25 GB storage, 25 read/write units |
| SNS | 1M publishes/month |
| CloudWatch | 10 custom metrics, 10 alarms |

### 2. 12-Month Free (New Accounts Only)

Free for 12 months after account creation:

| Service | Free Limit |
|---------|------------|
| EC2 | 750 hours/month (t2.micro or t3.micro) |
| S3 | 5 GB storage |
| RDS | 750 hours/month (db.t2.micro) |
| CloudFront | 50 GB data transfer |

### 3. Trials

Short-term free trials for specific services:

| Service | Trial |
|---------|-------|
| SageMaker | 250 hours for 2 months |
| Bedrock | Limited free tier for some models |
| App Runner | No free tier (but very low cost) |

**Important**: App Runner does NOT have a free tier. Budget ~$5-15/month.

---

## Cost Management Tools

### Cost Explorer

**What it is**: Visual dashboard showing your AWS spending.

**How to access**:
1. Go to AWS Console
2. Search "Cost Explorer" or "Billing"
3. Click "Cost Explorer" in left sidebar

**Key Features**:

| Feature | What It Shows |
|---------|--------------|
| **Cost by Service** | Which services cost the most |
| **Cost by Region** | Spending in each AWS region |
| **Daily/Monthly Trends** | How costs change over time |
| **Forecasts** | Predicted costs for the month |
| **Savings Recommendations** | Ways to reduce spending |

**Natural Language Commands**:

| Natural Language | What To Do |
|-----------------|------------|
| "Show me my AWS costs for this month" | Open Cost Explorer → select current month |
| "Which service is costing me the most?" | Cost Explorer → Group by Service |
| "How much will I spend this month?" | Cost Explorer → View Forecast |

---

### CUR (Cost and Usage Reports)

**What it is**: Detailed, line-by-line export of all AWS charges.

**When to use it**:
- Enterprise cost allocation
- Chargeback to departments
- Custom analytics and reporting
- Integration with third-party tools

**Setup**:
1. Go to Billing Console
2. Click "Cost & Usage Reports"
3. Create a report with S3 delivery
4. Query with Athena or download CSV

**For beginners**: Cost Explorer is sufficient. CUR is for advanced analysis.

---

### AWS Budgets

**What it is**: Set spending limits and get alerts before you exceed them.

**How to create a budget**:

| Natural Language | Steps |
|-----------------|-------|
| "Set up a $20/month AWS budget alert" | Billing → Budgets → Create Budget → Cost Budget → $20 → Add email alert |

**Recommended Alerts**:
| Alert Type | Threshold | Purpose |
|------------|-----------|---------|
| Forecasted | 80% of budget | Early warning |
| Actual | 100% of budget | You've hit your limit |
| Actual | 150% of budget | Something may be wrong |

---

### AWS Pricing Calculator

**What it is**: Estimate costs before you deploy.

**Website**: https://calculator.aws/

**How to use**:
1. Add services you plan to use
2. Configure instance sizes, storage, etc.
3. Get monthly estimate

**Example for Landing Page**:
```
App Runner:
- 1 instance, 0.25 vCPU, 0.5 GB
- Estimated: $5-7/month

ECR:
- 1 GB storage
- Estimated: $0.10/month

Total: ~$5-8/month
```

---

## Service-Specific Pricing

### App Runner Pricing

| Component | Price |
|-----------|-------|
| **Compute (Active)** | $0.064/vCPU-hour + $0.007/GB-hour |
| **Compute (Provisioned)** | $0.007/GB-hour (minimum always running) |
| **Requests** | Included (no per-request charge) |
| **Auto-pause** | No charge when paused |

**Minimum Configuration Costs**:
| Config | Active Hours | Monthly Cost |
|--------|--------------|--------------|
| 0.25 vCPU, 0.5 GB | 24/7 | ~$15 |
| 0.25 vCPU, 0.5 GB | 8 hrs/day | ~$5 |
| With auto-pause | Variable | $0-15 |

---

### ECR Pricing

| Component | Price |
|-----------|-------|
| **Storage** | $0.10/GB/month |
| **Data Transfer Out** | $0.09/GB (to internet) |
| **Data Transfer In** | Free |
| **Transfer to App Runner** | Free (same region) |

**Typical Landing Page**: <$1/month (images are small, ~100-500 MB)

---

### CloudWatch Pricing

| Component | Free Tier | Price After |
|-----------|-----------|-------------|
| **Metrics** | 10 custom metrics | $0.30/metric/month |
| **Logs Ingestion** | 5 GB/month | $0.50/GB |
| **Logs Storage** | 5 GB/month | $0.03/GB/month |
| **Alarms** | 10 alarms | $0.10/alarm/month |

**Typical Landing Page**: Usually within free tier or <$1/month

---

### Route 53 Pricing (Custom Domain)

| Component | Price |
|-----------|-------|
| **Hosted Zone** | $0.50/month per domain |
| **Queries** | $0.40/million queries |
| **Domain Registration** | $9-35/year (varies by TLD) |

**Typical Landing Page**: ~$0.50-1/month + domain registration

---

### Data Transfer Pricing

| Transfer Type | Price |
|--------------|-------|
| **Into AWS** | Free |
| **Within same region** | Free |
| **Between regions** | $0.01-0.02/GB |
| **Out to Internet** | $0.09/GB (first 10 TB) |

**For landing pages**: Usually negligible (<$1/month) unless high traffic.

---

## Cost Optimization Tips

### 1. Use the Right Region

| Region | Typical Cost | Notes |
|--------|--------------|-------|
| **us-east-2 (Ohio)** | Lowest | Recommended for cost |
| **us-east-1 (N. Virginia)** | Low | Most services available |
| **us-west-2 (Oregon)** | Medium | Good for West Coast |
| **eu-west-1 (Ireland)** | Higher | Best for EU users |

---

### 2. Right-Size Your Resources

**For a landing page**:

| Resource | Recommended | Why |
|----------|-------------|-----|
| App Runner CPU | 0.25 vCPU | Minimum, sufficient for static content |
| App Runner Memory | 0.5 GB | Minimum, sufficient for Next.js |
| ECR Images | 1-2 tags | Delete old images |

**Natural Language**:
```
"Deploy to App Runner with minimum resources: 0.25 vCPU and 0.5 GB memory"
```

---

### 3. Enable Auto-Pause (App Runner)

App Runner can pause when there's no traffic, reducing costs to near zero.

| Natural Language | CLI Command |
|-----------------|-------------|
| "Enable auto-pause for my App Runner service" | Update service configuration with auto-scaling min=0 |

---

### 4. Delete Unused Resources

**Weekly cleanup checklist**:

| Check | Natural Language |
|-------|-----------------|
| Unused ECR images | "Delete old Docker images from ECR, keep only latest" |
| Stopped App Runner services | "List all my App Runner services" |
| Unattached EBS volumes | "List unattached EBS volumes" |
| Old snapshots | "List EBS snapshots older than 30 days" |

---

### 5. Set Up Billing Alerts

**Minimum recommended alerts**:

| Alert | Threshold | Action |
|-------|-----------|--------|
| Monthly forecast | $10 | Email notification |
| Actual spend | $15 | Email + investigate |
| Actual spend | $25 | Email + auto-action (stop resources) |

---

## Setting Up Billing Alerts

### Using AWS Budgets

| Natural Language | Steps in Console |
|-----------------|------------------|
| "Create a $20 monthly budget with email alerts" | 1. Go to Billing → Budgets<br>2. Create Budget<br>3. Select "Cost budget"<br>4. Set $20 monthly<br>5. Add alert at 80% and 100%<br>6. Enter email address |

### Using CloudWatch Billing Alarms

| Natural Language | CLI Command |
|-----------------|-------------|
| "Create a billing alarm for $15" | `aws cloudwatch put-metric-alarm --alarm-name BillingAlert --metric-name EstimatedCharges --namespace AWS/Billing --statistic Maximum --period 21600 --threshold 15 --comparison-operator GreaterThanThreshold --evaluation-periods 1 --alarm-actions <sns-topic-arn>` |

---

## Sample Monthly Budget

### Landing Page (Low Traffic)

| Service | Estimated Cost |
|---------|---------------|
| App Runner (0.25 vCPU, 0.5 GB) | $5-8 |
| ECR Storage | $0.10 |
| CloudWatch (within free tier) | $0 |
| Data Transfer | <$1 |
| **Total** | **$5-10/month** |

### Landing Page (Medium Traffic)

| Service | Estimated Cost |
|---------|---------------|
| App Runner (0.5 vCPU, 1 GB) | $10-15 |
| ECR Storage | $0.20 |
| CloudWatch Logs | $1-2 |
| Data Transfer (10 GB out) | $0.90 |
| Route 53 (custom domain) | $0.50 |
| **Total** | **$15-20/month** |

---

## Cost Comparison: Hosting Options

| Option | Monthly Cost | Pros | Cons |
|--------|-------------|------|------|
| **App Runner** | $5-15 | Managed, auto-scale, HTTPS | No free tier |
| **Vercel (Free)** | $0 | Free tier generous | Limited to Next.js |
| **Netlify (Free)** | $0 | Free tier generous | Build minutes limited |
| **EC2 t3.micro** | $8-10 | Full control | Must manage server |
| **Lightsail** | $3.50 | Simple pricing | Less scalable |

**Recommendation**: For learning AWS, use App Runner. For production landing pages with tight budgets, consider Vercel or Netlify free tiers.

---

## Red Flags: Unexpected Costs

Watch for these in Cost Explorer:

| Red Flag | Possible Cause | Solution |
|----------|---------------|----------|
| High EC2 charges | Forgot to stop instance | Terminate unused instances |
| Data transfer spikes | Large file downloads | Use CloudFront CDN |
| NAT Gateway charges | VPC misconfiguration | Review VPC setup |
| EBS volumes | Unattached volumes | Delete or snapshot |
| Multiple App Runner services | Old deployments | Delete test services |

---

## Quick Reference Card

### Before Deploying

1. Check Free Tier status: Billing → Free Tier
2. Estimate costs: calculator.aws
3. Set up budget: Billing → Budgets → Create Budget

### While Running

1. Check daily: Cost Explorer
2. Review weekly: Unused resources
3. Monitor: CloudWatch alarms

### Monthly

1. Review Cost Explorer trends
2. Check for savings recommendations
3. Delete old ECR images
4. Verify only needed services running

---

## Natural Language Quick Commands

| Task | Say This to Your AI Agent |
|------|--------------------------|
| Check current spend | "Show me my AWS costs for this month" |
| Find expensive services | "Which AWS service is costing me the most?" |
| Forecast monthly bill | "What's my projected AWS bill this month?" |
| Find unused resources | "List all my AWS resources that aren't being used" |
| Set up budget alert | "Create a $20 monthly AWS budget with email alerts" |
| Delete old images | "Delete all ECR images except the latest tag" |
| Estimate App Runner cost | "How much will App Runner cost for a landing page?" |

---

**Next Steps**:
- [AWS Deployment Guide](./AWS-DEPLOYMENT-GUIDE.md) - Deploy your landing page
- [AWS Glossary](./AWS-GLOSSARY.md) - Learn AWS services
