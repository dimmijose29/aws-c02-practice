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
    explanation: "One of the six advantages of cloud computing is 'Stop spending money running and maintaining data centers.' By moving to AWS, companies eliminate the operational burden of physical infrastructure. 'Trade fixed for variable expense' is also a valid cloud benefit, but it focuses on the cost model rather than the elimination of maintenance burden.",
    optionExplanations: [
      "'Trade fixed expense for variable expense' focuses on the payment model (CapEx vs. OpEx) — it does not specifically describe eliminating the cost of purchasing and maintaining physical servers.",
      "'Increase speed and agility' refers to faster provisioning and experimentation — it addresses time-to-market, not the burden of maintaining physical infrastructure.",
      "'Go global in minutes' refers to deploying to worldwide Regions quickly — it is about geographic reach, not eliminating data center maintenance costs.",
      "Correct — 'Stop spending money running and maintaining data centers' directly addresses the desire to avoid purchasing and maintaining physical servers by moving to AWS."
    ]
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
    explanation: "'Stop guessing capacity' is a core cloud benefit — you can scale up or down based on actual demand, eliminating the risk of over-provisioning (wasted spend) or under-provisioning (poor performance). Auto Scaling and on-demand resources embody this advantage.",
    optionExplanations: [
      "High availability ensures the system remains accessible, but it does not address the problem of uncertain future demand and over-provisioning risk.",
      "Correct — 'Stop guessing capacity' means using Auto Scaling and on-demand resources to match capacity to actual demand, eliminating over-provisioning waste and under-provisioning risk.",
      "'Economies of scale' refers to lower pricing due to AWS's aggregate purchasing power — it does not address matching infrastructure to uncertain demand.",
      "'Trade capital expense for operational expense' refers to the payment model shift — it does not specifically solve the capacity uncertainty problem described."
    ]
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
    explanation: "AWS has infrastructure in Regions around the world. Deploying to a new Region requires only a few clicks and can be accomplished in minutes, compared to months for on-premises global expansion. This is the 'Go global in minutes' advantage of cloud computing.",
    optionExplanations: [
      "'Economies of scale' describes lower pricing due to AWS's aggregate customer base — it is about cost, not the speed of global infrastructure deployment.",
      "'Elasticity' refers to auto-scaling capacity up and down — it is about matching resources to demand, not geographic expansion speed.",
      "Correct — 'Go global in minutes' describes AWS's ability to deploy applications to worldwide Regions in minutes, eliminating the months of procurement needed for on-premises global expansion.",
      "'Fault tolerance' refers to a system continuing to operate during component failures — it addresses resilience, not global deployment speed."
    ]
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
    explanation: "A hybrid deployment model connects on-premises (private) infrastructure with cloud (public) resources. It is often used by companies that cannot fully move to the cloud due to compliance, latency, or legacy requirements, but want to leverage cloud capabilities for some workloads.",
    optionExplanations: [
      "Public cloud runs entirely on a cloud provider's shared infrastructure with no on-premises component — it does not combine on-premises and cloud resources.",
      "Private cloud runs exclusively on dedicated infrastructure owned or managed by a single organization — it does not involve a public cloud provider.",
      "Correct — Hybrid cloud connects on-premises infrastructure with AWS, allowing data and applications to be shared between both environments.",
      "Multi-cloud uses multiple public cloud providers (e.g., AWS and Azure) — it does not specifically describe the combination of on-premises and cloud resources."
    ]
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
    explanation: "IaaS provides the highest level of flexibility and management control over IT resources. Customers manage the OS, middleware, runtime, data, and applications. AWS EC2 is a prime example. PaaS removes the need to manage the underlying infrastructure, and SaaS provides a complete, managed application.",
    optionExplanations: [
      "SaaS delivers a fully managed application over the internet — the provider manages everything from infrastructure to the application, leaving the customer with the least control.",
      "PaaS provides a platform for building applications without managing the underlying infrastructure — it offers more control than SaaS but less than IaaS.",
      "Correct — IaaS provides the most control: the customer manages the OS, middleware, runtime, data, and applications, while AWS manages only the physical hardware and virtualization layer.",
      "FaaS (Function as a Service) runs individual functions in a fully managed environment — the customer manages only the code logic, providing even less infrastructure control than PaaS."
    ]
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
    explanation: "PaaS provides a platform for developers to build, run, and manage applications without the complexity of maintaining the underlying infrastructure. AWS Elastic Beanstalk is an example — developers deploy their code and AWS handles the infrastructure.",
    optionExplanations: [
      "IaaS requires the customer to manage the OS, runtime, and middleware — the developer would still need to handle server infrastructure, not just the application code.",
      "Correct — PaaS provides a managed platform (e.g., AWS Elastic Beanstalk) where developers deploy code without managing the underlying OS, runtime, or server infrastructure.",
      "SaaS delivers a complete application over the internet — the developer would be consuming an existing application, not building and deploying their own.",
      "Bare metal hosting provides access to physical servers — the developer would need to manage hardware, OS, and all software layers, the opposite of what is needed."
    ]
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
    explanation: "Edge Locations are AWS data center endpoints used by services like Amazon CloudFront (CDN) and Amazon Route 53. They cache frequently accessed content at locations geographically close to users, reducing latency. There are many more edge locations than AWS Regions globally.",
    optionExplanations: [
      "An AWS Region is a geographic area with multiple Availability Zones where you deploy your primary workloads — it is not specifically designed for content caching close to users.",
      "An Availability Zone is an isolated data center within a Region for high availability — it hosts your deployed applications, not edge caching infrastructure.",
      "Correct — Edge Locations are endpoints used by CloudFront and Route 53 to cache content geographically close to users, reducing latency. There are hundreds of edge locations worldwide.",
      "A Local Zone extends AWS infrastructure to a metropolitan area for ultra-low latency compute — it runs actual workloads, not CDN caching for end-user content delivery."
    ]
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
    explanation: "Each AWS Region consists of multiple Availability Zones (AZs). AZs are physically separate data centers within a Region, with independent power, cooling, and networking. Deploying across multiple AZs ensures that a failure in one AZ does not take down the entire application.",
    optionExplanations: [
      "AWS Regions are large geographic areas containing multiple AZs — a Region-level failure is extremely rare, but deploying across AZs within a Region provides the data-center failure protection described.",
      "Correct — Availability Zones are physically separate data centers with independent power and networking. Deploying across multiple AZs ensures one data center outage does not bring down the application.",
      "Edge Locations are used for content caching (CloudFront) — they do not host your application workloads and do not provide resilience against data center power outages.",
      "AWS Local Zones extend compute to metropolitan areas for low-latency applications — they are not designed for general multi-data-center resilience."
    ]
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
    explanation: "The Reliability pillar of the AWS Well-Architected Framework focuses on the ability to recover from infrastructure or service disruptions, dynamically acquiring resources to meet demand, and mitigating disruptions such as misconfigurations or transient network issues.",
    optionExplanations: [
      "The Security pillar focuses on protecting data, systems, and assets through identity management, detection controls, and data protection — not recovery from failures or dynamic resource scaling.",
      "The Performance Efficiency pillar focuses on using computing resources efficiently and maintaining efficiency as demand changes — not specifically on recovery from failures.",
      "Correct — The Reliability pillar focuses on a system's ability to recover from failures, dynamically acquire resources to meet demand, and mitigate disruptions.",
      "The Operational Excellence pillar focuses on running and monitoring systems, automating changes, and continually improving processes — not on recovery from infrastructure failures."
    ]
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
    explanation: "Elasticity is the ability to automatically scale resources up or down to match actual demand. This prevents over-provisioning (cost waste) and under-provisioning (performance degradation). AWS Auto Scaling is the core service that provides elasticity.",
    optionExplanations: [
      "High Availability ensures a system remains accessible with minimal downtime — it is about uptime and redundancy, not automatically adjusting capacity to match demand.",
      "Fault Tolerance means a system continues operating even when components fail — it is about resilience during failures, not capacity adjustment for performance and cost optimization.",
      "Correct — Elasticity is the ability to automatically scale resources up or down to match demand, preventing over-provisioning waste and under-provisioning performance issues.",
      "Durability refers to data persistence (e.g., S3's 99.999999999% durability) — it is about protecting data from loss, not adjusting compute capacity."
    ]
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
    explanation: "Operational Excellence focuses on running and monitoring systems to deliver business value, and continually improving processes and procedures. It includes organizing teams, implementing DevOps practices, automating changes, and responding to events.",
    optionExplanations: [
      "Reliability focuses on a system's ability to recover from failures and dynamically scale — not on running, monitoring, and continually improving operational processes.",
      "Correct — Operational Excellence covers running and monitoring systems to deliver business value, and continually improving processes through automation, DevOps, and event response.",
      "Performance Efficiency focuses on using the right resource types and sizes efficiently — not on day-to-day operations, team organization, and process improvement.",
      "Cost Optimization focuses on avoiding unnecessary costs and running systems at the lowest viable price — not on operational processes and continuous improvement."
    ]
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
    explanation: "Because usage from hundreds of thousands of customers is aggregated in the cloud, AWS can achieve higher economies of scale, translating into lower pay-as-you-go prices. Individual companies could not achieve these cost efficiencies on their own.",
    optionExplanations: [
      "'Increase speed and agility' refers to faster provisioning and time-to-market — it does not describe the price reduction that comes from AWS's aggregated purchasing power.",
      "'Stop guessing capacity' refers to matching resources to actual demand — it is about capacity planning, not the cost reduction from aggregate scale.",
      "Correct — AWS's massive economies of scale mean that aggregate usage from hundreds of thousands of customers allows AWS to achieve lower prices than any single organization could.",
      "'Go global in minutes' refers to deploying to worldwide Regions quickly — it is about geographic speed, not the cost benefit from aggregated scale."
    ]
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
    explanation: "Fault tolerance means a system can continue operating correctly even when some of its components fail. High availability means a system is accessible with minimal downtime, but it may experience brief interruptions. Fault tolerance implies no interruption at all during a component failure.",
    optionExplanations: [
      "High availability means the system remains accessible with minimal downtime, but it may have brief interruptions during failover — it does not guarantee zero interruption when components fail.",
      "Correct — Fault tolerance means the system continues operating correctly even when one or more components fail, with no interruption to the end user.",
      "Elastic means the system scales capacity up or down to match demand — it is about resource adjustment, not continued operation despite component failures.",
      "Scalable means the system can handle increased load by adding resources — it is about capacity growth, not resilience to component failures."
    ]
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
    explanation: "The Performance Efficiency pillar includes using serverless architectures and managed services to remove the operational burden of managing infrastructure, allowing teams to focus on delivering business value. It also covers selecting the right resource types for workloads.",
    optionExplanations: [
      "Cost Optimization focuses on reducing costs through right-sizing, reserved pricing, and eliminating waste — it does not specifically cover using managed services to reduce operational burden.",
      "Reliability focuses on recovery from failures and dynamic scaling — not on selecting resource types or using managed services to reduce infrastructure overhead.",
      "Correct — Performance Efficiency includes democratizing advanced technologies by using managed services, removing the need to manage infrastructure, and selecting the right resource types.",
      "Operational Excellence focuses on running and monitoring systems and continually improving processes — not specifically on adopting managed services to reduce infrastructure burden."
    ]
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
    explanation: "A cloud-native (or fully cloud / public cloud) deployment means all components of the application are run in the cloud. There is no legacy on-premises infrastructure. New applications built directly on AWS and migrated applications fully moved to AWS fall into this model.",
    optionExplanations: [
      "Hybrid deployment combines on-premises and cloud resources — it explicitly includes an on-premises component, which contradicts running entirely on AWS.",
      "Private deployment runs infrastructure exclusively on a single organization's premises or dedicated environment — it does not involve a public cloud provider.",
      "Correct — Cloud-native (public cloud) deployment runs all components entirely in AWS with no on-premises infrastructure whatsoever.",
      "Multi-cloud uses multiple public cloud providers (AWS, Azure, GCP) — it does not specifically describe an all-AWS-only deployment with no on-premises component."
    ]
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
    explanation: "An AWS Region consists of two or more physically separate Availability Zones. Each AZ is one or more discrete data centers with redundant power and networking. The AZs within a Region are connected by high-bandwidth, low-latency networking to allow synchronous replication.",
    optionExplanations: [
      "Edge Locations are CDN endpoints for caching content near users — they are not the building blocks that make up an AWS Region.",
      "Correct — A Region consists of two or more physically separate Availability Zones (isolated data centers) connected by high-bandwidth, low-latency private links.",
      "An AWS Region is not a single data center — it is intentionally designed with multiple physically separate AZs to provide resilience against data center failures.",
      "Local Zones extend AWS infrastructure to metropolitan areas for low-latency compute — they are extensions of a Region, not the components that define a Region's structure."
    ]
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
    explanation: "The Cost Optimization pillar focuses on running systems at the lowest price point. Key topics include understanding spending, selecting cost-effective resources, scaling to meet demand, and optimizing over time — for example, using Reserved Instances or right-sizing EC2 instances.",
    optionExplanations: [
      "Reliability focuses on a system's ability to recover from failures and scale dynamically — not on managing costs or selecting cost-effective resource types.",
      "Correct — Cost Optimization focuses on avoiding unnecessary costs, right-sizing resources, using appropriate pricing models (RIs, Savings Plans), and understanding spending patterns.",
      "Sustainability focuses on minimizing environmental impact — not on cost management or resource pricing.",
      "Operational Excellence focuses on running, monitoring, and improving operational processes — not on cost management or selecting the most economical resource configurations."
    ]
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
    explanation: "Agility in the cloud means that a broad set of technologies are available on demand — you can spin up resources and experiment in minutes rather than weeks. This accelerates innovation because the cost of experimentation is low and time-to-market is dramatically reduced.",
    optionExplanations: [
      "Scalability refers to the ability to increase or decrease capacity to handle load changes — it is about handling demand, not about faster time-to-market or reduced time to experiment.",
      "Correct — Agility means cloud resources can be provisioned in minutes, dramatically reducing time from idea to production and lowering the cost of experimentation.",
      "Fault Tolerance means a system continues operating during component failures — it is about resilience, not about the speed of deploying new applications.",
      "Elasticity refers to automatically adjusting resources to match demand — it is about matching capacity to workload, not about accelerating innovation cycles."
    ]
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
    explanation: "Trading capital expense (CapEx) for variable expense (OpEx) is a fundamental advantage of cloud computing. Instead of investing heavily in data centers and servers before knowing how they will be used, you pay only for the compute you consume.",
    optionExplanations: [
      "Cloud computing does not eliminate security responsibilities — customers remain responsible for security IN the cloud (data, access management, configurations) under the Shared Responsibility Model.",
      "Cloud computing eliminates large upfront capital investment — it does the opposite, replacing CapEx with variable OpEx. This option describes an on-premises characteristic.",
      "Correct — 'Trade capital expense for variable expense' means paying only for what you use rather than investing upfront in data center infrastructure, which is a key cloud advantage.",
      "Cloud providers publish SLAs with high availability targets (e.g., 99.9%) but never guarantee 100% uptime — this is an incorrect and misleading statement."
    ]
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
    explanation: "AWS Direct Connect establishes a dedicated private network connection between the customer's data center and AWS. It provides more consistent network performance, lower latency, and potentially higher bandwidth compared to internet-based connections. It is commonly used in hybrid architectures.",
    optionExplanations: [
      "AWS VPN creates an encrypted tunnel over the public internet — it does not bypass the internet or provide the consistent, dedicated bandwidth of a private physical connection.",
      "Correct — AWS Direct Connect provides a dedicated private network link between on-premises and AWS, bypassing the public internet for consistent performance and lower latency.",
      "Amazon CloudFront is a CDN that caches content at Edge Locations near users — it does not provide a dedicated private connection between a data center and AWS.",
      "AWS Transit Gateway connects VPCs and on-premises networks through a central hub — it is a routing service and does not itself establish the physical private link to AWS."
    ]
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
    explanation: "AWS is responsible for 'security OF the cloud' — the physical infrastructure, hardware, networking, and the hypervisor. Customers are responsible for 'security IN the cloud' — configuring security groups, managing IAM users, encrypting data, and patching guest operating systems.",
    optionExplanations: [
      "Configuring security groups and network ACLs is the customer's responsibility ('security IN the cloud') — AWS never configures VPC networking on the customer's behalf.",
      "Managing customer data and encryption keys is always the customer's responsibility — AWS provides the tools (KMS) but never manages what data customers store or their encryption keys.",
      "Correct — Patching the hypervisor and physical host hardware is AWS's responsibility ('security OF the cloud'). Customers never touch the physical hardware or hypervisor.",
      "Setting IAM user permissions and policies is the customer's responsibility — AWS provides IAM but never manages who has what permissions within a customer's account."
    ]
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
    explanation: "Customers are always responsible for their data — including who has access to it, how it is classified, and how it is encrypted. Even with fully managed services like RDS or S3, the customer owns and is responsible for their data and access controls.",
    optionExplanations: [
      "Patching the underlying host OS for Amazon RDS is AWS's responsibility — RDS is a managed service, so AWS handles OS patching, not the customer.",
      "Correct — Customers are always responsible for their data (classification, access controls, encryption) regardless of which AWS service they use.",
      "Physical security of data centers is always AWS's responsibility — customers have no access to and no responsibility for the physical facilities.",
      "Maintaining network infrastructure and hardware is AWS's responsibility — the physical networking equipment is part of the infrastructure layer AWS manages."
    ]
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
    explanation: "AWS CloudTrail records API calls made in your AWS account, including the caller identity, time, source IP, request parameters, and response. It is the primary tool for governance, compliance, operational auditing, and risk auditing of your AWS account.",
    optionExplanations: [
      "Amazon CloudWatch monitors metrics and logs for operational performance — it does not record API call history or the identity of who made each call.",
      "AWS Config tracks resource configuration changes over time — it monitors what configurations look like, not the specific API calls and who made them.",
      "Correct — AWS CloudTrail records every API call with caller identity, timestamp, source IP, and parameters — the primary service for API call auditing and logging.",
      "Amazon GuardDuty analyzes CloudTrail logs (among others) to detect threats — it consumes CloudTrail data but does not itself record or store the API call log."
    ]
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
    explanation: "The principle of least privilege means granting only the minimum permissions required to perform a task. In AWS, this is implemented through IAM policies. Over-permissive policies increase the blast radius if credentials are compromised.",
    optionExplanations: [
      "Defense in depth means applying multiple layers of security controls — it is a broader strategy, not specifically about granting only necessary permissions.",
      "Correct — The principle of least privilege means each user or application gets only the minimum permissions needed for their specific function, reducing the blast radius of any compromise.",
      "Separation of duties means dividing tasks so no single person has end-to-end control — it is about workflow controls, not about minimizing the permissions granted to each identity.",
      "Zero trust networking means verifying every connection request regardless of origin — it is a network security model, not specifically about granting minimum permissions."
    ]
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
    explanation: "IAM Roles provide temporary credentials via AWS STS (Security Token Service) and can be assumed by external accounts or services. They are the recommended way to grant cross-account access without sharing long-term credentials like access keys or passwords.",
    optionExplanations: [
      "IAM Groups organize users and apply common permissions to them — they cannot be assumed by external accounts and do not provide temporary access for third parties.",
      "Correct — IAM Roles provide temporary credentials via AWS STS that can be assumed by external accounts without creating long-term IAM user credentials.",
      "IAM Users with password rotation still create long-term credentials — sharing these with external parties creates ongoing security risk, the opposite of what is needed.",
      "Service Control Policies restrict what AWS accounts in an Organization can do — they are governance guardrails, not a mechanism for granting temporary access to external parties."
    ]
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
    explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior. It analyzes CloudTrail logs, VPC Flow Logs, and DNS logs using machine learning and threat intelligence feeds to identify threats like crypto-mining, credential compromise, or reconnaissance.",
    optionExplanations: [
      "AWS Shield protects against DDoS attacks on the network and transport layers — it does not monitor for malicious activity inside your AWS account or unauthorized behavior.",
      "Amazon Inspector scans EC2 instances and container images for software vulnerabilities — it focuses on vulnerability assessment, not continuous threat detection using machine learning.",
      "Correct — Amazon GuardDuty continuously analyzes CloudTrail, VPC Flow Logs, and DNS logs using ML and threat intelligence to detect malicious activity and unauthorized behavior.",
      "AWS WAF filters web application traffic based on rules — it protects against web exploits, not account-level threat detection."
    ]
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
    explanation: "AWS WAF is a web application firewall that lets you create rules to block common web exploits like SQL injection, XSS, and other OWASP Top 10 threats. It can be attached to Amazon CloudFront, Application Load Balancer, or API Gateway.",
    optionExplanations: [
      "AWS Shield Standard protects against DDoS attacks at the network and transport layers — it does not inspect or block web application-layer exploits like SQL injection or XSS.",
      "Correct — AWS WAF is a web application firewall that inspects HTTP/S requests and blocks common web exploits (SQL injection, XSS, OWASP Top 10) based on configurable rules.",
      "Amazon GuardDuty is a threat detection service analyzing logs for malicious activity — it detects threats after the fact but does not block incoming web requests in real-time.",
      "AWS Firewall Manager centrally manages WAF rules and security policies across accounts — it orchestrates WAF policies but is not itself the service that blocks web exploits."
    ]
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
    explanation: "AWS Shield Standard is automatically enabled for all AWS customers at no extra charge. It provides protection against the most common, frequently occurring network and transport layer DDoS attacks targeting websites and applications. Shield Advanced is a paid upgrade with additional protections and 24/7 DDoS response team access.",
    optionExplanations: [
      "AWS WAF is a web application firewall for filtering HTTP/S traffic — it is not automatically enabled and does not specifically address DDoS protection at the network layer.",
      "Amazon GuardDuty detects threats through log analysis — it does not provide DDoS mitigation or automatic protection against network attacks.",
      "Correct — AWS Shield Standard is automatically enabled for all AWS customers at no cost, protecting against common network/transport-layer DDoS attacks.",
      "AWS Shield Advanced is a paid upgrade providing enhanced DDoS protection, 24/7 DRT access, and cost protection — it is not the automatically enabled, free-for-all-customers version."
    ]
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
    explanation: "Amazon Inspector is an automated security assessment service that checks EC2 instances and container images for software vulnerabilities (CVEs) and unintended network exposure. It integrates with AWS Systems Manager and automatically discovers and scans workloads.",
    optionExplanations: [
      "Amazon Macie is a data security service that discovers and classifies sensitive data in S3 — it does not scan EC2 instances for software vulnerabilities.",
      "Correct — Amazon Inspector performs automated vulnerability assessments on EC2 instances and container images, checking for CVEs and unintended network exposure.",
      "AWS Security Hub aggregates security findings from multiple services — it consumes Inspector findings but does not itself perform vulnerability scanning.",
      "Amazon Detective investigates potential security issues using log data — it helps analyze the root cause of findings but does not perform proactive vulnerability assessments."
    ]
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
    explanation: "Amazon Macie is a data security service that uses machine learning to automatically discover, classify, and protect sensitive data in S3. It identifies PII such as names, credit card numbers, and health information, and provides dashboards and alerts for data security risks.",
    optionExplanations: [
      "Amazon GuardDuty detects malicious activity and unauthorized behavior — it analyzes logs, not the content of S3 objects, so it cannot discover and classify PII in data.",
      "Amazon Inspector scans EC2 instances and container images for vulnerabilities — it does not analyze the content of S3 buckets for sensitive data.",
      "Correct — Amazon Macie uses machine learning to automatically discover and classify sensitive data (PII, financial data) in S3 buckets and alerts on data security risks.",
      "AWS Secrets Manager stores and rotates application secrets — it does not scan or classify sensitive data stored in S3 buckets."
    ]
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
    explanation: "AWS KMS is a managed service that makes it easy to create and control the cryptographic keys used to encrypt data. It integrates with most AWS services (S3, EBS, RDS, etc.) to provide server-side encryption and helps meet compliance requirements.",
    optionExplanations: [
      "AWS Certificate Manager (ACM) manages SSL/TLS certificates for HTTPS — it is not used to manage encryption keys for data at rest across AWS services.",
      "AWS Secrets Manager stores and rotates application secrets (passwords, API keys) — it is not the service for managing encryption keys used to encrypt AWS service data.",
      "Correct — AWS KMS centrally manages cryptographic keys for data encryption, integrating with S3, EBS, RDS, and other AWS services for server-side encryption.",
      "AWS CloudHSM provides dedicated hardware security modules for key management — it is used for stricter key control requirements where customers need to own the HSM, unlike the shared KMS service."
    ]
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
    explanation: "AWS Secrets Manager is specifically designed to store, manage, and automatically rotate secrets like database credentials, API keys, and OAuth tokens. It natively integrates with RDS, Redshift, and DocumentDB for automatic rotation without any code changes.",
    optionExplanations: [
      "AWS KMS manages cryptographic keys for data encryption — it is not designed to store database passwords or API keys and does not perform automatic secret rotation.",
      "AWS Systems Manager Parameter Store can store configuration data and secrets — but it does not natively support automatic rotation of database credentials without custom Lambda functions.",
      "Correct — AWS Secrets Manager stores secrets and natively integrates with RDS to automatically rotate database credentials and API keys without code changes.",
      "AWS IAM manages user identities and access policies — it does not store or rotate application-level secrets like database passwords."
    ]
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
    explanation: "AWS Security Hub provides a central dashboard that aggregates, organizes, and prioritizes security findings from multiple AWS services (GuardDuty, Inspector, Macie, etc.) and partner products. It runs continuous compliance checks against security standards like CIS AWS Foundations.",
    optionExplanations: [
      "AWS Config evaluates resource configurations against compliance rules — it generates its own findings but does not aggregate findings from GuardDuty, Inspector, and Macie into one dashboard.",
      "Correct — AWS Security Hub aggregates and prioritizes security findings from GuardDuty, Inspector, Macie, and partner tools, providing a unified security and compliance dashboard.",
      "Amazon Detective investigates and analyzes potential security issues — it uses Security Hub findings to investigate incidents but does not aggregate findings from multiple services.",
      "AWS Trusted Advisor provides best-practice recommendations across five categories — it does not aggregate security findings from GuardDuty, Inspector, and Macie."
    ]
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
    explanation: "AWS strongly recommends enabling MFA on the root account and not using it for routine tasks. Instead, create IAM users with appropriate permissions for day-to-day work. The root account should only be used for tasks that specifically require root-level access, such as changing the account's email address or billing plan.",
    optionExplanations: [
      "Using the root user for daily tasks violates AWS best practices — the root user has unrestricted access and should not be used routinely to minimize exposure if credentials are compromised.",
      "Sharing root user credentials with team members is a major security risk — credentials should never be shared; each user should have their own IAM identity.",
      "Correct — The best practice is to enable MFA on the root account and avoid using it for routine tasks; create individual IAM users with appropriate permissions instead.",
      "You cannot create an IAM policy that restricts root user permissions — the root user bypasses all IAM policies and has full access by design. The only protection is MFA and non-use."
    ]
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
    explanation: "AWS Artifact is a self-service portal that provides on-demand access to AWS compliance documentation, including audit reports (SOC 1, SOC 2, SOC 3), PCI DSS attestations, ISO certifications, and compliance agreements. It allows customers to review and download these documents for their own audit needs.",
    optionExplanations: [
      "AWS Config records resource configurations and evaluates compliance rules — it does not provide AWS's own compliance certifications or audit reports for download.",
      "AWS Trusted Advisor provides best-practice recommendations — it does not provide access to AWS's compliance certifications or third-party audit reports.",
      "Correct — AWS Artifact is the self-service portal for downloading AWS compliance reports (SOC, PCI DSS, ISO) and compliance agreements.",
      "AWS Security Hub aggregates security findings — it does not provide access to AWS's own compliance certifications or downloadable audit reports."
    ]
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
    explanation: "AWS Config continuously monitors and records AWS resource configurations and evaluates them against desired rules. If a resource drifts from the desired configuration (e.g., S3 bucket encryption disabled), Config can flag it and optionally trigger remediation via AWS Systems Manager Automation.",
    optionExplanations: [
      "AWS CloudTrail records API calls (who did what and when) — it does not continuously evaluate whether resource configurations comply with desired policy rules.",
      "Amazon Inspector scans for software vulnerabilities in EC2 instances and containers — it does not check S3 bucket encryption settings or resource configuration compliance.",
      "Correct — AWS Config continuously monitors resource configurations and evaluates them against rules (e.g., S3 bucket must have encryption enabled), flagging and optionally remediating drift.",
      "AWS Systems Manager provides operational management tools — it can execute remediation actions triggered by Config, but Config is the service that detects and evaluates configuration compliance."
    ]
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
    explanation: "Network ACLs (NACLs) operate at the subnet level in a VPC and are stateless — meaning both inbound and outbound rules must explicitly allow traffic. Security Groups are stateful (return traffic is automatically allowed) and operate at the instance level.",
    optionExplanations: [
      "Security Groups operate at the instance/ENI level (not subnet level) and are stateful — they automatically allow return traffic for permitted inbound connections.",
      "Correct — Network ACLs operate at the subnet level and are stateless, meaning both inbound AND outbound rules must explicitly permit traffic in both directions.",
      "AWS WAF is a web application firewall that filters HTTP/S traffic at the application layer — it does not operate at the subnet level within a VPC.",
      "AWS Shield protects against DDoS attacks at the network level — it is not a per-subnet firewall control within a VPC."
    ]
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
    explanation: "Customers are responsible for security IN the cloud: this includes patching the guest OS on EC2 instances and managing IAM configurations (users, groups, roles, and policies). AWS is responsible for the physical infrastructure, network hardware, and the underlying hypervisor.",
    optionExplanations: [
      "Maintaining physical security of AWS data centers is AWS's responsibility ('security OF the cloud') — customers never manage or access physical data center facilities.",
      "Correct — Patching the OS on EC2 instances is the customer's responsibility (customer manages the guest OS on IaaS resources).",
      "Managing network hardware and fiber cabling is AWS's responsibility — the physical networking infrastructure is part of what AWS manages.",
      "Correct — Configuring IAM users and access policies is always the customer's responsibility — AWS provides IAM as a service but never manages who has what permissions.",
      "Replacing failed hard drives in AWS storage systems is AWS's responsibility — hardware maintenance of data center equipment is part of 'security OF the cloud'."
    ]
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
    explanation: "Multi-Factor Authentication (MFA) requires a second form of verification in addition to a password. AWS supports virtual MFA apps (like Authenticator apps), hardware TOTP tokens, and FIDO2 security keys. MFA should be enabled on all IAM users, especially the root account.",
    optionExplanations: [
      "IAM Password Policy enforces password complexity and rotation — it controls the password itself but does not add a second physical or virtual device as an additional factor.",
      "Correct — Multi-Factor Authentication (MFA) requires a second form of verification (physical or virtual device) in addition to the password, adding an extra security layer.",
      "AWS Single Sign-On centralizes access management — it can integrate with MFA providers but is not itself the feature that enables the second-factor verification requirement.",
      "Federated identity allows users to use external identity providers (like corporate SSO) — it is an authentication method, not specifically the feature that requires a physical or virtual device."
    ]
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
    explanation: "AWS IAM Identity Center (formerly AWS Single Sign-On) enables centralized management of SSO access to multiple AWS accounts and business applications. It integrates with external identity providers like Microsoft Active Directory, allowing employees to use corporate credentials to access AWS.",
    optionExplanations: [
      "Amazon Cognito provides user authentication for customer-facing web and mobile applications — it is not designed for employee access to AWS using existing corporate AD credentials.",
      "Correct — AWS IAM Identity Center (formerly SSO) provides centralized single sign-on using corporate identity providers like Active Directory, allowing employees to use existing credentials.",
      "AWS Directory Service provides a managed Active Directory in AWS — it manages the directory itself but does not provide the SSO portal for AWS console/CLI access using corporate credentials.",
      "AWS Organizations manages account hierarchy and governance — it does not provide SSO functionality or integration with corporate identity providers."
    ]
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
    explanation: "AWS maintains numerous compliance certifications (PCI DSS, HIPAA, SOC, ISO, etc.) and the compliance responsibility is shared. AWS controls the physical and infrastructure layer, but customers must ensure their applications and configurations comply with relevant standards. Compliance is a shared responsibility.",
    optionExplanations: [
      "AWS's compliance certifications do not mean customers have no compliance responsibilities — customers inherit some controls but must still ensure their application configurations, data handling, and IAM policies comply with relevant standards.",
      "Correct — Compliance is shared: AWS maintains certifications for its infrastructure, and customers inherit some controls but remain responsible for configuring their applications and data compliantly.",
      "AWS has extensive compliance certifications (PCI DSS, HIPAA, SOC, ISO, FedRAMP) — the claim that AWS has none is completely false.",
      "Compliance applies to all industries and use cases — even non-regulated industries have compliance requirements (e.g., GDPR, data protection laws) that affect most AWS customers."
    ]
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
    explanation: "AWS Certificate Manager (ACM) handles the complexity of creating, storing, and renewing public and private SSL/TLS certificates. It integrates with Elastic Load Balancing, CloudFront, and API Gateway, and public certificates from ACM are free of charge.",
    optionExplanations: [
      "AWS KMS manages encryption keys for data at rest — it does not manage SSL/TLS certificates for HTTPS or provide automatic certificate renewal.",
      "Correct — AWS Certificate Manager (ACM) provisions, manages, and automatically renews SSL/TLS certificates for use with ELB, CloudFront, and API Gateway at no extra cost.",
      "AWS Secrets Manager stores application secrets like passwords and API keys — it does not manage SSL/TLS certificates or provide HTTPS functionality.",
      "AWS CloudHSM provides dedicated HSMs for key management — it can store private keys for certificates but does not automate certificate provisioning and renewal like ACM."
    ]
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
    explanation: "An IAM policy with conditions can restrict the EC2 instance types a user or group can launch. You can use the aws:RequestedRegion and ec2:InstanceType condition keys to limit which instance types are allowed. IAM policies enforce permissions at the identity level.",
    optionExplanations: [
      "An SCP in AWS Organizations restricts what accounts in an organization can do — it works at the account level and does not apply granular per-group restrictions within a single account.",
      "Correct — Attaching an IAM policy with ec2:InstanceType condition keys to the Development group allows only permitted instance types, enforcing the restriction at the identity level.",
      "AWS Config rules can detect non-compliant instance types after launch — but they do not prevent the launch; they report violations after the fact.",
      "AWS Trusted Advisor provides recommendations but cannot block or prevent specific resource configurations — it is advisory, not enforcement."
    ]
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
    explanation: "Network segmentation using subnets (public and private subnets) is a core VPC security design pattern. By isolating resources — for example, placing databases in private subnets with no internet access — you limit the blast radius of a potential breach and prevent lateral movement.",
    optionExplanations: [
      "Defense in depth applies multiple layered security controls — while subnets are one layer, defense in depth is the broader strategy, not specifically the practice of dividing a VPC into segments.",
      "Correct — Network segmentation using subnets (public/private) isolates resources so a breach in one subnet (e.g., the web tier) cannot easily spread to others (e.g., the database tier).",
      "Principle of least privilege grants only minimum necessary permissions — it is an IAM/access control concept, not a network isolation technique using VPC subnets.",
      "Zero-knowledge security is a cryptographic concept where one party proves knowledge without revealing information — it is not a VPC network segmentation practice."
    ]
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
    explanation: "AWS Shield Advanced is a premium managed DDoS protection service. It offers advanced attack visibility, 24/7 access to the AWS DDoS Response Team (DRT), and cost protection that reimburses scaling charges that result from DDoS attacks. It is available for an additional cost.",
    optionExplanations: [
      "AWS Shield Standard provides automatic DDoS protection for all customers at no cost — but it does NOT include 24/7 DRT access, financial protections, or advanced visibility.",
      "AWS WAF filters web application traffic based on rules — it protects against web exploits but does not provide DDoS response team access or financial cost protection.",
      "Correct — AWS Shield Advanced is the premium DDoS protection service providing advanced visibility, 24/7 DRT access, and financial protection against DDoS-related scaling charges.",
      "Amazon GuardDuty detects malicious activity through log analysis — it does not provide DDoS mitigation, DRT access, or financial protection against attack-related scaling charges."
    ]
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
    explanation: "Spot Instances use spare EC2 capacity and can be up to 90% cheaper than On-Demand. They are ideal for fault-tolerant, flexible workloads like batch jobs, data analysis, and rendering, which can tolerate interruptions. If the Spot price exceeds the bid or capacity is needed, the instance can be interrupted.",
    optionExplanations: [
      "On-Demand Instances provide flexible pay-by-the-second pricing — but they carry the highest per-hour cost and provide no discount for interruptible batch workloads.",
      "Reserved Instances provide discounts for committed, steady-state workloads — they are not cost-optimal for a 2-hour nightly batch job that doesn't run continuously.",
      "Correct — Spot Instances use spare EC2 capacity at up to 90% discount and are ideal for fault-tolerant batch jobs that can be interrupted and restarted without data loss.",
      "Dedicated Hosts provide physical server dedication for licensing compliance — they are not a cost optimization strategy and are the most expensive EC2 option."
    ]
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
    explanation: "AWS Lambda is a serverless compute service that runs code in response to events without requiring you to provision or manage servers. You pay only for the compute time consumed. Lambda is ideal for event-driven architectures, API backends, and automation tasks.",
    optionExplanations: [
      "Amazon EC2 provides virtual machines that require you to provision, configure, and manage the server — the developer would still need to manage the underlying infrastructure.",
      "Correct — AWS Lambda runs code in response to events (API calls, S3 uploads, etc.) without requiring server provisioning or management, billing only for actual compute time.",
      "Amazon ECS runs containerized applications but still requires infrastructure (EC2 instances or Fargate) — it is not the simplest solution for event-driven code execution.",
      "AWS Elastic Beanstalk handles deployment of web applications — it still provisions and manages EC2 instances under the hood, not a truly serverless event-driven model."
    ]
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
    explanation: "AWS Auto Scaling (and specifically EC2 Auto Scaling) monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. It can scale in or out based on CloudWatch metrics, schedules, or predictive scaling.",
    optionExplanations: [
      "Elastic Load Balancing distributes incoming traffic across multiple EC2 instances — it does not adjust the number of instances based on demand.",
      "Correct — AWS Auto Scaling monitors metrics and automatically adds or removes EC2 instances to meet demand, maintaining performance at the lowest possible cost.",
      "Amazon CloudWatch collects metrics and can trigger alarms — but it does not itself add or remove EC2 instances. Auto Scaling uses CloudWatch as a trigger source.",
      "Amazon EC2 Fleet launches instances with a specified mix of On-Demand and Spot — but it does not automatically adjust capacity over time based on demand changes."
    ]
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
    explanation: "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. With Fargate, you define your containers and do not need to provision, configure, or scale EC2 instances. AWS manages the underlying infrastructure.",
    optionExplanations: [
      "Amazon EC2 with Docker installed requires the customer to provision and manage the underlying server infrastructure — the developer must handle patching, scaling, and capacity planning.",
      "Correct — AWS Fargate is a serverless container engine where you define containers and AWS manages the underlying infrastructure — no EC2 instances to provision or scale.",
      "Amazon Lightsail provides simplified virtual private servers for simple applications — it is not a container orchestration service for microservices.",
      "AWS Elastic Beanstalk deploys web applications — while it hides some infrastructure complexity, it still provisions EC2 instances and is not designed for containerized microservices."
    ]
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
    explanation: "AWS Elastic Beanstalk is a PaaS service that handles deployment, capacity provisioning, load balancing, auto-scaling, and health monitoring. Developers simply upload code and Elastic Beanstalk deploys it. However, you retain access to the underlying AWS resources like EC2 instances and can configure them directly.",
    optionExplanations: [
      "Amazon Lightsail provides simplified VPS for small applications — it does not handle auto-scaling, load balancing, or give full access to underlying AWS resources.",
      "AWS Lambda runs individual code functions in response to events — it is not designed for deploying entire web applications with load balancing and persistent infrastructure.",
      "Correct — AWS Elastic Beanstalk automatically handles deployment, load balancing, auto-scaling, and health monitoring while retaining full access to the underlying AWS resources.",
      "Amazon ECS runs containerized applications — it does not automatically handle deployment workflows or application-level management without additional setup."
    ]
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
    explanation: "S3 Standard-IA is designed for data that is accessed less frequently but requires rapid access when needed. It offers a lower storage price than S3 Standard but charges a per-GB retrieval fee. It is suitable for backups, disaster recovery files, and long-term storage.",
    optionExplanations: [
      "S3 Standard is designed for frequently accessed data — it has higher per-GB storage costs and is not cost-optimized for data accessed infrequently.",
      "Correct — S3 Standard-IA offers lower storage cost than Standard while maintaining immediate retrieval, with a per-GB retrieval fee that makes it cost-effective for infrequent access.",
      "S3 Glacier Instant Retrieval is designed for rarely accessed archive data — while it offers instant retrieval, the storage tier implies much lower access frequency than Standard-IA.",
      "S3 One Zone-IA stores data in only one Availability Zone — it is less durable than Standard-IA (which stores across multiple AZs) and is suitable for reproducible, non-critical data."
    ]
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
    explanation: "S3 Glacier Flexible Retrieval (formerly S3 Glacier) is designed for data archiving with retrieval times ranging from minutes to hours. It offers the lowest storage cost of the readily accessible tiers. For data that can wait hours to be retrieved and is rarely accessed, this is the most cost-effective choice.",
    optionExplanations: [
      "S3 Standard is for frequently accessed data — it has the highest per-GB storage cost and is not designed for long-term archiving.",
      "S3 Standard-IA provides immediate access for infrequently accessed data — it has higher storage costs than Glacier and is not optimal for data that can wait hours for retrieval.",
      "Correct — S3 Glacier Flexible Retrieval provides very low storage costs for rarely accessed archived data, with retrieval times of minutes to hours.",
      "S3 Intelligent-Tiering automatically moves objects between tiers based on access patterns — it is useful for variable access patterns, not optimally cost-efficient for data that is already known to be rarely accessed."
    ]
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
    explanation: "Amazon EFS (Elastic File System) provides a simple, scalable, fully managed NFS file system for AWS Cloud services and on-premises resources. Multiple EC2 instances can mount and access the same EFS file system concurrently, making it ideal for shared workloads like content management and web serving.",
    optionExplanations: [
      "Amazon EBS provides block storage attached to a single EC2 instance — it cannot be simultaneously mounted by multiple instances (except Multi-Attach io1/io2 with limitations).",
      "Amazon S3 is object storage accessed via API — it does not provide a file system interface that EC2 instances can mount and use like a traditional shared file system.",
      "Correct — Amazon EFS provides a managed NFS file system that multiple EC2 instances can mount simultaneously, growing automatically as data is added.",
      "AWS Storage Gateway bridges on-premises storage with AWS cloud — it does not provide a shared file system directly mountable by EC2 instances within AWS."
    ]
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
    explanation: "Amazon S3 is AWS's object storage service, designed for internet-scale data storage. It provides 11 nines (99.999999999%) of durability, high availability, and virtually unlimited storage capacity. It is ideal for backups, media files, data lakes, static websites, and archiving.",
    optionExplanations: [
      "Amazon EBS provides block storage attached to EC2 instances — it has capacity limits, is tied to a specific AZ, and is not designed for unstructured internet-scale object storage.",
      "Amazon EFS provides a shared file system for EC2 instances — it is a file storage service, not optimized for large-scale unstructured object storage like images, videos, and backups.",
      "Correct — Amazon S3 is the purpose-built object storage service with 11 nines durability, virtually unlimited capacity, and ideal for images, videos, backups, and data lakes.",
      "Amazon RDS is a managed relational database service — it is for structured, queryable data, not for storing large unstructured files like images, videos, and backups."
    ]
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
    explanation: "RDS Multi-AZ deployments automatically provision and maintain a synchronous standby replica in a different AZ. In the event of a planned maintenance, DB failure, or AZ failure, Amazon RDS automatically fails over to the standby. This is for high availability, not for read scaling (that is what Read Replicas are for).",
    optionExplanations: [
      "Read Replicas create asynchronous copies of the database for read scaling — they improve read performance but do not provide automatic failover if the primary database fails.",
      "Correct — Multi-AZ Deployments maintain a synchronous standby in a different AZ and automatically fail over to it if the primary fails, providing high availability.",
      "Aurora Global Database replicates across multiple AWS Regions for cross-region disaster recovery — it is not specifically for AZ-level failover within a single Region.",
      "Database snapshots create point-in-time backups — they allow recovery after a failure but require manual intervention and have downtime, unlike automated Multi-AZ failover."
    ]
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
    explanation: "Amazon DynamoDB is a fully managed serverless NoSQL database service that provides single-digit millisecond performance at any scale. It is ideal for high-traffic web applications, gaming, IoT, and mobile backends that require low-latency data access at scale.",
    optionExplanations: [
      "Amazon RDS is a managed relational database service — it supports SQL-based structured data and is not designed for the flexible NoSQL key-value/document model at web scale.",
      "Amazon Aurora is a MySQL/PostgreSQL-compatible managed relational database — it is SQL-based and not a NoSQL key-value store.",
      "Correct — Amazon DynamoDB is a fully managed NoSQL database providing single-digit millisecond performance at any scale for key-value and document data.",
      "Amazon Redshift is a data warehouse for analytical SQL queries — it is designed for OLAP workloads, not low-latency transactional NoSQL applications."
    ]
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
    explanation: "Amazon Redshift is a fully managed, petabyte-scale cloud data warehouse service. It is designed for online analytical processing (OLAP) and business intelligence workloads, enabling complex queries across large datasets using standard SQL and integrating with popular BI tools.",
    optionExplanations: [
      "Amazon DynamoDB is a NoSQL key-value/document database — it is not designed for complex SQL analytical queries across petabytes of structured data.",
      "Amazon RDS for MySQL is a transactional OLTP relational database — it can handle some analytics but is not optimized for petabyte-scale analytical queries.",
      "Correct — Amazon Redshift is a petabyte-scale data warehouse designed for OLAP analytical workloads using standard SQL, integrated with popular BI tools.",
      "Amazon ElastiCache is an in-memory caching service — it stores frequently accessed data for ultra-low latency reads, not for analytical queries across large datasets."
    ]
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
    explanation: "Amazon ElastiCache is a fully managed in-memory caching service that supports Redis and Memcached. By caching frequently read data in memory, ElastiCache reduces database load and latency. DynamoDB Accelerator (DAX) is specific to DynamoDB; ElastiCache is for general-purpose caching, including RDS workloads.",
    optionExplanations: [
      "Amazon RDS is a managed relational database — it is the backend database being offloaded by a cache, not the caching layer itself.",
      "Amazon DynamoDB DAX is an in-memory acceleration layer specifically for DynamoDB — it does not cache data for RDS or other general-purpose workloads.",
      "Correct — Amazon ElastiCache provides managed Redis/Memcached for general-purpose in-memory caching, reducing database load and latency for read-heavy workloads.",
      "Amazon Redshift is a data warehouse for analytics — it is not an in-memory caching service for reducing database latency."
    ]
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
    explanation: "Amazon CloudFront is AWS's CDN service that speeds up the distribution of static and dynamic web content by caching it at edge locations worldwide. It reduces latency for global users and can also improve security by integrating with AWS WAF and AWS Shield.",
    optionExplanations: [
      "Amazon Route 53 is a DNS service that routes users to endpoints — it resolves domain names but does not cache or deliver content at edge locations.",
      "AWS Direct Connect provides a private dedicated network link from on-premises to AWS — it does not cache content globally or serve as a CDN.",
      "Correct — Amazon CloudFront is the CDN service that caches static and dynamic content at hundreds of edge locations globally, reducing latency for users worldwide.",
      "Elastic Load Balancing distributes traffic across backend resources within a Region — it does not cache content at global edge locations."
    ]
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
    explanation: "Amazon Route 53 is a highly available and scalable DNS service. It supports multiple routing policies: Simple, Weighted, Latency-based, Failover, Geolocation, Geoproximity, and Multi-value answer. It also provides domain registration and health checking capabilities.",
    optionExplanations: [
      "Amazon CloudFront is a CDN that delivers cached content to users — it does not provide DNS resolution, domain registration, or traffic routing based on health checks.",
      "Elastic Load Balancing routes traffic to backend instances — it operates at the application or network layer within AWS, not at the global DNS level for domain name resolution.",
      "Correct — Amazon Route 53 provides scalable DNS resolution with multiple routing policies (latency, geolocation, failover), health checking, and domain registration.",
      "AWS Global Accelerator improves application performance using AWS's global network — it routes traffic using anycast IPs, not DNS, and does not provide domain registration."
    ]
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
    explanation: "Amazon CloudWatch collects metrics (like EC2 CPU utilization), allows you to create alarms based on thresholds, and can trigger actions when those thresholds are breached. An SNS (Simple Notification Service) topic can be configured as the alarm action to send email notifications.",
    optionExplanations: [
      "AWS CloudTrail records API call history — it does not monitor performance metrics or send alerts when CPU utilization exceeds a threshold.",
      "Correct — Amazon CloudWatch monitors EC2 CPU utilization and triggers alarms; Amazon SNS is the notification service that sends the email alert when the alarm fires.",
      "AWS Config evaluates resource configurations for compliance — it does not monitor real-time performance metrics like CPU utilization.",
      "Amazon GuardDuty detects security threats — it does not monitor operational performance metrics, and SES is for sending bulk email, not for alarm notification workflows."
    ]
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
    explanation: "AWS CloudFormation is an Infrastructure as Code (IaC) service that lets you model, provision, and manage AWS resources using JSON or YAML templates. CloudFormation stacks ensure consistent, repeatable infrastructure deployments and allow version control of infrastructure.",
    optionExplanations: [
      "AWS Elastic Beanstalk deploys application code and manages the surrounding infrastructure — it is not an IaC tool for defining infrastructure as templates.",
      "AWS OpsWorks is a configuration management service using Chef/Puppet — it manages server configurations, not the full infrastructure definition through code templates.",
      "Correct — AWS CloudFormation uses JSON/YAML templates to define, provision, and manage entire AWS infrastructure stacks repeatably and consistently.",
      "AWS Systems Manager handles operational management (patching, inventory, run commands) — it is not an IaC service for defining and deploying infrastructure through templates."
    ]
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
    explanation: "AWS Trusted Advisor inspects your AWS environment and recommends improvements in five categories: cost optimization, performance, security, fault tolerance, and service limits. The number of checks available depends on your support plan — Business and Enterprise plans unlock all checks.",
    optionExplanations: [
      "AWS Config evaluates resource configurations against compliance rules — it checks specific settings but does not provide multi-category optimization recommendations across cost, performance, and fault tolerance.",
      "Amazon CloudWatch monitors operational metrics (CPU, memory, latency) — it provides alarms and dashboards for performance, not broad recommendations across five categories.",
      "Correct — AWS Trusted Advisor provides real-time recommendations across Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits.",
      "AWS Security Hub aggregates security findings — it focuses on security and compliance, not on cost optimization, performance, fault tolerance, or service limits."
    ]
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
    explanation: "AWS DMS (Database Migration Service) helps migrate databases to AWS quickly and securely. It supports homogeneous (e.g., MySQL to RDS MySQL) and heterogeneous (e.g., Oracle to Aurora) migrations. The source database remains operational during migration, minimizing downtime.",
    optionExplanations: [
      "AWS Snowball is used for physically transferring large amounts of data to AWS — it does not support live database migrations or cross-engine schema conversion.",
      "AWS Server Migration Service migrates entire virtual machine workloads — it is for server migrations, not specifically for database migrations with live replication.",
      "Correct — AWS DMS migrates databases with minimal downtime, supporting both homogeneous and heterogeneous (cross-engine) database migrations while keeping the source operational.",
      "AWS Schema Conversion Tool (SCT) converts the database schema from one engine to another — it works alongside DMS but is not the service that performs the actual data migration."
    ]
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
    explanation: "AWS Snowball is a physical data transport solution using secure, ruggedized appliances. It is ideal when transferring large amounts of data (terabytes to petabytes) over the network would be impractical or too slow. You copy data to the appliance and ship it to AWS for import into S3.",
    optionExplanations: [
      "AWS Direct Connect provides a dedicated private network link — for 80 TB with limited bandwidth, a physical device is faster and more practical than waiting for a network connection to provision.",
      "AWS DataSync transfers data online over the internet or Direct Connect — with limited bandwidth, transferring 80 TB online would take weeks or months.",
      "Correct — AWS Snowball ships a physical appliance to your location; you load 80 TB of data onto it and ship it back to AWS, which imports it into S3 — faster than network transfer.",
      "AWS Storage Gateway bridges on-premises storage to AWS — it is designed for ongoing hybrid access to cloud storage, not for bulk one-time data migration of 80 TB."
    ]
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
    explanation: "Application Load Balancer (ALB) operates at Layer 7 (application layer) and supports content-based routing based on URL path (e.g., /images to one target group, /api to another), hostname, HTTP headers, query strings, and more. It is designed for HTTP/HTTPS traffic.",
    optionExplanations: [
      "Classic Load Balancer operates at Layer 4 and Layer 7 but lacks advanced Layer 7 content-based routing features — it is a legacy load balancer superseded by ALB.",
      "Network Load Balancer operates at Layer 4 (TCP/UDP) — it routes based on IP addresses and ports, not URL paths or HTTP headers.",
      "Correct — Application Load Balancer operates at Layer 7 and supports content-based routing by URL path, hostname, HTTP headers, and query strings for HTTP/HTTPS traffic.",
      "Gateway Load Balancer deploys and scales third-party virtual network appliances — it is used for inline inspection and security services, not for HTTP/HTTPS content-based routing."
    ]
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
    explanation: "AWS Site-to-Site VPN creates an encrypted IPsec tunnel between the on-premises network and the AWS VPC over the public internet. It is a cost-effective and quick-to-set-up option compared to Direct Connect, though it has variable performance due to internet routing.",
    optionExplanations: [
      "AWS Direct Connect provides a dedicated private network link — it bypasses the public internet entirely and does not use an encrypted tunnel over the internet.",
      "Correct — AWS Site-to-Site VPN creates an encrypted IPsec tunnel over the public internet, providing secure connectivity between on-premises and VPC.",
      "Amazon CloudFront is a CDN for distributing content to end users — it is not a VPN or network connectivity service for on-premises to AWS connectivity.",
      "AWS Transit Gateway connects multiple VPCs and on-premises networks through a central hub — it routes traffic between connected networks but is not itself the tunnel technology."
    ]
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
    explanation: "Amazon Lightsail is designed for developers, small businesses, and students who need a simple, affordable way to run virtual private servers, applications, and databases. It provides a simplified management console with bundled resources (compute, storage, DNS, static IP) at a low, predictable monthly price.",
    optionExplanations: [
      "Amazon EC2 provides flexible, configurable virtual machines — it requires more expertise to configure and manage, and pricing is variable, not a simple bundled monthly fee.",
      "AWS Lambda is a serverless function execution service — it is event-driven and not suited for running persistent web applications, databases, or virtual private servers.",
      "Correct — Amazon Lightsail provides simplified VPS with bundled resources (compute, storage, DNS, static IP) at a predictable monthly price, ideal for simple use cases.",
      "AWS Fargate is a serverless container engine — it requires knowledge of containerization and is designed for running containerized applications, not simple VPS use cases."
    ]
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
    explanation: "Amazon SQS (Simple Queue Service) is a fully managed message queuing service. It decouples components by allowing one service to put messages in a queue and another service to read and process them independently. This prevents data loss and enables resilient, loosely coupled architectures.",
    optionExplanations: [
      "Amazon SNS is a pub/sub notification service that fans out messages to multiple subscribers simultaneously — it is not a point-to-point queue where one consumer processes each message.",
      "Correct — Amazon SQS provides managed message queuing for asynchronous, decoupled communication between components, with one consumer processing each message.",
      "Amazon MQ is a managed message broker for Apache ActiveMQ and RabbitMQ — it is designed for migrating existing messaging apps, not the native AWS-native queue service.",
      "AWS EventBridge is an event bus for routing events between AWS services and SaaS apps — it is an event router, not a queue that buffers messages for point-to-point processing."
    ]
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
    explanation: "Amazon SNS (Simple Notification Service) is a fully managed pub/sub messaging service. Publishers send messages to SNS topics, and SNS fans out the message to all subscribed endpoints — including email, SMS, SQS queues, Lambda functions, HTTP endpoints, and mobile push notifications — simultaneously.",
    optionExplanations: [
      "Amazon SQS is a point-to-point message queue — one consumer processes each message; it does not fan out to multiple subscribers simultaneously across different channels.",
      "Correct — Amazon SNS fans out messages simultaneously to all subscribed endpoints including email, SMS, SQS, Lambda, HTTP, and mobile push when a publisher sends to a topic.",
      "Amazon SES (Simple Email Service) is designed for sending bulk transactional or marketing emails — it does not support multi-channel fanout to SMS and mobile push.",
      "Amazon Pinpoint is a marketing communication service for targeted user engagement campaigns — it is not designed for real-time event-driven multi-channel notification fanout."
    ]
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
    explanation: "Amazon EKS (Elastic Kubernetes Service) is a fully managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install and operate your own Kubernetes control plane or worker nodes. AWS manages the availability and scalability of the Kubernetes control plane.",
    optionExplanations: [
      "Amazon ECS is AWS's own container orchestration service — it uses AWS-specific APIs, not the Kubernetes API, so it does not provide a managed Kubernetes control plane.",
      "AWS Fargate is a serverless compute engine for containers — it is an infrastructure provider that can run containers for EKS or ECS, not a Kubernetes control plane service itself.",
      "Correct — Amazon EKS is the fully managed Kubernetes service, with AWS managing the Kubernetes control plane's availability and scalability.",
      "AWS App Runner is a fully managed service for deploying containerized web applications — it abstracts all infrastructure but is not a managed Kubernetes service."
    ]
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
    explanation: "Amazon Aurora Global Database allows a single Aurora database to span multiple AWS Regions. It replicates data to secondary Regions with typical latency under a second, and can promote a secondary Region to take full read/write workloads in under a minute for disaster recovery.",
    optionExplanations: [
      "Multi-AZ deployment provides automatic failover within a single Region — it does not replicate across multiple AWS Regions for cross-region disaster recovery.",
      "Aurora Read Replicas scale read traffic within or across Regions — but standard read replicas have higher replication latency and cannot promote to full read/write as quickly as Global Database.",
      "Correct — Aurora Global Database replicates across up to 5 Regions with sub-second latency and can promote a secondary Region to read/write in under a minute for DR.",
      "Aurora Serverless automatically adjusts Aurora capacity based on demand — it is an autoscaling feature, not a multi-Region replication technology."
    ]
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
    explanation: "AWS Storage Gateway is a hybrid cloud storage service that provides on-premises applications with access to cloud storage. It supports file, volume, and tape storage interfaces that transparently store data in S3, EBS snapshots, or S3 Glacier, bridging on-premises environments with cloud storage.",
    optionExplanations: [
      "AWS DataSync is used for online data transfer between on-premises and AWS — it is designed for migrations and data sync tasks, not for ongoing transparent access to cloud storage from on-premises applications.",
      "Correct — AWS Storage Gateway provides on-premises applications with transparent access to AWS cloud storage (S3, EBS, Glacier) through file, volume, or tape interfaces.",
      "Amazon S3 Transfer Acceleration speeds up S3 uploads/downloads using edge locations — it does not provide on-premises applications with seamless integrated access to cloud storage.",
      "AWS Snowball Edge is for offline data transfer in disconnected environments — it is not a persistent hybrid gateway service for ongoing on-premises-to-cloud storage integration."
    ]
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
    explanation: "Amazon Athena is an interactive, serverless query service that uses standard SQL to analyze data directly in S3. There is no infrastructure to set up or manage — you just point Athena at your data in S3, define the schema, and start querying. You pay only for the queries run.",
    optionExplanations: [
      "Amazon Redshift is a managed data warehouse — it requires provisioning clusters, loading data into Redshift, and managing infrastructure, unlike Athena's serverless query-in-place approach.",
      "Amazon EMR is a managed big data platform (Hadoop, Spark) — it requires cluster provisioning and management, making it more complex than a serverless SQL query service.",
      "Correct — Amazon Athena is a serverless SQL query service that analyzes data directly in S3 with no infrastructure to manage, paying only for queries run.",
      "AWS Glue is an ETL service that transforms and loads data — it is used for data preparation, not as the SQL query interface for analyzing data already stored in S3."
    ]
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
    explanation: "3-Year Reserved Instances with All Upfront payment provide the highest possible discount (up to 72%) compared to On-Demand pricing. The longer the term and the higher the upfront payment, the greater the discount. They are ideal for steady-state, predictable workloads.",
    optionExplanations: [
      "On-Demand has no commitment and the highest per-hour price — it provides zero discount for steady-state workloads.",
      "Spot Instances can offer lower prices but can be interrupted at any time by AWS, making them unsuitable for steady, continuous workloads.",
      "1-Year All Upfront RIs offer a meaningful discount (~40%), but the 3-year term with all-upfront payment achieves a significantly deeper saving.",
      "Correct — 3-Year All Upfront Reserved Instances deliver the maximum discount (up to 72%) for workloads that run continuously and predictably over 3 years."
    ]
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
    explanation: "Compute Savings Plans provide the most flexibility — they automatically apply to any EC2 instance regardless of Region, instance family, OS, or tenancy, as well as to AWS Fargate and Lambda. They offer savings of up to 66% over On-Demand in exchange for a 1 or 3-year commitment to a specific compute spend.",
    optionExplanations: [
      "Reserved Instances are tied to a specific instance family and Region — they lack the cross-family, cross-Region, and cross-service flexibility described.",
      "Spot Instances are not a commitment-based pricing model; they use spare EC2 capacity and can be interrupted at any time.",
      "Correct — Compute Savings Plans apply automatically to any EC2 instance type, family, OS, and Region, plus Lambda and Fargate, in exchange for a $/hour spend commitment.",
      "Dedicated Hosts are physical servers allocated exclusively to you for licensing or compliance purposes — they are not a flexible cost-commitment model."
    ]
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
    explanation: "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time. You can create custom reports, filter by dimension (service, region, account, tag), and view forecasts. It also provides rightsizing recommendations.",
    optionExplanations: [
      "AWS Budgets is used to set spending thresholds and receive alerts — it does not provide an interactive graphical interface for exploring historical cost trends.",
      "The Cost and Usage Report exports raw data to S3 — it is not a visualization tool and requires a separate analytics service to explore.",
      "Correct — AWS Cost Explorer provides an interactive interface to visualize up to 13 months of historical costs, filter by dimension, and forecast future spending.",
      "AWS Pricing Calculator estimates costs of planned architectures before deployment — it does not analyze existing usage data."
    ]
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
    explanation: "AWS Budgets allows you to set custom cost and usage budgets and receive alerts (via email or SNS) when costs exceed — or are forecasted to exceed — a defined threshold. You can create budgets for cost, usage, Reserved Instance utilization, and Savings Plans.",
    optionExplanations: [
      "Cost Explorer visualizes and forecasts spending but does not directly send threshold-based alert notifications when a spending limit is reached.",
      "Correct — AWS Budgets lets you set a dollar threshold (e.g., $500/month) and sends email or SNS alerts when actual or forecasted costs exceed it.",
      "The Cost and Usage Report delivers detailed billing data to S3 — it does not send alerts or notifications based on spending levels.",
      "Amazon CloudWatch sends alarms based on operational metrics (CPU, latency, error rates) — AWS Budgets is the correct service for cost-based alerts."
    ]
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
    explanation: "AWS Pricing Calculator is a free web-based tool that allows you to estimate the cost of your planned AWS infrastructure before you deploy it. You can model your solution, configure resources, and review an estimated monthly bill without creating an account.",
    optionExplanations: [
      "Cost Explorer analyzes actual historical spending — it cannot estimate the cost of a new, not-yet-deployed architecture.",
      "AWS Budgets monitors current spending against defined limits — it is not a planning or estimation tool for future architectures.",
      "Correct — AWS Pricing Calculator (calc.aws) lets you configure any combination of AWS services and obtain a monthly cost estimate before creating any resources.",
      "Trusted Advisor provides best-practice checks on your existing environment — it does not estimate the cost of new workloads."
    ]
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
    explanation: "Enterprise Support is the highest tier and includes 24/7 phone, chat, and email access, a designated Technical Account Manager (TAM) who provides proactive guidance, Infrastructure Event Management (IEM), and a 15-minute response time for business-critical system failures.",
    optionExplanations: [
      "Basic Support is free and provides only documentation and community forum access — no Cloud Support Engineers, no phone/chat, and no TAM.",
      "Developer Support provides email-based support during business hours — no 24/7 phone or chat access and no dedicated TAM.",
      "Business Support provides 24/7 phone/chat/email access to engineers with a 1-hour SLA for critical cases, but does not include a dedicated TAM.",
      "Correct — Enterprise Support is the only tier that includes a dedicated Technical Account Manager, 24/7 multi-channel access, and a 15-minute response SLA for critical outages."
    ]
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
    explanation: "AWS Basic Support is free and included for all AWS customers. It provides access to documentation, whitepapers, AWS re:Post (community forums), AWS Personal Health Dashboard, and the six core Trusted Advisor checks. It does not include access to Cloud Support Engineers.",
    optionExplanations: [
      "Correct — Basic Support is free for all AWS accounts and provides documentation, AWS re:Post, Personal Health Dashboard, and 6 core Trusted Advisor checks with no monthly fee.",
      "Developer Support ($29/month minimum) provides email-based technical support — it costs money and is more than needed just for documentation access.",
      "Business Support ($100/month minimum) provides 24/7 phone, chat, and email to engineers — significantly more expensive and comprehensive than needed.",
      "Enterprise On-Ramp Support carries a substantial monthly cost and includes a pool of TAMs — far beyond the minimum documentation and forums access needed."
    ]
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
    explanation: "AWS Organizations lets you centrally manage and govern multiple AWS accounts. It enables consolidated billing, the application of Service Control Policies (SCPs) to restrict what actions accounts can perform, and the grouping of accounts into Organizational Units (OUs) for policy management.",
    optionExplanations: [
      "IAM Identity Center centralizes user access and single sign-on across accounts — it manages who can log in, not how accounts are structured or governed.",
      "AWS Control Tower automates the setup of a secure multi-account landing zone using Organizations, but Organizations itself is the foundational service providing account hierarchy and SCPs.",
      "Correct — AWS Organizations provides the account hierarchy (OUs), Service Control Policies for governance, and consolidated billing across all member accounts.",
      "AWS Config tracks resource configuration changes and compliance rules — it does not manage multi-account structure or apply organization-wide governance policies."
    ]
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
    explanation: "Consolidated Billing is a feature of AWS Organizations that combines the bills of all member accounts into a single payment. This enables volume pricing discounts (since total usage is aggregated) and allows unused Reserved Instances or Savings Plans from one account to be applied to others in the organization.",
    optionExplanations: [
      "Service Control Policies restrict what API actions accounts in an organization can perform — they are a governance tool, not a billing aggregation feature.",
      "Correct — Consolidated Billing combines all member account usage into one bill and aggregates usage for volume discounts, while sharing unused RI/Savings Plans benefits across accounts.",
      "AWS Budgets integration provides cost threshold alerts — it does not aggregate usage across accounts for volume pricing purposes.",
      "Cost Explorer's multi-account view displays costs across accounts but is a reporting tool — the actual volume discount mechanism comes from consolidated billing."
    ]
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
    explanation: "The AWS Free Tier provides 12-month free access to certain services (like 750 hours/month of EC2 t2.micro, 5 GB of S3, and 25 GB of DynamoDB) for new accounts. It also includes always-free offers (like Lambda's 1M free requests/month) and short-term trials for some services.",
    optionExplanations: [
      "Spot Instances use spare EC2 capacity at a discount but always charge for usage — they are a purchasing model, not a free tier program.",
      "Correct — The AWS Free Tier includes 12-month free offers for new accounts (e.g., 750 hrs/month EC2 t2.micro, 5 GB S3), plus always-free and short-term trial offers.",
      "On-Demand pricing is the standard pay-per-use model — it always charges for usage and is not a free offering.",
      "AWS does not have a specific 'Dev/Test accounts' free program — the Free Tier is the relevant offering for exploring AWS at no cost."
    ]
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
    explanation: "The AWS Pricing Calculator can model total cost of ownership (TCO) comparisons between on-premises and AWS. By entering on-premises infrastructure details (servers, storage, networking, labor), you can compare the full cost against equivalent AWS services to build a business case for migration.",
    optionExplanations: [
      "Cost Explorer analyzes existing AWS spending — it cannot compare on-premises infrastructure costs against AWS alternatives.",
      "AWS Migration Hub tracks the status of active migrations — it does not perform cost comparisons between on-premises and AWS.",
      "Correct — AWS Pricing Calculator supports TCO modeling: you enter on-premises hardware and operational costs and compare them against equivalent AWS services to build a migration business case.",
      "Trusted Advisor checks your existing AWS environment for optimization opportunities — it does not provide on-premises-to-cloud cost comparisons."
    ]
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
    explanation: "The Sustainability pillar (added in 2021) focuses on minimizing the environmental impact of running cloud workloads. Best practices include understanding your impact, setting sustainability goals, maximizing utilization, and adopting new efficient hardware and managed services.",
    optionExplanations: [
      "Cost Optimization focuses on reducing financial costs through right-sizing and appropriate pricing models — it does not address environmental impact or carbon footprint.",
      "Operational Excellence focuses on running and monitoring systems and improving operational processes — not on minimizing environmental impact.",
      "Correct — Sustainability (added to the Well-Architected Framework in 2021) focuses on minimizing the environmental impact of workloads through maximizing utilization and adopting efficient technologies.",
      "Performance Efficiency focuses on using computing resources efficiently to meet system requirements — while it can reduce waste, its goal is performance, not environmental sustainability."
    ]
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
    explanation: "The AWS Well-Architected Tool is a service that lets you review the state of your workloads against the latest AWS architectural best practices. It asks questions across the six pillars and provides an improvement plan with prioritized recommendations.",
    optionExplanations: [
      "AWS Trusted Advisor provides automated real-time best-practice checks across five categories — it does not guide you through a structured architectural review across all six Well-Architected pillars.",
      "Correct — The AWS Well-Architected Tool conducts structured reviews by asking questions across all six pillars and produces a prioritized improvement plan with identified risks.",
      "AWS Config records resource configurations and evaluates compliance — it does not perform architectural reviews or provide guidance across the Well-Architected pillars.",
      "AWS Security Hub aggregates security findings from multiple services — it is focused on security posture, not architectural reviews across all six pillars."
    ]
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
    explanation: "Trading fixed expense (CapEx) for variable expense (OpEx) means you pay only for what you use rather than investing upfront in data center infrastructure. This eliminates the large capital outlay required for physical servers.",
    optionExplanations: [
      "'Increase speed and agility' refers to faster provisioning and time-to-market — it addresses time, not the financial model of avoiding large capital investment.",
      "'Go global in minutes' refers to deploying to worldwide Regions quickly — it is about geographic reach, not the elimination of upfront capital expenditure.",
      "Correct — 'Trade fixed expense for variable expense' directly addresses avoiding the $2M capital outlay by paying only for what is used (OpEx) rather than buying hardware upfront.",
      "'Benefit from massive economies of scale' refers to lower prices due to AWS's aggregate buying power — it is a pricing benefit, not directly about eliminating capital investment."
    ]
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
    explanation: "In the SaaS model, the provider manages infrastructure, OS, runtime, middleware, and the application itself. Customers only manage their data and user access. Examples include Gmail, Salesforce, and Microsoft 365. This offers the least customer control but the least operational burden.",
    optionExplanations: [
      "IaaS (e.g., EC2) requires the customer to manage the OS, middleware, runtime, and application — the customer retains significant responsibility, not just data and how they use the service.",
      "PaaS (e.g., Elastic Beanstalk) requires the customer to manage the application and data — the customer still deploys and maintains their own application code.",
      "Correct — SaaS means the provider manages everything including the application; customers only manage their own data and configure how they use the service (e.g., Gmail, Salesforce).",
      "Container as a Service still requires the customer to manage containerized applications — it is not a model where everything is managed by the provider."
    ]
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
    explanation: "AWS Outposts is a fully managed service that brings AWS infrastructure, services, APIs, and tools to virtually any on-premises facility. It allows customers to run AWS services locally while connecting to the broader AWS cloud — ideal for low-latency requirements and local data processing.",
    optionExplanations: [
      "AWS Local Zones extend AWS infrastructure to metropolitan areas — they are AWS-owned facilities, not physical hardware installed in a customer's own on-premises data center.",
      "AWS Wavelength embeds AWS compute in 5G telecom networks — it is designed for mobile edge computing, not for running AWS services inside a customer's data center.",
      "Correct — AWS Outposts delivers AWS-managed rack hardware directly to a customer's on-premises facility, enabling AWS APIs and services to run locally.",
      "AWS Snow Family (Snowball, Snowcone) devices are used for data migration and edge computing in disconnected environments — they are not a persistent on-premises AWS infrastructure solution."
    ]
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
    explanation: "AWS Wavelength embeds AWS compute and storage within communications service providers' 5G networks, enabling single-digit millisecond latency to mobile devices. Common use cases include AR/VR, real-time gaming, and connected vehicle applications.",
    optionExplanations: [
      "AWS Local Zones extend AWS to metropolitan areas for low-latency compute, but they are not embedded inside telecom 5G networks and do not provide mobile edge computing.",
      "Correct — AWS Wavelength embeds AWS compute and storage within telecom providers' 5G networks, enabling single-digit millisecond latency to mobile and connected devices.",
      "AWS Outposts brings AWS to a customer's on-premises facility — it is not embedded in 5G networks or designed for mobile edge use cases.",
      "Edge Locations are CloudFront CDN endpoints for content caching — they do not provide compute embedded in 5G networks for mobile applications."
    ]
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
    explanation: "AWS Local Zones are extensions of an AWS Region placed in major metropolitan areas, allowing you to run latency-sensitive workloads closer to large population centers far from existing AWS Regions. They offer a subset of AWS services with single-digit millisecond latency to local users.",
    optionExplanations: [
      "AWS Wavelength is embedded inside 5G telecom networks for mobile edge computing — it is designed for mobile device latency, not metropolitan area workloads near population centers.",
      "AWS Outposts delivers AWS hardware to a customer's own data center — it is for on-premises use, not for placing AWS infrastructure closer to a city's population.",
      "Correct — AWS Local Zones are AWS-owned infrastructure placed in major cities, providing a subset of AWS services with single-digit millisecond latency to users in that metropolitan area.",
      "Edge Locations serve CloudFront CDN and Route 53 — they cache content but do not run general-purpose compute workloads for latency-sensitive applications."
    ]
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
    explanation: "Scalability is the ability to handle increased load by adding resources. Elasticity extends this by also automatically scaling DOWN when demand decreases, so you pay only for what you use at any given time. Elasticity is dynamic and bidirectional.",
    optionExplanations: [
      "Scalability does not refer to automatic adjustment — it can be manual or automated. And elasticity is not limited to manual adjustment; it specifically implies automatic bidirectional scaling.",
      "Correct — Scalability is the ability to increase capacity to handle growth; elasticity extends this by automatically scaling both up AND down based on actual demand.",
      "Both scalability and elasticity are cloud benefits — the claim that one is on-premises and one is cloud is incorrect.",
      "They are NOT synonymous — scalability focuses on growing capacity, while elasticity adds the ability to automatically scale down when demand decreases."
    ]
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
    explanation: "The Business perspective of the AWS CAF helps stakeholders understand how to use the cloud to achieve business objectives. It focuses on business strategy, aligning IT investments with business goals, and building a clear business case for cloud adoption.",
    optionExplanations: [
      "The People perspective focuses on organizational change management, skills, and training needed for cloud adoption — not on aligning business goals with cloud investments.",
      "Correct — The Business perspective ensures cloud adoption is tied to business objectives, ROI, and creates a clear business case for cloud investments.",
      "The Platform perspective covers the technical implementation of the cloud environment, architecture standards, and platform provisioning — not business alignment.",
      "The Operations perspective covers operating and recovering cloud workloads at agreed-upon service levels — not on aligning cloud adoption with business strategy."
    ]
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
    explanation: "Rehosting (lift and shift) migrates applications to the cloud without modifying the underlying architecture. It is the fastest migration path, requires no code changes, and is often used as a first step toward cloud modernization.",
    optionExplanations: [
      "Replatform ('lift, tinker, and shift') makes minor optimizations such as switching to a managed database — it involves some changes, not a minimal/no-change migration.",
      "Refactor (re-architect) completely redesigns the application using cloud-native services — it is the most complex strategy, the opposite of minimal changes.",
      "Correct — Rehost (lift and shift) migrates applications to AWS with no changes to the architecture, making it the fastest and simplest migration strategy.",
      "Repurchase (drop and shop) replaces an on-premises application with a SaaS product — it involves switching software, not migrating the existing application."
    ]
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
    explanation: "Repurchasing (also called 'drop and shop') involves moving from a traditional license to a SaaS model — for example, replacing an on-premises CRM with Salesforce. It simplifies operations by moving to a fully managed SaaS product.",
    optionExplanations: [
      "Rehost (lift and shift) migrates the existing application to the cloud without changes — it does not replace the application with a SaaS alternative.",
      "Replatform makes minor optimizations to the existing application (e.g., switching to managed databases) — it does not involve replacing the application with a SaaS product.",
      "Correct — Repurchase (drop and shop) replaces an existing on-premises licensed application with a SaaS alternative, such as moving from an on-premises CRM to Salesforce.",
      "Refactor completely redesigns and rebuilds the application using cloud-native services — it is a deep re-architecture, not a replacement with an existing SaaS product."
    ]
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
    explanation: "Replatforming ('lift, tinker, and shift') involves making a few cloud-optimized changes — such as using a managed database instead of installing one on a VM — without changing the core architecture. It provides some cloud benefits without the complexity of full re-architecture.",
    optionExplanations: [
      "Rehost (lift and shift) migrates the application with zero changes — no optimizations such as switching to managed services are made.",
      "Correct — Replatform ('lift, tinker, and shift') makes minor optimizations like switching to Amazon RDS without completely re-architecting the application, providing cloud benefits at lower complexity.",
      "Refactor completely redesigns the application using cloud-native microservices and serverless architectures — it involves far more than 'some optimizations' to the existing design.",
      "Retire means decommissioning applications that are no longer needed — it does not involve migration or optimization."
    ]
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
    explanation: "Refactoring (re-architecting) involves reimagining how an application is designed using cloud-native features. It is the most complex strategy but offers the greatest long-term benefits in agility, performance, and scalability.",
    optionExplanations: [
      "Rehost migrates without any code or architecture changes — it does not redesign the application with cloud-native patterns.",
      "Replatform makes minor optimizations to the existing architecture — it does not completely redesign the application using microservices or serverless.",
      "Repurchase replaces an application with a SaaS product — it does not involve rebuilding an existing application using cloud-native services.",
      "Correct — Refactor/Re-architect completely reimagines the application design using cloud-native features like microservices, serverless, and managed services for maximum long-term benefit."
    ]
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
    explanation: "Recovery Time Objective (RTO) is the maximum acceptable time to restore services after a disaster — it answers 'how quickly must we recover?' Recovery Point Objective (RPO) answers 'how much data can we afford to lose?' and measures the maximum age of recoverable data.",
    optionExplanations: [
      "Recovery Point Objective (RPO) measures the maximum acceptable amount of data loss, expressed as a time period (e.g., up to 1 hour of data) — it is about data, not about time to restore services.",
      "Correct — Recovery Time Objective (RTO) is the maximum acceptable duration for restoring systems after a disaster — it directly answers 'how quickly must we be back online?'",
      "Maximum Tolerable Downtime (MTD) is a broader concept covering the maximum total downtime a business can survive — it is related but not the standard term for 'must restore within 4 hours.'",
      "Mean Time to Recovery (MTTR) is an operational metric measuring average repair time for recurring failures — it is not a business continuity planning target for disaster recovery."
    ]
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
    explanation: "The pilot light strategy keeps core/critical systems running in AWS at all times (like a pilot light on a furnace). In a disaster, you scale up from this minimal footprint. It is faster than backup-and-restore but cheaper than warm standby, which runs a fully scaled-down copy of the production environment.",
    optionExplanations: [
      "Backup and restore stores data in S3/Glacier and restores from scratch in a disaster — it is the slowest strategy with the highest RTO, not a balance between speed and cost.",
      "Correct — Pilot light keeps only the core/most critical systems running at minimum scale in AWS at all times, enabling faster recovery than backup-and-restore at lower cost than warm standby.",
      "Warm standby runs a full but scaled-down copy of the production environment at all times — it is faster to recover than pilot light but costs more due to continuously running resources.",
      "Multi-site active/active runs full production capacity in multiple sites simultaneously — it provides the lowest RTO/RPO but is the most expensive strategy."
    ]
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
    explanation: "AWS Edge Locations are sites deployed in major cities worldwide. They serve as endpoints for CloudFront (caching content closer to users) and Route 53 (answering DNS queries). There are many more edge locations than Regions, providing a globally distributed network.",
    optionExplanations: [
      "An AWS Availability Zone is an isolated data center within a Region — it hosts compute workloads, not CDN/DNS endpoint infrastructure.",
      "An AWS Local Zone extends AWS compute to a metropolitan area for low-latency workloads — it runs application compute, not CDN/DNS services.",
      "Correct — AWS Edge Locations serve as endpoints for CloudFront (CDN caching) and Route 53 (DNS resolution), deployed worldwide in hundreds of cities.",
      "AWS Wavelength Zones are embedded in 5G telecom networks for mobile edge computing — they are not endpoints for CloudFront or Route 53."
    ]
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
    explanation: "'Design for failure' encourages building systems assuming individual components will fail. By using multiple AZs, health checks, and auto-replacement, the overall system remains highly available despite individual component failures.",
    optionExplanations: [
      "Correct — 'Design for failure' means assuming components will fail and using multiple AZs, health checks, and auto-replacement so traffic is automatically rerouted with no user disruption.",
      "Loose coupling means components interact through well-defined interfaces and can operate independently — it supports resilience but does not specifically describe automatic traffic rerouting after failure.",
      "Implement elasticity means automatically scaling capacity up or down to match demand — it is about resource adjustment, not automatic failover and traffic rerouting.",
      "'Think parallel' means processing tasks concurrently instead of sequentially — it is about performance and throughput, not automatic failure recovery."
    ]
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
    explanation: "Loose coupling means components interact through well-defined interfaces (APIs, message queues) and are not tightly dependent on each other's internal implementation. This allows individual components to be updated, scaled, or replaced independently, improving resilience and agility.",
    optionExplanations: [
      "Combining services into a monolithic application is tight coupling — this is the opposite of loose coupling and creates dependencies that make individual components hard to update or scale.",
      "Correct — Loose coupling means components interact through well-defined APIs or message queues and can operate independently, allowing them to be scaled, updated, or replaced without affecting others.",
      "Tightly binding application layers together is tight coupling — it reduces resilience and agility because a change in one layer affects all dependent layers.",
      "Using a single database for all application state creates tight coupling — all components share and depend on the same data store, creating a bottleneck and single point of failure."
    ]
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
    explanation: "Automation is a foundation of Operational Excellence. By automating tasks (using CloudFormation, Systems Manager, Lambda, etc.), teams eliminate manual errors, ensure repeatability, and free staff for higher-value work. Automation also enables consistent security and compliance enforcement.",
    optionExplanations: [
      "Elasticity refers to automatically scaling resources to match demand — it is about capacity adjustment, not about eliminating manual processes and ensuring repeatability through code.",
      "Correct — Automation means implementing infrastructure and processes as code (CloudFormation, Systems Manager), eliminating manual steps, ensuring repeatability, and enabling consistent execution.",
      "Loose coupling means components interact through well-defined interfaces — it is about system architecture, not about implementing tasks through code for repeatability.",
      "'Think parallel' means processing work concurrently — it is about performance and throughput optimization, not about automating and codifying operational tasks."
    ]
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
    explanation: "NIST defines five cloud computing characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. On-demand self-service means users provision resources without human interaction. Broad network access means services are accessible over the network from various devices.",
    optionExplanations: [
      "Correct — On-demand self-service is one of the five NIST cloud characteristics: users can provision resources without human interaction from the provider.",
      "Fixed monthly pricing is not a cloud characteristic — cloud computing uses measured service (pay for what you use), the opposite of fixed pricing.",
      "Correct — Broad network access is one of the five NIST characteristics: services are available over the network and accessible from standard devices (phones, laptops, tablets).",
      "Dedicated physical hardware for each customer describes dedicated/private infrastructure — NIST's resource pooling characteristic means resources are shared across multiple customers (multi-tenant).",
      "Manual provisioning requiring IT approval is the traditional on-premises model — on-demand self-service (no human interaction needed) is the cloud characteristic."
    ]
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
    explanation: "Serverless architectures (Lambda, Fargate, DynamoDB, etc.) remove the undifferentiated heavy lifting of server management — patching, scaling, capacity planning. Teams focus on writing code that delivers business value. The Performance Efficiency pillar emphasizes democratizing advanced technologies to eliminate operational burden.",
    optionExplanations: [
      "Serverless services are not always cheaper than EC2 — for high, sustained workloads EC2 may be more cost-effective. The key benefit is reduced operational burden, not guaranteed lower cost.",
      "Correct — The primary reason for serverless adoption in the Performance Efficiency pillar is eliminating server management (patching, scaling, capacity planning), letting teams focus on business logic.",
      "Serverless does not guarantee 100% uptime — AWS publishes SLAs for serverless services but none guarantee absolute 100% availability.",
      "Serverless services do not automatically encrypt all data — encryption configuration (server-side encryption, KMS integration) still requires customer configuration."
    ]
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
    explanation: "'Stop spending money running and maintaining data centers' lets organizations focus on customers and business differentiators rather than IT infrastructure work. AWS handles data center operations (hardware replacement, power, cooling, physical security), freeing teams to focus on innovation.",
    optionExplanations: [
      "'Economies of scale' refers to lower AWS pricing from aggregate purchasing power — it is about cost reduction, not about eliminating the time spent on hardware maintenance tasks.",
      "'Go global in minutes' refers to deploying to worldwide Regions quickly — it is about geographic speed, not about eliminating hardware maintenance work.",
      "Correct — 'Stop spending money running and maintaining data centers' directly addresses the elimination of hardware maintenance tasks like replacing failed servers.",
      "'Trade capital expense for variable expense' refers to the payment model shift — it addresses capital investment, not specifically the operational burden of hardware maintenance."
    ]
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
    explanation: "Horizontal scaling (scaling out) adds more instances or nodes to distribute load. Vertical scaling (scaling up) increases the size of a single instance. Cloud architectures favor horizontal scaling because it provides better fault tolerance and can scale further without hitting hardware limits.",
    optionExplanations: [
      "Vertical scaling (scaling up) upgrades a single server to a larger size — it is the opposite of adding more instances to distribute load.",
      "Correct — Horizontal scaling (scaling out) adds more instances of the same type to distribute load, providing better fault tolerance and the ability to scale beyond single-server hardware limits.",
      "'Diagonal scaling' is not a recognized cloud computing term — horizontal and vertical scaling are the two standard approaches.",
      "'Gravitational scaling' is not a recognized cloud computing term — it is not an AWS or industry standard concept."
    ]
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
    explanation: "The AWS Cloud Adoption Framework (CAF) organizes guidance into six perspectives covering responsibilities for different stakeholder groups. It helps organizations develop a comprehensive cloud adoption plan aligned to their business goals and readiness.",
    optionExplanations: [
      "The AWS Well-Architected Tool reviews existing workload architectures against best practices across six pillars — it does not provide a migration planning framework with organizational perspectives.",
      "AWS Migration Hub tracks the progress of active migration projects — it does not provide organizational guidance or a structured adoption framework.",
      "Correct — The AWS CAF organizes cloud adoption guidance into six perspectives (Business, People, Governance, Platform, Security, Operations) to help plan a comprehensive cloud adoption strategy.",
      "AWS Professional Services is a direct AWS consulting team — it is not a framework or tool that organizations use independently for self-guided cloud adoption planning."
    ]
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
    explanation: "Durability refers to the probability that data is retained intact and not lost or corrupted. Amazon S3 is designed for 99.999999999% (11 nines) of durability. This is distinct from availability, which is the ability to access data when needed.",
    optionExplanations: [
      "The ability to access data quickly with low latency describes performance (throughput/latency) — not the probability that data is retained without loss or corruption.",
      "The ability to scale storage capacity automatically describes elasticity — not the probability that stored data remains intact over time.",
      "Correct — Durability is the likelihood that data is not lost or corrupted over time. S3 provides 99.999999999% (11 nines) durability by storing data redundantly across multiple facilities.",
      "The ability to remain operational during a failure describes availability or fault tolerance — not the permanent integrity of stored data."
    ]
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
    explanation: "Service Control Policies (SCPs) define permission guardrails on accounts within an AWS Organization. An SCP can deny the ability to disable CloudTrail across all accounts, and even account administrators cannot override an SCP. SCPs represent the maximum permissions available to accounts.",
    optionExplanations: [
      "IAM permission boundaries set maximum permissions for individual IAM entities (users/roles) within a single account — they cannot enforce organization-wide guardrails that account admins cannot override.",
      "AWS Config rules detect and report non-compliant configurations after the fact — they cannot prevent an account administrator from disabling CloudTrail.",
      "Correct — SCPs in AWS Organizations set the maximum allowed permissions for all accounts in an OU. An SCP deny for disabling CloudTrail cannot be overridden even by account administrators.",
      "CloudFormation StackSets deploy infrastructure templates across accounts — they are not an enforcement mechanism that prevents administrators from making configuration changes."
    ]
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
    explanation: "Paying for EC2 per second of actual use (On-Demand pricing) rather than purchasing physical servers upfront exemplifies trading CapEx for OpEx. Instead of a large initial capital investment, you incur variable operational expenses that scale with usage, improving cash flow and eliminating the risk of over-provisioning.",
    optionExplanations: [
      "Purchasing a 3-year Reserved Instance is a commitment-based model — while cheaper than On-Demand, it still involves a pre-commitment and is not a pure 'pay only for what you use' variable expense example.",
      "Correct — Paying for EC2 per second of actual use (On-Demand) instead of buying physical servers is the classic example of trading capital expense (upfront hardware purchase) for variable operational expense.",
      "An enterprise discount agreement with AWS involves negotiated pricing terms — while it provides savings, it still represents a commitment, not the pure CapEx-to-OpEx concept.",
      "Using AWS Direct Connect instead of VPN is a network architecture choice — it does not directly illustrate the trading of capital expense for variable expense."
    ]
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
    explanation: "Treating resources as disposable (immutable infrastructure) means terminating a broken server and launching a fresh one from an AMI or CloudFormation template instead of logging in to fix it. This ensures consistency, eliminates configuration drift, and is fundamental to cloud-native operations and DevOps.",
    optionExplanations: [
      "'Think parallel' means running tasks concurrently to improve performance — it does not describe the concept of terminating and rebuilding failed resources from code.",
      "'Implement elasticity' refers to automatically scaling capacity up and down — it is about matching resources to demand, not about treating infrastructure as disposable and immutable.",
      "Correct — Treating resources as disposable (immutable infrastructure) means rebuilding failed or outdated servers from code (AMIs, CloudFormation) rather than manually patching them in place.",
      "'Keep things simple' is a general design principle — while simplicity supports immutable infrastructure, it does not specifically describe the practice of rebuilding failed resources from code."
    ]
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
    explanation: "IAM Roles attached to EC2 instance profiles provide temporary credentials automatically rotated by AWS. This eliminates the need to store long-term access keys on the instance. The EC2 instance assumes the role, and applications get temporary credentials via the instance metadata service.",
    optionExplanations: [
      "Storing access keys in a config file creates long-term credentials on the instance — if the instance or file is compromised, the credentials can be extracted and misused indefinitely.",
      "IAM Groups cannot be attached to EC2 instances — groups are used to organize IAM users, not to grant permissions to AWS services or EC2 instances.",
      "Correct — An IAM Role attached to an EC2 instance profile provides temporary, automatically rotated credentials via the instance metadata service, eliminating the need for long-term access keys.",
      "An IAM Policy applied directly to the S3 bucket controls who can access that bucket — it does not grant the EC2 instance the identity credentials needed to call the S3 API."
    ]
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
    explanation: "SCPs define the maximum permissions for accounts in an AWS Organization. They act as permission guardrails — even if an IAM user in a member account has full administrator access, an SCP can restrict what actions they can perform. SCPs do NOT grant permissions; they only limit them.",
    optionExplanations: [
      "SCPs do NOT grant permissions — they only restrict what is allowed. Even if an SCP allows an action, the IAM user must also have that action allowed in their IAM policies.",
      "Correct — SCPs define the maximum permissions available to accounts in an OU — they act as permission guardrails that even account administrators cannot override.",
      "SCPs affect IAM permissions and API actions — they do not configure VPC security group rules, which are resource-level network controls.",
      "AWS Config and Security Hub handle compliance reporting — SCPs are a permission management mechanism, not an audit or compliance reporting tool."
    ]
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
    explanation: "Amazon Cognito User Pools provide a fully managed user directory for mobile and web apps. User Pools support sign-up/sign-in with social identity providers (Google, Facebook, Apple), SAML/OIDC providers, and custom authentication flows.",
    optionExplanations: [
      "Correct — Cognito User Pools provide user directory functionality with built-in support for social identity providers (Google, Facebook, Apple), allowing millions of users to sign up and sign in.",
      "Cognito Identity Pools provide temporary AWS credentials to authenticated or anonymous users to access AWS services directly — they are for authorizing access to AWS resources, not for user sign-up/sign-in flows.",
      "Cognito Sync (deprecated, replaced by AppSync) was for syncing user data across devices — not for authenticating users with social identity providers.",
      "Cognito Streams is not a primary Cognito feature — data streaming for user pool events is handled through Lambda triggers, not a 'Cognito Streams' service."
    ]
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
    explanation: "AWS Config continuously monitors and records AWS resource configurations and evaluates them against desired rules. You can query configuration history to see how a resource looked at any point in the past and receive notifications when configurations change.",
    optionExplanations: [
      "AWS CloudTrail records API call history (who called what API and when) — it does not maintain a resource configuration inventory or evaluate configurations against compliance rules.",
      "Correct — AWS Config maintains a detailed inventory of resources, records configuration changes over time, and evaluates those configurations against desired compliance rules.",
      "Amazon Inspector scans EC2 instances and containers for software vulnerabilities — it does not record configuration history or evaluate resource settings against rules.",
      "AWS Security Hub aggregates security findings — it uses Config findings but does not itself maintain a resource configuration inventory or evaluate compliance rules."
    ]
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
    explanation: "Amazon GuardDuty analyzes VPC Flow Logs (along with CloudTrail and DNS logs) using machine learning to detect unusual patterns like port scanning, unusual outbound connections to malicious IPs, or cryptocurrency mining. It monitors continuously without requiring agents.",
    optionExplanations: [
      "AWS WAF filters incoming web traffic based on rules — it does not analyze VPC network traffic logs or use ML to detect unusual network behavior.",
      "Amazon Macie analyzes the content of S3 objects for sensitive data — it does not analyze VPC network traffic for threats.",
      "Correct — Amazon GuardDuty analyzes VPC Flow Logs, CloudTrail, and DNS logs using ML to detect threats like port scanning, unusual outbound connections, and cryptomining.",
      "AWS Config evaluates resource configurations against compliance rules — it does not analyze network traffic or detect behavioral threats."
    ]
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
    explanation: "Security Groups are stateful — if you allow inbound traffic, the return outbound traffic is automatically allowed. NACLs are stateless — you must explicitly define both inbound and outbound rules. Security Groups operate at the instance/ENI level; NACLs operate at the subnet level.",
    optionExplanations: [
      "Security Groups operate at the instance/ENI level (not subnet level) and NACLs operate at the subnet level — this answer has the two reversed.",
      "Correct — Security Groups are stateful (return traffic is automatically allowed) while NACLs are stateless (both inbound and outbound rules must explicitly allow traffic).",
      "Security Groups only support allow rules (no explicit deny); NACLs support both allow and deny rules — this answer has the two reversed.",
      "Both Security Groups and NACLs support IPv4 and IPv6 — this distinction does not correctly differentiate the two."
    ]
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
    explanation: "AWS CloudHSM provides dedicated HSMs in the cloud where you have exclusive access and manage your own encryption keys. Unlike KMS (where AWS manages the HSMs), CloudHSM is used when regulations mandate customer-controlled hardware for cryptographic operations.",
    optionExplanations: [
      "AWS KMS is a shared multi-tenant service where AWS manages the underlying HSMs — it does not provide dedicated, exclusively customer-controlled hardware validated at FIPS 140-2 Level 3.",
      "AWS Certificate Manager manages SSL/TLS certificates — it does not provide dedicated HSMs for customer-controlled cryptographic key management.",
      "Correct — AWS CloudHSM provides dedicated, single-tenant HSMs in the cloud where customers have exclusive control over the hardware and manage their own encryption keys.",
      "AWS Secrets Manager stores and rotates application secrets — it does not provide dedicated hardware security modules for cryptographic operations."
    ]
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
    explanation: "S3 Block Public Access settings applied at the account level override any bucket-level or object-level policies that would grant public access. Enabling all four settings at the account level ensures no bucket can be inadvertently made public.",
    optionExplanations: [
      "S3 Server-Side Encryption encrypts data at rest — it does not prevent buckets from being made publicly accessible.",
      "S3 Object Lock prevents objects from being deleted or modified — it addresses data retention and compliance, not public access controls.",
      "Correct — S3 Block Public Access at the account level overrides all bucket policies and object ACLs that would grant public access, ensuring no bucket can become publicly accessible.",
      "AWS Config S3 rules detect non-compliant bucket settings after the fact — they report existing public access violations but do not prevent buckets from being made public."
    ]
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
    explanation: "The first and most urgent action is to deactivate or delete the exposed access key to prevent unauthorized use. Then investigate what actions were taken with the key (using CloudTrail), clean up any unauthorized resources, and create new credentials. Enabling MFA is a good follow-up action.",
    optionExplanations: [
      "Deleting the IAM user is too drastic as the first action — first stop the immediate threat by deactivating the exposed key, then investigate before deciding whether to delete the user.",
      "Rotating the key (creating a new one and deleting the old) is correct — however, the question asks what to do FIRST. The correct sequence is deactivate/delete the exposed key immediately before rotating.",
      "Correct — Deactivating or deleting the exposed access key is the most urgent first action, immediately stopping any ongoing unauthorized use of the credentials.",
      "Enabling MFA is a good security improvement — but it does not immediately stop an attacker already using the exposed access key. Deactivating the key is the most urgent first step."
    ]
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
    explanation: "AWS Systems Manager Session Manager provides browser-based interactive shell and CLI access to EC2 instances without requiring open inbound ports, bastion hosts, or SSH keys. All sessions are logged to CloudTrail and CloudWatch Logs, and access is controlled via IAM policies.",
    optionExplanations: [
      "AWS VPN creates an encrypted tunnel between on-premises and AWS — it still typically requires open ports for SSH/RDP on EC2 instances once inside the VPC.",
      "Correct — AWS Systems Manager Session Manager provides secure browser-based shell access without inbound ports, bastion hosts, or SSH keys, with full session logging.",
      "Amazon EC2 Instance Connect sends temporary SSH public keys to instances — it still uses SSH and requires port 22 to be open, unlike Session Manager.",
      "AWS Direct Connect provides a dedicated private network link from on-premises to AWS — it is a connectivity service, not a method for securely accessing EC2 instances without SSH/RDP ports."
    ]
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
    explanation: "Encryption in transit protects data as it moves between a client and a service or between AWS services using TLS/SSL. Examples include HTTPS for S3 and API calls, TLS for RDS connections, and encrypted VPN tunnels. Encryption at rest protects stored data.",
    optionExplanations: [
      "Encryption at rest protects data stored in services like S3, EBS, or RDS — it does not protect data while it is moving across a network.",
      "Correct — Encryption in transit protects data as it travels between a client and a service (or between services) using TLS/SSL, such as HTTPS for S3 API calls.",
      "Client-side encryption encrypts data before sending it to AWS — while it also protects data in transit, it is a specific implementation approach, not the general term for protecting data during network transmission.",
      "Envelope encryption is a technique for encrypting data with a data key, then encrypting that key with a master key — it is an encryption method, not specifically about protecting data during network transmission."
    ]
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
    explanation: "SSE-C allows customers to supply their own encryption key with each request. Amazon S3 performs the encryption/decryption using the provided key but does not store the key. Customers are responsible for managing and rotating their own keys.",
    optionExplanations: [
      "SSE-S3 uses S3-managed keys that AWS fully controls — the customer has no ability to use their own on-premises keys.",
      "SSE-KMS uses keys managed in AWS KMS — while customers can use KMS customer-managed keys, the keys are still stored and managed in AWS, not on-premises.",
      "Correct — SSE-C allows customers to supply their own encryption keys stored on-premises with each request; S3 performs the encryption/decryption using those keys but never stores them.",
      "Client-side encryption with the AWS SDK encrypts data on the client before upload — while this technically allows on-premises key use, SSE-C is the server-side option that explicitly supports customer-provided keys."
    ]
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
    explanation: "Amazon Detective automatically collects log data from AWS resources and uses ML, statistical analysis, and graph theory to help analysts quickly determine the root cause of security findings and conduct efficient security investigations.",
    optionExplanations: [
      "Amazon GuardDuty detects threats by analyzing logs — it identifies suspicious activity and generates findings, but does not provide the deep interactive investigation and root-cause analysis that Detective offers.",
      "Correct — Amazon Detective builds a linked dataset from logs using ML and graph theory, enabling security analysts to quickly investigate the root cause and scope of security findings.",
      "AWS Security Hub aggregates and prioritizes findings from multiple services — it provides a centralized view but does not itself perform the deep investigation and causal analysis that Detective does.",
      "Amazon Inspector scans for software vulnerabilities — it does not analyze log data or perform security investigation workflows."
    ]
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
    explanation: "For Amazon RDS, AWS manages OS and database engine patching as part of the managed service. Customers are responsible for database settings, user access, and data. For EC2, customers are responsible for patching the guest OS. This distinction is central to the Shared Responsibility Model.",
    optionExplanations: [
      "Amazon EC2 is IaaS — the customer is responsible for patching the guest OS running on the virtual machine. AWS only manages the hypervisor and hardware.",
      "Correct — Amazon RDS is a managed database service, so AWS handles OS and database engine patching. Customers only manage the database schema, settings, user access, and data.",
      "Amazon ECS on EC2 still uses EC2 instances for the container hosts — the customer is responsible for patching the underlying EC2 host OS, just as with regular EC2.",
      "Amazon Lightsail VPS is an IaaS-like service — the customer is responsible for managing and patching the operating system running on the virtual private server."
    ]
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
    explanation: "Amazon GuardDuty detects security threats by analyzing CloudTrail, VPC Flow Logs, and DNS logs using ML and threat intelligence. Amazon Macie detects data security risks in S3 by identifying sensitive data like PII. Both are threat detection services. ACM manages certificates; Secrets Manager manages secrets.",
    optionExplanations: [
      "Correct — Amazon GuardDuty analyzes logs using ML and threat intelligence to detect threats like credential compromise, unusual network activity, and cryptomining.",
      "AWS Certificate Manager manages SSL/TLS certificates — it is not a threat detection service.",
      "Amazon Detective helps investigate security findings after detection — while it analyzes logs, its primary purpose is post-detection investigation, not initial threat detection.",
      "AWS Secrets Manager stores and rotates application secrets — it is not a threat detection service.",
      "Correct — Amazon Macie uses ML to detect sensitive data (PII, financial data) in S3 and flags data security risks, making it a data-focused threat detection service."
    ]
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
    explanation: "AWS Control Tower provides a landing zone to set up and govern a multi-account AWS environment at scale. It automates account provisioning, applies pre-configured guardrails (preventive SCPs and detective Config rules), and provides a dashboard to monitor compliance across all accounts.",
    optionExplanations: [
      "AWS Organizations SCPs are part of the governance layer — but creating and managing individual SCPs manually does not provide the automated landing zone, account provisioning, and pre-packaged guardrails that Control Tower offers.",
      "Correct — AWS Control Tower provides a pre-configured landing zone with automated multi-account setup, pre-built guardrails (SCPs + Config rules), and a compliance dashboard.",
      "AWS Config Aggregator collects configuration data across accounts — it provides visibility but does not provide landing zone automation, account provisioning, or pre-packaged guardrails.",
      "AWS Security Hub aggregates security findings — it provides a security posture view but does not automate multi-account landing zone setup or apply pre-configured guardrails."
    ]
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
    explanation: "IAM Access Analyzer identifies resources shared with external entities (external access findings) and generates least-privilege policies based on access activity (unused access findings). It helps identify overly permissive access and right-size IAM permissions.",
    optionExplanations: [
      "AWS Trusted Advisor provides broad best-practice checks including some IAM recommendations — but it does not identify externally shared resources or generate least-privilege policies from actual access activity.",
      "Correct — IAM Access Analyzer identifies resources accessible by external entities and can generate least-privilege IAM policies based on actual access patterns recorded in CloudTrail.",
      "Amazon GuardDuty detects malicious behavior through log analysis — it does not analyze resource sharing with external entities or generate permission policy recommendations.",
      "AWS Config evaluates configurations against compliance rules — it does not specifically identify external resource sharing or generate least-privilege IAM policies."
    ]
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
    explanation: "The AWS Health Dashboard (formerly Personal Health Dashboard) provides alerts and remediation guidance when AWS events may impact your specific resources. Unlike the Service Health Dashboard (global AWS status), it shows issues affecting YOUR account and resources specifically.",
    optionExplanations: [
      "Amazon CloudWatch monitors application metrics and logs — it tracks operational performance of your own resources but does not provide AWS-side health event notifications for maintenance or service disruptions.",
      "Correct — The AWS Health Dashboard (formerly Personal Health Dashboard) provides personalized, near-real-time notifications about AWS events specifically affecting your resources.",
      "AWS Config records resource configuration changes and evaluates compliance — it does not provide notifications about AWS-side service events or scheduled maintenance.",
      "Amazon EventBridge can receive and route AWS Health events — but EventBridge is the event bus for routing notifications, while the Health Dashboard is the specific service that generates the personalized health events."
    ]
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
    explanation: "AWS Artifact is a self-service portal providing on-demand access to AWS compliance documentation, including PCI DSS Attestation of Compliance (AOC), SOC reports, ISO certificates, and HIPAA BAAs. These documents can be downloaded and used in customer audit processes.",
    optionExplanations: [
      "AWS Config records resource configuration changes and evaluates compliance — it generates compliance findings for your own resources but does not provide AWS's own compliance certifications for download.",
      "AWS Trusted Advisor provides best-practice recommendations — it does not provide downloadable compliance certifications or attestation documents.",
      "Correct — AWS Artifact is the self-service portal for accessing and downloading AWS compliance reports including PCI DSS AOC, SOC reports, ISO certifications, and compliance agreements.",
      "AWS Security Hub aggregates security findings — it does not provide downloadable compliance reports or attestation documents."
    ]
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
    explanation: "AWS allows customers to conduct security assessments on their own AWS resources without prior approval for a defined list of services (EC2, RDS, CloudFront, API Gateway, Lambda, Lightsail, Elastic Beanstalk, etc.). Certain activities such as DDoS simulation require separate approval.",
    optionExplanations: [
      "Penetration testing is NOT strictly prohibited — AWS allows customers to test their own resources on a defined list of services without prior approval.",
      "Correct — AWS's policy allows customers to perform security testing on their own resources for a defined set of services without prior approval, subject to the acceptable use policy.",
      "Customers do NOT always need written permission from AWS for security testing — pre-approval is only required for specific activities like DDoS simulation, not standard penetration testing.",
      "Only AWS-certified partners can perform testing is incorrect — customers can run their own security tests or hire any security firm to test their own AWS resources."
    ]
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
    explanation: "AWS Security Hub provides a comprehensive view of security across all accounts and Regions. It aggregates, normalizes, and prioritizes findings from AWS services and third-party tools. It also runs automated compliance checks against standards like CIS AWS Foundations Benchmark.",
    optionExplanations: [
      "AWS Config Aggregator collects resource configuration and compliance data across accounts — it provides configuration visibility but does not aggregate security findings from GuardDuty, Inspector, and Macie.",
      "Amazon Detective helps investigate security findings after detection — it analyzes findings in depth but does not serve as the central aggregation point across multiple AWS services and accounts.",
      "Correct — AWS Security Hub provides centralized security monitoring by aggregating and normalizing findings from multiple AWS services and running compliance checks across accounts and Regions.",
      "AWS CloudTrail Lake aggregates and analyzes CloudTrail event logs — it handles audit logs, not aggregated security findings from GuardDuty, Inspector, and Macie."
    ]
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
    explanation: "AWS Systems Manager Patch Manager automates the process of patching EC2 instances (and on-premises servers) with both security and other types of updates. It can be centrally managed across multiple accounts using AWS Organizations integration, ensuring consistent patching compliance.",
    optionExplanations: [
      "Amazon Inspector identifies software vulnerabilities (CVEs) in running workloads — it detects that patching is needed but does not itself deploy patches or automate the patching process.",
      "Correct — AWS Systems Manager Patch Manager automates patching of EC2 instances and can be centrally managed across multiple accounts using AWS Organizations integration.",
      "AWS Config detects non-compliant configurations including unpatched instances — but it reports compliance status, it does not deploy patches or automate the patching process.",
      "Amazon GuardDuty detects threats through log analysis — it does not scan for missing patches or automate patch deployment."
    ]
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
    explanation: "VPC Flow Logs capture information about the IP traffic flowing to and from network interfaces in a VPC, including source/destination IP, ports, protocol, and whether traffic was accepted or rejected. They are valuable for network troubleshooting, security analysis, and feeding into GuardDuty.",
    optionExplanations: [
      "Application-level HTTP request and response details are captured by access logs (ALB/CloudFront logs) — VPC Flow Logs operate at the network/IP layer, not the application layer.",
      "Correct — VPC Flow Logs capture IP traffic metadata (source/destination IPs, ports, protocol, accept/reject) for network interfaces, useful for security analysis and troubleshooting.",
      "Logging all API calls within the AWS account is the purpose of AWS CloudTrail — VPC Flow Logs capture network-level IP traffic, not API call activity.",
      "Monitoring database query performance is done with services like Amazon RDS Performance Insights or CloudWatch Database Insights — not VPC Flow Logs."
    ]
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
    explanation: "AWS Config has managed rules like 'iam-user-mfa-enabled' and 'access-keys-rotated' that continuously evaluate whether IAM users have MFA enabled and whether access keys have been rotated within the specified number of days. Non-compliant resources are flagged and can trigger automated remediation.",
    optionExplanations: [
      "AWS CloudTrail records API call history — it can show when MFA was used or keys were created, but it does not continuously evaluate compliance against defined policies like MFA status or rotation age.",
      "Amazon GuardDuty analyzes logs for threats — it can detect suspicious activity related to credentials but does not evaluate IAM policy compliance like MFA requirements or key rotation.",
      "Correct — AWS Config managed rules (iam-user-mfa-enabled, access-keys-rotated) continuously evaluate IAM configuration compliance and flag non-compliant users automatically.",
      "AWS Trusted Advisor checks some IAM best practices — but it does not provide the granular, continuously evaluated rules for MFA status and key rotation age that Config's managed rules offer."
    ]
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
    explanation: "Reducing the blast radius means containing the impact of a compromise. Techniques include network segmentation (private subnets), least-privilege IAM policies, and separate AWS accounts for different environments (dev, staging, prod) so a breach in one does not affect others.",
    optionExplanations: [
      "Principle of least privilege minimizes permissions to reduce exposure — while it contributes to blast radius reduction, it is a specific technique rather than the overarching concept of containing damage.",
      "Defense in depth applies multiple security layers — while it overlaps, it refers to the layered approach, not specifically the concept of containing the damage to the smallest possible area.",
      "Correct — Blast radius reduction specifically refers to designing systems so that a compromise in one component is contained and cannot easily spread to affect other systems or accounts.",
      "Zero trust architecture verifies every access request regardless of origin — it is about authentication and authorization, not specifically about containing the impact of a successful compromise."
    ]
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
    explanation: "Amazon Inspector v2 automatically discovers EC2 instances and container images in ECR and assesses them for software vulnerabilities (known CVEs) and unintended network exposure. It continuously scans without requiring scheduled maintenance windows and integrates with AWS Security Hub.",
    optionExplanations: [
      "Network reachability only is too narrow — Inspector v2 scans for both software package vulnerabilities (CVEs) and network reachability issues.",
      "Correct — Amazon Inspector v2 scans for software package vulnerabilities (CVEs) AND network reachability issues for EC2 instances and container images in ECR.",
      "IAM misconfigurations and S3 public access are checked by other services (IAM Access Analyzer, S3 Block Public Access) — Inspector focuses on compute and container vulnerability scanning.",
      "DDoS attacks and SQL injection are addressed by Shield and WAF respectively — Inspector focuses on software vulnerability assessment, not runtime attack detection."
    ]
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
    explanation: "AWS Network Firewall is a managed network firewall and intrusion detection/prevention service for VPCs. It provides stateful and stateless packet filtering, intrusion prevention (Suricata-compatible rules), and domain/URL filtering deployed at the VPC level to protect entire subnets.",
    optionExplanations: [
      "AWS WAF is a web application firewall that filters HTTP/S traffic — it operates at the application layer and protects against web exploits, not at the VPC network level with stateful packet inspection.",
      "AWS Shield Advanced protects against DDoS attacks — it is a DDoS mitigation service, not a general-purpose network firewall with intrusion prevention capabilities.",
      "Correct — AWS Network Firewall is a managed VPC-level firewall with stateful packet inspection, intrusion prevention (Suricata rules), and domain/URL filtering to protect entire subnets.",
      "Security Groups are stateful instance-level firewalls — they filter traffic at the ENI level but do not provide intrusion prevention or domain/URL filtering across entire VPCs."
    ]
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
    explanation: "Customer data stored in S3 and IAM user management are always customer responsibilities. The customer controls what data they store, how it is encrypted, and who can access it. IAM management — creating users, assigning permissions, enabling MFA — is always the customer's responsibility. Physical hardware and the hypervisor are always AWS's responsibility.",
    optionExplanations: [
      "Physical hard drives in AWS data centers are AWS's responsibility — customers have no physical access to or responsibility for the storage hardware in AWS data centers.",
      "Correct — Customer data stored in S3 is always the customer's responsibility — what is stored, how it is encrypted, and who can access it.",
      "The hypervisor layer of EC2 is AWS's responsibility — AWS manages the virtualization layer and customers never interact with or manage the hypervisor.",
      "Correct — IAM user credentials and access management are always the customer's responsibility — AWS provides IAM as a tool but never manages user permissions.",
      "Networking hardware between AWS Regions is AWS's responsibility — customers never manage physical networking infrastructure."
    ]
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
    explanation: "Separation of duties ensures no single person or role has end-to-end control over a critical process — for example, requiring two different IAM roles to approve and execute a production deployment. This reduces the risk of both accidental and malicious actions by any single party.",
    optionExplanations: [
      "Multi-Factor Authentication requires a second verification factor — it adds an additional check for identity verification but does not require multiple people to be involved in high-privilege actions.",
      "Correct — Separation of duties means no single person can complete a high-privilege action alone, requiring involvement of multiple parties to reduce risk from any single compromised credential.",
      "Principle of least privilege minimizes permissions for each identity — it restricts what each person can do but does not require multiple parties to collaborate on high-privilege actions.",
      "Access key rotation replaces credentials periodically — it reduces the window of exposure for compromised keys but does not require multiple parties for high-privilege actions."
    ]
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
    explanation: "A Service Control Policy (SCP) applied at the organizational root or OU level can deny the securityhub:DisableSecurityHub action across all member accounts. Because SCPs define the maximum permissions, even an account's administrator cannot override the SCP.",
    optionExplanations: [
      "IAM policies in member accounts can be overridden by account administrators — the question requires a control that NO member account administrator can override.",
      "Correct — An SCP applied at the organizational root or OU level denies the disable action and cannot be overridden by any member account's administrator, because SCPs define maximum permissions.",
      "AWS Config rules detect and report non-compliant configurations — but they cannot prevent an account administrator from disabling Security Hub in real-time.",
      "CloudTrail with Lambda remediation can detect and attempt to re-enable Security Hub — but there is a window between disabling and re-enabling where the service would be off, not truly preventive."
    ]
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
    explanation: "AWS Firewall Manager is a security management service that allows you to centrally configure and manage firewall rules (AWS WAF, Shield Advanced, Security Groups, Network Firewall policies) across multiple accounts and resources in AWS Organizations, ensuring consistent security policies.",
    optionExplanations: [
      "AWS Security Hub aggregates security findings — it provides centralized monitoring of security posture but does not manage or deploy firewall rules across accounts.",
      "AWS Config evaluates resource configurations — it can detect non-compliant firewall configurations but does not centrally manage and enforce WAF rules or Shield policies.",
      "Correct — AWS Firewall Manager centrally manages WAF rules, Shield Advanced protections, Security Groups, and Network Firewall policies across all accounts in AWS Organizations.",
      "Amazon GuardDuty detects threats through log analysis — it is a threat detection service, not a firewall rule management tool for multi-account deployments."
    ]
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
    explanation: "AWS CloudTrail records all API calls made to AWS services — including the caller identity, time, source IP, request parameters, and response. This creates an audit trail for governance, compliance, and security analysis, answering 'who did what, when, and from where.'",
    optionExplanations: [
      "Monitoring resource performance metrics (CPU, memory) is the purpose of Amazon CloudWatch — not CloudTrail, which focuses on API call auditing.",
      "Correct — CloudTrail records all API calls with caller identity, timestamp, source IP, and parameters, creating an audit trail for governance, compliance, and security analysis.",
      "Detecting malicious activity using ML is the purpose of Amazon GuardDuty — which actually uses CloudTrail data as one of its inputs but is not the service that provides the audit log itself.",
      "Continuously evaluating resource configurations against rules is the purpose of AWS Config — not CloudTrail, which records API call events."
    ]
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
    explanation: "The 's3-bucket-server-side-encryption-enabled' AWS Config managed rule checks whether S3 buckets have default server-side encryption enabled. Buckets without encryption are flagged as non-compliant, helping ensure all objects stored in S3 are automatically encrypted at rest.",
    optionExplanations: [
      "s3-bucket-ssl-requests-only checks whether S3 bucket policies require HTTPS (SSL) for all requests — it addresses encryption in transit, not server-side encryption at rest.",
      "s3-default-encryption-kms checks whether S3 buckets use KMS-managed keys specifically — it is more specific than the general server-side encryption enablement check.",
      "Correct — s3-bucket-server-side-encryption-enabled checks whether S3 buckets have default server-side encryption enabled (any encryption type), flagging non-encrypted buckets.",
      "s3-bucket-public-read-prohibited checks whether S3 buckets block public read access — it addresses public access controls, not server-side encryption."
    ]
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
    explanation: "AWS recommends creating individual IAM users with unique credentials (never sharing credentials), assigning permissions via IAM Groups (common permissions) and IAM Roles (service-to-service access). This enables individual accountability and supports the principle of least privilege.",
    optionExplanations: [
      "Using a single IAM admin user and sharing credentials violates individual accountability — shared credentials make it impossible to audit who performed specific actions.",
      "Correct — Individual IAM users with unique credentials and permissions managed through groups and roles is the AWS best practice for access management and individual accountability.",
      "Assigning AdministratorAccess to all developers violates least privilege — over-permissive access increases the blast radius if any developer's credentials are compromised.",
      "Storing root account credentials in a shared password manager violates the root account security best practice — the root account should have MFA and be used only for specific tasks, never shared."
    ]
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
    explanation: "AWS IAM Identity Center (formerly AWS Single Sign-On) enables centralized SSO access to multiple AWS accounts and business applications. It integrates with Microsoft Active Directory and external SAML/OIDC providers, allowing employees to use their existing corporate credentials to access AWS.",
    optionExplanations: [
      "Amazon Cognito User Pools manage user identities for customer-facing web and mobile applications — they are not designed for employee access to AWS using corporate Active Directory credentials.",
      "Correct — AWS IAM Identity Center provides centralized SSO access using Microsoft Active Directory or SAML/OIDC, allowing employees to use existing corporate credentials to access multiple AWS accounts.",
      "AWS Directory Service for Microsoft Active Directory manages the AD directory itself — it provides the underlying directory, but IAM Identity Center provides the SSO portal and access management layer.",
      "Amazon Cloud Directory is a cloud-native directory for hierarchical data — it is not used for SSO or integrating with Microsoft Active Directory for employee AWS access."
    ]
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
    explanation: "Accelerated computing instances (P, G, Inf, Trn families) use hardware accelerators — GPUs, FPGAs, AWS Trainium — to perform floating-point calculations and deep learning more efficiently than CPUs. They are ideal for ML training, inference, HPC, and graphics workloads.",
    optionExplanations: [
      "General purpose (M family) instances provide a balance of compute, memory, and networking — they are not optimized for GPU-intensive ML training workloads.",
      "Compute optimized (C family) instances provide high compute-to-memory ratios for CPU-bound workloads — they use CPUs, not GPUs, and are not suitable for ML model training.",
      "Memory optimized (R family) instances provide high memory-to-compute ratios for in-memory databases — they are not designed for GPU-accelerated ML training.",
      "Correct — Accelerated computing instances (P, G, Inf, Trn families) include GPUs, FPGAs, and specialized ML chips, providing the hardware acceleration needed for ML model training."
    ]
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
    explanation: "EC2 instance store provides temporary block storage physically attached to the host computer, delivering the highest I/O performance of any EC2 storage option. However, data is lost when the instance stops, hibernates, or terminates. Ideal for temporary data, buffers, caches, and scratch storage.",
    optionExplanations: [
      "Amazon EBS gp3 provides good general-purpose SSD performance — but it is a network-attached storage volume, introducing network latency compared to physically attached instance store.",
      "Amazon EBS io2 Block Express provides very high IOPS and persistent storage — but being network-attached, it cannot match the raw I/O performance of physically attached instance store.",
      "Correct — EC2 instance store is physically attached to the host, providing the highest possible I/O performance with no network overhead, though data is not persistent.",
      "Amazon EFS is a shared NFS file system — it is accessed over the network and has much higher latency than physically attached instance store storage."
    ]
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
    explanation: "EBS io2 Block Express is the highest-performance EBS volume type, offering up to 256,000 IOPS, 4,000 MB/s throughput, and 64 TiB volume size with sub-millisecond latency. Designed for the most critical I/O-intensive applications such as SAP HANA, Oracle, and Microsoft SQL Server.",
    optionExplanations: [
      "gp3 (General Purpose SSD) provides up to 16,000 IOPS and 1,000 MB/s throughput — it is sufficient for most workloads but cannot provide the 256,000 IOPS or sub-millisecond latency needed for critical I/O-intensive databases.",
      "st1 (Throughput Optimized HDD) is designed for sequential throughput workloads (big data, log processing) — it provides high throughput but not the high random IOPS or sub-millisecond latency needed for databases.",
      "Correct — io2 Block Express delivers up to 256,000 IOPS, 4,000 MB/s throughput, and sub-millisecond latency, designed for critical databases like SAP HANA and Oracle.",
      "sc1 (Cold HDD) is the lowest-cost HDD option for infrequently accessed data — it provides the lowest IOPS and highest latency, the opposite of what is needed for I/O-intensive databases."
    ]
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
    explanation: "S3 Intelligent-Tiering automatically moves objects between tiers based on actual usage. Objects not accessed for 30 days move to Infrequent Access; those not accessed for 90 days move to Archive Instant Access. There are no retrieval fees, making it cost-effective for data with unpredictable access patterns.",
    optionExplanations: [
      "S3 Standard stores objects in a single tier regardless of how often they are accessed — it does not automatically move data between tiers based on access patterns.",
      "S3 Standard-IA is a fixed storage tier for infrequently accessed data — the customer manually places data in this tier; it does not automatically adjust based on changing access patterns.",
      "Correct — S3 Intelligent-Tiering monitors access patterns and automatically moves objects between access tiers without retrieval fees, optimizing cost for unpredictable access.",
      "S3 Glacier Instant Retrieval is a fixed archive tier for rarely accessed data — it does not automatically adjust based on changing access patterns."
    ]
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
    explanation: "S3 Cross-Region Replication (CRR) automatically replicates objects from a source bucket in one Region to a destination bucket in a different Region. It requires versioning on both buckets and is used for compliance, disaster recovery, and reducing latency for geographically distributed users.",
    optionExplanations: [
      "S3 Versioning only keeps multiple versions of objects within the same bucket — it does not replicate content to another Region for disaster recovery.",
      "Correct — S3 Cross-Region Replication automatically copies new objects to a bucket in a different Region (requires versioning), enabling disaster recovery and geographic data distribution.",
      "S3 Transfer Acceleration speeds up uploads to a specific bucket using edge locations — it does not replicate content to another bucket in another Region.",
      "S3 Lifecycle policies move or expire objects based on age or transition rules — they manage cost optimization within or across storage classes, not cross-Region replication."
    ]
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
    explanation: "S3 Object Lock allows objects to be stored in a WORM model, preventing deletion or overwriting for a defined retention period. It supports Compliance mode (cannot be overridden, even by root) and Governance mode (authorized users can override). Used for regulatory compliance like SEC 17a-4.",
    optionExplanations: [
      "S3 Versioning maintains multiple versions of objects — it allows recovery of deleted objects but does not enforce immutability during a compliance retention period (objects can still be deleted).",
      "S3 Replication copies objects to another bucket — it provides redundancy but does not prevent objects from being deleted or overwritten during a defined period.",
      "Correct — S3 Object Lock enforces WORM storage with Compliance or Governance mode retention periods, meeting regulatory requirements like SEC 17a-4 for immutable records.",
      "S3 Lifecycle policies automate transitioning or expiring objects — they can delete objects after a period, which is the opposite of the immutability required by WORM compliance."
    ]
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
    explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. Aurora provides up to 5x the performance of standard MySQL and 3x the performance of standard PostgreSQL, with the simplicity and cost-effectiveness of open-source databases.",
    optionExplanations: [
      "Aurora is not compatible with Oracle — Oracle is a proprietary commercial database engine that requires a separate licensing model and is supported by RDS, not Aurora.",
      "Correct — Amazon Aurora is compatible with both MySQL and PostgreSQL, offering up to 5x MySQL and 3x PostgreSQL performance while using open-source database economics.",
      "Aurora is not compatible with Microsoft SQL Server — SQL Server is a proprietary database supported by Amazon RDS for SQL Server, not Aurora.",
      "Aurora is not compatible with MongoDB — MongoDB is a document database supported by Amazon DocumentDB, not Aurora which is a relational database."
    ]
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
    explanation: "Amazon Neptune is a fully managed graph database service supporting property graphs (Gremlin) and RDF graphs (SPARQL). It is optimized for storing billions of relationships and querying the graph with millisecond latency, making it ideal for social networks, recommendations, and fraud detection.",
    optionExplanations: [
      "Amazon DynamoDB is a NoSQL key-value/document database — it can store connected data but is not optimized for graph traversals or relationship queries at scale.",
      "Amazon RDS is a relational database — it uses tables and SQL, which are not optimized for querying billions of highly connected relationships.",
      "Correct — Amazon Neptune is a managed graph database optimized for storing and querying billions of relationships, perfect for social networks, recommendation engines, and fraud detection.",
      "Amazon DocumentDB is a document database with MongoDB compatibility — it stores JSON-like documents, not graph relationships with specialized traversal query languages."
    ]
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
    explanation: "Amazon DocumentDB is a fully managed document database with MongoDB compatibility. It allows migration of MongoDB workloads with minimal code changes, automatically grows storage up to 128 TiB, and provides high availability with six copies of data across three AZs.",
    optionExplanations: [
      "Amazon DynamoDB is a NoSQL key-value/document database — while it can store JSON-like data, it uses DynamoDB-specific APIs and is not MongoDB-compatible, requiring more code changes.",
      "Correct — Amazon DocumentDB provides MongoDB-compatible APIs, allowing migration of MongoDB workloads with minimal code changes while getting AWS-managed scalability and availability.",
      "Amazon RDS is a relational SQL database — it uses a completely different data model and query language from MongoDB, requiring significant code rewrites.",
      "Amazon Keyspaces is compatible with Apache Cassandra (wide-column NoSQL) — it is not MongoDB-compatible and would require significant code changes for a MongoDB migration."
    ]
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
    explanation: "AWS Backup is a fully managed backup service that centralizes and automates data protection across AWS services. You create backup plans defining frequency, retention, and lifecycle rules. It supports EC2, EBS, RDS, Aurora, DynamoDB, EFS, FSx, and Storage Gateway from a single console.",
    optionExplanations: [
      "AWS Storage Gateway bridges on-premises storage to AWS — it is not a centralized backup management service for AWS workloads across multiple services.",
      "Amazon S3 Lifecycle policies automate storage class transitions and object expiration — they manage existing S3 data but do not provide centralized backup for EC2, RDS, DynamoDB, etc.",
      "Correct — AWS Backup centralizes and automates backup management across EC2, EBS, RDS, Aurora, DynamoDB, EFS, and other services from a single console with unified backup plans.",
      "Amazon Data Lifecycle Manager automates EBS snapshot lifecycle management — it only covers EBS volumes and AMIs, not the full range of AWS services that AWS Backup supports."
    ]
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
    explanation: "Amazon FSx for Windows File Server provides fully managed Windows-native shared file storage with full SMB and NTFS support, Active Directory integration, and DFS. Designed for Windows workloads that require a native Windows file system. Amazon EFS is for Linux-based NFS workloads.",
    optionExplanations: [
      "Amazon EFS is a Linux-based NFS file system — it does not support SMB, NTFS, or native Active Directory integration required for Windows workloads.",
      "Correct — Amazon FSx for Windows File Server is the fully managed Windows-native shared file system with SMB, NTFS, and Active Directory support.",
      "Amazon S3 is object storage accessed via API — it does not provide a shared file system with SMB protocol or NTFS semantics for Windows applications.",
      "AWS Storage Gateway File Gateway provides on-premises access to S3 via NFS/SMB — it is a hybrid gateway service, not a fully managed Windows-native shared file system in the cloud."
    ]
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
    explanation: "An Internet Gateway (IGW) is a horizontally scaled, redundant VPC component that allows communication between instances in a VPC and the internet. It provides a route table target for internet-routable traffic and performs NAT for instances with assigned public IPv4 addresses.",
    optionExplanations: [
      "Routing traffic between subnets is done by route tables within the VPC — the Internet Gateway specifically handles traffic flowing between the VPC and the public internet.",
      "Correct — An Internet Gateway provides internet connectivity to public subnet resources and performs NAT for instances with public IP addresses.",
      "Allowing private subnet instances to initiate outbound internet connections while remaining unreachable describes a NAT Gateway, not an Internet Gateway.",
      "Connecting multiple VPCs together using private IPs describes VPC Peering — the Internet Gateway connects a VPC to the public internet."
    ]
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
    explanation: "A NAT Gateway allows instances in private subnets to initiate outbound connections to the internet while preventing the internet from initiating connections to those instances. It translates private IPs to the NAT Gateway's public IP for outbound traffic and is managed, highly available, and scales automatically.",
    optionExplanations: [
      "An Internet Gateway allows two-way internet communication for resources with public IPs — placing private subnet instances directly behind an IGW would make them reachable from the internet.",
      "Correct — A NAT Gateway enables private subnet instances to initiate outbound internet connections (for updates, API calls) while remaining unreachable from inbound internet traffic.",
      "VPC Peering connects VPCs together for private communication — it does not provide internet access for private subnet instances.",
      "AWS Direct Connect provides a dedicated private link between on-premises and AWS — it does not enable EC2 instances in private subnets to access the internet."
    ]
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
    explanation: "AWS Global Accelerator uses the AWS global network to route user traffic to the optimal endpoint based on health, geography, and routing policies. Unlike CloudFront (which caches content), Global Accelerator works at the TCP/UDP layer and provides static anycast IP addresses for your application.",
    optionExplanations: [
      "Amazon CloudFront is a CDN that caches content at edge locations — it is optimized for content delivery, not for routing TCP/UDP application traffic to the nearest healthy endpoint.",
      "Amazon Route 53 is a DNS service — it can perform geographic routing but relies on DNS propagation, while Global Accelerator uses the AWS network for instant routing improvements.",
      "Correct — AWS Global Accelerator routes user traffic over the AWS global network to the nearest healthy endpoint using anycast IPs, improving availability and performance.",
      "Elastic Load Balancing distributes traffic within a Region — it does not route traffic across global regions or provide anycast IP addresses for global application performance."
    ]
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
    explanation: "AWS Transit Gateway acts as a central cloud router, allowing you to connect multiple VPCs, AWS accounts, and on-premises networks to a single gateway. It provides a hub-and-spoke model that simplifies network management across hundreds of VPCs, replacing complex meshed VPC peering.",
    optionExplanations: [
      "VPC Peering connects two VPCs directly — with many VPCs, it creates a complex full mesh of individual connections, not a centralized hub-and-spoke model.",
      "AWS PrivateLink provides private service endpoint connections between VPCs — it is used for exposing a specific service privately, not for general-purpose routing across many VPCs.",
      "Correct — AWS Transit Gateway acts as a central hub connecting multiple VPCs, accounts, and on-premises networks, replacing complex VPC peering meshes with a simpler hub-and-spoke topology.",
      "AWS Direct Connect Gateway connects on-premises networks to AWS — it facilitates Direct Connect to AWS, but Transit Gateway provides the actual routing hub for multiple VPCs and networks."
    ]
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
    explanation: "AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises applications over the Amazon network. It creates an interface VPC endpoint (an ENI in your VPC) that routes to the service privately, without requiring internet gateway, NAT, public IPs, or VPN.",
    optionExplanations: [
      "VPC Peering connects two VPCs bidirectionally — it exposes all resources in both VPCs to each other, not just a specific service, and may not be desirable for cross-account service exposure.",
      "AWS Transit Gateway connects multiple VPCs and networks through a central hub — it routes all traffic between connected networks, not just private exposure of a single service.",
      "Correct — AWS PrivateLink creates a private endpoint (ENI) in the consumer VPC that connects to a specific service privately over the AWS network, without the public internet.",
      "An Internet Gateway routes traffic to and from the public internet — it is the opposite of what is needed for private cross-account service connectivity."
    ]
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
    explanation: "Amazon API Gateway is a fully managed service for creating, publishing, maintaining, monitoring, and securing APIs. It handles traffic management, CORS support, authorization and access control, throttling, monitoring, and API versioning — all without managing any servers.",
    optionExplanations: [
      "AWS AppSync is a managed GraphQL service — it is designed for real-time data synchronization and GraphQL APIs, not as the general-purpose REST/WebSocket API management front door.",
      "Correct — Amazon API Gateway is the fully managed service for creating, publishing, securing, and monitoring REST and WebSocket APIs at any scale without managing servers.",
      "AWS App Runner deploys containerized web applications — it is not an API management service for creating and securing APIs.",
      "Elastic Load Balancing distributes traffic to backend servers — it does not provide API management features like throttling, versioning, authorization, or API-level monitoring."
    ]
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
    explanation: "AWS Step Functions is a visual workflow service that orchestrates serverless workflows using state machines. States can invoke Lambda, call AWS services, run tasks in parallel, and handle retries and error conditions declaratively, without writing complex orchestration logic.",
    optionExplanations: [
      "Amazon SQS provides point-to-point message queuing for asynchronous communication — it does not orchestrate multi-step workflows with error handling, retries, and parallel processing.",
      "Amazon EventBridge routes events to targets based on rules — it is an event router, not a workflow orchestration service with sequential states, error handling, and retries.",
      "Correct — AWS Step Functions orchestrates multi-step serverless workflows as state machines with visual diagrams, built-in error handling, retries, and parallel processing.",
      "AWS Batch manages batch compute jobs — it schedules and executes large-scale batch workloads, but does not provide the visual workflow orchestration with error handling that Step Functions offers."
    ]
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
    explanation: "Amazon EventBridge is a serverless event bus that connects applications using data from AWS services, integrated SaaS applications, and custom sources. Events are routed to targets based on rules, powering event-driven architectures and decoupling event producers from consumers.",
    optionExplanations: [
      "Amazon SQS is a point-to-point message queue — it buffers messages for a single consumer, not an event bus routing to multiple targets based on rules.",
      "Amazon SNS is a pub/sub notification service — it fans out to pre-configured subscribers, not a rules-based event router integrating with SaaS applications.",
      "Correct — Amazon EventBridge is a serverless event bus that routes events from AWS services, SaaS apps, and custom sources to targets based on configurable rules.",
      "AWS Step Functions orchestrates multi-step workflows — it is a workflow service that consumes events, not an event bus for routing events between producers and consumers."
    ]
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
    explanation: "AWS Batch dynamically provisions EC2 and Spot Instances based on submitted batch job requirements. It eliminates the need to install and manage batch computing software, letting you focus on analyzing results rather than managing infrastructure for high-scale batch workloads.",
    optionExplanations: [
      "AWS Lambda has a 15-minute execution limit — it is not suitable for large-scale batch jobs that may run for hours and require specific compute resource provisioning.",
      "Amazon ECS runs containerized applications but requires manual configuration of compute capacity for batch workloads — it does not automatically provision optimal resources for batch jobs.",
      "Correct — AWS Batch dynamically provisions the optimal compute resources (EC2 and Spot Instances) for batch jobs, eliminating the need to manage batch computing infrastructure.",
      "AWS Fargate runs containers serverlessly — but it is designed for persistent containerized applications, not the job-queue-based compute provisioning model needed for large-scale batch workloads."
    ]
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
    explanation: "Amazon EMR is a cloud big data platform that runs open-source frameworks like Apache Spark, Hive, HBase, and Flink. It simplifies running large-scale data processing, interactive analytics, and ML on petabytes of data, managing the provisioning and configuration of these frameworks.",
    optionExplanations: [
      "Amazon Redshift is a data warehouse for SQL-based analytical queries — it does not run Apache Spark, Hadoop, or other open-source big data frameworks.",
      "Amazon Athena is a serverless SQL query service for S3 data — it is not a managed platform for running Spark, Hive, HBase, or other big data frameworks.",
      "Correct — Amazon EMR manages clusters of EC2 instances running Apache Spark, Hive, HBase, Flink, and other open-source big data frameworks for large-scale data processing.",
      "AWS Glue is a serverless ETL service — it is built on Spark but is designed for ETL data preparation, not as a general-purpose big data platform for running arbitrary Hadoop/Spark workloads."
    ]
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
    explanation: "AWS Glue is a fully managed, serverless ETL service. It includes a data catalog (to discover and catalog data), ETL jobs (to transform and move data), and crawlers (to automatically infer schema from data sources), eliminating infrastructure management for data preparation.",
    optionExplanations: [
      "Amazon EMR runs open-source big data frameworks (Spark, Hive) but requires managing clusters — AWS Glue is serverless and specifically designed for ETL with data catalog and crawler capabilities.",
      "Amazon Kinesis processes real-time streaming data — it is designed for real-time data ingestion, not serverless batch ETL jobs and data cataloging.",
      "Correct — AWS Glue is a fully managed serverless ETL service with built-in data catalog, ETL job authoring, and crawlers for schema discovery and data preparation.",
      "Amazon Redshift Spectrum queries data in S3 without moving it — it is a query feature of Redshift, not a dedicated ETL service with catalog, crawlers, and job authoring."
    ]
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
    explanation: "Amazon Kinesis Data Streams is a scalable and durable real-time data streaming service that can continuously capture gigabytes of data per second from hundreds of thousands of sources, enabling real-time processing for analytics, monitoring, and IoT telemetry use cases.",
    optionExplanations: [
      "Amazon SQS is a point-to-point message queue for asynchronous processing — it buffers messages for later consumption, not for real-time data streaming at high velocity from IoT sensors.",
      "Correct — Amazon Kinesis Data Streams ingests and processes real-time streaming data from IoT sensors and other high-velocity sources at scale.",
      "AWS Batch is for large-scale batch computing jobs — it processes data in scheduled or on-demand batches, not in real-time as data arrives from streaming sources.",
      "Amazon EMR processes large datasets using Spark/Hadoop — it is a batch processing platform, not specifically designed for real-time data stream ingestion from IoT sensors."
    ]
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
    explanation: "Amazon OpenSearch Service is a managed service for deploying, operating, and scaling OpenSearch and Elasticsearch clusters. It is used for full-text search, log analytics, application performance monitoring, and clickstream analytics, integrating with OpenSearch Dashboards for visualization.",
    optionExplanations: [
      "Amazon Redshift is a data warehouse for SQL-based analytical queries — it is optimized for structured data analytics, not full-text search or real-time log analytics.",
      "Amazon RDS is a managed relational database — it uses SQL and is not designed for full-text search, log analytics, or OpenSearch/Elasticsearch use cases.",
      "Correct — Amazon OpenSearch Service is the managed service for deploying OpenSearch/Elasticsearch for full-text search, log analytics, and real-time monitoring with OpenSearch Dashboards.",
      "AWS Glue is a serverless ETL service for data preparation — it is not a search and analytics engine based on OpenSearch/Elasticsearch."
    ]
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
    explanation: "Amazon Rekognition is a managed computer vision service that provides image and video analysis — detecting objects, scenes, faces, text, and activities; performing facial comparison; and detecting unsafe content. No ML expertise is required; you call the API and Rekognition returns the analysis.",
    optionExplanations: [
      "Amazon Textract extracts text, forms, and tables from scanned documents — it is an OCR/document intelligence service, not a general image/video object and scene detection service.",
      "Amazon Comprehend analyzes text for natural language processing (sentiment, entities, key phrases) — it processes text content, not images or videos.",
      "Correct — Amazon Rekognition provides computer vision capabilities including object, scene, face, and text detection in images and videos, requiring no ML expertise.",
      "Amazon Polly converts text to lifelike speech — it is a text-to-speech service, not an image/video analysis service."
    ]
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
    explanation: "Amazon Textract automatically extracts text, forms, tables, and structured data from scanned documents. Unlike simple OCR, Textract understands document structure and can extract key-value pairs from forms and data from tables, eliminating manual data entry from documents.",
    optionExplanations: [
      "Amazon Rekognition is a computer vision service for analyzing images and videos — it can detect text in images but is not specialized for structured document data extraction (forms, tables).",
      "Correct — Amazon Textract extracts text, key-value pairs from forms, and data from tables in scanned documents, understanding document structure unlike simple OCR.",
      "Amazon Comprehend analyzes text for NLP tasks (sentiment, entities) — it processes plain text, not structured document extraction from scanned forms.",
      "Amazon Transcribe converts speech (audio) to text — it transcribes spoken words, not text from scanned document images."
    ]
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
    explanation: "Amazon Polly uses deep learning to synthesize natural-sounding human speech from text (text-to-speech). It supports dozens of languages and voices, including neural voices. Use cases include e-learning, accessibility features, and IVR systems.",
    optionExplanations: [
      "Amazon Transcribe converts speech (audio) to text — it is the opposite of Polly, which converts text to speech.",
      "Amazon Lex builds conversational chatbot interfaces — it provides speech recognition and natural language understanding for building voice bots, not text-to-speech synthesis.",
      "Correct — Amazon Polly converts text to lifelike speech using deep learning, supporting dozens of languages and neural voices for e-learning, accessibility, and IVR.",
      "Amazon Translate provides neural machine translation between languages — it translates text, not converts text to spoken audio."
    ]
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
    explanation: "Amazon SageMaker is a fully managed service covering the entire ML workflow: data labeling, data preparation, model building, training, tuning, hosting, and monitoring. It provides built-in algorithms, Jupyter notebooks, and managed infrastructure, eliminating the heavy lifting of ML infrastructure management.",
    optionExplanations: [
      "Amazon Rekognition is a purpose-built AI service for computer vision — it provides pre-trained models for specific use cases, not an end-to-end ML platform for custom model development.",
      "Amazon Comprehend is a natural language processing AI service — it provides pre-built NLP capabilities, not a full ML platform for building, training, and deploying custom models.",
      "Correct — Amazon SageMaker covers the entire ML workflow from data labeling to model training, tuning, deployment, and monitoring, with Jupyter notebooks and managed infrastructure.",
      "AWS Deep Learning AMIs are pre-configured EC2 instances with ML frameworks — they require you to manage the infrastructure yourself, unlike SageMaker's fully managed workflow."
    ]
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
    explanation: "AWS CodeCommit is a fully managed source control service that hosts secure, private Git repositories. It eliminates the need to operate your own source control system and integrates with CodeBuild, CodeDeploy, and CodePipeline for CI/CD pipelines.",
    optionExplanations: [
      "AWS CodeBuild is a managed CI service that compiles code and runs tests — it is a build service, not a source control repository service.",
      "Correct — AWS CodeCommit provides fully managed, highly available private Git repositories that integrate with other AWS developer tools for CI/CD pipelines.",
      "AWS CodeDeploy automates software deployments — it deploys code to EC2, Lambda, or ECS, not stores source code in a repository.",
      "AWS CodePipeline orchestrates CI/CD pipeline stages — it connects source, build, and deploy services, but does not itself host source code repositories."
    ]
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
    explanation: "AWS CodeBuild is a fully managed CI service that compiles source code, runs tests, and produces deployment-ready packages. It scales continuously, processes multiple builds concurrently, and you pay only for the build time consumed — no build servers to provision or manage.",
    optionExplanations: [
      "AWS CodeCommit hosts Git source code repositories — it stores code but does not compile it, run tests, or produce deployment artifacts.",
      "Correct — AWS CodeBuild compiles source code, runs tests, and produces deployment-ready packages without provisioning or managing build servers.",
      "AWS CodeDeploy deploys software to existing servers/functions — it deploys built artifacts, but does not itself compile code or run tests.",
      "AWS CodePipeline orchestrates the pipeline stages — it connects CodeBuild and other services, but does not itself perform the compilation, testing, or artifact creation."
    ]
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
    explanation: "AWS CodeDeploy is a fully managed deployment service that automates software deployments to EC2, Lambda, ECS, and on-premises servers. It supports blue/green and rolling deployment strategies, enables rollback on failures, and requires no downtime for deployments.",
    optionExplanations: [
      "AWS CodeCommit is a source code repository — it stores code, not a deployment service for automating software releases.",
      "AWS CodeBuild compiles code and runs tests — it produces deployment artifacts but does not deploy them to EC2, Lambda, or ECS targets.",
      "Correct — AWS CodeDeploy automates deployments to EC2, Lambda, ECS, and on-premises servers with blue/green and rolling strategies, with automatic rollback on failures.",
      "AWS CloudFormation deploys infrastructure (creating/updating AWS resources) — it provisions environments but is not the specialized service for automating application code deployments."
    ]
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
    explanation: "AWS CodePipeline is a fully managed CI/CD orchestration service that models release processes as pipelines. It triggers automatically on code changes and integrates with CodeCommit, CodeBuild, CodeDeploy, CloudFormation, and third-party tools like GitHub and Jenkins.",
    optionExplanations: [
      "AWS CodeBuild compiles code and runs tests — it is a stage in a pipeline, not the orchestration service that coordinates source, build, test, and deploy stages.",
      "AWS CodeDeploy deploys software to servers and functions — it is a deployment stage in a pipeline, not the orchestration layer that connects all pipeline stages.",
      "Correct — AWS CodePipeline orchestrates CI/CD pipelines, automatically triggering on code changes and connecting source (CodeCommit/GitHub), build (CodeBuild), and deploy (CodeDeploy/CloudFormation) stages.",
      "AWS CloudFormation deploys infrastructure — it can be a deploy stage in CodePipeline, but is not the pipeline orchestration service itself."
    ]
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
    explanation: "AWS Systems Manager is an operations hub providing visibility and control of infrastructure on AWS and on-premises. Capabilities include Session Manager (secure shell access without SSH), Patch Manager (automated patching), Run Command (execute commands remotely), and Parameter Store (configuration data).",
    optionExplanations: [
      "AWS CloudFormation deploys and manages infrastructure as code — it provisions resources but does not provide operational management like patch automation or remote command execution.",
      "Amazon CloudWatch monitors metrics and logs — it provides observability, but does not include session management, patch automation, or configuration management across instances.",
      "Correct — AWS Systems Manager provides operational management including Session Manager, Patch Manager, Run Command, Parameter Store, and inventory across EC2 and on-premises servers.",
      "AWS Config evaluates resource configurations for compliance — it monitors configuration state but does not provide operational management capabilities like patching or session access."
    ]
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
    explanation: "Amazon CloudWatch Logs centralizes logs from systems, applications, and AWS services. You can monitor logs in real time, search and filter log data, create metric filters, and set alarms. CloudWatch Logs Insights provides interactive query capabilities for log analysis.",
    optionExplanations: [
      "CloudWatch Metrics collects and tracks numeric performance measurements (CPU, latency, request count) — it handles metrics, not log data collection and analysis.",
      "CloudWatch Alarms notify you when metrics cross defined thresholds — they trigger based on metrics, not on log data patterns.",
      "Correct — CloudWatch Logs collects, stores, and enables real-time monitoring and querying of log data from AWS services, EC2 instances, and applications.",
      "CloudWatch Events (now called Amazon EventBridge) routes events between services — it processes system events and scheduled triggers, not log data from applications."
    ]
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
    explanation: "An Amazon Machine Image (AMI) is a template containing a software configuration (OS, application server, applications) used to launch EC2 instances. You can use AWS-provided AMIs, Marketplace AMIs, or create custom AMIs by capturing a configured EC2 instance state for consistent, repeatable deployments.",
    optionExplanations: [
      "DNS resolution for EC2 instances is provided by Amazon Route 53 or the VPC's built-in DNS resolver — not by AMIs.",
      "Correct — An AMI is a pre-configured template containing the OS, software, and settings used to launch identically configured EC2 instances consistently.",
      "IAM permissions for EC2 instances are managed through IAM Roles and instance profiles — not AMIs.",
      "A monitoring agent installed on EC2 instances refers to the CloudWatch Agent — not AMIs, which are launch templates, not monitoring software."
    ]
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
    explanation: "AWS App Runner is a fully managed service for deploying containerized web applications and APIs at scale without infrastructure expertise. You provide a container image or source code, and App Runner handles building, deploying, and scaling your application with built-in load balancing and TLS termination.",
    optionExplanations: [
      "Amazon ECS runs containerized applications but requires configuring task definitions, clusters, and service scaling — it requires more infrastructure expertise than App Runner.",
      "Amazon EKS is a managed Kubernetes service — it provides powerful container orchestration but requires Kubernetes expertise, not the simple 'just provide code' approach of App Runner.",
      "Correct — AWS App Runner builds, deploys, and scales containerized web applications and APIs with built-in load balancing and TLS, requiring no infrastructure expertise.",
      "AWS Elastic Beanstalk deploys web applications with managed infrastructure — while similar in abstraction level, App Runner is specifically designed for containerized applications and APIs with simpler configuration."
    ]
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
    explanation: "Amazon S3 Transfer Acceleration uses CloudFront's globally distributed edge locations to accelerate uploads to S3 over long distances. Users upload to the nearest edge location, and data travels to S3 over AWS's optimized network backbone. Most beneficial when uploading to a centralized bucket from around the world.",
    optionExplanations: [
      "S3 Cross-Region Replication copies objects from one bucket to another in a different Region — it does not accelerate uploads from geographically distributed users to a single bucket.",
      "Correct — S3 Transfer Acceleration routes uploads through the nearest CloudFront edge location and then over the AWS backbone network, accelerating uploads to S3 over long distances.",
      "AWS DataSync transfers data between on-premises and AWS — it is designed for migration and sync, not for accelerating user uploads via CloudFront edge locations.",
      "AWS Snowball physically ships data to AWS — it is for large bulk data transfers, not for accelerating ongoing upload performance from distributed users."
    ]
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
    explanation: "Amazon SQS (point-to-point message queuing for asynchronous processing) and Amazon SNS (pub/sub messaging to fan out messages to multiple subscribers) are the primary AWS services for decoupling application components. They enable resilient, loosely coupled architectures where components can operate independently.",
    optionExplanations: [
      "Correct — Amazon SQS provides point-to-point queuing for asynchronous processing, decoupling producers from consumers so components operate independently.",
      "Amazon RDS is a relational database — it stores application data but does not provide messaging or asynchronous communication between application components.",
      "Correct — Amazon SNS provides pub/sub messaging that fans out events to multiple subscribers, enabling loosely coupled event-driven architectures.",
      "Amazon EBS is block storage for EC2 instances — it persists data but does not facilitate communication or decoupling between application components.",
      "AWS CloudFormation deploys infrastructure as code — it is an infrastructure provisioning tool, not a messaging service for decoupling application components."
    ]
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
    explanation: "Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS cloud where you launch resources in a virtual network you define. You have full control over your virtual networking environment, including IP address ranges, subnets, route tables, and network gateways.",
    optionExplanations: [
      "AWS Direct Connect provides a dedicated private network link between on-premises and AWS — it is a connectivity service, not the definition of the virtual network itself.",
      "Amazon Route 53 is a DNS service for domain resolution — it routes network requests but does not define or manage virtual network infrastructure.",
      "Correct — Amazon VPC lets you define a logically isolated virtual network with full control over IP ranges, subnets, route tables, and gateways.",
      "AWS Transit Gateway connects multiple VPCs and networks through a central hub — it routes traffic between VPCs but is not the service that creates the isolated virtual network itself."
    ]
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
    explanation: "Developer Support provides email-based technical support during business hours with response times of less than 24 hours for general guidance and 12 hours for impaired system cases. It does not include phone or chat access to Cloud Support Engineers and is designed for development/test environments.",
    optionExplanations: [
      "Basic Support provides only documentation and forum access — it has no technical support contacts or case-based email support.",
      "Correct — Developer Support provides email-based technical support during business hours, designed for development and testing in non-production environments.",
      "Business Support provides 24/7 phone, chat, and email access to engineers — more than needed for a dev/test environment and significantly more expensive.",
      "Enterprise On-Ramp provides a pool of TAMs and faster response SLAs — designed for production workloads, not development environments."
    ]
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
    explanation: "Business Support provides 24/7 phone, chat, and email support with less than 1-hour response for production system-down cases, full Trusted Advisor checks, access to Infrastructure Event Management (for a fee), and AWS Health API access. Suitable for production workloads.",
    optionExplanations: [
      "Developer Support only provides email during business hours — it does not include 24/7 phone or chat access to Cloud Support Engineers.",
      "Correct — Business Support provides 24/7 phone, chat, and email access with a less-than-1-hour response SLA for production system-down (Severity 1) cases.",
      "Enterprise On-Ramp provides a pool of TAMs and a 30-minute response for critical issues — the described features (1-hour SLA, 24/7 access) match Business Support exactly.",
      "Enterprise Support offers a 15-minute response for critical cases and a dedicated TAM — it exceeds the described requirements, which correspond to Business Support."
    ]
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
    explanation: "Dedicated Hosts are physical EC2 servers dedicated to your use, providing visibility into and control over instance placement on the host. They support BYOL software licenses (Windows Server, SQL Server) bound to physical cores or sockets. Dedicated Instances run on dedicated hardware but without host-level visibility.",
    optionExplanations: [
      "Dedicated Instances run on hardware dedicated to a single customer but do not expose host-level details (sockets, cores) required for per-core or per-socket BYOL licensing.",
      "Correct — Dedicated Hosts provide full visibility into the physical server (sockets, cores, host ID), enabling BYOL software licenses tied to physical hardware attributes.",
      "Reserved Instances are a pricing model that typically runs on shared hardware — they do not provide physical host visibility or support BYOL licensing on their own.",
      "Spot Instances use spare EC2 capacity at a discount and can be interrupted at any time — unsuitable for BYOL or requirements needing dedicated physical hardware."
    ]
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
    explanation: "Convertible Reserved Instances allow changes to instance family, OS, scope, and tenancy during the term in exchange for a slightly lower discount (up to ~54% vs up to ~72% for Standard). Useful when you expect needs to change but still want long-term cost savings.",
    optionExplanations: [
      "Standard Reserved Instances provide the deepest discount but are locked to the original instance family, OS, and Region — modifications are not allowed.",
      "Correct — Convertible RIs allow you to change instance family, OS, tenancy, and payment option during the commitment term, offering flexibility at a slightly lower maximum discount.",
      "Scheduled Reserved Instances (now discontinued) provided capacity reservations for recurring time windows — they did not support changes to instance family or attributes.",
      "Capacity Reservations reserve EC2 capacity in a specific AZ without a billing discount — they provide capacity assurance, not pricing flexibility or savings."
    ]
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
    explanation: "On-Demand pricing lets you pay by the hour or second (minimum 60 seconds) with no long-term commitments or upfront payments. Ideal for irregular workloads, development/testing, and applications that cannot be interrupted — though it carries the highest per-unit cost compared to commitment-based pricing.",
    optionExplanations: [
      "Reserved Instances require a 1- or 3-year commitment — they are not suitable for unpredictable workloads that need the maximum flexibility to start and stop at any time.",
      "Savings Plans require a 1- or 3-year $/hour spend commitment — they reduce flexibility compared to the pure pay-as-you-go On-Demand model.",
      "Correct — On-Demand pricing charges by the second (Linux, minimum 60s) with no upfront costs or commitments, providing maximum flexibility for irregular workloads.",
      "Spot Instances use spare EC2 capacity and can be interrupted with a 2-minute warning — they are not suitable for workloads that require uninterrupted, continuous operation."
    ]
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
    explanation: "The AWS Cost and Usage Report (CUR) provides the most comprehensive cost and usage data available, including metadata about services, pricing, and reservations. Delivered to S3 in hourly or daily granularity, it can be analyzed with Athena, Redshift, or QuickSight for custom cost analysis.",
    optionExplanations: [
      "Cost Explorer provides summarized cost visualizations and basic filtering — it does not export raw line-item data for custom analysis with tools like Athena.",
      "AWS Budgets tracks spending against thresholds — it does not provide granular line-item data or raw data export capabilities.",
      "Correct — The AWS CUR provides the most detailed billing data (hourly/daily line items, resource IDs, pricing metadata), delivered to S3 for analysis with Athena, Redshift, or QuickSight.",
      "AWS Pricing Calculator estimates future costs — it has no data about actual resource usage or historical charges."
    ]
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
    explanation: "Cost Allocation Tags let you label AWS resources with key-value pairs (e.g., Project=Ecommerce, Department=Finance). After enabling cost allocation tags in the Billing console, tagged costs appear as separate categories in Cost Explorer, CUR, and Budgets reports, enabling cost attribution to specific teams or projects.",
    optionExplanations: [
      "AWS Organizations OUs organize accounts for governance — they allocate costs at the account level but not at the individual resource level within a single account.",
      "Correct — Cost Allocation Tags (key-value pairs on resources) allow costs to appear categorized in Cost Explorer and the CUR, enabling per-project or per-department cost attribution.",
      "AWS Budgets alerts notify you when spending exceeds thresholds — they do not label resources or categorize costs for attribution purposes.",
      "Cost Explorer filters let you slice existing cost data by dimension — but the tags must first be applied to the resources and activated in the Billing console."
    ]
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
    explanation: "AWS Marketplace is a curated digital catalog of third-party software, data products, and services for AWS. Customers can find, buy, deploy, and manage solutions from thousands of ISVs with billing consolidated through the AWS bill, including one-click deployment via preconfigured AMIs and SaaS offerings.",
    optionExplanations: [
      "The AWS Partner Network is a global ecosystem of certified consulting and technology partner companies — it is not a storefront for purchasing software products.",
      "Correct — AWS Marketplace is a digital catalog where customers can find, test, buy, and deploy thousands of third-party software and SaaS products, with billing through their AWS account.",
      "AWS Service Catalog allows organizations to create internal catalogs of approved IT services for their employees — it is for internal governance, not purchasing external third-party software.",
      "AWS Direct Connect partners provide private network connectivity services — they are a networking resource, not a software or product marketplace."
    ]
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
    explanation: "Compute Savings Plans are the most flexible savings commitment, automatically applying to any EC2 instance regardless of family, size, Region, OS, or tenancy, plus Lambda and Fargate. They offer up to 66% savings vs On-Demand. EC2 Instance Savings Plans offer deeper discounts (up to 72%) but only for a specific instance family in a Region.",
    optionExplanations: [
      "EC2 Instance Savings Plans offer deeper discounts (up to 72%) but are limited to a specific instance family in a specific Region — they lack cross-family, cross-Region, and cross-service flexibility.",
      "Correct — Compute Savings Plans automatically apply to any EC2 instance (any family, size, Region, OS), plus Lambda and Fargate, in exchange for a $/hour spend commitment.",
      "SageMaker Savings Plans apply exclusively to SageMaker ML compute — they do not cover EC2, Lambda, or Fargate.",
      "Standard Reserved Instances are locked to a specific instance type and Region and do not apply to Lambda or Fargate — far less flexible than Savings Plans."
    ]
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
    explanation: "Consolidated Billing combines AWS usage and charges from all member accounts into a single bill paid by the management account. This simplifies billing management and enables volume pricing benefits because usage from all accounts is aggregated for tiered pricing discounts.",
    optionExplanations: [
      "Service Control Policies restrict what API actions accounts in an organization can perform — they are a governance tool, not a billing feature.",
      "AWS Control Tower automates the setup of a multi-account environment and relies on Organizations, but is not itself the billing aggregation feature.",
      "Correct — Consolidated Billing in AWS Organizations combines all member account charges into a single monthly bill paid by the management account, enabling volume discounts.",
      "AWS Config Aggregator collects resource configuration and compliance data across accounts — it is an audit tool, not related to billing."
    ]
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
    explanation: "The AWS Free Tier includes three offer types: (1) Always Free — no expiration, available to all customers (e.g., Lambda 1M requests/month); (2) 12-month free — available for 12 months after account creation (e.g., EC2 t2.micro); and (3) Free trials — short-term promotions for specific services.",
    optionExplanations: [
      "The 12-month free tier expires 12 months after account creation (e.g., EC2 t2.micro 750 hrs/month) — it is a time-limited offer, not permanent.",
      "Correct — 'Always free' offers never expire and are available to all AWS customers (e.g., Lambda 1M requests/month, DynamoDB 25 GB storage).",
      "Free trials are short-term promotions for specific services (e.g., Amazon Inspector 90-day trial) — they expire after a defined period.",
      "'Free tier promotional credits' is not an official AWS Free Tier category — the three official types are Always Free, 12-month free, and Short-term trials."
    ]
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
    explanation: "AWS re:Post (formerly the AWS Developer Forums) is a community-based Q&A service where customers can ask technical questions and get answers from AWS experts and community members. It is accessible to all AWS customers including those on the Basic (free) support plan.",
    optionExplanations: [
      "AWS IQ connects customers with AWS-certified third-party experts for paid project work — it is not a free community Q&A forum.",
      "Correct — AWS re:Post is a community-based Q&A platform (successor to AWS Developer Forums) where anyone can ask and answer technical questions, accessible on all support tiers.",
      "AWS Knowledge Center is a curated collection of FAQs with AWS-authored answers — it is read-only and not a community-driven discussion platform.",
      "AWS Premium Support (Business/Enterprise) provides access to Cloud Support Engineers via official support cases — it is not a community forum."
    ]
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
    explanation: "Business Support adds: 24/7 phone, chat, and email access to Cloud Support Engineers; full access to ALL Trusted Advisor checks; and less than 1-hour response for production-down cases. Developer Support provides only 7 core Trusted Advisor checks and email support during business hours with a 12-hour response for impaired systems.",
    optionExplanations: [
      "Documentation and whitepapers are available to ALL AWS customers, including Basic Support — they are not a differentiator between Business and Developer plans.",
      "Correct — Business Support adds 24/7 phone and chat access to Cloud Support Engineers; Developer Support only provides email during business hours.",
      "Correct — Business Support includes full access to all Trusted Advisor checks; Developer Support only includes the 6 core security and service limit checks.",
      "AWS re:Post is available to all customers including Basic Support — it is not exclusive to Business or Developer plans.",
      "Email support during business hours is a feature of Developer Support, not an addition exclusive to Business Support."
    ]
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
    explanation: "A private cloud is deployed and operated solely for one organization, either on-premises or in a dedicated hosted environment. It offers full control but requires the company to purchase and manage all hardware.",
    optionExplanations: [
      "Public cloud infrastructure is owned and operated by a third-party provider (like AWS) and shared among multiple organizations — it is not exclusively operated by and for a single company.",
      "Hybrid cloud combines both on-premises/private infrastructure AND a public cloud — it does not run exclusively on a company's own premises.",
      "Correct — Private cloud runs exclusively on infrastructure dedicated to a single organization, on-premises or in a dedicated hosted environment.",
      "Community cloud is shared among several organizations with common concerns (e.g., government or healthcare) — it is not exclusively managed internally by a single company."
    ]
  },
  {
    id: 202,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to keep sensitive workloads on-premises while also using AWS for burst capacity. Which deployment model does this describe?",
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Multi-cloud"],
    correct: [2],
    explanation: "A hybrid cloud combines on-premises (or private cloud) infrastructure with a public cloud, allowing data and applications to move between them. This is ideal for compliance requirements or latency-sensitive workloads that must stay on-premises.",
    optionExplanations: [
      "Public cloud runs entirely in a cloud provider's shared infrastructure — it does not include an on-premises component for sensitive workloads.",
      "Private cloud runs exclusively on dedicated on-premises or hosted infrastructure — it does not include the AWS burst capacity component described.",
      "Correct — Hybrid cloud connects on-premises infrastructure (for sensitive workloads) with AWS (for burst capacity), allowing workloads to move between both environments.",
      "Multi-cloud uses multiple public cloud providers simultaneously — it does not specifically describe the combination of on-premises and a single cloud provider for burst capacity."
    ]
  },
  {
    id: 203,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Cloud advantage describes the ability to deploy applications to multiple AWS Regions around the world in minutes?",
    options: ["Massive economies of scale", "Stop guessing capacity", "Go global in minutes", "Increase speed and agility"],
    correct: [2],
    explanation: "'Go global in minutes' is one of the six key advantages of cloud computing. AWS's global infrastructure lets companies deploy applications close to end users worldwide with just a few clicks, reducing latency and improving user experience.",
    optionExplanations: [
      "'Massive economies of scale' describes lower AWS prices due to aggregate purchasing power — it is about cost reduction, not the speed of global deployment.",
      "'Stop guessing capacity' describes using Auto Scaling to match resources to demand — it is about capacity planning, not geographic deployment speed.",
      "Correct — 'Go global in minutes' means AWS's global Regions allow deploying applications worldwide in minutes with just a few clicks.",
      "'Increase speed and agility' describes faster provisioning and experimentation — while related, it focuses on time-to-market for new ideas, not specifically deploying to multiple Regions."
    ]
  },
  {
    id: 204,
    domain: "Cloud Concepts",
    type: "single",
    question: "Because AWS aggregates usage from hundreds of thousands of customers, it can achieve lower pay-as-you-go prices. Which cloud benefit does this represent?",
    options: ["Trade fixed expense for variable expense", "Massive economies of scale", "Stop guessing capacity", "Increase speed and agility"],
    correct: [1],
    explanation: "AWS's massive scale allows it to purchase hardware and operate data centers far more cheaply than a single company could. These savings are passed on to customers as lower variable pricing — this is the 'massive economies of scale' advantage.",
    optionExplanations: [
      "'Trade fixed expense for variable expense' describes the CapEx-to-OpEx shift — it is about the payment model, not about lower prices derived from aggregate purchasing power.",
      "Correct — 'Massive economies of scale' means AWS passes on cost savings from aggregating usage of hundreds of thousands of customers as lower variable pricing.",
      "'Stop guessing capacity' describes using Auto Scaling for right-sized resources — it is about capacity planning, not the price reduction from aggregate scale.",
      "'Increase speed and agility' describes faster time-to-market — it is about provisioning speed, not pricing advantages from scale."
    ]
  },
  {
    id: 205,
    domain: "Cloud Concepts",
    type: "single",
    question: "A developer can spin up a new test environment in minutes on AWS instead of waiting weeks for hardware procurement. Which cloud benefit does this BEST illustrate?",
    options: ["Go global in minutes", "Stop guessing capacity", "Increase speed and agility", "Trade fixed expense for variable expense"],
    correct: [2],
    explanation: "'Increase speed and agility' refers to the ability to rapidly provision new resources, experiment quickly, and reduce the time to bring new ideas to market. In the cloud, what used to take weeks now takes minutes.",
    optionExplanations: [
      "'Go global in minutes' refers to deploying to worldwide Regions — it is about geographic reach, not the speed of spinning up a local test environment.",
      "'Stop guessing capacity' refers to matching infrastructure to actual demand with Auto Scaling — it is about capacity accuracy, not faster environment provisioning.",
      "Correct — 'Increase speed and agility' means developers can spin up test environments in minutes instead of waiting weeks for hardware procurement.",
      "'Trade fixed expense for variable expense' refers to the CapEx-to-OpEx financial shift — it addresses cost model, not deployment speed."
    ]
  },
  {
    id: 206,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following is an example of Infrastructure as a Service (IaaS)?",
    options: ["AWS Lambda", "Amazon RDS", "Amazon EC2", "AWS Elastic Beanstalk"],
    correct: [2],
    explanation: "Amazon EC2 provides raw virtual machines — compute, networking, and storage — where the customer manages the OS and everything above. This is IaaS. Lambda is FaaS, RDS is PaaS/managed database, and Elastic Beanstalk is PaaS.",
    optionExplanations: [
      "AWS Lambda is a serverless/FaaS service — developers write only function code and AWS manages all underlying infrastructure.",
      "Amazon RDS is a managed database service (PaaS) — AWS handles the OS, database engine patching, and backups; customers only manage the database schemas and data.",
      "Correct — Amazon EC2 is IaaS: AWS provides virtual hardware, but the customer manages the OS, middleware, runtime, and applications.",
      "AWS Elastic Beanstalk is a PaaS service — developers deploy application code and AWS manages the infrastructure, removing the need to manage servers or OS."
    ]
  },
  {
    id: 207,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which service model provides a complete application delivered over the internet, with the provider managing all underlying infrastructure, middleware, and the application itself?",
    options: ["IaaS", "PaaS", "SaaS", "FaaS"],
    correct: [2],
    explanation: "Software as a Service (SaaS) delivers a fully managed application over the internet. The customer only manages their data and user settings. Examples include Salesforce, Google Workspace, and AWS services like Amazon WorkMail.",
    optionExplanations: [
      "IaaS provides virtual hardware — the customer still manages the OS, runtime, middleware, and application. The provider does not manage the application.",
      "PaaS provides a platform for developers — the customer still builds and manages their own application code, not a pre-built application delivered by the provider.",
      "Correct — SaaS delivers a complete application over the internet; the provider manages everything including the application, leaving the customer responsible only for their data and settings.",
      "FaaS (Serverless) requires the customer to write and maintain individual function code — the provider doesn't manage a complete application for you."
    ]
  },
  {
    id: 208,
    domain: "Cloud Concepts",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, which of the following is AWS responsible for?",
    options: ["Patching the guest operating system on EC2", "Managing IAM user permissions", "Physical security of data center facilities", "Encrypting application data"],
    correct: [2],
    explanation: "AWS is responsible for 'security OF the cloud' — the physical infrastructure including data centers, hardware, networking, and the hypervisor. Customers are responsible for 'security IN the cloud': OS patches, IAM, and data encryption.",
    optionExplanations: [
      "Patching the guest OS on EC2 is a customer responsibility — AWS only manages the hypervisor and hardware layer, not the operating system running inside the virtual machine.",
      "Managing IAM user permissions is always the customer's responsibility — AWS provides the IAM service but never manages who gets what permissions inside a customer's account.",
      "Correct — Physical security of data center facilities is AWS's responsibility ('security OF the cloud') — customers never have physical access to AWS data centers.",
      "Encrypting application data is the customer's responsibility — AWS provides tools (KMS, ACM) but the decision to encrypt and the key management are the customer's to configure."
    ]
  },
  {
    id: 209,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which pillar of the AWS Well-Architected Framework focuses on the ability of a system to recover from failures and meet business continuity requirements?",
    options: ["Performance Efficiency", "Operational Excellence", "Reliability", "Cost Optimization"],
    correct: [2],
    explanation: "The Reliability pillar covers designing systems that automatically recover from failures, dynamically acquire resources to meet demand, and mitigate disruptions. It includes fault tolerance, disaster recovery, and backup strategies.",
    optionExplanations: [
      "Performance Efficiency focuses on using resources efficiently to meet system requirements — not on recovery from failures or business continuity.",
      "Operational Excellence focuses on running and monitoring systems and improving processes — not specifically on recovery from failures and meeting business continuity requirements.",
      "Correct — The Reliability pillar focuses on designing systems that automatically recover from failures, meet business continuity requirements, and mitigate disruptions.",
      "Cost Optimization focuses on avoiding unnecessary expenses and running systems at the lowest viable cost — not on recovery from failures."
    ]
  },
  {
    id: 210,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which pillar of the AWS Well-Architected Framework focuses on using resources efficiently to meet system requirements at the lowest possible cost?",
    options: ["Reliability", "Security", "Cost Optimization", "Sustainability"],
    correct: [2],
    explanation: "The Cost Optimization pillar helps organizations avoid unnecessary expenses by right-sizing resources, using reserved capacity, and leveraging managed services. It includes understanding spending patterns and selecting the most cost-effective options.",
    optionExplanations: [
      "Reliability focuses on system recovery from failures and meeting availability targets — not on avoiding unnecessary spending or optimizing resource costs.",
      "Security focuses on protecting data and systems through access controls and threat detection — not on resource efficiency and cost management.",
      "Correct — Cost Optimization focuses on avoiding unnecessary expenses through right-sizing, reserved capacity, managed services, and ongoing spending optimization.",
      "Sustainability focuses on minimizing environmental impact — while related to efficiency, its goal is carbon footprint reduction, not financial cost optimization."
    ]
  },
  {
    id: 211,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to design its AWS workload so that a failure in one Availability Zone does not affect the entire application. Which design principle does this represent?",
    options: ["Design for failure", "Implement elasticity", "Decouple components", "Optimize for cost"],
    correct: [0],
    explanation: "'Design for failure' (or 'assume everything fails') is a key cloud design principle. Deploying across multiple AZs ensures high availability — if one zone fails, traffic automatically shifts to healthy zones.",
    optionExplanations: [
      "Correct — 'Design for failure' means assuming any AZ can fail and architecting across multiple AZs so traffic automatically shifts to healthy zones without disruption.",
      "'Implement elasticity' means automatically scaling resources up/down with demand — it is about capacity management, not about multi-AZ resilience.",
      "'Decouple components' means using queues/APIs between components — it reduces dependencies and improves resilience but does not specifically address multi-AZ failover.",
      "'Optimize for cost' means reducing unnecessary expenses — it does not describe the multi-AZ failure isolation architecture."
    ]
  },
  {
    id: 212,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Well-Architected Framework pillar includes practices such as tracing requests, monitoring metrics, and automating responses to operational events?",
    options: ["Security", "Reliability", "Performance Efficiency", "Operational Excellence"],
    correct: [3],
    explanation: "Operational Excellence focuses on running and monitoring systems to deliver business value and continually improve supporting processes. Key practices include automating changes, responding to events, and defining standards for daily operations.",
    optionExplanations: [
      "Security covers protecting data, systems, and assets through access controls and detective controls — not operational monitoring, tracing requests, and automating event responses.",
      "Reliability focuses on recovering from failures and meeting availability targets — not on daily operational practices like request tracing and event automation.",
      "Performance Efficiency focuses on using resources efficiently to meet system requirements — not on monitoring, tracing, and automating operational event responses.",
      "Correct — Operational Excellence includes monitoring systems, tracing requests, automating responses to operational events, and continuously improving day-to-day operational processes."
    ]
  },
  {
    id: 213,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which term describes the AWS concept of automatically adding or removing resources based on current demand?",
    options: ["High availability", "Fault tolerance", "Elasticity", "Durability"],
    correct: [2],
    explanation: "Elasticity is the ability to automatically scale resources up or down in response to demand. Auto Scaling groups are a primary AWS mechanism for elasticity, ensuring you have exactly the capacity you need at any point in time.",
    optionExplanations: [
      "High availability means a system remains accessible with minimal downtime — it is about uptime and redundancy, not automatically adjusting capacity based on demand.",
      "Fault tolerance means continuing to operate even when components fail — it is about resilience during failures, not scaling capacity up and down.",
      "Correct — Elasticity is the automatic adjustment of resources (up or down) based on current demand, using services like Auto Scaling to match capacity to need.",
      "Durability refers to the long-term integrity of stored data (not being lost or corrupted) — it is about data persistence, not capacity adjustment."
    ]
  },
  {
    id: 214,
    domain: "Cloud Concepts",
    type: "single",
    question: "What does 'high availability' mean in the context of AWS cloud architecture?",
    options: ["A system that never has any downtime", "A system designed to minimize downtime and remain operational despite failures", "A system that scales infinitely", "A system that costs the least to operate"],
    correct: [1],
    explanation: "High availability means designing systems to minimize downtime by using redundancy and automatic failover. It does not mean zero downtime (that is fault tolerance), but rather that the system can quickly recover or redirect traffic when components fail.",
    optionExplanations: [
      "A system that never has any downtime describes fault tolerance — high availability allows for minimal brief interruptions during failover, not absolute zero downtime.",
      "Correct — High availability minimizes downtime through redundancy and automatic failover; the system remains operational despite failures, though brief interruptions may occur.",
      "A system that scales infinitely describes elasticity or scalability — high availability is about uptime and redundancy, not unlimited capacity growth.",
      "A system that costs the least to operate describes cost optimization — high availability has an inherent cost due to redundant resources."
    ]
  },
  {
    id: 215,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes the concept of 'fault tolerance' in AWS?",
    options: ["The ability to scale resources on demand", "The ability to continue operating with zero downtime even when components fail", "The ability to deploy globally in minutes", "The ability to pay only for what you use"],
    correct: [1],
    explanation: "Fault tolerance means a system continues to operate correctly even when one or more of its components fail — with zero downtime. This is stricter than high availability, which allows brief interruptions. AWS achieves this through redundant, distributed components.",
    optionExplanations: [
      "The ability to scale resources on demand describes elasticity — fault tolerance is about continued operation during failures, not adjusting capacity.",
      "Correct — Fault tolerance means the system continues to operate with zero downtime even when components fail, through fully redundant and distributed architecture.",
      "The ability to deploy globally in minutes describes the 'Go global in minutes' cloud advantage — not resilience against component failures.",
      "The ability to pay only for what you use describes the pay-as-you-go pricing model — not the concept of continued operation during failures."
    ]
  },
  {
    id: 216,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS concept refers to the long-term durability of data stored in services like Amazon S3, expressed as the probability that data will not be lost?",
    options: ["Availability", "Elasticity", "Durability", "Resilience"],
    correct: [2],
    explanation: "Durability is the probability that data remains intact over a long period. Amazon S3 Standard is designed for 99.999999999% (11 nines) durability by redundantly storing data across multiple devices in multiple facilities.",
    optionExplanations: [
      "Availability is the probability that data can be accessed when needed — it is about uptime of access, not the permanence of the data itself.",
      "Elasticity is the ability to scale capacity up and down automatically — it is about resource adjustment, not data persistence or integrity.",
      "Correct — Durability is the probability that stored data will not be lost or corrupted over time. S3 Standard provides 99.999999999% (11 nines) durability.",
      "Resilience describes a system's ability to recover from failures — it is a broader concept than the specific probability metric of data integrity expressed by durability."
    ]
  },
  {
    id: 217,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "Which of the following are advantages of using AWS over traditional on-premises infrastructure? (Select TWO)",
    options: ["Capital expenses replaced by variable operating expenses", "Full control over physical hardware", "Ability to go global in minutes", "Unlimited free storage"],
    correct: [0, 2],
    explanation: "Two key AWS advantages: (1) Trading CapEx for OpEx — pay only for what you use, no upfront hardware costs. (2) Global deployment in minutes — AWS Regions let you deploy close to users worldwide instantly. Full hardware control and free storage are not AWS advantages.",
    optionExplanations: [
      "Correct — Trading CapEx for OpEx means paying only for what you use with no upfront hardware costs, one of the six key cloud advantages.",
      "Full control over physical hardware is an on-premises advantage — moving to AWS means relinquishing physical hardware control in exchange for managed services and global scale.",
      "Correct — 'Go global in minutes' means AWS Regions allow worldwide deployment in minutes, a key cloud advantage over on-premises infrastructure.",
      "AWS does not provide unlimited free storage — all S3, EBS, and other storage services are billed based on usage (with a limited Free Tier for new accounts)."
    ]
  },
  {
    id: 218,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud computing model allows developers to focus solely on writing code without managing servers, OS, or runtime environments?",
    options: ["IaaS", "PaaS", "SaaS", "Serverless / FaaS"],
    correct: [3],
    explanation: "Serverless / Function as a Service (FaaS) — exemplified by AWS Lambda — abstracts all infrastructure. Developers only write code; AWS handles provisioning, scaling, patching, and availability automatically.",
    optionExplanations: [
      "IaaS (e.g., EC2) requires the customer to manage the OS, runtime, middleware, and application — the developer still manages servers and infrastructure.",
      "PaaS (e.g., Elastic Beanstalk) handles server infrastructure but developers still deploy and manage entire application code, not just individual functions.",
      "SaaS delivers a complete, ready-to-use application — developers use it as end-users, not write code for deployment.",
      "Correct — Serverless/FaaS (e.g., AWS Lambda) completely abstracts infrastructure; developers only write code functions and AWS handles all provisioning, scaling, and availability."
    ]
  },
  {
    id: 219,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company is evaluating the Total Cost of Ownership (TCO) of moving to AWS. Which cost would be ELIMINATED when migrating from on-premises to the cloud?",
    options: ["Software licensing fees", "Data transfer costs", "Hardware procurement and data center facility costs", "Application development costs"],
    correct: [2],
    explanation: "TCO analysis shows that moving to the cloud eliminates costs associated with purchasing servers, networking hardware, data center space, power, and cooling. AWS absorbs these infrastructure costs and spreads them across customers.",
    optionExplanations: [
      "Software licensing fees are not necessarily eliminated when migrating to AWS — you still need to pay for software licenses unless you choose AWS-managed services or BYOL.",
      "Data transfer costs are not eliminated — AWS charges for data transfer OUT to the internet. These costs may change in nature but are not removed.",
      "Correct — Hardware procurement costs (servers, networking equipment, data center space, power, and cooling) are eliminated when migrating to AWS.",
      "Application development costs are not eliminated by migrating to the cloud — you still need developers to build and maintain applications."
    ]
  },
  {
    id: 220,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS tool helps customers estimate the cost savings of migrating on-premises workloads to AWS by comparing total cost of ownership?",
    options: ["AWS Pricing Calculator", "AWS Cost Explorer", "AWS Migration Evaluator", "AWS Budgets"],
    correct: [2],
    explanation: "AWS Migration Evaluator (formerly TSO Logic) provides a data-driven business case for cloud migration by analyzing on-premises infrastructure and comparing it to equivalent AWS costs. AWS Pricing Calculator estimates future AWS costs but does not compare on-premises TCO.",
    optionExplanations: [
      "AWS Pricing Calculator estimates the cost of planned AWS architectures — it does not analyze on-premises infrastructure or provide a TCO comparison with existing infrastructure.",
      "AWS Cost Explorer analyzes existing AWS spending — it does not compare on-premises infrastructure costs against AWS.",
      "Correct — AWS Migration Evaluator analyzes your on-premises infrastructure and compares it to equivalent AWS costs, providing a data-driven business case for migration.",
      "AWS Budgets monitors spending against thresholds — it does not compare on-premises costs with AWS or provide migration business cases."
    ]
  },
  {
    id: 221,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes an AWS Region?",
    options: ["A single data center operated by AWS", "A collection of one or more Availability Zones in a geographic area", "A set of edge locations used for content delivery", "A dedicated connection between on-premises and AWS"],
    correct: [1],
    explanation: "An AWS Region is a geographic area containing two or more isolated Availability Zones. Each AZ consists of one or more data centers. Regions are separate from each other to provide fault isolation and compliance boundaries.",
    optionExplanations: [
      "A single data center describes an Availability Zone (or part of one) — a Region consists of two or more physically separate AZs.",
      "Correct — An AWS Region is a geographic area containing two or more isolated Availability Zones, each of which is one or more data centers.",
      "Edge locations are CDN/DNS endpoints for CloudFront and Route 53 — they are not part of the Region/AZ infrastructure hierarchy.",
      "A dedicated connection between on-premises and AWS describes AWS Direct Connect — not the definition of an AWS Region."
    ]
  },
  {
    id: 222,
    domain: "Cloud Concepts",
    type: "single",
    question: "What is an AWS Availability Zone?",
    options: ["A global content delivery network location", "One or more discrete data centers with redundant power, networking, and connectivity within a Region", "A separate billing account for different teams", "A virtual private network connection"],
    correct: [1],
    explanation: "An Availability Zone (AZ) is one or more physical data centers within an AWS Region with independent power, cooling, and networking. AZs within a Region are connected via low-latency links, enabling high-availability architectures.",
    optionExplanations: [
      "A global content delivery network location describes an Edge Location — it is used for CDN caching and DNS, not as a primary compute data center.",
      "Correct — An AZ is one or more physical data centers within a Region, with independent power, cooling, and networking, connected to other AZs via low-latency links.",
      "A separate billing account describes an AWS account structure — Availability Zones are physical infrastructure, not billing entities.",
      "A virtual private network connection describes AWS VPN or Direct Connect — not a physical data center infrastructure component."
    ]
  },
  {
    id: 223,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS infrastructure component is used to cache content closer to end users to reduce latency?",
    options: ["Availability Zone", "AWS Region", "AWS Edge Location", "AWS Local Zone"],
    correct: [2],
    explanation: "AWS Edge Locations are sites used by Amazon CloudFront (CDN) and other services like Route 53 to cache content and process requests closer to end users. There are hundreds of edge locations worldwide, far more than the number of Regions.",
    optionExplanations: [
      "An Availability Zone is a set of data centers within a Region — it hosts primary compute workloads, not CDN caching infrastructure.",
      "An AWS Region is a geographic area with multiple AZs — it hosts your deployed applications, not edge content caching endpoints.",
      "Correct — AWS Edge Locations are CloudFront CDN and Route 53 endpoints worldwide, caching content closer to users to reduce latency.",
      "AWS Local Zones extend AWS compute to metropolitan areas — they run actual workloads, not edge caching for content delivery."
    ]
  },
  {
    id: 224,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company needs to run a workload with extremely low latency requirements in a specific city that does not have an AWS Region. Which AWS infrastructure option should they consider?",
    options: ["AWS Outposts", "AWS Local Zones", "AWS Wavelength", "AWS Edge Locations"],
    correct: [1],
    explanation: "AWS Local Zones place compute, storage, and database services closer to large population centers where no full AWS Region exists. They are extensions of a Region, ideal for latency-sensitive workloads like media rendering or real-time gaming.",
    optionExplanations: [
      "AWS Outposts brings AWS hardware to a customer's own on-premises data center — it is not placed in metropolitan areas by AWS to serve city populations.",
      "Correct — AWS Local Zones are AWS-owned infrastructure extensions placed in major cities, providing a subset of AWS services with single-digit millisecond latency to local users.",
      "AWS Wavelength is embedded inside 5G telecom networks for mobile edge computing — it is designed for mobile device latency, not metropolitan area workloads.",
      "AWS Edge Locations serve CloudFront CDN caching and Route 53 DNS — they do not run general compute workloads for latency-sensitive applications."
    ]
  },
  {
    id: 225,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS service extends AWS infrastructure and services to a customer's on-premises data center?",
    options: ["AWS Direct Connect", "AWS Local Zones", "AWS Outposts", "AWS Snowball"],
    correct: [2],
    explanation: "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center or on-premises facility. It is ideal for workloads that require low latency to on-premises systems or that must remain on-premises for data residency reasons.",
    optionExplanations: [
      "AWS Direct Connect provides a private network link between on-premises and AWS — it is a connectivity service, not infrastructure installed in the customer's data center.",
      "AWS Local Zones are AWS-owned facilities in metropolitan areas — they are not installed inside a customer's own on-premises data center.",
      "Correct — AWS Outposts delivers AWS-managed rack hardware to a customer's facility, running native AWS services locally for low-latency or data-residency requirements.",
      "AWS Snowball is used for large-scale data migration and edge compute in disconnected environments — it is not a persistent infrastructure solution for on-premises AWS services."
    ]
  },
  {
    id: 226,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS design principle recommends building systems where individual components do not depend directly on each other, communicating instead through queues or APIs?",
    options: ["Design for failure", "Implement elasticity", "Decouple components", "Think parallel"],
    correct: [2],
    explanation: "Decoupling means components interact through loosely coupled interfaces (queues, APIs, event buses) rather than direct calls. If one component fails or scales, it does not cascade failures to others. SQS is a common tool for decoupling in AWS architectures.",
    optionExplanations: [
      "'Design for failure' means assuming components will fail and building redundancy to handle those failures — it is about resilience, not specifically about reducing direct dependencies.",
      "'Implement elasticity' means auto-scaling capacity to match demand — it is about resource adjustment, not reducing dependencies between components.",
      "Correct — 'Decouple components' means using queues (SQS) or APIs between components so they do not depend directly on each other, reducing cascade failures.",
      "'Think parallel' means running tasks concurrently to improve throughput — it is about performance optimization, not reducing component dependencies."
    ]
  },
  {
    id: 227,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which pillar of the AWS Well-Architected Framework addresses protecting data, systems, and assets through risk assessments and mitigation strategies?",
    options: ["Reliability", "Operational Excellence", "Security", "Performance Efficiency"],
    correct: [2],
    explanation: "The Security pillar covers identity and access management, detective controls, infrastructure protection, data protection, and incident response. It encourages applying security at every layer and automating security best practices.",
    optionExplanations: [
      "Reliability covers recovery from failures and meeting availability targets — not protecting data and assets through risk assessment and mitigation.",
      "Operational Excellence covers running, monitoring, and improving operational processes — not specifically protecting data and assets from threats.",
      "Correct — The Security pillar addresses protecting data, systems, and assets through IAM, detective controls, infrastructure protection, data protection, and incident response.",
      "Performance Efficiency covers using resources efficiently to meet system requirements — not risk assessment and security mitigation strategies."
    ]
  },
  {
    id: 228,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which pillar of the AWS Well-Architected Framework focuses on using computing resources efficiently to meet system requirements and maintaining efficiency as demand changes?",
    options: ["Cost Optimization", "Reliability", "Performance Efficiency", "Sustainability"],
    correct: [2],
    explanation: "Performance Efficiency focuses on selecting the right resource types and sizes, monitoring performance, and making evidence-based decisions to maintain efficiency. This includes using serverless architectures and selecting the right database type for each workload.",
    optionExplanations: [
      "Cost Optimization focuses on avoiding unnecessary financial expense — while related to efficiency, its goal is cost reduction, not maintaining performance as demand changes.",
      "Reliability focuses on recovering from failures and meeting availability targets — not on selecting the right resource types for performance efficiency.",
      "Correct — Performance Efficiency focuses on using the right resource types and sizes to meet system requirements efficiently, including adopting serverless and purpose-built databases.",
      "Sustainability focuses on minimizing environmental impact — not on maintaining performance efficiency as demand changes."
    ]
  },
  {
    id: 229,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS Well-Architected Framework pillar was added to address the long-term environmental impact of cloud workloads?",
    options: ["Cost Optimization", "Sustainability", "Operational Excellence", "Reliability"],
    correct: [1],
    explanation: "The Sustainability pillar (added in 2021) focuses on minimizing the environmental impact of running cloud workloads. Best practices include right-sizing resources, using managed services, and selecting Regions with renewable energy sources.",
    optionExplanations: [
      "Cost Optimization focuses on reducing financial costs — while efficient resource use can also reduce environmental impact, Cost Optimization's goal is saving money, not environmental sustainability.",
      "Correct — Sustainability (added in 2021) addresses the long-term environmental impact of cloud workloads through right-sizing, managed services, and renewable energy Region selection.",
      "Operational Excellence focuses on running and monitoring systems and improving processes — not on the environmental impact of workloads.",
      "Reliability focuses on recovering from failures and meeting availability requirements — not on environmental impact."
    ]
  },
  {
    id: 230,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "Which of the following are characteristics of cloud computing according to the NIST definition? (Select TWO)",
    options: ["On-demand self-service", "Fixed monthly billing regardless of usage", "Broad network access", "Dedicated physical hardware for each customer"],
    correct: [0, 2],
    explanation: "NIST defines five essential cloud characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. On-demand self-service and broad network access are two of these. Fixed billing and dedicated hardware per customer are not cloud characteristics.",
    optionExplanations: [
      "Correct — On-demand self-service is one of the five NIST characteristics: users provision resources without human interaction from the provider.",
      "Fixed monthly billing is not a cloud characteristic — cloud uses measured service (pay per use), the opposite of fixed monthly billing.",
      "Correct — Broad network access is one of the five NIST characteristics: services are available over the network from standard devices (laptops, phones, tablets).",
      "Dedicated physical hardware per customer describes a dedicated/private infrastructure model — NIST's resource pooling characteristic means physical resources are shared across multiple customers (multi-tenancy)."
    ]
  },
  {
    id: 231,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes 'economies of scale' as an AWS cloud benefit?",
    options: ["Users can scale their infrastructure up and down as needed", "AWS passes cost savings from aggregated usage of millions of customers to users as lower prices", "Companies can deploy to multiple regions simultaneously", "Organizations stop paying for idle capacity"],
    correct: [1],
    explanation: "Because AWS aggregates usage across hundreds of thousands of customers, it achieves higher purchasing efficiencies. These savings translate to lower pay-as-you-go prices. Individual customers benefit from the same per-unit cost advantages that only very large enterprises could previously achieve.",
    optionExplanations: [
      "Scaling infrastructure up and down describes elasticity — it is about capacity management, not the cost savings from AWS's aggregate purchasing power.",
      "Correct — Economies of scale means AWS passes cost savings from aggregated usage of millions of customers to users as lower prices — individual companies get enterprise-level pricing.",
      "Deploying to multiple regions simultaneously describes the 'Go global in minutes' advantage — it is about geographic reach, not pricing from aggregate scale.",
      "Not paying for idle capacity relates to the elasticity and pay-as-you-go concepts — it is about avoiding waste, not about lower per-unit prices from AWS's scale."
    ]
  },
  {
    id: 232,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company's website experiences unpredictable traffic spikes. Instead of provisioning servers for peak load, the company wants to pay only for actual usage. Which cloud concept BEST describes this approach?",
    options: ["High availability", "Elasticity", "Durability", "Multi-tenancy"],
    correct: [1],
    explanation: "Elasticity allows the system to automatically add capacity during spikes and remove it when demand drops, paying only for what is actually used. This eliminates the need to over-provision for peak demand.",
    optionExplanations: [
      "High availability ensures the system remains accessible with minimal downtime — it is about uptime and redundancy, not automatically adjusting capacity for traffic spikes.",
      "Correct — Elasticity automatically adds capacity during traffic spikes and removes it when demand drops, so you pay only for actual usage and never over-provision.",
      "Durability refers to the long-term integrity of stored data (not being lost) — it is about data persistence, not capacity adjustment for traffic spikes.",
      "Multi-tenancy means multiple customers share underlying hardware — it is a cloud computing model characteristic, not a design concept for handling traffic spikes."
    ]
  },
  {
    id: 233,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following is a customer responsibility under the AWS Shared Responsibility Model when running Amazon EC2 instances?",
    options: ["Maintaining network infrastructure hardware", "Patching the hypervisor", "Patching the guest operating system", "Physical security of the data center"],
    correct: [2],
    explanation: "For EC2 (IaaS), the customer is responsible for everything above the hypervisor: OS patching, application security, firewall rules, and data encryption. AWS manages the physical hardware, hypervisor, and networking infrastructure.",
    optionExplanations: [
      "Maintaining network infrastructure hardware is AWS's responsibility ('security OF the cloud') — customers never manage physical networking equipment.",
      "Patching the hypervisor is AWS's responsibility — the hypervisor is part of the physical infrastructure layer that AWS manages.",
      "Correct — Patching the guest operating system on EC2 is the customer's responsibility. AWS only manages up to and including the hypervisor; everything above it (OS, applications) is the customer's responsibility.",
      "Physical security of the data center is AWS's responsibility — customers have no physical access to AWS data centers."
    ]
  },
  {
    id: 234,
    domain: "Cloud Concepts",
    type: "single",
    question: "For a managed service like Amazon RDS, which task does AWS handle that the customer would handle on a self-managed database on EC2?",
    options: ["Creating database schemas", "Managing database user credentials", "Patching the database engine software", "Writing SQL queries"],
    correct: [2],
    explanation: "With Amazon RDS (a managed service), AWS handles database engine patching, backups, hardware provisioning, and OS maintenance. The customer is still responsible for schema design, user permissions, and query tuning — but not the underlying engine patching.",
    optionExplanations: [
      "Creating database schemas is always the customer's responsibility — it is a design decision that AWS never manages regardless of whether you use RDS or a self-managed database.",
      "Managing database user credentials is the customer's responsibility — even with RDS, the customer controls who has access to their database.",
      "Correct — Patching the database engine software is handled by AWS in RDS (the 'managed' in managed service). On a self-managed database on EC2, the customer must do this manually.",
      "Writing SQL queries is always the customer's responsibility — it is application logic that AWS never manages."
    ]
  },
  {
    id: 235,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud deployment model is BEST for a company that needs full control over its infrastructure but wants the flexibility to burst into AWS during high-demand periods?",
    options: ["Public cloud only", "Private cloud only", "Hybrid cloud", "Community cloud"],
    correct: [2],
    explanation: "Hybrid cloud combines on-premises (private) infrastructure with public cloud. This model gives companies full control and data residency for sensitive workloads while allowing them to burst to AWS when demand exceeds on-premises capacity.",
    optionExplanations: [
      "Public cloud only would move all workloads to AWS — this does not provide full control over sensitive workloads or allow them to remain on-premises.",
      "Private cloud only keeps everything on-premises — this does not allow bursting to AWS during high demand.",
      "Correct — Hybrid cloud combines on-premises control for sensitive workloads with the ability to burst into AWS for additional capacity during high-demand periods.",
      "Community cloud is shared among organizations with common concerns — it does not describe the combination of on-premises infrastructure with a public cloud for burst capacity."
    ]
  },
  {
    id: 236,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following actions helps a company 'stop guessing capacity' when migrating to AWS?",
    options: ["Purchasing Reserved Instances for three years", "Using Auto Scaling to automatically adjust capacity based on actual demand", "Deploying resources in multiple Regions", "Using AWS Direct Connect for private connectivity"],
    correct: [1],
    explanation: "Auto Scaling eliminates the need to guess peak capacity. Resources scale out when demand rises and scale in when it drops, ensuring the right capacity at all times without over-provisioning or under-provisioning.",
    optionExplanations: [
      "Purchasing Reserved Instances for three years commits to a fixed capacity — this still involves guessing future demand and does not dynamically adjust to actual usage.",
      "Correct — Using Auto Scaling means resources automatically grow when demand rises and shrink when it drops, eliminating the need to manually guess and provision for peak capacity.",
      "Deploying resources in multiple Regions improves global availability but does not eliminate the need to provision the right capacity in each Region.",
      "Using AWS Direct Connect improves network connectivity performance — it does not help match capacity to actual demand."
    ]
  },
  {
    id: 237,
    domain: "Cloud Concepts",
    type: "single",
    question: "What is the primary benefit of AWS's pay-as-you-go pricing model compared to traditional on-premises infrastructure?",
    options: ["It guarantees a fixed monthly cost", "It converts large upfront capital expenditures into smaller ongoing operational expenses", "It eliminates all infrastructure costs", "It provides free tier access indefinitely"],
    correct: [1],
    explanation: "Pay-as-you-go converts CapEx (buying servers) to OpEx (paying for usage). This improves cash flow, removes financial risk of over-buying, and aligns costs with actual business value delivered.",
    optionExplanations: [
      "Pay-as-you-go does not guarantee a fixed monthly cost — your bill varies with usage, which is the opposite of a fixed cost.",
      "Correct — Pay-as-you-go converts large upfront CapEx (buying servers) to smaller ongoing OpEx (paying for what you use), improving cash flow and reducing financial risk.",
      "Pay-as-you-go does not eliminate all infrastructure costs — you still pay for the resources you consume; it only changes how costs are structured (variable vs. fixed).",
      "The Free Tier provides limited free access for new or all accounts, but it is not a feature of the pay-as-you-go pricing model and is not indefinitely free."
    ]
  },
  {
    id: 238,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS service provides a framework and set of best practices to help cloud architects build secure, high-performing, resilient, and efficient infrastructure?",
    options: ["AWS Trusted Advisor", "AWS Well-Architected Tool", "AWS Config", "AWS Service Catalog"],
    correct: [1],
    explanation: "The AWS Well-Architected Tool reviews workloads against the six pillars of the Well-Architected Framework, identifies high-risk issues, and provides improvement guidance. Trusted Advisor gives real-time recommendations but is not the formal Well-Architected review tool.",
    optionExplanations: [
      "AWS Trusted Advisor provides automated real-time best-practice checks across five categories — it is not the formal tool for a structured architectural review against the six Well-Architected pillars.",
      "Correct — The AWS Well-Architected Tool provides a structured framework review across all six pillars, identifies high and medium risks, and generates an improvement plan.",
      "AWS Config records resource configurations and evaluates compliance — it does not provide Well-Architected Framework reviews or architectural guidance.",
      "AWS Service Catalog manages approved internal IT service catalogs — it does not provide architectural best-practice reviews or framework guidance."
    ]
  },
  {
    id: 239,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes AWS's global infrastructure from largest to smallest scope?",
    options: ["Edge Location > Availability Zone > Region", "Region > Availability Zone > Edge Location (by hierarchy, not count)", "Availability Zone > Region > Edge Location", "Region > Edge Location > Availability Zone"],
    correct: [1],
    explanation: "Hierarchy: Regions are the largest geographic units, each containing multiple Availability Zones. Edge Locations are separate from this hierarchy — they are CDN/DNS PoPs. There are more edge locations than Regions or AZs, but in the infrastructure hierarchy, Region > AZ.",
    optionExplanations: [
      "'Edge Location > AZ > Region' inverts the hierarchy — Edge Locations are CDN PoPs (not the largest unit), while Regions are the largest geographic infrastructure groupings.",
      "Correct — In the infrastructure hierarchy: Region > Availability Zone. Edge Locations are CDN/DNS PoPs separate from this hierarchy, but numerically there are more of them worldwide.",
      "'AZ > Region > Edge Location' inverts the hierarchy — Regions are larger than AZs (each Region contains multiple AZs).",
      "'Region > Edge Location > Availability Zone' incorrectly positions Edge Locations in the AZ hierarchy — Edge Locations are CDN/DNS PoPs, not part of the Region/AZ compute hierarchy."
    ]
  },
  {
    id: 240,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to run workloads in AWS but must ensure data never leaves a specific country due to regulatory requirements. Which AWS infrastructure feature helps meet this requirement?",
    options: ["Availability Zones", "AWS Regions", "Edge Locations", "AWS Local Zones"],
    correct: [1],
    explanation: "AWS data does not replicate across Regions automatically unless customers explicitly configure cross-region replication. By choosing a Region within the required country, customers can ensure their data stays within that country's borders for compliance.",
    optionExplanations: [
      "Availability Zones are within a single Region — they help with high availability within the Region but do not control which country data is stored in.",
      "Correct — By selecting an AWS Region located in the required country, data does not automatically leave that Region, satisfying data residency requirements.",
      "Edge Locations are CDN endpoints used for caching — they process requests but are not where your primary data is stored, so they do not control data residency.",
      "AWS Local Zones are extensions of a Region in metropolitan areas — they can help with latency but do not specifically address cross-border data residency compliance."
    ]
  },
  {
    id: 241,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which principle of cloud architecture recommends testing recovery procedures regularly and automating recovery to reduce risk during actual failures?",
    options: ["Implement elasticity", "Test recovery procedures", "Decouple components", "Design for failure"],
    correct: [1],
    explanation: "Under the Reliability pillar of the Well-Architected Framework, 'Test recovery procedures' means regularly running tests (like chaos engineering or DR drills) and automating failover so that recovery is proven before a real incident occurs.",
    optionExplanations: [
      "'Implement elasticity' means auto-scaling resources to match demand — it is about capacity adjustment, not testing recovery procedures and automating failover.",
      "Correct — 'Test recovery procedures' under the Reliability pillar means regularly testing DR processes (chaos engineering, failover drills) and automating recovery to reduce risk.",
      "'Decouple components' means using queues/APIs to reduce dependencies — it is about architecture design, not specifically about testing recovery procedures.",
      "'Design for failure' means building redundancy assuming components will fail — it is about resilient architecture, not the practice of regularly testing recovery procedures."
    ]
  },
  {
    id: 242,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud model provides a shared infrastructure used by several organizations with common concerns such as security, compliance, or jurisdiction?",
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
    correct: [3],
    explanation: "Community cloud is a less common model where infrastructure is shared among several organizations with common concerns (e.g., government agencies sharing a FedRAMP-compliant cloud, or healthcare organizations sharing HIPAA infrastructure).",
    optionExplanations: [
      "Public cloud is shared infrastructure operated by a cloud provider serving many diverse customers — it does not specifically serve organizations with common compliance or jurisdictional concerns.",
      "Private cloud is dedicated to a single organization — it does not describe a shared infrastructure model for multiple organizations.",
      "Hybrid cloud combines on-premises infrastructure with public cloud — it does not describe a shared infrastructure model for organizations with common concerns.",
      "Correct — Community cloud is infrastructure shared among several organizations with common concerns (security, compliance, jurisdiction), such as government agencies or healthcare organizations."
    ]
  },
  {
    id: 243,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which term describes the AWS practice of replacing failed resources automatically rather than repairing them — for example, terminating an unhealthy EC2 instance and launching a new one?",
    options: ["Immutable infrastructure", "Patching in place", "Vertical scaling", "Stateful recovery"],
    correct: [0],
    explanation: "Immutable infrastructure means replacing components rather than modifying them in-place. In AWS, Auto Scaling can terminate unhealthy instances and launch fresh ones from an AMI. This improves consistency and reduces configuration drift.",
    optionExplanations: [
      "Correct — Immutable infrastructure means replacing failed or outdated components with fresh ones from a known-good template (AMI), rather than modifying existing servers in-place.",
      "Patching in place is the opposite of immutable infrastructure — it modifies running servers, which can lead to configuration drift and inconsistency.",
      "Vertical scaling increases the size of a single instance — it is about capacity adjustment, not the practice of replacing failed resources automatically.",
      "Stateful recovery repairs and restores a specific instance to its previous state — this is mutable infrastructure, not the replacement-based immutable approach."
    ]
  },
  {
    id: 244,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    options: ["Cost Optimization", "Speed and Agility", "Security", "Global Deployment"],
    correct: [0, 2],
    explanation: "The six pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. 'Speed and Agility' and 'Global Deployment' are cloud benefits, not Well-Architected pillars.",
    optionExplanations: [
      "Correct — Cost Optimization is one of the six pillars of the AWS Well-Architected Framework.",
      "'Speed and Agility' is a cloud computing advantage (one of the six benefits of cloud), not one of the six Well-Architected Framework pillars.",
      "Correct — Security is one of the six pillars of the AWS Well-Architected Framework.",
      "'Global Deployment' is a cloud advantage ('Go global in minutes'), not one of the six Well-Architected Framework pillars."
    ]
  },
  {
    id: 245,
    domain: "Cloud Concepts",
    type: "single",
    question: "AWS allows customers to increase resources (like CPU and RAM) within a single instance to handle more load. What is this type of scaling called?",
    options: ["Horizontal scaling", "Vertical scaling", "Elastic scaling", "Auto scaling"],
    correct: [1],
    explanation: "Vertical scaling (scaling up/down) means increasing or decreasing the size of a single resource (e.g., moving from t3.medium to t3.xlarge). Horizontal scaling (scaling out/in) adds or removes instances. AWS supports both, but horizontal is preferred for fault tolerance.",
    optionExplanations: [
      "Horizontal scaling (scaling out) adds more instances — it does not increase the size of a single existing instance.",
      "Correct — Vertical scaling (scaling up/down) means increasing or decreasing the CPU/RAM of a single resource, such as moving to a larger EC2 instance type.",
      "Elastic scaling describes the automatic bidirectional scaling capability — it can refer to both horizontal and vertical, not specifically the single-instance size increase.",
      "Auto scaling is the AWS mechanism for implementing horizontal scaling automatically — it adds/removes instances based on demand, not resizes a single instance."
    ]
  },
  {
    id: 246,
    domain: "Cloud Concepts",
    type: "single",
    question: "Adding more EC2 instances behind a load balancer to handle increased traffic is an example of which scaling strategy?",
    options: ["Vertical scaling", "Horizontal scaling", "Scheduled scaling", "Manual scaling"],
    correct: [1],
    explanation: "Horizontal scaling (scaling out) adds more instances to distribute load. Combined with a load balancer, this improves both capacity and fault tolerance. It is the preferred cloud-native approach as it avoids single points of failure.",
    optionExplanations: [
      "Vertical scaling upgrades a single server to a larger size — adding more EC2 instances behind a load balancer is the opposite (adding more instances, not making one bigger).",
      "Correct — Adding more EC2 instances behind a load balancer is horizontal scaling (scaling out), distributing load across multiple instances for greater capacity and fault tolerance.",
      "Scheduled scaling adjusts capacity at predetermined times — adding instances in response to increased traffic is reactive, not schedule-based.",
      "Manual scaling requires a human to make the scaling decision — Auto Scaling behind a load balancer is typically automated based on CloudWatch metrics."
    ]
  },
  {
    id: 247,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following statements about AWS Regions is CORRECT?",
    options: ["All AWS services are available in every Region", "AWS Regions are connected by the public internet only", "Each AWS Region is isolated from other Regions to achieve fault tolerance", "An AWS Region consists of a single data center"],
    correct: [2],
    explanation: "AWS Regions are geographically isolated. A failure in one Region does not automatically affect others. Not all services are available in every Region. Regions are connected via the AWS global network backbone, not just the public internet. Each Region has multiple AZs (data centers).",
    optionExplanations: [
      "Not all AWS services are available in every Region — new services typically launch in select Regions first and expand over time.",
      "AWS Regions are primarily connected via the AWS global network backbone (private fiber), not just the public internet, providing more reliable and faster inter-Region connectivity.",
      "Correct — Each AWS Region is geographically isolated from other Regions to provide fault tolerance; a failure in one Region does not automatically impact other Regions.",
      "An AWS Region does not consist of a single data center — each Region contains multiple physically separate Availability Zones (two or more), each of which may have multiple data centers."
    ]
  },
  {
    id: 248,
    domain: "Cloud Concepts",
    type: "single",
    question: "In a loosely coupled AWS architecture, how do components typically communicate to minimize dependencies?",
    options: ["Components communicate directly through hardcoded IP addresses", "Components are designed to minimize dependencies on each other, often using queues or APIs", "All application components run on a single large server", "Databases are co-located with application servers"],
    correct: [1],
    explanation: "Loose coupling means components interact through well-defined, minimal interfaces (like SQS queues or API Gateway). This limits blast radius — if one component fails or needs to scale, it does not force other components to change or fail.",
    optionExplanations: [
      "Hardcoded IP addresses create tight coupling — if the IP changes, all components that reference it must be updated, creating brittle dependencies.",
      "Correct — Loose coupling means components communicate through queues (SQS) or APIs, minimizing direct dependencies so that one component's failure or scaling does not impact others.",
      "Running all components on a single large server creates tight coupling and a single point of failure — the opposite of a loosely coupled architecture.",
      "Co-locating databases with application servers creates tight coupling — it means the database and application share fate and cannot scale or fail independently."
    ]
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
    explanation: "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) is a fully managed Active Directory hosted on AWS. It integrates with EC2, RDS, and other services that require AD authentication.",
    optionExplanations: [
      "AWS IAM manages user identities and access policies within AWS — it does not provide a managed Microsoft Active Directory service for AD-dependent resources.",
      "Correct — AWS Directory Service provides a fully managed Microsoft Active Directory in the AWS cloud, enabling EC2, RDS, and other services to use AD authentication.",
      "Amazon Cognito provides user authentication for consumer web and mobile applications — it is not a Microsoft Active Directory service for enterprise workloads.",
      "AWS SSO (IAM Identity Center) provides centralized single sign-on access — it can use Directory Service as an identity source but is not itself the managed AD service."
    ]
  },
  {
    id: 250,
    domain: "Security & Compliance",
    type: "single",
    question: "Which IAM entity should be used by an application running on an EC2 instance that needs to access Amazon S3 without embedding credentials in code?",
    options: ["IAM user with access keys stored in the application", "IAM group assigned to the instance", "IAM role assigned to the EC2 instance", "Root account credentials"],
    correct: [2],
    explanation: "IAM roles provide temporary credentials automatically rotated by AWS. Assigning a role to an EC2 instance via an instance profile is the secure, recommended way to grant AWS permissions to applications — no long-term credentials stored in code.",
    optionExplanations: [
      "Storing access keys in the application creates long-term static credentials that can be extracted if the code or instance is compromised — this is the practice IAM roles are designed to replace.",
      "IAM groups are used to organize IAM users and apply common policies — they cannot be assigned to EC2 instances or provide the instance with AWS credentials.",
      "Correct — An IAM role assigned to an EC2 instance via an instance profile provides temporary credentials via the metadata service, with no long-term credentials stored in code.",
      "Using root account credentials on an EC2 instance is an extreme security risk — root has unrestricted access and its credentials should never be stored on instances or in applications."
    ]
  },
  {
    id: 251,
    domain: "Security & Compliance",
    type: "single",
    question: "What is the purpose of an IAM policy?",
    options: ["To define the billing budget for an AWS account", "To specify which actions are allowed or denied on AWS resources", "To create virtual networks in AWS", "To monitor API calls made in an AWS account"],
    correct: [1],
    explanation: "IAM policies are JSON documents that define permissions — which actions (e.g., s3:GetObject) are allowed or denied on which resources, and under what conditions. Policies are attached to users, groups, or roles.",
    optionExplanations: [
      "Billing budgets are managed through AWS Budgets — IAM policies control API access permissions, not financial spending limits.",
      "Correct — IAM policies specify which AWS actions are allowed or denied on which resources, and under what conditions, making them the core permission control in AWS.",
      "Creating virtual networks is done through Amazon VPC — IAM policies control who can call which APIs, not network infrastructure creation.",
      "Monitoring API calls is done by AWS CloudTrail — IAM policies control what actions are allowed, not what is observed or logged."
    ]
  },
  {
    id: 252,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service enables you to centrally manage and enforce policies across multiple AWS accounts in an organization?",
    options: ["AWS IAM", "AWS Control Tower", "AWS Organizations", "AWS Config"],
    correct: [2],
    explanation: "AWS Organizations lets you centrally manage multiple AWS accounts, apply Service Control Policies (SCPs) to restrict permissions across accounts, and automate account creation. It is the foundation for multi-account governance.",
    optionExplanations: [
      "AWS IAM manages identities and access within a single account — it does not provide multi-account governance, account hierarchy, or cross-account policy enforcement.",
      "AWS Control Tower automates the setup of a multi-account landing zone using Organizations under the hood — Organizations is the foundational service that enables the governance.",
      "Correct — AWS Organizations centrally manages multiple accounts, applies SCPs for governance across accounts, and enables automated account creation.",
      "AWS Config evaluates resource configurations against compliance rules — it does not manage account hierarchy or enforce cross-account governance policies."
    ]
  },
  {
    id: 253,
    domain: "Security & Compliance",
    type: "single",
    question: "What is a Service Control Policy (SCP) in AWS Organizations?",
    options: ["A policy that grants permissions to IAM users in a single account", "A policy that sets maximum permission boundaries for accounts in an organization", "A billing policy that caps spending per account", "A network policy that controls VPC traffic"],
    correct: [1],
    explanation: "SCPs define the maximum permissions available to accounts in an organization or organizational unit. They do not grant permissions directly but act as guardrails — even if an IAM policy in a child account allows an action, the SCP can deny it.",
    optionExplanations: [
      "SCPs do NOT grant permissions to IAM users — they only restrict what IAM policies in child accounts can allow. They work at the account level, not the individual user level.",
      "Correct — SCPs set maximum permission boundaries for accounts in an organization — acting as guardrails that cannot be overridden by any IAM policy within the account.",
      "Billing spending caps are implemented through AWS Budgets and Cost Management, not through SCPs — SCPs control API permissions, not financial limits.",
      "VPC traffic is controlled by network controls (Security Groups, NACLs, Route Tables) — SCPs control IAM permission guardrails, not network routing or traffic."
    ]
  },
  {
    id: 254,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service records API calls made in your AWS account, providing a history for governance, compliance, and auditing?",
    options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "Amazon GuardDuty"],
    correct: [1],
    explanation: "AWS CloudTrail records all API calls (who did what, when, from where) to AWS services. These logs can be stored in S3 and analyzed for security audits, compliance requirements, and troubleshooting.",
    optionExplanations: [
      "Amazon CloudWatch monitors performance metrics and logs — it does not record API call history or track who called which AWS service API.",
      "Correct — AWS CloudTrail records all API calls with caller identity, timestamp, source IP, and parameters, stored in S3 for governance, compliance, and auditing.",
      "AWS Config records resource configuration changes — it tracks what resources look like over time, not the identity of who made each API call.",
      "Amazon GuardDuty analyzes logs (including CloudTrail) for threats — it is a threat detector, not the service that records the API call logs."
    ]
  },
  {
    id: 255,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service continuously monitors and records AWS resource configurations, enabling you to evaluate configurations against desired settings?",
    options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "AWS Config records the configuration state of AWS resources over time and evaluates them against compliance rules. It answers 'what did my infrastructure look like at a specific point in time?' and 'is it compliant with my policies?'",
    optionExplanations: [
      "AWS CloudTrail records API call history (who called what API) — it does not maintain resource configuration inventories or evaluate compliance rules.",
      "Amazon CloudWatch monitors performance metrics and application logs — it does not track resource configurations over time or evaluate compliance.",
      "Correct — AWS Config continuously records resource configurations and evaluates them against rules, answering 'what did my infrastructure look like?' and 'is it compliant?'",
      "AWS Trusted Advisor provides best-practice recommendations — it does not record configuration history or evaluate resources against defined compliance rules."
    ]
  },
  {
    id: 256,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service uses machine learning to continuously analyze VPC Flow Logs, CloudTrail events, and DNS logs to detect malicious activity and unauthorized behavior?",
    options: ["AWS Shield", "Amazon Inspector", "Amazon GuardDuty", "AWS WAF"],
    correct: [2],
    explanation: "Amazon GuardDuty is a threat detection service that uses ML and threat intelligence to identify suspicious activity (like crypto mining, data exfiltration, or compromised instances) by analyzing multiple AWS data sources.",
    optionExplanations: [
      "AWS Shield provides DDoS protection at the network and transport layers — it does not analyze logs using ML or detect behavioral threats inside accounts.",
      "Amazon Inspector scans for software vulnerabilities in EC2 and container images — it assesses static vulnerabilities, not behavioral patterns indicating active threats.",
      "Correct — Amazon GuardDuty uses ML and threat intelligence to analyze VPC Flow Logs, CloudTrail events, and DNS logs for behavioral threats like cryptomining and credential compromise.",
      "AWS WAF filters web application traffic based on rules — it protects against application-layer exploits, not account-level behavioral threat detection."
    ]
  },
  {
    id: 257,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service automatically scans EC2 instances and container images for software vulnerabilities and unintended network exposure?",
    options: ["Amazon GuardDuty", "Amazon Inspector", "AWS Shield", "AWS Macie"],
    correct: [1],
    explanation: "Amazon Inspector is an automated vulnerability management service that continually scans EC2 instances and ECR container images for known software vulnerabilities (CVEs) and network reachability issues.",
    optionExplanations: [
      "Amazon GuardDuty analyzes logs for behavioral threats — it detects active attacks and suspicious activity, not software vulnerabilities in installed packages.",
      "Correct — Amazon Inspector automatically scans EC2 instances and ECR container images for software vulnerabilities (CVEs) and unintended network exposure.",
      "AWS Shield provides DDoS protection — it does not scan for software vulnerabilities or network reachability issues in your deployed workloads.",
      "Amazon Macie discovers and classifies sensitive data in S3 — it focuses on data security, not software vulnerability assessments in compute resources."
    ]
  },
  {
    id: 258,
    domain: "Security & Compliance",
    type: "single",
    question: "A security team wants to automatically discover, classify, and protect sensitive data such as PII stored in Amazon S3. Which AWS service should they use?",
    options: ["Amazon GuardDuty", "AWS Config", "Amazon Macie", "AWS Secrets Manager"],
    correct: [2],
    explanation: "Amazon Macie uses ML to automatically discover and classify sensitive data in S3 (like PII, financial data, or credentials). It provides alerts when sensitive data is improperly exposed or accessed.",
    optionExplanations: [
      "Amazon GuardDuty analyzes CloudTrail and network logs for behavioral threats — it does not scan S3 object content to discover and classify PII or sensitive data.",
      "AWS Config evaluates resource configurations against compliance rules — it does not analyze the content of S3 objects for sensitive data.",
      "Correct — Amazon Macie uses ML to discover and classify sensitive data (PII, financial data, credentials) in S3, alerting when data is improperly exposed or accessed.",
      "AWS Secrets Manager stores and rotates application secrets — it does not scan S3 buckets for sensitive data or classify stored content."
    ]
  },
  {
    id: 259,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides DDoS protection automatically for all AWS customers at no extra charge?",
    options: ["AWS WAF", "Amazon GuardDuty", "AWS Shield Standard", "AWS Firewall Manager"],
    correct: [2],
    explanation: "AWS Shield Standard is automatically enabled for all AWS customers at no cost. It provides protection against common, most-frequently-occurring network and transport layer DDoS attacks. AWS Shield Advanced is the paid tier with additional protections and 24/7 DRT support.",
    optionExplanations: [
      "AWS WAF is a web application firewall for Layer 7 traffic filtering — it is not automatically enabled and does not provide Layer 3/4 DDoS protection by default.",
      "Amazon GuardDuty analyzes logs for behavioral threats — it does not provide DDoS mitigation or automatic network layer protection.",
      "Correct — AWS Shield Standard is automatically enabled for all customers at no charge, providing protection against common network and transport layer DDoS attacks.",
      "AWS Firewall Manager centrally manages WAF and Shield policies across accounts — it does not itself provide automatic free DDoS protection."
    ]
  },
  {
    id: 260,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a managed web application firewall that protects against common web exploits like SQL injection and cross-site scripting?",
    options: ["AWS Shield", "Amazon GuardDuty", "AWS WAF", "AWS Network Firewall"],
    correct: [2],
    explanation: "AWS WAF (Web Application Firewall) lets you define rules to allow, block, or count web requests based on conditions like IP address, HTTP headers, query strings, or URI patterns. It protects against OWASP Top 10 threats.",
    optionExplanations: [
      "AWS Shield provides DDoS protection at Layers 3 and 4 — it does not inspect or filter web application request content like SQL injection patterns or XSS.",
      "Amazon GuardDuty analyzes logs for behavioral threats — it detects threats after the fact but does not block web requests in real-time based on request content.",
      "Correct — AWS WAF creates rules to allow, block, or count HTTP/S requests based on IP, headers, URI, or query strings, protecting against SQL injection, XSS, and OWASP Top 10.",
      "AWS Network Firewall provides stateful packet inspection and domain/URL filtering at the VPC level — it is a network layer firewall, not a purpose-built web application firewall for HTTP exploits."
    ]
  },
  {
    id: 261,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service enables centralized management of firewall rules across multiple accounts and resources in AWS Organizations?",
    options: ["AWS WAF", "AWS Shield Advanced", "AWS Firewall Manager", "Amazon Inspector"],
    correct: [2],
    explanation: "AWS Firewall Manager allows security administrators to centrally configure and manage AWS WAF rules, Shield Advanced protections, VPC security groups, and AWS Network Firewall policies across all accounts in an AWS Organization.",
    optionExplanations: [
      "AWS WAF creates web application firewall rules for individual resources — it does not itself provide centralized management across multiple accounts in an organization.",
      "AWS Shield Advanced provides enhanced DDoS protection — it is an individual protection service, not a multi-account management tool for deploying security policies.",
      "Correct — AWS Firewall Manager centrally manages WAF rules, Shield Advanced, Security Groups, and Network Firewall policies across all accounts in AWS Organizations.",
      "Amazon Inspector scans workloads for software vulnerabilities — it does not centrally manage firewall rules or security policies across accounts."
    ]
  },
  {
    id: 262,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a single place to view and manage security alerts and compliance status across multiple AWS accounts?",
    options: ["AWS Config", "Amazon GuardDuty", "AWS Security Hub", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "AWS Security Hub aggregates, organizes, and prioritizes security findings from AWS services (GuardDuty, Inspector, Macie, etc.) and third-party tools. It provides a comprehensive view of security and compliance posture across accounts.",
    optionExplanations: [
      "AWS Config evaluates resource configurations — it generates its own compliance findings but does not aggregate security alerts from GuardDuty, Inspector, and Macie into a single view.",
      "Amazon GuardDuty detects threats through log analysis — it is one of the sources feeding Security Hub, not the central aggregation service itself.",
      "Correct — AWS Security Hub provides a single dashboard aggregating and prioritizing security findings from multiple services (GuardDuty, Inspector, Macie) across multiple accounts.",
      "AWS Trusted Advisor provides best-practice recommendations — it does not aggregate security findings from threat detection services across accounts."
    ]
  },
  {
    id: 263,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service helps you securely store, rotate, and retrieve database credentials, API keys, and other secrets?",
    options: ["AWS KMS", "AWS Systems Manager Parameter Store", "AWS Secrets Manager", "AWS Certificate Manager"],
    correct: [2],
    explanation: "AWS Secrets Manager is purpose-built for secrets lifecycle management: storing, rotating (automatically), and retrieving secrets. It integrates natively with RDS, Redshift, and DocumentDB for automatic password rotation.",
    optionExplanations: [
      "AWS KMS manages cryptographic encryption keys — it encrypts and decrypts data but does not store database credentials or provide automatic rotation of application secrets.",
      "AWS Systems Manager Parameter Store can store configuration data including some secrets — but it does not natively support automatic rotation of database credentials without custom Lambda functions.",
      "Correct — AWS Secrets Manager stores, rotates (automatically for RDS, Redshift, DocumentDB), and retrieves secrets with native database integration.",
      "AWS Certificate Manager provisions and manages SSL/TLS certificates — it does not store database passwords, API keys, or provide secret rotation capabilities."
    ]
  },
  {
    id: 264,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service enables you to create and manage encryption keys used to encrypt your AWS data?",
    options: ["AWS Secrets Manager", "AWS Certificate Manager", "AWS Key Management Service (KMS)", "AWS CloudHSM"],
    correct: [2],
    explanation: "AWS KMS is a managed service for creating and controlling encryption keys. It integrates with most AWS services (S3, EBS, RDS, etc.) for envelope encryption. KMS keys are protected by hardware security modules (HSMs) operated by AWS.",
    optionExplanations: [
      "AWS Secrets Manager stores application secrets like passwords and API keys — it does not manage cryptographic keys for encrypting AWS service data.",
      "AWS Certificate Manager manages SSL/TLS certificates for HTTPS — it does not manage encryption keys for server-side data encryption in S3, EBS, or RDS.",
      "Correct — AWS KMS creates and controls encryption keys for data encryption, integrating with S3, EBS, RDS, and other services via envelope encryption.",
      "AWS CloudHSM provides dedicated single-tenant HSMs for stricter key control requirements — unlike KMS (shared/multi-tenant), CloudHSM gives customers exclusive hardware control."
    ]
  },
  {
    id: 265,
    domain: "Security & Compliance",
    type: "single",
    question: "A company requires dedicated, single-tenant hardware security modules (HSMs) for regulatory compliance. Which AWS service meets this requirement?",
    options: ["AWS KMS", "AWS Secrets Manager", "AWS CloudHSM", "AWS Certificate Manager"],
    correct: [2],
    explanation: "AWS CloudHSM provides dedicated HSM appliances in the AWS cloud. Unlike KMS (multi-tenant), CloudHSM gives the customer exclusive control over the HSM hardware, meeting strict regulatory requirements like FIPS 140-2 Level 3.",
    optionExplanations: [
      "AWS KMS is a shared multi-tenant service where AWS manages the HSM hardware — it does not provide the dedicated, single-tenant hardware security modules required for strict regulatory compliance.",
      "AWS Secrets Manager stores and rotates secrets — it does not provide HSM hardware or FIPS 140-2 Level 3 cryptographic capabilities.",
      "Correct — AWS CloudHSM provides dedicated single-tenant HSM appliances with exclusive customer control, meeting strict regulatory requirements (FIPS 140-2 Level 3).",
      "AWS Certificate Manager manages SSL/TLS certificates — it does not provide dedicated HSM hardware for cryptographic operations."
    ]
  },
  {
    id: 266,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provisions, manages, and deploys SSL/TLS certificates for use with AWS services like CloudFront and Elastic Load Balancing?",
    options: ["AWS KMS", "AWS Secrets Manager", "AWS Certificate Manager (ACM)", "AWS IAM"],
    correct: [2],
    explanation: "AWS Certificate Manager (ACM) handles provisioning, renewal, and deployment of public and private SSL/TLS certificates. Certificates for use with CloudFront and ELB are free and auto-renewed when managed by ACM.",
    optionExplanations: [
      "AWS KMS manages data encryption keys — it does not provision or manage SSL/TLS certificates for HTTPS communication.",
      "AWS Secrets Manager stores application secrets like passwords and API keys — it does not provision or auto-renew SSL/TLS certificates for web services.",
      "Correct — AWS Certificate Manager provisions, manages, and auto-renews SSL/TLS certificates. Public certificates for CloudFront and ELB are provided free of charge.",
      "AWS IAM can import and store certificates for use with some services, but it does not auto-renew or provision new certificates like ACM does."
    ]
  },
  {
    id: 267,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service helps you evaluate whether your AWS account follows AWS security best practices such as enabling MFA on the root account and restricting open S3 buckets?",
    options: ["Amazon Inspector", "AWS Config", "AWS Trusted Advisor", "Amazon GuardDuty"],
    correct: [2],
    explanation: "AWS Trusted Advisor includes a Security category that checks for common security issues like open S3 buckets, unrestricted security group rules, missing MFA on root, and IAM use. It provides actionable recommendations.",
    optionExplanations: [
      "Amazon Inspector scans EC2 instances and containers for software vulnerabilities — it does not check high-level account security settings like MFA status or open S3 buckets.",
      "AWS Config evaluates resource configurations against defined compliance rules — it is more granular than Trusted Advisor's broad best-practice security checks.",
      "Correct — AWS Trusted Advisor's Security category checks for common security issues (open S3 buckets, unrestricted SGs, missing root MFA) and provides recommendations.",
      "Amazon GuardDuty detects active threats through log analysis — it does not perform proactive best-practice checks on account security configurations."
    ]
  },
  {
    id: 268,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service allows you to perform security assessments and penetration testing on your own AWS resources without prior approval for specific services?",
    options: ["Amazon Inspector", "AWS Security Hub", "AWS Penetration Testing — no service needed, just the AWS policy", "AWS Shield"],
    correct: [2],
    explanation: "AWS allows customers to conduct security testing against their own AWS infrastructure for a permitted list of services (EC2, RDS, CloudFront, etc.) without prior approval. Amazon Inspector automates parts of this but is a separate product.",
    optionExplanations: [
      "Amazon Inspector is an automated vulnerability scanning service — it is a separate product from performing penetration testing and is not the permission mechanism for customer security testing.",
      "AWS Security Hub aggregates security findings — it does not authorize or facilitate penetration testing of customer resources.",
      "Correct — AWS's penetration testing policy allows customers to test their own resources for a defined set of services without prior approval, subject to the acceptable use policy.",
      "AWS Shield provides DDoS protection — it is not related to the policies governing customer-conducted penetration testing."
    ]
  },
  {
    id: 269,
    domain: "Security & Compliance",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, who is responsible for encrypting data at rest stored in Amazon S3?",
    options: ["AWS only", "The customer only", "Both AWS and the customer share this responsibility", "Neither — S3 data is always unencrypted"],
    correct: [2],
    explanation: "S3 encrypts all new objects by default (AWS-side responsibility), but customers also control their own encryption: choosing key management (SSE-S3, SSE-KMS, SSE-C), setting bucket policies, and managing their own encryption keys. This is a shared responsibility.",
    optionExplanations: [
      "AWS only is incorrect — while AWS provides default encryption for new objects, customers retain control over key management choices (SSE-KMS vs. SSE-S3 vs. SSE-C) and bucket policies.",
      "The customer only is incorrect — AWS provides and manages the default S3 encryption mechanism (AES-256), contributing their part to encryption.",
      "Correct — Encryption at rest in S3 is shared: AWS encrypts objects by default (can use its own managed keys), while customers control encryption type, key management, and access policies.",
      "S3 data is always unencrypted is false — AWS S3 has applied default encryption (SSE-S3) to all new objects since January 2023."
    ]
  },
  {
    id: 270,
    domain: "Security & Compliance",
    type: "single",
    question: "Which security best practice recommends granting users only the permissions they need to perform their job and nothing more?",
    options: ["Defense in depth", "Least privilege", "Security by obscurity", "Zero trust"],
    correct: [1],
    explanation: "The principle of least privilege means granting the minimum permissions required for a task. In IAM, this means writing granular policies that allow only necessary actions on specific resources, reducing blast radius if credentials are compromised.",
    optionExplanations: [
      "Defense in depth applies multiple security layers — it is a broader security strategy, not specifically about granting users only the minimum required permissions.",
      "Correct — Least privilege means granting only the minimum permissions required for the specific job function, reducing exposure if credentials are compromised.",
      "Security by obscurity relies on hiding information to provide security — it is not a recommended best practice and does not describe minimum-permission granting.",
      "Zero trust verifies every access request regardless of origin — it is a network/access model, not specifically about limiting permission scope to minimum necessary."
    ]
  },
  {
    id: 271,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS feature adds a second layer of security to your AWS account login by requiring a one-time code from a hardware or virtual device?",
    options: ["IAM access keys", "Multi-Factor Authentication (MFA)", "Security groups", "AWS Shield"],
    correct: [1],
    explanation: "MFA requires something you know (password) plus something you have (MFA device). AWS strongly recommends enabling MFA on the root account and all privileged IAM users to protect against password compromise.",
    optionExplanations: [
      "IAM access keys are credentials (access key ID + secret) for programmatic access — they are long-term credentials, not a second layer of security for console login.",
      "Correct — MFA requires a one-time code from a physical or virtual device in addition to the password, providing a second authentication factor.",
      "Security groups are network-level firewalls controlling traffic to instances — they are not an authentication mechanism for AWS account login.",
      "AWS Shield provides DDoS protection — it is not related to account login security or adding a second authentication factor."
    ]
  },
  {
    id: 272,
    domain: "Security & Compliance",
    type: "single",
    question: "A company's security team needs to know every time a specific S3 bucket's permissions change. Which AWS service can automatically trigger an alert when configuration changes occur?",
    options: ["Amazon GuardDuty", "AWS CloudTrail", "AWS Config with Config Rules", "Amazon Macie"],
    correct: [2],
    explanation: "AWS Config records configuration changes and can trigger Config Rules to evaluate compliance. An SNS notification or Lambda function can alert the team whenever a resource configuration (like S3 bucket ACL) changes outside of policy.",
    optionExplanations: [
      "Amazon GuardDuty detects behavioral threats through log analysis — it does not monitor resource configuration changes like S3 bucket permission modifications.",
      "AWS CloudTrail records the API call that changed the S3 permissions — but it does not automatically evaluate configuration compliance or trigger alerts when a setting violates policy.",
      "Correct — AWS Config records configuration changes and can trigger rules and SNS notifications when a resource (like S3 bucket permissions) changes outside of policy.",
      "Amazon Macie discovers sensitive data in S3 content — it does not monitor or alert on permission/configuration changes to S3 buckets."
    ]
  },
  {
    id: 273,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides network-level filtering for traffic entering and leaving a VPC subnet, acting as a stateless firewall?",
    options: ["Security Groups", "AWS WAF", "Network Access Control Lists (NACLs)", "AWS Network Firewall"],
    correct: [2],
    explanation: "Network ACLs are stateless subnet-level firewalls in a VPC. They evaluate both inbound and outbound rules independently for every request. Security groups are stateful instance-level firewalls. Both operate at different layers.",
    optionExplanations: [
      "Security Groups operate at the instance/ENI level, not the subnet level — they are stateful (return traffic is automatically allowed), not stateless like NACLs.",
      "AWS WAF filters HTTP/S application traffic — it is not a subnet-level stateless firewall for general IP traffic in a VPC.",
      "Correct — Network ACLs are stateless firewalls that filter all traffic entering and leaving a VPC subnet — both inbound and outbound rules must explicitly allow traffic.",
      "AWS Network Firewall provides VPC-level stateful packet inspection and intrusion prevention — it is more advanced than NACLs and is not the standard subnet-level stateless firewall."
    ]
  },
  {
    id: 274,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following BEST describes how AWS Security Groups differ from Network ACLs?",
    options: ["Security Groups are stateless; NACLs are stateful", "Security Groups are stateful and operate at the instance level; NACLs are stateless and operate at the subnet level", "Security Groups control S3 access; NACLs control EC2 access", "Both are identical in functionality"],
    correct: [1],
    explanation: "Security Groups are stateful (return traffic is automatically allowed) and are attached to EC2 instances/ENIs. NACLs are stateless (return traffic must be explicitly allowed) and are applied at the subnet level, affecting all resources in that subnet.",
    optionExplanations: [
      "Security Groups are stateful (not stateless) and NACLs are stateless (not stateful) — this answer has the characteristics reversed.",
      "Correct — Security Groups are stateful and operate at the instance/ENI level; NACLs are stateless and operate at the subnet level, affecting all resources in the subnet.",
      "Security Groups control traffic to EC2 instances (and other resources), not specifically S3; NACLs filter all IP traffic at the subnet level, not specifically EC2 — this distinction is incorrect.",
      "Security Groups and NACLs are not identical — they differ in statefulness, level of application (instance vs. subnet), and rule evaluation order."
    ]
  },
  {
    id: 275,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS compliance program demonstrates that AWS meets the rigorous security controls required by U.S. federal government agencies?",
    options: ["PCI DSS", "HIPAA", "FedRAMP", "SOC 2"],
    correct: [2],
    explanation: "FedRAMP (Federal Risk and Authorization Management Program) is the U.S. government-wide program that standardizes security assessment for cloud services used by federal agencies. AWS holds FedRAMP authorizations for many services.",
    optionExplanations: [
      "PCI DSS is the Payment Card Industry Data Security Standard — it applies to organizations handling credit card data, not specifically U.S. federal government security requirements.",
      "HIPAA (Health Insurance Portability and Accountability Act) protects health information in the U.S. healthcare industry — it is not a U.S. federal government cloud security program.",
      "Correct — FedRAMP is the U.S. government program standardizing cloud security for federal agency use, and AWS holds FedRAMP authorizations for many of its services.",
      "SOC 2 is a voluntary auditing standard for service organizations covering security, availability, and confidentiality — it is not a U.S. federal government compliance program."
    ]
  },
  {
    id: 276,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides on-demand access to AWS compliance reports such as SOC reports, PCI attestations, and ISO certifications?",
    options: ["AWS Trusted Advisor", "AWS Artifact", "AWS Security Hub", "AWS Config"],
    correct: [1],
    explanation: "AWS Artifact is a self-service portal for downloading AWS compliance documents and reports including SOC 1/2/3, PCI DSS AOC, ISO certifications, and more. Customers can also accept compliance agreements (like BAA for HIPAA) through Artifact.",
    optionExplanations: [
      "AWS Trusted Advisor provides best-practice recommendations — it does not provide downloadable AWS compliance certifications or SOC/PCI/ISO reports.",
      "Correct — AWS Artifact provides on-demand access to AWS compliance reports (SOC 1/2/3, PCI DSS AOC, ISO certifications) and compliance agreements.",
      "AWS Security Hub aggregates security findings — it does not provide downloadable compliance reports from AWS's own third-party audits.",
      "AWS Config evaluates your own resource compliance — it does not provide AWS's own compliance certifications or third-party audit reports for download."
    ]
  },
  {
    id: 277,
    domain: "Security & Compliance",
    type: "single",
    question: "A healthcare company wants to store patient data on AWS and needs to sign a Business Associate Agreement (BAA) with AWS to comply with HIPAA. Where can they access and accept this agreement?",
    options: ["AWS Support", "AWS Trusted Advisor", "AWS Artifact", "AWS Organizations"],
    correct: [2],
    explanation: "AWS Artifact provides the HIPAA BAA as an agreement customers can review and accept within the portal. Once accepted, eligible AWS services can be used to store and process PHI under HIPAA compliance.",
    optionExplanations: [
      "AWS Support handles technical support tickets — it does not provide legal compliance agreements like BAAs for HIPAA compliance.",
      "AWS Trusted Advisor provides best-practice recommendations — it does not handle legal compliance agreements or documentation signing.",
      "Correct — AWS Artifact provides the HIPAA Business Associate Agreement (BAA) that customers can review and accept online to enable HIPAA-eligible services for PHI.",
      "AWS Organizations manages account governance — it does not provide or manage legal compliance agreements like the HIPAA BAA."
    ]
  },
  {
    id: 278,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service can detect when AWS account root user credentials or IAM user access keys have been published publicly on GitHub?",
    options: ["Amazon GuardDuty", "Amazon Inspector", "AWS Security Hub", "Amazon Macie"],
    correct: [0],
    explanation: "Amazon GuardDuty monitors threat intelligence feeds and detects anomalous behavior including credential exposure. One of its findings specifically identifies when AWS credentials appear in public repositories, triggering an alert.",
    optionExplanations: [
      "Correct — Amazon GuardDuty monitors threat intelligence feeds and generates findings when AWS credentials (root or IAM) are published publicly, such as on GitHub.",
      "Amazon Inspector scans EC2 instances and containers for software vulnerabilities — it does not monitor external threat intelligence or detect publicly exposed credentials.",
      "AWS Security Hub aggregates security findings — it would receive and display the GuardDuty finding but does not itself detect credential exposure on GitHub.",
      "Amazon Macie discovers sensitive data in S3 — it scans S3 object content, not external repositories like GitHub, for credential exposure."
    ]
  },
  {
    id: 279,
    domain: "Security & Compliance",
    type: "single",
    question: "Which IAM feature allows you to set the maximum permissions an IAM entity (user or role) can have, regardless of what permissions their identity-based policies grant?",
    options: ["IAM Groups", "Service Control Policies", "Permissions Boundaries", "Resource-based policies"],
    correct: [2],
    explanation: "Permissions Boundaries set the maximum permissions an IAM principal can be granted. Even if a policy grants broad access, the boundary limits the effective permissions. This is useful for delegating IAM administration safely.",
    optionExplanations: [
      "IAM Groups organize users and apply policies — they do not set a ceiling on what permissions an individual IAM entity can receive regardless of what policies grant them.",
      "Service Control Policies apply at the account level within an organization — they set maximum permissions for accounts, not for individual IAM users or roles within an account.",
      "Correct — Permissions Boundaries set the maximum permissions for an individual IAM user or role — even if attached policies grant more, the boundary caps the effective permissions.",
      "Resource-based policies are attached to resources (S3 buckets, KMS keys) and control access to those specific resources — they do not limit the maximum permissions of an IAM entity."
    ]
  },
  {
    id: 280,
    domain: "Security & Compliance",
    type: "single",
    question: "Which feature of Amazon S3 protects against accidental or malicious deletion of objects by maintaining multiple versions of each object?",
    options: ["S3 Replication", "S3 Lifecycle Policies", "S3 Versioning", "S3 Object Lock"],
    correct: [2],
    explanation: "S3 Versioning keeps every version of an object in a bucket. If an object is deleted or overwritten, previous versions are retained and can be restored. This is a key data protection feature.",
    optionExplanations: [
      "S3 Replication copies objects to another bucket (same or different Region) — it protects against Region failures but does not maintain multiple versions of each object within the same bucket.",
      "S3 Lifecycle Policies automatically transition or expire objects — they manage object lifecycle based on age or storage class, not maintain previous versions for recovery.",
      "Correct — S3 Versioning retains all versions of every object. Deleted or overwritten objects can be recovered by accessing a previous version.",
      "S3 Object Lock prevents deletion or modification during a retention period — it enforces immutability but does not itself maintain multiple versions of the same object."
    ]
  },
  {
    id: 281,
    domain: "Security & Compliance",
    type: "single",
    question: "Which Amazon S3 feature prevents objects from being deleted or overwritten for a fixed period, meeting Write Once Read Many (WORM) compliance requirements?",
    options: ["S3 Versioning", "S3 Object Lock", "S3 Replication", "S3 Intelligent-Tiering"],
    correct: [1],
    explanation: "S3 Object Lock enforces WORM storage. Objects can be locked in Compliance or Governance mode for a specified retention period. This meets SEC 17a-4 and other regulatory requirements for immutable records.",
    optionExplanations: [
      "S3 Versioning maintains multiple versions of objects and allows recovery — but it does not prevent deletion of all versions during the retention period (WORM compliance requires Object Lock).",
      "Correct — S3 Object Lock enforces WORM (Write Once Read Many) storage using Compliance or Governance mode retention periods, meeting regulatory requirements for immutable records.",
      "S3 Replication copies objects to another bucket — it provides geographic redundancy but does not prevent deletion or modification of the objects (no WORM enforcement).",
      "S3 Intelligent-Tiering automatically moves objects between storage tiers based on access patterns — it manages cost optimization, not data immutability."
    ]
  },
  {
    id: 282,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service aggregates and centralizes log data from AWS services, on-premises servers, and third-party tools for security analysis?",
    options: ["AWS CloudTrail", "Amazon CloudWatch Logs", "Amazon OpenSearch Service (formerly Elasticsearch)", "AWS Security Lake"],
    correct: [3],
    explanation: "AWS Security Lake automatically centralizes security data from AWS environments, SaaS providers, and on-premises into a purpose-built data lake in your account using the Open Cybersecurity Schema Framework (OCSF), enabling unified security analytics.",
    optionExplanations: [
      "AWS CloudTrail records API call history — it captures AWS API events but does not aggregate data from SaaS providers, on-premises, and third-party tools into a unified data lake.",
      "Amazon CloudWatch Logs collects and stores log data from AWS services and applications — it is not designed as a security data lake aggregating from multiple external sources.",
      "Amazon OpenSearch Service provides search and analytics — it can analyze security data but does not automatically centralize and normalize security data from multiple sources.",
      "Correct — AWS Security Lake automatically centralizes security data (using OCSF) from AWS, SaaS providers, and on-premises into a purpose-built security data lake in the customer's account."
    ]
  },
  {
    id: 283,
    domain: "Security & Compliance",
    type: "multiple",
    question: "Which of the following security measures are recommended for protecting the AWS root account? (Select TWO)",
    options: ["Enable MFA on the root account", "Use root account credentials for daily administrative tasks", "Create IAM users for daily tasks and lock away root credentials", "Share root credentials with the security team"],
    correct: [0, 2],
    explanation: "AWS best practices: (1) Enable MFA on the root account to require a second factor for login. (2) Create IAM users (or use IAM Identity Center) for daily tasks — the root account should only be used for tasks that specifically require it, then credentials locked away.",
    optionExplanations: [
      "Correct — Enabling MFA on the root account is a critical AWS security best practice, requiring a second factor even if the password is compromised.",
      "Using root account credentials for daily tasks is a major security anti-pattern — root has unrestricted access and should only be used for specific tasks that require it.",
      "Correct — Creating IAM users for daily tasks and locking away root credentials ensures the high-privilege root account is rarely if ever used in normal operations.",
      "Sharing root credentials with the security team creates multiple attack vectors and eliminates individual accountability — root credentials should never be shared."
    ]
  },
  {
    id: 284,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides centralized single sign-on (SSO) access to multiple AWS accounts and business applications?",
    options: ["AWS IAM", "Amazon Cognito", "AWS IAM Identity Center (AWS SSO)", "AWS Directory Service"],
    correct: [2],
    explanation: "AWS IAM Identity Center (formerly AWS SSO) provides centralized SSO to all AWS accounts in an organization and third-party SaaS applications. Users sign in once and access multiple accounts/apps without separate credentials.",
    optionExplanations: [
      "AWS IAM manages identities and permissions within individual accounts — it does not provide centralized SSO across multiple accounts or third-party applications.",
      "Amazon Cognito provides authentication for consumer web and mobile applications — it is not designed for employee SSO access to multiple AWS accounts.",
      "Correct — AWS IAM Identity Center (formerly AWS SSO) provides centralized single sign-on to multiple AWS accounts and business applications from a single portal.",
      "AWS Directory Service provides managed Active Directory — it can serve as an identity source for IAM Identity Center but does not itself provide the SSO portal and access management."
    ]
  },
  {
    id: 285,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service is used to provide identity management for web and mobile application users, including social identity federation (Google, Facebook)?",
    options: ["AWS IAM Identity Center", "AWS Directory Service", "Amazon Cognito", "AWS IAM"],
    correct: [2],
    explanation: "Amazon Cognito provides user pools (user directory for apps) and identity pools (federated identities). It handles sign-up, sign-in, and access control for mobile and web apps, including social login via Google, Facebook, and SAML providers.",
    optionExplanations: [
      "AWS IAM Identity Center provides SSO for employees accessing multiple AWS accounts and business apps — it is not designed for end-user authentication in consumer web/mobile applications.",
      "AWS Directory Service provides managed Microsoft AD — it is for enterprise workforce authentication, not for consumer web/mobile app user management with social login.",
      "Correct — Amazon Cognito provides user pools for app user directories and identity pools for federated identities, supporting social login (Google, Facebook) for web and mobile apps.",
      "AWS IAM manages AWS account permissions — it is for managing AWS access for employees and services, not for consumer-facing application user authentication."
    ]
  },
  {
    id: 286,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to ensure all API calls to AWS services in their account are logged and stored for 90 days for audit purposes. Which service provides this capability?",
    options: ["Amazon CloudWatch", "AWS Config", "AWS CloudTrail", "AWS X-Ray"],
    correct: [2],
    explanation: "AWS CloudTrail logs all API activity. By configuring a Trail, logs are stored in S3 and can be retained for any period. CloudTrail also integrates with CloudWatch Logs for real-time monitoring and CloudWatch Logs Insights for querying.",
    optionExplanations: [
      "Amazon CloudWatch monitors performance metrics and application logs — it does not record API call history or store audit logs of who called which AWS service.",
      "AWS Config records resource configuration changes — it tracks what resources look like, not the full API call history with caller identity for auditing.",
      "Correct — AWS CloudTrail records all API calls and, with a configured Trail, stores them in S3 for any retention period — providing the 90-day audit log needed.",
      "AWS X-Ray traces requests through distributed applications — it provides application performance insights, not AWS API call audit logging for compliance."
    ]
  },
  {
    id: 287,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS network security feature acts as a virtual firewall at the EC2 instance level, controlling inbound and outbound traffic?",
    options: ["Network ACLs", "AWS WAF", "Security Groups", "AWS Network Firewall"],
    correct: [2],
    explanation: "Security Groups are stateful virtual firewalls applied to EC2 instances (via ENIs). They control which traffic is allowed in and out based on port, protocol, and source/destination IP. Return traffic is automatically allowed (stateful).",
    optionExplanations: [
      "Network ACLs operate at the subnet level and are stateless — they filter all traffic for a subnet, not individual instances, and require explicit rules for both directions.",
      "AWS WAF is a web application firewall for HTTP/S traffic at the application layer — it does not operate at the instance level as a virtual network firewall.",
      "Correct — Security Groups are stateful virtual firewalls at the EC2 instance/ENI level, automatically allowing return traffic for permitted connections.",
      "AWS Network Firewall provides VPC-level stateful inspection and intrusion prevention — it protects entire VPCs/subnets, not individual instances, and is a more advanced service than Security Groups."
    ]
  },
  {
    id: 288,
    domain: "Security & Compliance",
    type: "single",
    question: "An attacker is sending a flood of HTTPS requests to an AWS-hosted web application, attempting to overwhelm it. Which AWS service provides protection specifically against application layer (Layer 7) DDoS attacks?",
    options: ["AWS Shield Standard", "AWS Shield Advanced combined with AWS WAF", "Amazon GuardDuty", "Amazon Inspector"],
    correct: [1],
    explanation: "AWS Shield Standard protects against Layer 3/4 attacks. For sophisticated Layer 7 (application layer) DDoS attacks, customers need Shield Advanced combined with AWS WAF to detect and filter malicious HTTP/HTTPS traffic patterns.",
    optionExplanations: [
      "AWS Shield Standard only protects against Layer 3 and 4 DDoS attacks — it does not detect or mitigate application layer (Layer 7) HTTP flood attacks.",
      "Correct — For Layer 7 DDoS attacks, Shield Advanced provides enhanced detection and the DDoS response team, while AWS WAF filters the malicious HTTP/HTTPS traffic patterns.",
      "Amazon GuardDuty detects threats through log analysis — it identifies suspicious patterns after the fact but does not block application layer DDoS traffic in real-time.",
      "Amazon Inspector scans for software vulnerabilities — it has no capability for DDoS detection or mitigation at any layer."
    ]
  },
  {
    id: 289,
    domain: "Security & Compliance",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, which of the following is the customer's responsibility for an Amazon RDS database?",
    options: ["Patching the database engine", "Managing the physical host hardware", "Configuring database security groups and managing database access credentials", "Replacing failed disk drives"],
    correct: [2],
    explanation: "For RDS (managed service), AWS handles patching, hardware, and backups. The customer is responsible for: configuring network access (security groups/NACLs), database user management, data encryption choices, and IAM policies.",
    optionExplanations: [
      "Patching the database engine is AWS's responsibility for RDS — it is a core part of the 'managed service' offering, eliminating this operational burden from the customer.",
      "Managing the physical host hardware is AWS's responsibility — customers never interact with or manage the physical servers running RDS instances.",
      "Correct — Configuring security groups, managing database access credentials, and setting encryption options are the customer's responsibility even with managed RDS.",
      "Replacing failed disk drives is AWS's responsibility — hardware maintenance of the physical storage is part of what AWS handles in the managed service."
    ]
  },
  {
    id: 290,
    domain: "Security & Compliance",
    type: "single",
    question: "Which principle of the AWS Well-Architected Security pillar recommends applying security controls at multiple layers (edge, VPC, subnet, instance, application, data)?",
    options: ["Least privilege", "Defense in depth", "Automate security best practices", "Protect data in transit and at rest"],
    correct: [1],
    explanation: "Defense in depth means layering security controls so that if one layer fails, others still protect the system. In AWS this means combining CloudFront + WAF (edge), VPC + NACLs (network), Security Groups (instance), IAM (access), and KMS (data).",
    optionExplanations: [
      "Least privilege grants only minimum necessary permissions — it is a specific IAM access control principle, not the broader strategy of applying security at multiple architectural layers.",
      "Correct — Defense in depth applies security controls at multiple layers (edge, network, instance, access, data) so that a failure in one layer is compensated by others.",
      "'Automate security best practices' means implementing security through code and automation — it is a delivery mechanism, not the strategy of layering controls at multiple levels.",
      "'Protect data in transit and at rest' is a specific data protection best practice — it addresses one layer (data), not the full multi-layer security control strategy."
    ]
  },
  {
    id: 291,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service is used to detect and respond to AWS account compromises by analyzing behavioral patterns and threat intelligence?",
    options: ["Amazon Inspector", "AWS Config", "Amazon GuardDuty", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "GuardDuty uses ML and curated threat intelligence to identify threats like unusual API calls, unauthorized deployments, crypto mining activity, and compromised IAM credentials by analyzing CloudTrail, VPC Flow Logs, and DNS logs.",
    optionExplanations: [
      "Amazon Inspector scans for known software vulnerabilities (CVEs) — it assesses static vulnerabilities, not behavioral patterns indicating active account compromises.",
      "AWS Config evaluates resource configurations against compliance rules — it does not analyze behavioral patterns in logs to detect account compromises.",
      "Correct — GuardDuty analyzes CloudTrail, VPC Flow Logs, and DNS logs using ML and threat intelligence to detect account compromises, unusual API calls, and cryptomining.",
      "AWS Trusted Advisor provides best-practice recommendations — it does not analyze log data for behavioral threats or account compromise indicators."
    ]
  },
  {
    id: 292,
    domain: "Security & Compliance",
    type: "single",
    question: "A company needs to verify that its AWS environment is compliant with PCI DSS standards. Which AWS service helps by providing automated compliance checks against PCI DSS standards?",
    options: ["AWS Artifact", "AWS Security Hub with PCI DSS standard", "Amazon GuardDuty", "AWS Config"],
    correct: [1],
    explanation: "AWS Security Hub supports built-in compliance standards including PCI DSS, CIS AWS Foundations, and AWS Foundational Security Best Practices. It runs automated checks and scores the account against each standard.",
    optionExplanations: [
      "AWS Artifact provides downloadable AWS compliance reports (PCI DSS AOC, SOC reports) — it provides documentation of AWS's own compliance, not automated checks against standards for customer environments.",
      "Correct — AWS Security Hub provides automated compliance checks against PCI DSS, CIS, and other standards, running continuous checks and producing a compliance score.",
      "Amazon GuardDuty detects behavioral threats — it identifies active security incidents, not compliance adherence against standards like PCI DSS.",
      "AWS Config evaluates resource configurations against specific rules — it can contribute to PCI DSS compliance checks but does not provide the integrated, standards-based compliance scoring that Security Hub provides."
    ]
  },
  {
    id: 293,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service allows customers to run automated security assessments of their EC2 instances to check for exposed ports and software vulnerabilities?",
    options: ["AWS Trusted Advisor", "Amazon Inspector", "Amazon GuardDuty", "AWS Config"],
    correct: [1],
    explanation: "Amazon Inspector automatically scans EC2 instances for open network paths (unintended network exposure) and known CVE vulnerabilities in installed software packages, providing a risk score and remediation guidance.",
    optionExplanations: [
      "AWS Trusted Advisor checks high-level account security configurations — it does not perform detailed vulnerability scanning of individual EC2 instances or containers.",
      "Correct — Amazon Inspector automatically scans EC2 instances for software vulnerabilities (CVEs) and unintended network exposure, providing risk scores and remediation guidance.",
      "Amazon GuardDuty detects active threats through behavioral log analysis — it identifies current attacks, not static software vulnerabilities on instances.",
      "AWS Config evaluates resource configurations against compliance rules — it tracks configuration state but does not scan for software CVEs or network reachability issues."
    ]
  },
  {
    id: 294,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following BEST describes data encryption 'in transit' in the context of AWS?",
    options: ["Encrypting data stored on EBS volumes", "Encrypting data as it moves between services or over the network using protocols like TLS", "Encrypting S3 objects using KMS", "Encrypting database backups"],
    correct: [1],
    explanation: "Encryption in transit protects data moving between clients and servers (or between AWS services) using TLS/SSL. AWS services support TLS endpoints, and VPN/Direct Connect adds additional transport layer security.",
    optionExplanations: [
      "Encrypting data stored on EBS volumes describes encryption at rest — it protects stored data, not data moving across a network.",
      "Correct — Encryption in transit protects data as it moves between services or over the network, using protocols like TLS/SSL (HTTPS, TLS for database connections).",
      "Encrypting S3 objects using KMS describes encryption at rest — the data is stored encrypted, not protected during network transmission.",
      "Encrypting database backups describes encryption at rest — backups are stored data, not data in motion over a network."
    ]
  },
  {
    id: 295,
    domain: "Security & Compliance",
    type: "single",
    question: "Which IAM best practice recommends creating a unique set of credentials for each individual user rather than sharing one account?",
    options: ["Use IAM roles for all access", "Create individual IAM users", "Rotate credentials regularly", "Enable MFA for privileged users"],
    correct: [1],
    explanation: "AWS recommends creating individual IAM users for each person who needs access. Shared credentials make it impossible to attribute actions to specific individuals in audit logs and create security risks when someone leaves.",
    optionExplanations: [
      "Using IAM roles for all access is best for services and applications — but for human users, individual IAM users (or IAM Identity Center) provide the accountability and unique credentials needed.",
      "Correct — Individual IAM users with unique credentials enable individual accountability in CloudTrail logs and allow revoking access for a single person without affecting others.",
      "Rotating credentials regularly is a good security practice — but it does not address the root issue of creating unique identities for each person.",
      "Enabling MFA for privileged users is a security best practice — but it addresses authentication strength, not the uniqueness of credentials per individual."
    ]
  },
  {
    id: 296,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service helps customers understand how AWS meets compliance requirements in shared-responsibility areas, providing detailed technical documentation?",
    options: ["AWS Trusted Advisor", "AWS Artifact", "AWS Audit Manager", "AWS Config"],
    correct: [2],
    explanation: "AWS Audit Manager continuously audits AWS usage to help customers manage risk and maintain compliance with regulations. It maps AWS usage to compliance frameworks and produces evidence reports for auditors.",
    optionExplanations: [
      "AWS Trusted Advisor provides best-practice recommendations — it does not continuously audit compliance or produce evidence reports mapped to regulatory frameworks.",
      "AWS Artifact provides downloadable compliance reports from AWS's own audits — it does not continuously audit the customer's own AWS usage against compliance frameworks.",
      "Correct — AWS Audit Manager continuously maps the customer's AWS usage to compliance frameworks (GDPR, HIPAA, PCI DSS) and produces evidence reports for auditors.",
      "AWS Config evaluates specific resource configurations against rules — it contributes evidence but does not provide the comprehensive framework-mapping and evidence collection that Audit Manager provides."
    ]
  },
  {
    id: 297,
    domain: "Security & Compliance",
    type: "single",
    question: "What does the term 'data sovereignty' mean in the context of AWS?",
    options: ["AWS owns all data stored in the cloud", "Data remains subject to the laws of the country where it is stored, and customers control where their data resides", "AWS automatically backs up all customer data to multiple countries", "Data can only be accessed by AWS employees"],
    correct: [1],
    explanation: "Data sovereignty means data is subject to the laws of the jurisdiction where it is stored. AWS Regions are isolated, and data does not move between Regions without customer action. Customers choose their Region to meet data residency and sovereignty requirements.",
    optionExplanations: [
      "AWS does not own customer data stored in the cloud — the customer always owns their data. AWS is a data processor, not a data owner.",
      "Correct — Data sovereignty means data is subject to the laws of the country where it resides, and customers control which AWS Region their data stays in to meet those requirements.",
      "AWS does not automatically replicate data to multiple countries — data stays within the selected Region unless the customer explicitly configures cross-Region replication.",
      "AWS employees do not have default access to customer data — AWS has strict access controls and only provides limited, logged access for operational purposes with customer consent."
    ]
  },
  {
    id: 298,
    domain: "Security & Compliance",
    type: "single",
    question: "Which security feature of Amazon VPC allows customers to monitor and capture IP traffic at the network interface level for forensic analysis?",
    options: ["AWS CloudTrail", "VPC Flow Logs", "AWS Network Firewall", "Amazon GuardDuty"],
    correct: [1],
    explanation: "VPC Flow Logs capture information about IP traffic (source/destination IP, port, protocol, bytes, action) flowing in and out of VPC network interfaces. They are stored in CloudWatch Logs or S3 and used for security analysis and troubleshooting.",
    optionExplanations: [
      "AWS CloudTrail captures API call activity (who called which AWS API) — it does not capture network-level IP traffic metadata at the VPC interface level.",
      "Correct — VPC Flow Logs capture IP traffic information (source/destination IP, port, protocol, bytes, accept/reject) at the network interface level for security and troubleshooting.",
      "AWS Network Firewall actively inspects and filters traffic — it is a security enforcement service, not a passive logging mechanism for capturing traffic metadata.",
      "Amazon GuardDuty analyzes VPC Flow Logs (among other sources) to detect threats — it consumes the flow log data but does not itself capture or store the network traffic metadata."
    ]
  },
  {
    id: 299,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service lets you define rules that automatically remediate non-compliant AWS resource configurations?",
    options: ["AWS CloudTrail", "Amazon GuardDuty", "AWS Config with remediation actions", "AWS Inspector"],
    correct: [2],
    explanation: "AWS Config Rules evaluate resource configurations for compliance. You can attach remediation actions (often Systems Manager Automation documents) to automatically fix non-compliant resources, such as enabling S3 bucket versioning or encrypting unencrypted EBS volumes.",
    optionExplanations: [
      "AWS CloudTrail records API call history — it does not evaluate configurations for compliance or trigger automated remediation when configurations violate policies.",
      "Amazon GuardDuty detects behavioral threats — it identifies security incidents but does not evaluate resource configurations or trigger configuration remediation.",
      "Correct — AWS Config Rules evaluate configurations and can trigger automated remediation actions (via Systems Manager Automation) to fix non-compliant resources.",
      "AWS Inspector scans for software vulnerabilities — it does not evaluate resource configurations against compliance rules or trigger configuration remediation."
    ]
  },
  {
    id: 300,
    domain: "Security & Compliance",
    type: "multiple",
    question: "Which of the following are examples of the customer's responsibilities under the AWS Shared Responsibility Model? (Select TWO)",
    options: ["Managing IAM user permissions and access keys", "Maintaining the physical security of AWS data centers", "Configuring encryption of data at rest in Amazon RDS", "Patching the hypervisor on EC2 hosts"],
    correct: [0, 2],
    explanation: "Customers are responsible for: IAM user management (permissions, access key rotation, MFA) and data encryption choices (enabling RDS encryption, managing KMS keys). AWS manages physical data center security and the hypervisor.",
    optionExplanations: [
      "Correct — Managing IAM user permissions and access keys is always the customer's responsibility — AWS provides IAM but never manages user permissions or rotates customer access keys.",
      "Maintaining physical security of data centers is AWS's responsibility — customers have no physical access to or responsibility for AWS data center facilities.",
      "Correct — Configuring encryption of data at rest in RDS (choosing encryption settings, managing KMS keys) is the customer's responsibility even for managed services.",
      "Patching the hypervisor on EC2 hosts is AWS's responsibility — the hypervisor is part of the infrastructure layer AWS fully manages."
    ]
  },
  {
    id: 301,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a fully managed distributed denial-of-service (DDoS) response team and proactive engagement for critical workloads?",
    options: ["AWS Shield Standard", "AWS WAF", "AWS Shield Advanced", "Amazon GuardDuty"],
    correct: [2],
    explanation: "AWS Shield Advanced includes 24/7 access to the AWS DDoS Response Team (DRT), proactive event notifications, attack diagnostics, and cost protection against scaling charges during a DDoS event. It is a paid service ($3,000/month + data transfer fees).",
    optionExplanations: [
      "AWS Shield Standard provides automatic free DDoS protection at Layers 3/4 — it does NOT include access to the DRT, proactive engagement, or cost protection.",
      "AWS WAF filters web application traffic — it blocks malicious requests but does not provide a dedicated DDoS response team or financial cost protection during attacks.",
      "Correct — AWS Shield Advanced includes 24/7 DRT access, proactive engagement, attack diagnostics, and cost protection against DDoS-related scaling charges.",
      "Amazon GuardDuty detects threats through log analysis — it does not provide DDoS mitigation, response team access, or cost protection against DDoS-related charges."
    ]
  },
  {
    id: 302,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following describes the concept of 'security as code' in AWS?",
    options: ["Manually reviewing security controls every quarter", "Defining and deploying security controls through infrastructure-as-code templates like CloudFormation", "Hiring developers to write security software", "Using AWS Shield to protect all applications"],
    correct: [1],
    explanation: "Security as code means defining security controls (IAM policies, security groups, encryption settings, etc.) in code (CloudFormation, CDK, Terraform). This enables version control, automated testing, and consistent deployment of security across environments.",
    optionExplanations: [
      "Manually reviewing security controls every quarter is the traditional approach — it is inconsistent, error-prone, and the opposite of the automated, code-driven security model.",
      "Correct — Security as code means defining security controls (IAM policies, security groups, encryption) in CloudFormation, CDK, or Terraform — enabling version control, testing, and consistent deployment.",
      "Hiring developers to write security software is a general statement about security development — it is not the specific AWS concept of defining security controls through IaC templates.",
      "Using AWS Shield to protect applications addresses DDoS protection — it is not the concept of encoding security controls as reusable, version-controlled infrastructure code."
    ]
  },
  {
    id: 303,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides a way to grant temporary access to AWS resources to users authenticated through an external identity provider (e.g., corporate LDAP)?",
    options: ["AWS IAM Access Analyzer", "AWS Security Token Service (STS)", "Amazon Cognito", "AWS Directory Service"],
    correct: [1],
    explanation: "AWS Security Token Service (STS) issues temporary, limited-privilege credentials for IAM roles. It is used for identity federation (SAML, OIDC), cross-account access, and granting temporary permissions. Credentials automatically expire.",
    optionExplanations: [
      "AWS IAM Access Analyzer identifies externally shared resources and generates least-privilege policies — it does not issue temporary credentials for federated identity access.",
      "Correct — AWS STS issues temporary credentials for IAM role assumption, enabling identity federation with external LDAP/SAML/OIDC providers and cross-account access.",
      "Amazon Cognito provides user authentication for web/mobile apps — while it uses STS under the hood for temporary credentials, STS is the service that directly issues the temporary credentials.",
      "AWS Directory Service provides managed Active Directory — it handles authentication for AD-integrated resources but does not directly issue temporary AWS credentials for federated users."
    ]
  },
  {
    id: 304,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service analyzes IAM policies to identify resources that are accessible from outside your AWS account?",
    options: ["AWS Config", "Amazon GuardDuty", "AWS IAM Access Analyzer", "Amazon Inspector"],
    correct: [2],
    explanation: "AWS IAM Access Analyzer identifies unintended resource access by analyzing resource-based policies (S3, KMS, Lambda, SQS, etc.) and flagging any policies that allow access from outside your account or organization.",
    optionExplanations: [
      "AWS Config evaluates resource configurations against compliance rules — it does not specifically analyze IAM resource-based policies for external access.",
      "Amazon GuardDuty detects threats through log analysis — it can detect if external entities are actively accessing resources, but does not proactively analyze policies for unintended access grants.",
      "Correct — AWS IAM Access Analyzer analyzes resource-based policies to identify any that grant access from outside the account or organization, flagging unintended external access.",
      "Amazon Inspector scans for software vulnerabilities in EC2 and containers — it does not analyze IAM policies for external access permissions."
    ]
  },
  {
    id: 305,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following is a security benefit of using AWS managed services like RDS or DynamoDB instead of self-managing databases on EC2?",
    options: ["Customers have more control over database software versions", "AWS handles database engine patching and reduces the customer's attack surface", "Customers avoid all encryption requirements", "AWS provides free DDoS protection for managed databases"],
    correct: [1],
    explanation: "Managed services reduce the customer's security burden. AWS handles patching, which eliminates unpatched vulnerability windows. Customers focus on access control, data classification, and application security rather than OS and engine maintenance.",
    optionExplanations: [
      "Customers actually have less control over database software versions with managed services — AWS controls patching and version upgrades, which is why it reduces the customer's attack surface.",
      "Correct — AWS handling database engine patching eliminates the customer's risk of running unpatched software with known vulnerabilities, reducing the attack surface.",
      "Customers do not avoid all encryption requirements with managed services — they still need to configure encryption at rest (KMS) and in transit (TLS) for their data.",
      "AWS does not provide free DDoS protection specifically for managed databases — Shield Standard provides general DDoS protection, not database-specific coverage."
    ]
  },
  {
    id: 306,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides pre-built security best practice checks organized into frameworks to help maintain continuous compliance?",
    options: ["Amazon GuardDuty", "AWS Audit Manager", "AWS Security Hub", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "AWS Security Hub provides automated security checks mapped to compliance standards (CIS, PCI DSS, NIST). It aggregates findings from GuardDuty, Inspector, Macie, and others into a prioritized security score dashboard.",
    optionExplanations: [
      "Amazon GuardDuty detects behavioral threats — it provides input findings to Security Hub but does not run compliance framework checks or provide an overall security score.",
      "AWS Audit Manager continuously maps usage to compliance frameworks and produces evidence reports — but Security Hub is the service providing pre-built automated security checks against compliance standards.",
      "Correct — AWS Security Hub provides automated security best practice checks mapped to CIS, PCI DSS, NIST, and other standards, with a prioritized security score dashboard.",
      "AWS Trusted Advisor provides best-practice recommendations — it does not run compliance framework checks or aggregate findings into a unified security score."
    ]
  },
  {
    id: 307,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to prevent any account in its AWS Organization from disabling CloudTrail logging. Which is the MOST effective control?",
    options: ["Send email alerts when CloudTrail is disabled", "Apply an SCP that denies cloudtrail:DeleteTrail and cloudtrail:StopLogging", "Use IAM policies in each account to deny these actions", "Enable AWS Config to detect changes"],
    correct: [1],
    explanation: "SCPs applied at the organizational unit or root level cannot be overridden by any IAM policy within member accounts, including by account administrators. An SCP denying cloudtrail:StopLogging and cloudtrail:DeleteTrail enforces logging organization-wide.",
    optionExplanations: [
      "Sending email alerts when CloudTrail is disabled means logging has already stopped — it is a reactive detection, not a prevention control that stops the action from occurring.",
      "Correct — An SCP at the organizational root denies cloudtrail:StopLogging and cloudtrail:DeleteTrail across all accounts and cannot be overridden even by account administrators.",
      "IAM policies in each account can be overridden by account administrators — they are not a reliable preventive control because account admins can modify or remove them.",
      "AWS Config detects non-compliant configurations after the fact — there is a window where CloudTrail is already disabled before remediation can occur."
    ]
  },
  {
    id: 308,
    domain: "Security & Compliance",
    type: "single",
    question: "Which feature of AWS Key Management Service (KMS) allows you to create a trail of who used which key to decrypt which data and when?",
    options: ["Key rotation", "Key policy", "AWS CloudTrail integration with KMS", "KMS key aliases"],
    correct: [2],
    explanation: "Every KMS API call (Encrypt, Decrypt, GenerateDataKey, etc.) is logged in AWS CloudTrail. This provides a full audit trail of cryptographic operations: who used which key, on which resource, at what time — essential for compliance and forensics.",
    optionExplanations: [
      "Key rotation automatically creates new key material for a KMS key on a schedule — it manages key age, not the logging of who used the key to decrypt data.",
      "Key policy defines who can administer and use a KMS key — it controls access permissions but does not provide a trail of when and by whom the key was used.",
      "Correct — AWS CloudTrail integration with KMS logs every cryptographic operation (Encrypt, Decrypt, GenerateDataKey), providing a full audit trail of key usage.",
      "KMS key aliases provide human-readable names for keys — they are a management convenience, not a mechanism for tracking key usage history."
    ]
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
    explanation: "EC2 Spot Instances use spare AWS capacity at discounts up to 90% off On-Demand. AWS can reclaim them with a 2-minute warning when capacity is needed elsewhere. They are ideal for fault-tolerant, stateless, or batch workloads.",
    optionExplanations: [
      "On-Demand Instances are billed by the second with no commitment — they carry the highest per-unit cost and provide no discount compared to Spot Instances.",
      "Reserved Instances offer discounts for 1- or 3-year commitments — they provide significant savings but cannot be reclaimed by AWS and require a commitment.",
      "Correct — Spot Instances use spare EC2 capacity at up to 90% discount. AWS can interrupt them with a 2-minute warning when capacity is needed.",
      "Dedicated Hosts are the most expensive EC2 option, providing physical server dedication — they are not a cost optimization strategy."
    ]
  },
  {
    id: 310,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which EC2 purchasing option requires a 1- or 3-year commitment and provides a significant discount compared to On-Demand pricing for predictable workloads?",
    options: ["Spot Instances", "On-Demand Instances", "Reserved Instances", "Savings Plans"],
    correct: [2],
    explanation: "Reserved Instances offer discounts up to 72% for committing to a specific instance type in a Region for 1 or 3 years. They are ideal for steady-state workloads. Standard RIs offer the deepest discounts; Convertible RIs allow changing instance attributes.",
    optionExplanations: [
      "Spot Instances provide the largest per-unit discount but can be interrupted — they are not suitable for predictable, steady-state workloads requiring guaranteed availability.",
      "On-Demand Instances are billed by the second with no commitment — they carry the highest per-unit cost and provide no discount for predictable workloads.",
      "Correct — Reserved Instances provide up to 72% discount for 1- or 3-year commitments to a specific instance type, ideal for steady-state predictable workloads.",
      "Savings Plans provide flexible discounts applicable to multiple instance families — while similarly priced, they are different from the instance-specific RI commitment model."
    ]
  },
  {
    id: 311,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS compute pricing model provides flexibility to commit to a consistent amount of compute usage ($/hour) for 1 or 3 years, applicable to EC2, Lambda, and Fargate?",
    options: ["Reserved Instances", "Spot Instances", "Savings Plans", "Dedicated Hosts"],
    correct: [2],
    explanation: "AWS Savings Plans offer flexible discounts (up to 66%) by committing to a consistent usage amount in $/hour for 1 or 3 years. Unlike RIs, Savings Plans automatically apply to EC2 (any instance family/region), Lambda, and Fargate.",
    optionExplanations: [
      "Reserved Instances are tied to a specific instance family and Region — they lack the cross-family, cross-Region, and cross-service flexibility that Savings Plans provide.",
      "Spot Instances provide discounts but can be interrupted — they are not a commitment-based model applicable to Lambda and Fargate.",
      "Correct — Savings Plans commit to a $/hour usage amount for 1-3 years, automatically applying discounts to EC2 (any family/region), Lambda, and Fargate.",
      "Dedicated Hosts are physical server allocations for licensing compliance — they are not a flexible $/hour commitment model."
    ]
  },
  {
    id: 312,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which EC2 option provides a dedicated physical server with per-socket/core licensing visibility, useful for server-bound software licenses?",
    options: ["Dedicated Instances", "Spot Instances", "Reserved Instances", "Dedicated Hosts"],
    correct: [3],
    explanation: "Dedicated Hosts provide entire physical servers dedicated to your use. They give visibility into sockets, cores, and host IDs — required for server-bound licenses (Windows Server, SQL Server per-socket). Dedicated Instances run on dedicated hardware but don't give host-level visibility.",
    optionExplanations: [
      "Dedicated Instances run on hardware dedicated to a single customer — but they do not expose socket/core/host-level details needed for per-socket or per-core BYOL licenses.",
      "Spot Instances use spare capacity and can be interrupted — they are not suitable for BYOL licensing requirements that require dedicated, persistent physical hardware.",
      "Reserved Instances provide pricing discounts on shared or dedicated tenancy — they do not provide the host-level visibility required for server-bound software licenses.",
      "Correct — Dedicated Hosts provide an entire physical server with full visibility into sockets, cores, and host IDs, enabling BYOL for licenses bound to physical hardware characteristics."
    ]
  },
  {
    id: 313,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed, serverless container orchestration service that removes the need to manage the underlying infrastructure for Kubernetes clusters?",
    options: ["Amazon ECS", "Amazon EKS with EC2 launch type", "Amazon EKS with Fargate", "AWS App Runner"],
    correct: [2],
    explanation: "Amazon EKS with AWS Fargate is a serverless Kubernetes experience. AWS manages the control plane and the underlying nodes — customers only define and run pods. There are no EC2 instances to provision, patch, or scale.",
    optionExplanations: [
      "Amazon ECS is AWS's proprietary container orchestration service — it does not provide Kubernetes APIs or a managed Kubernetes control plane.",
      "Amazon EKS with EC2 launch type requires customers to provision and manage EC2 worker nodes — it provides managed Kubernetes but not a fully serverless experience.",
      "Correct — Amazon EKS with Fargate is serverless Kubernetes: AWS manages both the control plane and the underlying node infrastructure. Customers only define pods.",
      "AWS App Runner deploys containerized apps but is not a Kubernetes service — it is a simpler higher-level abstraction, not a managed Kubernetes orchestration platform."
    ]
  },
  {
    id: 314,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service runs Docker containers without requiring you to manage the underlying EC2 infrastructure?",
    options: ["Amazon EC2 with Docker installed", "AWS Lambda", "AWS Fargate", "AWS Elastic Beanstalk"],
    correct: [2],
    explanation: "AWS Fargate is a serverless compute engine for containers. It works with ECS and EKS, removing the need to provision, configure, or scale EC2 instances. You define the container and Fargate handles the rest.",
    optionExplanations: [
      "Amazon EC2 with Docker installed requires managing the underlying EC2 server — patching, capacity planning, and infrastructure management are all the customer's responsibility.",
      "AWS Lambda runs individual code functions in response to events — it is not designed for running Docker containers with their specific resource configurations.",
      "Correct — AWS Fargate is a serverless container engine: you define the container (image, CPU, memory) and Fargate manages all underlying EC2 infrastructure.",
      "AWS Elastic Beanstalk deploys web applications on managed EC2 instances — it is a PaaS for applications, not a serverless container engine for Docker workloads."
    ]
  },
  {
    id: 315,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is used to run code in response to events (like an S3 upload or an API call) without provisioning or managing any servers?",
    options: ["Amazon EC2", "AWS Fargate", "AWS Lambda", "AWS Elastic Beanstalk"],
    correct: [2],
    explanation: "AWS Lambda is a serverless compute service that executes code in response to triggers (S3 events, DynamoDB streams, API Gateway, etc.). You only pay for execution time (per millisecond) and AWS handles all infrastructure.",
    optionExplanations: [
      "Amazon EC2 requires provisioning and managing virtual machine instances — developers must handle OS patching, capacity planning, and server management.",
      "AWS Fargate is for running containerized applications — it is a container runtime, not an event-triggered function execution service.",
      "Correct — AWS Lambda executes code in response to events (S3 uploads, API calls, etc.) without any server provisioning, paying only for execution time.",
      "AWS Elastic Beanstalk deploys and manages web application infrastructure — it still provisions EC2 instances and is not an event-driven serverless function service."
    ]
  },
  {
    id: 316,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows you to quickly deploy and manage web applications without worrying about the underlying infrastructure (EC2, load balancers, Auto Scaling)?",
    options: ["AWS CloudFormation", "AWS Lambda", "AWS Elastic Beanstalk", "Amazon Lightsail"],
    correct: [2],
    explanation: "AWS Elastic Beanstalk is a PaaS that automatically handles deployment details: capacity provisioning, load balancing, auto-scaling, and health monitoring. Developers simply upload their application code.",
    optionExplanations: [
      "AWS CloudFormation is an IaC service for provisioning infrastructure — it requires writing templates and does not automatically deploy and manage web application environments.",
      "AWS Lambda runs serverless functions — it is event-driven and not designed for deploying persistent web applications with load balancing and auto-scaling groups.",
      "Correct — AWS Elastic Beanstalk is a PaaS that handles infrastructure management (capacity provisioning, load balancing, auto-scaling) so developers focus on uploading code.",
      "Amazon Lightsail provides simplified VPS at fixed monthly pricing — it does not automatically provision load balancers and Auto Scaling for web applications."
    ]
  },
  {
    id: 317,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon S3 storage class is designed for data that is accessed less than once a month and can tolerate some retrieval latency, offering lower storage costs?",
    options: ["S3 Standard", "S3 Standard-IA", "S3 Glacier Instant Retrieval", "S3 Glacier Flexible Retrieval"],
    correct: [3],
    explanation: "S3 Glacier Flexible Retrieval (formerly S3 Glacier) is for archival data accessed rarely. Retrieval times range from minutes to hours depending on retrieval tier (Expedited, Standard, Bulk). It is much cheaper for storage but has retrieval fees and latency.",
    optionExplanations: [
      "S3 Standard is optimized for frequently accessed data — it has higher per-GB storage costs and is not appropriate for rarely accessed archival data.",
      "S3 Standard-IA is for infrequently accessed data that needs immediate retrieval — it still has higher costs than Glacier and is not designed for data tolerable to wait hours.",
      "S3 Glacier Instant Retrieval provides immediate access to archived data — for data accessed once a month with tolerance for some retrieval delay, Flexible Retrieval offers lower storage costs.",
      "Correct — S3 Glacier Flexible Retrieval is designed for rarely accessed archived data with configurable retrieval times (minutes to hours) at the lowest storage cost tier."
    ]
  },
  {
    id: 318,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon S3 storage class automatically moves objects between access tiers based on changing access patterns to optimize costs?",
    options: ["S3 Standard", "S3 Standard-IA", "S3 Intelligent-Tiering", "S3 Glacier"],
    correct: [2],
    explanation: "S3 Intelligent-Tiering automatically moves objects between Frequent Access, Infrequent Access, Archive Instant Access, and Deep Archive tiers based on access patterns, with no performance impact and no retrieval fees — ideal for unpredictable access patterns.",
    optionExplanations: [
      "S3 Standard is a fixed tier for frequently accessed data — it does not automatically adjust storage class based on access patterns.",
      "S3 Standard-IA is a fixed tier for infrequently accessed data — it requires manual placement; it does not automatically tier objects based on their access history.",
      "Correct — S3 Intelligent-Tiering automatically monitors access patterns and moves objects between tiers to optimize cost, with no retrieval fees and no performance impact.",
      "S3 Glacier is for rarely accessed archive data — it requires manual placement into the tier; it does not automatically move objects based on access patterns."
    ]
  },
  {
    id: 319,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS storage service is a fully managed Network File System (NFS) that can be mounted by multiple EC2 instances simultaneously across multiple Availability Zones?",
    options: ["Amazon EBS", "Amazon S3", "Amazon EFS", "AWS Storage Gateway"],
    correct: [2],
    explanation: "Amazon EFS (Elastic File System) provides a shared POSIX-compatible NFS file system that scales automatically. Multiple EC2 instances in multiple AZs can mount the same EFS file system simultaneously — unlike EBS which attaches to one instance.",
    optionExplanations: [
      "Amazon EBS provides block storage attached to a single EC2 instance — it cannot be simultaneously mounted by multiple instances across multiple AZs.",
      "Amazon S3 is object storage accessed via API — it does not provide a mountable file system that multiple EC2 instances can use simultaneously.",
      "Correct — Amazon EFS provides a shared NFS file system that automatically scales and can be simultaneously mounted by multiple EC2 instances across multiple AZs.",
      "AWS Storage Gateway bridges on-premises storage to AWS cloud storage — it does not provide a native cloud file system mountable by EC2 instances."
    ]
  },
  {
    id: 320,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS storage service provides block-level storage volumes that can be attached to a single EC2 instance?",
    options: ["Amazon S3", "Amazon EFS", "Amazon EBS", "Amazon FSx"],
    correct: [2],
    explanation: "Amazon EBS (Elastic Block Store) provides persistent block storage for EC2 instances, similar to a hard drive. EBS volumes attach to one EC2 instance at a time (except Multi-Attach io1/io2) and persist independently from instance lifecycle.",
    optionExplanations: [
      "Amazon S3 is object storage accessed via API — it does not provide block-level storage volumes that can be attached to EC2 instances.",
      "Amazon EFS is a shared NFS file system for multiple EC2 instances — it is file-level storage (NFS), not block-level storage volumes attached to individual instances.",
      "Correct — Amazon EBS provides persistent block storage volumes that attach to a single EC2 instance at a time, functioning like a hard drive.",
      "Amazon FSx provides managed file systems (Lustre, Windows File Server, NetApp ONTAP) — it is a file system service, not raw block storage volumes for EC2."
    ]
  },
  {
    id: 321,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS database service is a fully managed, serverless, globally distributed NoSQL database that provides single-digit millisecond latency at any scale?",
    options: ["Amazon RDS", "Amazon Aurora", "Amazon DynamoDB", "Amazon ElastiCache"],
    correct: [2],
    explanation: "Amazon DynamoDB is a fully managed NoSQL key-value and document database with automatic scaling, built-in replication, and single-digit millisecond response times at any scale. No servers to manage.",
    optionExplanations: [
      "Amazon RDS is a managed relational SQL database — it is not a NoSQL database and does not provide the automatic scaling to any scale with single-digit millisecond latency that DynamoDB offers.",
      "Amazon Aurora is a MySQL/PostgreSQL-compatible relational database — it uses SQL and is not a NoSQL key-value/document database.",
      "Correct — Amazon DynamoDB is a fully managed, serverless NoSQL database with single-digit millisecond performance at any scale, no servers to manage.",
      "Amazon ElastiCache is an in-memory caching service — it reduces read latency for existing databases but is not itself a primary NoSQL database service."
    ]
  },
  {
    id: 322,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS database service is a MySQL and PostgreSQL-compatible relational database that is up to 5x faster than standard MySQL and 3x faster than standard PostgreSQL?",
    options: ["Amazon RDS for MySQL", "Amazon Aurora", "Amazon DynamoDB", "Amazon Redshift"],
    correct: [1],
    explanation: "Amazon Aurora is an AWS-built, cloud-native relational database compatible with MySQL and PostgreSQL. It uses a distributed storage architecture that provides higher performance, availability (up to 15 read replicas, multi-AZ), and automatic storage scaling.",
    optionExplanations: [
      "Amazon RDS for MySQL uses standard MySQL on managed infrastructure — it does not achieve the 5x MySQL performance improvement of Aurora's distributed storage architecture.",
      "Correct — Amazon Aurora is MySQL and PostgreSQL-compatible with up to 5x MySQL and 3x PostgreSQL performance, built on a distributed cloud-native storage architecture.",
      "Amazon DynamoDB is a NoSQL key-value/document database — it is not a MySQL or PostgreSQL-compatible relational database.",
      "Amazon Redshift is a data warehouse for OLAP analytics — it is not a general-purpose relational database compatible with MySQL or PostgreSQL."
    ]
  },
  {
    id: 323,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed in-memory caching layer compatible with Redis and Memcached, used to reduce database load?",
    options: ["Amazon DynamoDB Accelerator (DAX)", "Amazon RDS Read Replicas", "Amazon ElastiCache", "Amazon MemoryDB"],
    correct: [2],
    explanation: "Amazon ElastiCache is a fully managed in-memory caching service supporting Redis and Memcached. Placing a cache layer in front of a relational database reduces read latency from milliseconds to microseconds and decreases database load.",
    optionExplanations: [
      "Amazon DynamoDB Accelerator (DAX) is an in-memory cache specifically for DynamoDB — it does not support Redis/Memcached or cache data from other databases like RDS.",
      "Amazon RDS Read Replicas distribute read traffic to replica databases — they reduce primary database load but still have disk-based latency, not in-memory microsecond responses.",
      "Correct — Amazon ElastiCache provides managed Redis and Memcached in-memory caching, reducing read latency from milliseconds to microseconds and lowering database load.",
      "Amazon MemoryDB for Redis is a durable, in-memory Redis-compatible database — while related, ElastiCache is the primary in-memory caching service for reducing database load."
    ]
  },
  {
    id: 324,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a petabyte-scale cloud data warehouse designed for running complex analytical SQL queries on large datasets?",
    options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon Aurora"],
    correct: [2],
    explanation: "Amazon Redshift is a fully managed, petabyte-scale column-oriented data warehouse. It uses massively parallel processing (MPP) and is optimized for OLAP (analytical) workloads rather than OLTP (transactional). Integrates with S3 via Redshift Spectrum.",
    optionExplanations: [
      "Amazon RDS is a managed transactional relational database (OLTP) — it is not optimized for complex analytical queries across petabytes of data.",
      "Amazon DynamoDB is a NoSQL database for high-throughput applications — it is not a column-oriented data warehouse for SQL analytical queries.",
      "Correct — Amazon Redshift is a petabyte-scale data warehouse using MPP, optimized for OLAP analytical SQL queries on large datasets.",
      "Amazon Aurora is a high-performance transactional relational database — it is not a data warehouse optimized for petabyte-scale analytical queries."
    ]
  },
  {
    id: 325,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides content delivery by caching copies of content at edge locations worldwide to reduce latency for end users?",
    options: ["AWS Global Accelerator", "Amazon Route 53", "Amazon CloudFront", "AWS Direct Connect"],
    correct: [2],
    explanation: "Amazon CloudFront is AWS's Content Delivery Network (CDN). It caches static and dynamic content at hundreds of edge locations worldwide, serving users from the nearest location and reducing origin server load and latency.",
    optionExplanations: [
      "AWS Global Accelerator routes traffic over the AWS global network backbone — it improves TCP/UDP performance using anycast IPs but does not cache content at edge locations.",
      "Amazon Route 53 is a DNS service for domain name resolution — it routes traffic to endpoints but does not cache content at edge locations.",
      "Correct — Amazon CloudFront is the CDN service that caches content at hundreds of edge locations worldwide, serving users from the nearest location to reduce latency.",
      "AWS Direct Connect provides a dedicated private link between on-premises and AWS — it is a connectivity service, not a content caching CDN."
    ]
  },
  {
    id: 326,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service improves the availability and performance of global applications by routing traffic through the AWS global network backbone instead of the public internet?",
    options: ["Amazon CloudFront", "Amazon Route 53", "AWS Global Accelerator", "AWS Direct Connect"],
    correct: [2],
    explanation: "AWS Global Accelerator provides two static Anycast IP addresses that route traffic to the nearest AWS edge location, then through the AWS global network to your application endpoints. This reduces internet hops and provides consistent performance.",
    optionExplanations: [
      "Amazon CloudFront caches content at edge locations — it is a CDN for content delivery, not a TCP/UDP layer performance accelerator using anycast static IPs.",
      "Amazon Route 53 provides DNS routing — it resolves domain names but relies on DNS propagation rather than static anycast IPs and the AWS global network.",
      "Correct — AWS Global Accelerator provides static anycast IPs that route traffic through the AWS global network to the nearest healthy endpoint, improving performance and availability.",
      "AWS Direct Connect provides a dedicated private link from on-premises — it improves on-premises connectivity to AWS, not global internet user performance."
    ]
  },
  {
    id: 327,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a scalable and highly available DNS (Domain Name System) web service that also provides domain registration and health checking?",
    options: ["Amazon CloudFront", "AWS Global Accelerator", "Amazon Route 53", "AWS Direct Connect"],
    correct: [2],
    explanation: "Amazon Route 53 is AWS's DNS service. It provides domain registration, DNS routing, and health checking. Routing policies include Simple, Weighted, Latency-based, Geolocation, Geoproximity, Failover, and Multivalue Answer.",
    optionExplanations: [
      "Amazon CloudFront is a CDN for content caching — it does not provide DNS routing, domain registration, or health checking.",
      "AWS Global Accelerator provides static anycast IPs for application traffic routing — it does not provide DNS services or domain registration.",
      "Correct — Amazon Route 53 is the scalable DNS service providing domain registration, DNS routing with multiple policies, and health checking.",
      "AWS Direct Connect provides a dedicated private network connection — it is a connectivity service, not a DNS service."
    ]
  },
  {
    id: 328,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a dedicated, private network connection from on-premises to AWS, bypassing the public internet?",
    options: ["AWS VPN", "Amazon VPC", "AWS Direct Connect", "AWS Transit Gateway"],
    correct: [2],
    explanation: "AWS Direct Connect establishes a dedicated physical network connection (1 Gbps, 10 Gbps, or 100 Gbps) from on-premises to AWS. It provides consistent network performance and can reduce bandwidth costs compared to internet-based VPN.",
    optionExplanations: [
      "AWS VPN creates an encrypted tunnel over the public internet — it does not provide a dedicated physical connection that bypasses the public internet.",
      "Amazon VPC is the virtual network in AWS — it is not itself a connectivity service between on-premises and AWS.",
      "Correct — AWS Direct Connect establishes a dedicated physical private connection from on-premises to AWS, bypassing the public internet for consistent performance.",
      "AWS Transit Gateway connects multiple VPCs and on-premises networks through a central hub — it routes traffic but is not itself the physical connection between on-premises and AWS."
    ]
  },
  {
    id: 329,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a logically isolated section of the AWS Cloud where customers can launch resources in a virtual network they define?",
    options: ["Amazon EC2", "AWS Direct Connect", "Amazon VPC", "AWS Transit Gateway"],
    correct: [2],
    explanation: "Amazon Virtual Private Cloud (VPC) is a logically isolated network in AWS. Customers control IP address ranges, subnets, route tables, internet gateways, and security settings. All AWS accounts get a default VPC in each Region.",
    optionExplanations: [
      "Amazon EC2 is a compute service for virtual machines — it is not the virtual network service; EC2 instances are launched into a VPC.",
      "AWS Direct Connect provides a dedicated private link from on-premises to AWS — it is a connectivity service, not the definition of the isolated virtual network.",
      "Correct — Amazon VPC is the logically isolated virtual network that customers define, with full control over IP ranges, subnets, route tables, and gateways.",
      "AWS Transit Gateway connects multiple VPCs through a central hub — it routes traffic between VPCs but is not the service that creates the isolated virtual networks."
    ]
  },
  {
    id: 330,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS networking component allows resources in a private subnet to access the internet for outbound connections, without exposing them to inbound traffic from the internet?",
    options: ["Internet Gateway", "VPC Peering", "NAT Gateway", "AWS PrivateLink"],
    correct: [2],
    explanation: "A NAT Gateway in a public subnet allows resources in private subnets to initiate outbound connections to the internet (for software updates, etc.) while blocking inbound connections initiated from the internet.",
    optionExplanations: [
      "An Internet Gateway enables two-way internet communication for resources with public IPs — it does not prevent inbound internet connections to private subnet resources.",
      "VPC Peering connects two VPCs together — it does not provide internet access for resources in private subnets.",
      "Correct — A NAT Gateway allows private subnet resources to initiate outbound internet connections while preventing inbound internet connections to those resources.",
      "AWS PrivateLink provides private connectivity between VPCs and services — it does not enable internet access for private subnet resources."
    ]
  },
  {
    id: 331,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows you to connect multiple VPCs and on-premises networks through a central hub, simplifying network topology?",
    options: ["VPC Peering", "AWS Direct Connect", "AWS Transit Gateway", "AWS PrivateLink"],
    correct: [2],
    explanation: "AWS Transit Gateway acts as a cloud router to connect multiple VPCs and on-premises networks. Instead of creating a full mesh of VPC peering connections, all networks connect to the Transit Gateway hub, greatly simplifying large-scale network architectures.",
    optionExplanations: [
      "VPC Peering connects two VPCs directly — with many VPCs, it requires a complex full mesh of connections, unlike Transit Gateway's simpler hub-and-spoke model.",
      "AWS Direct Connect provides a dedicated private link from on-premises to AWS — it is a physical connectivity service, not a network routing hub for multiple VPCs.",
      "Correct — AWS Transit Gateway acts as a central hub connecting multiple VPCs and on-premises networks, simplifying large-scale network topology.",
      "AWS PrivateLink provides private endpoint connections for specific services — it exposes individual services privately, not a general routing hub for multiple network connections."
    ]
  },
  {
    id: 332,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables private connectivity between VPCs and AWS services (or customer-hosted services) without traffic traversing the public internet?",
    options: ["VPC Peering", "AWS Transit Gateway", "AWS PrivateLink", "Internet Gateway"],
    correct: [2],
    explanation: "AWS PrivateLink provides private connectivity to AWS services (S3, DynamoDB, etc.) and third-party services via VPC endpoints. Traffic stays within the AWS network — no public IP, no internet gateway, no NAT required.",
    optionExplanations: [
      "VPC Peering connects two VPCs bidirectionally — it exposes all resources between VPCs, not a specific service endpoint, and requires managing peering connections.",
      "AWS Transit Gateway provides a hub for routing between multiple VPCs — it is a general-purpose routing service, not private service endpoint connectivity.",
      "Correct — AWS PrivateLink creates interface VPC endpoints for accessing AWS and customer services privately within the AWS network, without public internet exposure.",
      "An Internet Gateway routes traffic to/from the public internet — it is the opposite of what is needed for private connectivity to services."
    ]
  },
  {
    id: 333,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS managed message queue service decouples distributed application components by enabling asynchronous message processing?",
    options: ["Amazon SNS", "Amazon EventBridge", "Amazon SQS", "AWS Step Functions"],
    correct: [2],
    explanation: "Amazon SQS (Simple Queue Service) provides fully managed message queues. Producers send messages to a queue; consumers poll and process them independently. This decouples components and buffers traffic spikes — e.g., between a web tier and a processing tier.",
    optionExplanations: [
      "Amazon SNS is a pub/sub notification service that fans out to multiple subscribers simultaneously — it is not a point-to-point queue where one consumer processes each message.",
      "Amazon EventBridge is an event bus for routing events to targets based on rules — it routes events, not queues messages for independent consumer processing.",
      "Correct — Amazon SQS provides managed message queues for asynchronous, decoupled component communication, buffering messages until consumers can process them.",
      "AWS Step Functions orchestrates multi-step workflows — it is a workflow service, not a message queue for decoupling independent producers and consumers."
    ]
  },
  {
    id: 334,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a fully managed pub/sub messaging service that can fan out messages to many subscribers simultaneously via email, SMS, Lambda, SQS, and HTTP endpoints?",
    options: ["Amazon SQS", "AWS Step Functions", "Amazon SNS", "Amazon Kinesis"],
    correct: [2],
    explanation: "Amazon SNS (Simple Notification Service) is a pub/sub messaging service. Publishers send messages to a topic; SNS fans out to all subscribers (Lambda, SQS, email, SMS, HTTP). It's used for push notifications and fan-out architectures.",
    optionExplanations: [
      "Amazon SQS is a point-to-point message queue — one consumer processes each message; it does not fan out messages to multiple simultaneous subscribers.",
      "AWS Step Functions orchestrates workflows — it is a service orchestrator, not a pub/sub notification service for fanning out to many subscribers.",
      "Correct — Amazon SNS is a pub/sub service that fans out a single message to all subscribers (Lambda, SQS, email, SMS, HTTP) simultaneously.",
      "Amazon Kinesis is for real-time data streaming at high volume — it is not a simple pub/sub notification service for fanning out messages to multiple subscriber types."
    ]
  },
  {
    id: 335,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service orchestrates multiple AWS Lambda functions into a serverless workflow with error handling, retries, and parallel execution?",
    options: ["Amazon SQS", "Amazon SNS", "AWS Step Functions", "Amazon EventBridge"],
    correct: [2],
    explanation: "AWS Step Functions is a serverless orchestration service that coordinates Lambda functions and other AWS services into visual workflows (state machines). It handles retries, error catching, branching, parallel execution, and state management.",
    optionExplanations: [
      "Amazon SQS buffers messages for asynchronous processing — it does not orchestrate multi-step workflows with error handling, retries, and state management.",
      "Amazon SNS fans out notifications to subscribers — it is a pub/sub notification service, not a workflow orchestration service.",
      "Correct — AWS Step Functions orchestrates Lambda functions and AWS services into visual state machine workflows with error handling, retries, and parallel execution.",
      "Amazon EventBridge routes events to targets based on rules — it is an event bus, not a workflow orchestration service with sequential states and error handling."
    ]
  },
  {
    id: 336,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a serverless event bus that routes events from AWS services, SaaS applications, and custom applications to targets like Lambda and SQS?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon Kinesis", "Amazon EventBridge"],
    correct: [3],
    explanation: "Amazon EventBridge (formerly CloudWatch Events) is a serverless event bus. It ingests events from AWS services, custom apps, and SaaS partners, applies rules to filter/route them to targets. It enables loosely coupled, event-driven architectures.",
    optionExplanations: [
      "Amazon SQS is a point-to-point message queue — it buffers messages for one consumer, not an event bus that routes to multiple targets based on rules.",
      "Amazon SNS is a pub/sub notification service — it fans out to pre-configured subscribers, not a rules-based event bus integrating with SaaS applications.",
      "Amazon Kinesis processes real-time streaming data at high volume — it is a streaming service, not a rules-based event routing bus for AWS and SaaS event sources.",
      "Correct — Amazon EventBridge is a serverless event bus that routes events from AWS services, custom apps, and SaaS partners to targets based on configurable rules."
    ]
  },
  {
    id: 337,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is used to ingest, process, and analyze real-time streaming data at scale, such as clickstreams, IoT telemetry, or log data?",
    options: ["Amazon SQS", "Amazon SNS", "AWS Step Functions", "Amazon Kinesis"],
    correct: [3],
    explanation: "Amazon Kinesis is a family of services for real-time data streaming. Kinesis Data Streams ingests and processes streaming data; Kinesis Data Firehose loads it into S3, Redshift, or Elasticsearch; Kinesis Data Analytics runs SQL on streams.",
    optionExplanations: [
      "Amazon SQS is a point-to-point message queue — it is designed for asynchronous task processing, not real-time high-throughput data streaming from IoT or clickstreams.",
      "Amazon SNS is a pub/sub notification service — it is designed for event notifications, not for continuously ingesting and processing high-volume streaming data.",
      "AWS Step Functions orchestrates multi-step workflows — it is a workflow service, not a real-time data streaming ingestion and processing service.",
      "Correct — Amazon Kinesis provides real-time streaming for high-volume data ingestion and processing (Kinesis Data Streams, Firehose, Analytics) for IoT, log, and clickstream data."
    ]
  },
  {
    id: 338,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed API gateway to create, publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs?",
    options: ["AWS AppSync", "AWS App Runner", "Amazon API Gateway", "AWS Amplify"],
    correct: [2],
    explanation: "Amazon API Gateway lets you create and manage APIs at any scale. It handles traffic management, authorization, throttling, monitoring, and API versioning. It integrates natively with Lambda for serverless backends.",
    optionExplanations: [
      "AWS AppSync is a managed GraphQL service — it is specifically designed for GraphQL APIs with real-time subscriptions, not the general-purpose REST/WebSocket API management service.",
      "AWS App Runner deploys containerized web applications and APIs — it is a simplified deployment service, not a fully featured API management gateway with throttling and versioning.",
      "Correct — Amazon API Gateway provides a fully managed service for creating, publishing, and securing REST, HTTP, and WebSocket APIs with traffic management, authorization, and monitoring.",
      "AWS Amplify is a development platform for building web and mobile apps — it uses API Gateway under the hood but is not itself the API management service."
    ]
  },
  {
    id: 339,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS infrastructure as code service allows you to model and provision AWS resources using JSON or YAML templates?",
    options: ["AWS CDK", "AWS Elastic Beanstalk", "AWS CloudFormation", "AWS OpsWorks"],
    correct: [2],
    explanation: "AWS CloudFormation is an IaC service that provisions and manages AWS resources from declarative templates (JSON or YAML). Templates define the desired state; CloudFormation handles dependency ordering, rollback, and drift detection.",
    optionExplanations: [
      "AWS CDK (Cloud Development Kit) generates CloudFormation templates using programming languages — while CDK is IaC, CloudFormation is the underlying service that uses JSON/YAML templates directly.",
      "AWS Elastic Beanstalk deploys application code and manages surrounding infrastructure — it is a PaaS service, not an IaC service for defining arbitrary AWS resource configurations.",
      "Correct — AWS CloudFormation provisions and manages AWS resources from JSON or YAML templates, with dependency ordering, rollback, and drift detection.",
      "AWS OpsWorks is a configuration management service using Chef/Puppet — it manages server configurations, not infrastructure provisioning through declarative templates."
    ]
  },
  {
    id: 340,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed Hadoop ecosystem in the cloud, enabling processing of big data using tools like Spark, Hive, and HBase?",
    options: ["Amazon Redshift", "Amazon Athena", "Amazon EMR", "AWS Glue"],
    correct: [2],
    explanation: "Amazon EMR (Elastic MapReduce) is a managed cluster platform for running open-source big data frameworks (Hadoop, Spark, HBase, Hive, Flink). AWS handles provisioning, configuration, and tuning of the cluster nodes.",
    optionExplanations: [
      "Amazon Redshift is a SQL-based data warehouse — it does not run Apache Spark, Hive, HBase, or Hadoop frameworks.",
      "Amazon Athena is a serverless SQL query service for S3 data — it does not provide a platform for running open-source big data frameworks.",
      "Correct — Amazon EMR is the managed platform for running Apache Hadoop, Spark, HBase, Hive, and Flink on resizable clusters of EC2 instances.",
      "AWS Glue is a serverless ETL service — it uses Spark under the hood but is designed for ETL jobs, not as a general-purpose platform for arbitrary big data framework workloads."
    ]
  },
  {
    id: 341,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows you to run SQL queries directly on data stored in Amazon S3 without loading it into a database?",
    options: ["Amazon Redshift", "Amazon EMR", "Amazon Athena", "AWS Glue"],
    correct: [2],
    explanation: "Amazon Athena is an interactive, serverless query service using standard SQL to analyze data directly in S3. There is no infrastructure to manage, and you pay per TB of data scanned. It uses Presto and supports JSON, CSV, Parquet, ORC, and Avro.",
    optionExplanations: [
      "Amazon Redshift is a managed data warehouse that requires provisioning clusters and loading data — it does not query data in-place in S3 without infrastructure setup.",
      "Amazon EMR requires provisioning and managing clusters of EC2 instances — it is not a serverless, infrastructure-free SQL query service.",
      "Correct — Amazon Athena is a serverless SQL query service that analyzes data directly in S3 with no infrastructure to manage, paying only per TB of data scanned.",
      "AWS Glue is a serverless ETL service for transforming and moving data — it is not a SQL query service for ad-hoc analysis of data in S3."
    ]
  },
  {
    id: 342,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a serverless ETL (Extract, Transform, Load) service that discovers, catalogs, and transforms data for analytics?",
    options: ["Amazon EMR", "Amazon Athena", "Amazon Kinesis", "AWS Glue"],
    correct: [3],
    explanation: "AWS Glue is a serverless data integration service. Its crawler discovers data schemas and populates the Glue Data Catalog; ETL jobs transform and move data between stores. It integrates with Athena, Redshift, and S3.",
    optionExplanations: [
      "Amazon EMR runs big data frameworks like Spark — it requires cluster management and is a general-purpose platform, not a serverless ETL service with built-in catalog and crawlers.",
      "Amazon Athena is a serverless SQL query service — it queries data in S3 but does not provide ETL transformation, data catalog crawling, or data movement capabilities.",
      "Amazon Kinesis is for real-time streaming data ingestion — it is not an ETL service for discovering, cataloging, and transforming data at rest.",
      "Correct — AWS Glue is a serverless ETL service with data catalog, crawlers for schema discovery, and ETL jobs for transforming and moving data between stores."
    ]
  },
  {
    id: 343,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed machine learning platform for building, training, and deploying ML models at scale?",
    options: ["AWS DeepLens", "Amazon Rekognition", "Amazon SageMaker", "AWS Comprehend"],
    correct: [2],
    explanation: "Amazon SageMaker is a fully managed ML service providing tools for data labeling, model building (Jupyter notebooks), training (distributed), tuning, and deployment (real-time endpoints, batch transform). It handles the undifferentiated heavy lifting of ML.",
    optionExplanations: [
      "AWS DeepLens is a deep learning-enabled video camera — it is a hardware device for edge ML inference, not a full ML platform for building and training models.",
      "Amazon Rekognition is a pre-built AI service for computer vision — it provides specific pre-trained capabilities, not an end-to-end platform for building custom ML models.",
      "Correct — Amazon SageMaker provides a complete ML platform covering data labeling, model building, distributed training, hyperparameter tuning, and deployment.",
      "AWS Comprehend is a pre-built NLP service — it provides specific text analysis capabilities, not a general ML platform for custom model development."
    ]
  },
  {
    id: 344,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS AI service provides pre-trained models for image and video analysis, such as object detection, facial recognition, and content moderation?",
    options: ["Amazon Comprehend", "Amazon Polly", "Amazon Rekognition", "Amazon Transcribe"],
    correct: [2],
    explanation: "Amazon Rekognition uses deep learning to analyze images and videos. Features include object/scene detection, facial analysis, celebrity recognition, text detection, and content moderation — all via API with no ML expertise required.",
    optionExplanations: [
      "Amazon Comprehend performs NLP on text — it analyzes written text for sentiment, entities, and key phrases, not images or videos.",
      "Amazon Polly converts text to speech — it is a text-to-speech service, not an image/video analysis service.",
      "Correct — Amazon Rekognition provides computer vision capabilities (object detection, facial analysis, text in images, content moderation) via API with no ML expertise.",
      "Amazon Transcribe converts speech audio to text — it transcribes spoken words, not analyzes visual content in images or videos."
    ]
  },
  {
    id: 345,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service converts text to lifelike speech in multiple languages and voices?",
    options: ["Amazon Transcribe", "Amazon Translate", "Amazon Comprehend", "Amazon Polly"],
    correct: [3],
    explanation: "Amazon Polly converts text to realistic speech using deep learning. It supports dozens of languages and voices, including Neural Text-to-Speech (NTTS) for even more natural-sounding output. Used for voice-enabled apps, e-learning, and accessibility.",
    optionExplanations: [
      "Amazon Transcribe converts speech (audio) to text — it is the reverse of Polly, doing speech-to-text instead of text-to-speech.",
      "Amazon Translate performs language translation between text languages — it does not convert text to speech audio.",
      "Amazon Comprehend performs NLP analysis on text — it extracts insights from text, not converts it to spoken audio.",
      "Correct — Amazon Polly converts text to lifelike speech using deep learning, supporting dozens of languages and neural voices for voice-enabled applications."
    ]
  },
  {
    id: 346,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service automatically converts speech to text, and can produce transcripts with speaker identification and custom vocabulary?",
    options: ["Amazon Polly", "Amazon Translate", "Amazon Lex", "Amazon Transcribe"],
    correct: [3],
    explanation: "Amazon Transcribe is an automatic speech recognition (ASR) service that converts audio/video to accurate text. Features include speaker diarization, custom vocabularies, PII redaction, and real-time or batch transcription.",
    optionExplanations: [
      "Amazon Polly converts text to speech — it is the opposite of Transcribe, doing text-to-speech instead of speech-to-text.",
      "Amazon Translate performs language translation between text languages — it does not convert spoken audio to text.",
      "Amazon Lex is a chatbot service for building conversational interfaces — it includes speech recognition capabilities but is a complete chatbot builder, not a standalone transcription service.",
      "Correct — Amazon Transcribe is the automatic speech recognition (ASR) service that converts audio/video to text with speaker identification and custom vocabulary support."
    ]
  },
  {
    id: 347,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service uses natural language processing to extract key phrases, sentiment, entities, and language from text?",
    options: ["Amazon Lex", "Amazon Polly", "Amazon Comprehend", "Amazon Translate"],
    correct: [2],
    explanation: "Amazon Comprehend is a natural language processing (NLP) service that extracts insights from text: key phrases, entities (people, places), sentiment (positive/negative), language detection, and topic modeling — all via API.",
    optionExplanations: [
      "Amazon Lex is a chatbot service for building conversational interfaces — it processes speech and text for dialogue, not for extracting NLP insights like sentiment and entities.",
      "Amazon Polly converts text to speech audio — it does not analyze or extract insights from text content.",
      "Correct — Amazon Comprehend is the NLP service that extracts key phrases, entities, sentiment, language, and topics from text without requiring ML expertise.",
      "Amazon Translate performs language translation — it converts text between languages but does not extract NLP insights like sentiment or entity recognition."
    ]
  },
  {
    id: 348,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables building conversational chatbots and voice interfaces using the same deep learning technology that powers Amazon Alexa?",
    options: ["Amazon Polly", "Amazon Comprehend", "Amazon Lex", "Amazon Kendra"],
    correct: [2],
    explanation: "Amazon Lex is a fully managed service for building conversational interfaces using voice and text. It provides automatic speech recognition (ASR) and natural language understanding (NLU). Integrated with Lambda for backend fulfillment.",
    optionExplanations: [
      "Amazon Polly converts text to speech audio — it is a TTS service for generating spoken audio, not a service for building conversational chatbot flows.",
      "Amazon Comprehend performs NLP analysis on text — it extracts insights from text but does not manage conversational dialogue flows or intent fulfillment.",
      "Correct — Amazon Lex builds conversational interfaces with ASR and NLU (the same technology as Alexa), integrated with Lambda for fulfillment logic.",
      "Amazon Kendra is an ML-powered enterprise search service — it searches and retrieves information from documents but does not build interactive chatbot conversational interfaces."
    ]
  },
  {
    id: 349,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides an intelligent enterprise search service powered by machine learning?",
    options: ["Amazon Elasticsearch Service", "Amazon Kendra", "Amazon Comprehend", "Amazon Lex"],
    correct: [1],
    explanation: "Amazon Kendra is an ML-powered enterprise search service that understands natural language questions and searches across unstructured content (documents, FAQs, S3, SharePoint, Salesforce) to return precise answers.",
    optionExplanations: [
      "Amazon Elasticsearch Service (OpenSearch Service) provides search and analytics on structured and semi-structured data — it requires more technical configuration and is not purpose-built for natural language enterprise document search.",
      "Correct — Amazon Kendra is the ML-powered enterprise search service that understands natural language questions and returns precise answers from unstructured enterprise documents.",
      "Amazon Comprehend performs NLP analysis to extract insights from text — it does not search across enterprise documents and return answers to natural language queries.",
      "Amazon Lex builds conversational chatbot interfaces — it handles dialogues and intents but is not a document search service for enterprise content repositories."
    ]
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
    explanation: "Enterprise Support includes a dedicated Technical Account Manager (TAM) who provides proactive guidance, architectural reviews, and coordinates access to AWS subject matter experts. It also includes Concierge Support and Infrastructure Event Management.",
    optionExplanations: [
      "Basic Support is free and provides no technical support contacts — only documentation and community forums, no account management.",
      "Developer Support provides email-based general guidance — no dedicated TAM or proactive account-level management.",
      "Business Support provides 24/7 access to Cloud Support Engineers but does not include a dedicated TAM — proactive guidance is not a built-in feature.",
      "Correct — Enterprise Support includes a dedicated Technical Account Manager (TAM) who provides proactive guidance, reviews, and coordinates specialized AWS subject matter experts."
    ]
  },
  {
    id: 378,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "What is the minimum monthly cost for AWS Business Support?",
    options: ["Free", "$29/month", "$100/month", "$15,000/month"],
    correct: [2],
    explanation: "AWS Business Support starts at $100/month (or a percentage of AWS usage, whichever is greater). It includes 24/7 phone, chat, and email access to Cloud Support Engineers and full Trusted Advisor checks.",
    optionExplanations: [
      "Basic Support is free — Business Support always carries a minimum monthly fee.",
      "$29/month is the minimum for Developer Support, not Business Support.",
      "Correct — Business Support starts at $100/month (or a percentage of AWS usage, whichever is greater), providing 24/7 engineer access and full Trusted Advisor checks.",
      "$15,000/month is closer to the Enterprise Support minimum — Business Support is much less expensive."
    ]
  },
  {
    id: 379,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS Support plan provides general architectural guidance and is recommended for development/testing environments?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    correct: [1],
    explanation: "AWS Developer Support ($29/month or 3% of usage) is designed for experimentation and testing. It provides one primary contact with email-based technical support during business hours with a 12-24 hour response time for general guidance.",
    optionExplanations: [
      "Basic Support provides no technical support contact — only documentation and community forums, without any engineering guidance.",
      "Correct — Developer Support ($29/month) includes general architectural guidance via email during business hours, specifically recommended for development and testing environments.",
      "Business Support provides 24/7 phone, chat, and email with production-grade SLAs — more than necessary for a dev/test environment and more costly.",
      "Enterprise Support includes a dedicated TAM and premium SLAs designed for mission-critical workloads — not appropriate for a development or testing environment."
    ]
  },
  {
    id: 380,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS tool provides a visual interface to explore AWS costs, view spending trends, and forecast future costs based on historical usage?",
    options: ["AWS Budgets", "AWS Pricing Calculator", "AWS Cost Explorer", "AWS Cost and Usage Report"],
    correct: [2],
    explanation: "AWS Cost Explorer provides interactive graphs to analyze costs over time (up to 13 months historical), break down by service/tag/account, identify trends, and forecast spending. Available at no additional charge.",
    optionExplanations: [
      "AWS Budgets is for setting spending limits and receiving alerts — it provides budget tracking, not an interactive visualization of historical cost trends.",
      "AWS Pricing Calculator estimates costs of future architectures before deployment — it does not visualize existing usage or forecast based on historical data.",
      "Correct — AWS Cost Explorer provides an interactive visual dashboard to explore up to 13 months of historical costs, filter by dimension (service, tag, account), and forecast future spend.",
      "The Cost and Usage Report delivers raw data to S3 — it requires a separate analytics tool to visualize and has no built-in graphical interface."
    ]
  },
  {
    id: 381,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service allows you to set custom cost or usage thresholds and receive alerts when they are exceeded or forecasted to be exceeded?",
    options: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Budgets", "AWS Cost and Usage Report"],
    correct: [2],
    explanation: "AWS Budgets lets you set cost, usage, or reservation budgets and sends alerts (via email or SNS) when actual or forecasted amounts exceed thresholds. You can also set automated actions (e.g., apply SCPs) when budgets are breached.",
    optionExplanations: [
      "Cost Explorer visualizes historical and forecasted spending — it cannot directly send threshold-based alert notifications or trigger automated actions.",
      "AWS Pricing Calculator estimates costs of planned architectures — it does not monitor live spending or send alerts.",
      "Correct — AWS Budgets lets you set cost, usage, or reservation thresholds and sends email or SNS alerts (and can trigger automated actions) when limits are exceeded or forecasted to be exceeded.",
      "The Cost and Usage Report delivers detailed billing data to S3 — it does not send alerts or automate responses to spending breaches."
    ]
  },
  {
    id: 382,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service provides the most granular and detailed data about AWS costs and usage, suitable for ingestion into data analysis tools?",
    options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report (CUR)"],
    correct: [3],
    explanation: "The AWS Cost and Usage Report (CUR) is the most comprehensive billing dataset. It delivers hourly/daily line items for all usage across all services to an S3 bucket, usable with Athena, Redshift, or QuickSight for custom analysis.",
    optionExplanations: [
      "Cost Explorer provides summarized visualizations and 13 months of data — it does not export raw, line-item granularity data for custom querying with tools like Athena.",
      "AWS Budgets tracks spending against defined thresholds — it does not provide raw line-item data or support export to external data analysis platforms.",
      "AWS Pricing Calculator estimates future architecture costs — it has no data about actual usage or historical charges.",
      "Correct — The CUR is the most granular billing dataset, providing hourly/daily line items per resource ID for every charge, delivered to S3 and queryable with Athena or QuickSight."
    ]
  },
  {
    id: 383,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS tool helps estimate the cost of a new AWS architecture before deploying it, by inputting expected service usage?",
    options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Migration Evaluator"],
    correct: [2],
    explanation: "AWS Pricing Calculator (calc.aws) lets you model new architectures and estimate monthly costs before deployment. You configure services (EC2 instance types, storage, data transfer, etc.) and get a cost breakdown. Useful for budgeting new projects.",
    optionExplanations: [
      "Cost Explorer analyzes actual historical costs — it cannot project the cost of a new, not-yet-deployed architecture.",
      "AWS Budgets monitors current spending against limits — it is not a planning or estimation tool for future architecture costs.",
      "Correct — AWS Pricing Calculator lets you configure any combination of AWS services and get a cost estimate before deploying a single resource.",
      "AWS Migration Evaluator analyzes on-premises workloads to build a migration business case — it is not a general architecture pricing tool for new AWS deployments."
    ]
  },
  {
    id: 384,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS feature allows you to consolidate billing for multiple AWS accounts and potentially receive volume discounts?",
    options: ["AWS Cost Explorer", "AWS Organizations with consolidated billing", "AWS Budgets", "AWS Trusted Advisor"],
    correct: [1],
    explanation: "AWS Organizations consolidated billing aggregates usage across all linked accounts into a single payer account. This can result in volume tier discounts (e.g., S3 tiered pricing) and simplified billing. All accounts share Reserved Instance and Savings Plans benefits.",
    optionExplanations: [
      "Cost Explorer is a cost visualization tool — it does not aggregate multi-account billing or provide the volume discount mechanism.",
      "Correct — AWS Organizations with consolidated billing combines usage from all linked accounts into one bill, enabling volume tier discounts and sharing of RI/Savings Plans benefits.",
      "AWS Budgets sets cost thresholds for accounts — it does not aggregate billing or provide volume pricing benefits.",
      "Trusted Advisor provides environment best-practice recommendations — it does not manage billing aggregation or volume pricing."
    ]
  },
  {
    id: 385,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company has multiple AWS accounts for different departments. Which AWS feature allows all accounts to benefit from one department's Reserved Instance purchases?",
    options: ["AWS Budgets", "Consolidated Billing in AWS Organizations", "AWS Cost Explorer", "AWS Pricing Calculator"],
    correct: [1],
    explanation: "With consolidated billing in AWS Organizations, Reserved Instance and Savings Plans discounts are shared across all linked accounts. If the purchasing account doesn't use the RI capacity, the discount applies to usage in other linked accounts.",
    optionExplanations: [
      "AWS Budgets monitors spending levels — it does not control how RI or Savings Plans discounts are shared across accounts.",
      "Correct — With consolidated billing, unused RI or Savings Plans capacity from one linked account automatically applies to eligible usage in other accounts within the organization.",
      "Cost Explorer shows where discounts are being applied but is a reporting tool — it does not control the RI sharing mechanism itself.",
      "AWS Pricing Calculator estimates future costs — it cannot share pricing commitments or discounts across accounts."
    ]
  },
  {
    id: 386,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS pricing model charges you per second of compute time used, with no upfront costs or minimum commitments?",
    options: ["Reserved pricing", "Spot pricing", "On-Demand pricing", "Dedicated Host pricing"],
    correct: [2],
    explanation: "On-Demand pricing charges for compute capacity by the second (Linux) or hour, with no long-term commitments. It is the most flexible and most expensive option per unit, ideal for unpredictable or short-duration workloads.",
    optionExplanations: [
      "Reserved pricing requires a 1- or 3-year commitment — it is not a no-commitment, flexible pay-by-the-second model.",
      "Spot pricing offers potential savings using spare EC2 capacity but instances can be interrupted at any time — not truly flexible for workloads requiring guaranteed availability.",
      "Correct — On-Demand pricing charges by the second (Linux, minimum 60s) or hour with no upfront costs or commitments, providing maximum flexibility.",
      "Dedicated Host pricing is available as On-Demand or Reserved and applies to a physical server allocation — it is not the general per-second flexible pricing model described."
    ]
  },
  {
    id: 387,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS support plan is included free with every AWS account and provides access to documentation, whitepapers, AWS re:Post, and Service Health Dashboard?",
    options: ["Developer", "Business", "Enterprise", "Basic"],
    correct: [3],
    explanation: "AWS Basic Support is free for all accounts. It includes access to documentation, whitepapers, AWS re:Post community, Service Health Dashboard, and 6 core Trusted Advisor checks. No technical support contact is included.",
    optionExplanations: [
      "Developer Support ($29/month) provides email technical support — it is not free.",
      "Business Support ($100/month minimum) provides 24/7 access to Cloud Support Engineers — it is not free.",
      "Enterprise Support ($15,000/month minimum) is the most comprehensive plan — it is not free.",
      "Correct — Basic Support is free and automatically included with every AWS account, providing documentation, re:Post, Service Health Dashboard, and 6 core Trusted Advisor checks."
    ]
  },
  {
    id: 388,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS support plan offers a response time of less than 15 minutes for a business-critical system-down case?",
    options: ["Developer", "Business", "Enterprise On-Ramp", "Enterprise"],
    correct: [3],
    explanation: "Enterprise Support guarantees less than 15-minute response time for critical business system-down (Severity 1) cases, along with 24/7 phone/chat/email access and a dedicated TAM. Business Support offers less than 1-hour response for the same severity.",
    optionExplanations: [
      "Developer Support only provides email during business hours — there is no phone/chat and no SLA for critical production system-down cases.",
      "Business Support provides a less-than-1-hour response for Severity 1 cases — close, but the 15-minute SLA is exclusively available in Enterprise Support.",
      "Enterprise On-Ramp provides a 30-minute response for critical cases — better than Business but still not the 15-minute guarantee.",
      "Correct — Enterprise Support guarantees a less-than-15-minute response for critical business system-down (Severity 1) cases, along with a dedicated TAM."
    ]
  },
  {
    id: 389,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS feature assigns metadata labels to AWS resources for the purpose of cost allocation, access control, and resource organization?",
    options: ["Resource Groups", "AWS Config Rules", "AWS Resource Tags", "AWS Organizations OUs"],
    correct: [2],
    explanation: "AWS Resource Tags are key-value pairs attached to resources (EC2, S3, RDS, etc.). They are used for cost allocation (allocating costs to departments/projects via Cost Explorer), access control (IAM tag conditions), and resource filtering.",
    optionExplanations: [
      "Resource Groups organize resources into logical collections based on tags — they rely on tags but are not the feature that assigns metadata labels to resources.",
      "AWS Config Rules evaluate whether resource configurations comply with policies — they do not assign metadata labels to resources.",
      "Correct — AWS Resource Tags are key-value pairs attached to resources, used for cost allocation (visible in Cost Explorer/CUR), IAM-based access control, and resource organization.",
      "Organizational Units organize AWS accounts for governance at the account level — they do not label individual resources within accounts."
    ]
  },
  {
    id: 390,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company is analyzing its AWS bill and notices unexpectedly high data transfer costs. Which AWS service would BEST help identify exactly which resources are generating these costs?",
    options: ["AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report with Athena", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "The AWS Cost and Usage Report (CUR) provides line-item detail for every charge, including data transfer, by resource ID. Querying it with Athena lets you identify exactly which EC2 instances or NAT Gateways are generating high transfer costs.",
    optionExplanations: [
      "AWS Budgets provides total-level spending alerts — it does not identify which specific resources are generating the unexpected costs.",
      "AWS Pricing Calculator estimates future costs — it cannot analyze historical billing data to identify sources of charges.",
      "Correct — The CUR includes resource IDs and detailed usage type breakdowns (including data transfer) for every charge. Querying with Athena lets you pinpoint exactly which resources are responsible.",
      "Trusted Advisor can flag some high-cost patterns in its Cost Optimization checks but lacks the line-item resource granularity needed to identify specific data transfer cost sources."
    ]
  },
  {
    id: 391,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service provides real-time guidance across five categories — Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits — to help optimize your AWS environment?",
    options: ["AWS Config", "AWS Well-Architected Tool", "AWS Trusted Advisor", "Amazon GuardDuty"],
    correct: [2],
    explanation: "AWS Trusted Advisor inspects your AWS environment and provides recommendations in five categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits. Business and Enterprise Support get access to all checks.",
    optionExplanations: [
      "AWS Config records resource configurations and evaluates compliance rules — it focuses on configuration drift and compliance, not multi-category real-time optimization recommendations.",
      "The AWS Well-Architected Tool reviews architecture against best practices across six pillars — it requires manual answers to questions and is not an automated real-time advisory.",
      "Correct — AWS Trusted Advisor provides automated real-time checks across five categories (Cost Optimization, Performance, Security, Fault Tolerance, Service Limits) with actionable recommendations.",
      "Amazon GuardDuty is a threat detection service monitoring for malicious activity — it covers only security, not cost, performance, or fault tolerance recommendations."
    ]
  },
  {
    id: 392,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS support resource provides a community-based Q&A forum where AWS customers and AWS employees can post and answer technical questions?",
    options: ["AWS IQ", "AWS re:Post", "AWS Support Center", "AWS Knowledge Center"],
    correct: [1],
    explanation: "AWS re:Post is a community-based Q&A service (successor to AWS Developer Forums). AWS experts and community members answer questions. It is accessible to all support tiers. Accepted answers and upvoted responses surface the most reliable information.",
    optionExplanations: [
      "AWS IQ is a marketplace for hiring AWS-certified experts for paid project work — it is not a community Q&A forum.",
      "Correct — AWS re:Post is a community-based Q&A platform where AWS customers, partners, and AWS employees post and answer technical questions, accessible to all support tiers.",
      "AWS Support Center is where paying customers open official support tickets — it is not a public community discussion forum.",
      "AWS Knowledge Center is a curated FAQ collection with AWS-authored answers — it is read-only and not a community-driven discussion platform."
    ]
  },
  {
    id: 393,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS program allows customers to engage AWS-certified experts for hands-on technical assistance with AWS projects on a fixed-price or hourly basis?",
    options: ["AWS Partner Network", "AWS re:Post", "AWS IQ", "AWS Professional Services"],
    correct: [2],
    explanation: "AWS IQ connects customers with AWS-certified third-party experts for on-demand project work. Customers post their project, receive proposals, and pay for approved work securely through AWS. It is different from AWS Professional Services (direct AWS engagement).",
    optionExplanations: [
      "The AWS Partner Network is a certification program for partner companies — it is not a marketplace for hiring individual experts for specific on-demand projects.",
      "AWS re:Post is a community Q&A forum — it provides information but does not facilitate paid expert engagements or project work.",
      "Correct — AWS IQ connects customers with AWS-certified freelance experts for paid on-demand project work, with proposals and payments processed securely through AWS.",
      "AWS Professional Services is a direct AWS team engagement for large-scale transformations — it is not a platform for hiring third-party independent experts."
    ]
  },
  {
    id: 394,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS offering provides the global network of AWS partners (consulting firms, ISVs, resellers) that complement AWS services?",
    options: ["AWS Marketplace", "AWS IQ", "AWS Partner Network (APN)", "AWS re:Post"],
    correct: [2],
    explanation: "The AWS Partner Network (APN) is the global community of AWS partners, including Consulting Partners (implement AWS solutions) and Technology Partners (software products that run on or integrate with AWS). APN Partners are vetted by AWS.",
    optionExplanations: [
      "AWS Marketplace is an online store for buying third-party software and SaaS products — it is not a network of certified consulting and technology partner companies.",
      "AWS IQ is for hiring individual AWS-certified freelance experts for project work — it is not the global ecosystem of partner firms and ISVs.",
      "Correct — The AWS Partner Network (APN) is the global community of Consulting Partners (implementation firms) and Technology Partners (ISVs) that build on or work with AWS.",
      "AWS re:Post is a community Q&A forum — it is not a program for certifying or organizing business partners."
    ]
  },
  {
    id: 395,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service is an online catalog of third-party software, SaaS products, and data products that can be deployed directly to AWS accounts?",
    options: ["AWS Partner Network", "AWS Service Catalog", "AWS Marketplace", "AWS IQ"],
    correct: [2],
    explanation: "AWS Marketplace is a digital catalog of thousands of software listings from independent vendors. Customers can find, test, buy, and deploy software on AWS. Purchases are billed through the AWS account, simplifying procurement.",
    optionExplanations: [
      "The AWS Partner Network is a certification program for consulting and technology partner companies — it is not a storefront for purchasing software products.",
      "AWS Service Catalog allows organizations to create internal catalogs of approved IT services for employees — it is for internal governance, not buying third-party products.",
      "Correct — AWS Marketplace is the digital storefront where customers can find, test, buy, and deploy thousands of third-party software and SaaS products, billed through their AWS account.",
      "AWS IQ is for hiring individual AWS-certified freelance experts — it is not a software product marketplace."
    ]
  },
  {
    id: 396,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS pricing principle means you pay less per unit as your usage volume increases?",
    options: ["Pay-as-you-go", "Pay less when you reserve", "Pay less with more usage (volume-based discounts)", "Free tier pricing"],
    correct: [2],
    explanation: "AWS uses tiered pricing for many services (S3, data transfer, etc.) where per-unit costs decrease as usage increases. For example, S3 charges less per GB after the first 50 TB in a month. This is volume-based pricing.",
    optionExplanations: [
      "Pay-as-you-go describes the billing model (paying for what you use, no upfront commitments) — it does not specifically describe per-unit price reductions as volume increases.",
      "'Pay less when you reserve' refers to discounts from 1- or 3-year commitments (RIs, Savings Plans) — it is about commitment-based discounts, not volume tiers.",
      "Correct — 'Pay less with more usage' (volume-based discounts) means per-unit prices decrease as usage volume increases, such as S3 tiered pricing where costs drop after 50 TB/month.",
      "Free tier pricing provides limited free usage for new or all accounts — it is not a volume discount principle that scales with increased usage."
    ]
  },
  {
    id: 397,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which of the following is NOT included in the AWS Free Tier for 12 months after account creation?",
    options: ["750 hours/month of Amazon EC2 t2.micro", "5 GB of Amazon S3 Standard storage", "750 hours/month of Amazon RDS (db.t2.micro)", "Unlimited AWS Lambda invocations"],
    correct: [3],
    explanation: "AWS Lambda's Free Tier (1 million requests and 400,000 GB-seconds of compute per month) is a permanent free tier, not limited to 12 months. The 12-month free tier includes EC2 t2.micro (750 hrs), S3 (5 GB), and RDS db.t2.micro (750 hrs).",
    optionExplanations: [
      "750 hours/month of EC2 t2.micro is a genuine 12-month Free Tier offer, available for 12 months after account creation.",
      "5 GB of S3 Standard storage is a genuine 12-month Free Tier offer, available for 12 months after account creation.",
      "750 hours/month of RDS db.t2.micro is a genuine 12-month Free Tier offer, available for 12 months after account creation.",
      "Correct — Lambda's free tier (1M requests + 400,000 GB-seconds/month) is an 'Always Free' offer with no expiration, not a 12-month offer, and the claim of 'unlimited invocations' is false."
    ]
  },
  {
    id: 398,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS cost optimization strategy recommends analyzing workload patterns and choosing the instance type that provides the best performance-to-cost ratio?",
    options: ["Use Spot Instances for all workloads", "Right-sizing", "Use Reserved Instances for all workloads", "Migrate to on-premises"],
    correct: [1],
    explanation: "Right-sizing is the process of analyzing actual resource utilization (CloudWatch metrics) and selecting the most cost-effective instance type and size. AWS Compute Optimizer automates right-sizing recommendations.",
    optionExplanations: [
      "Using Spot Instances for all workloads is not viable — they can be interrupted at any time, making them unsuitable for workloads that require continuous availability.",
      "Correct — Right-sizing analyzes actual CloudWatch utilization metrics and selects the instance type that best matches workload requirements at the lowest cost. AWS Compute Optimizer automates this.",
      "Using Reserved Instances for all workloads would over-commit budget on variable or short-lived workloads, leading to wasted spending on unused reservations.",
      "Migrating to on-premises eliminates cloud flexibility, requires capital hardware investment, and is the opposite of a cost optimization strategy for most cloud workloads."
    ]
  },
  {
    id: 399,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service provides a personalized view of AWS service health events (outages, maintenance) that may affect resources in your account?",
    options: ["AWS Service Health Dashboard", "Amazon CloudWatch", "AWS Personal Health Dashboard", "AWS Trusted Advisor"],
    correct: [2],
    explanation: "AWS Personal Health Dashboard (now called AWS Health Dashboard — Your account health) provides alerts and remediation guidance for AWS events that specifically affect your resources, such as scheduled maintenance on your EC2 host or regional outages affecting your services.",
    optionExplanations: [
      "The AWS Service Health Dashboard (status.aws.amazon.com) shows the general health of all AWS services globally — it is not personalized to your specific account resources.",
      "Amazon CloudWatch monitors application metrics and logs — it does not provide notifications about AWS-side service events or scheduled maintenance on your infrastructure.",
      "Correct — The AWS Personal Health Dashboard provides personalized alerts about AWS events (outages, maintenance) that specifically affect your account's resources.",
      "Trusted Advisor provides best-practice recommendations across five categories — it does not alert you about AWS service health events or planned maintenance for your resources."
    ]
  },
  {
    id: 400,
    domain: "Billing, Pricing & Support",
    type: "multiple",
    question: "Which of the following are true about AWS Reserved Instances? (Select TWO)",
    options: ["They provide a discount compared to On-Demand pricing in exchange for a 1- or 3-year commitment", "They are always instance-specific and cannot be changed once purchased", "Standard RIs can be sold on the AWS Reserved Instance Marketplace if no longer needed", "They require upfront payment in full"],
    correct: [0, 2],
    explanation: "RIs offer discounts (up to 72%) for 1- or 3-year commitments. Standard RIs (not Convertible) can be sold on the RI Marketplace if you no longer need them. Payment options include No Upfront, Partial Upfront, and All Upfront — not mandatory full upfront. Convertible RIs can change instance attributes.",
    optionExplanations: [
      "Correct — RIs provide discounts (up to 72% for Standard, up to 54% for Convertible) in exchange for a 1-year or 3-year commitment.",
      "Convertible Reserved Instances CAN be changed (instance family, OS, tenancy) during the term — the statement that all RIs 'cannot be changed once purchased' is incorrect.",
      "Correct — Standard RIs (not Convertible) can be listed and sold on the AWS Reserved Instance Marketplace before the term expires if you no longer need them.",
      "RIs offer three payment options: No Upfront, Partial Upfront, and All Upfront — full upfront payment is optional, not a requirement."
    ]
  }
];
