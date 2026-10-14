// ===== SAA-C03 CHEAT SHEET DATA =====
// Same shape as CHEATSHEET in cheatsheet.js (rendered by renderCheatsheet()).

const SAA_CHEATSHEET = [
  {
    domain: "Design Secure Architectures",
    icon: "🔒",
    color: "#1E8A44",
    sections: [
      {
        title: "IAM — Who Can Do What",
        items: [
          "Roles over access keys — instance profiles for EC2, task roles for ECS, execution roles for Lambda",
          "Cross-account access — role in the target account trusted by the source account (+ external ID for third parties)",
          "Permissions boundary — caps the maximum permissions of roles/users that developers create",
          "Explicit Deny always wins — over any Allow in identity, resource or SCP policies",
          "ABAC — tag principals and resources, allow when tags match (scales to many projects)",
          "IAM Access Analyzer — finds resources shared outside your account/organization",
        ]
      },
      {
        title: "Multi-Account Governance",
        items: [
          "AWS Organizations SCPs — guardrails on member accounts; they grant nothing, only limit (incl. admins)",
          "Common SCPs — deny non-approved Regions (aws:RequestedRegion), deny leaving the org, protect CloudTrail",
          "AWS Control Tower — landing zone with account factory, preventive + detective controls",
          "IAM Identity Center — SSO to all accounts with permission sets; connects to Entra ID / Okta / AD",
          "aws:PrincipalOrgID — share a resource with every account in the org, including future ones",
        ]
      },
      {
        title: "Network Security",
        items: [
          "Security groups — stateful, allow rules only, can reference other security groups",
          "Network ACLs — stateless, allow AND deny, subnet level, evaluated by rule number",
          "Block one IP range → NACL deny rule; tier-to-tier access → SG referencing the other SG",
          "Private subnets + NAT gateway (one per AZ for HA) for outbound-only internet access",
          "Gateway endpoints (S3, DynamoDB) — route table target, free; interface endpoints (PrivateLink) — ENI, other services",
          "Session Manager — shell access without bastions, open ports or SSH keys; sessions logged",
          "PrivateLink endpoint service — expose one service to many VPCs, works with overlapping CIDRs",
        ]
      },
      {
        title: "Edge & Threat Protection",
        items: [
          "AWS WAF — L7 rules on CloudFront, ALB, API Gateway, AppSync: SQLi/XSS managed rules, rate-based rules, geo match",
          "Shield Standard — free L3/L4 DDoS protection; Shield Advanced — DDoS response team + cost protection",
          "GuardDuty — threat detection from CloudTrail, VPC Flow Logs, DNS logs (enable org-wide)",
          "Inspector — vulnerability scanning of EC2, ECR images, Lambda",
          "Macie — discovers sensitive data (PII) in S3",
          "Security Hub — aggregates findings and checks against standards",
          "Cognito user pools — sign-up/sign-in (incl. social); identity pools — temporary AWS credentials",
        ]
      },
      {
        title: "Data Protection",
        items: [
          "KMS customer managed key — you control key policy, rotation, disable; every use logged in CloudTrail",
          "KMS multi-Region keys — decrypt in another Region without calling the original one",
          "Encrypt an existing RDS/EBS — snapshot → encrypted copy → restore / create volume",
          "EBS encryption by default — per Region, ensures every new volume is encrypted",
          "S3 Object Lock compliance mode — WORM, nobody (not even root) can delete before retention ends",
          "S3 Block Public Access (account level) + SCP to stop anyone turning it off",
          "S3 presigned URLs — temporary access to private objects without AWS credentials",
          "CloudFront + origin access control (OAC) — keep the S3 bucket private (supports SSE-KMS)",
          "aws:SecureTransport = false → Deny in bucket policy to force HTTPS",
          "Secrets Manager — managed rotation for DB credentials; Parameter Store — config values, no built-in rotation",
          "ACM — free public certificates with auto-renewal; for CloudFront the certificate must be in us-east-1",
        ]
      },
    ],
    links: [
      { label: "SAA-C03 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html" },
      { label: "Security Pillar", url: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html" },
      { label: "IAM Policy Evaluation Logic", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html" },
    ]
  },
  {
    domain: "Design Resilient Architectures",
    icon: "🛡️",
    color: "#0073BB",
    sections: [
      {
        title: "Decoupling & Messaging",
        items: [
          "SQS — buffer between tiers; consumers scale on queue depth; no message is lost when consumers are down",
          "SQS FIFO — strict ordering per message group + deduplication; standard — at-least-once, best-effort order",
          "Visibility timeout — must exceed processing time, otherwise messages are processed twice",
          "Dead-letter queue — isolates messages that keep failing after maxReceiveCount",
          "SNS → multiple SQS queues — fan-out, each subscriber processes at its own pace",
          "EventBridge — route events (AWS, SaaS partners, custom) by content to many targets; schedules",
          "Step Functions — orchestration with branching, retries, waits; Standard for long/human steps, Express for high-volume short ones",
        ]
      },
      {
        title: "Scaling the Compute Tier",
        items: [
          "Target tracking — keep a metric at a value (e.g. CPU 50%), least tuning",
          "Scheduled scaling — known future event (sale opening at a fixed time)",
          "Predictive scaling — recurring daily/weekly pattern, launches capacity ahead of demand",
          "Stateless tier — sessions in ElastiCache or DynamoDB, not in instance memory",
          "ALB — HTTP/HTTPS, path/host routing to target groups; NLB — TCP/UDP, extreme performance, static IPs",
          "ELB health checks on the Auto Scaling group → unhealthy instances get replaced",
          "Fargate — containers without managing hosts; EKS — managed Kubernetes control plane",
        ]
      },
      {
        title: "Databases — Availability vs Read Scaling",
        items: [
          "RDS Multi-AZ — synchronous standby, automatic failover, same endpoint; standby does NOT serve reads",
          "Read replicas — asynchronous, offload reads/reporting; can be promoted (manual)",
          "Aurora — 6 copies across 3 AZs; replicas double as failover targets; reader endpoint balances reads",
          "Aurora Global Database — cross-Region, ~1 s RPO, ~1 min RTO, local reads in the secondary Region",
          "DynamoDB global tables — multi-Region, multi-active reads AND writes",
        ]
      },
      {
        title: "DNS & Failover (Route 53)",
        items: [
          "Failover — primary/secondary with health checks (e.g. ALB → static S3 maintenance site)",
          "Latency-based — send users to the Region with lowest latency; add health checks to fail away",
          "Weighted — split traffic by percentage (blue/green, canary)",
          "Geolocation — by user location (legal/licensing); always add a default record",
          "Geoproximity — by distance with bias to shift traffic",
          "Multivalue answer — up to 8 healthy records, simple client-side load spreading",
        ]
      },
      {
        title: "Disaster Recovery Strategies (cheapest → fastest)",
        items: [
          "Backup & restore — RPO/RTO hours; backups copied to another Region, rebuild on disaster",
          "Pilot light — data replicated continuously, core infra off; RPO minutes, RTO tens of minutes to hours",
          "Warm standby — scaled-down but fully working copy always running; RTO minutes",
          "Multi-site active/active — full capacity in both Regions; RTO near zero, highest cost",
          "AWS Elastic Disaster Recovery — continuous block replication of servers to a low-cost staging area",
          "AWS Backup — central plans, cross-Region/cross-account copies, Vault Lock for immutability",
          "S3 Cross-Region Replication — requires versioning on source and destination",
          "CloudFront origin groups — automatic failover to a secondary origin",
        ]
      },
      {
        title: "Shared Storage",
        items: [
          "EFS — NFS shared by many Linux instances across AZs (Regional storage)",
          "EBS — one AZ; Multi-Attach only for io1/io2 and cluster-aware apps",
          "FSx for Windows File Server — SMB shares, Active Directory integration",
          "Instance store — ephemeral, lost on stop/terminate",
        ]
      },
    ],
    links: [
      { label: "Reliability Pillar", url: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html" },
      { label: "Disaster Recovery Whitepaper", url: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html" },
      { label: "Route 53 Routing Policies", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html" },
    ]
  },
  {
    domain: "Design High-Performing Architectures",
    icon: "⚡",
    color: "#FF9900",
    sections: [
      {
        title: "Storage Performance",
        items: [
          "gp3 — baseline SSD, IOPS and throughput provisioned independently of size",
          "io2 Block Express — highest IOPS, sub-millisecond latency, highest durability",
          "st1 — throughput-optimized HDD for big sequential reads; sc1 — coldest, cheapest HDD",
          "Instance store (NVMe) — fastest local disk for scratch/temporary data",
          "EFS Elastic throughput — scales automatically with spiky workloads",
          "FSx for Lustre — HPC parallel file system, can be linked to an S3 bucket",
          "FSx for NetApp ONTAP — NFS + SMB multiprotocol, NetApp snapshots/SnapMirror",
          "S3 — spread keys over prefixes, multipart upload and byte-range fetches, Transfer Acceleration for distant uploads",
        ]
      },
      {
        title: "Compute",
        items: [
          "Cluster placement group — lowest latency, highest throughput, one AZ",
          "Spread placement group — each instance on distinct hardware (small critical sets)",
          "Partition placement group — large distributed systems (Cassandra, HDFS, Kafka) aware of racks",
          "Warm pools — pre-initialized instances to shorten slow scale-outs",
          "Lambda — more memory = more CPU; provisioned concurrency removes cold starts",
          "AWS Batch — queued batch jobs, provisions compute (often Spot) automatically",
          "EMR — managed Hadoop/Spark with data in S3 (storage decoupled from compute)",
        ]
      },
      {
        title: "Choosing a Database",
        items: [
          "Relational / SQL joins → RDS or Aurora; spiky relational → Aurora Serverless v2",
          "Key-value, massive scale, single-digit ms → DynamoDB; microseconds → add DAX",
          "Caching / sessions / leaderboards → ElastiCache (Redis OSS sorted sets); simple cache → Memcached",
          "Many Lambda connections to RDS → RDS Proxy (connection pooling)",
          "Documents with MongoDB drivers → DocumentDB; graph relationships → Neptune",
          "Cassandra/CQL → Keyspaces; data warehouse / analytics → Redshift",
        ]
      },
      {
        title: "Network Performance",
        items: [
          "CloudFront — cache static and dynamic content at the edge; tune the cache key to raise hit ratio",
          "CloudFront Functions — lightweight viewer request/response logic; Lambda@Edge — heavier logic, network calls",
          "Global Accelerator — anycast static IPs, TCP/UDP over the AWS backbone, fast Regional failover",
          "Direct Connect — consistent, private, high-bandwidth link; VPN over the internet is variable",
          "Transit Gateway — hub-and-spoke for many VPCs + on-premises (replaces peering meshes)",
          "Enhanced networking (ENA) + cluster placement group for node-to-node throughput",
        ]
      },
      {
        title: "Data Ingestion & Analytics",
        items: [
          "Kinesis Data Streams — real-time streams with custom consumers, replay",
          "Amazon Data Firehose — managed delivery to S3/Redshift/OpenSearch, can convert to Parquet",
          "Amazon MSK — managed Apache Kafka (keep Kafka APIs)",
          "Glue — crawlers fill the Data Catalog, serverless ETL jobs",
          "Athena — serverless SQL on S3; Parquet + partitions = faster and cheaper",
          "Redshift Spectrum — query S3 data from Redshift without loading it",
          "QuickSight — serverless BI dashboards",
          "DataSync — online transfer/sync from on-premises; Snowball Edge — offline bulk transfer; Transfer Family — managed SFTP to S3",
        ]
      },
    ],
    links: [
      { label: "Performance Efficiency Pillar", url: "https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html" },
      { label: "EBS Volume Types", url: "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html" },
      { label: "AWS Architecture Center", url: "https://aws.amazon.com/architecture/" },
    ]
  },
  {
    domain: "Design Cost-Optimized Architectures",
    icon: "💰",
    color: "#8B5CF6",
    sections: [
      {
        title: "S3 Storage Classes",
        items: [
          "Standard — frequent access",
          "Intelligent-Tiering — unknown/changing patterns, no retrieval fees, small monitoring fee",
          "Standard-IA — infrequent but immediate access, multi-AZ",
          "One Zone-IA — infrequent, re-creatable data (single AZ)",
          "Glacier Instant Retrieval — rarely accessed, milliseconds retrieval",
          "Glacier Flexible Retrieval — minutes to hours; Deep Archive — cheapest, up to 48 h",
          "Lifecycle rules — transition by age, expire objects, delete noncurrent versions, abort incomplete multipart uploads",
          "Requester Pays — downloaders pay for their own requests and transfer",
        ]
      },
      {
        title: "Other Storage Savings",
        items: [
          "gp2 → gp3 — cheaper and IOPS no longer tied to volume size",
          "EBS Snapshots Archive — low-cost tier for rarely restored snapshots",
          "EFS lifecycle to Infrequent Access — same path, lower price for cold files",
          "S3 File Gateway — on-premises SMB/NFS shares backed by S3 instead of buying storage",
        ]
      },
      {
        title: "Compute Purchasing",
        items: [
          "On-Demand — short, unpredictable, can't be interrupted",
          "Spot — interruptible/checkpointed work, biggest discount; diversify instance types and AZs",
          "Compute Savings Plans — any family, Region, OS, plus Fargate and Lambda",
          "EC2 Instance Savings Plans / Reserved Instances — fixed family and Region, deeper discount",
          "Baseline on Savings Plans + peaks on On-Demand or Spot (mixed instances policy)",
          "Fargate Spot — interruptible container tasks",
          "Graviton (arm64) — better price-performance when the code is portable",
          "Compute Optimizer — rightsizing recommendations from real utilization",
          "Instance Scheduler — stop dev/test outside office hours",
        ]
      },
      {
        title: "Database Costs",
        items: [
          "Aurora Serverless v2 — intermittent or unpredictable load",
          "DynamoDB on-demand — spiky/new workloads; provisioned + auto scaling — steady, predictable traffic",
          "DynamoDB Standard-IA table class — storage-heavy, rarely read tables",
          "RDS Reserved Instances — steady 24/7 databases",
          "ElastiCache in front of repeated reads instead of scaling the DB up",
          "Stop dev databases when unused; Athena on S3 instead of an always-on warehouse for rare queries",
        ]
      },
      {
        title: "Network Costs",
        items: [
          "Data into AWS is free; data out to the internet and between Regions is charged",
          "Traffic between AZs is charged — keep chatty, rerunnable jobs in one AZ",
          "S3/DynamoDB gateway endpoints avoid NAT gateway data processing charges",
          "One NAT gateway per AZ = HA; a single shared NAT gateway = cheaper (dev)",
          "CloudFront — reduces origin data transfer out and improves speed",
          "VPC peering — cheapest for a few VPCs; Transit Gateway — charged per attachment and per GB, but scales",
          "Direct Connect — lower per-GB transfer out for large, steady volumes",
        ]
      },
      {
        title: "Cost Visibility",
        items: [
          "Cost allocation tags — activate them to break down costs per team/project",
          "AWS Budgets — alerts on actual or forecasted spend, can filter by tag",
          "Cost Explorer — analyze and forecast spend; Cost Anomaly Detection — ML alerts on unusual spikes",
          "Cost and Usage Report — most detailed billing data",
        ]
      },
    ],
    links: [
      { label: "Cost Optimization Pillar", url: "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html" },
      { label: "S3 Storage Classes", url: "https://aws.amazon.com/s3/storage-classes/" },
      { label: "Savings Plans", url: "https://aws.amazon.com/savingsplans/" },
    ]
  },
];
