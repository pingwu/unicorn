# AWS Services Glossary

**A beginner-friendly reference for AWS cloud services**

This glossary explains core AWS services you'll encounter when deploying applications. Each entry includes what it does, when to use it, and a real-world analogy.

---

## Table of Contents

1. [Identity & Access](#identity--access)
2. [Compute Services](#compute-services)
3. [Container Services](#container-services)
4. [Storage Services](#storage-services)
5. [Database Services](#database-services)
6. [Networking & DNS](#networking--dns)
7. [Monitoring & Logging](#monitoring--logging)
8. [AI & Machine Learning](#ai--machine-learning)
9. [Cost Management](#cost-management)

---

## Identity & Access

### IAM (Identity and Access Management)

**What it is**: AWS's security system that controls WHO can access WHAT in your AWS account.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Root User** | The "master key" account created when you sign up. Has unlimited access. |
| **IAM User** | Individual accounts for people or applications. Has only permissions you grant. |
| **IAM Role** | A set of permissions that can be "assumed" by users, applications, or AWS services. |
| **IAM Policy** | A document that defines what actions are allowed or denied. |
| **IAM Group** | A collection of users who share the same permissions. |

**Real-world analogy**: IAM is like a building's security system. The Root User is the building owner with master keys. IAM Users are employees with keycards. IAM Roles are like "visitor passes" that grant temporary access. IAM Policies are the rules about which doors each keycard can open.

**When you use it**: Every time you interact with AWS—creating resources, deploying apps, viewing logs.

**Why you need an Admin User (not Root)**:
- Root account has unlimited power—one mistake could delete everything
- Admin user can do almost everything but can be restricted or deleted
- Security best practice: Use Root only for billing and initial setup

---

## Compute Services

### EC2 (Elastic Compute Cloud)

**What it is**: Virtual servers (computers) in the cloud that you can rent by the hour.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Instance** | A single virtual server (like one computer) |
| **AMI** | Amazon Machine Image—a template with OS and software pre-installed |
| **Instance Type** | The size/power of your server (t2.micro, m5.large, etc.) |
| **Security Group** | Firewall rules controlling traffic to your instance |
| **Key Pair** | SSH credentials to log into your instance |

**Real-world analogy**: Renting a computer at an internet café, but the café is global and you can rent any size computer for any duration.

**When to use it**:
- Running custom applications that need full server control
- Legacy applications that can't be containerized
- High-performance computing, gaming servers

**Why we DON'T use it for this project**: EC2 requires you to manage the server (updates, security patches, scaling). App Runner handles all of that automatically.

---

## Container Services

### ECR (Elastic Container Registry)

**What it is**: A private storage vault for your Docker images, like a private Docker Hub.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Repository** | A named collection of Docker images (like a folder) |
| **Image** | A packaged application ready to run in a container |
| **Tag** | A version label for your image (latest, v1.0, etc.) |
| **Image URI** | The full address of your image: `123456789.dkr.ecr.us-east-2.amazonaws.com/my-app:latest` |

**Real-world analogy**: A private photo album in the cloud. Only people you authorize can see or download your photos (images).

**When to use it**: Storing Docker images for deployment to ECS, EKS, or App Runner.

**In this project**: We push our landing page Docker image to ECR, then App Runner pulls it to deploy.

---

### ECS (Elastic Container Service)

**What it is**: AWS's service for running Docker containers at scale. You define what containers to run, ECS handles the rest.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Task Definition** | A blueprint describing your container (image, CPU, memory, ports) |
| **Task** | A running instance of your container |
| **Service** | Ensures a specified number of tasks are always running |
| **Cluster** | A logical grouping of tasks and services |
| **Fargate** | Serverless compute for ECS—no servers to manage |

**Real-world analogy**: A restaurant kitchen. Task Definition is the recipe, Task is one dish being cooked, Service ensures there are always 3 dishes ready, Cluster is the whole kitchen.

**When to use it**:
- Microservices architectures
- Applications that need precise container orchestration
- When you need more control than App Runner provides

**Why we DON'T use it for this project**: ECS has more configuration overhead. App Runner is simpler for single-container apps.

---

### EKS (Elastic Kubernetes Service)

**What it is**: Managed Kubernetes—the industry-standard container orchestration platform, but AWS handles the complex parts.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Kubernetes (K8s)** | Open-source system for automating container deployment and scaling |
| **Pod** | The smallest deployable unit—one or more containers |
| **Node** | A worker machine (EC2 instance) that runs pods |
| **Cluster** | A set of nodes managed by Kubernetes |

**Real-world analogy**: If ECS is a restaurant kitchen, EKS is a chain of restaurants with a central management system coordinating all kitchens.

**When to use it**:
- Large-scale applications with many microservices
- Teams already familiar with Kubernetes
- Multi-cloud deployments (K8s works on any cloud)

**Why we DON'T use it for this project**: Massive overkill for a landing page. EKS is for complex, enterprise-scale applications.

---

### App Runner

**What it is**: The simplest way to deploy containerized web apps. Give it a container image, it handles everything else.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Service** | Your deployed application |
| **Source** | Where your code/image comes from (ECR or GitHub) |
| **Auto Scaling** | Automatically adds/removes instances based on traffic |
| **Custom Domain** | Your own domain name instead of the AWS default |

**Real-world analogy**: A valet parking service. You hand them your car (container), they park it, maintain it, and bring it back when needed. You don't worry about the parking garage.

**When to use it**:
- Simple web applications and APIs
- When you want zero infrastructure management
- Landing pages, blogs, microservices

**Why we USE it for this project**: Perfect for landing pages—minimal cost, automatic HTTPS, zero server management.

---

## Storage Services

### S3 (Simple Storage Service)

**What it is**: Unlimited cloud storage for any type of file—images, videos, backups, static websites.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Bucket** | A container for storing objects (like a top-level folder) |
| **Object** | Any file you store (image, document, video, etc.) |
| **Key** | The unique identifier (path) for an object in a bucket |
| **Storage Class** | Pricing tier based on access frequency (Standard, Glacier, etc.) |

**Real-world analogy**: An infinite filing cabinet in the cloud. You can store anything, access it from anywhere, and only pay for what you use.

**When to use it**:
- Storing user uploads (images, documents)
- Hosting static websites
- Data backups and archives
- Serving media files (videos, images)

**For landing pages**: You could host static assets (images) in S3 and serve them via CloudFront CDN for faster loading.

---

### EBS (Elastic Block Store)

**What it is**: Hard drives for EC2 instances. Persistent storage that survives instance restarts.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Volume** | A virtual hard drive attached to an EC2 instance |
| **Snapshot** | A backup of a volume at a specific point in time |
| **IOPS** | Input/Output Operations Per Second—a measure of performance |

**Real-world analogy**: The hard drive in your computer, but you can detach it and attach it to another computer.

**When to use it**: When EC2 instances need persistent storage (databases, file systems).

**Not used in this project**: App Runner doesn't use EBS—it's stateless and gets storage from the container image.

---

## Database Services

### RDS (Relational Database Service)

**What it is**: Managed relational databases (MySQL, PostgreSQL, SQL Server, etc.). AWS handles backups, patching, and scaling.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **DB Instance** | A single database server |
| **Multi-AZ** | Automatic failover to a backup in another Availability Zone |
| **Read Replica** | A copy of your database for read-heavy workloads |
| **Automated Backups** | AWS automatically backs up your database daily |

**Real-world analogy**: Hiring a DBA (database administrator) who handles all the maintenance while you focus on using the database.

**When to use it**: Applications that need relational databases without managing servers.

**Not used in this project**: A landing page doesn't need a database (unless you're collecting form submissions).

---

## Networking & DNS

### ELB (Elastic Load Balancer)

**What it is**: Distributes incoming traffic across multiple servers to prevent any single server from being overwhelmed.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **ALB (Application LB)** | Routes HTTP/HTTPS traffic, supports path-based routing |
| **NLB (Network LB)** | Ultra-high performance for TCP/UDP traffic |
| **Target Group** | A group of servers that receive traffic from the load balancer |
| **Health Check** | Automatically detects and stops sending traffic to unhealthy servers |

**Real-world analogy**: A receptionist at a busy office who directs visitors to available staff members, ensuring no one person is overwhelmed.

**When to use it**: When running multiple EC2 instances or containers that need traffic distribution.

**Not used directly**: App Runner has built-in load balancing—you don't configure it separately.

---

### Route 53

**What it is**: AWS's DNS (Domain Name System) service. Translates domain names (example.com) into IP addresses.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Hosted Zone** | A container for DNS records for a domain |
| **Record** | Maps a domain name to an IP address or another domain |
| **A Record** | Points domain to an IPv4 address |
| **CNAME** | Points domain to another domain name |
| **Alias** | AWS-specific record that points to AWS resources |

**Real-world analogy**: A phone book that translates names ("John's Pizza") into phone numbers (555-1234).

**When to use it**:
- Registering domain names
- Pointing your domain to your App Runner service
- Managing DNS for your applications

**For landing pages**: Use Route 53 to connect your custom domain (yourbusiness.com) to your App Runner URL.

---

## Monitoring & Logging

### CloudWatch

**What it is**: AWS's monitoring and observability service. Collects logs, metrics, and can trigger alarms.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Metrics** | Numerical data points (CPU usage, request count, errors) |
| **Logs** | Text output from your applications |
| **Alarms** | Notifications when metrics exceed thresholds |
| **Dashboards** | Visual displays of your metrics |
| **Log Groups** | Collections of log streams from a single source |

**Real-world analogy**: The dashboard in your car showing speed, fuel level, and warning lights—but for your cloud applications.

**When to use it**:
- Debugging application errors
- Monitoring performance
- Setting up alerts for outages

**In this project**: App Runner automatically sends logs to CloudWatch. Use it to debug deployment issues.

---

## AI & Machine Learning

### Bedrock

**What it is**: AWS's managed service for accessing foundation models (large AI models) like Claude, Llama, and Titan.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Foundation Model** | Large, pre-trained AI models (Claude, Llama, Titan) |
| **Model Access** | You must request access to each model before using it |
| **Inference** | Running a prompt through a model to get a response |
| **Knowledge Base** | RAG (Retrieval Augmented Generation) for your own documents |

**Real-world analogy**: A library of AI assistants you can hire by the minute. Each has different specialties and pricing.

**When to use it**:
- Building AI-powered features into your applications
- Running Claude or other LLMs on AWS infrastructure
- When you need enterprise security and compliance

**For this course**: AWS Builder Loft demos use Claude Code with Bedrock as the AI provider.

---

### SageMaker

**What it is**: A complete platform for building, training, and deploying custom machine learning models.

**Key Concepts**:
| Term | Description |
|------|-------------|
| **Notebook** | Jupyter notebooks for data exploration and model development |
| **Training Job** | The process of teaching a model using your data |
| **Endpoint** | A deployed model ready to receive predictions |
| **Model Registry** | Version control for your ML models |

**Real-world analogy**: A complete workshop for building custom cars from scratch, versus Bedrock which is like renting pre-built cars.

**When to use it**:
- Training custom ML models on your own data
- When foundation models don't meet your specific needs
- Large-scale ML operations (MLOps)

**Not used in this project**: We're deploying a landing page, not building ML models. Bedrock is for using pre-built AI, SageMaker is for building your own.

---

## Cost Management

### Cost Explorer

**What it is**: AWS's built-in tool for visualizing and analyzing your AWS spending.

**Key Features**:
| Feature | Description |
|---------|-------------|
| **Cost Breakdown** | See spending by service, region, or tag |
| **Forecasting** | Predict future costs based on usage trends |
| **Savings Plans** | Recommendations for cost-saving commitments |
| **Filters** | Drill down into specific services or time periods |

**Real-world analogy**: Your credit card statement with detailed categorization and spending trends.

**When to use it**: Monthly cost reviews, identifying unexpected charges, budget planning.

---

### CUR (Cost and Usage Reports)

**What it is**: Detailed, line-item reports of all AWS usage and costs. More granular than Cost Explorer.

**Key Features**:
| Feature | Description |
|---------|-------------|
| **Hourly/Daily granularity** | See exact costs per hour if needed |
| **Resource-level data** | Costs for individual resources (specific EC2 instances) |
| **S3 delivery** | Reports delivered to S3 for custom analysis |
| **Integration** | Works with Athena, QuickSight for advanced analytics |

**Real-world analogy**: If Cost Explorer is your credit card statement, CUR is the itemized receipt for every purchase.

**When to use it**: Enterprise cost allocation, chargeback to departments, detailed audits.

---

## Service Comparison Chart

### Container Deployment Options

| Service | Complexity | Control | Cost | Best For |
|---------|------------|---------|------|----------|
| **App Runner** | Low | Low | $ | Simple web apps, landing pages |
| **ECS Fargate** | Medium | Medium | $$ | Microservices, multiple containers |
| **ECS on EC2** | High | High | $$ | Cost optimization at scale |
| **EKS** | Very High | Very High | $$$ | Enterprise K8s, multi-cloud |

### Storage Options

| Service | Type | Use Case | Cost |
|---------|------|----------|------|
| **S3** | Object storage | Files, backups, static sites | $ per GB stored |
| **EBS** | Block storage | EC2 hard drives | $ per GB provisioned |
| **EFS** | File storage | Shared file systems | $$ per GB used |

### Database Options

| Service | Type | Use Case | Management |
|---------|------|----------|------------|
| **RDS** | Relational | Structured data, transactions | Managed |
| **DynamoDB** | NoSQL | Key-value, high scale | Fully managed |
| **Aurora** | Relational | High performance, MySQL/PostgreSQL compatible | Managed |

---

## Quick Reference: Services Used in This Project

| Service | Purpose in This Project |
|---------|------------------------|
| **IAM** | Create deployment user with limited permissions |
| **ECR** | Store our Docker image |
| **App Runner** | Host and serve our landing page |
| **CloudWatch** | View application logs |
| **Route 53** | (Optional) Connect custom domain |

---

## Next Steps

- [AWS Deployment Guide](./AWS-DEPLOYMENT-GUIDE.md) - Deploy your landing page
- [AWS Pricing Guide](./AWS-PRICING-GUIDE.md) - Understand costs
- [AWS Official Documentation](https://docs.aws.amazon.com/) - Deep dive into any service
