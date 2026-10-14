// AWS Cloud Practitioner CLF-C02 — Question Bank (500 questions)
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
      "Trade fixed capital expense for variable pay-as-you-go expense",
      "Increase speed and agility when provisioning new resources",
      "Go global in minutes by deploying to Regions worldwide",
      "Stop spending money running and maintaining data centers"
    ],
    correct: [3],
    explanation: "One of the six advantages of cloud computing is 'Stop spending money running and maintaining data centers.' By moving to AWS, companies eliminate the operational burden of physical infrastructure. 'Trade fixed for variable expense' is also a valid cloud benefit, but it focuses on the cost model rather than the elimination of maintenance burden.",
    optionExplanations: [
      "'Trade fixed capital expense for variable pay-as-you-go expense' focuses on the payment model (CapEx vs. OpEx) — it does not specifically describe eliminating the cost of purchasing and maintaining physical servers.",
      "'Increase speed and agility when provisioning new resources' refers to faster provisioning and experimentation — it addresses time-to-market, not the burden of maintaining physical infrastructure.",
      "'Go global in minutes by deploying to Regions worldwide' refers to deploying to worldwide Regions quickly — it is about geographic reach, not eliminating data center maintenance costs.",
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
    question: "A regional bank must keep its core banking database in its own data center to satisfy regulators. It wants to build a new mobile banking app on AWS that reads and writes data in that on-premises database. How is this deployment model described?",
    options: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Multi-cloud"
    ],
    correct: [2],
    explanation: "The bank keeps the core database on premises while running the new app on AWS, with the two environments connected and sharing data. Connecting on-premises infrastructure with AWS Cloud resources is a hybrid cloud deployment, common when regulations or legacy systems keep some workloads on premises.",
    optionExplanations: [
      "The bank does not run everything in the cloud; its core database must stay in its own data center, so this is not a public-cloud-only model.",
      "A private cloud keeps everything on dedicated on-premises infrastructure, but the bank is also using AWS for the mobile app.",
      "Correct — the bank connects on-premises infrastructure with AWS resources and shares data between them, which defines a hybrid cloud.",
      "Multi-cloud means using several cloud providers. The bank combines its own data center with a single provider, AWS."
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
    question: "A news website uses Amazon CloudFront so that readers around the world load images and videos quickly. CloudFront stores cached copies of this content close to the readers instead of serving every request from the origin. In which AWS global infrastructure component are these cached copies stored?",
    options: [
      "AWS Region",
      "Availability Zone",
      "Edge location",
      "Local Zone"
    ],
    correct: [2],
    explanation: "CloudFront caches content at edge locations, which are sites in many cities around the world, separate from Regions and Availability Zones. Serving cached copies from the edge location nearest each reader reduces latency and load on the origin.",
    optionExplanations: [
      "A Region is where the website's origin and main workloads run. CloudFront exists to avoid sending every request back to the Region, so the Region is not where the cached copies are kept.",
      "An Availability Zone is one or more data centers inside a Region that host the deployed application. It is not the CloudFront caching layer near readers.",
      "Correct — CloudFront caches content in edge locations near viewers, so readers are served from a nearby site instead of the origin.",
      "A Local Zone runs compute and storage workloads (such as EC2) close to a specific metro area. It is not where CloudFront keeps its cached content."
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
    question: "A company's operations team wants to get better at running its AWS workloads day to day. It plans to document procedures as runbooks, make small and frequent changes, and hold a review after every incident so that it can keep improving its processes. Which pillar of the AWS Well-Architected Framework provides guidance for these goals?",
    options: [
      "Reliability",
      "Operational Excellence",
      "Performance Efficiency",
      "Cost Optimization"
    ],
    correct: [1],
    explanation: "The Operational Excellence pillar covers running and monitoring systems to deliver business value and continually improving supporting processes and procedures. Runbooks, small frequent changes, and learning from every operational event are core practices of this pillar.",
    optionExplanations: [
      "Reliability focuses on a workload recovering from failures and meeting demand. It is not the pillar centered on runbooks, change practices, and post-incident process improvement.",
      "Correct — Operational Excellence covers how the team runs and monitors workloads, makes frequent small changes, and learns from incidents to keep improving its procedures.",
      "Performance Efficiency focuses on selecting and using resources efficiently as demand changes, not on operational procedures and post-incident reviews.",
      "Cost Optimization focuses on avoiding unnecessary spending, not on how the team runs operations and improves its processes."
    ]
  },
  {
    id: 12,
    domain: "Cloud Concepts",
    type: "single",
    question: "Due to AWS's massive scale, customers can benefit from lower pay-as-you-go pricing than they could achieve on their own. What cloud computing benefit does this represent?",
    options: [
      "Increase speed and agility",
      "Stop guessing about capacity",
      "Massive economies of scale",
      "Go global in minutes"
    ],
    correct: [2],
    explanation: "Because usage from hundreds of thousands of customers is aggregated in the cloud, AWS can achieve higher economies of scale, translating into lower pay-as-you-go prices. Individual companies could not achieve these cost efficiencies on their own.",
    optionExplanations: [
      "'Increase speed and agility' refers to faster provisioning and time-to-market — it does not describe the price reduction that comes from AWS's aggregated purchasing power.",
      "'Stop guessing about capacity' refers to matching resources to actual demand — it is about capacity planning, not the cost reduction from aggregate scale.",
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
    question: "A startup is building its first product and has no data center or on-premises servers. All application components, including compute, databases, and storage, will run on AWS from day one. How is this deployment model described?",
    options: [
      "Hybrid cloud",
      "Private cloud",
      "Cloud (cloud-native)",
      "Multi-cloud"
    ],
    correct: [2],
    explanation: "When every component of an application runs in the cloud and there is no on-premises infrastructure, the deployment model is cloud (also called cloud-native or all-in cloud). New applications built directly on AWS are a typical example.",
    optionExplanations: [
      "Hybrid cloud connects on-premises infrastructure with the cloud, but the startup has no on-premises servers at all.",
      "A private cloud runs on dedicated, usually on-premises infrastructure, which the startup does not have.",
      "Correct — all components run on AWS with no on-premises infrastructure, which is the cloud (cloud-native) deployment model.",
      "Multi-cloud means spreading workloads across several cloud providers, but the startup runs everything on AWS only."
    ]
  },
  {
    id: 16,
    domain: "Cloud Concepts",
    type: "single",
    question: "An AWS Region is composed of which infrastructure building blocks?",
    options: [
      "Multiple Edge Locations connected by the AWS private global network",
      "Two or more isolated Availability Zones linked by low-latency networks",
      "A single large data center with redundant power, cooling, and networking",
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
    question: "A startup is preparing to launch its first product. The founders do not want to spend their funding on servers before they know how many customers will sign up, and they want costs to follow actual usage. Which advantage of cloud computing BEST addresses this concern?",
    options: [
      "It removes all security responsibilities from the customer",
      "It requires a large upfront investment in capacity",
      "It replaces capital expense with variable expense",
      "It guarantees 100% uptime for every AWS service"
    ],
    correct: [2],
    explanation: "Trading capital expense for variable expense means the startup does not buy servers in advance. It pays only for the resources it actually uses, so costs grow with the number of customers instead of being committed upfront.",
    optionExplanations: [
      "Under the shared responsibility model the customer still secures its data, identities, and configurations, so security responsibility is not removed. It also has nothing to do with avoiding upfront spending.",
      "This is the opposite of what the founders want. Large upfront investment is a feature of on-premises data centers, not of the cloud.",
      "Correct — With the cloud the startup pays for what it uses instead of buying servers before demand is known.",
      "AWS does not guarantee 100% uptime; services have SLAs, and resilience depends partly on the customer's architecture. This does not address upfront costs either."
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
    question: "A company hires an intern who only needs to read files from one Amazon S3 bucket. The administrator creates an IAM policy that allows only read actions on that single bucket, with no other permissions. Which security best practice is the administrator applying?",
    options: [
      "Defense in depth",
      "Least privilege",
      "Separation of duties",
      "Zero trust networking"
    ],
    correct: [1],
    explanation: "Least privilege means granting only the permissions a user or application needs to do its job. Limiting the intern to read-only access on one bucket reduces the damage if the intern's credentials are misused.",
    optionExplanations: [
      "Defense in depth means using several layers of security controls (network, identity, data). It is not specifically about limiting one user's permissions.",
      "Correct — Giving the intern only read access to the one bucket needed is least privilege.",
      "Separation of duties splits critical tasks among different people so no single person controls a whole process. The scenario is about the minimum permissions for one user.",
      "Zero trust networking is about not trusting requests based on network location and verifying each one. It does not describe sizing a user's permissions."
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
      "AWS WAF rules",
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
    question: "A small business hosts its marketing website on Amazon EC2 behind Amazon CloudFront. It wants protection against common network and transport layer DDoS attacks, such as SYN floods, but it has no budget for a paid subscription or an additional security service. Which AWS service already provides this protection?",
    options: [
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Shield Advanced",
      "AWS Shield Standard"
    ],
    correct: [3],
    explanation: "AWS Shield Standard is automatically enabled for all AWS customers at no additional charge. It protects against the most common network and transport layer DDoS attacks, such as SYN floods, so the business is already protected without paying for anything extra.",
    optionExplanations: [
      "AWS WAF filters web requests with rules (for example against SQL injection) and is charged per web ACL and rule. It is not the free, automatic DDoS protection the business needs.",
      "Amazon GuardDuty is a paid threat-detection service that analyzes logs for malicious activity. It does not mitigate DDoS attacks.",
      "AWS Shield Advanced adds enhanced DDoS protection and access to the AWS Shield Response Team, but it is a paid subscription the business cannot afford.",
      "Correct — AWS Shield Standard is included automatically at no extra cost and protects against common network and transport layer DDoS attacks."
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
    question: "A company's security team uses Amazon GuardDuty, Amazon Inspector, and Amazon Macie in one AWS account. Analysts must check each service console separately. The team wants one place that collects and prioritizes all these findings and checks the account against security standards. Which AWS service should it use?",
    options: [
      "AWS Config",
      "AWS Security Hub",
      "Amazon Detective",
      "AWS Trusted Advisor"
    ],
    correct: [1],
    explanation: "AWS Security Hub aggregates, organizes, and prioritizes security findings from services such as GuardDuty, Inspector, and Macie, and from partner tools. It also runs automated checks against security standards and best practices, giving one view of the account's security posture.",
    optionExplanations: [
      "AWS Config records resource configurations and evaluates them against rules, but it does not aggregate findings from GuardDuty, Inspector, and Macie.",
      "Correct — Security Hub collects and prioritizes findings from these services in one place and runs security standard checks.",
      "Detective helps investigate the root cause of a specific finding; it is not a central dashboard for all findings and compliance checks.",
      "Trusted Advisor provides best-practice recommendations, but it does not collect findings from GuardDuty, Inspector, and Macie."
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
    question: "A software company hosts its product on AWS. A large customer sends a vendor risk questionnaire asking for independent audit reports, such as SOC 2 and ISO 27001, that cover the AWS data centers where its data is stored. Which AWS service lets the company download these reports on demand?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Artifact",
      "AWS Security Hub"
    ],
    correct: [2],
    explanation: "AWS Artifact is a self-service portal for AWS compliance documents, such as SOC reports, ISO certifications, and PCI DSS attestations, and for agreements with AWS. The company can download the reports and share them with its customer.",
    optionExplanations: [
      "AWS Config evaluates the company's own resource configurations. It does not provide third-party audit reports about AWS.",
      "Trusted Advisor gives best-practice recommendations for the company's account. It does not provide AWS audit reports.",
      "Correct — Artifact provides on-demand downloads of AWS audit reports such as SOC 2 and ISO certifications.",
      "Security Hub shows security findings and compliance checks for the company's own accounts. It does not provide AWS's audit reports."
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
      "Network ACLs",
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
      "IAM password policy with rotation",
      "Multi-Factor Authentication",
      "AWS Single Sign-On",
      "Federated identity with SAML 2.0"
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
    question: "A company with 2,000 employees manages their identities in its on-premises Microsoft Active Directory. It wants employees to sign in once with their existing corporate credentials and then access the AWS Management Console and AWS CLI across the company's many AWS accounts, without creating IAM users. Which AWS service should the company use?",
    options: [
      "Amazon Cognito user pools",
      "AWS IAM Identity Center",
      "AWS Directory Service",
      "AWS Organizations"
    ],
    correct: [1],
    explanation: "AWS IAM Identity Center (successor to AWS Single Sign-On) provides workforce single sign-on to multiple AWS accounts and applications. It can use Microsoft Active Directory as its identity source, so employees sign in with their corporate credentials and get console and CLI access without separate IAM users.",
    optionExplanations: [
      "Amazon Cognito user pools manage sign-up and sign-in for customers of web and mobile applications, not workforce access to the AWS Management Console and CLI.",
      "Correct — IAM Identity Center connects to the company's Active Directory and gives employees single sign-on access to the console and CLI across many AWS accounts.",
      "AWS Directory Service provides managed Active Directory or connectors to an existing one, but it does not by itself provide single sign-on and permission assignments across many AWS accounts.",
      "AWS Organizations centrally manages accounts and policies, but it does not sign employees in with their corporate credentials."
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
    question: "An online store's website went down last year when its HTTPS certificate expired unnoticed. The store's site runs behind an Application Load Balancer, and it wants free public certificates that are renewed automatically. Which AWS service should the store use?",
    options: [
      "AWS Key Management Service (KMS)",
      "AWS Certificate Manager (ACM)",
      "AWS Secrets Manager",
      "AWS CloudHSM"
    ],
    correct: [1],
    explanation: "AWS Certificate Manager (ACM) provisions, manages, and automatically renews public and private SSL/TLS certificates. It integrates with Elastic Load Balancing, Amazon CloudFront, and Amazon API Gateway, and public certificates used with these integrated services are provided at no additional charge.",
    optionExplanations: [
      "KMS creates and manages encryption keys; it does not issue or renew SSL/TLS certificates for websites.",
      "Correct — ACM issues public SSL/TLS certificates for the load balancer and renews them automatically, preventing expired-certificate outages.",
      "Secrets Manager stores and rotates secrets such as database passwords; it does not issue SSL/TLS certificates for HTTPS.",
      "CloudHSM provides dedicated hardware security modules for key storage; it does not issue or auto-renew website certificates."
    ]
  },
  {
    id: 43,
    domain: "Security & Compliance",
    type: "single",
    question: "An AWS account administrator wants to ensure that users in the Development group cannot launch EC2 instances larger than t3.medium. How can this be enforced?",
    options: [
      "Create a Service Control Policy (SCP) in AWS Organizations",
      "Attach an IAM policy to the group allowing only t3.medium or smaller",
      "Enable AWS Config rules to detect and report non-compliant instance types",
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
    question: "An online retailer was hit by a large DDoS attack during a sale. Its infrastructure scaled out to absorb the traffic, and the AWS bill rose sharply. The company wants 24/7 help from AWS DDoS experts during future attacks and protection against scaling charges caused by DDoS. Which AWS service should it use?",
    options: [
      "AWS Shield Standard",
      "AWS WAF",
      "AWS Shield Advanced",
      "Amazon GuardDuty"
    ],
    correct: [2],
    explanation: "AWS Shield Advanced is the paid tier of AWS Shield. It adds 24/7 access to the AWS Shield Response Team, detailed attack visibility, and cost protection for scaling charges that result from DDoS attacks.",
    optionExplanations: [
      "Shield Standard is automatic and free for all customers and protects against common network-layer attacks. It does not include access to the response team or cost protection.",
      "AWS WAF filters web requests with rules. It does not provide a DDoS response team or protection against scaling charges.",
      "Correct — Shield Advanced adds 24/7 access to AWS DDoS experts and cost protection for DDoS-related scaling.",
      "GuardDuty detects threats by analyzing logs. It is not a DDoS mitigation service and offers no cost protection."
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
    question: "A concert ticketing website runs on Amazon EC2. Traffic is low most of the week but jumps sharply when popular tickets go on sale. The company wants the number of instances to grow and shrink automatically with demand. Which AWS service should it use?",
    options: [
      "Elastic Load Balancing",
      "AWS Auto Scaling",
      "Amazon CloudWatch",
      "Amazon EC2 Fleet"
    ],
    correct: [1],
    explanation: "AWS Auto Scaling (through Amazon EC2 Auto Scaling) adds instances when demand rises and removes them when it falls, based on metrics, schedules, or predictive scaling. This keeps performance steady during ticket sales and avoids paying for idle instances the rest of the week.",
    optionExplanations: [
      "Elastic Load Balancing spreads traffic across existing instances, but it does not add or remove instances.",
      "Correct — Auto Scaling automatically adjusts the number of EC2 instances to match changing demand.",
      "CloudWatch provides the metrics and alarms that can trigger scaling, but it does not launch or terminate instances itself.",
      "EC2 Fleet launches a group of instances to reach a target capacity you specify; it does not by itself follow changing demand."
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
    question: "A company stores disaster recovery backups in Amazon S3. The backups are read about once a month for testing, but when a restore is needed, the data must be available immediately. The data must also survive the loss of an Availability Zone. Which S3 storage class is the MOST cost-effective for these requirements?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Flexible Retrieval",
      "S3 One Zone-IA"
    ],
    correct: [1],
    explanation: "S3 Standard-IA is designed for data that is accessed infrequently but needs millisecond access when requested. It costs less to store than S3 Standard (with a per-GB retrieval charge) and stores data across multiple Availability Zones.",
    optionExplanations: [
      "S3 Standard meets the access and durability needs, but it costs more to store than Standard-IA for data that is rarely read.",
      "Correct — Standard-IA gives immediate access, stores data in multiple AZs, and is cheaper than Standard for infrequently accessed data.",
      "Glacier Flexible Retrieval takes minutes to hours to retrieve data, which fails the immediate restore requirement.",
      "One Zone-IA stores data in a single Availability Zone, so the backups would be lost if that AZ were destroyed."
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
    question: "An online store runs its order database on Amazon RDS for MySQL in a single Availability Zone. The company wants the database to keep running if that Availability Zone fails, with automatic failover and no manual steps. Which RDS feature should the company enable?",
    options: [
      "Read replicas",
      "Multi-AZ deployment",
      "Aurora Global Database",
      "Automated database snapshots"
    ],
    correct: [1],
    explanation: "An RDS Multi-AZ deployment keeps a synchronous standby copy of the database in a different Availability Zone. If the primary database or its Availability Zone fails, Amazon RDS automatically fails over to the standby, with no manual steps.",
    optionExplanations: [
      "Read replicas are mainly used to scale read traffic. They replicate asynchronously and are not the RDS feature that provides automatic failover for high availability.",
      "Correct — Multi-AZ maintains a standby in another Availability Zone and fails over to it automatically if the primary fails.",
      "Aurora Global Database is a feature of Amazon Aurora for cross-Region replication. The company uses RDS for MySQL and needs protection against an Availability Zone failure.",
      "Snapshots are backups that must be restored manually to a new database instance, which involves downtime and manual steps."
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
    question: "A news website hosts its images and videos in a single AWS Region in Europe. Readers in Asia and South America complain that pages load slowly. The company wants to serve this content from locations close to readers without moving its origin servers. Which AWS service should it use?",
    options: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Elastic Load Balancing"
    ],
    correct: [2],
    explanation: "Amazon CloudFront is a content delivery network (CDN) that caches content at edge locations around the world. Readers are served from a nearby edge location, which lowers latency while the origin stays in the original Region.",
    optionExplanations: [
      "Route 53 is a DNS service; it directs users to endpoints but does not cache content close to readers.",
      "Direct Connect is a private network link between a company's data center and AWS; it does not speed up delivery to readers on the internet.",
      "Correct — CloudFront caches the images and videos at edge locations near readers, reducing load times worldwide.",
      "Elastic Load Balancing distributes traffic across targets within a Region; it does not cache content near distant users."
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
      "AWS CodeDeploy",
      "AWS CloudFormation",
      "AWS Systems Manager"
    ],
    correct: [2],
    explanation: "AWS CloudFormation is an Infrastructure as Code (IaC) service that lets you model, provision, and manage AWS resources using JSON or YAML templates. CloudFormation stacks ensure consistent, repeatable infrastructure deployments and allow version control of infrastructure.",
    optionExplanations: [
      "AWS Elastic Beanstalk deploys application code and manages the surrounding infrastructure — it is not an IaC tool for defining infrastructure as templates.",
      "AWS CodeDeploy automates the deployment of application code to compute targets — it does not define or provision infrastructure from templates.",
      "Correct — AWS CloudFormation uses JSON/YAML templates to define, provision, and manage entire AWS infrastructure stacks repeatably and consistently.",
      "AWS Systems Manager handles operational management (patching, inventory, run commands) — it is not an IaC service for defining and deploying infrastructure through templates."
    ]
  },
  {
    id: 63,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A small company with one AWS account wants a single service that inspects the account and recommends improvements: idle resources that waste money, security groups with open ports, and services that are close to their quotas. Which AWS service should the company use?",
    options: [
      "AWS Config",
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "AWS Security Hub"
    ],
    correct: [2],
    explanation: "AWS Trusted Advisor inspects the AWS environment and gives recommendations in categories such as cost optimization, performance, security, fault tolerance, and service limits (quotas). The number of checks available depends on the support plan.",
    optionExplanations: [
      "AWS Config evaluates resource configurations against rules the company defines. It does not recommend cost savings or warn about service quotas.",
      "CloudWatch collects metrics and logs and raises alarms. It does not give best-practice recommendations across cost, security, and quotas.",
      "Correct — Trusted Advisor checks the account and recommends improvements for cost, security, quotas, and more.",
      "Security Hub focuses on security findings and security standards. It does not identify cost savings or quota issues."
    ]
  },
  {
    id: 64,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows customers to migrate on-premises databases to AWS with minimal downtime and supports migrations between different database engines (e.g., Oracle to Amazon Aurora)?",
    options: [
      "AWS Snowball",
      "AWS Application Migration Service",
      "AWS Database Migration Service (DMS)",
      "AWS Schema Conversion Tool (SCT)"
    ],
    correct: [2],
    explanation: "AWS DMS (Database Migration Service) helps migrate databases to AWS quickly and securely. It supports homogeneous (e.g., MySQL to RDS MySQL) and heterogeneous (e.g., Oracle to Aurora) migrations. The source database remains operational during migration, minimizing downtime.",
    optionExplanations: [
      "AWS Snowball is used for physically transferring large amounts of data to AWS — it does not support live database migrations or cross-engine schema conversion.",
      "AWS Application Migration Service rehosts entire servers on Amazon EC2; it is not designed for database migrations between different engines.",
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
    question: "A company's website must send requests for /api to one group of servers, requests for /images to a second group, and requests for the hostname shop.example.com to a third group. Which type of Elastic Load Balancer should the company use?",
    options: [
      "Classic Load Balancer",
      "Network Load Balancer",
      "Application Load Balancer",
      "Gateway Load Balancer"
    ],
    correct: [2],
    explanation: "An Application Load Balancer operates at the application layer (Layer 7) and can route HTTP and HTTPS requests to different target groups based on the URL path, hostname, headers, and more. This content-based routing is exactly what the website needs.",
    optionExplanations: [
      "The Classic Load Balancer is a previous-generation load balancer that does not support routing to different target groups based on path or hostname.",
      "A Network Load Balancer works at the transport layer (Layer 4) with TCP and UDP. It cannot inspect URL paths or hostnames to route requests.",
      "Correct — An Application Load Balancer supports path-based and host-based routing of HTTP and HTTPS requests to different target groups.",
      "A Gateway Load Balancer is used to deploy and scale third-party virtual appliances such as firewalls, not to route web requests by path or hostname."
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
      "Amazon EC2 instances",
      "AWS Lambda",
      "Amazon Lightsail",
      "AWS Fargate containers"
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
    question: "A photo-sharing app's upload service receives sudden bursts of images that the image-processing workers cannot handle all at once. The company wants uploads to be stored as jobs that workers pull and process at their own pace, so no job is lost during spikes. Which AWS service should it use?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon MQ",
      "Amazon EventBridge"
    ],
    correct: [1],
    explanation: "Amazon SQS is a fully managed message queuing service. The upload service puts a message in the queue for each image, and workers poll the queue and process messages independently. Messages are stored until processed, which decouples the components and absorbs traffic spikes.",
    optionExplanations: [
      "SNS pushes messages to subscribers immediately (publish/subscribe); it does not hold jobs in a queue for workers to pull at their own pace.",
      "Correct — SQS stores each job in a queue so workers can pull and process them at their own pace without losing work during spikes.",
      "Amazon MQ is a managed message broker mainly for migrating applications that already use protocols such as JMS or AMQP; a new app with a simple queue need fits SQS better.",
      "EventBridge routes events to targets based on rules; it is not designed as a work queue that workers pull jobs from."
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
    question: "A company's on-premises file servers are running out of disk space. The company wants its local applications to keep using standard file shares, while the data is stored in Amazon S3 and frequently used files are cached locally for fast access. Which AWS service should the company use?",
    options: [
      "AWS DataSync",
      "AWS Storage Gateway",
      "Amazon S3 Transfer Acceleration",
      "AWS Snowball Edge"
    ],
    correct: [1],
    explanation: "AWS Storage Gateway is a hybrid storage service that gives on-premises applications access to cloud storage. With S3 File Gateway, applications use NFS or SMB file shares, the data is stored in S3, and recently used data is cached locally.",
    optionExplanations: [
      "DataSync moves or copies data between on-premises storage and AWS, for example in a migration. It does not provide ongoing local file shares backed by S3.",
      "Correct — Storage Gateway lets local applications keep using file shares while data is stored in S3 with a local cache.",
      "Transfer Acceleration speeds up uploads to S3 over long distances. It does not give on-premises applications a file share backed by S3.",
      "Snowball Edge is a physical device for moving large amounts of data or for edge computing. It is not a permanent extension of on-premises storage into S3."
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
    question: "A company's finance team wants to see how AWS spending has changed over the past several months, break it down by service and by cost allocation tag, spot trends, and view a forecast for the coming months — all in a graphical interface. Which AWS tool should it use?",
    options: [
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "AWS Cost Explorer",
      "AWS Pricing Calculator"
    ],
    correct: [2],
    explanation: "AWS Cost Explorer is an interactive tool for visualizing and analyzing AWS costs and usage over time. Users can filter and group by service, Region, account, or tag, build custom reports, and see cost forecasts.",
    optionExplanations: [
      "Budgets sends alerts when costs or usage cross thresholds you define; it is not the main tool for exploring historical spending trends.",
      "The Cost and Usage Report delivers very detailed raw billing data to Amazon S3; analyzing it requires other tools, so it is not a ready-made graphical interface.",
      "Correct — Cost Explorer shows historical spending in charts, filters it by service or tag, and provides forecasts.",
      "Pricing Calculator estimates the cost of planned workloads; it does not analyze costs the company has already incurred."
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
    question: "A global manufacturer runs business-critical workloads on AWS across several business units. It wants 24/7 technical support plus a designated Technical Account Manager (TAM) who knows its environment and gives proactive guidance. It does not need dedicated incident management engineers or domain specialist engineers. Which AWS Support plan is the BEST fit?",
    options: [
      "AWS Business Support+",
      "AWS Enterprise Support",
      "AWS Unified Operations",
      "Basic Support"
    ],
    correct: [1],
    explanation: "AWS Enterprise Support is aimed at business-critical workloads across organizations that want expert guidance, and it includes a designated Technical Account Manager. Business Support+ provides 24/7 technical support without a TAM, while Unified Operations adds incident management and domain specialist engineers for mission-critical workloads.",
    optionExplanations: [
      "Business Support+ is the minimum recommended plan for production workloads and offers 24/7 technical support, but it does not include a designated TAM.",
      "Correct — Enterprise Support is designed for business-critical workloads across organizations and includes a designated TAM who gives proactive guidance.",
      "Unified Operations adds designated domain specialist engineers and incident management engineers for mission-critical workloads, which the company says it does not need.",
      "Basic Support includes customer service, documentation, and AWS re:Post, but no technical support engineers and no TAM."
    ]
  },
  {
    id: 81,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company's operations team uses its own incident management system. Instead of having staff check a console, it wants the system to automatically retrieve information about AWS scheduled maintenance and service issues that affect the company's resources. What should the company use?",
    options: [
      "AWS Health API",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "AWS Config"
    ],
    correct: [0],
    explanation: "AWS Health provides a personalized view of events, such as scheduled maintenance and service issues, that affect the resources in an account. The AWS Health Dashboard shows these events in the console, and the AWS Health API lets tools and systems retrieve them programmatically.",
    optionExplanations: [
      "Correct — the AWS Health API gives programmatic access to the same personalized events shown in the AWS Health Dashboard.",
      "CloudTrail records the API calls made in the account for auditing. It does not report AWS service issues or scheduled maintenance.",
      "Trusted Advisor checks the account against best practices for cost, security, and quotas. It does not report AWS service events.",
      "AWS Config records and evaluates resource configurations. It does not provide information about AWS maintenance or service issues."
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
    question: "A holding company has acquired two startups, and each company has its own AWS account and separate monthly bill. The finance team wants one bill for all three accounts, and wants their combined usage to count toward volume pricing tiers and to share Reserved Instance discounts. Which AWS Organizations feature should the company use?",
    options: [
      "Service control policies (SCPs)",
      "Consolidated billing",
      "AWS Budgets",
      "AWS Cost Explorer"
    ],
    correct: [1],
    explanation: "Consolidated billing in AWS Organizations combines the charges of all member accounts into a single bill paid by the management account. Usage is aggregated across accounts for volume pricing tiers, and Reserved Instance and Savings Plans discounts can be shared across the accounts.",
    optionExplanations: [
      "SCPs set the maximum permissions for accounts in an organization. They have nothing to do with combining bills or sharing discounts.",
      "Correct — Consolidated billing gives one bill for all accounts, aggregates usage for volume pricing, and shares Reserved Instance discounts across accounts.",
      "AWS Budgets sends alerts when costs or usage exceed thresholds. It does not combine bills or aggregate usage for discounts.",
      "AWS Cost Explorer visualizes and analyzes costs. It does not merge bills or make accounts share volume pricing and discounts."
    ]
  },
  {
    id: 84,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A student is creating a new AWS account to learn cloud skills. She wants to use the credits that AWS offers to new customers, and she must be certain that the account cannot generate any charges. Which option should she choose when she signs up?",
    options: [
      "The Paid account plan",
      "The Free account plan",
      "The Basic Support plan",
      "A No Upfront Savings Plan"
    ],
    correct: [1],
    explanation: "New AWS customers choose between a Free plan and a Paid plan. The Free plan provides credits that can be used for up to six months and incurs no charges; the account closes when that period ends or the credits run out unless it is upgraded to the Paid plan. Always free offers are available on both plans.",
    optionExplanations: [
      "The Paid plan lets the account use AWS beyond the free offers and be charged for that usage, so it does not guarantee zero charges.",
      "Correct — the Free plan gives new customers credits to explore AWS and does not charge the account.",
      "Basic Support is the support plan included with every account. It does not determine whether the account can incur charges for AWS usage.",
      "A Savings Plan is a commitment to a consistent amount of usage in exchange for lower prices. It creates charges rather than preventing them."
    ]
  },
  {
    id: 85,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company has several AWS accounts in one AWS Organizations organization with consolidated billing. One account bought Reserved Instances, but at night its instances are stopped while another account runs matching instances. What happens to the unused Reserved Instance discount?",
    options: [
      "It is lost for those hours",
      "It can apply to the other account",
      "It is refunded as AWS credits",
      "It moves to the next billing month"
    ],
    correct: [1],
    explanation: "With consolidated billing, Reserved Instance and Savings Plans discounts are shared across the accounts in the organization by default, so unused discounts in one account can apply to matching usage in another account. Discount sharing can be turned off if needed.",
    optionExplanations: [
      "Discounts are not simply lost while other accounts in the organization have matching usage, because sharing is enabled by default.",
      "Correct — consolidated billing shares Reserved Instance and Savings Plans discounts across the organization's accounts by default.",
      "AWS does not refund unused Reserved Instance hours as credits.",
      "Unused Reserved Instance hours do not roll over to a later billing period."
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 1: Cloud Concepts  (additional questions 86-113)
  // ────────────────────────────────────────────────────────────────
  {
    id: 86,
    domain: "Cloud Concepts",
    type: "single",
    question: "A retail company has set a corporate goal to reduce the carbon footprint of its IT operations. Its architects want guidance on maximizing resource utilization and reducing the energy and resources their AWS workloads consume. Which pillar of the AWS Well-Architected Framework should they focus on?",
    options: [
      "Cost Optimization",
      "Operational Excellence",
      "Sustainability",
      "Performance Efficiency"
    ],
    correct: [2],
    explanation: "The Sustainability pillar focuses on minimizing the environmental impact of running cloud workloads. Its practices include understanding your impact, setting sustainability goals, maximizing utilization, and using more efficient hardware and managed services — exactly what the company's carbon-reduction goal needs.",
    optionExplanations: [
      "Cost Optimization can reduce waste as a side effect, but its goal is lowering spending, not reducing environmental impact.",
      "Operational Excellence is about running, monitoring, and improving operations. It does not address the company's carbon-footprint goal.",
      "Correct — Sustainability is the pillar dedicated to reducing the environmental impact of cloud workloads, including maximizing utilization and reducing consumed resources.",
      "Performance Efficiency is about using resources efficiently to meet performance requirements, not about environmental goals."
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
    question: "A hospital must keep patient records and the systems that process them inside its own building. Its IT team wants to run Amazon EC2 and Amazon EBS on premises and manage them with the same AWS APIs, tools, and console it uses in the cloud. Which AWS service should the hospital use?",
    options: [
      "AWS Local Zones",
      "AWS Wavelength",
      "AWS Outposts",
      "AWS Snow Family"
    ],
    correct: [2],
    explanation: "AWS Outposts is a fully managed service that installs AWS-designed infrastructure in the customer's own facility. It runs AWS services such as EC2 and EBS locally with the same APIs, tools, and console as the AWS Cloud, so the hospital's data and processing stay in its building.",
    optionExplanations: [
      "Local Zones place AWS infrastructure in AWS-operated sites near large cities, not inside the hospital's own building.",
      "Wavelength embeds AWS compute in telecom providers' 5G networks for mobile applications, not in the customer's facility.",
      "Correct — Outposts brings AWS infrastructure, services, APIs, and tools into the hospital's own facility, so data and processing stay on premises.",
      "Snow Family devices are mainly for moving data and for edge computing in rugged or disconnected locations, not for running a permanent on-premises extension of AWS."
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
      "Scalability refers to automatic resource adjustment; elasticity refers to manual resource adjustment",
      "Scalability adds capacity for growth; elasticity automatically scales up and down with demand",
      "Scalability is a benefit of the cloud; elasticity is a benefit of on-premises data centers",
      "They are synonymous terms that are used interchangeably when describing cloud computing"
    ],
    correct: [1],
    explanation: "Scalability is the ability to handle increased load by adding resources. Elasticity extends this by also automatically scaling DOWN when demand decreases, so you pay only for what you use at any given time. Elasticity is dynamic and bidirectional.",
    optionExplanations: [
      "Scalability does not refer to automatic adjustment — it can be manual or automated. And elasticity is not limited to manual adjustment; it specifically implies automatic bidirectional scaling.",
      "Correct — Scalability adds capacity to handle growth; elasticity extends this by automatically scaling both up AND down based on actual demand.",
      "Both scalability and elasticity are cloud benefits — the claim that one is on-premises and one is cloud is incorrect.",
      "They are NOT synonymous — scalability focuses on growing capacity, while elasticity adds the ability to automatically scale down when demand decreases."
    ]
  },
  {
    id: 94,
    domain: "Cloud Concepts",
    type: "single",
    question: "A retail company's executives are starting a cloud adoption program. They want to make sure the move to AWS supports the company's strategy: launching new digital products, finding new revenue from data, and building a clear business case for the investment. Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on these goals?",
    options: [
      "People perspective",
      "Business perspective",
      "Platform perspective",
      "Operations perspective"
    ],
    correct: [1],
    explanation: "The Business perspective of the AWS CAF helps make sure cloud investments accelerate business outcomes. Its capabilities include strategy management, product management, innovation, and data monetization, which match the executives' goals.",
    optionExplanations: [
      "The People perspective deals with culture, organizational structure, leadership, and staff skills during the transformation, not with strategy and the business case.",
      "Correct — The Business perspective aligns cloud adoption with business strategy and outcomes such as new products and new revenue.",
      "The Platform perspective covers designing and building the technical cloud environment and architecture, not business strategy.",
      "The Operations perspective focuses on running and supporting cloud workloads to agreed service levels, not on the business case."
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
    question: "A company is moving an on-premises web application to Amazon EC2. During the move, it will replace its self-managed MySQL database with Amazon RDS to reduce administration work, but it will not redesign the application's architecture or rewrite its code. Which migration strategy is the company using?",
    options: [
      "Rehost (lift and shift)",
      "Replatform",
      "Refactor (re-architect)",
      "Retire"
    ],
    correct: [1],
    explanation: "Replatforming ('lift, tinker, and shift') moves an application with a few cloud optimizations — such as switching from a self-managed database to Amazon RDS — without changing its core architecture. The company gains some managed-service benefits without a full redesign.",
    optionExplanations: [
      "Rehosting moves the application as-is with no changes. Switching the database to Amazon RDS is an optimization, so this is more than a pure lift and shift.",
      "Correct — Replatforming keeps the core architecture but makes targeted optimizations, such as moving the database to Amazon RDS.",
      "Refactoring means redesigning the application with cloud-native features such as microservices or serverless. The company explicitly is not redesigning the architecture.",
      "Retiring means decommissioning an application that is no longer needed. The company is migrating the application, not shutting it down."
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
      "Refactor"
    ],
    correct: [3],
    explanation: "Refactoring (re-architecting) involves reimagining how an application is designed using cloud-native features. It is the most complex strategy but offers the greatest long-term benefits in agility, performance, and scalability.",
    optionExplanations: [
      "Rehost migrates without any code or architecture changes — it does not redesign the application with cloud-native patterns.",
      "Replatform makes minor optimizations to the existing architecture — it does not completely redesign the application using microservices or serverless.",
      "Repurchase replaces an application with a SaaS product — it does not involve rebuilding an existing application using cloud-native services.",
      "Correct — Refactor (re-architect) completely reimagines the application design using cloud-native features like microservices, serverless, and managed services for maximum long-term benefit."
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
    question: "An online retailer needs a disaster recovery plan in a second AWS Region. To control costs, it wants to keep only its core database continuously replicated and running there, and start the application servers only when a disaster occurs. Which disaster recovery strategy does this describe?",
    options: [
      "Backup and restore",
      "Pilot light",
      "Warm standby",
      "Multi-site active/active"
    ],
    correct: [1],
    explanation: "In the pilot light strategy, only the most critical core components (such as a replicated database) are always running in the recovery Region. The rest of the environment is started and scaled up during a disaster. It recovers faster than backup and restore and costs less than warm standby.",
    optionExplanations: [
      "Backup and restore keeps no systems running in the recovery Region; everything is rebuilt from backups, which is slower than keeping the database live.",
      "Correct — keeping only the core database running and starting application servers during a disaster is the pilot light strategy.",
      "Warm standby keeps a scaled-down but fully functional copy of the whole environment running, including application servers, which the retailer wants to avoid.",
      "Multi-site active/active runs full production in both Regions at all times, which is the most expensive option and not what the retailer described."
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
      "Components interact via well-defined interfaces and can operate independently",
      "Tightly binding application layers together to reduce network latency",
      "Using a single shared database to store all application state"
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
    question: "A company's operations team applies configuration changes and patches by hand in the AWS Management Console. The results differ from one environment to another, and mistakes cause outages. The team wants every change made through code so that it can be repeated the same way every time. Which design principle should the team adopt?",
    options: [
      "Elasticity",
      "Automation",
      "Loose coupling",
      "Think parallel"
    ],
    correct: [1],
    explanation: "Automation means replacing manual steps with code, using tools such as AWS CloudFormation and AWS Systems Manager. Changes become repeatable and consistent, and human error is reduced, which is exactly the team's problem.",
    optionExplanations: [
      "Elasticity is about adding and removing resources as demand changes. It does not address inconsistent manual changes.",
      "Correct — Automating changes through code removes manual errors and makes every change repeatable.",
      "Loose coupling reduces dependencies between components so that one failure does not spread. It does not replace manual console work.",
      "Thinking parallel means splitting work so it runs concurrently across many resources. It is not about making changes repeatable."
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
      "Serverless services are always cheaper than running EC2 instances",
      "Serverless removes server management so teams can focus on code",
      "Serverless guarantees 100% uptime for every application",
      "Serverless services automatically encrypt all stored data"
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
    question: "An online ticketing company runs its web tier on one large server. During popular ticket sales the server becomes overloaded, and the company does not want a single server to remain a single point of failure. It plans to run several identical servers behind a load balancer and add more of them as traffic grows. Which scaling approach is the company adopting?",
    options: [
      "Vertical scaling (scaling up)",
      "Horizontal scaling (scaling out)",
      "Over-provisioning for peak load",
      "Moving to a smaller instance type"
    ],
    correct: [1],
    explanation: "Horizontal scaling (scaling out) adds more instances of the same type to share the load. It removes the single point of failure and avoids the size limit of one machine, which is why cloud architectures generally favor it.",
    optionExplanations: [
      "Vertical scaling makes a single server bigger. The company would still depend on one server, which it wants to avoid.",
      "Correct — Adding more identical servers behind a load balancer is horizontal scaling, which spreads load and removes the single point of failure.",
      "Over-provisioning means buying capacity for the highest expected peak in advance. The company instead wants to add servers as traffic grows.",
      "Moving to a smaller instance would reduce capacity, which would make the overload during ticket sales worse."
    ]
  },
  {
    id: 109,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which AWS service helps organizations plan cloud migrations using a structured framework of six perspectives — Business, People, Governance, Platform, Security, and Operations?",
    options: [
      "AWS Well-Architected Tool",
      "AWS Control Tower",
      "AWS Cloud Adoption Framework",
      "AWS Professional Services consultants"
    ],
    correct: [2],
    explanation: "The AWS Cloud Adoption Framework (CAF) organizes guidance into six perspectives covering responsibilities for different stakeholder groups. It helps organizations develop a comprehensive cloud adoption plan aligned to their business goals and readiness.",
    optionExplanations: [
      "The AWS Well-Architected Tool reviews existing workload architectures against best practices across six pillars — it does not provide a migration planning framework with organizational perspectives.",
      "AWS Control Tower sets up and governs a multi-account AWS environment — it does not provide organizational guidance or a structured adoption framework.",
      "Correct — The AWS CAF organizes cloud adoption guidance into six perspectives (Business, People, Governance, Platform, Security, Operations) to help plan a comprehensive cloud adoption strategy.",
      "AWS Professional Services is a direct AWS consulting team — it is not a framework or tool that organizations use independently for self-guided cloud adoption planning."
    ]
  },
  {
    id: 110,
    domain: "Cloud Concepts",
    type: "single",
    question: "A law firm is moving decades of signed contracts into cloud storage. Partners say they can wait a little to open an old file, but losing or corrupting any document is unacceptable. Which storage characteristic matters MOST to the firm?",
    options: [
      "Low latency when reading and writing data",
      "Automatic scaling of storage capacity",
      "Durability, so stored data is never lost or corrupted",
      "Availability, so storage stays reachable during failures"
    ],
    correct: [2],
    explanation: "Durability is the likelihood that stored data will not be lost or corrupted over time. The firm accepts slower access but cannot accept data loss, so durability is the characteristic it cares about most. Amazon S3, for example, is designed for very high durability by storing data redundantly across multiple devices and facilities.",
    optionExplanations: [
      "Partners said they can wait to open old files, so fast, low-latency access is not the priority.",
      "The firm's concern is keeping every document intact, not how storage capacity grows.",
      "Correct — the firm's top requirement is that no document is ever lost or corrupted, which is durability.",
      "Availability is about being able to reach data when needed. The firm accepts some delay in access; its concern is not losing data."
    ]
  },
  {
    id: 111,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to enforce a governance guardrail ensuring no AWS account in its organization can disable AWS CloudTrail. Which tool BEST enforces this control?",
    options: [
      "IAM permission boundaries",
      "AWS Config rules to detect changes",
      "SCPs in AWS Organizations",
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
      "Think parallel to run tasks concurrently",
      "Implement elasticity to match demand",
      "Treat resources as disposable",
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
    question: "After an outage, a company's operations team needs to see exactly how a security group's rules looked last week and how they have changed since then. The team also wants to be notified whenever a resource drifts from the company's required settings. Which AWS service should the team use?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon Inspector",
      "AWS Security Hub"
    ],
    correct: [1],
    explanation: "AWS Config keeps an inventory of AWS resources, records how their configurations change over time, and evaluates them against rules. The team can view the security group's configuration history at any point in time and be notified when resources become non-compliant.",
    optionExplanations: [
      "AWS CloudTrail records API calls — who made a change and when — but it does not provide a point-in-time view of a resource's configuration or evaluate it against required settings.",
      "Correct — AWS Config records configuration history for resources such as security groups and evaluates them against rules, flagging any drift from required settings.",
      "Amazon Inspector scans workloads for software vulnerabilities and network exposure. It does not keep a configuration history of resources.",
      "AWS Security Hub aggregates security findings and runs best-practice checks, but it does not show how a resource's configuration looked at a past point in time."
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
    question: "A government agency's regulations require that its encryption keys be stored on dedicated, single-tenant hardware that only the agency controls, with AWS having no access to the keys. Which AWS service meets this requirement?",
    options: [
      "AWS Key Management Service (KMS)",
      "AWS Certificate Manager (ACM)",
      "AWS CloudHSM",
      "AWS Secrets Manager"
    ],
    correct: [2],
    explanation: "AWS CloudHSM provides dedicated hardware security modules (HSMs) in the AWS Cloud. The customer has exclusive control of the HSMs and manages its own keys and users, which meets requirements for single-tenant, customer-controlled hardware.",
    optionExplanations: [
      "KMS keys are stored in HSMs that AWS operates and that are shared across customers, so it does not give the agency dedicated hardware under its exclusive control.",
      "ACM issues and renews SSL/TLS certificates; it does not provide dedicated hardware for storing the agency's keys.",
      "Correct — CloudHSM gives the agency dedicated, single-tenant HSMs where it alone manages its keys.",
      "Secrets Manager stores secrets such as passwords and API keys; it does not provide dedicated key-storage hardware."
    ]
  },
  {
    id: 121,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to ensure that all S3 buckets in their AWS account can never be made publicly accessible, regardless of individual bucket policies or object ACLs. Which feature should they enable?",
    options: [
      "S3 Server-Side Encryption with KMS keys",
      "S3 Object Lock",
      "S3 Block Public Access at the account level",
      "AWS Config rule that detects public S3 buckets"
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
    question: "A healthcare company has a mobile app that sends patient information to an API hosted on AWS. To meet a regulatory requirement, the company configures the app and the API so that every connection uses HTTPS (TLS). Which type of protection does this provide?",
    options: [
      "Encryption at rest",
      "Encryption in transit",
      "Client-side encryption",
      "Envelope encryption"
    ],
    correct: [1],
    explanation: "HTTPS uses TLS to encrypt data while it travels over the network between the app and the API. This is encryption in transit. It protects the data from being read or changed while it moves.",
    optionExplanations: [
      "Encryption at rest protects stored data, such as data on EBS volumes or in S3. HTTPS protects data while it moves, not where it is stored.",
      "Correct — TLS/HTTPS encrypts data while it moves between the app and the API, which is encryption in transit.",
      "Client-side encryption means the app encrypts the data itself before sending it. Enabling HTTPS on the connection does not do this.",
      "Envelope encryption is a key management technique in which data keys are encrypted with a master key. It does not describe securing a network connection."
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
      "Amazon RDS for MySQL",
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
    question: "A company is expanding from one AWS account to dozens of accounts for different teams. It wants a quick, automated way to set up a secure multi-account environment that follows AWS best practices, with preconfigured guardrails and a standard process for creating new accounts. Which AWS service BEST meets these requirements?",
    options: [
      "SCPs in AWS Organizations",
      "AWS Control Tower",
      "AWS Config aggregators",
      "AWS Security Hub"
    ],
    correct: [1],
    explanation: "AWS Control Tower automates the setup of a well-architected multi-account environment (a landing zone). It applies preconfigured preventive and detective controls (guardrails) and provides Account Factory to provision new accounts in a standard way, with a dashboard to monitor compliance.",
    optionExplanations: [
      "SCPs are one building block for guardrails, but the company would have to design and build the whole multi-account environment and account provisioning process itself.",
      "Correct — AWS Control Tower sets up a best-practice landing zone automatically, applies preconfigured guardrails, and standardizes new account creation.",
      "AWS Config aggregators collect configuration and compliance data from many accounts, but they do not set up the environment or provision accounts.",
      "AWS Security Hub aggregates security findings across accounts, but it does not create a landing zone or provision new accounts."
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
    question: "An operations team wants to be told in near real time when AWS schedules maintenance on its EC2 instances or when an AWS service issue affects resources in its own account, along with guidance on what to do. Which AWS service provides this?",
    options: [
      "Amazon CloudWatch alarms",
      "AWS Health Dashboard",
      "AWS Config",
      "Amazon EventBridge"
    ],
    correct: [1],
    explanation: "The AWS Health Dashboard shows AWS events that may affect your specific account and resources, such as scheduled maintenance or service issues, together with remediation guidance. It provides a personalized view rather than only the general status of AWS services.",
    optionExplanations: [
      "CloudWatch alarms watch metrics against thresholds you define; they do not report AWS scheduled maintenance or AWS service issues.",
      "Correct — the AWS Health Dashboard notifies the team about AWS events affecting its own resources and gives remediation guidance.",
      "AWS Config tracks configuration changes of resources; it does not report AWS maintenance or service disruptions.",
      "EventBridge can route AWS Health events to targets, but it is an event bus, not the service that provides the account-specific health information and guidance."
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
      "Customers may test certain services on their own resources without prior approval",
      "Customers must always obtain written permission from AWS before any security testing",
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
    question: "A company's security team already uses a specific vendor's endpoint protection product on premises. It wants to deploy the same vendor's product in its AWS accounts, choosing from curated listings it can subscribe to quickly, with the charges added to its AWS bill. Where should the team find the product?",
    options: [
      "AWS Security Hub",
      "AWS Marketplace",
      "AWS Artifact",
      "AWS Firewall Manager"
    ],
    correct: [1],
    explanation: "AWS Marketplace is a curated digital catalog where customers find, buy, and deploy third-party software, including many security products such as endpoint protection, firewalls, and vulnerability scanners. Charges appear on the AWS bill, and products can be deployed directly into AWS accounts.",
    optionExplanations: [
      "Security Hub collects and prioritizes findings, including findings from partner tools, but it does not sell or deploy third-party products.",
      "Correct — AWS Marketplace offers third-party security software that customers can find, subscribe to, and deploy, with charges on their AWS bill.",
      "AWS Artifact provides AWS compliance reports and agreements. It does not offer third-party security products.",
      "Firewall Manager centrally manages firewall rules, such as AWS WAF rules, across accounts. It is not a catalog of third-party security software."
    ]
  },
  {
    id: 135,
    domain: "Security & Compliance",
    type: "single",
    question: "A company wants to ensure that all EC2 instances across every AWS account in their organization are automatically patched and compliant with their patching policy. Which AWS service enables this?",
    options: [
      "Amazon Inspector vulnerability scans",
      "Systems Manager Patch Manager",
      "AWS Config managed rules",
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
      "To capture IP traffic information for network interfaces in a VPC",
      "To log all API calls made by users and services within the AWS account",
      "To monitor database query performance and slow queries"
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
      "AWS Trusted Advisor security checks"
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
      "Network reachability issues for EC2 instances only",
      "Software CVEs and network reachability for EC2 and containers",
      "IAM policy misconfigurations and S3 bucket public access settings",
      "DDoS attacks and SQL injection attempts against web apps"
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
    question: "A company must inspect all traffic entering and leaving its Amazon VPCs, including traffic that does not use HTTP. It needs stateful filtering rules and intrusion prevention applied at the VPC level by using a managed AWS service. Which service should the company use?",
    options: [
      "AWS WAF",
      "AWS Shield Advanced",
      "AWS Network Firewall",
      "Security groups and network ACLs"
    ],
    correct: [2],
    explanation: "AWS Network Firewall is a managed firewall and intrusion prevention service deployed at the VPC level. It supports stateful and stateless rules, intrusion prevention, and domain filtering for traffic of any protocol entering and leaving the VPC.",
    optionExplanations: [
      "AWS WAF inspects only HTTP/HTTPS requests to resources such as CloudFront and Application Load Balancers. It cannot filter all VPC traffic, including non-HTTP protocols.",
      "AWS Shield Advanced provides enhanced DDoS protection. It does not provide stateful filtering rules or intrusion prevention for all VPC traffic.",
      "Correct — AWS Network Firewall provides managed stateful inspection and intrusion prevention for all traffic entering and leaving the VPC.",
      "Security groups and network ACLs filter traffic by IP address, port, and protocol, but they do not provide intrusion prevention or deep packet inspection."
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
    question: "A company is worried that one compromised employee account could deploy malicious changes to production. It decides that one person must approve each production deployment and a different person must run it. Which security principle is the company applying?",
    options: [
      "Multi-factor authentication (MFA)",
      "Separation of duties",
      "Principle of least privilege",
      "Access key rotation"
    ],
    correct: [1],
    explanation: "Separation of duties ensures no single person or role controls a critical process from end to end. Requiring one person to approve and another to execute a production deployment limits the damage a single compromised or malicious identity can cause.",
    optionExplanations: [
      "MFA makes it harder to steal a single account, but it does not require two different people to be involved in a deployment.",
      "Correct — splitting approval and execution between different people is separation of duties.",
      "Least privilege limits each identity to the permissions it needs, but it does not by itself require a second person to take part in high-privilege actions.",
      "Rotating access keys reduces the risk from leaked long-term keys; it does not involve multiple people in a deployment."
    ]
  },
  {
    id: 143,
    domain: "Security & Compliance",
    type: "single",
    question: "A company uses AWS Organizations and wants to ensure that no member account can disable AWS Security Hub, regardless of that account's administrator permissions. What should they use?",
    options: [
      "IAM policies attached in each member account",
      "An SCP applied to the organizational root or OU",
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
    question: "A security team found that an Amazon S3 bucket policy was changed last week. The team needs to find out which IAM identity made the change, when it happened, and from which IP address. It plans to enable AWS CloudTrail in every account. What does CloudTrail provide that meets this need?",
    options: [
      "Monitoring of performance metrics such as CPU and memory",
      "A record of API calls showing who did what, and when",
      "Machine learning detection of malicious activity in the account",
      "Continuous evaluation of resource settings against compliance rules"
    ],
    correct: [1],
    explanation: "AWS CloudTrail records API calls made in the account, including the identity of the caller, the time, the source IP address, and the request parameters. This audit trail answers who changed the bucket policy, when, and from where.",
    optionExplanations: [
      "Performance metrics come from Amazon CloudWatch. Metrics do not show who changed a bucket policy.",
      "Correct — CloudTrail keeps a history of API activity with the caller, time, and source IP, which is what the team needs.",
      "Machine learning threat detection is provided by Amazon GuardDuty, which analyzes CloudTrail and other logs. It is not CloudTrail's purpose.",
      "Evaluating resource configurations against rules is what AWS Config does. It is not the main purpose of CloudTrail."
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
    question: "A company is moving a mission-critical, I/O-intensive database to Amazon EC2. The database needs the highest sustained IOPS and the most consistent sub-millisecond latency that Amazon EBS offers. Which EBS volume type should the company choose?",
    options: [
      "gp3 (General Purpose SSD)",
      "st1 (Throughput Optimized HDD)",
      "io2 Block Express",
      "sc1 (Cold HDD)"
    ],
    correct: [2],
    explanation: "io2 Block Express is the highest-performance Amazon EBS volume type (Provisioned IOPS SSD). It is designed for the most demanding, I/O-intensive databases that need very high sustained IOPS and consistent sub-millisecond latency.",
    optionExplanations: [
      "gp3 is a cost-effective general purpose SSD suitable for most workloads, but it does not offer the highest IOPS and most consistent latency the critical database needs.",
      "st1 is a hard disk volume designed for large, sequential throughput workloads such as big data, not for latency-sensitive database I/O.",
      "Correct — io2 Block Express provides the highest IOPS and consistent sub-millisecond latency of any EBS volume type, designed for critical databases.",
      "sc1 is the lowest-cost hard disk volume for infrequently accessed data. It is far too slow for an I/O-intensive database."
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
      "S3 Cross-Region Replication",
      "S3 Transfer Acceleration",
      "S3 Lifecycle policies for storage classes"
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
    question: "A brokerage firm must keep trade records in Amazon S3 for several years, and regulators require that no one — not even an administrator — can delete or overwrite the records during that period. Which S3 feature should the firm use?",
    options: [
      "S3 Versioning",
      "S3 Replication",
      "S3 Object Lock",
      "S3 Lifecycle policies"
    ],
    correct: [2],
    explanation: "S3 Object Lock stores objects using a write once, read many (WORM) model and prevents them from being deleted or overwritten for a set retention period. In compliance mode, no user, including the root user, can remove the protection before the retention period ends.",
    optionExplanations: [
      "Versioning keeps earlier versions of objects, but authorized users can still delete versions, so it does not enforce a retention period.",
      "Replication copies objects to another bucket; it does not stop anyone from deleting or overwriting the originals.",
      "Correct — Object Lock enforces WORM retention so the trade records cannot be deleted or overwritten for the required period.",
      "Lifecycle policies move or expire objects automatically; they do not prevent deletion or overwriting."
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
    question: "A company is moving several Windows-based applications from its data center to AWS. The applications use shared folders that require the SMB protocol, NTFS permissions, and integration with Microsoft Active Directory. The company wants a fully managed file system in AWS. Which AWS service should it use?",
    options: [
      "Amazon EFS",
      "Amazon FSx for Windows File Server",
      "Amazon S3",
      "AWS Storage Gateway"
    ],
    correct: [1],
    explanation: "Amazon FSx for Windows File Server provides fully managed, Windows-native shared file storage. It supports SMB, NTFS permissions, and Active Directory integration, so Windows applications can use it without changes.",
    optionExplanations: [
      "Amazon EFS is a managed file system for Linux workloads that use NFS. It does not provide native SMB and NTFS for Windows.",
      "Correct — FSx for Windows File Server gives Windows applications a managed SMB file system with NTFS and Active Directory support.",
      "Amazon S3 is object storage accessed through APIs. It is not a Windows shared folder with SMB and NTFS permissions.",
      "Storage Gateway connects on-premises applications to cloud storage. The company is moving the applications to AWS, so it needs a file system in AWS, not a hybrid gateway."
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
    question: "A company has 40 VPCs across several AWS accounts plus two on-premises data centers. Managing a growing mesh of point-to-point connections between them has become complex. The company wants a single central hub that connects all its VPCs and on-premises networks. Which AWS service should the company use?",
    options: [
      "VPC peering",
      "AWS PrivateLink",
      "AWS Transit Gateway",
      "AWS Direct Connect gateway"
    ],
    correct: [2],
    explanation: "AWS Transit Gateway acts as a central cloud router in a hub-and-spoke model. Each VPC and on-premises network connects once to the transit gateway instead of to every other network, which replaces the complex mesh of point-to-point connections.",
    optionExplanations: [
      "VPC peering creates one-to-one connections between pairs of VPCs. It is exactly the mesh the company finds too complex, and it does not connect on-premises networks.",
      "AWS PrivateLink exposes specific services privately to other VPCs. It is not a hub for routing between entire networks.",
      "Correct — Transit Gateway is a central hub that connects many VPCs and on-premises networks, simplifying the network architecture.",
      "A Direct Connect gateway links Direct Connect connections to VPCs, but it does not route traffic between the company's VPCs as a central hub."
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
    question: "An online store processes each order with several AWS Lambda functions: charge the payment, reserve inventory, and arrange shipping. Developers want to coordinate these steps as a workflow they can see visually, with automatic retries and error handling, without writing their own orchestration code. Which AWS service should they use?",
    options: [
      "Amazon SQS",
      "Amazon EventBridge",
      "AWS Step Functions",
      "AWS Batch"
    ],
    correct: [2],
    explanation: "AWS Step Functions orchestrates serverless workflows as state machines. Each step can invoke a Lambda function or another AWS service, and the workflow handles sequencing, retries, error handling, and parallel steps, with a visual view of every execution.",
    optionExplanations: [
      "SQS queues messages between components, but it does not define the order of steps, retries, or error handling for a multi-step workflow.",
      "EventBridge routes events to targets based on rules; it does not manage a multi-step workflow with visual state and retries.",
      "Correct — Step Functions coordinates the Lambda functions as a visual workflow with built-in retries and error handling.",
      "AWS Batch runs large numbers of batch computing jobs; it is not designed to orchestrate a sequence of Lambda functions for each order."
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
    question: "A data engineering team runs Apache Hadoop and Apache Spark clusters in its own data center to process large datasets. Maintaining the clusters takes too much time, so the team wants to move these jobs to AWS and keep using the same open-source frameworks on a managed cluster platform. Which AWS service should the team use?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EMR",
      "Amazon Kinesis Data Streams"
    ],
    correct: [2],
    explanation: "Amazon EMR is a managed big data platform for running open-source frameworks such as Apache Hadoop, Spark, Hive, and HBase. AWS provisions and configures the clusters, so the team keeps its frameworks without maintaining the infrastructure.",
    optionExplanations: [
      "Redshift is a data warehouse for SQL analytics. It does not run existing Hadoop and Spark jobs.",
      "Athena runs serverless SQL queries on data in S3. It is not a platform for running Hadoop and Spark clusters.",
      "Correct — EMR runs Hadoop and Spark on managed clusters, so the team keeps its frameworks without maintaining the clusters.",
      "Kinesis Data Streams collects and processes real-time streaming data. It is not a managed Hadoop and Spark cluster platform."
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
      "Amazon SQS standard queues",
      "Amazon Kinesis Data Streams",
      "AWS Batch compute environments",
      "Amazon EMR clusters"
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
    question: "An online retailer wants customers to run fast full-text searches across its product catalog, with results ranked by relevance. Its operations team also wants to analyze application logs interactively in near real time. Which AWS service meets both needs?",
    options: [
      "Amazon Redshift data warehouse",
      "Amazon RDS for PostgreSQL",
      "Amazon OpenSearch Service",
      "AWS Glue"
    ],
    correct: [2],
    explanation: "Amazon OpenSearch Service is a managed search and analytics engine. It provides relevance-ranked full-text search for the product catalog and near real-time log analytics with OpenSearch Dashboards for the operations team.",
    optionExplanations: [
      "Amazon Redshift is a data warehouse for complex analytical SQL queries on structured data. It is not designed for relevance-ranked full-text product search.",
      "Amazon RDS is a relational database for transactional workloads. It is not a search engine optimized for relevance-ranked full-text search and interactive log analytics.",
      "Correct — OpenSearch Service provides full-text search with relevance ranking and near real-time log analytics in one managed service.",
      "AWS Glue is a serverless data integration (ETL) service. It prepares and moves data but does not serve search queries or interactive log analytics."
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
    question: "A news website wants to add a \"listen to this article\" button so visitors can hear each article read aloud in a natural-sounding voice. The company does not want to record the articles with human narrators. Which AWS service should it use?",
    options: [
      "Amazon Transcribe",
      "Amazon Lex",
      "Amazon Polly",
      "Amazon Translate"
    ],
    correct: [2],
    explanation: "Amazon Polly is a text-to-speech service that uses deep learning to turn text into lifelike speech in many languages and voices. The website can send each article's text to Polly and play the generated audio.",
    optionExplanations: [
      "Transcribe does the opposite conversion: it turns speech into text.",
      "Lex builds conversational chatbots and voice bots; reading full articles aloud is a text-to-speech task.",
      "Correct — Polly converts the article text into natural-sounding speech without human narrators.",
      "Translate converts text from one language to another; it does not produce audio."
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
    question: "A company's developers download open-source software packages (for example npm, Maven, and Python packages) from public repositories during builds. The company wants a fully managed, private repository in AWS to store approved packages and share its own internal packages, without running its own repository servers. Which AWS developer tool should the company use?",
    options: [
      "AWS CodeBuild",
      "AWS CodeArtifact",
      "AWS CodeDeploy",
      "AWS CodePipeline"
    ],
    correct: [1],
    explanation: "AWS CodeArtifact is a fully managed artifact repository service. It stores and shares software packages for common package managers such as npm, Maven, and pip, and it can fetch packages from public repositories, so the company does not run its own repository servers.",
    optionExplanations: [
      "CodeBuild compiles code and runs tests. It can download packages during a build, but it does not store and share them as a repository.",
      "Correct — CodeArtifact is a managed private repository for software packages, including approved public packages and internal packages.",
      "CodeDeploy automates deployments to EC2, Lambda, ECS, and on-premises servers. It does not host software packages.",
      "CodePipeline orchestrates the stages of a CI/CD pipeline. It does not store software packages."
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
    question: "A development team stores its code in a Git repository. It wants every commit to automatically start a release process that builds the code, runs tests, and deploys the application, with each stage shown in a visual workflow. Which AWS service should orchestrate this process?",
    options: [
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodePipeline",
      "AWS CloudFormation"
    ],
    correct: [2],
    explanation: "AWS CodePipeline is a fully managed continuous delivery service that models the release process as a pipeline of stages (source, build, test, deploy). It starts automatically on each code change and coordinates services such as CodeBuild and CodeDeploy.",
    optionExplanations: [
      "AWS CodeBuild compiles code and runs tests, but it is only one stage. It does not orchestrate the full source-to-deploy release process.",
      "AWS CodeDeploy automates deployments, but it handles only the deploy stage, not building, testing, and coordinating the whole workflow.",
      "Correct — CodePipeline orchestrates the source, build, test, and deploy stages and starts automatically on every commit.",
      "AWS CloudFormation provisions infrastructure from templates. It can be a deploy action in a pipeline, but it does not orchestrate the release process."
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
    question: "Developers currently sign in to each EC2 instance separately to search through application log files when troubleshooting. The company wants to send these logs, plus logs from AWS services, to one central place where they can be searched and analyzed. Which Amazon CloudWatch feature should it use?",
    options: [
      "CloudWatch metrics",
      "CloudWatch alarms",
      "CloudWatch Logs",
      "CloudWatch dashboards"
    ],
    correct: [2],
    explanation: "Amazon CloudWatch Logs collects and stores log data from EC2 instances, applications, and AWS services in one place. Developers can search and filter logs, create metric filters, and run interactive queries with CloudWatch Logs Insights instead of signing in to each server.",
    optionExplanations: [
      "Metrics are numeric data points such as CPU utilization; they do not store and search the text of log files.",
      "Alarms watch metrics and react when thresholds are crossed; they do not collect or search log files.",
      "Correct — CloudWatch Logs centralizes the log files so developers can search and analyze them in one place.",
      "Dashboards display graphs and widgets of monitoring data; they are not where log files are collected and searched."
    ]
  },
  {
    id: 183,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "What is an Amazon Machine Image (AMI) used for in AWS?",
    options: [
      "It provides DNS resolution for EC2 instances in a VPC",
      "It is a template used to launch EC2 instances",
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
    question: "A small team has packaged its web API as a container image. The team has no infrastructure expertise and does not want any servers, instances, or clusters to manage. It wants to deploy the image and get automatic scaling, load balancing, and HTTPS. Which AWS service is the SIMPLEST way to meet these requirements?",
    options: [
      "Amazon ECS",
      "Amazon EKS",
      "AWS App Runner",
      "AWS Elastic Beanstalk"
    ],
    correct: [2],
    explanation: "AWS App Runner is a fully managed service for running containerized web applications and APIs. The team provides a container image or source code, and App Runner builds, deploys, scales, and load-balances the application with HTTPS, with no infrastructure to manage.",
    optionExplanations: [
      "ECS can run containers, but the team must define clusters, services, task definitions, networking, and a load balancer. This requires more infrastructure knowledge than App Runner.",
      "EKS runs Kubernetes, which requires significant expertise to operate. It is not the simplest option for a team without infrastructure skills.",
      "Correct — App Runner deploys the container image directly and handles scaling, load balancing, and HTTPS with no infrastructure to manage.",
      "Elastic Beanstalk creates EC2 instances and other resources in the account that the team can still see and must understand. It is less hands-off than App Runner."
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
    question: "A company is moving its applications to AWS. It needs its own logically isolated network in which it chooses the private IP address range, creates public and private subnets, and controls routing with route tables. Which AWS service should the company use?",
    options: [
      "AWS Direct Connect",
      "Amazon Route 53",
      "Amazon VPC",
      "AWS Transit Gateway"
    ],
    correct: [2],
    explanation: "Amazon Virtual Private Cloud (Amazon VPC) lets the company launch resources in a logically isolated virtual network that it defines, with full control over IP address ranges, subnets, route tables, and gateways.",
    optionExplanations: [
      "AWS Direct Connect is a dedicated connection from on premises to AWS. It does not create the isolated network where resources run.",
      "Amazon Route 53 is a DNS service. It resolves domain names but does not define IP ranges, subnets, or route tables.",
      "Correct — Amazon VPC provides a logically isolated network where the company defines its IP range, subnets, and route tables.",
      "AWS Transit Gateway connects multiple existing VPCs and networks. The company first needs the isolated network itself."
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN 4: Billing, Pricing and Support  (additional questions 188-200)
  // ────────────────────────────────────────────────────────────────
  {
    id: 188,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A regional retailer wants hands-on help to migrate its applications to AWS. Leadership prefers to hire a local third-party consulting firm with AWS-validated expertise rather than consultants employed by AWS. Where should the retailer look for such a firm?",
    options: [
      "AWS Professional Services",
      "AWS Partner Network",
      "AWS re:Post community",
      "AWS Trust & Safety team"
    ],
    correct: [1],
    explanation: "The AWS Partner Network (APN) is the global community of partners, including consulting firms, that build solutions and deliver services on AWS. AWS validates partner expertise through programs such as AWS Competencies, which helps customers choose a qualified partner. AWS Professional Services, by contrast, is made up of AWS employees.",
    optionExplanations: [
      "AWS Professional Services is a team of experts employed by AWS, which is exactly what leadership wants to avoid.",
      "Correct — the AWS Partner Network includes consulting partners whose expertise AWS validates, so the retailer can find a qualified local firm.",
      "re:Post is a community Q&A service. It answers questions but does not provide a firm to carry out the migration.",
      "The Trust & Safety team handles reports of abuse coming from AWS resources. It does not recommend consulting firms."
    ]
  },
  {
    id: 189,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A mid-sized company is about to move its customer-facing production systems to AWS. Today it has only the Support plan that comes with every account. It wants 24/7 access to AWS technical support by phone, chat, and email, and it wants the plan that AWS recommends as the minimum for production workloads. Which plan should it choose?",
    options: [
      "Basic Support",
      "AWS Business Support+",
      "AWS Enterprise Support",
      "AWS Unified Operations"
    ],
    correct: [1],
    explanation: "AWS positions Business Support+ as the minimum recommended plan for production workloads. It provides 24/7 technical support by phone, web, chat, and email, with faster responses when a production system is down. Enterprise Support and Unified Operations add more expertise for business-critical and mission-critical workloads.",
    optionExplanations: [
      "Basic Support is the plan the company already has. It includes customer service and documentation but not 24/7 technical support from AWS engineers.",
      "Correct — Business Support+ is the minimum recommended plan for production workloads and includes 24/7 phone, web, chat, and email technical support.",
      "Enterprise Support also includes 24/7 technical support, but it targets business-critical workloads and adds a designated TAM that the company did not ask for.",
      "Unified Operations is designed for mission-critical workloads that need incident management and domain specialist engineers, far beyond the stated need."
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
    question: "A company plans to commit to a Reserved Instance for its Amazon EC2 workload to reduce costs. During the term, it expects to move to a different instance family and possibly a different operating system. The company accepts a smaller discount in return for this flexibility. Which option should it purchase?",
    options: [
      "Standard Reserved Instances",
      "Convertible Reserved Instances",
      "EC2 Instance Savings Plans",
      "Spot Instances"
    ],
    correct: [1],
    explanation: "Convertible Reserved Instances can be exchanged during the term for Reserved Instances with a different instance family, operating system, or tenancy. In return they offer a smaller discount than Standard Reserved Instances.",
    optionExplanations: [
      "Standard Reserved Instances give the largest Reserved Instance discount, but they cannot be exchanged for a different instance family.",
      "Correct — Convertible Reserved Instances can be exchanged for another instance family or operating system, at a smaller discount.",
      "EC2 Instance Savings Plans apply to one instance family in a chosen Region. They do not cover a move to a different instance family, and they are not a Reserved Instance.",
      "Spot Instances use spare capacity with no commitment and can be interrupted. They are not a reservation."
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
      "AWS Cost Explorer saved reports",
      "AWS Budgets",
      "AWS Cost and Usage Report",
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
    question: "A company needs a third-party firewall appliance and a SaaS monitoring tool for its AWS environment. It wants to find, try, and buy them quickly, with the charges appearing on its AWS bill, and to deploy the software directly into its AWS account. Which AWS offering should the company use?",
    options: [
      "AWS Partner Network (APN)",
      "AWS Marketplace",
      "AWS Service Catalog",
      "AWS License Manager"
    ],
    correct: [1],
    explanation: "AWS Marketplace is a curated digital catalog where customers can find, try, buy, and deploy third-party software, SaaS products, data, and professional services. Purchases are billed through the AWS bill, and many products can be deployed directly into the customer's AWS account.",
    optionExplanations: [
      "The AWS Partner Network is the global community of partners that build solutions and services on AWS. It is not the storefront where the company buys and deploys software.",
      "Correct — AWS Marketplace lets the company find, try, buy, and deploy third-party software and SaaS products, with charges on its AWS bill.",
      "AWS Service Catalog lets an organization offer its own pre-approved products to its users. It is not a store for buying third-party software.",
      "AWS License Manager tracks and controls software license usage. It does not let the company find and buy new third-party software."
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
    question: "A developer is designing a small hobby project that should keep running for years. She wants to rely only on AWS Free Tier offers that do not expire after an introductory period. Which type of AWS Free Tier offer should she look for?",
    options: [
      "Always free offers",
      "Free plan sign-up credits",
      "Short-term free trials",
      "Staying on the Free plan"
    ],
    correct: [0],
    explanation: "The AWS Free Tier includes always free offers for more than 30 services, available within monthly limits on both the Free plan and the Paid plan. Credits and short-term trials end after a set period, and a Free plan account closes after six months unless it is upgraded, so a long-running project should stay within always free limits on a Paid plan account.",
    optionExplanations: [
      "Correct — always free offers remain available within monthly usage limits and do not expire, on both the Free plan and the Paid plan.",
      "Free plan credits can be used for up to six months and run out as they are spent, so they cannot keep a project free for years.",
      "Short-term free trials apply to selected services for a limited period, so they end long before the project does.",
      "A Free plan account closes after six months or when its credits run out unless it is upgraded, so it cannot host a project for years."
    ]
  },
  {
    id: 199,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A developer at a small company on Basic Support is stuck on a configuration question that is not urgent. She wants to post the question publicly and get answers from AWS experts and other community members, without opening a paid support case. Which AWS resource should she use?",
    options: [
      "AWS re:Post",
      "AWS Knowledge Center",
      "AWS Trust & Safety team",
      "AWS Health Dashboard"
    ],
    correct: [0],
    explanation: "AWS re:Post is a community-driven question-and-answer service where customers get answers from AWS experts and community members. It is available to every AWS customer as part of Basic Support, so no paid plan is needed.",
    optionExplanations: [
      "Correct — AWS re:Post lets anyone ask questions and get answers from AWS experts and the community, and it is included with Basic Support.",
      "The Knowledge Center offers AWS-authored articles and videos about common questions. It is not where she posts her own question for community answers.",
      "The Trust & Safety team handles reports of abuse coming from AWS resources. It does not answer technical configuration questions.",
      "The AWS Health Dashboard shows events that affect AWS services and the account's resources. It is not a question-and-answer forum."
    ]
  },
  {
    id: 200,
    domain: "Billing, Pricing & Support",
    type: "multiple",
    question: "A startup has used the Basic Support plan while building its product. Before launching to production, it upgrades to AWS Business Support+. Which benefits does the startup gain that Basic Support does NOT include? (Select TWO)",
    options: [
      "Access to AWS documentation and technical whitepapers",
      "24/7 technical support by phone, chat, and email",
      "Architecture guidance tailored to its use cases",
      "Access to the AWS re:Post community",
      "A designated Technical Account Manager (TAM)"
    ],
    correct: [1, 2],
    explanation: "Basic Support gives every customer customer service, documentation, whitepapers, AWS re:Post, AWS Trusted Advisor core checks, and AWS Health. Business Support+, the minimum recommended plan for production workloads, adds 24/7 technical support and architectural guidance contextual to the customer's use cases. A designated TAM requires Enterprise Support.",
    optionExplanations: [
      "Documentation and whitepapers are available to every customer through Basic Support, so the startup already has them.",
      "Correct — Business Support+ adds 24/7 technical support by phone, web, chat, and email, which Basic Support does not include.",
      "Correct — Business Support+ provides architectural guidance contextual to the customer's own use cases.",
      "AWS re:Post is part of Basic Support and open to all customers, so the startup already has it.",
      "A designated TAM is a feature of Enterprise Support, not of Business Support+."
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
    question: "A mobile gaming company based in Brazil has a popular game. It now wants to serve players in Japan and Europe with low latency, and it plans to launch infrastructure in those areas this week without building or leasing any data centers. Which advantage of the AWS Cloud does this describe?",
    options: [
      "Benefit from massive economies of scale",
      "Stop guessing capacity",
      "Go global in minutes",
      "Increase speed and agility"
    ],
    correct: [2],
    explanation: "'Go global in minutes' describes using AWS Regions around the world to deploy an application close to users in new geographies quickly, without building data centers in each location.",
    optionExplanations: [
      "Economies of scale explain why AWS can offer lower prices because of its size. They do not describe deploying quickly to new geographies.",
      "Stopping guessing capacity is about scaling to actual demand instead of predicting it. It does not describe expanding to new countries.",
      "Correct — The company can deploy into AWS Regions in Asia and Europe within a short time, placing the game close to new players.",
      "Speed and agility refer to making resources available to developers in minutes so they can experiment faster. Global expansion close to users is the more specific advantage here."
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
    question: "A small law firm wants an email and document-collaboration application that staff use through a web browser. The firm does not want to manage servers, operating systems, middleware, or application updates — only its own data and user accounts. Which cloud service model BEST fits these requirements?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Function as a Service (FaaS)"
    ],
    correct: [2],
    explanation: "Software as a Service (SaaS) delivers a complete application over the internet, with the provider managing the infrastructure, middleware, and the application itself. The customer only manages its data and how users access the service — exactly what the law firm wants.",
    optionExplanations: [
      "With IaaS the firm would still manage operating systems, middleware, and the application, which it wants to avoid.",
      "With PaaS the provider manages the platform, but the firm would still have to build or deploy and maintain its own application.",
      "Correct — SaaS gives the firm a ready-to-use application in the browser, with the provider managing everything except the firm's data and user accounts.",
      "With FaaS the firm would have to write and maintain its own function code. It wants a finished application, not a platform for running code."
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
    question: "A company wants a disaster recovery strategy in which a scaled-down but fully functional copy of its production environment is always running in another AWS Region, ready to be scaled up quickly during a disaster. Which strategy BEST matches this description?",
    options: [
      "Backup and restore",
      "Pilot light",
      "Warm standby",
      "Multi-site active/active"
    ],
    correct: [2],
    explanation: "Warm standby keeps a scaled-down but complete, running copy of the workload in another location, so it can serve traffic immediately and be scaled up to full capacity during a disaster. It offers lower RTO than pilot light at a higher cost, but costs less than multi-site active/active.",
    optionExplanations: [
      "Backup and restore keeps only backups in the recovery location; infrastructure must be created and data restored after a disaster, so nothing is running in advance.",
      "Pilot light keeps core components such as data replication running, but application servers are switched off and must be started before the environment can serve traffic.",
      "Correct — Warm standby runs a smaller but fully functional copy of production at all times, which is scaled up when a disaster occurs.",
      "Multi-site active/active runs full production capacity in multiple Regions and serves traffic from all of them, rather than keeping a scaled-down copy on standby."
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
    question: "After a long outage, a company's operations team found that nobody could trace failing requests and that recovery steps were done by hand. The team now plans to add request tracing, automate its runbooks, and hold post-incident reviews. Which AWS Well-Architected Framework pillar is the team following?",
    options: [
      "Security",
      "Reliability",
      "Performance Efficiency",
      "Operational Excellence"
    ],
    correct: [3],
    explanation: "The Operational Excellence pillar focuses on running and monitoring systems and continually improving processes. Its practices include observability (such as tracing requests), performing operations as code (automated runbooks), and learning from operational events through post-incident reviews.",
    optionExplanations: [
      "The Security pillar covers protecting data, systems, and identities, not tracing requests or improving day-to-day operational procedures.",
      "Reliability focuses on a workload's ability to recover from failures and meet demand. Automating runbooks and learning from incidents are operations practices under Operational Excellence.",
      "Performance Efficiency is about using computing resources efficiently and selecting the right resource types, not operational procedures.",
      "Correct — tracing requests, automating operational procedures, and learning from incidents are Operational Excellence practices."
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
    options: [
      "A system that never experiences any downtime under any circumstances",
      "A system designed to stay operational despite component failures",
      "A system that can scale infinitely to handle any load",
      "A system that costs the least to operate"
    ],
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
    question: "An online payment company tells its architects that the checkout system must keep processing payments with no interruption, even if a server or an entire Availability Zone fails. The architects describe this goal as fault tolerance. Which statement BEST describes what they must achieve?",
    options: [
      "Scale resources up and down automatically as demand changes",
      "Keep operating with no downtime when components fail",
      "Deploy the application to Regions worldwide in minutes",
      "Pay only for the resources that the system actually uses"
    ],
    correct: [1],
    explanation: "Fault tolerance means the system continues operating correctly, with no downtime, when one or more components fail. It is usually achieved with redundant components spread across Availability Zones. It is stricter than high availability, which can allow brief interruptions.",
    optionExplanations: [
      "Automatically scaling with demand is elasticity. It does not guarantee the system keeps running when a component fails.",
      "Correct — A fault-tolerant system keeps working with no downtime even when servers or an Availability Zone fail.",
      "Deploying worldwide quickly is the 'go global in minutes' advantage. It is about reach, not surviving component failures.",
      "Paying only for what you use is the pay-as-you-go pricing model. It says nothing about surviving failures."
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
    question: "A startup is deciding between building its own data center and using AWS. It wants to avoid a large upfront hardware purchase, and it expects to serve customers in Europe and Asia within months of launching. Which advantages of AWS address these needs? (Select TWO)",
    options: [
      "Trading capital expense for variable expense",
      "Full control over the physical hardware",
      "Ability to go global in minutes",
      "No security responsibilities for the customer"
    ],
    correct: [0, 2],
    explanation: "Two AWS advantages match the startup's needs: trading capital expense for variable expense removes the large upfront hardware purchase, and going global in minutes lets it deploy in AWS Regions close to customers in Europe and Asia quickly.",
    optionExplanations: [
      "Correct — With AWS the startup pays only for what it uses instead of making a large upfront hardware investment.",
      "AWS manages the physical hardware; customers do not get physical control. This is a characteristic of an on-premises data center, not an AWS advantage.",
      "Correct — The startup can deploy its application in AWS Regions in Europe and Asia in minutes instead of building data centers there.",
      "Under the shared responsibility model the customer always remains responsible for security in the cloud, such as its data and access management."
    ]
  },
  {
    id: 218,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which cloud computing model allows developers to focus solely on writing code without managing servers, OS, or runtime environments?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Serverless / FaaS"
    ],
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
    options: [
      "Software licensing fees for operating systems",
      "Data transfer costs",
      "Data center hardware and facility costs",
      "Application development and maintenance costs"
    ],
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
    question: "A company runs hundreds of servers in its data center and wants a data-driven business case for moving to AWS. It wants AWS to collect utilization data from its existing servers and compare current on-premises costs with projected AWS costs, rather than typing in each configuration by hand. Which AWS service should it use?",
    options: [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Migration Evaluator",
      "AWS Budgets"
    ],
    correct: [2],
    explanation: "AWS Migration Evaluator analyzes a company's actual on-premises footprint and utilization and produces a business case that compares the current cost of ownership with the projected cost of running equivalent workloads on AWS.",
    optionExplanations: [
      "Pricing Calculator estimates AWS costs for configurations you enter manually; it does not collect data from existing on-premises servers.",
      "Cost Explorer analyzes AWS costs and usage you have already incurred, so it cannot assess workloads that still run on premises.",
      "Correct — Migration Evaluator gathers data about the existing on-premises servers and builds a cost comparison for migrating to AWS.",
      "Budgets sets cost and usage thresholds for AWS spending and sends alerts; it does not compare on-premises costs with AWS."
    ]
  },
  {
    id: 221,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which of the following BEST describes an AWS Region?",
    options: [
      "A single data center operated by AWS",
      "A geographic area containing multiple Availability Zones",
      "A set of edge locations used for content delivery",
      "A dedicated network connection between on-premises and AWS"
    ],
    correct: [1],
    explanation: "An AWS Region is a geographic area containing two or more isolated Availability Zones. Each AZ consists of one or more data centers. Regions are separate from each other to provide fault isolation and compliance boundaries.",
    optionExplanations: [
      "A single data center describes an Availability Zone (or part of one) — a Region consists of two or more physically separate AZs.",
      "Correct — An AWS Region is a geographic area containing two or more isolated Availability Zones, each of which is one or more data centers.",
      "Edge locations are CDN/DNS endpoints for CloudFront and Route 53 — they are not part of the Region/AZ infrastructure hierarchy.",
      "A dedicated network connection between on-premises and AWS describes AWS Direct Connect — not the definition of an AWS Region."
    ]
  },
  {
    id: 222,
    domain: "Cloud Concepts",
    type: "single",
    question: "What is an AWS Availability Zone?",
    options: [
      "A global content delivery network (CDN) edge location",
      "One or more discrete data centers within a Region",
      "A separate billing account for different teams",
      "A virtual private network connection"
    ],
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
    question: "A company's disaster recovery plan states that, after an outage, no more than 15 minutes of transaction data may be lost. Which term describes this requirement?",
    options: [
      "Recovery Time Objective (RTO)",
      "Recovery Point Objective (RPO)",
      "Mean Time Between Failures (MTBF)",
      "Service Level Agreement (SLA)"
    ],
    correct: [1],
    explanation: "The Recovery Point Objective (RPO) is the maximum acceptable amount of data loss, measured as the time between the last recovery point and the outage. A 15-minute RPO means backups or replication must capture data at least every 15 minutes. RTO, by contrast, measures how quickly service must be restored.",
    optionExplanations: [
      "RTO is the maximum acceptable time to restore service after an outage. It describes downtime, not how much data may be lost.",
      "Correct — RPO defines the maximum acceptable data loss measured in time, so a limit of 15 minutes of lost data is an RPO requirement.",
      "MTBF is a reliability metric for the average time between component failures. It does not define how much data may be lost in a disaster.",
      "An SLA is a commitment about service availability or performance between a provider and a customer, not a recovery target for data loss."
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
    question: "A bank must keep customer data inside its own data center because of a regulatory requirement. It still wants to run Amazon EC2 and Amazon EBS locally, managed by AWS and using the same AWS APIs, console, and tools it uses in the AWS Cloud. Which AWS service should the bank use?",
    options: [
      "AWS Direct Connect",
      "AWS Local Zones",
      "AWS Outposts",
      "AWS Snowball"
    ],
    correct: [2],
    explanation: "AWS Outposts delivers AWS-managed infrastructure that is installed in the customer's own data center. The bank can run AWS services such as EC2 and EBS on premises, keep the data in its facility, and use the same APIs and tools as in the cloud.",
    optionExplanations: [
      "Direct Connect is a private network connection between a data center and AWS. It does not run AWS services inside the bank's facility, so the data would still be stored in AWS.",
      "Local Zones are AWS-owned sites near large cities. The data would be in an AWS facility, not in the bank's own data center.",
      "Correct — Outposts places AWS infrastructure and services inside the bank's data center, so data stays on premises.",
      "Snowball devices are mainly for transferring data to AWS or for edge processing in disconnected locations. They are not a permanent extension of AWS infrastructure in a data center."
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
    question: "A fintech company is reviewing its new payment workload against the AWS Well-Architected Framework. It wants guidance on managing identities and permissions, protecting data at rest and in transit, and detecting and responding to security incidents. Which pillar should the company consult?",
    options: [
      "Reliability",
      "Operational Excellence",
      "Security",
      "Performance Efficiency"
    ],
    correct: [2],
    explanation: "The Security pillar addresses protecting data, systems, and assets. It covers identity and access management, detective controls, infrastructure protection, data protection, and incident response — the areas the fintech company wants guidance on.",
    optionExplanations: [
      "Reliability is about recovering from failures and meeting demand, not about identities, data protection, and security incident response.",
      "Operational Excellence covers running and improving operations in general. Identity management and data protection are covered by a different pillar.",
      "Correct — The Security pillar covers identity and access management, data protection at rest and in transit, and detecting and responding to security incidents.",
      "Performance Efficiency is about using computing resources efficiently, not about protecting data and managing identities."
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
    question: "A global payment company requires near-zero downtime and near-zero data loss if an entire AWS Region fails, and it accepts the highest cost to achieve this. Which disaster recovery strategy should it choose?",
    options: [
      "Backup and restore from snapshots",
      "Pilot light in a second Region",
      "Warm standby in a second Region",
      "Multi-site active/active"
    ],
    correct: [3],
    explanation: "Multi-site active/active runs the full workload in two or more Regions at the same time, with all of them serving traffic. If one Region fails, the others continue immediately, giving the lowest RTO and RPO of all strategies, but also the highest cost.",
    optionExplanations: [
      "Backup and restore is the lowest-cost strategy, but restoring infrastructure and data takes the longest, so it cannot deliver near-zero downtime.",
      "Pilot light keeps only core components running, so application servers must be started and scaled before recovery is complete. This causes more downtime than the requirement allows.",
      "Warm standby reduces recovery time, but the scaled-down copy must still be scaled up and traffic shifted, so it does not reach near-zero downtime.",
      "Correct — Multi-site active/active serves traffic from multiple Regions at once, so a Regional failure causes almost no downtime or data loss, at the highest cost."
    ]
  },
  {
    id: 230,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "A company is breaking a large monolithic application into microservices on AWS. Which of the following are characteristics of a microservices architecture? (Select TWO)",
    options: [
      "Each service can be deployed independently of the others",
      "All services share one codebase and are released together",
      "Each service can be scaled independently based on its own demand",
      "All services must be written in the same programming language",
      "A failure in any single service always stops the whole application"
    ],
    correct: [0, 2],
    explanation: "In a microservices architecture, an application is built from small, loosely coupled services that communicate through well-defined APIs. Each service can be developed, deployed, and scaled independently, which speeds up releases and limits the impact of failures.",
    optionExplanations: [
      "Correct — Independent deployment is a core characteristic of microservices; one team can release its service without redeploying the rest of the application.",
      "A single shared codebase released all at once describes a monolithic application, which is exactly what the company is moving away from.",
      "Correct — Each microservice can scale on its own according to its demand, instead of scaling the entire application as one unit.",
      "Microservices communicate through APIs, so each service can use the language and technology that best fits its job.",
      "Loose coupling between microservices is meant to isolate failures, so a problem in one service should not bring down the whole application."
    ]
  },
  {
    id: 231,
    domain: "Cloud Concepts",
    type: "single",
    question: "A startup founder notices that AWS has lowered its prices many times and that the startup pays far less per unit of compute than it would by buying its own servers. Which statement BEST explains this benefit?",
    options: [
      "Users can scale infrastructure up and down as needed, in minutes",
      "AWS passes savings from huge aggregate usage on as lower prices",
      "Companies can deploy applications to many Regions around the world",
      "Organizations stop paying for capacity that sits idle"
    ],
    correct: [1],
    explanation: "This is the benefit of massive economies of scale. Because AWS aggregates usage from a very large number of customers, it gains purchasing and operating efficiencies that lead to lower pay-as-you-go prices — per-unit costs a single startup could not achieve on its own.",
    optionExplanations: [
      "Scaling up and down quickly describes elasticity, which does not explain why the per-unit price itself is lower.",
      "Correct — AWS's huge aggregate usage creates economies of scale, and those savings are passed on as lower prices.",
      "Deploying to many Regions describes going global in minutes, which is unrelated to lower per-unit prices.",
      "Not paying for idle capacity comes from paying only for what you use; it does not explain why AWS can repeatedly lower its prices."
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
    question: "A company starting its cloud adoption wants to make sure its data and cloud workloads meet confidentiality, integrity, and availability goals, with capabilities such as identity management, threat detection, and incident response. Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on these capabilities?",
    options: [
      "Security",
      "Operations",
      "Governance",
      "Platform"
    ],
    correct: [0],
    explanation: "The Security perspective of the AWS CAF helps organizations achieve the confidentiality, integrity, and availability of their data and cloud workloads. Its capabilities include identity and access management, threat detection, infrastructure protection, data protection, and incident response.",
    optionExplanations: [
      "Correct — The Security perspective focuses on confidentiality, integrity, and availability, with capabilities such as identity management, threat detection, and incident response.",
      "The Operations perspective focuses on running cloud services at agreed service levels, including observability, event management, and incident and problem management processes.",
      "The Governance perspective focuses on orchestrating cloud initiatives, managing benefits and risks, and overseeing cloud spending and the application portfolio.",
      "The Platform perspective focuses on building an enterprise-grade, scalable hybrid cloud platform and modernizing workloads, not on security capabilities."
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
    options: [
      "Purchasing three-year Reserved Instances sized for expected peak load",
      "Using Auto Scaling to adjust capacity to actual demand",
      "Deploying resources in multiple Regions",
      "Using AWS Direct Connect for private connectivity to AWS"
    ],
    correct: [1],
    explanation: "Auto Scaling eliminates the need to guess peak capacity. Resources scale out when demand rises and scale in when it drops, ensuring the right capacity at all times without over-provisioning or under-provisioning.",
    optionExplanations: [
      "Purchasing three-year Reserved Instances sized for expected peak load commits to a fixed capacity — this still involves guessing future demand and does not dynamically adjust to actual usage.",
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
    options: [
      "It guarantees a fixed, predictable monthly cost",
      "It trades upfront CapEx for ongoing variable OpEx",
      "It eliminates all infrastructure costs for the customer",
      "It gives free access to every AWS service indefinitely"
    ],
    correct: [1],
    explanation: "Pay-as-you-go converts CapEx (buying servers) to OpEx (paying for usage). This improves cash flow, removes financial risk of over-buying, and aligns costs with actual business value delivered.",
    optionExplanations: [
      "Pay-as-you-go does not guarantee a fixed monthly cost — your bill varies with usage, which is the opposite of a fixed cost.",
      "Correct — Pay-as-you-go converts large upfront CapEx (buying servers) to smaller ongoing OpEx (paying for what you use), improving cash flow and reducing financial risk.",
      "Pay-as-you-go does not eliminate all infrastructure costs — you still pay for the resources you consume; it only changes how costs are structured (variable vs. fixed).",
      "Pay-as-you-go charges for what you use. Free usage comes only from AWS Free Tier offers, which are a separate program with their own limits."
    ]
  },
  {
    id: 238,
    domain: "Cloud Concepts",
    type: "single",
    question: "Before launching a new workload, a company's architects want to answer a structured set of questions about it, compare it with AWS best practices across the six pillars, and get a list of high-risk issues with an improvement plan. They also want to record milestones as they fix the issues. Which AWS service should they use?",
    options: [
      "AWS Trusted Advisor",
      "AWS Well-Architected Tool",
      "AWS Config",
      "AWS Service Catalog"
    ],
    correct: [1],
    explanation: "The AWS Well-Architected Tool lets teams review a workload against the Well-Architected Framework pillars by answering questions. It identifies high-risk issues, provides improvement guidance, and tracks progress with milestones.",
    optionExplanations: [
      "Trusted Advisor runs automated checks on resources in the account. It does not run a question-based architecture review of a workload against the framework pillars.",
      "Correct — The Well-Architected Tool reviews a workload against the six pillars, lists high-risk issues, and tracks improvements with milestones.",
      "AWS Config records resource configurations and evaluates them against rules. It does not review an architecture against the Well-Architected pillars.",
      "Service Catalog lets organizations offer pre-approved products for teams to deploy. It does not review a workload's architecture."
    ]
  },
  {
    id: 239,
    domain: "Cloud Concepts",
    type: "single",
    question: "Which statement BEST describes how the AWS global infrastructure is organized?",
    options: [
      "Each Region contains multiple, isolated Availability Zones",
      "Each Availability Zone contains multiple AWS Regions",
      "Edge locations are the data centers inside each Region",
      "Each Region is a single large data center in one city"
    ],
    correct: [0],
    explanation: "An AWS Region is a geographic area that contains multiple, physically separated and isolated Availability Zones, each made of one or more data centers. Edge locations are a separate network of sites used by services such as CloudFront and Route 53 to serve content close to users.",
    optionExplanations: [
      "Correct — every Region is made of multiple Availability Zones that are isolated from each other but connected with low-latency links.",
      "This reverses the hierarchy: Regions contain Availability Zones, not the other way round.",
      "Edge locations are separate sites, mostly in large cities, used for content delivery and DNS; they are not the data centers that make up a Region.",
      "A Region is not one data center; it contains multiple Availability Zones, each with one or more data centers."
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
    question: "A company has a documented disaster recovery plan, but it has never actually tried it. An auditor warns that the plan might not work during a real outage. The company decides to regularly simulate failures and automate its recovery steps to prove they work. Which cloud architecture principle is the company applying?",
    options: [
      "Implement elasticity with Auto Scaling",
      "Test recovery procedures",
      "Decouple application components",
      "Design for failure"
    ],
    correct: [1],
    explanation: "'Test recovery procedures' is a design principle of the Reliability pillar. In the cloud you can simulate failures and run recovery drills regularly, and automate recovery, so you know the procedures work before a real incident happens — which is what the auditor's concern requires.",
    optionExplanations: [
      "Elasticity adjusts capacity to match demand. It does not validate whether the disaster recovery plan works.",
      "Correct — Regularly simulating failures and automating recovery to prove the plan works is the 'test recovery procedures' principle.",
      "Decoupling reduces dependencies between components. It does not address whether the recovery plan has been validated.",
      "Design for failure is about building redundancy into the architecture. The company's issue is that its existing recovery plan has never been tested."
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
    question: "When a web server misbehaves, a company's operations team currently logs in and fixes it by hand, so servers slowly drift apart in configuration. The team now wants to terminate any unhealthy instance and launch a fresh one from a standard AMI instead. Which practice is the team adopting?",
    options: [
      "Immutable infrastructure",
      "Patching servers in place",
      "Vertical scaling",
      "Stateful instance recovery"
    ],
    correct: [0],
    explanation: "Immutable infrastructure means replacing components instead of modifying them in place. Launching new instances from a standard AMI (for example with EC2 Auto Scaling replacing unhealthy instances) keeps every server consistent and removes configuration drift.",
    optionExplanations: [
      "Correct — replacing unhealthy servers with fresh instances from a standard image instead of changing them is immutable infrastructure.",
      "Patching servers in place is what the team does today and is the cause of the configuration drift it wants to stop.",
      "Vertical scaling means changing an instance to a larger or smaller size; it does not replace unhealthy servers.",
      "Recovering an instance while keeping its existing state preserves the drifted configuration instead of starting from a clean, standard image."
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
    options: [
      "All AWS services are available in every Region",
      "AWS Regions are connected to each other by the public internet only",
      "Each Region is isolated from other Regions for fault tolerance",
      "An AWS Region consists of a single data center"
    ],
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
    options: [
      "Components communicate directly through hardcoded IP addresses",
      "Components interact through queues or APIs, not directly",
      "All application components run together on a single large server",
      "Databases are co-located on the same hosts as application servers"
    ],
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
    question: "A company is moving Windows-based applications to Amazon EC2. The applications require Microsoft Active Directory for domain join, Group Policy, and Kerberos authentication, and the company does not want to install and maintain its own domain controllers. Which AWS service should the company use?",
    options: [
      "AWS Identity and Access Management (IAM)",
      "AWS Directory Service",
      "Amazon Cognito user pools",
      "AWS IAM Identity Center"
    ],
    correct: [1],
    explanation: "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) provides a fully managed Active Directory on AWS. EC2 instances can join the domain and use Group Policy and Kerberos, while AWS operates the domain controllers.",
    optionExplanations: [
      "IAM controls access to AWS resources and APIs. It is not an Active Directory and cannot provide domain join, Group Policy, or Kerberos for Windows applications.",
      "Correct — AWS Managed Microsoft AD gives the applications a real Active Directory for domain join, Group Policy, and Kerberos, without the company running domain controllers.",
      "Amazon Cognito user pools manage sign-in for customers of web and mobile apps. They do not provide Active Directory features for Windows servers.",
      "IAM Identity Center provides single sign-on to AWS accounts and applications, but it is not a directory that Windows servers can join for Group Policy and Kerberos."
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
    options: [
      "To define the billing budget for an AWS account",
      "To allow or deny actions on AWS resources",
      "To create virtual networks in AWS",
      "To monitor API calls made in an AWS account"
    ],
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
    question: "A developer needs to run AWS CLI commands from a laptop using an IAM user. Which credentials does the AWS CLI use to sign these programmatic requests?",
    options: [
      "The IAM user's console password and MFA code",
      "An access key ID and a secret access key",
      "An Amazon EC2 key pair (public and private key)",
      "The AWS account ID and the root user email address"
    ],
    correct: [1],
    explanation: "Programmatic access through the AWS CLI, SDKs, or APIs is signed with an access key, which consists of an access key ID and a secret access key. These keys must be protected and rotated, and AWS recommends using temporary credentials, such as IAM roles or IAM Identity Center, whenever possible.",
    optionExplanations: [
      "A password and MFA code are used to sign in to the AWS Management Console, not to sign AWS CLI or API requests.",
      "Correct — The AWS CLI signs programmatic requests with an access key made up of an access key ID and a secret access key.",
      "An EC2 key pair is used to log in to EC2 instances over SSH or to decrypt Windows passwords. It cannot authenticate AWS API calls.",
      "The account ID and root email identify the account but are not credentials for signing API requests, and the root user should not be used for daily work."
    ]
  },
  {
    id: 253,
    domain: "Security & Compliance",
    type: "single",
    question: "A company's security team proposes attaching service control policies (SCPs) to the organizational units in AWS Organizations so that development accounts can never use services the company has not approved. A manager asks what an SCP actually does. Which answer is correct?",
    options: [
      "It grants permissions to IAM users within one account",
      "It sets the maximum permissions for accounts in the organization",
      "It is a billing policy that limits monthly spending for every account",
      "It is a network policy that controls traffic in a VPC"
    ],
    correct: [1],
    explanation: "SCPs define the maximum permissions available to accounts in an organization or organizational unit. They do not grant permissions themselves; they act as guardrails, so even if an IAM policy in a member account allows an action, the SCP can block it.",
    optionExplanations: [
      "SCPs never grant permissions. IAM policies grant permissions; SCPs only limit what can be allowed.",
      "Correct — an SCP sets the maximum permissions for the accounts it applies to, acting as a guardrail across the organization.",
      "SCPs control permissions, not spending. Spending limits and alerts are handled with tools such as AWS Budgets.",
      "SCPs do not filter network traffic. VPC traffic is controlled with security groups and network ACLs."
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
    question: "An application running on Amazon EC2 instances needs to read files from an Amazon S3 bucket. A developer plans to save an IAM user's access keys in a configuration file on each instance. What should the company do instead to follow AWS security best practices?",
    options: [
      "Attach an IAM role to the instances",
      "Use the root user's access keys",
      "Make the S3 bucket publicly readable",
      "Email the keys to each administrator"
    ],
    correct: [0],
    explanation: "An IAM role attached to EC2 instances gives the application temporary credentials that AWS rotates automatically, so no long-term access keys are stored on the instances. The role's policy can grant only the S3 permissions the application needs.",
    optionExplanations: [
      "Correct — an IAM role provides temporary, automatically rotated credentials to the instances, so no access keys need to be stored.",
      "The root user's keys have unrestricted access to the account and should never be used by applications.",
      "A public bucket would let anyone on the internet read the files, which is far less secure.",
      "Sharing long-term keys by email increases the risk of leaks and still leaves keys stored on the instances."
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
    question: "A widely publicized vulnerability has been announced in a popular open-source library. A company's security team needs to quickly find which of its EC2 instances and container images in Amazon ECR contain the vulnerable package, and it wants workloads rescanned automatically whenever new vulnerabilities are published. Which AWS service should the team use?",
    options: [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Shield",
      "Amazon Macie"
    ],
    correct: [1],
    explanation: "Amazon Inspector is an automated vulnerability management service that continually scans EC2 instances and container images in Amazon ECR for known software vulnerabilities (CVEs) and unintended network exposure. It automatically rescans when new CVEs are published, so the team can see which workloads are affected.",
    optionExplanations: [
      "Amazon GuardDuty detects malicious activity by analyzing logs such as CloudTrail and VPC Flow Logs. It does not inventory installed software packages for known vulnerabilities.",
      "Correct — Amazon Inspector continually scans EC2 instances and ECR container images for known vulnerabilities and rescans automatically when new CVEs are published.",
      "AWS Shield protects against DDoS attacks. It does not scan workloads for vulnerable software packages.",
      "Amazon Macie discovers sensitive data such as PII in Amazon S3. It does not scan EC2 instances or container images for vulnerabilities."
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
    question: "A company uses AWS Organizations. The networking team wants to securely share subnets from a central VPC with other accounts in the organization instead of creating duplicate networks in every account. Which AWS service should the team use?",
    options: [
      "AWS Resource Access Manager",
      "AWS IAM Identity Center",
      "AWS Firewall Manager",
      "AWS Control Tower Account Factory"
    ],
    correct: [0],
    explanation: "AWS Resource Access Manager (AWS RAM) lets you securely share supported AWS resources, such as VPC subnets and transit gateways, with other AWS accounts or with your entire organization. This avoids duplicating resources in every account while the owning account keeps control over them.",
    optionExplanations: [
      "Correct — AWS RAM securely shares resources such as VPC subnets with other accounts or the whole organization, avoiding duplicate resources.",
      "IAM Identity Center manages workforce sign-in and access to AWS accounts and applications. It does not share resources such as subnets between accounts.",
      "Firewall Manager centrally manages firewall rules such as AWS WAF rules and security groups across accounts, but it does not share VPC subnets.",
      "Control Tower Account Factory provisions new, pre-configured AWS accounts. It does not share existing network resources between accounts."
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
    question: "A company has dozens of AWS accounts in AWS Organizations. Its security team wants a single place to see and prioritize security findings and compliance check results from all of these accounts, instead of signing in to each account. Which AWS service should it use?",
    options: [
      "AWS Config",
      "Amazon GuardDuty",
      "AWS Security Hub",
      "AWS Trusted Advisor"
    ],
    correct: [2],
    explanation: "AWS Security Hub aggregates, organizes, and prioritizes security findings from AWS services and partner tools and runs automated compliance checks. With a delegated administrator account it gives a central view of security posture across all accounts in an organization.",
    optionExplanations: [
      "AWS Config records and evaluates resource configurations, but it is not the central place for prioritizing security findings from multiple security services.",
      "GuardDuty is one source of threat findings; it does not aggregate findings from other services or run compliance checks against standards.",
      "Correct — Security Hub centralizes security findings and compliance results from all accounts in one view.",
      "Trusted Advisor gives best-practice recommendations, but it is not a central dashboard for security findings and compliance status across accounts."
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
    question: "A company wants to encrypt data in Amazon S3 and Amazon EBS with encryption keys that it creates and controls, including the ability to disable or rotate them. It wants a fully managed service built into these AWS services and does not need dedicated single-tenant hardware. Which AWS service should the company use?",
    options: [
      "AWS Secrets Manager",
      "AWS Certificate Manager (ACM)",
      "AWS Key Management Service",
      "AWS CloudHSM"
    ],
    correct: [2],
    explanation: "AWS KMS is a managed service for creating and controlling encryption keys. It integrates with most AWS services, including S3 and EBS, and AWS operates the hardware security modules that protect the keys, so the company manages no hardware.",
    optionExplanations: [
      "Secrets Manager stores and rotates secrets such as database passwords and API keys. It is not the service S3 and EBS use for their encryption keys.",
      "ACM provisions and manages SSL/TLS certificates for encryption in transit. It does not manage keys for data in S3 or EBS.",
      "Correct — KMS lets the company create and control its keys, is built into S3 and EBS, and is fully managed.",
      "CloudHSM provides dedicated single-tenant HSMs whose keys the customer manages. This is more than the company needs and is not the simplest built-in option."
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
    options: [
      "AWS KMS",
      "AWS Secrets Manager with rotation",
      "AWS Certificate Manager",
      "AWS IAM"
    ],
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
    question: "A startup has no dedicated security staff. It wants an automated check of its AWS account against AWS best practices — such as whether the root user has MFA and whether any S3 buckets or security groups are open to everyone — with recommendations, and without writing or configuring any rules. Which AWS service should the startup use?",
    options: [
      "Amazon Inspector",
      "AWS Config custom rules",
      "AWS Trusted Advisor",
      "Amazon GuardDuty"
    ],
    correct: [2],
    explanation: "AWS Trusted Advisor inspects the AWS account and provides recommendations based on AWS best practices. Its security checks cover items such as MFA on the root user, S3 bucket permissions, and security groups with unrestricted access, with no rules to write.",
    optionExplanations: [
      "Amazon Inspector scans EC2 instances, container images, and Lambda functions for software vulnerabilities. It does not review account-level settings such as root MFA.",
      "AWS Config custom rules could evaluate these settings, but the startup would have to write and maintain the rules itself, which it wants to avoid.",
      "Correct — Trusted Advisor checks the account against AWS best practices, including root MFA, open S3 buckets, and unrestricted security groups, and gives recommendations.",
      "Amazon GuardDuty detects threats and malicious activity. It does not review whether the account's configuration follows best practices."
    ]
  },
  {
    id: 268,
    domain: "Security & Compliance",
    type: "single",
    question: "A security group allows inbound HTTPS traffic from the internet but has no outbound rules that match the responses. Users still receive the web server's responses. Why does this work?",
    options: [
      "Security groups are stateful and allow return traffic",
      "Network ACLs automatically add the outbound rule",
      "AWS Shield Standard allows responses by default",
      "The internet gateway rewrites the outbound rules"
    ],
    correct: [0],
    explanation: "Security groups are stateful: if an inbound request is allowed, the response traffic is automatically allowed back out, regardless of outbound rules. Network ACLs are stateless, so they need explicit rules for both directions.",
    optionExplanations: [
      "Correct — security groups track connections, so responses to allowed inbound requests are allowed automatically.",
      "Network ACLs are stateless and never add rules automatically; they require explicit inbound and outbound rules.",
      "Shield Standard protects against DDoS attacks; it does not control security group traffic rules.",
      "An internet gateway routes traffic between the VPC and the internet; it does not modify security group rules."
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
    options: [
      "IAM access keys for the CLI and SDKs",
      "Multi-factor authentication",
      "Security groups on EC2 instances",
      "AWS Shield"
    ],
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
    options: [
      "Amazon GuardDuty",
      "AWS CloudTrail event history",
      "AWS Config rules",
      "Amazon Macie"
    ],
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
    question: "A security team already uses security groups on its EC2 instances. As an extra layer of defense, it wants rules that apply automatically to every resource in a subnet, at no additional cost, and it accepts that inbound and outbound rules are evaluated separately because the control is stateless. Which VPC feature should it use?",
    options: [
      "Security groups",
      "AWS WAF",
      "Network ACLs",
      "AWS Network Firewall"
    ],
    correct: [2],
    explanation: "Network ACLs are stateless firewalls that operate at the subnet level of a VPC, at no extra charge. Inbound and outbound rules are evaluated independently, so return traffic must be explicitly allowed. They complement security groups, which are stateful and operate at the instance level.",
    optionExplanations: [
      "Security groups are stateful and operate at the instance level; the team already uses them and wants an additional subnet-level layer.",
      "AWS WAF filters HTTP and HTTPS requests to web applications; it is not a stateless subnet-level filter for all traffic.",
      "Correct — network ACLs are free, stateless, subnet-level firewalls that add a layer of defense on top of security groups.",
      "Network Firewall is a managed, stateful firewall service that is charged separately, so it does not fit the request for a free, stateless control."
    ]
  },
  {
    id: 274,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following BEST describes how AWS Security Groups differ from Network ACLs?",
    options: [
      "Security Groups are stateless at the instance level; NACLs are stateful at the subnet level",
      "Security Groups are stateful at the instance level; NACLs are stateless at the subnet level",
      "Security Groups control access to S3 buckets; NACLs control access to EC2 instances",
      "Both are identical in functionality and apply at the same level"
    ],
    correct: [1],
    explanation: "Security Groups are stateful (return traffic is automatically allowed) and are attached to EC2 instances/ENIs. NACLs are stateless (return traffic must be explicitly allowed) and are applied at the subnet level, affecting all resources in that subnet.",
    optionExplanations: [
      "Security Groups are stateful (not stateless) and NACLs are stateless (not stateful) — this answer has the statefulness reversed.",
      "Correct — Security Groups are stateful and operate at the instance/ENI level; NACLs are stateless and operate at the subnet level, affecting all resources in the subnet.",
      "Security Groups control traffic to EC2 instances (and other resources), not specifically S3; NACLs filter all IP traffic at the subnet level, not specifically EC2 — this distinction is incorrect.",
      "Security Groups and NACLs are not identical — they differ in statefulness, level of application (instance vs. subnet), and rule evaluation order."
    ]
  },
  {
    id: 275,
    domain: "Security & Compliance",
    type: "single",
    question: "A software company runs its SaaS application on AWS and wants to sell it to U.S. federal government agencies. The agencies require the underlying cloud services to be authorized under the government-wide program that standardizes security assessments for cloud providers. Which compliance program is this?",
    options: [
      "PCI DSS",
      "HIPAA",
      "FedRAMP",
      "SOC 2"
    ],
    correct: [2],
    explanation: "FedRAMP (Federal Risk and Authorization Management Program) is the U.S. government program that standardizes security assessment and authorization for cloud services used by federal agencies. Many AWS services hold FedRAMP authorizations.",
    optionExplanations: [
      "PCI DSS is a standard for organizations that handle payment card data. It is not the U.S. federal authorization program.",
      "HIPAA is a U.S. law that protects health information. It is not the program federal agencies use to authorize cloud services.",
      "Correct — FedRAMP is the U.S. federal program for authorizing cloud services used by government agencies.",
      "SOC 2 is an independent audit report on security and availability controls. It is used widely, but it is not the federal government's authorization program."
    ]
  },
  {
    id: 276,
    domain: "Security & Compliance",
    type: "single",
    question: "A company uploads new objects to an Amazon S3 bucket without specifying any encryption settings. How are these objects protected at rest?",
    options: [
      "Stored unencrypted until default encryption is turned on",
      "Encrypted by default with S3 managed keys (SSE-S3)",
      "Encrypted with a customer managed key in AWS KMS",
      "Encrypted by the AWS SDK on the client before upload"
    ],
    correct: [1],
    explanation: "Amazon S3 automatically encrypts all new objects with server-side encryption using Amazon S3 managed keys (SSE-S3) as the base level of encryption for every bucket. Customers can choose a different option, such as SSE-KMS, if they need more control over the keys.",
    optionExplanations: [
      "S3 applies SSE-S3 encryption to all new objects automatically, so new uploads are never stored unencrypted at rest.",
      "Correct — S3 encrypts every new object at rest by default with SSE-S3, using keys that Amazon S3 manages.",
      "A customer managed KMS key is used only if the customer configures SSE-KMS with that key; it is not the default.",
      "Client-side encryption happens only when the customer explicitly encrypts data before uploading. The SDK does not do this by default."
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
    question: "A company lets its developers create IAM roles for their own applications in a single standalone AWS account that is not part of AWS Organizations. The security team wants to ensure that any role a developer creates can never have more than a defined set of maximum permissions, even if a broader policy is attached to it. Which IAM feature meets this requirement?",
    options: [
      "IAM groups",
      "Service control policies (SCPs)",
      "Permissions boundaries",
      "Resource-based policies"
    ],
    correct: [2],
    explanation: "A permissions boundary sets the maximum permissions that an IAM user or role can have. Even if a broader identity-based policy is attached, the effective permissions cannot exceed the boundary, which lets the company safely delegate role creation to developers.",
    optionExplanations: [
      "IAM groups are a way to assign permissions to multiple users. They do not cap the permissions of roles that developers create.",
      "SCPs set maximum permissions for accounts in AWS Organizations. The company's standalone account is not part of an organization, and SCPs do not target individual roles.",
      "Correct — A permissions boundary caps the maximum permissions of an IAM user or role, regardless of the policies attached to it.",
      "Resource-based policies are attached to resources, such as S3 buckets, to grant access. They do not limit the maximum permissions of a role."
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
    question: "A company uses AWS IAM Identity Center to give its workforce access to many AWS accounts. An administrator wants to define a collection of permissions once and then assign it to user groups across several of those accounts. Which feature should the administrator use?",
    options: [
      "Permission sets",
      "Service control policies (SCPs)",
      "IAM permissions boundaries",
      "S3 bucket policies"
    ],
    correct: [0],
    explanation: "In IAM Identity Center, a permission set is a template of one or more IAM policies that defines what users can do in an account. When it is assigned to users or groups for specific accounts, IAM Identity Center creates the matching IAM roles in those accounts, so permissions are defined once and reused.",
    optionExplanations: [
      "Correct — Permission sets let an administrator define permissions once in IAM Identity Center and assign them to users and groups across multiple accounts.",
      "SCPs set the maximum permissions available to accounts in an organization, but they never grant permissions to users on their own.",
      "Permissions boundaries limit the maximum permissions of an individual IAM user or role inside one account. They do not grant access across accounts.",
      "S3 bucket policies control access to a single S3 bucket. They are not a way to assign a reusable set of permissions to workforce users."
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
    question: "A small startup created its AWS account with the founder's email address, and all five engineers sign in as the root user with a shared password for everyday work. The company wants to secure the root user. Which actions should it take? (Select TWO)",
    options: [
      "Enable MFA on the root user",
      "Keep using the root user for daily administrative tasks",
      "Create individual identities for daily work and lock away root credentials",
      "Share the root credentials with the security team only"
    ],
    correct: [0, 2],
    explanation: "AWS recommends enabling MFA on the root user so a second factor is required to sign in, and giving each person their own identity (IAM users or AWS IAM Identity Center) for daily work. Root credentials should be stored securely and used only for the few tasks that require them.",
    optionExplanations: [
      "Correct — MFA on the root user requires a second factor to sign in, protecting the account even if the password leaks.",
      "Using the root user for daily work is exactly the risk the startup has today; root should be reserved for tasks that require it.",
      "Correct — individual identities for daily work give each engineer only the access needed, and the root credentials can be locked away.",
      "Sharing root credentials with any group still means several people hold unrestricted access and individual actions cannot be traced to a person."
    ]
  },
  {
    id: 284,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service provides centralized single sign-on (SSO) access to multiple AWS accounts and business applications?",
    options: [
      "AWS IAM",
      "Amazon Cognito user pools",
      "AWS IAM Identity Center",
      "AWS Directory Service"
    ],
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
    question: "A fitness startup is building a mobile app for the public. It wants customers to sign up and sign in with an email address or with their Google or Facebook accounts, without building and running its own user database. Which AWS service should the startup use?",
    options: [
      "AWS IAM Identity Center",
      "AWS Directory Service",
      "Amazon Cognito",
      "AWS Identity and Access Management (IAM)"
    ],
    correct: [2],
    explanation: "Amazon Cognito provides sign-up, sign-in, and user management for web and mobile apps. It supports social identity providers such as Google and Facebook and can scale to millions of users, so the startup does not have to build its own user store.",
    optionExplanations: [
      "IAM Identity Center provides single sign-on for a company's workforce to AWS accounts and business applications. It is not meant for the public customers of a mobile app.",
      "Directory Service provides managed Microsoft Active Directory, typically for corporate users and Windows workloads. It is not built for public app sign-up with social logins.",
      "Correct — Cognito handles sign-up and sign-in for app users, including federation with Google and Facebook.",
      "IAM controls access to AWS resources for people and workloads in the company. It is not used to manage the end users of a public mobile app."
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
    options: [
      "AWS Shield Standard",
      "Shield Advanced with AWS WAF",
      "Amazon GuardDuty threat detection",
      "Amazon Inspector"
    ],
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
    options: [
      "Patching the database engine and operating system",
      "Managing the physical host hardware in the data center",
      "Managing DB security groups and user credentials",
      "Replacing failed disk drives in the storage layer"
    ],
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
    question: "A company protects its web application with AWS WAF at the edge, network ACLs on its subnets, security groups on its instances, and encryption for its stored data. If one of these controls fails or is misconfigured, the others still protect the application. Which security design principle does this approach demonstrate?",
    options: [
      "Least privilege",
      "Defense in depth",
      "Automate security best practices",
      "Protect data in transit and at rest"
    ],
    correct: [1],
    explanation: "Defense in depth means applying security controls at multiple layers — edge, network, subnet, instance, application, and data — so that if one layer fails, others still protect the system. The company's layered controls are a direct example of this principle in the Security pillar.",
    optionExplanations: [
      "Least privilege means granting only the permissions needed for a task. It does not describe layering multiple independent controls.",
      "Correct — Combining controls at the edge, subnet, instance, and data layers so that one failure does not expose the application is defense in depth.",
      "Automating security best practices is about implementing controls as code. The scenario describes multiple layers of protection, not automation.",
      "Encrypting data is only one of the layers in the scenario. The principle described is the use of many layers together."
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
    options: [
      "AWS Artifact compliance reports",
      "AWS Security Hub",
      "Amazon GuardDuty",
      "AWS Config"
    ],
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
    question: "A healthcare company's mobile app sends patient information to an API running on AWS. An auditor requires that the data be protected while it travels over the internet between the app and AWS. Which approach meets this requirement?",
    options: [
      "Encrypting EBS volumes with AWS KMS keys",
      "Encrypting data over the network using TLS",
      "Encrypting S3 objects with server-side encryption using KMS",
      "Encrypting database snapshots and backups"
    ],
    correct: [1],
    explanation: "Protecting data as it moves across a network is encryption in transit, typically done with TLS (HTTPS). AWS services provide TLS endpoints, and the app should connect to the API only over HTTPS.",
    optionExplanations: [
      "EBS encryption protects data at rest on volumes; it does nothing for data traveling between the app and AWS.",
      "Correct — TLS encrypts data while it moves over the network, which is encryption in transit.",
      "S3 server-side encryption protects stored objects at rest, not data moving over the internet.",
      "Encrypting snapshots and backups protects stored copies at rest, not data in transit from the mobile app."
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
    question: "A company's compliance team prepares for audits by collecting screenshots and spreadsheets by hand to show how its AWS environment meets regulations. The team wants a service that automatically gathers this evidence from its own AWS usage, maps it to frameworks such as GDPR or SOC 2, and produces audit-ready assessment reports. Which AWS service should it use?",
    options: [
      "AWS Trusted Advisor",
      "AWS Artifact",
      "AWS Audit Manager",
      "AWS Config"
    ],
    correct: [2],
    explanation: "AWS Audit Manager continuously collects evidence from the customer's AWS usage and maps it to prebuilt or custom compliance frameworks. It organizes the evidence into assessment reports for auditors, replacing manual evidence gathering.",
    optionExplanations: [
      "Trusted Advisor recommends best-practice improvements for cost, security, and performance. It does not collect audit evidence or build assessment reports.",
      "Artifact provides AWS's own audit reports and agreements, which cover AWS's side of the shared responsibility model. It does not gather evidence about how the company uses AWS.",
      "Correct — Audit Manager automatically collects evidence about the company's AWS usage, maps it to frameworks, and produces assessment reports.",
      "AWS Config records resource configurations and evaluates rules. Audit Manager can use Config data as evidence, but Config itself does not organize evidence into framework-based audit reports."
    ]
  },
  {
    id: 297,
    domain: "Security & Compliance",
    type: "single",
    question: "What does the term 'data sovereignty' mean in the context of AWS?",
    options: [
      "AWS owns all data stored in the cloud",
      "Data is subject to the laws of the country where it is stored",
      "AWS automatically backs up all customer data to multiple countries",
      "Data can only be accessed by authorized AWS employees"
    ],
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
    question: "After detecting suspicious activity, a security team needs records of the IP traffic going to and from the network interfaces of its EC2 instances — including source and destination IP addresses, ports, and whether the traffic was accepted or rejected — for its investigation. Which feature should the team enable?",
    options: [
      "AWS CloudTrail",
      "VPC Flow Logs",
      "AWS Network Firewall",
      "Amazon GuardDuty"
    ],
    correct: [1],
    explanation: "VPC Flow Logs capture information about IP traffic going to and from network interfaces in a VPC, including source and destination IP addresses, ports, protocol, bytes, and whether the traffic was accepted or rejected. The records can be sent to CloudWatch Logs or Amazon S3 for investigation.",
    optionExplanations: [
      "AWS CloudTrail records API calls made in the account. It does not record the network traffic reaching the instances.",
      "Correct — VPC Flow Logs record source and destination IPs, ports, and accept/reject decisions for traffic at the network interface level.",
      "AWS Network Firewall filters and inspects traffic at the VPC level. The team needs records of traffic for every network interface, which is what flow logs provide.",
      "Amazon GuardDuty analyzes data such as flow logs to produce threat findings, but it does not give the team the flow records themselves."
    ]
  },
  {
    id: 299,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service lets you define rules that automatically remediate non-compliant AWS resource configurations?",
    options: [
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "AWS Config with remediation actions",
      "Amazon Inspector vulnerability scanning"
    ],
    correct: [2],
    explanation: "AWS Config Rules evaluate resource configurations for compliance. You can attach remediation actions (often Systems Manager Automation documents) to automatically fix non-compliant resources, such as enabling S3 bucket versioning or encrypting unencrypted EBS volumes.",
    optionExplanations: [
      "AWS CloudTrail records API call history — it does not evaluate configurations for compliance or trigger automated remediation when configurations violate policies.",
      "Amazon GuardDuty detects behavioral threats — it identifies security incidents but does not evaluate resource configurations or trigger configuration remediation.",
      "Correct — AWS Config Rules evaluate configurations and can trigger automated remediation actions (via Systems Manager Automation) to fix non-compliant resources.",
      "Amazon Inspector scans for software vulnerabilities — it does not evaluate resource configurations against compliance rules or trigger configuration remediation."
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
    question: "An online gaming company has suffered several large DDoS attacks against its critical game servers. It wants AWS DDoS specialists available 24/7 and wants AWS to contact its team proactively when an attack is detected. Which AWS service should it use?",
    options: [
      "AWS Shield Standard",
      "AWS WAF",
      "AWS Shield Advanced",
      "Amazon GuardDuty"
    ],
    correct: [2],
    explanation: "AWS Shield Advanced is a paid service that adds 24/7 access to the AWS Shield Response Team (SRT), proactive engagement when attacks are detected on protected resources, enhanced detection and diagnostics, and cost protection against scaling charges caused by DDoS attacks.",
    optionExplanations: [
      "Shield Standard is automatic and free for all customers, but it does not include access to DDoS specialists or proactive engagement.",
      "AWS WAF filters web requests using rules you define; on its own it does not provide a DDoS response team.",
      "Correct — Shield Advanced provides 24/7 access to AWS DDoS specialists and proactive engagement during attacks.",
      "GuardDuty detects threats by analyzing logs and activity; it is not a DDoS protection service with a response team."
    ]
  },
  {
    id: 302,
    domain: "Security & Compliance",
    type: "single",
    question: "Which of the following describes the concept of 'security as code' in AWS?",
    options: [
      "Manually reviewing security controls every quarter",
      "Defining security controls as infrastructure-as-code",
      "Hiring developers to write custom security software in-house",
      "Using AWS Shield to protect all applications from DDoS attacks"
    ],
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
    question: "Employees at a company sign in to an internal application with their corporate directory credentials. After sign-in, the application needs short-lived AWS credentials for each employee that expire automatically, so that no long-term access keys are stored. Which AWS service issues these temporary credentials?",
    options: [
      "AWS IAM Access Analyzer",
      "AWS Security Token Service (AWS STS)",
      "Amazon Cognito",
      "AWS Directory Service"
    ],
    correct: [1],
    explanation: "AWS STS issues temporary, limited-privilege credentials, for example when a federated user assumes an IAM role. It is the service behind identity federation with corporate identity providers, and its credentials expire automatically.",
    optionExplanations: [
      "IAM Access Analyzer identifies resources shared outside the account and helps refine permissions. It does not issue credentials.",
      "Correct — STS issues temporary credentials for federated employees that expire automatically.",
      "Cognito is designed for the customers of web and mobile apps, not for employees signing in with the corporate directory to an internal tool.",
      "Directory Service provides managed directories such as Microsoft Active Directory. It authenticates users but does not issue temporary AWS credentials."
    ]
  },
  {
    id: 304,
    domain: "Security & Compliance",
    type: "single",
    question: "Which AWS service analyzes IAM policies to identify resources that are accessible from outside your AWS account?",
    options: [
      "AWS Config",
      "Amazon GuardDuty",
      "AWS IAM Access Analyzer",
      "Amazon Inspector vulnerability scans"
    ],
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
    question: "A company runs its own database software on Amazon EC2 and often falls behind on applying database engine security patches. It is considering moving the database to Amazon RDS. Which security benefit would the company gain from this move?",
    options: [
      "The company gets more control over database software versions",
      "AWS applies database engine and OS patches for the company",
      "AWS takes over managing database user accounts and passwords",
      "The company no longer needs security groups for the database"
    ],
    correct: [1],
    explanation: "With a managed service such as Amazon RDS, AWS patches the database engine and the underlying operating system, which removes the window where unpatched vulnerabilities remain exposed. The company still manages database users, network access (security groups), and its data.",
    optionExplanations: [
      "Moving to a managed service gives the company less, not more, control over the underlying software. It also does not solve the patching problem.",
      "Correct — On Amazon RDS, AWS handles database engine and operating system patching, so the company no longer falls behind on security patches.",
      "Under the shared responsibility model, the company remains responsible for managing database users and their credentials on Amazon RDS.",
      "The company still controls network access to an RDS database through security groups. That responsibility does not move to AWS."
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
    options: [
      "Send email alerts through SNS when CloudTrail is disabled",
      "Apply an SCP denying cloudtrail:StopLogging and DeleteTrail",
      "Use IAM policies in each member account to deny these actions",
      "Enable AWS Config rules to detect CloudTrail changes"
    ],
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
    options: [
      "Automatic annual key rotation",
      "Key policy permissions",
      "AWS CloudTrail logging",
      "KMS key aliases"
    ],
    correct: [2],
    explanation: "Every KMS API call (Encrypt, Decrypt, GenerateDataKey, etc.) is logged in AWS CloudTrail. This provides a full audit trail of cryptographic operations: who used which key, on which resource, at what time — essential for compliance and forensics.",
    optionExplanations: [
      "Key rotation automatically creates new key material for a KMS key on a schedule — it manages key age, not the logging of who used the key to decrypt data.",
      "Key policy defines who can administer and use a KMS key — it controls access permissions but does not provide a trail of when and by whom the key was used.",
      "Correct — AWS CloudTrail logs every KMS cryptographic operation (Encrypt, Decrypt, GenerateDataKey), providing a full audit trail of key usage.",
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
    question: "A company runs an internal HR application on the same EC2 instance types in one Region, 24 hours a day, and expects it to keep running unchanged for the next three years. It is willing to commit to a 1- or 3-year term in exchange for a large discount compared to On-Demand. Which EC2 purchasing option should it choose?",
    options: [
      "Spot Instances",
      "On-Demand Instances",
      "Reserved Instances",
      "On-Demand Capacity Reservations"
    ],
    correct: [2],
    explanation: "Reserved Instances provide a significant discount compared to On-Demand pricing in exchange for a 1- or 3-year commitment to specific instance attributes in a Region. They fit steady, predictable workloads like an application that runs continuously on the same instance types. (Savings Plans are another commitment-based option for such workloads.)",
    optionExplanations: [
      "Spot Instances can be interrupted when AWS needs the capacity back, which does not suit an application that must run 24 hours a day.",
      "On-Demand Instances need no commitment, but they do not give the discount the company wants in exchange for a long-term commitment.",
      "Correct — Reserved Instances trade a 1- or 3-year commitment for a large discount, ideal for this steady, predictable workload.",
      "On-Demand Capacity Reservations reserve capacity without a term commitment, but on their own they are billed at On-Demand rates and give no discount."
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
    question: "A company wants to move a database to Amazon EC2. Its software license is priced by the number of physical CPU sockets and cores, and the vendor requires the company to report this information. The company needs a physical server dedicated to its use, with visibility of sockets and cores. Which EC2 option should it use?",
    options: [
      "Dedicated Instances",
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts"
    ],
    correct: [3],
    explanation: "EC2 Dedicated Hosts are physical servers fully dedicated to one customer. They show the sockets, cores, and host ID of the server, which the company needs to comply with licenses tied to physical hardware.",
    optionExplanations: [
      "Dedicated Instances run on hardware dedicated to one customer, but they do not provide visibility of sockets, cores, or the host. This does not meet the license reporting requirement.",
      "Spot Instances use spare capacity at a discount and can be interrupted. They do not give a dedicated physical server.",
      "Reserved Instances are a billing discount for a commitment. They do not provide a dedicated server or visibility into its hardware.",
      "Correct — Dedicated Hosts give a whole physical server with visibility into sockets and cores for licensing."
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
    question: "A gaming company runs dedicated game servers and high-performance web servers whose performance is limited mainly by processor power. Which Amazon EC2 instance category is the BEST fit?",
    options: [
      "Memory optimized",
      "Compute optimized",
      "Storage optimized",
      "Accelerated computing"
    ],
    correct: [1],
    explanation: "Compute optimized instances provide a high ratio of processor power to memory and are designed for compute-bound applications. Typical uses include dedicated gaming servers, high-performance web servers, batch processing, media transcoding, and scientific modeling.",
    optionExplanations: [
      "Memory optimized instances are designed for workloads that process large data sets in memory, such as in-memory databases, not CPU-bound game servers.",
      "Correct — Compute optimized instances deliver high processor performance for compute-bound workloads such as game servers and high-performance web servers.",
      "Storage optimized instances provide very high sequential read and write access to large local data sets, which is not the bottleneck here.",
      "Accelerated computing instances use hardware accelerators such as GPUs for tasks like machine learning and graphics, not general CPU-bound serving."
    ]
  },
  {
    id: 316,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company's IT team wants employees to launch only pre-approved AWS resources, such as a standard web server stack, from a self-service catalog while staying within corporate governance rules. Which AWS service meets this need?",
    options: [
      "AWS Service Catalog",
      "AWS Marketplace",
      "AWS Config",
      "AWS Elastic Beanstalk"
    ],
    correct: [0],
    explanation: "AWS Service Catalog lets organizations create and manage catalogs of approved IT services, defined as infrastructure templates. Users can launch these approved products themselves, while administrators control which products, versions, and configurations are allowed.",
    optionExplanations: [
      "Correct — Service Catalog provides a curated self-service catalog of approved products, helping enforce governance and consistent configurations.",
      "AWS Marketplace is a catalog of third-party software and services to buy. It does not restrict employees to internally approved resource configurations.",
      "AWS Config records and evaluates resource configurations after they exist. It does not offer a self-service catalog for launching approved resources.",
      "Elastic Beanstalk deploys and manages web applications, but it does not provide a governed catalog of pre-approved products for employees."
    ]
  },
  {
    id: 317,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "An architecture firm keeps completed project files for many years. The files are retrieved only once or twice a year, when a client asks for them, and waiting several hours for a retrieval is acceptable. The firm wants lower storage costs than storage classes that offer millisecond access. Which S3 storage class should the firm use?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Instant Retrieval"
    ],
    correct: [2],
    explanation: "S3 Glacier Flexible Retrieval is designed for archive data that is accessed rarely, such as once or twice a year. Retrievals take from minutes to hours, and in exchange its storage cost is lower than the classes that provide millisecond access.",
    optionExplanations: [
      "S3 Standard is designed for frequently accessed data with millisecond access. It is the most expensive option for rarely retrieved archives.",
      "S3 Standard-IA offers millisecond access for infrequently accessed data, but its storage cost is higher than an archive class, and the firm does not need fast access.",
      "Correct — S3 Glacier Flexible Retrieval is a low-cost archive class for data accessed once or twice a year where retrievals of minutes to hours are acceptable.",
      "S3 Glacier Instant Retrieval provides millisecond access for archives, which the firm does not need, and it costs more to store than Glacier Flexible Retrieval."
    ]
  },
  {
    id: 318,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to protect its on-premises application servers by continuously replicating them to AWS, so that it can quickly launch recovered servers in AWS if its data center fails. Which AWS service is designed for this purpose?",
    options: [
      "AWS Elastic Disaster Recovery",
      "AWS Backup",
      "AWS DataSync",
      "AWS Application Migration Service"
    ],
    correct: [0],
    explanation: "AWS Elastic Disaster Recovery continuously replicates on-premises or cloud-based servers into a low-cost staging area in AWS. During a disaster, it can launch recovered servers in AWS within minutes, reducing downtime and data loss.",
    optionExplanations: [
      "Correct — Elastic Disaster Recovery continuously replicates servers to AWS and launches recovery instances quickly when the source environment fails.",
      "AWS Backup centrally schedules and manages backups. It does not continuously replicate whole servers for rapid failover.",
      "DataSync transfers files and objects between storage systems. It does not replicate and launch entire application servers.",
      "Application Migration Service replicates servers for a one-time lift-and-shift migration, not for ongoing disaster recovery protection."
    ]
  },
  {
    id: 319,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A hospital stores medical images that are accessed only about once a quarter, but when a doctor requests one it must be returned in milliseconds. The hospital wants the lowest storage cost that meets this requirement. Which S3 storage class should it use?",
    options: [
      "S3 Glacier Instant Retrieval",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Deep Archive",
      "S3 Standard"
    ],
    correct: [0],
    explanation: "S3 Glacier Instant Retrieval is designed for long-lived data that is rarely accessed, such as once a quarter, but still needs millisecond retrieval. It offers lower storage cost than S3 Standard and S3 Standard-IA, with higher per-request retrieval charges.",
    optionExplanations: [
      "Correct — S3 Glacier Instant Retrieval provides millisecond access to rarely accessed data at a low storage cost.",
      "S3 Glacier Flexible Retrieval has retrieval times from minutes to hours, so it cannot return images in milliseconds.",
      "S3 Glacier Deep Archive has the lowest storage cost but retrieval takes hours, which does not meet the millisecond requirement.",
      "S3 Standard returns data in milliseconds, but it is designed for frequently accessed data and costs more to store than Glacier Instant Retrieval."
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
    question: "A developer accidentally deleted important rows from a production Amazon RDS database a few minutes ago. The team wants to recover the database to the state it was in just before the mistake. Which RDS capability should they use?",
    options: [
      "Point-in-time recovery from automated backups",
      "Promoting a read replica to a standalone instance",
      "Failing over to the Multi-AZ standby instance",
      "Enabling Amazon RDS Performance Insights"
    ],
    correct: [0],
    explanation: "RDS automated backups combine daily snapshots with transaction logs, allowing point-in-time recovery to any second within the backup retention period. The restore creates a new DB instance with the data as it was just before the deletion.",
    optionExplanations: [
      "Correct — Point-in-time recovery uses automated backups to restore the database to a specific moment, such as just before the rows were deleted.",
      "A read replica receives the same changes as the primary, so the deletion has already been replicated to it.",
      "The Multi-AZ standby is kept synchronized with the primary, so it contains the same deletion and cannot undo it.",
      "Performance Insights helps analyze database load and performance problems. It cannot restore deleted data."
    ]
  },
  {
    id: 322,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company runs a MySQL database on premises and wants to move it to a fully managed AWS database. It wants an engine built by AWS for the cloud that is compatible with MySQL, offers higher throughput than standard MySQL, and grows its storage automatically. Which AWS service BEST meets these requirements?",
    options: [
      "Amazon RDS for MySQL",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    correct: [1],
    explanation: "Amazon Aurora is a fully managed, cloud-native relational database built by AWS and compatible with MySQL and PostgreSQL. Its distributed storage layer delivers higher performance than standard MySQL, replicates data across multiple Availability Zones, and grows storage automatically.",
    optionExplanations: [
      "RDS for MySQL is managed, but it runs the standard MySQL engine rather than an engine built by AWS for higher throughput.",
      "Correct — Aurora is the AWS-built, MySQL-compatible engine with higher performance and automatically growing storage.",
      "DynamoDB is a NoSQL key-value and document database, so it is not compatible with the company's MySQL application.",
      "Redshift is a data warehouse for analytics, not a MySQL-compatible database for the application's transactions."
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
    question: "A retail company wants to combine several years of sales data from many systems and run complex SQL queries for business reports. Running these reports on its transactional database slows down the online store. The company needs a managed service designed for analytics on very large datasets. Which AWS service should it use?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    correct: [2],
    explanation: "Amazon Redshift is a fully managed data warehouse built for analytics. It stores data in columns and runs queries in parallel, so complex SQL reports on large historical datasets run fast without affecting the transactional database.",
    optionExplanations: [
      "RDS is a managed relational database for transactional workloads, which is where the slow reports already run. It is not a data warehouse for large-scale analytics.",
      "DynamoDB is a NoSQL key-value database for fast transactional lookups. It is not designed for complex SQL analytics across years of data.",
      "Correct — Redshift is a data warehouse designed for complex analytical SQL queries on large datasets.",
      "Aurora is a high-performance relational database for transactional workloads. It is not a dedicated data warehouse."
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
    question: "A streaming video company wants to show each viewer personalized movie recommendations based on their viewing history, without needing in-house machine learning expertise. Which AWS service should it use?",
    options: [
      "Amazon Personalize",
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon OpenSearch Service"
    ],
    correct: [0],
    explanation: "Amazon Personalize is a fully managed machine learning service that generates real-time, individualized recommendations from user interaction data. It uses the same type of technology used by Amazon.com, and it requires no prior machine learning experience.",
    optionExplanations: [
      "Correct — Amazon Personalize builds recommendation models from users' interaction history to deliver personalized suggestions.",
      "Comprehend uses natural language processing to find sentiment, entities, and key phrases in text. It does not generate recommendations.",
      "Rekognition analyzes images and videos to detect objects, faces, and text. It does not recommend content based on viewing history.",
      "OpenSearch Service provides search and log analytics. It does not train recommendation models from viewing history."
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
    question: "A bank moves large volumes of data between its data center and AWS every day. Its compliance team does not allow this traffic to travel over the public internet, and the bank needs consistent network performance. Which AWS service should the bank use?",
    options: [
      "AWS Site-to-Site VPN",
      "Amazon VPC",
      "AWS Direct Connect",
      "AWS Transit Gateway"
    ],
    correct: [2],
    explanation: "AWS Direct Connect provides a dedicated private network connection between an on-premises data center and AWS that does not travel over the public internet. It offers more consistent network performance than internet-based connections.",
    optionExplanations: [
      "Site-to-Site VPN encrypts traffic, but the tunnel still travels over the public internet, which the compliance team does not allow, and its performance can vary.",
      "Amazon VPC is the isolated network inside AWS. It does not by itself provide a private connection from the bank's data center.",
      "Correct — Direct Connect is a dedicated private connection that bypasses the public internet and provides consistent network performance.",
      "Transit Gateway is a hub that connects VPCs and networks, but it still needs a connection such as Direct Connect or VPN to reach the data center."
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
    question: "A company's backend servers run in a private subnet. They must call a third-party payment provider's public API on the internet, but no one on the internet may be able to start a connection to these servers. Which AWS networking component should the company use?",
    options: [
      "Internet gateway only",
      "VPC peering",
      "NAT gateway",
      "AWS PrivateLink"
    ],
    correct: [2],
    explanation: "A NAT gateway placed in a public subnet lets resources in private subnets start outbound connections to the internet, such as calls to an external API, while blocking connections that are started from the internet.",
    optionExplanations: [
      "Using only an internet gateway would require the servers to sit in a public subnet with public IP addresses, which would make them reachable from the internet.",
      "VPC peering connects two VPCs privately; it does not provide access to a public API on the internet.",
      "Correct — a NAT gateway allows outbound calls to the payment API while blocking inbound connections from the internet.",
      "PrivateLink provides private access to services exposed through VPC endpoints, not general outbound access to a public internet API."
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
    question: "A company's application runs in private subnets of a VPC that has no internet access. The application must send messages to Amazon SQS, and the security team requires that this traffic never travels over the public internet. Which AWS service or feature should the company use?",
    options: [
      "VPC peering",
      "AWS Transit Gateway",
      "AWS PrivateLink",
      "Internet gateway"
    ],
    correct: [2],
    explanation: "AWS PrivateLink provides private connectivity to AWS services through interface VPC endpoints. The application reaches Amazon SQS using private IP addresses inside the VPC, so the traffic stays on the AWS network and needs no internet gateway or NAT.",
    optionExplanations: [
      "VPC peering connects two VPCs to each other. It does not give private access to an AWS service such as SQS.",
      "Transit Gateway connects many VPCs and on-premises networks through a central hub. It does not by itself provide private access to AWS service APIs.",
      "Correct — A PrivateLink interface endpoint lets the application reach SQS privately without using the internet.",
      "An internet gateway connects the VPC to the public internet, which the security team forbids for this traffic."
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
    question: "An insurance company's claims application is made of several AWS Lambda functions that must run in a specific order, with some steps running in parallel. Failed steps must be retried automatically, and the team wants a visual view of where each claim is in the process. Which AWS service should the company use?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    correct: [3],
    explanation: "AWS Step Functions coordinates Lambda functions and other AWS services into visual workflows (state machines). It manages ordering, branching, parallel steps, automatic retries, and error handling, and shows where each execution is in the workflow.",
    optionExplanations: [
      "Amazon SQS queues messages between components, but it does not define step order, parallel branches, or retries as a visual workflow.",
      "Amazon SNS sends notifications to many subscribers. It does not orchestrate a multi-step process or track each claim's progress.",
      "Amazon EventBridge routes events to targets based on rules, but it does not manage step order, parallel branches, and retries in a visual workflow.",
      "Correct — Step Functions orchestrates the Lambda functions in order and in parallel, retries failed steps, and visually shows each claim's progress."
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
    question: "A mobile game company wants to capture events such as moves and purchases from millions of players as they happen. Several of its own applications, including a live leaderboard and a fraud detector, must read and process the same events within seconds. Which AWS service should it use?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions",
      "Amazon Kinesis"
    ],
    correct: [3],
    explanation: "Amazon Kinesis (through Kinesis Data Streams) ingests large volumes of streaming data in real time and stores it for a period so that multiple consumer applications can read and process the same records independently, within seconds of arrival.",
    optionExplanations: [
      "SQS is a message queue where each message is normally processed by one consumer and then deleted, so several applications cannot easily read the same events.",
      "SNS pushes notifications to subscribers but does not store a stream of events that applications can read and replay.",
      "Step Functions orchestrates multi-step workflows; it is not designed to ingest millions of real-time events.",
      "Correct — Kinesis ingests real-time events at scale and lets multiple applications process the same stream."
    ]
  },
  {
    id: 338,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A mobile app team wants to test its Android and iOS app on a wide range of real phones and tablets hosted by AWS, without buying and maintaining the devices itself. Which AWS service should it use?",
    options: [
      "AWS Device Farm",
      "AWS Amplify",
      "AWS AppSync",
      "Amazon WorkSpaces"
    ],
    correct: [0],
    explanation: "AWS Device Farm is an application testing service that lets teams test web and mobile apps on real devices hosted in the AWS Cloud. Tests can run automatically across many devices, or developers can interact with a device remotely to reproduce issues.",
    optionExplanations: [
      "Correct — Device Farm runs automated and manual tests of mobile and web apps on real phones and tablets hosted by AWS.",
      "Amplify helps build, deploy, and host web and mobile app backends and front ends, but it does not provide a fleet of real test devices.",
      "AppSync provides managed GraphQL APIs for apps. It has no capability for testing apps on physical devices.",
      "WorkSpaces provides virtual desktops for users, not real mobile phones and tablets for app testing."
    ]
  },
  {
    id: 339,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS infrastructure as code service allows you to model and provision AWS resources using JSON or YAML templates?",
    options: [
      "AWS CDK",
      "AWS Elastic Beanstalk",
      "AWS CloudFormation",
      "AWS Systems Manager"
    ],
    correct: [2],
    explanation: "AWS CloudFormation is an IaC service that provisions and manages AWS resources from declarative templates (JSON or YAML). Templates define the desired state; CloudFormation handles dependency ordering, rollback, and drift detection.",
    optionExplanations: [
      "AWS CDK (Cloud Development Kit) generates CloudFormation templates using programming languages — while CDK is IaC, CloudFormation is the underlying service that uses JSON/YAML templates directly.",
      "AWS Elastic Beanstalk deploys application code and manages surrounding infrastructure — it is a PaaS service, not an IaC service for defining arbitrary AWS resource configurations.",
      "Correct — AWS CloudFormation provisions and manages AWS resources from JSON or YAML templates, with dependency ordering, rollback, and drift detection.",
      "AWS Systems Manager handles operational tasks such as patching and running commands on managed nodes — it does not provision resources from declarative JSON or YAML templates."
    ]
  },
  {
    id: 340,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A genomics research company needs to run large batch jobs each night with Apache Spark, Apache Hive, and Apache HBase on petabytes of data. It wants AWS to provision and configure the clusters, and it wants to shut them down when the jobs finish so it pays only while they run. Which AWS service meets these requirements?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EMR",
      "AWS Glue"
    ],
    correct: [2],
    explanation: "Amazon EMR is a managed cluster platform for running open-source big data frameworks, including Spark, Hive, and HBase. Clusters can be launched for a job and terminated afterward, so the company pays only while the processing runs.",
    optionExplanations: [
      "Redshift is a data warehouse for SQL analytics. It does not run Spark, Hive, and HBase on managed clusters.",
      "Athena runs serverless SQL queries on S3 data. It does not provide clusters running Hive and HBase.",
      "Correct — EMR runs Spark, Hive, and HBase on managed clusters that can be shut down when the jobs finish.",
      "Glue is a serverless data integration (ETL) service. It does not provide clusters running the full set of frameworks, such as HBase."
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
    question: "A company has data in Amazon S3 and Amazon RDS in several different formats. Before analysts query it, the company wants to automatically discover the data's schemas into a central catalog and run jobs that clean and convert the data to a common format, without managing any servers. Which AWS service should the company use?",
    options: [
      "Amazon EMR",
      "Amazon Athena",
      "Amazon Kinesis",
      "AWS Glue"
    ],
    correct: [3],
    explanation: "AWS Glue is a serverless data integration (ETL) service. Its crawlers discover schemas and populate the AWS Glue Data Catalog, and its ETL jobs clean, transform, and move data between data stores such as Amazon S3 and Amazon RDS.",
    optionExplanations: [
      "Amazon EMR runs big data frameworks such as Apache Spark, but it does not automatically crawl data sources to build a central schema catalog.",
      "Amazon Athena runs SQL queries on data in S3. It is what analysts might use afterward, not the service that discovers schemas and transforms data.",
      "Amazon Kinesis ingests and processes real-time streaming data. The company needs to catalog and transform existing stored data.",
      "Correct — AWS Glue crawlers catalog the schemas, and serverless Glue ETL jobs clean and convert the data to a common format."
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
    question: "A company runs software from vendors such as Microsoft and Oracle on AWS and on premises. It wants to track license usage centrally and set rules that prevent launching more instances than its licenses allow. Which AWS service should it use?",
    options: [
      "AWS License Manager",
      "AWS Marketplace",
      "AWS Config",
      "AWS Systems Manager Inventory"
    ],
    correct: [0],
    explanation: "AWS License Manager helps manage software licenses from vendors such as Microsoft, Oracle, and SAP across AWS and on-premises environments. Administrators define licensing rules that track usage and can block new instance launches that would exceed the license entitlements.",
    optionExplanations: [
      "Correct — License Manager tracks license usage centrally and enforces rules that can stop launches exceeding license limits.",
      "AWS Marketplace is used to find and buy third-party software. It does not track or enforce existing license entitlements.",
      "AWS Config records and evaluates resource configurations, but it does not define license rules or block launches based on license counts.",
      "Systems Manager Inventory collects software inventory from managed nodes, but it does not enforce license limits on new launches."
    ]
  },
  {
    id: 346,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company records its all-hands meetings and webinars. It wants to automatically create text transcripts of these recordings that show which speaker said what and correctly recognize its product names. Which AWS service should it use?",
    options: [
      "Amazon Polly",
      "Amazon Translate",
      "Amazon Lex",
      "Amazon Transcribe"
    ],
    correct: [3],
    explanation: "Amazon Transcribe is an automatic speech recognition (ASR) service that converts audio and video to text. It can identify different speakers (speaker diarization) and use custom vocabularies so that product names and specialized terms are recognized correctly.",
    optionExplanations: [
      "Polly converts text into speech, the opposite of what the company needs.",
      "Translate converts text between languages; it does not create transcripts from audio.",
      "Lex builds conversational chatbots; it is not used to transcribe recorded meetings.",
      "Correct — Transcribe converts the recordings to text, labels speakers, and supports custom vocabularies for product names."
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
    question: "A bank wants to add a virtual assistant to its website and phone line. Customers should be able to type or say requests such as \"What is my account balance?\" and have the assistant understand what they mean and respond in a conversation. Which AWS service should the bank use to build this?",
    options: [
      "Amazon Polly",
      "Amazon Comprehend",
      "Amazon Lex",
      "Amazon Kendra"
    ],
    correct: [2],
    explanation: "Amazon Lex is a fully managed service for building conversational interfaces (chatbots and voice bots). It provides speech recognition and natural language understanding, using the same technology as Amazon Alexa, and can call AWS Lambda to complete requests.",
    optionExplanations: [
      "Polly converts text into lifelike speech. It does not understand what customers ask or manage a conversation.",
      "Comprehend extracts insights such as sentiment and key phrases from text. It does not build interactive conversational bots.",
      "Correct — Lex understands typed or spoken requests and manages the conversation, which is what the virtual assistant needs.",
      "Kendra is an intelligent search service for finding answers in documents. It is not a conversational bot builder."
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
    question: "A development team builds Docker images in its CI pipeline. It needs a private, managed place to store and version the images so that Amazon ECS and Amazon EKS can pull them, and it does not want to run its own registry servers. Which AWS service should the team use?",
    options: [
      "Amazon ECS",
      "Amazon EKS",
      "Amazon ECR",
      "AWS Fargate"
    ],
    correct: [2],
    explanation: "Amazon Elastic Container Registry (Amazon ECR) is a fully managed container image registry. It stores, versions, and secures container images and integrates with Amazon ECS, Amazon EKS, and AWS Fargate, so the team does not run its own registry.",
    optionExplanations: [
      "Amazon ECS runs and orchestrates containers. It pulls images from a registry but does not store them.",
      "Amazon EKS runs Kubernetes. It pulls images from a registry but is not itself a place to store container images.",
      "Correct — Amazon ECR is a managed private registry for storing and versioning container images that ECS and EKS can pull.",
      "AWS Fargate is serverless compute that runs containers. It does not store container images."
    ]
  },
  {
    id: 351,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed IoT platform for connecting, managing, and securing billions of IoT devices?",
    options: ["AWS Greengrass", "Amazon Kinesis", "AWS IoT Core", "Amazon SageMaker"],
    correct: [2],
    explanation: "AWS IoT Core is a managed cloud service that lets connected devices interact with cloud applications. It handles device connectivity (MQTT, HTTP), message brokering, security (X.509 certificates), and integration with AWS services.",
    optionExplanations: [
      "AWS Greengrass extends AWS to edge devices for local processing — it complements IoT Core but is not the central managed IoT platform for device connectivity.",
      "Amazon Kinesis processes real-time streaming data — it can ingest IoT data but is not a managed platform for device connectivity, management, and security.",
      "Correct — AWS IoT Core is the managed cloud platform for connecting, managing, and securing IoT devices with MQTT/HTTP, X.509 certificates, and AWS service integration.",
      "Amazon SageMaker is a machine learning platform — it can process IoT data but is not the device connectivity and management service."
    ]
  },
  {
    id: 352,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a managed service for running Apache Kafka-compatible streaming, fully managed and integrated with AWS services?",
    options: [
      "Amazon Kinesis Data Streams",
      "Amazon SQS",
      "Amazon MSK",
      "AWS EventBridge"
    ],
    correct: [2],
    explanation: "Amazon MSK (Managed Streaming for Apache Kafka) is a fully managed service that makes it easy to build and run applications that use Apache Kafka. AWS handles provisioning, configuration, and maintenance of Kafka brokers and ZooKeeper.",
    optionExplanations: [
      "Amazon Kinesis Data Streams is AWS's proprietary streaming service — it is not Apache Kafka-compatible and would require code changes to migrate existing Kafka applications.",
      "Amazon SQS is a message queue — it is not a streaming platform and is not Apache Kafka-compatible.",
      "Correct — Amazon MSK is the fully managed Apache Kafka-compatible streaming service, with AWS handling Kafka broker and ZooKeeper provisioning and maintenance.",
      "AWS EventBridge is an event bus for routing events — it is not a Kafka-compatible streaming platform."
    ]
  },
  {
    id: 353,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company hires contractors who work from their own laptops. It wants to give each contractor a persistent, fully managed Windows desktop in the cloud, so company files never have to be stored on the contractors' devices. Which AWS service should it use?",
    options: [
      "Amazon AppStream 2.0",
      "Amazon WorkSpaces",
      "AWS Client VPN",
      "Amazon Connect"
    ],
    correct: [1],
    explanation: "Amazon WorkSpaces is a fully managed desktop-as-a-service (DaaS) offering. Each user gets a persistent Windows or Linux virtual desktop that runs in AWS and can be accessed from many types of devices, while data stays in the cloud and AWS manages the infrastructure.",
    optionExplanations: [
      "AppStream 2.0 streams individual applications to users rather than giving each contractor a full, persistent desktop.",
      "Correct — WorkSpaces gives each contractor a persistent cloud desktop, keeping company files off their laptops.",
      "Client VPN connects devices to the company network, so files could still end up on the contractors' laptops; it does not provide desktops.",
      "Amazon Connect is a cloud contact center service, not a virtual desktop service."
    ]
  },
  {
    id: 354,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service allows you to stream desktop applications to users' browsers, without requiring installations on their devices?",
    options: ["Amazon WorkSpaces", "Amazon Connect", "AWS AppStream 2.0", "AWS WorkLink"],
    correct: [2],
    explanation: "AWS AppStream 2.0 streams desktop applications from AWS to users' web browsers. Applications run on AWS infrastructure and are streamed as pixels — no installation required on the user's device, and data never leaves AWS.",
    optionExplanations: [
      "Amazon WorkSpaces provides persistent virtual desktops — it streams an entire desktop, not specific applications, and users have their own dedicated desktop environment.",
      "Amazon Connect is a cloud-based contact center — it has no application streaming capabilities.",
      "Correct — AWS AppStream 2.0 streams individual desktop applications to users' browsers without local installation, with data remaining in AWS.",
      "AWS WorkLink (now discontinued) was for accessing internal websites on mobile devices — it was not for streaming desktop applications."
    ]
  },
  {
    id: 355,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "An online retailer wants to set up a customer service call center within days. Its agents will work from home, and the company does not want to buy telephony hardware or sign long-term contracts; it wants to pay only for usage. Which AWS service should it use?",
    options: [
      "Amazon WorkSpaces",
      "Amazon Connect",
      "Amazon Simple Email Service (Amazon SES)",
      "AWS Wickr"
    ],
    correct: [1],
    explanation: "Amazon Connect is a cloud-based contact center service. Companies can set it up quickly, agents only need a browser and an internet connection, and pricing is pay-as-you-go with no telephony hardware or long-term commitments.",
    optionExplanations: [
      "WorkSpaces provides virtual desktops that remote agents could use, but it does not provide call routing or contact center features.",
      "Correct — Connect provides a pay-as-you-go cloud contact center that agents can use from home.",
      "SES sends and receives email at scale. It is not a phone-based contact center.",
      "Wickr is an end-to-end encrypted messaging and collaboration service. It is not a customer contact center."
    ]
  },
  {
    id: 356,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service automatically detects, classifies, and migrates on-premises workloads to AWS with minimal downtime?",
    options: [
      "AWS Database Migration Service (DMS)",
      "AWS Application Migration Service",
      "AWS DataSync for file transfers",
      "AWS Transfer Family (SFTP/FTPS)"
    ],
    correct: [1],
    explanation: "AWS Application Migration Service (AWS MGN) is the primary migration service for lift-and-shift migrations. It replicates source servers continuously and cutover causes minimal downtime. It replaced AWS Server Migration Service (SMS).",
    optionExplanations: [
      "AWS DMS migrates and replicates databases — it does not replicate entire servers and cut them over to run on AWS.",
      "Correct — AWS Application Migration Service (MGN) is the primary lift-and-shift migration service, continuously replicating source servers and minimizing downtime during cutover.",
      "AWS DataSync transfers files between on-premises storage and AWS storage — it is for data transfer, not entire server workload migration with cutover.",
      "AWS Transfer Family provides managed file transfer (SFTP, FTPS) — it is for file transfer protocols, not workload migration."
    ]
  },
  {
    id: 357,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A gaming company stores player profiles in Amazon DynamoDB. Its players are in North America, Europe, and Asia. The company wants each player to read and write profile data in a nearby AWS Region, with changes replicated automatically to the other Regions. Which option meets these requirements?",
    options: [
      "Amazon DynamoDB Accelerator (DAX)",
      "Amazon DynamoDB global tables",
      "Amazon RDS cross-Region read replicas",
      "Amazon CloudFront edge caching"
    ],
    correct: [1],
    explanation: "Amazon DynamoDB global tables replicate a table automatically across the AWS Regions that you choose. Every replica accepts reads and writes, so players use the copy closest to them while changes propagate to the other Regions.",
    optionExplanations: [
      "DAX is an in-memory cache that speeds up reads for a DynamoDB table. It does not create writable copies of the table in other Regions.",
      "Correct — DynamoDB global tables keep writable replicas of a table in multiple Regions and replicate changes between them automatically.",
      "RDS read replicas are for relational databases and serve only reads. The company uses DynamoDB and needs local writes in every Region.",
      "CloudFront caches content at edge locations to speed up delivery. It does not replicate database writes between Regions."
    ]
  },
  {
    id: 358,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company needs to move a large amount of data to AWS, but its internet bandwidth is too limited for an online transfer. Which AWS option ships a physical device to the company for offline data transfer?",
    options: [
      "AWS Storage Gateway",
      "AWS DataSync",
      "AWS Snowball Edge",
      "AWS Transfer Family"
    ],
    correct: [2],
    explanation: "AWS Snowball Edge is a physical device for offline data transfer. Customers load data onto the device and ship it back to AWS, which imports it into Amazon S3. For larger datasets, several Snowball Edge devices can be used in parallel.",
    optionExplanations: [
      "AWS Storage Gateway bridges on-premises storage with AWS cloud storage online — it is not a physical device shipped to customers for offline bulk data transfer.",
      "AWS DataSync transfers data online between on-premises and AWS — it operates over network connections, not as a physical device for offline bulk transfer.",
      "Correct — AWS Snowball Edge is a physical device shipped to the customer for offline data transfer, useful when internet bandwidth is insufficient.",
      "AWS Transfer Family provides managed SFTP/FTPS — it is an online file transfer service, not a physical device for bulk data migration."
    ]
  },
  {
    id: 359,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service enables automated, accelerated data transfer between on-premises storage and AWS storage services like S3, EFS, and FSx?",
    options: ["AWS Snowball", "AWS Transfer Family", "AWS DataSync", "AWS Storage Gateway"],
    correct: [2],
    explanation: "AWS DataSync is an online data transfer service that automates moving data between on-premises and AWS storage (S3, EFS, FSx). It handles scheduling, monitoring, encryption, and can transfer at speeds up to 10x faster than open-source tools.",
    optionExplanations: [
      "AWS Snowball is a physical device for offline data transfer — it is for cases where network bandwidth is insufficient, not for accelerated online transfers.",
      "AWS Transfer Family provides managed SFTP/FTPS/FTP — it is for file transfer protocols, not for high-speed automated data sync between on-premises and AWS storage.",
      "Correct — AWS DataSync automates and accelerates online data transfer between on-premises storage and AWS storage services (S3, EFS, FSx) with up to 10x speeds.",
      "AWS Storage Gateway provides hybrid cloud storage access — it is for ongoing hybrid access, not for accelerated one-time or scheduled data transfers."
    ]
  },
  {
    id: 360,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A logistics company receives daily shipment files from dozens of business partners, who upload them over SFTP to an on-premises server. The company wants to retire this server while partners keep using SFTP unchanged, with the files stored directly in Amazon S3 and no servers to manage. Which AWS service should it use?",
    options: [
      "AWS DataSync",
      "AWS Transfer Family",
      "AWS Storage Gateway",
      "Amazon S3 Transfer Acceleration"
    ],
    correct: [1],
    explanation: "AWS Transfer Family is a fully managed service for file transfers over protocols such as SFTP, FTPS, and FTP directly into and out of Amazon S3 or Amazon EFS. Partners keep their existing SFTP workflows, and the company no longer manages a file transfer server.",
    optionExplanations: [
      "DataSync moves data between storage systems, for example during a migration. It does not give external partners a managed SFTP endpoint.",
      "Correct — Transfer Family provides a fully managed SFTP endpoint that stores the uploaded files directly in Amazon S3.",
      "Storage Gateway gives on-premises applications file shares backed by S3. It is not a managed SFTP endpoint for external partners.",
      "Transfer Acceleration speeds up uploads to S3 over long distances, but partners would have to switch from SFTP to S3 uploads."
    ]
  },
  {
    id: 361,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon EC2 feature automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, Lambda functions)?",
    options: ["Amazon Route 53", "Auto Scaling Group", "Elastic Load Balancing (ELB)", "AWS Global Accelerator"],
    correct: [2],
    explanation: "Elastic Load Balancing automatically distributes incoming traffic across multiple healthy targets in one or more AZs. Types include Application Load Balancer (HTTP/HTTPS), Network Load Balancer (TCP/UDP), and Gateway Load Balancer.",
    optionExplanations: [
      "Amazon Route 53 is a DNS service — it can perform some routing via DNS records but does not distribute traffic across targets like load balancers do.",
      "Auto Scaling Group adjusts the number of EC2 instances based on demand — it manages capacity, not distributing incoming traffic across targets.",
      "Correct — Elastic Load Balancing distributes incoming traffic across multiple healthy targets (EC2, containers, Lambda) across one or more AZs.",
      "AWS Global Accelerator routes traffic via the AWS global network using anycast IPs — it improves global performance but is not a per-Region load balancer for distributing traffic across targets."
    ]
  },
  {
    id: 362,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "An online store wants its application to send order confirmations and password reset emails to customers automatically and at scale, without running its own mail servers. Which AWS service should it use?",
    options: [
      "Amazon Simple Email Service (Amazon SES)",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Connect"
    ],
    correct: [0],
    explanation: "Amazon SES is a cloud email service for sending transactional, marketing, and notification emails from applications without managing email servers. It is well suited to customized messages such as order confirmations and password resets sent to any customer address.",
    optionExplanations: [
      "Correct — Amazon SES lets applications send customized transactional emails, such as order confirmations, to customers at scale.",
      "SNS can deliver plain notifications to email endpoints that have confirmed a topic subscription, but it is not designed for customized transactional email to customers.",
      "SQS is a message queue for decoupling application components. It does not deliver email to customers.",
      "Amazon Connect is a cloud contact center service for voice and chat customer service, not for sending application emails."
    ]
  },
  {
    id: 363,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company runs many AWS Lambda functions and Amazon EBS volumes. Its developers want recommendations for the best Lambda memory size and EBS volume type, based on each resource's actual historical utilization, to improve performance and reduce cost. Which AWS service should they use?",
    options: [
      "AWS Trusted Advisor",
      "AWS Compute Optimizer",
      "AWS Cost Explorer",
      "AWS Budgets"
    ],
    correct: [1],
    explanation: "AWS Compute Optimizer analyzes historical utilization metrics and uses machine learning to recommend optimal configurations for EC2 instances, Auto Scaling groups, EBS volumes, Lambda functions, and more.",
    optionExplanations: [
      "Trusted Advisor runs general best-practice checks, such as finding idle resources. It does not recommend the right Lambda memory size from usage history.",
      "Correct — Compute Optimizer recommends Lambda memory sizes and EBS volume types based on historical utilization.",
      "Cost Explorer shows spending trends and forecasts. It does not recommend Lambda memory settings or EBS volume types.",
      "Budgets alerts when costs or usage exceed thresholds. It does not give sizing recommendations."
    ]
  },
  {
    id: 364,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed relational database supporting six database engines: MySQL, MariaDB, PostgreSQL, Oracle, SQL Server, and Amazon Aurora?",
    options: ["Amazon DynamoDB", "Amazon Aurora", "Amazon RDS", "Amazon Redshift"],
    correct: [2],
    explanation: "Amazon RDS (Relational Database Service) is a managed service for relational databases. It handles provisioning, patching, backups, and scaling. It supports MySQL, MariaDB, PostgreSQL, Oracle, SQL Server, and the Aurora-compatible engines.",
    optionExplanations: [
      "Amazon DynamoDB is a NoSQL database — it does not support MySQL, MariaDB, PostgreSQL, Oracle, or SQL Server engines.",
      "Amazon Aurora is a single engine (MySQL/PostgreSQL-compatible) within the RDS family — it does not itself host all six engines listed.",
      "Correct — Amazon RDS is the managed relational database service supporting six engines: MySQL, MariaDB, PostgreSQL, Oracle, SQL Server, and Amazon Aurora.",
      "Amazon Redshift is a data warehouse — it is not a general-purpose relational database service supporting multiple engines."
    ]
  },
  {
    id: 365,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A logistics company models its network of suppliers, warehouses, ports, and shipping routes. Its applications must quickly traverse many relationships, for example to find every supplier affected if a port closes. Which fully managed AWS database service is BEST suited to these highly connected data queries?",
    options: [
      "Amazon DocumentDB",
      "Amazon Neptune",
      "Amazon Redshift",
      "Amazon Keyspaces"
    ],
    correct: [1],
    explanation: "Amazon Neptune is a fully managed graph database built for storing and querying highly connected data. It efficiently traverses relationships, such as suppliers, warehouses, ports, and routes, which is the core of the logistics company's queries.",
    optionExplanations: [
      "Amazon DocumentDB is a MongoDB-compatible document database. It stores JSON documents and is not optimized for traversing many relationships.",
      "Correct — Amazon Neptune is a graph database designed to traverse highly connected data, such as finding all suppliers affected by a closed port.",
      "Amazon Redshift is a data warehouse for analytical SQL queries over large datasets, not for traversing many relationships in highly connected data.",
      "Amazon Keyspaces is an Apache Cassandra-compatible wide-column database. It is not designed for traversing complex relationships."
    ]
  },
  {
    id: 366,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A research ship spends weeks at sea with no network connectivity. Scientists need to run compute workloads on board to process sensor data and later bring the data back to AWS. Which AWS service is designed for this?",
    options: [
      "AWS Outposts racks",
      "AWS Snowball Edge devices",
      "AWS Local Zones",
      "AWS Direct Connect"
    ],
    correct: [1],
    explanation: "AWS Snowball Edge devices provide local storage and compute that work in disconnected, rugged environments; data collected on the device can later be shipped back and imported into Amazon S3. Outposts requires a reliable connection to an AWS Region.",
    optionExplanations: [
      "AWS Outposts brings AWS infrastructure to a data center, but it needs a steady connection back to its parent AWS Region, which a ship at sea does not have.",
      "Correct — Snowball Edge offers on-device compute and storage for disconnected edge locations, and the data can be shipped back to AWS.",
      "Local Zones are AWS-operated infrastructure in metropolitan areas; they cannot run on a ship without connectivity.",
      "Direct Connect is a dedicated network link between a data center and AWS; it does not work for a ship without connectivity."
    ]
  },
  {
    id: 367,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service is a MongoDB-compatible fully managed document database service?",
    options: ["Amazon DynamoDB", "Amazon Keyspaces", "Amazon DocumentDB", "Amazon Neptune"],
    correct: [2],
    explanation: "Amazon DocumentDB (with MongoDB compatibility) is a fully managed document database. It implements the MongoDB API so existing MongoDB applications and drivers work without significant code changes, while AWS manages availability and scaling.",
    optionExplanations: [
      "Amazon DynamoDB is a key-value/document NoSQL database — it uses AWS-specific APIs and is not MongoDB-compatible.",
      "Amazon Keyspaces is Apache Cassandra-compatible — it is a wide-column database, not a MongoDB-compatible document database.",
      "Correct — Amazon DocumentDB is the MongoDB-compatible fully managed document database, allowing existing MongoDB workloads to migrate with minimal code changes.",
      "Amazon Neptune is a graph database — it stores relationships, not JSON-like documents in a MongoDB-compatible format."
    ]
  },
  {
    id: 368,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a scalable, serverless, highly available Apache Cassandra-compatible database?",
    options: [
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon Neptune",
      "Amazon Keyspaces"
    ],
    correct: [3],
    explanation: "Amazon Keyspaces is a serverless, fully managed Cassandra-compatible database service. Existing Cassandra workloads can migrate with minimal code changes. AWS handles scaling, patching, and availability.",
    optionExplanations: [
      "Amazon DynamoDB is a NoSQL key-value/document database with AWS-specific APIs — it is not Apache Cassandra-compatible.",
      "Amazon DocumentDB is MongoDB-compatible — it is for document workloads, not Cassandra wide-column workloads.",
      "Amazon Neptune is a graph database — it is not Cassandra-compatible.",
      "Correct — Amazon Keyspaces is the serverless, fully managed Cassandra-compatible database service for migrating Cassandra workloads with minimal code changes."
    ]
  },
  {
    id: 369,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "An operations team wants to watch the number of server errors returned by its Application Load Balancer and be notified, or trigger an automated action, when errors rise above an acceptable level. Which AWS service should it use?",
    options: [
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "Amazon CloudWatch",
      "AWS Config"
    ],
    correct: [2],
    explanation: "Amazon CloudWatch is the AWS monitoring and observability service. It collects metrics, such as load balancer error counts, and lets you create alarms that notify the team or trigger actions (for example through Amazon SNS, EC2 Auto Scaling, or AWS Lambda) when a threshold is breached. It also supports anomaly detection on metrics.",
    optionExplanations: [
      "CloudTrail records API calls made in the account for auditing; it does not monitor application error metrics or raise alarms on them.",
      "GuardDuty detects security threats such as suspicious activity; it does not monitor application error rates.",
      "Correct — CloudWatch collects the load balancer's error metrics and raises alarms that can notify the team or trigger actions.",
      "AWS Config records and evaluates resource configuration changes; it does not track error metrics over time."
    ]
  },
  {
    id: 370,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides automated operations through runbooks and playbooks, enabling you to patch, configure, and manage EC2 instances and on-premises servers at scale?",
    options: [
      "AWS CloudTrail",
      "Amazon EC2 Auto Scaling",
      "AWS Systems Manager",
      "AWS Config"
    ],
    correct: [2],
    explanation: "AWS Systems Manager provides operational tooling to manage AWS and on-premises resources: patch management (Patch Manager), configuration (State Manager), run commands (Run Command), parameter storage (Parameter Store), and more.",
    optionExplanations: [
      "AWS CloudTrail records API activity in your account for auditing — it does not patch, configure, or run commands on servers.",
      "Amazon EC2 Auto Scaling adjusts the number of EC2 instances based on demand — it manages capacity, not patching, run commands, or configuration management.",
      "Correct — AWS Systems Manager provides runbooks, patch management, run commands, configuration management, and parameter storage for AWS and on-premises servers.",
      "AWS Config evaluates resource configurations against compliance rules — it monitors compliance but does not perform operational tasks like patching or executing remote commands."
    ]
  },
  {
    id: 371,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Front-end developers at a company are building a mobile app. They want a single GraphQL endpoint so that one request can fetch a user's profile from Amazon DynamoDB and the user's orders from an AWS Lambda function, with real-time updates. They do not want to run their own GraphQL servers. Which AWS service should they use?",
    options: [
      "Amazon API Gateway",
      "AWS AppSync",
      "AWS Step Functions",
      "Amazon EventBridge"
    ],
    correct: [1],
    explanation: "AWS AppSync is a managed GraphQL service. It connects to data sources such as DynamoDB, Lambda, Amazon RDS, Amazon OpenSearch Service, and HTTP APIs, and it supports real-time subscriptions, so one request can combine data from several sources.",
    optionExplanations: [
      "API Gateway creates and manages REST, HTTP, and WebSocket APIs. It is not a managed GraphQL service that combines several data sources in one query.",
      "Correct — AppSync provides a managed GraphQL endpoint that combines data from DynamoDB and Lambda in one request, with real-time updates.",
      "Step Functions coordinates the steps of a workflow. It does not provide a GraphQL API for a mobile app.",
      "EventBridge routes events between applications and services. It does not serve GraphQL queries from front-end clients."
    ]
  },
  {
    id: 372,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed CI/CD pipeline for building, testing, and deploying applications?",
    options: ["AWS CloudFormation", "AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy"],
    correct: [1],
    explanation: "AWS CodePipeline is a fully managed continuous delivery service that orchestrates build, test, and deploy phases. It integrates with CodeCommit, CodeBuild, CodeDeploy, GitHub, Jenkins, and third-party tools to automate release pipelines.",
    optionExplanations: [
      "AWS CloudFormation deploys infrastructure as code — it can be a deploy stage in a pipeline, but is not the pipeline orchestration service itself.",
      "Correct — AWS CodePipeline orchestrates CI/CD phases (build, test, deploy), integrating with CodeBuild, CodeDeploy, CodeCommit, GitHub, and other tools.",
      "AWS CodeBuild compiles code and runs tests — it is a build stage within a pipeline, not the orchestration service connecting all stages.",
      "AWS CodeDeploy automates deployments to EC2/Lambda/ECS — it is a deploy stage, not the overall CI/CD pipeline orchestration."
    ]
  },
  {
    id: 373,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A web application runs on several Amazon EC2 instances in two Availability Zones. The company wants incoming traffic spread across the instances and wants requests to stop going to any instance that fails a health check. Which AWS service should it use?",
    options: [
      "Amazon Route 53 Resolver",
      "Elastic Load Balancing",
      "Amazon CloudFront",
      "AWS Direct Connect"
    ],
    correct: [1],
    explanation: "Elastic Load Balancing automatically distributes incoming traffic across healthy targets in multiple Availability Zones and stops routing to targets that fail health checks. It is the standard way to make a multi-instance web tier highly available.",
    optionExplanations: [
      "Route 53 Resolver answers DNS queries inside and between VPCs and on-premises networks; it does not balance traffic across instances.",
      "Correct — Elastic Load Balancing spreads traffic across EC2 instances in multiple AZs and only sends requests to healthy targets.",
      "CloudFront caches content at edge locations; it can sit in front of a load balancer but does not health-check and balance individual instances.",
      "Direct Connect is a private network link between on-premises and AWS; it does not distribute application traffic."
    ]
  },
  {
    id: 374,
    domain: "Cloud Technology & Services",
    type: "multiple",
    question: "An e-commerce order service currently calls the shipping, billing, and email services directly, so when any of them is down, new orders fail. The company wants the order service to publish each order event once, and wants each downstream service to receive and process it independently, with messages held safely while a service is unavailable. Which AWS services should the company use? (Select TWO)",
    options: [
      "Amazon SQS",
      "Amazon RDS",
      "Amazon SNS",
      "Amazon ElastiCache"
    ],
    correct: [0, 2],
    explanation: "Amazon SNS and Amazon SQS together decouple the components (the fan-out pattern). The order service publishes each event once to an SNS topic, which delivers it to an SQS queue for each downstream service. Each queue holds messages until its service can process them, so an outage in one service no longer causes orders to fail.",
    optionExplanations: [
      "Correct — An SQS queue for each downstream service holds messages until that service is available, so services work independently of the order service.",
      "Amazon RDS is a relational database. It stores data but is not a messaging service for decoupling application components.",
      "Correct — An SNS topic lets the order service publish each event once and fans it out to every subscribed downstream service.",
      "Amazon ElastiCache is an in-memory cache used to speed up data access. It is not used to deliver messages between application components."
    ]
  },
  {
    id: 375,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which Amazon S3 feature allows you to host a static website (HTML, CSS, JavaScript) directly from an S3 bucket?",
    options: ["S3 Transfer Acceleration", "S3 Object Lambda", "S3 Static Website Hosting", "S3 Replication"],
    correct: [2],
    explanation: "S3 Static Website Hosting lets you serve a static website directly from an S3 bucket with a custom domain. Files are served via HTTP. For HTTPS and CDN, you would place CloudFront in front of the S3 bucket.",
    optionExplanations: [
      "S3 Transfer Acceleration speeds up uploads/downloads to S3 via CloudFront edge locations — it does not host static websites directly from the bucket.",
      "S3 Object Lambda transforms data as it is retrieved from S3 using Lambda — it is for data transformation, not static website hosting.",
      "Correct — S3 Static Website Hosting serves HTML/CSS/JS files directly from an S3 bucket as a static website, with HTTP endpoints (HTTPS requires CloudFront).",
      "S3 Replication copies objects between buckets — it provides redundancy or geographic distribution, not website hosting capabilities."
    ]
  },
  {
    id: 376,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Which AWS service provides a fully managed message broker service supporting Apache ActiveMQ and RabbitMQ protocols?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon Kinesis", "Amazon MQ"],
    correct: [3],
    explanation: "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ. It is designed for migrating existing message broker workloads to AWS with minimal code changes. SQS and SNS are AWS-native alternatives for new applications.",
    optionExplanations: [
      "Amazon SQS is AWS-native message queuing — it uses its own API, not Apache ActiveMQ or RabbitMQ protocols, so existing apps would require code rewrites to migrate.",
      "Amazon SNS is an AWS-native pub/sub notification service — it does not support ActiveMQ or RabbitMQ protocols.",
      "Amazon Kinesis is for real-time data streaming — it is not a message broker compatible with ActiveMQ or RabbitMQ.",
      "Correct — Amazon MQ is the managed message broker service supporting Apache ActiveMQ and RabbitMQ, enabling migration of existing message broker workloads with minimal code changes."
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // BATCH 2 — DOMAIN 4: Billing, Pricing & Support (ids 377–400)
  // ────────────────────────────────────────────────────────────────
  {
    id: 377,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A payment processor runs mission-critical workloads where even short outages are very costly. It wants its AWS Support plan to provide designated domain specialist engineers who know its applications, incident management engineers who engage within minutes during critical incidents, and continuous resiliency reviews. Which AWS Support plan meets these requirements?",
    options: [
      "Basic Support",
      "AWS Business Support+",
      "AWS Enterprise Support",
      "AWS Unified Operations"
    ],
    correct: [3],
    explanation: "AWS Unified Operations is the Support option for mission-critical workloads that need enhanced resilience and application-specific expertise. It adds designated domain specialist engineers, incident management engineers who respond within minutes to critical incidents, and continuous architectural and resiliency reviews.",
    optionExplanations: [
      "Basic Support covers customer service, documentation, AWS re:Post, and Trusted Advisor core checks. It has no engineers assigned to the company's workloads.",
      "Business Support+ is the minimum recommended plan for production workloads, with 24/7 technical support, but it has no designated domain specialists or incident management engineers.",
      "Enterprise Support provides a designated TAM and consultative reviews for business-critical workloads, but the domain specialist and incident management engineers described are part of Unified Operations.",
      "Correct — Unified Operations is designed for mission-critical workloads, with domain specialist engineers, incident management engineers, and continuous resiliency reviews."
    ]
  },
  {
    id: 378,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A development team stops its Amazon EBS-backed EC2 On-Demand instances every evening and over weekends to save money. While the instances are stopped, which cost continues to accrue?",
    options: [
      "Hourly compute charges for the instances",
      "Storage charges for the attached EBS volumes",
      "Data transfer charges for incoming internet traffic",
      "License charges included in the instance hourly price"
    ],
    correct: [1],
    explanation: "When an EBS-backed instance is stopped, AWS stops charging for instance usage, but its EBS volumes still exist and continue to incur storage charges. To remove that cost as well, the team would need to delete volumes it no longer needs, for example after taking snapshots.",
    optionExplanations: [
      "Compute charges for an On-Demand instance stop while the instance is in the stopped state.",
      "Correct — the EBS volumes remain provisioned while the instance is stopped, so their storage is still billed.",
      "Inbound data transfer from the internet is generally not charged, and a stopped instance is not receiving traffic anyway.",
      "Software licenses included in the instance price, such as a Windows license, are billed with instance usage, so they stop too."
    ]
  },
  {
    id: 379,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A startup moves a small API to AWS Lambda. The API receives very few requests at night and many during business hours. How will the startup be charged for running its Lambda functions?",
    options: [
      "A fixed monthly fee per deployed function",
      "Per request and per execution duration",
      "Hourly for underlying servers, even when idle",
      "By the peak number of users each month"
    ],
    correct: [1],
    explanation: "AWS Lambda charges for the number of requests and for the time the code runs, based on the memory allocated to the function. With the default on-demand model there is no charge when the code is not running, so the quiet night hours cost very little.",
    optionExplanations: [
      "Lambda has no fixed monthly fee per function; the cost depends on how much the functions are actually used.",
      "Correct — Lambda bills for each request and for the duration of each execution, so cost follows actual usage.",
      "Lambda is serverless: the startup does not pay for idle servers, only for requests and execution time.",
      "Lambda pricing is not based on the number of users; it is based on requests and execution duration."
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
    question: "A company gives each development team a monthly AWS spending limit. Team leads want an email or Amazon SNS alert as soon as their actual costs exceed the limit, or when costs are forecast to exceed it before the month ends. Which AWS service should the company use?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Cost and Usage Report"
    ],
    correct: [2],
    explanation: "AWS Budgets lets you set custom cost, usage, or reservation budgets and sends alerts by email or Amazon SNS when actual or forecasted amounts exceed your thresholds. It can also run budget actions, such as applying IAM policies or SCPs, when a budget is exceeded.",
    optionExplanations: [
      "Cost Explorer visualizes and forecasts spending, but it is not the service for defining budget thresholds and sending alerts.",
      "Pricing Calculator estimates the cost of planned workloads; it does not track actual spending or send alerts.",
      "Correct — AWS Budgets alerts team leads when actual or forecasted costs exceed their monthly limit.",
      "The Cost and Usage Report provides detailed billing data files; it does not send threshold alerts."
    ]
  },
  {
    id: 382,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company has tagged its AWS resources with a \"CostCenter\" tag. The finance team wants to break down costs by this tag in AWS Cost Explorer, but the tag does not appear there. What must the team do?",
    options: [
      "Activate it as a cost allocation tag",
      "Rename it to start with aws:",
      "Recreate every tagged resource",
      "Upgrade to a paid Support plan"
    ],
    correct: [0],
    explanation: "User-defined tags must be activated as cost allocation tags in the Billing and Cost Management console before they can be used to filter and group costs in Cost Explorer and billing reports. Only tags applied after activation appear in cost data.",
    optionExplanations: [
      "Correct — user-defined tags appear in Cost Explorer and billing reports only after they are activated as cost allocation tags.",
      "The aws: prefix is reserved for AWS-generated tags; customers cannot create tags with it.",
      "Resources do not need to be recreated; activating the tag is enough for new cost data.",
      "Cost allocation tags are available without any paid Support plan."
    ]
  },
  {
    id: 383,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company runs a batch job on Amazon EC2 On-Demand Linux instances that finishes in about 12 minutes. A manager assumes the company pays for a full hour each time. How is this usage actually billed?",
    options: [
      "Per second, after a short minimum",
      "Per full hour, rounded up",
      "Per day the instance exists",
      "A flat monthly fee per instance"
    ],
    correct: [0],
    explanation: "On-Demand Linux instances are billed per second with a one-minute minimum, so the company pays only for the time the instances actually run. This pay-as-you-go model is one of the key benefits of cloud pricing.",
    optionExplanations: [
      "Correct — On-Demand Linux instances use per-second billing with a short minimum, so a 12-minute job is not charged as a full hour.",
      "Hourly rounding does not apply to On-Demand Linux instances, which are billed per second.",
      "EC2 instances are billed for running time, not for each day they exist.",
      "On-Demand instances have no flat monthly fee; you pay only for the time used."
    ]
  },
  {
    id: 384,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company recently acquired two other businesses, and each one has its own AWS account with its own payment method. The CFO wants a single monthly bill paid from one account, and wants the combined usage of all accounts to count toward volume pricing tiers. Which AWS service should the company use?",
    options: [
      "AWS Cost Explorer",
      "AWS Organizations",
      "AWS Budgets",
      "AWS Trusted Advisor"
    ],
    correct: [1],
    explanation: "AWS Organizations provides consolidated billing. The management account receives one bill for all member accounts and pays it, and usage is combined across accounts, which can reach lower volume pricing tiers sooner.",
    optionExplanations: [
      "Cost Explorer analyzes and visualizes costs. It does not combine separate accounts into one bill.",
      "Correct — Consolidated billing in AWS Organizations gives one bill for all accounts and combines usage for volume pricing tiers.",
      "Budgets sets spending thresholds and sends alerts. It does not merge billing across accounts.",
      "Trusted Advisor gives best-practice recommendations. It does not consolidate billing or combine usage."
    ]
  },
  {
    id: 385,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company has multiple AWS accounts for different departments. Which AWS feature allows all accounts to benefit from one department's Reserved Instance purchases?",
    options: [
      "AWS Budgets",
      "Consolidated billing",
      "AWS Cost Explorer",
      "AWS Pricing Calculator"
    ],
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
    question: "A student creates a new AWS account to learn about cloud computing and does not want to pay for support. The student checks which support plan the account has automatically and confirms that it includes documentation, whitepapers, AWS re:Post, and the AWS Health Dashboard. Which AWS Support plan does the account have?",
    options: [
      "AWS Business Support+",
      "AWS Enterprise Support",
      "AWS Unified Operations",
      "Basic Support"
    ],
    correct: [3],
    explanation: "AWS Basic Support is included automatically with every AWS account at no extra cost. It provides 24/7 customer service, documentation, whitepapers, AWS re:Post, AWS Trusted Advisor core checks, and a personalized view of service health through AWS Health. Technical support from AWS engineers requires a paid plan such as Business Support+.",
    optionExplanations: [
      "Business Support+ is a paid plan for production workloads that the account owner must choose. It is not included automatically with a new account.",
      "Enterprise Support is a paid plan for business-critical workloads. It is not included automatically with a new account.",
      "Unified Operations is a paid option for mission-critical workloads. It is not included automatically with a new account.",
      "Correct — Basic Support is included with every AWS account and provides documentation, whitepapers, AWS re:Post, and AWS Health."
    ]
  },
  {
    id: 388,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company runs a nightly analytics job on Amazon EC2. The results are not latency-sensitive, and the company has no data residency requirements. It wants to lower the job's cost without changing the instance type or the purchasing option. What should the company evaluate?",
    options: [
      "Running the job in a Region with lower prices",
      "Running the job in an AWS Local Zone near users",
      "Upgrading the account to AWS Business Support+",
      "Moving the job to an Amazon CloudFront edge location"
    ],
    correct: [0],
    explanation: "AWS prices for the same service and instance type can differ between Regions. When latency and data residency are not constraints, running the workload in a lower-priced Region can reduce cost, as long as the company also considers any data transfer charges between Regions.",
    optionExplanations: [
      "Correct — prices vary by Region, so a Region with a lower price for the same instance type can reduce the job's cost.",
      "Local Zones place compute close to end users for low latency. The job is not latency-sensitive, and this does not target lower prices.",
      "A Support plan adds technical support. It does not lower the price of EC2 instances.",
      "CloudFront edge locations cache and deliver content. They cannot run the company's EC2 analytics job."
    ]
  },
  {
    id: 389,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company runs development and production resources in the same AWS account. It wants to attach labels such as Environment and Owner to each resource, so it can restrict developers to development resources with IAM conditions and split its bill by owner. Which AWS feature should it use?",
    options: [
      "AWS Resource Groups",
      "AWS Config rules",
      "Resource tags",
      "AWS Organizations OUs"
    ],
    correct: [2],
    explanation: "Resource tags are key-value labels attached to AWS resources. Tags can be used in IAM policy conditions to control access (for example, only to resources tagged Environment=Development), and activated cost allocation tags let the company break down its bill by owner in billing tools such as Cost Explorer.",
    optionExplanations: [
      "Resource Groups organize resources that already share tags or other criteria; they do not label resources or control access by themselves.",
      "Config rules evaluate whether resources comply with desired settings (for example, whether required tags exist); they do not label resources.",
      "Correct — tags label each resource, can be used in IAM conditions, and enable cost allocation by owner.",
      "OUs group AWS accounts within an organization; they cannot separate resources that live inside the same account."
    ]
  },
  {
    id: 390,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company is analyzing its AWS bill and notices unexpectedly high data transfer costs. Which AWS service would BEST help identify exactly which resources are generating these costs?",
    options: [
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost and Usage Report with Athena",
      "AWS Trusted Advisor cost optimization checks"
    ],
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
    question: "A small company uses only the AWS Basic Support plan. Its finance team has a question about an unexpected charge on the monthly invoice. What can the team do?",
    options: [
      "Open an account and billing support case at no extra cost",
      "Upgrade to Business Support+ before AWS answers billing questions",
      "Ask the Technical Account Manager assigned to the account",
      "Post the invoice details on AWS re:Post for community help only"
    ],
    correct: [0],
    explanation: "Every AWS Support plan, including the free Basic plan, includes 24/7 customer service for account and billing questions. The team can open an account and billing support case without upgrading, while technical support cases require a paid plan.",
    optionExplanations: [
      "Correct — Basic Support includes customer service for account and billing questions, so the team can open a billing case at no additional cost.",
      "Upgrading adds technical support. Account and billing questions are already covered by customer service in every plan, including Basic.",
      "A designated Technical Account Manager comes with Enterprise Support, not with Basic Support, so this account has none.",
      "re:Post is a community Q&A site and is not the right place for private invoice details. AWS customer service handles billing questions directly."
    ]
  },
  {
    id: 392,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company has five AWS accounts that each use a moderate amount of Amazon S3 storage. The finance team wants the accounts to benefit from lower tiered pricing based on their combined usage. What should the company do?",
    options: [
      "Enable consolidated billing with AWS Organizations",
      "Buy a separate Savings Plan for each of the five accounts",
      "Activate cost allocation tags in every account",
      "Upgrade every account to Business Support+"
    ],
    correct: [0],
    explanation: "With consolidated billing in AWS Organizations, usage from all accounts is combined for pricing purposes, so the organization reaches volume pricing tiers (such as S3 storage tiers) sooner. Cost allocation tags only help track costs; they do not change prices.",
    optionExplanations: [
      "Correct — consolidated billing aggregates usage across all member accounts, so tiered volume discounts apply to the combined total.",
      "Savings Plans give discounts on compute usage in exchange for a commitment; they do not combine S3 storage usage across accounts.",
      "Cost allocation tags help categorize and report costs; they do not lower the price of any usage.",
      "Support plans provide technical support; they have no effect on volume pricing tiers."
    ]
  },
  {
    id: 393,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company on the AWS Enterprise Support plan has complex questions about its invoices and account structure. Which AWS resource included in its plan specializes in billing and account inquiries?",
    options: [
      "The AWS Trust & Safety team",
      "The Enterprise billing concierge",
      "AWS Professional Services consultants",
      "AWS Partner Network firms"
    ],
    correct: [1],
    explanation: "Enterprise Support includes a white-glove billing concierge: billing and account experts who help with invoices, account structure, and other billing inquiries. The Trust & Safety team handles abuse reports, and Professional Services and partners help with technical projects, not invoices.",
    optionExplanations: [
      "The Trust & Safety team handles reports of abuse, such as spam or attacks coming from AWS resources. It does not answer billing questions.",
      "Correct — Enterprise Support includes a white-glove billing concierge that helps with billing and account inquiries.",
      "AWS Professional Services helps customers with migration and architecture projects. It does not handle invoices and account inquiries.",
      "The AWS Partner Network consists of third-party consulting and technology partners. It is not the AWS team for billing support."
    ]
  },
  {
    id: 394,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS offering provides the global network of AWS partners (consulting firms, ISVs, resellers) that complement AWS services?",
    options: [
      "AWS Marketplace software catalog",
      "AWS Knowledge Center",
      "AWS Partner Network (APN)",
      "AWS re:Post community"
    ],
    correct: [2],
    explanation: "The AWS Partner Network (APN) is the global community of AWS partners, including Consulting Partners (implement AWS solutions) and Technology Partners (software products that run on or integrate with AWS). APN Partners are vetted by AWS.",
    optionExplanations: [
      "AWS Marketplace is an online store for buying third-party software and SaaS products — it is not a network of certified consulting and technology partner companies.",
      "The AWS Knowledge Center is a collection of articles answering common support questions; it is not a network of partner companies.",
      "Correct — The AWS Partner Network (APN) is the global community of Consulting Partners (implementation firms) and Technology Partners (ISVs) that build on or work with AWS.",
      "AWS re:Post is a community Q&A forum — it is not a program for certifying or organizing business partners."
    ]
  },
  {
    id: 395,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Which AWS service is an online catalog of third-party software, SaaS products, and data products that can be deployed directly to AWS accounts?",
    options: [
      "AWS Partner Network",
      "AWS Service Catalog",
      "AWS Marketplace",
      "AWS License Manager"
    ],
    correct: [2],
    explanation: "AWS Marketplace is a digital catalog of thousands of software listings from independent vendors. Customers can find, test, buy, and deploy software on AWS. Purchases are billed through the AWS account, simplifying procurement.",
    optionExplanations: [
      "The AWS Partner Network is a certification program for consulting and technology partner companies — it is not a storefront for purchasing software products.",
      "AWS Service Catalog allows organizations to create internal catalogs of approved IT services for employees — it is for internal governance, not buying third-party products.",
      "Correct — AWS Marketplace is the digital storefront where customers can find, test, buy, and deploy thousands of third-party software and SaaS products, billed through their AWS account.",
      "AWS License Manager tracks and controls software license usage; it is not a catalog where you discover and buy third-party products."
    ]
  },
  {
    id: 396,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A video platform stores a rapidly growing library in Amazon S3. Without signing any commitment, the finance team notices that the price per GB it pays for storage goes down as the total amount stored each month increases. Which AWS pricing principle explains this?",
    options: [
      "Pay-as-you-go",
      "Pay less when you reserve",
      "Pay less by using more",
      "AWS Free Tier"
    ],
    correct: [2],
    explanation: "'Pay less by using more' refers to tiered, volume-based pricing. For services such as Amazon S3 storage and data transfer, the price per unit goes down as usage grows, with no commitment required.",
    optionExplanations: [
      "Pay-as-you-go means paying only for what you use, with no upfront costs. It does not explain why the per-unit price goes down as volume grows.",
      "Pay less when you reserve requires a commitment, such as Reserved Instances or Savings Plans. The finance team signed no commitment.",
      "Correct — Tiered pricing lowers the per-GB price as storage volume grows, without any commitment.",
      "The Free Tier offers limited free usage to customers. It does not lower the per-unit price as usage grows."
    ]
  },
  {
    id: 397,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A developer created an AWS account on the Free plan. The account is approaching the end of its first six months, and the developer wants the workloads to keep running afterward. What must the developer do?",
    options: [
      "Upgrade the account to the Paid plan",
      "Earn more credits by trying more services",
      "Subscribe to AWS Business Support+",
      "Enable consolidated billing for the account"
    ],
    correct: [0],
    explanation: "A Free plan account can use its credits for up to six months. When that period ends or the credits run out, the account closes unless the owner upgrades it to the Paid plan. After upgrading, always free offers still apply and other usage is charged.",
    optionExplanations: [
      "Correct — upgrading to the Paid plan keeps the account open after the Free plan period ends, with usage beyond free offers charged.",
      "Exploring services can add credits, but the Free plan still ends after six months, and the account closes unless it is upgraded.",
      "Business Support+ is a technical support plan. Buying support does not replace upgrading the account to the Paid plan.",
      "Consolidated billing combines the bills of accounts in an organization. It does not extend the Free plan period."
    ]
  },
  {
    id: 398,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "Before migrating to AWS, a company plans to copy the server sizes it uses on premises, many of which were bought years ago for peak demand. A consultant recommends first reviewing each workload's actual CPU, memory, and storage needs, and then choosing the instance type and size with the best performance-to-cost ratio. Which cost optimization practice is the consultant recommending?",
    options: [
      "Using Spot Instances for all workloads",
      "Right-sizing",
      "Using Reserved Instances for all workloads",
      "Keeping the on-premises server sizes"
    ],
    correct: [1],
    explanation: "Right-sizing means matching instance types and sizes to the workload's actual performance and capacity needs at the lowest cost. Analyzing real utilization instead of copying oversized on-premises servers avoids paying for unused capacity. AWS Compute Optimizer can provide right-sizing recommendations.",
    optionExplanations: [
      "Spot Instances can be interrupted, so they are not suitable for all workloads. The consultant's advice is about choosing the right size, not a purchasing option.",
      "Correct — Right-sizing analyzes actual resource needs and selects the instance type and size with the best performance-to-cost ratio.",
      "Reserved Instances are a pricing commitment. Committing to oversized instances would lock in the waste that the consultant wants to remove.",
      "Keeping the on-premises sizes is the company's original plan, which would carry oversized servers into AWS. The consultant recommends the opposite."
    ]
  },
  {
    id: 399,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "An operations team wants to be notified when AWS schedules maintenance on the underlying hosts of its EC2 instances or when an AWS service issue affects resources in its own account. Where should the team look for these account-specific events?",
    options: [
      "Amazon CloudWatch metrics",
      "AWS Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Config timeline"
    ],
    correct: [1],
    explanation: "The AWS Health Dashboard shows AWS events that affect your own account and resources, such as scheduled maintenance or service issues, together with remediation guidance; the same information is available programmatically through the AWS Health API. It also includes a public view of the overall health of AWS services.",
    optionExplanations: [
      "CloudWatch metrics show the performance of your resources, but they do not report AWS-side events such as scheduled host maintenance.",
      "Correct — the AWS Health Dashboard lists AWS events that affect your account's resources, including scheduled maintenance and service issues.",
      "Trusted Advisor gives best-practice recommendations; it does not notify you about AWS maintenance or service events.",
      "AWS Config records how your resource configurations change over time; it does not report AWS service events."
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
  },

  // ────────────────────────────────────────────────────────────────
  // ADDITIONAL QUESTIONS (ids 401–500)
  // ────────────────────────────────────────────────────────────────
  {
    id: 401,
    domain: "Cloud Concepts",
    type: "single",
    question: "During a migration assessment, a company discovers an internal reporting application that no one has used for over a year. The company wants to decommission it instead of moving it to AWS. Which migration strategy does this represent?",
    options: [
      "Retain",
      "Retire",
      "Rehost",
      "Relocate"
    ],
    correct: [1],
    explanation: "Retire means decommissioning applications that are no longer needed, which reduces the scope, cost, and effort of the migration. Retain is the closest distractor, but it means keeping an application running on premises for now, not shutting it down.",
    optionExplanations: [
      "Retain keeps an application running in its current environment, often to revisit later. Here the company wants to shut the application down.",
      "Correct — Retire means decommissioning applications that no longer provide business value, so they are not migrated at all.",
      "Rehost moves an application to AWS with few or no changes. An unused application does not need to be moved.",
      "Relocate moves infrastructure (for example, VMware-based workloads) to AWS without changes. It does not shut anything down."
    ]
  },
  {
    id: 402,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company's ERP system was upgraded on premises last year and depends on other on-premises systems that cannot move yet. The company decides to keep the ERP system where it is and reconsider migration in the future. Which migration strategy is the company using?",
    options: [
      "Retire",
      "Repurchase",
      "Retain",
      "Replatform"
    ],
    correct: [2],
    explanation: "Retain (sometimes called revisit) means keeping an application in its source environment for now, often because of recent investments or dependencies. Retire would decommission the system, which is not the case here because the ERP is still needed.",
    optionExplanations: [
      "Retire means decommissioning the application. The ERP system is still in use and needed by the business.",
      "Repurchase means moving to a different product, typically a SaaS solution. The company is keeping its current ERP system.",
      "Correct — Retain means keeping the application where it is for now and revisiting the decision later, for example after dependencies are resolved.",
      "Replatform moves the application to AWS with some optimizations. The company has decided not to move it yet."
    ]
  },
  {
    id: 403,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company runs hundreds of virtual machines on VMware vSphere on premises. It wants to move them to AWS quickly without buying new hardware, rewriting the applications, or changing its existing VMware operations. Which migration strategy BEST fits this goal?",
    options: [
      "Relocate",
      "Refactor",
      "Repurchase",
      "Retire"
    ],
    correct: [0],
    explanation: "Relocate moves infrastructure to the cloud without purchasing new hardware, rewriting applications, or changing existing operations, for example by moving VMware workloads to VMware Cloud on AWS. Refactor would require redesigning the applications, which the company wants to avoid.",
    optionExplanations: [
      "Correct — Relocate moves workloads such as VMware-based virtual machines to AWS without new hardware, code changes, or changes to existing operations.",
      "Refactor means re-architecting the application with cloud-native features. The company does not want to rewrite its applications.",
      "Repurchase replaces an application with a different product, usually SaaS. The company wants to keep its existing virtual machines.",
      "Retire means decommissioning applications. The company wants to keep running these workloads."
    ]
  },
  {
    id: 404,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to lift and shift many physical and virtual servers to Amazon EC2. It wants to replicate the servers continuously so that the final cutover causes only minimal downtime. Which AWS service should the company use?",
    options: [
      "AWS DataSync",
      "AWS Transfer Family",
      "AWS Database Migration Service (AWS DMS)",
      "AWS Application Migration Service"
    ],
    correct: [3],
    explanation: "AWS Application Migration Service is the primary AWS service for rehosting (lift and shift). It continuously replicates source servers to AWS and launches them as EC2 instances at cutover with minimal downtime. AWS DataSync moves files and AWS DMS moves databases; neither replicates entire servers.",
    optionExplanations: [
      "AWS DataSync transfers files and objects between storage systems. It does not replicate entire servers to run as EC2 instances.",
      "AWS Transfer Family provides managed SFTP, FTPS, and FTP endpoints for exchanging files. It does not replicate servers to Amazon EC2.",
      "AWS DMS migrates databases, not entire physical or virtual servers.",
      "Correct — AWS Application Migration Service continuously replicates servers to AWS and launches them as EC2 instances, which simplifies rehosting with minimal cutover downtime."
    ]
  },
  {
    id: 405,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to move its on-premises Oracle database to Amazon Aurora. The source database must stay fully operational during the migration to minimize downtime. Which AWS service is designed for this task?",
    options: [
      "AWS Snowball Edge",
      "AWS Application Migration Service",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon S3 Transfer Acceleration"
    ],
    correct: [2],
    explanation: "AWS DMS migrates databases to AWS while the source database remains operational, and it supports both same-engine and different-engine migrations such as Oracle to Aurora. AWS Application Migration Service is for rehosting whole servers, not for converting a database to a different engine.",
    optionExplanations: [
      "AWS Snowball Edge is a physical device for moving large amounts of data offline. It does not keep a live database in sync with Aurora.",
      "AWS Application Migration Service rehosts whole servers on EC2. It does not migrate data into a managed database engine such as Aurora.",
      "Correct — AWS DMS migrates databases with minimal downtime while the source stays operational, including migrations between different database engines.",
      "S3 Transfer Acceleration speeds up uploads to Amazon S3. It is not a database migration service."
    ]
  },
  {
    id: 406,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company needs to move several hundred terabytes of archived data to AWS as a one-time project. Its internet connection is slow, and an online transfer would take many months. Which AWS option is the MOST suitable?",
    options: [
      "AWS Direct Connect",
      "AWS DataSync",
      "Amazon CloudFront",
      "AWS Snowball Edge"
    ],
    correct: [3],
    explanation: "AWS Snowball Edge, part of the AWS Snow Family, is a physical device that is shipped to the customer, loaded with data, and returned to AWS for import. It avoids network bottlenecks for very large one-time transfers. AWS DataSync is an online transfer service, so it would still be limited by the slow connection.",
    optionExplanations: [
      "AWS Direct Connect provides a dedicated network link, but it takes time to set up and is meant for ongoing connectivity rather than a one-time bulk transfer.",
      "AWS DataSync transfers data over the network, so it would still be limited by the slow internet connection.",
      "Amazon CloudFront is a content delivery network for serving content to users. It is not a data migration tool.",
      "Correct — AWS Snowball Edge moves large amounts of data offline on a physical device, avoiding the slow network for a one-time migration."
    ]
  },
  {
    id: 407,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company has used the AWS Cloud Adoption Framework (AWS CAF) to define its cloud vision and to align its leaders on the changes needed. It is now running a small number of pilot projects in production to show early business value. Which phase of the cloud transformation journey is the company in?",
    options: [
      "Envision",
      "Align",
      "Launch",
      "Scale"
    ],
    correct: [2],
    explanation: "The AWS CAF describes four iterative phases of cloud transformation: Envision, Align, Launch, and Scale. In the Launch phase, an organization delivers pilot initiatives in production and demonstrates incremental business value. It then applies what it learns before expanding in the Scale phase.",
    optionExplanations: [
      "The Envision phase identifies and prioritizes transformation opportunities that support business goals. The company has already defined its vision.",
      "The Align phase identifies capability gaps across the CAF perspectives and creates an action plan with stakeholders. The company has already aligned its leaders.",
      "Correct — The Launch phase delivers pilot initiatives in production and demonstrates incremental business value.",
      "The Scale phase expands successful production pilots to the desired scale and business impact. The company is still running only a few pilots."
    ]
  },
  {
    id: 408,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company is starting its cloud journey. Managers are worried that employees lack cloud skills and that teams will resist the new ways of working. Which AWS Cloud Adoption Framework (AWS CAF) perspective addresses these concerns?",
    options: [
      "Governance",
      "People",
      "Platform",
      "Operations"
    ],
    correct: [1],
    explanation: "The People perspective acts as a bridge between technology and business, focusing on culture, organizational structure, leadership, workforce skills, and change management. Governance focuses on program management, risk, and cloud financial management, not on staff skills and culture.",
    optionExplanations: [
      "The Governance perspective focuses on orchestrating cloud initiatives, managing risk, and cloud financial management, not on skills and culture.",
      "Correct — The People perspective covers culture, organizational change, leadership, and building workforce cloud skills.",
      "The Platform perspective focuses on building the technical cloud platform and architecture, not on training and culture.",
      "The Operations perspective focuses on running and supporting cloud services at agreed levels, not on staff skills or resistance to change."
    ]
  },
  {
    id: 409,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to orchestrate its cloud initiatives so that it maximizes business benefits while minimizing transformation risks. It also wants to manage cloud spending and the application portfolio. Which AWS CAF perspective BEST matches these goals?",
    options: [
      "Security",
      "Business",
      "People",
      "Governance"
    ],
    correct: [3],
    explanation: "The Governance perspective helps orchestrate cloud initiatives while maximizing benefits and minimizing risks, with capabilities such as program management, risk management, cloud financial management, and application portfolio management. The Business perspective focuses on making sure cloud investments support business outcomes and strategy, not on governing the program itself.",
    optionExplanations: [
      "The Security perspective focuses on confidentiality, integrity, and availability of data and workloads, not on program and spending management.",
      "The Business perspective ensures cloud investments accelerate business outcomes. Managing risk, spending, and the program is part of Governance.",
      "The People perspective focuses on culture, skills, and organizational change, not on cloud spending or risk management.",
      "Correct — The Governance perspective covers program management, risk management, cloud financial management, and application portfolio management."
    ]
  },
  {
    id: 410,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company's architects and engineers must design a scalable hybrid cloud environment, modernize existing workloads, and set up automated pipelines for deploying cloud-native applications. Which AWS CAF perspective focuses on these activities?",
    options: [
      "Platform",
      "Operations",
      "Security",
      "Business"
    ],
    correct: [0],
    explanation: "The Platform perspective helps build an enterprise-grade, scalable hybrid cloud platform, modernize existing workloads, and implement cloud-native solutions. The Operations perspective focuses on running and supporting those services once they are in place, such as monitoring and incident management.",
    optionExplanations: [
      "Correct — The Platform perspective covers platform architecture and engineering, modernizing workloads, and delivering cloud-native solutions.",
      "The Operations perspective focuses on delivering cloud services at agreed levels, including observability and incident management, rather than designing the platform.",
      "The Security perspective focuses on protecting data and workloads, not on designing the overall cloud platform.",
      "The Business perspective focuses on business strategy and outcomes, not on technical platform design."
    ]
  },
  {
    id: 411,
    domain: "Cloud Concepts",
    type: "single",
    question: "After migrating to AWS, a company's IT team wants to define service levels, monitor workload health, and set up incident and problem management processes. Which AWS CAF perspective focuses on these capabilities?",
    options: [
      "Platform",
      "People",
      "Business",
      "Operations"
    ],
    correct: [3],
    explanation: "The Operations perspective helps ensure that cloud services are delivered at a level that meets business needs, with capabilities such as observability, incident and problem management, and service level management. The Platform perspective is about building the cloud environment rather than operating it day to day.",
    optionExplanations: [
      "The Platform perspective focuses on building the cloud platform and modernizing workloads, not on day-to-day service operations.",
      "The People perspective focuses on culture, skills, and organizational change, not on monitoring or incident management.",
      "The Business perspective focuses on business strategy and outcomes, not on operational processes.",
      "Correct — The Operations perspective covers observability, incident and problem management, and making sure services meet agreed service levels."
    ]
  },
  {
    id: 412,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "A company's leadership asks what business outcomes the AWS Cloud Adoption Framework (AWS CAF) can help achieve. Which of the following are benefits described by the AWS CAF? (Select TWO)",
    options: [
      "Elimination of all customer security responsibilities",
      "Reduced business risk",
      "Guaranteed zero downtime for migrated workloads",
      "Increased operational efficiency",
      "No further need to train IT staff"
    ],
    correct: [1, 3],
    explanation: "The AWS CAF describes four business outcomes of digital transformation: reduced business risk, improved environmental, social, and governance (ESG) performance, increased revenue, and increased operational efficiency. The framework does not remove customer security responsibilities, guarantee zero downtime, or remove the need for training; in fact, the People perspective emphasizes building skills.",
    optionExplanations: [
      "Under the shared responsibility model, customers always keep security responsibilities in the cloud. The AWS CAF does not change this.",
      "Correct — Reduced business risk is one of the business outcomes that the AWS CAF identifies.",
      "No framework can guarantee zero downtime. Availability depends on how workloads are designed and operated.",
      "Correct — Increased operational efficiency is one of the business outcomes that the AWS CAF identifies.",
      "The AWS CAF People perspective stresses building cloud skills, so training remains important."
    ]
  },
  {
    id: 413,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to reduce the environmental impact of its AWS workloads. Which action BEST aligns with the Sustainability pillar of the AWS Well-Architected Framework?",
    options: [
      "Provision resources for peak load at all times",
      "Deploy copies of every workload in all Regions",
      "Right-size resources to maximize their utilization",
      "Keep development environments running around the clock"
    ],
    correct: [2],
    explanation: "A key Sustainability design principle is to maximize utilization: right-sizing and removing idle capacity means less hardware and energy are needed for the same work. Permanently provisioning for peak load or running idle environments wastes resources and increases environmental impact.",
    optionExplanations: [
      "Provisioning for peak load all the time leaves resources idle most of the time, which wastes energy.",
      "Deploying every workload in all Regions without a business need multiplies resource usage and its environmental impact.",
      "Correct — Right-sizing and maximizing utilization reduces the total resources needed, which is a core Sustainability design principle.",
      "Development environments that run when nobody uses them consume resources needlessly. Stopping them when idle is more sustainable."
    ]
  },
  {
    id: 414,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company deploys large application releases only a few times a year. These releases are risky and hard to roll back when something goes wrong. Which AWS Well-Architected Framework pillar recommends making frequent, small, reversible changes instead?",
    options: [
      "Cost Optimization",
      "Performance Efficiency",
      "Operational Excellence",
      "Sustainability"
    ],
    correct: [2],
    explanation: "Making frequent, small, reversible changes is a design principle of the Operational Excellence pillar, which focuses on running and improving workloads and the processes that support them. Smaller changes are easier to test and to roll back. The other pillars focus on cost, efficient resource use, and environmental impact.",
    optionExplanations: [
      "Cost Optimization focuses on avoiding unnecessary costs, not on how changes are deployed.",
      "Performance Efficiency focuses on using computing resources efficiently as demand changes, not on release practices.",
      "Correct — Making frequent, small, reversible changes is a design principle of the Operational Excellence pillar.",
      "Sustainability focuses on reducing environmental impact, not on deployment practices."
    ]
  },
  {
    id: 415,
    domain: "Cloud Concepts",
    type: "single",
    question: "A retail company has no machine learning experts. Instead of building its own models, it uses a managed AWS AI service to add product recommendations to its website. Which AWS Well-Architected design principle does this approach represent?",
    options: [
      "Stop guessing capacity",
      "Implement a strong identity foundation",
      "Analyze and attribute expenditure",
      "Democratize advanced technologies"
    ],
    correct: [3],
    explanation: "Democratize advanced technologies is a Performance Efficiency design principle: complex technologies such as machine learning are consumed as managed services, so teams do not need deep in-house expertise. The other options are valid design principles from other pillars but do not describe using managed services to access advanced technology.",
    optionExplanations: [
      "Stop guessing capacity is about scaling to actual demand, not about using managed AI services.",
      "Implementing a strong identity foundation is a Security pillar principle about access management.",
      "Analyzing and attributing expenditure is a Cost Optimization principle about understanding who drives costs.",
      "Correct — Democratize advanced technologies means consuming complex technologies, such as machine learning, as managed services so teams can use them without specialized expertise."
    ]
  },
  {
    id: 416,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company notices that most of its Amazon EC2 instances run at very low CPU and memory utilization. Which action would BEST reduce costs without affecting application performance?",
    options: [
      "Rightsize instances to smaller types",
      "Purchase Dedicated Hosts for the instances",
      "Move to larger instances for more headroom",
      "Add more instances to each Auto Scaling group"
    ],
    correct: [0],
    explanation: "Rightsizing means matching instance types and sizes to the actual workload requirements. When instances are underutilized, moving to smaller instance types lowers cost while still meeting performance needs. Dedicated Hosts, larger instances, or more instances would all increase cost.",
    optionExplanations: [
      "Correct — Rightsizing underutilized instances to smaller types reduces cost while still meeting the workload's performance needs.",
      "Dedicated Hosts are physical servers for a single customer, mainly used for licensing or compliance needs. They do not fix underutilization and usually cost more.",
      "Larger instances would make the underutilization worse and increase costs.",
      "Adding more instances increases cost when the existing ones are already underutilized."
    ]
  },
  {
    id: 417,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company has already paid for software licenses whose terms allow use in the cloud. It wants to use these existing licenses on AWS so that it does not pay for the same licenses twice. Which licensing approach should the company use?",
    options: [
      "License-included instances",
      "Bring your own license (BYOL)",
      "Spot Instances with included software",
      "AWS Marketplace pay-as-you-go products"
    ],
    correct: [1],
    explanation: "With bring your own license (BYOL), a company uses licenses it already owns on AWS, as long as the license terms allow it. With license-included options, the license cost is part of the AWS price, so the company would pay again for licenses it already owns.",
    optionExplanations: [
      "License-included instances include the license cost in the AWS price, so the company would pay again for licenses it already owns.",
      "Correct — BYOL lets the company reuse its existing eligible licenses on AWS instead of paying for new ones.",
      "Spot Instances are a pricing option for spare EC2 capacity. They do not reuse existing software licenses.",
      "AWS Marketplace pay-as-you-go products charge for the software through AWS, so the company would pay for licenses again."
    ]
  },
  {
    id: 418,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "A company is building a total cost of ownership (TCO) comparison between its on-premises data center and AWS. Besides server hardware, which on-premises costs should be included for an accurate comparison? (Select TWO)",
    options: [
      "AWS Support plan fees",
      "Amazon EC2 On-Demand charges",
      "Power and cooling for the data center",
      "Data transfer out from AWS to the internet",
      "IT staff time spent maintaining hardware"
    ],
    correct: [2, 4],
    explanation: "A fair TCO comparison includes all on-premises costs, not just server purchases: facilities, power and cooling, networking, and the labor needed to maintain hardware. These indirect costs are often overlooked, which makes on-premises look cheaper than it really is. AWS Support, EC2 charges, and data transfer out belong on the AWS side of the comparison.",
    optionExplanations: [
      "AWS Support plan fees are an AWS cost, not an on-premises cost.",
      "EC2 On-Demand charges are an AWS cost, not an on-premises cost.",
      "Correct — Power and cooling are significant indirect on-premises costs that must be included in a TCO comparison.",
      "Data transfer out from AWS is an AWS cost, not an on-premises cost.",
      "Correct — Staff time spent on hardware maintenance is an on-premises labor cost that should be included in TCO."
    ]
  },
  {
    id: 419,
    domain: "Cloud Concepts",
    type: "single",
    question: "A web application stores user session data in the memory of each web server. When Auto Scaling removes an instance, the users on that instance lose their sessions. Which change BEST supports elasticity?",
    options: [
      "Disable scale-in for the Auto Scaling group",
      "Keep session data in a shared external store",
      "Move the application to a single larger instance",
      "Save session data on each instance's local disk"
    ],
    correct: [1],
    explanation: "Storing session state outside the web servers, for example in Amazon DynamoDB or Amazon ElastiCache, makes the web tier stateless. Any instance can then serve any user, and instances can be added or removed freely. Disabling scale-in avoids the symptom but removes elasticity.",
    optionExplanations: [
      "Disabling scale-in avoids losing sessions but prevents the application from reducing capacity, which removes elasticity and increases cost.",
      "Correct — Keeping session data in a shared external store makes the web servers stateless, so instances can scale in and out without losing user sessions.",
      "A single larger instance removes horizontal scaling and creates a single point of failure.",
      "Session data on a local disk is still lost when the instance is terminated, so the servers remain stateful."
    ]
  },
  {
    id: 420,
    domain: "Cloud Concepts",
    type: "single",
    question: "An order service calls an inventory service directly and waits for a response. When the inventory service is slow, new orders fail. Which AWS service could the company add between the two services to decouple them?",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "Amazon SQS",
      "AWS Direct Connect"
    ],
    correct: [2],
    explanation: "Amazon SQS is a managed message queue. The order service can place messages in the queue, and the inventory service processes them at its own pace, so a slowdown in one component does not cause failures in the other. This applies the loose coupling design principle. CloudFront, Route 53, and Direct Connect do not buffer messages between application components.",
    optionExplanations: [
      "Amazon CloudFront delivers content to users with low latency. It does not buffer requests between application services.",
      "Amazon Route 53 is a DNS service. It routes traffic but does not decouple services that call each other directly.",
      "Correct — An SQS queue buffers requests between the services so they can work independently, which is loose coupling.",
      "AWS Direct Connect is a dedicated network connection to AWS. It does not decouple application components."
    ]
  },
  {
    id: 421,
    domain: "Cloud Concepts",
    type: "multiple",
    question: "A company is reviewing its workload against the Reliability pillar of the AWS Well-Architected Framework. Which actions follow the design principles of this pillar? (Select TWO)",
    options: [
      "Automatically recover from failure",
      "Use one large instance to reduce components",
      "Make manual changes in production to fix issues",
      "Scale horizontally to increase availability",
      "Keep capacity provisioned for peak at all times"
    ],
    correct: [0, 3],
    explanation: "Reliability design principles include automatically recovering from failure, testing recovery procedures, scaling horizontally to increase aggregate workload availability, stopping guessing capacity, and managing change through automation. Replacing one large resource with multiple smaller ones reduces the impact of a single failure. Manual changes and permanent peak provisioning go against these principles.",
    optionExplanations: [
      "Correct — Automatically recovering from failure, for example by monitoring and triggering automated responses, is a Reliability design principle.",
      "A single large instance is a single point of failure. Reliability recommends multiple smaller resources instead.",
      "Reliability recommends managing change through automation, not manual changes in production.",
      "Correct — Scaling horizontally with multiple smaller resources reduces the impact of a single failure and increases availability.",
      "Reliability recommends to stop guessing capacity and scale with demand, not to keep peak capacity permanently."
    ]
  },
  {
    id: 422,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company wants to create identical application environments in several AWS Regions. It wants each environment to be built from templates in a repeatable way, without manual setup in the console. Which AWS service BEST supports this automation?",
    options: [
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS CloudFormation",
      "AWS Health Dashboard"
    ],
    correct: [2],
    explanation: "AWS CloudFormation is an infrastructure as code service: resources are described in templates and deployed the same way every time, in any Region or account. This applies the automation design principle. AWS Config records and evaluates resource configurations but does not create environments.",
    optionExplanations: [
      "AWS Trusted Advisor gives best-practice recommendations. It does not create infrastructure.",
      "AWS Config records and evaluates resource configurations. It does not provision environments from templates.",
      "Correct — AWS CloudFormation provisions resources from templates (infrastructure as code), so identical environments can be created repeatedly in any Region.",
      "AWS Health Dashboard shows events that may affect AWS services and accounts. It does not provision resources."
    ]
  },
  {
    id: 423,
    domain: "Cloud Concepts",
    type: "single",
    question: "A company plans to move its on-premises Oracle database to Amazon Aurora PostgreSQL to stop paying for commercial database licenses. Before moving the data, its team must convert the database schema and stored procedures to a format that PostgreSQL supports. Which AWS tool is designed for this conversion?",
    options: [
      "AWS Application Migration Service (AWS MGN)",
      "AWS Glue Data Catalog",
      "AWS Schema Conversion Tool (AWS SCT)",
      "AWS DataSync"
    ],
    correct: [2],
    explanation: "AWS Schema Conversion Tool (AWS SCT) converts a source database schema, including views, stored procedures, and functions, to a format compatible with a different target engine. It is used for heterogeneous migrations such as Oracle to Amazon Aurora PostgreSQL; the data itself is then typically moved with AWS Database Migration Service (AWS DMS).",
    optionExplanations: [
      "AWS Application Migration Service rehosts whole servers on Amazon EC2 without changes. It does not convert a database schema to a different engine.",
      "The AWS Glue Data Catalog stores metadata about data sources for analytics. It does not convert Oracle schemas or code to PostgreSQL.",
      "Correct — AWS SCT converts the schema and database code, such as stored procedures, from the source engine to the target engine.",
      "AWS DataSync copies files and objects between storage systems. It does not convert database schemas or stored procedures."
    ]
  },
  {
    id: 424,
    domain: "Cloud Concepts",
    type: "single",
    question: "According to the Sustainability pillar of the AWS Well-Architected Framework, how is responsibility for sustainability shared between AWS and the customer?",
    options: [
      "AWS is solely responsible for all sustainability",
      "The customer is solely responsible for all sustainability",
      "Sustainability is not part of the shared model",
      "AWS: sustainability of the cloud; customer: in the cloud"
    ],
    correct: [3],
    explanation: "The Sustainability pillar uses a shared responsibility model: AWS is responsible for the sustainability of the cloud (efficient data centers, hardware, and energy), and customers are responsible for sustainability in the cloud (how efficiently they design and use their workloads). Customers therefore still have an important role, for example through right-sizing and removing idle resources.",
    optionExplanations: [
      "AWS optimizes its infrastructure, but customers also influence sustainability through how they design and use workloads.",
      "Customers do not control AWS data centers or energy sourcing, so they cannot be solely responsible.",
      "The Sustainability pillar explicitly describes a shared responsibility model for sustainability.",
      "Correct — AWS is responsible for sustainability of the cloud, while customers are responsible for sustainability in the cloud, through their workload design and resource usage."
    ]
  },
  {
    id: 425,
    domain: "Security & Compliance",
    type: "single",
    question: "Under the AWS Shared Responsibility Model, some controls are shared, meaning AWS and the customer each handle part of them in their own layer. Which of the following is an example of a shared control?",
    options: [
      "Patch management",
      "Physical security of data centers",
      "Classification of customer data",
      "Destruction of failed storage devices"
    ],
    correct: [0],
    explanation: "Patch management is a shared control: AWS patches and fixes flaws within the infrastructure, while customers patch their guest operating systems and applications. Physical security and media destruction are inherited controls fully handled by AWS, whereas data classification is entirely the customer's job.",
    optionExplanations: [
      "Correct — AWS patches the infrastructure it manages, and customers patch their own guest operating systems and applications.",
      "Physical security of data centers is an inherited control that AWS handles entirely; customers have no part in it.",
      "Deciding how data is classified is entirely the customer's responsibility, not a shared control.",
      "Secure destruction of failed storage media happens inside AWS facilities and is fully AWS's responsibility."
    ]
  },
  {
    id: 426,
    domain: "Security & Compliance",
    type: "multiple",
    question: "A company follows the best practice of using IAM identities instead of the AWS account root user for daily work. Which tasks can ONLY be performed by signing in as the root user? (Select TWO)",
    options: [
      "Create a new IAM user with administrator permissions",
      "Enable MFA Delete on an Amazon S3 bucket",
      "Close the AWS account",
      "Enable an AWS CloudTrail trail for all Regions",
      "Launch Amazon EC2 instances in a new Region"
    ],
    correct: [1, 2],
    explanation: "A small set of tasks requires root user credentials, including closing the AWS account and enabling MFA Delete on an Amazon S3 bucket. Creating IAM users, configuring CloudTrail, and launching EC2 instances can all be done by IAM identities with the right permissions, which is why the root user should be locked away for everyday use.",
    optionExplanations: [
      "An IAM identity with IAM permissions can create other IAM users, so this does not require the root user.",
      "Correct — enabling MFA Delete on an S3 bucket's versioning configuration can only be done with the root user's credentials.",
      "Correct — closing the AWS account is a root-user-only task.",
      "Any IAM identity with the appropriate CloudTrail permissions can create and configure trails.",
      "Launching EC2 instances in any Region only needs the appropriate IAM permissions, not root credentials."
    ]
  },
  {
    id: 427,
    domain: "Security & Compliance",
    type: "single",
    question: "A company is hiring 20 new developers who all need the same set of AWS permissions. Which approach is the MOST efficient way to manage their permissions in IAM?",
    options: [
      "Attach the same inline policy separately to each developer's IAM user",
      "Create an IAM group with the required policy and add the users",
      "Share a single IAM user's credentials among all developers",
      "Give each developer the root user credentials with MFA"
    ],
    correct: [1],
    explanation: "IAM groups let you attach a policy once and have it apply to every member, so adding or removing a developer is a single action and permissions stay consistent. Attaching inline policies to each user works but is repetitive and error-prone, while sharing credentials or the root user breaks accountability and least privilege.",
    optionExplanations: [
      "This would work technically, but maintaining 20 separate inline policies is inefficient and makes permission drift likely.",
      "Correct — a group centralizes the permissions; new developers simply join the group and inherit its policies.",
      "Sharing credentials removes individual accountability, because CloudTrail cannot tell which person made each call.",
      "The root user has unrestricted access and should never be shared or used for daily development work, even with MFA."
    ]
  },
  {
    id: 428,
    domain: "Security & Compliance",
    type: "single",
    question: "An application needs to store configuration values such as database hostnames and feature flags, plus a few encrypted values, in a hierarchical structure. Automatic rotation is not required and the company wants to avoid additional cost. Which AWS service BEST fits these needs?",
    options: [
      "AWS Secrets Manager with automatic rotation",
      "AWS CloudHSM",
      "AWS Systems Manager Parameter Store",
      "Amazon S3 Glacier"
    ],
    correct: [2],
    explanation: "Systems Manager Parameter Store provides hierarchical storage for configuration data and can store values encrypted with AWS KMS as SecureString parameters, with standard parameters at no additional charge. Secrets Manager is the better choice when built-in automatic secret rotation is required, but it is billed per secret.",
    optionExplanations: [
      "Secrets Manager rotation is not needed here, and Secrets Manager is billed per secret, so it is not the lowest-cost fit.",
      "CloudHSM provides dedicated hardware security modules for key management, not a store for application configuration values.",
      "Correct — Parameter Store offers hierarchical configuration storage, optional KMS encryption, and no extra charge for standard parameters.",
      "S3 Glacier is designed for low-cost archival storage, not for retrieving configuration values at application runtime."
    ]
  },
  {
    id: 429,
    domain: "Security & Compliance",
    type: "single",
    question: "A company encrypts data with AWS Key Management Service (AWS KMS). Its security team wants to write its own key policy, decide who can use each key, and be able to disable a key if needed. Which type of KMS key should the company use?",
    options: [
      "AWS managed keys",
      "AWS owned keys",
      "Amazon S3 managed keys (SSE-S3)",
      "Customer managed keys"
    ],
    correct: [3],
    explanation: "Customer managed keys are created and controlled by the customer, who can define key policies, enable or disable the key, configure rotation, and schedule deletion. AWS managed keys are created in the account on behalf of an AWS service, but their key policies cannot be changed by the customer.",
    optionExplanations: [
      "AWS managed keys are visible in the account, but the customer cannot edit their key policies or disable them.",
      "AWS owned keys are owned and managed by AWS across many accounts; customers cannot view or control them.",
      "SSE-S3 uses keys fully managed by Amazon S3, so the company cannot write key policies or disable the keys.",
      "Correct — customer managed keys give full control over key policies, enabling or disabling, rotation, and deletion."
    ]
  },
  {
    id: 430,
    domain: "Security & Compliance",
    type: "single",
    question: "A company must ensure that data stored on the Amazon EBS volumes attached to its Amazon EC2 instances is encrypted at rest. What should the company do?",
    options: [
      "Enable Amazon EBS encryption, which uses AWS KMS keys",
      "Request a public certificate from AWS Certificate Manager",
      "Turn on AWS Shield Advanced for the instances",
      "Enable Amazon Macie on the EBS volumes"
    ],
    correct: [0],
    explanation: "Amazon EBS encryption encrypts data at rest on the volume, as well as its snapshots, using AWS KMS keys. ACM certificates protect data in transit with TLS, Shield protects against DDoS attacks, and Macie discovers sensitive data in Amazon S3, so none of them encrypt EBS volumes.",
    optionExplanations: [
      "Correct — EBS encryption protects data at rest on the volume and its snapshots using AWS KMS keys.",
      "ACM certificates enable TLS for data in transit; they do not encrypt data stored on EBS volumes.",
      "Shield Advanced protects against DDoS attacks and has nothing to do with encrypting stored data.",
      "Macie discovers and classifies sensitive data in Amazon S3; it does not encrypt EBS volumes."
    ]
  },
  {
    id: 431,
    domain: "Security & Compliance",
    type: "single",
    question: "Amazon GuardDuty has reported suspicious API calls from an IAM user. The security team now wants to investigate the root cause by analyzing and visualizing how the user, IP addresses, and resources interacted over time. Which AWS service should the team use?",
    options: [
      "AWS Config",
      "Amazon Macie",
      "Amazon Detective",
      "AWS Artifact"
    ],
    correct: [2],
    explanation: "Amazon Detective automatically collects log data (such as CloudTrail, VPC Flow Logs, and GuardDuty findings) and builds a linked graph so security teams can investigate the root cause of findings and see how entities interacted over time. GuardDuty detects threats; Detective helps investigate them.",
    optionExplanations: [
      "AWS Config records configuration changes of resources and evaluates compliance rules — it does not build behavior graphs to investigate security findings.",
      "Amazon Macie discovers and protects sensitive data in Amazon S3 — it is not designed to investigate suspicious API activity.",
      "Correct — Amazon Detective analyzes and visualizes security data to help investigate the root cause of findings such as those from GuardDuty.",
      "AWS Artifact provides on-demand access to AWS compliance reports and agreements — it has no investigation capabilities."
    ]
  },
  {
    id: 432,
    domain: "Security & Compliance",
    type: "single",
    question: "A company is preparing for an upcoming external audit and wants to continuously and automatically collect evidence about how its AWS resources are used, mapped to prebuilt compliance frameworks. Which AWS service should it use?",
    options: [
      "AWS Artifact",
      "Amazon Inspector",
      "AWS Audit Manager",
      "AWS Trusted Advisor"
    ],
    correct: [2],
    explanation: "AWS Audit Manager continuously collects evidence from the customer's own AWS usage and organizes it against prebuilt or custom frameworks to simplify audit preparation. AWS Artifact, by contrast, provides AWS's own compliance reports and agreements, not evidence about the customer's resources.",
    optionExplanations: [
      "Artifact provides AWS's compliance reports and agreements, not evidence about how the customer uses its own resources.",
      "Inspector scans workloads for software vulnerabilities; it does not assemble audit evidence against frameworks.",
      "Correct — Audit Manager automates evidence collection from the customer's AWS environment and maps it to compliance frameworks.",
      "Trusted Advisor gives best-practice recommendations, but it does not collect and organize audit evidence."
    ]
  },
  {
    id: 433,
    domain: "Security & Compliance",
    type: "single",
    question: "A member account in AWS Organizations has an IAM user with the AdministratorAccess policy attached. A service control policy (SCP) applied to the account denies all actions outside the eu-west-1 Region. What happens when the user tries to launch an EC2 instance in us-east-1?",
    options: [
      "The request succeeds because the IAM policy grants full access",
      "The request succeeds only if the user has MFA enabled",
      "The request is denied because the SCP restricts the account",
      "The request is automatically redirected to the eu-west-1 Region"
    ],
    correct: [2],
    explanation: "SCPs set the maximum permissions available in a member account, so an action must be allowed by both the SCP and the IAM policy to succeed. Because the SCP denies actions outside eu-west-1, even an administrator in that account cannot launch instances in us-east-1.",
    optionExplanations: [
      "IAM policies cannot grant more than the SCP allows; the SCP's deny takes precedence over the administrator policy.",
      "MFA does not override an SCP; the Region restriction applies regardless of how the user authenticated.",
      "Correct — the effective permissions are limited by the SCP, so the action outside eu-west-1 is denied.",
      "AWS does not redirect API requests to another Region; the request is simply denied."
    ]
  },
  {
    id: 434,
    domain: "Security & Compliance",
    type: "single",
    question: "A company runs a web application behind Amazon CloudFront and wants to block all requests that come from specific countries where it does not do business. Which AWS service can do this?",
    options: [
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Shield Standard",
      "Amazon Inspector"
    ],
    correct: [0],
    explanation: "AWS WAF supports geographic match rules that allow or block web requests based on the country they originate from, and it integrates with CloudFront. Shield Standard provides automatic network-layer DDoS protection but does not let you write country-based allow or block rules.",
    optionExplanations: [
      "Correct — AWS WAF can use geographic match conditions to block requests from selected countries.",
      "GuardDuty detects threats and generates findings, but it does not filter incoming web requests.",
      "Shield Standard automatically mitigates common DDoS attacks but does not provide custom country-blocking rules.",
      "Inspector scans for software vulnerabilities and does not filter web traffic."
    ]
  },
  {
    id: 435,
    domain: "Security & Compliance",
    type: "multiple",
    question: "A company wants to protect several of its resources with AWS WAF web ACLs. Which resources can AWS WAF be associated with? (Select THREE)",
    options: [
      "Amazon CloudFront distributions",
      "Application Load Balancers",
      "Amazon EBS volumes",
      "Amazon API Gateway REST APIs",
      "Amazon S3 Glacier vaults"
    ],
    correct: [0, 1, 3],
    explanation: "AWS WAF inspects HTTP and HTTPS requests, so it is associated with resources that receive web traffic, such as CloudFront distributions, Application Load Balancers, and API Gateway REST APIs. Storage resources like EBS volumes and Glacier vaults do not receive web requests, so WAF cannot be attached to them.",
    optionExplanations: [
      "Correct — WAF web ACLs can be associated with CloudFront to filter requests at edge locations.",
      "Correct — Application Load Balancers are a common place to attach WAF web ACLs.",
      "EBS volumes are block storage attached to EC2 instances and do not receive web requests, so WAF cannot protect them.",
      "Correct — WAF can filter requests sent to API Gateway REST APIs.",
      "Glacier vaults are archival storage and cannot be associated with a WAF web ACL."
    ]
  },
  {
    id: 436,
    domain: "Security & Compliance",
    type: "single",
    question: "A security team notices malicious traffic coming from a specific IP address and wants to explicitly DENY that address from reaching any instance in a subnet. Which VPC feature should it use?",
    options: [
      "A security group inbound rule",
      "An internet gateway route",
      "A network ACL rule",
      "A VPC endpoint policy"
    ],
    correct: [2],
    explanation: "Network ACLs operate at the subnet level and support both allow and deny rules, so they can explicitly block a specific IP address for every instance in the subnet. Security groups only support allow rules; you cannot write a rule that denies a particular address.",
    optionExplanations: [
      "Security groups support only allow rules, so they cannot explicitly deny a specific IP address.",
      "Routes control where traffic is sent; they are not used to block a specific source IP address.",
      "Correct — network ACLs support explicit deny rules and apply to all instances in the subnet.",
      "VPC endpoint policies control access to AWS services through an endpoint, not inbound traffic from an internet IP address."
    ]
  },
  {
    id: 437,
    domain: "Security & Compliance",
    type: "single",
    question: "A developer creates a new custom security group and does not add any rules to it. What is the default behavior of this security group?",
    options: [
      "All inbound and all outbound traffic is denied",
      "All inbound and all outbound traffic is allowed",
      "Inbound HTTP and HTTPS are allowed; other traffic is denied",
      "Inbound traffic is denied; outbound traffic is allowed"
    ],
    correct: [3],
    explanation: "A newly created security group has no inbound rules, so all inbound traffic is denied, and it includes a default outbound rule allowing all outbound traffic. Because security groups are stateful, responses to allowed outbound requests are automatically allowed back in.",
    optionExplanations: [
      "Outbound traffic is allowed by default in a new security group, so not everything is denied.",
      "Inbound traffic is not allowed until you explicitly add inbound rules.",
      "No inbound ports, including HTTP and HTTPS, are opened by default.",
      "Correct — new security groups deny all inbound traffic and allow all outbound traffic until you change the rules."
    ]
  },
  {
    id: 438,
    domain: "Security & Compliance",
    type: "multiple",
    question: "A new cloud security team wants to stay informed about AWS security best practices, announcements, and guidance. Which AWS resources are designed for this purpose? (Select TWO)",
    options: [
      "AWS Pricing Calculator",
      "AWS Security Blog",
      "AWS Compute Optimizer",
      "AWS Security Center",
      "AWS Cost Explorer"
    ],
    correct: [1, 3],
    explanation: "The AWS Security Blog publishes articles, announcements, and how-to guidance on security topics, and the AWS Security Center (the security section of the AWS website) gathers security resources, bulletins, and best-practice information. The other options are cost and resource-optimization tools.",
    optionExplanations: [
      "The Pricing Calculator estimates costs and does not provide security guidance.",
      "Correct — the AWS Security Blog publishes security best practices, announcements, and walkthroughs.",
      "Compute Optimizer recommends right-sizing for compute resources; it is not a security information source.",
      "Correct — the AWS Security Center collects AWS security resources, bulletins, and best-practice guidance.",
      "Cost Explorer analyzes spending and usage, not security information."
    ]
  },
  {
    id: 439,
    domain: "Security & Compliance",
    type: "single",
    question: "An administrator keeps receiving \"Access Denied\" errors and wants to find AWS-authored articles and videos that answer the most common questions AWS Support receives. Which resource should the administrator use?",
    options: [
      "AWS Artifact",
      "AWS Knowledge Center",
      "AWS Health Dashboard",
      "AWS Trusted Advisor checks"
    ],
    correct: [1],
    explanation: "The AWS Knowledge Center, now hosted on AWS re:Post, contains articles and videos that answer the most frequent questions and requests that AWS Support receives, including troubleshooting access errors. The AWS Health Dashboard reports service events affecting the account rather than answering how-to questions.",
    optionExplanations: [
      "Artifact provides compliance reports and agreements, not troubleshooting articles.",
      "Correct — the Knowledge Center offers AWS-authored answers to the most common customer questions and issues.",
      "The Health Dashboard shows service events and scheduled changes that affect your resources, not how-to articles.",
      "Trusted Advisor checks the account against best practices but does not provide a library of troubleshooting articles."
    ]
  },
  {
    id: 440,
    domain: "Security & Compliance",
    type: "multiple",
    question: "A startup uses the AWS Basic Support plan. Which AWS Trusted Advisor checks are available to it at no additional cost? (Select TWO)",
    options: [
      "Low utilization Amazon EC2 instances",
      "MFA on root account",
      "Amazon EC2 Reserved Instance lease expiration",
      "Security groups – specific ports unrestricted",
      "Underutilized Amazon EBS volumes"
    ],
    correct: [1, 3],
    explanation: "All AWS customers, including those on Basic Support, get the AWS Trusted Advisor core checks, which include security checks such as MFA on root account and security groups with unrestricted ports, plus service quota checks. Cost optimization checks such as low utilization EC2 instances are not part of the core checks, so they are not available with Basic Support.",
    optionExplanations: [
      "Low utilization EC2 instances is a cost optimization check, not one of the core checks included with Basic Support.",
      "Correct — MFA on root account is one of the core security checks available to every customer.",
      "Reserved Instance lease expiration is a cost optimization check, not one of the core checks included with Basic Support.",
      "Correct — checking for security groups that allow unrestricted access to specific ports is a core security check.",
      "Underutilized EBS volumes is a cost optimization check, not one of the core checks included with Basic Support."
    ]
  },
  {
    id: 441,
    domain: "Security & Compliance",
    type: "single",
    question: "A security auditor asks for a list of all IAM users in an account, showing whether each user has a password, active access keys, and an MFA device. Which IAM feature provides this information in a single downloadable file?",
    options: [
      "IAM credential report",
      "AWS CloudTrail event history",
      "IAM permissions boundary",
      "AWS Config conformance pack"
    ],
    correct: [0],
    explanation: "The IAM credential report lists every IAM user in the account along with the status of their credentials, including passwords, access keys, and MFA devices. CloudTrail event history shows API activity, not a summary of each user's credential status.",
    optionExplanations: [
      "Correct — the credential report is a downloadable file listing all users and the status of their passwords, access keys, and MFA devices.",
      "CloudTrail event history records API calls; it does not summarize which credentials each user has.",
      "A permissions boundary limits the maximum permissions of an identity; it does not report credential status.",
      "Conformance packs group AWS Config rules for compliance evaluation, not a credential inventory of IAM users."
    ]
  },
  {
    id: 442,
    domain: "Security & Compliance",
    type: "single",
    question: "A developer is building an AWS Lambda function that must write items to an Amazon DynamoDB table. What is the MOST secure way to give the function this permission?",
    options: [
      "Store an IAM user's access keys in the function's code",
      "Assign an IAM execution role with DynamoDB write permissions",
      "Make the DynamoDB table publicly accessible",
      "Use the root user's access keys as environment variables"
    ],
    correct: [1],
    explanation: "A Lambda execution role grants the function temporary credentials that are rotated automatically, and the role's policy can be scoped to only the needed DynamoDB actions. Embedding long-term access keys in code or environment variables risks leaks and makes rotation difficult.",
    optionExplanations: [
      "Hard-coded long-term access keys can be leaked through source control and must be rotated manually.",
      "Correct — an execution role provides temporary, automatically rotated credentials with only the permissions the function needs.",
      "DynamoDB tables are accessed through IAM-authorized API calls; opening access widely would violate least privilege.",
      "Root user access keys should not exist at all, and using them in a function would give it unrestricted access."
    ]
  },
  {
    id: 443,
    domain: "Security & Compliance",
    type: "single",
    question: "A company's security policy requires all IAM user passwords to have a minimum length and include numbers and symbols. How can the company enforce this requirement?",
    options: [
      "Create an AWS Config rule that resets weak passwords",
      "Enable AWS Shield Advanced on the account",
      "Turn on Amazon GuardDuty for the account",
      "Set an IAM account password policy"
    ],
    correct: [3],
    explanation: "IAM lets administrators define an account password policy that enforces requirements such as minimum length, required character types, and password expiration for IAM users. AWS Config can evaluate whether a policy exists, but the requirement itself is enforced through the IAM password policy.",
    optionExplanations: [
      "Config rules can evaluate whether a password policy meets requirements, but Config does not reset or enforce user passwords itself.",
      "Shield Advanced protects against DDoS attacks and has no role in password requirements.",
      "GuardDuty detects threats from activity logs; it does not set password requirements.",
      "Correct — the IAM account password policy enforces length and complexity rules for IAM user passwords."
    ]
  },
  {
    id: 444,
    domain: "Security & Compliance",
    type: "single",
    question: "During a security review, a company discovers that access keys were created for its AWS account root user years ago. What does AWS recommend?",
    options: [
      "Rotate the root access keys every month",
      "Delete the root user access keys",
      "Share the keys only with senior administrators",
      "Store the keys in the application's configuration file"
    ],
    correct: [1],
    explanation: "AWS recommends that the root user should not have access keys at all, because they grant unrestricted access to the account and cannot be limited by IAM policies. Programmatic access should instead use IAM roles or IAM users with least-privilege permissions; rotating the keys still leaves an unnecessary high-risk credential in place.",
    optionExplanations: [
      "Rotating them reduces some risk, but the best practice is not to have root access keys at all.",
      "Correct — root user access keys should be deleted, and programmatic work should use IAM roles or users instead.",
      "Sharing root credentials, even with a small group, breaks accountability and keeps an unrestricted credential exposed.",
      "Storing powerful long-term keys in configuration files greatly increases the chance of a leak."
    ]
  },
  {
    id: 445,
    domain: "Security & Compliance",
    type: "multiple",
    question: "A company is moving an application from Amazon EC2 instances to AWS Lambda functions. Under the Shared Responsibility Model, which responsibilities shift from the company to AWS after the migration? (Select TWO)",
    options: [
      "Patching the operating system that runs the code",
      "Securing the application code in the functions",
      "Provisioning and scaling the underlying servers",
      "Defining IAM permissions for the functions",
      "Classifying and protecting the data the functions process"
    ],
    correct: [0, 2],
    explanation: "With Lambda, AWS manages the servers, operating system, and capacity, so OS patching and server provisioning and scaling move to AWS. The customer remains responsible for its function code, the IAM permissions granted to the functions, and the protection of its data.",
    optionExplanations: [
      "Correct — Lambda runs on infrastructure where AWS manages and patches the operating system.",
      "The application code is always the customer's responsibility, whether it runs on EC2 or Lambda.",
      "Correct — AWS provisions and scales the compute capacity that runs Lambda functions.",
      "Customers still define the IAM execution roles and resource policies for their functions.",
      "Data classification and protection always remain the customer's responsibility."
    ]
  },
  {
    id: 446,
    domain: "Security & Compliance",
    type: "single",
    question: "A company stores marketing files in Amazon S3. Under the AWS Shared Responsibility Model, who is responsible for making sure the bucket is not accidentally made publicly readable?",
    options: [
      "AWS, because Amazon S3 is a fully managed storage service",
      "The AWS Support team assigned to the account",
      "The customer, who controls the bucket's access settings",
      "AWS and the customer equally, as a shared control"
    ],
    correct: [2],
    explanation: "Even for a managed service like S3, the customer controls who can access its data through bucket policies, ACLs, and Block Public Access settings. AWS secures the storage infrastructure, but access configuration is security in the cloud and belongs to the customer.",
    optionExplanations: [
      "AWS manages the S3 infrastructure, but it does not decide who should be allowed to read the customer's data.",
      "AWS Support can advise, but it is not responsible for configuring access to customer buckets.",
      "Correct — access control through bucket policies and public access settings is the customer's responsibility.",
      "Bucket access configuration is not a shared control; it falls on the customer, while AWS secures the underlying service."
    ]
  },
  {
    id: 447,
    domain: "Security & Compliance",
    type: "single",
    question: "For a forensic investigation, a security team must prove that AWS CloudTrail log files stored in Amazon S3 were not modified or deleted after CloudTrail delivered them. Which feature should the team use?",
    options: [
      "Amazon S3 Transfer Acceleration",
      "CloudTrail log file integrity validation",
      "Amazon CloudWatch detailed monitoring",
      "AWS Config configuration history"
    ],
    correct: [1],
    explanation: "CloudTrail log file integrity validation creates hashed, digitally signed digest files that let you verify whether log files were modified, deleted, or left unchanged after delivery. AWS Config configuration history tracks resource settings over time, but it cannot prove that log files are intact.",
    optionExplanations: [
      "Transfer Acceleration speeds up uploads to S3; it does not verify the integrity of stored log files.",
      "Correct — integrity validation uses signed digest files to detect whether CloudTrail log files were changed or deleted.",
      "Detailed monitoring increases the frequency of CloudWatch metrics and has nothing to do with log file integrity.",
      "Config history records resource configurations over time but cannot prove log files were not tampered with."
    ]
  },
  {
    id: 448,
    domain: "Security & Compliance",
    type: "single",
    question: "A user belongs to an IAM group whose policy allows all Amazon S3 actions. Another policy attached directly to the user explicitly denies the s3:DeleteObject action. What happens when the user tries to delete an object?",
    options: [
      "The request is allowed because the group policy allows all S3 actions",
      "The request is allowed because group policies take priority",
      "The request is allowed only if the bucket is versioned",
      "The request is denied because an explicit deny overrides any allow"
    ],
    correct: [3],
    explanation: "In IAM policy evaluation, an explicit deny in any applicable policy always overrides any allow, regardless of where the allow comes from. Therefore the user can perform other S3 actions but cannot delete objects.",
    optionExplanations: [
      "An allow, however broad, never overrides an explicit deny in another applicable policy.",
      "Group policies do not take priority over user policies; all policies are evaluated together and explicit denies win.",
      "Versioning affects what happens to deleted objects, not whether IAM permits the delete request.",
      "Correct — an explicit deny always takes precedence over any allow in IAM policy evaluation."
    ]
  },
  {
    id: 449,
    domain: "Security & Compliance",
    type: "single",
    question: "A company uses Amazon GuardDuty and wants to automatically isolate an EC2 instance whenever GuardDuty reports a high-severity finding about it, without manual work. Which approach should the company use?",
    options: [
      "Use an EventBridge rule that invokes a Lambda function",
      "Enable AWS Shield Advanced to read the GuardDuty findings",
      "Configure Amazon Macie to stop the instance automatically",
      "Create a CloudTrail trail that terminates the instance"
    ],
    correct: [0],
    explanation: "GuardDuty sends its findings to Amazon EventBridge, where a rule can match high-severity findings and trigger an AWS Lambda function that performs remediation such as changing the instance's security group. CloudTrail only records API activity and cannot take remediation actions by itself.",
    optionExplanations: [
      "Correct — EventBridge can match GuardDuty findings and invoke a Lambda function to remediate automatically.",
      "Shield Advanced protects against DDoS attacks; it does not act on GuardDuty findings.",
      "Macie discovers sensitive data in Amazon S3 and does not manage EC2 instances.",
      "CloudTrail records API calls for auditing but cannot take actions like isolating or terminating instances."
    ]
  },
  {
    id: 450,
    domain: "Security & Compliance",
    type: "single",
    question: "A company runs web servers and database servers in separate security groups. The database should accept connections only from the web servers, even as web servers are added or removed by Auto Scaling. What is the BEST way to configure this?",
    options: [
      "Allow the database port from 0.0.0.0/0 in the database security group",
      "Add each web server's private IP to the database security group",
      "Use the web tier's security group as the source in the database rule",
      "Place both tiers in the same subnet and remove all security group rules"
    ],
    correct: [2],
    explanation: "A security group rule can use another security group as its source, which automatically allows traffic from any instance in that group, no matter how many instances Auto Scaling adds or removes. Listing individual IP addresses would require constant updates as instances change.",
    optionExplanations: [
      "Allowing 0.0.0.0/0 would expose the database to any source, violating least privilege.",
      "Individual IP rules break whenever Auto Scaling launches or terminates web servers and must be updated by hand.",
      "Correct — referencing the web tier's security group automatically covers every current and future web server.",
      "Being in the same subnet does not grant access; with no rules, the security group would block inbound traffic entirely."
    ]
  },
  {
    id: 451,
    domain: "Security & Compliance",
    type: "single",
    question: "A healthcare company wants to run workloads that process protected health information (PHI) on AWS. Which statement about HIPAA compliance on AWS is correct?",
    options: [
      "AWS certifies each customer application as HIPAA compliant",
      "Any AWS service can process PHI without additional steps",
      "HIPAA compliance is achieved by enabling Amazon GuardDuty",
      "Use HIPAA eligible services and configure them securely"
    ],
    correct: [3],
    explanation: "AWS offers HIPAA eligible services and a Business Associate Addendum, but the customer is responsible for using those services and configuring them, for example with encryption and access controls, to meet HIPAA requirements. AWS does not certify customer applications; compliance remains a shared responsibility.",
    optionExplanations: [
      "AWS does not certify individual customer applications; the customer remains responsible for its own compliance.",
      "Only HIPAA eligible services should be used to process PHI, and they must be configured appropriately.",
      "GuardDuty is a threat detection service; enabling it does not make a workload HIPAA compliant.",
      "Correct — customers use HIPAA eligible services and are responsible for configuring them to meet HIPAA requirements."
    ]
  },
  {
    id: 452,
    domain: "Security & Compliance",
    type: "single",
    question: "A company's policy states that sensitive files must be encrypted before they leave the company's own servers, so that AWS never receives unencrypted data. Which approach meets this requirement?",
    options: [
      "Server-side encryption with Amazon S3 managed keys",
      "Client-side encryption before uploading to Amazon S3",
      "Server-side encryption with AWS KMS keys",
      "Enabling HTTPS only on the S3 bucket"
    ],
    correct: [1],
    explanation: "With client-side encryption, the company encrypts data before sending it to AWS, so the data is already encrypted when it arrives. Server-side encryption options encrypt data after Amazon S3 receives it, and HTTPS protects data only while it travels over the network.",
    optionExplanations: [
      "SSE-S3 encrypts data after S3 receives it, so AWS still receives the plaintext over the connection.",
      "Correct — client-side encryption ensures data is encrypted before it leaves the company's servers.",
      "SSE-KMS also encrypts data on the server side after S3 receives it, which does not meet the policy.",
      "HTTPS encrypts data in transit only; S3 still receives and handles the unencrypted content at the endpoint."
    ]
  },
  {
    id: 453,
    domain: "Security & Compliance",
    type: "single",
    question: "A company has moved much of its application logic to AWS Lambda functions and container images stored in Amazon ECR. It wants to automatically detect known software vulnerabilities in these workloads. Which AWS service should it use?",
    options: [
      "Amazon Macie",
      "AWS Artifact",
      "Amazon Inspector",
      "AWS Shield Standard"
    ],
    correct: [2],
    explanation: "Amazon Inspector automatically and continuously scans EC2 instances, container images in Amazon ECR, and AWS Lambda functions for known software vulnerabilities. Macie focuses on discovering sensitive data in S3 rather than software vulnerabilities.",
    optionExplanations: [
      "Macie discovers sensitive data such as PII in Amazon S3; it does not scan code for vulnerabilities.",
      "Artifact provides AWS compliance reports and agreements, not vulnerability scanning.",
      "Correct — Inspector scans Lambda functions and ECR container images for known software vulnerabilities.",
      "Shield Standard protects against common DDoS attacks and does not analyze software packages."
    ]
  },
  {
    id: 454,
    domain: "Security & Compliance",
    type: "single",
    question: "A company with many AWS accounts in AWS Organizations wants all accounts' API activity logged centrally, so that administrators of individual member accounts cannot turn off or alter the logging. Which approach BEST meets this requirement?",
    options: [
      "Create an organization trail stored in a log archive account",
      "Ask each account administrator to enable CloudTrail event history",
      "Enable Amazon Macie in every member account",
      "Use AWS Trusted Advisor to collect logs from each account"
    ],
    correct: [0],
    explanation: "An organization trail created from the management account logs activity for all member accounts, and member accounts cannot modify or delete it; delivering the logs to a separate log archive account further protects them from tampering. Relying on each account's own settings would let local administrators change them.",
    optionExplanations: [
      "Correct — an organization trail covers every member account, cannot be changed by member accounts, and can store logs in a separate archive account.",
      "Relying on each administrator leaves logging under local control and does not create a central, tamper-resistant log store.",
      "Macie discovers sensitive data in S3; it does not record API activity.",
      "Trusted Advisor provides best-practice checks and does not collect or store API activity logs."
    ]
  },
  {
    id: 455,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A system administrator wants to automate the creation of Amazon S3 buckets by running commands from scripts on a local workstation. Which tool is MOST appropriate?",
    options: [
      "AWS Command Line Interface (AWS CLI)",
      "AWS Management Console",
      "AWS Health Dashboard",
      "AWS Trusted Advisor best-practice checks"
    ],
    correct: [0],
    explanation: "The AWS CLI is a unified command-line tool that lets users manage AWS services by typing commands or running them from shell scripts, which makes it ideal for automation. The AWS Management Console offers the same kind of control but through a web browser with point-and-click interaction, so it is not suited to scripting.",
    optionExplanations: [
      "Correct — The AWS CLI lets you call AWS service APIs from a terminal and from scripts, so repetitive tasks such as creating buckets can be automated.",
      "The Management Console is a graphical web interface designed for interactive use; it cannot be driven from local scripts.",
      "The AWS Health Dashboard shows events and service health that may affect your account; it does not create resources.",
      "AWS Trusted Advisor provides best-practice recommendations; it does not provision S3 buckets."
    ]
  },
  {
    id: 456,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A development team is writing a Python application that must upload files to Amazon S3 and read items from Amazon DynamoDB. Which option lets the developers call these services directly from their application code?",
    options: [
      "AWS CloudFormation stacks and templates",
      "AWS Software Development Kits (SDKs)",
      "AWS Elastic Beanstalk",
      "AWS Systems Manager"
    ],
    correct: [1],
    explanation: "AWS SDKs provide language-specific libraries (for Python, Java, JavaScript, .NET, Go and others) that wrap the AWS APIs so applications can call services such as S3 and DynamoDB from code. CloudFormation provisions infrastructure from templates, but it is not used by application code to read or write data at runtime.",
    optionExplanations: [
      "CloudFormation provisions and configures resources from templates; it is not a library used by running application code to read and write data.",
      "Correct — The AWS SDKs (such as Boto3 for Python) give developers language-native functions to call S3, DynamoDB and other AWS service APIs from their code.",
      "Elastic Beanstalk deploys and manages applications on AWS; it does not provide an API library for calling S3 or DynamoDB.",
      "Systems Manager is used to operate and manage instances and servers, not to give application code access to service APIs."
    ]
  },
  {
    id: 457,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company's developers want to define their AWS infrastructure as code using a familiar programming language such as TypeScript or Python instead of writing JSON or YAML templates. Which AWS service should they use?",
    options: [
      "AWS CodeDeploy",
      "AWS Service Catalog",
      "AWS Cloud Development Kit (AWS CDK)",
      "Amazon CodeGuru Reviewer and Profiler"
    ],
    correct: [2],
    explanation: "The AWS CDK is an open-source framework that lets developers model cloud infrastructure using familiar programming languages; the CDK then synthesizes AWS CloudFormation templates and deploys them. CodeDeploy automates application deployments, but it does not define the underlying infrastructure.",
    optionExplanations: [
      "CodeDeploy automates deploying application code to compute targets; it does not let you define infrastructure in a programming language.",
      "AWS Service Catalog lets administrators publish approved products for users to launch — it is not a framework for defining infrastructure in programming languages.",
      "Correct — The AWS CDK lets developers define infrastructure in languages such as TypeScript, Python, Java and C#, and it generates CloudFormation templates behind the scenes.",
      "Amazon CodeGuru provides code reviews and performance recommendations; it does not provision infrastructure."
    ]
  },
  {
    id: 458,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A healthcare company in Germany must keep all patient data within German borders because of local regulations. What should the company do FIRST when deploying its workloads on AWS?",
    options: [
      "Use Amazon CloudFront to serve the data from edge locations in Germany",
      "Enable S3 Cross-Region Replication to a Region outside the European Union",
      "Deploy to multiple Availability Zones in any Region with low pricing",
      "Select an AWS Region located in Germany for storing and processing data"
    ],
    correct: [3],
    explanation: "Data residency and compliance requirements are often the first factor in choosing an AWS Region, because data stored in a Region stays there unless the customer moves it. Choosing the Frankfurt Region (located in Germany) satisfies the requirement, whereas choosing a Region only for low cost could place the data outside the country.",
    optionExplanations: [
      "CloudFront caches copies of content at edge locations for faster delivery; it does not determine where the authoritative data is stored and processed.",
      "Replicating data to a Region outside the EU would move patient data out of Germany and break the regulatory requirement.",
      "Multiple AZs improve availability, but picking a Region based only on price ignores the requirement that data must stay in Germany.",
      "Correct — AWS customers choose the Region where their data resides, so selecting a Region located in Germany keeps the data within German borders."
    ]
  },
  {
    id: 459,
    domain: "Cloud Technology & Services",
    type: "multiple",
    question: "A company is choosing which AWS Region to use for a new customer-facing application. Which factors should the company consider when making this decision? (Select TWO)",
    options: [
      "Proximity of the Region to the application's users",
      "The number of IAM users in the company's account",
      "Whether the required AWS services and features are available in the Region",
      "The AWS Support plan the company has purchased",
      "The number of edge locations worldwide"
    ],
    correct: [0, 2],
    explanation: "Key factors for choosing a Region include compliance and data residency, proximity to users (latency), availability of the needed services and features, and pricing, which varies by Region. IAM users and Support plans are account-level and global, so they do not differ between Regions.",
    optionExplanations: [
      "Correct — Placing the application in a Region close to its users reduces network latency and improves the user experience.",
      "IAM is a global service; the number of IAM users does not depend on, or influence, the Region choice.",
      "Correct — Not every AWS service or feature is available in every Region, so the company must confirm that the services it needs are offered in the chosen Region.",
      "An AWS Support plan applies to the whole account regardless of which Regions are used.",
      "The global network of edge locations is shared by all Regions, so it does not distinguish one Region from another."
    ]
  },
  {
    id: 460,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company runs its web application on Amazon EC2 instances in a single Availability Zone. The company wants the application to keep running if one data center experiences an outage. What should the company do?",
    options: [
      "Move the instances to a larger instance type in the same Availability Zone",
      "Launch instances in at least two Availability Zones behind a load balancer",
      "Store the application's static files on Amazon CloudFront edge locations",
      "Purchase Reserved Instances for all instances in the Availability Zone"
    ],
    correct: [1],
    explanation: "Each Availability Zone consists of one or more discrete data centers with independent power and networking, so spreading instances across multiple AZs (with a load balancer distributing traffic) protects against the failure of one AZ. A larger instance in the same AZ still fails if that AZ has an outage.",
    optionExplanations: [
      "A bigger instance in the same AZ is still a single point of failure if that AZ becomes unavailable.",
      "Correct — Running instances in two or more AZs behind Elastic Load Balancing lets traffic go to healthy instances if one AZ fails.",
      "CloudFront can cache static content, but the application servers themselves would still be in one AZ.",
      "Reserved Instances reduce cost; they do not add redundancy or protect against an AZ outage."
    ]
  },
  {
    id: 461,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A media company needs single-digit millisecond latency for video editing workstations in a large city that is far from the nearest AWS Region. The company wants to keep using AWS services. Which AWS infrastructure option is MOST suitable?",
    options: [
      "Amazon CloudFront edge locations",
      "An additional Availability Zone in the nearest Region",
      "AWS Local Zones",
      "AWS Direct Connect locations"
    ],
    correct: [2],
    explanation: "AWS Local Zones place compute, storage and other select AWS services closer to large population and industry centers, enabling very low latency for applications such as media production and gaming. CloudFront edge locations cache and deliver content, but they do not run general compute workloads like EC2 instances for editing.",
    optionExplanations: [
      "Edge locations are used mainly to cache and deliver content; they do not host EC2-based workstation workloads.",
      "Customers cannot create Availability Zones; AZs exist only inside AWS Regions, which in this case are far from the city.",
      "Correct — Local Zones extend an AWS Region into a metro area so latency-sensitive workloads can run close to end users.",
      "Direct Connect locations provide private network connectivity into AWS; they do not run compute close to the users."
    ]
  },
  {
    id: 462,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A manufacturing company must process data on its factory floor with very low latency and cannot move the data off-site, but it wants to use the same AWS APIs and tools it uses in the cloud. Which AWS service should it use?",
    options: [
      "AWS Outposts",
      "AWS Storage Gateway",
      "Amazon Lightsail",
      "AWS Local Zones"
    ],
    correct: [0],
    explanation: "AWS Outposts delivers AWS-designed infrastructure and services to a customer's own data center or on-premises facility, so workloads can run locally with the same AWS APIs, tools and console. Local Zones run in AWS-operated facilities, so the data would still leave the factory.",
    optionExplanations: [
      "Correct — Outposts brings AWS infrastructure, services and APIs into the customer's on-premises location for low-latency and data-residency needs.",
      "Storage Gateway connects on-premises applications to cloud storage; it does not run AWS compute services on site.",
      "Lightsail is a simplified cloud service running in AWS Regions, not on the customer's premises.",
      "Local Zones are AWS-operated sites near metro areas; the data would still be processed outside the factory."
    ]
  },
  {
    id: 463,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company plans to run a large in-memory database on Amazon EC2. The workload needs a high amount of RAM relative to its CPU. Which EC2 instance family category is the BEST fit?",
    options: [
      "Compute optimized",
      "Storage optimized",
      "Accelerated computing",
      "Memory optimized"
    ],
    correct: [3],
    explanation: "Memory optimized instances are designed to deliver fast performance for workloads that process large data sets in memory, such as in-memory databases and real-time big data analytics. Compute optimized instances favor high CPU performance relative to memory instead.",
    optionExplanations: [
      "Compute optimized instances provide a high ratio of CPU to memory, suited to batch processing or high-performance web servers, not RAM-heavy databases.",
      "Storage optimized instances are designed for high sequential read/write access to large local data sets, not mainly for large amounts of RAM.",
      "Accelerated computing instances use hardware accelerators such as GPUs, which an in-memory database does not need.",
      "Correct — Memory optimized instances offer a large amount of memory per vCPU, which suits in-memory databases."
    ]
  },
  {
    id: 464,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to run Docker containers on AWS using a fully managed AWS container orchestration service, but it needs to choose the specific EC2 instance types that host the containers. Which option meets these requirements?",
    options: [
      "AWS Lambda",
      "Amazon ECS with the EC2 launch type",
      "Amazon Elastic Container Registry (ECR)",
      "AWS App Runner"
    ],
    correct: [1],
    explanation: "Amazon ECS is AWS's own container orchestration service. With the EC2 launch type, containers run on a cluster of EC2 instances that the customer chooses and manages, giving control over instance types; with the Fargate launch type, AWS manages the underlying compute instead.",
    optionExplanations: [
      "Lambda runs functions without servers and does not let you pick the EC2 instance types that host your workload.",
      "Correct — ECS on the EC2 launch type orchestrates containers on EC2 instances the company selects, so it keeps control over the instance types.",
      "Amazon ECR is a container image registry; it stores images but does not run or orchestrate containers.",
      "App Runner fully abstracts the infrastructure, so the company cannot choose the EC2 instance types underneath."
    ]
  },
  {
    id: 465,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company has a legacy application that runs continuously for weeks, requires a custom operating system configuration, and needs software installed at the OS level. Which compute service is the MOST appropriate?",
    options: [
      "AWS Lambda",
      "AWS Fargate",
      "Amazon EC2",
      "AWS Step Functions"
    ],
    correct: [2],
    explanation: "Amazon EC2 provides virtual servers with full control over the operating system, so it suits long-running applications that need OS-level customization. Lambda is designed for short, event-driven functions with a maximum run time per invocation and no access to configure the underlying OS.",
    optionExplanations: [
      "Lambda functions have a maximum execution duration per invocation and do not give access to the underlying operating system.",
      "Fargate runs containers without exposing the host operating system, so OS-level configuration is not possible.",
      "Correct — EC2 instances give full administrative control over the OS and can run continuously for as long as needed.",
      "Step Functions coordinates workflows between services; it is not a compute environment for hosting an application."
    ]
  },
  {
    id: 466,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company runs a self-managed MySQL database on Amazon EC2. The operations team spends too much time on patching, backups, and hardware provisioning. Which service would reduce this operational effort while still using MySQL?",
    options: [
      "Amazon RDS for MySQL",
      "Amazon DynamoDB with on-demand mode",
      "Amazon Redshift",
      "Amazon Neptune"
    ],
    correct: [0],
    explanation: "Amazon RDS is a managed relational database service that automates tasks such as hardware provisioning, database setup, patching and backups, and it supports the MySQL engine. DynamoDB is also managed, but it is a NoSQL database, so the application would have to be redesigned.",
    optionExplanations: [
      "Correct — Amazon RDS for MySQL keeps the same database engine while AWS handles patching, automated backups and provisioning.",
      "DynamoDB is a NoSQL key-value and document database, so moving a MySQL application to it would require significant changes.",
      "Redshift is a data warehouse for analytics, not a replacement for a transactional MySQL database.",
      "Neptune is a graph database, which does not match a relational MySQL workload."
    ]
  },
  {
    id: 467,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "An application uses Amazon RDS. Heavy reporting queries run during business hours and slow down the primary database, which also handles customer orders. What is the MOST appropriate way to offload these reporting queries?",
    options: [
      "Enable Multi-AZ deployment and send queries to the standby instance",
      "Create an RDS read replica and send reporting queries to it",
      "Move the database tables to Amazon S3 Glacier",
      "Increase the storage size of the primary instance"
    ],
    correct: [1],
    explanation: "RDS read replicas are read-only copies of the primary database that can serve read-heavy workloads such as reporting, reducing load on the primary. In a standard Multi-AZ deployment, the standby instance exists for failover and cannot serve read traffic.",
    optionExplanations: [
      "The standby in a standard Multi-AZ deployment is used only for failover and does not accept read queries.",
      "Correct — A read replica receives copies of the data and can serve reporting queries so the primary can focus on orders.",
      "S3 Glacier is archival storage; it cannot serve database reporting queries.",
      "Adding storage does not reduce the query load that the reporting workload places on the primary instance."
    ]
  },
  {
    id: 468,
    domain: "Cloud Technology & Services",
    type: "multiple",
    question: "A company is deciding between Amazon RDS and Amazon DynamoDB for a new application. Which workload characteristics would favor Amazon DynamoDB? (Select TWO)",
    options: [
      "The application needs complex SQL joins across many related tables",
      "The application must run on an Oracle database engine",
      "The data has a flexible schema and is accessed by key",
      "The team needs to run large analytical reports over historical data",
      "The workload must scale to very high request rates with consistent low latency"
    ],
    correct: [2, 4],
    explanation: "DynamoDB is a serverless NoSQL key-value and document database, so it fits data with flexible schemas accessed by key and workloads that need massive scale with consistent single-digit millisecond latency. Complex joins and specific relational engines such as Oracle point to Amazon RDS, and large analytical reporting points to a data warehouse such as Amazon Redshift.",
    optionExplanations: [
      "Complex joins across related tables are a strength of relational databases such as Amazon RDS, not DynamoDB.",
      "Oracle is a relational engine available on Amazon RDS; DynamoDB does not run Oracle.",
      "Correct — DynamoDB stores items without a fixed schema and is optimized for fast access by key.",
      "Large analytical reporting over historical data is better suited to a data warehouse such as Amazon Redshift.",
      "Correct — DynamoDB scales automatically to very high request rates while keeping consistent low latency."
    ]
  },
  {
    id: 469,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company is designing a VPC for a two-tier application. The web servers must be reachable from the internet, but the database servers must NOT be directly reachable from the internet. Where should the database servers be placed?",
    options: [
      "In a public subnet with an internet gateway route",
      "At an Amazon CloudFront edge location",
      "In a private subnet with no route to an internet gateway",
      "In the default VPC of a separate AWS account in the same Region"
    ],
    correct: [2],
    explanation: "A private subnet has no route to an internet gateway, so resources in it cannot be reached directly from the internet, which is the common placement for databases. Public subnets have a route to an internet gateway and are used for internet-facing resources such as web servers or load balancers.",
    optionExplanations: [
      "A public subnet routes to an internet gateway, which is exactly what the database servers should avoid.",
      "Edge locations are used for content delivery and cannot host database servers.",
      "Correct — Placing the databases in a private subnet keeps them unreachable from the internet while the web tier can still connect to them inside the VPC.",
      "Moving the databases to another account's default VPC adds complexity and does not by itself make them private."
    ]
  },
  {
    id: 470,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company's employees work from home and need secure, encrypted access from their laptops to resources inside an Amazon VPC. Which AWS service is designed for this use case?",
    options: [
      "AWS Direct Connect",
      "AWS Client VPN",
      "AWS Transit Gateway",
      "Amazon Route 53"
    ],
    correct: [1],
    explanation: "AWS Client VPN is a managed client-based VPN service that lets individual users connect securely from their devices to AWS resources. Direct Connect is a dedicated private connection between a corporate network or data center and AWS, not a solution for individual remote laptops.",
    optionExplanations: [
      "Direct Connect links a data center or office network to AWS through a dedicated connection; it does not serve individual remote laptops.",
      "Correct — Client VPN gives remote users encrypted connections from their devices into a VPC.",
      "Transit Gateway connects VPCs and on-premises networks through a central hub; it is not a remote-user VPN client service.",
      "Route 53 is a DNS service; it does not create encrypted connections for remote workers."
    ]
  },
  {
    id: 471,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company has two VPCs in the same AWS Region: one for its application and one for a shared reporting tool. The company wants instances in the two VPCs to communicate using private IP addresses. Which option is the SIMPLEST way to achieve this?",
    options: [
      "Create a VPC peering connection between the two VPCs",
      "Attach an internet gateway to both VPCs",
      "Configure an AWS Site-to-Site VPN between the two VPCs",
      "Set up an Amazon CloudFront distribution"
    ],
    correct: [0],
    explanation: "A VPC peering connection is a networking connection between two VPCs that lets them route traffic to each other using private IP addresses, and it is the simplest option for connecting just two VPCs. Transit Gateway becomes useful when many VPCs and networks must be connected through a hub.",
    optionExplanations: [
      "Correct — VPC peering connects two VPCs privately so instances can communicate using private IP addresses.",
      "Internet gateways provide internet access; traffic would leave the private network and use public IPs.",
      "A Site-to-Site VPN connects on-premises networks to AWS; it is not the simple way to link two VPCs.",
      "CloudFront is a content delivery network and does not provide private routing between VPCs."
    ]
  },
  {
    id: 472,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company stores log files in Amazon S3. Logs are accessed often during the first 30 days, rarely afterward, and must be deleted after 5 years. How can the company manage this automatically at the LOWEST operational effort?",
    options: [
      "Write a custom script on an Amazon EC2 instance that moves and deletes the objects",
      "Enable S3 Versioning on the bucket",
      "Use S3 Cross-Region Replication to another bucket",
      "Create an S3 Lifecycle configuration to transition and expire the objects"
    ],
    correct: [3],
    explanation: "S3 Lifecycle rules can automatically transition objects to cheaper storage classes after a defined number of days and expire (delete) them when they are no longer needed. A custom script could do the same, but it adds servers and code to maintain.",
    optionExplanations: [
      "A custom script on EC2 works but adds infrastructure and code to maintain, so it is not the lowest-effort option.",
      "Versioning keeps multiple versions of objects; it does not move them to cheaper classes or delete them on a schedule.",
      "Cross-Region Replication copies objects to another bucket; it increases storage rather than tiering or deleting data.",
      "Correct — Lifecycle rules can move logs to a lower-cost storage class after 30 days and delete them after 5 years with no ongoing manual work."
    ]
  },
  {
    id: 473,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A financial company must retain closed account records for 10 years to satisfy regulations. The records will almost never be read, and retrieval within 12 hours is acceptable. Which Amazon S3 storage class is the MOST cost-effective?",
    options: [
      "S3 Standard-Infrequent Access",
      "S3 Glacier Deep Archive",
      "S3 Glacier Instant Retrieval",
      "S3 Intelligent-Tiering"
    ],
    correct: [1],
    explanation: "S3 Glacier Deep Archive is the lowest-cost S3 storage class and is designed for long-term retention of data that is rarely accessed, with retrieval typically within 12 hours. Glacier Instant Retrieval returns data in milliseconds, but it costs more to store than Deep Archive, which is unnecessary here.",
    optionExplanations: [
      "Standard-IA offers immediate access at a higher storage price, which is not needed for records that are almost never read.",
      "Correct — Glacier Deep Archive has the lowest storage cost in S3 and its retrieval times fit the 12-hour requirement.",
      "Glacier Instant Retrieval provides millisecond access, a feature the company does not need, at a higher storage cost than Deep Archive.",
      "Intelligent-Tiering is ideal for unknown or changing access patterns; for data known to be archival, Deep Archive is cheaper."
    ]
  },
  {
    id: 474,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company stores thumbnail images that can easily be regenerated from the originals. The thumbnails are accessed infrequently but must be available immediately when requested. Which S3 storage class is the MOST cost-effective?",
    options: [
      "S3 One Zone-Infrequent Access",
      "S3 Standard",
      "S3 Glacier Deep Archive",
      "S3 Glacier Flexible Retrieval with bulk retrievals"
    ],
    correct: [0],
    explanation: "S3 One Zone-IA stores data in a single Availability Zone at a lower cost than Standard-IA, which suits infrequently accessed data that can be re-created if that AZ is lost. It still provides millisecond access, unlike the Glacier archive classes that require retrieval time.",
    optionExplanations: [
      "Correct — One Zone-IA is cheaper because data is kept in one AZ, an acceptable risk for re-creatable thumbnails that still need immediate access.",
      "S3 Standard is designed for frequently accessed data and costs more than the infrequent access classes.",
      "Deep Archive retrievals take hours, which does not meet the need for immediate access.",
      "Glacier Flexible Retrieval requires a restore that takes minutes to hours, so access is not immediate."
    ]
  },
  {
    id: 475,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to take point-in-time backups of the Amazon EBS volumes attached to its EC2 instances so that it can restore them later or create new volumes from them. Which feature should the company use?",
    options: [
      "EC2 instance store",
      "Amazon EFS replication",
      "Amazon EBS snapshots",
      "S3 Transfer Acceleration"
    ],
    correct: [2],
    explanation: "Amazon EBS snapshots are point-in-time, incremental backups of EBS volumes that are stored durably in Amazon S3 (managed by AWS) and can be used to restore or create new volumes. Instance store is temporary block storage and is not a backup mechanism.",
    optionExplanations: [
      "Instance store is temporary storage physically attached to the host, and its data is lost when the instance stops; it is not a backup feature.",
      "EFS replication copies EFS file systems, not EBS volumes.",
      "Correct — EBS snapshots capture the state of a volume at a point in time and can be used to restore or create new volumes.",
      "Transfer Acceleration speeds up uploads to S3 over long distances; it does not back up EBS volumes."
    ]
  },
  {
    id: 476,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A research team runs high performance computing (HPC) simulations that need a shared file system with very high throughput for many compute nodes at once. Which AWS storage service is designed for this type of workload?",
    options: [
      "Amazon FSx for Windows File Server",
      "Amazon S3 Glacier Flexible Retrieval",
      "AWS Storage Gateway",
      "Amazon FSx for Lustre"
    ],
    correct: [3],
    explanation: "Amazon FSx for Lustre provides a fully managed, high-performance file system built on the open-source Lustre file system, used for HPC, machine learning and media processing that need fast shared access. FSx for Windows File Server targets Windows workloads using the SMB protocol rather than HPC throughput.",
    optionExplanations: [
      "FSx for Windows File Server is aimed at Windows-based applications needing SMB and Active Directory, not HPC clusters.",
      "Glacier Flexible Retrieval is archival storage with retrieval delays and is not a file system for compute nodes.",
      "Storage Gateway connects on-premises environments to AWS storage; it is not a high-throughput file system for HPC.",
      "Correct — FSx for Lustre delivers the very high throughput and shared access that HPC simulations require."
    ]
  },
  {
    id: 477,
    domain: "Cloud Technology & Services",
    type: "multiple",
    question: "A developer is evaluating Amazon EC2 instance store for temporary data. Which statements about instance store are correct? (Select TWO)",
    options: [
      "Data is lost when the instance is stopped or terminated",
      "Data is automatically replicated to another Availability Zone",
      "The volume can be detached and attached to a different instance",
      "The storage is physically attached to the host computer",
      "Instance store is the same service as Amazon EFS"
    ],
    correct: [0, 3],
    explanation: "Instance store provides temporary block-level storage on disks physically attached to the host computer, which gives very low latency. Its data does not persist when the instance is stopped, hibernated or terminated, so it suits caches, buffers and scratch data rather than data that must be kept.",
    optionExplanations: [
      "Correct — Instance store is ephemeral, so its data is lost when the instance stops or terminates.",
      "Instance store is not replicated across AZs; durable, replicated storage requires services such as EBS snapshots, EFS or S3.",
      "Instance store volumes cannot be detached and moved to another instance, unlike EBS volumes.",
      "Correct — Instance store disks are physically attached to the host that runs the instance.",
      "Amazon EFS is a managed network file system shared by many instances; it is a separate service from instance store."
    ]
  },
  {
    id: 478,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "Business analysts at a retail company want to create interactive dashboards and visualizations of sales data without managing any servers. Which AWS service should they use?",
    options: [
      "Amazon QuickSight",
      "Amazon Athena",
      "AWS Glue",
      "Amazon EMR"
    ],
    correct: [0],
    explanation: "Amazon QuickSight is a serverless, cloud-scale business intelligence service for building interactive dashboards and visualizations. Athena can query data with SQL, but it does not provide dashboards for business users.",
    optionExplanations: [
      "Correct — QuickSight is the AWS business intelligence service for building interactive dashboards and visual reports.",
      "Athena runs SQL queries on data in S3, but it does not create dashboards or visual reports by itself.",
      "Glue prepares and catalogs data through ETL jobs; it does not create visualizations for analysts.",
      "EMR runs big data frameworks such as Spark and Hadoop; it is not a dashboarding tool."
    ]
  },
  {
    id: 479,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to capture streaming clickstream data and automatically deliver it to Amazon S3 for later analysis, without writing or managing custom consumer applications. Which AWS service is the BEST fit?",
    options: [
      "Amazon SQS standard queues",
      "Amazon Data Firehose",
      "Amazon SNS topics",
      "AWS Batch"
    ],
    correct: [1],
    explanation: "Amazon Data Firehose (formerly Amazon Kinesis Data Firehose) is a fully managed service that captures streaming data and delivers it to destinations such as Amazon S3, Amazon Redshift and Amazon OpenSearch Service. Kinesis Data Streams is also for streaming data, but it normally requires you to build consumer applications to process the stream.",
    optionExplanations: [
      "SQS is a message queue for decoupling components; it does not automatically deliver streaming data to S3.",
      "Correct — Data Firehose ingests streaming data and loads it into destinations such as S3 with no consumer code to manage.",
      "SNS is a publish/subscribe notification service, not a streaming delivery service into S3.",
      "AWS Batch runs batch computing jobs; it does not continuously capture and deliver streaming data."
    ]
  },
  {
    id: 480,
    domain: "Cloud Technology & Services",
    type: "multiple",
    question: "A company stores application log files as CSV in Amazon S3. Analysts want to run SQL queries directly on these files and then view the results in interactive dashboards, using serverless services. Which AWS services should be used together? (Select TWO)",
    options: [
      "Amazon Neptune",
      "Amazon Athena",
      "Amazon Kinesis Data Streams",
      "Amazon QuickSight",
      "Amazon EC2"
    ],
    correct: [1, 3],
    explanation: "Amazon Athena runs standard SQL queries directly against data in Amazon S3 without loading it into a database, and Amazon QuickSight can use Athena as a data source to build dashboards. Both are serverless, so there is no infrastructure to manage.",
    optionExplanations: [
      "Neptune is a graph database for highly connected data; it does not query CSV files in S3.",
      "Correct — Athena queries the CSV files in S3 with SQL, with no servers to manage.",
      "Kinesis Data Streams ingests real-time streaming data; the logs are already stored in S3.",
      "Correct — QuickSight connects to Athena and turns query results into interactive dashboards.",
      "EC2 would require managing servers, which conflicts with the serverless requirement."
    ]
  },
  {
    id: 481,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "An online store receives product reviews in many languages and wants to automatically convert them into English so its support team can read them. Which AWS service should the company use?",
    options: [
      "Amazon Polly",
      "Amazon Lex",
      "Amazon Textract",
      "Amazon Translate"
    ],
    correct: [3],
    explanation: "Amazon Translate is a neural machine translation service that translates text between languages. Amazon Polly turns text into speech but does not change the language of the text.",
    optionExplanations: [
      "Polly converts text into lifelike speech; it does not translate text between languages.",
      "Lex builds conversational chatbots; it is not designed to translate written reviews.",
      "Textract extracts text and data from scanned documents; it does not translate the text it finds.",
      "Correct — Amazon Translate automatically translates text from one language to another, such as reviews into English."
    ]
  },
  {
    id: 482,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A startup wants to add generative AI features, such as text summarization, to its application by calling foundation models from several AI providers through a single API, without managing any infrastructure. Which AWS service should it use?",
    options: [
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon Bedrock",
      "Amazon Kendra"
    ],
    correct: [2],
    explanation: "Amazon Bedrock is a fully managed service that provides access to foundation models from Amazon and leading AI companies through a single API, so developers can build generative AI applications without managing infrastructure. Amazon Comprehend offers pre-built natural language processing, such as sentiment analysis, but it is not a platform for using foundation models.",
    optionExplanations: [
      "Comprehend performs NLP tasks such as sentiment and entity detection; it does not provide access to multiple foundation models.",
      "Rekognition analyzes images and video; it is not a generative AI service for text summarization.",
      "Correct — Bedrock offers serverless access to a choice of foundation models through one API for generative AI use cases.",
      "Kendra is an intelligent enterprise search service, not a service for calling foundation models from different providers."
    ]
  },
  {
    id: 483,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company's developers want a generative AI-powered assistant that suggests code in their IDE, explains code, and answers questions about building on AWS. Which AWS service provides this?",
    options: [
      "Amazon Q Developer",
      "AWS CodeBuild",
      "Amazon SageMaker",
      "AWS X-Ray"
    ],
    correct: [0],
    explanation: "Amazon Q Developer is a generative AI-powered assistant that helps developers write, explain and transform code and answers questions about AWS, including inside popular IDEs. SageMaker is a platform for building and training your own ML models, not a ready-made coding assistant.",
    optionExplanations: [
      "Correct — Amazon Q Developer provides AI code suggestions and answers about AWS directly in the developer's IDE and the console.",
      "CodeBuild compiles code and runs tests in a managed build service; it does not suggest code.",
      "SageMaker is used to build, train and deploy custom ML models, not to act as a ready-made coding assistant.",
      "X-Ray traces requests through distributed applications; it does not generate or explain code."
    ]
  },
  {
    id: 484,
    domain: "Cloud Technology & Services",
    type: "multiple",
    question: "A call center wants to convert recorded customer calls into text and then determine whether each customer's tone was positive or negative. Which AWS services should be combined? (Select TWO)",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Comprehend"
    ],
    correct: [1, 4],
    explanation: "Amazon Transcribe converts speech in the audio recordings into text, and Amazon Comprehend uses natural language processing to detect sentiment in that text. Polly does the opposite of Transcribe, turning text into speech.",
    optionExplanations: [
      "Polly converts text to speech, which is the opposite of what the call center needs.",
      "Correct — Transcribe performs automatic speech recognition, producing text transcripts from the call recordings.",
      "Rekognition analyzes images and video, not audio or text sentiment.",
      "Textract extracts text from scanned documents and forms, not from audio recordings.",
      "Correct — Comprehend analyzes the transcripts and determines sentiment such as positive, negative, neutral or mixed."
    ]
  },
  {
    id: 485,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company wants to run an AWS Lambda function automatically every night at 2:00 AM to clean up temporary files, without managing any servers. Which AWS service can trigger the function on this schedule?",
    options: [
      "Amazon SQS",
      "AWS Config",
      "Amazon EventBridge",
      "Amazon CloudFront"
    ],
    correct: [2],
    explanation: "Amazon EventBridge can invoke targets such as Lambda functions on a schedule using cron or rate expressions (through EventBridge Scheduler or scheduled rules), as well as in response to events. SQS holds messages in a queue but does not trigger jobs based on time of day.",
    optionExplanations: [
      "SQS queues messages for consumers; it has no built-in way to start a function at a set time each night.",
      "AWS Config records and evaluates resource configurations; it is not a job scheduler.",
      "Correct — EventBridge supports cron-style schedules that can invoke a Lambda function at a fixed time every day.",
      "CloudFront is a content delivery network and cannot schedule Lambda function runs."
    ]
  },
  {
    id: 486,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A company's application is built from many microservices, and users report that some requests are slow. The developers want to trace each request as it travels through the services to find where the delay occurs. Which AWS service should they use?",
    options: [
      "AWS X-Ray",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Inspector"
    ],
    correct: [0],
    explanation: "AWS X-Ray collects data about requests as they travel through an application and shows a service map and traces, helping developers find performance bottlenecks and errors in distributed systems. CloudTrail records API calls made in the account, which helps with auditing but not with tracing application requests.",
    optionExplanations: [
      "Correct — X-Ray traces requests end to end across microservices to show where latency and errors occur.",
      "CloudTrail logs AWS API activity for auditing; it does not trace requests inside the application.",
      "Trusted Advisor gives account-level best-practice checks; it does not analyze individual application requests.",
      "Amazon Inspector scans workloads for software vulnerabilities; it is not a performance tracing tool."
    ]
  },
  {
    id: 487,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "An administrator wants to run AWS CLI commands from a web browser while signed in to the AWS Management Console, without installing or configuring anything on the local computer. Which AWS service provides this?",
    options: [
      "AWS Systems Manager Session Manager",
      "Amazon WorkSpaces",
      "Amazon Lightsail",
      "AWS CloudShell"
    ],
    correct: [3],
    explanation: "AWS CloudShell is a browser-based shell launched from the Management Console that is pre-authenticated with the user's console credentials and comes with the AWS CLI and common tools pre-installed. Amazon WorkSpaces provides full virtual desktops, which is far more than needed to run a few CLI commands.",
    optionExplanations: [
      "Session Manager opens shell sessions on managed instances; it is not a pre-configured AWS CLI environment for the signed-in user.",
      "WorkSpaces provides complete virtual desktops, which is unnecessary just to run CLI commands from a browser.",
      "Amazon Lightsail offers simple virtual servers and bundles — it is not a browser-based shell for running AWS CLI commands from the console.",
      "Correct — CloudShell opens a pre-authenticated command line in the browser with the AWS CLI already installed."
    ]
  },
  {
    id: 488,
    domain: "Cloud Technology & Services",
    type: "single",
    question: "A small team of front-end developers wants to quickly build, deploy, and host a full-stack web application with features like user sign-in and Git-based continuous deployment, without deep cloud expertise. Which AWS service is designed for this?",
    options: [
      "AWS Batch",
      "AWS Amplify",
      "Amazon EMR",
      "AWS Outposts"
    ],
    correct: [1],
    explanation: "AWS Amplify provides tools and a hosting service that let front-end web and mobile developers build, deploy and host full-stack applications, including authentication and Git-based CI/CD. AWS Batch, by contrast, is for running large-scale batch computing jobs.",
    optionExplanations: [
      "AWS Batch runs batch computing jobs; it is not a framework for building and hosting web applications.",
      "Correct — Amplify helps front-end developers build, connect a backend to, and host full-stack web and mobile applications with Git-based deployments.",
      "EMR processes big data with frameworks such as Spark and Hadoop; it does not host web applications.",
      "Outposts brings AWS infrastructure on premises; it does not simplify building and hosting front-end applications."
    ]
  },
  {
    id: 489,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company's AWS spending is irregular, so it is hard to set fixed budget thresholds. The finance team wants to be alerted automatically when spending shows an unusual spike compared to normal patterns. Which AWS service should it use?",
    options: [
      "AWS Budgets",
      "AWS Cost Anomaly Detection",
      "AWS Cost and Usage Report",
      "AWS Pricing Calculator"
    ],
    correct: [1],
    explanation: "AWS Cost Anomaly Detection uses machine learning to learn an account's normal spending patterns and sends alerts when it detects unusual cost spikes, with a root cause analysis. AWS Budgets is also used for alerts, but it compares spending against thresholds that you define yourself.",
    optionExplanations: [
      "AWS Budgets alerts when costs or usage exceed thresholds you set manually — it does not learn normal patterns to detect anomalies.",
      "Correct — AWS Cost Anomaly Detection uses machine learning to detect unusual spending and notify the team, without fixed thresholds.",
      "The AWS Cost and Usage Report provides the most detailed billing data for analysis — it does not send alerts about spending spikes.",
      "The AWS Pricing Calculator estimates the cost of planned architectures — it does not monitor actual spending."
    ]
  },
  {
    id: 490,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company uses AWS Organizations with consolidated billing for five AWS accounts. Which account is responsible for paying the charges incurred by all the accounts?",
    options: [
      "Each member account pays its own bill",
      "The account with the highest monthly usage",
      "The management account of the organization",
      "A separate billing account created by AWS Support"
    ],
    correct: [2],
    explanation: "With consolidated billing, the management account (formerly the payer account) receives one combined bill and pays the charges for every member account. Member accounts still see their own usage, but they do not pay AWS separately.",
    optionExplanations: [
      "With consolidated billing, member accounts do not pay AWS directly; their charges roll up to one bill.",
      "Usage volume does not determine who pays; the payer role belongs to a specific account in the organization.",
      "Correct — The management account pays for all usage across the member accounts in the organization.",
      "AWS Support does not create billing accounts; the organization's management account handles payment."
    ]
  },
  {
    id: 491,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "An AWS reseller manages many customer accounts in one organization. It wants to group the accounts by customer and show each customer a bill based on the reseller's own custom pricing rates. Which AWS service should it use?",
    options: [
      "AWS Billing Conductor",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets"
    ],
    correct: [0],
    explanation: "AWS Billing Conductor lets you group accounts into billing groups and apply custom pricing rules to produce pro forma bills for showback or chargeback. Cost Explorer shows actual AWS costs but cannot apply your own rates to create customer-specific bills.",
    optionExplanations: [
      "Correct — AWS Billing Conductor creates billing groups and applies custom rates to produce customized pro forma billing data.",
      "Cost Explorer visualizes actual AWS costs and usage, but it cannot apply a reseller's own pricing rates.",
      "The Pricing Calculator estimates future costs for planned workloads; it does not produce bills for existing accounts.",
      "AWS Budgets sends alerts when costs or usage cross thresholds; it does not create customized bills."
    ]
  },
  {
    id: 492,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company notices that IP addresses belonging to AWS are sending spam and attacking its website. Who should the company contact to report this activity?",
    options: [
      "AWS Professional Services",
      "AWS Enterprise Support TAM",
      "AWS Partner Network",
      "AWS Trust & Safety team"
    ],
    correct: [3],
    explanation: "The AWS Trust & Safety team handles reports of abuse coming from AWS resources, such as spam, port scanning, denial-of-service attacks, or malware hosting. Anyone can report suspected abuse to this team, even without a paid support plan.",
    optionExplanations: [
      "AWS Professional Services helps customers with migrations and projects; it does not investigate abuse reports.",
      "A Technical Account Manager supports the company's own Enterprise account and is not the channel for reporting abuse by other AWS users.",
      "The AWS Partner Network is a program of consulting and technology partners, not an abuse reporting channel.",
      "Correct — The AWS Trust & Safety team investigates reports of AWS resources being used for abusive or illegal activity."
    ]
  },
  {
    id: 493,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A retailer must be sure it can launch a specific number of EC2 instances in one Availability Zone during a two-week holiday sale. It does not want a 1-year or 3-year commitment. Which option meets these requirements?",
    options: [
      "Spot Instances in that Availability Zone",
      "On-Demand Capacity Reservations",
      "Compute Savings Plans",
      "Standard Reserved Instances"
    ],
    correct: [1],
    explanation: "On-Demand Capacity Reservations reserve EC2 capacity in a specific Availability Zone for any duration, with no long-term commitment, and can be canceled at any time. Savings Plans and Reserved Instances reduce cost but require a 1- or 3-year commitment, and Savings Plans do not reserve capacity.",
    optionExplanations: [
      "Spot Instances can be interrupted when AWS needs the capacity, so they cannot guarantee capacity during the sale.",
      "Correct — On-Demand Capacity Reservations guarantee capacity in a chosen Availability Zone without a long-term commitment.",
      "Compute Savings Plans require a 1- or 3-year commitment and provide a discount, not reserved capacity.",
      "Standard Reserved Instances require a 1- or 3-year term, which the retailer does not want for a two-week event."
    ]
  },
  {
    id: 494,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company will run the same EC2 instance family in a single AWS Region for the next three years, but instance sizes may change. Which Savings Plan provides the LARGEST discount for this usage?",
    options: [
      "EC2 Instance Savings Plans",
      "Compute Savings Plans",
      "Amazon SageMaker Savings Plans",
      "AWS Lambda Savings Plans"
    ],
    correct: [0],
    explanation: "EC2 Instance Savings Plans give the largest Savings Plans discount in exchange for committing to one instance family in one Region, while still allowing changes in size, OS, and tenancy. Compute Savings Plans are more flexible across families, Regions, Fargate, and Lambda, but their discount is lower.",
    optionExplanations: [
      "Correct — EC2 Instance Savings Plans offer the deepest Savings Plans discount for a fixed instance family in one Region.",
      "Compute Savings Plans add flexibility the company does not need, and they provide a smaller discount.",
      "SageMaker Savings Plans apply only to Amazon SageMaker usage, not to general EC2 instances.",
      "There is no separate Lambda Savings Plan; Lambda usage is covered by Compute Savings Plans, and it is irrelevant to EC2 instances here."
    ]
  },
  {
    id: 495,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company suspects that many of its EC2 instances and EBS volumes are larger than needed. Which AWS service analyzes utilization metrics and recommends better-sized resources?",
    options: [
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Compute Optimizer",
      "AWS Cost and Usage Report"
    ],
    correct: [2],
    explanation: "AWS Compute Optimizer uses machine learning on historical utilization data to recommend right-sized EC2 instances, Auto Scaling groups, EBS volumes, Lambda functions, and more. The Cost and Usage Report provides detailed billing data but does not generate sizing recommendations.",
    optionExplanations: [
      "AWS Budgets alerts on spending or usage thresholds; it does not analyze resource utilization to recommend sizes.",
      "The Pricing Calculator estimates costs for planned architectures; it does not look at the utilization of running resources.",
      "Correct — AWS Compute Optimizer recommends optimal resource sizes based on actual utilization metrics.",
      "The Cost and Usage Report contains detailed billing line items but provides no right-sizing recommendations."
    ]
  },
  {
    id: 496,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A retailer runs business-critical workloads on AWS and is preparing a major product launch. It wants its AWS Support plan to include consultative help such as support for this planned launch event, Well-Architected reviews, and a proactive security review. Which option meets these requirements?",
    options: [
      "Basic Support",
      "AWS Business Support+",
      "AWS Enterprise Support",
      "The AWS re:Post community"
    ],
    correct: [2],
    explanation: "Enterprise Support is designed for business-critical workloads and includes consultative reviews: Well-Architected reviews, proactive security reviews, planned event and launch support, and a strategic support plan. It also provides a designated Technical Account Manager, while Basic Support and Business Support+ do not include these consultative reviews.",
    optionExplanations: [
      "Basic Support provides customer service, documentation, and Trusted Advisor core checks, but no consultative reviews or launch support.",
      "Business Support+ gives 24/7 technical support and architectural guidance for production workloads, but consultative reviews and planned event support are Enterprise Support features.",
      "Correct — Enterprise Support includes consultative reviews such as Well-Architected reviews, proactive security reviews, and planned event and launch support.",
      "re:Post provides community answers to questions. It does not deliver structured reviews or launch support for the company's workloads."
    ]
  },
  {
    id: 497,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A large enterprise is planning a complex data center migration and wants to work directly with a global team of experts employed by AWS. Which AWS offering should it engage?",
    options: [
      "AWS Marketplace Professional Services",
      "AWS Marketplace",
      "AWS Professional Services",
      "AWS Partner Network (APN) consultants"
    ],
    correct: [2],
    explanation: "AWS Professional Services is a global team of AWS experts who help customers achieve business outcomes such as large migrations, often working alongside AWS Partners.",
    optionExplanations: [
      "AWS Marketplace Professional Services lists third-party consultants and service providers; the company wants experts employed by AWS itself.",
      "AWS Marketplace is a catalog for buying third-party software and services, not a direct engagement with AWS's own experts.",
      "Correct — AWS Professional Services is AWS's own team of experts that helps customers with large initiatives such as migrations.",
      "APN consulting partners are third-party companies, not experts employed directly by AWS."
    ]
  },
  {
    id: 498,
    domain: "Billing, Pricing & Support",
    type: "single",
    question: "A company's compliance rules require that its EC2 instances run on hardware not shared with other AWS customers. The company does not need control over instance placement on specific physical servers or server-bound licensing. Which option is the MOST cost-effective?",
    options: [
      "Dedicated Hosts",
      "Dedicated Instances",
      "Spot Instances",
      "On-Demand Capacity Reservations"
    ],
    correct: [1],
    explanation: "Dedicated Instances run on hardware dedicated to a single customer, which meets the isolation requirement without paying for an entire physical server. Dedicated Hosts also provide isolation, but they add host-level visibility and control for server-bound software licenses, which this company does not need.",
    optionExplanations: [
      "Dedicated Hosts provide a whole physical server with host-level control for licensing, which costs more than needed here.",
      "Correct — Dedicated Instances meet the single-tenant hardware requirement without the extra cost of a full Dedicated Host.",
      "Spot Instances run on shared hardware by default and can be interrupted, so they do not meet the compliance rule.",
      "Capacity Reservations guarantee capacity but do not by themselves provide hardware dedicated to one customer."
    ]
  },
  {
    id: 499,
    domain: "Billing, Pricing & Support",
    type: "multiple",
    question: "A company is reviewing data transfer charges on its AWS bill. Which types of data transfer typically incur a charge? (Select TWO)",
    options: [
      "Data transferred from Amazon EC2 out to the internet",
      "Data transferred into Amazon EC2 from the internet",
      "Data transferred between EC2 and Amazon S3 in the same Region",
      "Data transferred between two different AWS Regions",
      "Data uploaded from on premises into Amazon S3 over the internet"
    ],
    correct: [0, 3],
    explanation: "AWS generally does not charge for data transferred into AWS from the internet, but it does charge for data transferred out to the internet and for data transferred between AWS Regions. Data transfer between EC2 and S3 within the same Region is also generally free.",
    optionExplanations: [
      "Correct — Data transferred out of AWS to the internet is charged.",
      "Inbound data transfer from the internet into AWS is generally free.",
      "Data transfer between Amazon EC2 and Amazon S3 within the same Region is generally not charged.",
      "Correct — Data transferred between AWS Regions incurs data transfer charges.",
      "Uploading data into Amazon S3 from the internet is inbound transfer, which is generally free."
    ]
  },
  {
    id: 500,
    domain: "Billing, Pricing & Support",
    type: "multiple",
    question: "A web application has a steady baseline of EC2 usage all year, plus unpredictable traffic peaks a few days each month. The company wants to reduce costs without risking interruptions. Which TWO actions should it take? (Select TWO)",
    options: [
      "Run the baseline on Spot Instances",
      "Cover the baseline with a Savings Plan",
      "Buy Reserved Instances sized for the peaks",
      "Move all instances to Dedicated Hosts",
      "Use On-Demand Instances for the peaks"
    ],
    correct: [1, 4],
    explanation: "A common cost strategy is to cover predictable, steady usage with a commitment-based discount such as a Savings Plan, and to handle short, unpredictable peaks with On-Demand Instances that need no commitment. Spot Instances could be interrupted, and sizing commitments for peak usage would leave paid capacity unused most of the month.",
    optionExplanations: [
      "Spot Instances can be interrupted, so they are not suitable for a baseline that must run without interruption.",
      "Correct — A Savings Plan gives a discount for steady, predictable baseline usage in exchange for a 1- or 3-year commitment.",
      "Reserved Instances sized for peaks would be underused most of the month, wasting the commitment.",
      "Dedicated Hosts cost more and are meant for isolation or licensing needs, not for reducing costs.",
      "Correct — On-Demand Instances handle short, unpredictable peaks with no long-term commitment."
    ]
  }
];
