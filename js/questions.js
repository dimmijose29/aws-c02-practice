// AWS Cloud Practitioner CLF-C02 — Question Bank (200 questions)
// Domains: Cloud Concepts (24%) | Security & Compliance (30%) | Cloud Technology & Services (34%) | Billing, Pricing & Support (12%)

const QUESTION_BANK = [

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 1: Cloud Concepts  (~20 questions)
  // ────────────────────────────────────────────────────────────────
  {
    id: 1,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company is considering moving its on-premises data center workloads to the AWS Cloud. The company wants to avoid the cost of purchasing and maintaining physical servers. Which benefit of cloud computing does this BEST represent?",
    options: [
      "Trade fixed expense for variable expense",
      "Increase speed and agility",
      "Go global in minutes",
      "Stop spending money running and maintaining data centers"
    ],
    correct: [3],
    explanation: "One of the six advantages of cloud computing is 'Stop spending money running and maintaining data centers.' By moving to AWS, companies eliminate the operational burden of physical infrastructure. 'Trade fixed for variable expense' is also a valid cloud benefit, but it focuses on the cost model rather than the elimination of maintenance burden."
  },
  {
    id: 2,
    domain: "Cloud Concepts",
    type: "single",
    question: "A startup company needs to launch a new application quickly. The company is uncertain about future demand and does not want to over-provision infrastructure. Which cloud computing benefit BEST addresses this concern?",
    options: [
      "High availability",
      "Stop guessing capacity",
      "Economies of scale",
      "Trade capital expense for operational expense"
    ],
    correct: [1],
    explanation: "'Stop guessing capacity' is a core cloud benefit — you can scale up or down based on actual demand, eliminating the risk of over-provisioning (wasted spend) or under-provisioning (poor performance). Auto Scaling and on-demand resources embody this advantage."
  },
  {
    id: 3,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to deploy its application to multiple countries to serve customers with low latency. Previously, setting up infrastructure in a new country took months. Which benefit of AWS Cloud does this scenario highlight?",
    options: [
      "Economies of scale",
      "Elasticity",
      "Go global in minutes",
      "Fault tolerance"
    ],
    correct: [2],
    explanation: "AWS has infrastructure in Regions around the world. Deploying to a new Region requires only a few clicks and can be accomplished in minutes, compared to months for on-premises global expansion. This is the 'Go global in minutes' advantage of cloud computing."
  },
  {
    id: 4,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which deployment model describes an environment that combines on-premises infrastructure with AWS Cloud resources, allowing data and applications to be shared between them?",
    options: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Multi-cloud"
    ],
    correct: [2],
    explanation: "A hybrid deployment model connects on-premises (private) infrastructure with cloud (public) resources. It is often used by companies that cannot fully move to the cloud due to compliance, latency, or legacy requirements, but want to leverage cloud capabilities for some workloads."
  },
  {
    id: 5,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud service model gives customers the MOST control over the underlying compute, storage, and networking resources?",
    options: [
      "Software as a Service (SaaS)",
      "Platform as a Service (PaaS)",
      "Infrastructure as a Service (IaaS)",
      "Function as a Service (FaaS)"
    ],
    correct: [2],
    explanation: "IaaS provides the highest level of flexibility and management control over IT resources. Customers manage the OS, middleware, runtime, data, and applications. AWS EC2 is a prime example. PaaS removes the need to manage the underlying infrastructure, and SaaS provides a complete, managed application."
  },
  {
    id: 6,
    domain: "Cloud Concepts",
    type: "single",
    question: "A developer wants to build and deploy a web application without managing the underlying server infrastructure, operating system, or runtime. Which cloud service model BEST fits this requirement?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Bare metal hosting"
    ],
    correct: [1],
    explanation: "PaaS provides a platform for developers to build, run, and manage applications without the complexity of maintaining the underlying infrastructure. AWS Elastic Beanstalk is an example — developers deploy their code and AWS handles the infrastructure."
  },
  {
    id: 7,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS global infrastructure component is used to cache content closer to end users to reduce latency?",
    options: [
      "AWS Region",
      "Availability Zone",
      "Edge Location",
      "Local Zone"
    ],
    correct: [2],
    explanation: "Edge Locations are AWS data center endpoints used by services like Amazon CloudFront (CDN) and Amazon Route 53. They cache frequently accessed content at locations geographically close to users, reducing latency. There are many more edge locations than AWS Regions globally."
  },
  {
    id: 8,
    domain: "Cloud Concepts",
    type: "single",
    question: "An e-commerce company needs its application to remain available even if an entire data center experiences a power outage. What AWS infrastructure concept enables this resilience?",
    options: [
      "AWS Regions",
      "Availability Zones",
      "Edge Locations",
      "AWS Local Zones"
    ],
    correct: [1],
    explanation: "Each AWS Region consists of multiple Availability Zones (AZs). AZs are physically separate data centers within a Region, with independent power, cooling, and networking. Deploying across multiple AZs ensures that a failure in one AZ does not take down the entire application."
  },
  {
    id: 9,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Well-Architected Framework pillar focuses on the ability of a system to recover from failures and dynamically acquire resources to meet demand?",
    options: [
      "Security",
      "Performance Efficiency",
      "Reliability",
      "Operational Excellence"
    ],
    correct: [2],
    explanation: "The Reliability pillar of the AWS Well-Architected Framework focuses on the ability to recover from infrastructure or service disruptions, dynamically acquiring resources to meet demand, and mitigating disruptions such as misconfigurations or transient network issues."
  },
  {
    id: 10,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to design its cloud architecture so that workloads automatically adjust capacity to maintain steady, predictable performance at the lowest possible cost. Which cloud concept does this BEST describe?",
    options: [
      "High Availability",
      "Fault Tolerance",
      "Elasticity",
      "Durability"
    ],
    correct: [2],
    explanation: "Elasticity is the ability to automatically scale resources up or down to match actual demand. This prevents over-provisioning (cost waste) and under-provisioning (performance degradation). AWS Auto Scaling is the core service that provides elasticity."
  },
  {
    id: 11,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Well-Architected Framework pillar includes the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures?",
    options: [
      "Reliability",
      "Operational Excellence",
      "Performance Efficiency",
      "Cost Optimization"
    ],
    correct: [1],
    explanation: "Operational Excellence focuses on running and monitoring systems to deliver business value, and continually improving processes and procedures. It includes organizing teams, implementing DevOps practices, automating changes, and responding to events."
  },
  {
    id: 12,
    domain: "Cloud Concepts",
    type: "single",
    question: "Due to AWS's massive scale, customers can benefit from lower pay-as-you-go pricing than they could achieve on their own. What cloud computing benefit does this represent?",
    options: [
      "Increase speed and agility",
      "Stop guessing capacity",
      "Benefit from massive economies of scale",
      "Go global in minutes"
    ],
    correct: [2],
    explanation: "Because usage from hundreds of thousands of customers is aggregated in the cloud, AWS can achieve higher economies of scale, translating into lower pay-as-you-go prices. Individual companies could not achieve these cost efficiencies on their own."
  },
  {
    id: 13,
    domain: "Cloud Concepts",
    type: "single",
    question: "A system that is designed to continue operating even when one or more components fail is BEST described as which of the following?",
    options: [
      "Highly available",
      "Fault tolerant",
      "Elastic",
      "Scalable"
    ],
    correct: [1],
    explanation: "Fault tolerance means a system can continue operating correctly even when some of its components fail. High availability means a system is accessible with minimal downtime, but it may experience brief interruptions. Fault tolerance implies no interruption at all during a component failure."
  },
  {
    id: 14,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Well-Architected Framework pillar recommends using managed services to reduce the operational burden on infrastructure?",
    options: [
      "Cost Optimization",
      "Reliability",
      "Performance Efficiency",
      "Operational Excellence"
    ],
    correct: [2],
    explanation: "The Performance Efficiency pillar includes using serverless architectures and managed services to remove the operational burden of managing infrastructure, allowing teams to focus on delivering business value. It also covers selecting the right resource types for workloads."
  },
  {
    id: 15,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which type of cloud deployment model runs entirely on AWS, with no on-premises infrastructure involved?",
    options: [
      "Hybrid",
      "Private",
      "Cloud-native (Public cloud)",
      "Multi-cloud"
    ],
    correct: [2],
    explanation: "A cloud-native (or fully cloud / public cloud) deployment means all components of the application are run in the cloud. There is no legacy on-premises infrastructure. New applications built directly on AWS and migrated applications fully moved to AWS fall into this model."
  },
  {
    id: 16,
    domain: "Cloud Concepts",
    type: "single",
    question: "An AWS Region is composed of which infrastructure building blocks?",
    options: [
      "Multiple Edge Locations connected by a private network",
      "Two or more Availability Zones that are isolated but connected with low-latency links",
      "A single large data center with redundant power and networking",
      "Multiple Local Zones spread across a metropolitan area"
    ],
    correct: [1],
    explanation: "An AWS Region consists of two or more physically separate Availability Zones. Each AZ is one or more discrete data centers with redundant power and networking. The AZs within a Region are connected by high-bandwidth, low-latency networking to allow synchronous replication."
  },
  {
    id: 17,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Well-Architected Framework pillar focuses on avoiding unnecessary costs and using the right resource types and sizes based on actual demand?",
    options: [
      "Reliability",
      "Cost Optimization",
      "Sustainability",
      "Operational Excellence"
    ],
    correct: [1],
    explanation: "The Cost Optimization pillar focuses on running systems at the lowest price point. Key topics include understanding spending, selecting cost-effective resources, scaling to meet demand, and optimizing over time — for example, using Reserved Instances or right-sizing EC2 instances."
  },
  {
    id: 18,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud concept refers to the ability to rapidly deploy new applications and bring them to market faster, reducing the time from idea to production from weeks or months to minutes?",
    options: [
      "Scalability",
      "Agility",
      "Fault Tolerance",
      "Elasticity"
    ],
    correct: [1],
    explanation: "Agility in the cloud means that a broad set of technologies are available on demand — you can spin up resources and experiment in minutes rather than weeks. This accelerates innovation because the cost of experimentation is low and time-to-market is dramatically reduced."
  },
  {
    id: 19,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following is an advantage of using cloud computing over traditional on-premises data centers? (Select the BEST answer)",
    options: [
      "Cloud computing eliminates all security responsibilities for the customer",
      "Cloud computing requires large upfront capital investment",
      "Cloud computing allows you to trade capital expense for variable expense",
      "Cloud computing guarantees 100% uptime for all services"
    ],
    correct: [2],
    explanation: "Trading capital expense (CapEx) for variable expense (OpEx) is a fundamental advantage of cloud computing. Instead of investing heavily in data centers and servers before knowing how they will be used, you pay only for the compute you consume."
  },
  {
    id: 20,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS service provides a consistent, low-latency connection between a company's on-premises data center and AWS, bypassing the public internet?",
    options: [
      "AWS VPN",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Transit Gateway"
    ],
    correct: [1],
    explanation: "AWS Direct Connect establishes a dedicated private network connection between the customer's data center and AWS. It provides more consistent network performance, lower latency, and potentially higher bandwidth compared to internet-based connections. It is commonly used in hybrid architectures."
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 2: Security and Compliance  (~25 questions)
  // ────────────────────────────────────────────────────────────────
  {
    id: 21,
    domain: "Security & Compliance",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, which of the following is the responsibility of AWS?",
    options: [
      "Configuring security groups and network ACLs",
      "Managing customer data and encryption keys",
      "Patching the hypervisor and physical host hardware",
      "Setting IAM user permissions and policies"
    ],
    correct: [2],
    explanation: "AWS is responsible for 'security OF the cloud' — the physical infrastructure, hardware, networking, and the hypervisor. Customers are responsible for 'security IN the cloud' — configuring security groups, managing IAM users, encrypting data, and patching guest operating systems."
  },
  {
    id: 22,
    domain: "Security & Compliance",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, which of the following is ALWAYS the customer's responsibility?",
    options: [
      "Patching the underlying host operating system for Amazon RDS",
      "Managing customer data and controlling access to it",
      "Physical security of data centers",
      "Maintaining network infrastructure and hardware"
    ],
    correct: [1],
    explanation: "Customers are always responsible for their data — including who has access to it, how it is classified, and how it is encrypted. Even with fully managed services like RDS or S3, the customer owns and is responsible for their data and access controls."
  },
  {
    id: 23,
    domain: "Security & Compliance",
    type: "single",
    question: "A company's security team requires that AWS API calls made in the AWS account be logged for auditing purposes. Which AWS service should they use?",
    options: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correct: [2],
    explanation: "AWS CloudTrail records API calls made in your AWS account, including the caller identity, time, source IP, request parameters, and response. It is the primary tool for governance, compliance, operational auditing, and risk auditing of your AWS account."
  },
  {
    id: 24,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS security best practice recommends that each user or application receives only the permissions necessary to perform their specific job function?",
    options: [
      "Defense in depth",
      "Principle of least privilege",
      "Separation of duties",
      "Zero trust networking"
    ],
    correct: [1],
    explanation: "The principle of least privilege means granting only the minimum permissions required to perform a task. In AWS, this is implemented through IAM policies. Over-permissive policies increase the blast radius if credentials are compromised."
  },
  {
    id: 25,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to provide temporary AWS access to a third-party auditing firm without creating long-term IAM user credentials. Which IAM feature should they use?",
    options: [
      "IAM Groups",
      "IAM Roles",
      "IAM Users with password rotation",
      "Service Control Policies (SCPs)"
    ],
    correct: [1],
    explanation: "IAM Roles provide temporary credentials via AWS STS (Security Token Service) and can be assumed by external accounts or services. They are the recommended way to grant cross-account access without sharing long-term credentials like access keys or passwords."
  },
  {
    id: 26,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service continuously monitors AWS accounts for malicious activity and unauthorized behavior using machine learning and threat intelligence?",
    options: [
      "AWS Shield",
      "Amazon Inspector",
      "Amazon GuardDuty",
      "AWS WAF"
    ],
    correct: [2],
    explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior. It analyzes CloudTrail logs, VPC Flow Logs, and DNS logs using machine learning and threat intelligence feeds to identify threats like crypto-mining, credential compromise, or reconnaissance."
  },
  {
    id: 27,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to protect its web application from common web exploits such as SQL injection and cross-site scripting (XSS). Which AWS service should they use?",
    options: [
      "AWS Shield Standard",
      "AWS Web Application Firewall (WAF)",
      "Amazon GuardDuty",
      "AWS Firewall Manager"
    ],
    correct: [1],
    explanation: "AWS WAF is a web application firewall that lets you create rules to block common web exploits like SQL injection, XSS, and other OWASP Top 10 threats. It can be attached to Amazon CloudFront, Application Load Balancer, or API Gateway."
  },
  {
    id: 28,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service automatically provides protection against DDoS attacks for all AWS customers at no additional cost?",
    options: [
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Shield Standard",
      "AWS Shield Advanced"
    ],
    correct: [2],
    explanation: "AWS Shield Standard is automatically enabled for all AWS customers at no extra charge. It provides protection against the most common, frequently occurring network and transport layer DDoS attacks targeting websites and applications. Shield Advanced is a paid upgrade with additional protections and 24/7 DDoS response team access."
  },
  {
    id: 29,
    domain: "Security & Compliance",
    type: "single",
    question: "A security engineer needs to perform automated security assessments of EC2 instances to identify software vulnerabilities and unintended network exposure. Which AWS service should they use?",
    options: [
      "Amazon Macie",
      "Amazon Inspector",
      "AWS Security Hub",
      "Amazon Detective"
    ],
    correct: [1],
    explanation: "Amazon Inspector is an automated security assessment service that checks EC2 instances and container images for software vulnerabilities (CVEs) and unintended network exposure. It integrates with AWS Systems Manager and automatically discovers and scans workloads."
  },
  {
    id: 30,
    domain: "Security & Compliance",
    type: "single",
    question: "A company stores sensitive customer data in Amazon S3 and wants to automatically discover and classify personally identifiable information (PII). Which AWS service provides this capability?",
    options: [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Secrets Manager"
    ],
    correct: [2],
    explanation: "Amazon Macie is a data security service that uses machine learning to automatically discover, classify, and protect sensitive data in S3. It identifies PII such as names, credit card numbers, and health information, and provides dashboards and alerts for data security risks."
  },
  {
    id: 31,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service is used to centrally manage and store encryption keys used to protect data across AWS services?",
    options: [
      "AWS Certificate Manager (ACM)",
      "AWS Secrets Manager",
      "AWS Key Management Service (KMS)",
      "AWS CloudHSM"
    ],
    correct: [2],
    explanation: "AWS KMS is a managed service that makes it easy to create and control the cryptographic keys used to encrypt data. It integrates with most AWS services (S3, EBS, RDS, etc.) to provide server-side encryption and helps meet compliance requirements."
  },
  {
    id: 32,
    domain: "Security & Compliance",
    type: "single",
    question: "A developer needs to store and automatically rotate database passwords and API keys used by applications. Which AWS service is BEST suited for this task?",
    options: [
      "AWS Key Management Service (KMS)",
      "AWS Systems Manager Parameter Store",
      "AWS Secrets Manager",
      "AWS Identity and Access Management (IAM)"
    ],
    correct: [2],
    explanation: "AWS Secrets Manager is specifically designed to store, manage, and automatically rotate secrets like database credentials, API keys, and OAuth tokens. It natively integrates with RDS, Redshift, and DocumentDB for automatic rotation without any code changes."
  },
  {
    id: 33,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS feature or service provides a comprehensive view of security alerts and compliance status across an AWS account, aggregating findings from services like GuardDuty, Inspector, and Macie?",
    options: [
      "AWS Config",
      "AWS Security Hub",
      "Amazon Detective",
      "AWS Trusted Advisor"
    ],
    correct: [1],
    explanation: "AWS Security Hub provides a central dashboard that aggregates, organizes, and prioritizes security findings from multiple AWS services (GuardDuty, Inspector, Macie, etc.) and partner products. It runs continuous compliance checks against security standards like CIS AWS Foundations."
  },
  {
    id: 34,
    domain: "Security & Compliance",
    type: "single",
    question: "What is the recommended best practice for the AWS account root user?",
    options: [
      "Use the root user for daily administrative tasks to ensure full access",
      "Share the root user credentials with trusted team members",
      "Enable multi-factor authentication (MFA) and avoid using it for routine tasks",
      "Create an IAM policy that restricts root user permissions"
    ],
    correct: [2],
    explanation: "AWS strongly recommends enabling MFA on the root account and not using it for routine tasks. Instead, create IAM users with appropriate permissions for day-to-day work. The root account should only be used for tasks that specifically require root-level access, such as changing the account's email address or billing plan."
  },
  {
    id: 35,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service allows customers to download AWS compliance reports such as SOC reports, PCI DSS attestations, and ISO certifications?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Artifact",
      "AWS Security Hub"
    ],
    correct: [2],
    explanation: "AWS Artifact is a self-service portal that provides on-demand access to AWS compliance documentation, including audit reports (SOC 1, SOC 2, SOC 3), PCI DSS attestations, ISO certifications, and compliance agreements. It allows customers to review and download these documents for their own audit needs."
  },
  {
    id: 36,
    domain: "Security & Compliance",
    type: "single",
    question: "A company needs to ensure that its AWS resources always comply with internal security policies. For example, all S3 buckets must have server-side encryption enabled. Which AWS service continuously evaluates resource configurations against desired rules?",
    options: [
      "AWS CloudTrail",
      "Amazon Inspector",
      "AWS Config",
      "AWS Systems Manager"
    ],
    correct: [2],
    explanation: "AWS Config continuously monitors and records AWS resource configurations and evaluates them against desired rules. If a resource drifts from the desired configuration (e.g., S3 bucket encryption disabled), Config can flag it and optionally trigger remediation via AWS Systems Manager Automation."
  },
  {
    id: 37,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following security controls operates at the subnet level in a VPC and acts as a stateless firewall?",
    options: [
      "Security Groups",
      "Network Access Control Lists (NACLs)",
      "AWS WAF",
      "AWS Shield"
    ],
    correct: [1],
    explanation: "Network ACLs (NACLs) operate at the subnet level in a VPC and are stateless — meaning both inbound and outbound rules must explicitly allow traffic. Security Groups are stateful (return traffic is automatically allowed) and operate at the instance level."
  },
  {
    id: 38,
    domain: "Security & Compliance",
    type: "multiple",
    question: "Which TWO of the following are responsibilities of the customer under the AWS Shared Responsibility Model?",
    options: [
      "Maintaining the physical security of AWS data centers",
      "Patching the operating system on EC2 instances",
      "Managing network hardware and fiber cabling",
      "Configuring IAM users and access policies",
      "Replacing failed hard drives in AWS storage systems"
    ],
    correct: [1, 3],
    explanation: "Customers are responsible for security IN the cloud: this includes patching the guest OS on EC2 instances and managing IAM configurations (users, groups, roles, and policies). AWS is responsible for the physical infrastructure, network hardware, and the underlying hypervisor."
  },
  {
    id: 39,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to add an extra layer of security requiring users to present a physical or virtual device when signing into the AWS Management Console. Which feature should they enable?",
    options: [
      "IAM Password Policy",
      "Multi-Factor Authentication (MFA)",
      "AWS Single Sign-On",
      "Federated identity"
    ],
    correct: [1],
    explanation: "Multi-Factor Authentication (MFA) requires a second form of verification in addition to a password. AWS supports virtual MFA apps (like Authenticator apps), hardware TOTP tokens, and FIDO2 security keys. MFA should be enabled on all IAM users, especially the root account."
  },
  {
    id: 40,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service allows an organization to use their existing corporate Active Directory credentials to sign in to the AWS Management Console and CLI?",
    options: [
      "Amazon Cognito",
      "AWS IAM Identity Center (formerly AWS SSO)",
      "AWS Directory Service",
      "AWS Organizations"
    ],
    correct: [1],
    explanation: "AWS IAM Identity Center (formerly AWS Single Sign-On) enables centralized management of SSO access to multiple AWS accounts and business applications. It integrates with external identity providers like Microsoft Active Directory, allowing employees to use corporate credentials to access AWS."
  },
  {
    id: 41,
    domain: "Security & Compliance",
    type: "single",
    question: "Which statement about AWS compliance is CORRECT?",
    options: [
      "AWS is compliant with all standards, so customers do not need to worry about compliance",
      "AWS maintains compliance certifications, and customers inherit some controls but remain responsible for others",
      "Customers are solely responsible for all compliance and AWS has no compliance certifications",
      "Compliance is only relevant for regulated industries and does not apply to most AWS customers"
    ],
    correct: [1],
    explanation: "AWS maintains numerous compliance certifications (PCI DSS, HIPAA, SOC, ISO, etc.) and the compliance responsibility is shared. AWS controls the physical and infrastructure layer, but customers must ensure their applications and configurations comply with relevant standards. Compliance is a shared responsibility."
  },
  {
    id: 42,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service uses SSL/TLS certificates to enable HTTPS for web applications and can automatically renew these certificates at no additional cost?",
    options: [
      "AWS Key Management Service (KMS)",
      "AWS Certificate Manager (ACM)",
      "AWS Secrets Manager",
      "AWS CloudHSM"
    ],
    correct: [1],
    explanation: "AWS Certificate Manager (ACM) handles the complexity of creating, storing, and renewing public and private SSL/TLS certificates. It integrates with Elastic Load Balancing, CloudFront, and API Gateway, and public certificates from ACM are free of charge."
  },
  {
    id: 43,
    domain: "Security & Compliance",
    type: "single",
    question: "An AWS account administrator wants to ensure that users in the Development group cannot launch EC2 instances larger than t3.medium. How can this be enforced?",
    options: [
      "Create a Service Control Policy (SCP) in AWS Organizations",
      "Attach an IAM policy to the Development group that allows EC2 actions only for t3.medium and smaller",
      "Enable AWS Config rules to detect non-compliant instance types",
      "Use AWS Trusted Advisor to block large instance launches"
    ],
    correct: [1],
    explanation: "An IAM policy with conditions can restrict the EC2 instance types a user or group can launch. You can use the aws:RequestedRegion and ec2:InstanceType condition keys to limit which instance types are allowed. IAM policies enforce permissions at the identity level."
  },
  {
    id: 44,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS security concept describes the practice of dividing a VPC into separate sections so that a security breach in one section cannot easily spread to others?",
    options: [
      "Defense in depth",
      "Network segmentation using subnets",
      "Principle of least privilege",
      "Zero-knowledge security"
    ],
    correct: [1],
    explanation: "Network segmentation using subnets (public and private subnets) is a core VPC security design pattern. By isolating resources — for example, placing databases in private subnets with no internet access — you limit the blast radius of a potential breach and prevent lateral movement."
  },
  {
    id: 45,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service is a distributed denial-of-service (DDoS) protection service that provides 24/7 access to the AWS DDoS Response Team (DRT) and financial protections against DDoS-related scaling charges?",
    options: [
      "AWS Shield Standard",
      "AWS WAF",
      "AWS Shield Advanced",
      "Amazon GuardDuty"
    ],
    correct: [2],
    explanation: "AWS Shield Advanced is a premium managed DDoS protection service. It offers advanced attack visibility, 24/7 access to the AWS DDoS Response Team (DRT), and cost protection that reimburses scaling charges that result from DDoS attacks. It is available for an additional cost."
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 3: Cloud Technology and Services  (~29 questions)
  // ────────────────────────────────────────────────────────────────
  {
    id: 46,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company runs a batch processing job that requires significant compute power for 2 hours every night. The job can be interrupted and restarted without data loss. Which EC2 pricing option provides the LOWEST cost for this use case?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    correct: [2],
    explanation: "Spot Instances use spare EC2 capacity and can be up to 90% cheaper than On-Demand. They are ideal for fault-tolerant, flexible workloads like batch jobs, data analysis, and rendering, which can tolerate interruptions. If the Spot price exceeds the bid or capacity is needed, the instance can be interrupted."
  },
  {
    id: 47,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A developer wants to run backend code that executes in response to events (such as an API call or file upload to S3) without provisioning or managing any servers. Which AWS service should they use?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon ECS",
      "AWS Elastic Beanstalk"
    ],
    correct: [1],
    explanation: "AWS Lambda is a serverless compute service that runs code in response to events without requiring you to provision or manage servers. You pay only for the compute time consumed. Lambda is ideal for event-driven architectures, API backends, and automation tasks."
  },
  {
    id: 48,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service automatically adjusts the number of EC2 instances in a fleet to meet changing application demand?",
    options: [
      "Elastic Load Balancing",
      "AWS Auto Scaling",
      "Amazon CloudWatch",
      "Amazon EC2 Fleet"
    ],
    correct: [1],
    explanation: "AWS Auto Scaling (and specifically EC2 Auto Scaling) monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. It can scale in or out based on CloudWatch metrics, schedules, or predictive scaling."
  },
  {
    id: 49,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to deploy a Docker-based microservices application on AWS without managing the underlying server infrastructure. Which service provides fully managed container orchestration?",
    options: [
      "Amazon EC2 with Docker installed",
      "AWS Fargate",
      "Amazon Lightsail",
      "AWS Elastic Beanstalk"
    ],
    correct: [1],
    explanation: "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. With Fargate, you define your containers and do not need to provision, configure, or scale EC2 instances. AWS manages the underlying infrastructure."
  },
  {
    id: 50,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows developers to deploy and run web applications without worrying about provisioning servers, load balancers, or auto-scaling groups, while still maintaining full control over the underlying AWS resources?",
    options: [
      "Amazon Lightsail",
      "AWS Lambda",
      "AWS Elastic Beanstalk",
      "Amazon ECS"
    ],
    correct: [2],
    explanation: "AWS Elastic Beanstalk is a PaaS service that handles deployment, capacity provisioning, load balancing, auto-scaling, and health monitoring. Developers simply upload code and Elastic Beanstalk deploys it. However, you retain access to the underlying AWS resources like EC2 instances and can configure them directly."
  },
  {
    id: 51,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon S3 storage class is MOST cost-effective for storing data that is accessed infrequently but needs to be retrieved immediately when needed?",
    options: [
      "S3 Standard",
      "S3 Standard-Infrequent Access (S3 Standard-IA)",
      "S3 Glacier Instant Retrieval",
      "S3 One Zone-Infrequent Access"
    ],
    correct: [1],
    explanation: "S3 Standard-IA is designed for data that is accessed less frequently but requires rapid access when needed. It offers a lower storage price than S3 Standard but charges a per-GB retrieval fee. It is suitable for backups, disaster recovery files, and long-term storage."
  },
  {
    id: 52,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to store archived data that is rarely accessed and can tolerate retrieval times of several hours. Which S3 storage class is MOST appropriate?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Flexible Retrieval",
      "S3 Intelligent-Tiering"
    ],
    correct: [2],
    explanation: "S3 Glacier Flexible Retrieval (formerly S3 Glacier) is designed for data archiving with retrieval times ranging from minutes to hours. It offers the lowest storage cost of the readily accessible tiers. For data that can wait hours to be retrieved and is rarely accessed, this is the most cost-effective choice."
  },
  {
    id: 53,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS storage service provides a fully managed, scalable file system that can be simultaneously mounted by multiple EC2 instances and grows automatically?",
    options: [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    correct: [2],
    explanation: "Amazon EFS (Elastic File System) provides a simple, scalable, fully managed NFS file system for AWS Cloud services and on-premises resources. Multiple EC2 instances can mount and access the same EFS file system concurrently, making it ideal for shared workloads like content management and web serving."
  },
  {
    id: 54,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company needs to store large amounts of unstructured data such as images, videos, and backups in a durable, highly available, object storage service. Which AWS service BEST meets this requirement?",
    options: [
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "Amazon RDS"
    ],
    correct: [2],
    explanation: "Amazon S3 is AWS's object storage service, designed for internet-scale data storage. It provides 11 nines (99.999999999%) of durability, high availability, and virtually unlimited storage capacity. It is ideal for backups, media files, data lakes, static websites, and archiving."
  },
  {
    id: 55,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon RDS feature automatically creates a standby replica of a database in a different Availability Zone and provides automatic failover if the primary database fails?",
    options: [
      "Read Replicas",
      "Multi-AZ Deployments",
      "Aurora Global Database",
      "Database snapshots"
    ],
    correct: [1],
    explanation: "RDS Multi-AZ deployments automatically provision and maintain a synchronous standby replica in a different AZ. In the event of a planned maintenance, DB failure, or AZ failure, Amazon RDS automatically fails over to the standby. This is for high availability, not for read scaling (that is what Read Replicas are for)."
  },
  {
    id: 56,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company needs a fully managed NoSQL key-value and document database that provides single-digit millisecond performance at any scale. Which AWS service should they use?",
    options: [
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    correct: [2],
    explanation: "Amazon DynamoDB is a fully managed serverless NoSQL database service that provides single-digit millisecond performance at any scale. It is ideal for high-traffic web applications, gaming, IoT, and mobile backends that require low-latency data access at scale."
  },
  {
    id: 57,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to run analytical queries against petabytes of structured data using standard SQL. Which AWS database service is designed for this use case?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS for MySQL",
      "Amazon Redshift",
      "Amazon ElastiCache"
    ],
    correct: [2],
    explanation: "Amazon Redshift is a fully managed, petabyte-scale cloud data warehouse service. It is designed for online analytical processing (OLAP) and business intelligence workloads, enabling complex queries across large datasets using standard SQL and integrating with popular BI tools."
  },
  {
    id: 58,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed in-memory caching layer to improve the performance of read-heavy database workloads?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB DAX",
      "Amazon ElastiCache",
      "Amazon Redshift"
    ],
    correct: [2],
    explanation: "Amazon ElastiCache is a fully managed in-memory caching service that supports Redis and Memcached. By caching frequently read data in memory, ElastiCache reduces database load and latency. DynamoDB Accelerator (DAX) is specific to DynamoDB; ElastiCache is for general-purpose caching, including RDS workloads."
  },
  {
    id: 59,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS networking service acts as a global content delivery network (CDN) that caches content at edge locations around the world to deliver data to users with low latency?",
    options: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Elastic Load Balancing"
    ],
    correct: [2],
    explanation: "Amazon CloudFront is AWS's CDN service that speeds up the distribution of static and dynamic web content by caching it at edge locations worldwide. It reduces latency for global users and can also improve security by integrating with AWS WAF and AWS Shield."
  },
  {
    id: 60,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides scalable domain name system (DNS) resolution and can also route traffic based on health checks, latency, and geographic location?",
    options: [
      "Amazon CloudFront",
      "Elastic Load Balancing",
      "Amazon Route 53",
      "AWS Global Accelerator"
    ],
    correct: [2],
    explanation: "Amazon Route 53 is a highly available and scalable DNS service. It supports multiple routing policies: Simple, Weighted, Latency-based, Failover, Geolocation, Geoproximity, and Multi-value answer. It also provides domain registration and health checking capabilities."
  },
  {
    id: 61,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to monitor the CPU utilization of its EC2 instances and automatically send an email alert when utilization exceeds 80%. Which AWS services would be used together for this purpose?",
    options: [
      "AWS CloudTrail and AWS SNS",
      "Amazon CloudWatch and Amazon SNS",
      "AWS Config and AWS Lambda",
      "Amazon GuardDuty and Amazon SES"
    ],
    correct: [1],
    explanation: "Amazon CloudWatch collects metrics (like EC2 CPU utilization), allows you to create alarms based on thresholds, and can trigger actions when those thresholds are breached. An SNS (Simple Notification Service) topic can be configured as the alarm action to send email notifications."
  },
  {
    id: 62,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows you to define and provision AWS infrastructure using code (templates), enabling consistent and repeatable deployments?",
    options: [
      "AWS Elastic Beanstalk",
      "AWS OpsWorks",
      "AWS CloudFormation",
      "AWS Systems Manager"
    ],
    correct: [2],
    explanation: "AWS CloudFormation is an Infrastructure as Code (IaC) service that lets you model, provision, and manage AWS resources using JSON or YAML templates. CloudFormation stacks ensure consistent, repeatable infrastructure deployments and allow version control of infrastructure."
  },
  {
    id: 63,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service analyzes your AWS account and provides real-time recommendations across five categories: cost optimization, performance, security, fault tolerance, and service limits?",
    options: [
      "AWS Config",
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "AWS Security Hub"
    ],
    correct: [2],
    explanation: "AWS Trusted Advisor inspects your AWS environment and recommends improvements in five categories: cost optimization, performance, security, fault tolerance, and service limits. The number of checks available depends on your support plan — Business and Enterprise plans unlock all checks."
  },
  {
    id: 64,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows customers to migrate on-premises databases to AWS with minimal downtime and supports migrations between different database engines (e.g., Oracle to Amazon Aurora)?",
    options: [
      "AWS Snowball",
      "AWS Server Migration Service (SMS)",
      "AWS Database Migration Service (DMS)",
      "AWS Schema Conversion Tool (SCT)"
    ],
    correct: [2],
    explanation: "AWS DMS (Database Migration Service) helps migrate databases to AWS quickly and securely. It supports homogeneous (e.g., MySQL to RDS MySQL) and heterogeneous (e.g., Oracle to Aurora) migrations. The source database remains operational during migration, minimizing downtime."
  },
  {
    id: 65,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company needs to transfer 80 TB of data to AWS. Their network bandwidth is limited and the transfer would take weeks. Which AWS service should they use to physically transfer the data?",
    options: [
      "AWS Direct Connect",
      "AWS DataSync",
      "AWS Snowball",
      "AWS Storage Gateway"
    ],
    correct: [2],
    explanation: "AWS Snowball is a physical data transport solution using secure, ruggedized appliances. It is ideal when transferring large amounts of data (terabytes to petabytes) over the network would be impractical or too slow. You copy data to the appliance and ship it to AWS for import into S3."
  },
  {
    id: 66,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which type of Elastic Load Balancer is BEST suited for routing HTTP and HTTPS traffic based on content, such as URL path or hostname?",
    options: [
      "Classic Load Balancer",
      "Network Load Balancer",
      "Application Load Balancer",
      "Gateway Load Balancer"
    ],
    correct: [2],
    explanation: "Application Load Balancer (ALB) operates at Layer 7 (application layer) and supports content-based routing based on URL path (e.g., /images to one target group, /api to another), hostname, HTTP headers, query strings, and more. It is designed for HTTP/HTTPS traffic."
  },
  {
    id: 67,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to connect its on-premises network to an Amazon VPC using an encrypted tunnel over the public internet. Which AWS service should they use?",
    options: [
      "AWS Direct Connect",
      "AWS Site-to-Site VPN",
      "Amazon CloudFront",
      "AWS Transit Gateway"
    ],
    correct: [1],
    explanation: "AWS Site-to-Site VPN creates an encrypted IPsec tunnel between the on-premises network and the AWS VPC over the public internet. It is a cost-effective and quick-to-set-up option compared to Direct Connect, though it has variable performance due to internet routing."
  },
  {
    id: 68,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS compute service is BEST for running simple web applications, databases, and managed virtual private servers for developers and small businesses who need a simplified cloud experience?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon Lightsail",
      "AWS Fargate"
    ],
    correct: [2],
    explanation: "Amazon Lightsail is designed for developers, small businesses, and students who need a simple, affordable way to run virtual private servers, applications, and databases. It provides a simplified management console with bundled resources (compute, storage, DNS, static IP) at a low, predictable monthly price."
  },
  {
    id: 69,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a fully managed message queuing service that enables decoupling of application components, allowing them to communicate asynchronously?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon MQ",
      "AWS EventBridge"
    ],
    correct: [1],
    explanation: "Amazon SQS (Simple Queue Service) is a fully managed message queuing service. It decouples components by allowing one service to put messages in a queue and another service to read and process them independently. This prevents data loss and enables resilient, loosely coupled architectures."
  },
  {
    id: 70,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company needs to send notifications to millions of subscribers via email, SMS, and mobile push simultaneously when a specific event occurs in their application. Which AWS service is BEST suited for this?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon SES",
      "Amazon Pinpoint"
    ],
    correct: [1],
    explanation: "Amazon SNS (Simple Notification Service) is a fully managed pub/sub messaging service. Publishers send messages to SNS topics, and SNS fans out the message to all subscribed endpoints — including email, SMS, SQS queues, Lambda functions, HTTP endpoints, and mobile push notifications — simultaneously."
  },
  {
    id: 71,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed Kubernetes control plane, allowing users to run containerized applications without managing the Kubernetes infrastructure?",
    options: [
      "Amazon ECS",
      "AWS Fargate",
      "Amazon EKS",
      "AWS App Runner"
    ],
    correct: [2],
    explanation: "Amazon EKS (Elastic Kubernetes Service) is a fully managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install and operate your own Kubernetes control plane or worker nodes. AWS manages the availability and scalability of the Kubernetes control plane."
  },
  {
    id: 72,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon Aurora feature allows it to replicate data to up to five other AWS Regions with typical latency of less than one second, providing disaster recovery across Regions?",
    options: [
      "Multi-AZ deployment",
      "Aurora Read Replicas",
      "Aurora Global Database",
      "Aurora Serverless"
    ],
    correct: [2],
    explanation: "Amazon Aurora Global Database allows a single Aurora database to span multiple AWS Regions. It replicates data to secondary Regions with typical latency under a second, and can promote a secondary Region to take full read/write workloads in under a minute for disaster recovery."
  },
  {
    id: 73,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows companies to extend their on-premises storage to AWS, seamlessly integrating local storage appliances with cloud storage services?",
    options: [
      "AWS DataSync",
      "AWS Storage Gateway",
      "Amazon S3 Transfer Acceleration",
      "AWS Snowball Edge"
    ],
    correct: [1],
    explanation: "AWS Storage Gateway is a hybrid cloud storage service that provides on-premises applications with access to cloud storage. It supports file, volume, and tape storage interfaces that transparently store data in S3, EBS snapshots, or S3 Glacier, bridging on-premises environments with cloud storage."
  },
  {
    id: 74,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a serverless query service that allows analysis of data stored in Amazon S3 using standard SQL, without needing to set up or manage infrastructure?",
    options: [
      "Amazon Redshift",
      "Amazon EMR",
      "Amazon Athena",
      "AWS Glue"
    ],
    correct: [2],
    explanation: "Amazon Athena is an interactive, serverless query service that uses standard SQL to analyze data directly in S3. There is no infrastructure to set up or manage — you just point Athena at your data in S3, define the schema, and start querying. You pay only for the queries run."
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 4: Billing, Pricing and Support  (~11 questions)
  // ────────────────────────────────────────────────────────────────
  {
    id: 75,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company has a steady-state, predictable workload that will run continuously for 3 years. Which EC2 pricing option provides the GREATEST discount compared to On-Demand pricing?",
    options: [
      "On-Demand Instances",
      "Spot Instances",
      "1-Year Reserved Instances (All Upfront)",
      "3-Year Reserved Instances (All Upfront)"
    ],
    correct: [3],
    explanation: "3-Year Reserved Instances with All Upfront payment provide the highest possible discount (up to 72%) compared to On-Demand pricing. The longer the term and the higher the upfront payment, the greater the discount. They are ideal for steady-state, predictable workloads."
  },
  {
    id: 76,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company wants the flexibility to use any EC2 instance type in any Region while still committing to a certain amount of compute usage to receive discounted pricing. Which pricing model provides this flexibility?",
    options: [
      "Reserved Instances",
      "Spot Instances",
      "Compute Savings Plans",
      "Dedicated Hosts"
    ],
    correct: [2],
    explanation: "Compute Savings Plans provide the most flexibility — they automatically apply to any EC2 instance regardless of Region, instance family, OS, or tenancy, as well as to AWS Fargate and Lambda. They offer savings of up to 66% over On-Demand in exchange for a 1 or 3-year commitment to a specific compute spend."
  },
  {
    id: 77,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS tool enables customers to visualize, understand, and manage AWS costs and usage over time, with the ability to create custom reports and filter by service, region, or tag?",
    options: [
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "AWS Cost Explorer",
      "AWS Pricing Calculator"
    ],
    correct: [2],
    explanation: "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time. You can create custom reports, filter by dimension (service, region, account, tag), and view forecasts. It also provides rightsizing recommendations."
  },
  {
    id: 78,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company wants to receive an alert when their monthly AWS spending exceeds $500. Which AWS service should they use?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "Amazon CloudWatch"
    ],
    correct: [1],
    explanation: "AWS Budgets allows you to set custom cost and usage budgets and receive alerts (via email or SNS) when costs exceed — or are forecasted to exceed — a defined threshold. You can create budgets for cost, usage, Reserved Instance utilization, and Savings Plans."
  },
  {
    id: 79,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service allows customers to estimate the cost of running their planned AWS workloads before committing to any resources?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Trusted Advisor"
    ],
    correct: [2],
    explanation: "AWS Pricing Calculator is a free web-based tool that allows you to estimate the cost of your planned AWS infrastructure before you deploy it. You can model your solution, configure resources, and review an estimated monthly bill without creating an account."
  },
  {
    id: 80,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS Support plan provides 24/7 access to Cloud Support Engineers via phone, chat, and email, along with a Technical Account Manager (TAM) and proactive guidance?",
    options: [
      "Basic Support",
      "Developer Support",
      "Business Support",
      "Enterprise Support"
    ],
    correct: [3],
    explanation: "Enterprise Support is the highest tier and includes 24/7 phone, chat, and email access, a designated Technical Account Manager (TAM) who provides proactive guidance, Infrastructure Event Management (IEM), and a 15-minute response time for business-critical system failures."
  },
  {
    id: 81,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A small company just signed up for AWS and wants the minimum level of support to access AWS documentation, whitepapers, and support forums. Which plan should they choose?",
    options: [
      "Basic Support (free)",
      "Developer Support",
      "Business Support",
      "Enterprise On-Ramp Support"
    ],
    correct: [0],
    explanation: "AWS Basic Support is free and included for all AWS customers. It provides access to documentation, whitepapers, AWS re:Post (community forums), AWS Personal Health Dashboard, and the six core Trusted Advisor checks. It does not include access to Cloud Support Engineers."
  },
  {
    id: 82,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service allows multiple AWS accounts to be centrally managed and enables the application of governance policies across all accounts in an organization?",
    options: [
      "AWS IAM Identity Center",
      "AWS Control Tower",
      "AWS Organizations",
      "AWS Config"
    ],
    correct: [2],
    explanation: "AWS Organizations lets you centrally manage and govern multiple AWS accounts. It enables consolidated billing, the application of Service Control Policies (SCPs) to restrict what actions accounts can perform, and the grouping of accounts into Organizational Units (OUs) for policy management."
  },
  {
    id: 83,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which feature of AWS Organizations combines the usage of all member accounts for the purpose of receiving volume discounts and Reserved Instance pricing benefits across accounts?",
    options: [
      "Service Control Policies (SCPs)",
      "Consolidated Billing",
      "AWS Budgets integration",
      "AWS Cost Explorer multi-account view"
    ],
    correct: [1],
    explanation: "Consolidated Billing is a feature of AWS Organizations that combines the bills of all member accounts into a single payment. This enables volume pricing discounts (since total usage is aggregated) and allows unused Reserved Instances or Savings Plans from one account to be applied to others in the organization."
  },
  {
    id: 84,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS offering allows new customers to explore and try certain AWS services for free for 12 months following initial sign-up, with a defined monthly limit?",
    options: [
      "AWS Spot Instances",
      "AWS Free Tier (12-month free offers)",
      "AWS On-Demand pricing",
      "AWS Dev/Test accounts"
    ],
    correct: [1],
    explanation: "The AWS Free Tier provides 12-month free access to certain services (like 750 hours/month of EC2 t2.micro, 5 GB of S3, and 25 GB of DynamoDB) for new accounts. It also includes always-free offers (like Lambda's 1M free requests/month) and short-term trials for some services."
  },
  {
    id: 85,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company is evaluating the total cost of migrating from on-premises to AWS. Which AWS tool helps compare the cost of running on-premises infrastructure versus running the equivalent workloads on AWS?",
    options: [
      "AWS Cost Explorer",
      "AWS Migration Hub",
      "AWS Pricing Calculator (with TCO analysis)",
      "AWS Trusted Advisor"
    ],
    correct: [2],
    explanation: "The AWS Pricing Calculator can model total cost of ownership (TCO) comparisons between on-premises and AWS. By entering on-premises infrastructure details (servers, storage, networking, labor), you can compare the full cost against equivalent AWS services to build a business case for migration."
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 1: Cloud Concepts  (additional questions 86-113)
  // ────────────────────────────────────────────────────────────────
  {
    id: 86,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Well-Architected Framework pillar focuses on minimizing the environmental impact of running cloud workloads?",
    options: [
      "Cost Optimization",
      "Operational Excellence",
      "Sustainability",
      "Performance Efficiency"
    ],
    correct: [2],
    explanation: "The Sustainability pillar (added in 2021) focuses on minimizing the environmental impact of running cloud workloads. Best practices include understanding your impact, setting sustainability goals, maximizing utilization, and adopting new efficient hardware and managed services."
  },
  {
    id: 87,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS service allows customers to review their architecture against AWS best practices and provides a prioritized improvement plan across the six pillars of the Well-Architected Framework?",
    options: [
      "AWS Trusted Advisor",
      "AWS Well-Architected Tool",
      "AWS Config",
      "AWS Security Hub"
    ],
    correct: [1],
    explanation: "The AWS Well-Architected Tool is a service that lets you review the state of your workloads against the latest AWS architectural best practices. It asks questions across the six pillars and provides an improvement plan with prioritized recommendations."
  },
  {
    id: 88,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company's on-premises data center requires a capital investment of $2 million for new servers. Which AWS cloud computing advantage directly addresses this concern?",
    options: [
      "Increase speed and agility",
      "Go global in minutes",
      "Trade fixed expense for variable expense",
      "Benefit from massive economies of scale"
    ],
    correct: [2],
    explanation: "Trading fixed expense (CapEx) for variable expense (OpEx) means you pay only for what you use rather than investing upfront in data center infrastructure. This eliminates the large capital outlay required for physical servers."
  },
  {
    id: 89,
    domain: "Cloud Concepts",
    type: "single",
    question: "Under which cloud service model does the provider manage everything — including the application — leaving the customer responsible only for their data and how they use the service?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Container as a Service (CaaS)"
    ],
    correct: [2],
    explanation: "In the SaaS model, the provider manages infrastructure, OS, runtime, middleware, and the application itself. Customers only manage their data and user access. Examples include Gmail, Salesforce, and Microsoft 365. This offers the least customer control but the least operational burden."
  },
  {
    id: 90,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS infrastructure feature allows customers to run AWS compute and storage services in their own on-premises data center using the same AWS APIs and tools?",
    options: [
      "AWS Local Zones",
      "AWS Wavelength",
      "AWS Outposts",
      "AWS Snow Family"
    ],
    correct: [2],
    explanation: "AWS Outposts is a fully managed service that brings AWS infrastructure, services, APIs, and tools to virtually any on-premises facility. It allows customers to run AWS services locally while connecting to the broader AWS cloud — ideal for low-latency requirements and local data processing."
  },
  {
    id: 91,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS infrastructure feature extends AWS compute and storage to the edge of 5G networks inside telecommunications providers' data centers, enabling ultra-low latency for mobile applications?",
    options: [
      "AWS Local Zones",
      "AWS Wavelength",
      "AWS Outposts",
      "Edge Locations"
    ],
    correct: [1],
    explanation: "AWS Wavelength embeds AWS compute and storage within communications service providers' 5G networks, enabling single-digit millisecond latency to mobile devices. Common use cases include AR/VR, real-time gaming, and connected vehicle applications."
  },
  {
    id: 92,
    domain: "Cloud Concepts",
    type: "single",
    question: "A media company wants to run latency-sensitive applications closer to a specific metropolitan area that does not have a full AWS Region nearby. Which AWS infrastructure option should they use?",
    options: [
      "AWS Wavelength",
      "AWS Outposts",
      "AWS Local Zones",
      "An AWS Edge Location"
    ],
    correct: [2],
    explanation: "AWS Local Zones are extensions of an AWS Region placed in major metropolitan areas, allowing you to run latency-sensitive workloads closer to large population centers far from existing AWS Regions. They offer a subset of AWS services with single-digit millisecond latency to local users."
  },
  {
    id: 93,
    domain: "Cloud Concepts",
    type: "single",
    question: "What is the difference between 'scalability' and 'elasticity' in cloud computing?",
    options: [
      "Scalability refers to automatic resource adjustment; elasticity refers to manual adjustment",
      "Scalability is the ability to increase capacity to handle growth; elasticity is the ability to automatically scale both up and down based on demand",
      "Scalability is a cloud benefit; elasticity is an on-premises benefit",
      "They are synonymous terms used interchangeably in cloud computing"
    ],
    correct: [1],
    explanation: "Scalability is the ability to handle increased load by adding resources. Elasticity extends this by also automatically scaling DOWN when demand decreases, so you pay only for what you use at any given time. Elasticity is dynamic and bidirectional."
  },
  {
    id: 94,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which perspective of the AWS Cloud Adoption Framework (CAF) focuses on aligning cloud adoption with business goals and ensuring the organization benefits from cloud investments?",
    options: [
      "People perspective",
      "Business perspective",
      "Platform perspective",
      "Operations perspective"
    ],
    correct: [1],
    explanation: "The Business perspective of the AWS CAF helps stakeholders understand how to use the cloud to achieve business objectives. It focuses on business strategy, aligning IT investments with business goals, and building a clear business case for cloud adoption."
  },
  {
    id: 95,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud migration strategy involves moving an application to the cloud with minimal or no changes — also known as 'lift and shift'?",
    options: [
      "Replatform",
      "Refactor",
      "Rehost",
      "Repurchase"
    ],
    correct: [2],
    explanation: "Rehosting (lift and shift) migrates applications to the cloud without modifying the underlying architecture. It is the fastest migration path, requires no code changes, and is often used as a first step toward cloud modernization."
  },
  {
    id: 96,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company is migrating to AWS and wants to replace a licensed on-premises CRM system with a SaaS-based alternative. Which migration strategy does this represent?",
    options: [
      "Rehost",
      "Replatform",
      "Repurchase",
      "Refactor"
    ],
    correct: [2],
    explanation: "Repurchasing (also called 'drop and shop') involves moving from a traditional license to a SaaS model — for example, replacing an on-premises CRM with Salesforce. It simplifies operations by moving to a fully managed SaaS product."
  },
  {
    id: 97,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud migration strategy involves moving an application to the cloud while making some optimizations — such as switching to Amazon RDS — without completely re-architecting the application?",
    options: [
      "Rehost",
      "Replatform",
      "Refactor",
      "Retire"
    ],
    correct: [1],
    explanation: "Replatforming ('lift, tinker, and shift') involves making a few cloud-optimized changes — such as using a managed database instead of installing one on a VM — without changing the core architecture. It provides some cloud benefits without the complexity of full re-architecture."
  },
  {
    id: 98,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud migration strategy involves completely redesigning and rebuilding an application using cloud-native features, such as microservices and serverless architectures?",
    options: [
      "Rehost",
      "Replatform",
      "Repurchase",
      "Refactor/Re-architect"
    ],
    correct: [3],
    explanation: "Refactoring (re-architecting) involves reimagining how an application is designed using cloud-native features. It is the most complex strategy but offers the greatest long-term benefits in agility, performance, and scalability."
  },
  {
    id: 99,
    domain: "Cloud Concepts",
    type: "single",
    question: "A business continuity plan requires that a company restore its systems within 4 hours after a disaster. Which term BEST describes this requirement?",
    options: [
      "Recovery Point Objective (RPO)",
      "Recovery Time Objective (RTO)",
      "Maximum Tolerable Downtime (MTD)",
      "Mean Time to Recovery (MTTR)"
    ],
    correct: [1],
    explanation: "Recovery Time Objective (RTO) is the maximum acceptable time to restore services after a disaster — it answers 'how quickly must we recover?' Recovery Point Objective (RPO) answers 'how much data can we afford to lose?' and measures the maximum age of recoverable data."
  },
  {
    id: 100,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which disaster recovery strategy keeps only the most critical core systems running in AWS at all times, allowing faster recovery than backup-and-restore while costing less than a full warm standby?",
    options: [
      "Backup and restore",
      "Pilot light",
      "Warm standby",
      "Multi-site active/active"
    ],
    correct: [1],
    explanation: "The pilot light strategy keeps core/critical systems running in AWS at all times (like a pilot light on a furnace). In a disaster, you scale up from this minimal footprint. It is faster than backup-and-restore but cheaper than warm standby, which runs a fully scaled-down copy of the production environment."
  },
  {
    id: 101,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS global infrastructure component serves as the endpoint for Amazon CloudFront CDN distributions and Amazon Route 53 DNS queries?",
    options: [
      "AWS Availability Zone",
      "AWS Local Zone",
      "AWS Edge Location",
      "AWS Wavelength Zone"
    ],
    correct: [2],
    explanation: "AWS Edge Locations are sites deployed in major cities worldwide. They serve as endpoints for CloudFront (caching content closer to users) and Route 53 (answering DNS queries). There are many more edge locations than Regions, providing a globally distributed network."
  },
  {
    id: 102,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company designs its architecture so that if one component fails, traffic is automatically rerouted to healthy instances with no disruption to users. Which cloud design principle does this represent?",
    options: [
      "Design for failure",
      "Loose coupling",
      "Implement elasticity",
      "Think parallel"
    ],
    correct: [0],
    explanation: "'Design for failure' encourages building systems assuming individual components will fail. By using multiple AZs, health checks, and auto-replacement, the overall system remains highly available despite individual component failures."
  },
  {
    id: 103,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes 'loose coupling' as a cloud architecture best practice?",
    options: [
      "Combining multiple services into a single monolithic application for simplicity",
      "Designing system components so they interact through well-defined interfaces and can operate independently",
      "Tightly binding application layers together to reduce network latency",
      "Using a single database to store all application state"
    ],
    correct: [1],
    explanation: "Loose coupling means components interact through well-defined interfaces (APIs, message queues) and are not tightly dependent on each other's internal implementation. This allows individual components to be updated, scaled, or replaced independently, improving resilience and agility."
  },
  {
    id: 104,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS design principle recommends avoiding manual processes, implementing all changes through code, and ensuring every task can be repeated reliably and consistently?",
    options: [
      "Elasticity",
      "Automation",
      "Loose coupling",
      "Think parallel"
    ],
    correct: [1],
    explanation: "Automation is a foundation of Operational Excellence. By automating tasks (using CloudFormation, Systems Manager, Lambda, etc.), teams eliminate manual errors, ensure repeatability, and free staff for higher-value work. Automation also enables consistent security and compliance enforcement."
  },
  {
    id: 105,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "Which TWO of the following are characteristics of cloud computing according to the NIST definition?",
    options: [
      "On-demand self-service",
      "Fixed monthly pricing regardless of usage",
      "Broad network access",
      "Dedicated physical hardware for each customer",
      "Manual provisioning requiring IT approval"
    ],
    correct: [0, 2],
    explanation: "NIST defines five cloud computing characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. On-demand self-service means users provision resources without human interaction. Broad network access means services are accessible over the network from various devices."
  },
  {
    id: 106,
    domain: "Cloud Concepts",
    type: "single",
    question: "The AWS Well-Architected Framework Performance Efficiency pillar recommends using serverless architectures. What is the PRIMARY reason?",
    options: [
      "Serverless services are always cheaper than EC2",
      "Serverless removes the need to manage servers, letting teams focus on code and business logic",
      "Serverless guarantees 100% uptime",
      "Serverless services automatically encrypt all data"
    ],
    correct: [1],
    explanation: "Serverless architectures (Lambda, Fargate, DynamoDB, etc.) remove the undifferentiated heavy lifting of server management — patching, scaling, capacity planning. Teams focus on writing code that delivers business value. The Performance Efficiency pillar emphasizes democratizing advanced technologies to eliminate operational burden."
  },
  {
    id: 107,
    domain: "Cloud Concepts",
    type: "single",
    question: "An organization identifies that moving to AWS would let them stop spending time on hardware maintenance tasks such as replacing failed servers. Which benefit of cloud computing does this represent?",
    options: [
      "Economies of scale",
      "Go global in minutes",
      "Stop spending money running and maintaining data centers",
      "Trade capital expense for variable expense"
    ],
    correct: [2],
    explanation: "'Stop spending money running and maintaining data centers' lets organizations focus on customers and business differentiators rather than IT infrastructure work. AWS handles data center operations (hardware replacement, power, cooling, physical security), freeing teams to focus on innovation."
  },
  {
    id: 108,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud concept describes the ability to handle increased load by adding more instances of the same type (e.g., more servers), rather than upgrading to a single larger server?",
    options: [
      "Vertical scaling (scaling up)",
      "Horizontal scaling (scaling out)",
      "Diagonal scaling",
      "Gravitational scaling"
    ],
    correct: [1],
    explanation: "Horizontal scaling (scaling out) adds more instances or nodes to distribute load. Vertical scaling (scaling up) increases the size of a single instance. Cloud architectures favor horizontal scaling because it provides better fault tolerance and can scale further without hitting hardware limits."
  },
  {
    id: 109,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS service helps organizations plan cloud migrations using a structured framework of six perspectives — Business, People, Governance, Platform, Security, and Operations?",
    options: [
      "AWS Well-Architected Tool",
      "AWS Migration Hub",
      "AWS Cloud Adoption Framework (CAF)",
      "AWS Professional Services"
    ],
    correct: [2],
    explanation: "The AWS Cloud Adoption Framework (CAF) organizes guidance into six perspectives covering responsibilities for different stakeholder groups. It helps organizations develop a comprehensive cloud adoption plan aligned to their business goals and readiness."
  },
  {
    id: 110,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes the concept of 'durability' in cloud storage?",
    options: [
      "The ability to access data quickly with low latency",
      "The ability to scale storage capacity automatically",
      "The likelihood that stored data will not be lost or corrupted over time",
      "The ability of a storage system to remain operational during a failure"
    ],
    correct: [2],
    explanation: "Durability refers to the probability that data is retained intact and not lost or corrupted. Amazon S3 is designed for 99.999999999% (11 nines) of durability. This is distinct from availability, which is the ability to access data when needed."
  },
  {
    id: 111,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to enforce a governance guardrail ensuring no AWS account in its organization can disable AWS CloudTrail. Which tool BEST enforces this control?",
    options: [
      "IAM permission boundaries",
      "AWS Config rules",
      "Service Control Policies (SCPs) in AWS Organizations",
      "AWS CloudFormation StackSets"
    ],
    correct: [2],
    explanation: "Service Control Policies (SCPs) define permission guardrails on accounts within an AWS Organization. An SCP can deny the ability to disable CloudTrail across all accounts, and even account administrators cannot override an SCP. SCPs represent the maximum permissions available to accounts."
  },
  {
    id: 112,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following is an example of trading 'capital expense' for 'variable expense' in cloud computing?",
    options: [
      "Purchasing a Reserved Instance for a 3-year term",
      "Paying for EC2 per second of actual use instead of buying physical servers",
      "Signing a long-term enterprise discount agreement with AWS",
      "Using AWS Direct Connect instead of internet-based VPN"
    ],
    correct: [1],
    explanation: "Paying for EC2 per second of actual use (On-Demand pricing) rather than purchasing physical servers upfront exemplifies trading CapEx for OpEx. Instead of a large initial capital investment, you incur variable operational expenses that scale with usage, improving cash flow and eliminating the risk of over-provisioning."
  },
  {
    id: 113,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which approach in cloud design treats infrastructure components as disposable and rebuilds failed resources from code rather than manually fixing them?",
    options: [
      "Think parallel",
      "Implement elasticity",
      "Treat resources as disposable (immutable infrastructure)",
      "Keep things simple"
    ],
    correct: [2],
    explanation: "Treating resources as disposable (immutable infrastructure) means terminating a broken server and launching a fresh one from an AMI or CloudFormation template instead of logging in to fix it. This ensures consistency, eliminates configuration drift, and is fundamental to cloud-native operations and DevOps."
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 2: Security and Compliance  (additional questions 114-148)
  // ────────────────────────────────────────────────────────────────
  {
    id: 114,
    domain: "Security & Compliance",
    type: "single",
    question: "Which IAM entity should be used to grant an EC2 instance permission to access an S3 bucket, rather than storing long-term access keys on the instance?",
    options: [
      "IAM User with access keys stored in a config file",
      "IAM Group attached to the instance",
      "IAM Role attached to the EC2 instance profile",
      "IAM Policy directly applied to the S3 bucket"
    ],
    correct: [2],
    explanation: "IAM Roles attached to EC2 instance profiles provide temporary credentials automatically rotated by AWS. This eliminates the need to store long-term access keys on the instance. The EC2 instance assumes the role, and applications get temporary credentials via the instance metadata service."
  },
  {
    id: 115,
    domain: "Security & Compliance",
    type: "single",
    question: "What is the purpose of an AWS Service Control Policy (SCP) in AWS Organizations?",
    options: [
      "To grant additional permissions to IAM users in member accounts",
      "To define the maximum permissions available to accounts in an organizational unit",
      "To configure security group rules for VPCs across an organization",
      "To audit and report compliance status of all member accounts"
    ],
    correct: [1],
    explanation: "SCPs define the maximum permissions for accounts in an AWS Organization. They act as permission guardrails — even if an IAM user in a member account has full administrator access, an SCP can restrict what actions they can perform. SCPs do NOT grant permissions; they only limit them."
  },
  {
    id: 116,
    domain: "Security & Compliance",
    type: "single",
    question: "A company uses Amazon Cognito to allow millions of users to sign up and sign in to their mobile app using Google and Facebook. Which Amazon Cognito feature enables this?",
    options: [
      "Cognito User Pools",
      "Cognito Identity Pools (Federated Identities)",
      "Cognito Sync",
      "Cognito Streams"
    ],
    correct: [0],
    explanation: "Amazon Cognito User Pools provide a fully managed user directory for mobile and web apps. User Pools support sign-up/sign-in with social identity providers (Google, Facebook, Apple), SAML/OIDC providers, and custom authentication flows."
  },
  {
    id: 117,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service maintains a detailed inventory of AWS resources, records configuration changes over time, and evaluates configurations against compliance rules?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon Inspector",
      "AWS Security Hub"
    ],
    correct: [1],
    explanation: "AWS Config continuously monitors and records AWS resource configurations and evaluates them against desired rules. You can query configuration history to see how a resource looked at any point in the past and receive notifications when configurations change."
  },
  {
    id: 118,
    domain: "Security & Compliance",
    type: "single",
    question: "A security team wants to automatically analyze VPC network traffic logs to detect potential threats such as unusual outbound connections or port scanning. Which AWS service provides this?",
    options: [
      "AWS WAF",
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Config"
    ],
    correct: [2],
    explanation: "Amazon GuardDuty analyzes VPC Flow Logs (along with CloudTrail and DNS logs) using machine learning to detect unusual patterns like port scanning, unusual outbound connections to malicious IPs, or cryptocurrency mining. It monitors continuously without requiring agents."
  },
  {
    id: 119,
    domain: "Security & Compliance",
    type: "single",
    question: "What is the key difference between Security Groups and Network ACLs in an Amazon VPC?",
    options: [
      "Security Groups operate at the subnet level; NACLs operate at the instance level",
      "Security Groups are stateful; NACLs are stateless",
      "Security Groups support deny rules; NACLs only support allow rules",
      "Security Groups are for IPv4 only; NACLs support IPv6"
    ],
    correct: [1],
    explanation: "Security Groups are stateful — if you allow inbound traffic, the return outbound traffic is automatically allowed. NACLs are stateless — you must explicitly define both inbound and outbound rules. Security Groups operate at the instance/ENI level; NACLs operate at the subnet level."
  },
  {
    id: 120,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides dedicated FIPS 140-2 Level 3 validated hardware security modules (HSMs) that the customer exclusively controls, for strict key management requirements?",
    options: [
      "AWS Key Management Service (KMS)",
      "AWS Certificate Manager (ACM)",
      "AWS CloudHSM",
      "AWS Secrets Manager"
    ],
    correct: [2],
    explanation: "AWS CloudHSM provides dedicated HSMs in the cloud where you have exclusive access and manage your own encryption keys. Unlike KMS (where AWS manages the HSMs), CloudHSM is used when regulations mandate customer-controlled hardware for cryptographic operations."
  },
  {
    id: 121,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to ensure that all S3 buckets in their AWS account can never be made publicly accessible, regardless of individual bucket policies or object ACLs. Which feature should they enable?",
    options: [
      "S3 Server-Side Encryption",
      "S3 Object Lock",
      "S3 Block Public Access at the account level",
      "AWS Config S3 public access rule"
    ],
    correct: [2],
    explanation: "S3 Block Public Access settings applied at the account level override any bucket-level or object-level policies that would grant public access. Enabling all four settings at the account level ensures no bucket can be inadvertently made public."
  },
  {
    id: 122,
    domain: "Security & Compliance",
    type: "single",
    question: "An AWS security audit finds that an IAM user's access key has been exposed in a public GitHub repository. What should be done FIRST?",
    options: [
      "Delete the IAM user immediately",
      "Rotate the access key and then investigate",
      "Deactivate or delete the exposed access key immediately",
      "Enable MFA on the IAM user account"
    ],
    correct: [2],
    explanation: "The first and most urgent action is to deactivate or delete the exposed access key to prevent unauthorized use. Then investigate what actions were taken with the key (using CloudTrail), clean up any unauthorized resources, and create new credentials. Enabling MFA is a good follow-up action."
  },
  {
    id: 123,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS feature allows administrators to connect to EC2 instances securely without opening SSH/RDP inbound ports or using bastion hosts?",
    options: [
      "AWS VPN",
      "AWS Systems Manager Session Manager",
      "Amazon EC2 Instance Connect",
      "AWS Direct Connect"
    ],
    correct: [1],
    explanation: "AWS Systems Manager Session Manager provides browser-based interactive shell and CLI access to EC2 instances without requiring open inbound ports, bastion hosts, or SSH keys. All sessions are logged to CloudTrail and CloudWatch Logs, and access is controlled via IAM policies."
  },
  {
    id: 124,
    domain: "Security & Compliance",
    type: "single",
    question: "Which type of encryption protects data while it is being transmitted between a client and an AWS service over a network?",
    options: [
      "Encryption at rest",
      "Encryption in transit",
      "Client-side encryption",
      "Envelope encryption"
    ],
    correct: [1],
    explanation: "Encryption in transit protects data as it moves between a client and a service or between AWS services using TLS/SSL. Examples include HTTPS for S3 and API calls, TLS for RDS connections, and encrypted VPN tunnels. Encryption at rest protects stored data."
  },
  {
    id: 125,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to use their own encryption keys stored on-premises to encrypt data in Amazon S3 instead of AWS-managed keys. Which S3 encryption option supports this?",
    options: [
      "SSE-S3 (Server-Side Encryption with S3-managed keys)",
      "SSE-KMS (Server-Side Encryption with KMS keys)",
      "SSE-C (Server-Side Encryption with Customer-provided keys)",
      "Client-side encryption with AWS SDK"
    ],
    correct: [2],
    explanation: "SSE-C allows customers to supply their own encryption key with each request. Amazon S3 performs the encryption/decryption using the provided key but does not store the key. Customers are responsible for managing and rotating their own keys."
  },
  {
    id: 126,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service uses machine learning and graph theory to automatically build a linked set of data from logs, enabling security teams to investigate the root cause and scope of security findings?",
    options: [
      "Amazon GuardDuty",
      "Amazon Detective",
      "AWS Security Hub",
      "Amazon Inspector"
    ],
    correct: [1],
    explanation: "Amazon Detective automatically collects log data from AWS resources and uses ML, statistical analysis, and graph theory to help analysts quickly determine the root cause of security findings and conduct efficient security investigations."
  },
  {
    id: 127,
    domain: "Security & Compliance",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, for which service type does AWS take responsibility for patching the operating system in addition to the underlying hardware?",
    options: [
      "Amazon EC2",
      "Amazon RDS (managed relational database)",
      "Amazon ECS running on EC2",
      "Amazon Lightsail VPS"
    ],
    correct: [1],
    explanation: "For Amazon RDS, AWS manages OS and database engine patching as part of the managed service. Customers are responsible for database settings, user access, and data. For EC2, customers are responsible for patching the guest OS. This distinction is central to the Shared Responsibility Model."
  },
  {
    id: 128,
    domain: "Security & Compliance",
    type: "multiple",
    question: "Which TWO AWS services help detect and respond to security threats by analyzing logs and usage patterns?",
    options: [
      "Amazon GuardDuty",
      "AWS Certificate Manager",
      "Amazon Detective",
      "AWS Secrets Manager",
      "Amazon Macie"
    ],
    correct: [0, 4],
    explanation: "Amazon GuardDuty detects security threats by analyzing CloudTrail, VPC Flow Logs, and DNS logs using ML and threat intelligence. Amazon Macie detects data security risks in S3 by identifying sensitive data like PII. Both are threat detection services. ACM manages certificates; Secrets Manager manages secrets."
  },
  {
    id: 129,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a pre-packaged landing zone for setting up and governing a multi-account AWS environment, applying pre-configured guardrails across all accounts?",
    options: [
      "AWS Organizations SCPs",
      "AWS Control Tower",
      "AWS Config Aggregator",
      "AWS Security Hub"
    ],
    correct: [1],
    explanation: "AWS Control Tower provides a landing zone to set up and govern a multi-account AWS environment at scale. It automates account provisioning, applies pre-configured guardrails (preventive SCPs and detective Config rules), and provides a dashboard to monitor compliance across all accounts."
  },
  {
    id: 130,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS tool helps identify resources shared with external entities and generates least-privilege policies based on actual access activity to help right-size permissions?",
    options: [
      "AWS Trusted Advisor",
      "IAM Access Analyzer",
      "Amazon GuardDuty",
      "AWS Config"
    ],
    correct: [1],
    explanation: "IAM Access Analyzer identifies resources shared with external entities (external access findings) and generates least-privilege policies based on access activity (unused access findings). It helps identify overly permissive access and right-size IAM permissions."
  },
  {
    id: 131,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides near-real-time notifications about events that affect your specific AWS resources, such as scheduled maintenance or service disruptions impacting your account?",
    options: [
      "Amazon CloudWatch",
      "AWS Health Dashboard (Personal Health Dashboard)",
      "AWS Config",
      "Amazon EventBridge"
    ],
    correct: [1],
    explanation: "The AWS Health Dashboard (formerly Personal Health Dashboard) provides alerts and remediation guidance when AWS events may impact your specific resources. Unlike the Service Health Dashboard (global AWS status), it shows issues affecting YOUR account and resources specifically."
  },
  {
    id: 132,
    domain: "Security & Compliance",
    type: "single",
    question: "A financial services company must comply with PCI DSS and needs to download AWS's Attestation of Compliance to present to auditors. Which AWS service provides this?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Artifact",
      "AWS Security Hub"
    ],
    correct: [2],
    explanation: "AWS Artifact is a self-service portal providing on-demand access to AWS compliance documentation, including PCI DSS Attestation of Compliance (AOC), SOC reports, ISO certificates, and HIPAA BAAs. These documents can be downloaded and used in customer audit processes."
  },
  {
    id: 133,
    domain: "Security & Compliance",
    type: "single",
    question: "What does AWS's penetration testing policy state regarding customers testing their own AWS resources?",
    options: [
      "Penetration testing of any AWS resource is strictly prohibited",
      "Customers may perform security testing on certain services without prior approval, subject to the AWS acceptable use policy",
      "Customers must always get written permission from AWS before any security testing",
      "Only AWS-certified partners can perform penetration testing on customer resources"
    ],
    correct: [1],
    explanation: "AWS allows customers to conduct security assessments on their own AWS resources without prior approval for a defined list of services (EC2, RDS, CloudFront, API Gateway, Lambda, Lightsail, Elastic Beanstalk, etc.). Certain activities such as DDoS simulation require separate approval."
  },
  {
    id: 134,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides centralized security monitoring across multiple AWS accounts by aggregating and normalizing findings from GuardDuty, Inspector, Macie, and other services?",
    options: [
      "AWS Config Aggregator",
      "Amazon Detective",
      "AWS Security Hub",
      "AWS CloudTrail Lake"
    ],
    correct: [2],
    explanation: "AWS Security Hub provides a comprehensive view of security across all accounts and Regions. It aggregates, normalizes, and prioritizes findings from AWS services and third-party tools. It also runs automated compliance checks against standards like CIS AWS Foundations Benchmark."
  },
  {
    id: 135,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to ensure that all EC2 instances across every AWS account in their organization are automatically patched and compliant with their patching policy. Which AWS service enables this?",
    options: [
      "Amazon Inspector",
      "AWS Systems Manager Patch Manager",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correct: [1],
    explanation: "AWS Systems Manager Patch Manager automates the process of patching EC2 instances (and on-premises servers) with both security and other types of updates. It can be centrally managed across multiple accounts using AWS Organizations integration, ensuring consistent patching compliance."
  },
  {
    id: 136,
    domain: "Security & Compliance",
    type: "single",
    question: "What is the purpose of VPC Flow Logs in AWS?",
    options: [
      "To capture application-level HTTP request and response details",
      "To capture information about IP traffic going to and from network interfaces in a VPC",
      "To log all API calls made within the AWS account",
      "To monitor database query performance"
    ],
    correct: [1],
    explanation: "VPC Flow Logs capture information about the IP traffic flowing to and from network interfaces in a VPC, including source/destination IP, ports, protocol, and whether traffic was accepted or rejected. They are valuable for network troubleshooting, security analysis, and feeding into GuardDuty."
  },
  {
    id: 137,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to continuously check that all IAM users have MFA enabled and that access keys are rotated every 90 days. Which AWS service can automate these compliance checks?",
    options: [
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "AWS Config with managed rules",
      "AWS Trusted Advisor"
    ],
    correct: [2],
    explanation: "AWS Config has managed rules like 'iam-user-mfa-enabled' and 'access-keys-rotated' that continuously evaluate whether IAM users have MFA enabled and whether access keys have been rotated within the specified number of days. Non-compliant resources are flagged and can trigger automated remediation."
  },
  {
    id: 138,
    domain: "Security & Compliance",
    type: "single",
    question: "Which security best practice recommends designing systems so that if one component is compromised, the damage is contained to the smallest possible area?",
    options: [
      "Principle of least privilege",
      "Defense in depth",
      "Blast radius reduction",
      "Zero trust architecture"
    ],
    correct: [2],
    explanation: "Reducing the blast radius means containing the impact of a compromise. Techniques include network segmentation (private subnets), least-privilege IAM policies, and separate AWS accounts for different environments (dev, staging, prod) so a breach in one does not affect others."
  },
  {
    id: 139,
    domain: "Security & Compliance",
    type: "single",
    question: "Amazon Inspector v2 automatically discovers and assesses workloads for which types of security vulnerabilities?",
    options: [
      "Network reachability issues only",
      "Software package vulnerabilities (CVEs) and network reachability for EC2 instances and container images",
      "IAM policy misconfigurations and S3 public access issues",
      "DDoS attacks and SQL injection attempts"
    ],
    correct: [1],
    explanation: "Amazon Inspector v2 automatically discovers EC2 instances and container images in ECR and assesses them for software vulnerabilities (known CVEs) and unintended network exposure. It continuously scans without requiring scheduled maintenance windows and integrates with AWS Security Hub."
  },
  {
    id: 140,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a managed network firewall with stateful packet inspection and intrusion prevention to protect entire Amazon VPCs?",
    options: [
      "AWS WAF",
      "AWS Shield Advanced",
      "AWS Network Firewall",
      "Security Groups"
    ],
    correct: [2],
    explanation: "AWS Network Firewall is a managed network firewall and intrusion detection/prevention service for VPCs. It provides stateful and stateless packet filtering, intrusion prevention (Suricata-compatible rules), and domain/URL filtering deployed at the VPC level to protect entire subnets."
  },
  {
    id: 141,
    domain: "Security & Compliance",
    type: "multiple",
    question: "Which TWO of the following are examples of data and access controls that customers are ALWAYS responsible for under the AWS Shared Responsibility Model?",
    options: [
      "Physical hard drives in AWS data centers",
      "Customer data stored in Amazon S3",
      "The hypervisor layer of Amazon EC2",
      "IAM user credentials and access management",
      "Networking hardware between AWS Regions"
    ],
    correct: [1, 3],
    explanation: "Customer data stored in S3 and IAM user management are always customer responsibilities. The customer controls what data they store, how it is encrypted, and who can access it. IAM management — creating users, assigning permissions, enabling MFA — is always the customer's responsibility. Physical hardware and the hypervisor are always AWS's responsibility."
  },
  {
    id: 142,
    domain: "Security & Compliance",
    type: "single",
    question: "Which IAM best practice helps prevent a single compromised credential from granting unlimited access by requiring multiple people to be involved in high-privilege actions?",
    options: [
      "Multi-Factor Authentication (MFA)",
      "Separation of duties",
      "Principle of least privilege",
      "Access key rotation"
    ],
    correct: [1],
    explanation: "Separation of duties ensures no single person or role has end-to-end control over a critical process — for example, requiring two different IAM roles to approve and execute a production deployment. This reduces the risk of both accidental and malicious actions by any single party."
  },
  {
    id: 143,
    domain: "Security & Compliance",
    type: "single",
    question: "A company uses AWS Organizations and wants to ensure that no member account can disable AWS Security Hub, regardless of that account's administrator permissions. What should they use?",
    options: [
      "IAM policies in each member account",
      "A Service Control Policy (SCP) applied to the organizational root or OU",
      "AWS Config rules at the management account level",
      "AWS CloudTrail with event-based Lambda remediation"
    ],
    correct: [1],
    explanation: "A Service Control Policy (SCP) applied at the organizational root or OU level can deny the securityhub:DisableSecurityHub action across all member accounts. Because SCPs define the maximum permissions, even an account's administrator cannot override the SCP."
  },
  {
    id: 144,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service integrates with AWS Organizations to centrally manage AWS WAF rules, Shield Advanced protections, and Security Groups across all accounts in an organization?",
    options: [
      "AWS Security Hub",
      "AWS Config",
      "AWS Firewall Manager",
      "Amazon GuardDuty"
    ],
    correct: [2],
    explanation: "AWS Firewall Manager is a security management service that allows you to centrally configure and manage firewall rules (AWS WAF, Shield Advanced, Security Groups, Network Firewall policies) across multiple accounts and resources in AWS Organizations, ensuring consistent security policies."
  },
  {
    id: 145,
    domain: "Security & Compliance",
    type: "single",
    question: "What is the PRIMARY purpose of enabling AWS CloudTrail in an AWS account?",
    options: [
      "Monitor resource performance metrics like CPU and memory",
      "Record all API calls made in the account for governance, compliance, and auditing",
      "Detect malicious activity using machine learning",
      "Continuously evaluate resource configurations against compliance rules"
    ],
    correct: [1],
    explanation: "AWS CloudTrail records all API calls made to AWS services — including the caller identity, time, source IP, request parameters, and response. This creates an audit trail for governance, compliance, and security analysis, answering 'who did what, when, and from where.'"
  },
  {
    id: 146,
    domain: "Security & Compliance",
    type: "single",
    question: "A company has a compliance requirement that all PII data stored in S3 must always be encrypted. Which AWS Config managed rule detects S3 buckets that do not enforce server-side encryption?",
    options: [
      "s3-bucket-ssl-requests-only",
      "s3-default-encryption-kms",
      "s3-bucket-server-side-encryption-enabled",
      "s3-bucket-public-read-prohibited"
    ],
    correct: [2],
    explanation: "The 's3-bucket-server-side-encryption-enabled' AWS Config managed rule checks whether S3 buckets have default server-side encryption enabled. Buckets without encryption are flagged as non-compliant, helping ensure all objects stored in S3 are automatically encrypted at rest."
  },
  {
    id: 147,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS approach does AWS recommend for distributing IAM permissions to prevent unauthorized access and support individual accountability?",
    options: [
      "Use a single IAM admin user and share credentials across the team",
      "Create individual IAM users with unique credentials and assign permissions using groups and roles",
      "Assign AdministratorAccess policy to all developers for maximum flexibility",
      "Store root account credentials in a shared password manager"
    ],
    correct: [1],
    explanation: "AWS recommends creating individual IAM users with unique credentials (never sharing credentials), assigning permissions via IAM Groups (common permissions) and IAM Roles (service-to-service access). This enables individual accountability and supports the principle of least privilege."
  },
  {
    id: 148,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service allows an organization to manage access to AWS resources using their corporate Microsoft Active Directory without creating duplicate IAM users for every employee?",
    options: [
      "Amazon Cognito User Pools",
      "AWS IAM Identity Center (formerly AWS SSO)",
      "AWS Directory Service for Microsoft Active Directory",
      "Amazon Cloud Directory"
    ],
    correct: [1],
    explanation: "AWS IAM Identity Center (formerly AWS Single Sign-On) enables centralized SSO access to multiple AWS accounts and business applications. It integrates with Microsoft Active Directory and external SAML/OIDC providers, allowing employees to use their existing corporate credentials to access AWS."
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 3: Cloud Technology and Services  (additional questions 149-187)
  // ────────────────────────────────────────────────────────────────
  {
    id: 149,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A machine learning workload requires a large amount of GPU compute power for model training. Which EC2 instance family is optimized for this use case?",
    options: [
      "General purpose (M family)",
      "Compute optimized (C family)",
      "Memory optimized (R family)",
      "Accelerated computing (P/G family)"
    ],
    correct: [3],
    explanation: "Accelerated computing instances (P, G, Inf, Trn families) use hardware accelerators — GPUs, FPGAs, AWS Trainium — to perform floating-point calculations and deep learning more efficiently than CPUs. They are ideal for ML training, inference, HPC, and graphics workloads."
  },
  {
    id: 150,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "An application requires extremely high disk I/O with very low latency. The data does NOT need to persist if the EC2 instance stops. Which storage option provides the highest I/O performance?",
    options: [
      "Amazon EBS gp3",
      "Amazon EBS io2 Block Express",
      "Amazon EC2 instance store",
      "Amazon EFS"
    ],
    correct: [2],
    explanation: "EC2 instance store provides temporary block storage physically attached to the host computer, delivering the highest I/O performance of any EC2 storage option. However, data is lost when the instance stops, hibernates, or terminates. Ideal for temporary data, buffers, caches, and scratch storage."
  },
  {
    id: 151,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon EBS volume type is designed for I/O-intensive database workloads requiring sub-millisecond latency and up to 256,000 IOPS?",
    options: [
      "gp3 (General Purpose SSD)",
      "st1 (Throughput Optimized HDD)",
      "io2 Block Express",
      "sc1 (Cold HDD)"
    ],
    correct: [2],
    explanation: "EBS io2 Block Express is the highest-performance EBS volume type, offering up to 256,000 IOPS, 4,000 MB/s throughput, and 64 TiB volume size with sub-millisecond latency. Designed for the most critical I/O-intensive applications such as SAP HANA, Oracle, and Microsoft SQL Server."
  },
  {
    id: 152,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which S3 storage class automatically moves data between access tiers based on changing access patterns without performance impact or operational overhead?",
    options: [
      "S3 Standard",
      "S3 Standard-Infrequent Access (S3 Standard-IA)",
      "S3 Intelligent-Tiering",
      "S3 Glacier Instant Retrieval"
    ],
    correct: [2],
    explanation: "S3 Intelligent-Tiering automatically moves objects between tiers based on actual usage. Objects not accessed for 30 days move to Infrequent Access; those not accessed for 90 days move to Archive Instant Access. There are no retrieval fees, making it cost-effective for data with unpredictable access patterns."
  },
  {
    id: 153,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to automatically replicate their S3 bucket content to another AWS Region for disaster recovery. Which S3 feature should they configure?",
    options: [
      "S3 Versioning only",
      "S3 Cross-Region Replication (CRR)",
      "S3 Transfer Acceleration",
      "S3 Lifecycle policies"
    ],
    correct: [1],
    explanation: "S3 Cross-Region Replication (CRR) automatically replicates objects from a source bucket in one Region to a destination bucket in a different Region. It requires versioning on both buckets and is used for compliance, disaster recovery, and reducing latency for geographically distributed users."
  },
  {
    id: 154,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon S3 feature prevents objects from being deleted or overwritten for a fixed period, supporting WORM (Write Once, Read Many) compliance requirements?",
    options: [
      "S3 Versioning",
      "S3 Replication",
      "S3 Object Lock",
      "S3 Lifecycle policies"
    ],
    correct: [2],
    explanation: "S3 Object Lock allows objects to be stored in a WORM model, preventing deletion or overwriting for a defined retention period. It supports Compliance mode (cannot be overridden, even by root) and Governance mode (authorized users can override). Used for regulatory compliance like SEC 17a-4."
  },
  {
    id: 155,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Amazon Aurora is compatible with which two open-source database engines?",
    options: [
      "PostgreSQL and Oracle",
      "MySQL and PostgreSQL",
      "MySQL and Microsoft SQL Server",
      "PostgreSQL and MongoDB"
    ],
    correct: [1],
    explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. Aurora provides up to 5x the performance of standard MySQL and 3x the performance of standard PostgreSQL, with the simplicity and cost-effectiveness of open-source databases."
  },
  {
    id: 156,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS database service is designed for storing and querying highly connected data, such as social networks, recommendation engines, and fraud detection graphs?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Neptune",
      "Amazon DocumentDB"
    ],
    correct: [2],
    explanation: "Amazon Neptune is a fully managed graph database service supporting property graphs (Gremlin) and RDF graphs (SPARQL). It is optimized for storing billions of relationships and querying the graph with millisecond latency, making it ideal for social networks, recommendations, and fraud detection."
  },
  {
    id: 157,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company uses a MongoDB-based application on-premises and wants to migrate to a fully managed AWS service with minimal code changes. Which service is MOST compatible?",
    options: [
      "Amazon DynamoDB",
      "Amazon DocumentDB (with MongoDB compatibility)",
      "Amazon RDS",
      "Amazon Keyspaces (for Apache Cassandra)"
    ],
    correct: [1],
    explanation: "Amazon DocumentDB is a fully managed document database with MongoDB compatibility. It allows migration of MongoDB workloads with minimal code changes, automatically grows storage up to 128 TiB, and provides high availability with six copies of data across three AZs."
  },
  {
    id: 158,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a centralized backup solution to automate and manage backups across multiple AWS services — EC2, RDS, EFS, DynamoDB — from a single place?",
    options: [
      "AWS Storage Gateway",
      "Amazon S3 Lifecycle policies",
      "AWS Backup",
      "Amazon Data Lifecycle Manager"
    ],
    correct: [2],
    explanation: "AWS Backup is a fully managed backup service that centralizes and automates data protection across AWS services. You create backup plans defining frequency, retention, and lifecycle rules. It supports EC2, EBS, RDS, Aurora, DynamoDB, EFS, FSx, and Storage Gateway from a single console."
  },
  {
    id: 159,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed Windows-native shared file system supporting SMB protocol, NTFS, and Active Directory integration for Windows-based workloads?",
    options: [
      "Amazon EFS",
      "Amazon FSx for Windows File Server",
      "Amazon S3",
      "AWS Storage Gateway File Gateway"
    ],
    correct: [1],
    explanation: "Amazon FSx for Windows File Server provides fully managed Windows-native shared file storage with full SMB and NTFS support, Active Directory integration, and DFS. Designed for Windows workloads that require a native Windows file system. Amazon EFS is for Linux-based NFS workloads."
  },
  {
    id: 160,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "An Internet Gateway in a VPC serves which PRIMARY purpose?",
    options: [
      "Routes traffic between subnets within the same VPC",
      "Provides internet connectivity to public subnet resources and performs NAT for instances with public IPs",
      "Allows instances in private subnets to initiate outbound internet connections while remaining unreachable",
      "Connects multiple VPCs together using private IP addresses"
    ],
    correct: [1],
    explanation: "An Internet Gateway (IGW) is a horizontally scaled, redundant VPC component that allows communication between instances in a VPC and the internet. It provides a route table target for internet-routable traffic and performs NAT for instances with assigned public IPv4 addresses."
  },
  {
    id: 161,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company has EC2 instances in a private subnet that need to download software updates from the internet but should NOT be directly reachable from the internet. Which AWS service enables this?",
    options: [
      "Internet Gateway",
      "NAT Gateway",
      "VPC Peering",
      "AWS Direct Connect"
    ],
    correct: [1],
    explanation: "A NAT Gateway allows instances in private subnets to initiate outbound connections to the internet while preventing the internet from initiating connections to those instances. It translates private IPs to the NAT Gateway's public IP for outbound traffic and is managed, highly available, and scales automatically."
  },
  {
    id: 162,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service improves the availability and performance of global applications by routing user traffic to the nearest healthy endpoint using the AWS global network rather than the public internet?",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "AWS Global Accelerator",
      "Elastic Load Balancing"
    ],
    correct: [2],
    explanation: "AWS Global Accelerator uses the AWS global network to route user traffic to the optimal endpoint based on health, geography, and routing policies. Unlike CloudFront (which caches content), Global Accelerator works at the TCP/UDP layer and provides static anycast IP addresses for your application."
  },
  {
    id: 163,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service acts as a cloud router, connecting multiple VPCs and on-premises networks through a central hub to simplify network architecture at scale?",
    options: [
      "VPC Peering",
      "AWS PrivateLink",
      "AWS Transit Gateway",
      "AWS Direct Connect Gateway"
    ],
    correct: [2],
    explanation: "AWS Transit Gateway acts as a central cloud router, allowing you to connect multiple VPCs, AWS accounts, and on-premises networks to a single gateway. It provides a hub-and-spoke model that simplifies network management across hundreds of VPCs, replacing complex meshed VPC peering."
  },
  {
    id: 164,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to expose an internal service to consumers in other AWS accounts without using the public internet or VPC peering. Which networking feature enables this private connectivity?",
    options: [
      "VPC Peering",
      "AWS Transit Gateway",
      "AWS PrivateLink",
      "Internet Gateway"
    ],
    correct: [2],
    explanation: "AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises applications over the Amazon network. It creates an interface VPC endpoint (an ENI in your VPC) that routes to the service privately, without requiring internet gateway, NAT, public IPs, or VPN."
  },
  {
    id: 165,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service acts as the 'front door' for applications, enabling you to create, publish, maintain, monitor, and secure REST and WebSocket APIs at any scale?",
    options: [
      "AWS AppSync",
      "Amazon API Gateway",
      "AWS App Runner",
      "Elastic Load Balancing"
    ],
    correct: [1],
    explanation: "Amazon API Gateway is a fully managed service for creating, publishing, maintaining, monitoring, and securing APIs. It handles traffic management, CORS support, authorization and access control, throttling, monitoring, and API versioning — all without managing any servers."
  },
  {
    id: 166,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables you to coordinate multiple AWS services into serverless workflows using visual state machines, with built-in error handling, retries, and parallel processing?",
    options: [
      "Amazon SQS",
      "Amazon EventBridge",
      "AWS Step Functions",
      "AWS Batch"
    ],
    correct: [2],
    explanation: "AWS Step Functions is a visual workflow service that orchestrates serverless workflows using state machines. States can invoke Lambda, call AWS services, run tasks in parallel, and handle retries and error conditions declaratively, without writing complex orchestration logic."
  },
  {
    id: 167,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables event-driven architectures by routing events from AWS services and SaaS applications to targets based on defined rules, replacing the need for custom polling code?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    correct: [2],
    explanation: "Amazon EventBridge is a serverless event bus that connects applications using data from AWS services, integrated SaaS applications, and custom sources. Events are routed to targets based on rules, powering event-driven architectures and decoupling event producers from consumers."
  },
  {
    id: 168,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed platform for running large-scale parallel batch computing jobs, dynamically provisioning the optimal compute resources automatically?",
    options: [
      "AWS Lambda",
      "Amazon ECS",
      "AWS Batch",
      "AWS Fargate"
    ],
    correct: [2],
    explanation: "AWS Batch dynamically provisions EC2 and Spot Instances based on submitted batch job requirements. It eliminates the need to install and manage batch computing software, letting you focus on analyzing results rather than managing infrastructure for high-scale batch workloads."
  },
  {
    id: 169,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed big data platform for running Apache Spark, Hadoop, and other open-source frameworks to process large datasets?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EMR (Elastic MapReduce)",
      "AWS Glue"
    ],
    correct: [2],
    explanation: "Amazon EMR is a cloud big data platform that runs open-source frameworks like Apache Spark, Hive, HBase, and Flink. It simplifies running large-scale data processing, interactive analytics, and ML on petabytes of data, managing the provisioning and configuration of these frameworks."
  },
  {
    id: 170,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a serverless ETL (Extract, Transform, Load) service for discovering, preparing, and combining data for analytics and machine learning?",
    options: [
      "Amazon EMR",
      "Amazon Kinesis",
      "AWS Glue",
      "Amazon Redshift Spectrum"
    ],
    correct: [2],
    explanation: "AWS Glue is a fully managed, serverless ETL service. It includes a data catalog (to discover and catalog data), ETL jobs (to transform and move data), and crawlers (to automatically infer schema from data sources), eliminating infrastructure management for data preparation."
  },
  {
    id: 171,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to ingest and process real-time streaming data from IoT sensors at scale. Which AWS service is designed for real-time data streaming?",
    options: [
      "Amazon SQS",
      "Amazon Kinesis Data Streams",
      "AWS Batch",
      "Amazon EMR"
    ],
    correct: [1],
    explanation: "Amazon Kinesis Data Streams is a scalable and durable real-time data streaming service that can continuously capture gigabytes of data per second from hundreds of thousands of sources, enabling real-time processing for analytics, monitoring, and IoT telemetry use cases."
  },
  {
    id: 172,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed search and analytics engine based on OpenSearch/Elasticsearch, enabling full-text search, log analytics, and real-time monitoring?",
    options: [
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon OpenSearch Service",
      "AWS Glue"
    ],
    correct: [2],
    explanation: "Amazon OpenSearch Service is a managed service for deploying, operating, and scaling OpenSearch and Elasticsearch clusters. It is used for full-text search, log analytics, application performance monitoring, and clickstream analytics, integrating with OpenSearch Dashboards for visualization."
  },
  {
    id: 173,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to use machine learning to analyze images and detect objects, people, text, and scenes without requiring ML expertise. Which AWS AI service provides this?",
    options: [
      "Amazon Textract",
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon Polly"
    ],
    correct: [2],
    explanation: "Amazon Rekognition is a managed computer vision service that provides image and video analysis — detecting objects, scenes, faces, text, and activities; performing facial comparison; and detecting unsafe content. No ML expertise is required; you call the API and Rekognition returns the analysis."
  },
  {
    id: 174,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS AI service uses machine learning to automatically extract text, key-value pairs, tables, and structured data from scanned documents?",
    options: [
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Comprehend",
      "Amazon Transcribe"
    ],
    correct: [1],
    explanation: "Amazon Textract automatically extracts text, forms, tables, and structured data from scanned documents. Unlike simple OCR, Textract understands document structure and can extract key-value pairs from forms and data from tables, eliminating manual data entry from documents."
  },
  {
    id: 175,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS AI service converts text into lifelike speech using deep learning, supporting dozens of languages and voices for applications like e-learning and IVR?",
    options: [
      "Amazon Transcribe",
      "Amazon Lex",
      "Amazon Polly",
      "Amazon Translate"
    ],
    correct: [2],
    explanation: "Amazon Polly uses deep learning to synthesize natural-sounding human speech from text (text-to-speech). It supports dozens of languages and voices, including neural voices. Use cases include e-learning, accessibility features, and IVR systems."
  },
  {
    id: 176,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed machine learning platform that covers the entire ML workflow — data labeling, preparation, model building, training, tuning, and deployment?",
    options: [
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon SageMaker",
      "AWS Deep Learning AMIs"
    ],
    correct: [2],
    explanation: "Amazon SageMaker is a fully managed service covering the entire ML workflow: data labeling, data preparation, model building, training, tuning, hosting, and monitoring. It provides built-in algorithms, Jupyter notebooks, and managed infrastructure, eliminating the heavy lifting of ML infrastructure management."
  },
  {
    id: 177,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS developer tool provides a fully managed, highly available private Git repository service that integrates with other AWS developer tools?",
    options: [
      "AWS CodeBuild",
      "AWS CodeCommit",
      "AWS CodeDeploy",
      "AWS CodePipeline"
    ],
    correct: [1],
    explanation: "AWS CodeCommit is a fully managed source control service that hosts secure, private Git repositories. It eliminates the need to operate your own source control system and integrates with CodeBuild, CodeDeploy, and CodePipeline for CI/CD pipelines."
  },
  {
    id: 178,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed continuous integration service that compiles source code, runs tests, and produces deployable software packages without managing build servers?",
    options: [
      "AWS CodeCommit",
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodePipeline"
    ],
    correct: [1],
    explanation: "AWS CodeBuild is a fully managed CI service that compiles source code, runs tests, and produces deployment-ready packages. It scales continuously, processes multiple builds concurrently, and you pay only for the build time consumed — no build servers to provision or manage."
  },
  {
    id: 179,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service automates software deployments to EC2 instances, Lambda functions, ECS services, and on-premises servers with strategies like blue/green and rolling?",
    options: [
      "AWS CodeCommit",
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CloudFormation"
    ],
    correct: [2],
    explanation: "AWS CodeDeploy is a fully managed deployment service that automates software deployments to EC2, Lambda, ECS, and on-premises servers. It supports blue/green and rolling deployment strategies, enables rollback on failures, and requires no downtime for deployments."
  },
  {
    id: 180,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service orchestrates CI/CD pipelines with stages for source, build, test, and deploy — triggering automatically on each code change?",
    options: [
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodePipeline",
      "AWS CloudFormation"
    ],
    correct: [2],
    explanation: "AWS CodePipeline is a fully managed CI/CD orchestration service that models release processes as pipelines. It triggers automatically on code changes and integrates with CodeCommit, CodeBuild, CodeDeploy, CloudFormation, and third-party tools like GitHub and Jenkins."
  },
  {
    id: 181,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides an operations hub for centrally managing EC2 instances and on-premises servers — including patch management, run commands, and configuration management?",
    options: [
      "AWS CloudFormation",
      "Amazon CloudWatch",
      "AWS Systems Manager",
      "AWS Config"
    ],
    correct: [2],
    explanation: "AWS Systems Manager is an operations hub providing visibility and control of infrastructure on AWS and on-premises. Capabilities include Session Manager (secure shell access without SSH), Patch Manager (automated patching), Run Command (execute commands remotely), and Parameter Store (configuration data)."
  },
  {
    id: 182,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon CloudWatch feature allows you to collect, search, and analyze log data from AWS services, EC2 instances, and applications in real time?",
    options: [
      "CloudWatch Metrics",
      "CloudWatch Alarms",
      "CloudWatch Logs",
      "CloudWatch Events"
    ],
    correct: [2],
    explanation: "Amazon CloudWatch Logs centralizes logs from systems, applications, and AWS services. You can monitor logs in real time, search and filter log data, create metric filters, and set alarms. CloudWatch Logs Insights provides interactive query capabilities for log analysis."
  },
  {
    id: 183,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "What is an Amazon Machine Image (AMI) used for in AWS?",
    options: [
      "It provides DNS resolution for EC2 instances",
      "It is a pre-configured template containing the OS, software, and settings used to launch EC2 instances",
      "It manages IAM permissions for EC2 instances",
      "It is a monitoring agent installed on EC2 instances"
    ],
    correct: [1],
    explanation: "An Amazon Machine Image (AMI) is a template containing a software configuration (OS, application server, applications) used to launch EC2 instances. You can use AWS-provided AMIs, Marketplace AMIs, or create custom AMIs by capturing a configured EC2 instance state for consistent, repeatable deployments."
  },
  {
    id: 184,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a simple way to run containerized web applications and APIs without infrastructure expertise, with automatic scaling and load balancing?",
    options: [
      "Amazon ECS",
      "Amazon EKS",
      "AWS App Runner",
      "AWS Elastic Beanstalk"
    ],
    correct: [2],
    explanation: "AWS App Runner is a fully managed service for deploying containerized web applications and APIs at scale without infrastructure expertise. You provide a container image or source code, and App Runner handles building, deploying, and scaling your application with built-in load balancing and TLS termination."
  },
  {
    id: 185,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS feature accelerates uploading large files to Amazon S3 by routing uploads through CloudFront's globally distributed edge locations?",
    options: [
      "S3 Cross-Region Replication",
      "S3 Transfer Acceleration",
      "AWS DataSync",
      "AWS Snowball"
    ],
    correct: [1],
    explanation: "Amazon S3 Transfer Acceleration uses CloudFront's globally distributed edge locations to accelerate uploads to S3 over long distances. Users upload to the nearest edge location, and data travels to S3 over AWS's optimized network backbone. Most beneficial when uploading to a centralized bucket from around the world."
  },
  {
    id: 186,
    domain: "Cloud Technology & Services",
    type: "multiple",
    question: "Which TWO AWS services are commonly used together to decouple application components and enable asynchronous, loosely coupled communication?",
    options: [
      "Amazon SQS",
      "Amazon RDS",
      "Amazon SNS",
      "Amazon EBS",
      "AWS CloudFormation"
    ],
    correct: [0, 2],
    explanation: "Amazon SQS (point-to-point message queuing for asynchronous processing) and Amazon SNS (pub/sub messaging to fan out messages to multiple subscribers) are the primary AWS services for decoupling application components. They enable resilient, loosely coupled architectures where components can operate independently."
  },
  {
    id: 187,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables customers to create a private, isolated virtual network on AWS with full control over IP addressing, subnets, route tables, and network gateways?",
    options: [
      "AWS Direct Connect",
      "Amazon Route 53",
      "Amazon Virtual Private Cloud (VPC)",
      "AWS Transit Gateway"
    ],
    correct: [2],
    explanation: "Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS cloud where you launch resources in a virtual network you define. You have full control over your virtual networking environment, including IP address ranges, subnets, route tables, and network gateways."
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 4: Billing, Pricing and Support  (additional questions 188-200)
  // ────────────────────────────────────────────────────────────────
  {
    id: 188,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS Support plan provides email-based technical support during business hours, designed for development and testing in non-production environments?",
    options: [
      "Basic Support",
      "Developer Support",
      "Business Support",
      "Enterprise On-Ramp Support"
    ],
    correct: [1],
    explanation: "Developer Support provides email-based technical support during business hours with response times of less than 24 hours for general guidance and 12 hours for impaired system cases. It does not include phone or chat access to Cloud Support Engineers and is designed for development/test environments."
  },
  {
    id: 189,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS Support plan provides 24/7 phone, chat, and email access to Cloud Support Engineers with less than 1-hour response for production system-down cases?",
    options: [
      "Developer Support",
      "Business Support",
      "Enterprise On-Ramp Support",
      "Enterprise Support"
    ],
    correct: [1],
    explanation: "Business Support provides 24/7 phone, chat, and email support with less than 1-hour response for production system-down cases, full Trusted Advisor checks, access to Infrastructure Event Management (for a fee), and AWS Health API access. Suitable for production workloads."
  },
  {
    id: 190,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which EC2 purchasing option provides a physical server fully dedicated to a single customer, offering visibility into host-level details and supporting BYOL (Bring Your Own License) software?",
    options: [
      "Dedicated Instances",
      "Dedicated Hosts",
      "Reserved Instances",
      "Spot Instances"
    ],
    correct: [1],
    explanation: "Dedicated Hosts are physical EC2 servers dedicated to your use, providing visibility into and control over instance placement on the host. They support BYOL software licenses (Windows Server, SQL Server) bound to physical cores or sockets. Dedicated Instances run on dedicated hardware but without host-level visibility."
  },
  {
    id: 191,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which Reserved Instance type allows you to change the instance family, OS, tenancy, and payment option during the reservation term in exchange for a slightly lower discount?",
    options: [
      "Standard Reserved Instances",
      "Convertible Reserved Instances",
      "Scheduled Reserved Instances",
      "Capacity Reserved Instances"
    ],
    correct: [1],
    explanation: "Convertible Reserved Instances allow changes to instance family, OS, scope, and tenancy during the term in exchange for a slightly lower discount (up to ~54% vs up to ~72% for Standard). Useful when you expect needs to change but still want long-term cost savings."
  },
  {
    id: 192,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS pricing model allows customers to pay for compute capacity by the second with no long-term commitments, providing maximum flexibility for unpredictable workloads?",
    options: [
      "Reserved Instances",
      "Savings Plans",
      "On-Demand Instances",
      "Spot Instances"
    ],
    correct: [2],
    explanation: "On-Demand pricing lets you pay by the hour or second (minimum 60 seconds) with no long-term commitments or upfront payments. Ideal for irregular workloads, development/testing, and applications that cannot be interrupted — though it carries the highest per-unit cost compared to commitment-based pricing."
  },
  {
    id: 193,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS cost management tool provides the most granular cost and usage data, deliverable to S3 for analysis with Athena or QuickSight?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report (CUR)",
      "AWS Pricing Calculator"
    ],
    correct: [2],
    explanation: "The AWS Cost and Usage Report (CUR) provides the most comprehensive cost and usage data available, including metadata about services, pricing, and reservations. Delivered to S3 in hourly or daily granularity, it can be analyzed with Athena, Redshift, or QuickSight for custom cost analysis."
  },
  {
    id: 194,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company wants to track AWS costs by project and department by labeling resources with metadata. Which AWS feature enables cost attribution in billing reports?",
    options: [
      "AWS Organizations OUs",
      "AWS Cost Allocation Tags",
      "AWS Budgets alerts",
      "AWS Cost Explorer filters"
    ],
    correct: [1],
    explanation: "Cost Allocation Tags let you label AWS resources with key-value pairs (e.g., Project=Ecommerce, Department=Finance). After enabling cost allocation tags in the Billing console, tagged costs appear as separate categories in Cost Explorer, CUR, and Budgets reports, enabling cost attribution to specific teams or projects."
  },
  {
    id: 195,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service provides an online catalog where customers can find, test, buy, and deploy third-party software, SaaS products, and professional services that run on AWS?",
    options: [
      "AWS Partner Network (APN)",
      "AWS Marketplace",
      "AWS Service Catalog",
      "AWS Direct Connect partners"
    ],
    correct: [1],
    explanation: "AWS Marketplace is a curated digital catalog of third-party software, data products, and services for AWS. Customers can find, buy, deploy, and manage solutions from thousands of ISVs with billing consolidated through the AWS bill, including one-click deployment via preconfigured AMIs and SaaS offerings."
  },
  {
    id: 196,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS Savings Plan type offers the MOST flexibility, applying to any EC2 instance family, size, and Region, as well as AWS Lambda and AWS Fargate?",
    options: [
      "EC2 Instance Savings Plans",
      "Compute Savings Plans",
      "SageMaker Savings Plans",
      "Standard Reserved Instances"
    ],
    correct: [1],
    explanation: "Compute Savings Plans are the most flexible savings commitment, automatically applying to any EC2 instance regardless of family, size, Region, OS, or tenancy, plus Lambda and Fargate. They offer up to 66% savings vs On-Demand. EC2 Instance Savings Plans offer deeper discounts (up to 72%) but only for a specific instance family in a Region."
  },
  {
    id: 197,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company receives a single monthly AWS bill covering charges from all accounts across their organization. Which AWS Organizations feature enables this?",
    options: [
      "Service Control Policies",
      "AWS Control Tower",
      "Consolidated Billing",
      "AWS Config Aggregator"
    ],
    correct: [2],
    explanation: "Consolidated Billing combines AWS usage and charges from all member accounts into a single bill paid by the management account. This simplifies billing management and enables volume pricing benefits because usage from all accounts is aggregated for tiered pricing discounts."
  },
  {
    id: 198,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS Free Tier offer type provides services that are always free to all AWS customers with no expiration date, such as AWS Lambda's 1 million free requests per month?",
    options: [
      "12-month free tier",
      "Always free",
      "Free trial",
      "Free tier promotional credits"
    ],
    correct: [1],
    explanation: "The AWS Free Tier includes three offer types: (1) Always Free — no expiration, available to all customers (e.g., Lambda 1M requests/month); (2) 12-month free — available for 12 months after account creation (e.g., EC2 t2.micro); and (3) Free trials — short-term promotions for specific services."
  },
  {
    id: 199,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS support resource provides a community-based Q&A platform where customers can ask technical questions and get answers from AWS experts and the broader community?",
    options: [
      "AWS IQ",
      "AWS re:Post (formerly AWS Developer Forums)",
      "AWS Knowledge Center",
      "AWS Premium Support"
    ],
    correct: [1],
    explanation: "AWS re:Post (formerly the AWS Developer Forums) is a community-based Q&A service where customers can ask technical questions and get answers from AWS experts and community members. It is accessible to all AWS customers including those on the Basic (free) support plan."
  },
  {
    id: 200,
    domain: "Billing, Pricing & Support",
    type: "multiple",
    question: "Which TWO of the following capabilities are included in the AWS Business Support plan but NOT in the AWS Developer Support plan?",
    options: [
      "Access to AWS documentation and whitepapers",
      "24/7 phone and chat access to Cloud Support Engineers",
      "Full access to all AWS Trusted Advisor checks",
      "Access to AWS re:Post community forums",
      "Email support during business hours"
    ],
    correct: [1, 2],
    explanation: "Business Support adds: 24/7 phone, chat, and email access to Cloud Support Engineers; full access to ALL Trusted Advisor checks; and less than 1-hour response for production-down cases. Developer Support provides only 7 core Trusted Advisor checks and email support during business hours with a 12-hour response for impaired systems."
  },

  // ────────────────────────────────────────────────────────────────
  // BATCH 2 — DOMAIN 1: Cloud Concepts (ids 201–248)
  // ────────────────────────────────────────────────────────────────
  {
    id: 201,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud deployment model runs infrastructure exclusively on a company's own premises and is managed internally?",
    options: ["Public cloud", "Hybrid cloud", "Private cloud", "Community cloud"],
    correct: [2],
    explanation: "A private cloud is deployed and operated solely for one organization, either on-premises or in a dedicated hosted environment. It offers full control but requires the company to purchase and manage all hardware."
  },
  {
    id: 202,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to keep sensitive workloads on-premises while also using AWS for burst capacity. Which deployment model does this describe?",
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Multi-cloud"],
    correct: [2],
    explanation: "A hybrid cloud combines on-premises (or private cloud) infrastructure with a public cloud, allowing data and applications to move between them. This is ideal for compliance requirements or latency-sensitive workloads that must stay on-premises."
  },
  {
    id: 203,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Cloud advantage describes the ability to deploy applications to multiple AWS Regions around the world in minutes?",
    options: ["Massive economies of scale", "Stop guessing capacity", "Go global in minutes", "Increase speed and agility"],
    correct: [2],
    explanation: "'Go global in minutes' is one of the six key advantages of cloud computing. AWS's global infrastructure lets companies deploy applications close to end users worldwide with just a few clicks, reducing latency and improving user experience."
  },
  {
    id: 204,
    domain: "Cloud Concepts",
    type: "single",
    question: "Because AWS aggregates usage from hundreds of thousands of customers, it can achieve lower pay-as-you-go prices. Which cloud benefit does this represent?",
    options: ["Trade fixed expense for variable expense", "Massive economies of scale", "Stop guessing capacity", "Increase speed and agility"],
    correct: [1],
    explanation: "AWS's massive scale allows it to purchase hardware and operate data centers far more cheaply than a single company could. These savings are passed on to customers as lower variable pricing — this is the 'massive economies of scale' advantage."
  },
  {
    id: 205,
    domain: "Cloud Concepts",
    type: "single",
    question: "A developer can spin up a new test environment in minutes on AWS instead of waiting weeks for hardware procurement. Which cloud benefit does this BEST illustrate?",
    options: ["Go global in minutes", "Stop guessing capacity", "Increase speed and agility", "Trade fixed expense for variable expense"],
    correct: [2],
    explanation: "'Increase speed and agility' refers to the ability to rapidly provision new resources, experiment quickly, and reduce the time to bring new ideas to market. In the cloud, what used to take weeks now takes minutes."
  },
  {
    id: 206,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following is an example of Infrastructure as a Service (IaaS)?",
    options: ["AWS Lambda", "Amazon RDS", "Amazon EC2", "AWS Elastic Beanstalk"],
    correct: [2],
    explanation: "Amazon EC2 provides raw virtual machines — compute, networking, and storage — where the customer manages the OS and everything above. This is IaaS. Lambda is FaaS, RDS is PaaS/managed database, and Elastic Beanstalk is PaaS."
  },
  {
    id: 207,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which service model provides a complete application delivered over the internet, with the provider managing all underlying infrastructure, middleware, and the application itself?",
    options: ["IaaS", "PaaS", "SaaS", "FaaS"],
    correct: [2],
    explanation: "Software as a Service (SaaS) delivers a fully managed application over the internet. The customer only manages their data and user settings. Examples include Salesforce, Google Workspace, and AWS services like Amazon WorkMail."
  },
  {
    id: 208,
    domain: "Cloud Concepts",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, which of the following is AWS responsible for?",
    options: ["Patching the guest operating system on EC2", "Managing IAM user permissions", "Physical security of data center facilities", "Encrypting application data"],
    correct: [2],
    explanation: "AWS is responsible for 'security OF the cloud' — the physical infrastructure including data centers, hardware, networking, and the hypervisor. Customers are responsible for 'security IN the cloud': OS patches, IAM, and data encryption."
  },
  {
    id: 209,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which pillar of the AWS Well-Architected Framework focuses on the ability of a system to recover from failures and meet business continuity requirements?",
    options: ["Performance Efficiency", "Operational Excellence", "Reliability", "Cost Optimization"],
    correct: [2],
    explanation: "The Reliability pillar covers designing systems that automatically recover from failures, dynamically acquire resources to meet demand, and mitigate disruptions. It includes fault tolerance, disaster recovery, and backup strategies."
  },
  {
    id: 210,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which pillar of the AWS Well-Architected Framework focuses on using resources efficiently to meet system requirements at the lowest possible cost?",
    options: ["Reliability", "Security", "Cost Optimization", "Sustainability"],
    correct: [2],
    explanation: "The Cost Optimization pillar helps organizations avoid unnecessary expenses by right-sizing resources, using reserved capacity, and leveraging managed services. It includes understanding spending patterns and selecting the most cost-effective options."
  },
  {
    id: 211,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to design its AWS workload so that a failure in one Availability Zone does not affect the entire application. Which design principle does this represent?",
    options: ["Design for failure", "Implement elasticity", "Decouple components", "Optimize for cost"],
    correct: [0],
    explanation: "'Design for failure' (or 'assume everything fails') is a key cloud design principle. Deploying across multiple AZs ensures high availability — if one zone fails, traffic automatically shifts to healthy zones."
  },
  {
    id: 212,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Well-Architected Framework pillar includes practices such as tracing requests, monitoring metrics, and automating responses to operational events?",
    options: ["Security", "Reliability", "Performance Efficiency", "Operational Excellence"],
    correct: [3],
    explanation: "Operational Excellence focuses on running and monitoring systems to deliver business value and continually improve supporting processes. Key practices include automating changes, responding to events, and defining standards for daily operations."
  },
  {
    id: 213,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which term describes the AWS concept of automatically adding or removing resources based on current demand?",
    options: ["High availability", "Fault tolerance", "Elasticity", "Durability"],
    correct: [2],
    explanation: "Elasticity is the ability to automatically scale resources up or down in response to demand. Auto Scaling groups are a primary AWS mechanism for elasticity, ensuring you have exactly the capacity you need at any point in time."
  },
  {
    id: 214,
    domain: "Cloud Concepts",
    type: "single",
    question: "What does 'high availability' mean in the context of AWS cloud architecture?",
    options: ["A system that never has any downtime", "A system designed to minimize downtime and remain operational despite failures", "A system that scales infinitely", "A system that costs the least to operate"],
    correct: [1],
    explanation: "High availability means designing systems to minimize downtime by using redundancy and automatic failover. It does not mean zero downtime (that is fault tolerance), but rather that the system can quickly recover or redirect traffic when components fail."
  },
  {
    id: 215,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes the concept of 'fault tolerance' in AWS?",
    options: ["The ability to scale resources on demand", "The ability to continue operating with zero downtime even when components fail", "The ability to deploy globally in minutes", "The ability to pay only for what you use"],
    correct: [1],
    explanation: "Fault tolerance means a system continues to operate correctly even when one or more of its components fail — with zero downtime. This is stricter than high availability, which allows brief interruptions. AWS achieves this through redundant, distributed components."
  },
  {
    id: 216,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS concept refers to the long-term durability of data stored in services like Amazon S3, expressed as the probability that data will not be lost?",
    options: ["Availability", "Elasticity", "Durability", "Resilience"],
    correct: [2],
    explanation: "Durability is the probability that data remains intact over a long period. Amazon S3 Standard is designed for 99.999999999% (11 nines) durability by redundantly storing data across multiple devices in multiple facilities."
  },
  {
    id: 217,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "Which of the following are advantages of using AWS over traditional on-premises infrastructure? (Select TWO)",
    options: ["Capital expenses replaced by variable operating expenses", "Full control over physical hardware", "Ability to go global in minutes", "Unlimited free storage"],
    correct: [0, 2],
    explanation: "Two key AWS advantages: (1) Trading CapEx for OpEx — pay only for what you use, no upfront hardware costs. (2) Global deployment in minutes — AWS Regions let you deploy close to users worldwide instantly. Full hardware control and free storage are not AWS advantages."
  },
  {
    id: 218,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud computing model allows developers to focus solely on writing code without managing servers, OS, or runtime environments?",
    options: ["IaaS", "PaaS", "SaaS", "Serverless / FaaS"],
    correct: [3],
    explanation: "Serverless / Function as a Service (FaaS) — exemplified by AWS Lambda — abstracts all infrastructure. Developers only write code; AWS handles provisioning, scaling, patching, and availability automatically."
  },
  {
    id: 219,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company is evaluating the Total Cost of Ownership (TCO) of moving to AWS. Which cost would be ELIMINATED when migrating from on-premises to the cloud?",
    options: ["Software licensing fees", "Data transfer costs", "Hardware procurement and data center facility costs", "Application development costs"],
    correct: [2],
    explanation: "TCO analysis shows that moving to the cloud eliminates costs associated with purchasing servers, networking hardware, data center space, power, and cooling. AWS absorbs these infrastructure costs and spreads them across customers."
  },
  {
    id: 220,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS tool helps customers estimate the cost savings of migrating on-premises workloads to AWS by comparing total cost of ownership?",
    options: ["AWS Pricing Calculator", "AWS Cost Explorer", "AWS Migration Evaluator", "AWS Budgets"],
    correct: [2],
    explanation: "AWS Migration Evaluator (formerly TSO Logic) provides a data-driven business case for cloud migration by analyzing on-premises infrastructure and comparing it to equivalent AWS costs. AWS Pricing Calculator estimates future AWS costs but does not compare on-premises TCO."
  },
  {
    id: 221,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes an AWS Region?",
    options: ["A single data center operated by AWS", "A collection of one or more Availability Zones in a geographic area", "A set of edge locations used for content delivery", "A dedicated connection between on-premises and AWS"],
    correct: [1],
    explanation: "An AWS Region is a geographic area containing two or more isolated Availability Zones. Each AZ consists of one or more data centers. Regions are separate from each other to provide fault isolation and compliance boundaries."
  },
  {
    id: 222,
    domain: "Cloud Concepts",
    type: "single",
    question: "What is an AWS Availability Zone?",
    options: ["A global content delivery network location", "One or more discrete data centers with redundant power, networking, and connectivity within a Region", "A separate billing account for different teams", "A virtual private network connection"],
    correct: [1],
    explanation: "An Availability Zone (AZ) is one or more physical data centers within an AWS Region with independent power, cooling, and networking. AZs within a Region are connected via low-latency links, enabling high-availability architectures."
  },
  {
    id: 223,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS infrastructure component is used to cache content closer to end users to reduce latency?",
    options: ["Availability Zone", "AWS Region", "AWS Edge Location", "AWS Local Zone"],
    correct: [2],
    explanation: "AWS Edge Locations are sites used by Amazon CloudFront (CDN) and other services like Route 53 to cache content and process requests closer to end users. There are hundreds of edge locations worldwide, far more than the number of Regions."
  },
  {
    id: 224,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company needs to run a workload with extremely low latency requirements in a specific city that does not have an AWS Region. Which AWS infrastructure option should they consider?",
    options: ["AWS Outposts", "AWS Local Zones", "AWS Wavelength", "AWS Edge Locations"],
    correct: [1],
    explanation: "AWS Local Zones place compute, storage, and database services closer to large population centers where no full AWS Region exists. They are extensions of a Region, ideal for latency-sensitive workloads like media rendering or real-time gaming."
  },
  {
    id: 225,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS service extends AWS infrastructure and services to a customer's on-premises data center?",
    options: ["AWS Direct Connect", "AWS Local Zones", "AWS Outposts", "AWS Snowball"],
    correct: [2],
    explanation: "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center or on-premises facility. It is ideal for workloads that require low latency to on-premises systems or that must remain on-premises for data residency reasons."
  },
  {
    id: 226,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS design principle recommends building systems where individual components do not depend directly on each other, communicating instead through queues or APIs?",
    options: ["Design for failure", "Implement elasticity", "Decouple components", "Think parallel"],
    correct: [2],
    explanation: "Decoupling means components interact through loosely coupled interfaces (queues, APIs, event buses) rather than direct calls. If one component fails or scales, it does not cascade failures to others. SQS is a common tool for decoupling in AWS architectures."
  },
  {
    id: 227,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which pillar of the AWS Well-Architected Framework addresses protecting data, systems, and assets through risk assessments and mitigation strategies?",
    options: ["Reliability", "Operational Excellence", "Security", "Performance Efficiency"],
    correct: [2],
    explanation: "The Security pillar covers identity and access management, detective controls, infrastructure protection, data protection, and incident response. It encourages applying security at every layer and automating security best practices."
  },
  {
    id: 228,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which pillar of the AWS Well-Architected Framework focuses on using computing resources efficiently to meet system requirements and maintaining efficiency as demand changes?",
    options: ["Cost Optimization", "Reliability", "Performance Efficiency", "Sustainability"],
    correct: [2],
    explanation: "Performance Efficiency focuses on selecting the right resource types and sizes, monitoring performance, and making evidence-based decisions to maintain efficiency. This includes using serverless architectures and selecting the right database type for each workload."
  },
  {
    id: 229,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Well-Architected Framework pillar was added to address the long-term environmental impact of cloud workloads?",
    options: ["Cost Optimization", "Sustainability", "Operational Excellence", "Reliability"],
    correct: [1],
    explanation: "The Sustainability pillar (added in 2021) focuses on minimizing the environmental impact of running cloud workloads. Best practices include right-sizing resources, using managed services, and selecting Regions with renewable energy sources."
  },
  {
    id: 230,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "Which of the following are characteristics of cloud computing according to the NIST definition? (Select TWO)",
    options: ["On-demand self-service", "Fixed monthly billing regardless of usage", "Broad network access", "Dedicated physical hardware for each customer"],
    correct: [0, 2],
    explanation: "NIST defines five essential cloud characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. On-demand self-service and broad network access are two of these. Fixed billing and dedicated hardware per customer are not cloud characteristics."
  },
  {
    id: 231,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes 'economies of scale' as an AWS cloud benefit?",
    options: ["Users can scale their infrastructure up and down as needed", "AWS passes cost savings from aggregated usage of millions of customers to users as lower prices", "Companies can deploy to multiple regions simultaneously", "Organizations stop paying for idle capacity"],
    correct: [1],
    explanation: "Because AWS aggregates usage across hundreds of thousands of customers, it achieves higher purchasing efficiencies. These savings translate to lower pay-as-you-go prices. Individual customers benefit from the same per-unit cost advantages that only very large enterprises could previously achieve."
  },
  {
    id: 232,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company's website experiences unpredictable traffic spikes. Instead of provisioning servers for peak load, the company wants to pay only for actual usage. Which cloud concept BEST describes this approach?",
    options: ["High availability", "Elasticity", "Durability", "Multi-tenancy"],
    correct: [1],
    explanation: "Elasticity allows the system to automatically add capacity during spikes and remove it when demand drops, paying only for what is actually used. This eliminates the need to over-provision for peak demand."
  },
  {
    id: 233,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following is a customer responsibility under the AWS Shared Responsibility Model when running Amazon EC2 instances?",
    options: ["Maintaining network infrastructure hardware", "Patching the hypervisor", "Patching the guest operating system", "Physical security of the data center"],
    correct: [2],
    explanation: "For EC2 (IaaS), the customer is responsible for everything above the hypervisor: OS patching, application security, firewall rules, and data encryption. AWS manages the physical hardware, hypervisor, and networking infrastructure."
  },
  {
    id: 234,
    domain: "Cloud Concepts",
    type: "single",
    question: "For a managed service like Amazon RDS, which task does AWS handle that the customer would handle on a self-managed database on EC2?",
    options: ["Creating database schemas", "Managing database user credentials", "Patching the database engine software", "Writing SQL queries"],
    correct: [2],
    explanation: "With Amazon RDS (a managed service), AWS handles database engine patching, backups, hardware provisioning, and OS maintenance. The customer is still responsible for schema design, user permissions, and query tuning — but not the underlying engine patching."
  },
  {
    id: 235,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud deployment model is BEST for a company that needs full control over its infrastructure but wants the flexibility to burst into AWS during high-demand periods?",
    options: ["Public cloud only", "Private cloud only", "Hybrid cloud", "Community cloud"],
    correct: [2],
    explanation: "Hybrid cloud combines on-premises (private) infrastructure with public cloud. This model gives companies full control and data residency for sensitive workloads while allowing them to burst to AWS when demand exceeds on-premises capacity."
  },
  {
    id: 236,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following actions helps a company 'stop guessing capacity' when migrating to AWS?",
    options: ["Purchasing Reserved Instances for three years", "Using Auto Scaling to automatically adjust capacity based on actual demand", "Deploying resources in multiple Regions", "Using AWS Direct Connect for private connectivity"],
    correct: [1],
    explanation: "Auto Scaling eliminates the need to guess peak capacity. Resources scale out when demand rises and scale in when it drops, ensuring the right capacity at all times without over-provisioning or under-provisioning."
  },
  {
    id: 237,
    domain: "Cloud Concepts",
    type: "single",
    question: "What is the primary benefit of AWS's pay-as-you-go pricing model compared to traditional on-premises infrastructure?",
    options: ["It guarantees a fixed monthly cost", "It converts large upfront capital expenditures into smaller ongoing operational expenses", "It eliminates all infrastructure costs", "It provides free tier access indefinitely"],
    correct: [1],
    explanation: "Pay-as-you-go converts CapEx (buying servers) to OpEx (paying for usage). This improves cash flow, removes financial risk of over-buying, and aligns costs with actual business value delivered."
  },
  {
    id: 238,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS service provides a framework and set of best practices to help cloud architects build secure, high-performing, resilient, and efficient infrastructure?",
    options: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Config", "AWS Service Catalog"],
    correct: [1],
    explanation: "The AWS Well-Architected Tool reviews workloads against the six pillars of the Well-Architected Framework, identifies high-risk issues, and provides improvement guidance. Trusted Advisor gives real-time recommendations but is not the formal Well-Architected review tool."
  },
  {
    id: 239,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes AWS's global infrastructure from largest to smallest scope?",
    options: ["Edge Location > Availability Zone > Region", "Region > Availability Zone > Edge Location (by hierarchy, not count)", "Availability Zone > Region > Edge Location", "Region > Edge Location > Availability Zone"],
    correct: [1],
    explanation: "Hierarchy: Regions are the largest geographic units, each containing multiple Availability Zones. Edge Locations are separate from this hierarchy — they are CDN/DNS PoPs. There are more edge locations than Regions or AZs, but in the infrastructure hierarchy, Region > AZ."
  },
  {
    id: 240,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to run workloads in AWS but must ensure data never leaves a specific country due to regulatory requirements. Which AWS infrastructure feature helps meet this requirement?",
    options: ["Availability Zones", "AWS Regions", "Edge Locations", "AWS Local Zones"],
    correct: [1],
    explanation: "AWS data does not replicate across Regions automatically unless customers explicitly configure cross-region replication. By choosing a Region within the required country, customers can ensure their data stays within that country's borders for compliance."
  },
  {
    id: 241,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which principle of cloud architecture recommends testing recovery procedures regularly and automating recovery to reduce risk during actual failures?",
    options: ["Implement elasticity", "Test recovery procedures", "Decouple components", "Design for failure"],
    correct: [1],
    explanation: "Under the Reliability pillar of the Well-Architected Framework, 'Test recovery procedures' means regularly running tests (like chaos engineering or DR drills) and automating failover so that recovery is proven before a real incident occurs."
  },
  {
    id: 242,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud model provides a shared infrastructure used by several organizations with common concerns such as security, compliance, or jurisdiction?",
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
    correct: [3],
    explanation: "Community cloud is a less common model where infrastructure is shared among several organizations with common concerns (e.g., government agencies sharing a FedRAMP-compliant cloud, or healthcare organizations sharing HIPAA infrastructure)."
  },
  {
    id: 243,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which term describes the AWS practice of replacing failed resources automatically rather than repairing them — for example, terminating an unhealthy EC2 instance and launching a new one?",
    options: ["Immutable infrastructure", "Patching in place", "Vertical scaling", "Stateful recovery"],
    correct: [0],
    explanation: "Immutable infrastructure means replacing components rather than modifying them in-place. In AWS, Auto Scaling can terminate unhealthy instances and launch fresh ones from an AMI. This improves consistency and reduces configuration drift."
  },
  {
    id: 244,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    options: ["Cost Optimization", "Speed and Agility", "Security", "Global Deployment"],
    correct: [0, 2],
    explanation: "The six pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. 'Speed and Agility' and 'Global Deployment' are cloud benefits, not Well-Architected pillars."
  },
  {
    id: 245,
    domain: "Cloud Concepts",
    type: "single",
    question: "AWS allows customers to increase resources (like CPU and RAM) within a single instance to handle more load. What is this type of scaling called?",
    options: ["Horizontal scaling", "Vertical scaling", "Elastic scaling", "Auto scaling"],
    correct: [1],
    explanation: "Vertical scaling (scaling up/down) means increasing or decreasing the size of a single resource (e.g., moving from t3.medium to t3.xlarge). Horizontal scaling (scaling out/in) adds or removes instances. AWS supports both, but horizontal is preferred for fault tolerance."
  },
  {
    id: 246,
    domain: "Cloud Concepts",
    type: "single",
    question: "Adding more EC2 instances behind a load balancer to handle increased traffic is an example of which scaling strategy?",
    options: ["Vertical scaling", "Horizontal scaling", "Scheduled scaling", "Manual scaling"],
    correct: [1],
    explanation: "Horizontal scaling (scaling out) adds more instances to distribute load. Combined with a load balancer, this improves both capacity and fault tolerance. It is the preferred cloud-native approach as it avoids single points of failure."
  },
  {
    id: 247,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following statements about AWS Regions is CORRECT?",
    options: ["All AWS services are available in every Region", "AWS Regions are connected by the public internet only", "Each AWS Region is isolated from other Regions to achieve fault tolerance", "An AWS Region consists of a single data center"],
    correct: [2],
    explanation: "AWS Regions are geographically isolated. A failure in one Region does not automatically affect others. Not all services are available in every Region. Regions are connected via the AWS global network backbone, not just the public internet. Each Region has multiple AZs (data centers)."
  },
  {
    id: 248,
    domain: "Cloud Concepts",
    type: "single",
    question: "In a loosely coupled AWS architecture, how do components typically communicate to minimize dependencies?",
    options: ["Components communicate directly through hardcoded IP addresses", "Components are designed to minimize dependencies on each other, often using queues or APIs", "All application components run on a single large server", "Databases are co-located with application servers"],
    correct: [1],
    explanation: "Loose coupling means components interact through well-defined, minimal interfaces (like SQS queues or API Gateway). This limits blast radius — if one component fails or needs to scale, it does not force other components to change or fail."
  },

  // ────────────────────────────────────────────────────────────────
  // BATCH 2 — DOMAIN 2: Security & Compliance (ids 249–308)
  // ────────────────────────────────────────────────────────────────
  {
    id: 249,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a managed directory service that enables AWS resources to use Microsoft Active Directory?",
    options: ["AWS IAM", "AWS Directory Service", "Amazon Cognito", "AWS SSO"],
    correct: [1],
    explanation: "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) is a fully managed Active Directory hosted on AWS. It integrates with EC2, RDS, and other services that require AD authentication."
  },
  {
    id: 250,
    domain: "Security & Compliance",
    type: "single",
    question: "Which IAM entity should be used by an application running on an EC2 instance that needs to access Amazon S3 without embedding credentials in code?",
    options: ["IAM user with access keys stored in the application", "IAM group assigned to the instance", "IAM role assigned to the EC2 instance", "Root account credentials"],
    correct: [2],
    explanation: "IAM roles provide temporary credentials automatically rotated by AWS. Assigning a role to an EC2 instance via an instance profile is the secure, recommended way to grant AWS permissions to applications — no long-term credentials stored in code."
  },
  {
    id: 251,
    domain: "Security & Compliance",
    type: "single",
    question: "What is the purpose of an IAM policy?",
    options: ["To define the billing budget for an AWS account", "To specify which actions are allowed or denied on AWS resources", "To create virtual networks in AWS", "To monitor API calls made in an AWS account"],
    correct: [1],
    explanation: "IAM policies are JSON documents that define permissions — which actions (e.g., s3:GetObject) are allowed or denied on which resources, and under what conditions. Policies are attached to users, groups, or roles."
  },
  {
    id: 252,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service enables you to centrally manage and enforce policies across multiple AWS accounts in an organization?",
    options: ["AWS IAM", "AWS Control Tower", "AWS Organizations", "AWS Config"],
    correct: [2],
    explanation: "AWS Organizations lets you centrally manage multiple AWS accounts, apply Service Control Policies (SCPs) to restrict permissions across accounts, and automate account creation. It is the foundation for multi-account governance."
  },
  {
    id: 253,
    domain: "Security & Compliance",
    type: "single",
    question: "What is a Service Control Policy (SCP) in AWS Organizations?",
    options: ["A policy that grants permissions to IAM users in a single account", "A policy that sets maximum permission boundaries for accounts in an organization", "A billing policy that caps spending per account", "A network policy that controls VPC traffic"],
    correct: [1],
    explanation: "SCPs define the maximum permissions available to accounts in an organization or organizational unit. They do not grant permissions directly but act as guardrails — even if an IAM policy in a child account allows an action, the SCP can deny it."
  },
  {
    id: 254,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service records API calls made in your AWS account, providing a history for governance, compliance, and auditing?",
    options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "Amazon GuardDuty"],
    correct: [1],
    explanation: "AWS CloudTrail records all API calls (who did what, when, from where) to AWS services. These logs can be stored in S3 and analyzed for security audits, compliance requirements, and troubleshooting."
  },
  {
    id: 255,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service continuously monitors and records AWS resource configurations, enabling you to evaluate configurations against desired settings?",
    options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "AWS Config records the configuration state of AWS resources over time and evaluates them against compliance rules. It answers 'what did my infrastructure look like at a specific point in time?' and 'is it compliant with my policies?'"
  },
  {
    id: 256,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service uses machine learning to continuously analyze VPC Flow Logs, CloudTrail events, and DNS logs to detect malicious activity and unauthorized behavior?",
    options: ["AWS Shield", "Amazon Inspector", "Amazon GuardDuty", "AWS WAF"],
    correct: [2],
    explanation: "Amazon GuardDuty is a threat detection service that uses ML and threat intelligence to identify suspicious activity (like crypto mining, data exfiltration, or compromised instances) by analyzing multiple AWS data sources."
  },
  {
    id: 257,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service automatically scans EC2 instances and container images for software vulnerabilities and unintended network exposure?",
    options: ["Amazon GuardDuty", "Amazon Inspector", "AWS Shield", "AWS Macie"],
    correct: [1],
    explanation: "Amazon Inspector is an automated vulnerability management service that continually scans EC2 instances and ECR container images for known software vulnerabilities (CVEs) and network reachability issues."
  },
  {
    id: 258,
    domain: "Security & Compliance",
    type: "single",
    question: "A security team wants to automatically discover, classify, and protect sensitive data such as PII stored in Amazon S3. Which AWS service should they use?",
    options: ["Amazon GuardDuty", "AWS Config", "Amazon Macie", "AWS Secrets Manager"],
    correct: [2],
    explanation: "Amazon Macie uses ML to automatically discover and classify sensitive data in S3 (like PII, financial data, or credentials). It provides alerts when sensitive data is improperly exposed or accessed."
  },
  {
    id: 259,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides DDoS protection automatically for all AWS customers at no extra charge?",
    options: ["AWS WAF", "Amazon GuardDuty", "AWS Shield Standard", "AWS Firewall Manager"],
    correct: [2],
    explanation: "AWS Shield Standard is automatically enabled for all AWS customers at no cost. It provides protection against common, most-frequently-occurring network and transport layer DDoS attacks. AWS Shield Advanced is the paid tier with additional protections and 24/7 DRT support."
  },
  {
    id: 260,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a managed web application firewall that protects against common web exploits like SQL injection and cross-site scripting?",
    options: ["AWS Shield", "Amazon GuardDuty", "AWS WAF", "AWS Network Firewall"],
    correct: [2],
    explanation: "AWS WAF (Web Application Firewall) lets you define rules to allow, block, or count web requests based on conditions like IP address, HTTP headers, query strings, or URI patterns. It protects against OWASP Top 10 threats."
  },
  {
    id: 261,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service enables centralized management of firewall rules across multiple accounts and resources in AWS Organizations?",
    options: ["AWS WAF", "AWS Shield Advanced", "AWS Firewall Manager", "Amazon Inspector"],
    correct: [2],
    explanation: "AWS Firewall Manager allows security administrators to centrally configure and manage AWS WAF rules, Shield Advanced protections, VPC security groups, and AWS Network Firewall policies across all accounts in an AWS Organization."
  },
  {
    id: 262,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a single place to view and manage security alerts and compliance status across multiple AWS accounts?",
    options: ["AWS Config", "Amazon GuardDuty", "AWS Security Hub", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "AWS Security Hub aggregates, organizes, and prioritizes security findings from AWS services (GuardDuty, Inspector, Macie, etc.) and third-party tools. It provides a comprehensive view of security and compliance posture across accounts."
  },
  {
    id: 263,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service helps you securely store, rotate, and retrieve database credentials, API keys, and other secrets?",
    options: ["AWS KMS", "AWS Systems Manager Parameter Store", "AWS Secrets Manager", "AWS Certificate Manager"],
    correct: [2],
    explanation: "AWS Secrets Manager is purpose-built for secrets lifecycle management: storing, rotating (automatically), and retrieving secrets. It integrates natively with RDS, Redshift, and DocumentDB for automatic password rotation."
  },
  {
    id: 264,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service enables you to create and manage encryption keys used to encrypt your AWS data?",
    options: ["AWS Secrets Manager", "AWS Certificate Manager", "AWS Key Management Service (KMS)", "AWS CloudHSM"],
    correct: [2],
    explanation: "AWS KMS is a managed service for creating and controlling encryption keys. It integrates with most AWS services (S3, EBS, RDS, etc.) for envelope encryption. KMS keys are protected by hardware security modules (HSMs) operated by AWS."
  },
  {
    id: 265,
    domain: "Security & Compliance",
    type: "single",
    question: "A company requires dedicated, single-tenant hardware security modules (HSMs) for regulatory compliance. Which AWS service meets this requirement?",
    options: ["AWS KMS", "AWS Secrets Manager", "AWS CloudHSM", "AWS Certificate Manager"],
    correct: [2],
    explanation: "AWS CloudHSM provides dedicated HSM appliances in the AWS cloud. Unlike KMS (multi-tenant), CloudHSM gives the customer exclusive control over the HSM hardware, meeting strict regulatory requirements like FIPS 140-2 Level 3."
  },
  {
    id: 266,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provisions, manages, and deploys SSL/TLS certificates for use with AWS services like CloudFront and Elastic Load Balancing?",
    options: ["AWS KMS", "AWS Secrets Manager", "AWS Certificate Manager (ACM)", "AWS IAM"],
    correct: [2],
    explanation: "AWS Certificate Manager (ACM) handles provisioning, renewal, and deployment of public and private SSL/TLS certificates. Certificates for use with CloudFront and ELB are free and auto-renewed when managed by ACM."
  },
  {
    id: 267,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service helps you evaluate whether your AWS account follows AWS security best practices such as enabling MFA on the root account and restricting open S3 buckets?",
    options: ["Amazon Inspector", "AWS Config", "AWS Trusted Advisor", "Amazon GuardDuty"],
    correct: [2],
    explanation: "AWS Trusted Advisor includes a Security category that checks for common security issues like open S3 buckets, unrestricted security group rules, missing MFA on root, and IAM use. It provides actionable recommendations."
  },
  {
    id: 268,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service allows you to perform security assessments and penetration testing on your own AWS resources without prior approval for specific services?",
    options: ["Amazon Inspector", "AWS Security Hub", "AWS Penetration Testing — no service needed, just the AWS policy", "AWS Shield"],
    correct: [2],
    explanation: "AWS allows customers to conduct security testing against their own AWS infrastructure for a permitted list of services (EC2, RDS, CloudFront, etc.) without prior approval. Amazon Inspector automates parts of this but is a separate product."
  },
  {
    id: 269,
    domain: "Security & Compliance",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, who is responsible for encrypting data at rest stored in Amazon S3?",
    options: ["AWS only", "The customer only", "Both AWS and the customer share this responsibility", "Neither — S3 data is always unencrypted"],
    correct: [2],
    explanation: "S3 encrypts all new objects by default (AWS-side responsibility), but customers also control their own encryption: choosing key management (SSE-S3, SSE-KMS, SSE-C), setting bucket policies, and managing their own encryption keys. This is a shared responsibility."
  },
  {
    id: 270,
    domain: "Security & Compliance",
    type: "single",
    question: "Which security best practice recommends granting users only the permissions they need to perform their job and nothing more?",
    options: ["Defense in depth", "Least privilege", "Security by obscurity", "Zero trust"],
    correct: [1],
    explanation: "The principle of least privilege means granting the minimum permissions required for a task. In IAM, this means writing granular policies that allow only necessary actions on specific resources, reducing blast radius if credentials are compromised."
  },
  {
    id: 271,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS feature adds a second layer of security to your AWS account login by requiring a one-time code from a hardware or virtual device?",
    options: ["IAM access keys", "Multi-Factor Authentication (MFA)", "Security groups", "AWS Shield"],
    correct: [1],
    explanation: "MFA requires something you know (password) plus something you have (MFA device). AWS strongly recommends enabling MFA on the root account and all privileged IAM users to protect against password compromise."
  },
  {
    id: 272,
    domain: "Security & Compliance",
    type: "single",
    question: "A company's security team needs to know every time a specific S3 bucket's permissions change. Which AWS service can automatically trigger an alert when configuration changes occur?",
    options: ["Amazon GuardDuty", "AWS CloudTrail", "AWS Config with Config Rules", "Amazon Macie"],
    correct: [2],
    explanation: "AWS Config records configuration changes and can trigger Config Rules to evaluate compliance. An SNS notification or Lambda function can alert the team whenever a resource configuration (like S3 bucket ACL) changes outside of policy."
  },
  {
    id: 273,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides network-level filtering for traffic entering and leaving a VPC subnet, acting as a stateless firewall?",
    options: ["Security Groups", "AWS WAF", "Network Access Control Lists (NACLs)", "AWS Network Firewall"],
    correct: [2],
    explanation: "Network ACLs are stateless subnet-level firewalls in a VPC. They evaluate both inbound and outbound rules independently for every request. Security groups are stateful instance-level firewalls. Both operate at different layers."
  },
  {
    id: 274,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following BEST describes how AWS Security Groups differ from Network ACLs?",
    options: ["Security Groups are stateless; NACLs are stateful", "Security Groups are stateful and operate at the instance level; NACLs are stateless and operate at the subnet level", "Security Groups control S3 access; NACLs control EC2 access", "Both are identical in functionality"],
    correct: [1],
    explanation: "Security Groups are stateful (return traffic is automatically allowed) and are attached to EC2 instances/ENIs. NACLs are stateless (return traffic must be explicitly allowed) and are applied at the subnet level, affecting all resources in that subnet."
  },
  {
    id: 275,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS compliance program demonstrates that AWS meets the rigorous security controls required by U.S. federal government agencies?",
    options: ["PCI DSS", "HIPAA", "FedRAMP", "SOC 2"],
    correct: [2],
    explanation: "FedRAMP (Federal Risk and Authorization Management Program) is the U.S. government-wide program that standardizes security assessment for cloud services used by federal agencies. AWS holds FedRAMP authorizations for many services."
  },
  {
    id: 276,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides on-demand access to AWS compliance reports such as SOC reports, PCI attestations, and ISO certifications?",
    options: ["AWS Trusted Advisor", "AWS Artifact", "AWS Security Hub", "AWS Config"],
    correct: [1],
    explanation: "AWS Artifact is a self-service portal for downloading AWS compliance documents and reports including SOC 1/2/3, PCI DSS AOC, ISO certifications, and more. Customers can also accept compliance agreements (like BAA for HIPAA) through Artifact."
  },
  {
    id: 277,
    domain: "Security & Compliance",
    type: "single",
    question: "A healthcare company wants to store patient data on AWS and needs to sign a Business Associate Agreement (BAA) with AWS to comply with HIPAA. Where can they access and accept this agreement?",
    options: ["AWS Support", "AWS Trusted Advisor", "AWS Artifact", "AWS Organizations"],
    correct: [2],
    explanation: "AWS Artifact provides the HIPAA BAA as an agreement customers can review and accept within the portal. Once accepted, eligible AWS services can be used to store and process PHI under HIPAA compliance."
  },
  {
    id: 278,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service can detect when AWS account root user credentials or IAM user access keys have been published publicly on GitHub?",
    options: ["Amazon GuardDuty", "Amazon Inspector", "AWS Security Hub", "Amazon Macie"],
    correct: [0],
    explanation: "Amazon GuardDuty monitors threat intelligence feeds and detects anomalous behavior including credential exposure. One of its findings specifically identifies when AWS credentials appear in public repositories, triggering an alert."
  },
  {
    id: 279,
    domain: "Security & Compliance",
    type: "single",
    question: "Which IAM feature allows you to set the maximum permissions an IAM entity (user or role) can have, regardless of what permissions their identity-based policies grant?",
    options: ["IAM Groups", "Service Control Policies", "Permissions Boundaries", "Resource-based policies"],
    correct: [2],
    explanation: "Permissions Boundaries set the maximum permissions an IAM principal can be granted. Even if a policy grants broad access, the boundary limits the effective permissions. This is useful for delegating IAM administration safely."
  },
  {
    id: 280,
    domain: "Security & Compliance",
    type: "single",
    question: "Which feature of Amazon S3 protects against accidental or malicious deletion of objects by maintaining multiple versions of each object?",
    options: ["S3 Replication", "S3 Lifecycle Policies", "S3 Versioning", "S3 Object Lock"],
    correct: [2],
    explanation: "S3 Versioning keeps every version of an object in a bucket. If an object is deleted or overwritten, previous versions are retained and can be restored. This is a key data protection feature."
  },
  {
    id: 281,
    domain: "Security & Compliance",
    type: "single",
    question: "Which Amazon S3 feature prevents objects from being deleted or overwritten for a fixed period, meeting Write Once Read Many (WORM) compliance requirements?",
    options: ["S3 Versioning", "S3 Object Lock", "S3 Replication", "S3 Intelligent-Tiering"],
    correct: [1],
    explanation: "S3 Object Lock enforces WORM storage. Objects can be locked in Compliance or Governance mode for a specified retention period. This meets SEC 17a-4 and other regulatory requirements for immutable records."
  },
  {
    id: 282,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service aggregates and centralizes log data from AWS services, on-premises servers, and third-party tools for security analysis?",
    options: ["AWS CloudTrail", "Amazon CloudWatch Logs", "Amazon OpenSearch Service (formerly Elasticsearch)", "AWS Security Lake"],
    correct: [3],
    explanation: "AWS Security Lake automatically centralizes security data from AWS environments, SaaS providers, and on-premises into a purpose-built data lake in your account using the Open Cybersecurity Schema Framework (OCSF), enabling unified security analytics."
  },
  {
    id: 283,
    domain: "Security & Compliance",
    type: "multiple",
    question: "Which of the following security measures are recommended for protecting the AWS root account? (Select TWO)",
    options: ["Enable MFA on the root account", "Use root account credentials for daily administrative tasks", "Create IAM users for daily tasks and lock away root credentials", "Share root credentials with the security team"],
    correct: [0, 2],
    explanation: "AWS best practices: (1) Enable MFA on the root account to require a second factor for login. (2) Create IAM users (or use IAM Identity Center) for daily tasks — the root account should only be used for tasks that specifically require it, then credentials locked away."
  },
  {
    id: 284,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides centralized single sign-on (SSO) access to multiple AWS accounts and business applications?",
    options: ["AWS IAM", "Amazon Cognito", "AWS IAM Identity Center (AWS SSO)", "AWS Directory Service"],
    correct: [2],
    explanation: "AWS IAM Identity Center (formerly AWS SSO) provides centralized SSO to all AWS accounts in an organization and third-party SaaS applications. Users sign in once and access multiple accounts/apps without separate credentials."
  },
  {
    id: 285,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service is used to provide identity management for web and mobile application users, including social identity federation (Google, Facebook)?",
    options: ["AWS IAM Identity Center", "AWS Directory Service", "Amazon Cognito", "AWS IAM"],
    correct: [2],
    explanation: "Amazon Cognito provides user pools (user directory for apps) and identity pools (federated identities). It handles sign-up, sign-in, and access control for mobile and web apps, including social login via Google, Facebook, and SAML providers."
  },
  {
    id: 286,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to ensure all API calls to AWS services in their account are logged and stored for 90 days for audit purposes. Which service provides this capability?",
    options: ["Amazon CloudWatch", "AWS Config", "AWS CloudTrail", "AWS X-Ray"],
    correct: [2],
    explanation: "AWS CloudTrail logs all API activity. By configuring a Trail, logs are stored in S3 and can be retained for any period. CloudTrail also integrates with CloudWatch Logs for real-time monitoring and CloudWatch Logs Insights for querying."
  },
  {
    id: 287,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS network security feature acts as a virtual firewall at the EC2 instance level, controlling inbound and outbound traffic?",
    options: ["Network ACLs", "AWS WAF", "Security Groups", "AWS Network Firewall"],
    correct: [2],
    explanation: "Security Groups are stateful virtual firewalls applied to EC2 instances (via ENIs). They control which traffic is allowed in and out based on port, protocol, and source/destination IP. Return traffic is automatically allowed (stateful)."
  },
  {
    id: 288,
    domain: "Security & Compliance",
    type: "single",
    question: "An attacker is sending a flood of HTTPS requests to an AWS-hosted web application, attempting to overwhelm it. Which AWS service provides protection specifically against application layer (Layer 7) DDoS attacks?",
    options: ["AWS Shield Standard", "AWS Shield Advanced combined with AWS WAF", "Amazon GuardDuty", "Amazon Inspector"],
    correct: [1],
    explanation: "AWS Shield Standard protects against Layer 3/4 attacks. For sophisticated Layer 7 (application layer) DDoS attacks, customers need Shield Advanced combined with AWS WAF to detect and filter malicious HTTP/HTTPS traffic patterns."
  },
  {
    id: 289,
    domain: "Security & Compliance",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, which of the following is the customer's responsibility for an Amazon RDS database?",
    options: ["Patching the database engine", "Managing the physical host hardware", "Configuring database security groups and managing database access credentials", "Replacing failed disk drives"],
    correct: [2],
    explanation: "For RDS (managed service), AWS handles patching, hardware, and backups. The customer is responsible for: configuring network access (security groups/NACLs), database user management, data encryption choices, and IAM policies."
  },
  {
    id: 290,
    domain: "Security & Compliance",
    type: "single",
    question: "Which principle of the AWS Well-Architected Security pillar recommends applying security controls at multiple layers (edge, VPC, subnet, instance, application, data)?",
    options: ["Least privilege", "Defense in depth", "Automate security best practices", "Protect data in transit and at rest"],
    correct: [1],
    explanation: "Defense in depth means layering security controls so that if one layer fails, others still protect the system. In AWS this means combining CloudFront + WAF (edge), VPC + NACLs (network), Security Groups (instance), IAM (access), and KMS (data)."
  },
  {
    id: 291,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service is used to detect and respond to AWS account compromises by analyzing behavioral patterns and threat intelligence?",
    options: ["Amazon Inspector", "AWS Config", "Amazon GuardDuty", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "GuardDuty uses ML and curated threat intelligence to identify threats like unusual API calls, unauthorized deployments, crypto mining activity, and compromised IAM credentials by analyzing CloudTrail, VPC Flow Logs, and DNS logs."
  },
  {
    id: 292,
    domain: "Security & Compliance",
    type: "single",
    question: "A company needs to verify that its AWS environment is compliant with PCI DSS standards. Which AWS service helps by providing automated compliance checks against PCI DSS standards?",
    options: ["AWS Artifact", "AWS Security Hub with PCI DSS standard", "Amazon GuardDuty", "AWS Config"],
    correct: [1],
    explanation: "AWS Security Hub supports built-in compliance standards including PCI DSS, CIS AWS Foundations, and AWS Foundational Security Best Practices. It runs automated checks and scores the account against each standard."
  },
  {
    id: 293,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service allows customers to run automated security assessments of their EC2 instances to check for exposed ports and software vulnerabilities?",
    options: ["AWS Trusted Advisor", "Amazon Inspector", "Amazon GuardDuty", "AWS Config"],
    correct: [1],
    explanation: "Amazon Inspector automatically scans EC2 instances for open network paths (unintended network exposure) and known CVE vulnerabilities in installed software packages, providing a risk score and remediation guidance."
  },
  {
    id: 294,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following BEST describes data encryption 'in transit' in the context of AWS?",
    options: ["Encrypting data stored on EBS volumes", "Encrypting data as it moves between services or over the network using protocols like TLS", "Encrypting S3 objects using KMS", "Encrypting database backups"],
    correct: [1],
    explanation: "Encryption in transit protects data moving between clients and servers (or between AWS services) using TLS/SSL. AWS services support TLS endpoints, and VPN/Direct Connect adds additional transport layer security."
  },
  {
    id: 295,
    domain: "Security & Compliance",
    type: "single",
    question: "Which IAM best practice recommends creating a unique set of credentials for each individual user rather than sharing one account?",
    options: ["Use IAM roles for all access", "Create individual IAM users", "Rotate credentials regularly", "Enable MFA for privileged users"],
    correct: [1],
    explanation: "AWS recommends creating individual IAM users for each person who needs access. Shared credentials make it impossible to attribute actions to specific individuals in audit logs and create security risks when someone leaves."
  },
  {
    id: 296,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service helps customers understand how AWS meets compliance requirements in shared-responsibility areas, providing detailed technical documentation?",
    options: ["AWS Trusted Advisor", "AWS Artifact", "AWS Audit Manager", "AWS Config"],
    correct: [2],
    explanation: "AWS Audit Manager continuously audits AWS usage to help customers manage risk and maintain compliance with regulations. It maps AWS usage to compliance frameworks and produces evidence reports for auditors."
  },
  {
    id: 297,
    domain: "Security & Compliance",
    type: "single",
    question: "What does the term 'data sovereignty' mean in the context of AWS?",
    options: ["AWS owns all data stored in the cloud", "Data remains subject to the laws of the country where it is stored, and customers control where their data resides", "AWS automatically backs up all customer data to multiple countries", "Data can only be accessed by AWS employees"],
    correct: [1],
    explanation: "Data sovereignty means data is subject to the laws of the jurisdiction where it is stored. AWS Regions are isolated, and data does not move between Regions without customer action. Customers choose their Region to meet data residency and sovereignty requirements."
  },
  {
    id: 298,
    domain: "Security & Compliance",
    type: "single",
    question: "Which security feature of Amazon VPC allows customers to monitor and capture IP traffic at the network interface level for forensic analysis?",
    options: ["AWS CloudTrail", "VPC Flow Logs", "AWS Network Firewall", "Amazon GuardDuty"],
    correct: [1],
    explanation: "VPC Flow Logs capture information about IP traffic (source/destination IP, port, protocol, bytes, action) flowing in and out of VPC network interfaces. They are stored in CloudWatch Logs or S3 and used for security analysis and troubleshooting."
  },
  {
    id: 299,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service lets you define rules that automatically remediate non-compliant AWS resource configurations?",
    options: ["AWS CloudTrail", "Amazon GuardDuty", "AWS Config with remediation actions", "AWS Inspector"],
    correct: [2],
    explanation: "AWS Config Rules evaluate resource configurations for compliance. You can attach remediation actions (often Systems Manager Automation documents) to automatically fix non-compliant resources, such as enabling S3 bucket versioning or encrypting unencrypted EBS volumes."
  },
  {
    id: 300,
    domain: "Security & Compliance",
    type: "multiple",
    question: "Which of the following are examples of the customer's responsibilities under the AWS Shared Responsibility Model? (Select TWO)",
    options: ["Managing IAM user permissions and access keys", "Maintaining the physical security of AWS data centers", "Configuring encryption of data at rest in Amazon RDS", "Patching the hypervisor on EC2 hosts"],
    correct: [0, 2],
    explanation: "Customers are responsible for: IAM user management (permissions, access key rotation, MFA) and data encryption choices (enabling RDS encryption, managing KMS keys). AWS manages physical data center security and the hypervisor."
  },
  {
    id: 301,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a fully managed distributed denial-of-service (DDoS) response team and proactive engagement for critical workloads?",
    options: ["AWS Shield Standard", "AWS WAF", "AWS Shield Advanced", "Amazon GuardDuty"],
    correct: [2],
    explanation: "AWS Shield Advanced includes 24/7 access to the AWS DDoS Response Team (DRT), proactive event notifications, attack diagnostics, and cost protection against scaling charges during a DDoS event. It is a paid service ($3,000/month + data transfer fees)."
  },
  {
    id: 302,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following describes the concept of 'security as code' in AWS?",
    options: ["Manually reviewing security controls every quarter", "Defining and deploying security controls through infrastructure-as-code templates like CloudFormation", "Hiring developers to write security software", "Using AWS Shield to protect all applications"],
    correct: [1],
    explanation: "Security as code means defining security controls (IAM policies, security groups, encryption settings, etc.) in code (CloudFormation, CDK, Terraform). This enables version control, automated testing, and consistent deployment of security across environments."
  },
  {
    id: 303,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a way to grant temporary access to AWS resources to users authenticated through an external identity provider (e.g., corporate LDAP)?",
    options: ["AWS IAM Access Analyzer", "AWS Security Token Service (STS)", "Amazon Cognito", "AWS Directory Service"],
    correct: [1],
    explanation: "AWS Security Token Service (STS) issues temporary, limited-privilege credentials for IAM roles. It is used for identity federation (SAML, OIDC), cross-account access, and granting temporary permissions. Credentials automatically expire."
  },
  {
    id: 304,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service analyzes IAM policies to identify resources that are accessible from outside your AWS account?",
    options: ["AWS Config", "Amazon GuardDuty", "AWS IAM Access Analyzer", "Amazon Inspector"],
    correct: [2],
    explanation: "AWS IAM Access Analyzer identifies unintended resource access by analyzing resource-based policies (S3, KMS, Lambda, SQS, etc.) and flagging any policies that allow access from outside your account or organization."
  },
  {
    id: 305,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following is a security benefit of using AWS managed services like RDS or DynamoDB instead of self-managing databases on EC2?",
    options: ["Customers have more control over database software versions", "AWS handles database engine patching and reduces the customer's attack surface", "Customers avoid all encryption requirements", "AWS provides free DDoS protection for managed databases"],
    correct: [1],
    explanation: "Managed services reduce the customer's security burden. AWS handles patching, which eliminates unpatched vulnerability windows. Customers focus on access control, data classification, and application security rather than OS and engine maintenance."
  },
  {
    id: 306,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides pre-built security best practice checks organized into frameworks to help maintain continuous compliance?",
    options: ["Amazon GuardDuty", "AWS Audit Manager", "AWS Security Hub", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "AWS Security Hub provides automated security checks mapped to compliance standards (CIS, PCI DSS, NIST). It aggregates findings from GuardDuty, Inspector, Macie, and others into a prioritized security score dashboard."
  },
  {
    id: 307,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to prevent any account in its AWS Organization from disabling CloudTrail logging. Which is the MOST effective control?",
    options: ["Send email alerts when CloudTrail is disabled", "Apply an SCP that denies cloudtrail:DeleteTrail and cloudtrail:StopLogging", "Use IAM policies in each account to deny these actions", "Enable AWS Config to detect changes"],
    correct: [1],
    explanation: "SCPs applied at the organizational unit or root level cannot be overridden by any IAM policy within member accounts, including by account administrators. An SCP denying cloudtrail:StopLogging and cloudtrail:DeleteTrail enforces logging organization-wide."
  },
  {
    id: 308,
    domain: "Security & Compliance",
    type: "single",
    question: "Which feature of AWS Key Management Service (KMS) allows you to create a trail of who used which key to decrypt which data and when?",
    options: ["Key rotation", "Key policy", "AWS CloudTrail integration with KMS", "KMS key aliases"],
    correct: [2],
    explanation: "Every KMS API call (Encrypt, Decrypt, GenerateDataKey, etc.) is logged in AWS CloudTrail. This provides a full audit trail of cryptographic operations: who used which key, on which resource, at what time — essential for compliance and forensics."
  },

  // ────────────────────────────────────────────────────────────────
  // BATCH 2 — DOMAIN 3: Cloud Technology & Services (ids 309–376)
  // ────────────────────────────────────────────────────────────────
  {
    id: 309,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon EC2 purchasing option provides the largest discount (up to 90%) but can be interrupted by AWS with a 2-minute warning when capacity is needed?",
    options: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Hosts"],
    correct: [2],
    explanation: "EC2 Spot Instances use spare AWS capacity at discounts up to 90% off On-Demand. AWS can reclaim them with a 2-minute warning when capacity is needed elsewhere. They are ideal for fault-tolerant, stateless, or batch workloads."
  },
  {
    id: 310,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which EC2 purchasing option requires a 1- or 3-year commitment and provides a significant discount compared to On-Demand pricing for predictable workloads?",
    options: ["Spot Instances", "On-Demand Instances", "Reserved Instances", "Savings Plans"],
    correct: [2],
    explanation: "Reserved Instances offer discounts up to 72% for committing to a specific instance type in a Region for 1 or 3 years. They are ideal for steady-state workloads. Standard RIs offer the deepest discounts; Convertible RIs allow changing instance attributes."
  },
  {
    id: 311,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS compute pricing model provides flexibility to commit to a consistent amount of compute usage ($/hour) for 1 or 3 years, applicable to EC2, Lambda, and Fargate?",
    options: ["Reserved Instances", "Spot Instances", "Savings Plans", "Dedicated Hosts"],
    correct: [2],
    explanation: "AWS Savings Plans offer flexible discounts (up to 66%) by committing to a consistent usage amount in $/hour for 1 or 3 years. Unlike RIs, Savings Plans automatically apply to EC2 (any instance family/region), Lambda, and Fargate."
  },
  {
    id: 312,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which EC2 option provides a dedicated physical server with per-socket/core licensing visibility, useful for server-bound software licenses?",
    options: ["Dedicated Instances", "Spot Instances", "Reserved Instances", "Dedicated Hosts"],
    correct: [3],
    explanation: "Dedicated Hosts provide entire physical servers dedicated to your use. They give visibility into sockets, cores, and host IDs — required for server-bound licenses (Windows Server, SQL Server per-socket). Dedicated Instances run on dedicated hardware but don't give host-level visibility."
  },
  {
    id: 313,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed, serverless container orchestration service that removes the need to manage the underlying infrastructure for Kubernetes clusters?",
    options: ["Amazon ECS", "Amazon EKS with EC2 launch type", "Amazon EKS with Fargate", "AWS App Runner"],
    correct: [2],
    explanation: "Amazon EKS with AWS Fargate is a serverless Kubernetes experience. AWS manages the control plane and the underlying nodes — customers only define and run pods. There are no EC2 instances to provision, patch, or scale."
  },
  {
    id: 314,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service runs Docker containers without requiring you to manage the underlying EC2 infrastructure?",
    options: ["Amazon EC2 with Docker installed", "AWS Lambda", "AWS Fargate", "AWS Elastic Beanstalk"],
    correct: [2],
    explanation: "AWS Fargate is a serverless compute engine for containers. It works with ECS and EKS, removing the need to provision, configure, or scale EC2 instances. You define the container and Fargate handles the rest."
  },
  {
    id: 315,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is used to run code in response to events (like an S3 upload or an API call) without provisioning or managing any servers?",
    options: ["Amazon EC2", "AWS Fargate", "AWS Lambda", "AWS Elastic Beanstalk"],
    correct: [2],
    explanation: "AWS Lambda is a serverless compute service that executes code in response to triggers (S3 events, DynamoDB streams, API Gateway, etc.). You only pay for execution time (per millisecond) and AWS handles all infrastructure."
  },
  {
    id: 316,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows you to quickly deploy and manage web applications without worrying about the underlying infrastructure (EC2, load balancers, Auto Scaling)?",
    options: ["AWS CloudFormation", "AWS Lambda", "AWS Elastic Beanstalk", "Amazon Lightsail"],
    correct: [2],
    explanation: "AWS Elastic Beanstalk is a PaaS that automatically handles deployment details: capacity provisioning, load balancing, auto-scaling, and health monitoring. Developers simply upload their application code."
  },
  {
    id: 317,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon S3 storage class is designed for data that is accessed less than once a month and can tolerate some retrieval latency, offering lower storage costs?",
    options: ["S3 Standard", "S3 Standard-IA", "S3 Glacier Instant Retrieval", "S3 Glacier Flexible Retrieval"],
    correct: [3],
    explanation: "S3 Glacier Flexible Retrieval (formerly S3 Glacier) is for archival data accessed rarely. Retrieval times range from minutes to hours depending on retrieval tier (Expedited, Standard, Bulk). It is much cheaper for storage but has retrieval fees and latency."
  },
  {
    id: 318,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon S3 storage class automatically moves objects between access tiers based on changing access patterns to optimize costs?",
    options: ["S3 Standard", "S3 Standard-IA", "S3 Intelligent-Tiering", "S3 Glacier"],
    correct: [2],
    explanation: "S3 Intelligent-Tiering automatically moves objects between Frequent Access, Infrequent Access, Archive Instant Access, and Deep Archive tiers based on access patterns, with no performance impact and no retrieval fees — ideal for unpredictable access patterns."
  },
  {
    id: 319,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS storage service is a fully managed Network File System (NFS) that can be mounted by multiple EC2 instances simultaneously across multiple Availability Zones?",
    options: ["Amazon EBS", "Amazon S3", "Amazon EFS", "AWS Storage Gateway"],
    correct: [2],
    explanation: "Amazon EFS (Elastic File System) provides a shared POSIX-compatible NFS file system that scales automatically. Multiple EC2 instances in multiple AZs can mount the same EFS file system simultaneously — unlike EBS which attaches to one instance."
  },
  {
    id: 320,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS storage service provides block-level storage volumes that can be attached to a single EC2 instance?",
    options: ["Amazon S3", "Amazon EFS", "Amazon EBS", "Amazon FSx"],
    correct: [2],
    explanation: "Amazon EBS (Elastic Block Store) provides persistent block storage for EC2 instances, similar to a hard drive. EBS volumes attach to one EC2 instance at a time (except Multi-Attach io1/io2) and persist independently from instance lifecycle."
  },
  {
    id: 321,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS database service is a fully managed, serverless, globally distributed NoSQL database that provides single-digit millisecond latency at any scale?",
    options: ["Amazon RDS", "Amazon Aurora", "Amazon DynamoDB", "Amazon ElastiCache"],
    correct: [2],
    explanation: "Amazon DynamoDB is a fully managed NoSQL key-value and document database with automatic scaling, built-in replication, and single-digit millisecond response times at any scale. No servers to manage."
  },
  {
    id: 322,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS database service is a MySQL and PostgreSQL-compatible relational database that is up to 5x faster than standard MySQL and 3x faster than standard PostgreSQL?",
    options: ["Amazon RDS for MySQL", "Amazon Aurora", "Amazon DynamoDB", "Amazon Redshift"],
    correct: [1],
    explanation: "Amazon Aurora is an AWS-built, cloud-native relational database compatible with MySQL and PostgreSQL. It uses a distributed storage architecture that provides higher performance, availability (up to 15 read replicas, multi-AZ), and automatic storage scaling."
  },
  {
    id: 323,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed in-memory caching layer compatible with Redis and Memcached, used to reduce database load?",
    options: ["Amazon DynamoDB Accelerator (DAX)", "Amazon RDS Read Replicas", "Amazon ElastiCache", "Amazon MemoryDB"],
    correct: [2],
    explanation: "Amazon ElastiCache is a fully managed in-memory caching service supporting Redis and Memcached. Placing a cache layer in front of a relational database reduces read latency from milliseconds to microseconds and decreases database load."
  },
  {
    id: 324,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a petabyte-scale cloud data warehouse designed for running complex analytical SQL queries on large datasets?",
    options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon Aurora"],
    correct: [2],
    explanation: "Amazon Redshift is a fully managed, petabyte-scale column-oriented data warehouse. It uses massively parallel processing (MPP) and is optimized for OLAP (analytical) workloads rather than OLTP (transactional). Integrates with S3 via Redshift Spectrum."
  },
  {
    id: 325,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides content delivery by caching copies of content at edge locations worldwide to reduce latency for end users?",
    options: ["AWS Global Accelerator", "Amazon Route 53", "Amazon CloudFront", "AWS Direct Connect"],
    correct: [2],
    explanation: "Amazon CloudFront is AWS's Content Delivery Network (CDN). It caches static and dynamic content at hundreds of edge locations worldwide, serving users from the nearest location and reducing origin server load and latency."
  },
  {
    id: 326,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service improves the availability and performance of global applications by routing traffic through the AWS global network backbone instead of the public internet?",
    options: ["Amazon CloudFront", "Amazon Route 53", "AWS Global Accelerator", "AWS Direct Connect"],
    correct: [2],
    explanation: "AWS Global Accelerator provides two static Anycast IP addresses that route traffic to the nearest AWS edge location, then through the AWS global network to your application endpoints. This reduces internet hops and provides consistent performance."
  },
  {
    id: 327,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a scalable and highly available DNS (Domain Name System) web service that also provides domain registration and health checking?",
    options: ["Amazon CloudFront", "AWS Global Accelerator", "Amazon Route 53", "AWS Direct Connect"],
    correct: [2],
    explanation: "Amazon Route 53 is AWS's DNS service. It provides domain registration, DNS routing, and health checking. Routing policies include Simple, Weighted, Latency-based, Geolocation, Geoproximity, Failover, and Multivalue Answer."
  },
  {
    id: 328,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a dedicated, private network connection from on-premises to AWS, bypassing the public internet?",
    options: ["AWS VPN", "Amazon VPC", "AWS Direct Connect", "AWS Transit Gateway"],
    correct: [2],
    explanation: "AWS Direct Connect establishes a dedicated physical network connection (1 Gbps, 10 Gbps, or 100 Gbps) from on-premises to AWS. It provides consistent network performance and can reduce bandwidth costs compared to internet-based VPN."
  },
  {
    id: 329,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a logically isolated section of the AWS Cloud where customers can launch resources in a virtual network they define?",
    options: ["Amazon EC2", "AWS Direct Connect", "Amazon VPC", "AWS Transit Gateway"],
    correct: [2],
    explanation: "Amazon Virtual Private Cloud (VPC) is a logically isolated network in AWS. Customers control IP address ranges, subnets, route tables, internet gateways, and security settings. All AWS accounts get a default VPC in each Region."
  },
  {
    id: 330,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS networking component allows resources in a private subnet to access the internet for outbound connections, without exposing them to inbound traffic from the internet?",
    options: ["Internet Gateway", "VPC Peering", "NAT Gateway", "AWS PrivateLink"],
    correct: [2],
    explanation: "A NAT Gateway in a public subnet allows resources in private subnets to initiate outbound connections to the internet (for software updates, etc.) while blocking inbound connections initiated from the internet."
  },
  {
    id: 331,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows you to connect multiple VPCs and on-premises networks through a central hub, simplifying network topology?",
    options: ["VPC Peering", "AWS Direct Connect", "AWS Transit Gateway", "AWS PrivateLink"],
    correct: [2],
    explanation: "AWS Transit Gateway acts as a cloud router to connect multiple VPCs and on-premises networks. Instead of creating a full mesh of VPC peering connections, all networks connect to the Transit Gateway hub, greatly simplifying large-scale network architectures."
  },
  {
    id: 332,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables private connectivity between VPCs and AWS services (or customer-hosted services) without traffic traversing the public internet?",
    options: ["VPC Peering", "AWS Transit Gateway", "AWS PrivateLink", "Internet Gateway"],
    correct: [2],
    explanation: "AWS PrivateLink provides private connectivity to AWS services (S3, DynamoDB, etc.) and third-party services via VPC endpoints. Traffic stays within the AWS network — no public IP, no internet gateway, no NAT required."
  },
  {
    id: 333,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS managed message queue service decouples distributed application components by enabling asynchronous message processing?",
    options: ["Amazon SNS", "Amazon EventBridge", "Amazon SQS", "AWS Step Functions"],
    correct: [2],
    explanation: "Amazon SQS (Simple Queue Service) provides fully managed message queues. Producers send messages to a queue; consumers poll and process them independently. This decouples components and buffers traffic spikes — e.g., between a web tier and a processing tier."
  },
  {
    id: 334,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a fully managed pub/sub messaging service that can fan out messages to many subscribers simultaneously via email, SMS, Lambda, SQS, and HTTP endpoints?",
    options: ["Amazon SQS", "AWS Step Functions", "Amazon SNS", "Amazon Kinesis"],
    correct: [2],
    explanation: "Amazon SNS (Simple Notification Service) is a pub/sub messaging service. Publishers send messages to a topic; SNS fans out to all subscribers (Lambda, SQS, email, SMS, HTTP). It's used for push notifications and fan-out architectures."
  },
  {
    id: 335,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service orchestrates multiple AWS Lambda functions into a serverless workflow with error handling, retries, and parallel execution?",
    options: ["Amazon SQS", "Amazon SNS", "AWS Step Functions", "Amazon EventBridge"],
    correct: [2],
    explanation: "AWS Step Functions is a serverless orchestration service that coordinates Lambda functions and other AWS services into visual workflows (state machines). It handles retries, error catching, branching, parallel execution, and state management."
  },
  {
    id: 336,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a serverless event bus that routes events from AWS services, SaaS applications, and custom applications to targets like Lambda and SQS?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon Kinesis", "Amazon EventBridge"],
    correct: [3],
    explanation: "Amazon EventBridge (formerly CloudWatch Events) is a serverless event bus. It ingests events from AWS services, custom apps, and SaaS partners, applies rules to filter/route them to targets. It enables loosely coupled, event-driven architectures."
  },
  {
    id: 337,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is used to ingest, process, and analyze real-time streaming data at scale, such as clickstreams, IoT telemetry, or log data?",
    options: ["Amazon SQS", "Amazon SNS", "AWS Step Functions", "Amazon Kinesis"],
    correct: [3],
    explanation: "Amazon Kinesis is a family of services for real-time data streaming. Kinesis Data Streams ingests and processes streaming data; Kinesis Data Firehose loads it into S3, Redshift, or Elasticsearch; Kinesis Data Analytics runs SQL on streams."
  },
  {
    id: 338,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed API gateway to create, publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs?",
    options: ["AWS AppSync", "AWS App Runner", "Amazon API Gateway", "AWS Amplify"],
    correct: [2],
    explanation: "Amazon API Gateway lets you create and manage APIs at any scale. It handles traffic management, authorization, throttling, monitoring, and API versioning. It integrates natively with Lambda for serverless backends."
  },
  {
    id: 339,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS infrastructure as code service allows you to model and provision AWS resources using JSON or YAML templates?",
    options: ["AWS CDK", "AWS Elastic Beanstalk", "AWS CloudFormation", "AWS OpsWorks"],
    correct: [2],
    explanation: "AWS CloudFormation is an IaC service that provisions and manages AWS resources from declarative templates (JSON or YAML). Templates define the desired state; CloudFormation handles dependency ordering, rollback, and drift detection."
  },
  {
    id: 340,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed Hadoop ecosystem in the cloud, enabling processing of big data using tools like Spark, Hive, and HBase?",
    options: ["Amazon Redshift", "Amazon Athena", "Amazon EMR", "AWS Glue"],
    correct: [2],
    explanation: "Amazon EMR (Elastic MapReduce) is a managed cluster platform for running open-source big data frameworks (Hadoop, Spark, HBase, Hive, Flink). AWS handles provisioning, configuration, and tuning of the cluster nodes."
  },
  {
    id: 341,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows you to run SQL queries directly on data stored in Amazon S3 without loading it into a database?",
    options: ["Amazon Redshift", "Amazon EMR", "Amazon Athena", "AWS Glue"],
    correct: [2],
    explanation: "Amazon Athena is an interactive, serverless query service using standard SQL to analyze data directly in S3. There is no infrastructure to manage, and you pay per TB of data scanned. It uses Presto and supports JSON, CSV, Parquet, ORC, and Avro."
  },
  {
    id: 342,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a serverless ETL (Extract, Transform, Load) service that discovers, catalogs, and transforms data for analytics?",
    options: ["Amazon EMR", "Amazon Athena", "Amazon Kinesis", "AWS Glue"],
    correct: [3],
    explanation: "AWS Glue is a serverless data integration service. Its crawler discovers data schemas and populates the Glue Data Catalog; ETL jobs transform and move data between stores. It integrates with Athena, Redshift, and S3."
  },
  {
    id: 343,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed machine learning platform for building, training, and deploying ML models at scale?",
    options: ["AWS DeepLens", "Amazon Rekognition", "Amazon SageMaker", "AWS Comprehend"],
    correct: [2],
    explanation: "Amazon SageMaker is a fully managed ML service providing tools for data labeling, model building (Jupyter notebooks), training (distributed), tuning, and deployment (real-time endpoints, batch transform). It handles the undifferentiated heavy lifting of ML."
  },
  {
    id: 344,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS AI service provides pre-trained models for image and video analysis, such as object detection, facial recognition, and content moderation?",
    options: ["Amazon Comprehend", "Amazon Polly", "Amazon Rekognition", "Amazon Transcribe"],
    correct: [2],
    explanation: "Amazon Rekognition uses deep learning to analyze images and videos. Features include object/scene detection, facial analysis, celebrity recognition, text detection, and content moderation — all via API with no ML expertise required."
  },
  {
    id: 345,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service converts text to lifelike speech in multiple languages and voices?",
    options: ["Amazon Transcribe", "Amazon Translate", "Amazon Comprehend", "Amazon Polly"],
    correct: [3],
    explanation: "Amazon Polly converts text to realistic speech using deep learning. It supports dozens of languages and voices, including Neural Text-to-Speech (NTTS) for even more natural-sounding output. Used for voice-enabled apps, e-learning, and accessibility."
  },
  {
    id: 346,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service automatically converts speech to text, and can produce transcripts with speaker identification and custom vocabulary?",
    options: ["Amazon Polly", "Amazon Translate", "Amazon Lex", "Amazon Transcribe"],
    correct: [3],
    explanation: "Amazon Transcribe is an automatic speech recognition (ASR) service that converts audio/video to accurate text. Features include speaker diarization, custom vocabularies, PII redaction, and real-time or batch transcription."
  },
  {
    id: 347,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service uses natural language processing to extract key phrases, sentiment, entities, and language from text?",
    options: ["Amazon Lex", "Amazon Polly", "Amazon Comprehend", "Amazon Translate"],
    correct: [2],
    explanation: "Amazon Comprehend is a natural language processing (NLP) service that extracts insights from text: key phrases, entities (people, places), sentiment (positive/negative), language detection, and topic modeling — all via API."
  },
  {
    id: 348,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables building conversational chatbots and voice interfaces using the same deep learning technology that powers Amazon Alexa?",
    options: ["Amazon Polly", "Amazon Comprehend", "Amazon Lex", "Amazon Kendra"],
    correct: [2],
    explanation: "Amazon Lex is a fully managed service for building conversational interfaces using voice and text. It provides automatic speech recognition (ASR) and natural language understanding (NLU). Integrated with Lambda for backend fulfillment."
  },
  {
    id: 349,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides an intelligent enterprise search service powered by machine learning?",
    options: ["Amazon Elasticsearch Service", "Amazon Kendra", "Amazon Comprehend", "Amazon Lex"],
    correct: [1],
    explanation: "Amazon Kendra is an ML-powered enterprise search service that understands natural language questions and searches across unstructured content (documents, FAQs, S3, SharePoint, Salesforce) to return precise answers."
  },
  {
    id: 350,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables developers to deploy containerized applications by providing a fully managed container registry?",
    options: ["Amazon ECS", "Amazon EKS", "Amazon ECR", "AWS Fargate"],
    correct: [2],
    explanation: "Amazon ECR (Elastic Container Registry) is a fully managed Docker container image registry. It stores, manages, and deploys container images securely. Integrated with ECS, EKS, and Fargate for seamless container deployments."
  },
  {
    id: 351,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed IoT platform for connecting, managing, and securing billions of IoT devices?",
    options: ["AWS Greengrass", "Amazon Kinesis", "AWS IoT Core", "Amazon SageMaker"],
    correct: [2],
    explanation: "AWS IoT Core is a managed cloud service that lets connected devices interact with cloud applications. It handles device connectivity (MQTT, HTTP), message brokering, security (X.509 certificates), and integration with AWS services."
  },
  {
    id: 352,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed service for running Apache Kafka-compatible streaming, fully managed and integrated with AWS services?",
    options: ["Amazon Kinesis Data Streams", "Amazon SQS", "Amazon MSK (Managed Streaming for Apache Kafka)", "AWS EventBridge"],
    correct: [2],
    explanation: "Amazon MSK (Managed Streaming for Apache Kafka) is a fully managed service that makes it easy to build and run applications that use Apache Kafka. AWS handles provisioning, configuration, and maintenance of Kafka brokers and ZooKeeper."
  },
  {
    id: 353,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a cloud-based desktop-as-a-service (DaaS) solution, allowing users to access virtual desktops from any device?",
    options: ["AWS AppStream 2.0", "Amazon WorkSpaces", "AWS Virtual Desktop", "Amazon Connect"],
    correct: [1],
    explanation: "Amazon WorkSpaces is a fully managed, persistent virtual desktop infrastructure (VDI) in the cloud. Users access their Windows or Linux virtual desktop from any supported device. AWS handles hardware, patching, and availability."
  },
  {
    id: 354,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows you to stream desktop applications to users' browsers, without requiring installations on their devices?",
    options: ["Amazon WorkSpaces", "Amazon Connect", "AWS AppStream 2.0", "AWS WorkLink"],
    correct: [2],
    explanation: "AWS AppStream 2.0 streams desktop applications from AWS to users' web browsers. Applications run on AWS infrastructure and are streamed as pixels — no installation required on the user's device, and data never leaves AWS."
  },
  {
    id: 355,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a cloud-based contact center that allows you to set up a customer service operation quickly with pay-as-you-go pricing?",
    options: ["Amazon Chime", "Amazon Connect", "Amazon WorkMail", "AWS Wickr"],
    correct: [1],
    explanation: "Amazon Connect is a cloud-based omnichannel contact center. You can set up a contact center in minutes with automatic call distribution, interactive voice response, real-time analytics, and integration with CRM systems."
  },
  {
    id: 356,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service automatically detects, classifies, and migrates on-premises workloads to AWS with minimal downtime?",
    options: ["AWS Migration Hub", "AWS Application Migration Service (MGN)", "AWS DataSync", "AWS Transfer Family"],
    correct: [1],
    explanation: "AWS Application Migration Service (AWS MGN) is the primary migration service for lift-and-shift migrations. It replicates source servers continuously and cutover causes minimal downtime. It replaced AWS Server Migration Service (SMS)."
  },
  {
    id: 357,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a central location to track the progress of application migrations to AWS across multiple migration tools?",
    options: ["AWS Application Migration Service", "AWS Migration Hub", "AWS Control Tower", "AWS DataSync"],
    correct: [1],
    explanation: "AWS Migration Hub provides a single location to track migration status across multiple AWS and partner migration tools. It gives visibility into application portfolio and the status of each server's migration."
  },
  {
    id: 358,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which physical device does AWS provide to transfer large amounts of data (up to 80 TB) to AWS when internet bandwidth is insufficient?",
    options: ["AWS Storage Gateway", "AWS DataSync", "AWS Snowball Edge", "AWS Transfer Family"],
    correct: [2],
    explanation: "AWS Snowball Edge is a physical device for offline data transfer. Customers load data onto the device and ship it to AWS. Each Snowball Edge stores up to 80 TB and can also run EC2 compute at the edge. For larger migrations, Snowmobile (truck) is used."
  },
  {
    id: 359,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables automated, accelerated data transfer between on-premises storage and AWS storage services like S3, EFS, and FSx?",
    options: ["AWS Snowball", "AWS Transfer Family", "AWS DataSync", "AWS Storage Gateway"],
    correct: [2],
    explanation: "AWS DataSync is an online data transfer service that automates moving data between on-premises and AWS storage (S3, EFS, FSx). It handles scheduling, monitoring, encryption, and can transfer at speeds up to 10x faster than open-source tools."
  },
  {
    id: 360,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service connects on-premises software applications to AWS storage, enabling hybrid cloud storage use cases?",
    options: ["AWS DataSync", "Amazon EFS", "AWS Storage Gateway", "AWS Direct Connect"],
    correct: [2],
    explanation: "AWS Storage Gateway is a hybrid cloud storage service that presents on-premises applications with standard storage protocols (NFS, SMB, iSCSI) while storing the actual data in S3, EBS, or Glacier. It bridges on-premises apps with cloud storage."
  },
  {
    id: 361,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon EC2 feature automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, Lambda functions)?",
    options: ["Amazon Route 53", "Auto Scaling Group", "Elastic Load Balancing (ELB)", "AWS Global Accelerator"],
    correct: [2],
    explanation: "Elastic Load Balancing automatically distributes incoming traffic across multiple healthy targets in one or more AZs. Types include Application Load Balancer (HTTP/HTTPS), Network Load Balancer (TCP/UDP), and Gateway Load Balancer."
  },
  {
    id: 362,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which type of Elastic Load Balancer operates at Layer 7 (HTTP/HTTPS) and supports path-based and host-based routing?",
    options: ["Classic Load Balancer", "Network Load Balancer", "Gateway Load Balancer", "Application Load Balancer"],
    correct: [3],
    explanation: "Application Load Balancer (ALB) operates at Layer 7 and supports advanced routing: path-based (/api/* vs /web/*), host-based (api.example.com vs web.example.com), header-based, and weighted routing. Required for containerized microservices."
  },
  {
    id: 363,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides automated recommendations for optimal AWS resource types and sizes based on your historical usage data?",
    options: ["AWS Trusted Advisor", "AWS Compute Optimizer", "AWS Cost Explorer", "AWS Budgets"],
    correct: [1],
    explanation: "AWS Compute Optimizer uses ML to analyze CloudWatch metrics and recommend optimal EC2 instance types, Auto Scaling group configurations, EBS volume types, and Lambda function memory settings to improve performance and reduce costs."
  },
  {
    id: 364,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed relational database supporting six database engines: MySQL, MariaDB, PostgreSQL, Oracle, SQL Server, and Amazon Aurora?",
    options: ["Amazon DynamoDB", "Amazon Aurora", "Amazon RDS", "Amazon Redshift"],
    correct: [2],
    explanation: "Amazon RDS (Relational Database Service) is a managed service for relational databases. It handles provisioning, patching, backups, and scaling. It supports MySQL, MariaDB, PostgreSQL, Oracle, SQL Server, and the Aurora-compatible engines."
  },
  {
    id: 365,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a fully managed graph database service that makes it easy to build and run applications working with highly connected datasets?",
    options: ["Amazon DocumentDB", "Amazon Neptune", "Amazon QLDB", "Amazon Keyspaces"],
    correct: [1],
    explanation: "Amazon Neptune is a purpose-built graph database supporting Property Graph (Gremlin) and RDF (SPARQL). It is optimized for graph queries on billions of relationships — used for knowledge graphs, fraud detection, and recommendation engines."
  },
  {
    id: 366,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed, immutable ledger database that maintains a transparent, cryptographically verifiable transaction log?",
    options: ["Amazon Neptune", "Amazon DynamoDB", "Amazon QLDB", "Amazon DocumentDB"],
    correct: [2],
    explanation: "Amazon QLDB (Quantum Ledger Database) is a fully managed ledger database with an immutable, cryptographically verifiable transaction log. No data can be altered or deleted — ideal for supply chain, financial records, and compliance applications."
  },
  {
    id: 367,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a MongoDB-compatible fully managed document database service?",
    options: ["Amazon DynamoDB", "Amazon Keyspaces", "Amazon DocumentDB", "Amazon Neptune"],
    correct: [2],
    explanation: "Amazon DocumentDB (with MongoDB compatibility) is a fully managed document database. It implements the MongoDB API so existing MongoDB applications and drivers work without significant code changes, while AWS manages availability and scaling."
  },
  {
    id: 368,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a scalable, serverless, highly available Apache Cassandra-compatible database?",
    options: ["Amazon DynamoDB", "Amazon DocumentDB", "Amazon Neptune", "Amazon Keyspaces (for Apache Cassandra)"],
    correct: [3],
    explanation: "Amazon Keyspaces is a serverless, fully managed Cassandra-compatible database service. Existing Cassandra workloads can migrate with minimal code changes. AWS handles scaling, patching, and availability."
  },
  {
    id: 369,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service continuously monitors your AWS infrastructure and applications to detect anomalies and creates alarms based on metrics?",
    options: ["AWS CloudTrail", "Amazon GuardDuty", "Amazon CloudWatch", "AWS Config"],
    correct: [2],
    explanation: "Amazon CloudWatch is the observability service for AWS. It collects and monitors metrics, logs, and events. You can create alarms that notify you or trigger actions (Auto Scaling, Lambda) when thresholds are breached."
  },
  {
    id: 370,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides automated operations through runbooks and playbooks, enabling you to patch, configure, and manage EC2 instances and on-premises servers at scale?",
    options: ["AWS OpsWorks", "Amazon EC2 Auto Scaling", "AWS Systems Manager", "AWS Config"],
    correct: [2],
    explanation: "AWS Systems Manager provides operational tooling to manage AWS and on-premises resources: patch management (Patch Manager), configuration (State Manager), run commands (Run Command), parameter storage (Parameter Store), and more."
  },
  {
    id: 371,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed GraphQL API layer, allowing front-end developers to query and update data from multiple data sources with a single request?",
    options: ["Amazon API Gateway", "AWS AppSync", "AWS Amplify", "Amazon EventBridge"],
    correct: [1],
    explanation: "AWS AppSync is a managed GraphQL service that connects to DynamoDB, RDS, Lambda, Elasticsearch, and HTTP data sources. It supports real-time subscriptions and offline data synchronization for mobile and web apps."
  },
  {
    id: 372,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed CI/CD pipeline for building, testing, and deploying applications?",
    options: ["AWS CloudFormation", "AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy"],
    correct: [1],
    explanation: "AWS CodePipeline is a fully managed continuous delivery service that orchestrates build, test, and deploy phases. It integrates with CodeCommit, CodeBuild, CodeDeploy, GitHub, Jenkins, and third-party tools to automate release pipelines."
  },
  {
    id: 373,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed source control service hosting private Git repositories?",
    options: ["AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy", "AWS CodeCommit"],
    correct: [3],
    explanation: "AWS CodeCommit is a fully managed, private Git repository service. It scales automatically, integrates with IAM for access control, and works with standard Git tools. No repository size limits."
  },
  {
    id: 374,
    domain: "Cloud Technology & Services",
    type: "multiple",
    question: "Which AWS services can be used to decouple the components of a distributed application? (Select TWO)",
    options: ["Amazon SQS", "Amazon RDS", "Amazon SNS", "Amazon EC2"],
    correct: [0, 2],
    explanation: "SQS (message queues) and SNS (pub/sub notifications) both decouple application components. SQS lets producers and consumers operate independently at different rates. SNS allows one publisher to notify multiple subscribers without direct connections."
  },
  {
    id: 375,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon S3 feature allows you to host a static website (HTML, CSS, JavaScript) directly from an S3 bucket?",
    options: ["S3 Transfer Acceleration", "S3 Object Lambda", "S3 Static Website Hosting", "S3 Replication"],
    correct: [2],
    explanation: "S3 Static Website Hosting lets you serve a static website directly from an S3 bucket with a custom domain. Files are served via HTTP. For HTTPS and CDN, you would place CloudFront in front of the S3 bucket."
  },
  {
    id: 376,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed message broker service supporting Apache ActiveMQ and RabbitMQ protocols?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon Kinesis", "Amazon MQ"],
    correct: [3],
    explanation: "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ. It is designed for migrating existing message broker workloads to AWS with minimal code changes. SQS and SNS are AWS-native alternatives for new applications."
  },

  // ────────────────────────────────────────────────────────────────
  // BATCH 2 — DOMAIN 4: Billing, Pricing & Support (ids 377–400)
  // ────────────────────────────────────────────────────────────────
  {
    id: 377,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS support plan provides a dedicated Technical Account Manager (TAM) and proactive guidance for enterprise customers?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    correct: [3],
    explanation: "Enterprise Support includes a dedicated Technical Account Manager (TAM) who provides proactive guidance, architectural reviews, and coordinates access to AWS subject matter experts. It also includes Concierge Support and Infrastructure Event Management."
  },
  {
    id: 378,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "What is the minimum monthly cost for AWS Business Support?",
    options: ["Free", "$29/month", "$100/month", "$15,000/month"],
    correct: [2],
    explanation: "AWS Business Support starts at $100/month (or a percentage of AWS usage, whichever is greater). It includes 24/7 phone, chat, and email access to Cloud Support Engineers and full Trusted Advisor checks."
  },
  {
    id: 379,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS Support plan provides general architectural guidance and is recommended for development/testing environments?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    correct: [1],
    explanation: "AWS Developer Support ($29/month or 3% of usage) is designed for experimentation and testing. It provides one primary contact with email-based technical support during business hours with a 12-24 hour response time for general guidance."
  },
  {
    id: 380,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS tool provides a visual interface to explore AWS costs, view spending trends, and forecast future costs based on historical usage?",
    options: ["AWS Budgets", "AWS Pricing Calculator", "AWS Cost Explorer", "AWS Cost and Usage Report"],
    correct: [2],
    explanation: "AWS Cost Explorer provides interactive graphs to analyze costs over time (up to 13 months historical), break down by service/tag/account, identify trends, and forecast spending. Available at no additional charge."
  },
  {
    id: 381,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service allows you to set custom cost or usage thresholds and receive alerts when they are exceeded or forecasted to be exceeded?",
    options: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Budgets", "AWS Cost and Usage Report"],
    correct: [2],
    explanation: "AWS Budgets lets you set cost, usage, or reservation budgets and sends alerts (via email or SNS) when actual or forecasted amounts exceed thresholds. You can also set automated actions (e.g., apply SCPs) when budgets are breached."
  },
  {
    id: 382,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service provides the most granular and detailed data about AWS costs and usage, suitable for ingestion into data analysis tools?",
    options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report (CUR)"],
    correct: [3],
    explanation: "The AWS Cost and Usage Report (CUR) is the most comprehensive billing dataset. It delivers hourly/daily line items for all usage across all services to an S3 bucket, usable with Athena, Redshift, or QuickSight for custom analysis."
  },
  {
    id: 383,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS tool helps estimate the cost of a new AWS architecture before deploying it, by inputting expected service usage?",
    options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Migration Evaluator"],
    correct: [2],
    explanation: "AWS Pricing Calculator (calc.aws) lets you model new architectures and estimate monthly costs before deployment. You configure services (EC2 instance types, storage, data transfer, etc.) and get a cost breakdown. Useful for budgeting new projects."
  },
  {
    id: 384,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS feature allows you to consolidate billing for multiple AWS accounts and potentially receive volume discounts?",
    options: ["AWS Cost Explorer", "AWS Organizations with consolidated billing", "AWS Budgets", "AWS Trusted Advisor"],
    correct: [1],
    explanation: "AWS Organizations consolidated billing aggregates usage across all linked accounts into a single payer account. This can result in volume tier discounts (e.g., S3 tiered pricing) and simplified billing. All accounts share Reserved Instance and Savings Plans benefits."
  },
  {
    id: 385,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company has multiple AWS accounts for different departments. Which AWS feature allows all accounts to benefit from one department's Reserved Instance purchases?",
    options: ["AWS Budgets", "Consolidated Billing in AWS Organizations", "AWS Cost Explorer", "AWS Pricing Calculator"],
    correct: [1],
    explanation: "With consolidated billing in AWS Organizations, Reserved Instance and Savings Plans discounts are shared across all linked accounts. If the purchasing account doesn't use the RI capacity, the discount applies to usage in other linked accounts."
  },
  {
    id: 386,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS pricing model charges you per second of compute time used, with no upfront costs or minimum commitments?",
    options: ["Reserved pricing", "Spot pricing", "On-Demand pricing", "Dedicated Host pricing"],
    correct: [2],
    explanation: "On-Demand pricing charges for compute capacity by the second (Linux) or hour, with no long-term commitments. It is the most flexible and most expensive option per unit, ideal for unpredictable or short-duration workloads."
  },
  {
    id: 387,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS support plan is included free with every AWS account and provides access to documentation, whitepapers, AWS re:Post, and Service Health Dashboard?",
    options: ["Developer", "Business", "Enterprise", "Basic"],
    correct: [3],
    explanation: "AWS Basic Support is free for all accounts. It includes access to documentation, whitepapers, AWS re:Post community, Service Health Dashboard, and 6 core Trusted Advisor checks. No technical support contact is included."
  },
  {
    id: 388,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS support plan offers a response time of less than 15 minutes for a business-critical system-down case?",
    options: ["Developer", "Business", "Enterprise On-Ramp", "Enterprise"],
    correct: [3],
    explanation: "Enterprise Support guarantees less than 15-minute response time for critical business system-down (Severity 1) cases, along with 24/7 phone/chat/email access and a dedicated TAM. Business Support offers less than 1-hour response for the same severity."
  },
  {
    id: 389,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS feature assigns metadata labels to AWS resources for the purpose of cost allocation, access control, and resource organization?",
    options: ["Resource Groups", "AWS Config Rules", "AWS Resource Tags", "AWS Organizations OUs"],
    correct: [2],
    explanation: "AWS Resource Tags are key-value pairs attached to resources (EC2, S3, RDS, etc.). They are used for cost allocation (allocating costs to departments/projects via Cost Explorer), access control (IAM tag conditions), and resource filtering."
  },
  {
    id: 390,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company is analyzing its AWS bill and notices unexpectedly high data transfer costs. Which AWS service would BEST help identify exactly which resources are generating these costs?",
    options: ["AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report with Athena", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "The AWS Cost and Usage Report (CUR) provides line-item detail for every charge, including data transfer, by resource ID. Querying it with Athena lets you identify exactly which EC2 instances or NAT Gateways are generating high transfer costs."
  },
  {
    id: 391,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service provides real-time guidance across five categories — Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits — to help optimize your AWS environment?",
    options: ["AWS Config", "AWS Well-Architected Tool", "AWS Trusted Advisor", "Amazon GuardDuty"],
    correct: [2],
    explanation: "AWS Trusted Advisor inspects your AWS environment and provides recommendations in five categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits. Business and Enterprise Support get access to all checks."
  },
  {
    id: 392,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS support resource provides a community-based Q&A forum where AWS customers and AWS employees can post and answer technical questions?",
    options: ["AWS IQ", "AWS re:Post", "AWS Support Center", "AWS Knowledge Center"],
    correct: [1],
    explanation: "AWS re:Post is a community-based Q&A service (successor to AWS Developer Forums). AWS experts and community members answer questions. It is accessible to all support tiers. Accepted answers and upvoted responses surface the most reliable information."
  },
  {
    id: 393,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS program allows customers to engage AWS-certified experts for hands-on technical assistance with AWS projects on a fixed-price or hourly basis?",
    options: ["AWS Partner Network", "AWS re:Post", "AWS IQ", "AWS Professional Services"],
    correct: [2],
    explanation: "AWS IQ connects customers with AWS-certified third-party experts for on-demand project work. Customers post their project, receive proposals, and pay for approved work securely through AWS. It is different from AWS Professional Services (direct AWS engagement)."
  },
  {
    id: 394,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS offering provides the global network of AWS partners (consulting firms, ISVs, resellers) that complement AWS services?",
    options: ["AWS Marketplace", "AWS IQ", "AWS Partner Network (APN)", "AWS re:Post"],
    correct: [2],
    explanation: "The AWS Partner Network (APN) is the global community of AWS partners, including Consulting Partners (implement AWS solutions) and Technology Partners (software products that run on or integrate with AWS). APN Partners are vetted by AWS."
  },
  {
    id: 395,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service is an online catalog of third-party software, SaaS products, and data products that can be deployed directly to AWS accounts?",
    options: ["AWS Partner Network", "AWS Service Catalog", "AWS Marketplace", "AWS IQ"],
    correct: [2],
    explanation: "AWS Marketplace is a digital catalog of thousands of software listings from independent vendors. Customers can find, test, buy, and deploy software on AWS. Purchases are billed through the AWS account, simplifying procurement."
  },
  {
    id: 396,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS pricing principle means you pay less per unit as your usage volume increases?",
    options: ["Pay-as-you-go", "Pay less when you reserve", "Pay less with more usage (volume-based discounts)", "Free tier pricing"],
    correct: [2],
    explanation: "AWS uses tiered pricing for many services (S3, data transfer, etc.) where per-unit costs decrease as usage increases. For example, S3 charges less per GB after the first 50 TB in a month. This is volume-based pricing."
  },
  {
    id: 397,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which of the following is NOT included in the AWS Free Tier for 12 months after account creation?",
    options: ["750 hours/month of Amazon EC2 t2.micro", "5 GB of Amazon S3 Standard storage", "750 hours/month of Amazon RDS (db.t2.micro)", "Unlimited AWS Lambda invocations"],
    correct: [3],
    explanation: "AWS Lambda's Free Tier (1 million requests and 400,000 GB-seconds of compute per month) is a permanent free tier, not limited to 12 months. The 12-month free tier includes EC2 t2.micro (750 hrs), S3 (5 GB), and RDS db.t2.micro (750 hrs)."
  },
  {
    id: 398,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS cost optimization strategy recommends analyzing workload patterns and choosing the instance type that provides the best performance-to-cost ratio?",
    options: ["Use Spot Instances for all workloads", "Right-sizing", "Use Reserved Instances for all workloads", "Migrate to on-premises"],
    correct: [1],
    explanation: "Right-sizing is the process of analyzing actual resource utilization (CloudWatch metrics) and selecting the most cost-effective instance type and size. AWS Compute Optimizer automates right-sizing recommendations."
  },
  {
    id: 399,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service provides a personalized view of AWS service health events (outages, maintenance) that may affect resources in your account?",
    options: ["AWS Service Health Dashboard", "Amazon CloudWatch", "AWS Personal Health Dashboard", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "AWS Personal Health Dashboard (now called AWS Health Dashboard — Your account health) provides alerts and remediation guidance for AWS events that specifically affect your resources, such as scheduled maintenance on your EC2 host or regional outages affecting your services."
  },
  {
    id: 400,
    domain: "Billing, Pricing & Support",
    type: "multiple",
    question: "Which of the following are true about AWS Reserved Instances? (Select TWO)",
    options: ["They provide a discount compared to On-Demand pricing in exchange for a 1- or 3-year commitment", "They are always instance-specific and cannot be changed once purchased", "Standard RIs can be sold on the AWS Reserved Instance Marketplace if no longer needed", "They require upfront payment in full"],
    correct: [0, 2],
    explanation: "RIs offer discounts (up to 72%) for 1- or 3-year commitments. Standard RIs (not Convertible) can be sold on the RI Marketplace if you no longer need them. Payment options include No Upfront, Partial Upfront, and All Upfront — not mandatory full upfront. Convertible RIs can change instance attributes."
  }
];
