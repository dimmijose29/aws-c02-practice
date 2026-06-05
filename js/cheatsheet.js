// ===== CHEAT SHEET DATA =====

const CHEATSHEET = [
  {
    domain: "Cloud Concepts",
    icon: "☁️",
    color: "#0073BB",
    sections: [
      {
        title: "6 Advantages of Cloud Computing",
        items: [
          "Trade fixed expense for variable expense",
          "Benefit from massive economies of scale",
          "Stop guessing capacity",
          "Increase speed and agility",
          "Stop spending money running data centers",
          "Go global in minutes",
        ]
      },
      {
        title: "Cloud Deployment Models",
        items: [
          "Public cloud — AWS manages infrastructure; shared with other tenants",
          "Private cloud — dedicated infrastructure on-premises or hosted",
          "Hybrid cloud — combination of on-premises + public cloud",
          "Community cloud — shared by organizations with common needs",
        ]
      },
      {
        title: "Service Models",
        items: [
          "IaaS — Infrastructure (EC2): customer manages OS and above",
          "PaaS — Platform (Elastic Beanstalk): customer manages app and data",
          "SaaS — Software (WorkMail): provider manages everything",
          "FaaS/Serverless — Function (Lambda): customer only writes code",
        ]
      },
      {
        title: "Well-Architected Framework — 6 Pillars",
        items: [
          "Operational Excellence — run, monitor, improve operations",
          "Security — protect data, systems, and assets",
          "Reliability — recover from failures, scale dynamically",
          "Performance Efficiency — use resources efficiently",
          "Cost Optimization — avoid unnecessary costs",
          "Sustainability — minimize environmental impact",
        ]
      },
      {
        title: "Key Design Principles",
        items: [
          "Design for failure — assume components will fail",
          "Decouple components — use SQS, SNS, API Gateway",
          "Implement elasticity — Auto Scaling, serverless",
          "Think parallel — scale horizontally, not vertically",
          "Immutable infrastructure — replace, don't repair",
        ]
      },
      {
        title: "Global Infrastructure",
        items: [
          "Regions — isolated geographic areas (30+)",
          "Availability Zones — 2+ isolated data centers per Region",
          "Edge Locations — CDN/DNS PoPs for CloudFront & Route 53 (400+)",
          "Local Zones — low-latency extensions of a Region in metro areas",
          "Outposts — AWS infrastructure in your own data center",
          "Wavelength — ultra-low latency at 5G carrier edge",
        ]
      },
    ],
    links: [
      { label: "Well-Architected Framework", url: "https://aws.amazon.com/architecture/well-architected/" },
      { label: "AWS Global Infrastructure", url: "https://aws.amazon.com/about-aws/global-infrastructure/" },
      { label: "CLF-C02 Exam Guide", url: "https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf" },
    ]
  },
  {
    domain: "Security & Compliance",
    icon: "🔒",
    color: "#1E8A44",
    sections: [
      {
        title: "Shared Responsibility Model",
        items: [
          "AWS responsibility (OF the cloud): physical hardware, data centers, hypervisor, network infrastructure",
          "Customer responsibility (IN the cloud): OS patching (EC2), IAM, data encryption, application security, network config",
          "Managed services (RDS, Lambda): AWS takes more responsibility (patching, runtime)",
        ]
      },
      {
        title: "IAM Best Practices",
        items: [
          "Never use root account for daily tasks — lock it away",
          "Enable MFA on root and all privileged users",
          "Create individual IAM users — never share credentials",
          "Grant least privilege — only permissions needed",
          "Use roles for EC2/Lambda — no access keys in code",
          "Rotate access keys regularly",
          "Use IAM Access Analyzer to detect unintended access",
        ]
      },
      {
        title: "Key Security Services",
        items: [
          "GuardDuty — threat detection (ML on CloudTrail, VPC Flow, DNS)",
          "Inspector — vulnerability scanning (EC2, ECR images)",
          "Macie — sensitive data discovery in S3 (PII, credentials)",
          "Security Hub — centralized security findings aggregator",
          "WAF — web application firewall (Layer 7, SQL injection, XSS)",
          "Shield Standard — free DDoS protection (Layer 3/4)",
          "Shield Advanced — paid DDoS + DRT + cost protection",
          "Firewall Manager — centralized WAF/Shield rules across org",
          "CloudTrail — API call logging (who/what/when/where)",
          "Config — resource configuration history + compliance rules",
        ]
      },
      {
        title: "Encryption & Secrets",
        items: [
          "KMS — managed encryption keys, integrates with all AWS services",
          "CloudHSM — dedicated single-tenant HSM (FIPS 140-2 Level 3)",
          "Secrets Manager — store + auto-rotate secrets (RDS passwords, API keys)",
          "ACM (Certificate Manager) — free SSL/TLS certificates for CloudFront/ELB",
          "Encryption in transit — TLS/SSL between clients and services",
          "Encryption at rest — SSE-S3, SSE-KMS, SSE-C for S3; EBS encryption",
        ]
      },
      {
        title: "Compliance & Governance",
        items: [
          "AWS Artifact — download compliance reports (SOC, PCI, ISO) and sign BAAs",
          "AWS Audit Manager — continuous audit evidence collection",
          "Organizations + SCPs — guardrails across all accounts",
          "Security Lake — centralized security data lake (OCSF format)",
          "VPC Flow Logs — capture IP traffic at ENI level",
          "Permissions Boundaries — max permissions ceiling for IAM entities",
        ]
      },
      {
        title: "Network Security",
        items: [
          "Security Groups — stateful, instance-level firewall (allow rules only)",
          "NACLs — stateless, subnet-level firewall (allow + deny rules)",
          "PrivateLink / VPC Endpoints — private access to AWS services (no internet)",
          "AWS Network Firewall — managed VPC-level firewall with IDS/IPS",
        ]
      },
    ],
    links: [
      { label: "Shared Responsibility Model", url: "https://aws.amazon.com/compliance/shared-responsibility-model/" },
      { label: "AWS Security Best Practices", url: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html" },
      { label: "AWS Compliance Programs", url: "https://aws.amazon.com/compliance/programs/" },
      { label: "AWS Artifact", url: "https://aws.amazon.com/artifact/" },
    ]
  },
  {
    domain: "Cloud Technology & Services",
    icon: "⚙️",
    color: "#FF9900",
    sections: [
      {
        title: "Compute",
        items: [
          "EC2 — virtual machines; On-Demand / Reserved / Spot / Savings Plans / Dedicated Hosts",
          "Lambda — serverless functions; event-driven; pay per ms",
          "Fargate — serverless containers (ECS/EKS); no EC2 to manage",
          "Elastic Beanstalk — PaaS; auto provisions EC2, ELB, Auto Scaling",
          "Lightsail — simple VPS for small apps",
          "Batch — managed batch computing jobs",
        ]
      },
      {
        title: "Storage",
        items: [
          "S3 — object storage; 11 nines durability; Standard / IA / Glacier / Intelligent-Tiering",
          "EBS — block storage for EC2; persists independently; one instance (except Multi-Attach)",
          "EFS — managed NFS; multi-AZ; many instances simultaneously",
          "FSx — managed Windows (NTFS) or Lustre (HPC) file systems",
          "Storage Gateway — hybrid bridge between on-premises and S3/EBS",
          "S3 Glacier Flexible — archival; minutes-to-hours retrieval",
          "S3 Glacier Deep Archive — lowest cost; 12h retrieval",
          "S3 Object Lock — WORM compliance (SEC 17a-4)",
        ]
      },
      {
        title: "Databases",
        items: [
          "RDS — managed relational DB (MySQL, PostgreSQL, Oracle, SQL Server, MariaDB, Aurora)",
          "Aurora — AWS-native; 5x faster MySQL, 3x PostgreSQL; auto-scales storage",
          "DynamoDB — serverless NoSQL; single-digit ms at any scale; DAX for caching",
          "ElastiCache — in-memory cache; Redis or Memcached",
          "Redshift — columnar data warehouse; OLAP; petabyte-scale",
          "DocumentDB — MongoDB-compatible managed document DB",
          "Neptune — graph database (Gremlin / SPARQL)",
          "QLDB — immutable ledger database; cryptographically verifiable",
          "Keyspaces — serverless Apache Cassandra-compatible",
        ]
      },
      {
        title: "Networking",
        items: [
          "VPC — isolated virtual network; subnets, route tables, IGW, NAT GW",
          "Route 53 — DNS + domain registration + health checks",
          "CloudFront — CDN; caches at 400+ edge locations",
          "Global Accelerator — routes via AWS backbone; 2 static Anycast IPs",
          "Direct Connect — dedicated private fiber to AWS (1/10/100 Gbps)",
          "VPN — encrypted tunnel over internet to VPC",
          "Transit Gateway — hub-and-spoke to connect many VPCs + on-premises",
          "PrivateLink — private connectivity to services without internet",
          "ELB — load balancer; ALB (L7), NLB (L4), GWLB (appliances)",
        ]
      },
      {
        title: "Integration & Messaging",
        items: [
          "SQS — message queue; decouples producers/consumers; Standard or FIFO",
          "SNS — pub/sub; fans out to Lambda, SQS, email, SMS, HTTP",
          "EventBridge — serverless event bus; rules-based routing",
          "Step Functions — serverless workflow orchestration (state machines)",
          "Kinesis — real-time streaming (Data Streams, Firehose, Analytics)",
          "MSK — managed Apache Kafka",
          "API Gateway — managed REST/HTTP/WebSocket API; integrates with Lambda",
          "MQ — managed ActiveMQ / RabbitMQ broker",
        ]
      },
      {
        title: "AI / ML Services",
        items: [
          "SageMaker — full ML platform (build, train, deploy)",
          "Rekognition — image/video analysis (faces, objects, moderation)",
          "Transcribe — speech-to-text (ASR)",
          "Polly — text-to-speech",
          "Translate — neural machine translation",
          "Comprehend — NLP (sentiment, entities, key phrases)",
          "Lex — conversational chatbot (Alexa technology)",
          "Kendra — ML-powered enterprise search",
          "Textract — extract text/data from documents",
          "Forecast — time-series forecasting",
        ]
      },
      {
        title: "Developer & DevOps Tools",
        items: [
          "CloudFormation — IaC via JSON/YAML templates",
          "CDK — IaC via Python/TypeScript/Java/etc.",
          "CodeCommit — managed private Git repos",
          "CodeBuild — managed CI build service",
          "CodeDeploy — automated deployment to EC2/Lambda/ECS",
          "CodePipeline — full CI/CD pipeline orchestration",
          "CloudWatch — metrics, logs, alarms, dashboards",
          "Systems Manager — patch, config, run commands on fleets",
          "X-Ray — distributed tracing for microservices",
          "Compute Optimizer — right-sizing recommendations (ML)",
        ]
      },
    ],
    links: [
      { label: "AWS Products Overview", url: "https://aws.amazon.com/products/" },
      { label: "AWS Architecture Center", url: "https://aws.amazon.com/architecture/" },
      { label: "AWS Whitepapers", url: "https://aws.amazon.com/whitepapers/" },
    ]
  },
  {
    domain: "Billing, Pricing & Support",
    icon: "💰",
    color: "#8B5CF6",
    sections: [
      {
        title: "AWS Pricing Principles",
        items: [
          "Pay-as-you-go — no upfront, no minimum commitment, per-second billing",
          "Pay less when you reserve — RIs and Savings Plans: up to 72% off On-Demand",
          "Pay less with more usage — tiered pricing (S3, data transfer)",
          "Free Tier — 12-month free (EC2 t2.micro 750h, S3 5GB, RDS 750h) + always free (Lambda 1M req/mo)",
        ]
      },
      {
        title: "EC2 Purchasing Options",
        items: [
          "On-Demand — no commitment; most expensive; per second",
          "Reserved Instances — 1 or 3 year; up to 72% off; Standard or Convertible",
          "Savings Plans — commit to $/hr; applies to EC2+Lambda+Fargate; most flexible",
          "Spot Instances — up to 90% off; can be interrupted with 2-min warning",
          "Dedicated Hosts — physical server; per-socket licensing; most expensive",
          "Dedicated Instances — dedicated hardware but no host-level visibility",
        ]
      },
      {
        title: "Cost Management Tools",
        items: [
          "Cost Explorer — visualize spending trends; 13 months history; forecasting",
          "AWS Budgets — alerts when cost/usage exceeds threshold; automated actions",
          "Cost & Usage Report (CUR) — most granular data; line items per resource; S3",
          "Pricing Calculator — estimate cost of new architecture before deploying",
          "Migration Evaluator — TCO analysis for on-premises vs AWS migration",
          "Compute Optimizer — right-sizing to reduce waste",
          "Resource Tags — key-value labels for cost allocation and filtering",
          "Consolidated Billing — single payer across org; share RI/Savings Plans discounts",
        ]
      },
      {
        title: "Support Plans",
        items: [
          "Basic (free) — docs, re:Post, 6 Trusted Advisor checks, Health Dashboard",
          "Developer ($29/mo) — email support, business hours, 1 contact, general guidance",
          "Business ($100/mo) — 24/7 phone/chat/email, all Trusted Advisor checks, <1h critical",
          "Enterprise On-Ramp — pool of TAMs, <30min critical response",
          "Enterprise ($15k/mo) — dedicated TAM, <15min critical, Concierge, Infrastructure Event Mgmt",
        ]
      },
      {
        title: "AWS Support Resources",
        items: [
          "Trusted Advisor — 5 categories: Cost, Performance, Security, Fault Tolerance, Service Limits",
          "re:Post — community Q&A forum (successor to Developer Forums)",
          "AWS IQ — hire certified AWS experts for hands-on project work",
          "AWS Professional Services — direct AWS consulting engagement",
          "AWS Partner Network (APN) — consulting and technology partners",
          "AWS Marketplace — third-party software catalog; billed via AWS account",
          "Personal Health Dashboard — alerts specific to your account resources",
          "Service Health Dashboard — global AWS service status",
        ]
      },
    ],
    links: [
      { label: "AWS Pricing Overview", url: "https://aws.amazon.com/pricing/" },
      { label: "AWS Free Tier", url: "https://aws.amazon.com/free/" },
      { label: "AWS Support Plans", url: "https://aws.amazon.com/premiumsupport/plans/" },
      { label: "AWS Total Cost of Ownership", url: "https://aws.amazon.com/tco-calculator/" },
    ]
  },
];

// ===== CHEAT SHEET RENDERING =====

let activeDomain = 0;

function renderCheatsheet() {
  const tabs    = document.getElementById('cs-tabs');
  const content = document.getElementById('cs-content');
  if (!tabs || !content) return;

  // Build tabs
  tabs.innerHTML = CHEATSHEET.map((d, i) => `
    <button class="cs-tab ${i === activeDomain ? 'cs-tab-active' : ''}"
            data-idx="${i}" style="${i === activeDomain ? `border-bottom-color:${d.color};color:${d.color}` : ''}">
      <span class="cs-tab-icon">${d.icon}</span>
      <span class="cs-tab-label">${d.domain}</span>
    </button>
  `).join('');

  tabs.querySelectorAll('.cs-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeDomain = Number(btn.dataset.idx);
      renderCheatsheet();
    });
  });

  // Build content
  const d = CHEATSHEET[activeDomain];
  const sectionsHtml = d.sections.map(s => `
    <div class="cs-section">
      <h3 class="cs-section-title">${s.title}</h3>
      <ul class="cs-list">
        ${s.items.map(item => `<li class="cs-item">${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const linksHtml = d.links.map(l => `
    <a class="cs-link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>
  `).join('');

  content.innerHTML = `
    <div class="cs-domain-header" style="border-left:4px solid ${d.color}">
      <span class="cs-domain-icon">${d.icon}</span>
      <h2 class="cs-domain-title">${d.domain}</h2>
    </div>
    <div class="cs-sections">${sectionsHtml}</div>
    <div class="cs-links-section">
      <h3 class="cs-links-title">Official Resources</h3>
      <div class="cs-links">${linksHtml}</div>
    </div>
  `;
}
