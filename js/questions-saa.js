// AWS Certified Solutions Architect – Associate SAA-C03 — Question Bank (300 questions)
// Domains: Design Secure Architectures (30%) | Design Resilient Architectures (26%) | Design High-Performing Architectures (24%) | Design Cost-Optimized Architectures (20%)
// ids start at 1001 so they never collide with the CLF-C02 bank

const SAA_QUESTION_BANK = [

  // ────────────────────────────────────────────────────────────────
  // DOMAIN: Design Secure Architectures  (30% — 45 questions)
  // ────────────────────────────────────────────────────────────────
  {
    id: 1001,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An analytics application runs on Amazon EC2 instances in account A and must read objects from an Amazon S3 bucket in account B. The security team prohibits long-term credentials on the instances. Which solution will meet these requirements in the MOST secure way?",
    options: [
      "Create an IAM user in account B and store its access keys in the application configuration file.",
      "Create an IAM role in account B that trusts account A, and let the instance role assume it.",
      "Make the bucket public and restrict reads with a bucket policy condition on the instances' IP addresses.",
      "Store account B IAM user access keys in AWS Secrets Manager and retrieve them at instance startup."
    ],
    correct: [1],
    explanation: "A cross-account IAM role in account B that trusts account A (and the instance role permitted to call sts:AssumeRole) gives the application temporary, automatically expiring credentials with least-privilege access to the bucket. Storing IAM user keys in Secrets Manager looks secure, but it still relies on long-term credentials, which the requirement forbids.",
    optionExplanations: [
      "This places long-term credentials on the instances, which the security team explicitly prohibits.",
      "Correct — the instance profile provides temporary credentials, and assuming a cross-account role in account B returns short-lived credentials scoped to the bucket.",
      "Making the bucket public is a serious exposure, and IP-based conditions are a weak control compared with IAM principals.",
      "Secrets Manager protects the keys at rest, but they are still long-term IAM user credentials used by the instances."
    ]
  },
  {
    id: 1002,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company has 40 AWS accounts in AWS Organizations. Employees already authenticate with Microsoft Entra ID. The company wants employees to use single sign-on to reach any account they are entitled to, with permissions managed centrally. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Enable IAM Identity Center, connect Entra ID as the external identity provider, and assign permission sets to groups.",
      "Create IAM users in each account and synchronize their passwords with a scheduled AWS Lambda function.",
      "Configure a SAML identity provider and matching IAM roles separately in each of the 40 member accounts.",
      "Deploy AWS Managed Microsoft AD in each account and create a trust with the corporate directory."
    ],
    correct: [0],
    explanation: "IAM Identity Center is the recommended way to give a workforce single sign-on across all accounts in an organization; it federates with Entra ID and centrally manages permission sets assigned to groups. Per-account SAML federation also works technically, but it must be configured and maintained in all 40 accounts, so it has far more operational overhead.",
    optionExplanations: [
      "Correct — IAM Identity Center integrates with an external SAML/SCIM identity provider and provisions permission sets as roles in every assigned account from one place.",
      "This creates thousands of long-term identities across 40 accounts and custom synchronization code, which is the opposite of low overhead.",
      "This works, but every account and role must be configured and maintained individually instead of centrally.",
      "Running a directory in every account adds cost and management effort and still does not provide centralized permission assignment."
    ]
  },
  {
    id: 1003,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company must guarantee that no account in its AWS organization can create resources in AWS Regions outside the European Union. The control must also apply to administrators of the member accounts. Which solution will meet these requirements?",
    options: [
      "Attach an IAM policy that denies non-EU Regions to every IAM user and role in each member account.",
      "Deploy AWS Config rules in every account that detect resources created outside the EU Regions.",
      "Attach an SCP to the organization root that denies requests to Regions outside the EU.",
      "Use AWS CloudTrail with Amazon EventBridge rules that terminate resources launched outside the EU."
    ],
    correct: [2],
    explanation: "A service control policy with a deny on aws:RequestedRegion is a preventive guardrail that applies to every IAM principal in member accounts, including their administrators (global services are typically exempted with NotAction). IAM policies in each account seem similar, but a member account administrator could remove them, so they do not guarantee the restriction.",
    optionExplanations: [
      "Member account administrators can detach or modify IAM policies in their own accounts, so the restriction is not guaranteed.",
      "AWS Config is a detective control; it reports noncompliant resources after creation instead of preventing them.",
      "Correct — SCPs set the maximum permissions for every principal in member accounts, including administrators, and cannot be changed from within those accounts.",
      "This is reactive custom automation; resources are created first and could be missed or partially cleaned up."
    ]
  },
  {
    id: 1004,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Developers must be able to create IAM roles for their own AWS Lambda functions. The security team must ensure that any role a developer creates can never have more permissions than a defined maximum, without manually approving each role. Which solution meets these requirements?",
    options: [
      "Grant developers full IAM access and review all new roles weekly using IAM Access Analyzer findings.",
      "Require developers to submit role requests to the security team, which creates every role manually.",
      "Apply an SCP that denies the iam:CreateRole action to all principals in the development account.",
      "Allow role creation only when a specific permissions boundary is attached to the new role."
    ],
    correct: [3],
    explanation: "Permissions boundaries delegate role creation safely: the developer policy allows iam:CreateRole only when the required boundary is attached, so any new role is capped at the boundary no matter what policies it receives. Weekly Access Analyzer reviews would only catch over-privileged roles after the fact, which does not ensure they never exceed the maximum.",
    optionExplanations: [
      "Weekly review is detective and delayed; a developer could create an over-privileged role and use it before the review.",
      "This violates the requirement to avoid manual approval of each role and slows development.",
      "This prevents developers from creating any roles at all, so they cannot deploy their functions.",
      "Correct — a permissions boundary caps the effective permissions of any role created, and the iam:PermissionsBoundary condition key forces developers to attach it."
    ]
  },
  {
    id: 1005,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An application on Amazon EC2 writes to an Amazon DynamoDB table by using IAM user access keys stored in a configuration file. An audit flagged this practice. Which solution will remediate the finding in the MOST secure way with the LEAST operational overhead?",
    options: [
      "Store the access keys in AWS Secrets Manager with rotation and retrieve them when the application starts.",
      "Attach an IAM role with the required DynamoDB permissions to the instances through an instance profile.",
      "Encrypt the configuration file with an AWS KMS key and decrypt it when the application starts.",
      "Pass the access keys through instance user data and rotate them with a scheduled AWS Lambda function."
    ],
    correct: [1],
    explanation: "An IAM role delivered through an instance profile gives the application temporary credentials that the AWS SDK retrieves and rotates automatically, removing stored keys entirely. Storing the keys in Secrets Manager with rotation improves handling, but it still uses IAM user credentials and requires custom rotation, so it is neither the most secure nor the lowest-overhead option.",
    optionExplanations: [
      "This adds rotation logic but keeps long-term IAM user credentials in use, which is less secure and more work than a role.",
      "Correct — the SDK automatically obtains and refreshes temporary credentials from the instance metadata, with no keys to store or rotate.",
      "The keys are still long-term credentials and now require additional decryption logic and key management.",
      "User data is readable from the instance and is not a secret store; the credentials also remain long-term."
    ]
  },
  {
    id: 1006,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company owns an AWS Lambda function that a partner application running in the partner's AWS account must invoke directly. The company does not want to create or manage any IAM users or roles in its own account for the partner. Which solution meets these requirements?",
    options: [
      "Create an IAM user for the partner in the company account and share its access keys securely.",
      "Create an IAM role in the company account that the partner can assume to invoke the function.",
      "Add a statement to the function's resource-based policy that allows the partner account to invoke it.",
      "Add a statement to the function's execution role policy that allows the partner account to invoke the function."
    ],
    correct: [2],
    explanation: "Resource-based policies grant cross-account access on the resource itself, so adding the partner account to the Lambda function policy allows invocation without any new IAM identities in the company account. A cross-account role would also work, but it requires creating and maintaining a role, which the company explicitly wants to avoid.",
    optionExplanations: [
      "This creates an IAM identity with long-term credentials in the company account, which the requirement forbids.",
      "A cross-account role works, but it requires creating and managing a role in the company account.",
      "Correct — a Lambda resource-based policy can grant lambda:InvokeFunction directly to another account; the partner then delegates that permission to its own principals.",
      "The execution role defines what the function can do, not who can invoke it, so it cannot grant invocation to the partner."
    ]
  },
  {
    id: 1007,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company wants its administrators to perform routine read-only work without MFA, but any action that terminates EC2 instances or deletes S3 buckets must be performed only in sessions authenticated with MFA. Which solution meets these requirements?",
    options: [
      "Add an IAM policy statement that denies those actions when aws:MultiFactorAuthPresent is false or absent.",
      "Enable MFA on the root user and require administrators to sign in as root for destructive actions.",
      "Enable MFA Delete on all S3 buckets and termination protection on all EC2 instances.",
      "Create an SCP that denies those actions for all principals in every member account."
    ],
    correct: [0],
    explanation: "An IAM deny statement that uses the aws:MultiFactorAuthPresent condition key (with BoolIfExists) allows administrators to work normally but blocks instance termination and bucket deletion unless their session was established with MFA. MFA Delete sounds relevant, but it only governs permanent deletion of object versions and changing versioning state, not bucket deletion or EC2 termination.",
    optionExplanations: [
      "Correct — an explicit deny conditioned on the MFA context key blocks the destructive actions unless the session was authenticated with MFA, while other actions keep working.",
      "Using the root user for routine administration violates best practices and removes individual accountability.",
      "MFA Delete only protects object version deletion, and termination protection is not tied to MFA, so neither enforces MFA for these actions.",
      "An unconditional deny blocks the actions for everyone, including administrators who did authenticate with MFA."
    ]
  },
  {
    id: 1008,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company is starting a multi-account strategy. It needs a landing zone with centralized logging, automated account provisioning, and preventive and detective guardrails, and it wants to be operational quickly. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Create the accounts with AWS Organizations APIs and write custom CloudFormation templates for each control.",
      "Set up AWS Control Tower and enable the required controls on the organizational units.",
      "Create accounts manually and deploy AWS Config conformance packs in each account.",
      "Use a single account with a separate VPC per team and IAM policies to isolate workloads."
    ],
    correct: [1],
    explanation: "AWS Control Tower is the managed way to set up a well-architected multi-account landing zone: it creates centralized logging, provides Account Factory for new accounts, and offers preventive (SCP-based) and detective (Config-based) controls. Building the same with Organizations APIs and custom templates is possible but requires much more design and maintenance work.",
    optionExplanations: [
      "This can be built, but designing, coding, and maintaining every control and the logging setup is significant ongoing effort.",
      "Correct — Control Tower deploys a landing zone with log archive and audit accounts, Account Factory for provisioning, and managed preventive and detective controls.",
      "Manual account creation does not scale, and conformance packs provide only detective checks without preventive guardrails.",
      "This does not create a multi-account landing zone and gives weaker isolation and blast-radius control than separate accounts."
    ]
  },
  {
    id: 1009,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An Amazon S3 bucket holds shared reference data that every account in the company's AWS organization must be able to read, including accounts created in the future. No principal outside the organization may read it. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "List every account ID in the bucket policy and update the policy whenever an account is added.",
      "Create a cross-account IAM role in the bucket's account and have every account assume it.",
      "Replicate the bucket to every member account by using S3 Replication and grant local access there.",
      "Add a bucket policy that allows s3:GetObject when aws:PrincipalOrgID matches the organization ID."
    ],
    correct: [3],
    explanation: "The aws:PrincipalOrgID global condition key lets a single bucket policy statement grant access to all principals in the organization, so new accounts are covered automatically and outsiders are excluded. Listing account IDs also restricts access correctly, but it must be updated whenever accounts are added, which increases operational overhead.",
    optionExplanations: [
      "This works but requires a policy change every time an account is created, which is ongoing manual effort and error-prone.",
      "Each new account must be added to the role trust policy and configured to assume the role, adding overhead.",
      "This multiplies storage cost and replication configuration for each account, including future ones.",
      "Correct — the aws:PrincipalOrgID condition automatically includes every current and future account in the organization and excludes everyone else."
    ]
  },
  {
    id: 1010,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A security review of a new AWS account found that administrators use the root user for daily work and that the root user has active access keys. Which actions should a solutions architect recommend to follow AWS best practices? (Select TWO)",
    options: [
      "Delete the root user access keys and enable MFA on the root user.",
      "Rotate the root user access keys regularly and store them in AWS Secrets Manager.",
      "Give administrators IAM Identity Center users or IAM roles for daily work, reserving root for tasks that require it.",
      "Attach an IAM policy to the root user that denies all actions to disable it permanently.",
      "Allow root user sign-in only from a bastion host whose security group permits the corporate IP range."
    ],
    correct: [0, 2],
    explanation: "AWS recommends deleting root user access keys, enabling MFA on the root user, and using IAM Identity Center or IAM roles for everyday administration. Rotating root keys is a tempting half-measure, but root keys should not exist at all because they carry unrestricted access to the account.",
    optionExplanations: [
      "Correct — root access keys should not exist, and MFA protects the root user sign-in for the rare tasks that require it.",
      "Root access keys should be deleted, not rotated; any long-term root key is an unnecessary risk.",
      "Correct — daily administration should use identities with least-privilege permissions, keeping root use to the few tasks only it can perform.",
      "IAM policies cannot be attached to the root user; root restrictions in member accounts come from SCPs or centralized root access management.",
      "Security groups control network traffic to instances, not console or API authentication for the root user."
    ]
  },
  {
    id: 1011,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A security team needs to continuously identify any Amazon S3 buckets, AWS KMS keys, IAM roles, and AWS Lambda functions whose policies grant access to principals outside the company's AWS organization. Which solution meets this requirement?",
    options: [
      "Enable Amazon Macie to scan all buckets and keys and report any sharing with external AWS accounts.",
      "Generate IAM credential reports regularly and review every principal with resource access.",
      "Enable IAM Access Analyzer with the organization as the zone of trust and review its findings.",
      "Enable Amazon GuardDuty to detect resources whose policies grant access to external accounts."
    ],
    correct: [2],
    explanation: "IAM Access Analyzer external access analysis examines resource-based policies on S3 buckets, KMS keys, IAM role trust policies, Lambda functions, and more, and reports findings for any access granted outside the zone of trust (the organization). Macie can flag publicly accessible or shared S3 buckets, but it does not cover KMS keys, IAM roles, or Lambda functions.",
    optionExplanations: [
      "Macie focuses on sensitive data discovery and S3 bucket security posture; it does not analyze KMS key, IAM role, or Lambda policies.",
      "Credential reports list IAM users and their credential status; they do not analyze resource-based policies for external access.",
      "Correct — Access Analyzer uses automated reasoning on resource policies and reports any resource shared with principals outside the zone of trust.",
      "GuardDuty detects threats from logs and activity; it does not evaluate resource policies for external access."
    ]
  },
  {
    id: 1012,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company runs several microservices as Amazon ECS tasks on AWS Fargate in the same cluster. Each service needs access to different AWS resources. A compromise of one service must not grant access to the resources of the other services. Which solution meets these requirements?",
    options: [
      "Grant all required permissions to a single task execution role shared by every service.",
      "Inject a separate IAM user's access keys into each service as environment variables.",
      "Run each service in its own subnet and restrict access to AWS APIs with network ACLs.",
      "Give each task definition its own IAM task role with only the permissions it needs."
    ],
    correct: [3],
    explanation: "ECS task roles provide each task definition with its own IAM role and temporary credentials, so every microservice gets only the permissions it needs and a compromise is contained. Putting permissions on a shared execution role seems simpler, but that role is meant for the ECS agent, and sharing it would let any compromised service reach every other service's resources.",
    optionExplanations: [
      "The execution role is used by the ECS agent to pull images and write logs, and sharing broad permissions breaks isolation between services.",
      "This relies on long-term credentials that can leak and must be rotated manually.",
      "Network ACLs filter IP traffic and cannot express per-service authorization to AWS APIs.",
      "Correct — task roles give each service separate temporary credentials scoped to its own resources, enforcing least privilege per service."
    ]
  },
  {
    id: 1013,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company has hundreds of projects, and new projects are created every week. Developers must be able to access only the AWS resources tagged with their own project. The security team wants to avoid writing or updating IAM policies for each new project. Which solution meets these requirements?",
    options: [
      "Create one IAM policy per project and attach it to the corresponding developer group.",
      "Use ABAC: tag principals and resources with a project tag and allow access when tags match.",
      "Create a separate AWS account for every project and grant access through cross-account roles.",
      "Use resource-based policies on every resource that list the ARNs of that project's developers."
    ],
    correct: [1],
    explanation: "Attribute-based access control (ABAC) uses tags on both IAM principals and resources with a policy condition that requires them to match, so one policy scales to any number of projects. Per-project policies are the traditional RBAC approach, but they require creating and attaching a new policy whenever a project is added.",
    optionExplanations: [
      "Each new project requires a new policy and group, which is exactly the ongoing policy maintenance the team wants to avoid.",
      "Correct — attribute-based access control uses a single policy comparing aws:PrincipalTag and resource tags, so new projects need only tags, not new policies.",
      "Hundreds of accounts with weekly additions and per-account roles add heavy overhead for a tagging problem.",
      "Many services lack resource-based policies, and maintaining principal lists on every resource scales poorly."
    ]
  },
  {
    id: 1014,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A SaaS monitoring vendor needs read-only access to a company's Amazon CloudWatch metrics from the vendor's own AWS account. The company wants to follow AWS best practices and protect against the confused deputy problem. Which solution meets these requirements?",
    options: [
      "Create an IAM user with read-only CloudWatch permissions and send its access keys to the vendor.",
      "Create an IAM role that trusts all AWS accounts and limit it with a read-only permissions policy.",
      "Create an IAM role that trusts the vendor account and requires MFA for the vendor's AssumeRole calls.",
      "Create an IAM role that trusts the vendor account and requires an external ID condition."
    ],
    correct: [3],
    explanation: "Third-party access should use a cross-account role trusting the vendor account with an sts:ExternalId condition, which prevents another vendor customer from tricking the vendor into accessing this account. Requiring MFA looks stronger, but it does not solve the confused deputy problem and is impractical for an automated service.",
    optionExplanations: [
      "Sharing long-term access keys with a third party is not recommended and does not address confused deputy risk.",
      "Trusting every AWS account lets anyone who knows the role ARN assume it, which is insecure.",
      "An automated vendor service cannot practically supply MFA, and MFA does not stop the vendor from being tricked into acting for another customer.",
      "Correct — the external ID condition ensures the vendor assumes the role only on behalf of this specific customer, mitigating the confused deputy problem."
    ]
  },
  {
    id: 1015,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A developer in a member account of an AWS organization has the AdministratorAccess managed policy attached. The developer receives an access denied error when creating an Amazon RDS DB instance in one specific Region, while other services work normally. What is the MOST likely cause?",
    options: [
      "A permissions boundary has not yet been attached to the developer's IAM user.",
      "The RDS service-linked role must first be created by the root user of the member account.",
      "An SCP attached to the account or its OU explicitly denies RDS actions or that Region.",
      "The AdministratorAccess policy excludes Amazon RDS, so a separate RDS policy is required."
    ],
    correct: [2],
    explanation: "In policy evaluation, an explicit deny anywhere wins, and SCPs define the maximum available permissions in member accounts, so an SCP restricting RDS or that Region overrides AdministratorAccess. A missing permissions boundary cannot cause a denial because boundaries only restrict when attached.",
    optionExplanations: [
      "The absence of a permissions boundary does not restrict permissions; a boundary can only limit them when present.",
      "Service-linked roles are created automatically by the service or by any principal with the right IAM permissions, not only the root user.",
      "Correct — SCPs limit the maximum permissions in member accounts, and an explicit deny overrides even AdministratorAccess.",
      "AdministratorAccess allows all actions on all resources, including Amazon RDS."
    ]
  },
  {
    id: 1016,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Amazon EC2 instances run in private subnets in two Availability Zones and must download operating system patches from the internet. The instances must not be reachable from the internet, and outbound access must continue if one Availability Zone fails. Which solution meets these requirements?",
    options: [
      "Deploy a NAT gateway in a public subnet in each AZ and route each private subnet to its local NAT gateway.",
      "Deploy a single NAT gateway in one public subnet and route both private subnets through it.",
      "Attach an egress-only internet gateway and route the private subnets' IPv4 traffic to it.",
      "Move the instances to public subnets and remove all inbound rules from their security groups."
    ],
    correct: [0],
    explanation: "A NAT gateway in each Availability Zone, with each private subnet routing to the NAT gateway in its own AZ, gives outbound-only IPv4 internet access that survives the loss of one AZ. A single NAT gateway also provides outbound access, but it is a zonal resource and becomes a single point of failure.",
    optionExplanations: [
      "Correct — NAT gateways allow only outbound-initiated IPv4 connections, and one per AZ removes the single-AZ dependency.",
      "A NAT gateway is zonal; if its AZ fails, instances in the other AZ lose internet access.",
      "Egress-only internet gateways support only IPv6 traffic, so IPv4 patch downloads would fail.",
      "Instances with public IPs in public subnets are internet-addressable, which conflicts with the private placement requirement."
    ]
  },
  {
    id: 1017,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An application on Amazon EC2 instances in private subnets reads confidential files from an Amazon S3 bucket through an S3 gateway VPC endpoint. The security team must ensure that the bucket can be accessed ONLY through this specific endpoint, even by users with valid IAM credentials elsewhere. Which solution meets this requirement?",
    options: [
      "Add a bucket policy that denies requests not coming from that endpoint ID.",
      "Attach a security group to the gateway endpoint that allows traffic only from the instances.",
      "Enable S3 Block Public Access on the bucket and on the account that owns it.",
      "Encrypt the bucket with an AWS KMS customer managed key used only by the application role."
    ],
    correct: [0],
    explanation: "A bucket policy with an explicit Deny when the aws:SourceVpce condition key does not equal the endpoint ID blocks every request that does not arrive through that VPC endpoint, regardless of the caller's IAM permissions. Gateway endpoints do not support security groups, and Block Public Access only stops public access — it does not restrict authenticated principals coming from other networks.",
    optionExplanations: [
      "Correct — an explicit Deny on requests where aws:SourceVpce differs from the endpoint ID restricts the bucket to traffic that comes through that endpoint only.",
      "Gateway VPC endpoints cannot have security groups attached; they are targets in route tables, so this control is not possible.",
      "Block Public Access prevents public (anonymous or cross-account public) access, but authenticated IAM principals could still reach the bucket from outside the VPC.",
      "A customer managed key limits who can decrypt objects, but it does not restrict the network path; authorized principals could still call S3 from anywhere."
    ]
  },
  {
    id: 1018,
    domain: "Design Secure Architectures",
    type: "single",
    question: "AWS Lambda functions are connected to private subnets so that they can reach an Amazon RDS database. The subnets have no route to the internet, and the security team prohibits adding one. The functions now must retrieve database credentials from AWS Secrets Manager. Which solution meets these requirements?",
    options: [
      "Add a NAT gateway and restrict the security group egress to Secrets Manager IP ranges.",
      "Create a gateway VPC endpoint for Secrets Manager and add it to the route tables.",
      "Remove the functions from the VPC so they can call Secrets Manager directly.",
      "Create an interface VPC endpoint for Secrets Manager with private DNS enabled."
    ],
    correct: [3],
    explanation: "An interface VPC endpoint powered by AWS PrivateLink provides private access to Secrets Manager from subnets without internet connectivity, and private DNS means no code changes are needed. A gateway endpoint might seem cheaper, but gateway endpoints support only S3 and DynamoDB.",
    optionExplanations: [
      "This adds an internet route, which the security team prohibits.",
      "Gateway endpoints exist only for Amazon S3 and Amazon DynamoDB, not Secrets Manager.",
      "The functions would then lose private connectivity to the RDS database in the VPC.",
      "Correct — an interface endpoint (AWS PrivateLink) exposes Secrets Manager on private IPs in the subnets, and private DNS lets the SDK use it unchanged."
    ]
  },
  {
    id: 1019,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A public-facing application runs on Amazon EC2 instances in a public subnet. Logs show malicious traffic coming from a specific IP address range. The company must block that range immediately while continuing to allow all other internet traffic. Which solution meets these requirements?",
    options: [
      "Add an inbound deny rule for the IP address range to the instances' security group.",
      "Add a deny rule for the IP range to the subnet network ACL with a low rule number.",
      "Replace the 0.0.0.0/0 security group rule with allow rules for every legitimate IP range.",
      "Enable Amazon GuardDuty to automatically block traffic from the malicious IP address range."
    ],
    correct: [1],
    explanation: "Network ACLs are stateless subnet-level filters that support deny rules processed in ascending rule-number order, so a deny for the range placed before the allow rule blocks it while all other traffic continues. Security groups are the usual instance firewall, but they only have allow rules and therefore cannot express a deny.",
    optionExplanations: [
      "Security groups support only allow rules, so a deny rule cannot be created.",
      "Correct — network ACLs support explicit deny rules evaluated in rule-number order, so a low-numbered deny blocks the range before the general allow rule.",
      "Enumerating all legitimate internet clients is impractical for a public application.",
      "GuardDuty generates findings; it does not block traffic by itself."
    ]
  },
  {
    id: 1020,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A public REST API runs behind an Application Load Balancer. The API is receiving SQL injection attempts and sudden request floods from individual IP addresses. Which combination of steps will mitigate both threats with the LEAST operational overhead? (Select TWO)",
    options: [
      "Deploy a fleet of EC2 proxy instances that inspect requests before they reach the ALB.",
      "Associate an AWS WAF web ACL with the ALB that includes the AWS managed SQL database rule group.",
      "Enable Amazon Inspector on the ALB to block malicious requests in real time.",
      "Add a rate-based rule to the web ACL that blocks IP addresses exceeding a request threshold.",
      "Configure security group rules on the ALB to drop requests that contain SQL keywords."
    ],
    correct: [1, 3],
    explanation: "AWS WAF attached to the ALB can use the managed SQL database rule group to stop SQL injection and a rate-based rule to block IPs that send floods of requests, both fully managed. Amazon Inspector sounds security-related, but it is a vulnerability scanner and does not filter live traffic.",
    optionExplanations: [
      "Self-managed proxies add significant operational overhead compared with a managed web application firewall.",
      "Correct — AWS managed rule groups block common SQL injection patterns without writing custom rules.",
      "Inspector scans workloads for vulnerabilities; it does not inspect or block HTTP requests.",
      "Correct — rate-based rules automatically block source IPs that exceed the configured request rate.",
      "Security groups filter by IP, port, and protocol and cannot inspect HTTP request content."
    ]
  },
  {
    id: 1021,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company's public website uses Amazon CloudFront, Amazon Route 53, and an Application Load Balancer and has been targeted by large DDoS attacks. The company wants 24/7 access to AWS DDoS response experts and protection against cost increases caused by scaling during attacks. Which solution meets these requirements?",
    options: [
      "Subscribe to AWS Shield Advanced and protect the CloudFront, Route 53, and ALB resources.",
      "Rely on AWS Shield Standard and enable CloudFront standard logging for forensics.",
      "Enable Amazon GuardDuty and use Amazon EventBridge to scale the ALB targets during attacks.",
      "Deploy AWS Network Firewall in the VPC in front of the Application Load Balancer."
    ],
    correct: [0],
    explanation: "AWS Shield Advanced provides enhanced DDoS protection for CloudFront, Route 53, and ELB resources, 24/7 access to the Shield Response Team, and cost protection for scaling caused by attacks. Shield Standard is already included at no cost, but it lacks the response team and cost protection the company needs.",
    optionExplanations: [
      "Correct — Shield Advanced adds enhanced detection, access to the Shield Response Team, and cost protection for attack-related scaling.",
      "Shield Standard provides automatic baseline protection but no response team access or cost protection.",
      "GuardDuty is a threat detection service; it neither mitigates DDoS attacks nor offers cost protection.",
      "Network Firewall filters VPC traffic but does not provide DDoS response experts or cost protection."
    ]
  },
  {
    id: 1022,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company wants to continuously detect compromised Amazon EC2 instances, such as cryptocurrency mining or communication with known malicious IP addresses, and unusual API activity across all accounts in its organization. The solution must require minimal setup. Which solution meets these requirements?",
    options: [
      "Enable Amazon GuardDuty for the organization through a delegated administrator account.",
      "Install an intrusion detection system on each instance and forward alerts to CloudWatch Logs.",
      "Enable Amazon Inspector in every account to analyze network traffic for malicious patterns.",
      "Enable AWS Config in every account with custom rules for each type of suspicious activity."
    ],
    correct: [0],
    explanation: "Amazon GuardDuty is a managed threat detection service that analyzes foundational log sources without agents and can be enabled organization-wide through a delegated administrator. Amazon Inspector is also a managed security service, but it finds vulnerabilities rather than detecting active compromise or anomalous API calls.",
    optionExplanations: [
      "Correct — GuardDuty analyzes CloudTrail, VPC Flow Logs, and DNS logs with threat intelligence and ML, and can be enabled for all accounts centrally.",
      "Self-managed agents on every instance across all accounts are significant setup and maintenance effort.",
      "Inspector scans for software vulnerabilities and network reachability; it does not detect active threats in traffic or API activity.",
      "AWS Config evaluates resource configurations, not runtime behavior or API anomalies."
    ]
  },
  {
    id: 1023,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company stores millions of documents in Amazon S3 across many buckets. To meet GDPR obligations, it must identify which buckets contain personal data such as passport numbers and credit card numbers. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use Amazon Inspector to scan the buckets for objects that contain sensitive data.",
      "Use Amazon S3 Storage Lens to classify objects by their content type.",
      "Use Amazon Macie to run sensitive data discovery on the buckets.",
      "Use Amazon Athena with regular expressions to search the contents of every object."
    ],
    correct: [2],
    explanation: "Amazon Macie automatically discovers and reports sensitive data such as PII in S3 using managed data identifiers, with no custom code. Athena with regular expressions could find some patterns in structured files, but it needs custom queries and does not handle varied document formats, so it has far more overhead.",
    optionExplanations: [
      "Inspector scans compute workloads for vulnerabilities; it does not classify S3 object content.",
      "Storage Lens reports storage usage and activity metrics, not sensitive data within objects.",
      "Correct — Macie uses managed data identifiers to find PII such as passport and credit card numbers in S3 objects.",
      "Athena queries structured data and would require custom patterns, and it cannot easily parse varied document formats."
    ]
  },
  {
    id: 1024,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company needs automated, continuous vulnerability scanning of its Amazon EC2 instances and the container images in Amazon ECR. Findings must be updated automatically when new CVEs are published. Which solution meets these requirements?",
    options: [
      "Enable Amazon GuardDuty Malware Protection for the EC2 instances and ECR repositories.",
      "Deploy AWS Config managed rules that check instances and images for known CVEs.",
      "Enable Amazon Macie to analyze the instances and container images for vulnerabilities.",
      "Activate Amazon Inspector with EC2 scanning and ECR enhanced scanning."
    ],
    correct: [3],
    explanation: "Amazon Inspector provides continuous, automated vulnerability management for EC2 instances, ECR container images, and Lambda functions, and re-evaluates resources when new CVEs appear. GuardDuty Malware Protection also scans workloads, but it looks for malware, not software vulnerabilities.",
    optionExplanations: [
      "Malware Protection scans for malware on volumes, not for software vulnerabilities (CVEs) in packages and images.",
      "Config rules evaluate resource configurations and cannot scan software packages for CVEs.",
      "Macie discovers sensitive data in S3 and does not perform vulnerability scanning.",
      "Correct — Inspector continuously scans EC2 instances and ECR images for CVEs and rescans when new vulnerabilities are published."
    ]
  },
  {
    id: 1025,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company is building a customer-facing web application behind an Application Load Balancer. Users must be able to sign up and sign in with an email address or with their Google accounts. The company wants to write as little authentication code as possible. Which solution meets these requirements?",
    options: [
      "Create IAM users for customers and federate Google accounts through IAM Identity Center.",
      "Use an Amazon Cognito user pool with Google federation and enable ALB user authentication.",
      "Use only an Amazon Cognito identity pool to store user profiles and passwords.",
      "Build a custom authentication service on EC2 that stores password hashes in DynamoDB."
    ],
    correct: [1],
    explanation: "An Amazon Cognito user pool is a managed customer identity directory with sign-up, sign-in, and social identity providers such as Google, and an ALB listener rule can authenticate users with it without application code. Identity pools are a common confusion, but they issue temporary AWS credentials and do not manage user sign-up or passwords.",
    optionExplanations: [
      "IAM users and IAM Identity Center are meant for workforce access to AWS, not for millions of application customers.",
      "Correct — Cognito user pools provide sign-up, sign-in, and social federation, and the ALB can authenticate users against the user pool natively.",
      "Identity pools exchange tokens for AWS credentials; they do not provide a user directory or sign-up flow.",
      "A custom auth service requires substantial code and security effort, which the company wants to avoid."
    ]
  },
  {
    id: 1026,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An application connects to an Amazon RDS for MySQL database by using credentials hard-coded in its source code. The company now requires the credentials to be rotated automatically every 30 days without application changes after each rotation. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Store the credentials as a SecureString in Parameter Store and rotate them with a custom cron job.",
      "Encrypt the credentials with AWS KMS and store them in an Amazon S3 bucket the application reads.",
      "Store the credentials in AWS Secrets Manager with managed rotation and retrieve the secret at runtime.",
      "Store the credentials on an encrypted EBS volume and rotate them manually from the RDS console."
    ],
    correct: [2],
    explanation: "AWS Secrets Manager natively rotates Amazon RDS credentials on a schedule, updating both the secret and the database, and the application fetches the current secret at runtime. Parameter Store SecureString also stores encrypted values, but it lacks built-in rotation, so custom automation would be required.",
    optionExplanations: [
      "Parameter Store has no built-in rotation, so a custom job must be written, scheduled, and maintained.",
      "This protects the stored value but provides no rotation of the database password.",
      "Correct — Secrets Manager rotates RDS credentials on a schedule and updates the database, and the application always reads the current value.",
      "Manual rotation is operational overhead and error-prone, and it fails the automatic rotation requirement."
    ]
  },
  {
    id: 1027,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A company wants to remove its bastion hosts. Administrators need interactive shell access to Amazon EC2 instances in private subnets that have no internet access. No inbound ports may be opened, and all sessions must be logged. The AMIs already include the SSM Agent. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Open inbound port 22 from the corporate CIDR range in the instances' security groups.",
      "Attach an instance profile that includes the AmazonSSMManagedInstanceCore managed policy.",
      "Create a gateway VPC endpoint for AWS Systems Manager in the private subnets' route tables.",
      "Assign Elastic IP addresses to the instances so Session Manager can connect to them.",
      "Create interface VPC endpoints for the Systems Manager services in the VPC."
    ],
    correct: [1, 4],
    explanation: "Session Manager needs the instance to have an IAM role with the core SSM permissions and a private path to the Systems Manager service, which interface VPC endpoints provide when there is no internet access; sessions can be logged to CloudWatch Logs or S3. Opening port 22 from the corporate range is the traditional approach, but it violates the no-inbound-ports requirement.",
    optionExplanations: [
      "The requirement forbids opening inbound ports, and Session Manager does not need them.",
      "Correct — the SSM Agent needs these permissions to register with Systems Manager and establish Session Manager sessions.",
      "Gateway endpoints are available only for Amazon S3 and Amazon DynamoDB.",
      "Session Manager connections are initiated outbound by the agent; public IPs are unnecessary and add exposure.",
      "Correct — without internet access, the SSM Agent reaches Systems Manager through interface endpoints (ssm, ssmmessages, ec2messages)."
    ]
  },
  {
    id: 1028,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A SaaS provider runs an API behind a Network Load Balancer and must offer it privately to hundreds of customer VPCs. Many customer VPCs use CIDR ranges that overlap with the provider's VPC. Customers must reach only the API, not the rest of the provider's network. Which solution meets these requirements?",
    options: [
      "Create a VPC endpoint service powered by AWS PrivateLink and let customers create interface endpoints.",
      "Create a VPC peering connection between the provider VPC and each customer VPC.",
      "Attach all VPCs to a transit gateway and share it with customers through AWS RAM.",
      "Expose the API through a public NLB and allow only customer IP ranges in security groups."
    ],
    correct: [0],
    explanation: "AWS PrivateLink lets a provider publish an NLB-backed endpoint service that consumers reach through interface endpoints in their own VPCs, exposing only that service and working with overlapping IP ranges. VPC peering is a common private connectivity option, but it does not support overlapping CIDRs and opens routing between entire VPCs.",
    optionExplanations: [
      "Correct — PrivateLink exposes only the NLB-fronted service through endpoints in customer VPCs, and it works with overlapping CIDRs.",
      "Peering is not possible with overlapping CIDR ranges and exposes more of the network than a single service.",
      "Overlapping CIDRs break routing through the transit gateway, and customers would gain broad network reachability.",
      "Traffic would traverse public endpoints, which does not meet the private connectivity requirement."
    ]
  },
  {
    id: 1029,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company connects its data center to a VPC with an AWS Direct Connect connection. A new compliance rule requires all traffic between the data center and the VPC to be encrypted in transit, and the company wants to keep the consistent network performance of Direct Connect. Which solution meets these requirements?",
    options: [
      "Keep the current setup, because Direct Connect encrypts all traffic by default.",
      "Replace Direct Connect with an AWS Site-to-Site VPN connection over the public internet.",
      "Add a second Direct Connect connection at a different location for redundancy.",
      "Run an AWS Site-to-Site VPN connection over the existing Direct Connect connection."
    ],
    correct: [3],
    explanation: "Running an IPsec Site-to-Site VPN over the Direct Connect connection adds encryption in transit while traffic still uses the dedicated link and its consistent performance. An internet-based VPN also encrypts traffic, but it gives up the predictable latency and throughput the company wants to retain.",
    optionExplanations: [
      "Direct Connect provides a private dedicated link but does not encrypt traffic by default.",
      "This encrypts traffic but loses the consistent performance of the dedicated connection.",
      "A second connection improves resilience but does nothing for encryption in transit.",
      "Correct — an IPsec VPN over Direct Connect encrypts the traffic while keeping the dedicated, consistent network path."
    ]
  },
  {
    id: 1030,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A three-tier application uses an internet-facing Application Load Balancer in public subnets, Amazon EC2 application instances in private subnets, and an Amazon RDS database in isolated subnets. Which security group configurations follow the principle of least privilege? (Select TWO)",
    options: [
      "Allow inbound traffic on the application port to the app security group only from the ALB security group.",
      "Allow inbound traffic on the database port to the DB security group from the entire VPC CIDR range.",
      "Allow inbound traffic on the application port to the app security group from 0.0.0.0/0.",
      "Place the database in public subnets and rely on the database master password for protection.",
      "Allow inbound traffic on the database port to the DB security group only from the app security group."
    ],
    correct: [0, 4],
    explanation: "Chaining security groups by reference (ALB to app tier, app tier to database) allows each tier to receive traffic only from the tier directly in front of it, independent of IP addresses. Allowing the whole VPC CIDR to the database seems restrictive because it is internal, but it grants access to every workload in the VPC.",
    optionExplanations: [
      "Correct — referencing the ALB security group allows only load balancer traffic to reach the instances, regardless of IP changes.",
      "This lets every resource in the VPC reach the database, which is broader than necessary.",
      "Private subnet placement does not justify an open rule; any resource able to route there could connect.",
      "This exposes the database to the internet and depends on a single credential for protection.",
      "Correct — only the application tier can open connections to the database, which is the narrowest access needed."
    ]
  },
  {
    id: 1031,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A company has an existing unencrypted Amazon RDS for PostgreSQL DB instance. A new policy requires the database to be encrypted at rest with an AWS KMS key. Which combination of steps should a solutions architect take? (Select THREE)",
    options: [
      "Modify the existing DB instance and enable encryption at rest in place.",
      "Take a manual snapshot of the unencrypted DB instance.",
      "Create an encrypted read replica of the unencrypted DB instance and promote it.",
      "Copy the snapshot and enable encryption with the KMS key on the copy.",
      "Restore a new DB instance from the encrypted snapshot and point the application to it."
    ],
    correct: [1, 3, 4],
    explanation: "Because encryption cannot be turned on for an existing unencrypted RDS instance, the standard path is snapshot, encrypted snapshot copy, and restore to a new encrypted instance. Creating an encrypted read replica seems like a shortcut with less downtime, but RDS does not support encrypted replicas of unencrypted sources.",
    optionExplanations: [
      "Encryption cannot be enabled on an existing unencrypted RDS DB instance.",
      "Correct — a snapshot captures the current data so that an encrypted copy can be created.",
      "RDS does not allow an encrypted read replica of an unencrypted DB instance.",
      "Correct — copying a snapshot is the point where encryption can be applied to RDS data.",
      "Correct — a DB instance restored from an encrypted snapshot is encrypted at rest, and the application switches to its endpoint."
    ]
  },
  {
    id: 1032,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company stores sensitive files in Amazon S3 with SSE-S3 encryption. A new compliance requirement states that a separate security team must control the encryption key, every use of the key must be logged in AWS CloudTrail, and the key must be able to be disabled immediately. Which solution meets these requirements?",
    options: [
      "Switch the bucket to SSE-KMS with the AWS managed key for Amazon S3.",
      "Switch the bucket to SSE-KMS with a customer managed key administered by the security team.",
      "Keep SSE-S3 and enable S3 server access logging on the bucket for auditing.",
      "Use client-side encryption with keys stored locally on each application server and rotated by scripts."
    ],
    correct: [1],
    explanation: "An SSE-KMS customer managed key gives full control over the key policy (allowing separation of duties), records each cryptographic operation in CloudTrail, and can be disabled or scheduled for deletion. The AWS managed key also logs usage in CloudTrail, but customers cannot change its policy or disable it.",
    optionExplanations: [
      "AWS managed keys cannot have their key policy edited or be disabled by the customer, so the security team cannot control them.",
      "Correct — customer managed keys have a key policy the security team controls, log each use in CloudTrail, and can be disabled at any time.",
      "SSE-S3 keys are fully managed by S3; the security team cannot control or disable them.",
      "Keys spread across servers are hard to control centrally, and their use is not logged in CloudTrail."
    ]
  },
  {
    id: 1033,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An application in us-east-1 encrypts data client-side with AWS KMS and replicates the encrypted data to eu-west-1 for disaster recovery. During a Regional outage in us-east-1, the application in eu-west-1 must decrypt the data without calling KMS in us-east-1. Which solution meets these requirements?",
    options: [
      "Create separate KMS keys in each Region and give them the same alias name.",
      "Export the key material of the us-east-1 key and import it into a new key in eu-west-1.",
      "Create a KMS multi-Region primary key and a replica of that key in eu-west-1.",
      "Use the AWS managed KMS key in each Region to encrypt and decrypt the data."
    ],
    correct: [2],
    explanation: "KMS multi-Region keys are interoperable keys with the same key material in multiple Regions, so ciphertext produced in us-east-1 can be decrypted by the replica key in eu-west-1 without cross-Region calls. Matching aliases make keys look the same, but each standard key has unique material and cannot decrypt the other's data.",
    optionExplanations: [
      "Aliases are only names; separate keys have different key material and cannot decrypt each other's ciphertext.",
      "KMS does not allow exporting key material generated by KMS.",
      "Correct — multi-Region keys share key ID and key material, so data encrypted in one Region can be decrypted in the other locally.",
      "AWS managed keys are Region-specific and different in each Region, so cross-Region decryption fails."
    ]
  },
  {
    id: 1034,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A financial company must store transaction records in Amazon S3 for 7 years in WORM format. During the retention period, no user, including the root user of the account, can delete or overwrite the records. Which solution meets these requirements?",
    options: [
      "Enable S3 Object Lock in governance mode with a 7-year retention period.",
      "Enable S3 Versioning with MFA Delete and restrict deletions with a bucket policy.",
      "Transition objects to S3 Glacier Flexible Retrieval and deny deletes in the bucket policy.",
      "Enable S3 Object Lock in compliance mode with a 7-year default retention period."
    ],
    correct: [3],
    explanation: "S3 Object Lock in compliance mode enforces WORM protection that no user, including the root user, can override until the retention period expires. Governance mode looks equivalent, but principals with the bypass permission can delete objects or shorten retention.",
    optionExplanations: [
      "Users with special permissions can bypass governance mode retention, so deletion is not fully prevented.",
      "The root user can change the bucket policy and, with MFA, delete versions, so WORM is not guaranteed.",
      "A bucket policy can be edited by privileged users, so it does not enforce immutable retention.",
      "Correct — in compliance mode, no one, including the root user, can delete or overwrite a locked object version or shorten its retention."
    ]
  },
  {
    id: 1035,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company serves a static website from a private Amazon S3 bucket through Amazon CloudFront. Users have found they can bypass CloudFront by using S3 object URLs directly. The bucket uses SSE-KMS encryption. Content must be accessible only through CloudFront. Which solution meets these requirements?",
    options: [
      "Enable S3 static website hosting and allow access only when a secret Referer header is present.",
      "Configure origin access control on the distribution and allow only that distribution in the bucket policy.",
      "Make the bucket public and require CloudFront signed URLs for every request to the site.",
      "Configure a legacy origin access identity and grant it read access in the bucket policy."
    ],
    correct: [1],
    explanation: "CloudFront origin access control (OAC) lets CloudFront sign requests to S3, works with SSE-KMS (after granting the distribution kms:Decrypt in the key policy), and the bucket policy can allow only that distribution. Origin access identity achieves similar restriction for unencrypted or SSE-S3 content, but it is legacy and does not support SSE-KMS.",
    optionExplanations: [
      "A Referer header can be forged, and the website endpoint does not support SSE-KMS encrypted objects.",
      "Correct — OAC signs origin requests, supports SSE-KMS, and a bucket policy scoped to the distribution blocks direct S3 access.",
      "Signed URLs restrict CloudFront access, but a public bucket can still be read directly from S3.",
      "OAI is the legacy mechanism and does not support objects encrypted with SSE-KMS."
    ]
  },
  {
    id: 1036,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A web application lets authenticated customers download their invoices, which are stored in a private Amazon S3 bucket. Download links must expire after a few minutes, the bucket must stay private, and customers must not receive AWS credentials. Which solution meets these requirements?",
    options: [
      "Have the application backend generate S3 presigned URLs with a short expiration time.",
      "Make the invoice objects public and give them long, randomly generated object keys.",
      "Create an IAM user for each customer with read access to that customer's prefix.",
      "Copy each invoice to a public bucket and delete it after one day with an S3 Lifecycle rule."
    ],
    correct: [0],
    explanation: "Presigned URLs let the backend grant short-lived access to individual private objects, so the bucket stays private and customers never handle AWS credentials. Public objects with random keys may seem hard to guess, but they are still public and the links never expire.",
    optionExplanations: [
      "Correct — presigned URLs grant time-limited access to a specific object using the backend's permissions, without making the bucket public.",
      "Public objects violate the private bucket requirement, and links never expire.",
      "This gives customers AWS credentials and does not scale to many customers.",
      "Data becomes publicly readable, and lifecycle expiration cannot enforce a few-minute window."
    ]
  },
  {
    id: 1037,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company with many AWS accounts recently had an incident in which a developer made an Amazon S3 bucket public. The company must prevent any bucket in any account from being made public, even by account administrators. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Enable Amazon Macie in every account to alert when buckets become publicly accessible.",
      "Deploy an AWS Config rule that detects public buckets and notifies the security team.",
      "Enable default SSE-KMS encryption on every bucket in every account.",
      "Enable S3 Block Public Access at the account level and deny changes to it with an SCP."
    ],
    correct: [3],
    explanation: "Account-level S3 Block Public Access prevents public ACLs and policies for every bucket in an account, and an SCP denying changes to that setting stops even member account administrators from disabling it. AWS Config detection is useful for visibility, but it only reacts after a bucket is already public.",
    optionExplanations: [
      "Macie reports on bucket exposure but does not prevent a bucket from being made public.",
      "Config rules are detective; the bucket is already public by the time the team is notified.",
      "Encryption at rest does not stop objects from being shared publicly.",
      "Correct — account-level Block Public Access overrides public bucket policies and ACLs, and the SCP stops administrators from turning it off."
    ]
  },
  {
    id: 1038,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company serves its website through Amazon CloudFront with a custom domain name. The origin is an Application Load Balancer in eu-central-1. The company requires HTTPS from viewers to CloudFront and from CloudFront to the ALB, with automatic certificate renewal. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Request public ACM certificates in us-east-1 for CloudFront and in eu-central-1 for the ALB.",
      "Request one ACM certificate in eu-central-1 and attach it to both CloudFront and the ALB.",
      "Import a third-party certificate into ACM in both Regions and replace it before each expiry.",
      "Generate self-signed certificates on the instances and set the viewer protocol to HTTPS only."
    ],
    correct: [0],
    explanation: "ACM provides free public certificates with automatic renewal; CloudFront requires its certificate in us-east-1, while the ALB needs one in its own Region (eu-central-1). Using a single eu-central-1 certificate seems simpler, but CloudFront cannot use certificates from Regions other than us-east-1.",
    optionExplanations: [
      "Correct — CloudFront uses ACM certificates from us-east-1, ALBs use certificates from their own Region, and ACM renews public certificates automatically.",
      "CloudFront can use only ACM certificates requested or imported in us-east-1.",
      "Imported certificates are not renewed automatically, so manual renewal adds overhead and risk.",
      "Browsers do not trust self-signed certificates, and they must be managed and renewed manually."
    ]
  },
  {
    id: 1039,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A regulated company must back up Amazon RDS databases, Amazon EBS volumes, and Amazon DynamoDB tables. Backups must be immutable so that no one can delete them before retention ends, and copies must survive the loss of an entire Region. Which combination of steps will meet these requirements with the LEAST operational overhead? (Select TWO)",
    options: [
      "Write AWS Lambda functions that create snapshots of each resource nightly and tag them for retention.",
      "Export all snapshots to an Amazon S3 bucket with versioning enabled.",
      "Create an AWS Backup plan that stores recovery points in a vault with Vault Lock in compliance mode.",
      "Enable RDS Multi-AZ deployments and DynamoDB auto scaling to protect against data loss.",
      "Add a cross-Region copy rule to the backup plan that targets a vault in another Region."
    ],
    correct: [2, 4],
    explanation: "AWS Backup centrally schedules backups for RDS, EBS, and DynamoDB; Vault Lock in compliance mode makes recovery points immutable for their retention, and a cross-Region copy rule protects against a Regional disaster. Custom Lambda snapshot scripts can also create backups, but they add overhead and provide no immutability.",
    optionExplanations: [
      "Custom scripts add overhead and do not make snapshots immutable.",
      "Versioning does not prevent privileged users from deleting versions, and exporting adds effort.",
      "Correct — AWS Backup centrally protects these services, and Vault Lock compliance mode prevents anyone from deleting recovery points early.",
      "Multi-AZ and auto scaling improve availability and capacity but are not backups and do not survive logical deletion.",
      "Correct — cross-Region copies keep recovery points available if the primary Region is lost."
    ]
  },
  {
    id: 1040,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company requires that every new Amazon EBS volume in the Regions it uses be encrypted with a specific AWS KMS key, including volumes created by developers who forget to select encryption. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Deploy an AWS Config rule that detects unencrypted EBS volumes and notifies their owners.",
      "Enable EBS encryption by default in each Region used and set the KMS key as the default.",
      "Use an AWS Lambda function triggered by volume creation events to delete unencrypted volumes.",
      "Train developers and require an \"encrypted\" tag on volumes through an IAM policy."
    ],
    correct: [1],
    explanation: "EBS encryption by default is a per-Region account setting that automatically encrypts all new volumes with the configured KMS key, regardless of what the user selects. An AWS Config rule provides visibility, but it is detective and leaves unencrypted volumes to be fixed manually.",
    optionExplanations: [
      "This only detects unencrypted volumes after they exist, and owners must remediate them manually.",
      "Correct — with encryption by default, every new volume and snapshot copy in that Region is encrypted automatically with the chosen key.",
      "Deleting volumes disrupts workloads and requires custom code to build and maintain.",
      "A tag does not cause encryption, and training cannot guarantee compliance."
    ]
  },
  {
    id: 1041,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A company uses AWS Organizations and must record API activity in all current and future accounts in a central log archive account. Auditors must be able to verify whether any log file was modified or deleted after delivery. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Create an organization trail in the management account that delivers to an S3 bucket in the log archive account.",
      "Create a separate trail manually in each member account when the account is created.",
      "Enable AWS Config in every account to record all API calls to the central account.",
      "Enable CloudTrail log file integrity validation on the trail.",
      "Enable VPC Flow Logs in every VPC and deliver them to the log archive account."
    ],
    correct: [0, 3],
    explanation: "An organization trail captures API activity for every account in the organization, including future accounts, into a central bucket, and log file integrity validation produces signed digest files that reveal any modification or deletion. AWS Config is often confused with CloudTrail, but it tracks configuration state rather than every API call.",
    optionExplanations: [
      "Correct — an organization trail automatically logs all member accounts, including new ones, to the central bucket.",
      "This is error-prone and adds overhead, and new accounts may be missed.",
      "AWS Config records resource configuration changes, not a complete history of API calls.",
      "Correct — digest files with hashes and signatures let auditors detect modified or deleted log files.",
      "Flow Logs capture network traffic metadata, not API activity."
    ]
  },
  {
    id: 1042,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company's security policy requires that all requests to a specific Amazon S3 bucket use encryption in transit. Any request sent over plain HTTP must be rejected. Which solution meets this requirement?",
    options: [
      "Enable default encryption with SSE-KMS on the bucket.",
      "Add a bucket policy that denies all S3 actions when aws:SecureTransport is false.",
      "Enable S3 Block Public Access settings on the bucket.",
      "Create a gateway VPC endpoint for S3 and route all client traffic to the bucket through it."
    ],
    correct: [1],
    explanation: "A bucket policy that explicitly denies requests where aws:SecureTransport is false forces all access to use HTTPS. Default encryption with SSE-KMS sounds like it addresses encryption, but it covers data at rest, not the protocol used in transit.",
    optionExplanations: [
      "Default encryption protects data at rest and does not reject unencrypted HTTP requests.",
      "Correct — this condition key is false for HTTP requests, so the explicit deny rejects any request not made over TLS.",
      "Block Public Access controls public permissions, not the transport protocol used.",
      "An endpoint keeps traffic private but does not enforce TLS, and clients outside the VPC are unaffected."
    ]
  },
  {
    id: 1043,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company must protect critical Amazon S3 objects from accidental overwrites and deletions. Permanently deleting an object version or suspending versioning must require an additional authentication factor. The objects must still be updatable, so WORM storage is not acceptable. Which solution meets these requirements?",
    options: [
      "Enable S3 Object Lock in compliance mode with a default retention period.",
      "Enable S3 Cross-Region Replication to a bucket in another AWS account.",
      "Enable S3 Versioning on the bucket and configure MFA Delete.",
      "Enable SSE-KMS with a customer managed key whose key policy requires MFA."
    ],
    correct: [2],
    explanation: "S3 Versioning keeps earlier versions when objects are overwritten or deleted, and MFA Delete requires multi-factor authentication to permanently delete a version or change the versioning state, while objects remain updatable. Object Lock also prevents deletion, but it enforces WORM retention, which conflicts with the requirement.",
    optionExplanations: [
      "Compliance mode makes object versions immutable, which is WORM storage the company does not want.",
      "Replication creates copies but does not require MFA for deleting versions or changing versioning.",
      "Correct — versioning preserves prior versions on overwrite or delete, and MFA Delete requires MFA to permanently delete versions or suspend versioning.",
      "Key policies govern cryptographic operations, not S3 version deletion or versioning changes."
    ]
  },
  {
    id: 1044,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An Amazon S3 bucket receives millions of small objects every day and uses SSE-KMS with a customer managed key. AWS KMS request costs are high, and the company must continue to use the same customer managed key. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "Enable S3 Bucket Keys for SSE-KMS on the bucket.",
      "Switch the bucket's default encryption to SSE-S3.",
      "Request a higher KMS request quota and keep the current configuration.",
      "Encrypt each object client-side with a new data key generated by KMS."
    ],
    correct: [0],
    explanation: "S3 Bucket Keys let S3 use a short-lived bucket-level key derived from the KMS key to create data keys, which greatly reduces KMS request traffic and cost while the customer managed key remains in use. Switching to SSE-S3 would cut costs too, but it violates the requirement to keep the customer managed key.",
    optionExplanations: [
      "Correct — a bucket-level key derived from the KMS key reduces the number of requests from S3 to KMS, lowering costs while keeping the same key.",
      "SSE-S3 would remove KMS costs but stops using the required customer managed key.",
      "A higher quota addresses throttling, not cost; every object still generates KMS requests.",
      "Generating a data key per object still calls KMS for every object and adds client complexity."
    ]
  },
  {
    id: 1045,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An Amazon EC2 instance has an unencrypted Amazon EBS data volume. A new policy requires the data to be encrypted at rest with a customer managed AWS KMS key. Which solution meets this requirement?",
    options: [
      "Modify the existing volume settings to turn on encryption at rest with the customer managed KMS key.",
      "Enable EBS encryption by default so the existing volume is encrypted automatically.",
      "Add the volume to the KMS key policy so its data is encrypted on the next write.",
      "Snapshot the volume, copy it encrypted with the KMS key, create a volume, and swap it in."
    ],
    correct: [3],
    explanation: "Because an unencrypted EBS volume cannot be encrypted in place, the standard approach is to snapshot it, copy the snapshot with encryption using the customer managed key, create a new volume from the copy, and attach it in place of the original. Enabling encryption by default seems easier, but it affects only volumes created afterward.",
    optionExplanations: [
      "An existing unencrypted EBS volume cannot be encrypted in place.",
      "Encryption by default applies only to newly created volumes, not to existing ones.",
      "Key policies control who can use a key; they cannot encrypt an existing volume.",
      "Correct — an encrypted snapshot copy produces an encrypted volume that replaces the original data volume."
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN: Design Resilient Architectures  (26% — 39 questions)
  // ────────────────────────────────────────────────────────────────
  {
    id: 1046,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An e-commerce company's web tier sends each new order synchronously to a fleet of EC2 instances that perform order processing. During flash sales the processing fleet is overwhelmed, requests time out, and some orders are lost. The company wants to guarantee that no orders are lost and to let the processing tier scale independently of the web tier. Which solution will meet these requirements?",
    options: [
      "Move the processing fleet to larger instance types and enable detailed monitoring to trigger alarms sooner.",
      "Place an Amazon SQS queue between the tiers and have the processing instances poll the queue for orders.",
      "Put an Application Load Balancer with cross-zone load balancing in front of the processing instances.",
      "Publish each order to an Amazon SNS topic that pushes it over HTTPS directly to the processing instances."
    ],
    correct: [1],
    explanation: "An SQS queue durably buffers orders so the web tier can accept them even when processing is saturated, and the processing tier consumes at its own pace and can scale on queue depth. A load balancer only spreads synchronous requests; when every target is overloaded, requests still time out and orders are lost.",
    optionExplanations: [
      "Vertical scaling only raises the ceiling; a large enough spike still overwhelms the synchronous tier and orders are still lost.",
      "Correct — the queue decouples the tiers, stores orders durably until they are processed, and lets consumers scale independently.",
      "A load balancer distributes requests but provides no buffering, so overloaded targets still cause timeouts and lost orders.",
      "SNS push delivery has no durable backlog for the consumers; if the endpoints stay overloaded, delivery retries are eventually exhausted."
    ]
  },
  {
    id: 1047,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A financial services company is building a service that applies account transactions. Transactions for the same account must be processed in the exact order they were submitted, and producer retries must not cause a transaction to be applied twice. Transactions for different accounts can be processed in parallel. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use an Amazon SQS FIFO queue with the account ID as the message group ID and deduplication enabled.",
      "Use an Amazon SQS standard queue and have consumers sort messages by timestamp before applying them.",
      "Use an Amazon SNS standard topic with an Amazon SQS standard queue subscribed for the consumers.",
      "Use Amazon Kinesis Data Streams with EC2 consumers that track sequence numbers to discard repeated records."
    ],
    correct: [0],
    explanation: "An SQS FIFO queue preserves order within each message group and deduplicates messages sent again within the deduplication interval, so using the account ID as the group ID gives per-account ordering with parallelism across accounts. Kinesis can preserve per-shard order, but duplicates from producer retries must be handled by custom consumer code on self-managed instances, which adds overhead.",
    optionExplanations: [
      "Correct — message groups give strict per-account ordering, different groups are processed in parallel, and deduplication suppresses retried sends.",
      "Standard queues offer best-effort ordering and at-least-once delivery, so sorting in the consumer cannot reliably prevent reordering or duplicates.",
      "Standard SNS topics and standard SQS queues do not guarantee ordering or exactly-once processing.",
      "This can be made to work, but it requires custom deduplication logic and managing consumer instances, which is more operational overhead."
    ]
  },
  {
    id: 1048,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A media company uses EC2 workers that read jobs from an Amazon SQS standard queue and transcode videos. Each job can take several minutes to complete. The team notices that many videos are being transcoded two or three times, even though no worker has failed. The queue uses its default settings. What should a solutions architect do to resolve this issue?",
    options: [
      "Enable long polling on the queue so workers wait for messages instead of returning empty responses.",
      "Configure a delivery delay on the queue so that new messages are hidden for several minutes after arrival.",
      "Increase the queue's visibility timeout to be longer than the maximum time required to process a job.",
      "Replace the standard queue with an SQS FIFO queue so each message is delivered to only one worker."
    ],
    correct: [2],
    explanation: "While a worker processes a message, the message is hidden only for the visibility timeout; if processing takes longer, the message becomes visible again and another worker picks it up. Setting the visibility timeout above the maximum processing time prevents this. Switching to FIFO does not help, because a FIFO message also becomes visible again when its visibility timeout expires before deletion.",
    optionExplanations: [
      "Long polling reduces empty receives and cost but does not stop in-flight messages from becoming visible again.",
      "A delivery delay only postpones the first delivery; it does not extend how long a message stays hidden while it is being processed.",
      "Correct — the message stays invisible for the whole processing time, so no other worker receives it before it is deleted.",
      "FIFO queues also redeliver a message whose visibility timeout expires before it is deleted, so duplicates would continue."
    ]
  },
  {
    id: 1049,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An application processes messages from an Amazon SQS queue with AWS Lambda. Occasionally a malformed message causes the function to fail every time, so the message is retried repeatedly, wastes concurrency, and delays other work. The development team wants to keep these messages for later analysis without writing custom code. Which solution will meet these requirements?",
    options: [
      "Lower the queue's message retention period so failing messages expire and are removed automatically.",
      "Increase the visibility timeout so failing messages are retried less often by the Lambda function.",
      "Add code to the Lambda function that deletes any message that has failed more than once.",
      "Configure a dead-letter queue that receives messages after a maximum number of failed receives."
    ],
    correct: [3],
    explanation: "A dead-letter queue with a redrive policy automatically moves a message that has been received a set number of times without being deleted, isolating poison messages for analysis without custom code. Shortening the retention period would remove the messages, but they would be lost rather than kept for analysis.",
    optionExplanations: [
      "Expired messages are deleted permanently, so the team could not analyze them, and valid slow messages might also be lost.",
      "A longer visibility timeout only slows the retry loop; the poison message still cycles indefinitely.",
      "This requires custom code and discards the messages instead of keeping them for analysis.",
      "Correct — after the configured receive count, SQS moves the message to the dead-letter queue where it can be inspected and redriven later."
    ]
  },
  {
    id: 1050,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "When a customer places an order, an inventory service, a shipping service, and an analytics service must each receive a copy of the order event. Each service processes events at its own pace, and any service may be unavailable for maintenance for up to an hour without losing events. Which architecture will meet these requirements?",
    options: [
      "Publish order events to an Amazon SNS topic with one Amazon SQS queue subscribed per service.",
      "Send order events to a single Amazon SQS standard queue that all three services poll for new messages.",
      "Publish order events to an Amazon SNS topic with an HTTPS endpoint subscription for each service.",
      "Send order events to a single Amazon SQS FIFO queue that uses one message group per service."
    ],
    correct: [0],
    explanation: "SNS-to-SQS fan-out delivers a copy of every event to each subscribed queue, and each queue durably buffers events until its service consumes them, even during an outage. With a single shared queue, each message is consumed by only one of the services, so the others would miss it.",
    optionExplanations: [
      "Correct — every service gets its own durable copy and can process or catch up independently.",
      "A message in one queue is delivered to and deleted by a single consumer, so each event would reach only one service.",
      "HTTPS push deliveries are retried for a limited time; a service that is offline for an extended period can miss events.",
      "Message groups partition messages rather than copying them; each event would still be processed by only one consumer."
    ]
  },
  {
    id: 1051,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company wants to react automatically to events coming from a third-party SaaS help-desk application and from AWS services such as EC2 instance state changes. Different event types must be routed to different targets, including Lambda functions and Step Functions state machines, based on fields in the event content. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Write a scheduled Lambda function that polls the SaaS API and AWS CloudTrail and then invokes the targets.",
      "Send all events to an Amazon SQS queue and run EC2 consumers that inspect each event and call the targets.",
      "Use Amazon EventBridge with a partner event source and rules that use event patterns to match each target.",
      "Publish all events to an Amazon SNS topic and add custom code that forwards the SaaS events into the topic."
    ],
    correct: [2],
    explanation: "Amazon EventBridge natively receives events from supported SaaS partners and AWS services, and rules with content-based event patterns route each event to many AWS targets without custom code. SNS can filter messages, but it has no native SaaS partner integration, so custom forwarding code would still be needed.",
    optionExplanations: [
      "Polling adds latency and custom code for both sources and the routing logic, increasing operational overhead.",
      "Self-managed consumers that implement routing logic add infrastructure and code to maintain.",
      "Correct — partner event sources and event pattern rules deliver content-based routing to many targets with no servers or glue code.",
      "The SaaS integration requires custom forwarding code, which adds overhead that EventBridge avoids."
    ]
  },
  {
    id: 1052,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A bank is building a loan approval workflow made up of several Lambda functions. The workflow needs conditional branching, automatic retries with exponential backoff, and a step that waits up to several days for a loan officer to approve or reject the application. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Chain the Lambda functions so each function synchronously invokes the next one and waits for its response.",
      "Use an AWS Step Functions Standard workflow with a callback task that waits for the officer's decision.",
      "Connect the steps with Amazon SQS queues and store the workflow state for each application in DynamoDB.",
      "Use an AWS Step Functions Express workflow that polls a DynamoDB table until the officer's decision appears."
    ],
    correct: [1],
    explanation: "Step Functions Standard workflows support long-running executions, built-in retries with backoff, Choice states for branching, and a wait-for-callback pattern that pauses until a human returns a task token. Express workflows are designed for short-lived, high-volume executions and cannot pause for days.",
    optionExplanations: [
      "Lambda functions have a maximum run time far shorter than several days, and chained synchronous calls need custom retry and branching code.",
      "Correct — Standard workflows provide branching, retries, and long human-approval waits as managed features.",
      "This works but requires custom orchestration, retry, and state-tracking code, which increases overhead.",
      "Express workflows are intended for short executions, so they cannot wait several days for an approval."
    ]
  },
  {
    id: 1053,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A startup is launching a REST API for a mobile app. Traffic is unpredictable, with long idle periods overnight and sudden spikes after marketing campaigns. The team does not want to manage servers or pay for idle capacity, and the API must scale automatically. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "Deploy the API on EC2 instances in an Auto Scaling group with a minimum of two instances behind an ALB.",
      "Run the API as Amazon ECS tasks on an EC2-backed cluster that uses a capacity provider for scaling.",
      "Deploy the API with AWS Elastic Beanstalk in a load-balanced environment that has auto scaling enabled.",
      "Expose the API through Amazon API Gateway with AWS Lambda functions implementing each operation."
    ],
    correct: [3],
    explanation: "API Gateway with Lambda is fully serverless, scales automatically with request volume, and charges per request and per execution time, so idle periods cost almost nothing. The EC2-based options keep instances running during idle periods and still require server management.",
    optionExplanations: [
      "The minimum instances run and are billed even when idle, and the team must manage the operating systems.",
      "EC2 container instances are billed while idle and must be patched and managed by the team.",
      "Elastic Beanstalk simplifies deployment but still runs EC2 instances that incur cost during idle periods.",
      "Correct — no servers to manage, automatic scaling, and pay-per-use pricing suit spiky, often idle traffic."
    ]
  },
  {
    id: 1054,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs three containerized microservices on Amazon ECS: orders, users, and payments. Clients must reach all services through one HTTPS endpoint, with requests to /orders, /users, and /payments sent to the corresponding service. Each service must scale independently. Which solution will meet these requirements?",
    options: [
      "Create a Network Load Balancer with a separate listener port for each microservice's target group.",
      "Create Route 53 multivalue answer records that return the IP addresses of each service's tasks.",
      "Create an Application Load Balancer whose path-based rules route to a target group per service.",
      "Place a Gateway Load Balancer in front of the ECS cluster and register every task as a target."
    ],
    correct: [2],
    explanation: "An Application Load Balancer operates at layer 7 and can route requests by URL path to separate target groups, each registered with its own ECS service that scales independently. A Network Load Balancer works at layer 4 and cannot inspect paths, so clients would need different ports instead of one endpoint with paths.",
    optionExplanations: [
      "NLBs route by port and protocol, not by URL path, so the single endpoint with path routing requirement is not met.",
      "DNS records cannot route by URL path and would expose task IPs that change as tasks scale.",
      "Correct — path-based rules send each path to its own target group and ECS service behind a single HTTPS endpoint.",
      "Gateway Load Balancers are for inserting third-party network appliances, not for HTTP path routing to services."
    ]
  },
  {
    id: 1055,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An online gaming company runs game servers on EC2 instances in multiple Availability Zones. The servers communicate with players over UDP and must handle millions of requests per second with very low latency. A partner requires a fixed IP address per Availability Zone to add to its firewall allow list. Which load balancing solution will meet these requirements?",
    options: [
      "A Network Load Balancer with an Elastic IP address assigned in each Availability Zone.",
      "An Application Load Balancer with cross-zone load balancing and AWS WAF enabled.",
      "An Amazon API Gateway HTTP API that integrates privately with the EC2 game servers.",
      "A Gateway Load Balancer that forwards UDP traffic to the game servers in each zone."
    ],
    correct: [0],
    explanation: "Network Load Balancers support UDP, deliver very high throughput with low latency, and can have one Elastic IP address per Availability Zone for allow-listing. Application Load Balancers handle only HTTP and HTTPS and do not provide static IP addresses.",
    optionExplanations: [
      "Correct — NLBs support UDP at very high scale and allow a static Elastic IP per Availability Zone.",
      "ALBs do not support UDP and their IP addresses change over time, so they cannot be allow-listed reliably.",
      "API Gateway serves HTTP-based APIs and does not support UDP game traffic.",
      "Gateway Load Balancers are designed to route traffic through security appliances, not to load balance game servers."
    ]
  },
  {
    id: 1056,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a web application on EC2 instances in an Auto Scaling group. Traffic varies throughout the day without a predictable pattern. The operations team wants the group to keep average CPU utilization near 50% by adding and removing instances automatically, with as little tuning as possible. Which scaling approach should a solutions architect recommend?",
    options: [
      "A simple scaling policy that adds one instance whenever a CloudWatch alarm reports CPU above 50%.",
      "A target tracking scaling policy on the group's average CPU utilization with a 50% target.",
      "Scheduled scaling actions that raise capacity during business hours and lower it overnight.",
      "Step scaling policies with several CloudWatch alarms that add more instances as CPU rises."
    ],
    correct: [1],
    explanation: "Target tracking creates and manages the CloudWatch alarms itself and adjusts capacity in proportion to the deviation from the target value, much like a thermostat. Step scaling can achieve similar results, but the team must define and tune alarms and step adjustments manually.",
    optionExplanations: [
      "Simple scaling adds fixed increments and waits for cooldowns, reacting slowly, and it does not scale in on its own.",
      "Correct — target tracking keeps the metric near the target and manages the alarms automatically with minimal tuning.",
      "The traffic has no predictable pattern, so fixed schedules would over- or under-provision.",
      "Step scaling works but requires designing and maintaining several alarms and step sizes, which means more tuning."
    ]
  },
  {
    id: 1057,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A ticketing company knows that sales for a major concert will open at a specific date and time next month and expects traffic to jump to many times its normal level within seconds. Its EC2 instances in an Auto Scaling group take several minutes to become ready. Which solution will ensure enough capacity is available when the sale opens?",
    options: [
      "Rely on the existing target tracking policy, but lower the CPU target value to scale out earlier.",
      "Enable predictive scaling so the group forecasts the expected load from its historical metrics.",
      "Increase the default cooldown period so newly launched instances have more time to start serving.",
      "Create a scheduled action that raises the group's minimum and desired capacity shortly before the sale."
    ],
    correct: [3],
    explanation: "Scheduled scaling is designed for known one-time or recurring events: capacity is increased at a set time, so instances are already warm before the traffic arrives. Predictive scaling forecasts from historical patterns, so a one-off event that has never occurred before would not be anticipated.",
    optionExplanations: [
      "Target tracking reacts only after the metric rises, and with long instance start times the spike would arrive first.",
      "Predictive scaling learns from recurring history; a one-time event that is not in the history would not be forecast.",
      "Cooldowns affect how often scaling activities occur and do not add capacity ahead of the spike.",
      "Correct — capacity is raised in advance of the known event, so instances are ready when sales open."
    ]
  },
  {
    id: 1058,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An Auto Scaling group runs a business application whose load rises sharply every weekday morning and falls each evening. The daily pattern shifts gradually over the year. Instances need a long time to initialize, so the current target tracking policy adds capacity too late each morning. The team does not want to maintain schedules manually. What should a solutions architect do?",
    options: [
      "Replace target tracking with a step scaling policy that has lower CPU thresholds for each step.",
      "Create scheduled actions for every weekday morning and update them whenever the pattern changes.",
      "Add a predictive scaling policy that forecasts load from history and launches capacity ahead of demand.",
      "Switch the group to a larger instance type so that fewer instances are needed during the morning."
    ],
    correct: [2],
    explanation: "Predictive scaling analyzes historical load to detect daily and weekly cycles and launches instances before the forecast increase, adapting as the pattern evolves. Scheduled actions could pre-provision capacity, but they would have to be maintained manually as the pattern shifts, which the team wants to avoid.",
    optionExplanations: [
      "Step scaling is still reactive, so long initialization times would still leave a gap each morning.",
      "This could work, but keeping the schedules aligned with a shifting pattern is the manual effort the team wants to avoid.",
      "Correct — predictive scaling provisions ahead of recurring cyclical demand and adjusts its forecasts automatically.",
      "Larger instances do not shorten initialization time or make reactive scaling happen earlier."
    ]
  },
  {
    id: 1059,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A retail website runs on EC2 instances in an Auto Scaling group behind an Application Load Balancer with sticky sessions enabled. Shopping cart data is stored in memory on each instance. When the group scales in or an instance fails, customers lose their carts. The company wants the web tier to scale freely without losing session data. Which solution will meet these requirements?",
    options: [
      "Store session data in an Amazon ElastiCache cluster and remove the dependency on sticky sessions.",
      "Increase the stickiness duration on the target group so customers stay on the same instance longer.",
      "Write session data to each instance's EBS volume and take snapshots of the volumes every hour.",
      "Turn off scale-in for the Auto Scaling group so instances that hold sessions keep running."
    ],
    correct: [0],
    explanation: "Moving session state to a shared, low-latency store such as ElastiCache makes the web instances stateless, so any instance can serve any request and instances can be added, removed, or replaced without losing carts. Longer stickiness still ties a session to one instance and does not protect against scale-in or failure.",
    optionExplanations: [
      "Correct — externalized sessions make the instances stateless, so scaling and failures no longer lose carts.",
      "Stickiness keeps users on one instance, but the session is still lost when that instance terminates.",
      "EBS volumes are tied to the instance and hourly snapshots would lose recent changes, so carts would still disappear.",
      "Disabling scale-in wastes capacity and still loses sessions whenever an instance fails."
    ]
  },
  {
    id: 1060,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A news website serves images, CSS, and JavaScript files from EC2 instances behind an Application Load Balancer in a single Region. Readers around the world report slow page loads, and much of the instance load comes from serving these static files. Which solution will improve performance and reduce origin load with the LEAST operational overhead?",
    options: [
      "Deploy additional copies of the full application stack in Regions close to the largest reader groups.",
      "Create a CloudFront distribution with the ALB as origin to cache static files at edge locations.",
      "Add an Amazon ElastiCache cluster that the application uses to cache the static files in memory.",
      "Put AWS Global Accelerator in front of the ALB to route readers over the AWS global network."
    ],
    correct: [1],
    explanation: "CloudFront caches static content at edge locations close to readers, cutting latency and serving most requests without reaching the origin. Global Accelerator improves the network path to the ALB, but it does not cache content, so every request still reaches the instances.",
    optionExplanations: [
      "Running several Regional stacks adds significant cost and operational overhead for content that a CDN can cache.",
      "Correct — edge caching lowers latency for global readers and offloads static requests from the instances.",
      "ElastiCache sits next to the origin, so global readers still face the full network latency and the instances still serve the files.",
      "Global Accelerator does not cache, so origin load stays the same and only part of the latency is addressed."
    ]
  },
  {
    id: 1061,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs long-running containerized services on an Amazon ECS cluster made up of self-managed EC2 instances. The operations team spends significant time patching hosts and right-sizing cluster capacity. The company wants to keep using ECS task definitions and services but stop managing servers. What should a solutions architect recommend?",
    options: [
      "Migrate the services to Amazon EKS with self-managed node groups spread across the Availability Zones.",
      "Keep ECS on EC2 and add an Auto Scaling group capacity provider to manage the instances automatically.",
      "Rewrite the services as AWS Lambda functions packaged as container images and invoke them on demand.",
      "Run the existing ECS services on AWS Fargate so AWS provisions and manages the underlying compute."
    ],
    correct: [3],
    explanation: "AWS Fargate runs ECS tasks without any EC2 instances for the customer to patch or size, while keeping the same task definitions and services. A capacity provider automates scaling of the instances, but the team would still own and patch the EC2 hosts.",
    optionExplanations: [
      "Self-managed node groups still require patching servers and require moving from ECS to Kubernetes.",
      "Capacity providers help with scaling, but the team still manages and patches the EC2 instances.",
      "Lambda requires a rewrite and has a maximum execution duration that does not fit long-running services.",
      "Correct — Fargate removes host management while keeping the existing ECS constructs."
    ]
  },
  {
    id: 1062,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "Users upload images to an Amazon S3 bucket, and a monolithic application on a single EC2 instance processes each image synchronously. During busy periods the application falls behind and uploads time out. The company wants processing to be decoupled from uploads and to scale automatically with the amount of pending work. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Move the application to a larger instance type and enable enhanced networking on the instance.",
      "Configure S3 event notifications to send a message to an Amazon SQS queue for each uploaded image.",
      "Put an Application Load Balancer with sticky sessions in front of the processing instance.",
      "Run processing workers in an Auto Scaling group that scales on the queue backlog per instance.",
      "Store uploaded images on an io2 EBS volume that is attached to several workers with Multi-Attach."
    ],
    correct: [1, 3],
    explanation: "S3 event notifications to SQS turn each upload into a durable work item, decoupling uploads from processing. An Auto Scaling group of workers that scales on the backlog per instance adds or removes workers according to the amount of pending work. A larger instance only raises the ceiling and keeps the tight coupling.",
    optionExplanations: [
      "Vertical scaling still processes synchronously and does not scale automatically with pending work.",
      "Correct — every upload produces a queued work item, so uploads no longer depend on processing speed.",
      "A load balancer does not decouple the work, and sticky sessions are irrelevant to background image processing.",
      "Correct — scaling on backlog per instance matches the number of workers to the amount of pending work.",
      "Multi-Attach volumes are limited to one Availability Zone, need a cluster-aware file system, and do not decouple or scale processing."
    ]
  },
  {
    id: 1063,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A public API built on Amazon API Gateway synchronously invokes a Lambda function that calls a third-party payment service. The third-party service enforces a strict request rate limit. During traffic spikes the Lambda function scales out, exceeds the limit, and requests fail. The company must protect the third-party service and must not lose any requests. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Integrate API Gateway directly with an Amazon SQS queue so requests are stored durably on arrival.",
      "Increase the memory allocated to the Lambda function so each invocation finishes more quickly.",
      "Publish requests to an Amazon SNS topic that invokes the Lambda function for each message.",
      "Ask clients to retry failed calls with exponential backoff while keeping the synchronous design.",
      "Process the queue with Lambda and set a maximum concurrency that respects the third-party rate limit."
    ],
    correct: [0, 4],
    explanation: "Writing requests to an SQS queue absorbs spikes durably, and limiting the concurrency of the Lambda consumer caps the request rate sent to the third party while the backlog drains. Client retries keep the synchronous design, so the spike still reaches the third party and requests can still fail.",
    optionExplanations: [
      "Correct — the queue buffers every request durably, so spikes are absorbed instead of rejected.",
      "Faster invocations would actually raise the request rate and do nothing to buffer or limit traffic.",
      "SNS invokes Lambda as soon as messages arrive, so concurrency would still spike and SNS provides no backlog.",
      "Retries depend on client behavior and can amplify load on the third party during spikes; requests may still be lost.",
      "Correct — a concurrency cap on the queue consumer throttles calls to a rate the third party accepts."
    ]
  },
  {
    id: 1064,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs its microservices on a self-managed Kubernetes cluster in its data center and uses Kubernetes manifests and Helm charts for deployments. It is moving to AWS and wants a highly available control plane across multiple Availability Zones without operating the control plane itself, while keeping its existing tooling. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Install Kubernetes on EC2 instances in three Availability Zones and manage the control plane with automation.",
      "Convert the manifests into Amazon ECS task definitions and run the services on AWS Fargate.",
      "Deploy the containers with AWS Elastic Beanstalk using its multicontainer Docker environment.",
      "Use Amazon EKS with managed node groups so AWS operates the Kubernetes control plane."
    ],
    correct: [3],
    explanation: "Amazon EKS provides a managed Kubernetes control plane that runs across multiple Availability Zones, and managed node groups simplify worker lifecycle, so the existing manifests and Helm charts keep working. ECS on Fargate removes server management but would require converting all Kubernetes tooling.",
    optionExplanations: [
      "The company would have to operate, patch, and back up the control plane itself, which adds operational overhead.",
      "ECS is not Kubernetes, so the manifests and Helm charts would have to be rewritten.",
      "Elastic Beanstalk does not run Kubernetes workloads, so the existing tooling could not be reused.",
      "Correct — EKS runs a managed, multi-AZ control plane and is compatible with standard Kubernetes tooling."
    ]
  },
  {
    id: 1065,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a fleet of EC2 instances that continuously poll an Amazon SQS queue and run short processing tasks. Message volume is low most of the day with occasional bursts, so the instances are underused, and the team must patch and scale them. Which solution will reduce operational overhead while still scaling with message volume?",
    options: [
      "Replace the fleet with a smaller instance type in an Auto Scaling group that scales on CPU utilization.",
      "Run the polling code as AWS Fargate tasks that run continuously and are restarted if they fail.",
      "Configure an AWS Lambda function with the queue as an event source to process the messages.",
      "Use a Step Functions state machine with a Wait state that checks the queue for new messages."
    ],
    correct: [2],
    explanation: "With an SQS event source mapping, the Lambda service polls the queue, scales the number of concurrent invocations with the backlog, and deletes messages on success, so there are no servers to manage. Fargate removes host patching, but the always-on tasks still need scaling configuration and are billed while idle.",
    optionExplanations: [
      "The team would still manage and patch instances, and CPU is a poor proxy for queue backlog.",
      "Continuously running tasks are billed while idle and still need scaling logic tied to the queue.",
      "Correct — Lambda handles polling, scaling, and deletion of messages with no infrastructure to manage.",
      "A state machine that polls the queue is custom orchestration that adds cost and complexity without native scaling."
    ]
  },
  {
    id: 1066,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs its production MySQL database on a Single-AZ Amazon RDS DB instance. The company needs the database to recover automatically from an Availability Zone failure with minimal data loss and without changing the application's connection string. Which solution will meet these requirements?",
    options: [
      "Create a read replica in another Availability Zone and promote it manually if the primary fails.",
      "Convert the DB instance to a Multi-AZ deployment with a synchronous standby in another zone.",
      "Enable automated backups and restore to another Availability Zone with point-in-time recovery.",
      "Copy automated snapshots to another Region every hour and restore from the latest copy if needed."
    ],
    correct: [1],
    explanation: "RDS Multi-AZ keeps a synchronously replicated standby in another Availability Zone and fails over automatically by updating the DNS name of the same endpoint, so no data is lost and the application keeps its connection string. A read replica uses asynchronous replication, requires manual promotion, and has a different endpoint.",
    optionExplanations: [
      "Promotion is manual, replication is asynchronous so recent writes may be lost, and the endpoint changes.",
      "Correct — synchronous replication and automatic failover behind the same endpoint meet every requirement.",
      "A point-in-time restore creates a new instance with a new endpoint and takes much longer to recover.",
      "Restoring from hourly snapshot copies loses up to an hour of data and is a manual, slow process."
    ]
  },
  {
    id: 1067,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs an Amazon RDS for PostgreSQL Multi-AZ DB instance deployment for its order system. Analysts now run heavy reporting queries against the database that slow down order processing. The reports can tolerate data that is a few seconds old. Which solution will isolate the reporting workload from the production workload?",
    options: [
      "Point the reporting tools at the Multi-AZ standby instance so that it serves the read traffic.",
      "Scale the primary DB instance up to a larger instance class to handle both workloads together.",
      "Place Amazon RDS Proxy in front of the database and send the reporting connections through it.",
      "Create an RDS read replica and point the reporting tools to the read replica's endpoint."
    ],
    correct: [3],
    explanation: "A read replica receives asynchronous updates from the primary and serves read-only queries on separate compute, so reporting no longer competes with order processing; slight replication lag is acceptable here. In a Multi-AZ DB instance deployment, the standby cannot serve read traffic; it exists only for failover.",
    optionExplanations: [
      "The standby in a Multi-AZ DB instance deployment is not accessible for reads, so it cannot offload reporting.",
      "A larger instance may help temporarily, but both workloads still compete for the same resources.",
      "RDS Proxy pools connections but still sends every query to the same primary, so the contention remains.",
      "Correct — reporting runs on a separate replica, isolating it from the production workload."
    ]
  },
  {
    id: 1068,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company uses an Amazon Aurora MySQL DB cluster that has only a writer instance. The company wants to minimize downtime if the writer instance or its Availability Zone fails and also wants to scale read traffic within the same Region. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "Add Aurora Replicas in other Availability Zones and send read traffic to the cluster's reader endpoint.",
      "Convert the cluster to an Aurora global database with a secondary cluster in a second Region.",
      "Create a cross-Region read replica that uses MySQL binary log replication from the cluster.",
      "Take frequent manual cluster snapshots and restore the latest snapshot if the writer fails."
    ],
    correct: [0],
    explanation: "Aurora Replicas in other Availability Zones share the cluster storage, serve reads through the reader endpoint, and are automatically promoted if the writer fails, giving fast in-Region failover. An Aurora global database adds a second Region, which costs more than needed for in-Region availability and read scaling.",
    optionExplanations: [
      "Correct — replicas provide automatic failover targets and read scaling within the Region at the lowest cost.",
      "Global databases target cross-Region DR and low-latency global reads, which adds unnecessary cost here.",
      "Binary log replication to another Region adds lag and cost and does not provide automatic in-Region failover.",
      "Restoring a snapshot creates a new cluster and takes much longer, and it does nothing for read scaling."
    ]
  },
  {
    id: 1069,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A global company runs an Amazon Aurora PostgreSQL database in one Region. It needs a disaster recovery solution in a second Region with an RPO of about one second and an RTO of about one minute. Users near the second Region should also get low-latency reads during normal operation. Which solution will meet these requirements?",
    options: [
      "Copy automated Aurora snapshots to the second Region and restore the latest one during a disaster.",
      "Use AWS Backup with a cross-Region copy rule that runs every hour for the Aurora cluster.",
      "Convert the cluster to an Aurora global database with a secondary cluster in the second Region.",
      "Migrate the data to Amazon DynamoDB global tables and change the application's data access layer."
    ],
    correct: [2],
    explanation: "Aurora Global Database replicates at the storage layer with typically sub-second lag and supports promoting the secondary Region within about a minute, while serving local reads in the secondary Region. Snapshot or backup copies leave an RPO measured in hours and a restore time far longer than one minute.",
    optionExplanations: [
      "Snapshot copies give an RPO of hours and restoring a cluster takes far longer than one minute.",
      "Hourly backup copies cannot meet a one-second RPO, and restoring is slow.",
      "Correct — storage-based replication gives very low RPO, fast Regional failover, and local reads in the secondary Region.",
      "This requires migrating to a different database and rewriting the application, which is unnecessary."
    ]
  },
  {
    id: 1070,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A mobile game stores player profiles in an Amazon DynamoDB table in one Region. Players are in North America, Europe, and Asia, and the game needs low-latency reads and writes in each geography. The game must continue to accept writes in the other geographies if one Region becomes unavailable. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Add a DynamoDB Accelerator (DAX) cluster in each Region in front of the existing single-Region table.",
      "Convert the table to a DynamoDB global table with replicas in a Region in each geography.",
      "Use DynamoDB Streams and Lambda functions to copy every change to tables in the other Regions.",
      "Put an Amazon CloudFront distribution in front of an API that reads and writes the single table."
    ],
    correct: [1],
    explanation: "DynamoDB global tables provide fully managed, multi-Region, multi-active replication, so each Region accepts local reads and writes and the remaining Regions continue to operate if one fails. A custom Streams and Lambda pipeline could replicate data but requires building and operating the replication and conflict handling.",
    optionExplanations: [
      "DAX caches reads in one Region's VPC and cannot front a table in another Region; writes would still go to a single Region.",
      "Correct — managed active-active replication gives local reads and writes and survives a Regional outage.",
      "Custom replication is complex to build, monitor, and resolve conflicts for, which adds operational overhead.",
      "CloudFront cannot cache writes, so all writes still depend on one Region's table."
    ]
  },
  {
    id: 1071,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company hosts its web application behind an Application Load Balancer in one Region. It has also created a static maintenance website in an Amazon S3 bucket in another Region. If the application becomes unhealthy, users must be sent to the maintenance website automatically, and they must be sent back when the application recovers. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Configure Route 53 health checking of the primary ALB endpoint, for example by evaluating its target health.",
      "Create a Route 53 geolocation routing policy with the S3 website configured as the default record.",
      "Lower the TTL on a simple routing record and update the record with a script when an outage is detected.",
      "Create Route 53 failover records with the ALB as primary and the S3 website endpoint as secondary.",
      "Create a Route 53 multivalue answer record that returns both the ALB and the S3 website endpoints."
    ],
    correct: [0, 3],
    explanation: "Failover routing returns the primary record while its health check passes and automatically returns the secondary record when it fails, switching back when the primary is healthy again. Health checking of the ALB, through a Route 53 health check or by evaluating the alias target's health, provides the signal. Multivalue answers return several healthy records at once, so users could reach the maintenance site even while the application is healthy.",
    optionExplanations: [
      "Correct — Route 53 needs a health signal for the primary to decide when to fail over and fail back.",
      "Geolocation routes by user location, not by health, so it would not send users to maintenance during an outage.",
      "A scripted record update is a manual, custom mechanism that is slower and less reliable than built-in failover.",
      "Correct — failover routing sends traffic to the secondary only while the primary is unhealthy.",
      "Multivalue answers would send some users to the maintenance site even when the application is healthy."
    ]
  },
  {
    id: 1072,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A SaaS company has deployed identical copies of its application in three AWS Regions. The company wants each user to be served by the Region that gives them the best network performance, and it wants traffic to move away from a Region automatically if that Region's deployment becomes unhealthy. Which Route 53 configuration will meet these requirements?",
    options: [
      "Geolocation routing records for each continent, with a default record that points to the largest Region.",
      "Weighted routing records that assign an equal weight to each of the three Regional deployments.",
      "Geoproximity routing records with bias values that are tuned manually to shift traffic between Regions.",
      "Latency-based routing records for each Region, with health checks associated with each record."
    ],
    correct: [3],
    explanation: "Latency-based routing answers each query with the Region that has the lowest measured latency for the user, and associated health checks remove unhealthy Regions from the answers. Geolocation routes by the user's location rather than measured latency, so users can be sent to a slower Region.",
    optionExplanations: [
      "Geolocation is based on where users are, not on measured network latency, so it may not give the best performance.",
      "Equal weights spread traffic evenly regardless of where users are, ignoring latency.",
      "Geoproximity routes by distance plus manual bias, not by measured latency, and requires ongoing tuning.",
      "Correct — users go to the lowest-latency Region, and health checks fail traffic away from unhealthy Regions."
    ]
  },
  {
    id: 1073,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company is using a blue/green strategy to release a new version of its application. The new green environment runs behind its own Application Load Balancer, separate from the blue environment. The company wants to send a small percentage of users to green at first and then gradually increase it, using DNS. Which Route 53 routing policy should the company use?",
    options: [
      "Failover routing with the blue environment as primary and the green environment as secondary.",
      "Latency-based routing with records for the blue and green environments in the same Region.",
      "Weighted routing with records for both environments and weights that are adjusted over time.",
      "Multivalue answer routing that returns the addresses of both load balancers to each client."
    ],
    correct: [2],
    explanation: "Weighted routing returns each record in proportion to its weight, so traffic can start with a small share for green and shift gradually by changing the weights. Failover routing is all-or-nothing and only sends traffic to the secondary when the primary is unhealthy.",
    optionExplanations: [
      "Failover does not split traffic; green would receive users only if blue failed.",
      "Latency routing chooses by Region latency; two environments in the same Region cannot be split by percentage this way.",
      "Correct — weights control the proportion of DNS answers, enabling a gradual shift to green.",
      "Multivalue answers return both endpoints randomly and do not control the percentage sent to each environment."
    ]
  },
  {
    id: 1074,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "Because of legal requirements, a media company must serve users located in Germany from a dedicated deployment that contains licensed content for that country. Users in every other country must be served by the company's global deployment. Which Route 53 routing configuration will meet these requirements?",
    options: [
      "Geolocation routing with a record for Germany and a default record that points to the global deployment.",
      "Latency-based routing with records for the German deployment and the global deployment.",
      "Geoproximity routing with a positive bias that expands the area served by the German deployment.",
      "Weighted routing that sends a share of traffic equal to Germany's user base to the German deployment."
    ],
    correct: [0],
    explanation: "Geolocation routing answers based on the country where the query originates, so a Germany record sends German users to the dedicated deployment and the default record serves everyone else. Geoproximity routes by distance between users and resources, which does not follow national borders and could include or exclude users incorrectly.",
    optionExplanations: [
      "Correct — country-level geolocation records enforce the legal boundary, and the default record covers everyone else.",
      "Latency routing may send German users to the global deployment if it responds faster, breaking the requirement.",
      "Geoproximity is distance-based, so its boundaries do not match country borders.",
      "Weighted routing picks records randomly by weight, not by user location."
    ]
  },
  {
    id: 1075,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs an internal reporting application on EC2 instances with an Amazon RDS database. The business has set an RPO of 24 hours and an RTO of 24 hours for a Regional disaster and wants the lowest possible cost for disaster recovery. Which DR strategy should a solutions architect recommend?",
    options: [
      "Pilot light, with the database continuously replicated to a second Region and servers ready to start.",
      "Backup and restore, with backups copied to a second Region and infrastructure recreated when needed.",
      "Warm standby, with a scaled-down copy of the full environment always running in a second Region.",
      "Multi-site active/active, with the full environment serving traffic in two Regions at the same time."
    ],
    correct: [1],
    explanation: "Backup and restore is the lowest-cost DR strategy and suits RPO and RTO targets measured in hours, because only backups are kept in the recovery Region and resources are created during recovery. Pilot light keeps replicated data and core resources running continuously, which costs more than these generous targets justify.",
    optionExplanations: [
      "Continuous replication and standing core resources cost more than necessary for 24-hour targets.",
      "Correct — daily backups copied cross-Region meet a 24-hour RPO and RTO at the lowest cost.",
      "A running scaled-down environment incurs ongoing cost far beyond what the targets require.",
      "Active/active is the most expensive strategy and is designed for near-zero RTO, not 24-hour targets."
    ]
  },
  {
    id: 1076,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company must recover its customer portal in a second Region after a Regional disaster with an RPO of a few minutes and an RTO of a few hours. To minimize cost, the company does not want application servers running in the recovery Region during normal operation. Which DR strategy meets these requirements MOST cost-effectively?",
    options: [
      "Backup and restore, using nightly database snapshots that are copied to the recovery Region.",
      "Warm standby, with a scaled-down but fully working application tier always running.",
      "Pilot light, with data replicated continuously and servers launched only at recovery.",
      "Multi-site active/active, with both Regions serving production traffic at all times."
    ],
    correct: [2],
    explanation: "Pilot light keeps the core data continuously replicated, giving an RPO of minutes, while application servers are launched from prepared templates and images only during recovery, which meets an RTO of hours at low cost. Backup and restore with nightly snapshots would lose up to a day of data, failing the RPO.",
    optionExplanations: [
      "Nightly snapshots result in an RPO of up to a day, which violates the few-minutes requirement.",
      "Warm standby keeps application servers running, which the company wants to avoid for cost reasons.",
      "Correct — continuous data replication meets the RPO, and servers started on demand keep idle cost low.",
      "Active/active far exceeds the requirements and is the most expensive option."
    ]
  },
  {
    id: 1077,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A logistics company needs its order-tracking platform to recover from a Regional outage within minutes. The recovery environment must be able to serve production traffic immediately at reduced capacity and then scale out, and the company wants to test it continuously. Full duplicate capacity in two Regions is too expensive. Which DR strategy should the company use?",
    options: [
      "Warm standby, with a scaled-down, fully functional copy of the environment running in a second Region.",
      "Pilot light, with only the replicated database running and other resources launched during recovery.",
      "Backup and restore, using AWS Backup copies in a second Region to rebuild the environment.",
      "Multi-site active/active, with full production capacity running and serving users in both Regions."
    ],
    correct: [0],
    explanation: "Warm standby keeps a smaller but fully functional environment running, so it can take traffic immediately, be scaled out after failover, and be tested continuously, meeting an RTO of minutes. Pilot light requires launching the application tier during recovery, so it cannot serve traffic immediately.",
    optionExplanations: [
      "Correct — a running scaled-down environment serves traffic immediately and scales out, at less cost than full duplication.",
      "Application servers are not running in pilot light, so the environment cannot serve traffic immediately.",
      "Rebuilding from backups takes hours, which cannot meet an RTO of minutes.",
      "Full production capacity in two Regions is the costly option the company has ruled out."
    ]
  },
  {
    id: 1078,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company serves a static marketing website from an Amazon S3 bucket through an Amazon CloudFront distribution. The website must stay available even if Amazon S3 in the bucket's Region has an outage. The content is already replicated to a bucket in a second Region. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Create a second CloudFront distribution for the replica bucket and switch the DNS record manually during an outage.",
      "Enable S3 Transfer Acceleration on the primary bucket so requests are served through edge locations.",
      "Increase the cache TTL of all objects so CloudFront keeps serving content during an S3 outage.",
      "Configure a CloudFront origin group with the primary bucket and the replica bucket as the failover origin."
    ],
    correct: [3],
    explanation: "A CloudFront origin group automatically retries a request against the secondary origin when the primary returns specified error codes or times out, so the site stays available without manual action. Longer TTLs help only for objects that are already cached, so cache misses would still fail during an outage.",
    optionExplanations: [
      "Manual DNS changes add operational effort and downtime while the switch is made.",
      "Transfer Acceleration speeds uploads and downloads to a bucket but provides no failover to another Region.",
      "Objects that are not cached or that have expired would still fail, so availability is not guaranteed.",
      "Correct — origin failover switches automatically to the replica bucket when the primary origin fails."
    ]
  },
  {
    id: 1079,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company stores important documents in an Amazon S3 bucket in one Region. A new resilience policy requires that every newly uploaded object is also stored automatically in a bucket in a different Region. Which combination of steps must a solutions architect take to meet this requirement? (Select TWO)",
    options: [
      "Enable S3 Transfer Acceleration on the source bucket so new objects are copied through edge locations.",
      "Enable S3 Versioning on both the source bucket and the destination bucket.",
      "Create an S3 replication rule on the source bucket that targets the bucket in the other Region.",
      "Create an S3 Lifecycle rule that transitions new objects to the bucket in the other Region.",
      "Configure S3 Same-Region Replication to a second bucket and enable MFA delete on it."
    ],
    correct: [1, 2],
    explanation: "S3 Cross-Region Replication requires versioning on both source and destination buckets and a replication rule, with an IAM role, that names the destination bucket in another Region. After it is configured, new objects are replicated automatically and asynchronously. Lifecycle rules change storage classes or expire objects; they cannot move objects to another bucket or Region.",
    optionExplanations: [
      "Transfer Acceleration speeds up transfers over long distances but does not copy objects to another bucket.",
      "Correct — versioning must be enabled on both buckets before replication can be configured.",
      "Correct — the replication rule automatically copies new objects to the destination bucket in the other Region.",
      "Lifecycle rules transition storage classes or expire objects within a bucket; they cannot copy objects across Regions.",
      "Same-Region Replication keeps the copy in the same Region, which does not satisfy the policy."
    ]
  },
  {
    id: 1080,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs workloads that use Amazon EBS volumes, Amazon RDS databases, and Amazon EFS file systems across several AWS accounts. Auditors require centrally managed backup schedules and retention, with copies of every backup stored in a second Region. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use AWS Backup plans managed through AWS Organizations, with a rule that copies backups to a second Region.",
      "Use Amazon Data Lifecycle Manager policies that create EBS snapshots and copy them to a second Region.",
      "Write Lambda functions for each service that create backups on a schedule and copy them across Regions.",
      "Enable RDS cross-Region automated backups, EFS replication, and separate EBS snapshot scripts."
    ],
    correct: [0],
    explanation: "AWS Backup centrally manages backup schedules, retention, and cross-Region copies for EBS, RDS, EFS, and other services, and backup policies can be applied across accounts with AWS Organizations. Data Lifecycle Manager can copy EBS snapshots across Regions, but it does not cover RDS or EFS.",
    optionExplanations: [
      "Correct — one managed service applies consistent schedules, retention, and cross-Region copies across services and accounts.",
      "Data Lifecycle Manager handles EBS snapshots and AMIs only, leaving RDS and EFS uncovered.",
      "Custom functions for each service must be built, monitored, and maintained, which is high overhead.",
      "Combining several service-specific features and scripts lacks central management and adds operational effort."
    ]
  },
  {
    id: 1081,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs critical Windows and Linux application servers on VMware in its on-premises data center. It needs disaster recovery to AWS with an RPO of seconds and an RTO of minutes, while keeping the cost of AWS resources low until a disaster occurs. Which solution will meet these requirements?",
    options: [
      "Use AWS Backup to back up the on-premises virtual machines nightly and restore them as EC2 instances.",
      "Use AWS Storage Gateway Volume Gateway snapshots and rebuild the servers from EBS volumes when needed.",
      "Use AWS Elastic Disaster Recovery for continuous replication to a low-cost staging area.",
      "Use AWS DataSync to copy the servers' file systems to Amazon S3 on a frequent schedule."
    ],
    correct: [2],
    explanation: "AWS Elastic Disaster Recovery continuously replicates block-level data from source servers to a lightweight staging area, giving an RPO of seconds, and launches recovery instances within minutes only when needed. Nightly backups result in an RPO of up to a day and a slower restore.",
    optionExplanations: [
      "Nightly backups give an RPO of up to 24 hours and restoring virtual machines takes longer than minutes.",
      "Point-in-time snapshots and manual rebuilding cannot achieve an RPO of seconds or an RTO of minutes.",
      "Correct — continuous block replication to low-cost staging resources gives a seconds-level RPO and fast launch.",
      "Copying files to S3 does not capture full bootable servers and cannot meet the RPO or RTO."
    ]
  },
  {
    id: 1082,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A content management application runs on Linux EC2 instances in an Auto Scaling group across three Availability Zones. All instances must read and write the same set of files concurrently, and the file storage must remain available if an Availability Zone fails. Which storage solution will meet these requirements?",
    options: [
      "Provisioned IOPS io2 EBS volumes with Multi-Attach enabled and shared by all instances.",
      "An Amazon EFS file system using a Regional storage class, mounted on all instances.",
      "An Amazon EFS One Zone file system in one Availability Zone, mounted on all instances.",
      "Instance store volumes on each instance, kept in sync by a scheduled rsync job."
    ],
    correct: [1],
    explanation: "Amazon EFS with a Regional storage class stores data redundantly across multiple Availability Zones and supports concurrent access from many Linux instances in different zones. EBS Multi-Attach volumes can be attached only to instances in the same Availability Zone and need a cluster-aware file system.",
    optionExplanations: [
      "Multi-Attach works only within one Availability Zone, so instances in other zones cannot use the volume and an AZ failure stops access.",
      "Correct — EFS provides a shared POSIX file system stored across multiple Availability Zones.",
      "One Zone storage is lost or unavailable if that Availability Zone fails.",
      "Instance store data is ephemeral, and scheduled syncing causes inconsistent data and possible loss."
    ]
  },
  {
    id: 1083,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company runs a web application on EC2 instances in an Auto Scaling group behind an Application Load Balancer. Sometimes the application process hangs: the ALB marks the instance unhealthy, but the instance is never replaced. Administrators also patch instances in place, which has caused configuration drift between instances. Which combination of steps will improve resilience and consistency? (Select TWO)",
    options: [
      "Enable EC2 automatic instance recovery so failed instances are restarted on new underlying hardware.",
      "Use AWS Systems Manager Run Command to apply patches to all running instances at the same time.",
      "Turn on Elastic Load Balancing health checks for the Auto Scaling group so it replaces unhealthy instances.",
      "Increase the health check grace period so that instances have more time to recover by themselves.",
      "Build a new patched AMI, update the launch template, and use an instance refresh to replace instances."
    ],
    correct: [2, 4],
    explanation: "By default an Auto Scaling group uses only EC2 status checks, so an instance with a hung application stays in service; enabling ELB health checks makes the group replace instances that fail the load balancer's health checks. Baking a new AMI and rolling it out with an instance refresh follows immutable infrastructure, replacing instances instead of modifying them, which eliminates drift.",
    optionExplanations: [
      "Automatic recovery responds to system status check failures, not application hangs, so these instances would not be replaced.",
      "Patching in place is exactly what causes drift; it does not move the fleet to identical, replaceable instances.",
      "Correct — the group then treats instances failing ALB health checks as unhealthy and replaces them.",
      "A longer grace period only delays health evaluation and does not replace hung instances.",
      "Correct — rolling out a new AMI replaces instances with identical patched ones, eliminating configuration drift."
    ]
  },
  {
    id: 1084,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A small company runs its web application and its MySQL database together on a single EC2 instance in one Availability Zone. An instance failure recently caused a long outage. The company wants the application to remain available if an instance or an entire Availability Zone fails, with as few application changes as possible. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Move to a larger instance type and enable EC2 automatic instance recovery on the existing instance.",
      "Add a second instance in the same Availability Zone using a spread placement group.",
      "Migrate the database to an Amazon RDS for MySQL Multi-AZ deployment.",
      "Run the web tier in an Auto Scaling group across multiple Availability Zones behind an ALB.",
      "Create a Route 53 simple routing record that returns the public IP addresses of two instances."
    ],
    correct: [2, 3],
    explanation: "Moving the database to RDS Multi-AZ gives automatic failover to a synchronous standby in another Availability Zone, and an Auto Scaling group across several zones behind an ALB replaces failed web instances and keeps serving from the healthy zones. A spread placement group protects against shared hardware failure, but all instances remain in one Availability Zone.",
    optionExplanations: [
      "The application still depends on a single instance in one Availability Zone, so an AZ failure causes an outage.",
      "Spread placement separates hardware within the zone but does not protect against an Availability Zone failure.",
      "Correct — the database fails over automatically to a standby in another Availability Zone.",
      "Correct — load-balanced instances in multiple zones survive instance and Availability Zone failures.",
      "Simple records have no health checks, so clients would still be sent to a failed instance."
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN: Design High-Performing Architectures  (24% — 36 questions)
  // ────────────────────────────────────────────────────────────────
  {
    id: 1085,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A media company has users on several continents who upload multi-gigabyte video files to a single Amazon S3 bucket in us-east-1. Users far from the Region report slow and unreliable uploads. The company wants to improve upload speed for distant users with minimal changes to the application. Which solution will meet these requirements?",
    options: [
      "Create buckets in other Regions, have users upload to the nearest one, and replicate objects back to us-east-1.",
      "Deploy AWS Global Accelerator in front of the bucket so that uploads are routed over the AWS backbone.",
      "Enable S3 Transfer Acceleration on the bucket and upload with multipart uploads to the accelerate endpoint.",
      "Create the bucket as an S3 Express One Zone directory bucket to increase upload throughput."
    ],
    correct: [2],
    explanation: "S3 Transfer Acceleration lets clients upload to the nearest edge location, from where data travels over the optimized AWS network to the bucket; combined with multipart uploads it parallelizes large transfers and retries only failed parts. It requires only a change of endpoint. Regional buckets with replication would also work but add buckets, routing logic and replication cost, which is far more change than required.",
    optionExplanations: [
      "Multiple buckets plus Region-selection logic and replication add significant application and operational change, violating the minimal-change requirement.",
      "Global Accelerator endpoints are ALBs, NLBs, EC2 instances and Elastic IPs; an S3 bucket cannot be configured directly as an accelerator endpoint.",
      "Correct — Transfer Acceleration uses edge locations and the AWS backbone, and multipart upload parallelizes and makes large uploads resilient.",
      "S3 Express One Zone targets single-digit-millisecond access from compute in the same Availability Zone; it does not help clients that are far from the Region."
    ]
  },
  {
    id: 1086,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs a mission-critical Oracle database on Amazon EC2. The database requires consistent sub-millisecond latency, the highest durability available for EBS volumes, and more IOPS per volume than gp3 volumes can deliver. Which storage option should a solutions architect choose?",
    options: [
      "Provision io2 Block Express EBS volumes with the required IOPS.",
      "Stripe several gp3 volumes in RAID 0 and raise IOPS on each volume.",
      "Use NVMe instance store volumes and copy data to Amazon S3 nightly.",
      "Use st1 Throughput Optimized HDD volumes sized for maximum throughput."
    ],
    correct: [0],
    explanation: "io2 Block Express is designed for the most demanding I/O-intensive databases, offering the highest IOPS per volume, sub-millisecond latency and higher durability than other EBS volume types. A RAID 0 array of gp3 volumes can aggregate IOPS, but it adds management complexity and the loss of any one volume destroys the whole array, so it does not meet the durability requirement.",
    optionExplanations: [
      "Correct — io2 Block Express provides the highest per-volume IOPS, consistent sub-millisecond latency and the highest EBS durability.",
      "RAID 0 striping increases the blast radius of a single volume failure and does not provide the higher durability that io2 offers.",
      "Instance store data is lost when the instance stops or fails, so nightly copies would risk losing a day of committed transactions.",
      "st1 is a magnetic volume type optimized for large sequential throughput, not the random, low-latency I/O of a transactional database."
    ]
  },
  {
    id: 1087,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company processes several terabytes of web server logs every night with a batch job on Amazon EC2. The job reads the data sequentially in large blocks and needs high throughput, but random IOPS performance is not important. The data must stay on Amazon EBS. Which volume type is the MOST cost-effective choice?",
    options: [
      "gp3 General Purpose SSD volumes with throughput provisioned to the maximum",
      "io2 Provisioned IOPS SSD volumes sized to hold the whole dataset",
      "sc1 Cold HDD volumes, because they have the lowest cost per GB",
      "st1 Throughput Optimized HDD volumes sized to hold the dataset"
    ],
    correct: [3],
    explanation: "st1 volumes are low-cost HDD volumes designed for frequently accessed, throughput-intensive sequential workloads such as log processing and big data. sc1 is cheaper per GB, but it is intended for infrequently accessed data and delivers lower throughput, which does not suit a job that scans terabytes every night.",
    optionExplanations: [
      "gp3 SSD storage costs more per GB than HDD and its IOPS strengths are wasted on a purely sequential workload.",
      "io2 is the most expensive volume type and is built for high random IOPS, which this workload does not need.",
      "sc1 has lower throughput and is meant for data that is accessed infrequently, so a nightly multi-terabyte scan would run slower.",
      "Correct — st1 delivers high sequential throughput at a low cost per GB for frequently accessed big-data workloads."
    ]
  },
  {
    id: 1088,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A fleet of Linux EC2 instances shares an Amazon EFS file system that stores a relatively small dataset. Throughput demand is spiky and unpredictable, often exceeding what Bursting mode provides for the stored size, and the file system regularly runs out of burst credits. The company wants throughput to scale automatically without capacity planning and to pay only for what it uses. What should a solutions architect do?",
    options: [
      "Change the file system to the Max I/O performance mode.",
      "Change the file system to the Elastic throughput mode.",
      "Change the file system to Provisioned throughput set at the peak value.",
      "Add large padding files to the file system to earn more burst credits."
    ],
    correct: [1],
    explanation: "Elastic throughput automatically scales throughput up and down with the workload and charges for the throughput actually used, which fits spiky, unpredictable demand. Provisioned throughput would remove the credit problem, but it requires choosing a level in advance and paying for the peak even when the file system is idle.",
    optionExplanations: [
      "Max I/O is a performance mode for highly parallel access with higher latency; it does not change how much throughput the file system can drive.",
      "Correct — Elastic throughput scales automatically with demand and bills per use, with no capacity planning.",
      "Provisioned throughput requires capacity planning and charges for the provisioned peak all the time, which is not pay-per-use.",
      "Padding files increase storage cost and are a fragile workaround compared with a throughput mode that scales on demand."
    ]
  },
  {
    id: 1089,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A genomics company runs an HPC workload on thousands of Linux compute cores. Input datasets are stored in Amazon S3, and every node needs shared, POSIX-compliant, parallel access with sub-millisecond latency during each run. Results must be written back to S3. Which storage solution provides the HIGHEST performance?",
    options: [
      "An FSx for Lustre file system linked to the S3 bucket as a data repository",
      "An Amazon EFS file system in Max I/O mode populated from S3 with AWS DataSync",
      "Mountpoint for Amazon S3 installed on each compute node to read the bucket",
      "An Amazon FSx for Windows File Server file system shared to the nodes over SMB"
    ],
    correct: [0],
    explanation: "FSx for Lustre is a parallel file system built for HPC that delivers sub-millisecond latency and very high aggregate throughput, and an S3 data repository association lazily loads objects from S3 and exports results back. EFS in Max I/O mode is shared and POSIX-compliant, but it has higher latency and lower throughput than Lustre and requires an extra copy step.",
    optionExplanations: [
      "Correct — FSx for Lustre is designed for HPC and integrates natively with S3 for import and export.",
      "EFS Max I/O trades latency for parallelism and cannot match Lustre performance; DataSync adds a separate copy pipeline.",
      "Mountpoint for S3 is not a fully POSIX-compliant shared file system and does not provide sub-millisecond latency for every operation.",
      "FSx for Windows File Server uses SMB and targets Windows workloads, not Linux HPC clusters that need a parallel file system."
    ]
  },
  {
    id: 1090,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A video transcoding application on Amazon EC2 writes large intermediate files during each job. The files are deleted when the job finishes and can be regenerated if lost. The company needs the highest possible local disk I/O performance for these files at the lowest cost. Which solution meets these requirements?",
    options: [
      "Attach io2 EBS volumes with high provisioned IOPS for the intermediate files.",
      "Store the intermediate files on an Amazon EFS file system with Elastic throughput.",
      "Use EC2 instance types with NVMe instance store volumes for the intermediate files.",
      "Write the intermediate files to S3 Standard and remove them with a lifecycle rule."
    ],
    correct: [2],
    explanation: "Instance store volumes are physically attached to the host, provide very high I/O performance and are included in the instance price, which makes them ideal for temporary, reproducible scratch data. io2 volumes would perform well, but provisioned IOPS add significant cost for data that does not need persistence.",
    optionExplanations: [
      "io2 volumes add per-GB and per-IOPS charges to provide durability that scratch data does not need.",
      "EFS is network-attached storage with higher latency than local NVMe disks and adds storage and throughput costs.",
      "Correct — NVMe instance store gives the highest local I/O at no extra charge, and its ephemeral nature is acceptable for regenerable files.",
      "S3 is object storage accessed over the network, so it cannot match local disk latency for intensive intermediate writes."
    ]
  },
  {
    id: 1091,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company is migrating an on-premises NetApp storage array to AWS. Linux applications access datasets over NFS, and Windows applications access the same datasets over SMB. The company wants to keep using NetApp features such as snapshots and SnapMirror replication while making the fewest changes. Which solution meets these requirements?",
    options: [
      "Amazon FSx for Windows File Server with DFS Namespaces for all clients",
      "Amazon EFS for the Linux clients and FSx for Windows File Server for Windows",
      "Amazon FSx for OpenZFS with NFS exports configured for all clients",
      "Amazon FSx for NetApp ONTAP with multiprotocol NFS and SMB access"
    ],
    correct: [3],
    explanation: "FSx for NetApp ONTAP runs the ONTAP file system, so it supports simultaneous NFS and SMB access to the same data and the familiar NetApp features such as snapshots and SnapMirror. Splitting data between EFS and FSx for Windows would create two copies that must be kept in sync and would lose the NetApp tooling.",
    optionExplanations: [
      "FSx for Windows File Server serves SMB only and does not provide NetApp features like SnapMirror.",
      "Two separate file systems would duplicate data, require synchronization and abandon the existing NetApp features.",
      "FSx for OpenZFS serves NFS clients and does not provide SMB access or NetApp SnapMirror.",
      "Correct — FSx for NetApp ONTAP offers multiprotocol access and native ONTAP data management features."
    ]
  },
  {
    id: 1092,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "An analytics application reads millions of small objects and also downloads multi-gigabyte objects from a single Amazon S3 bucket. All objects are stored under one prefix. At peak times the application receives HTTP 503 Slow Down errors, and the large downloads are slow. Which combination of actions will improve performance? (Select TWO)",
    options: [
      "Distribute the objects across multiple prefixes so requests are spread out.",
      "Enable S3 Versioning so that S3 can serve reads from multiple object versions.",
      "Use byte-range fetches to download parts of large objects in parallel.",
      "Transition the objects to S3 Glacier Instant Retrieval to raise request capacity.",
      "Enable S3 Object Lock in governance mode to reduce request contention."
    ],
    correct: [0, 2],
    explanation: "S3 request-rate capacity scales per prefix, so spreading objects across more prefixes allows higher aggregate request rates and removes 503 throttling. Byte-range fetches let the client download segments of large objects concurrently, increasing throughput. Versioning, storage-class changes and Object Lock do not increase request capacity or download speed.",
    optionExplanations: [
      "Correct — request-rate limits apply per prefix, so more prefixes increase total request capacity.",
      "Versioning keeps multiple versions for data protection; reads still target the current version and capacity does not increase.",
      "Correct — parallel byte-range GETs increase throughput for large objects and allow retrying only failed ranges.",
      "Glacier Instant Retrieval is a cheaper class for rarely accessed data with retrieval fees; it does not raise request-rate capacity.",
      "Object Lock enforces WORM retention for compliance and has no effect on request throttling."
    ]
  },
  {
    id: 1093,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs a small clustered application on six Amazon EC2 instances in one Availability Zone. Each instance must run on distinct underlying hardware so that a single hardware failure affects at most one instance. Which deployment option meets this requirement?",
    options: [
      "Launch all six instances in a cluster placement group.",
      "Launch all six instances in a spread placement group.",
      "Launch all six instances in a partition placement group with one partition.",
      "Launch all six instances as Dedicated Instances in the same Availability Zone."
    ],
    correct: [1],
    explanation: "A spread placement group places each instance on distinct racks with separate network and power, which is intended for a small number of critical instances that must be isolated from correlated hardware failures. Dedicated Instances only guarantee that the hardware is not shared with other AWS accounts; several of the company's own instances can still land on the same host.",
    optionExplanations: [
      "A cluster placement group packs instances close together for low latency, which increases the risk of correlated failures.",
      "Correct — a spread placement group puts each instance on distinct hardware.",
      "With a single partition, all instances share the same set of racks, so one failure can affect several instances.",
      "Dedicated Instances isolate hardware from other accounts but do not keep the company's own instances on separate hardware."
    ]
  },
  {
    id: 1094,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company is deploying a large Apache Cassandra cluster with hundreds of Amazon EC2 instances. The company wants to limit the impact of correlated rack-level hardware failures, and the database must know which instances share racks so that it can place replicas in a topology-aware way. Which placement strategy should be used?",
    options: [
      "A spread placement group containing all of the cluster instances",
      "A cluster placement group containing all of the cluster instances",
      "A partition placement group, exposing partition numbers to Cassandra",
      "Separate Auto Scaling groups for the cluster in several AWS Regions"
    ],
    correct: [2],
    explanation: "Partition placement groups divide instances into logical partitions that do not share racks, and the partition number is available through instance metadata so distributed databases such as Cassandra, HDFS or Kafka can place replicas across partitions. Spread placement groups also isolate hardware, but they support only a small number of instances per Availability Zone and are not suited to clusters of hundreds of nodes.",
    optionExplanations: [
      "Spread placement groups are limited to a small number of instances per Availability Zone, so they cannot hold hundreds of nodes.",
      "Cluster placement groups place instances close together, which increases exposure to correlated rack failures.",
      "Correct — partitions are isolated at the rack level and their numbers are visible to the application for replica placement.",
      "A multi-Region deployment adds latency and cost and does not give the database rack-level topology information."
    ]
  },
  {
    id: 1095,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An application runs in an Amazon EC2 Auto Scaling group. Each new instance needs more than 10 minutes to start because it loads a large dataset into memory during boot. Traffic spikes are unpredictable, and new instances are not ready in time during scale-out. The company wants to reduce scale-out time while keeping costs low. What should a solutions architect do?",
    options: [
      "Configure a warm pool of pre-initialized, stopped instances for the group.",
      "Raise the minimum capacity to cover the largest expected spike at all times.",
      "Add a scheduled scaling action that adds instances every morning.",
      "Lower the target tracking value so that scaling starts at lower utilization."
    ],
    correct: [0],
    explanation: "A warm pool keeps pre-initialized instances in a stopped (or hibernated) state, so they can be moved into service much faster than launching and booting new ones, and stopped instances incur only storage costs. Raising the minimum capacity would also eliminate the delay, but it means paying for peak capacity around the clock.",
    optionExplanations: [
      "Correct — warm pool instances have already completed their slow initialization and can enter service quickly at low cost.",
      "Running peak capacity permanently removes the delay but greatly increases cost during normal traffic.",
      "Scheduled actions suit predictable patterns; these spikes are unpredictable, so a schedule would miss them.",
      "Scaling earlier helps slightly but every new instance still needs the long boot, and it keeps more capacity running."
    ]
  },
  {
    id: 1096,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An AWS Lambda function performs CPU-intensive image processing. Its execution duration is long and often approaches the configured timeout, although its memory usage is low. The developers want to reduce the execution time with the LEAST effort. What should they do?",
    options: [
      "Configure provisioned concurrency for the function.",
      "Increase the reserved concurrency of the function.",
      "Attach the function to a VPC close to its data sources.",
      "Increase the memory setting, which also increases the CPU."
    ],
    correct: [3],
    explanation: "Lambda allocates CPU power in proportion to the configured memory, so raising memory gives a CPU-bound function more compute and shortens its duration, often at similar or lower total cost. Provisioned concurrency only removes initialization latency for cold starts and does not make each invocation compute faster.",
    optionExplanations: [
      "Provisioned concurrency pre-initializes execution environments to avoid cold starts; it does not add CPU to each invocation.",
      "Reserved concurrency guarantees and caps the number of concurrent executions but does not speed up a single execution.",
      "Attaching to a VPC does not add compute power and is unrelated to CPU-bound processing time.",
      "Correct — more memory means proportionally more CPU, which directly shortens CPU-bound execution."
    ]
  },
  {
    id: 1097,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A latency-sensitive API uses Amazon API Gateway and AWS Lambda, and the responses are personalized for each user. After idle periods, some requests are slow because new execution environments must initialize. The API must respond consistently with low latency during business hours. Which solution meets these requirements?",
    options: [
      "Increase the function timeout and memory to the maximum values.",
      "Configure provisioned concurrency and schedule it for business hours.",
      "Set reserved concurrency equal to the expected peak concurrency.",
      "Enable API Gateway caching for all methods with a long TTL."
    ],
    correct: [1],
    explanation: "Provisioned concurrency keeps a configured number of execution environments initialized and ready, eliminating cold-start latency, and Application Auto Scaling can schedule it only for business hours to control cost. Reserved concurrency sounds similar, but it only reserves and limits capacity; it does not pre-initialize environments.",
    optionExplanations: [
      "A longer timeout does not affect initialization, and more memory reduces but does not eliminate cold-start latency.",
      "Correct — pre-initialized environments remove cold starts, and scheduling limits the cost to business hours.",
      "Reserved concurrency sets aside and caps concurrency but environments are still created on demand, so cold starts remain.",
      "Responses are personalized per user, so caching them would return incorrect data or achieve few cache hits."
    ]
  },
  {
    id: 1098,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company wants to run containerized microservices on Amazon ECS. The team does not want to provision, patch, or scale EC2 hosts, and the load on each service varies throughout the day. Which solution meets these requirements with the LEAST operational overhead?",
    options: [
      "Use the ECS EC2 launch type with an Auto Scaling group capacity provider.",
      "Run Docker on EC2 instances and manage them with AWS Systems Manager.",
      "Use the ECS Fargate launch type with Service Auto Scaling for each service.",
      "Use Amazon EKS with self-managed node groups running on Spot Instances."
    ],
    correct: [2],
    explanation: "With Fargate, AWS provisions and manages the underlying compute for each task, so there are no hosts to patch or scale, and Service Auto Scaling adjusts the task count to the load. The EC2 launch type with a capacity provider automates cluster scaling, but the team would still own the instances, their AMIs and patching.",
    optionExplanations: [
      "Capacity providers automate scaling, but the team still manages and patches the EC2 container instances.",
      "Self-managed Docker hosts require the team to handle patching, scaling and orchestration themselves.",
      "Correct — Fargate removes host management and Service Auto Scaling follows the variable load.",
      "Self-managed node groups require the team to manage worker nodes, and Spot interruptions add further handling."
    ]
  },
  {
    id: 1099,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A research firm runs thousands of independent containerized simulation jobs that are submitted at irregular times. Each job runs for 1 to 6 hours and can be retried if it is interrupted. The firm wants compute to be provisioned automatically based on the queued jobs, at the lowest cost and with minimal management. Which solution meets these requirements?",
    options: [
      "AWS Batch with a managed compute environment that uses Spot Instances",
      "AWS Lambda functions invoked by an Amazon SQS queue for each job",
      "A fixed fleet of On-Demand EC2 instances running a cron-based scheduler",
      "A long-running Amazon EMR cluster of On-Demand instances for the jobs"
    ],
    correct: [0],
    explanation: "AWS Batch queues jobs and automatically scales a managed compute environment up and down to run them, and Spot Instances greatly reduce cost for interruptible, retryable work. Lambda is serverless and event-driven, but its maximum execution duration is far shorter than multi-hour simulations.",
    optionExplanations: [
      "Correct — Batch handles queuing and compute scaling, and Spot is ideal for jobs that can be retried.",
      "Lambda functions cannot run for multiple hours, so they cannot execute these simulations.",
      "A fixed On-Demand fleet sits idle between irregular submissions and requires managing a custom scheduler.",
      "EMR is designed for big data frameworks like Spark, and a long-running On-Demand cluster wastes money when idle."
    ]
  },
  {
    id: 1100,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs an on-premises Hadoop cluster with Apache Spark and Hive jobs that process petabytes of data. The company wants to migrate to AWS with minimal code changes, decouple storage from compute, and size a cluster for each workload. Which solution meets these requirements?",
    options: [
      "Rewrite the jobs as AWS Glue Python shell jobs that read from Amazon S3.",
      "Load the data into Amazon Redshift and convert Hive queries to stored procedures.",
      "Run Hadoop on self-managed EC2 instances with HDFS stored on EBS volumes.",
      "Use Amazon EMR clusters that read and write data stored in Amazon S3."
    ],
    correct: [3],
    explanation: "Amazon EMR runs the same Spark and Hive frameworks as a managed service, and storing data in S3 decouples storage from compute so clusters can be sized or terminated per workload. Self-managed Hadoop on EC2 would also avoid code changes, but HDFS on EBS couples storage to the cluster and adds significant operational overhead.",
    optionExplanations: [
      "Rewriting Spark and Hive jobs as Python shell jobs requires substantial code changes and does not suit petabyte-scale processing.",
      "Migrating to Redshift requires converting Hive logic and does not keep the existing Spark jobs.",
      "HDFS on EBS ties data to the cluster, so storage is not decoupled and the company must manage Hadoop itself.",
      "Correct — EMR runs existing Spark and Hive code, and S3 storage decouples data from transient clusters."
    ]
  },
  {
    id: 1101,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A serverless application uses AWS Lambda functions that connect to an Amazon RDS for MySQL database. During traffic spikes, many concurrent invocations open new connections, and the database returns too-many-connections errors. Which solution resolves this with the fewest code changes?",
    options: [
      "Scale the DB instance to a larger class to raise its maximum connections.",
      "Place Amazon RDS Proxy between the Lambda functions and the database.",
      "Add an RDS read replica and send all database traffic to the replica.",
      "Set a low reserved concurrency on the functions to cap invocations."
    ],
    correct: [1],
    explanation: "RDS Proxy maintains a pool of database connections and multiplexes many Lambda connections over them, absorbing spikes without exhausting database connections; the functions only need to use the proxy endpoint. Scaling the instance raises the connection limit, but connection churn continues and the limit can still be exceeded at a higher cost.",
    optionExplanations: [
      "A larger instance only raises the ceiling and adds cost; uncontrolled connection growth from Lambda can still exhaust it.",
      "Correct — RDS Proxy pools and reuses connections, protecting the database during spikes with only an endpoint change.",
      "Read replicas are read-only and cannot accept the application's writes.",
      "Capping concurrency throttles requests during spikes, degrading the application instead of solving connection management."
    ]
  },
  {
    id: 1102,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A gaming application stores player profiles in Amazon DynamoDB. The workload is read-heavy, and the same items are read repeatedly. The application now requires microsecond read latency, and the developers want to keep using the DynamoDB API with minimal code changes. Which solution meets these requirements?",
    options: [
      "Add a DynamoDB Accelerator (DAX) cluster in front of the table.",
      "Enable DynamoDB global tables in additional AWS Regions.",
      "Switch the table to provisioned capacity with higher read capacity.",
      "Add an ElastiCache for Memcached cluster and use lazy loading in code."
    ],
    correct: [0],
    explanation: "DAX is an in-memory cache for DynamoDB that delivers microsecond read latency and is API-compatible, so the application only switches to the DAX client. ElastiCache could also cache the items, but the developers would need to write and maintain cache-aside logic and invalidation themselves.",
    optionExplanations: [
      "Correct — DAX provides microsecond reads through a DynamoDB-compatible API with minimal changes.",
      "Global tables replicate data across Regions for multi-Region access but do not reduce reads to microseconds.",
      "More read capacity prevents throttling but DynamoDB reads still take single-digit milliseconds.",
      "Memcached requires custom caching code and cache invalidation logic, which is more change than DAX."
    ]
  },
  {
    id: 1103,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company is building a real-time leaderboard that must rank millions of players by score with very low latency. The cached data must survive the failure of a node through automatic failover to a replica in another Availability Zone. Which solution meets these requirements?",
    options: [
      "Amazon ElastiCache for Memcached with nodes spread across Availability Zones",
      "Amazon DynamoDB with DAX and a global secondary index on the score attribute",
      "Amazon ElastiCache (Redis OSS) with Multi-AZ replicas, using sorted sets",
      "Amazon RDS for MySQL with ORDER BY queries cached by the application"
    ],
    correct: [2],
    explanation: "ElastiCache with the Redis OSS engine provides sorted sets, which maintain rankings natively with very fast updates and range queries, and supports replicas with Multi-AZ automatic failover. Memcached is a simple multithreaded key-value cache without replication, persistence or advanced data structures, so it fails both the ranking and the failover requirement.",
    optionExplanations: [
      "Memcached has no replication or failover and no native sorted data structure for rankings.",
      "Ranking across millions of players with a GSI requires costly query patterns, and DAX does not provide native ranking operations.",
      "Correct — Redis OSS sorted sets implement leaderboards natively, and Multi-AZ replicas provide automatic failover.",
      "Repeated ORDER BY queries on a relational database cannot deliver real-time ranking at this scale."
    ]
  },
  {
    id: 1104,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An internal application uses a MySQL-compatible relational database. The load is highly variable and unpredictable: the database is idle for hours and then receives sudden heavy spikes. The company wants database compute capacity to scale automatically in fine-grained increments. Which solution is the MOST cost-effective while still handling the spikes?",
    options: [
      "An Aurora provisioned cluster sized for peak load and covered by Reserved Instances",
      "Amazon RDS for MySQL with storage autoscaling enabled on the DB instance",
      "Amazon DynamoDB in on-demand capacity mode with the schema denormalized",
      "Amazon Aurora Serverless v2 with minimum and maximum capacity configured"
    ],
    correct: [3],
    explanation: "Aurora Serverless v2 adjusts compute capacity in small increments almost instantly as load changes, so the company pays little while idle and still absorbs sudden spikes, with full MySQL compatibility. A provisioned cluster sized for peak would handle the spikes, but it pays for peak capacity during the many idle hours.",
    optionExplanations: [
      "Peak-sized provisioned capacity is mostly idle, so even with Reserved Instances it is not the most cost-effective option.",
      "Storage autoscaling grows disk space only; compute capacity stays fixed and cannot absorb spikes.",
      "DynamoDB is not a relational MySQL-compatible database, so the application would need to be redesigned.",
      "Correct — Serverless v2 scales compute in fine-grained increments to match unpredictable load."
    ]
  },
  {
    id: 1105,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A news website uses an Amazon Aurora MySQL cluster. Read traffic is 20 times higher than write traffic and spikes unpredictably when stories go viral, overloading the existing Aurora Replica. The application already sends all reads to one database hostname. Which solution will handle the read spikes with the LEAST operational overhead?",
    options: [
      "Enable Aurora Auto Scaling for replicas and read through the reader endpoint.",
      "Scale the writer instance up to the largest instance class and send reads to the writer.",
      "Create cross-Region Aurora Replicas and update DNS records when traffic spikes start.",
      "Export the tables to Amazon S3 every hour and serve reads with Amazon Athena queries."
    ],
    correct: [0],
    explanation: "Aurora Auto Scaling adds and removes Aurora Replicas based on metrics such as CPU or connections, and the reader endpoint load-balances connections across all available replicas, so the application keeps using one hostname. Scaling up the writer is limited and wastes capacity outside spikes.",
    optionExplanations: [
      "Correct — Aurora Auto Scaling adjusts the number of replicas to demand, and the reader endpoint automatically spreads reads across them.",
      "A bigger writer has a fixed ceiling, costs more all the time, and mixes read spikes with the write workload.",
      "Cross-Region replicas add replication lag and require manual DNS changes during spikes — high operational overhead for a single-Region read problem.",
      "Athena on hourly exports cannot serve low-latency website reads and the data would be up to an hour old."
    ]
  },
  {
    id: 1106,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A company is building two new workloads. The first is a product catalog whose items have flexible JSON attributes and whose application team already uses MongoDB drivers. The second is a fraud detection service that must traverse relationships among accounts, devices, and transactions in real time. Which combination of database services should a solutions architect recommend? (Select TWO)",
    options: [
      "Amazon Neptune for the product catalog documents",
      "Amazon DocumentDB for the product catalog documents",
      "Amazon Keyspaces for the fraud detection relationship queries",
      "Amazon Neptune for the fraud detection relationship queries",
      "Amazon Redshift for serving the product catalog to the website"
    ],
    correct: [1, 3],
    explanation: "Amazon DocumentDB (with MongoDB compatibility) is a managed document database suited to JSON items with flexible attributes and works with existing MongoDB drivers. Amazon Neptune is a graph database built to traverse highly connected data such as fraud rings in real time. Each workload should use the purpose-built engine for its access pattern.",
    optionExplanations: [
      "Neptune is a graph database; it is not designed to store and serve document-style catalog items accessed by MongoDB drivers.",
      "Correct — DocumentDB stores flexible JSON documents and is compatible with MongoDB drivers, matching the catalog requirements.",
      "Amazon Keyspaces is a Cassandra-compatible wide-column store; it does not provide efficient multi-hop relationship traversal.",
      "Correct — Neptune is purpose-built for graph queries that traverse relationships among accounts, devices, and transactions.",
      "Redshift is a data warehouse for analytics; it is not meant to serve low-latency catalog lookups for a website."
    ]
  },
  {
    id: 1107,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs self-managed Apache Cassandra clusters on Amazon EC2. Patching, scaling, and repairing the clusters consume significant team effort. The company wants a managed, serverless service that works with its existing CQL application code. Which solution meets these requirements?",
    options: [
      "Migrate the data to Amazon Keyspaces (for Apache Cassandra).",
      "Migrate to Amazon DynamoDB and rewrite access with the DynamoDB SDK.",
      "Migrate to Amazon DocumentDB and convert the tables to collections.",
      "Migrate to Amazon Aurora PostgreSQL and redesign a relational schema."
    ],
    correct: [0],
    explanation: "Amazon Keyspaces is a serverless, Cassandra-compatible database that supports CQL and existing Cassandra drivers, so applications move with minimal changes and no clusters to manage. DynamoDB is also serverless and scales well, but moving to it requires rewriting the data access layer.",
    optionExplanations: [
      "Correct — Keyspaces is serverless and compatible with CQL and Cassandra drivers.",
      "DynamoDB uses a different API, so all CQL data access code would need to be rewritten.",
      "DocumentDB is MongoDB-compatible and does not support CQL, requiring a data model and code change.",
      "A relational redesign requires major schema and code changes, contrary to the requirement."
    ]
  },
  {
    id: 1108,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A product catalog website uses Amazon CloudFront with an Application Load Balancer as the origin. The cache hit ratio is low, and the origin is heavily loaded. The cache policy includes all query strings, headers, and cookies in the cache key, although the pages vary only by the lang query string. What should a solutions architect do to improve performance?",
    options: [
      "Add more EC2 instances behind the ALB to handle the extra origin load.",
      "Enable CloudFront Origin Shield and keep the current cache policy.",
      "Limit the cache policy's cache key to only the lang query string.",
      "Lower the default TTL so that edge locations refresh objects more often."
    ],
    correct: [2],
    explanation: "Including unnecessary headers, cookies and query strings fragments the cache into many variants, so most requests miss and go to the origin. Limiting the cache key to the lang parameter lets identical pages be shared across users and raises the hit ratio. Origin Shield adds a central caching layer, but with the same fragmented cache key most requests would still be misses.",
    optionExplanations: [
      "Scaling the origin treats the symptom and adds cost without improving edge cache efficiency.",
      "Origin Shield reduces some origin requests, but the over-specific cache key keeps the hit ratio low.",
      "Correct — a minimal cache key lets CloudFront reuse cached pages, raising the hit ratio and offloading the origin.",
      "A lower TTL causes objects to expire sooner, which lowers the hit ratio further."
    ]
  },
  {
    id: 1109,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A multiplayer gaming company runs UDP-based game servers on Amazon EC2 behind Network Load Balancers in two AWS Regions. Players worldwide need lower latency and jitter, a fixed set of static IP addresses for firewall allow-listing, and fast failover between Regions. Which solution meets these requirements?",
    options: [
      "Create an Amazon CloudFront distribution with the NLBs as custom origins.",
      "Configure Amazon Route 53 latency-based routing to the DNS names of the NLBs.",
      "Deploy additional game servers in AWS Local Zones near the largest player bases.",
      "Create an AWS Global Accelerator with an endpoint group for each Region's NLB."
    ],
    correct: [3],
    explanation: "Global Accelerator provides two static anycast IP addresses, routes TCP and UDP traffic from the nearest edge location over the AWS backbone, and fails over between Regional endpoints within seconds without relying on DNS caching. CloudFront also uses edge locations, but it serves HTTP and HTTPS content and cannot carry UDP game traffic.",
    optionExplanations: [
      "CloudFront handles HTTP and HTTPS traffic and does not proxy UDP game sessions.",
      "DNS-based routing exposes changing regional IPs and failover depends on DNS caching, so it is slower and gives no single static IP set.",
      "Local Zones can reduce latency for some players but do not provide static global IPs or automatic Regional failover.",
      "Correct — Global Accelerator offers static anycast IPs, UDP support, backbone routing and fast Regional failover."
    ]
  },
  {
    id: 1110,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company stores sales data in Amazon Redshift. Thousands of business users across the company need interactive dashboards with filters and drill-downs, and usage varies widely from day to day. The company does not want to provision or manage any BI servers. Which solution meets these requirements?",
    options: [
      "Run a BI tool on an Auto Scaling group of EC2 instances that connects to Redshift.",
      "Use Amazon QuickSight dashboards connected to the Redshift cluster as a data source.",
      "Schedule Amazon Athena queries that write CSV reports to an S3 bucket for users.",
      "Publish Redshift query results to Amazon OpenSearch Service and share the index."
    ],
    correct: [1],
    explanation: "Amazon QuickSight is a serverless BI service that connects to Redshift and scales to thousands of users with interactive dashboards, and it can be billed per session for occasional readers. Running a BI tool on EC2 meets the functional need but adds server management.",
    optionExplanations: [
      "A self-managed BI tool on EC2 works, but the company would provision, patch and scale the servers, which it wants to avoid.",
      "Correct — QuickSight is fully managed, connects natively to Redshift, and scales automatically for many dashboard users.",
      "Static CSV reports are not interactive dashboards with filters and drill-downs.",
      "OpenSearch Service is a search and log analytics engine; it does not replace a BI dashboard layer over Redshift for business users."
    ]
  },
  {
    id: 1111,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company has dozens of VPCs across several AWS accounts in one Region and connects to its data center with AWS Direct Connect. The full mesh of VPC peering connections has become hard to manage, and new VPCs are added every month. The company needs a hub-and-spoke network that scales with the LEAST operational overhead. Which solution meets these requirements?",
    options: [
      "Deploy AWS Transit Gateway, and attach the VPCs and a Direct Connect gateway.",
      "Keep VPC peering and automate new peering routes with AWS Lambda functions.",
      "Build a transit VPC with third-party router appliances running on EC2.",
      "Create AWS PrivateLink endpoint services between every pair of VPCs."
    ],
    correct: [0],
    explanation: "Transit Gateway acts as a managed regional hub: each VPC and the Direct Connect gateway attach once, and route tables control traffic between them, so adding a VPC requires one attachment instead of many peering connections. A transit VPC with router appliances achieves hub-and-spoke routing, but the company must operate, scale and make the appliances highly available itself.",
    optionExplanations: [
      "Correct — Transit Gateway is a managed hub that scales to many VPCs and on-premises connections.",
      "Peering is non-transitive and the number of connections grows quadratically, so automation still leaves a complex mesh.",
      "Self-managed router appliances add licensing, patching and availability work compared with a managed hub.",
      "PrivateLink exposes individual services, not full network routing, and pairwise endpoints would not scale."
    ]
  },
  {
    id: 1112,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company receives daily files from hundreds of business partners who can only send data over SFTP. The company currently runs and patches its own SFTP servers on Amazon EC2, which often become overloaded. The files must land in Amazon S3 for downstream processing. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use AWS Transfer Family with an SFTP endpoint backed by Amazon S3.",
      "Move the SFTP servers into an Auto Scaling group behind a Network Load Balancer.",
      "Ask partners to upload with AWS DataSync agents installed in their own data centers.",
      "Deploy an S3 File Gateway and give partners access to its file shares over SMB."
    ],
    correct: [0],
    explanation: "AWS Transfer Family provides a fully managed, automatically scaling SFTP (and FTPS/FTP/AS2) endpoint that writes directly to Amazon S3, so the company no longer runs or patches servers. Scaling the EC2-based SFTP fleet would help capacity but keeps all the operational work.",
    optionExplanations: [
      "Correct — Transfer Family is a managed SFTP service backed by Amazon S3; it scales automatically and removes server management.",
      "An Auto Scaling group with an NLB improves capacity, but the company would still build, patch and operate the SFTP servers.",
      "DataSync requires agents and AWS access on the partners' side; the partners can only use SFTP, so this does not meet the requirement.",
      "S3 File Gateway exposes NFS/SMB shares for on-premises applications; it is not an SFTP endpoint for external partners."
    ]
  },
  {
    id: 1113,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A company runs a distributed in-memory analytics application on Amazon EC2 instances in a single Availability Zone. The nodes exchange large volumes of data and need the highest possible network throughput and the lowest latency between them. Which combination of actions should a solutions architect take? (Select TWO)",
    options: [
      "Launch the instances in a spread placement group across distinct racks.",
      "Attach additional elastic network interfaces to each instance for bandwidth.",
      "Use current-generation instance types with enhanced networking through ENA.",
      "Assign Elastic IP addresses and communicate over the public IP addresses.",
      "Launch the instances in a cluster placement group in the Availability Zone."
    ],
    correct: [2, 4],
    explanation: "Enhanced networking with the Elastic Network Adapter provides higher bandwidth, higher packet rates and lower latency using SR-IOV, and a cluster placement group places instances close together for the lowest node-to-node latency and highest throughput. Spread placement groups optimize for fault isolation rather than performance, and extra network interfaces do not raise an instance's bandwidth limit.",
    optionExplanations: [
      "Spread placement deliberately separates instances across racks, increasing latency between nodes.",
      "Instance bandwidth is determined by the instance type, so additional interfaces do not add throughput.",
      "Correct — ENA-based enhanced networking increases bandwidth and packet rates while lowering latency.",
      "Routing internal traffic through public IP addresses adds hops and data transfer charges without improving performance.",
      "Correct — a cluster placement group provides low-latency, high-throughput networking between instances."
    ]
  },
  {
    id: 1114,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A global website is served through Amazon CloudFront. On every viewer request, the company must rewrite URLs and redirect users based on a device-type request header. The logic is simple, makes no network calls, and must run with minimal latency at very high request volumes at the lowest cost. Which solution meets these requirements?",
    options: [
      "Lambda@Edge functions associated with the origin request and response events",
      "The same logic implemented in the origin application behind the load balancer",
      "An AWS WAF web ACL associated with the distribution to rewrite and redirect",
      "CloudFront Functions associated with the viewer request event"
    ],
    correct: [3],
    explanation: "CloudFront Functions run lightweight JavaScript at edge locations on viewer events with sub-millisecond startup and are designed for high-volume tasks such as URL rewrites, redirects and header manipulation, at a lower cost than Lambda@Edge. Lambda@Edge can do the same work, but it has higher latency and cost, and origin events do not run for requests served from cache.",
    optionExplanations: [
      "Lambda@Edge is heavier and costlier, and origin-facing events only run on cache misses, not on every viewer request.",
      "Origin logic adds a round trip to the origin for each request and does not run for cached responses.",
      "AWS WAF inspects and filters requests for security; it is not designed to rewrite URLs or perform device-based redirects.",
      "Correct — CloudFront Functions provide very low-latency, low-cost execution on every viewer request."
    ]
  },
  {
    id: 1115,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company collects clickstream events from its web servers. The events must be delivered to Amazon S3 in near-real time and converted to Apache Parquet so that analysts can query them with Amazon Athena. The company does not want to write or operate custom consumer code. Which solution meets these requirements with the LEAST operational overhead?",
    options: [
      "Use Kinesis Data Streams with a KCL consumer on EC2 that writes Parquet to S3.",
      "Use Amazon Data Firehose with record format conversion to Parquet into S3.",
      "Use an Amazon SQS queue with a Lambda function that batches events into S3.",
      "Use Amazon MSK with a self-managed Kafka Connect cluster that writes to S3."
    ],
    correct: [1],
    explanation: "Amazon Data Firehose is a fully managed delivery service that buffers streaming records, converts them to Parquet using a schema from the AWS Glue Data Catalog, and writes them to S3 without any consumer code. Kinesis Data Streams is suited to custom real-time processing, but it requires building and running consumer applications to land data in S3.",
    optionExplanations: [
      "A KCL consumer is custom code running on servers that the company must build, scale and maintain.",
      "Correct — Firehose provides managed buffering, Parquet conversion and delivery to S3 with no code.",
      "The Lambda function is custom code that must handle batching and Parquet conversion itself.",
      "Self-managed Kafka Connect adds cluster management, and MSK itself is more than this delivery task requires."
    ]
  },
  {
    id: 1116,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs Apache Kafka in its data center, and dozens of producer and consumer applications use the Kafka APIs. The company wants to move its streaming platform to AWS without rewriting the applications and wants to stop managing broker infrastructure. Which solution meets these requirements?",
    options: [
      "Create an Amazon MSK cluster and point the applications to its bootstrap brokers.",
      "Use Amazon Kinesis Data Streams and refactor the producers to use the KPL.",
      "Replace each Kafka topic with an Amazon SQS FIFO queue for the consumers.",
      "Run Kafka on EC2 instances in an Auto Scaling group across Availability Zones."
    ],
    correct: [0],
    explanation: "Amazon MSK is a fully managed, Apache Kafka-compatible service, so existing producers and consumers keep using the Kafka APIs and AWS operates the brokers. Kinesis Data Streams is also a managed streaming service, but it uses a different API, so every application would have to be modified.",
    optionExplanations: [
      "Correct — MSK is Kafka-compatible, so applications only change their broker endpoints.",
      "Kinesis uses its own API, requiring producer and consumer code changes.",
      "SQS has different semantics and APIs from Kafka, so all applications would need to be rewritten.",
      "Self-managed Kafka on EC2 keeps the broker management burden the company wants to remove."
    ]
  },
  {
    id: 1117,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A company stores years of application logs in Amazon S3 as gzip-compressed CSV files under a single prefix. Amazon Athena queries usually filter on a date range and read only a few columns, but they scan the entire dataset and are slow and expensive. Which combination of actions will improve query performance and reduce cost? (Select TWO)",
    options: [
      "Convert the data to a columnar format such as Apache Parquet.",
      "Move the data to S3 Standard-IA to lower the cost of each scan.",
      "Store the files uncompressed so Athena can skip decompression.",
      "Partition the data by date and register the partitions in the Data Catalog.",
      "Run the queries from an EC2 instance in the bucket's Availability Zone."
    ],
    correct: [0, 3],
    explanation: "Columnar formats like Parquet let Athena read only the columns a query references and skip data using statistics, and partitioning by date lets Athena prune all partitions outside the requested range. Both sharply reduce the bytes scanned, which drives both query time and Athena cost. Removing compression or changing storage class increases the amount of data read or adds retrieval charges.",
    optionExplanations: [
      "Correct — Parquet enables column pruning and compression, reducing bytes scanned.",
      "Standard-IA adds per-GB retrieval charges and does not reduce the data Athena scans.",
      "Uncompressed files increase the bytes scanned, making queries slower and more expensive.",
      "Correct — date partitions let Athena skip data outside the queried date range.",
      "Athena is a serverless service; where the query is submitted from does not change how much data it scans."
    ]
  },
  {
    id: 1118,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company's Amazon Redshift data warehouse holds the most recent two years of sales data. Older historical data, several petabytes in size, is stored in Amazon S3 in Parquet format and is queried rarely. Analysts need to join current and historical data in SQL queries without loading the historical data into the cluster. Which solution is the MOST cost-effective?",
    options: [
      "Load the historical data into the cluster and add RA3 nodes for capacity.",
      "Query historical data with Athena and export the results to Redshift nightly.",
      "Create Redshift Spectrum external tables over the S3 data and join them.",
      "Move the historical data into Amazon DynamoDB and use Redshift federated queries."
    ],
    correct: [2],
    explanation: "Redshift Spectrum queries data in place in S3 through external tables, so analysts can join it with local Redshift tables in one SQL statement and pay only for the data scanned on the rare occasions it is queried. Loading petabytes into the cluster would also work but adds large storage and compute cost for rarely used data.",
    optionExplanations: [
      "Loading rarely queried petabytes into Redshift managed storage adds cost that the access pattern does not justify.",
      "Exporting Athena results nightly adds a pipeline and does not allow ad hoc joins with current data in a single query.",
      "Correct — Spectrum joins S3 data with warehouse tables in place, without loading it.",
      "DynamoDB is not designed for analytical scans, and federated queries do not target DynamoDB, so this adds cost and complexity."
    ]
  },
  {
    id: 1119,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A company must migrate 600 TB of file data from an on-premises NAS to Amazon S3 within a few weeks. The internet connection has limited bandwidth and is already heavily used. After the bulk transfer, files that change on premises must be synchronized to S3 incrementally until the final cutover. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Use S3 Transfer Acceleration to upload the bulk data over the internet.",
      "Use AWS Snowball Edge devices to move the initial bulk data offline.",
      "Use AWS Transfer Family with SFTP to upload the bulk data from the NAS.",
      "Use an AWS Storage Gateway Volume Gateway in cached mode for the files.",
      "Use AWS DataSync to synchronize incremental changes to S3 until cutover."
    ],
    correct: [1, 4],
    explanation: "Snowball Edge devices move hundreds of terabytes offline, avoiding the constrained internet link for the bulk copy. DataSync then transfers only changed files on a schedule, with integrity verification, until cutover. Any online method for the bulk data would still be limited by the busy, low-bandwidth connection.",
    optionExplanations: [
      "Transfer Acceleration still sends all data over the limited internet link, so 600 TB would not finish in weeks.",
      "Correct — Snowball Edge transfers the bulk data offline without consuming network bandwidth.",
      "Transfer Family provides managed SFTP endpoints for partners, but the bulk data would still cross the constrained link.",
      "Volume Gateway presents block storage volumes, not files as S3 objects, so it does not fit a NAS-to-S3 file migration.",
      "Correct — DataSync efficiently copies only changed files and verifies them during the sync period."
    ]
  },
  {
    id: 1120,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company receives JSON files from multiple sources in Amazon S3 every day. It needs to discover the schemas automatically, make the data queryable with Amazon Athena, and clean the data and convert it to Parquet. The company wants to use serverless services with the LEAST operational overhead. Which solution meets these requirements?",
    options: [
      "Run a persistent Amazon EMR cluster with Hive to catalog and transform the data.",
      "Write Lambda functions that infer schemas and create the Athena tables manually.",
      "Load the files into a provisioned Redshift cluster and transform with stored procedures.",
      "Use AWS Glue crawlers to populate the Data Catalog and Glue ETL jobs to convert data."
    ],
    correct: [3],
    explanation: "AWS Glue crawlers infer schemas and create tables in the Glue Data Catalog that Athena uses directly, and serverless Glue ETL jobs clean and convert the data to Parquet without any infrastructure to manage. EMR can run the same transformations, but a persistent cluster must be sized, patched and paid for even when idle.",
    optionExplanations: [
      "A persistent EMR cluster is not serverless and requires ongoing cluster management.",
      "Custom schema inference code is fragile and must be maintained as sources change.",
      "A provisioned Redshift cluster is not serverless and moves data out of the S3 data lake that Athena queries.",
      "Correct — Glue crawlers, the Data Catalog and Glue ETL provide serverless discovery and transformation."
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // DOMAIN: Design Cost-Optimized Architectures  (20% — 30 questions)
  // ────────────────────────────────────────────────────────────────
  {
    id: 1121,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A media company stores millions of objects in Amazon S3 Standard. Some objects are read frequently for months, while others are never read again after upload, and the access pattern cannot be predicted for any individual object. The company wants to reduce storage costs without paying retrieval fees and without building any analysis or automation itself. Which solution will meet these requirements?",
    options: [
      "Create a lifecycle rule that transitions all objects to S3 Standard-IA after 30 days.",
      "Use S3 Storage Lens to find cold prefixes and move them to S3 One Zone-IA every month.",
      "Transition the objects to S3 Intelligent-Tiering so they move between access tiers automatically.",
      "Create a lifecycle rule that transitions all objects to S3 Glacier Instant Retrieval after 90 days."
    ],
    correct: [2],
    explanation: "S3 Intelligent-Tiering monitors access per object and automatically moves objects between frequent and infrequent access tiers, with no retrieval fees, which fits unknown or changing access patterns. A blanket lifecycle transition to Standard-IA or Glacier Instant Retrieval would charge retrieval fees on the objects that keep being read frequently.",
    optionExplanations: [
      "Objects that remain frequently accessed would incur Standard-IA retrieval fees, which can erase the storage savings when access is unpredictable.",
      "This requires recurring manual analysis and moves, and One Zone-IA adds retrieval fees and stores data in a single Availability Zone.",
      "Correct — Intelligent-Tiering automatically optimizes the tier per object based on access, without retrieval fees or custom automation.",
      "Glacier Instant Retrieval has higher retrieval charges than Standard-IA, so frequently read objects would become more expensive."
    ]
  },
  {
    id: 1122,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company stores application audit logs in Amazon S3. Logs are read often during the first 30 days, occasionally (with immediate access required) until they are 1 year old, and almost never afterward, when a retrieval time of up to 48 hours is acceptable. Regulations require the logs to be kept for 7 years and then deleted. Which solution is the MOST cost-effective?",
    options: [
      "Transition to S3 Standard-IA at 30 days and S3 Glacier Deep Archive at 1 year, then expire at 7 years.",
      "Transition to S3 Glacier Flexible Retrieval at 30 days, then expire the objects at 7 years.",
      "Transition to S3 One Zone-IA at 30 days and S3 Glacier Deep Archive at 1 year, with no expiration.",
      "Store the logs in S3 Intelligent-Tiering with archive tiers enabled and delete them manually at 7 years."
    ],
    correct: [0],
    explanation: "The access pattern is known in advance, so lifecycle rules can move logs to Standard-IA while they still need immediate occasional access, then to Glacier Deep Archive (the lowest-cost class, with retrievals within 48 hours) and finally expire them at 7 years. Intelligent-Tiering adds a per-object monitoring charge that brings no benefit for a predictable pattern and would require manual deletion.",
    optionExplanations: [
      "Correct — The rules match each access phase to the cheapest suitable class and automatically delete the logs when retention ends.",
      "Glacier Flexible Retrieval does not provide immediate access for the occasional reads required during the first year.",
      "One Zone-IA is less resilient for audit data, and without expiration the company keeps paying for logs it must delete after 7 years.",
      "Intelligent-Tiering charges monitoring fees for a predictable pattern, and manual deletion adds operational overhead and risk."
    ]
  },
  {
    id: 1123,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A hospital stores medical images in Amazon S3. After 60 days an image is typically accessed about once per quarter, but when a doctor requests it, the image must be returned within milliseconds. The images must be retained for 10 years. Which storage strategy for images older than 60 days is the MOST cost-effective?",
    options: [
      "Use S3 Glacier Flexible Retrieval and request expedited retrievals when an image is needed.",
      "Keep the images in S3 Standard-IA for the full retention period.",
      "Use S3 Glacier Deep Archive and schedule bulk retrievals before patient appointments.",
      "Use S3 Glacier Instant Retrieval for all images older than 60 days."
    ],
    correct: [3],
    explanation: "S3 Glacier Instant Retrieval is designed for long-lived data accessed about once a quarter that still needs millisecond retrieval, and it has lower storage cost than Standard-IA. Glacier Flexible Retrieval expedited retrievals take minutes, not milliseconds.",
    optionExplanations: [
      "Expedited retrievals typically complete in minutes, which does not meet the millisecond access requirement.",
      "Standard-IA meets the latency requirement but costs more to store than Glacier Instant Retrieval for data read only quarterly.",
      "Deep Archive retrievals take hours, and not every request can be anticipated by scheduling around appointments.",
      "Correct — Glacier Instant Retrieval gives millisecond access at a lower storage price for data accessed roughly once per quarter."
    ]
  },
  {
    id: 1124,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company runs hundreds of Amazon EC2 instances with gp2 Amazon EBS volumes. Many volumes were made larger than needed only to obtain more IOPS. The company also keeps monthly EBS snapshots for 5 years for compliance, and snapshots older than 90 days are almost never restored. Which combination of actions will reduce storage costs the MOST? (Select TWO)",
    options: [
      "Migrate the volumes to gp3 and provision the required IOPS independently of volume size.",
      "Migrate the volumes to io2 Block Express to obtain consistent high IOPS at any size.",
      "Copy the snapshots to a second AWS Region and delete the originals in the primary Region.",
      "Move snapshots older than 90 days to the Amazon EBS Snapshots Archive tier.",
      "Convert the volumes to st1 Throughput Optimized HDD volumes to lower the per-GB price."
    ],
    correct: [0, 3],
    explanation: "gp3 has a lower per-GB price than gp2 and decouples IOPS and throughput from size, so volumes no longer need to be oversized for performance. EBS Snapshots Archive is a low-cost tier for snapshots retained long term and rarely restored, accepting a longer restore time. io2 would raise costs, and st1 cannot serve as a boot volume and performs poorly for random I/O.",
    optionExplanations: [
      "Correct — gp3 is cheaper per GB than gp2 and lets the company provision IOPS without paying for unneeded capacity.",
      "io2 Block Express is a premium volume type and would increase costs for workloads that gp3 can serve.",
      "Copying snapshots to another Region adds cross-Region transfer and does not lower the storage price.",
      "Correct — The archive tier substantially lowers the cost of rarely restored snapshots kept for compliance.",
      "st1 cannot be used as a boot volume and is unsuitable for the random IOPS these workloads need."
    ]
  },
  {
    id: 1125,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company has an S3 bucket with versioning enabled. Applications overwrite objects frequently, and many large multipart uploads fail partway through. The amount of current data is stable, but the S3 storage bill keeps growing. The company must keep versioning for recent changes. Which solution will reduce costs with the LEAST operational overhead?",
    options: [
      "Suspend versioning on the bucket and run a weekly script that deletes old object versions.",
      "Add lifecycle rules to expire old noncurrent versions and abort incomplete multipart uploads.",
      "Enable S3 Intelligent-Tiering so noncurrent versions and orphaned upload parts move to cheaper tiers.",
      "Enable S3 Object Lock in governance mode to prevent unnecessary object versions from being created."
    ],
    correct: [1],
    explanation: "Noncurrent versions and parts of incomplete multipart uploads are both billed as storage, and lifecycle rules can automatically expire noncurrent versions after a chosen period and abort incomplete uploads. Intelligent-Tiering does not delete anything and does not apply to the parts of incomplete multipart uploads, so the growth would continue.",
    optionExplanations: [
      "Suspending versioning removes the protection the company must keep, and a custom script adds operational overhead.",
      "Correct — Lifecycle rules remove the hidden storage automatically while retaining versioning for recent changes.",
      "Tiering may lower the price of old versions but keeps them forever, and incomplete upload parts are not managed by it.",
      "Object Lock prevents deletion of versions, so it would make the storage growth worse rather than reduce it."
    ]
  },
  {
    id: 1126,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company uses an Amazon EFS file system mounted by EC2 instances in multiple Availability Zones. Files are accessed heavily for a few days after creation and then rarely, but the application must continue to read every file from the same file system path when needed. The file system must remain highly available. Which solution is the MOST cost-effective?",
    options: [
      "Run a scheduled script that copies files older than 30 days to Amazon S3 and deletes them from EFS.",
      "Re-create the file system using EFS One Zone storage to lower the price of every file.",
      "Configure an EFS lifecycle policy to move files not accessed for 30 days to EFS Infrequent Access.",
      "Switch the file system to Provisioned Throughput mode to reduce the cost of burst credits."
    ],
    correct: [2],
    explanation: "EFS lifecycle management transparently moves files that have not been accessed for a set period to the lower-cost Infrequent Access storage class, while they stay at the same path in the same file system. EFS One Zone is cheaper but stores data in a single Availability Zone, which conflicts with the high availability requirement.",
    optionExplanations: [
      "Moving files to S3 changes their location, so the application could no longer read them from the same path, and the script adds overhead.",
      "One Zone storage keeps data in a single Availability Zone and does not meet the high availability requirement.",
      "Correct — Lifecycle management lowers storage cost automatically and keeps the files accessible at the same path.",
      "Provisioned Throughput adds a throughput charge and does nothing to reduce the cost of storing rarely accessed files."
    ]
  },
  {
    id: 1127,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company's on-premises file servers are almost full, and data grows every month. Users need low-latency access to recently used files over SMB, while older files are rarely opened. Buying a new storage array would require a large capital expense. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "Deploy Amazon S3 File Gateway on premises so file shares are stored in S3 and cached locally.",
      "Buy additional on-premises NAS capacity and back it up to S3 Glacier Deep Archive.",
      "Use AWS DataSync to copy all files to Amazon EFS and mount EFS from the office over the internet.",
      "Order AWS Snowball Edge devices every month to offload older files to Amazon S3."
    ],
    correct: [0],
    explanation: "S3 File Gateway presents SMB shares on premises, keeps recently used data in a local cache for low latency, and stores all data durably in S3 with pay-as-you-go pricing and lifecycle options. Expanding the NAS still requires the capital expense the company wants to avoid.",
    optionExplanations: [
      "Correct — The gateway removes the need for new local capacity while keeping hot files fast through the local cache.",
      "Additional NAS capacity is exactly the capital expense the company wants to avoid; backups do not free primary storage.",
      "EFS is an NFS service intended for access from within AWS or over private connectivity, and access from the office would be slow without a local cache.",
      "Recurring Snowball shipments add operational effort and leave offloaded files unavailable through the existing shares."
    ]
  },
  {
    id: 1128,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A research institute publishes large genomic datasets in an Amazon S3 bucket. Partner organizations, each with their own AWS account, download the data frequently, and the institute's data transfer and request charges have become significant. The institute wants the partners to pay for their own downloads. Which solution will meet this requirement?",
    options: [
      "Serve the datasets through Amazon CloudFront and issue signed URLs to each partner organization.",
      "Replicate the bucket into each partner's account by using S3 Cross-Region Replication.",
      "Enable S3 Transfer Acceleration and use cost allocation tags to bill each partner for downloads.",
      "Enable Requester Pays and have partners access the bucket with their own AWS credentials."
    ],
    correct: [3],
    explanation: "With Requester Pays, the requester's AWS account pays the request and data transfer charges, while the bucket owner pays only for storage. CloudFront with signed URLs controls access but leaves the institute paying for all delivery.",
    optionExplanations: [
      "CloudFront distributes the data, but the institute still pays for all data transfer and requests.",
      "The institute would pay for replication requests and transfer, and the cost problem would simply move.",
      "Transfer Acceleration adds cost, and cost allocation tags only organize the institute's own bill; they cannot charge another account.",
      "Correct — Requester Pays shifts download and request charges to the partners' AWS accounts."
    ]
  },
  {
    id: 1129,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company renders video frames every night on a fleet of On-Demand EC2 instances. The rendering software checkpoints its progress, so any interrupted job can resume on another instance, and the jobs only need to finish within an 8-hour window. The instances are idle during the day. Which solution is the MOST cost-effective?",
    options: [
      "Purchase Standard Reserved Instances for the instance types used by the nightly jobs.",
      "Run the jobs on Spot Instances across several instance types and Availability Zones.",
      "Run the jobs on Dedicated Hosts so that capacity is reserved for the company each night.",
      "Create On-Demand Capacity Reservations to guarantee the capacity needed every night."
    ],
    correct: [1],
    explanation: "Fault-tolerant, flexible batch jobs that checkpoint their work are ideal for Spot Instances, which offer the largest discount; diversifying instance types and Availability Zones reduces the impact of interruptions. Reserved Instances are billed for every hour of the term, so they waste money on instances that are idle during the day.",
    optionExplanations: [
      "Reserved Instances are charged 24 hours a day, so the discount is wasted while the fleet is idle during the day.",
      "Correct — Spot Instances give the deepest discount, and checkpointing makes interruptions acceptable.",
      "Dedicated Hosts are for licensing or compliance needs and cost more than shared-tenancy instances.",
      "Capacity Reservations guarantee capacity at On-Demand prices and provide no discount on their own."
    ]
  },
  {
    id: 1130,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company runs a stateless web application in an EC2 Auto Scaling group. Ten instances are needed 24 hours a day, every day, and additional instances are added during unpredictable daytime peaks. The application tolerates the loss of individual instances. The company expects this workload to run for several years. Which combination of actions is the MOST cost-effective? (Select TWO)",
    options: [
      "Cover the steady baseline usage with a Compute Savings Plan.",
      "Run the baseline capacity on Dedicated Instances for isolation.",
      "Use a mixed instances policy that launches Spot Instances above the baseline.",
      "Purchase Reserved Instances that cover peak capacity as well as the baseline.",
      "Replace scaling policies with a fixed group size equal to peak demand."
    ],
    correct: [0, 2],
    explanation: "A Savings Plan commitment sized to the always-on baseline gives a discount on usage that runs constantly, and a mixed instances policy can fill the variable peak capacity with Spot Instances because the stateless application tolerates interruptions. Reserving capacity for peaks would pay for capacity that sits unused most of the time.",
    optionExplanations: [
      "Correct — The baseline runs continuously for years, so a commitment-based discount fully pays off.",
      "Dedicated Instances cost more and isolation is not a stated requirement.",
      "Correct — Spot Instances lower the cost of the interruption-tolerant peak capacity.",
      "Peak capacity is used only part of the day, so reservations for it would be partly wasted.",
      "A fixed peak-sized group pays for idle instances outside peak periods."
    ]
  },
  {
    id: 1131,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company has a stable hourly compute spend that it is willing to commit to for 3 years. During that time it plans to change EC2 instance families, move some workloads to another AWS Region, and migrate several services to AWS Fargate and AWS Lambda. Which purchasing option will provide a discount while supporting these changes?",
    options: [
      "Compute Savings Plans",
      "EC2 Instance Savings Plans",
      "Standard Reserved Instances with regional scope",
      "Convertible Reserved Instances"
    ],
    correct: [0],
    explanation: "Compute Savings Plans apply automatically to EC2 usage regardless of instance family, size, Region, or operating system, and also to Fargate and Lambda usage. Convertible Reserved Instances can be exchanged for other EC2 configurations, but they never cover Fargate or Lambda.",
    optionExplanations: [
      "Correct — Compute Savings Plans follow the spend across instance families, Regions, Fargate, and Lambda.",
      "EC2 Instance Savings Plans are tied to one instance family in one Region and do not cover Fargate or Lambda.",
      "Standard Reserved Instances apply only to a specific EC2 configuration and cannot cover Fargate or Lambda.",
      "Convertible Reserved Instances can be exchanged among EC2 configurations, but they do not apply to Fargate or Lambda."
    ]
  },
  {
    id: 1132,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs hundreds of EC2 instances across many accounts in AWS Organizations. Finance suspects that many instances, EBS volumes, and Lambda functions are overprovisioned. The company wants data-driven sizing recommendations based on actual utilization with the LEAST operational effort. Which solution will meet these requirements?",
    options: [
      "Install the CloudWatch agent everywhere and build dashboards to compare utilization manually.",
      "Use AWS Trusted Advisor service quota checks to find resources that can be downsized.",
      "Use AWS Cost Explorer to list the resources with the highest monthly spend in each account.",
      "Enable AWS Compute Optimizer for the organization and review its rightsizing recommendations."
    ],
    correct: [3],
    explanation: "AWS Compute Optimizer analyzes utilization metrics and recommends optimal configurations for EC2 instances, Auto Scaling groups, EBS volumes, Lambda functions, and more, and it can be enabled for all accounts in an organization. Building dashboards and comparing utilization manually would work but requires far more effort.",
    optionExplanations: [
      "Manual analysis across hundreds of resources is labor-intensive and slower than a managed recommendation service.",
      "Service quota checks report how close usage is to account limits; they do not produce sizing recommendations.",
      "Highest spend does not indicate overprovisioning, and this view does not recommend new sizes for volumes or functions.",
      "Correct — Compute Optimizer provides utilization-based rightsizing recommendations across the organization with no custom tooling."
    ]
  },
  {
    id: 1133,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs containerized Java microservices on Amazon ECS using x86-based EC2 instances. The services run on the JVM and have no native x86 dependencies, and the load is sustained throughout the day. The company wants better price-performance for this compute with minimal application changes. Which solution will meet these requirements?",
    options: [
      "Move the services to x86 burstable instances running in unlimited credit mode.",
      "Move the services to fewer, larger x86 instances to increase task density.",
      "Rebuild the images for arm64 and run the services on AWS Graviton-based instances.",
      "Move the services to the newest x86 instance family with local NVMe instance storage."
    ],
    correct: [2],
    explanation: "AWS Graviton-based instances offer better price-performance than comparable x86 instances, and JVM workloads without native dependencies usually need only a rebuild of the container images for arm64. Burstable instances are a poor fit for sustained load, since unlimited mode charges for surplus CPU credits.",
    optionExplanations: [
      "Sustained CPU usage on burstable instances in unlimited mode incurs extra credit charges, removing the savings.",
      "Larger instances of the same family keep the same price per vCPU and do not improve price-performance.",
      "Correct — Graviton provides better price-performance, and portable JVM code needs minimal changes.",
      "Local NVMe storage is not required by the services and adds cost without improving compute price-performance."
    ]
  },
  {
    id: 1134,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An internal API receives a few hundred requests per day in unpredictable bursts, and each request completes in under 2 seconds. The API currently runs on two EC2 instances behind an Application Load Balancer, 24 hours a day. The company wants to minimize cost while keeping the API highly available. Which solution will meet these requirements?",
    options: [
      "Replace the two instances with one larger Reserved Instance behind the load balancer.",
      "Rewrite the API as AWS Lambda functions invoked through Amazon API Gateway.",
      "Move the API to Amazon ECS on AWS Fargate with two tasks running continuously.",
      "Keep the instances and add an Auto Scaling group with a minimum size of two."
    ],
    correct: [1],
    explanation: "Lambda behind API Gateway charges only per request and execution time, so a few hundred short requests a day cost very little, and both services are highly available across Availability Zones by default. Any option that keeps capacity running 24 hours a day pays for mostly idle resources.",
    optionExplanations: [
      "One instance removes high availability, and it still runs and is paid for around the clock.",
      "Correct — Pay-per-use Lambda fits a low, bursty request volume and is highly available without managing servers.",
      "Two continuously running Fargate tasks are still always-on capacity that is idle most of the day.",
      "An Auto Scaling group with a minimum of two keeps the same always-on cost as today."
    ]
  },
  {
    id: 1135,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs image-processing workers as Amazon ECS tasks on AWS Fargate. The workers poll an Amazon SQS queue, the processing is idempotent, and if a task is stopped the message becomes visible again and is processed by another task. The company wants to reduce compute costs with the LEAST operational overhead. Which solution will meet these requirements?",
    options: [
      "Use a capacity provider strategy that runs the worker tasks on Fargate Spot.",
      "Move the workers to an ECS cluster built on self-managed EC2 Spot Instances.",
      "Purchase an EC2 Instance Savings Plan to cover the Fargate worker tasks.",
      "Increase the CPU and memory of each task so that messages process faster."
    ],
    correct: [0],
    explanation: "Fargate Spot runs interruption-tolerant tasks on spare capacity at a discount, and the SQS-based design already handles interrupted tasks; switching only requires a capacity provider strategy. Moving to self-managed EC2 Spot Instances could also save money but adds instance management overhead.",
    optionExplanations: [
      "Correct — Fargate Spot gives a large discount with no servers to manage, and the queue tolerates interruptions.",
      "Self-managed EC2 instances add patching, scaling, and capacity management overhead.",
      "EC2 Instance Savings Plans apply only to EC2 usage and do not cover Fargate.",
      "Larger tasks cost more per hour and do not necessarily lower the total cost of processing."
    ]
  },
  {
    id: 1136,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company's development and test EC2 instances are used only from 8 AM to 6 PM on weekdays but run continuously. All instances are tagged with their environment. The company wants to reduce their cost with the LEAST operational overhead. Which solution will meet these requirements?",
    options: [
      "Purchase Reserved Instances for the development and test instances to lower their hourly rate.",
      "Ask developers to stop their instances manually at the end of each workday.",
      "Convert the development and test instances to Spot Instances that terminate when unused.",
      "Use Instance Scheduler on AWS to stop and start the tagged instances on a schedule."
    ],
    correct: [3],
    explanation: "Stopping instances outside business hours removes most of their compute charges, and Instance Scheduler on AWS automates stop and start actions for tagged instances on defined schedules. Reserved Instances lower the hourly rate but are billed for every hour, including the many hours the instances are not needed.",
    optionExplanations: [
      "Reserved Instances are paid for 24 hours a day, so they do not capture the savings of turning instances off at night and on weekends.",
      "Manual stopping is unreliable and depends on every developer remembering it.",
      "Spot Instances can be interrupted at any time, and terminated instances lose their configuration and data.",
      "Correct — Scheduled, tag-based stop and start automation eliminates idle hours without manual effort."
    ]
  },
  {
    id: 1137,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An internal reporting application uses an Amazon Aurora MySQL-compatible cluster. The database is heavily used for a few hours at month-end and is almost idle the rest of the month, but the DB instance is sized for the month-end peak. The company wants to lower costs with minimal administration. Which solution will meet these requirements?",
    options: [
      "Purchase a Reserved Instance for the current Aurora DB instance class.",
      "Add Aurora Replicas before each month-end and remove them manually afterward.",
      "Migrate the cluster to Aurora Serverless v2 with suitable capacity limits.",
      "Move the database to Amazon RDS for MySQL on a large burstable DB instance class."
    ],
    correct: [2],
    explanation: "Aurora Serverless v2 scales capacity up and down automatically in fine-grained increments, so the company pays for high capacity only during month-end and for low capacity the rest of the time. A Reserved Instance lowers the rate but still pays for peak-sized capacity all month.",
    optionExplanations: [
      "The discount still applies to an instance sized for a peak that occurs only a few hours a month.",
      "Manually adding and removing replicas each month adds administration, and the writer stays peak-sized.",
      "Correct — Serverless v2 matches capacity to the intermittent load automatically.",
      "A burstable instance can run out of CPU credits during the sustained month-end peak and remains provisioned capacity."
    ]
  },
  {
    id: 1138,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An Amazon DynamoDB table has used on-demand capacity mode since the application launched 2 years ago. Traffic is now steady and predictable, following a gradual daily cycle with no sudden spikes. Throughput charges make up most of the table's cost. Which change will reduce the cost of this table the MOST?",
    options: [
      "Keep on-demand mode and add a DynamoDB Accelerator (DAX) cluster in front of the table.",
      "Switch the table to provisioned capacity mode with auto scaling.",
      "Change the table class to DynamoDB Standard-Infrequent Access.",
      "Export the table to Amazon S3 every day and serve reads from the export."
    ],
    correct: [1],
    explanation: "For steady, predictable traffic, provisioned capacity with auto scaling that follows the daily cycle is typically much cheaper than on-demand pricing. The Standard-IA table class lowers storage cost but raises throughput cost, which is the wrong trade-off when throughput dominates the bill.",
    optionExplanations: [
      "DAX adds cluster cost, only helps reads, and does not change the per-request pricing of writes.",
      "Correct — Provisioned capacity with auto scaling suits predictable traffic and costs less than on-demand.",
      "Standard-IA reduces storage price but increases read and write costs, so it is wrong when throughput dominates.",
      "Serving reads from daily exports returns stale data and adds complexity without addressing write costs."
    ]
  },
  {
    id: 1139,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a production PostgreSQL database on a Multi-AZ Amazon RDS DB instance. The load is steady 24 hours a day, and the company will keep the same instance family and Region for at least 3 more years. High availability must be maintained. Which solution is the MOST cost-effective?",
    options: [
      "Purchase RDS Reserved Instances for the Multi-AZ DB instance with a 3-year term.",
      "Purchase a Compute Savings Plan sized to cover the RDS DB instance usage each hour.",
      "Convert the deployment to Single-AZ and take frequent automated snapshots.",
      "Migrate the database to Aurora Serverless v2 to pay only for capacity used."
    ],
    correct: [0],
    explanation: "A steady, long-lived RDS workload with a fixed instance family and Region is a good fit for RDS Reserved Instances, which significantly lower the cost compared with On-Demand pricing. Compute Savings Plans apply to EC2, Fargate, and Lambda, not to RDS DB instances.",
    optionExplanations: [
      "Correct — Reserved Instances give a large discount for a steady, multi-year RDS workload while keeping Multi-AZ.",
      "Compute Savings Plans do not apply to Amazon RDS usage.",
      "Single-AZ removes the standby and fails the high availability requirement.",
      "Serverless capacity is better for variable load; a steady 24-hour workload is usually cheaper on reserved provisioned capacity."
    ]
  },
  {
    id: 1140,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An e-commerce site stores its product catalog in Amazon RDS for MySQL. CPU utilization on the DB instance is high because the same product-detail queries are executed thousands of times per minute, and the team is considering moving to a larger instance class. The company wants to reduce database load and latency MOST cost-effectively. Which solution will meet these requirements?",
    options: [
      "Scale the DB instance up to the next larger instance class with more vCPUs and memory.",
      "Enable Multi-AZ so the standby instance can serve part of the read traffic.",
      "Change the DB storage to Provisioned IOPS SSD to increase read performance.",
      "Add an Amazon ElastiCache cluster to cache frequently requested product details."
    ],
    correct: [3],
    explanation: "Repeated identical reads are an ideal caching workload: ElastiCache serves them from memory with microsecond latency and offloads the database, so it can stay at its current size. A Multi-AZ standby does not serve read traffic, so it adds cost without reducing load.",
    optionExplanations: [
      "A larger instance costs more and only postpones the problem caused by repeated reads.",
      "A Multi-AZ standby is for failover and does not serve reads.",
      "The bottleneck is CPU from repeated queries, not storage IOPS, and Provisioned IOPS adds cost.",
      "Correct — Caching repeated reads offloads the database and lowers latency at less cost than scaling up."
    ]
  },
  {
    id: 1141,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company keeps historical order records in a large Amazon DynamoDB table. The items are read rarely, and storage now accounts for most of the table's cost. The records must remain available through the same DynamoDB API with single-digit millisecond latency. Which solution will reduce costs while meeting these requirements?",
    options: [
      "Add a DynamoDB Accelerator (DAX) cluster to reduce the reads that reach the table.",
      "Switch the table from on-demand to provisioned capacity with auto scaling.",
      "Change the table class to DynamoDB Standard-Infrequent Access (Standard-IA).",
      "Export the table to S3 Glacier Deep Archive and delete the DynamoDB table."
    ],
    correct: [2],
    explanation: "The DynamoDB Standard-IA table class lowers storage cost for tables where storage dominates, while keeping the same API, performance, and durability. Changing capacity mode affects throughput charges, which are not the main cost here.",
    optionExplanations: [
      "DAX adds cost and reduces read load, but reads are rare and storage is the main cost.",
      "Capacity mode affects throughput pricing, not storage, which is the dominant cost.",
      "Correct — Standard-IA reduces storage cost with no change to the API or latency.",
      "Deep Archive retrievals take hours, so the records would no longer be available with millisecond latency."
    ]
  },
  {
    id: 1142,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a provisioned Amazon Redshift cluster 24 hours a day. A few analysts use it to run ad-hoc SQL queries a few times per month on log data that is already exported to Amazon S3 as CSV files. The company wants to reduce costs significantly while keeping SQL access. Which solution will meet these requirements?",
    options: [
      "Query the logs in S3 with Amazon Athena after converting them to Parquet.",
      "Purchase Redshift reserved nodes for the existing cluster to lower its hourly rate.",
      "Load the logs into a smaller Amazon RDS for PostgreSQL DB instance for the analysts.",
      "Load the logs into Amazon DynamoDB and run ad-hoc scans from the analysts' tools."
    ],
    correct: [0],
    explanation: "Athena is serverless and charges per data scanned, so infrequent queries cost little and nothing runs between them; columnar formats reduce the data scanned even further. Reserved nodes still pay for a cluster that is idle almost all month.",
    optionExplanations: [
      "Correct — Athena queries the data in place with no always-on infrastructure, and Parquet reduces the data scanned.",
      "Reserved nodes lower the rate but keep paying for a cluster that is idle most of the month.",
      "An RDS instance still runs around the clock and must be loaded and maintained.",
      "DynamoDB is not designed for ad-hoc SQL analytics, and full-table scans are slow and expensive."
    ]
  },
  {
    id: 1143,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company runs 20 Amazon RDS for MySQL DB instances for development and testing. The databases are used only during business hours on weekdays, run under light load, and use the same x86 instance classes as production. Which combination of actions will reduce the cost of these databases the MOST? (Select TWO)",
    options: [
      "Purchase 3-year RDS Reserved Instances for all development DB instances.",
      "Stop the DB instances outside business hours on a schedule and start them each morning.",
      "Convert the DB instances to Multi-AZ deployments to improve availability.",
      "Move the DB storage to Provisioned IOPS SSD (io2) volumes.",
      "Downsize the DB instances to smaller Graviton-based instance classes."
    ],
    correct: [1, 4],
    explanation: "Stopping the instances during nights and weekends removes instance-hour charges for most of the week, and rightsizing lightly loaded databases to smaller Graviton-based classes lowers the cost of the remaining hours. Reserved Instances are billed whether or not the instance is running, so they conflict with stopping the databases.",
    optionExplanations: [
      "Reserved Instances are charged for every hour of the term, so they waste money on databases that are stopped most of the week.",
      "Correct — Stopped DB instances incur no instance-hour charges, only storage.",
      "Multi-AZ roughly doubles instance cost and is not needed for development and testing.",
      "io2 volumes cost more and the light load does not need provisioned IOPS.",
      "Correct — Smaller Graviton-based classes fit the light load at a lower price."
    ]
  },
  {
    id: 1144,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "EC2 instances in private subnets read large volumes of data from Amazon S3 and write results to Amazon DynamoDB in the same Region. All of this traffic currently flows through NAT gateways, and NAT gateway data processing charges are now the largest item on the bill. Which combination of steps will reduce these costs MOST cost-effectively? (Select TWO)",
    options: [
      "Replace the NAT gateways with self-managed NAT instances on larger EC2 instance types.",
      "Create a gateway VPC endpoint for Amazon S3 and add it to the private subnet route tables.",
      "Create an interface VPC endpoint for Amazon DynamoDB in each Availability Zone.",
      "Create a gateway VPC endpoint for Amazon DynamoDB and add it to the private subnet route tables.",
      "Move the instances to public subnets and assign Elastic IP addresses to them."
    ],
    correct: [1, 3],
    explanation: "Gateway VPC endpoints for S3 and DynamoDB route that traffic privately without a NAT gateway and have no hourly or data processing charges. Interface endpoints also avoid the NAT gateway, but they add hourly and per-GB charges, so they are less cost-effective than gateway endpoints.",
    optionExplanations: [
      "NAT instances add management overhead and availability risk while still sending the traffic through a NAT path.",
      "Correct — An S3 gateway endpoint removes S3 traffic from the NAT gateway at no additional charge.",
      "An interface endpoint has hourly and per-GB charges, whereas a gateway endpoint for DynamoDB has none.",
      "Correct — A DynamoDB gateway endpoint removes DynamoDB traffic from the NAT gateway at no additional charge.",
      "Public subnets expose the instances to the internet and add public IPv4 address charges."
    ]
  },
  {
    id: 1145,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a nightly analytics job on a cluster of EC2 instances that exchange very large amounts of data with each other. The Auto Scaling group spreads the nodes across three Availability Zones, and inter-AZ data transfer charges have become significant. If the job fails, it can simply be rerun the next hour. Which solution is the MOST cost-effective?",
    options: [
      "Place a Network Load Balancer between the nodes to distribute their traffic evenly.",
      "Route traffic between the nodes through a transit gateway to optimize the network path.",
      "Launch all nodes in a single Availability Zone by using a cluster placement group.",
      "Enable Elastic Fabric Adapter on the nodes while keeping them spread across three AZs."
    ],
    correct: [2],
    explanation: "Data transfer between instances in the same Availability Zone over private IP addresses is free, and a cluster placement group also gives low latency and high throughput. Because the job can be rerun, the reduced availability of a single Availability Zone is an acceptable trade-off.",
    optionExplanations: [
      "A load balancer adds its own charges and does not remove the cross-AZ data transfer.",
      "A transit gateway adds per-GB data processing charges on top of the existing traffic.",
      "Correct — Keeping the nodes in one AZ eliminates inter-AZ transfer charges, and reruns cover the availability risk.",
      "Elastic Fabric Adapter improves network performance but does not remove charges for traffic between Availability Zones."
    ]
  },
  {
    id: 1146,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A software company distributes installers from an Amazon S3 bucket in a single Region to customers worldwide. Data transfer out from S3 is now a large part of the bill, and customers far from the Region report slow downloads. Which solution will reduce costs and improve download speed?",
    options: [
      "Enable S3 Transfer Acceleration on the bucket and use its endpoint for downloads.",
      "Serve the installers through an Amazon CloudFront distribution with origin access control.",
      "Replicate the bucket to several other Regions with S3 Cross-Region Replication rules.",
      "Host the installers on EC2 instances behind a Network Load Balancer in the Region."
    ],
    correct: [1],
    explanation: "CloudFront caches the installers at edge locations close to customers, which improves speed and reduces requests to the origin; data transfer from S3 to CloudFront is not charged, and CloudFront delivery is usually cheaper than direct S3 data transfer out. Transfer Acceleration improves long-distance transfers but adds a per-GB charge on top of normal transfer costs.",
    optionExplanations: [
      "Transfer Acceleration adds charges on top of data transfer out and is mainly used to speed up uploads.",
      "Correct — Edge caching reduces origin transfer and cost while making downloads faster.",
      "Replication adds storage and replication transfer costs, and customers would still need a way to reach the nearest copy.",
      "Instances and a load balancer add compute cost and still pay regional data transfer out with no edge caching."
    ]
  },
  {
    id: 1147,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company continuously sends tens of terabytes of data each month from its VPC to its on-premises data center over an AWS Site-to-Site VPN on the internet. The volume is steady and growing, the arrangement is long term, and throughput over the VPN is inconsistent. The company wants lower data transfer costs and more consistent network performance. Which solution will meet these requirements?",
    options: [
      "Add more VPN tunnels and use equal-cost multipath routing to aggregate their bandwidth.",
      "Place AWS Global Accelerator in front of the VPC to route traffic toward the data center.",
      "Ship the data to the data center every month on AWS Snowball Edge devices.",
      "Establish an AWS Direct Connect connection between the data center and AWS."
    ],
    correct: [3],
    explanation: "Direct Connect provides a dedicated private connection with consistent performance, and data transferred out of AWS over Direct Connect is charged at a lower rate than internet data transfer, which pays off at high, steady volumes. Additional VPN tunnels can add bandwidth but still run over the internet at internet transfer rates.",
    optionExplanations: [
      "More tunnels can increase bandwidth, but traffic still uses the internet with internet transfer rates and variable performance.",
      "Global Accelerator is for improving user traffic to AWS endpoints, not for bulk transfer to a data center, and it adds charges.",
      "Monthly shipments do not suit a continuous data flow and add handling effort and delay.",
      "Correct — Direct Connect lowers per-GB transfer costs at scale and gives consistent network performance."
    ]
  },
  {
    id: 1148,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A development VPC has private subnets in three Availability Zones, each with its own NAT gateway. Outbound internet traffic from the IPv4 workloads is light. The team accepts losing outbound internet access from the other subnets if one Availability Zone fails. The company wants to reduce costs. Which solution will meet these requirements?",
    options: [
      "Keep a single NAT gateway in one AZ and route all private subnets through it.",
      "Attach an internet gateway to each private subnet in place of the NAT gateways.",
      "Replace each NAT gateway with an egress-only internet gateway.",
      "Create a gateway VPC endpoint for every AWS service that the instances call."
    ],
    correct: [0],
    explanation: "Each NAT gateway has an hourly charge, so using one shared NAT gateway removes two of those charges; the trade-off is a dependency on a single Availability Zone plus some cross-AZ transfer, which is acceptable for light development traffic. Egress-only internet gateways work only for IPv6 traffic.",
    optionExplanations: [
      "Correct — One shared NAT gateway lowers hourly charges, and the team has accepted the single-AZ dependency.",
      "Internet gateways attach to the VPC, not to subnets, and routing private subnets to one would make them public.",
      "Egress-only internet gateways support only IPv6 traffic, so the IPv4 workloads would lose internet access.",
      "Gateway endpoints exist only for S3 and DynamoDB and cannot replace general internet access."
    ]
  },
  {
    id: 1149,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company has three VPCs in the same Region that exchange large volumes of data with each other. The company has no plans to add more VPCs and does not need transitive routing or connections to on-premises networks. The company wants the lowest-cost private connectivity between the VPCs. Which solution will meet these requirements?",
    options: [
      "Attach all three VPCs to an AWS Transit Gateway with a single shared route table.",
      "Route traffic between the VPCs through NAT gateways and the public internet.",
      "Create a full mesh of VPC peering connections between the three VPCs.",
      "Expose services in each VPC through AWS PrivateLink interface endpoints."
    ],
    correct: [2],
    explanation: "VPC peering has no hourly or data processing charges, only standard data transfer, and a full mesh of three VPCs needs only three peering connections. Transit Gateway simplifies large hub-and-spoke networks but adds per-attachment hourly charges and per-GB processing charges, which are significant at high volume.",
    optionExplanations: [
      "Transit Gateway adds attachment and data processing charges that are unnecessary for three VPCs.",
      "Internet routing adds NAT processing and transfer charges and is not private connectivity.",
      "Correct — Peering is the cheapest private option for a small, fixed number of VPCs.",
      "PrivateLink endpoints add hourly and per-GB charges and expose individual services rather than connecting networks."
    ]
  },
  {
    id: 1150,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "Several teams share one AWS account, and all resources are tagged with the owning team. Finance wants to see each team's monthly costs and wants each team lead to receive an email when the team's forecasted monthly spending exceeds its budget. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Export the AWS Cost and Usage Report daily and write a Lambda function that emails team leads.",
      "Activate the team tag for cost allocation and create tag-filtered AWS Budgets with forecast alerts.",
      "Create Amazon CloudWatch billing alarms for each team based on the account's estimated charges metric.",
      "Configure AWS Cost Anomaly Detection with a single monitor that covers the entire account."
    ],
    correct: [1],
    explanation: "Activating the tag as a cost allocation tag lets Cost Explorer and AWS Budgets group costs by team, and a budget per team can send email alerts when forecasted spending exceeds the budgeted amount. CloudWatch billing alarms track total estimated charges and cannot alert on per-team forecasts.",
    optionExplanations: [
      "A custom reporting pipeline works but requires building and maintaining code.",
      "Correct — Cost allocation tags plus tag-filtered budgets provide per-team visibility and forecast alerts with no custom code.",
      "The estimated charges metric is not broken down by tag and does not evaluate forecasts.",
      "Anomaly detection flags unusual spending patterns, not spending that exceeds a team's budget, and one account-wide monitor is not per team."
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // ADDITIONAL QUESTIONS (ids 1151–1300)
  // ────────────────────────────────────────────────────────────────
  {
    id: 1151,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company stores a data lake in a single Amazon S3 bucket. Dozens of teams in several AWS accounts need different permissions on different prefixes, and some teams must reach the data only from a specific VPC. The bucket policy has become too large to manage safely. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Give each team its own S3 access point and policy, with VPC-only access points as needed.",
      "Split the data into one bucket per team and keep shared objects in sync with S3 Replication.",
      "Grant each team's account access to its prefix by using object ACLs on the uploaded objects.",
      "Rely only on IAM identity policies in each team account and remove the bucket policy entirely."
    ],
    correct: [0],
    explanation: "S3 Access Points let each team have its own named endpoint and policy, and an access point can be restricted to a VPC network origin. This breaks a huge bucket policy into manageable pieces. Separate buckets with replication would also work but duplicate data and add significant operational overhead.",
    optionExplanations: [
      "Correct — Access points give each team a separate, smaller policy and an optional VPC network origin, while the bucket policy only delegates control to the access points.",
      "Duplicates data and adds replication management for every shared dataset, which increases overhead and cost.",
      "ACLs are legacy, cannot express prefix-level or VPC conditions, and would have to be set on every object.",
      "Cross-account access requires the bucket owner to grant access in a resource policy; identity policies alone are not enough."
    ]
  },
  {
    id: 1152,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Partner companies upload files from their own AWS accounts into a company's Amazon S3 bucket. The company cannot read some of the uploaded objects because the uploading accounts own them. The company wants to own every object in the bucket and stop using ACLs entirely. Which solution meets these requirements?",
    options: [
      "Require partners to upload with the bucket-owner-full-control canned ACL on every request.",
      "Set S3 Object Ownership on the bucket to bucket owner enforced.",
      "Add a bucket policy that grants the company's account s3:GetObject on all objects.",
      "Enable S3 Versioning and have a Lambda function copy each new object over itself."
    ],
    correct: [1],
    explanation: "With Object Ownership set to bucket owner enforced, ACLs are disabled and the bucket owner automatically owns all objects, so access is controlled only by policies. Requiring the bucket-owner-full-control ACL is the older workaround and keeps the bucket dependent on ACLs.",
    optionExplanations: [
      "Still depends on ACLs and on every partner remembering the header, which conflicts with the goal of stopping ACL use.",
      "Correct — Bucket owner enforced disables ACLs and makes the bucket owner the owner of every object, including those uploaded by other accounts.",
      "While ACLs are active, objects owned by another account are not governed by the bucket owner's policy, so this does not fix access.",
      "Adds custom code and storage of extra versions, and still leaves ACLs enabled on the bucket."
    ]
  },
  {
    id: 1153,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company stores customer records as JSON objects in Amazon S3. A billing application needs the full records. An analytics application must read the same objects, but with personal data fields removed. The company does not want to store or maintain a second copy of the data. Which solution meets these requirements?",
    options: [
      "Give the analytics application short-lived presigned URLs that point to the original objects.",
      "Run a nightly AWS Glue job that writes redacted copies of the objects to a second bucket.",
      "Use an S3 Object Lambda access point that removes personal fields for analytics reads.",
      "Enable Amazon Macie on the bucket to mask personal data fields in the objects automatically."
    ],
    correct: [2],
    explanation: "S3 Object Lambda adds a Lambda function to the request path of an access point, so each caller can receive a transformed view of the same object. Presigned URLs only grant temporary access and return the original content.",
    optionExplanations: [
      "Presigned URLs control time-limited access but return the full, unredacted object.",
      "Creates and maintains a second copy of the data, which the company wants to avoid, and the copy is stale between runs.",
      "Correct — Object Lambda transforms data on the fly during GET requests, so one stored copy serves both applications.",
      "Macie discovers and reports sensitive data; it does not modify or mask object contents."
    ]
  },
  {
    id: 1154,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "Account A shares an Amazon EBS snapshot with account B. The snapshot is encrypted with a customer managed AWS KMS key in account A. Users in account B can see the shared snapshot but receive errors when they create volumes from it. Which combination of steps will resolve the issue? (Select TWO)",
    options: [
      "Update the key policy of the KMS key in account A to allow account B to use the key.",
      "Re-encrypt the snapshot with the AWS managed aws/ebs key and share it again.",
      "Enable EBS encryption by default in account B with a new KMS key.",
      "Attach an IAM policy in account B that allows its users to use the KMS key from account A.",
      "Share the KMS key with account B by creating an AWS RAM resource share."
    ],
    correct: [0, 3],
    explanation: "Cross-account use of a customer managed KMS key requires two grants: the key policy in the owning account must allow the external account, and the external account must delegate that permission to its principals with an IAM policy. Snapshots encrypted with AWS managed keys cannot be shared at all.",
    optionExplanations: [
      "Correct — The key owner must allow the external account in the key policy before any principal there can use the key.",
      "Snapshots encrypted with an AWS managed key cannot be shared with other accounts because that key policy cannot be changed.",
      "Default encryption affects new volumes but does not grant permission to decrypt the snapshot's source key.",
      "Correct — Cross-account key use requires both the key policy grant and an identity policy in the external account.",
      "KMS keys are not shared through AWS RAM; cross-account access is granted through the key policy."
    ]
  },
  {
    id: 1155,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A batch platform launches short-lived jobs. Each job needs permission to decrypt with a customer managed AWS KMS key only while it runs, and the permission must be removed when the job ends. Permissions must be issued programmatically without editing the key policy for every job. Which solution meets these requirements?",
    options: [
      "Add a statement for the job's role to the key policy and remove it when the job finishes.",
      "Share the KMS key with each job's role through an AWS RAM resource share.",
      "Store the plaintext key material in AWS Secrets Manager and let each job read it.",
      "Create a KMS grant for the job's role at start and retire it when the job ends."
    ],
    correct: [3],
    explanation: "KMS grants are designed for temporary, programmatic delegation of key permissions and can be retired when no longer needed. Editing the key policy for every job is technically possible but is risky and does not scale.",
    optionExplanations: [
      "Constant key policy edits are error-prone, risk locking out administrators, and the policy has a size limit.",
      "AWS RAM does not share KMS keys; key access is controlled by key policies, IAM policies and grants.",
      "KMS key material cannot be exported, and distributing plaintext keys would defeat the purpose of KMS.",
      "Correct — Grants delegate specific key operations programmatically and can be retired or revoked without changing the key policy."
    ]
  },
  {
    id: 1156,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An application must encrypt files of several gigabytes with an AWS KMS key before sending them to an on-premises archive. Developers found that the KMS encrypt operation rejects these large payloads. Which solution should a solutions architect recommend?",
    options: [
      "Request a data key from KMS, encrypt the file locally, and store the encrypted data key with it.",
      "Split each file into small chunks and encrypt every chunk with a separate KMS encrypt call.",
      "Use an asymmetric KMS key instead, because asymmetric keys accept much larger payloads than symmetric keys.",
      "Export the KMS key material and use it in the application's own encryption library."
    ],
    correct: [0],
    explanation: "Envelope encryption is the standard pattern for large data: KMS generates a data key, the application encrypts locally with the plaintext data key, then keeps only the encrypted copy of the data key alongside the ciphertext. Chunking data into many KMS calls is slow, costly and complex.",
    optionExplanations: [
      "Correct — Envelope encryption uses a KMS-protected data key to encrypt large data locally, avoiding the KMS payload limit.",
      "Technically possible, but it adds latency, many KMS requests and complex reassembly logic.",
      "Asymmetric KMS keys accept even smaller payloads and are not suited to bulk data encryption.",
      "KMS keys never leave KMS unencrypted, so the key material cannot be exported."
    ]
  },
  {
    id: 1157,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A regulator requires that a company's encryption keys reside in single-tenant hardware security modules that the company exclusively controls. The company still wants Amazon S3 and Amazon EBS to encrypt data through their native AWS KMS integration. Which solution meets these requirements?",
    options: [
      "Use KMS customer managed keys with imported key material generated in the company's HSM.",
      "Create a KMS custom key store backed by an AWS CloudHSM cluster and create keys in it.",
      "Use AWS CloudHSM directly and have S3 and EBS call the cluster for each encryption operation.",
      "Use KMS customer managed keys with automatic rotation enabled and a restrictive key policy."
    ],
    correct: [1],
    explanation: "A KMS custom key store backed by CloudHSM keeps key material in HSMs dedicated to the customer, while AWS services still call KMS as usual. Imported key material improves control over key origin but the keys remain in the shared KMS HSM fleet.",
    optionExplanations: [
      "Imported material still lives in the multi-tenant KMS HSM fleet, so it does not meet the single-tenant requirement.",
      "Correct — A CloudHSM-backed custom key store keeps keys in single-tenant HSMs while services use them through KMS.",
      "S3 and EBS cannot use CloudHSM directly; their server-side encryption integrates only with KMS.",
      "Standard KMS keys are stored in shared, AWS-managed HSMs, which does not satisfy single-tenant control."
    ]
  },
  {
    id: 1158,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A secret in AWS Secrets Manager in account A is encrypted with the default aws/secretsmanager key. An AWS Lambda function in account B must read the secret, and its execution role already has an IAM policy that allows this. Which combination of steps will complete the configuration? (Select TWO)",
    options: [
      "Replicate the secret to account B by using Secrets Manager secret replication.",
      "Re-encrypt the secret with a customer managed KMS key whose key policy lets the account B role decrypt.",
      "Edit the key policy of the aws/secretsmanager key to allow the role in account B.",
      "Store a copy of the secret in Parameter Store in account B and update it by hand.",
      "Attach a resource-based policy to the secret that allows the Lambda role in account B to read it."
    ],
    correct: [1, 4],
    explanation: "Cross-account access to a secret needs a resource policy on the secret and a KMS key that the external account may use. Because secrets encrypted with aws/secretsmanager cannot be decrypted cross-account, the secret must be re-encrypted with a customer managed key.",
    optionExplanations: [
      "Secret replication copies secrets to other Regions in the same account, not to another account.",
      "Correct — The AWS managed key's policy cannot be changed, so a customer managed key is needed for cross-account decryption.",
      "Key policies of AWS managed keys cannot be modified.",
      "Creates an unmanaged duplicate that drifts from the source and breaks rotation.",
      "Correct — The secret's resource policy must grant the external principal access to the secret."
    ]
  },
  {
    id: 1159,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company wants employees to sign in to Amazon WorkSpaces with their existing on-premises Active Directory credentials. The company does not want any directory data stored or synchronized in AWS. A Site-to-Site VPN already connects the data center to the VPC. Which solution meets these requirements?",
    options: [
      "Deploy AWS Managed Microsoft AD in the VPC and create a trust with the on-premises domain.",
      "Deploy Simple AD and synchronize the on-premises users into it on a schedule.",
      "Deploy AD Connector in the VPC to forward authentication requests to the on-premises AD.",
      "Create an Amazon Cognito user pool that federates with the on-premises AD through SAML."
    ],
    correct: [2],
    explanation: "AD Connector is a directory gateway that forwards authentication to the on-premises Active Directory, so no user data is stored in AWS. AWS Managed Microsoft AD would also work with a trust, but it creates a separate directory in AWS.",
    optionExplanations: [
      "Managed Microsoft AD is a full directory stored in AWS, which the company wants to avoid.",
      "Simple AD does not support trusts or synchronization with on-premises AD and stores its own directory in AWS.",
      "Correct — AD Connector is a proxy that redirects sign-in requests to the existing AD without caching or storing directory data.",
      "WorkSpaces does not use Cognito for user authentication, and this adds a separate user store."
    ]
  },
  {
    id: 1160,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company is moving Windows applications that use Windows authentication, such as SQL Server, to Amazon EC2. The applications need domain controllers in AWS that keep working if the connection to the data center fails, and users from the on-premises forest must still access them. Which solution meets these requirements?",
    options: [
      "Deploy AD Connector and join the EC2 instances to the on-premises domain through it.",
      "Deploy Simple AD and recreate the on-premises users and groups in it by hand.",
      "Use IAM Identity Center with the on-premises AD as the identity source for the instances.",
      "Deploy AWS Managed Microsoft AD and create a forest trust with the on-premises domain."
    ],
    correct: [3],
    explanation: "AWS Managed Microsoft AD provides highly available domain controllers inside AWS, so domain-joined workloads keep authenticating during a link outage, and a forest trust gives on-premises users access. AD Connector only proxies to on-premises controllers and therefore depends on the connection.",
    optionExplanations: [
      "AD Connector depends on the on-premises domain controllers, so authentication fails when the connection is down.",
      "Simple AD does not support trusts, so on-premises users could not use their existing identities.",
      "IAM Identity Center provides access to AWS accounts and applications, not domain controllers for Windows authentication.",
      "Correct — Managed Microsoft AD runs real domain controllers in AWS and a trust lets on-premises users access the applications."
    ]
  },
  {
    id: 1161,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A mobile app authenticates users with an Amazon Cognito user pool. Users must upload photos directly to Amazon S3, each into a prefix that only that user can access, without routing uploads through a backend. No long-term AWS credentials may be stored in the app. Which solution meets these requirements?",
    options: [
      "Use a Cognito identity pool to get temporary credentials scoped by the identity ID in the policy.",
      "Embed IAM user access keys in the app and limit them with a bucket policy per prefix.",
      "Configure the S3 bucket policy to accept Cognito user pool tokens directly as the caller's identity.",
      "Generate one long-lived presigned URL per user at sign-up and store it in the app."
    ],
    correct: [0],
    explanation: "Cognito identity pools vend temporary AWS credentials for authenticated users, and the IAM policy can use the Cognito identity ID variable to restrict each user to their own S3 prefix. User pools alone only issue tokens; S3 cannot authorize requests with them.",
    optionExplanations: [
      "Correct — Identity pools exchange user pool tokens for temporary AWS credentials, and a policy variable restricts each user to their own prefix.",
      "Embedding long-term keys in a mobile app violates the requirement and exposes the keys to extraction.",
      "S3 does not accept Cognito JWTs for authorization; requests must be signed with AWS credentials.",
      "Presigned URLs expire after a limited time and grant access to a single object key, not a whole prefix."
    ]
  },
  {
    id: 1162,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company exposes a REST API through Amazon API Gateway. Clients send opaque bearer tokens issued by a legacy in-house identity system, and tokens can be validated only by calling that system's introspection endpoint. Invalid requests must be rejected before reaching the backend, and validation results should be cached. Which solution meets these requirements?",
    options: [
      "Configure an Amazon Cognito user pool authorizer for the API methods.",
      "Use a Lambda authorizer that calls the introspection endpoint and caches results.",
      "Require API keys on the methods and map them to usage plans for each client.",
      "Enable IAM authorization so that clients must sign requests with Signature Version 4."
    ],
    correct: [1],
    explanation: "A Lambda authorizer runs custom code to validate any token format and returns an IAM policy that API Gateway can cache for a configurable TTL. A Cognito authorizer only understands tokens from its own user pool.",
    optionExplanations: [
      "A Cognito authorizer validates only tokens issued by the Cognito user pool, not opaque tokens from another system.",
      "Correct — A Lambda authorizer can run custom validation logic against any identity system, and API Gateway caches its result.",
      "API keys identify clients for throttling and quotas but are not an authentication mechanism.",
      "Clients hold tokens from the legacy system, not AWS credentials, so they could not sign requests."
    ]
  },
  {
    id: 1163,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Microservices in several AWS accounts of a company's organization call an internal REST API in Amazon API Gateway hosted in a central account. Calls must be authenticated with the callers' existing IAM roles, and the company does not want to manage tokens or shared secrets. Which solution meets these requirements?",
    options: [
      "Create a Lambda authorizer that checks a shared secret header sent by each microservice.",
      "Issue API keys to each account and require them on every method of the API.",
      "Use IAM authorization with a resource policy allowing the organization's principals.",
      "Use a Cognito user pool with client credentials for each microservice."
    ],
    correct: [2],
    explanation: "With IAM authorization, callers sign requests with SigV4 using their existing role credentials, and an API resource policy can allow principals from other accounts, for example by organization ID. The alternatives all require managing secrets, keys or tokens.",
    optionExplanations: [
      "Requires distributing and rotating shared secrets, which the company wants to avoid.",
      "API keys are not an authentication mechanism and must be distributed and rotated.",
      "Correct — Callers sign requests with their role credentials, and the resource policy grants cross-account access to principals in the organization.",
      "Requires managing app clients, secrets and token retrieval instead of using the existing IAM roles."
    ]
  },
  {
    id: 1164,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company has an internal REST API in Amazon API Gateway. The API must be reachable only from the company's VPCs, and traffic must not traverse the public internet. Which solution meets these requirements?",
    options: [
      "Use a Regional API with an AWS WAF IP set that allows only the VPCs' NAT gateway addresses.",
      "Use an edge-optimized API with CloudFront geographic restrictions limited to the company's country.",
      "Use a Regional API and attach a security group that allows only the VPC CIDR ranges.",
      "Deploy it as a private REST API accessed through an execute-api interface VPC endpoint."
    ],
    correct: [3],
    explanation: "A private API endpoint is accessible only through an execute-api interface endpoint, keeping traffic on the AWS network, and its resource policy can allow only specific VPCs or endpoints. An IP allow list on a Regional API still exposes a public endpoint.",
    optionExplanations: [
      "Traffic still flows over the public endpoint through the NAT gateways, so it does traverse the internet.",
      "Geo restriction does not restrict access to the VPCs, and the API remains publicly reachable.",
      "Public API Gateway endpoints do not support security groups.",
      "Correct — Private APIs are reachable only through interface VPC endpoints, and the resource policy limits which endpoints may call them."
    ]
  },
  {
    id: 1165,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A video platform streams HLS content through Amazon CloudFront. Each video consists of thousands of segment files. Only signed-in, paying subscribers may watch, and the company does not want to change the URLs of the individual segment files. Which solution meets these requirements?",
    options: [
      "Issue CloudFront signed cookies to subscribers after they sign in.",
      "Generate a CloudFront signed URL for each segment file when the player requests it.",
      "Generate Amazon S3 presigned URLs for the segments and bypass CloudFront.",
      "Configure origin access control between CloudFront and the S3 bucket."
    ],
    correct: [0],
    explanation: "CloudFront signed cookies are recommended when viewers need access to many files, such as all segments of a stream, without changing URLs. Signed URLs suit individual files and would be impractical for thousands of segments.",
    optionExplanations: [
      "Correct — Signed cookies grant access to many restricted files at once without changing their URLs.",
      "Would require a unique signed URL for each of thousands of segments, changing every segment URL.",
      "Loses CloudFront caching and still requires changing every segment URL.",
      "OAC restricts the S3 origin to CloudFront but does not authenticate viewers."
    ]
  },
  {
    id: 1166,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A media company distributes content from Amazon S3 through Amazon CloudFront. Licensing agreements prohibit serving the content to viewers in specific countries. Which solution will meet this requirement with the LEAST operational overhead?",
    options: [
      "Use a Lambda@Edge function that checks viewer IP addresses against a third-party geolocation database.",
      "Enable CloudFront geographic restrictions with a block list of the prohibited countries.",
      "Use Route 53 geolocation routing that returns no answer to DNS queries from those countries.",
      "Add an S3 bucket policy that denies requests from IP ranges of the prohibited countries."
    ],
    correct: [1],
    explanation: "CloudFront's built-in geographic restriction uses a GeoIP database to allow or block countries without custom code. Lambda@Edge could implement the same check, but it adds code and data maintenance.",
    optionExplanations: [
      "Works but requires custom code and maintenance of a geolocation dataset, adding overhead.",
      "Correct — CloudFront geo restriction blocks viewers by country natively with no code to maintain.",
      "DNS location reflects the resolver, not the viewer, and viewers can bypass it with other resolvers.",
      "Requests reach S3 from CloudFront, not from viewers, so viewer IP conditions on the bucket are ineffective."
    ]
  },
  {
    id: 1167,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A web application uses Amazon CloudFront in front of an internet-facing Application Load Balancer. Attackers are bypassing CloudFront by sending requests directly to the ALB. The ALB must accept traffic only from CloudFront, and the allowed addresses must stay current automatically. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use network ACL entries with CloudFront IP ranges that a scheduled Lambda function updates.",
      "Subscribe to AWS Shield Advanced and add the ALB as a protected resource.",
      "Allow ALB inbound traffic only from the AWS managed prefix list for CloudFront origin-facing servers.",
      "Attach an AWS WAF geo match rule to the ALB that allows only countries with CloudFront edge locations."
    ],
    correct: [2],
    explanation: "AWS publishes a managed prefix list of CloudFront origin-facing addresses that can be referenced in a security group, so only CloudFront can reach the ALB and AWS keeps the list current. A Lambda-updated NACL solves the same problem with far more overhead.",
    optionExplanations: [
      "Requires custom code and NACL rule limits make the large and changing CloudFront range list hard to maintain.",
      "Shield Advanced mitigates DDoS but does not restrict which clients can reach the ALB.",
      "Correct — The managed prefix list is maintained by AWS, so the security group rule stays current without custom work.",
      "Attackers in those countries can still reach the ALB directly, so the bypass remains open."
    ]
  },
  {
    id: 1168,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company must inspect all outbound traffic from its VPCs for known threat signatures and must allow outbound HTTPS only to an approved list of domain names. Which solution meets these requirements?",
    options: [
      "Configure security group egress rules that allow port 443 only to the approved destinations.",
      "Use Route 53 Resolver DNS Firewall to allow DNS resolution only for the approved domains.",
      "Add network ACL rules that deny outbound traffic to IP addresses of known malicious hosts.",
      "Route egress through AWS Network Firewall with domain list and IPS rules."
    ],
    correct: [3],
    explanation: "AWS Network Firewall is a managed stateful firewall with intrusion prevention and domain-based filtering, deployed in firewall subnets with routing that sends egress through it. DNS Firewall controls name resolution but cannot inspect traffic or stop connections made directly to IP addresses.",
    optionExplanations: [
      "Security groups filter by IP and port, cannot match domain names, and do not inspect traffic for threats.",
      "DNS Firewall filters DNS queries only; it does not inspect traffic and can be bypassed by connecting to IP addresses directly.",
      "NACLs are stateless IP filters that cannot match domains or inspect packets for signatures.",
      "Correct — Network Firewall provides stateful inspection, Suricata-compatible IPS signatures and domain allow lists for egress traffic."
    ]
  },
  {
    id: 1169,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A security team wants to stop workloads in many VPCs from resolving domain names associated with malware and DNS-based data exfiltration. The team wants to use threat lists maintained by AWS rather than curating its own. Which solution meets these requirements?",
    options: [
      "Use Route 53 Resolver DNS Firewall with AWS managed domain lists on the VPCs.",
      "Rely on Amazon GuardDuty DNS findings to identify queries to malicious domains.",
      "Add network ACL rules that deny traffic to the IP addresses of known malicious domains.",
      "Create Route 53 private hosted zones for each malicious domain that point to a sinkhole."
    ],
    correct: [0],
    explanation: "Route 53 Resolver DNS Firewall filters outbound DNS queries from VPCs, and AWS managed domain lists cover malware and other known threats. GuardDuty is a detection service; it reports such queries but does not prevent them.",
    optionExplanations: [
      "Correct — DNS Firewall blocks queries from VPCs to domains on AWS managed threat lists.",
      "GuardDuty detects and reports suspicious DNS activity but does not block resolution.",
      "Domain IP addresses change frequently, and the team would have to maintain the lists itself.",
      "Requires curating and creating zones manually and does not use AWS managed threat lists."
    ]
  },
  {
    id: 1170,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An auditor requires a record of every rejected inbound connection attempt to Amazon EC2 instances in a VPC, including source IP address and port. The records must be stored in Amazon S3 for later analysis. Which solution meets these requirements?",
    options: [
      "Enable AWS CloudTrail data events for the EC2 instances and deliver them to S3.",
      "Create VPC Flow Logs that capture rejected traffic and publish them to an S3 bucket.",
      "Configure VPC Traffic Mirroring for all instances and store the captured packets in S3.",
      "Export Amazon GuardDuty findings to S3 through Amazon EventBridge."
    ],
    correct: [1],
    explanation: "VPC Flow Logs capture IP traffic metadata including the REJECT action, and can be filtered to rejected traffic and published to S3. Traffic Mirroring captures packet contents, which is unnecessary for this audit requirement.",
    optionExplanations: [
      "CloudTrail records API calls, not network connection attempts to instances.",
      "Correct — Flow logs record source and destination addresses, ports and the accept or reject action, and can be delivered to S3.",
      "Captures full packet payloads, which is far more data and effort than needed to log rejected connections.",
      "GuardDuty reports suspected threats, not a complete record of every rejected connection."
    ]
  },
  {
    id: 1171,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A security team uses a third-party intrusion detection appliance that must analyze full packet payloads from production Amazon EC2 instances. The team cannot install agents on the instances. Which solution meets these requirements?",
    options: [
      "Enable VPC Flow Logs on the subnets and stream them to the appliances.",
      "Enable Amazon GuardDuty Runtime Monitoring and forward its findings to the appliances.",
      "Use VPC Traffic Mirroring to send instance traffic to the appliances behind an NLB.",
      "Turn on Elastic Load Balancing access logs and send them to the appliances."
    ],
    correct: [2],
    explanation: "VPC Traffic Mirroring copies packets from ENIs to a target such as an NLB in front of security appliances, enabling deep packet inspection without host agents. Flow logs are useful for auditing but contain no payloads.",
    optionExplanations: [
      "Flow logs contain connection metadata only, not packet payloads.",
      "Runtime Monitoring uses an agent and produces findings, not raw packet copies.",
      "Correct — Traffic Mirroring copies full packets from elastic network interfaces to a monitoring target without agents.",
      "Access logs describe requests at the load balancer and do not include full packets from instances."
    ]
  },
  {
    id: 1172,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company with 30 AWS accounts in AWS Organizations wants continuous, automated checks against the CIS AWS Foundations Benchmark and AWS Foundational Security Best Practices. Findings from all accounts must be aggregated in a central security account. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Run AWS Trusted Advisor checks in every account and export the results weekly.",
      "Write AWS Config custom rules for each benchmark control and deploy them with StackSets.",
      "Activate Amazon Inspector in every account and aggregate findings in the security account.",
      "Enable AWS Security Hub with both standards through a delegated administrator."
    ],
    correct: [3],
    explanation: "Security Hub runs managed controls for the CIS benchmark and AWS Foundational Security Best Practices, and a delegated administrator can enable it for all member accounts and aggregate findings. Writing custom Config rules would replicate this functionality with much more effort.",
    optionExplanations: [
      "Trusted Advisor does not implement these standards and has no organization-wide aggregation of security findings.",
      "Rebuilding controls that already exist as managed standards adds large development and maintenance effort.",
      "Inspector scans workloads for software vulnerabilities, not account configuration against these benchmarks.",
      "Correct — Security Hub provides both standards as managed controls and aggregates findings centrally across the organization."
    ]
  },
  {
    id: 1173,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company must detect any security group that allows SSH from 0.0.0.0/0 and automatically remove that rule within minutes. Other security group changes must remain allowed. Which solution meets these requirements?",
    options: [
      "Use an AWS Config rule with automatic remediation through an SSM Automation runbook.",
      "Enable Amazon GuardDuty and review findings about SSH brute force attempts each day.",
      "Query AWS CloudTrail logs with Amazon Athena once a day to find the rule changes.",
      "Attach an IAM policy that denies all security group ingress rule changes to every IAM user."
    ],
    correct: [0],
    explanation: "AWS Config can evaluate security groups on every configuration change and invoke an SSM Automation runbook to remediate noncompliant resources automatically. Denying all ingress changes would prevent the problem but also blocks legitimate work.",
    optionExplanations: [
      "Correct — Config evaluates changes as they happen and the remediation runbook removes the offending rule automatically.",
      "GuardDuty detects attacks, not misconfigured rules, and manual daily review does not remediate within minutes.",
      "A daily query is neither near real time nor automatically remediating.",
      "Blocks every legitimate security group change, which the company still needs to allow."
    ]
  },
  {
    id: 1174,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company must ensure that every Application Load Balancer and CloudFront distribution in all accounts of its organization, including future accounts, has a baseline AWS WAF web ACL. Application teams must still be able to add their own rules. Which solution meets these requirements?",
    options: [
      "Deploy the web ACL to every account with CloudFormation StackSets and ask teams to associate it.",
      "Create an AWS Firewall Manager AWS WAF policy for the organization with automatic remediation.",
      "Attach an SCP that denies creating load balancers unless a WAF web ACL is associated.",
      "Subscribe every account to AWS Shield Advanced and enable it for all ALBs."
    ],
    correct: [1],
    explanation: "Firewall Manager centrally enforces WAF policies across an organization, automatically protecting new accounts and resources, and its policies support first and last rule groups so teams can add their own rules in between. StackSets can deploy the ACL but do not guarantee it is associated.",
    optionExplanations: [
      "Relies on teams to associate the web ACL manually, so new resources may remain unprotected.",
      "Correct — Firewall Manager applies baseline rule groups to in-scope resources in all accounts, including new ones, while teams add their own rules.",
      "SCPs cannot check whether a web ACL is associated, and they cannot attach one.",
      "Shield Advanced provides DDoS protection but does not deploy a baseline WAF rule set to every resource."
    ]
  },
  {
    id: 1175,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Amazon GuardDuty reported unusual API activity by an IAM role. Security analysts must quickly investigate the role's related activity over the past several weeks and visualize which IP addresses and resources it interacted with. The team does not want to build log analysis pipelines. Which solution meets these requirements?",
    options: [
      "Query AWS CloudTrail logs in Amazon S3 with Amazon Athena and build dashboards.",
      "Use Amazon Macie to analyze the resources that the IAM role accessed.",
      "Use Amazon Detective to investigate the finding with its behavior graph.",
      "Use AWS Security Hub to view the finding together with related findings."
    ],
    correct: [2],
    explanation: "Amazon Detective ingests log data automatically and builds a behavior graph that helps analysts trace an entity's activity, IP addresses and related findings over time. Athena on CloudTrail can answer the same questions but requires building the analysis yourself.",
    optionExplanations: [
      "Possible, but requires building tables, queries and visualizations, which the team wants to avoid.",
      "Macie identifies sensitive data in S3; it does not investigate entity behavior.",
      "Correct — Detective automatically builds a behavior graph from CloudTrail, VPC Flow Logs and GuardDuty data for investigations.",
      "Security Hub aggregates findings but does not provide interactive behavior investigation."
    ]
  },
  {
    id: 1176,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company must record every read of objects in a sensitive Amazon S3 bucket, including the IAM principal that made each request. Auditors must be able to run SQL queries over several years of this history. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Create a CloudTrail trail that logs management events only and query it with Athena.",
      "Enable S3 server access logging and build Amazon Athena tables over the log files.",
      "Enable Amazon Macie on the bucket and export its findings to Amazon S3.",
      "Use a CloudTrail Lake event data store that collects S3 data events for the bucket."
    ],
    correct: [3],
    explanation: "Object reads are CloudTrail data events, and CloudTrail Lake stores events in a managed event data store that can be queried with SQL for years. Server access logs with Athena can work but require more setup and offer best-effort delivery.",
    optionExplanations: [
      "Management events do not include object-level reads such as GetObject.",
      "Works but requires managing log parsing and tables, and server access logs are delivered on a best-effort basis.",
      "Macie reports sensitive data findings, not a record of each object read.",
      "Correct — CloudTrail Lake captures object-level data events, retains them long term and supports SQL queries natively."
    ]
  },
  {
    id: 1177,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company wants remote employees to reach internal web applications hosted in a VPC without using a VPN. Each request must be evaluated against the user's identity from IAM Identity Center and the device's security posture from a third-party device management provider. Which solution meets these requirements?",
    options: [
      "Deploy AWS Verified Access with identity and device trust providers.",
      "Deploy AWS Client VPN with Active Directory authentication for the employees.",
      "Place the applications behind a public ALB that authenticates users with Amazon Cognito.",
      "Configure AWS Site-to-Site VPN from each employee's home router to the VPC."
    ],
    correct: [0],
    explanation: "AWS Verified Access provides zero-trust access to applications by evaluating each request against policies using identity and device trust providers, without a VPN. Cognito on an ALB covers identity only, not device posture.",
    optionExplanations: [
      "Correct — Verified Access evaluates every request against identity and device posture without a VPN.",
      "Client VPN is a VPN and does not evaluate device posture for each application request.",
      "Authenticates users but cannot evaluate device posture from the device management provider.",
      "Uses VPN tunnels, is impractical for individual employees and does not evaluate identity or device posture."
    ]
  },
  {
    id: 1178,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Servers in an on-premises data center run scripts that upload files to Amazon S3 by using IAM user access keys. The company runs an enterprise certificate authority that issues certificates to these servers, and it wants to eliminate long-term AWS credentials. Which solution meets these requirements?",
    options: [
      "Store the access keys in AWS Secrets Manager and rotate them every 30 days.",
      "Use IAM Roles Anywhere, with the corporate CA as trust anchor.",
      "Create an IAM Identity Center user for each server and use its sign-in for the scripts.",
      "Configure an Amazon Cognito identity pool with unauthenticated access for the scripts."
    ],
    correct: [1],
    explanation: "IAM Roles Anywhere lets workloads outside AWS use certificates from a registered CA to obtain temporary credentials for an IAM role, removing the need for access keys. Rotating keys in Secrets Manager reduces risk but keeps long-term credentials.",
    optionExplanations: [
      "The keys are still long-term IAM user credentials, which the company wants to eliminate.",
      "Correct — Roles Anywhere exchanges X.509 certificates from a trusted CA for temporary role credentials.",
      "IAM Identity Center is designed for human workforce access, not machine authentication.",
      "Unauthenticated identities would let anyone obtain credentials and is not suitable for server workloads."
    ]
  },
  {
    id: 1179,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An Amazon SNS topic delivers messages to an Amazon SQS queue. After the company enabled server-side encryption on the queue with a customer managed AWS KMS key, messages stopped arriving in the queue. Which solution will resolve the issue?",
    options: [
      "Switch the queue encryption to the AWS managed key for Amazon SQS.",
      "Enable server-side encryption on the SNS topic with the same customer managed key.",
      "Update the KMS key policy to allow the SNS service principal to use the key.",
      "Add an sqs:SendMessage statement for the SNS topic to the queue access policy."
    ],
    correct: [2],
    explanation: "When an SQS queue is encrypted with a customer managed key, the publishing service (SNS here) must be allowed in the key policy to use the key. The AWS managed SQS key cannot be used for this because its policy cannot be modified.",
    optionExplanations: [
      "SNS cannot use the AWS managed SQS key because its key policy cannot be changed to allow the SNS service.",
      "Encrypting the topic does not give SNS permission to use the queue's key when it sends messages.",
      "Correct — SNS needs permission to generate data keys and decrypt with the queue's key to send encrypted messages.",
      "Delivery worked before encryption, so the queue policy already allows SNS; the missing permission is on the key."
    ]
  },
  {
    id: 1180,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A mobile game stores player data in an Amazon DynamoDB table with the player ID as the partition key. Players access the table directly with temporary credentials from an Amazon Cognito identity pool. Each player must be able to read and write only the items that belong to them. Which solution meets these requirements?",
    options: [
      "Create a separate DynamoDB table for each player and grant access to it by name.",
      "Encrypt each player's items with a different customer managed KMS key.",
      "Enable DynamoDB Streams and roll back writes made to other players' items.",
      "Restrict dynamodb:LeadingKeys to the player's identity ID in the IAM policy."
    ],
    correct: [3],
    explanation: "DynamoDB fine-grained access control uses IAM condition keys such as dynamodb:LeadingKeys with the Cognito identity variable so each user can access only items with matching partition keys. Separate tables per user would work in principle but are unmanageable.",
    optionExplanations: [
      "Does not scale to many players and adds large operational overhead.",
      "Encryption does not prevent players from reading or overwriting other players' items.",
      "Detects violations after the fact instead of preventing unauthorized reads and writes.",
      "Correct — Fine-grained access control with the dynamodb:LeadingKeys condition restricts each player to items with their own partition key."
    ]
  },
  {
    id: 1181,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "Amazon EC2 instances mount an existing Amazon EFS file system that was created without encryption. A new policy requires the data to be encrypted at rest and in transit. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Create a new EFS file system with encryption at rest enabled and migrate the data with AWS DataSync.",
      "Enable encryption at rest on the existing file system from its settings.",
      "Mount the file system on the instances by using the EFS mount helper with the TLS option.",
      "Enable encryption on the EBS root volumes of the instances that mount the file system.",
      "Restrict the EFS mount target security group to NFS traffic from the instances only."
    ],
    correct: [0, 2],
    explanation: "EFS encryption at rest is a creation-time setting, so an unencrypted file system must be replaced and the data migrated, for example with DataSync. Encryption in transit is enabled per mount by using the EFS mount helper with TLS.",
    optionExplanations: [
      "Correct — Encryption at rest can be enabled only when an EFS file system is created, so the data must move to a new one.",
      "EFS encryption at rest cannot be enabled on an existing file system.",
      "Correct — The mount helper with TLS encrypts NFS traffic between the instances and EFS.",
      "Encrypting EBS volumes does not encrypt data stored in EFS or traffic to it.",
      "Limits network access but does not encrypt the data at rest or in transit."
    ]
  },
  {
    id: 1182,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An application on Amazon EC2 connects to an Amazon RDS for MySQL database. The security team wants to remove all stored database passwords. The application should authenticate to the database with short-lived tokens derived from its existing instance role. Which solution meets these requirements?",
    options: [
      "Enable IAM database authentication and let the instance role generate authentication tokens.",
      "Store the password in AWS Secrets Manager and enable automatic rotation.",
      "Store the password as a SecureString parameter in Systems Manager Parameter Store.",
      "Require SSL connections to the DB instance and keep the password in the application config."
    ],
    correct: [0],
    explanation: "With IAM database authentication, the application uses its IAM role to generate a short-lived token that replaces the password for MySQL and PostgreSQL. Secrets Manager rotation improves password hygiene but still uses stored passwords.",
    optionExplanations: [
      "Correct — IAM database authentication uses short-lived tokens generated from IAM credentials instead of passwords.",
      "The password is still stored and used, even though it is rotated, which does not meet the requirement.",
      "Still relies on a stored database password, only encrypted.",
      "Encrypts connections but keeps a stored password, which must be removed."
    ]
  },
  {
    id: 1183,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An application on Amazon EC2 processes payment card data. The data must be decrypted and processed in an isolated environment that even administrators with root access to the instance cannot access, and AWS KMS must release the key only to that verified environment. Which solution meets these requirements?",
    options: [
      "Run the application on an EC2 Dedicated Host so that no other customer shares the hardware.",
      "Process the data in an AWS Nitro Enclave and use KMS key policy conditions based on enclave attestation.",
      "Store the key in AWS CloudHSM and decrypt the data on the instance with the HSM client.",
      "Move processing to a separate instance in an isolated subnet with a restrictive security group."
    ],
    correct: [1],
    explanation: "AWS Nitro Enclaves provide isolated compute environments that have no interactive access, even for root users of the parent instance, and KMS supports attestation-based conditions so only a verified enclave can decrypt. Dedicated hardware or HSMs do not isolate data from the instance's own administrators.",
    optionExplanations: [
      "Isolates hardware from other customers but not from administrators with root access to the instance.",
      "Correct — Nitro Enclaves are isolated from the parent instance, and KMS can verify attestation before releasing keys.",
      "Decrypted data is still accessible on the instance to users with root access.",
      "Network isolation does not stop administrators with root access to that instance from reading the data."
    ]
  },
  {
    id: 1184,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A central networking account owns the company's VPCs, transit gateway and internet egress. Application accounts must deploy workloads into centrally managed subnets, and their administrators must not be able to create their own VPCs or internet gateways. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Create VPC peering connections from the networking VPCs to a VPC in each application account.",
      "Attach an IAM permissions boundary to the administrator roles in each application account.",
      "Share the subnets from the networking account with the application accounts by using AWS RAM.",
      "Create a transit gateway attachment for each application account's own VPC.",
      "Attach an SCP to the application accounts' OU that denies creating VPCs and internet gateways."
    ],
    correct: [2, 4],
    explanation: "AWS RAM VPC sharing lets application accounts deploy into subnets owned by the networking account, and SCPs provide guardrails that account administrators cannot bypass. Permissions boundaries are managed within the account and can be changed by its administrators.",
    optionExplanations: [
      "Requires each application account to own a VPC, which conflicts with central network ownership.",
      "Account administrators could remove or change the boundary, so it is not a reliable guardrail.",
      "Correct — VPC sharing lets participant accounts launch resources into centrally owned subnets.",
      "Assumes each account creates its own VPC, which the company wants to prevent.",
      "Correct — SCPs apply to all principals in the member accounts, including administrators."
    ]
  },
  {
    id: 1185,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company with many AWS accounts wants to standardize the tag key CostCenter, including its capitalization and allowed values. Noncompliant tagging operations on selected resource types must be prevented, and the company wants compliance reports across the organization. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use the AWS Config required-tags managed rule in each account and review the findings.",
      "Write an SCP that lists every allowed CostCenter value in request tag conditions.",
      "Create an AWS Organizations tag policy with enforcement enabled for the selected resource types.",
      "Have administrators correct tags each month by using the Tag Editor in each account."
    ],
    correct: [2],
    explanation: "Organizations tag policies define standard tag keys, capitalization and allowed values, can block noncompliant tagging operations for chosen resource types and report compliance across accounts. An SCP could restrict values but is harder to maintain and does not provide compliance reporting.",
    optionExplanations: [
      "Config detects missing tags but does not prevent noncompliant tagging or standardize capitalization.",
      "Possible for some cases but harder to maintain and provides no organization-wide compliance reports.",
      "Correct — Tag policies standardize keys and values, can enforce compliance for specified resource types and provide reports.",
      "A manual, after-the-fact process that does not prevent noncompliant tags."
    ]
  },
  {
    id: 1186,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company must ensure that every member account in its organization, including future accounts, backs up resources tagged backup=daily according to one centrally defined plan. Member account administrators must not be able to modify that plan. Which solution meets these requirements?",
    options: [
      "Deploy the backup plan to every account with CloudFormation StackSets.",
      "Run a scheduled Lambda function in each account that creates snapshots of tagged resources.",
      "Use Amazon Data Lifecycle Manager policies in each account for the tagged resources.",
      "Attach an AWS Organizations backup policy to the OUs that defines the plan and tag-based selection."
    ],
    correct: [3],
    explanation: "Organizations backup policies create AWS Backup plans in every account under the targeted OUs, including new accounts, and the resulting plans are immutable for member accounts. StackSets can deploy plans but do not prevent local changes.",
    optionExplanations: [
      "Member account administrators can change or delete stack-created resources, and drift is not prevented.",
      "Custom code in each account adds overhead and can be modified by account administrators.",
      "DLM manages only EBS snapshots and AMIs, and each account must configure it separately.",
      "Correct — Backup policies deploy AWS Backup plans centrally to all accounts in scope, and member accounts cannot edit them."
    ]
  },
  {
    id: 1187,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An IAM role in account A has an identity-based policy that allows s3:GetObject on a bucket in account B. Requests from the role are denied. The bucket uses SSE-S3 encryption, and its bucket policy does not mention account A. Which action will allow the role to read the objects?",
    options: [
      "Allow the account A role to get objects in the bucket policy of account B.",
      "Attach a permissions boundary to the role that allows s3:GetObject on the bucket.",
      "Attach an SCP to account A that allows s3:GetObject on the bucket in account B.",
      "Create an S3 gateway VPC endpoint in account A and route the requests through it."
    ],
    correct: [0],
    explanation: "For cross-account requests, both the caller's identity policy and the resource owner's policy must allow the action. Permissions boundaries and SCPs only restrict permissions and can never grant them.",
    optionExplanations: [
      "Correct — Cross-account access requires the resource owner to grant access in addition to the caller's identity policy.",
      "A permissions boundary only limits maximum permissions and never grants access by itself.",
      "SCPs do not grant permissions; they only define the maximum available permissions.",
      "Changes the network path but does not provide the missing authorization from account B."
    ]
  },
  {
    id: 1188,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A multi-tenant SaaS backend assumes a single IAM role to access an Amazon S3 bucket on behalf of tenants. A software bug could let one tenant's request read another tenant's prefix. Without creating a role per tenant, the credentials used for each request must be limited to that tenant's prefix. Which solution meets these requirements?",
    options: [
      "Create an IAM role for each tenant that allows access only to that tenant's prefix.",
      "Pass a session policy scoped to the tenant's prefix when assuming the role for each request.",
      "Attach a permissions boundary to the shared role that allows access to all tenant prefixes.",
      "Add a bucket policy statement per tenant prefix that restricts access by source IP address."
    ],
    correct: [1],
    explanation: "Session policies passed when assuming a role limit the resulting session to the intersection of the role's policies and the session policy, so each tenant's request gets credentials scoped to its own prefix. A static permissions boundary applies equally to every session.",
    optionExplanations: [
      "Meets the isolation goal but creates a role per tenant, which the company wants to avoid.",
      "Correct — Session policies further restrict the role's permissions for that session only, giving per-tenant credentials.",
      "A boundary is static and the same for every session, so it cannot isolate tenants from each other.",
      "Requests come from the same backend, so source IP cannot distinguish tenants."
    ]
  },
  {
    id: 1189,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A security team created a customer managed AWS KMS key whose key policy grants permissions only to a KeyAdmin role and has no statement for the account itself. An application role has an IAM policy that allows kms:Decrypt on the key, but its requests are denied. Which solution will resolve the issue?",
    options: [
      "Attach an AWS managed IAM policy with broad KMS permissions to the application role.",
      "Create an alias for the key and reference the alias in the application role's IAM policy.",
      "Update the key policy to allow the application role to use the key for decryption.",
      "Enable automatic key rotation so that KMS regenerates the key policy for the account."
    ],
    correct: [2],
    explanation: "KMS key policies are the primary resource policy for a key: unless the key policy allows the account (enabling IAM policies) or the specific role, identity policies alone cannot grant access. Adding broader IAM permissions therefore does not help.",
    optionExplanations: [
      "IAM policies have no effect on a KMS key unless the key policy enables them or names the role.",
      "Aliases do not change authorization, and the key policy still does not allow the role.",
      "Correct — The key policy is the primary access control for KMS keys; the role must be allowed there or IAM policies must be enabled.",
      "Rotation changes key material only and never modifies the key policy."
    ]
  },
  {
    id: 1190,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Users upload files to an Amazon S3 bucket through a web application, and a processing pipeline consumes them. The company must automatically scan each newly uploaded object for malware before processing and tag infected objects. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use Amazon Macie to scan new objects and quarantine those classified as sensitive.",
      "Use Amazon Inspector to scan the bucket for software vulnerabilities.",
      "Run an open source antivirus engine in a Lambda function triggered by S3 events.",
      "Enable Amazon GuardDuty Malware Protection for S3 on the bucket and act on its scan result tags."
    ],
    correct: [3],
    explanation: "GuardDuty Malware Protection for S3 is a managed feature that scans newly uploaded objects and can add tags with the scan result, which the pipeline can use to skip infected files. A self-managed antivirus Lambda function adds ongoing maintenance.",
    optionExplanations: [
      "Macie discovers sensitive data such as PII; it does not detect malware.",
      "Inspector scans EC2, ECR images and Lambda functions, not S3 objects for malware.",
      "Works but requires maintaining the engine, signature updates and scaling logic.",
      "Correct — GuardDuty Malware Protection for S3 scans new objects automatically and can tag them with the result."
    ]
  },
  {
    id: 1191,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An application needs dozens of configuration values, including a few database passwords that are changed manually once a year. Values must be encrypted at rest and access must be controlled with IAM. Automatic rotation is not required. Which solution meets these requirements MOST cost-effectively?",
    options: [
      "Store the values as SecureString parameters in Systems Manager Parameter Store.",
      "Store every value as a separate secret in AWS Secrets Manager.",
      "Store the values in the instance user data of the launch template.",
      "Store the values in Lambda environment variables of a helper function."
    ],
    correct: [0],
    explanation: "Parameter Store SecureString parameters provide KMS encryption and IAM access control, and standard parameters incur no storage charge. Secrets Manager is the better choice when automatic rotation or cross-account secret sharing is needed, which is not the case here.",
    optionExplanations: [
      "Correct — Standard SecureString parameters are encrypted with KMS, controlled by IAM and have no storage charge.",
      "Secrets Manager charges per secret and its main advantage, automatic rotation, is not needed here.",
      "User data is not encrypted for secrets and is readable by anyone who can view the instance attributes.",
      "Ties configuration to a function, is hard to share and offers weaker access control for the application."
    ]
  },
  {
    id: 1192,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Microservices running on Amazon ECS must authenticate each other with mutual TLS. Certificates must come from a private certificate authority managed by AWS, must not be publicly trusted, and must be issued automatically. Which solution meets these requirements?",
    options: [
      "Request public ACM certificates for each service's internal DNS name.",
      "Use AWS Private CA to issue private certificates to the services.",
      "Generate self-signed certificates in each container when it starts.",
      "Upload certificates from a commercial CA to IAM as server certificates."
    ],
    correct: [1],
    explanation: "AWS Private CA is a managed private certificate authority that issues certificates trusted only within the organization, suitable for service-to-service mutual TLS. Public ACM certificates are publicly trusted and require domain validation.",
    optionExplanations: [
      "Public certificates require public domain validation and are publicly trusted, which the company does not want.",
      "Correct — AWS Private CA provides a managed private CA hierarchy for issuing internal certificates, including for mTLS.",
      "No common trust anchor or central management, so services cannot reliably verify each other.",
      "Uses publicly trusted certificates and manual uploads instead of automated private issuance."
    ]
  },
  {
    id: 1193,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A company exposes a public REST API in Amazon API Gateway to three partners. Each partner calls the API from a fixed set of IP ranges. Requests from any other IP address must be rejected, and each partner must be throttled to its own contracted request rate. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Attach a security group to the API that allows only the partners' IP ranges.",
      "Add an API resource policy that allows invocation only from the partners' source IP ranges.",
      "Set stage-level throttling to the lowest of the partners' contracted rates.",
      "Create a usage plan for each partner with its rate limit and associate the partner's API key.",
      "Set reserved concurrency on the backend Lambda function for each partner."
    ],
    correct: [1, 3],
    explanation: "API Gateway resource policies can restrict invocation to specific source IP ranges, and usage plans with API keys apply separate throttling and quotas to each partner. Stage-level throttling cannot differentiate between callers.",
    optionExplanations: [
      "Public API Gateway endpoints do not support security groups.",
      "Correct — Resource policies can allow or deny invocation based on the aws:SourceIp condition.",
      "Applies one limit to all callers instead of a separate rate for each partner.",
      "Correct — Usage plans apply per-client throttling and quotas identified by API keys.",
      "Reserved concurrency applies per function, not per caller, and does not throttle individual partners."
    ]
  },
  {
    id: 1194,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "An Amazon ElastiCache (Redis OSS) replication group stores user session tokens. A security review requires that data be encrypted between clients and the cache and that clients authenticate before they can run commands. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Enable in-transit encryption (TLS) on the replication group.",
      "Enable encryption at rest on the replication group.",
      "Restrict the cache security group to inbound traffic from the application security group.",
      "Place the replication group in private subnets without a route to the internet.",
      "Configure Redis AUTH or role-based access control and have clients authenticate when connecting."
    ],
    correct: [0, 4],
    explanation: "ElastiCache in-transit encryption provides TLS between clients and nodes, and AUTH or RBAC requires clients to authenticate before running commands. Security groups and private subnets are useful network controls but are not authentication.",
    optionExplanations: [
      "Correct — TLS encrypts traffic between clients and the cache nodes and is required for authentication features.",
      "Protects stored data and backups but does not encrypt client traffic or authenticate clients.",
      "Limits network access but does not authenticate clients before they run commands.",
      "Network placement does not provide encryption in transit or client authentication.",
      "Correct — AUTH tokens or RBAC users require clients to authenticate before commands are accepted."
    ]
  },
  {
    id: 1195,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "Amazon GuardDuty reports that temporary credentials of an Amazon EC2 instance role are being used from an external IP address. The security team must immediately invalidate all credentials already issued for the role and contain the instance while preserving it for forensic analysis. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Terminate the instance immediately and launch a replacement from the AMI.",
      "Detach the instance profile from the instance.",
      "Revoke active sessions for the role so that credentials issued before now are denied.",
      "Replace the instance's security groups with an isolation group that has no inbound or outbound rules.",
      "Rotate the access keys of all IAM users in the account."
    ],
    correct: [2, 3],
    explanation: "Revoking active role sessions attaches a policy that denies any credentials issued before the revocation time, which invalidates stolen temporary credentials. Isolating the instance with a restrictive security group contains it while preserving evidence; terminating it would destroy that evidence.",
    optionExplanations: [
      "Destroys the evidence on the instance, which must be preserved for forensics.",
      "Stops new credentials from being delivered but does not invalidate credentials that were already issued.",
      "Correct — Revoking sessions adds a deny for tokens issued before the current time, invalidating stolen credentials.",
      "Correct — An isolation security group contains the instance while keeping it available for investigation.",
      "The compromised credentials belong to a role, not IAM users, so rotating user keys does not help."
    ]
  },
  {
    id: 1196,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a fleet of EC2 workers that poll an Amazon SQS standard queue. Messages arrive sporadically, and monitoring shows that most ReceiveMessage calls return no messages, which increases API costs and adds CPU load on the workers. The company wants to reduce empty responses without delaying messages once they arrive. What should a solutions architect do?",
    options: [
      "Configure a delivery delay on the queue so that messages are batched together before workers receive them.",
      "Enable long polling by setting a receive message wait time greater than zero on the queue.",
      "Increase the visibility timeout so that workers keep messages hidden for longer between polling attempts.",
      "Replace the standard queue with a FIFO queue so that workers receive messages in larger groups."
    ],
    correct: [1],
    explanation: "Long polling makes SQS wait for messages to arrive (up to the configured wait time) before responding, and it queries all servers, which sharply reduces empty responses and their cost while returning messages as soon as they are available. A delivery delay would hold every message back, adding latency instead of reducing empty receives.",
    optionExplanations: [
      "A delivery delay makes every new message invisible for a period, which adds latency and does nothing to stop empty ReceiveMessage responses.",
      "Correct — Long polling waits for messages before returning, eliminating most empty responses and lowering request costs without adding delay.",
      "Visibility timeout only applies to messages that have already been received; it does not affect how often polls come back empty.",
      "A FIFO queue changes ordering and deduplication semantics but does not reduce empty responses from short polling."
    ]
  },
  {
    id: 1197,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An online retailer lets customers cancel an order free of charge within two minutes of placing it. Order messages are sent to an Amazon SQS queue, and a fulfillment service must not start processing any order until two minutes have passed since it was placed. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Set the queue's visibility timeout to two minutes so that the fulfillment service sees each order later.",
      "Start an AWS Step Functions workflow for each order that waits two minutes before invoking fulfillment.",
      "Configure the queue as a delay queue with a two-minute delivery delay for all new messages.",
      "Create an Amazon EventBridge Scheduler one-time schedule per order that sends it two minutes later."
    ],
    correct: [2],
    explanation: "A delay queue hides every new message from consumers for the configured delivery delay, so orders only become visible to the fulfillment service after two minutes with no extra components. Visibility timeout is tempting but only starts after a consumer receives a message, so it cannot postpone the first delivery.",
    optionExplanations: [
      "Visibility timeout begins only after a message is received, so the service would still receive each order immediately.",
      "A Step Functions wait state works but adds a workflow per order, which is more operational overhead than a queue setting.",
      "Correct — A delivery delay on the queue postpones the first visibility of every message by two minutes with a single configuration change.",
      "Creating a schedule per order is technically possible but adds many resources and custom logic compared with a queue-level delay."
    ]
  },
  {
    id: 1198,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company sends inventory updates to an Amazon SQS queue that uses default settings. Next month the consuming system will be offline for up to 10 days during a planned migration, but producers will keep sending updates. No update may be lost, and the company wants to avoid writing custom code. What should a solutions architect do?",
    options: [
      "Increase the queue's message retention period to its maximum value before the migration starts.",
      "Attach a dead-letter queue so that unconsumed messages are moved there after the retention period.",
      "Increase the visibility timeout so that messages stay hidden until the consuming system returns.",
      "Add a Lambda function that copies each message to Amazon S3 and replays them after the migration."
    ],
    correct: [0],
    explanation: "SQS keeps messages for four days by default and can be configured to retain them for up to 14 days, which covers a 10-day outage with only a configuration change. A dead-letter queue is the tempting distractor, but it only receives messages that exceed the maximum receive count, not messages that expire unread.",
    optionExplanations: [
      "Correct — Raising the retention period to the maximum lets messages survive the 10-day outage without any custom code.",
      "A dead-letter queue receives messages after repeated failed receives; messages that are never received simply expire and are deleted.",
      "Visibility timeout applies only after a message is received and does not extend how long an unread message is retained.",
      "Copying messages to S3 and replaying them would work but requires custom code, which the company wants to avoid."
    ]
  },
  {
    id: 1199,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An order service publishes all order events to one Amazon SNS topic. Several Amazon SQS queues are subscribed to it, but the fraud team's queue should receive only orders with a payment type of credit card, and the wholesale queue should receive only orders from business customers. Today each consumer discards irrelevant messages in code. Which solution will reduce unnecessary processing with the LEAST operational overhead?",
    options: [
      "Create a separate SNS topic for each consumer and change the order service to publish to the correct topics.",
      "Insert a Lambda function between the topic and each queue that forwards only the relevant order events.",
      "Use an SQS FIFO queue for each consumer and use message group IDs to separate the relevant orders.",
      "Apply an SNS subscription filter policy to each queue subscription that matches the relevant attributes."
    ],
    correct: [3],
    explanation: "SNS subscription filter policies let each subscriber receive only the messages whose attributes or body match its policy, so filtering happens in SNS without any code. Creating separate topics would also work but forces the producer to know about every consumer's needs, increasing coupling and maintenance.",
    optionExplanations: [
      "Per-consumer topics couple the producer to the consumers and require code changes whenever a new filter is needed.",
      "A Lambda forwarder adds functions to build, monitor, and scale when SNS can filter natively.",
      "Message group IDs control ordering within a FIFO queue; they do not filter which messages reach the queue.",
      "Correct — Subscription filter policies deliver only matching messages to each queue, removing wasted processing with no custom code."
    ]
  },
  {
    id: 1200,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company routes application events through a custom Amazon EventBridge event bus to several Lambda targets. A bug in one target function caused it to process two days of events incorrectly. After deploying a fix, the company must reprocess those exact events, and it wants this capability available for future incidents. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Add a rule that sends all events to Amazon S3 and write a script that republishes them to the bus when needed.",
      "Create an archive on the event bus and replay the archived events for the affected time window to the rule.",
      "Enable a dead-letter queue on the target and redrive the queued events once the function has been fixed.",
      "Add an Amazon SQS queue as an extra target and keep its messages until the team decides to reprocess them."
    ],
    correct: [1],
    explanation: "EventBridge archives store events matching a pattern, and a replay sends the events from a chosen time window back to the bus so the fixed rules and targets can process them again. A target dead-letter queue only captures events that failed delivery, and these events were delivered successfully but processed incorrectly.",
    optionExplanations: [
      "Archiving to S3 and republishing with a script works but requires custom code that EventBridge provides natively.",
      "Correct — EventBridge archive and replay re-sends events from a specific time range to the bus without custom tooling.",
      "A dead-letter queue only holds events that EventBridge failed to deliver; the incorrectly processed events were delivered successfully.",
      "An SQS queue retains messages for a limited time and requires custom code to feed the events back through the rules."
    ]
  },
  {
    id: 1201,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company has dozens of AWS accounts in AWS Organizations. The security team wants specific events, such as security group changes, from every account to be processed by a single set of Lambda functions in a central security account. New accounts are added regularly. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Deploy the Lambda functions into every account and have each function write its results to a shared Amazon S3 bucket.",
      "Configure an AWS CloudTrail trail in each account that delivers logs to a bucket the central functions scan hourly.",
      "Create rules in each account that send matching events to a central event bus whose policy allows the organization.",
      "Create an Amazon SNS topic in every account and subscribe the central Lambda functions to each topic individually."
    ],
    correct: [2],
    explanation: "EventBridge supports sending events from rules in one account to an event bus in another account; a resource-based policy on the central bus can allow the whole organization, and rules can be rolled out to new accounts with StackSets. Deploying the functions in every account duplicates code and operations across dozens of accounts.",
    optionExplanations: [
      "Deploying functions in every account multiplies the code, permissions, and monitoring that must be maintained.",
      "Scanning CloudTrail logs hourly adds delay and custom parsing instead of reacting to events as they happen.",
      "Correct — Cross-account event delivery to a central bus centralizes processing, and an organization-wide bus policy covers new accounts.",
      "Per-account SNS topics require a separate subscription for every account and do not filter events by content natively from AWS services."
    ]
  },
  {
    id: 1202,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An AWS Step Functions workflow calls a partner's inventory API through a Lambda function. The API occasionally returns temporary throttling errors that succeed if retried a few seconds later. If the call still fails after several attempts, the workflow must release the reserved stock and notify the operations team instead of simply failing. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Add a Retry rule with exponential backoff for the throttling error and a Catch rule that routes to compensation steps.",
      "Write retry and compensation logic inside the Lambda function and return a status code that the workflow inspects.",
      "Configure a dead-letter queue on the Lambda function and process failed invocations with a separate function.",
      "Use an Express workflow so that failed executions are retried automatically by Step Functions until they succeed."
    ],
    correct: [0],
    explanation: "Step Functions Retry fields provide declarative retries with exponential backoff for specified errors, and Catch fields send the execution to fallback states such as releasing stock and sending a notification once retries are exhausted. Putting this logic in the Lambda function works but adds custom code and can make the function run longer while it waits.",
    optionExplanations: [
      "Correct — Retry with backoff handles transient errors, and Catch routes persistent failures to compensation and notification states.",
      "Custom retry and compensation code inside the function duplicates built-in workflow features and is harder to maintain.",
      "A Lambda dead-letter queue applies to asynchronous invocations; Step Functions invokes the task synchronously, so it would not capture these failures.",
      "Express workflows do not retry entire executions until success; error handling still has to be defined with Retry and Catch."
    ]
  },
  {
    id: 1203,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A research company must run the same validation logic on several million objects stored in an Amazon S3 bucket every week. Each object can be processed independently in a few seconds. The process must run with high parallelism, tolerate individual item failures, and report which items failed. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Launch a large EC2 instance that lists the bucket and processes the objects with many threads in parallel.",
      "Use an inline Map state in a Step Functions Standard workflow to iterate over a list of object keys.",
      "Send every object key to an SQS queue and process it with an Auto Scaling group of EC2 instances.",
      "Use a Step Functions Distributed Map state that reads the S3 objects and runs child workflows in parallel."
    ],
    correct: [3],
    explanation: "A Distributed Map state can iterate directly over objects in an S3 bucket, run large numbers of child workflow executions in parallel, tolerate a configurable failure threshold, and write results, including failures, to S3. An inline Map state runs within a single execution with limited concurrency and history, so it is not suited to millions of items.",
    optionExplanations: [
      "A single instance is a single point of failure, limits parallelism, and requires custom code for failure tracking.",
      "An inline Map runs within one execution with limited concurrency and execution history, which does not scale to millions of items.",
      "SQS with EC2 workers can scale but requires managing instances and custom failure reporting, which adds overhead.",
      "Correct — Distributed Map iterates over S3 objects at massive parallelism with built-in failure tolerance and result reporting."
    ]
  },
  {
    id: 1204,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "Amazon S3 event notifications invoke a Lambda function asynchronously for each uploaded file. Some invocations fail repeatedly because of unexpected file formats, and after the automatic retries these events are discarded. The team needs every failed event, together with details about the error, sent to an Amazon SQS queue for investigation without changing the function code. What should a solutions architect do?",
    options: [
      "Add an on-failure destination for the function's asynchronous invocations that targets the queue.",
      "Change the S3 event notifications to target the SQS queue directly and stop invoking the function.",
      "Increase the function's timeout and memory so that it can finish processing the unexpected file formats.",
      "Set the function's reserved concurrency to zero when errors occur so that events wait in the queue."
    ],
    correct: [0],
    explanation: "Lambda destinations for asynchronous invocations send a record of each failed invocation, including the original event and error details, to a target such as an SQS queue after retries are exhausted. Sending events only to SQS would stop processing the valid files, which still need the function.",
    optionExplanations: [
      "Correct — An on-failure destination captures the event and the invocation result details once retries are exhausted, with no code changes.",
      "Targeting only the queue removes the function from the flow, so valid files would no longer be processed.",
      "More time or memory does not fix format errors; the invocations would still fail and be discarded.",
      "Setting reserved concurrency to zero throttles all invocations and does not capture failed events with their error details."
    ]
  },
  {
    id: 1205,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs many Lambda functions in one account. A customer-facing checkout function is occasionally throttled when batch processing functions in the same account scale up and consume most of the available concurrency. The company must guarantee that the checkout function can always scale to a defined level. What should a solutions architect do?",
    options: [
      "Configure provisioned concurrency on the batch processing functions so that their capacity is fixed.",
      "Increase the memory allocated to the checkout function so that each invocation completes more quickly.",
      "Configure reserved concurrency on the checkout function at the level it must always have.",
      "Deploy the checkout function in a second Region and route requests there when throttling occurs."
    ],
    correct: [2],
    explanation: "Reserved concurrency sets aside a portion of the account's concurrency exclusively for one function, so other functions cannot consume it, and it also caps that function at the same level. Provisioned concurrency on the batch functions pre-initializes environments but does not stop them from scaling beyond that amount.",
    optionExplanations: [
      "Provisioned concurrency pre-warms environments; it does not cap the batch functions, so they can still exhaust the account's concurrency.",
      "Faster invocations may reduce concurrency slightly but do not guarantee capacity when other functions spike.",
      "Correct — Reserved concurrency guarantees the checkout function its share of account concurrency regardless of other functions.",
      "A second Region adds deployment and routing complexity and still provides no guarantee in the primary Region."
    ]
  },
  {
    id: 1206,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An API built on Lambda functions reads and writes data in an Amazon RDS for PostgreSQL Multi-AZ DB instance. During traffic spikes, thousands of concurrent function invocations open new connections, the database exhausts its connections, and requests fail. Failovers also take longer than the company would like. Which solution will improve resilience with the LEAST application changes?",
    options: [
      "Add RDS read replicas and distribute the Lambda functions' connections across the replica endpoints.",
      "Put an Amazon SQS queue in front of the database and have a single worker apply all reads and writes.",
      "Scale the DB instance to a larger instance class so that it supports a higher maximum number of connections.",
      "Place Amazon RDS Proxy between the functions and the database to pool and reuse database connections."
    ],
    correct: [3],
    explanation: "RDS Proxy maintains a pool of database connections that many Lambda invocations share, preventing connection exhaustion, and it reduces failover times by keeping client connections open while routing to the new primary. Read replicas cannot help writes and would require read/write splitting in the application.",
    optionExplanations: [
      "Read replicas only serve reads, so write connections would still exhaust the primary and the application would need splitting logic.",
      "A single queue worker would serialize all reads and writes, breaking synchronous API reads and creating a bottleneck.",
      "A larger instance raises the limit but spikes can still exhaust it, and it does nothing to shorten failovers.",
      "Correct — RDS Proxy pools and reuses connections for bursty Lambda traffic and shortens failover disruption with only an endpoint change."
    ]
  },
  {
    id: 1207,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A ride-sharing company ingests location updates from vehicles. Updates for each vehicle must be processed in order. A real-time tracking service and a separate analytics service must each read all updates independently, and the analytics team must be able to reprocess the last 24 hours of data after a code change. Which service should a solutions architect use to ingest the updates?",
    options: [
      "An Amazon SQS FIFO queue with the vehicle ID as the message group ID and two consumer applications.",
      "An Amazon SNS standard topic with one subscription for each service and message filtering per vehicle.",
      "Amazon Data Firehose delivering the updates to Amazon S3 for both services to read as new files arrive.",
      "Amazon Kinesis Data Streams with the vehicle ID as the partition key and one application per service."
    ],
    correct: [3],
    explanation: "Kinesis Data Streams keeps records ordered per partition key, lets multiple consumers read the same stream independently, and retains data so consumers can replay from an earlier position. An SQS FIFO queue preserves order, but each message is consumed and deleted once, so two services cannot both read every message or replay it.",
    optionExplanations: [
      "With SQS, a message is deleted after a consumer processes it, so two services cannot each read every update or replay old data.",
      "SNS standard topics do not guarantee ordering and cannot replay messages that were already delivered.",
      "Firehose buffers data into S3 files, adding delay that does not suit real-time tracking and providing no per-vehicle ordering for consumers.",
      "Correct — Kinesis provides per-key ordering, multiple independent consumers, and replay within the stream's retention period."
    ]
  },
  {
    id: 1208,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company exposes a REST API to dozens of partners through Amazon API Gateway. Recently one partner's misconfigured integration sent a flood of requests that throttled the whole API and degraded service for every other partner. The company wants to limit the request rate of each partner individually. Which solution will meet these requirements?",
    options: [
      "Lower the stage-level throttling limits of the API so that the total request rate stays within backend capacity.",
      "Create usage plans with throttling limits and associate each partner's API key with an appropriate plan.",
      "Enable API caching on the stage so that repeated requests from any partner do not reach the backend.",
      "Place an Amazon CloudFront distribution in front of the API and enable AWS Shield Standard protection."
    ],
    correct: [1],
    explanation: "API Gateway usage plans apply throttling and quota limits per API key, so one partner exceeding its limit receives throttling errors while other partners are unaffected. Lowering stage-level limits caps the total but still lets a single partner consume the shared capacity.",
    optionExplanations: [
      "Stage-level limits apply to all callers together, so one noisy partner can still use up the shared limit.",
      "Correct — Usage plans with per-key throttling isolate each partner so a single client cannot degrade the API for others.",
      "Caching only helps identical cacheable requests and does not limit how many requests a single partner can send.",
      "Shield Standard protects against network-layer DDoS attacks, not against a legitimate client exceeding a fair request rate."
    ]
  },
  {
    id: 1209,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A file-processing application runs on EC2 instances in an Auto Scaling group behind an Application Load Balancer. Some uploads take up to two minutes. When the group scales in, users whose uploads are in progress on the terminating instance receive errors. Which solution will resolve this issue with the LEAST effort?",
    options: [
      "Set the target group's deregistration delay to a value longer than the longest upload duration.",
      "Enable sticky sessions on the target group so that each user stays on the same instance until done.",
      "Lengthen the health check grace period of the Auto Scaling group to keep instances in service.",
      "Disable scale-in for the Auto Scaling group and remove capacity manually during quiet periods."
    ],
    correct: [0],
    explanation: "With a deregistration delay (connection draining), the load balancer stops sending new requests to a deregistering target but lets in-flight requests finish, and Auto Scaling waits for deregistration to complete before terminating the instance. Sticky sessions keep a user on an instance but do not protect in-flight requests on an instance being terminated.",
    optionExplanations: [
      "Correct — A deregistration delay longer than the slowest upload lets in-flight requests complete before the instance is terminated.",
      "Stickiness routes users to the same target but does nothing to keep a terminating instance alive while requests finish.",
      "The health check grace period only affects newly launched instances and does not delay scale-in termination.",
      "Manual scale-in removes elasticity and adds operational work rather than fixing how in-flight requests are handled."
    ]
  },
  {
    id: 1210,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A web application on EC2 instances behind an Application Load Balancer builds a large in-memory cache during its first few minutes after startup. When the Auto Scaling group adds an instance, the load balancer immediately sends it a full share of traffic, its response times spike, and it sometimes fails health checks. How can a solutions architect fix this behavior?",
    options: [
      "Switch the target group's routing algorithm to least outstanding requests for all of its targets.",
      "Enable slow start mode on the target group so new targets get gradually more traffic.",
      "Increase the Auto Scaling group's default cooldown so that new instances are added less frequently.",
      "Replace the Application Load Balancer with a Network Load Balancer that has cross-zone load balancing."
    ],
    correct: [1],
    explanation: "Slow start mode gives a newly registered target a linearly increasing share of requests over a configured period, allowing it to warm its cache before receiving a full share. Least outstanding requests would actually favor the new, idle instance and can send it a burst of traffic.",
    optionExplanations: [
      "Least outstanding requests tends to send more requests to a new idle target, which can make the warm-up problem worse.",
      "Correct — Slow start ramps up traffic to new targets gradually so they can warm up before handling a full share of load.",
      "A longer cooldown changes how often scaling occurs but not how much traffic a new instance receives once registered.",
      "A Network Load Balancer has no slow start feature and would still send new targets a full share of connections."
    ]
  },
  {
    id: 1211,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company uses a Network Load Balancer with nodes in two Availability Zones. After an Auto Scaling event, one zone has two registered instances and the other has six, and the two instances in the first zone are overloaded while the others are underused. The company wants traffic distributed evenly across all registered instances. What should a solutions architect do?",
    options: [
      "Add a second Network Load Balancer in the zone with fewer instances and balance traffic with Route 53.",
      "Enable sticky sessions on the target group so that clients keep using the instances they first reached.",
      "Enable cross-zone load balancing so that each load balancer node distributes traffic to all targets.",
      "Change the target type from instance to IP address so that the load balancer spreads connections evenly."
    ],
    correct: [2],
    explanation: "Cross-zone load balancing is off by default for Network Load Balancers, so each node splits its traffic only among targets in its own zone; enabling it lets every node distribute traffic across targets in all enabled zones. Changing the target type does not alter how nodes in each zone choose targets.",
    optionExplanations: [
      "Another load balancer adds cost and complexity while each node would still favor targets in its own zone.",
      "Stickiness keeps clients on the same targets and would preserve the imbalance rather than correct it.",
      "Correct — With cross-zone load balancing, each node spreads traffic across all registered targets regardless of zone.",
      "The target type affects how targets are registered, not whether nodes distribute traffic across zones."
    ]
  },
  {
    id: 1212,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "Application servers in an Auto Scaling group write important log files to their local instance store. When instances are terminated during scale-in, the latest logs are lost before the hourly upload job runs. The company must copy each instance's remaining logs to Amazon S3 before the instance is terminated. Which solution will meet this requirement?",
    options: [
      "Add a termination lifecycle hook that pauses the instance while a script uploads its logs to S3.",
      "Enable termination protection on the instances so that scale-in cannot remove them until logs are copied.",
      "Switch the Auto Scaling group to a termination policy that removes the oldest instances first.",
      "Take an EBS snapshot of each instance from an EventBridge rule when a termination event occurs."
    ],
    correct: [0],
    explanation: "A termination lifecycle hook puts the instance into a wait state before termination, giving a script time to upload the remaining logs and then complete the lifecycle action. Snapshots taken after a termination event are too late, and instance store data is not captured by EBS snapshots at all.",
    optionExplanations: [
      "Correct — A termination lifecycle hook holds the instance in a wait state so the logs can be copied before it is terminated.",
      "Instance termination protection does not stop Auto Scaling scale-in, and blocking termination would not upload the logs anyway.",
      "A termination policy only chooses which instance is removed; that instance's unsent logs would still be lost.",
      "EBS snapshots do not include instance store volumes, and a snapshot triggered by the termination event may not run in time."
    ]
  },
  {
    id: 1213,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An application in an Auto Scaling group needs about 10 minutes after launch to install dependencies and load reference data before it can serve requests. Traffic spikes arrive without warning, so new instances are ready too late. The company wants to reduce scale-out time without keeping extra running instances at all times. What should a solutions architect recommend?",
    options: [
      "Increase the minimum capacity of the group so that enough instances are always running for any spike.",
      "Add a predictive scaling policy so that capacity is launched before forecast increases in demand.",
      "Create a scheduled action that raises the desired capacity every morning before business hours begin.",
      "Add a warm pool of pre-initialized stopped instances that the group can move into service quickly."
    ],
    correct: [3],
    explanation: "A warm pool keeps instances that have already completed initialization in a stopped (or hibernated) state, so scale-out only needs to start them, which avoids paying for running capacity. Predictive and scheduled scaling depend on recurring patterns, which these unpredictable spikes do not have.",
    optionExplanations: [
      "A higher minimum keeps extra instances running all the time, which the company wants to avoid.",
      "Predictive scaling relies on recurring load patterns, so it cannot anticipate spikes that arrive without warning.",
      "A scheduled action only helps with known times and still runs extra instances whether or not a spike occurs.",
      "Correct — Pre-initialized stopped instances in a warm pool can enter service quickly without the cost of running spare capacity."
    ]
  },
  {
    id: 1214,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A payment platform runs an active-passive deployment in two AWS Regions. Operators must be able to shift all traffic to the standby Region reliably during an incident, even if some AWS control plane operations in the primary Region are impaired, and safety checks must prevent both Regions from being turned off at once. Which solution will meet these requirements?",
    options: [
      "Use Route 53 failover records and have operators update the records through the console during an incident.",
      "Use Amazon Route 53 Application Recovery Controller routing controls with safety rules to switch Regions.",
      "Use Route 53 weighted records and have operators change the weights of each Region during an incident.",
      "Use CloudFront origin failover between the load balancers in both Regions to move traffic automatically."
    ],
    correct: [1],
    explanation: "Route 53 Application Recovery Controller routing controls act as highly available on/off switches backed by a data plane spread across multiple Regions, and safety rules can enforce that at least one Region stays active. Editing DNS records during an incident relies on the Route 53 control plane, which is what the company wants to avoid depending on.",
    optionExplanations: [
      "Editing records during an incident depends on the Route 53 control plane and provides no safety rules against mistakes.",
      "Correct — ARC routing controls provide reliable, data-plane-based traffic switching, and safety rules prevent unsafe states.",
      "Changing weights is also a control plane operation and offers no guardrail against sending traffic nowhere.",
      "CloudFront origin failover reacts per request to errors and does not give operators controlled Regional failover with safety checks."
    ]
  },
  {
    id: 1215,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A developer accidentally ran a DELETE statement without a WHERE clause on a production Amazon Aurora MySQL DB cluster 15 minutes ago. The company wants to return the existing cluster to the state just before the mistake as quickly as possible, without creating a new cluster or changing application endpoints. Backtracking was enabled when the cluster was created. What should a solutions architect do?",
    options: [
      "Restore the cluster to a point in time just before the DELETE and point the application at the new cluster.",
      "Promote one of the cluster's Aurora Replicas to be the writer so that it serves the original data.",
      "Restore the most recent automated snapshot to a new cluster and copy the deleted rows back to production.",
      "Backtrack the existing DB cluster to a time just before the DELETE statement was run."
    ],
    correct: [3],
    explanation: "Aurora MySQL Backtrack rewinds the existing cluster in place to a prior point in time, usually within minutes, with no new cluster or endpoint change. Point-in-time recovery is a valid recovery method but always creates a new cluster, which requires changing application endpoints and takes longer.",
    optionExplanations: [
      "Point-in-time recovery creates a new cluster, so the application endpoints must change and the restore takes longer.",
      "Aurora Replicas share the same cluster volume, so the deleted rows are gone from every replica as well.",
      "Restoring a snapshot and copying rows back is slow, error-prone, and loses changes made after the snapshot.",
      "Correct — Backtrack rewinds the same cluster in place to just before the mistake, quickly and without endpoint changes."
    ]
  },
  {
    id: 1216,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs an Amazon RDS for MySQL Multi-AZ DB instance in one Region. For disaster recovery, it needs an RPO of a few minutes if the entire Region becomes unavailable and wants to be able to bring up a writable database in a second Region quickly. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "Create a cross-Region read replica and promote it to a standalone instance in a disaster.",
      "Copy automated snapshots to the second Region every day and restore the latest snapshot during a disaster.",
      "Add a second Multi-AZ standby in another Availability Zone of the primary Region for extra protection.",
      "Migrate the database to Amazon Aurora and add an Aurora global database secondary cluster in the second Region."
    ],
    correct: [0],
    explanation: "A cross-Region read replica uses asynchronous replication, typically keeping the RPO to minutes, and can be promoted to a standalone writable instance during a Regional disaster. Daily snapshot copies are cheaper but give an RPO of up to a day, which does not meet the requirement.",
    optionExplanations: [
      "Correct — An asynchronously replicated cross-Region replica gives an RPO of minutes and can be promoted to become writable.",
      "Daily snapshot copies give an RPO of up to 24 hours and a slower restore, which does not meet the target.",
      "Any additional standby in the same Region does not protect against the loss of the whole Region.",
      "An Aurora global database meets the RPO but requires a migration and costs more than needed for minutes-level RPO."
    ]
  },
  {
    id: 1217,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A faulty deployment corrupted items in an Amazon DynamoDB table at an unknown time during the last three days. The team can identify the exact moment the bad release started writing data from application logs and must restore the table to the state at that second. Which feature should the company have enabled to meet this requirement?",
    options: [
      "On-demand backups of the table created by a daily AWS Backup plan.",
      "DynamoDB Streams with a Lambda function that copies changes to Amazon S3.",
      "Point-in-time recovery, restoring the table to a new table at that second.",
      "A DynamoDB global table replica in a second Region that holds earlier data."
    ],
    correct: [2],
    explanation: "Point-in-time recovery continuously backs up the table and can restore it to any second within the recovery window, creating a new table at that state. Daily on-demand backups only capture fixed moments, so data written between the backup and the bad release would be lost.",
    optionExplanations: [
      "Daily backups capture only the times they run, so they cannot restore to the exact second before corruption.",
      "Copying stream records to S3 would require custom code to rebuild the table and only keeps a limited history.",
      "Correct — PITR restores the table to any second within its retention window, matching the exact moment required.",
      "Global table replicas replicate writes, including corrupted ones, within about a second, so they offer no historical copy."
    ]
  },
  {
    id: 1218,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company stores customer orders in an Amazon DynamoDB table. Every time a new order is inserted, the company must send a confirmation email and update a loyalty points service. The order application should not be modified to call these services, and failures in the email system must not affect order writes. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Schedule a Lambda function every minute that scans the table for new orders and calls both services.",
      "Enable DynamoDB Streams on the table and use a Lambda function triggered by new item records.",
      "Export the table to Amazon S3 every hour and process the export with an AWS Glue job for new orders.",
      "Add a DynamoDB Accelerator (DAX) cluster and have it notify both services when items are written."
    ],
    correct: [1],
    explanation: "DynamoDB Streams captures item-level changes in order, and a Lambda event source mapping processes new item records asynchronously from the write path, so order writes are unaffected by downstream failures. Scanning the table every minute is inefficient, consumes read capacity, and makes detecting new items unreliable.",
    optionExplanations: [
      "Repeated scans consume read capacity, add delay, and need custom logic to track which orders are new.",
      "Correct — Streams plus a Lambda trigger reacts to each insert without changing the application and keeps downstream failures off the write path.",
      "Hourly exports add long delays and use batch tooling for what should be a near-real-time reaction.",
      "DAX is an in-memory read cache and has no capability to notify other services about writes."
    ]
  },
  {
    id: 1219,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A financial company replicates trade confirmations from an Amazon S3 bucket in one Region to a bucket in another Region. A new regulation requires the company to demonstrate that replication completes within a predictable, contractually backed time and to be alerted when objects take longer than expected to replicate. Which solution will meet these requirements?",
    options: [
      "Use S3 Batch Replication on a schedule to copy any objects that were not replicated in time.",
      "Configure S3 Event Notifications for every upload and compare timestamps in a Lambda function.",
      "Run AWS DataSync tasks every few minutes to copy new objects to the bucket in the second Region.",
      "Enable S3 Replication Time Control on the replication rule and use its replication metrics and events."
    ],
    correct: [3],
    explanation: "S3 Replication Time Control replicates most objects within a defined time backed by a service level agreement and provides replication metrics and events for objects that exceed the threshold. Batch Replication is designed to backfill existing or failed objects, not to guarantee replication time for new uploads.",
    optionExplanations: [
      "Batch Replication backfills existing or failed objects on demand and provides no time guarantee or alerting for new uploads.",
      "A custom timestamp comparison adds code to maintain and still offers no contractual guarantee on replication time.",
      "Scheduled DataSync tasks replace native replication with batch copies and offer no SLA-backed replication time.",
      "Correct — Replication Time Control provides an SLA-backed replication time plus metrics and notifications for late objects."
    ]
  },
  {
    id: 1220,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An application stores design files in an Amazon S3 bucket. A bug recently overwrote hundreds of files with empty content, and the company could not recover them. The company wants to be able to restore any object to an earlier state for 30 days after it is overwritten or deleted, while keeping storage costs under control. Which solution will meet these requirements?",
    options: [
      "Configure Cross-Region Replication to another bucket so that a second copy of every object exists.",
      "Enable S3 Object Lock in compliance mode with a 30-day retention period on every object.",
      "Enable S3 Versioning and add a lifecycle rule that expires noncurrent versions after 30 days.",
      "Create a daily AWS Backup plan for the bucket with backups that are retained for 30 days."
    ],
    correct: [2],
    explanation: "S3 Versioning keeps prior versions when objects are overwritten or deleted, so any earlier state can be restored, and a lifecycle rule on noncurrent versions limits how long old versions incur storage costs. Replication alone would copy the empty overwrites to the destination as well.",
    optionExplanations: [
      "Replication copies new writes, including the faulty overwrites, so the second bucket would contain the same empty files.",
      "Compliance-mode Object Lock prevents deleting locked versions, which is stricter than needed and blocks legitimate cleanup.",
      "Correct — Versioning preserves earlier versions for recovery, and expiring noncurrent versions after 30 days controls cost.",
      "Daily backups cannot recover changes made between backups, so files edited and overwritten on the same day would be lost."
    ]
  },
  {
    id: 1221,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a content management system on EC2 instances that share an Amazon EFS file system. For disaster recovery, the company needs a read-only copy of the file system in a second Region that is kept up to date with an RPO of minutes and can be made writable quickly during a Regional outage. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Configure EFS replication to create a replica file system in the second Region and fail over to it.",
      "Create an AWS Backup plan that copies EFS backups to the second Region every hour.",
      "Schedule AWS DataSync tasks that copy changed files to a file system in the second Region.",
      "Run an rsync job on an EC2 instance that synchronizes files to the second Region every few minutes."
    ],
    correct: [0],
    explanation: "EFS replication continuously keeps a read-only replica file system in another Region, with most changes replicated within minutes, and the replica can be made writable by deleting the replication configuration during failover. Hourly AWS Backup copies cannot achieve an RPO of minutes.",
    optionExplanations: [
      "Correct — Native EFS replication maintains a cross-Region replica with an RPO of minutes and simple failover.",
      "Hourly backup copies give an RPO of up to an hour and require a restore before the data can be used.",
      "Scheduled DataSync tasks work but add task scheduling and monitoring that native replication avoids.",
      "A self-managed rsync job on an instance adds a single point of failure and ongoing maintenance."
    ]
  },
  {
    id: 1222,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company is moving Windows-based departmental file shares to AWS. Users access them over SMB with Active Directory permissions. The file shares must remain available automatically if an Availability Zone fails, and the company does not want to manage Windows servers. Which solution will meet these requirements?",
    options: [
      "Deploy Amazon FSx for Windows File Server as a Single-AZ file system with daily automatic backups.",
      "Use an Amazon EFS file system with Regional storage mounted by Windows clients over the network.",
      "Run Windows file servers on EC2 instances in two Availability Zones with DFS Replication between them.",
      "Deploy Amazon FSx for Windows File Server as a Multi-AZ file system joined to the Active Directory."
    ],
    correct: [3],
    explanation: "A Multi-AZ FSx for Windows File Server file system runs a preferred and a standby file server in different Availability Zones and fails over automatically, while integrating with Active Directory over SMB. A Single-AZ deployment with backups would require a restore after an Availability Zone failure.",
    optionExplanations: [
      "A Single-AZ file system becomes unavailable if its zone fails, and restoring from backup is a manual, slow recovery.",
      "Amazon EFS uses the NFS protocol and is not supported for Windows SMB clients with Active Directory permissions.",
      "Self-managed Windows servers with DFS Replication work but require the server management the company wants to avoid.",
      "Correct — Multi-AZ FSx for Windows provides managed SMB shares with AD integration and automatic failover across zones."
    ]
  },
  {
    id: 1223,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company uses AWS Backup to protect Amazon RDS databases and Amazon EBS volumes. Auditors have asked for regular evidence that backups can actually be restored and that restore times meet the documented RTO. The company wants to minimize manual effort. Which solution will meet these requirements?",
    options: [
      "Turn on AWS Backup Audit Manager reports that show whether each resource is covered by a backup plan.",
      "Create AWS Backup restore testing plans that periodically restore recovery points and record the results.",
      "Ask operators to restore a random backup each quarter and document the time it takes in a runbook.",
      "Enable cross-Region copy in each backup plan so that a second copy of every backup is always available."
    ],
    correct: [1],
    explanation: "AWS Backup restore testing automatically restores selected recovery points on a schedule, can run validation, records restore durations and results, and then cleans up the test resources. Audit Manager reports prove that backups exist and comply with policies but do not prove that they can be restored.",
    optionExplanations: [
      "Audit Manager reports show backup coverage and compliance but do not perform or time any restores.",
      "Correct — Restore testing plans automate periodic restores, capture restore times and outcomes, and remove test resources afterward.",
      "Manual quarterly restores add operational effort and provide only infrequent evidence.",
      "A second copy improves durability but provides no evidence that backups can be restored within the RTO."
    ]
  },
  {
    id: 1224,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a web application on AWS Elastic Beanstalk with its database in a separate Amazon RDS instance. Releases sometimes fail in ways that are only noticed after deployment. The team wants to test each new version in a full production-like environment before it receives traffic and to be able to roll back almost instantly. Which deployment approach will meet these requirements?",
    options: [
      "Use a rolling deployment that updates batches of instances in the existing environment one at a time.",
      "Use an all-at-once deployment and redeploy the previous version from the application versions if needed.",
      "Deploy to a cloned environment and swap environment URLs, swapping back if a problem appears.",
      "Use an immutable deployment that launches new instances in a temporary Auto Scaling group in the environment."
    ],
    correct: [2],
    explanation: "A blue/green deployment on Elastic Beanstalk deploys the new version to a separate environment that can be tested on its own URL, then swaps CNAMEs to move traffic, and rollback is another URL swap. Immutable deployments are safe, but they occur within the same environment and do not allow testing the new version before it serves production traffic.",
    optionExplanations: [
      "Rolling deployments mix versions in production and require redeploying the old version to roll back.",
      "All-at-once deployments cause downtime and a slow rollback because the old version must be deployed again.",
      "Correct — Blue/green with a URL swap lets the team test the new environment first and roll back by swapping again.",
      "Immutable deployments add new instances to the live environment, so the new version is not tested separately first and rollback is slower."
    ]
  },
  {
    id: 1225,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company must deploy the same baseline resources, including IAM roles, Amazon CloudWatch alarms, and AWS Config rules, to every account in its organization in three Regions. When a new account joins a specific organizational unit, the baseline must be deployed automatically. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Run a CI/CD pipeline that loops through each account and Region and deploys a CloudFormation stack.",
      "Use CloudFormation StackSets with service-managed permissions and automatic deployment to the OU.",
      "Share the CloudFormation template through AWS Resource Access Manager so that each account deploys it.",
      "Write an EventBridge-triggered Lambda function that deploys the resources when an account is created."
    ],
    correct: [1],
    explanation: "CloudFormation StackSets with service-managed permissions deploy a single template to many accounts and Regions in AWS Organizations, and automatic deployment adds the stack to accounts that join the target OU. A custom pipeline or Lambda function could do this but requires building and maintaining cross-account deployment logic.",
    optionExplanations: [
      "A custom pipeline must handle credentials, retries, and new accounts itself, which adds maintenance.",
      "Correct — StackSets deploy across accounts and Regions from one template and automatically cover new accounts in the OU.",
      "AWS RAM does not share CloudFormation templates, and each account would still have to deploy the stack itself.",
      "A custom Lambda deployer adds code to maintain and duplicates what StackSets provides natively."
    ]
  },
  {
    id: 1226,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a TCP-based trading application behind Network Load Balancers in two Regions. Clients connect by IP address and many of them cache DNS results for long periods, so DNS-based failover has been too slow. The company needs traffic to move to the healthy Region within seconds if one Region fails. Which solution will meet these requirements?",
    options: [
      "Use AWS Global Accelerator with an endpoint group per Region and its static anycast IP addresses.",
      "Reduce the TTL of the Route 53 failover records so that clients refresh DNS answers more frequently.",
      "Use Amazon CloudFront with an origin group that contains the Network Load Balancers in both Regions.",
      "Assign an Elastic IP address to the primary load balancer and remap it to the second Region during failover."
    ],
    correct: [0],
    explanation: "Global Accelerator provides static anycast IP addresses that clients use directly, health checks the endpoints in each Region, and shifts traffic to healthy endpoint groups within seconds without depending on DNS caching. Lowering TTLs does not help clients that ignore TTLs and cache DNS results.",
    optionExplanations: [
      "Correct — Global Accelerator's static IPs and health-based routing move traffic between Regions quickly without relying on DNS.",
      "Clients that cache DNS results for long periods ignore low TTLs, so failover would remain slow for them.",
      "CloudFront is designed for HTTP and HTTPS content delivery, not for arbitrary TCP connections to a trading application.",
      "Elastic IP addresses are Regional resources and cannot be moved to a load balancer in another Region."
    ]
  },
  {
    id: 1227,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company has designed a multi-AZ application with Auto Scaling, Aurora Replicas, and health checks, but it has never verified how the system behaves when instances are terminated or an Availability Zone becomes impaired. The company wants to run controlled experiments that automatically stop if customer-facing error rates rise too high. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Write scripts that terminate random instances on a schedule and have operators watch the dashboards.",
      "Use AWS Fault Injection Service experiments with CloudWatch alarms configured as stop conditions.",
      "Use AWS Resilience Hub to calculate the estimated RTO and RPO of the application from its design.",
      "Run load tests with a third-party tool from EC2 instances to check that the group scales correctly."
    ],
    correct: [1],
    explanation: "AWS Fault Injection Service runs managed fault injection experiments, such as terminating instances or disrupting an Availability Zone, and stops them automatically when a CloudWatch alarm used as a stop condition goes into alarm. Resilience Hub assesses and tracks resilience against targets but does not itself inject the real faults described.",
    optionExplanations: [
      "Custom termination scripts lack built-in safety controls and depend on operators to stop experiments manually.",
      "Correct — FIS provides managed fault injection with alarm-based stop conditions to protect customers during experiments.",
      "Resilience Hub estimates resilience from the application's configuration but does not run the controlled failure experiments requested.",
      "Load tests check scaling under traffic but do not simulate instance or Availability Zone failures."
    ]
  },
  {
    id: 1228,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company connects its data center to its VPC with a single AWS Direct Connect connection. A recent fiber cut caused a full outage of hybrid traffic. The company needs connectivity to continue automatically if the Direct Connect connection fails; reduced bandwidth and higher latency are acceptable during a failure. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "Order a second Direct Connect connection at a different Direct Connect location as a standby path.",
      "Add a second virtual interface on the existing Direct Connect connection for redundant routing.",
      "Configure an AWS Site-to-Site VPN connection over the internet as a backup to the Direct Connect link.",
      "Use AWS Transit Gateway Connect attachments to create redundant tunnels over the same connection."
    ],
    correct: [2],
    explanation: "A Site-to-Site VPN over the internet is a low-cost backup path; with BGP, traffic prefers Direct Connect and fails over to the VPN automatically when the connection goes down. A second Direct Connect connection at another location gives the highest resiliency but costs much more than needed when reduced bandwidth is acceptable.",
    optionExplanations: [
      "A second Direct Connect connection is more resilient but significantly more expensive than the requirements justify.",
      "Additional virtual interfaces still rely on the same physical connection, so a fiber cut would take them all down.",
      "Correct — A VPN backup provides automatic failover over the internet at low cost, accepting reduced performance during outages.",
      "Connect attachments that run over the same Direct Connect connection share its physical failure point."
    ]
  },
  {
    id: 1229,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A Lambda function processes records from an Amazon Kinesis data stream. Occasionally a single malformed record makes the function fail. Lambda then retries the whole batch repeatedly, processing of that shard stops until the record expires, and downstream data falls far behind. The company wants valid records to keep flowing and wants failed records preserved for analysis. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Increase the number of shards in the stream so that the malformed record affects less data.",
      "Configure the event source mapping to split a failing batch in two and retry each half separately.",
      "Increase the function's timeout so that it has more time to process the malformed record.",
      "Set a maximum retry count on the event source mapping and add an on-failure destination such as SQS.",
      "Attach an Amazon SQS dead-letter queue directly to the Kinesis data stream for failed records."
    ],
    correct: [1, 3],
    explanation: "Bisecting a failing batch isolates the bad record so the valid records around it are processed, and limiting retries with an on-failure destination lets the shard move on while sending details of the failed records to SQS or SNS. Kinesis data streams do not have their own dead-letter queues; failure handling is configured on the Lambda event source mapping.",
    optionExplanations: [
      "More shards spread the data but a malformed record still blocks its own shard indefinitely.",
      "Correct — Splitting the batch on error isolates the bad record so valid records in the same batch are processed.",
      "The record fails because of its content, not lack of time, so a longer timeout only slows the retries.",
      "Correct — Limiting retries and sending failed record details to an on-failure destination unblocks the shard and preserves failures.",
      "Kinesis data streams have no dead-letter queue setting; failed records are handled by the event source mapping's destination."
    ]
  },
  {
    id: 1230,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "After a ransomware incident at a peer company, a company wants to make sure its AWS Backup recovery points cannot be deleted or have their retention shortened, even by an administrator whose credentials in the production account are compromised. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Apply AWS Backup Vault Lock in compliance mode to the vaults that store the recovery points.",
      "Enable S3 Versioning on the backup vaults so that deleted recovery points can be recovered.",
      "Copy recovery points to a backup vault in a separate account dedicated to backups in the organization.",
      "Increase the retention period of every backup rule so that recovery points are kept for longer.",
      "Encrypt the recovery points with an AWS managed key so that only AWS Backup can read them."
    ],
    correct: [0, 2],
    explanation: "Vault Lock in compliance mode makes the vault's retention settings immutable and prevents anyone, including administrators and the root user, from deleting recovery points early. Copying backups to a vault in a separate, tightly controlled account isolates them from compromised credentials in the production account.",
    optionExplanations: [
      "Correct — Compliance-mode Vault Lock prevents deletion or shortening of retention for recovery points by any user.",
      "Backup vaults are not S3 buckets, so S3 Versioning cannot be enabled on them.",
      "Correct — A copy in a separate backup account is isolated from compromised credentials in the production account.",
      "Longer retention does not stop a compromised administrator from deleting recovery points or changing the rules.",
      "Encryption with an AWS managed key does not prevent deletion and complicates copying backups to another account."
    ]
  },
  {
    id: 1231,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company runs a stateless batch-processing fleet on Spot Instances in an Auto Scaling group that uses one instance type in one Availability Zone. When Spot capacity for that type is reclaimed, many instances are interrupted at once and work stalls until capacity returns. Which combination of steps will improve the fleet's resilience while keeping Spot savings? (Select TWO)",
    options: [
      "Use a mixed instances policy with several instance types across multiple Availability Zones.",
      "Switch the group to the largest instance type available so that fewer instances are needed overall.",
      "Lengthen the health check grace period so that interrupted instances are kept in service for longer.",
      "Add a scheduled action that increases the desired capacity during the hours when interruptions occur.",
      "Enable Capacity Rebalancing so that at-risk Spot Instances are proactively replaced before interruption."
    ],
    correct: [0, 4],
    explanation: "Diversifying across many instance types and Availability Zones with a price-capacity-optimized allocation draws from more Spot capacity pools, so a reclaim in one pool affects only part of the fleet. Capacity Rebalancing launches replacements when Spot Instances receive a rebalance recommendation, before they are interrupted.",
    optionExplanations: [
      "Correct — Diversifying instance types and zones spreads the fleet across many Spot capacity pools and reduces simultaneous interruptions.",
      "A single larger instance type still draws from few capacity pools, so interruptions remain concentrated.",
      "Interrupted Spot Instances are reclaimed by AWS regardless of health check settings.",
      "Scheduled capacity increases from the same pool will be interrupted in the same way and do not address the root cause.",
      "Correct — Capacity Rebalancing proactively replaces Spot Instances that are at elevated risk of interruption."
    ]
  },
  {
    id: 1232,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A Lambda function processes batches of messages from an Amazon SQS standard queue. When one message in a batch fails, the whole batch returns to the queue, so successful messages are processed again and duplicate records appear in the database. The company wants to keep the current batch size for throughput. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Reduce the batch size to one message so that each failure affects only a single message.",
      "Enable partial batch responses so that the function reports only the failed messages for retry.",
      "Increase the visibility timeout of the queue so that failed batches are retried less frequently.",
      "Make the processing logic idempotent so that a message processed twice has no additional effect.",
      "Switch the queue to a FIFO queue so that messages are always delivered to the function only once."
    ],
    correct: [1, 3],
    explanation: "Reporting batch item failures lets Lambda delete the successful messages and return only the failed ones to the queue, removing most reprocessing, and idempotent processing protects against the duplicates that at-least-once delivery can still cause. A batch size of one would also avoid batch reprocessing but sacrifices the throughput the company wants to keep.",
    optionExplanations: [
      "A batch size of one avoids batch retries but greatly reduces throughput, which the company wants to keep.",
      "Correct — Partial batch responses return only failed messages to the queue, so successful messages are not reprocessed.",
      "A longer visibility timeout only delays retries; the whole batch would still be processed again.",
      "Correct — Idempotent processing ensures any remaining duplicate deliveries do not create duplicate records.",
      "FIFO deduplication applies to producer sends; a failed batch would still be redelivered and reprocessed."
    ]
  },
  {
    id: 1233,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company runs an Amazon ECS service on an EC2-backed cluster. The cluster's Auto Scaling group launches instances in a single subnet, and the service uses a binpack placement strategy. An Availability Zone outage recently stopped every task in the service. Which combination of changes will make the service resilient to the loss of an Availability Zone? (Select TWO)",
    options: [
      "Change the service's placement strategy to spread tasks evenly across Availability Zones.",
      "Use larger instance types so that each container instance can run more tasks of the service.",
      "Add a placement constraint so that each task runs on a distinct container instance in the cluster.",
      "Increase the desired task count so that more copies of the service run in the existing subnet.",
      "Use a capacity provider whose Auto Scaling group spans subnets in multiple Availability Zones."
    ],
    correct: [0, 4],
    explanation: "The cluster needs container instances in several Availability Zones, which an Auto Scaling group capacity provider spanning multiple subnets with managed scaling provides, and the service must spread its tasks across those zones instead of packing them together. A distinct-instance constraint spreads tasks across hosts but cannot help if every host is in the same zone.",
    optionExplanations: [
      "Correct — An AZ spread placement strategy distributes tasks across zones so one zone's failure leaves other tasks running.",
      "Larger instances concentrate even more tasks in fewer hosts in the same zone, increasing the impact of a failure.",
      "Distinct instances spread tasks across hosts, but all hosts are still in the same Availability Zone.",
      "More tasks in the same subnet still share a single Availability Zone and would all fail together.",
      "Correct — A capacity provider backed by a multi-AZ Auto Scaling group gives the cluster capacity in several zones."
    ]
  },
  {
    id: 1234,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company runs a nightly reconciliation job using cron on a single EC2 instance. The job is packaged as a container and runs for about two hours. If the instance is unhealthy at the scheduled time, the job does not run, and the team must also patch the instance. The company wants a resilient solution with the LEAST operational overhead. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Run cron on two EC2 instances in different Availability Zones so that one can run the job if the other fails.",
      "Create an Amazon EventBridge Scheduler schedule that starts the job at the required time every night.",
      "Run the containerized job as an Amazon ECS task on AWS Fargate launched by the schedule.",
      "Package the job as a Lambda function and invoke it from the schedule to remove all servers.",
      "Enable EC2 automatic recovery on the instance so that it is recovered if the host has a problem."
    ],
    correct: [1, 2],
    explanation: "EventBridge Scheduler is a managed, highly available scheduler that can launch an ECS task directly, and running the existing container on Fargate removes the instance to patch and the single point of failure. Lambda is not suitable because a two-hour job exceeds the maximum Lambda execution time.",
    optionExplanations: [
      "Two cron instances would both run the job unless custom coordination is built, and both still need patching.",
      "Correct — EventBridge Scheduler is a managed, highly available service that triggers the job on schedule.",
      "Correct — A Fargate task runs the existing container without servers to patch and with no single host to fail.",
      "A two-hour job exceeds Lambda's maximum execution duration, so it cannot run as a single function invocation.",
      "Automatic recovery helps with some host failures but keeps a single instance that still needs patching and can miss runs."
    ]
  },
  {
    id: 1235,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A machine learning team trains models on a fleet of Amazon EC2 instances in a single Availability Zone. Each training epoch issues millions of small read requests against a dataset in Amazon S3, and request latency in S3 Standard has become the main bottleneck. The data can be re-created from a source system if lost. Which solution will provide the LOWEST request latency?",
    options: [
      "Store the data in an S3 Express One Zone directory bucket in the instances' Availability Zone.",
      "Enable S3 Transfer Acceleration on the existing bucket and read through the accelerate endpoint.",
      "Move the data to S3 Standard-Infrequent Access and read it with byte-range fetches in parallel.",
      "Put an Amazon CloudFront distribution in front of the bucket and read the objects through it."
    ],
    correct: [0],
    explanation: "S3 Express One Zone is a high-performance storage class in directory buckets that delivers consistent single-digit millisecond request latency, and co-locating it with the compute in the same Availability Zone minimizes latency further. Its single-AZ durability is acceptable because the data can be re-created. Transfer Acceleration optimizes long-distance transfers over the internet, not request latency from compute in the same Region.",
    optionExplanations: [
      "Correct — S3 Express One Zone is designed for latency-sensitive, request-intensive workloads co-located with compute in one AZ.",
      "Transfer Acceleration routes uploads and downloads through edge locations for distant clients; it does not lower per-request latency for instances in the same Region.",
      "S3 Standard-IA has the same request latency as S3 Standard plus retrieval charges, and byte-range fetches do not help with millions of small objects.",
      "CloudFront caches content for internet viewers at edge locations; it adds a hop for EC2 instances inside the Region and is not designed for this access pattern."
    ]
  },
  {
    id: 1236,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A streaming company serves video segments worldwide through Amazon CloudFront from a custom origin running in a single AWS Region. During popular live events, many regional edge caches request the same segments from the origin at the same time, overloading it. The company wants to reduce origin load and improve the cache hit ratio without changing the application. What should a solutions architect do?",
    options: [
      "Create additional CloudFront distributions for each continent that point to the same origin servers.",
      "Enable CloudFront Origin Shield in the AWS Region that is closest to the origin.",
      "Increase the minimum TTL and forward all request headers to the origin for each request.",
      "Replace the custom origin with an S3 bucket that has S3 Transfer Acceleration turned on."
    ],
    correct: [1],
    explanation: "Origin Shield adds a centralized caching layer in front of the origin, so requests from all regional edge caches are consolidated and only one request per object reaches the origin. This raises the cache hit ratio and protects the origin during traffic spikes. Additional distributions would multiply, not reduce, the number of caches that request content from the origin.",
    optionExplanations: [
      "More distributions create more independent caches that each fetch from the origin, which increases origin load.",
      "Correct — Origin Shield collapses requests from regional edge caches into a single caching layer in front of the origin.",
      "Forwarding all headers fragments the cache key and lowers the hit ratio, which increases origin load.",
      "Transfer Acceleration speeds up client-to-S3 transfers; it does not consolidate CloudFront cache misses and requires re-architecting a live origin."
    ]
  },
  {
    id: 1237,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A data processing application runs on a single Amazon EC2 instance with four gp3 EBS volumes attached. Monitoring shows that the combined throughput of the volumes stops increasing at a level well below the sum of the throughput provisioned on each volume, and no individual volume reaches its own limit. Which action will MOST likely increase storage throughput?",
    options: [
      "Convert the four gp3 volumes to io2 Block Express volumes with higher provisioned IOPS.",
      "Stripe the four volumes together in a RAID 0 array at the operating system level.",
      "Move to an instance type that offers higher dedicated Amazon EBS bandwidth.",
      "Attach four additional gp3 volumes so that the I/O is spread over more devices."
    ],
    correct: [2],
    explanation: "Every EC2 instance type has a maximum EBS bandwidth, and when aggregate volume throughput plateaus below what the volumes are provisioned for, the instance is the bottleneck. Moving to an EBS-optimized instance type with higher EBS bandwidth removes that cap. Faster volumes, RAID 0 or more volumes all still pass through the same instance-level limit.",
    optionExplanations: [
      "The volumes are not at their limits, so faster volumes do not help while the instance's EBS bandwidth is the constraint.",
      "RAID 0 aggregates volume performance, but the total is still capped by the instance's EBS bandwidth.",
      "Correct — the instance-level EBS bandwidth limit is the bottleneck, so a larger or EBS-optimized instance type raises the ceiling.",
      "More volumes add provisioned throughput that the instance cannot use because its EBS bandwidth is already saturated."
    ]
  },
  {
    id: 1238,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company is moving Windows-based engineering applications to AWS. The applications read and write shared files over the SMB protocol, rely on NTFS permissions tied to Active Directory users, and need consistent low-latency SSD performance. The company has no NetApp-specific requirements. Which storage service should a solutions architect recommend?",
    options: [
      "Amazon EFS with the General Purpose performance mode and Elastic throughput",
      "Amazon S3 mounted on each server through Mountpoint for Amazon S3",
      "Amazon FSx for Lustre with a persistent SSD deployment type",
      "Amazon FSx for Windows File Server with SSD storage joined to the domain"
    ],
    correct: [3],
    explanation: "FSx for Windows File Server provides fully managed native SMB file shares with NTFS ACLs, Active Directory integration and SSD storage for low-latency access. Amazon EFS is the tempting choice for shared files, but it supports only NFS and is not supported for Windows instances.",
    optionExplanations: [
      "Amazon EFS uses NFS and is not supported on Windows instances, so it cannot provide SMB shares with NTFS permissions.",
      "Mountpoint for Amazon S3 is a Linux client for high-throughput reads of objects; it does not provide SMB or NTFS semantics.",
      "FSx for Lustre is a Linux parallel file system for HPC and does not offer SMB access or Active Directory-based NTFS permissions.",
      "Correct — FSx for Windows File Server offers native SMB, NTFS ACLs, Active Directory integration and SSD storage."
    ]
  },
  {
    id: 1239,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A company ingests telemetry into an Amazon Kinesis Data Streams stream that uses provisioned capacity. Traffic is unpredictable, and producers frequently receive throughput-exceeded errors during spikes. Five independent consumer applications read the same stream, and their read latency increases as more consumers are added because they compete for each shard's read throughput. Which combination of actions will resolve these issues with the LEAST operational overhead? (Select TWO)",
    options: [
      "Switch the stream to on-demand capacity mode so that it scales write capacity automatically.",
      "Increase the data retention period of the stream so that consumers have more time to catch up.",
      "Register the consumers to use enhanced fan-out so that each receives its own dedicated read throughput.",
      "Replace the stream with an Amazon SQS standard queue that all five consumers poll at the same time.",
      "Add a scheduled Lambda function that splits every shard in half each morning before business hours."
    ],
    correct: [0, 2],
    explanation: "On-demand mode automatically accommodates unpredictable write throughput without managing shard counts, which removes the producer throttling. Enhanced fan-out gives each registered consumer dedicated read throughput per shard delivered by push, so adding consumers no longer slows the others. Scheduled shard splitting adds operational overhead and does not follow unpredictable spikes.",
    optionExplanations: [
      "Correct — on-demand capacity mode scales the stream automatically for unpredictable write traffic.",
      "Longer retention keeps data available longer but does not add write capacity or read throughput.",
      "Correct — enhanced fan-out provides dedicated per-consumer, per-shard read throughput with low latency.",
      "With SQS each message is consumed by one consumer, so five independent applications could not each process every record.",
      "A scheduled resharding job is custom operational work and does not react to spikes that occur at unpredictable times."
    ]
  },
  {
    id: 1240,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An IoT platform writes sensor readings to an Amazon DynamoDB table that uses the current date as the partition key and the sensor ID with a timestamp as the sort key. Although the table has plenty of total write capacity, writes are throttled because almost all traffic targets the same key. Which change will MOST effectively distribute the write load?",
    options: [
      "Add a random or calculated suffix to the date partition key to spread writes across many key values.",
      "Increase the provisioned write capacity of the table to several times the current peak write rate.",
      "Create a global secondary index that uses the sensor ID as its partition key for all queries.",
      "Enable DynamoDB Accelerator (DAX) in front of the table to absorb the incoming write traffic."
    ],
    correct: [0],
    explanation: "Using the date as the partition key concentrates every write for the day on one key, creating a hot partition that throttles regardless of table capacity. Write sharding, by appending a suffix to the key, spreads writes across many partitions. Adding capacity does not fix it because a single partition key value has its own throughput limit.",
    optionExplanations: [
      "Correct — write sharding with a key suffix spreads one hot key's writes across many partitions.",
      "Extra table capacity does not lift the per-partition throughput limit that a single hot key value hits.",
      "A GSI helps queries on another attribute, but writes to the base table still concentrate on the hot date key and the GSI does not relieve them.",
      "DAX is a write-through read cache; writes still go to DynamoDB and still hit the same hot partition."
    ]
  },
  {
    id: 1241,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A customer support application stores tickets in an Amazon DynamoDB table with ticketId as the partition key. A new feature must list all tickets for a given customer email address, and the current implementation scans the entire table, which is slow and consumes large amounts of read capacity. Which solution will improve performance the MOST?",
    options: [
      "Use parallel scans with multiple worker threads to read the table segments faster.",
      "Create a global secondary index with the customer email as the partition key and query it.",
      "Add a local secondary index with the customer email as the sort key of the existing table.",
      "Export the table to Amazon S3 every hour and run the lookups with Amazon Athena instead."
    ],
    correct: [1],
    explanation: "A global secondary index keyed on the email attribute lets the application run an efficient Query that reads only the matching items instead of scanning the whole table. A local secondary index is tempting, but it shares the base table's partition key and can only be created when the table is created, so it cannot look up tickets across all ticketIds by email.",
    optionExplanations: [
      "Parallel scans finish faster but still read every item and consume even more read capacity at once.",
      "Correct — a GSI on the email attribute turns the scan into a targeted Query.",
      "An LSI keeps ticketId as the partition key, so it cannot query by email across tickets, and it can only be defined at table creation.",
      "Hourly exports add latency and stale results, and Athena queries are slower than a DynamoDB Query for interactive lookups."
    ]
  },
  {
    id: 1242,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs an Amazon Aurora PostgreSQL cluster with several Aurora Replicas. The web application sends its short read queries to the reader endpoint. A data science team now needs to run long analytical queries, and the company wants those queries to run only on two larger replicas so that they do not slow down the web traffic. Which solution meets these requirements?",
    options: [
      "Point the data science team at the cluster endpoint so that their queries run on the writer instance.",
      "Give the data science team the reader endpoint and increase the size of every replica in the cluster.",
      "Create an Aurora custom endpoint that includes only the two larger replicas for the analytics team.",
      "Create cross-Region read replicas and let the data science team connect to whichever one is closest."
    ],
    correct: [2],
    explanation: "An Aurora custom endpoint load-balances connections across a chosen subset of instances, so the analytics workload can be isolated on the two larger replicas while the web application keeps using the other replicas. The reader endpoint distributes connections across all replicas, so analytics queries would still compete with web traffic.",
    optionExplanations: [
      "Running long analytics on the writer would degrade write performance for the whole application.",
      "The reader endpoint spreads connections over all replicas, so analytics queries would still land on replicas serving the web application.",
      "Correct — a custom endpoint routes the analytics connections only to the designated larger replicas.",
      "Cross-Region replicas add replication lag and cost and do not provide a controlled, isolated group of instances for analytics."
    ]
  },
  {
    id: 1243,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company already uses AWS Batch to run containerized jobs. It now needs to apply the same image-processing container to 50,000 independent input files in Amazon S3, and each job only needs to know which file to process. The team wants the simplest way to submit and track this work while letting AWS Batch run as many jobs in parallel as capacity allows. What should a solutions architect recommend?",
    options: [
      "Write a script that loops over the files and submits 50,000 separate jobs to the job queue.",
      "Run one large job on the biggest instance type that processes all files sequentially in a loop.",
      "Create an AWS Step Functions Standard workflow with one state per file that calls the container.",
      "Submit a single AWS Batch array job in which each child job uses its array index to pick a file."
    ],
    correct: [3],
    explanation: "An array job submits many child jobs with one request, and each child receives an index it can use to select its input file; AWS Batch schedules the children in parallel and they can be tracked as a group. Submitting tens of thousands of individual jobs works but adds submission and tracking overhead, and a single sequential job removes the parallelism entirely.",
    optionExplanations: [
      "Individual submissions are harder to manage and track than one array job and add custom scripting.",
      "Processing sequentially on one instance wastes the parallelism that AWS Batch provides and takes far longer.",
      "Defining one state per file is impractical at this scale and adds a second orchestration service for no benefit.",
      "Correct — array jobs fan out many parallel child jobs from one submission, each identified by its index."
    ]
  },
  {
    id: 1244,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs an Amazon Redshift cluster on dense compute (DC2) nodes. Its stored data grows much faster than its query workload, so the company keeps adding nodes only to gain storage, even though CPU utilization stays low. Which solution will let the company scale storage and compute independently?",
    options: [
      "Migrate the cluster to RA3 nodes, which use Redshift Managed Storage backed by Amazon S3.",
      "Enable concurrency scaling so that additional clusters are added during periods of heavy load.",
      "Turn on automatic table optimization so that Redshift chooses better sort and distribution keys.",
      "Unload older data to Amazon S3 Glacier Flexible Retrieval and restore it whenever analysts need it."
    ],
    correct: [0],
    explanation: "RA3 nodes separate compute from storage by using Redshift Managed Storage, so the company can size compute for its query workload and pay for storage separately as data grows. Concurrency scaling adds query capacity for bursts of concurrent queries, which does not address storage growth.",
    optionExplanations: [
      "Correct — RA3 with managed storage decouples storage capacity from the number and size of compute nodes.",
      "Concurrency scaling helps with spikes in concurrent queries, not with storage capacity on the main cluster.",
      "Better sort and distribution keys improve query performance but do not change how storage scales with nodes.",
      "Glacier Flexible Retrieval requires restores before data can be queried, which makes the data effectively unavailable for analysis."
    ]
  },
  {
    id: 1245,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A retail company uses a provisioned Amazon Redshift cluster for BI dashboards. At month end, hundreds of users open dashboards at the same time and queries wait in queues for long periods. Most dashboards repeatedly run the same expensive joins and aggregations over the sales tables. Which combination of actions will improve dashboard performance? (Select TWO)",
    options: [
      "Enable concurrency scaling for the workload management queue that the dashboards use.",
      "Create materialized views for the common aggregations and let Redshift refresh them automatically.",
      "Resize the cluster to a single larger node so that all queries share one compute node.",
      "Move the sales tables to Amazon S3 and query them through Redshift Spectrum external tables.",
      "Configure the dashboards to export query results to CSV files every night for users to download."
    ],
    correct: [0, 1],
    explanation: "Concurrency scaling automatically adds transient cluster capacity when queries queue, which handles the month-end burst of concurrent users. Materialized views precompute the repeated joins and aggregations so that dashboard queries read stored results instead of recomputing them. Moving hot tables to Spectrum would generally slow these frequent queries rather than speed them up.",
    optionExplanations: [
      "Correct — concurrency scaling adds capacity for bursts of concurrent read queries so they do not wait in queues.",
      "Correct — materialized views store precomputed results of the repeated expensive queries.",
      "A single node reduces parallelism and capacity, which makes queuing worse.",
      "Spectrum is suited to infrequently queried data in S3; frequently queried dashboard tables perform better in local cluster storage.",
      "Nightly CSV exports remove interactivity and freshness from the dashboards."
    ]
  },
  {
    id: 1246,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An online marketplace stores millions of product listings in Amazon RDS for MySQL. The search box uses SQL LIKE queries, which are slow, cannot rank results by relevance, and do not tolerate spelling mistakes. The company wants fast full-text search with relevance scoring and fuzzy matching. Which solution meets these requirements?",
    options: [
      "Add more RDS read replicas and route all search queries to the read replicas.",
      "Index the listings in Amazon OpenSearch Service and send search queries to it.",
      "Move the listings to Amazon DynamoDB and use Scan operations with filter expressions.",
      "Cache the results of the most common searches in Amazon ElastiCache with a short TTL."
    ],
    correct: [1],
    explanation: "Amazon OpenSearch Service is built for full-text search with inverted indexes, relevance scoring and fuzzy matching, while RDS remains the system of record. Read replicas only spread the same inefficient LIKE queries across more instances and still cannot rank results or handle misspellings.",
    optionExplanations: [
      "Read replicas add capacity but the LIKE queries remain slow and still lack relevance ranking and fuzzy matching.",
      "Correct — OpenSearch provides full-text indexing, relevance scoring and fuzzy queries at low latency.",
      "DynamoDB Scans read the whole table and filter expressions offer no relevance ranking or fuzzy matching.",
      "Caching helps only repeated identical searches and does not add relevance scoring or tolerance for typos."
    ]
  },
  {
    id: 1247,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs a Java-based AWS Lambda function behind Amazon API Gateway. The function uses a large framework, and its initialization takes several seconds, so invocations that start a new execution environment are slow. Traffic is unpredictable, and the company wants to reduce startup latency without paying for capacity that sits idle. Which solution meets these requirements?",
    options: [
      "Configure provisioned concurrency for the peak expected number of concurrent requests.",
      "Increase the function timeout so that slow initializations no longer fail during startup.",
      "Enable Lambda SnapStart on a published version of the function and invoke that version.",
      "Schedule an Amazon EventBridge rule to invoke the function every minute to keep it warm."
    ],
    correct: [2],
    explanation: "Lambda SnapStart for Java snapshots the initialized execution environment when a version is published and resumes new environments from that snapshot, greatly reducing startup latency. Provisioned concurrency also removes cold starts, but it keeps environments initialized and billed continuously, which conflicts with the requirement to avoid paying for idle capacity under unpredictable traffic.",
    optionExplanations: [
      "Provisioned concurrency is billed while configured even when idle, which the company wants to avoid.",
      "A longer timeout avoids failures but does not make initialization any faster.",
      "Correct — SnapStart resumes environments from a pre-initialized snapshot, reducing cold-start latency for Java functions.",
      "A keep-warm ping keeps only one or a few environments warm and does not help when traffic spikes need new environments."
    ]
  },
  {
    id: 1248,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs hundreds of Python AWS Lambda functions that perform data transformation. The functions have no native x86-specific dependencies. The company wants better price performance for these functions with minimal changes and no re-architecture. What should a solutions architect recommend?",
    options: [
      "Rewrite the functions as containers and run them as Amazon ECS tasks on the Fargate launch type.",
      "Reduce the memory setting of every function to the minimum to lower the cost of each invocation.",
      "Package the functions as container images instead of .zip archives to improve their performance.",
      "Change the instruction set architecture of the functions to arm64 to run them on AWS Graviton."
    ],
    correct: [3],
    explanation: "Lambda functions configured for the arm64 architecture run on AWS Graviton processors, which offer better price performance than x86 for many workloads, and pure Python code usually runs unchanged. Lowering memory also lowers CPU, which can make functions slower and not cheaper overall.",
    optionExplanations: [
      "Moving to ECS on Fargate is a re-architecture and adds operational work the company wants to avoid.",
      "Lambda allocates CPU in proportion to memory, so the minimum memory can lengthen execution and erase any savings.",
      "The packaging format does not change the processor that runs the code or its price performance.",
      "Correct — switching to arm64 runs the functions on Graviton with better price performance and minimal code changes."
    ]
  },
  {
    id: 1249,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "Several AWS Lambda functions perform inference with machine learning models and reference datasets that total many gigabytes. The models are updated independently of the function code several times a day, and all functions must read the same latest files at runtime. Which solution meets these requirements with the LEAST effort?",
    options: [
      "Mount a shared Amazon EFS file system on the functions and store the models there.",
      "Bundle the models into each function's deployment package and redeploy every time they change.",
      "Download the models from Amazon S3 into /tmp at the start of every invocation of each function.",
      "Store the models as Lambda layers and publish a new layer version for every model update."
    ],
    correct: [0],
    explanation: "Lambda functions can mount an Amazon EFS file system, which gives all functions shared, low-latency access to large files that can be updated independently of the code. Layers and deployment packages tie the models to function versions and have size limits, so every model update would require republishing and redeploying.",
    optionExplanations: [
      "Correct — EFS gives all functions shared access to large, independently updated files at runtime.",
      "Packaging large models with the code forces redeployments for every model change and runs into package size limits.",
      "Downloading many gigabytes on each invocation adds large latency and transfer overhead.",
      "Layers have size limits and each update requires a new layer version and function updates to use it."
    ]
  },
  {
    id: 1250,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company is moving a self-managed in-memory database cluster to Amazon EC2. The database keeps its entire working set in RAM and needs a high ratio of memory to vCPU, while CPU usage is moderate. Which EC2 instance family is the BEST fit?",
    options: [
      "Compute optimized instances such as the C family",
      "Memory optimized instances such as the R family",
      "Storage optimized instances such as the I family",
      "Accelerated computing instances such as the G family"
    ],
    correct: [1],
    explanation: "Memory optimized instances such as the R family provide a high memory-to-vCPU ratio, which suits in-memory databases whose working set must fit in RAM. Compute optimized instances offer more CPU per GiB of memory, which is the opposite of what this workload needs.",
    optionExplanations: [
      "C instances have a low memory-to-vCPU ratio and are designed for CPU-bound workloads.",
      "Correct — R instances are designed for memory-intensive workloads such as in-memory databases.",
      "I instances are optimized for high local storage I/O, not for a large in-memory working set.",
      "G instances add GPUs for graphics and ML inference, which this workload does not use."
    ]
  },
  {
    id: 1251,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "An e-commerce site caches product details from an Amazon RDS database in Amazon ElastiCache using lazy loading. When prices are updated in the database, customers continue to see old prices until the cache entries expire. The cache also fills up with entries for products that are rarely viewed. Which combination of changes will address both issues? (Select TWO)",
    options: [
      "Update the cache entry at the same time the application writes a change to the database.",
      "Remove the cache and send every product read directly to the RDS database instead.",
      "Add a time to live (TTL) to cache entries so that items that are not accessed expire.",
      "Enable Multi-AZ with automatic failover on the ElastiCache replication group.",
      "Add RDS read replicas and point the lazy-loading cache misses at the replicas."
    ],
    correct: [0, 2],
    explanation: "A write-through strategy updates the cache whenever data is written to the database, so readers always see current prices. Adding a TTL lets entries that are not accessed expire, which keeps rarely viewed products from filling the cache. Multi-AZ improves availability of the cache but does not change data freshness or cache contents.",
    optionExplanations: [
      "Correct — write-through keeps cached prices in sync with the database at write time.",
      "Removing the cache solves staleness by losing the performance benefit and increasing database load.",
      "Correct — a TTL expires unused entries and limits how long any stale entry can remain.",
      "Multi-AZ protects against node failure; it does not address stale data or wasted cache space.",
      "Read replicas reduce load on the primary but do nothing about stale cache entries or cache churn."
    ]
  },
  {
    id: 1252,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An engineering firm runs a computational fluid dynamics application on Amazon EC2. The application uses MPI, and its nodes exchange messages constantly during each run, so inter-node latency limits how well it scales beyond a few dozen instances. The firm wants the application to scale to hundreds of instances. Which solution will provide the BEST inter-node communication performance?",
    options: [
      "Spread the instances across multiple Availability Zones and use VPC peering between subnets.",
      "Use instances with enhanced networking through ENA in a spread placement group.",
      "Use instances that support Elastic Fabric Adapter (EFA) in a cluster placement group.",
      "Place an internal Network Load Balancer between the nodes to distribute MPI traffic."
    ],
    correct: [2],
    explanation: "Elastic Fabric Adapter provides an OS-bypass interface that lets MPI applications communicate with lower and more consistent latency than TCP-based networking, which is what tightly coupled HPC needs to scale. A cluster placement group keeps the nodes physically close for the lowest latency. ENA alone improves bandwidth but does not offer OS bypass, and a spread placement group increases distance between nodes.",
    optionExplanations: [
      "Spreading nodes across AZs increases latency between them, which hurts tightly coupled MPI workloads.",
      "ENA does not provide OS-bypass communication, and a spread placement group deliberately separates the instances.",
      "Correct — EFA with OS bypass in a cluster placement group gives the lowest-latency inter-node messaging for MPI.",
      "MPI nodes communicate directly with each other; a load balancer adds latency and does not fit this traffic pattern."
    ]
  },
  {
    id: 1253,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company processes events from millions of IoT devices. Each event triggers a short workflow of three AWS Lambda functions that completes in a few seconds, and the volume reaches tens of thousands of workflow executions per second. The workflows are idempotent, and the company does not need a long-term visual history of each execution. Which orchestration option is the MOST suitable?",
    options: [
      "AWS Step Functions Standard Workflows started by an EventBridge rule for each event",
      "An Amazon MWAA environment that runs a DAG for every incoming device event",
      "Amazon SQS FIFO queues that chain the three Lambda functions in sequence",
      "AWS Step Functions Express Workflows for the high-volume, short-duration executions"
    ],
    correct: [3],
    explanation: "Express Workflows are designed for high-volume, short-duration event processing, support very high execution start rates and are priced by executions and duration. Standard Workflows are built for long-running, auditable workflows with exactly-once execution and have lower start rates and per-transition pricing, which does not fit tens of thousands of short executions per second.",
    optionExplanations: [
      "Standard Workflows suit long-running, auditable processes and do not fit this volume of short executions efficiently.",
      "Apache Airflow is designed for batch-oriented scheduling and cannot run a DAG per event at this rate.",
      "FIFO queues limit throughput per message group and require custom glue to chain the steps.",
      "Correct — Express Workflows handle very high rates of short, idempotent executions at low cost."
    ]
  },
  {
    id: 1254,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An order ingestion service sends messages to an Amazon SQS standard queue one message per API call, and consumers on Amazon EC2 receive one message per call. As volume grows, both producers and consumers spend most of their time on network round trips, and throughput is falling behind. Which change will improve throughput with the LEAST effort?",
    options: [
      "Send and receive messages in batches so that each API call handles multiple messages.",
      "Convert the queue to an SQS FIFO queue so that messages are delivered in strict order.",
      "Increase the visibility timeout so that consumers have more time to process each message.",
      "Replace the queue with Amazon SNS and subscribe each consumer instance with an HTTP endpoint."
    ],
    correct: [0],
    explanation: "Batching sends and receives multiple messages per API call, which reduces the number of round trips and increases throughput per producer and consumer. FIFO queues add ordering guarantees but have lower throughput than standard queues, so they would not help this problem.",
    optionExplanations: [
      "Correct — batching amortizes each network round trip over multiple messages.",
      "FIFO adds ordering guarantees that are not required and has lower throughput than a standard queue.",
      "The visibility timeout controls redelivery, not how many messages each call transfers.",
      "SNS pushes every message to every subscriber, which changes the semantics and removes queue-based load leveling."
    ]
  },
  {
    id: 1255,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A travel company exposes an Amazon API Gateway REST API backed by AWS Lambda and Amazon DynamoDB. Most traffic is GET requests for destination details that change only a few times per day, and the same requests are repeated thousands of times per minute. The company wants to reduce response latency and backend load with the LEAST development effort. What should a solutions architect do?",
    options: [
      "Add DynamoDB Accelerator (DAX) and rewrite the Lambda functions to use the DAX client.",
      "Enable API Gateway caching on the stage with a TTL that matches how often data changes.",
      "Increase the memory of the Lambda functions so that each request finishes more quickly.",
      "Switch the DynamoDB table to on-demand capacity mode to handle the repeated read requests."
    ],
    correct: [1],
    explanation: "API Gateway stage caching returns cached responses for repeated requests without invoking Lambda or DynamoDB, which reduces both latency and backend load with only a configuration change. DAX would speed up DynamoDB reads but still invokes Lambda on every request and requires code changes.",
    optionExplanations: [
      "DAX requires code changes and still runs a Lambda invocation for every repeated request.",
      "Correct — stage caching answers repeated GET requests from the API Gateway cache for the configured TTL.",
      "More memory may shorten each invocation, but every request still reaches Lambda and DynamoDB.",
      "On-demand mode changes capacity management but does not reduce the number of backend calls or their latency."
    ]
  },
  {
    id: 1256,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A sports company is building a mobile app that shows live match scores and comments. Clients use GraphQL to fetch exactly the fields they need, and they must receive updates in real time as soon as data changes, without polling. The company wants a fully managed solution. Which service should a solutions architect use?",
    options: [
      "Amazon API Gateway REST API with clients polling for changes every few seconds",
      "Amazon SNS mobile push notifications that send the full match data to each device",
      "AWS AppSync with GraphQL subscriptions that push data changes to connected clients",
      "Application Load Balancer with EC2 instances that run a self-managed GraphQL server"
    ],
    correct: [2],
    explanation: "AWS AppSync is a managed GraphQL service whose subscriptions push updates to connected clients over WebSockets in real time. A REST API with polling adds latency and wasted requests, and a self-managed GraphQL server on EC2 does not meet the fully managed requirement.",
    optionExplanations: [
      "Polling is not real time, wastes requests and does not provide GraphQL.",
      "Push notifications are for alerts and do not provide GraphQL queries or a real-time data stream into the app.",
      "Correct — AppSync provides managed GraphQL with real-time subscriptions.",
      "Running a GraphQL server on EC2 adds operational overhead and is not fully managed."
    ]
  },
  {
    id: 1257,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A company runs a read-heavy web application in us-east-1 with an Amazon Aurora MySQL database. A growing number of users in Europe experience slow page loads because every request travels to us-east-1, and most page loads involve several database reads. Writes are infrequent and can tolerate extra latency. Which combination of steps will MOST improve performance for European users? (Select TWO)",
    options: [
      "Convert the cluster to an Aurora global database with a secondary cluster in a European Region.",
      "Enable Multi-AZ on the Aurora cluster and send reads to the standby in another Availability Zone.",
      "Deploy the application tier in the European Region and use Route 53 latency-based routing.",
      "Copy automated Aurora snapshots to the European Region every hour for local read access.",
      "Enable S3 Transfer Acceleration for the application's static assets bucket in us-east-1."
    ],
    correct: [0, 2],
    explanation: "An Aurora global database replicates to a secondary Region with low lag, so an application stack in Europe can serve reads locally, and writes can still go to the primary Region. Route 53 latency-based routing sends European users to the closer stack. Aurora replicas in other AZs in us-east-1 do not reduce cross-Atlantic latency, and snapshots are not a live, readable database.",
    optionExplanations: [
      "Correct — a global database secondary cluster provides low-latency local reads in Europe.",
      "Additional AZs remain in us-east-1, so European requests still cross the Atlantic.",
      "Correct — a local application tier with latency-based routing serves European users from the nearby Region.",
      "Snapshots must be restored to be used and would be up to an hour stale; they are not a live replica.",
      "Transfer Acceleration speeds up transfers to S3 but does nothing for dynamic pages and database reads."
    ]
  },
  {
    id: 1258,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A multiplayer game uses a matchmaking service that assigns each match to a specific game server process on a specific Amazon EC2 instance and port. Players worldwide must connect over the AWS global network to exactly that instance and port, and the company wants to avoid exposing public IP addresses on the instances. Which solution meets these requirements?",
    options: [
      "A standard AWS Global Accelerator that routes players to the healthiest endpoint in the closest Region",
      "Amazon CloudFront with the EC2 instances configured as custom origins for game traffic",
      "A Network Load Balancer in each Region with Route 53 latency-based records for the load balancers",
      "An AWS Global Accelerator custom routing accelerator that maps listener ports to instance ports"
    ],
    correct: [3],
    explanation: "A custom routing accelerator deterministically maps accelerator ports to specific EC2 instance private IP addresses and ports in VPC subnets, so the matchmaker can send each player to an exact game server over the AWS global network. A standard accelerator chooses an endpoint based on health and proximity, which cannot direct a player to a particular server process.",
    optionExplanations: [
      "A standard accelerator picks endpoints automatically and cannot pin a player to a specific instance and port.",
      "CloudFront is designed for HTTP content delivery, not for routing real-time game sessions to a specific server port.",
      "An NLB distributes connections across targets and cannot guarantee a specific instance and port per player.",
      "Correct — custom routing maps each player to a specific instance and port without public IPs on the instances."
    ]
  },
  {
    id: 1259,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company hosts a personalized web application on an Application Load Balancer in one AWS Region. Responses are unique per user and cannot be cached, but users on other continents report high latency, mostly caused by TCP and TLS handshakes over long distances. The company wants to improve latency with minimal changes to the application. Which solution meets these requirements?",
    options: [
      "Place Amazon CloudFront in front of the ALB with caching disabled for dynamic paths.",
      "Deploy a copy of the database and application in every Region where users are located.",
      "Move the application to larger EC2 instance types to reduce server-side processing time.",
      "Use Route 53 geolocation routing to send all users to the single ALB from regional DNS records."
    ],
    correct: [0],
    explanation: "Even for uncacheable content, CloudFront terminates TCP and TLS at nearby edge locations and forwards requests to the origin over persistent connections on the AWS backbone, which reduces latency for distant users. Deploying full stacks in every Region would also reduce latency but requires significant application and data changes.",
    optionExplanations: [
      "Correct — CloudFront accelerates dynamic content through edge connection termination and persistent origin connections.",
      "A multi-Region deployment with data replication is a major architectural change, not a minimal one.",
      "Faster servers do not reduce the network round trips that cause most of the latency.",
      "DNS routing to the same single ALB does not change the network path or handshake latency."
    ]
  },
  {
    id: 1260,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An Amazon RDS for PostgreSQL database stores application data whose growth is difficult to predict. Twice in the past year, the database ran out of storage and the application stopped accepting writes until an administrator increased the allocated storage. The company wants to prevent this with the LEAST operational overhead. What should a solutions architect do?",
    options: [
      "Create a CloudWatch alarm on free storage space that emails the administrator to resize the volume.",
      "Enable RDS storage autoscaling with a maximum storage threshold for the DB instance.",
      "Allocate several times the current storage size now so that the database will not fill up.",
      "Schedule a Lambda function that checks free space nightly and increases the allocated storage."
    ],
    correct: [1],
    explanation: "RDS storage autoscaling automatically increases allocated storage when free space runs low, up to a maximum threshold, with no downtime and no manual action. An alarm still depends on an administrator reacting in time, which is what failed before.",
    optionExplanations: [
      "An alarm only notifies; the outage risk remains if the administrator does not act quickly.",
      "Correct — storage autoscaling grows storage automatically when it runs low, up to the configured maximum.",
      "Massive overprovisioning wastes money and still does not guarantee that unpredictable growth will fit.",
      "A custom scheduled function adds code to maintain and can miss growth that happens between runs."
    ]
  },
  {
    id: 1261,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A financial data provider streams market data to clients over long-lived TCP connections using a proprietary protocol. The service must handle millions of requests per second with ultra-low latency, preserve client source IP addresses, and provide one static IP address per Availability Zone for client allow lists. Which load balancing solution should be used?",
    options: [
      "An Application Load Balancer with sticky sessions and cross-zone load balancing",
      "A Gateway Load Balancer that forwards traffic to the servers through GENEVE",
      "A Network Load Balancer with TCP listeners and an Elastic IP address in each subnet",
      "A Classic Load Balancer with TCP listeners and Proxy Protocol enabled for clients"
    ],
    correct: [2],
    explanation: "A Network Load Balancer operates at layer 4, handles millions of requests per second with ultra-low latency, supports Elastic IP addresses per Availability Zone and can preserve client source IPs. An ALB works at layer 7 for HTTP and HTTPS and does not provide static IP addresses, so it does not fit a proprietary TCP protocol.",
    optionExplanations: [
      "An ALB handles HTTP and HTTPS only and does not offer static IP addresses per AZ.",
      "Gateway Load Balancer is for inserting third-party virtual appliances such as firewalls, not for serving client traffic.",
      "Correct — an NLB provides layer 4 performance, static Elastic IPs per AZ and source IP preservation.",
      "Classic Load Balancer is previous generation and lacks the performance and static IP capabilities of an NLB."
    ]
  },
  {
    id: 1262,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company is building a session and shopping cart service that needs microsecond read latency and must use the Redis OSS-compatible API. The data must be the primary, durable copy, with no separate backing database, and it must survive the loss of an Availability Zone without data loss. Which solution meets these requirements?",
    options: [
      "Amazon ElastiCache (Redis OSS) with a single node and daily backups to Amazon S3",
      "Amazon DynamoDB with DynamoDB Accelerator (DAX) and the existing Redis client code",
      "Amazon ElastiCache (Redis OSS) with Multi-AZ replicas as a cache in front of Amazon RDS",
      "Amazon MemoryDB with a Multi-AZ cluster as the durable primary database for the service"
    ],
    correct: [3],
    explanation: "Amazon MemoryDB is a Redis OSS-compatible, in-memory database that stores data durably in a Multi-AZ transactional log, so it can serve as the primary database with microsecond reads. ElastiCache is designed as a cache; with asynchronous replication, recent writes can be lost on failover, so it is not meant to be the only durable copy.",
    optionExplanations: [
      "A single node with daily backups can lose a day of data and does not survive an AZ failure.",
      "DAX uses the DynamoDB API, not Redis, so the application would have to be rewritten.",
      "This design requires a separate backing database, which the requirements rule out.",
      "Correct — MemoryDB provides durable, Multi-AZ, Redis OSS-compatible storage with microsecond reads."
    ]
  },
  {
    id: 1263,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A global mobile game stores player state in an Amazon DynamoDB table in us-west-2. Players in Europe and Asia experience high latency for both reads and writes. The game must let players read and write in their nearest Region, and changes must be replicated automatically between Regions. Which solution meets these requirements?",
    options: [
      "Convert the table to a DynamoDB global table with replicas in Europe and Asia Regions.",
      "Add DynamoDB Accelerator (DAX) clusters in Europe and Asia that point to the us-west-2 table.",
      "Use DynamoDB Streams and AWS Lambda to copy changes into separate tables in other Regions.",
      "Put Amazon CloudFront in front of the DynamoDB endpoint to cache player state close to users."
    ],
    correct: [0],
    explanation: "DynamoDB global tables provide multi-Region, multi-active replication, so players can read and write to a local replica while changes replicate automatically. DAX clusters must run in the same Region as their table and only cache reads, so they cannot provide local writes.",
    optionExplanations: [
      "Correct — global tables provide local reads and writes in each Region with automatic replication.",
      "DAX is a Regional read cache for a table in the same Region and does not accept local writes in other Regions.",
      "Custom stream-based replication adds code and conflict handling that global tables already provide.",
      "CloudFront does not cache personalized, frequently written database data, and writes would still travel to us-west-2."
    ]
  },
  {
    id: 1264,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs its order processing system on Amazon Aurora MySQL. Analysts run heavy reporting queries directly on the database, which slows down transactions. The analysts need the order data in Amazon Redshift within seconds of each change, and the company does not want to build or manage ETL pipelines. Which solution meets these requirements?",
    options: [
      "Schedule an AWS Glue job every night that copies the order tables from Aurora into Redshift.",
      "Set up an Aurora zero-ETL integration with Amazon Redshift and run the reports in Redshift.",
      "Add an Aurora Replica and have the analysts run their reports on the replica instead.",
      "Export Aurora snapshots to Amazon S3 every hour and query them with Redshift Spectrum."
    ],
    correct: [1],
    explanation: "Aurora zero-ETL integration with Amazon Redshift replicates transactional data into Redshift in near real time without building pipelines, which moves analytics off the OLTP database. A nightly Glue job adds a pipeline to manage and does not deliver data within seconds.",
    optionExplanations: [
      "A nightly batch job adds ETL to maintain and leaves data up to a day old.",
      "Correct — zero-ETL integration makes Aurora data available in Redshift within seconds without managing pipelines.",
      "A replica offloads queries from the writer, but the analysts need the data in Redshift, which a replica does not provide.",
      "Hourly snapshot exports add delay and process management and do not meet the within-seconds requirement."
    ]
  },
  {
    id: 1265,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company serves a deep learning model for real-time inference at very high request volume on GPU-based Amazon EC2 instances. The model is supported by the AWS Neuron SDK. The company wants to keep high throughput and low latency while achieving the lowest cost per inference. Which instance type family should the company use?",
    options: [
      "P instances with high-end GPUs designed for large-scale model training",
      "C instances with the latest generation of high-frequency x86 processors",
      "Inf2 instances powered by AWS Inferentia2 accelerators",
      "X instances with very large amounts of memory per vCPU"
    ],
    correct: [2],
    explanation: "Inf2 instances use AWS Inferentia2 chips, which are purpose-built for deep learning inference and deliver high throughput and low latency at a lower cost per inference for models supported by the Neuron SDK. P instances are optimized for training and are expensive to run for inference at scale.",
    optionExplanations: [
      "P instances target large-scale training and cost more per inference than purpose-built inference accelerators.",
      "CPU-only instances usually deliver far lower deep learning inference throughput than accelerators.",
      "Correct — Inferentia2 is purpose-built for high-throughput, low-cost inference with the Neuron SDK.",
      "Memory optimized X instances do not accelerate neural network inference."
    ]
  },
  {
    id: 1266,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A web application runs in an Amazon EC2 Auto Scaling group with target tracking on CPU utilization. Every weekday traffic rises sharply at 8:00 AM, and new instances take several minutes to become ready, so the application is slow for the first part of each morning. Unplanned spikes also occur during the day. Which combination of actions will improve performance while avoiding unnecessary cost? (Select TWO)",
    options: [
      "Set the minimum capacity of the group to the peak number of instances for the whole day.",
      "Enable predictive scaling so that capacity is launched ahead of the recurring morning increase.",
      "Replace target tracking with simple scaling policies that use long cooldown periods.",
      "Keep the target tracking policy so that the group still reacts to unplanned spikes during the day.",
      "Move to a single larger instance type so that the group no longer needs to scale out."
    ],
    correct: [1, 3],
    explanation: "Predictive scaling forecasts the recurring daily pattern from history and launches instances before the morning surge, so they are ready when traffic arrives. Keeping target tracking alongside it lets the group respond dynamically to unexpected spikes. Running at peak capacity all day would solve the morning problem but wastes money for most of the day.",
    optionExplanations: [
      "Holding peak capacity all day pays for idle instances outside the busy period.",
      "Correct — predictive scaling launches capacity in advance of the recurring morning traffic.",
      "Simple scaling with long cooldowns reacts more slowly than target tracking, which worsens the delays.",
      "Correct — target tracking continues to handle unplanned spikes that a forecast cannot anticipate.",
      "A single instance removes elasticity and fault tolerance and still cannot absorb larger spikes."
    ]
  },
  {
    id: 1267,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A design studio wants its 3D artists to work on graphics-intensive modeling and rendering applications from thin clients. The applications need GPU acceleration for interactive visualization, and the studio will stream the desktops with a remote display protocol. Which EC2 instance family is the BEST fit for these workstations?",
    options: [
      "Compute optimized C instances with high clock speeds",
      "Memory optimized R instances with large RAM capacity",
      "Burstable T instances that accumulate CPU credits",
      "Accelerated computing G instances with graphics GPUs"
    ],
    correct: [3],
    explanation: "G instances provide NVIDIA or AMD GPUs designed for graphics-intensive applications such as remote workstations, 3D visualization and rendering. The other families lack GPUs, so they cannot accelerate the interactive 3D graphics these applications need.",
    optionExplanations: [
      "C instances provide strong CPU performance but no GPU for interactive 3D graphics.",
      "R instances add memory but no GPU acceleration for visualization.",
      "Burstable T instances cannot sustain heavy workloads and have no GPU.",
      "Correct — G instances are designed for graphics workstations and GPU-accelerated visualization."
    ]
  },
  {
    id: 1268,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company has dozens of microservices owned by different teams in many VPCs and AWS accounts. Several VPCs have overlapping CIDR ranges. Services must call each other over HTTP and gRPC with request-level routing and access policies, and the company does not want to manage peering, proxies or sidecars. Which solution meets these requirements with the LEAST operational overhead?",
    options: [
      "Amazon VPC Lattice with a service network associated with the services and VPCs",
      "A full mesh of VPC peering connections with routes added between all of the service VPCs",
      "AWS Transit Gateway with a route table per account and NGINX proxies in each VPC",
      "Internet-facing Application Load Balancers for each service with security group rules"
    ],
    correct: [0],
    explanation: "Amazon VPC Lattice provides managed application-layer service-to-service connectivity across VPCs and accounts, supports overlapping IP ranges, and offers request-level routing and auth policies without sidecars. Peering and Transit Gateway cannot route between overlapping CIDRs and add network management overhead.",
    optionExplanations: [
      "Correct — VPC Lattice handles cross-VPC, cross-account service connectivity with routing and auth policies, even with overlapping CIDRs.",
      "VPC peering does not work between overlapping CIDRs and a full mesh is difficult to manage at this scale.",
      "Transit Gateway cannot route overlapping CIDRs, and self-managed proxies add operational work.",
      "Exposing internal services on the internet weakens security and adds latency and management of many load balancers."
    ]
  },
  {
    id: 1269,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A database on Amazon EC2 uses a 200 GiB gp2 EBS volume. The database needs more IOPS than this volume provides, but it does not need more storage capacity. The company wants to increase IOPS without paying for unused storage. Which solution is the MOST cost-effective?",
    options: [
      "Increase the gp2 volume size until its baseline IOPS reaches the required level.",
      "Modify the volume to gp3 and provision the required IOPS independently of the size.",
      "Change the volume to io2 Block Express and provision the maximum available IOPS.",
      "Convert the volume to st1 Throughput Optimized HDD to get more I/O per gigabyte."
    ],
    correct: [1],
    explanation: "gp3 volumes let you provision IOPS and throughput independently of storage size, so the company can raise IOPS without buying extra capacity, and the change can be made with Elastic Volumes without downtime. With gp2, IOPS scale with size, so more IOPS means paying for unneeded storage.",
    optionExplanations: [
      "gp2 IOPS are tied to volume size, so this pays for storage the database does not need.",
      "Correct — gp3 decouples IOPS from size, making it the cheapest way to add IOPS.",
      "io2 Block Express is designed for the most demanding workloads and costs more than needed here.",
      "st1 is optimized for sequential throughput and performs poorly for random database IOPS."
    ]
  },
  {
    id: 1270,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A media website served through Amazon CloudFront must validate an authorization token on each viewer request by calling an external entitlement service over the network before content is returned. The logic needs a few hundred milliseconds of execution time and access to the request body. Which solution meets these requirements?",
    options: [
      "CloudFront Functions associated with the viewer request event of the distribution",
      "AWS WAF rate-based rules attached to the CloudFront distribution",
      "Lambda@Edge functions associated with the viewer request event",
      "A CloudFront origin access control between the distribution and its origin"
    ],
    correct: [2],
    explanation: "Lambda@Edge functions can make network calls, run longer than CloudFront Functions and can access the request body, so they can call the external entitlement service at the edge. CloudFront Functions are cheaper and faster for lightweight logic, but they have no network access and cannot read the request body.",
    optionExplanations: [
      "CloudFront Functions cannot make network calls or read the request body and have a very short maximum execution time.",
      "Rate-based rules limit request rates and cannot validate tokens against an external service.",
      "Correct — Lambda@Edge supports network calls, longer execution and request body access at the edge.",
      "Origin access control restricts who can reach the origin; it does not validate viewer tokens."
    ]
  },
  {
    id: 1271,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company has more than 400 Amazon S3 buckets spread across 60 accounts in AWS Organizations. S3 storage costs have grown steadily, and finance cannot tell which buckets or prefixes are responsible, or whether noncurrent versions and incomplete multipart uploads are contributing. The company wants organization-wide visibility into these cost drivers with the LEAST operational overhead. Which solution will meet these requirements?",
    options: [
      "Enable S3 Storage Lens for the organization and review its cost-efficiency metrics.",
      "Enable S3 server access logging on every bucket and analyze the log files with Amazon Athena.",
      "Write an AWS Lambda function in each account that lists every bucket and sums object sizes daily.",
      "Enable AWS CloudTrail data events for all buckets and build dashboards in Amazon CloudWatch."
    ],
    correct: [0],
    explanation: "S3 Storage Lens aggregates storage usage and activity metrics across all accounts and buckets in an organization, including metrics such as noncurrent version bytes and incomplete multipart upload bytes, with no code to maintain. Server access logs record requests, not storage composition, and would require building and running an analysis pipeline in every account.",
    optionExplanations: [
      "Correct — Storage Lens provides an organization-wide dashboard with bucket- and prefix-level metrics that highlight cost-efficiency issues such as noncurrent versions and incomplete uploads.",
      "Access logs describe requests made to buckets; they do not show how much storage is held by noncurrent versions or incomplete uploads, and they add their own storage cost.",
      "Custom listing functions in 60 accounts are heavy to build and operate, incur LIST request charges, and still would not easily expose incomplete multipart uploads.",
      "CloudTrail data events record API calls and add significant cost at this scale; they do not report storage composition per bucket."
    ]
  },
  {
    id: 1272,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An IoT company writes millions of sensor readings to Amazon S3 every day, each stored as a separate object of a few kilobytes. The readings must be retained for 10 years and are almost never read after the first week. An engineer proposes a lifecycle rule that transitions every object to S3 Glacier Deep Archive after 7 days. Which approach is the MOST cost-effective?",
    options: [
      "Apply the proposed lifecycle rule so each reading moves to S3 Glacier Deep Archive after 7 days.",
      "Transition each reading to S3 Intelligent-Tiering with the archive access tiers activated.",
      "Bundle each day's readings into large files, then archive those files in Deep Archive.",
      "Keep the readings in S3 Standard and delete them after 10 years with an expiration rule."
    ],
    correct: [2],
    explanation: "Lifecycle transitions are charged per object, and each object archived in the Glacier storage classes carries additional per-object metadata overhead, so for billions of tiny objects these costs outweigh the storage savings. Combining readings into large objects first makes archiving efficient. Transitioning the objects individually, as proposed, multiplies request and overhead charges.",
    optionExplanations: [
      "Per-object transition requests and per-object archive metadata overhead for millions of tiny objects per day would erode or exceed the storage savings.",
      "Intelligent-Tiering charges a per-object monitoring fee and does not auto-tier very small objects, so tiny readings gain little and still incur per-object costs.",
      "Correct — Packing readings into a small number of large objects removes the per-object transition and overhead charges, so Deep Archive's low storage price is fully realized.",
      "S3 Standard is the most expensive way to keep rarely read data for 10 years; it avoids transition charges but pays far more for storage."
    ]
  },
  {
    id: 1273,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A data pipeline writes intermediate files to Amazon S3. Each file is read once or twice by downstream jobs within a few hours and is deleted by the pipeline after 10 days. A team member suggests storing the files in S3 Standard-IA to save money because they are rarely read after the first day. Which storage approach is the MOST cost-effective?",
    options: [
      "Write the files directly to S3 Standard-IA and keep the 10-day deletion.",
      "Store the files in S3 Standard with a 10-day expiration rule.",
      "Write the files to S3 One Zone-IA because the data can be regenerated.",
      "Write the files to S3 Glacier Instant Retrieval and expire them at 10 days."
    ],
    correct: [1],
    explanation: "S3 Standard-IA, One Zone-IA and Glacier Instant Retrieval all have minimum storage duration charges (30 days or more) and per-GB retrieval fees, so objects deleted after 10 days are billed as if stored for the full minimum period. S3 Standard has no minimum duration or retrieval fee, making it cheapest for short-lived data. One Zone-IA is tempting because the data can be regenerated, but its minimum duration still applies.",
    optionExplanations: [
      "Standard-IA bills a 30-day minimum storage duration and charges for retrievals, so files deleted after 10 days cost more than in S3 Standard.",
      "Correct — S3 Standard has no minimum storage duration or retrieval charges, which suits data that lives only 10 days and is read shortly after creation.",
      "One Zone-IA also has a 30-day minimum storage charge and retrieval fees, so short-lived objects are billed for time they do not exist.",
      "Glacier Instant Retrieval has a 90-day minimum storage duration and higher retrieval fees, making it the worst fit for 10-day objects."
    ]
  },
  {
    id: 1274,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company keeps 40 TB of historical satellite imagery in S3 Glacier Flexible Retrieval. A research team needs the entire dataset restored for a reprocessing project that will start the following morning, about 15 hours from now. There is no benefit to receiving the data sooner. Which retrieval option meets the deadline MOST cost-effectively?",
    options: [
      "Expedited retrievals with provisioned retrieval capacity purchased in advance",
      "Standard retrievals for all objects",
      "Bulk retrievals for all objects",
      "Copy the objects to S3 Glacier Instant Retrieval with S3 Batch Operations"
    ],
    correct: [2],
    explanation: "Bulk retrievals from S3 Glacier Flexible Retrieval typically complete within 5-12 hours and are the lowest-cost retrieval option, which fits a 15-hour deadline. Standard retrievals finish faster (typically 3-5 hours) but cost more, which brings no benefit here.",
    optionExplanations: [
      "Expedited retrievals return data in minutes at the highest price, and provisioned capacity adds a further charge for speed the team does not need.",
      "Standard retrievals meet the deadline but cost more than Bulk retrievals without providing any useful advantage in this scenario.",
      "Correct — Bulk is the lowest-cost retrieval tier and typically completes within 5-12 hours, comfortably before the project starts.",
      "Archived objects must be restored before they can be copied, so this still requires a retrieval and adds Instant Retrieval storage costs."
    ]
  },
  {
    id: 1275,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company is closing a data center and must move 120 TB of archived files to Amazon S3 within 3 weeks. The site has a 200 Mbps internet connection that is already heavily used during business hours. After the migration, no further data will be transferred from this site. Which solution is the MOST cost-effective?",
    options: [
      "Order a 1 Gbps AWS Direct Connect connection and copy the files with AWS DataSync.",
      "Use AWS DataSync over the existing internet connection outside business hours.",
      "Upload the files with S3 Transfer Acceleration over the existing internet connection.",
      "Copy the files to AWS Snowball Edge Storage Optimized devices and ship them to AWS."
    ],
    correct: [3],
    explanation: "At 200 Mbps even with full use the transfer of 120 TB would take far longer than 3 weeks, so any network-based option over the existing link fails the deadline. Snowball Edge devices move the data offline at a low one-time cost. Direct Connect is a long-term connectivity investment that can take weeks to provision and is not justified for a one-time transfer.",
    optionExplanations: [
      "Direct Connect involves provisioning lead time and ongoing port charges, which is expensive and possibly too slow to set up for a one-off migration.",
      "Even running continuously, a 200 Mbps link cannot move 120 TB in 3 weeks, and limiting it to off-hours makes it slower still.",
      "Transfer Acceleration improves long-distance throughput but cannot exceed the site's 200 Mbps bandwidth, and it adds per-GB charges.",
      "Correct — Snowball Edge physically ships the data, avoiding the bandwidth bottleneck at a predictable one-time cost suited to a one-off migration."
    ]
  },
  {
    id: 1276,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company takes Amazon EBS snapshots of its production volumes with a nightly script that runs on an EC2 instance. The script does not delete old snapshots, so thousands of snapshots have accumulated and the snapshot storage bill keeps growing. The company needs daily snapshots kept for 14 days and weekly snapshots kept for 3 months. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Extend the script to delete snapshots older than the retention periods and keep it on the instance.",
      "Use Amazon Data Lifecycle Manager policies with daily and weekly schedules and retention rules.",
      "Use AWS Backup to copy every snapshot to a second Region and delete the originals after 14 days.",
      "Move all existing snapshots to the EBS Snapshots Archive tier and keep the nightly script unchanged."
    ],
    correct: [1],
    explanation: "Amazon Data Lifecycle Manager natively creates EBS snapshots on schedules and automatically deletes them according to retention rules, removing the script and its instance. Extending the script would work but keeps custom code and an instance to maintain.",
    optionExplanations: [
      "This fixes retention but keeps custom code and a running EC2 instance to patch and monitor, which is more overhead than a managed policy.",
      "Correct — Data Lifecycle Manager policies target volumes by tag, create snapshots on daily and weekly schedules, and delete them automatically when retention expires.",
      "Cross-Region copies add storage and data transfer costs and do not implement the required daily and weekly retention scheme.",
      "Archiving lowers the price of old snapshots but they still accumulate indefinitely, and archive has minimum retention and restore charges."
    ]
  },
  {
    id: 1277,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A cost review of a development account finds dozens of Amazon EBS volumes that have not been attached to any instance for months and many Elastic IP addresses that are not associated with any running instance. The data on the volumes might be needed again in rare cases. Which combination of actions will reduce costs the MOST? (Select TWO)",
    options: [
      "Take a snapshot of each unattached volume and then delete the volume.",
      "Change each unattached volume to the gp3 volume type and keep it.",
      "Attach the unattached volumes to a stopped EC2 instance to avoid charges.",
      "Release the Elastic IP addresses that are not associated with running instances.",
      "Associate the idle Elastic IP addresses with a NAT gateway in the account."
    ],
    correct: [0, 3],
    explanation: "Unattached EBS volumes are billed for their full provisioned size, so snapshotting (which stores only used blocks at a lower price) and deleting them preserves the data at much lower cost. Idle Elastic IP addresses incur hourly public IPv4 charges, so releasing them removes that cost. Attaching volumes to stopped instances does not stop EBS storage charges.",
    optionExplanations: [
      "Correct — A snapshot keeps the data recoverable at a lower storage price, and deleting the volume stops the provisioned-capacity charges.",
      "gp3 can be cheaper than gp2, but the volumes would still be billed for full provisioned capacity while delivering no value.",
      "EBS volumes are billed whether or not the instance they are attached to is running, so this saves nothing.",
      "Correct — Unused public IPv4 addresses are charged hourly; releasing addresses that serve no running workload removes the charge.",
      "A NAT gateway has its own hourly and data processing charges, and associating addresses with it adds cost rather than removing it."
    ]
  },
  {
    id: 1278,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a fault-tolerant batch workload on an EC2 Fleet of Spot Instances across 12 instance types and 3 Availability Zones. The fleet uses the lowest-price allocation strategy, and the frequent interruptions are causing many jobs to restart and finish late. The company wants to keep costs low while reducing interruptions with the LEAST effort. Which solution will meet these requirements?",
    options: [
      "Change the allocation strategy to diversified so instances are spread evenly across all Spot pools.",
      "Replace the Spot Instances with On-Demand Instances covered by a Compute Savings Plan.",
      "Restrict the fleet to the single instance type with the lowest historical Spot price.",
      "Change the allocation strategy to price-capacity-optimized."
    ],
    correct: [3],
    explanation: "The price-capacity-optimized strategy launches Spot capacity from pools that have the most available capacity and, among those, the lowest prices, which reduces interruptions while keeping costs low; AWS recommends it for most Spot workloads. The lowest-price strategy ignores capacity depth, which is why interruptions are frequent.",
    optionExplanations: [
      "Diversified spreads instances across pools regardless of their available capacity, so it can still place capacity in pools likely to be interrupted.",
      "Moving to On-Demand removes interruptions but gives up most of the Spot savings, which conflicts with the cost goal.",
      "Using a single instance type reduces the available capacity pools and increases the likelihood and impact of interruptions.",
      "Correct — Price-capacity-optimized favors deep capacity pools and then low prices, balancing interruption risk and cost with a simple configuration change."
    ]
  },
  {
    id: 1279,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A fleet of worker instances polls an Amazon SQS standard queue in a tight loop. Messages arrive in irregular bursts, and most receive calls return no messages. SQS request charges have become noticeable on the bill. Which change will reduce these costs with the LEAST effort?",
    options: [
      "Enable long polling by setting the receive message wait time on the queue.",
      "Convert the queue to a FIFO queue so messages are delivered in batches.",
      "Increase the visibility timeout so messages are received fewer times.",
      "Add an Amazon SNS topic that pushes each new message to the workers over HTTPS."
    ],
    correct: [0],
    explanation: "Long polling makes a receive call wait for messages to arrive before returning, eliminating most empty responses and therefore most billable requests. Increasing the visibility timeout affects how long an in-flight message is hidden, not how many empty polls occur.",
    optionExplanations: [
      "Correct — With long polling, each receive request waits for messages, sharply reducing the number of empty, billable responses.",
      "FIFO queues provide ordering and deduplication; converting does not reduce empty receives and requires application changes.",
      "Visibility timeout controls redelivery of in-flight messages and has no effect on empty polling requests.",
      "Pushing to HTTP endpoints requires workers to expose endpoints and handle retries, a significant redesign compared to a queue setting."
    ]
  },
  {
    id: 1280,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a CPU-intensive AWS Lambda function millions of times per day. The function is configured with the minimum memory setting, uses only a small amount of memory, and each invocation runs for several seconds. The company wants to find the configuration with the lowest cost per invocation based on real measurements. Which solution will meet these requirements?",
    options: [
      "Keep the minimum memory setting because Lambda charges are proportional to configured memory.",
      "Use AWS Lambda Power Tuning to compare cost and duration across memory settings.",
      "Configure provisioned concurrency for the function to obtain a lower price per invocation.",
      "Move the function to Amazon EC2 Spot Instances to remove per-invocation charges."
    ],
    correct: [1],
    explanation: "Lambda allocates CPU in proportion to configured memory, so a CPU-bound function can run much faster with more memory, sometimes lowering total GB-seconds and therefore cost. AWS Lambda Power Tuning runs the function at multiple memory settings and reports cost and duration for each. Keeping the minimum memory is tempting because price per millisecond is lowest, but the longer duration can make it more expensive overall.",
    optionExplanations: [
      "Lambda bills memory multiplied by duration; with more memory a CPU-bound function gets more CPU and may finish fast enough to cost less.",
      "Correct — Power Tuning measures duration and cost across memory settings using real invocations, identifying the cheapest configuration.",
      "Provisioned concurrency addresses cold-start latency and adds a charge for the provisioned environments; it is not a measurement-based tuning method.",
      "Re-platforming to EC2 Spot adds infrastructure management and interruption handling and does not answer which configuration is cheapest."
    ]
  },
  {
    id: 1281,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company processes a continuous stream of transactions with AWS Lambda functions. Traffic is steady around the clock, hundreds of function instances are busy at all times, and each invocation runs for several minutes at high CPU. The operations team is experienced in running containers on EC2 instances, and the workload will continue for years. Which solution will be the MOST cost-effective?",
    options: [
      "Increase the memory of the Lambda functions so that each invocation completes faster.",
      "Orchestrate the functions with AWS Step Functions Express Workflows to reduce per-invocation overhead costs.",
      "Run the processing as long-running containers on Amazon ECS on EC2 instances covered by a Savings Plan.",
      "Place Amazon API Gateway with caching in front of the functions to reduce repeated invocations."
    ],
    correct: [2],
    explanation: "Lambda is most cost-effective for spiky or low duty-cycle workloads; for constant, high-utilization compute running around the clock, long-running containers on EC2 instances with a Savings Plan commitment cost significantly less per unit of work. The team already has the skills to operate EC2-based containers. More memory might shorten each invocation but does not change the unfavorable pricing model for sustained load.",
    optionExplanations: [
      "Tuning memory can trim cost slightly, but sustained full-time compute remains more expensive on Lambda than on committed EC2 capacity.",
      "Step Functions adds orchestration charges and does not reduce the compute cost of the long-running Lambda invocations.",
      "Correct — Fully utilized, always-on compute is cheapest on EC2 capacity with a long-term commitment, and the team can operate the ECS cluster.",
      "Each transaction is unique stream data, so response caching does not avoid invocations and adds API Gateway charges."
    ]
  },
  {
    id: 1282,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company purchased Compute Savings Plans a year ago. Since then, several new workloads have been launched on Amazon EC2, AWS Fargate and AWS Lambda. Finance wants to know how much of the eligible compute spend is still being billed at On-Demand rates to decide whether to buy an additional commitment. Which tool provides this information MOST directly?",
    options: [
      "The Savings Plans utilization report in AWS Cost Explorer",
      "The Savings Plans coverage report in AWS Cost Explorer",
      "AWS Trusted Advisor checks for underutilized EC2 instances",
      "The AWS Compute Optimizer instance recommendations"
    ],
    correct: [1],
    explanation: "The Savings Plans coverage report shows what portion of eligible spend is covered by Savings Plans and how much remains at On-Demand rates, which is exactly what is needed to size an additional commitment. The utilization report is the tempting distractor, but it shows how much of the existing commitment is being used, not how much spend is uncovered.",
    optionExplanations: [
      "Utilization measures how fully the existing commitment is consumed; it does not show the remaining On-Demand spend that could be covered.",
      "Correct — Coverage reports the share of eligible EC2, Fargate and Lambda spend covered by Savings Plans versus billed On-Demand.",
      "Trusted Advisor flags low-utilization instances for rightsizing; it does not report Savings Plans coverage of compute spend.",
      "Compute Optimizer recommends resource sizes based on utilization; it does not measure commitment coverage."
    ]
  },
  {
    id: 1283,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company uses AWS Organizations with consolidated billing. The networking account bought several EC2 Reserved Instances for a project that ended, and the reservations are now unused. Matching instances run On-Demand in other member accounts, but those accounts receive no RI discount because discount sharing was turned off for all accounts years ago. Which solution will reduce costs with the LEAST effort?",
    options: [
      "Turn on Reserved Instance and Savings Plans discount sharing in the management account's billing preferences.",
      "Sell the unused Reserved Instances on the Reserved Instance Marketplace and buy new ones in the other accounts.",
      "Move the On-Demand workloads from the member accounts into the networking account that owns the reservations.",
      "Modify the Reserved Instances to a different instance family that the networking account still runs."
    ],
    correct: [0],
    explanation: "With consolidated billing, RI and Savings Plans discounts can be shared across all accounts in the organization; turning sharing back on lets the unused reservations apply to matching usage in other accounts with a single setting. Selling and repurchasing reservations or migrating workloads between accounts would achieve a similar result with far more effort.",
    optionExplanations: [
      "Correct — Re-enabling discount sharing lets the idle reservations automatically apply to matching On-Demand usage elsewhere in the organization.",
      "Marketplace sales take time, may not recover full value, and repurchasing creates a new commitment when existing ones could simply be shared.",
      "Migrating workloads between accounts is a large project that disrupts account boundaries just to reach a billing discount.",
      "Changing the reservation attributes does not help if the networking account no longer runs matching usage of any family."
    ]
  },
  {
    id: 1284,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a write-heavy OLTP application on an Amazon Aurora PostgreSQL-compatible cluster with the Aurora Standard storage configuration. Cost analysis shows that I/O request charges make up a large and unpredictable share of the cluster's monthly bill, while instance sizing is appropriate. Which solution will reduce costs and make them more predictable with the LEAST effort?",
    options: [
      "Add Aurora Replicas so that read traffic no longer generates I/O charges on the writer.",
      "Migrate the database to Amazon RDS for PostgreSQL with Provisioned IOPS SSD storage.",
      "Change the cluster storage configuration to Aurora I/O-Optimized.",
      "Enable Aurora Serverless v2 for the writer instance to reduce I/O requests."
    ],
    correct: [2],
    explanation: "Aurora I/O-Optimized removes charges for read and write I/O operations in exchange for higher instance and storage prices, which lowers total cost and makes it predictable for I/O-intensive clusters; the change is a configuration switch without migration. Migrating to RDS with Provisioned IOPS requires a database migration and loses Aurora capabilities.",
    optionExplanations: [
      "Aurora Replicas share the same cluster storage, and reads from replicas are still billed as I/O under Aurora Standard, while the replicas add instance costs.",
      "A migration to RDS is significant effort and changes the architecture, when a storage configuration setting addresses the cost directly.",
      "Correct — I/O-Optimized eliminates per-request I/O charges, which suits clusters where I/O is a large share of spend, and is enabled without migrating.",
      "Serverless v2 changes how compute capacity scales; it does not reduce the I/O requests generated by a write-heavy workload."
    ]
  },
  {
    id: 1285,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company has an Amazon DynamoDB table in provisioned capacity mode with auto scaling. The table consistently uses a stable minimum level of read and write capacity every hour of the day, and the application will remain in production for at least 3 more years without major changes. Which solution will reduce the cost of this table the MOST?",
    options: [
      "Switch the table to on-demand capacity mode to pay only for requests that are made.",
      "Purchase DynamoDB reserved capacity for the stable baseline of read and write capacity.",
      "Change the table class to DynamoDB Standard-Infrequent Access.",
      "Add a DynamoDB Accelerator (DAX) cluster in front of the table for all reads."
    ],
    correct: [1],
    explanation: "DynamoDB reserved capacity provides a significant discount on provisioned read and write capacity in exchange for a 1-year or 3-year commitment, which fits a stable, long-lived baseline. On-demand mode costs more per request than well-utilized provisioned capacity for steady traffic.",
    optionExplanations: [
      "On-demand is designed for unpredictable traffic and is more expensive per request than steadily utilized provisioned capacity.",
      "Correct — Committing to the stable baseline with reserved capacity lowers the throughput price while auto scaling still handles variation above it.",
      "Standard-IA lowers storage prices but raises throughput prices; it suits storage-dominated tables, not throughput-dominated ones.",
      "DAX adds node costs and only helps read-heavy, cache-friendly access; it does not discount the existing write and read capacity."
    ]
  },
  {
    id: 1286,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company uses an Amazon ElastiCache for Redis OSS cluster as a session store. The cluster has run on the same node type and node count for 2 years, memory utilization is steady, and no changes are expected for the next 3 years. A team member suggests migrating to ElastiCache Serverless to save money. Which solution is the MOST cost-effective?",
    options: [
      "Migrate to ElastiCache Serverless so the company pays only for data stored and requests made.",
      "Replace the cluster with an Amazon DynamoDB table in on-demand capacity mode.",
      "Run Redis on self-managed EC2 Spot Instances to obtain the lowest compute price.",
      "Purchase ElastiCache reserved nodes for the existing node type for a 3-year term."
    ],
    correct: [3],
    explanation: "For a cache with stable, predictable capacity, reserved nodes provide a substantial discount over On-Demand node pricing without any architectural change. ElastiCache Serverless is optimized for variable or unpredictable workloads; for steady utilization it is generally more expensive than reserved nodes.",
    optionExplanations: [
      "Serverless pricing suits spiky or unknown demand; for steady, long-term usage it usually costs more than discounted reserved nodes.",
      "Replacing the cache with DynamoDB is a redesign and on-demand pricing is not optimized for steady session traffic.",
      "Spot interruptions would lose session data and self-management adds operational burden, which is unacceptable for a session store.",
      "Correct — Reserved nodes discount the predictable, unchanged capacity with no migration or operational change."
    ]
  },
  {
    id: 1287,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company has a provisioned Amazon Redshift cluster that runs continuously. Analysts run a few queries at unpredictable times during the day and night, and the cluster is idle more than 90% of the time. Queries must start without waiting for the warehouse to be manually started. Which solution is the MOST cost-effective?",
    options: [
      "Migrate the data warehouse to Amazon Redshift Serverless.",
      "Schedule the provisioned cluster to pause at night and resume each morning.",
      "Purchase Redshift reserved nodes for the existing cluster.",
      "Use elastic resize to reduce the cluster to the smallest node count."
    ],
    correct: [0],
    explanation: "Redshift Serverless automatically provisions capacity when queries arrive and bills only for the compute used while queries run, which fits sporadic usage at unpredictable times. A pause and resume schedule is tempting, but queries can arrive at night when the cluster would be paused.",
    optionExplanations: [
      "Correct — Serverless charges only while queries execute and starts automatically, so an idle warehouse costs only storage.",
      "A fixed schedule cannot match unpredictable query times; queries arriving while paused would fail until someone resumes the cluster.",
      "Reserved nodes discount a cluster that runs constantly, but the company would still pay for capacity that is idle most of the time.",
      "A smaller cluster still bills every hour even when idle and may struggle with query performance."
    ]
  },
  {
    id: 1288,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company stores several years of clickstream data in Amazon S3 as uncompressed JSON files in a single prefix. Analysts query the data with Amazon Athena, and almost every query filters on a date range of a few days, yet each query scans the entire dataset. Which combination of actions will reduce Athena costs the MOST? (Select TWO)",
    options: [
      "Convert the data to a compressed columnar format such as Apache Parquet.",
      "Move the JSON files to the S3 Standard-IA storage class.",
      "Organize the data into date-based partitions and use partition projection in the table definition.",
      "Create a separate Athena workgroup for each analyst team.",
      "Purchase Athena provisioned capacity for the analysts' queries."
    ],
    correct: [0, 2],
    explanation: "Athena charges by the amount of data scanned. Compressed columnar formats let Athena read only the referenced columns of much smaller files, and date partitions let queries skip all data outside the requested range; partition projection avoids managing partition metadata. Moving files to Standard-IA would increase costs because Athena reads incur IA retrieval fees.",
    optionExplanations: [
      "Correct — Parquet with compression reduces the bytes stored and lets Athena read only the columns a query needs.",
      "Standard-IA adds per-GB retrieval charges every time Athena scans the files, which increases cost for frequently queried data.",
      "Correct — Date partitioning lets queries prune data outside the filtered range, so only a few days of data are scanned.",
      "Workgroups help separate and limit usage, but they do not reduce the data each query scans.",
      "Provisioned capacity bills for reserved processing units continuously and does not reduce the amount of data scanned by poorly organized tables."
    ]
  },
  {
    id: 1289,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A regional news website uses an Amazon CloudFront distribution with the default settings. Analytics show that nearly all readers are located in North America and Europe, and the small number of readers elsewhere can tolerate higher latency. The company wants to reduce CloudFront costs. Which solution will meet these requirements?",
    options: [
      "Disable the CloudFront distribution and serve content directly from the origin.",
      "Use CloudFront geographic restrictions to block all countries outside North America and Europe.",
      "Set the distribution price class to include only edge locations in the lowest-cost regions.",
      "Enable CloudFront Origin Shield in a Region close to North America."
    ],
    correct: [2],
    explanation: "CloudFront price classes limit which edge locations serve requests; a price class covering only North America and Europe avoids the more expensive edge locations while users elsewhere are still served, with higher latency. Geographic restrictions would block those users entirely, which the requirements do not allow.",
    optionExplanations: [
      "Serving directly from the origin raises origin load and data transfer costs and removes caching benefits.",
      "Geo restrictions deny access to readers outside the allowed countries, but those readers must still be served.",
      "Correct — A restricted price class serves requests only from lower-cost edge locations, reducing cost while all users still receive content.",
      "Origin Shield adds a caching layer to reduce origin load and carries its own charges; it does not lower edge delivery prices."
    ]
  },
  {
    id: 1290,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "Applications in private subnets send a very high volume of messages to Amazon SQS and records to Amazon Kinesis Data Streams in the same Region. All of this traffic currently leaves through NAT gateways, and NAT gateway data processing charges have become a major cost. Which solution will reduce these costs MOST cost-effectively?",
    options: [
      "Replace the NAT gateways with NAT instances on burstable EC2 instance types.",
      "Create gateway VPC endpoints for Amazon SQS and Kinesis Data Streams.",
      "Move the applications to public subnets and assign them public IPv4 addresses.",
      "Create interface VPC endpoints for Amazon SQS and Kinesis Data Streams in the VPC."
    ],
    correct: [3],
    explanation: "Interface VPC endpoints (AWS PrivateLink) let the applications reach SQS and Kinesis privately, and their per-GB processing charge is lower than NAT gateway processing for this kind of high-volume traffic. Gateway endpoints are the free option, but they exist only for Amazon S3 and DynamoDB.",
    optionExplanations: [
      "NAT instances add management overhead, have limited throughput on burstable types, and become a scalability and availability risk.",
      "Gateway endpoints are available only for Amazon S3 and Amazon DynamoDB, not for SQS or Kinesis.",
      "Public subnets weaken the security posture and add public IPv4 address charges; this is not an appropriate fix for a cost issue.",
      "Correct — Interface endpoints keep traffic on the AWS network and avoid NAT gateway data processing charges at a lower per-GB rate."
    ]
  },
  {
    id: 1291,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An application server and a self-managed database server run on EC2 instances in the same Availability Zone and exchange large amounts of data. The application connects to the database by using the database instance's Elastic IP address, and the bill shows significant data transfer charges between them. Which change will reduce these charges?",
    options: [
      "Configure the application to connect to the database by using its private IP address.",
      "Move the database instance to a different subnet in the same Availability Zone.",
      "Place both instances in a spread placement group within the Availability Zone.",
      "Enable enhanced networking on both instances to compress the traffic."
    ],
    correct: [0],
    explanation: "Traffic between EC2 instances in the same Availability Zone is free when it uses private IP addresses, but traffic sent to a public or Elastic IP address is billed as data transfer even within the same AZ. Changing subnets or placement does not matter while the public address is used.",
    optionExplanations: [
      "Correct — Using private IP addresses keeps same-AZ traffic free of data transfer charges.",
      "The subnet does not change billing; the charge comes from addressing the instance by its public Elastic IP.",
      "Placement groups affect physical placement, not how traffic addressed to a public IP is billed.",
      "Enhanced networking increases packet performance; it does not compress traffic or change data transfer pricing."
    ]
  },
  {
    id: 1292,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company sends application logs from hundreds of services to Amazon CloudWatch Logs. All log groups use the default setting of never expiring, and log storage is now one of the largest items on the bill. Engineers search only the last 30 days of logs, but auditors require 7 years of retention, with retrieval within a day acceptable for older logs. Which solution is the MOST cost-effective?",
    options: [
      "Keep the logs in CloudWatch Logs indefinitely and create metric filters to support the auditors' queries.",
      "Set 30-day retention and use Data Firehose to deliver logs to S3, archived to Deep Archive.",
      "Set a 7-year retention on all log groups and switch them to the CloudWatch Logs Infrequent Access log class.",
      "Install the CloudWatch agent to write logs to Amazon EBS volumes attached to each instance for 7 years."
    ],
    correct: [1],
    explanation: "Short retention in CloudWatch Logs keeps searchable logs only for the period engineers use, and delivering a copy to S3 with transition to Glacier Deep Archive keeps the 7-year audit copy at the lowest storage price with retrieval within hours. The Infrequent Access log class lowers ingestion cost, but storing 7 years of logs in CloudWatch Logs remains far more expensive than archival storage in S3.",
    optionExplanations: [
      "Never-expiring log groups are the cause of the growing bill, and metric filters do not reduce stored log volume.",
      "Correct — 30-day retention limits CloudWatch storage, while the S3 copy archived to Deep Archive meets the 7-year requirement at minimal cost.",
      "Keeping 7 years of logs in CloudWatch Logs costs much more than archive storage, even with the Infrequent Access class.",
      "Storing logs on EBS volumes is costly, fragile, hard to search and does not provide durable, centralized audit retention."
    ]
  },
  {
    id: 1293,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company gives each development team its own AWS account. One team repeatedly left large EC2 instances running and exceeded its monthly budget. Management wants the team's tagged development instances to be stopped automatically when actual spending exceeds the budget, without writing custom code. Which solution will meet these requirements?",
    options: [
      "Create an Amazon EventBridge rule that stops the instances when a CloudWatch billing alarm changes state.",
      "Create an AWS Budgets action that stops the specified EC2 instances when the budget is exceeded.",
      "Enable AWS Cost Anomaly Detection and subscribe the team lead to anomaly alerts by email.",
      "Apply a service control policy that denies all EC2 actions in the team's account at all times."
    ],
    correct: [1],
    explanation: "AWS Budgets actions can run automatically when a budget threshold is exceeded, including stopping specific EC2 or RDS instances or applying IAM policies or SCPs, with no custom code. A CloudWatch billing alarm with EventBridge would need a Lambda function or similar target to actually stop instances.",
    optionExplanations: [
      "Billing alarm state changes would still need custom automation, such as a Lambda function, to identify and stop the instances.",
      "Correct — A Budgets action stops the targeted instances automatically when spending crosses the threshold, without custom code.",
      "Anomaly Detection alerts on unusual spending patterns but takes no automatic action to stop resources.",
      "A permanent deny on EC2 actions would prevent the team from doing any development work, which is far beyond the requirement."
    ]
  },
  {
    id: 1294,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company is planning to migrate an on-premises application to AWS. Before approving the project, management wants an estimate of the monthly cost of the proposed architecture, which includes EC2 instances, an Application Load Balancer, Amazon RDS, Amazon S3 and data transfer. Nothing has been deployed in AWS yet. Which solution will provide this estimate?",
    options: [
      "Use AWS Cost Explorer forecasting to project the costs of the new architecture.",
      "Use AWS Compute Optimizer to recommend instance types and their monthly prices.",
      "Model the architecture in AWS Pricing Calculator and share the saved estimate.",
      "Create an AWS Budgets budget and review its forecasted spend for the first month."
    ],
    correct: [2],
    explanation: "AWS Pricing Calculator estimates the cost of planned AWS services and configurations before anything is deployed, and the estimate can be saved and shared. Cost Explorer forecasting is based on historical usage, which does not exist yet for this account.",
    optionExplanations: [
      "Cost Explorer forecasts are derived from past usage, so it cannot project costs for an architecture that has never run.",
      "Compute Optimizer analyzes metrics from running resources; with nothing deployed it has no data to produce recommendations.",
      "Correct — Pricing Calculator lets the team model each planned service and produce a shareable monthly estimate before deployment.",
      "Budgets track and forecast actual spending; they do not estimate the cost of an architecture that has not been deployed."
    ]
  },
  {
    id: 1295,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company has 80 accounts in AWS Organizations. Costs must be reported by business unit, but a business unit is defined by a mix of account membership and resource tags, and the costs of a shared networking account must be distributed proportionally among the business units. The company wants this reporting in AWS billing tools with the LEAST operational overhead. Which solution will meet these requirements?",
    options: [
      "Create AWS Cost Categories with rules based on accounts and tags, and use split charge rules for the shared costs.",
      "Export the Cost and Usage Report to Amazon S3 and build a custom allocation process in Amazon Athena.",
      "Move all resources of each business unit into a dedicated account so that account-level reports are sufficient.",
      "Create one AWS Budgets budget per business unit filtered by tags and add the networking costs manually."
    ],
    correct: [0],
    explanation: "AWS Cost Categories group costs into business-defined categories using rules based on accounts, tags and other dimensions, and split charge rules allocate shared costs across categories proportionally or by fixed amounts; the categories then appear in Cost Explorer, Budgets and the Cost and Usage Report. A custom Athena process could produce the same result but requires building and maintaining the allocation logic.",
    optionExplanations: [
      "Correct — Cost Categories combine account and tag rules natively, and split charge rules distribute the shared networking costs automatically.",
      "A custom CUR and Athena pipeline works but requires ongoing development and maintenance of the allocation logic.",
      "Restructuring all accounts is a large migration effort and still does not handle the shared networking costs.",
      "Budgets track spending against limits; manually allocating networking costs each month is error-prone and adds effort."
    ]
  },
  {
    id: 1296,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company stores product photos in an S3 bucket. The team believes photos become infrequently accessed some weeks after upload but does not know when, and wants to base a lifecycle transition to S3 Standard-IA on observed access data rather than a guess. The access pattern is expected to be similar for all photos. Which solution will meet these requirements with the LEAST effort?",
    options: [
      "Enable S3 server access logs and calculate object access age with a custom script.",
      "Configure S3 Storage Class Analysis and use its findings to set the transition age.",
      "Enable S3 Inventory reports and compare object creation dates with their storage class.",
      "Use AWS Trusted Advisor to find the recommended transition age for the bucket."
    ],
    correct: [1],
    explanation: "S3 Storage Class Analysis observes access patterns on a bucket, prefix or tag and indicates when data becomes infrequently accessed, which can be used to set the age for a Standard-IA lifecycle transition. S3 Inventory lists objects and their metadata but does not show how often they are accessed.",
    optionExplanations: [
      "Analyzing access logs could reveal the pattern but requires building and running a custom analysis.",
      "Correct — Storage Class Analysis measures actual access by object age and helps choose the right transition age for Standard-IA.",
      "Inventory reports show object metadata such as size and storage class, not access frequency, so they cannot reveal when access drops.",
      "Trusted Advisor does not analyze per-bucket access patterns to recommend lifecycle transition ages."
    ]
  },
  {
    id: 1297,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A log-processing application on EC2 writes and reads multi-terabyte log files sequentially in large blocks. The workload needs high throughput but very few random IOPS, and the data volume is not the boot volume. It currently uses large gp3 volumes. Which EBS volume type will meet these requirements MOST cost-effectively?",
    options: [
      "Provisioned IOPS SSD (io2) volumes",
      "Throughput Optimized HDD (st1) volumes",
      "Cold HDD (sc1) volumes",
      "General Purpose SSD (gp2) volumes"
    ],
    correct: [1],
    explanation: "Throughput Optimized HDD (st1) is designed for frequently accessed, throughput-intensive sequential workloads such as log processing and big data, at a lower price per GB than SSD volumes. Cold HDD (sc1) is cheaper still, but it is intended for infrequently accessed data and offers lower throughput, which does not fit a high-throughput workload.",
    optionExplanations: [
      "io2 volumes are priced for high random IOPS and low latency, which this sequential workload does not need.",
      "Correct — st1 provides high sequential throughput at a low cost per GB, matching large sequential log processing on non-boot volumes.",
      "sc1 has the lowest price but lower throughput and is meant for cold, infrequently accessed data.",
      "gp2 SSD storage costs more per GB than st1 and its performance is tied to volume size, offering no advantage for sequential throughput."
    ]
  },
  {
    id: 1298,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company runs a long-lived Amazon EMR cluster with On-Demand primary, core and task nodes. The cluster stores input data in HDFS and runs Spark jobs for about 4 hours each night, then sits idle for the rest of the day. The jobs can tolerate the loss of individual task nodes. Which combination of actions will reduce costs the MOST? (Select TWO)",
    options: [
      "Store the data in Amazon S3 and launch a transient cluster for each nightly run that terminates when jobs finish.",
      "Run the core nodes on Spot Instances so that the HDFS capacity costs less.",
      "Run the task nodes on Spot Instances while keeping the primary and core nodes On-Demand.",
      "Purchase Reserved Instances for every node of the current long-running cluster.",
      "Run the primary node on a Spot Instance and the core and task nodes On-Demand."
    ],
    correct: [0, 2],
    explanation: "Keeping data in Amazon S3 decouples storage from compute, so the cluster can run only during the nightly window and terminate afterward instead of idling for 20 hours. Task nodes hold no HDFS data, so running them on Spot Instances cuts compute cost with minimal risk. Spot for core or primary nodes risks HDFS data loss or cluster failure, and RIs would lock in payment for capacity idle most of the day.",
    optionExplanations: [
      "Correct — Transient clusters with data in S3 pay for compute only while jobs run, eliminating the cost of the idle cluster.",
      "Core nodes store HDFS data; Spot interruptions could cause data loss and job failures.",
      "Correct — Task nodes only provide compute, so Spot interruptions are tolerable and their cost drops significantly.",
      "Reserved Instances discount the instances but the company would still pay for a cluster that is idle most of the day.",
      "Losing the primary node to a Spot interruption terminates the whole cluster, which is not acceptable."
    ]
  },
  {
    id: 1299,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company serves a public REST API from EC2 instances behind an Application Load Balancer in one Region. Responses are large JSON documents, many GET requests return the same content for several minutes, and data transfer out to the internet is now the largest part of the bill. Which combination of actions will reduce costs the MOST? (Select TWO)",
    options: [
      "Put an Amazon CloudFront distribution in front of the ALB and cache GET responses for a short TTL.",
      "Place AWS Global Accelerator in front of the ALB to route users over the AWS network.",
      "Enable S3 Transfer Acceleration for the API endpoint.",
      "Turn on automatic compression in CloudFront so responses are returned in a compressed format.",
      "Replace the ALB with a Network Load Balancer to reduce per-request processing charges."
    ],
    correct: [0, 3],
    explanation: "CloudFront serves repeated GET responses from edge caches, reducing origin load and requests, and data transferred from AWS origins to CloudFront is not charged, while CloudFront delivery pricing is typically lower than direct internet egress. Compressing large JSON responses at the edge further reduces the bytes transferred. Global Accelerator improves performance but adds its own fees and does not cache content.",
    optionExplanations: [
      "Correct — Caching repeated responses at the edge cuts origin traffic, and CloudFront delivery is generally cheaper than direct data transfer out.",
      "Global Accelerator adds hourly and premium data transfer charges and provides no caching, so it increases cost.",
      "Transfer Acceleration applies only to Amazon S3 buckets, not to an ALB-based API.",
      "Correct — Compressed JSON is much smaller, so fewer bytes are billed for delivery to users.",
      "Load balancer type does not affect data transfer out charges, which are the dominant cost here."
    ]
  },
  {
    id: 1300,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a containerized reconciliation job once per night. The job runs for about 40 minutes and currently executes on a dedicated EC2 instance that stays running 24 hours a day only to host the cron schedule. The company wants to minimize cost and avoid managing servers. Which solution will meet these requirements?",
    options: [
      "Package the job as an AWS Lambda function triggered nightly by an Amazon EventBridge schedule.",
      "Keep the EC2 instance and purchase a 3-year Reserved Instance for it.",
      "Run the job on an EC2 Spot Instance that is launched by a cron job on another instance.",
      "Use EventBridge Scheduler to run the container nightly as an ECS task on AWS Fargate."
    ],
    correct: [3],
    explanation: "EventBridge Scheduler can start an ECS task on Fargate on a schedule, so the company pays only for the roughly 40 minutes the container runs and manages no servers. Lambda is tempting for scheduled jobs, but its maximum execution time of 15 minutes is too short for a 40-minute job.",
    optionExplanations: [
      "Lambda functions cannot run longer than 15 minutes, so a 40-minute job would be terminated.",
      "A Reserved Instance discounts the instance but still pays for 24 hours of capacity to run a 40-minute job, and servers remain to be managed.",
      "This still requires an always-on instance to host the cron schedule, and Spot interruptions could stop the job.",
      "Correct — A scheduled Fargate task runs only for the job's duration with no servers to manage, eliminating the idle instance cost."
    ]
  }
];
