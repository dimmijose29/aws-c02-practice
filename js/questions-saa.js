// AWS Certified Solutions Architect – Associate SAA-C03 — Question Bank (150 questions)
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
  }
];
