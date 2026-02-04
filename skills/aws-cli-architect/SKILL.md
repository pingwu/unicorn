---
name: aws-cli-architect
description: Orchestrate AWS infrastructure through CLI with cloud architect expertise—cost-aware, security-first, and production-ready patterns. Use when provisioning resources, automating infrastructure, troubleshooting AWS services, or when console-clicking would be inefficient for repeatable operations.
---

# AWS CLI Infrastructure Architect

## Core Principle

Infrastructure is code. CLI commands are the atoms. Architects think in systems, not resources.

## Architect's Mental Model

```
❌ "Create an EC2 instance"
✅ "Provision a web tier: ALB → ASG with 2-4 t3.medium instances across 3 AZs, 
    termination protection enabled, IMDSv2 required, tagged for cost allocation"
```

## Command Patterns by Domain

### Compute & Networking
```bash
# VPC with proper CIDR planning (leave room for growth)
aws ec2 create-vpc --cidr-block 10.0.0.0/16 --tag-specifications 'ResourceType=vpc,Tags=[{Key=Environment,Value=prod}]'

# Security groups: deny by default, explicit allows
aws ec2 authorize-security-group-ingress --group-id sg-xxx --protocol tcp --port 443 --source-group sg-alb-xxx
```

### IAM (Least Privilege Always)
```bash
# Query before granting - what do they actually need?
aws iam simulate-principal-policy --policy-source-arn arn:aws:iam::xxx:role/AppRole --action-names s3:GetObject --resource-arns arn:aws:s3:::bucket/*

# Never use inline policies for reusable permissions
aws iam create-policy --policy-name S3ReadOnly --policy-document file://policy.json
```

### Cost Visibility (FinOps Lens)
```bash
# Tag everything - untagged resources are invisible costs
aws resourcegroupstaggingapi tag-resources --resource-arn-list arn:aws:ec2:... --tags Project=WebApp,Environment=prod,Owner=team-alpha

# Spot for stateless, Reserved/Savings Plans for baseline
aws ec2 describe-spot-price-history --instance-types t3.medium --product-descriptions "Linux/UNIX" --start-time $(date -u +%Y-%m-%dT%H:%M:%SZ)
```

## Orchestration Prompts

### Infrastructure Provisioning
```
"Set up a production-ready ECS Fargate service:
- Private subnets only, NAT gateway for outbound
- ALB with HTTPS (ACM cert), HTTP→HTTPS redirect
- CloudWatch logs with 30-day retention
- Auto-scaling on CPU >70% (2-10 tasks)
- Secrets from Parameter Store, not environment variables
Output as executable shell script with error handling."
```

### Troubleshooting
```
"ECS tasks failing to start. Give me the diagnostic sequence:
1. Check task definition validity
2. Pull recent stopped task reasons
3. Verify security group allows ECR pull
4. Check IAM role has ecr:GetAuthorizationToken
5. Examine CloudWatch logs for container errors"
```

### Cost Investigation
```
"Identify cost anomalies in us-east-1:
- Unattached EBS volumes
- Idle load balancers (zero healthy targets)
- NAT gateway data processing spikes
- Unassociated Elastic IPs
Output findings with estimated monthly waste."
```

## Security-First Defaults

| Anti-Pattern | Architect Pattern |
|--------------|-------------------|
| `--publicly-accessible` | Private subnet + bastion/SSM |
| IAM user access keys | IAM roles + instance profiles |
| Security group `0.0.0.0/0` | Source security group references |
| Hardcoded secrets | Secrets Manager / Parameter Store |
| Root account usage | SSO + permission sets |

## Multi-Account Strategy

```bash
# Assume role for cross-account operations
aws sts assume-role --role-arn arn:aws:iam::PROD_ACCOUNT:role/DeployRole --role-session-name deploy-session

# Organization-wide queries
aws organizations list-accounts --query 'Accounts[?Status==`ACTIVE`].[Id,Name]' --output table
```

## Output as Infrastructure Code

When appropriate, request Terraform/CloudFormation output:
```
"Provision this infrastructure, then generate the equivalent Terraform 
so we can version control it. CLI for speed now, IaC for repeatability."
```

## Power Move

"Before provisioning, show me: estimated monthly cost, security group rules you'll create, IAM permissions required, and what breaks if any single AZ goes down."

The agent becomes your architecture review—cost, security, and resilience checked before a single resource exists.
