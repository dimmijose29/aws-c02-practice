// AWS Certified Solutions Architect – Associate SAA-C03 — Question Bank (450 questions)
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
  },

  // ────────────────────────────────────────────────────────────────
  // ADDITIONAL QUESTIONS (ids 1301–1450)
  // ────────────────────────────────────────────────────────────────
  {
    id: 1301,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A company runs AWS CodePipeline in a central tools account and deploys AWS CloudFormation stacks into a separate production account. Pipeline artifacts are stored in an Amazon S3 bucket in the tools account and must be encrypted at rest. The deploy stage fails with access denied errors when it runs in the production account. Which combination of steps will allow the deployment while following least privilege? (Select TWO)",
    options: [
      "Encrypt the artifact bucket with a customer managed KMS key whose key policy lets the production deployment role decrypt.",
      "Keep the AWS managed aws/s3 key and add the production account to its key policy as an allowed principal.",
      "Create an IAM role in the production account that trusts the pipeline role in the tools account and has only the deployment permissions.",
      "Create an IAM user in the production account and store its access keys as pipeline environment variables.",
      "Replicate the artifact bucket to the production account with S3 Cross-Region Replication before each deployment."
    ],
    correct: [0, 2],
    explanation: "Cross-account pipelines need two things: a role in the target account that the pipeline can assume, and artifacts that the target role can decrypt. Because AWS managed keys such as aws/s3 cannot be shared across accounts, the artifact store must use a customer managed KMS key whose key policy grants the production role decrypt access. IAM users with stored keys would work but violate the least-privilege, no-long-term-credentials practice.",
    optionExplanations: [
      "Correct — the default aws/s3 key policy cannot be edited to grant another account, so a customer managed key that explicitly allows the production role is required to read encrypted artifacts.",
      "Key policies of AWS managed keys cannot be modified, so they can never be used across accounts.",
      "Correct — the pipeline assumes this cross-account role for the deploy action, receiving temporary credentials scoped to what the deployment needs.",
      "Long-term access keys in the pipeline violate best practices and add rotation burden when a cross-account role works.",
      "Replication adds latency and cost and still does not give the production deployment a way to be invoked by the pipeline."
    ]
  },
  {
    id: 1302,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company deploys to AWS from GitHub Actions by using IAM user access keys stored as repository secrets. The security team wants to eliminate long-term credentials and ensure that only workflows running on the main branch of one specific repository can deploy. Which solution meets these requirements?",
    options: [
      "Rotate the IAM user access keys daily with a scheduled AWS Lambda function that automatically updates the GitHub repository secrets.",
      "Create an IAM OIDC identity provider for GitHub and a role whose trust policy checks the repository and branch claims.",
      "Use a Cognito user pool account for the workflow and exchange its tokens for AWS credentials with an identity pool.",
      "Store the access keys in AWS Secrets Manager and let the workflow retrieve them with a separate read-only key."
    ],
    correct: [1],
    explanation: "Federating GitHub Actions through an IAM OIDC identity provider gives each workflow run temporary credentials, and conditions on the token's subject claim limit role assumption to the main branch of the named repository. Rotating or relocating access keys still leaves long-term credentials that any workflow holding the secret can use.",
    optionExplanations: [
      "Rotation shortens exposure but still relies on long-term keys, and any branch or workflow with the secret can deploy.",
      "Correct — GitHub issues a signed OIDC token per workflow run; the role trust policy can require the token's subject to match the repository and main branch, and STS returns short-lived credentials.",
      "This stores a user password in GitHub and adds Cognito components without tying access to a specific repository and branch.",
      "The workflow still needs a long-term key to reach Secrets Manager, so the problem is only moved, not removed."
    ]
  },
  {
    id: 1303,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company's network policy requires that every AWS Lambda function in its AWS organization run attached to approved VPCs so that outbound traffic passes through a central inspection firewall. The control must prevent noncompliant functions from being created or updated in any account, including by account administrators. Which solution meets these requirements?",
    options: [
      "Deploy an AWS Config rule in each account that flags functions not connected to an approved VPC.",
      "Attach a resource-based policy to each function that allows invocation only from the approved VPCs.",
      "Attach an SCP that denies creating or updating functions unless the lambda:VpcIds condition matches approved VPCs.",
      "Attach a permissions boundary to every developer role in each account that denies functions outside the approved VPCs."
    ],
    correct: [2],
    explanation: "Lambda supports condition keys such as lambda:VpcIds and lambda:SubnetIds, so an SCP can deny CreateFunction and UpdateFunctionConfiguration calls that do not use approved VPCs across the whole organization, administrators included. A Config rule only detects the problem after the fact, and permissions boundaries can be changed by account administrators.",
    optionExplanations: [
      "Config is detective: noncompliant functions would be created first and only reported afterwards.",
      "A resource-based policy controls who can invoke the function, not which VPC the function itself is attached to.",
      "Correct — Lambda exposes VPC-related condition keys, and an SCP using them blocks noncompliant create and update calls in every account, including for administrators.",
      "Account administrators could remove or bypass the boundary, so it does not meet the requirement to bind administrators."
    ]
  },
  {
    id: 1304,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Thousands of industrial sensors are registered in AWS IoT Core, each with its own X.509 certificate created by AWS IoT. The sensors must now upload diagnostic files directly to an Amazon S3 bucket. No long-term AWS credentials may be stored on the devices, and the team wants the LEAST operational overhead. Which solution meets these requirements?",
    options: [
      "Use the AWS IoT Core credential provider and a role alias to exchange device certificates for temporary credentials.",
      "Store a unique IAM user access key in each device's secure element and rotate the keys once a year.",
      "Enable unauthenticated identities in an Amazon Cognito identity pool and let each sensor request guest AWS credentials.",
      "Create a Cognito user pool account with a password for each device and sign in before every upload."
    ],
    correct: [0],
    explanation: "The AWS IoT Core credential provider lets a device that already authenticates with an X.509 certificate obtain temporary AWS credentials through a role alias, so no new identity system is needed. Per-device IAM keys are long-term credentials, and unauthenticated Cognito identities would let anyone obtain access.",
    optionExplanations: [
      "Correct — the credential provider authenticates the device with its existing X.509 certificate and returns temporary credentials for the IAM role referenced by the role alias.",
      "These are long-term credentials on the devices, which the requirement prohibits, and rotating thousands of keys is heavy work.",
      "Anyone could obtain guest credentials, so the devices would not be authenticated at all.",
      "Devices would store passwords and the team would manage thousands of user accounts, adding overhead and risk."
    ]
  },
  {
    id: 1305,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A SaaS provider stores customer files in Amazon S3 in its own AWS account. Enterprise customers require that their files be encrypted with a key in the customer's own AWS account, that every use of the key appear in the customer's AWS CloudTrail logs, and that they can revoke the provider's access at any time. Which solution meets these requirements?",
    options: [
      "Encrypt each customer's files with SSE-C by using a key that the customer sends to the provider.",
      "Import each customer's key material into a KMS key in the provider's own account and encrypt with SSE-KMS.",
      "Use SSE-KMS with a key in each customer's account whose key policy allows the provider's role to use it.",
      "Store each customer's files in a dedicated bucket that uses SSE-S3 and grant the customer read access."
    ],
    correct: [2],
    explanation: "When the KMS key lives in the customer's account and its key policy grants the provider's role cryptographic use, every encrypt and decrypt call is recorded in the key owner's CloudTrail and the customer can revoke access by editing the policy or disabling the key. Importing key material into the provider's account keeps control and logs with the provider.",
    optionExplanations: [
      "With SSE-C the provider must store and send the key, key usage is not logged in the customer's CloudTrail, and revocation depends on the provider.",
      "The key would live in the provider's account, so the customer cannot control it or see usage events in its own CloudTrail.",
      "Correct — cross-account KMS usage is logged in the key owner's CloudTrail, and the customer can disable the key or change its policy to revoke access immediately.",
      "SSE-S3 keys are managed entirely by Amazon S3, so customers neither own the key nor can revoke access through it."
    ]
  },
  {
    id: 1306,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A company uses separate AWS accounts for development, test, and production, but all environments encrypt data with one customer managed AWS KMS key in a shared account. The security team requires that no development or test principal can ever decrypt production data, and that administrators who manage keys cannot use them to decrypt data. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Replace the shared key with one multi-Region key and create a replica of it for each environment.",
      "Use the AWS managed keys of each service in every environment account instead of customer managed keys.",
      "Give the key administrators full KMS permissions so they can recover data if a workload role is lost.",
      "Create a separate customer managed key in each environment account that only that environment's roles can use.",
      "In each key policy, give administrators key management actions only and give cryptographic actions only to workload roles."
    ],
    correct: [3, 4],
    explanation: "One key per environment, each with its own key policy, ensures that development and test principals can never decrypt production data. Separating key administration permissions from cryptographic-use permissions in each key policy satisfies the separation-of-duties requirement. Multi-Region replicas share key material within one account and do not provide environment isolation.",
    optionExplanations: [
      "Multi-Region replicas share the same key material and are created in other Regions of the same account, so they do not separate environments.",
      "AWS managed key policies cannot be edited, so the team cannot separate administration from usage or control cross-account access.",
      "Granting key administrators decrypt rights directly violates the requirement that administrators cannot use the keys.",
      "Correct — separate keys with separate key policies create a hard cryptographic boundary: production data cannot be decrypted with credentials from development or test.",
      "Correct — splitting key administration from key usage in the key policy enforces separation of duties so administrators cannot decrypt data."
    ]
  },
  {
    id: 1307,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company hosts a single-page application in an Amazon S3 bucket and its REST API in Amazon API Gateway. Both must be served under one custom domain over HTTPS, protected by the same AWS WAF rules, and the bucket must stay private. The company also wants to avoid configuring CORS. Which solution meets these requirements?",
    options: [
      "Enable S3 static website hosting with a public bucket policy and point a CloudFront distribution to the website endpoint.",
      "Create one distribution for the site and another for the API, each with its own subdomain and web ACL.",
      "Use an edge-optimized API custom domain and serve the site from the same hostname through S3 website hosting.",
      "Use one CloudFront distribution with an OAC-protected S3 origin, an /api/* behavior for API Gateway, and a web ACL."
    ],
    correct: [3],
    explanation: "A single CloudFront distribution can route the default path to the private S3 origin through origin access control and the /api/* path to API Gateway, so the browser sees one origin and no CORS configuration is needed. One web ACL on the distribution protects both. Using the S3 website endpoint would require making the bucket public.",
    optionExplanations: [
      "The website endpoint requires a public bucket, which violates the requirement that the bucket stay private.",
      "Two different domains make the browser treat API calls as cross-origin, so CORS would still be needed.",
      "The same hostname cannot point to both an API Gateway custom domain and an S3 website endpoint, and the bucket would be public.",
      "Correct — one distribution serves both under one domain so no CORS is needed, origin access control keeps the bucket private, and one web ACL protects everything."
    ]
  },
  {
    id: 1308,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Applications in 25 AWS accounts write logs to Amazon CloudWatch Logs. The security team needs a copy of these logs in a central log archive account in near real time. The copies must be immutable for one year, and the team wants the LEAST operational overhead. Which solution meets these requirements?",
    options: [
      "Schedule an AWS Lambda function in each account that exports log groups to the central bucket every night.",
      "Enable CloudWatch cross-account observability so that the central account can view the log groups.",
      "Use subscription filters to a central log destination that delivers through Firehose to an S3 bucket with Object Lock.",
      "Create an organization trail in AWS CloudTrail that delivers events to an S3 bucket with Object Lock in the log archive account."
    ],
    correct: [2],
    explanation: "CloudWatch Logs subscription filters can send log events to a cross-account destination backed by Amazon Data Firehose, which delivers them in near real time to an S3 bucket where Object Lock enforces immutability. Cross-account observability only lets the central account view logs, and CloudTrail does not capture application logs.",
    optionExplanations: [
      "Nightly exports are not near real time and require code and schedules in every account.",
      "Cross-account observability provides viewing access only; logs remain in the source accounts and are not copied or protected from deletion.",
      "Correct — cross-account subscription filters deliver logs continuously to a destination in the archive account, and Object Lock in compliance mode keeps the delivered objects immutable.",
      "CloudTrail records API activity, not the application logs written to CloudWatch Logs."
    ]
  },
  {
    id: 1309,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A company connects its data center to a VPC with AWS Direct Connect. On-premises servers must resolve records in a Route 53 private hosted zone for aws.example.internal, and Amazon EC2 instances must resolve corp.example.internal, which is hosted on the on-premises DNS servers. DNS queries must not traverse the internet, and the company prefers managed services. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Create a Route 53 Resolver inbound endpoint and configure on-premises DNS to forward aws.example.internal to its IP addresses.",
      "Convert the private hosted zone to a public hosted zone so that on-premises servers can resolve its records.",
      "Run BIND forwarders on Amazon EC2 instances in the VPC and point the VPC DHCP options to them.",
      "Enable DNS hostnames and DNS resolution on the VPC so that the on-premises domain becomes resolvable.",
      "Create a Resolver outbound endpoint and a forwarding rule for corp.example.internal that targets the on-premises DNS servers."
    ],
    correct: [0, 4],
    explanation: "Route 53 Resolver inbound endpoints accept queries from on-premises for private hosted zones, and outbound endpoints with forwarding rules send queries for on-premises domains to the corporate DNS servers, all over the private connection. Running BIND on EC2 would also work but adds management overhead that the managed endpoints avoid.",
    optionExplanations: [
      "Correct — the inbound endpoint gives on-premises resolvers private IP addresses in the VPC to which they can forward queries for the private hosted zone.",
      "This exposes internal records on the internet and sends queries outside the private connection.",
      "Self-managed DNS servers work but add patching, scaling, and availability overhead that the managed Resolver endpoints avoid.",
      "These settings control the Amazon-provided resolver for AWS names only; they do not forward queries to on-premises DNS.",
      "Correct — the outbound endpoint and forwarding rule let the VPC resolver send queries for the corporate domain over Direct Connect to the on-premises DNS servers."
    ]
  },
  {
    id: 1310,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An Amazon ECS task definition on AWS Fargate injects a database password from AWS Secrets Manager into a container environment variable by referencing the secret in the task definition. The tasks run in subnets with a NAT gateway, and the task role already allows reading the secret. Tasks fail to start with an error that the secret cannot be retrieved. Which solution will resolve the issue?",
    options: [
      "Grant the task execution role permission to read the secret and decrypt it with its KMS key.",
      "Add a resource-based policy to the secret that allows the ecs-tasks.amazonaws.com service principal to read it.",
      "Create an interface VPC endpoint for Secrets Manager in the subnets where the tasks run.",
      "Move the password to a Systems Manager Parameter Store parameter and reference that instead."
    ],
    correct: [0],
    explanation: "Secrets referenced in an ECS task definition are fetched by the agent with the task execution role before the container starts; the task role is only used by the application code at run time. Granting the execution role read access to the secret (and KMS decrypt for a customer managed key) fixes the startup failure. Connectivity is not the issue because the subnets have a NAT gateway.",
    optionExplanations: [
      "Correct — the ECS agent retrieves secrets referenced in the task definition by using the task execution role before the container starts.",
      "Secret injection is performed with the task execution role's credentials, not a service principal, so this policy does not help.",
      "The subnets already reach Secrets Manager through the NAT gateway, so connectivity is not the cause.",
      "Parameter Store references are also resolved by the execution role, so the same permission error would occur."
    ]
  },
  {
    id: 1311,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Several applications run on a shared Amazon EKS cluster. All pods currently use the node instance role, which has the combined permissions of every application. The security team requires each application's pods to receive only their own AWS permissions, with the LEAST operational overhead. Which solution meets these requirements?",
    options: [
      "Create a separate managed node group for each application, each with its own dedicated EC2 instance role.",
      "Store per-application IAM access keys in Kubernetes Secrets and mount them into the pods.",
      "Use EKS Pod Identity to associate each application's Kubernetes service account with its own IAM role.",
      "Define Kubernetes RBAC roles that limit which AWS services each namespace can call."
    ],
    correct: [2],
    explanation: "EKS Pod Identity (or IAM roles for service accounts) maps a Kubernetes service account to an IAM role so each application's pods get temporary credentials scoped to that role, independent of the node role. Separate node groups add cost and still share permissions among pods on a node, and RBAC does not govern AWS API calls.",
    optionExplanations: [
      "This multiplies node groups and cost, and pods scheduled on a node still share that node's role.",
      "This introduces long-term credentials that must be rotated and protected, which is less secure than temporary role credentials.",
      "Correct — each pod receives temporary credentials only for the role mapped to its service account, so applications are isolated without extra infrastructure.",
      "Kubernetes RBAC controls access to the Kubernetes API, not to AWS services."
    ]
  },
  {
    id: 1312,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A bank must keep all customer data and the key material that protects it inside eu-central-1. An SCP already restricts most actions to that Region. The compliance team is concerned that a developer could create AWS KMS keys whose key material is replicated to other Regions. The control must apply to every account, including member account administrators. Which solution meets these requirements with the LEAST operational overhead?",
    options: [
      "Add an SCP statement that denies creating multi-Region KMS keys and denies replicating keys.",
      "Ask each key owner to add a statement to the key policy that denies replication of the key.",
      "Deploy an AWS Config rule that reports multi-Region keys to the security team for manual deletion.",
      "Attach a permissions boundary to every developer role in each account that denies KMS replication."
    ],
    correct: [0],
    explanation: "An SCP that denies kms:CreateKey when kms:MultiRegion is true, together with kms:ReplicateKey, centrally prevents multi-Region keys in all member accounts, administrators included. Key policies and permissions boundaries can be changed by account administrators, and a Config rule only detects replication after it has happened.",
    optionExplanations: [
      "Correct — denying key creation when the kms:MultiRegion condition is true, and denying ReplicateKey, prevents key material from being copied to other Regions in every account.",
      "Key owners write their own key policies, so this cannot be enforced centrally or against administrators.",
      "This is detective only; key material could already have been replicated before anyone reacts.",
      "Boundaries must be managed per account and do not bind account administrators who can remove them."
    ]
  },
  {
    id: 1313,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A company wants to respond automatically when Amazon GuardDuty reports that an Amazon EC2 instance is communicating with a command-and-control server. Within minutes, the instance must be isolated from the network, and its Amazon EBS volumes must be preserved for forensic analysis. The solution must have the LEAST operational overhead. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Create an Amazon EventBridge rule that matches the relevant GuardDuty finding types.",
      "Configure GuardDuty to stop the affected instance automatically when the finding is generated.",
      "Mark the instance unhealthy so that its Auto Scaling group terminates and replaces it.",
      "Use a Security Hub custom action that analysts trigger after they review each finding.",
      "Target an SSM Automation runbook that swaps in an isolation security group and snapshots the volumes."
    ],
    correct: [0, 4],
    explanation: "An EventBridge rule on GuardDuty findings can start a Systems Manager Automation runbook (or Lambda function) that replaces the security groups with an isolation group and snapshots the EBS volumes, preserving the evidence. GuardDuty itself does not remediate, and terminating the instance destroys forensic data.",
    optionExplanations: [
      "Correct — GuardDuty publishes findings to EventBridge, so a rule can trigger the response automatically within minutes.",
      "GuardDuty detects threats but does not take remediation actions on resources by itself.",
      "Termination destroys the instance and possibly its volumes, which defeats the forensic preservation requirement.",
      "Custom actions are started manually by analysts, so the response would not be automatic within minutes.",
      "Correct — the runbook isolates the instance while keeping it running and captures EBS snapshots as evidence without custom servers."
    ]
  },
  {
    id: 1314,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company exposes an AWS Lambda function through a function URL. The company wants to put Amazon CloudFront with AWS WAF in front of it and must ensure that clients cannot invoke the function URL directly. Which solution is the MOST secure?",
    options: [
      "Keep the function URL public and have CloudFront add a secret custom header that the function checks.",
      "Set the function URL to IAM authentication and use CloudFront origin access control to sign requests.",
      "Allow the function URL to be called only from the CloudFront managed prefix list of origin-facing IPs.",
      "Attach the function to a VPC and allow inbound traffic only from CloudFront in its security group."
    ],
    correct: [1],
    explanation: "CloudFront origin access control supports Lambda function URL origins: with the URL set to IAM authentication, only requests signed by CloudFront for that distribution are authorized. A secret header is weaker because the endpoint remains public and protection depends on a shared value.",
    optionExplanations: [
      "This works but relies on a shared secret that could leak, and the URL remains publicly invokable at the Lambda level.",
      "Correct — with IAM auth only signed requests are accepted, and OAC lets only the specific distribution sign them, so direct calls are rejected.",
      "Function URLs cannot be restricted by source IP prefix lists, so this control cannot be applied.",
      "Attaching a function to a VPC affects its outbound traffic only; function URLs are not reached through the VPC."
    ]
  },
  {
    id: 1315,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company exposes a REST API in Amazon API Gateway to the backend systems of several partners. The partners require the OAuth 2.0 client credentials flow, and each partner must be limited to specific API operations through scopes. The company wants to write as little custom authentication code as possible. Which solution meets these requirements?",
    options: [
      "Create an IAM user for each partner and require SigV4-signed requests with IAM authorization.",
      "Issue API keys to each partner and associate them with usage plans that limit the allowed methods.",
      "Write a Lambda authorizer that validates tokens issued by a self-hosted OAuth 2.0 authorization server.",
      "Use a Cognito user pool with custom scopes and an app client per partner, plus a Cognito authorizer."
    ],
    correct: [3],
    explanation: "Amazon Cognito user pools support the OAuth 2.0 client credentials grant with resource servers and custom scopes, and an API Gateway Cognito authorizer can require specific scopes per method. A Lambda authorizer with a self-hosted token server would work but needs much more custom code, and API keys are not meant for authentication.",
    optionExplanations: [
      "Partners would hold long-term AWS keys and this is not the OAuth 2.0 client credentials flow they require.",
      "API keys identify clients for throttling and quotas; they are not an authentication mechanism and do not implement OAuth scopes.",
      "This is viable but requires building and running the token server and validation code, which adds custom code.",
      "Correct — Cognito issues access tokens through the client credentials grant, and the API Gateway Cognito authorizer validates them and their scopes without custom code."
    ]
  },
  {
    id: 1316,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An application keeps long-lived connection pools to an Amazon RDS for PostgreSQL database and reads its password from AWS Secrets Manager. During automatic rotation, some application instances fail to open new connections until they refresh the secret. The database client library does not support IAM authentication tokens. Which solution will eliminate these failures?",
    options: [
      "Rotate the password more frequently so that each rotation affects fewer active connections.",
      "Disable automatic rotation and change the password manually during scheduled maintenance windows.",
      "Use the alternating users rotation strategy so that the previous credentials remain valid after each rotation.",
      "Enable IAM database authentication on the DB instance and keep the existing secret only as a fallback option."
    ],
    correct: [2],
    explanation: "With the alternating users strategy, Secrets Manager rotates between two database users, so the credentials that application instances cached before rotation remain valid until they fetch the new value. Single-user rotation invalidates the old password immediately, and IAM authentication is ruled out by the client library.",
    optionExplanations: [
      "More frequent single-user rotation produces more windows in which cached passwords become invalid.",
      "This removes the security benefit of automatic rotation and still causes failures during each change.",
      "Correct — rotation alternates between two database users, so an instance with the previous secret value can still connect until it refreshes.",
      "The client library does not support IAM authentication tokens, so this option cannot be used."
    ]
  },
  {
    id: 1317,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company replicates an Amazon S3 bucket to a bucket in a separate disaster recovery account. Objects encrypted with SSE-S3 replicate correctly, but objects encrypted with SSE-KMS by using a customer managed key are not replicated. The DR copies must also be encrypted with a key that the DR account controls. Which solution meets these requirements?",
    options: [
      "Enable replication of KMS-encrypted objects, name a DR-account key, and let the replication role use both keys.",
      "Change the source bucket default encryption to SSE-S3 so that every new object replicates.",
      "Run S3 Batch Replication every day to copy the objects that live replication skipped.",
      "Grant the DR account s3:ReplicateObject in the source bucket policy and copy the objects from the DR account side."
    ],
    correct: [0],
    explanation: "Amazon S3 skips SSE-KMS objects unless the replication rule explicitly enables them and specifies a destination KMS key, and the replication role must be able to decrypt with the source key and encrypt with the destination key (which the DR key policy must allow). Batch Replication relies on the same configuration, so it would fail the same way.",
    optionExplanations: [
      "Correct — replication must opt in to SSE-KMS objects, and the replication role needs decrypt on the source key and encrypt on the destination key.",
      "This abandons the customer managed key and does not encrypt the DR copies with a key that the DR account controls.",
      "Batch Replication uses the same replication configuration and role, so it fails for the same permission reason.",
      "Replication is pushed by the source bucket's replication role; a bucket policy in the source cannot fix missing KMS permissions."
    ]
  },
  {
    id: 1318,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A penetration test showed that a server-side request forgery flaw in a web application could read instance role credentials from the EC2 instance metadata service. The company's applications rely on instance roles. The company wants all existing and future instances in its AWS organization to be protected against this attack path. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Turn off the instance metadata service on every instance to stop all access to role credentials.",
      "Add an outbound security group rule that blocks traffic to the link-local metadata address.",
      "Attach an SCP that denies launching instances unless the metadata options require session tokens (IMDSv2).",
      "Modify the metadata options of existing instances to require IMDSv2 after confirming the SDKs support it.",
      "Add an AWS WAF rule on the load balancer that blocks requests containing the metadata IP address."
    ],
    correct: [2, 3],
    explanation: "IMDSv2 requires a session token obtained with a PUT request, which typical SSRF flaws cannot perform, so enforcing it mitigates the attack while keeping instance roles working. An SCP condition on the metadata token setting enforces IMDSv2 for new launches, and modifying metadata options fixes existing instances. Security groups do not filter metadata traffic, and WAF patterns are bypassable.",
    optionExplanations: [
      "Applications rely on instance roles, which deliver credentials through the metadata service, so disabling it would break them.",
      "Traffic to the instance metadata service does not pass through security groups, so this rule has no effect.",
      "Correct — this prevents any new instance in any account from launching with IMDSv1 enabled.",
      "Correct — requiring session tokens on running instances closes the path for simple SSRF requests, which cannot obtain the PUT-based token.",
      "Pattern matching helps against some payloads but can be bypassed with encodings and does not protect instances that are not behind the ALB."
    ]
  },
  {
    id: 1319,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Developers must be able to launch Amazon EC2 instances and attach IAM roles to them. A recent audit found that a developer attached an administrator role to an instance and used it to escalate privileges. Developers must be able to attach only roles that the platform team created for workloads. Which solution meets these requirements?",
    options: [
      "Deny iam:CreateRole to developers so that they cannot create any new roles with administrator permissions.",
      "Allow iam:PassRole only on role ARNs under a workload path and only when the role is passed to Amazon EC2.",
      "Attach an SCP that denies ec2:RunInstances to developers in all accounts of the organization.",
      "Require MFA for developers before they can launch EC2 instances that use an instance profile."
    ],
    correct: [1],
    explanation: "Attaching a role to a service is governed by iam:PassRole, so restricting it to the approved workload role ARNs (and to EC2 with iam:PassedToService) stops developers from handing administrator roles to instances. Denying role creation does not address existing privileged roles, and MFA does not limit which role is passed.",
    optionExplanations: [
      "The escalation used an existing administrator role, so blocking role creation does not prevent passing it.",
      "Correct — PassRole controls which roles a principal can hand to a service, so limiting it to workload roles and to EC2 prevents passing administrator roles.",
      "This prevents developers from launching instances at all, which they are required to do.",
      "MFA confirms the developer's identity but does not restrict which roles they can attach."
    ]
  },
  {
    id: 1320,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A security team needs an identical read-only IAM role, trusted by its security tooling account, in every account of the company's AWS organization. New accounts are created weekly, and the role must appear in them automatically without custom code. Which solution meets these requirements?",
    options: [
      "Create an AWS Lambda function, triggered by account creation events, that creates the role in each new member account.",
      "Create the role once in the management account and share it with all accounts by using AWS RAM.",
      "Assign an IAM Identity Center permission set with read-only access to every account in the organization.",
      "Deploy the role with CloudFormation StackSets using service-managed permissions and automatic deployment to OUs."
    ],
    correct: [3],
    explanation: "CloudFormation StackSets with service-managed permissions integrate with AWS Organizations and automatically deploy stack instances to accounts that join the target OUs, keeping the role identical everywhere. A Lambda function could do the same but requires custom code, and IAM roles cannot be shared with AWS RAM.",
    optionExplanations: [
      "This works but requires writing and maintaining custom code, which the requirement rules out.",
      "IAM roles cannot be shared through AWS Resource Access Manager; each account needs its own role.",
      "Permission sets serve human sign-in through Identity Center and cannot be assumed by a tooling account's role.",
      "Correct — StackSets with service-managed permissions deploy the stack to all accounts in target OUs and automatically to new accounts added to them."
    ]
  },
  {
    id: 1321,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A CI/CD deployment role has the AdministratorAccess policy because the team was unsure which permissions it needed. The role has run deployments for several months, and AWS CloudTrail has been enabled the entire time. The security team wants a least-privilege policy for the role with the LEAST effort. Which solution meets these requirements?",
    options: [
      "Use IAM Access Analyzer to generate a policy from the role's CloudTrail activity and refine it before attaching.",
      "Replace AdministratorAccess with the PowerUserAccess managed policy and monitor deployments for errors.",
      "Query the CloudTrail logs with Amazon Athena and write a custom policy from the list of actions found.",
      "Review AWS Trusted Advisor checks to identify the permissions that the role does not use."
    ],
    correct: [0],
    explanation: "IAM Access Analyzer policy generation analyzes a role's CloudTrail activity and drafts a fine-grained policy based on the services and actions actually used, which the team can review and attach. Querying CloudTrail with Athena reaches a similar result with considerably more manual work.",
    optionExplanations: [
      "Correct — Access Analyzer reviews the CloudTrail history and produces a policy containing the actions and services the role actually used.",
      "PowerUserAccess is still extremely broad and is not based on the role's actual needs.",
      "This produces a similar result but requires building queries and writing the policy by hand, which is more effort.",
      "Trusted Advisor does not analyze individual role permissions or generate policies."
    ]
  },
  {
    id: 1322,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A news mobile app lets readers browse without signing in. The app must send clickstream events directly to an Amazon Data Firehose stream without a backend service. The app must not contain long-term AWS credentials, and guests must be able to do nothing other than write to that stream. Which solution meets these requirements?",
    options: [
      "Embed an IAM user access key in the app whose policy allows writing only to the stream.",
      "Use an identity pool with guest access whose unauthenticated role can only write to the stream.",
      "Use a Cognito user pool and issue ID tokens to guest readers that the app then sends directly to Firehose.",
      "Send events to an API Gateway endpoint with an API key that forwards them to the stream."
    ],
    correct: [1],
    explanation: "A Cognito identity pool with unauthenticated identities gives guest users temporary AWS credentials for a tightly scoped IAM role, here limited to writing records to one Firehose stream. Embedded access keys are long-term credentials, and user pool tokens cannot be used to call Firehose directly.",
    optionExplanations: [
      "Embedded keys are long-term credentials that can be extracted from the app and must be rotated across all installs.",
      "Correct — the identity pool issues temporary credentials to guests, and the unauthenticated role limits them to putting records into that one stream.",
      "User pools require users to sign in, and Firehose accepts AWS SigV4 credentials, not user pool tokens.",
      "This adds a backend layer that the requirement excludes, and the API key embedded in the app is not an authentication mechanism."
    ]
  },
  {
    id: 1323,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Several containerized applications share one Amazon EFS file system so that it can be backed up as a unit. Each application must see only its own directory and must write files as a specific POSIX user, even if a container runs as root. Access must be controlled with IAM. Which solution meets these requirements?",
    options: [
      "Create a separate EFS file system for each application and mount each one in its own containers.",
      "Set POSIX directory permissions so that each application user can access only its own directory.",
      "Use a separate security group per application that allows NFS traffic only to that application's directory on the file system.",
      "Create one EFS access point per application with a root directory and enforced user, required by the file system policy."
    ],
    correct: [3],
    explanation: "EFS access points enforce a root directory and a POSIX user and group for every request made through them, regardless of the client's identity, and IAM authorization in the file system policy can require each role to use its access point. Plain POSIX permissions are bypassed by containers running as root.",
    optionExplanations: [
      "This isolates data but breaks the requirement to keep one file system that is backed up as a unit.",
      "Containers running as root can bypass POSIX permissions, so the isolation is not enforced.",
      "Security groups filter network connections to mount targets; they cannot restrict access to directories.",
      "Correct — access points pin each client to its directory and override the POSIX user, and the file system policy can require that clients use them."
    ]
  },
  {
    id: 1324,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "Amazon ECS tasks on AWS Fargate run in private subnets that have no NAT gateway or internet gateway, and the security team prohibits adding one. The tasks must pull images from a private Amazon ECR repository in the same Region. An interface endpoint for CloudWatch Logs already exists. Which combination of steps is required? (Select TWO)",
    options: [
      "Create interface VPC endpoints for the ECR API and the ECR Docker registry.",
      "Create a NAT gateway only for image pulls and remove it after the tasks start.",
      "Enable an ECR pull through cache rule for the private repository in the same Region.",
      "Create a gateway VPC endpoint for Amazon S3 and associate it with the private subnets' route tables.",
      "Copy the images to the Amazon ECR Public Gallery so that tasks can pull them without authentication."
    ],
    correct: [0, 3],
    explanation: "Pulling from private ECR without internet access needs the ecr.api and ecr.dkr interface endpoints for authentication and manifests, plus an S3 gateway endpoint because image layers are served from Amazon S3. A NAT gateway is prohibited, and making images public is a security regression.",
    optionExplanations: [
      "Correct — Fargate needs both ECR interface endpoints to authenticate and to retrieve image manifests privately.",
      "Any NAT gateway, even temporary, violates the prohibition, and tasks that restart later would fail to pull.",
      "Pull through cache syncs from upstream registries; it does not provide network access to ECR from the subnets.",
      "Correct — ECR stores image layers in Amazon S3, so tasks need the S3 gateway endpoint to download the layers.",
      "This exposes private images publicly and still requires a network path to the public registry."
    ]
  },
  {
    id: 1325,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company runs workloads on Amazon EKS. Database credentials must stay in AWS Secrets Manager with automatic rotation, pods must consume them as mounted files, and the credentials must not be stored as Kubernetes Secret objects in the cluster. Which solution meets these requirements?",
    options: [
      "Create Kubernetes Secrets for the credentials and enable envelope encryption of secrets with a customer managed KMS key.",
      "Use the Secrets Store CSI Driver with the AWS provider and grant each pod's service account access to its secrets.",
      "Bake the credentials into the container images during the build and rebuild images after every rotation.",
      "Store the credentials in a ConfigMap and restrict access to the ConfigMap with Kubernetes RBAC."
    ],
    correct: [1],
    explanation: "The AWS Secrets and Configuration Provider for the Secrets Store CSI Driver mounts Secrets Manager secrets into pods as files, using the pod's IAM role for access, so Secrets Manager remains the single source with rotation. Envelope-encrypted Kubernetes Secrets still store the values in the cluster.",
    optionExplanations: [
      "The credentials would still be stored in the cluster as Secret objects and would not benefit from Secrets Manager rotation.",
      "Correct — the driver mounts secrets from Secrets Manager into pods as files at run time without creating Kubernetes Secret objects.",
      "Credentials in images are exposed to anyone who can pull them, and rebuilding after each rotation is impractical.",
      "ConfigMaps are not designed for secrets, store values unencrypted in the cluster, and do not integrate with rotation."
    ]
  },
  {
    id: 1326,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company attaches production VPCs, development VPCs, and a shared services VPC to one AWS Transit Gateway. Production and development VPCs must never be able to route traffic to each other, but both must reach the shared services VPC. The solution must scale as VPCs are added. Which solution meets these requirements?",
    options: [
      "Use separate transit gateway route tables per environment and propagate only the routes each one may use.",
      "Add network ACL rules in every production subnet that deny traffic from the development CIDR ranges.",
      "Create a separate transit gateway for each environment and peer both of them with the shared services VPC.",
      "Replace the transit gateway with VPC peering between each VPC and the shared services VPC."
    ],
    correct: [0],
    explanation: "Transit gateway route tables segment routing domains: production and development attachments are associated with tables that contain only shared services routes, while the shared services table propagates both environments. Network ACLs could block traffic but must be maintained in every subnet as CIDRs change.",
    optionExplanations: [
      "Correct — each environment's route table learns only shared services routes, while the shared services table learns both, so production and development cannot route to each other.",
      "This works only while CIDR lists are kept current in every subnet, which is error-prone and does not scale.",
      "VPCs cannot be peered with a transit gateway; this design is not possible as described and adds cost.",
      "Peering works for small numbers of VPCs but becomes a large mesh to manage as VPCs are added."
    ]
  },
  {
    id: 1327,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company must inspect all inbound internet traffic to its application VPC by using a fleet of third-party virtual firewall appliances that its security team already licenses. The appliances must scale horizontally, receive traffic transparently without source NAT, and keep flows symmetric. Which solution meets these requirements?",
    options: [
      "Place the appliances behind a Network Load Balancer and route internet traffic to the load balancer.",
      "Deploy AWS Network Firewall in the VPC and route ingress traffic through its endpoints.",
      "Deploy a Gateway Load Balancer with the appliances as targets and route ingress traffic through its endpoints.",
      "Place an Application Load Balancer in front of the appliances and forward the allowed traffic to the application."
    ],
    correct: [2],
    explanation: "Gateway Load Balancer is designed to insert third-party virtual appliances into the traffic path transparently, preserving source addresses and flow symmetry while scaling the appliance fleet. Network Firewall would inspect traffic but does not use the licensed third-party appliances.",
    optionExplanations: [
      "An NLB does not insert appliances transparently into the routing path and cannot guarantee symmetric return traffic through them.",
      "Network Firewall is a managed AWS service, not the third-party appliances the team must use.",
      "Correct — Gateway Load Balancer transparently distributes traffic to appliances with GENEVE encapsulation, keeps flows sticky, and scales the fleet.",
      "An ALB terminates HTTP connections and is not designed to pass all traffic transparently through firewalls."
    ]
  },
  {
    id: 1328,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Contractors working from their own laptops need access to SSH and database ports on resources in private subnets of a VPC. They must authenticate with the company's SAML 2.0 identity provider, and access to each subnet must depend on the contractor's group. The company wants a fully managed solution. Which solution meets these requirements?",
    options: [
      "Create a Site-to-Site VPN connection for each contractor laptop and add routes for the private subnets.",
      "Deploy a bastion host with a public IP address and create Linux accounts for each contractor.",
      "Order an AWS Direct Connect hosted connection and share it with the contractors' home networks.",
      "Deploy AWS Client VPN with SAML federated authentication and group-based authorization rules."
    ],
    correct: [3],
    explanation: "AWS Client VPN provides managed remote access from user devices, supports SAML federation with the corporate identity provider, and uses authorization rules to allow each group access only to specific subnets. A bastion host would require server and credential management and an internet-facing port.",
    optionExplanations: [
      "Site-to-Site VPN connects networks through customer gateways, not individual laptops, and has no per-user SAML authentication.",
      "This requires managing a server, user accounts, and SSH keys, and exposes an inbound port to the internet.",
      "Direct Connect links fixed locations to AWS; it is not suitable for individual remote laptops.",
      "Correct — Client VPN is a managed remote access service that authenticates users through SAML and authorizes access to network ranges by group."
    ]
  },
  {
    id: 1329,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Data analysts run Amazon Athena queries over sensitive data. Every query result written to Amazon S3 must be encrypted with a specific customer managed AWS KMS key, and analysts must not be able to choose a different encryption setting or result location. Which solution meets these requirements?",
    options: [
      "Enable default encryption with the KMS key on the results bucket and let analysts choose their own output locations.",
      "Use an Athena workgroup that encrypts results with the key and overrides client settings, and limit analysts to it.",
      "Enable Amazon Macie on the results bucket to detect unencrypted query results and alert the team.",
      "Register the results bucket in AWS Lake Formation and grant analysts access only to encrypted tables."
    ],
    correct: [1],
    explanation: "Athena workgroups can enforce a query result location and encryption configuration that overrides any client-side settings, and IAM policies can restrict analysts to that workgroup. Default bucket encryption alone does not prevent analysts from choosing different locations or encryption options.",
    optionExplanations: [
      "Analysts could still write results to other locations or specify other encryption, so the setting is not enforced.",
      "Correct — workgroup settings that override client-side settings force the result location and encryption for every query in the workgroup.",
      "Macie detects sensitive data and bucket posture issues but does not enforce encryption of results.",
      "Lake Formation governs access to cataloged data, not the encryption of Athena query result files."
    ]
  },
  {
    id: 1330,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company's data lake in Amazon S3 is cataloged in the AWS Glue Data Catalog. Analysts in several AWS accounts query it with Amazon Athena. Marketing analysts must not see columns that contain personal data, and regional teams must see only the rows for their own region. Permissions must be managed centrally. Which solution meets these requirements?",
    options: [
      "Create separate S3 copies of the data with personal data columns removed and with rows split by region.",
      "Create an S3 access point for each team with a policy that limits the objects that the team can read.",
      "Use AWS Lake Formation data filters with column and row restrictions and grant them to teams across accounts.",
      "Write IAM policies with Athena condition keys that block any query selecting columns that contain personal data."
    ],
    correct: [2],
    explanation: "AWS Lake Formation provides fine-grained, centrally managed permissions on Data Catalog tables, including column-level and row-level data filters, and can grant them to principals in other accounts. S3 access points operate on objects and cannot restrict columns or rows inside the data.",
    optionExplanations: [
      "Copies multiply storage and pipelines and must be kept in sync, which increases operational overhead.",
      "Access points control access at the object level; they cannot hide columns or filter rows within files.",
      "Correct — Lake Formation data filters provide column-level and row-level security for Athena queries and support cross-account grants from one place.",
      "IAM policies cannot inspect which columns or rows a query reads, so they cannot enforce this."
    ]
  },
  {
    id: 1331,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An e-commerce site behind Amazon CloudFront collects payment card numbers in a web form. The data passes through several backend services and logging systems. Only the payment microservice may see the card number in plaintext, and every other component must handle only ciphertext. Which solution meets these requirements?",
    options: [
      "Configure CloudFront field-level encryption with a public key so only the payment service can decrypt.",
      "Use HTTPS between viewers, CloudFront, and the origin load balancer with modern TLS policies.",
      "Encrypt the databases and log storage of all backend services with SSE-KMS customer managed keys in AWS KMS.",
      "Add an AWS WAF rule that blocks requests containing card numbers that are not sent over HTTPS."
    ],
    correct: [0],
    explanation: "CloudFront field-level encryption encrypts specific POST fields at the edge with a public key, so the data stays encrypted through the whole application stack until the payment service decrypts it with the private key. HTTPS alone ends at the origin, after which all components can read the field.",
    optionExplanations: [
      "Correct — CloudFront encrypts the specified form field at the edge with the public key, and only the payment service holding the private key can decrypt it.",
      "TLS protects data only in transit; the card number is decrypted at the origin and visible to every backend component.",
      "Encryption at rest does not stop backend services and logs from processing the card number in plaintext.",
      "WAF inspects and filters requests but does not encrypt individual fields for downstream components."
    ]
  },
  {
    id: 1332,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Business partners call a company's HTTPS application that runs behind an Application Load Balancer. The company must authenticate each partner with a client certificate issued by the company's private certificate authority and wants to avoid changing the application code to validate certificates. Which solution meets these requirements?",
    options: [
      "Enable mutual TLS verify mode on the ALB listener with a trust store that contains the private CA certificate.",
      "Replace the ALB with a Network Load Balancer using TLS passthrough and validate certificates in the application.",
      "Authenticate partners with an Amazon Cognito user pool and ALB user authentication.",
      "Add an AWS WAF rule that allows only requests that contain a partner-specific certificate header."
    ],
    correct: [0],
    explanation: "Application Load Balancers support mutual TLS: in verify mode the listener checks client certificates against a trust store containing the company's CA and rejects requests that fail validation, so the application needs no changes. NLB passthrough would require the application to perform validation itself.",
    optionExplanations: [
      "Correct — the ALB validates client certificates against the trust store and rejects invalid ones before requests reach the application.",
      "This works but moves certificate validation into the application code, which the company wants to avoid.",
      "Cognito authenticates users with credentials or federation, not machine clients with certificates from the private CA.",
      "A header can be forged by any client and does not provide cryptographic certificate authentication."
    ]
  },
  {
    id: 1333,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Database administrators need to connect a desktop SQL client to an Amazon RDS for MySQL instance in private subnets. The company prohibits bastion hosts with inbound ports, VPN connections, and public database endpoints, and all access must be authorized with IAM and logged. Managed EC2 instances with the SSM Agent run in the VPC. Which solution meets these requirements?",
    options: [
      "Make the DB instance publicly accessible and allow only the administrators' public IP addresses in its security group.",
      "Open an SSH tunnel through a bastion host in a public subnet and log the SSH sessions.",
      "Use Session Manager port forwarding to the remote database host through a managed instance in the VPC.",
      "Set up AWS Client VPN for the administrators and route their traffic to the private subnets."
    ],
    correct: [2],
    explanation: "Session Manager port forwarding to a remote host lets an administrator open a local port that tunnels through an SSM-managed instance to the RDS endpoint, with no inbound ports, IAM-based authorization, and session logging. The other options rely on prohibited bastions, VPNs, or public endpoints.",
    optionExplanations: [
      "Public database endpoints are explicitly prohibited, and IP allow lists do not provide IAM authorization.",
      "A bastion host with an inbound SSH port is explicitly prohibited.",
      "Correct — Session Manager forwards a local port to the database through the managed instance without inbound ports, and access is controlled by IAM and logged.",
      "VPN connections are explicitly prohibited by the company."
    ]
  },
  {
    id: 1334,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Administrators need SSH access to Linux instances in private subnets that have no internet access. The instances run a vendor-hardened image on which no additional agents may be installed. Administrators must use standard SSH clients, and access must be controlled with IAM without bastion hosts or public IP addresses. Which solution meets these requirements?",
    options: [
      "Use Systems Manager Session Manager to start shell sessions on the instances.",
      "Create an EC2 Instance Connect Endpoint in the VPC and allow SSH to the instances from its security group.",
      "Assign Elastic IP addresses to the instances and restrict SSH in the security groups to the corporate IP range.",
      "Launch a hardened bastion host with an Auto Scaling group of one in a public subnet."
    ],
    correct: [1],
    explanation: "EC2 Instance Connect Endpoint provides private SSH and RDP connectivity to instances in private subnets, authorized by IAM, without public IP addresses, internet access, bastions, or extra agents for users who connect with their own SSH keys. Session Manager would require the SSM Agent, which cannot be installed.",
    optionExplanations: [
      "Session Manager requires the SSM Agent on the instances, which cannot be installed on this image.",
      "Correct — the endpoint provides IAM-authorized private connectivity for standard SSH clients without agents, public IPs, or bastions.",
      "This gives the instances public IP addresses and relies on IP filtering rather than IAM authorization.",
      "Bastion hosts are explicitly excluded and must be patched and monitored."
    ]
  },
  {
    id: 1335,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company wants the security team to be notified within minutes whenever the root user of its production AWS account signs in to the console or makes any API call. Which solution meets these requirements with the LEAST operational overhead?",
    options: [
      "Enable the AWS Config managed rule that checks whether MFA is enabled for the root user.",
      "Run a daily Amazon Athena query over CloudTrail logs to look for events performed by the root user.",
      "Review the IAM credential report every day for recent root password and access key usage.",
      "Create an EventBridge rule that matches CloudTrail events from the root user and notifies an SNS topic."
    ],
    correct: [3],
    explanation: "CloudTrail delivers management events, including console sign-in events, to Amazon EventBridge, where a rule matching a root user identity can publish to an SNS topic within minutes. Daily queries or credential report reviews cannot meet the timeliness requirement.",
    optionExplanations: [
      "This rule checks the root user's MFA configuration; it does not report when the root user is used.",
      "A daily query does not notify within minutes and requires scheduling and maintenance.",
      "A daily manual review does not provide near-real-time notifications.",
      "Correct — CloudTrail events, including console sign-ins, reach EventBridge in near real time, so a rule can notify the team within minutes."
    ]
  },
  {
    id: 1336,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company wants to centralize AWS CloudTrail, VPC Flow Logs, Route 53 Resolver query logs, and AWS Security Hub findings from all accounts and Regions into one data lake. The data must be normalized to a common open schema, and third-party SIEM tools must be able to subscribe to it. The company wants the LEAST operational overhead. Which solution meets these requirements?",
    options: [
      "Build Amazon Data Firehose streams and AWS Glue jobs in each account to transform and deliver the logs.",
      "Enable Amazon Security Lake for the organization with a delegated administrator and add subscribers.",
      "Send all logs to CloudWatch Logs in a central account and grant the SIEM tools read access.",
      "Enable Amazon Detective for the organization and export its behavior graph to the SIEM tools."
    ],
    correct: [1],
    explanation: "Amazon Security Lake automatically collects AWS security sources across an organization's accounts and Regions, normalizes them into the Open Cybersecurity Schema Framework (OCSF) in Amazon S3, and offers subscriber access for third-party tools. A custom Firehose and Glue pipeline could do the same with far more maintenance.",
    optionExplanations: [
      "This can reach the goal but requires building and maintaining custom ingestion and transformation pipelines.",
      "Correct — Security Lake collects these sources across accounts and Regions, normalizes them to OCSF in S3, and supports subscribers such as SIEM tools.",
      "CloudWatch Logs does not normalize the sources to a common schema, and log collection must be built per source.",
      "Detective is an investigation service; it does not provide a normalized security data lake with subscribers."
    ]
  },
  {
    id: 1337,
    domain: "Design Secure Architectures",
    type: "multiple",
    question: "A company's customer managed AWS KMS keys protect critical data in many accounts. Last month an engineer scheduled the deletion of a key in use, and the error was found only by chance. The company wants to prevent unauthorized deletions and be alerted quickly if a key pending deletion is still needed. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Attach an SCP that denies scheduling key deletion to every principal except a designated security role.",
      "Set the key deletion waiting period to zero days so that mistakes are detected immediately.",
      "Create a CloudWatch alarm on CloudTrail events showing attempts to use a key that is pending deletion.",
      "Enable automatic key rotation so that a new key is generated if the current key is deleted.",
      "Switch the workloads to AWS managed keys, which cannot be scheduled for deletion by customers."
    ],
    correct: [0, 2],
    explanation: "An SCP that limits kms:ScheduleKeyDeletion to a security role prevents unauthorized deletions across accounts, and an alarm on CloudTrail events for attempts to use a key pending deletion detects that the key is still in use while the deletion can still be cancelled. Rotation does not prevent deletion, and the waiting period cannot be shorter than seven days.",
    optionExplanations: [
      "Correct — this centrally prevents anyone other than the security role from scheduling key deletion in all accounts.",
      "A waiting period of at least seven days is mandatory, and shortening it only reduces the time available to cancel a mistake.",
      "Correct — an alarm on failed requests that use a key pending deletion reveals that the key is still needed, so deletion can be cancelled during the waiting period.",
      "Rotation changes the key material of an existing key; it does not protect against or recover from key deletion.",
      "AWS managed keys give up control over key policies and cross-account use that the company relies on."
    ]
  },
  {
    id: 1338,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A research institute stores data in Amazon S3. A data protection agreement requires that AWS never have access to the plaintext data or to the encryption keys, which must remain in the institute's on-premises hardware security modules. Which solution meets these requirements?",
    options: [
      "Use SSE-KMS with an AWS KMS external key store that keeps the keys in the on-premises HSMs.",
      "Use SSE-C and send the encryption key from the on-premises HSMs with every upload and download request.",
      "Encrypt the data on premises with keys from the HSMs before uploading the ciphertext to Amazon S3.",
      "Use SSE-KMS with a customer managed key that has key material imported from the on-premises HSMs."
    ],
    correct: [2],
    explanation: "Only client-side encryption keeps both the plaintext and the keys away from AWS: data is encrypted on premises with HSM-held keys and only ciphertext is uploaded. An external key store keeps keys outside AWS, but S3 still receives the plaintext to perform server-side encryption.",
    optionExplanations: [
      "Keys stay on-premises, but Amazon S3 still receives and encrypts the plaintext data server-side, so AWS processes the plaintext.",
      "With SSE-C, Amazon S3 receives the key with each request and encrypts the plaintext on the server side.",
      "Correct — with client-side encryption, only ciphertext reaches AWS and the keys never leave the institute's HSMs.",
      "Imported key material is stored and used inside AWS KMS, and S3 still handles the plaintext data."
    ]
  },
  {
    id: 1339,
    domain: "Design Secure Architectures",
    type: "single",
    question: "The login page of a web application behind Amazon CloudFront is targeted by credential stuffing from thousands of IP addresses, each sending few requests and using username and password pairs leaked from other sites. The company wants a managed solution that detects compromised credentials and blocks these attempts with minimal custom rules. Which solution meets these requirements?",
    options: [
      "Add an AWS WAF rate-based rule that limits the number of login requests that each IP address can send.",
      "Subscribe to AWS Shield Advanced and enable automatic application layer DDoS mitigation.",
      "Enable Amazon GuardDuty and automatically block IP addresses that appear in its findings.",
      "Add the AWS WAF Fraud Control account takeover prevention managed rule group for the login path."
    ],
    correct: [3],
    explanation: "The AWS WAF Fraud Control account takeover prevention (ATP) managed rule group inspects login requests, detects the use of compromised credentials, and mitigates anomalous login patterns. A per-IP rate-based rule is ineffective because the attack spreads low request volumes across thousands of addresses.",
    optionExplanations: [
      "The attack is distributed across many IP addresses sending few requests each, so per-IP rate limits are easily evaded.",
      "Shield Advanced targets volumetric DDoS attacks, not low-volume credential stuffing that uses leaked credentials.",
      "GuardDuty monitors AWS account and workload activity; it does not inspect application login attempts at the edge.",
      "Correct — the managed rule group inspects login requests, checks credentials against stolen-credential databases, and blocks suspicious attempts."
    ]
  },
  {
    id: 1340,
    domain: "Design Secure Architectures",
    type: "single",
    question: "Amazon EC2 instances in private subnets access an Amazon DynamoDB table through a gateway VPC endpoint, and the subnets have no other route out of the VPC. The security team worries that an attacker could use credentials from a different AWS account to copy data to tables outside the company. Which solution will prevent this exfiltration path?",
    options: [
      "Restrict the instance role's IAM policy so that it allows access only to the company's table.",
      "Add network ACL rules that deny outbound traffic to all destinations except DynamoDB.",
      "Add a security group outbound rule that allows traffic only to the DynamoDB managed prefix list.",
      "Attach an endpoint policy that allows DynamoDB actions only on the company's table ARNs."
    ],
    correct: [3],
    explanation: "A VPC endpoint policy is evaluated for every request that passes through the endpoint, regardless of the credentials used, so limiting it to the company's table ARNs blocks writes to tables in other accounts. IAM policies on the instance role do not constrain credentials an attacker brings from another account.",
    optionExplanations: [
      "An attacker using credentials from another account is not bound by the instance role's policy.",
      "Like the security group rule, a network ACL works on IP addresses and cannot restrict access to specific tables.",
      "The prefix list covers all of DynamoDB in the Region, so it cannot distinguish the company's table from others.",
      "Correct — every request through the endpoint is checked against the endpoint policy, regardless of whose credentials are used, so other tables cannot be reached."
    ]
  },
  {
    id: 1341,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A financial company runs Amazon Aurora PostgreSQL. Regulators require near-real-time monitoring of all database activity by the security team. Database administrators, who have full privileges inside the database, must not be able to read, alter, or turn off the audit stream. Which solution meets these requirements?",
    options: [
      "Enable the pgAudit extension and publish the database logs to Amazon CloudWatch Logs.",
      "Enable Database Activity Streams with a security team KMS key and consume the Kinesis stream.",
      "Enable AWS CloudTrail data events for the Aurora cluster to capture every SQL statement that is run.",
      "Enable Performance Insights and grant the security team access to its dashboard."
    ],
    correct: [1],
    explanation: "Database Activity Streams send an encrypted, near-real-time feed of database activity to Amazon Kinesis, protected by a KMS key the security team controls, and database users cannot disable it from inside the database. pgAudit logs can be reconfigured by privileged database users, so they do not meet the separation-of-duties requirement.",
    optionExplanations: [
      "Database administrators with full privileges can change pgAudit settings, so they could suppress or alter auditing.",
      "Correct — activity streams push encrypted activity records to a Kinesis stream outside the database, so in-database privileges cannot read or stop them.",
      "CloudTrail records RDS API calls, not the SQL statements run inside the database.",
      "Performance Insights shows load and top SQL for tuning, not a complete, tamper-resistant audit trail."
    ]
  },
  {
    id: 1342,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A company deploys AWS Lambda functions through several CI/CD pipelines. After a supply chain incident, the security team requires that only code packages produced and approved by the official pipeline can be deployed to production functions, and any modified package must be rejected. Which solution meets these requirements?",
    options: [
      "Turn on S3 Versioning for the deployment artifact bucket and always deploy only the latest object version.",
      "Scan every package with Amazon Inspector Lambda code scanning before each deployment.",
      "Sign packages with AWS Signer in the official pipeline and enforce a Lambda code signing configuration.",
      "Restrict lambda:UpdateFunctionCode to the official pipeline role and require MFA for other users."
    ],
    correct: [2],
    explanation: "Lambda code signing with AWS Signer lets functions accept only packages signed by approved signing profiles; with enforcement enabled, unsigned or modified code is rejected at deployment. Restricting the deployment role helps but does not verify the integrity of the package itself.",
    optionExplanations: [
      "Versioning keeps history but does not prove who produced a package or whether it was modified.",
      "Inspector finds vulnerabilities in code but does not verify the origin or integrity of the package.",
      "Correct — Lambda verifies the signature against the allowed signing profiles and rejects unsigned or modified packages when enforcement is set.",
      "This limits who deploys but does not detect a tampered package passed through the pipeline itself."
    ]
  },
  {
    id: 1343,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A deployment pipeline role currently has broad permissions to create every resource that the company's AWS CloudFormation templates contain. The security team wants the pipeline role to be unable to create or modify resources directly, while stacks must still be deployed. Which solution meets these requirements?",
    options: [
      "Give the pipeline role read-only access and let developers deploy the stacks manually with their own credentials.",
      "Use a permissions boundary on the pipeline role that matches the resources in the templates.",
      "Store the templates in a private Amazon S3 bucket that only the pipeline role can read.",
      "Create a CloudFormation service role with resource permissions; the pipeline only manages stacks and passes it."
    ],
    correct: [3],
    explanation: "With a CloudFormation service role, the stack operations use the service role's permissions to provision resources, so the pipeline role needs only CloudFormation stack actions and iam:PassRole on that specific role. A permissions boundary still allows the pipeline role to create the resources directly.",
    optionExplanations: [
      "This removes automation and moves broad permissions to developers instead of reducing them.",
      "The pipeline role would still be able to create those resources directly outside CloudFormation.",
      "This protects the templates but does not change what the pipeline role can do directly.",
      "Correct — CloudFormation uses the service role to create resources, so the pipeline needs only stack actions and iam:PassRole for that role."
    ]
  },
  {
    id: 1344,
    domain: "Design Secure Architectures",
    type: "single",
    question: "An AWS CodeBuild project defines a database password and a third-party API token as plaintext environment variables, which are visible to anyone who can view the project configuration. The values must be encrypted, centrally managed, and readable only by the build at run time. Which solution meets these requirements?",
    options: [
      "Store the values in AWS Secrets Manager, reference them in the buildspec, and let the service role read them.",
      "Encrypt the CodeBuild project's build artifacts with a customer managed AWS KMS key.",
      "Move the values into the buildspec file in the source repository so they are versioned with the code.",
      "Restrict the codebuild:BatchGetProjects permission so that only administrators can view the project settings."
    ],
    correct: [0],
    explanation: "CodeBuild can reference AWS Secrets Manager secrets (or Parameter Store SecureString parameters) in the buildspec and retrieves them at run time with the project's service role, keeping them encrypted and centrally managed. Restricting who can view the project hides but does not protect the plaintext values.",
    optionExplanations: [
      "Correct — CodeBuild resolves Secrets Manager references at build time with its service role, so the values never appear in the project configuration.",
      "Artifact encryption protects build outputs, not environment variables shown in the project configuration.",
      "This exposes the secrets to everyone who can read the repository and its history.",
      "This hides the configuration from some users but leaves the secrets unencrypted and unmanaged."
    ]
  },
  {
    id: 1345,
    domain: "Design Secure Architectures",
    type: "single",
    question: "A mobile app uses an Amazon Cognito user pool with two groups, Editors and Viewers. Editors must be able to upload objects to an Amazon S3 bucket, and Viewers must only be able to read them. Users access S3 directly with temporary AWS credentials from a Cognito identity pool. Which solution meets these requirements?",
    options: [
      "Assign an IAM role to each user pool group and let the identity pool choose the role from the user's token.",
      "Use one authenticated role with upload permissions and hide the upload button from Viewers in the app.",
      "Create a separate identity pool per group and have the app select the pool based on the user's group.",
      "Create an IAM user for each Editor and embed its access keys in the app after sign-in."
    ],
    correct: [0],
    explanation: "Cognito identity pools support role-based access control: IAM roles attached to user pool groups appear in the token, and the identity pool can assign the role from the token (or through rules), so Editors and Viewers receive different temporary credentials. A single role with UI checks leaves Viewers able to upload.",
    optionExplanations: [
      "Correct — group roles are carried in the token, and the identity pool issues credentials for the matching role, so permissions follow group membership.",
      "Viewers would still receive credentials that allow uploads, so the restriction is only cosmetic.",
      "This works but duplicates configuration and relies on the client choosing the right pool.",
      "This introduces long-term credentials in the app, which is insecure and hard to manage."
    ]
  },
  {
    id: 1346,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A manufacturer connects thousands of sensors to AWS IoT Core over MQTT. An IoT rule writes every telemetry message directly to an Amazon DynamoDB table. During short periods of table throttling, the rule action fails and the affected messages are lost. The company wants to keep every message for later reprocessing without adding servers or changing the device firmware. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Configure an error action on the IoT rule that sends messages from failed actions to an Amazon SQS queue.",
      "Have each device buffer messages locally and resend them whenever it does not receive an application-level acknowledgment.",
      "Replace the rule with a fleet of EC2 instances that subscribe to the MQTT topics and write to the table.",
      "Enable DynamoDB Streams on the table and replay any records that are missing from the stream."
    ],
    correct: [0],
    explanation: "An IoT rule error action is triggered whenever a rule action fails, so routing it to Amazon SQS durably keeps every failed message for reprocessing with no servers to manage. Buffering on the devices would require firmware changes, which the company has ruled out.",
    optionExplanations: [
      "Correct — The error action captures messages whose DynamoDB write failed and stores them durably in SQS for later reprocessing.",
      "This requires changing device firmware, and MQTT acknowledgments from IoT Core do not reflect whether the downstream rule action succeeded.",
      "Self-managed subscriber instances add servers and operational overhead, and they would face the same throttling problem.",
      "DynamoDB Streams only contains items that were successfully written, so messages that failed to be written never appear in it."
    ]
  },
  {
    id: 1347,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A payment API runs on Amazon API Gateway and AWS Lambda and writes charges to Amazon DynamoDB. Mobile clients retry a request when they do not receive a response within a few seconds, and occasionally the original request had already succeeded, so customers are charged twice. The company must make retries safe without reducing availability. Which solution will meet these requirements?",
    options: [
      "Turn off client retries and show customers an error message whenever a request takes too long.",
      "Have clients send a unique idempotency key and record it with a conditional write before charging.",
      "Increase the Lambda function timeout and memory so that requests complete before clients retry.",
      "Enable API Gateway caching for the charge method so repeated requests return the cached result."
    ],
    correct: [1],
    explanation: "A client-generated idempotency key stored with a DynamoDB conditional write lets the service detect a repeated request and return the original result instead of charging again, so clients can keep retrying safely. Making the function faster only narrows the window; network failures can still cause duplicates.",
    optionExplanations: [
      "Removing retries reduces availability because transient network errors would fail requests that could have succeeded.",
      "Correct — The conditional write on the idempotency key guarantees that each logical request is applied only once, no matter how many retries arrive.",
      "Faster processing does not stop duplicates caused by lost responses or network timeouts, so double charges can still occur.",
      "Caching is intended for idempotent GET methods and is keyed on request parameters; it is not a reliable deduplication mechanism for payment writes."
    ]
  },
  {
    id: 1348,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A web application on EC2 instances behind an Application Load Balancer uses a /health endpoint that also queries the Amazon RDS database. The Auto Scaling group uses ELB health checks. During a 60-second RDS Multi-AZ failover, every instance failed its health check and the group terminated and replaced the entire fleet, turning a brief database event into a long outage. What should a solutions architect recommend?",
    options: [
      "Increase the database instance size so that Multi-AZ failovers complete in less time than the health check interval.",
      "Switch the Auto Scaling group to EC2 status checks only and remove the load balancer health check entirely.",
      "Use a shallow health check that tests only the local process, and handle database errors in the application.",
      "Configure the health check to run every few seconds with a lower unhealthy threshold so failures are detected earlier."
    ],
    correct: [2],
    explanation: "Health checks that replace instances should test only what replacing the instance can fix; a shared dependency failure in a deep check makes the whole fleet look unhealthy at once and triggers mass replacement. A shallow liveness check keeps instances in service while the application degrades gracefully during the failover. Dropping ELB health checks entirely would stop the group from replacing instances whose process genuinely hangs.",
    optionExplanations: [
      "Instance size does not reliably control failover duration, and the deep health check would still fail the whole fleet during any dependency issue.",
      "EC2 status checks do not detect a hung application process, so unhealthy instances would no longer be replaced.",
      "Correct — A shallow check avoids fleet-wide replacement caused by a shared dependency, while the application handles the brief database outage.",
      "Faster detection makes the problem worse, because the fleet would be marked unhealthy and replaced even sooner during the failover."
    ]
  },
  {
    id: 1349,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An online store's product pages read from an Amazon RDS for MySQL database. When a product is featured on television, read traffic for a few hot items jumps within seconds, the database CPU saturates, and the whole site fails. Product data can be up to one minute stale. The company wants to protect the database from these sudden spikes. Which solution will meet these requirements MOST effectively?",
    options: [
      "Configure RDS storage autoscaling so the database gains capacity automatically when load increases.",
      "Convert the DB instance to a Multi-AZ deployment so that the standby instance can share the read traffic.",
      "Add an Auto Scaling policy that creates additional read replicas when database CPU utilization rises.",
      "Cache product data in Amazon ElastiCache with a short TTL and read from the cache before the database."
    ],
    correct: [3],
    explanation: "A cache in front of the database absorbs repeated reads of the same hot items instantly, and a short TTL keeps data within the one-minute staleness limit. Adding read replicas in response to CPU takes many minutes, so the database would already be saturated when the spike arrives within seconds.",
    optionExplanations: [
      "Storage autoscaling adds disk space, not CPU or read capacity, so it does nothing for a read spike.",
      "The standby of a Multi-AZ DB instance deployment does not serve read traffic.",
      "New read replicas take minutes to create, which is too slow for a spike that arrives in seconds.",
      "Correct — ElastiCache serves the hot items from memory, shielding the database, and the TTL respects the staleness tolerance."
    ]
  },
  {
    id: 1350,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company uses Amazon Route 53 failover routing between two Regions. The primary Region's application runs on EC2 instances in private subnets behind an internal Application Load Balancer that is reachable only from inside the VPC. The company wants Route 53 to fail over when the application's error rate in the primary Region exceeds a threshold. Which solution will meet these requirements?",
    options: [
      "Create an endpoint health check that targets the private IP addresses of the internal Application Load Balancer.",
      "Create a Route 53 health check that monitors the state of a CloudWatch alarm on the application's error rate.",
      "Attach an Elastic IP address to one instance and point a Route 53 endpoint health check to that address.",
      "Create a calculated health check that combines the health of each instance's private IP address."
    ],
    correct: [1],
    explanation: "Route 53 health checkers run on the internet and cannot reach private endpoints, but a health check can be based on the state of a CloudWatch alarm, which can measure the error rate of a private application. Pointing a check at private IP addresses would fail because the checkers have no network path to them.",
    optionExplanations: [
      "Route 53 health checkers cannot reach private IP addresses inside a VPC, so this check would never reflect real health.",
      "Correct — Alarm-based health checks let Route 53 act on metrics from private resources, such as the application's error rate.",
      "Exposing a single instance publicly weakens security and reflects only that instance, not the application's overall error rate.",
      "Calculated health checks combine other health checks, but the child checks would still need to reach private addresses."
    ]
  },
  {
    id: 1351,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company's application in each Region depends on three components: a web endpoint, an API endpoint, and a reporting endpoint, each with its own Route 53 health check. The company wants Route 53 to fail over to the secondary Region only when at least two of the three components are unhealthy, so that a problem in the reporting endpoint alone does not cause a Regional failover. Which solution will meet these requirements?",
    options: [
      "Associate all three component health checks with the primary failover record so that each one is evaluated independently.",
      "Create a calculated health check with the three checks as children that reports healthy if at least two are healthy.",
      "Use a weighted routing policy with three records per Region so that each component removes one third of traffic.",
      "Increase the failure threshold of the reporting endpoint's health check so that it rarely reports unhealthy."
    ],
    correct: [1],
    explanation: "A calculated health check combines child health checks and reports healthy only when a configured minimum number of children are healthy, which matches a two-of-three rule. A record can have only one associated health check, so the components cannot simply be attached individually.",
    optionExplanations: [
      "A Route 53 record has a single associated health check, so it cannot evaluate three separate checks with a two-of-three rule.",
      "Correct — Setting the calculated check's healthy threshold to two expresses exactly the required failover condition.",
      "Weighted routing splits traffic proportionally and does not implement a two-of-three Regional failover decision.",
      "Delaying one check only hides failures and still does not express the rule that two components must fail."
    ]
  },
  {
    id: 1352,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company is moving a content management application to Amazon ECS on AWS Fargate. Each task stores uploaded media in a local directory, and several tasks across three Availability Zones must see the same files. Files must survive task replacement and the loss of an Availability Zone. Which storage solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Mount an Amazon EFS file system that uses a Regional storage class as a volume in the task definition.",
      "Attach a separate Amazon EBS volume to each task and synchronize the volumes with a sidecar container.",
      "Use the ephemeral storage of each Fargate task and copy any new files to Amazon S3 on a frequent schedule.",
      "Run a self-managed NFS server on an EC2 instance in one Availability Zone and mount it in each task."
    ],
    correct: [0],
    explanation: "Amazon EFS is natively supported as a Fargate task volume, is shared by all tasks, and with a Regional storage class stores data redundantly across multiple Availability Zones. Per-task EBS volumes are bound to a single zone and are not shared, so keeping them synchronized adds complexity and risk.",
    optionExplanations: [
      "Correct — EFS provides shared, persistent, multi-AZ file storage that Fargate tasks can mount directly.",
      "EBS volumes are zonal and attached to one task each; custom synchronization adds overhead and can lose or conflict on writes.",
      "Ephemeral storage is lost when a task stops, and scheduled copies leave a window of data loss and no shared view.",
      "A single NFS server is a single point of failure in one zone and must be patched and managed."
    ]
  },
  {
    id: 1353,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a Java application that uses JMS and the OpenWire protocol to exchange messages through a self-managed Apache ActiveMQ broker on a single EC2 instance. When the instance failed last month, messaging stopped for hours. The company wants the broker to survive the failure of an Availability Zone without changing application code. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Replace the broker with an Amazon SQS standard queue and update the application to use the SQS SDK.",
      "Run two self-managed ActiveMQ instances in different Availability Zones behind a Network Load Balancer.",
      "Deploy an Amazon MQ for ActiveMQ active/standby broker that spans two Availability Zones.",
      "Place the existing broker instance in an Auto Scaling group with a minimum and maximum size of one."
    ],
    correct: [2],
    explanation: "Amazon MQ for ActiveMQ supports the existing JMS and OpenWire clients and provides a managed active/standby broker across two Availability Zones with shared durable storage and automatic failover. Moving to Amazon SQS would require rewriting the messaging code, which is not allowed.",
    optionExplanations: [
      "SQS does not speak OpenWire, so the application code would have to change.",
      "Two self-managed brokers require configuring shared storage, failover, and patching, which is much more operational overhead.",
      "Correct — Amazon MQ provides a managed, highly available ActiveMQ broker that existing clients can use without code changes.",
      "Replacing the instance relaunches an empty broker unless storage is redesigned, and in-flight messages on the failed instance can be lost."
    ]
  },
  {
    id: 1354,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A web application stores user sessions in an Amazon ElastiCache (Redis OSS) cluster that has a single node and cluster mode disabled. When the node failed during an Availability Zone outage, all users were logged out and the application could not create new sessions until a new node was launched. Which change will improve resilience with the LEAST application changes?",
    options: [
      "Take hourly backups of the node and restore the most recent backup when the node fails.",
      "Move the session data to a self-managed Redis cluster that runs on EC2 instances in three Availability Zones.",
      "Store sessions in sticky cookies on the load balancer so that the cache is no longer required.",
      "Add a replica in another Availability Zone and enable Multi-AZ with automatic failover on the cluster."
    ],
    correct: [3],
    explanation: "Adding a replica in another Availability Zone and enabling Multi-AZ lets ElastiCache automatically promote the replica if the primary or its zone fails, while the application keeps using the same primary endpoint. Restoring backups takes time and loses the sessions created since the last backup.",
    optionExplanations: [
      "Restoring from backup causes downtime and loses recent sessions, so users are still affected.",
      "A self-managed cluster adds significant operational overhead compared with the managed failover feature.",
      "Load balancer stickiness only routes users to the same instance; it does not store session data and loses it when an instance fails.",
      "Correct — Multi-AZ with automatic failover promotes the replica behind the same endpoint, so no application change is needed."
    ]
  },
  {
    id: 1355,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs an Amazon RDS for PostgreSQL Multi-AZ DB instance deployment. The business now requires database failovers to complete faster than they do today, and it wants the standby capacity that it already pays for to serve read-only reporting queries. The company does not want to migrate to a different database engine. Which solution will meet these requirements?",
    options: [
      "Add a cross-Region read replica and send reporting queries to it while keeping the current deployment.",
      "Move to an RDS Multi-AZ DB cluster deployment with one writer and two readable standby instances.",
      "Migrate the database to Amazon Aurora PostgreSQL and add Aurora Replicas in other zones for read scaling and failover.",
      "Create an RDS Proxy in front of the database and route read-only connections to the standby."
    ],
    correct: [1],
    explanation: "An RDS Multi-AZ DB cluster deployment uses two readable standby instances in different Availability Zones and typically fails over faster than a Multi-AZ DB instance deployment. Migrating to Aurora would also work technically but changes the engine, which the company does not want.",
    optionExplanations: [
      "A cross-Region replica adds cost and does not make failover of the primary deployment faster.",
      "Correct — The Multi-AZ DB cluster deployment provides faster failover and standbys that can serve read traffic.",
      "Aurora PostgreSQL is a different engine and requires a migration, which the company wants to avoid.",
      "The standby of a Multi-AZ DB instance deployment cannot accept connections, so RDS Proxy cannot send reads to it."
    ]
  },
  {
    id: 1356,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company replicates encrypted Amazon S3 objects and Amazon DynamoDB global table data to a second Region for disaster recovery. All data is encrypted with a customer managed AWS KMS key in the primary Region. The company is concerned that data in the second Region could not be decrypted if the primary Region's KMS service were unavailable. Which solution will address this concern with the LEAST operational overhead?",
    options: [
      "Use an AWS KMS multi-Region key with a replica key in the second Region for encryption in each Region.",
      "Export the key material from the primary Region and import it into a new key in the second Region.",
      "Switch to SSE-S3 for the S3 objects and keep the customer managed key for the DynamoDB tables.",
      "Create a separate customer managed key in the second Region and re-encrypt all replicated data every night."
    ],
    correct: [0],
    explanation: "KMS multi-Region keys share the same key ID and key material across Regions, so data encrypted in one Region can be decrypted in the other without any call to the primary Region. AWS KMS does not allow exporting key material that it generated, and nightly re-encryption adds heavy overhead and a data-protection gap.",
    optionExplanations: [
      "Correct — A multi-Region replica key lets the second Region decrypt data independently of the primary Region.",
      "Key material generated by AWS KMS cannot be exported, so this approach is not possible for the existing key.",
      "DynamoDB data would still depend on the primary Region's key, and the change weakens control over the S3 encryption keys.",
      "Nightly re-encryption is operationally heavy and leaves recently replicated data unreadable during a primary Region outage."
    ]
  },
  {
    id: 1357,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A Lambda function consumes an Amazon SQS standard queue that has a dead-letter queue. A bug in a new release sent thousands of messages to the dead-letter queue over one night. The bug is now fixed, and the company wants these messages processed by the fixed function in the normal way. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Write a script that receives each message from the dead-letter queue and sends it again to the source queue.",
      "Configure the dead-letter queue as a second event source for the same Lambda function permanently.",
      "Use SQS dead-letter queue redrive to move the messages back to the source queue for reprocessing.",
      "Increase the maximum receive count on the source queue so that fewer messages reach the dead-letter queue."
    ],
    correct: [2],
    explanation: "SQS dead-letter queue redrive moves messages from the dead-letter queue back to their source queue as a managed task, so the fixed function processes them through the normal path. A custom script achieves the same result but must be written, run, and monitored.",
    optionExplanations: [
      "A custom script works but adds development and operational effort that the managed redrive feature avoids.",
      "Permanently consuming the dead-letter queue would retry poison messages forever and defeat its isolation purpose.",
      "Correct — DLQ redrive returns the messages to the source queue with no custom code.",
      "Changing the receive count affects future failures only and does nothing for messages already in the dead-letter queue."
    ]
  },
  {
    id: 1358,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A ticketing application stores reservations in an Amazon DynamoDB table that uses provisioned capacity with auto scaling. When popular events go on sale, write traffic jumps to many times its normal level within seconds, requests are throttled before auto scaling reacts, and reservations fail. Sale times are not announced in advance. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Raise the auto scaling target utilization so that the table scales out more aggressively when writes increase.",
      "Add a DynamoDB Accelerator (DAX) cluster in front of the table to absorb the write traffic.",
      "Create a global secondary index to spread the writes over more partitions.",
      "Switch the table to on-demand capacity mode so it accommodates sudden traffic without capacity planning."
    ],
    correct: [3],
    explanation: "On-demand capacity mode serves sudden, unpredictable spikes without capacity planning, because it does not wait for auto scaling to adjust provisioned throughput. DAX is a read-through and write-through cache; it accelerates reads but every write still consumes table capacity.",
    optionExplanations: [
      "Auto scaling still reacts after throttling begins, and a higher target utilization actually leaves less headroom.",
      "DAX writes through to the table, so write capacity is still consumed and throttling continues.",
      "A global secondary index adds more write consumption and does not increase the base table's throughput.",
      "Correct — On-demand mode handles unpredictable spikes without capacity planning or scaling delays."
    ]
  },
  {
    id: 1359,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company stores product images in Amazon S3 buckets in two Regions that are kept in sync with S3 Replication. Applications in several Regions access the images. The company wants applications to use one global endpoint and wants to shift all requests to the secondary bucket within minutes during a Regional incident without changing application configuration. Which solution will meet these requirements?",
    options: [
      "Create a Route 53 failover record that points to the S3 REST endpoints of the two buckets.",
      "Create an S3 Multi-Region Access Point in active-passive mode and use its failover controls.",
      "Configure a CloudFront distribution with an origin group that contains both buckets for all requests.",
      "Update the bucket name in each application's configuration through AWS Systems Manager Parameter Store."
    ],
    correct: [1],
    explanation: "S3 Multi-Region Access Points provide a single global endpoint for buckets in several Regions, and their failover controls switch requests from the active bucket to the passive one within minutes. CloudFront origin groups fail over only for GET, HEAD, and OPTIONS requests, so uploads through it would not fail over.",
    optionExplanations: [
      "S3 REST requests must be signed for and addressed to a specific bucket name, so DNS failover between two different buckets does not work reliably.",
      "Correct — Multi-Region Access Point failover controls redirect all requests to the passive bucket without application changes.",
      "Origin failover in CloudFront applies only to GET, HEAD, and OPTIONS requests, so writes would not fail over.",
      "Changing every application's configuration is slow and error-prone, and it violates the requirement to avoid configuration changes."
    ]
  },
  {
    id: 1360,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a small cluster of five EC2 instances that host a quorum-based coordination service. The instances are in one Availability Zone because of strict latency requirements. The company wants to reduce the risk that a single hardware failure affects more than one instance at the same time. Which solution will meet these requirements?",
    options: [
      "Launch the instances into a spread placement group so that each instance runs on distinct hardware.",
      "Launch the instances into a cluster placement group to keep them physically close together.",
      "Launch the instances as Dedicated Instances so that no other customer shares their hardware.",
      "Enable EC2 automatic recovery on each instance so that it restarts on new hardware after any failure."
    ],
    correct: [0],
    explanation: "A spread placement group places each instance on distinct racks with separate power and network, which minimizes correlated hardware failures within an Availability Zone. A cluster placement group does the opposite, packing instances close together, which increases the risk that one hardware event affects several of them.",
    optionExplanations: [
      "Correct — Spread placement groups put each instance on separate underlying hardware racks.",
      "Cluster placement groups pack instances together for network performance, increasing correlated failure risk.",
      "Dedicated Instances isolate hardware from other accounts but do not keep your own instances on separate racks.",
      "Automatic recovery helps after a failure but does not prevent one hardware fault from affecting several instances at once."
    ]
  },
  {
    id: 1361,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs an application on EC2 instances behind an Application Load Balancer across three Availability Zones. During a recent incident, one zone suffered intermittent packet loss: instances passed health checks but many requests were slow or failed. The company wants operators to be able to move traffic away from an impaired zone within minutes without redeploying or changing the Auto Scaling configuration. Which solution will meet these requirements?",
    options: [
      "Remove the impaired zone's subnets from the Application Load Balancer and the Auto Scaling group during an incident.",
      "Configure Route 53 weighted records for each zone's instances and set the impaired zone's weight to zero.",
      "Make the load balancer health checks stricter so that instances in a degraded zone are marked unhealthy.",
      "Use Amazon Application Recovery Controller zonal shift to shift load balancer traffic away from the impaired zone."
    ],
    correct: [3],
    explanation: "Zonal shift in Amazon Application Recovery Controller temporarily moves load balancer traffic away from one Availability Zone, and the shift can be cancelled or expires on its own, without editing the load balancer or the Auto Scaling group. Removing subnets requires configuration changes and can terminate instances, which the company wants to avoid.",
    optionExplanations: [
      "Editing subnets changes the load balancer and Auto Scaling configuration and may trigger instance terminations and rebalancing.",
      "Per-zone DNS records bypass the load balancer design, add complexity, and are subject to client DNS caching.",
      "Gray failures often pass health checks, and stricter checks risk false positives that remove healthy capacity elsewhere.",
      "Correct — A zonal shift quickly steers traffic away from the impaired zone and is easily reversed."
    ]
  },
  {
    id: 1362,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A video platform orchestrates processing with AWS Step Functions. One step currently invokes a Lambda function that starts an AWS Elemental MediaConvert job and then polls the job status in a loop. Long videos take more than 15 minutes to transcode, so the function times out and the workflow fails even though the job succeeds. Which solution will fix this with the LEAST operational overhead?",
    options: [
      "Increase the Lambda function timeout and memory so that it can wait for the longest transcoding jobs.",
      "Move the polling loop to a container on Amazon ECS that the state machine starts and waits for.",
      "Use the Step Functions MediaConvert integration with the run a job pattern so the state waits for completion.",
      "Have the function write the job ID to an SQS queue and add a second function that polls MediaConvert every minute."
    ],
    correct: [2],
    explanation: "The Step Functions optimized integration for MediaConvert can start a job and wait for it to finish using the run a job (.sync) pattern, so no code has to poll and no Lambda timeout applies. Lambda has a hard maximum timeout that long jobs exceed, so tuning the function cannot solve the problem.",
    optionExplanations: [
      "Lambda's maximum timeout is fixed, so jobs longer than that limit will still cause failures.",
      "A container can wait longer but adds infrastructure and custom polling code that the native integration avoids.",
      "Correct — The .sync integration lets the state machine wait for the MediaConvert job without custom polling or timeouts.",
      "A separate polling function and queue add moving parts and still need a way to resume the workflow."
    ]
  },
  {
    id: 1363,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A genomics company runs containerized analysis jobs on AWS Batch with a compute environment that uses Spot Instances. Each job runs for about an hour and writes checkpoints to Amazon S3 every few minutes. When Spot capacity is reclaimed, the affected jobs fail and scientists must resubmit them manually. Which solution will reduce manual work while keeping Spot savings?",
    options: [
      "Configure a job retry strategy that automatically retries jobs that fail because the Spot host was reclaimed.",
      "Switch the compute environment to On-Demand Instances so that the long-running jobs are never interrupted by reclamation.",
      "Run the jobs on a single larger Spot Instance type so that capacity is less likely to be reclaimed.",
      "Create a CloudWatch alarm on failed jobs that notifies scientists by email to resubmit them."
    ],
    correct: [0],
    explanation: "An AWS Batch retry strategy can automatically retry a job a set number of times, and exit conditions can target failures caused by Spot host termination; jobs resume from the S3 checkpoints. Moving to On-Demand removes interruptions but gives up the Spot savings the company wants to keep.",
    optionExplanations: [
      "Correct — Automatic retries on host-reclaim failures resubmit jobs without manual work, and checkpoints limit lost progress.",
      "On-Demand capacity avoids interruptions but loses the Spot savings, which the company wants to keep.",
      "Relying on one instance type reduces capacity diversity and typically increases, not decreases, interruption impact.",
      "Notifications still leave scientists resubmitting jobs manually, which does not reduce the work."
    ]
  },
  {
    id: 1364,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An application connects to an Amazon Aurora MySQL DB cluster that has a writer and two Aurora Replicas. The application was configured with the writer instance's own endpoint for all writes. After an automatic failover promoted a replica, every write failed until an engineer changed the configuration. What should a solutions architect recommend to prevent this?",
    options: [
      "Configure the application to send all write statements to the reader endpoint of the DB cluster.",
      "Configure the application to use the cluster endpoint, which always points to the current writer.",
      "Create a custom endpoint that contains only the original writer instance for write traffic.",
      "Assign an Elastic IP address to the writer instance and connect the application to that address."
    ],
    correct: [1],
    explanation: "The Aurora cluster endpoint always resolves to the current writer instance, so after a failover the application reconnects to the newly promoted writer automatically. An instance endpoint keeps pointing at a specific instance, which may now be a reader or unavailable.",
    optionExplanations: [
      "The reader endpoint load balances across Aurora Replicas, which reject writes.",
      "Correct — The cluster endpoint follows the writer role through failovers without configuration changes.",
      "A custom endpoint with a fixed member still points to the old instance after failover, so writes would fail.",
      "Aurora instances cannot be given Elastic IP addresses, and a fixed address would not follow the writer role."
    ]
  },
  {
    id: 1365,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company serves a REST API through Amazon CloudFront, with an Application Load Balancer in a primary Region as the origin. A standby deployment runs in a second Region. The company configured a CloudFront origin group for failover, but during a test outage, GET requests failed over while POST and PUT requests to create orders kept failing. All methods must fail over. Which solution will meet these requirements?",
    options: [
      "Add more origins to the origin group so that CloudFront has additional targets for write requests.",
      "Add a Lambda@Edge function that rewrites POST and PUT requests into GET requests with the body in the URL.",
      "Use a Route 53 failover record with health checks for both Regions as the domain name of a single CloudFront origin.",
      "Disable caching for the API path so that CloudFront forwards write requests to the secondary origin."
    ],
    correct: [2],
    explanation: "CloudFront origin failover only applies to GET, HEAD, and OPTIONS requests, so write methods never fail over. Using a Route 53 failover record as the origin domain name makes DNS resolve to the healthy Region for every method. Disabling caching does not change which requests are eligible for origin failover.",
    optionExplanations: [
      "Origin groups support a primary and a secondary origin and still never fail over POST or PUT requests.",
      "Rewriting writes as GET requests breaks API semantics and exposes request bodies in URLs.",
      "Correct — Route 53 failover behind a single origin hostname moves all request methods to the healthy Region.",
      "Caching behavior is unrelated to origin failover eligibility, which excludes write methods."
    ]
  },
  {
    id: 1366,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A Lambda function must reach an Amazon RDS database in private subnets, so it was attached to the VPC. The developer selected one private subnet in a single Availability Zone. During an Availability Zone event, the function failed to run even though the RDS Multi-AZ deployment had failed over successfully. Which change will make the function resilient to this failure?",
    options: [
      "Increase the reserved concurrency of the function so that more execution environments are available.",
      "Configure the function with private subnets in multiple Availability Zones.",
      "Remove the VPC configuration and connect to the database through its public endpoint.",
      "Deploy a copy of the function in a second Region and invoke it if the first one fails."
    ],
    correct: [1],
    explanation: "A VPC-attached Lambda function runs in the subnets it is configured with, so selecting subnets in multiple Availability Zones lets Lambda keep running if one zone is impaired. Exposing the database publicly would work around the problem but weakens security and is unnecessary.",
    optionExplanations: [
      "More concurrency does not help when the only configured subnet's zone is impaired.",
      "Correct — Subnets in several Availability Zones let Lambda run the function in healthy zones.",
      "Making the database public increases the attack surface and is not needed to achieve resilience.",
      "A second-Region copy adds complexity and still could not reach the private database in the first Region."
    ]
  },
  {
    id: 1367,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "Hundreds of microservice instances call an internal inventory service. When the inventory service briefly slowed down, every client retried failed calls immediately and repeatedly, the load on the service multiplied, and it could not recover for 30 minutes. The company wants to prevent retries from turning a short degradation into a long outage. Which combination of client-side changes should a solutions architect recommend? (Select TWO)",
    options: [
      "Configure clients to retry a limited number of times using exponential backoff with jitter.",
      "Configure clients to retry failed calls at a fixed short interval until the call succeeds.",
      "Add a client retry quota or circuit breaker that stops retrying when most recent calls are failing.",
      "Remove all retries so that clients return an error immediately on any failure.",
      "Add more instances to the inventory service permanently so that it can absorb retry storms."
    ],
    correct: [0, 2],
    explanation: "Capped retries with exponential backoff and jitter spread attempts out so clients do not retry in synchronized waves, and a retry quota or circuit breaker stops adding retry load when the dependency is clearly failing, giving it room to recover. Removing all retries also prevents storms, but it turns every transient error into a user-facing failure.",
    optionExplanations: [
      "Correct — Backoff with jitter and a retry limit prevents synchronized retry storms while still handling transient errors.",
      "Fixed-interval unlimited retries keep the service overloaded and synchronize clients, which caused the outage.",
      "Correct — Stopping retries when most calls fail prevents clients from multiplying load on a degraded service.",
      "Eliminating retries reduces availability because transient failures that would have succeeded are surfaced to users.",
      "Permanent over-provisioning is costly and does not address the amplification that retries cause."
    ]
  },
  {
    id: 1368,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A payment workflow has five short steps and runs about 2,000 times per minute. One step charges the customer's card through an external API that does not support idempotency keys, so the step must never run twice for the same payment. The company wants to orchestrate the workflow with AWS Step Functions. Which workflow type should a solutions architect choose?",
    options: [
      "Express workflows started asynchronously, because they are designed for high-volume event processing.",
      "Express workflows started synchronously, because they return the result directly to the caller.",
      "Standard workflows, because they provide exactly-once execution of each workflow step.",
      "Either workflow type, because Step Functions always guarantees that every step runs exactly once."
    ],
    correct: [2],
    explanation: "Standard workflows use an exactly-once execution model, so a non-idempotent step such as the card charge is not run twice by Step Functions. Asynchronous Express workflows are at-least-once and synchronous Express workflows are at-most-once, so neither guarantees a single charge.",
    optionExplanations: [
      "Asynchronous Express workflows use at-least-once execution, so the charge step could run more than once.",
      "Synchronous Express workflows are at-most-once, so a step might not run at all after a failure.",
      "Correct — Standard workflows guarantee exactly-once execution, which a non-idempotent charge requires.",
      "The two workflow types have different execution guarantees, so the choice matters for non-idempotent steps."
    ]
  },
  {
    id: 1369,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a log search platform on an Amazon OpenSearch Service domain with two data nodes in one Availability Zone and no dedicated master nodes. A zone outage made the domain unavailable for hours. The company needs the domain to remain available and keep serving searches if an Availability Zone fails. Which solution will meet these requirements?",
    options: [
      "Take hourly manual snapshots to Amazon S3 and restore them into a new domain after a failure.",
      "Add more data nodes in the same Availability Zone and increase the number of primary shards.",
      "Create a second domain in another Region and send each log entry to both domains from the log shippers.",
      "Enable Multi-AZ with Standby across three zones, with dedicated master nodes and replica shards."
    ],
    correct: [3],
    explanation: "Deploying the domain across three Availability Zones with dedicated master nodes and replica shards keeps a quorum and a copy of the data in healthy zones, and Multi-AZ with Standby keeps reserve capacity ready for a zone failure. Snapshots only allow recovery after a long restore, not continued availability.",
    optionExplanations: [
      "Restoring from snapshots means hours of downtime and loss of data written since the last snapshot.",
      "More nodes in the same zone do not protect against the loss of that zone.",
      "A second Region with dual writes is far more complex and costly than in-Region Multi-AZ, and dual writes can diverge.",
      "Correct — A three-zone deployment with dedicated masters and replicas keeps the domain available through a zone failure."
    ]
  },
  {
    id: 1370,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An internal HR application uses an Amazon RDS for MySQL Single-AZ DB instance. A new policy requires the ability to restore the database in a second Region after a Regional disaster with an RPO of minutes; an RTO of several hours is acceptable. The company wants the lowest cost and does not want any database instance running in the second Region. Which solution will meet these requirements?",
    options: [
      "Create a cross-Region read replica and promote it to a standalone instance if the primary Region becomes unavailable.",
      "Enable cross-Region automated backups replication and restore to a point in time in the second Region.",
      "Copy a manual DB snapshot to the second Region once a day using a scheduled Lambda function.",
      "Convert the DB instance to a Multi-AZ deployment so that the standby can take over in a disaster."
    ],
    correct: [1],
    explanation: "Cross-Region automated backups replication copies snapshots and transaction logs to the second Region, allowing point-in-time restore there with an RPO of minutes and no running instance. A cross-Region read replica would meet the RPO but requires a database instance running in the second Region, which the company does not want.",
    optionExplanations: [
      "A read replica is a running instance in the second Region, which adds cost and violates the stated constraint.",
      "Correct — Replicated automated backups support point-in-time restore in the second Region without a standing instance.",
      "Daily snapshots give an RPO of up to a day, far worse than the required minutes.",
      "Multi-AZ protects against an Availability Zone failure in one Region, not against a Regional disaster."
    ]
  },
  {
    id: 1371,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An order service sends messages to an Amazon SQS queue. A new requirement attaches the full order document to each message, and some documents are larger than the maximum SQS message size, so sends fail and orders are lost. The consumers must still receive the complete document. Which solution will meet these requirements with the LEAST development effort?",
    options: [
      "Store each document in Amazon S3 and send a reference to it with the SQS Extended Client Library.",
      "Compress each document and split oversized ones across several SQS messages that the consumers reassemble in code.",
      "Replace the queue with an Amazon SNS topic so that larger payloads can be delivered to consumers.",
      "Write documents directly to an Amazon RDS table and have consumers poll the table for new orders."
    ],
    correct: [0],
    explanation: "The SQS Extended Client Library implements the claim-check pattern: it stores large payloads in Amazon S3 and sends a small message pointing to them, and the consumer library retrieves the payload transparently. Splitting messages requires custom reassembly logic and handling of out-of-order or missing parts.",
    optionExplanations: [
      "Correct — The Extended Client Library stores large payloads in S3 and passes references through SQS with little custom code.",
      "Splitting and reassembling messages is complex and fragile, especially with unordered delivery on standard queues.",
      "SNS has a similar message size limit, so the large documents would still fail.",
      "Polling a database table replaces the queue with a custom, tightly coupled design and more effort."
    ]
  },
  {
    id: 1372,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A report generation API is built on Amazon API Gateway and AWS Lambda. Large reports now take several minutes to generate, which exceeds the API Gateway integration timeout, so clients receive errors even though the reports are eventually created. The company wants a reliable design that scales with demand. Which solution will meet these requirements?",
    options: [
      "Move the API to an Application Load Balancer with a much longer idle timeout and keep the existing synchronous design.",
      "Increase the client's HTTP timeout so that it waits until the Lambda function returns the report.",
      "Return a job ID at once, queue the work in Amazon SQS, process it asynchronously, and let clients poll for status.",
      "Split each report into smaller pieces and have clients call the API once for each piece."
    ],
    correct: [2],
    explanation: "An asynchronous request-reply pattern returns quickly with a job ID, buffers the work in a queue so it scales and survives failures, and lets clients retrieve the result when it is ready. Changing the client timeout does nothing because API Gateway enforces its own integration timeout.",
    optionExplanations: [
      "Holding long synchronous connections remains fragile, ties up resources, and loses work if the connection drops.",
      "The API Gateway integration timeout is enforced on the server side, so a longer client timeout does not help.",
      "Correct — The asynchronous pattern decouples long processing from the request and survives retries and failures.",
      "Pushing report assembly onto clients is complex and still does not guarantee each piece fits the timeout."
    ]
  },
  {
    id: 1373,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a stateless internal service on a single EC2 instance because a vendor license allows only one running copy. Last month the instance's Availability Zone was impaired and the service was down for several hours. The company wants the service to come back automatically in another Availability Zone without paying for a second running instance. Which solution will meet these requirements?",
    options: [
      "Enable EC2 automatic recovery on the instance with a CloudWatch alarm on the system status check.",
      "Keep a second stopped instance in another Availability Zone and start it manually during an Availability Zone outage.",
      "Create a daily AMI of the instance and copy it to every Availability Zone in the Region.",
      "Create an Auto Scaling group with a minimum, maximum, and desired capacity of one across several zones."
    ],
    correct: [3],
    explanation: "An Auto Scaling group of one that spans several Availability Zones replaces a failed instance automatically and can launch the replacement in a healthy zone, while only one copy runs at a time. EC2 automatic recovery restarts the instance on new hardware but in the same Availability Zone, so it does not help when that zone is impaired.",
    optionExplanations: [
      "Automatic recovery keeps the instance in its original Availability Zone, so it cannot recover from a zone impairment.",
      "A manual start is not automatic, and the recovery depends on someone noticing the outage.",
      "AMIs are Regional, and having an image does not launch a replacement instance automatically.",
      "Correct — A single-instance Auto Scaling group across zones self-heals into a healthy zone with one running copy."
    ]
  },
  {
    id: 1374,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A Java application on EC2 instances connects to an Amazon RDS for MySQL Multi-AZ DB instance through its DNS endpoint. After a failover, RDS completed the switch in about a minute, but the application kept failing to connect for much longer, until the instances were restarted. What is the MOST likely fix?",
    options: [
      "Replace the endpoint with the IP address of the primary instance to avoid DNS lookups.",
      "Increase the database instance class so that failovers complete faster.",
      "Configure the application's JVM to cache DNS lookups for only a short time.",
      "Add a read replica and configure the application to connect to it after a failover."
    ],
    correct: [2],
    explanation: "Multi-AZ failover works by updating the DNS record of the endpoint, so a JVM that caches DNS results indefinitely keeps connecting to the old primary until restart. Setting a low DNS cache TTL lets the application pick up the new address quickly. Hardcoding an IP address makes the problem permanent.",
    optionExplanations: [
      "A hardcoded IP address never follows the failover, so connections would keep failing after every failover.",
      "Failover already completed in about a minute; the delay comes from the client caching the old address.",
      "Correct — A short DNS cache TTL lets the application resolve the endpoint to the new primary soon after failover.",
      "A read replica cannot accept writes and is not the recovery target for a Multi-AZ failover."
    ]
  },
  {
    id: 1375,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company sends business events from several applications to a custom Amazon EventBridge event bus in one Region. Rules on the bus trigger Lambda functions that are already deployed in two Regions. The company wants event ingestion to fail over to the second Region automatically if EventBridge in the primary Region is impaired, without changing the producers' code during an incident. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use an EventBridge global endpoint with a Route 53 health check, a secondary event bus, and event replication enabled.",
      "Have each producer send every event to the event buses in both Regions and deduplicate in the consumers.",
      "Configure a cross-Region rule that forwards all events from the primary event bus to an event bus in the second Region for processing.",
      "Place an Amazon SQS queue in each Region in front of the event bus and switch producers between queues manually."
    ],
    correct: [0],
    explanation: "EventBridge global endpoints give producers a single endpoint that automatically fails over to a secondary event bus based on a Route 53 health check, and event replication keeps events flowing to both Regions. A cross-Region forwarding rule still depends on the primary bus receiving the events, so it cannot help when that bus is impaired.",
    optionExplanations: [
      "Correct — A global endpoint provides automatic Regional failover for event ingestion with no producer changes.",
      "Dual publishing requires code changes in every producer and adds deduplication logic in consumers.",
      "Forwarding happens from the primary bus, so if that bus is impaired, no events reach the second Region.",
      "Manual switching is slow, error-prone, and requires producer configuration changes during the incident."
    ]
  },
  {
    id: 1376,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A gaming company uses an Amazon ElastiCache (Redis OSS) cluster as the only store for player inventories, because the application needs microsecond reads and Redis data structures. After a node failure, recent inventory changes were lost and players complained. The company needs durable storage with Redis compatibility and fast performance, and no separate database. Which solution will meet these requirements?",
    options: [
      "Enable automatic backups on the ElastiCache cluster with the shortest available backup interval.",
      "Migrate the data to Amazon MemoryDB, which stores data durably in a Multi-AZ transaction log.",
      "Add read replicas to the ElastiCache cluster in two more Availability Zones.",
      "Move player inventories to Amazon DynamoDB and use DynamoDB Accelerator for fast reads."
    ],
    correct: [1],
    explanation: "Amazon MemoryDB is Redis-compatible, keeps data in memory for fast access, and persists every write to a distributed Multi-AZ transaction log, so it can serve as a durable primary database. ElastiCache replication is asynchronous, so adding replicas can still lose the most recent writes during a failover.",
    optionExplanations: [
      "Periodic backups leave a window of lost writes between snapshots and do not make the cache durable.",
      "Correct — MemoryDB combines Redis compatibility and in-memory speed with durable Multi-AZ storage.",
      "Asynchronous replication to replicas can still lose recent writes when a primary fails.",
      "DynamoDB with DAX would require rewriting the data model and does not offer Redis data structures."
    ]
  },
  {
    id: 1377,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company runs a self-managed database on an EC2 instance. Its data files are striped across four Amazon EBS volumes. Backups are taken by snapshotting each volume with a separate scheduled job, and a test restore produced a corrupted database because the snapshots were taken at slightly different times. The company wants consistent backups without stopping the database. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Create multi-volume snapshots of the instance so that all attached volumes are captured at the same point in time.",
      "Schedule the four snapshot jobs to start at exactly the same second each night.",
      "Replace the four striped volumes with a single larger volume and snapshot it nightly with Amazon Data Lifecycle Manager.",
      "Copy the data files to Amazon S3 every night with a script and restore from the copied files."
    ],
    correct: [0],
    explanation: "Multi-volume snapshots capture all EBS volumes attached to an instance at the same point in time, producing crash-consistent backups across the striped set without stopping the database. Starting separate jobs at the same second still does not guarantee a single consistent point in time.",
    optionExplanations: [
      "Correct — Multi-volume snapshots are crash-consistent across all attached volumes, which fixes the restore corruption.",
      "Independent jobs still start at slightly different moments, so the volumes remain inconsistent with one another.",
      "Redesigning storage requires a migration and may not meet the performance that striping provides.",
      "Copying live database files is not consistent and adds custom scripting and long restore times."
    ]
  },
  {
    id: 1378,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "An order platform publishes events to an Amazon SNS topic, and a shipping service consumes them through a subscribed Amazon SQS queue. The shipping service must process each order exactly in the order the events for that order were published, and duplicate events published during producer retries must be discarded. Events for different orders can be processed in parallel. Which solution will meet these requirements?",
    options: [
      "Use a standard SNS topic with a standard SQS queue and sort the events by their timestamp in the shipping service.",
      "Use a standard SNS topic with an SQS FIFO queue so that the queue enforces ordering of incoming events.",
      "Use an SNS FIFO topic with an SQS FIFO queue, the order ID as the message group ID, and deduplication enabled.",
      "Use a Kinesis data stream instead of SNS and process each shard with a single Lambda function."
    ],
    correct: [2],
    explanation: "SNS FIFO topics deliver messages in order and deduplicate them, and they can fan out only to SQS FIFO queues, which preserve that order per message group ID. A standard SNS topic cannot subscribe a FIFO queue and does not guarantee ordering, so the FIFO queue alone does not help.",
    optionExplanations: [
      "Standard topics and queues provide best-effort ordering and at-least-once delivery, and timestamp sorting cannot handle late or duplicate events.",
      "SQS FIFO queues can subscribe only to SNS FIFO topics, and a standard topic would not preserve ordering anyway.",
      "Correct — SNS FIFO plus SQS FIFO with the order ID as group ID gives per-order ordering, deduplication, and parallelism across orders.",
      "Kinesis does not deduplicate producer retries, and it replaces the existing fan-out design unnecessarily."
    ]
  },
  {
    id: 1379,
    domain: "Design Resilient Architectures",
    type: "single",
    question: "A company is migrating a monolithic order application to microservices one feature at a time. The monolith runs on EC2 instances behind an Application Load Balancer, and clients must keep using the same hostname. The new returns service runs on Amazon ECS, and the company wants to shift returns traffic to it gradually and roll back instantly if errors rise. Which solution will meet these requirements?",
    options: [
      "Create a new hostname for the returns service and ask clients to switch over when they are ready.",
      "Add a listener rule for the returns path that forwards to weighted target groups for the monolith and the new service.",
      "Deploy the returns service inside the monolith's instances and enable it with an environment variable.",
      "Use Route 53 weighted records to split traffic for the whole hostname between the monolith and the new returns service."
    ],
    correct: [1],
    explanation: "An ALB listener rule can forward one path to multiple target groups with weights, so returns traffic can be shifted gradually to the new service and moved back instantly by changing weights while all other paths keep going to the monolith. Route 53 weighting would split all paths, sending non-returns traffic to a service that cannot handle it, and DNS caching slows rollback.",
    optionExplanations: [
      "A new hostname breaks the requirement that clients keep using the same hostname.",
      "Correct — Weighted target groups on a path-based rule allow gradual migration and immediate rollback for one feature.",
      "Running the new service inside the monolith keeps them coupled and defeats the migration goal.",
      "DNS weighting applies to the whole hostname, not one path, and clients' DNS caching delays rollback."
    ]
  },
  {
    id: 1380,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company is preparing a warm standby of an ECS on Fargate application in a second Region. The application pulls container images from Amazon ECR and reads database credentials from AWS Secrets Manager, both only in the primary Region. A DR test showed that tasks in the second Region could not start while the primary Region was simulated as unavailable. Which combination of steps will remove these Regional dependencies? (Select TWO)",
    options: [
      "Configure ECR cross-Region replication so that images are available in the second Region's registry.",
      "Store the database credentials in the task definition as plain-text environment variables.",
      "Replicate the secret to the second Region with Secrets Manager and reference the replica in that Region.",
      "Configure a VPC peering connection so the second Region's tasks can reach the primary Region's ECR and Secrets Manager.",
      "Build container images on each task's startup from a source repository instead of pulling them from ECR."
    ],
    correct: [0, 2],
    explanation: "ECR replication and Secrets Manager replica secrets place both images and credentials in the second Region, so tasks there can start without calling any service in the primary Region. Peering to reach primary-Region endpoints keeps the dependency that broke the DR test.",
    optionExplanations: [
      "Correct — Replicated images let the second Region pull containers from its own registry.",
      "Plain-text credentials in task definitions are insecure and do not represent a sound DR design.",
      "Correct — A replica secret is readable in the second Region even when the primary Region is unavailable.",
      "Connecting to the primary Region's services still fails when that Region is unavailable.",
      "Building images at startup is slow and fragile, and the source repository may itself depend on the primary Region."
    ]
  },
  {
    id: 1381,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company runs an application in private subnets across three Availability Zones. All instances reach the internet through one NAT gateway in the first zone, and they reach AWS Systems Manager and Amazon SQS through interface VPC endpoints that were created only in that same zone. When the first zone was impaired, instances in the other zones also lost connectivity. Which combination of steps will remove these single points of failure? (Select TWO)",
    options: [
      "Create a NAT gateway in each Availability Zone and route each zone's private subnets to the NAT gateway in the same zone.",
      "Replace the NAT gateway with a NAT instance in an Auto Scaling group of one instance.",
      "Add an endpoint network interface in a subnet in each Availability Zone for every interface VPC endpoint.",
      "Remove the interface endpoints and send all AWS service traffic through the internet gateway.",
      "Move all instances into the first Availability Zone so they share the same network resources."
    ],
    correct: [0, 2],
    explanation: "NAT gateways and interface endpoint network interfaces are zonal resources, so each Availability Zone needs its own NAT gateway and endpoint interface, with route tables directing traffic within the same zone. A single NAT instance remains a single point of failure and adds management work.",
    optionExplanations: [
      "Correct — Zone-local NAT gateways keep internet egress working when another zone fails.",
      "A single NAT instance is still a single point of failure and requires patching and scaling.",
      "Correct — Endpoint interfaces in every zone keep private AWS service access available during a zone failure.",
      "Private subnets have no direct route to an internet gateway, and removing endpoints reduces security without fixing resilience.",
      "Concentrating everything in one zone increases, rather than removes, the impact of a zone failure."
    ]
  },
  {
    id: 1382,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company runs an active-passive web application in two Regions with Route 53 failover records. The records are A records with a TTL of 24 hours that point to Elastic IP addresses, and the health check uses a 30-second interval with a high failure threshold. In a recent outage, many users kept reaching the failed Region for hours. Which combination of steps will make failover take effect faster? (Select TWO)",
    options: [
      "Increase the TTL on the failover records so that resolvers query Route 53 less often during an outage.",
      "Reduce the TTL of the failover records to a short value such as 60 seconds.",
      "Change the records to a simple routing policy that returns both Regions' IP addresses.",
      "Configure the health check with the fast interval and a lower failure threshold.",
      "Disable the health check and fail over manually by editing the primary record during an incident."
    ],
    correct: [1, 3],
    explanation: "Failover time is roughly the health check detection time plus the time resolvers keep cached answers, so a short TTL and faster health check detection both shorten it. A 24-hour TTL lets resolvers keep returning the failed Region's address long after Route 53 has changed its answer.",
    optionExplanations: [
      "A longer TTL makes resolvers cache the failed Region's address even longer, delaying failover.",
      "Correct — A short TTL limits how long resolvers keep returning the old address after failover.",
      "Simple routing has no health-based failover and would keep sending users to the failed Region.",
      "Correct — A shorter interval and lower threshold detect the failure sooner, so Route 53 switches answers sooner.",
      "Manual record edits are slower and error-prone, and the long TTL would still delay the change."
    ]
  },
  {
    id: 1383,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A news website runs on EC2 instances behind an Application Load Balancer with Amazon CloudFront in front. During a traffic surge, a non-critical personalized recommendations feature overloaded the database and the entire site returned errors. The company wants the site to degrade gracefully: core articles must remain readable even if the origin struggles, and operators must be able to switch off non-critical features within seconds without a deployment. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Increase the ALB idle timeout so that slow requests to the overloaded origin can eventually complete.",
      "Configure the origin to send Cache-Control headers with stale-if-error so CloudFront serves cached articles when the origin fails.",
      "Disable CloudFront caching for articles so that readers always get the latest version from the origin.",
      "Use AWS AppConfig feature flags that the application checks to turn off the recommendations feature at runtime.",
      "Add a scheduled Auto Scaling action that doubles the fleet every morning at the busiest time."
    ],
    correct: [1, 3],
    explanation: "The stale-if-error directive lets CloudFront keep serving cached articles when the origin returns errors, and AppConfig feature flags let operators disable recommendations instantly without redeploying. Longer timeouts only hold more connections open on an already overloaded origin.",
    optionExplanations: [
      "Longer timeouts tie up more resources on an overloaded origin and make the failure worse.",
      "Correct — Serving stale cached articles on origin errors keeps the core content readable during the surge.",
      "Disabling caching sends every read to the origin and increases load during a surge.",
      "Correct — Runtime feature flags let operators switch off the non-critical feature within seconds without a deployment.",
      "A scheduled action does not address unexpected surges or allow non-critical features to be shed."
    ]
  },
  {
    id: 1384,
    domain: "Design Resilient Architectures",
    type: "multiple",
    question: "A company is breaking an order monolith into services. Today the monolith calls the invoicing, loyalty, and email services synchronously after saving an order, so an outage in any of them makes order placement fail. The company will publish an OrderPlaced event to an Amazon EventBridge custom event bus instead. Orders must be accepted even when a consumer is down for hours, and events that cannot be delivered must not be silently lost. Which combination of steps will meet these requirements? (Select TWO)",
    options: [
      "Create a rule for each consumer that targets an Amazon SQS queue owned by that consumer, which processes messages at its own pace.",
      "Create one rule whose target is a Lambda function that calls all three services synchronously in sequence.",
      "Configure a retry policy and an SQS dead-letter queue on each rule target to capture events that cannot be delivered.",
      "Keep the synchronous calls in the monolith and add an EventBridge rule only for the email service.",
      "Configure each consumer to poll the event bus directly every minute for new OrderPlaced events."
    ],
    correct: [0, 2],
    explanation: "Routing events to a durable SQS queue per consumer lets each service be offline for hours and catch up later, while the order path only depends on EventBridge. A retry policy plus a dead-letter queue on each target keeps events that EventBridge cannot deliver instead of dropping them. A single Lambda target calling all services recreates the coupling, because one failing service blocks the others.",
    optionExplanations: [
      "Correct — Per-consumer queues buffer events durably so each service can be unavailable without affecting orders.",
      "One function calling every service in sequence keeps them tightly coupled, so one outage affects all deliveries.",
      "Correct — Target retries and a dead-letter queue preserve events that cannot be delivered.",
      "Keeping synchronous calls for invoicing and loyalty means their outages still block order placement.",
      "EventBridge is a push-based router; consumers cannot poll an event bus for events."
    ]
  },
  {
    id: 1385,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A manufacturing company is retiring its on-premises file servers. Its on-premises Linux applications read and write files over NFS and cannot be modified, and they need low-latency access to recently used files. The files must be stored as native objects in Amazon S3 so that cloud analytics services can process them. Which solution meets these requirements?",
    options: [
      "Deploy Amazon S3 File Gateway on premises with an NFS share.",
      "Mount Amazon EFS on premises over Direct Connect.",
      "Keep a local NAS and use AWS DataSync to copy its files to Amazon S3 every hour.",
      "Deploy AWS Storage Gateway Volume Gateway in cached mode with iSCSI volumes."
    ],
    correct: [0],
    explanation: "Amazon S3 File Gateway presents an NFS share on premises, stores every file as a native S3 object, and keeps recently used data in a local cache for low-latency access. Volume Gateway is tempting because it also caches locally, but it exposes iSCSI block volumes, not NFS files, and its data is not readable as individual S3 objects.",
    optionExplanations: [
      "Correct — the gateway writes files as S3 objects and serves hot data from its local cache over NFS.",
      "EFS does not store files as S3 objects, and every access crosses the network without a local cache.",
      "The company is retiring its file servers, so keeping a NAS on premises does not meet the requirement.",
      "Volume Gateway provides block storage over iSCSI, not NFS, and the data is not accessible as individual S3 objects."
    ]
  },
  {
    id: 1386,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A SaaS company sends events from thousands of tenants through Amazon Data Firehose to Amazon S3, where objects are organized only by arrival time. Most Amazon Athena queries analyze a single tenant, but every query scans all tenants' data and is slow. The company wants the data organized by the tenant ID contained in each record, without writing or operating custom code. Which solution meets these requirements?",
    options: [
      "Add a Lambda function that copies each delivered object into prefixes per tenant.",
      "Enable dynamic partitioning in Firehose using the tenant ID parsed from each record.",
      "Configure Athena partition projection on the existing table using the tenant ID.",
      "Shorten the Firehose buffer interval so that smaller objects are delivered more often."
    ],
    correct: [1],
    explanation: "Firehose dynamic partitioning extracts the tenant ID from each record and writes the data to S3 prefixes per tenant, so Athena can prune partitions and read only one tenant's data. Partition projection is tempting, but it only describes how existing prefixes map to partitions; it cannot reorganize data that is stored by arrival time only.",
    optionExplanations: [
      "This requires custom code to build and operate, and it stores the data twice.",
      "Correct — Firehose writes each tenant's records to its own prefix, so Athena reads only the matching partition.",
      "Projection only maps existing prefixes to partitions; the objects are not organized by tenant, so nothing is pruned.",
      "Smaller, more frequent objects do not organize data by tenant and add per-file overhead to queries."
    ]
  },
  {
    id: 1387,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A logistics company streams GPS events from hundreds of thousands of trucks into Amazon Kinesis Data Streams. A consumer application must process each truck's events in the exact order in which they were produced, and the load must stay evenly spread across many shards. The producers currently use a random partition key for each record. What should a solutions architect change?",
    options: [
      "Keep the random keys and have the consumer sort records by timestamp across all shards.",
      "Reduce the stream to a single shard.",
      "Use the truck ID as the partition key for every record.",
      "Replace the stream with an Amazon SQS standard queue and reorder events by timestamp."
    ],
    correct: [2],
    explanation: "Kinesis Data Streams guarantees ordering only within a shard, and all records with the same partition key go to the same shard, so using the truck ID keeps each truck's events in order while the large number of trucks spreads load across shards. Collapsing the stream to a single shard would also guarantee order, but it caps the stream's throughput far below what the fleet produces.",
    optionExplanations: [
      "Cross-shard reordering is complex and cannot guarantee order when records arrive late on different shards.",
      "One shard cannot absorb the throughput of the whole fleet, so producers would be throttled.",
      "Correct — records with the same partition key are ordered within one shard, and many distinct truck IDs keep shards balanced.",
      "Standard queues provide best-effort ordering only, so per-truck order is not guaranteed."
    ]
  },
  {
    id: 1388,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A payment platform publishes transaction events to an Amazon SQS FIFO queue. Events for the same account must be processed in order, but events for different accounts can be processed in parallel. All messages currently share one message group ID, and throughput is far below the several thousand messages per second the platform now needs. Which combination of actions will increase throughput while preserving per-account ordering? (Select TWO)",
    options: [
      "Set the message group ID to the account ID so that different accounts can be consumed in parallel.",
      "Switch to an SQS standard queue and remove duplicate messages in the consumer code.",
      "Assign a unique deduplication ID to every message while keeping the single message group.",
      "Enable high throughput mode on the FIFO queue so it can scale across many message groups.",
      "Increase the visibility timeout so that consumers have more time to process each message."
    ],
    correct: [0, 3],
    explanation: "FIFO queues preserve order per message group, so using the account ID as the group ID lets consumers process different accounts in parallel while keeping each account in order. Enabling high throughput mode for the FIFO queue raises the throughput the queue can sustain across many groups. Switching to a standard queue would scale, but it gives up the ordering guarantee.",
    optionExplanations: [
      "Correct — ordering is enforced per message group, so many groups allow parallel processing without breaking per-account order.",
      "Standard queues do not guarantee order, which breaks the per-account ordering requirement.",
      "Deduplication IDs affect duplicate detection only; one group still forces strictly serial processing.",
      "Correct — high throughput FIFO raises the per-queue message rate when traffic is spread across message groups.",
      "A longer visibility timeout does not add parallelism and can delay retries of failed messages."
    ]
  },
  {
    id: 1389,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An e-commerce company's Amazon RDS for PostgreSQL DB instance runs at sustained high CPU utilization. Performance Insights shows that one frequently executed query, which filters a very large orders table by customer_id and order_date, accounts for most of the database load and performs full sequential scans. The company wants to reduce the load at the lowest cost. Which action is MOST effective?",
    options: [
      "Scale the DB instance to a larger instance class with more vCPUs and memory.",
      "Route this query to a new read replica.",
      "Change the storage from gp3 to Provisioned IOPS io2 volumes with higher IOPS.",
      "Create a composite index on customer_id and order_date."
    ],
    correct: [3],
    explanation: "A composite index on the filter columns lets PostgreSQL read only the matching rows instead of scanning the whole table, which removes the main source of CPU load at no extra infrastructure cost. A larger instance class would add capacity, but it costs more and the inefficient full scans would keep growing with the table.",
    optionExplanations: [
      "This raises cost and only hides the inefficient query, which keeps scanning the full table.",
      "The replica would run the same expensive scans and adds the cost of another instance.",
      "The bottleneck is CPU from scanning, not storage I/O, so more IOPS would not reduce the load.",
      "Correct — the index turns full scans into targeted lookups, cutting CPU load without additional infrastructure cost."
    ]
  },
  {
    id: 1390,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A company's Amazon Redshift cluster joins a large sales fact table with a large customers table on customer_id, and most queries filter sales to a recent range of sale_date values. Query plans show large volumes of data being redistributed between nodes during the joins, and queries read blocks for all dates. Which combination of table design changes will improve query performance? (Select TWO)",
    options: [
      "Use ALL distribution for the large sales fact table so every node holds a full copy.",
      "Use KEY distribution on customer_id for both the sales table and the customers table.",
      "Define sale_date as the sort key of the sales table so zone maps can skip unneeded blocks.",
      "Use EVEN distribution for both tables so rows are spread uniformly across slices.",
      "Enable concurrency scaling for the workload management queue used by these queries."
    ],
    correct: [1, 2],
    explanation: "Distributing both tables on the join column collocates matching rows on the same slices so that joins no longer redistribute data. Making sale_date the sort key lets Redshift use zone maps to skip blocks outside the requested date range. ALL distribution avoids redistribution only for small dimension tables; copying a large fact table to every node wastes storage and slows loads.",
    optionExplanations: [
      "ALL distribution suits small dimension tables; for a large fact table it multiplies storage and load time.",
      "Correct — collocating rows on the join key removes the data redistribution step during joins.",
      "Correct — sorted data lets range filters on sale_date skip blocks that contain other dates.",
      "EVEN distribution does not collocate join keys, so the joins would still redistribute data.",
      "Concurrency scaling adds capacity for queued queries but does not fix an inefficient per-query plan."
    ]
  },
  {
    id: 1391,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An IoT pipeline writes data to Amazon S3 in Apache Parquet format, partitioned by date. A streaming job writes a new file every few seconds, so each partition contains hundreds of thousands of files that are only a few kilobytes each. Amazon Athena queries that read a single day are slow, mostly because of the overhead of listing and opening files. What should a solutions architect do to improve query performance?",
    options: [
      "Periodically compact each partition's small files into far fewer, larger files.",
      "Add hour and minute partition columns so each query reads a smaller partition.",
      "Convert the files from Parquet to gzip-compressed CSV to reduce the amount of data read.",
      "Purchase Athena provisioned capacity so the queries run on dedicated compute."
    ],
    correct: [0],
    explanation: "Athena performs best when data is stored in fewer, larger files, so periodically compacting each partition's small files removes most of the per-file listing and open overhead. Adding hour and minute partitions is tempting, but it creates even more partitions with even smaller files and makes the problem worse.",
    optionExplanations: [
      "Correct — fewer, larger Parquet files greatly reduce per-file overhead for Athena queries.",
      "More granular partitions produce even more tiny files and more partition metadata to process.",
      "Row-based CSV is less efficient for analytics than columnar Parquet and does not reduce the file count.",
      "Dedicated capacity helps with concurrency, not with the overhead of opening hundreds of thousands of tiny files."
    ]
  },
  {
    id: 1392,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A media startup lets users upload videos to an Amazon S3 bucket. Each video must play smoothly on phones, tablets, and smart TVs by using adaptive bitrate streaming, and viewers around the world need fast playback startup. The company does not want to operate any transcoding servers. Which combination of steps meets these requirements? (Select TWO)",
    options: [
      "Run FFmpeg on an EC2 Auto Scaling group that takes transcoding jobs from an SQS queue.",
      "Enable S3 Transfer Acceleration and give viewers the accelerated endpoint for playback.",
      "Transcode each uploaded video with AWS Elemental MediaConvert into multi-bitrate HLS renditions.",
      "Store the videos on Amazon EFS and stream them from EC2 web servers in one Region.",
      "Deliver the HLS output stored in Amazon S3 through an Amazon CloudFront distribution."
    ],
    correct: [2, 4],
    explanation: "AWS Elemental MediaConvert is a managed file-based transcoding service that can produce HLS adaptive bitrate renditions when a video is uploaded. Amazon CloudFront then caches the HLS segments at edge locations close to viewers for fast startup. S3 Transfer Acceleration is designed to speed up transfers to and from a bucket over long distances, but it does not cache content at the edge or create bitrate renditions.",
    optionExplanations: [
      "This works but requires the company to operate and patch transcoding servers, which it wants to avoid.",
      "Transfer Acceleration does not cache content at the edge, so every view is served from the bucket.",
      "Correct — MediaConvert is fully managed and produces the adaptive bitrate outputs without servers to operate.",
      "Serving from one Region gives distant viewers slow startup and adds servers to manage.",
      "Correct — CloudFront caches video segments at edge locations so viewers worldwide start playback quickly."
    ]
  },
  {
    id: 1393,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs worker tasks on Amazon ECS with AWS Fargate that process messages from an Amazon SQS queue. The service scales on average CPU utilization, but the tasks spend most of their time waiting on a third-party API, so CPU stays low while the queue backlog grows during unpredictable bursts. The company wants the number of tasks to follow the amount of waiting work. Which solution meets these requirements?",
    options: [
      "Lower the target value of the CPU utilization scaling policy to a much smaller percentage.",
      "Use target tracking on a custom metric of visible queue messages divided by running tasks.",
      "Add scheduled scaling actions that raise the task count at the expected busy times.",
      "Increase the CPU and memory size in the task definition so each task works faster."
    ],
    correct: [1],
    explanation: "Scaling on backlog per task (visible messages divided by running tasks) ties the task count directly to the work waiting in the queue, which is the right signal for I/O-bound consumers. Lowering the CPU target is tempting, but CPU barely moves when tasks are waiting on an external API, so it still would not track the backlog.",
    optionExplanations: [
      "CPU stays low for I/O-bound tasks, so the policy still would not react to a growing backlog.",
      "Correct — backlog per task reflects the waiting work directly, so the service scales out and in with the queue.",
      "The bursts are unpredictable, so fixed schedules would miss them or overprovision.",
      "The tasks wait on an external API; larger tasks do not add the parallelism needed to drain the queue."
    ]
  },
  {
    id: 1394,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A company runs a web application on Amazon EKS with managed node groups. During flash sales, requests increase within minutes, but the number of pods stays fixed. When operators add pods manually, many remain Pending because no node has free capacity. The company wants pods and nodes to scale automatically and quickly, with nodes sized for the pending pods. Which combination of actions meets these requirements? (Select TWO)",
    options: [
      "Configure the Kubernetes Horizontal Pod Autoscaler to scale the deployment on resource metrics.",
      "Configure the Vertical Pod Autoscaler to raise the CPU and memory requests of the pods.",
      "Increase the maximum size of the managed node groups without adding any autoscaler.",
      "Install Karpenter so that right-sized nodes are launched quickly for pending pods.",
      "Replace the node groups with a few very large instances to hold more pods per node."
    ],
    correct: [0, 3],
    explanation: "The Horizontal Pod Autoscaler adds pod replicas when load rises, and Karpenter watches for unschedulable pods and quickly launches nodes whose instance types fit them. The Vertical Pod Autoscaler only changes the resource requests of existing pods, which would not add replicas and could leave even more pods unschedulable.",
    optionExplanations: [
      "Correct — HPA adds pod replicas automatically as the load on the deployment grows.",
      "VPA resizes existing pods instead of adding replicas and does not provision new nodes.",
      "A higher maximum only allows growth; nothing would actually add nodes when pods are pending.",
      "Correct — Karpenter provisions instances that match the pending pods' requirements within seconds of detecting them.",
      "This is a fixed capacity change that neither scales with demand nor right-sizes nodes."
    ]
  },
  {
    id: 1395,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An Amazon SQS queue is the event source for an AWS Lambda function that calls a partner API. The partner API can handle only a limited number of concurrent requests. During large backlogs Lambda scaled to hundreds of concurrent invocations, so the team set reserved concurrency on the function, but now many invocations are throttled and messages end up in the dead-letter queue. Which solution limits concurrency without these throttling failures?",
    options: [
      "Increase the queue's visibility timeout and the maximum receive count on the redrive policy.",
      "Configure provisioned concurrency on the function equal to the partner API's limit.",
      "Set maximum concurrency on the SQS event source mapping to match the partner API's limit.",
      "Replace the queue with an Amazon SNS topic that invokes the function asynchronously."
    ],
    correct: [2],
    explanation: "Maximum concurrency on the SQS event source mapping limits how many concurrent invocations the poller starts, so messages simply wait in the queue instead of being throttled and retried into the dead-letter queue. A longer visibility timeout reduces how quickly messages fail, but with reserved concurrency alone the poller keeps invoking the function and throttling still occurs.",
    optionExplanations: [
      "This only delays failures; the poller still invokes beyond reserved concurrency and keeps getting throttled.",
      "Provisioned concurrency pre-initializes environments but does not cap how far the function can scale.",
      "Correct — the event source mapping stops invoking beyond the limit, so messages stay in the queue instead of being throttled.",
      "SNS does not buffer work like a queue, and asynchronous invocations would still scale beyond the limit."
    ]
  },
  {
    id: 1396,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An AWS Lambda function consumes records from an Amazon Kinesis Data Streams stream. The IteratorAge metric keeps increasing because each record requires a slow call to a downstream service, while the account is far from its Lambda concurrency limit. Ordering is required only per partition key. The company wants to increase processing throughput without resharding the stream. What should a solutions architect do?",
    options: [
      "Register the function as an enhanced fan-out consumer of the stream.",
      "Increase the data retention period of the stream so records are not lost.",
      "Increase the function timeout.",
      "Increase the parallelization factor of the event source mapping."
    ],
    correct: [3],
    explanation: "Raising the parallelization factor on the event source mapping lets Lambda process each shard with several concurrent invocations while still preserving order per partition key. Enhanced fan-out is tempting, but it increases read throughput per consumer; the bottleneck here is processing time, and without a higher parallelization factor each shard still has only one invocation at a time.",
    optionExplanations: [
      "Dedicated read throughput does not help when the slow part is processing each record.",
      "Longer retention avoids data loss but does not speed up processing or reduce iterator age.",
      "A longer timeout does not add parallelism, so processing would remain just as slow.",
      "Correct — multiple concurrent batches per shard raise throughput while order is kept per partition key."
    ]
  },
  {
    id: 1397,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company has an AWS Transit Gateway in us-east-1 and another in eu-west-1, each with dozens of attached VPCs. Applications in many VPCs in both Regions now need to communicate with each other. Traffic must stay on the AWS global network, and the company wants the LEAST operational overhead as more VPCs are added. Which solution meets these requirements?",
    options: [
      "Peer the two transit gateways with a peering attachment and add routes.",
      "Create inter-Region VPC peering connections between every pair of VPCs that need to communicate.",
      "Connect the transit gateways with Site-to-Site VPN connections over the public internet.",
      "Route the traffic through the data center over Direct Connect."
    ],
    correct: [0],
    explanation: "Transit Gateway inter-Region peering connects the two hubs over the AWS global network with encryption, so every attached VPC can reach the other Region through route table entries alone. Inter-Region VPC peering also uses the AWS network, but a full mesh of peering connections between dozens of VPCs is hard to manage and grows with every new VPC.",
    optionExplanations: [
      "Correct — one peering attachment connects the hubs over the AWS backbone, and new VPCs only need routes.",
      "A peering mesh across dozens of VPCs is complex to manage and must be extended for every new VPC.",
      "VPN over the internet does not keep traffic on the AWS network and limits throughput per tunnel.",
      "Hairpinning through the data center adds latency and leaves the AWS network."
    ]
  },
  {
    id: 1398,
    domain: "Design High-Performing Architectures",
    type: "multiple",
    question: "A company connects its data center to a VPC with an AWS Site-to-Site VPN connection that terminates on a virtual private gateway. Data transfers have grown and are now limited by the throughput of a single VPN tunnel. The company cannot use AWS Direct Connect in the near term. Which combination of steps will increase the aggregate VPN bandwidth? (Select TWO)",
    options: [
      "Enable acceleration on the existing VPN connection on the virtual private gateway.",
      "Terminate the VPN on an AWS Transit Gateway with equal-cost multi-path routing enabled.",
      "Switch the VPN to static routing so traffic is balanced across both tunnels.",
      "Raise the MTU on the customer gateway so that jumbo frames are sent through the tunnels.",
      "Add more Site-to-Site VPN connections that advertise the same prefixes using BGP."
    ],
    correct: [1, 4],
    explanation: "AWS Transit Gateway supports equal-cost multi-path (ECMP) routing across VPN tunnels, which a virtual private gateway does not, so moving the VPN to a transit gateway with ECMP enabled lets traffic use many tunnels at once. Adding more VPN connections that advertise the same prefixes over BGP gives ECMP additional tunnels to spread traffic across. Static routing is tempting, but ECMP over VPN requires dynamic BGP routing.",
    optionExplanations: [
      "Acceleration requires a transit gateway and does not raise the throughput limit of each tunnel.",
      "Correct — Transit Gateway can spread traffic across multiple VPN tunnels with ECMP, unlike a virtual private gateway.",
      "ECMP over VPN requires BGP; with static routes traffic is not balanced across tunnels.",
      "Site-to-Site VPN does not support jumbo frames, so this would not increase throughput.",
      "Correct — additional BGP tunnels give ECMP more paths, so aggregate bandwidth grows with each connection."
    ]
  },
  {
    id: 1399,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company has offices in Asia and South America that connect through AWS Site-to-Site VPN to a transit gateway in us-east-1. Because the tunnels cross long stretches of the public internet, latency and jitter vary widely. AWS Direct Connect is not available at these offices. The company wants more consistent network performance with the LEAST effort. Which solution meets these requirements?",
    options: [
      "Add a second VPN connection from each office to the same transit gateway in us-east-1.",
      "Convert the VPN connections to accelerated Site-to-Site VPN connections.",
      "Run software VPN appliances on Amazon EC2.",
      "Place an Amazon CloudFront distribution in front of the VPN endpoints of the transit gateway."
    ],
    correct: [1],
    explanation: "Accelerated Site-to-Site VPN uses AWS Global Accelerator so that VPN traffic enters the AWS global network at the edge location nearest each office, avoiding most of the unpredictable internet path. Adding a second VPN connection adds redundancy and bandwidth, but its traffic still crosses the same congested internet path, so latency and jitter do not improve.",
    optionExplanations: [
      "Both connections still traverse the long public internet path, so jitter and latency are unchanged.",
      "Correct — traffic enters the AWS global network at a nearby edge location, which reduces latency and jitter.",
      "Self-managed appliances add operational effort and still use the same internet path.",
      "CloudFront delivers HTTP content and cannot carry IPsec VPN tunnels."
    ]
  },
  {
    id: 1400,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company is designing an Amazon DynamoDB table for an order history service. The table uses customerId as the partition key and orderId as the sort key. The application must also retrieve a customer's orders sorted by order total, and these queries must use strongly consistent reads. The table has not been created yet. Which design meets these requirements?",
    options: [
      "Create a global secondary index with customerId as the partition key and orderTotal as the sort key.",
      "Scan the table with a filter on customerId and sort the results in the application.",
      "Define a local secondary index on customerId and orderTotal when the table is created.",
      "Place a DynamoDB Accelerator cluster in front of the table to serve the sorted results."
    ],
    correct: [2],
    explanation: "A local secondary index shares the table's partition key, provides an alternate sort key, and supports strongly consistent reads; it must be defined when the table is created, which is possible here. A global secondary index could use the same keys, but GSIs support only eventually consistent reads.",
    optionExplanations: [
      "Global secondary indexes support only eventually consistent reads, which fails the consistency requirement.",
      "Scans read the whole table, which is slow and consumes far more read capacity than a query.",
      "Correct — an LSI gives an alternate sort key on the same partition key and supports strongly consistent reads.",
      "DAX caches reads but cannot provide a new sort order, and strongly consistent reads bypass the cache."
    ]
  },
  {
    id: 1401,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A social media application uses Amazon ElastiCache (Redis OSS) with cluster mode disabled: one primary node and two replicas. Reads perform well, but write volume is saturating the primary node, and the dataset is approaching the node's memory. Both are expected to keep growing well beyond the capacity of any single node. Which solution meets these requirements?",
    options: [
      "Move to cluster mode enabled and partition the data across several shards.",
      "Add more read replicas to the existing replication group to spread the load across nodes.",
      "Scale the primary to the largest node type.",
      "Migrate the cache to Amazon ElastiCache (Memcached) to gain multithreaded performance."
    ],
    correct: [0],
    explanation: "With cluster mode enabled, the keyspace is partitioned across multiple shards, each with its own primary, so both write throughput and memory scale horizontally as shards are added. Adding read replicas is tempting, but replicas only serve reads; every write still goes to the single primary, and each replica holds the full dataset.",
    optionExplanations: [
      "Correct — each shard has its own primary, so writes and memory scale out as shards are added.",
      "Replicas serve reads only; all writes still hit one primary, and each replica stores the full dataset.",
      "A bigger node buys time but cannot keep up with growth beyond any single node's capacity.",
      "The application depends on Redis features and replication, which Memcached does not provide."
    ]
  },
  {
    id: 1402,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A software company distributes multi-gigabyte installers from an Amazon S3 bucket in a single AWS Region. When a new release ships, millions of users around the world download the same files within a few days, and users far from the Region report slow downloads. The company wants to improve download speed with the LEAST operational overhead. Which solution meets these requirements?",
    options: [
      "Enable S3 Transfer Acceleration and publish the accelerated endpoint as the download link.",
      "Replicate the bucket to several Regions and route users with Route 53 latency-based records.",
      "Spread the objects across more S3 prefixes.",
      "Serve the installers through Amazon CloudFront with the bucket as the origin."
    ],
    correct: [3],
    explanation: "Amazon CloudFront caches the installers at edge locations worldwide, so after the first requests most users download from a nearby edge instead of the distant bucket. S3 Transfer Acceleration also uses edge locations, but it only speeds up transfers to and from the bucket and does not cache content, so every download is still served from the Region.",
    optionExplanations: [
      "Transfer Acceleration does not cache content, so every download is still served from the bucket's Region.",
      "Managing replicas and routing in many Regions adds overhead and still covers fewer locations than an edge network.",
      "The problem is distance to users, not the S3 request rate per prefix.",
      "Correct — popular files are cached at edge locations close to users, which speeds up downloads with little management."
    ]
  },
  {
    id: 1403,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs an application in us-east-1, eu-west-1, and ap-southeast-1. The application in each Region reads and writes objects in Amazon S3. The company wants objects replicated between buckets in all three Regions and a single global endpoint that automatically sends each request to the bucket with the lowest latency, without building routing logic. Which solution meets these requirements?",
    options: [
      "Use one bucket in us-east-1 with S3 Transfer Acceleration enabled for all three Regions.",
      "Create an S3 Multi-Region Access Point over replicated buckets in the three Regions.",
      "Place an Amazon CloudFront distribution in front of a single bucket for reads and writes.",
      "Create Route 53 latency-based records that point to each Region's bucket endpoint."
    ],
    correct: [1],
    explanation: "An S3 Multi-Region Access Point provides one global endpoint that routes requests over the AWS network to the closest bucket, and its replication rules keep the buckets in the three Regions synchronized. A single bucket with Transfer Acceleration is tempting, but all objects would still live in one Region, so reads and writes from the other Regions keep the cross-Region latency.",
    optionExplanations: [
      "Data remains in a single Region, so access from the other Regions still incurs cross-Region latency.",
      "Correct — one global endpoint routes each request to the lowest-latency bucket, and replication keeps the copies in sync.",
      "Writes still go to one Region, and CloudFront does not replicate objects to other buckets.",
      "Each bucket has its own name, so the application would need its own logic to target the right bucket."
    ]
  },
  {
    id: 1404,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company is moving microservices that communicate over gRPC to Amazon EC2 instances behind a load balancer. The load balancer must balance individual gRPC calls that arrive over long-lived HTTP/2 connections, route calls to different services based on the gRPC method path, and use gRPC status codes in health checks. Which solution meets these requirements?",
    options: [
      "Use a Network Load Balancer with TCP listeners that forward traffic to the instances.",
      "Use a Gateway Load Balancer with GENEVE.",
      "Use a Network Load Balancer with a TLS listener and target groups per service port.",
      "Use an ALB whose target groups use the gRPC protocol version."
    ],
    correct: [3],
    explanation: "An Application Load Balancer supports gRPC as a target group protocol version, balancing each call over HTTP/2, routing on the request path, and checking health with gRPC status codes. A Network Load Balancer balances at the connection level, so long-lived HTTP/2 connections pin all their calls to one target, and it cannot route by path.",
    optionExplanations: [
      "NLB balances connections, not calls, so long-lived connections stick to one target, and it cannot route by path.",
      "Gateway Load Balancer is for inline network appliances, not for routing application gRPC calls.",
      "TLS termination does not add request-level balancing or path-based routing for gRPC.",
      "Correct — the ALB balances individual gRPC calls, routes by method path, and supports gRPC health checks."
    ]
  },
  {
    id: 1405,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs an Oracle OLTP database on premises and is building a data lake on Amazon S3. It needs an initial copy of selected tables in S3 followed by continuous replication of ongoing changes, with minimal impact on the source database and without writing custom code. Which solution meets these requirements?",
    options: [
      "Run an AWS DMS task with full load and ongoing replication to an S3 target.",
      "Export the tables every night and upload the dump files to Amazon S3 with AWS DataSync.",
      "Run a Glue JDBC job on full tables every few minutes.",
      "Use the AWS Schema Conversion Tool to convert the schema and replicate the changes to S3."
    ],
    correct: [0],
    explanation: "An AWS DMS task with full load plus change data capture copies the existing data and then reads ongoing changes from the database logs, writing them to S3 with little load on the source. The AWS Schema Conversion Tool is tempting because it is used in database migrations, but it converts schemas and code; it does not replicate data changes.",
    optionExplanations: [
      "Correct — DMS copies existing data, then captures changes from the logs and writes them to S3 continuously.",
      "Nightly exports are not continuous replication and add heavy load on the source during export.",
      "Repeated full-table reads put heavy load on the source and do not capture individual changes.",
      "SCT converts schemas and code but does not replicate ongoing data changes."
    ]
  },
  {
    id: 1406,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A ride-hailing company streams trip events into Amazon Kinesis Data Streams. It needs to compute demand metrics per city over sliding one-minute windows with sub-second latency, which requires stateful processing across events. The company wants a managed service with the LEAST operational overhead and no clusters to manage. Which solution meets these requirements?",
    options: [
      "Deliver the events to S3 with Amazon Data Firehose and run Athena queries every minute.",
      "Run an Amazon Managed Service for Apache Flink application on the stream.",
      "Use a Lambda consumer with in-memory window state.",
      "Run Spark Structured Streaming on an Amazon EMR cluster that reads the stream continuously."
    ],
    correct: [1],
    explanation: "Amazon Managed Service for Apache Flink runs stateful streaming applications with built-in windowing directly on the stream, with no clusters to manage. AWS Lambda can consume the stream with little overhead, but its invocations are stateless, so maintaining sliding windows across events and shards would require external state and custom logic.",
    optionExplanations: [
      "Firehose buffering and scheduled queries add far more than sub-second latency.",
      "Correct — Flink provides managed stateful windowed processing on the stream with sub-second latency.",
      "Lambda invocations are stateless, so in-memory window state is not reliably preserved across events.",
      "Spark can do this, but managing an EMR cluster adds the operational overhead the company wants to avoid."
    ]
  },
  {
    id: 1407,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs a nightly AWS Glue ETL job that processes files in an Amazon S3 prefix. New files are added every day, but the job reprocesses every file in the prefix on each run, so its run time and cost grow steadily. The company wants each run to process only the files that arrived since the previous run, with the LEAST effort. What should a solutions architect do?",
    options: [
      "Increase the number of workers allocated to the job so that each run finishes faster.",
      "Add a Lambda function that moves processed files to an archive prefix after each run.",
      "Enable job bookmarks on the AWS Glue job so that already processed files are skipped.",
      "Convert the job to a Python shell job that lists the prefix and skips older files by date."
    ],
    correct: [2],
    explanation: "Glue job bookmarks persist state about previously processed data, so each run reads only new files without code to track them. Adding workers makes each run faster, but the job would still reprocess the entire prefix and cost would keep growing.",
    optionExplanations: [
      "The job would still reprocess every file, so cost keeps increasing with the size of the prefix.",
      "This works but adds custom code and a new failure point, which is more effort than a built-in feature.",
      "Correct — bookmarks track processed data so each run handles only new files, with no custom code.",
      "Rewriting the job to track state manually requires more effort and loses Spark's parallel processing."
    ]
  },
  {
    id: 1408,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company loads daily data into Amazon Redshift with an application that issues single-row INSERT statements, and the load takes several hours. The data originates as daily extract files from source systems. The company wants to make loading as fast as possible. Which approach should a solutions architect recommend?",
    options: [
      "Combine each day's extract into one large uncompressed file in S3 and load it with COPY.",
      "Send multi-row INSERT statements from many parallel database connections to the cluster.",
      "Add more compute nodes to the cluster.",
      "Split the extracts into many compressed files in S3 and load them with COPY."
    ],
    correct: [3],
    explanation: "The COPY command loads data from Amazon S3 in parallel across all slices of the cluster, and splitting the input into multiple compressed files lets every slice work at the same time. Loading one large file is tempting because it also uses COPY, but a single file cannot be read in parallel by all slices.",
    optionExplanations: [
      "A single file limits parallelism across slices, so the load is slower than with multiple files.",
      "Inserts still flow through the leader node and are much slower than a parallel bulk COPY.",
      "More nodes raise cost but do not fix the inefficiency of loading data one row at a time.",
      "Correct — COPY reads the files in parallel across all slices, which is far faster than row-by-row inserts."
    ]
  },
  {
    id: 1409,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs Linux applications on premises that use a ZFS-based NFS file server. The workload consists of small files and needs sub-millisecond latency with very high IOPS, and existing scripts rely on ZFS snapshot and clone capabilities. The company wants a fully managed AWS file service that requires the fewest changes. Which service should a solutions architect recommend?",
    options: [
      "Amazon FSx for OpenZFS accessed over NFS",
      "Amazon EFS with the General Purpose performance mode",
      "Amazon FSx for Lustre with a persistent SSD deployment",
      "Mountpoint for Amazon S3"
    ],
    correct: [0],
    explanation: "Amazon FSx for OpenZFS provides fully managed ZFS file systems accessed over NFS with sub-millisecond latency and native ZFS snapshots and clones. Amazon EFS is also managed NFS storage, but it does not offer ZFS snapshot and clone capabilities, so the existing scripts would have to change.",
    optionExplanations: [
      "Correct — it offers managed ZFS over NFS with sub-millisecond latency and native snapshots and clones.",
      "EFS does not provide ZFS snapshots and clones, so the scripts that rely on them would have to be rewritten.",
      "Lustre targets parallel HPC throughput and requires a Lustre client instead of NFS with ZFS features.",
      "S3 is object storage, so it lacks ZFS snapshots and full file system semantics for small-file workloads."
    ]
  },
  {
    id: 1410,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "Every night a company must process millions of images stored in Amazon S3. Each image goes through a multi-step workflow of resizing, label detection, and metadata storage, implemented as AWS Lambda functions, and each step needs its own retries and failure tracking. The company wants massive parallelism with the LEAST operational overhead. Which solution meets these requirements?",
    options: [
      "Use an AWS Step Functions Inline Map state inside one workflow to iterate over the objects.",
      "Use a Step Functions Distributed Map state with a child workflow per object.",
      "Use S3 Batch Operations to invoke a single Lambda function for each of the image objects.",
      "Process all images in a loop in one Lambda function."
    ],
    correct: [1],
    explanation: "A Step Functions Distributed Map state can iterate over millions of S3 objects and run a child workflow for each, with high concurrency and per-step retries and error handling. An Inline Map state supports the same workflow logic, but its concurrency and execution history limits make it unsuitable for millions of items in a single run.",
    optionExplanations: [
      "Inline Map has limited concurrency and execution history, so it cannot process millions of items in one run.",
      "Correct — Distributed Map scales to millions of objects with high parallelism and per-step retries in each child workflow.",
      "Batch Operations calls one function per object and does not orchestrate a multi-step workflow with per-step retries.",
      "A single function is limited by its maximum timeout and gives no parallelism or per-step retry handling."
    ]
  },
  {
    id: 1411,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company frequently creates Amazon EBS volumes from snapshots to launch database copies for testing. For a long time after each launch, the first queries are very slow because blocks are loaded from Amazon S3 the first time they are read. The testers need restored volumes to deliver their full provisioned performance immediately. Which solution meets these requirements?",
    options: [
      "Read every block of each new volume with a utility before starting the database.",
      "Create the volumes as io2 volumes with much higher provisioned IOPS than gp3.",
      "Enable EBS fast snapshot restore on the snapshots in the AZs used.",
      "Launch the database copies on instance types with higher dedicated EBS bandwidth."
    ],
    correct: [2],
    explanation: "EBS fast snapshot restore creates volumes that are fully initialized at creation, so they deliver their provisioned performance immediately without a first-read penalty. Reading every block after creation also initializes the volume, but it takes a long time on large volumes, so performance is not available immediately.",
    optionExplanations: [
      "This initializes the volume, but on large volumes it takes a long time, so performance is not immediate.",
      "Higher provisioned IOPS does not remove the latency of fetching blocks from S3 on first access.",
      "Correct — volumes created from these snapshots are fully initialized and deliver full performance right away.",
      "Instance bandwidth is not the bottleneck; the delay comes from lazy loading of blocks from the snapshot."
    ]
  },
  {
    id: 1412,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "Amazon EC2 instances in private subnets download several terabytes per day from Amazon S3 buckets in the same Region through a NAT gateway. The NAT gateway has become a throughput bottleneck, and its data processing charges are high. The instances must stay in private subnets. What should a solutions architect do?",
    options: [
      "Add NAT gateways in more Availability Zones and split the subnets' default routes between them.",
      "Move the instances to public subnets and give them public IP addresses to reach S3 directly.",
      "Enable S3 Transfer Acceleration on the buckets and download through the accelerated endpoint.",
      "Create a gateway VPC endpoint for Amazon S3 and add it to the private subnets' route tables."
    ],
    correct: [3],
    explanation: "A gateway VPC endpoint for S3 lets instances in private subnets reach S3 directly through a route table entry, bypassing the NAT gateway, so the bottleneck and its data processing charges disappear. Adding NAT gateways spreads the load, but each one still charges for every gigabyte processed.",
    optionExplanations: [
      "Load is spread, but every gigabyte still incurs NAT data processing charges and more gateways to manage.",
      "This violates the requirement to keep the instances in private subnets.",
      "Acceleration helps long-distance transfers, and the traffic would still flow through the NAT gateway.",
      "Correct — S3 traffic bypasses the NAT gateway entirely, removing the bottleneck and its processing charges."
    ]
  },
  {
    id: 1413,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A media company runs a video editing application whose artists are in Los Angeles. The application needs single-digit millisecond latency between the artists' workstations and its compute and storage tier, and the nearest AWS Region adds too much latency. The company does not want to buy, install, or manage its own hardware. Which solution meets these requirements?",
    options: [
      "Deploy the latency-sensitive tier in an AWS Local Zone in Los Angeles.",
      "Install an AWS Outposts rack in the company's studio and run the application tier on it.",
      "Deploy the application in an AWS Wavelength Zone on a telecommunications provider's network.",
      "Put Amazon CloudFront in front of the application."
    ],
    correct: [0],
    explanation: "AWS Local Zones place AWS-managed compute and storage in metropolitan areas such as Los Angeles, extending a parent Region and providing single-digit millisecond latency to nearby users. AWS Outposts also delivers low latency, but it is installed in the customer's own facility, which the company wants to avoid.",
    optionExplanations: [
      "Correct — Local Zones offer AWS-managed infrastructure close to the users for single-digit millisecond latency.",
      "Outposts must be installed and hosted in the customer's own facility, which the company wants to avoid.",
      "Wavelength targets 5G mobile devices on carrier networks, not workstations on an office network.",
      "Interactive editing traffic cannot be cached, so CloudFront would not provide the required latency."
    ]
  },
  {
    id: 1414,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A card issuer must process each transaction event with custom fraud-detection code within one second of arrival. A second application must independently read the same events for auditing, and after fixing a bug the team must be able to reprocess the last 24 hours of events. Which ingestion service meets these requirements?",
    options: [
      "Amazon Kinesis Data Streams with separate consumer applications",
      "Amazon Data Firehose delivering the events to the fraud-detection code",
      "An SNS topic fanning out to two SQS queues",
      "A single Amazon SQS standard queue polled by both of the applications"
    ],
    correct: [0],
    explanation: "Kinesis Data Streams lets multiple consumers read the same records independently with sub-second latency, and records stay in the stream for the retention period so they can be replayed. An SNS topic fanned out to SQS queues delivers events quickly to both applications, but once messages are consumed and deleted they cannot be replayed.",
    optionExplanations: [
      "Correct — multiple independent consumers, sub-second latency, and replay within the retention period.",
      "Firehose buffers records before delivery and cannot replay data to multiple independent consumers.",
      "Fan-out works, but consumed messages are deleted, so the last 24 hours cannot be reprocessed.",
      "Each message is consumed by only one application, and processed messages cannot be replayed."
    ]
  },
  {
    id: 1415,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "Analysts run nightly full-table scans on a production Amazon DynamoDB table to feed an analytics system. The scans consume large amounts of read capacity, and the customer-facing application is throttled while they run. The analysts need a full copy of the data in Amazon S3 for querying with Amazon Athena, without affecting the table's performance. Which solution meets these requirements?",
    options: [
      "Switch to a parallel scan with more segments so that the nightly scan finishes sooner.",
      "Enable point-in-time recovery and use the DynamoDB export to S3 feature each night.",
      "Create a global secondary index for the analysts and scan the index instead of the table.",
      "Route the analysts' scans through a DynamoDB Accelerator cluster in front of the table."
    ],
    correct: [1],
    explanation: "DynamoDB export to S3 uses point-in-time recovery data, so it does not consume the table's read capacity and produces a full copy in S3 that Athena can query. A parallel scan finishes faster, but it consumes the same read capacity in a shorter time, which makes the throttling worse.",
    optionExplanations: [
      "A parallel scan uses the same read capacity in less time, which increases throttling during the run.",
      "Correct — exports read from backup data, so no read capacity is consumed and the application is unaffected.",
      "The index duplicates writes and scanning it still consumes capacity, while it does not provide an S3 copy.",
      "DAX is built for repeated item and query reads; a full scan still reads the table's capacity."
    ]
  },
  {
    id: 1416,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "An application runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. It keeps user sessions in instance memory and relies on sticky sessions. During scale-out, new instances receive little traffic while existing instances stay overloaded, and during scale-in users are logged out. Which solution will improve load distribution and keep users signed in?",
    options: [
      "Switch the target group to the least outstanding requests algorithm and keep sticky sessions.",
      "Increase the stickiness duration so that users stay on the same instance for longer.",
      "Store session state in Amazon ElastiCache and disable sticky sessions on the target group.",
      "Replace the Application Load Balancer with a Network Load Balancer that has client IP affinity."
    ],
    correct: [2],
    explanation: "Moving session state to Amazon ElastiCache makes every instance stateless, so stickiness can be disabled and the load balancer can spread requests evenly, and terminating an instance no longer loses sessions. Changing the routing algorithm is tempting, but while stickiness is enabled existing users stay bound to their original instances.",
    optionExplanations: [
      "Stickiness keeps existing users bound to their instances, so load stays uneven and sessions are still lost on scale-in.",
      "Longer stickiness makes the imbalance worse and does not protect sessions when instances terminate.",
      "Correct — stateless instances let the ALB balance requests evenly, and sessions survive instance termination.",
      "Affinity still pins users to instances, and sessions held in memory are still lost on scale-in."
    ]
  },
  {
    id: 1417,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A ticketing application stores purchases in an Amazon DynamoDB table that uses provisioned capacity with auto scaling. Ticket sales open at unannounced times, and write traffic jumps from almost nothing to many times the usual level within seconds. Writes are throttled for several minutes until auto scaling catches up. Which solution will handle these sudden spikes with the LEAST operational overhead?",
    options: [
      "Lower the target utilization of the auto scaling policy to keep more spare write capacity.",
      "Place a DynamoDB Accelerator cluster in front of the table to absorb the purchase writes.",
      "Add a global secondary index so that the purchase writes are spread across more partitions.",
      "Switch the table to on-demand capacity mode so that it absorbs the sudden write spikes."
    ],
    correct: [3],
    explanation: "On-demand capacity mode serves requests without capacity planning and instantly accommodates sudden increases in traffic up to well above previous peaks, so the write spikes are absorbed without waiting for scaling actions. Lowering the auto scaling target utilization adds headroom, but auto scaling still reacts over minutes, so large sudden spikes would still be throttled.",
    optionExplanations: [
      "Auto scaling still needs minutes to react, so very sudden spikes are throttled despite extra headroom.",
      "DAX accelerates reads; writes still go to the table and are throttled the same way.",
      "A GSI adds write work instead of capacity and does not prevent throttling on the base table.",
      "Correct — on-demand mode accommodates sudden traffic increases without capacity planning or scaling delays."
    ]
  },
  {
    id: 1418,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A startup is launching an application that needs a Redis OSS-compatible cache. Its traffic is unknown and expected to vary widely, and the team does not want to choose node types, plan shards, or manage scaling. The cache must scale automatically to match demand. Which solution meets these requirements with the LEAST operational overhead?",
    options: [
      "Create an Amazon ElastiCache Serverless cache that uses the Redis OSS engine.",
      "Create a node-based ElastiCache cluster with the largest node type to cover peak demand.",
      "Run Redis OSS on Amazon EC2 instances in an Auto Scaling group behind a load balancer.",
      "Use Amazon DynamoDB with a DynamoDB Accelerator cluster as the application's cache."
    ],
    correct: [0],
    explanation: "Amazon ElastiCache Serverless provides a Redis OSS-compatible cache that scales capacity automatically with demand, without selecting node types or managing shards. A node-based ElastiCache cluster sized for peak would work, but it requires capacity planning and pays for unused capacity during quiet periods.",
    optionExplanations: [
      "Correct — the cache scales automatically with no node types or shards to manage.",
      "This requires capacity planning and pays for idle capacity whenever traffic is low.",
      "Self-managing Redis clustering and scaling on EC2 creates significant operational overhead.",
      "DAX does not provide the Redis OSS API that the application requires."
    ]
  },
  {
    id: 1419,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A company runs a reporting service on burstable T3 instances in standard credit mode. The service now runs CPU-intensive jobs continuously throughout the day, so the instances exhaust their CPU credits and drop to baseline performance. The company wants consistently high CPU performance at the lowest cost. What should a solutions architect do?",
    options: [
      "Enable unlimited credit mode on the existing T3 instances to avoid the throttling.",
      "Move the service to compute optimized C instances sized for the sustained CPU load.",
      "Resize to a larger burstable T3 instance size that earns CPU credits at a higher rate.",
      "Move the service to memory optimized R instances with more memory per vCPU."
    ],
    correct: [1],
    explanation: "Compute optimized C instances deliver full sustained CPU performance without credits, which is the most cost-effective fit for a workload that runs at high CPU all day. Unlimited mode keeps T3 instances fast, but sustained use above baseline incurs surplus credit charges that make it more expensive than a fixed-performance instance.",
    optionExplanations: [
      "Sustained high CPU in unlimited mode incurs surplus charges, which costs more than fixed-performance instances.",
      "Correct — fixed-performance compute optimized instances suit continuous CPU-heavy work at the lowest cost.",
      "A larger T3 still depends on credits and would deplete them under continuous high CPU.",
      "The workload is CPU-bound, so extra memory adds cost without fixing the CPU limitation."
    ]
  },
  {
    id: 1420,
    domain: "Design High-Performing Architectures",
    type: "single",
    question: "A research institute transfers tens of terabytes of instrument data from its data center to Amazon S3 every day over a Site-to-Site VPN on the internet. Throughput fluctuates widely, and transfers often miss their processing window. The institute needs consistent, high-bandwidth, predictable network performance for these daily transfers. Which solution meets these requirements?",
    options: [
      "Convert the existing VPN connection to an accelerated Site-to-Site VPN connection.",
      "Ship the daily data on AWS Snowball Edge devices instead of using the network.",
      "Provision an AWS Direct Connect connection with a public VIF to reach Amazon S3.",
      "Enable S3 Transfer Acceleration on the bucket and upload the files through the accelerated endpoint."
    ],
    correct: [2],
    explanation: "AWS Direct Connect provides a dedicated private connection with consistent bandwidth and latency, and a public virtual interface gives access to Amazon S3 public endpoints for the daily transfers. Accelerated VPN improves the path by entering the AWS network at a nearby edge location, but it still depends on the internet and per-tunnel throughput, so performance remains less predictable.",
    optionExplanations: [
      "It still relies on the internet and on per-tunnel throughput, so performance remains less predictable.",
      "Shipping devices every day is operationally impractical and adds days of delay to each dataset.",
      "Correct — a dedicated connection gives consistent high bandwidth and predictable latency for daily bulk transfers.",
      "Traffic still crosses the public internet to an edge location, so throughput can still fluctuate."
    ]
  },
  {
    id: 1421,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company is migrating 40 Windows Server VMs that run Microsoft SQL Server Enterprise to Amazon EC2. It owns SQL Server licenses that are licensed per physical core, without Software Assurance or License Mobility, so the licenses must stay on physical servers dedicated to the company. The company wants to reuse these licenses and must report socket and core counts to auditors. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "Launch the instances on EC2 Dedicated Hosts and track license usage with AWS License Manager.",
      "Launch the instances as Dedicated Instances and bring the existing SQL Server licenses.",
      "Launch License Included SQL Server instances on shared tenancy with a 3-year Savings Plan.",
      "Migrate the databases to Amazon RDS for SQL Server and bring the existing licenses to the DB instances."
    ],
    correct: [0],
    explanation: "Licenses without License Mobility that are tied to physical cores can be brought to AWS only on hardware dedicated to the customer with socket and core visibility, which EC2 Dedicated Hosts provide, and License Manager simplifies audit reporting. Dedicated Instances are the tempting distractor, but they do not expose the physical host's sockets and cores, so they cannot be used for this kind of BYOL.",
    optionExplanations: [
      "Correct — Dedicated Hosts give a physical server dedicated to the company with visibility of sockets and cores, which is what per-core BYOL without License Mobility requires; License Manager tracks consumption for audits.",
      "Dedicated Instances run on dedicated hardware but do not expose sockets and physical cores or provide host affinity, so they do not satisfy these license terms or the reporting requirement.",
      "License Included instances pay for new SQL Server licenses in the hourly rate, so the licenses the company already owns would be wasted.",
      "Amazon RDS for SQL Server uses License Included pricing, and licenses without License Mobility cannot be moved to shared AWS infrastructure in any case."
    ]
  },
  {
    id: 1422,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a 3 TB Oracle Database Enterprise Edition on premises for an in-house order system. Oracle licensing and support are the largest IT expense, and the renewal is due in 9 months. The application uses standard SQL and a moderate number of PL/SQL stored procedures, and after migration the database must be highly available with minimal administration. Which solution will reduce costs the MOST over the long term?",
    options: [
      "Rehost the database on Amazon EC2 instances and bring the existing Oracle licenses.",
      "Convert the schema with AWS SCT and migrate the data with AWS DMS to Aurora PostgreSQL.",
      "Migrate to Amazon RDS for Oracle with License Included pricing in a Multi-AZ deployment.",
      "Migrate to Amazon RDS Custom for Oracle so that the existing licenses can be reused."
    ],
    correct: [1],
    explanation: "Licensing is the dominant cost, so the biggest long-term saving comes from moving to an open-source-compatible engine; AWS SCT and AWS DMS make a heterogeneous migration of standard SQL and moderate PL/SQL feasible, and Aurora provides managed Multi-AZ availability. RDS for Oracle License Included reduces administration but still charges for Oracle licenses in every hour of use.",
    optionExplanations: [
      "This keeps the Oracle license and support costs and adds the work of managing the database and its high availability on EC2.",
      "Correct — Converting to Aurora PostgreSQL-compatible removes Oracle licensing entirely, SCT converts most PL/SQL code automatically, and Aurora provides managed high availability.",
      "The Oracle license cost is still paid through the hourly rate, so the largest cost driver remains.",
      "RDS Custom keeps the Oracle license and support costs and requires more administration than a fully managed engine."
    ]
  },
  {
    id: 1423,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a customer-facing application in us-east-1 on EC2 instances in an Auto Scaling group with an Amazon Aurora MySQL database. For disaster recovery, it keeps a full-size copy of the application fleet running in us-west-2 at all times and replicates the database there. The business has agreed on an RTO of 4 hours and an RPO of 15 minutes for a Regional outage. Which DR approach will meet these requirements MOST cost-effectively?",
    options: [
      "Keep the full-size standby fleet and cover the DR Region's instances with a Savings Plan.",
      "Copy daily Aurora backups to us-west-2 with AWS Backup and remove all other DR resources.",
      "Keep replicating the database to us-west-2 and launch the app tier from templates on failover.",
      "Run active-active in both Regions with Route 53 latency-based routing to put the DR capacity to use."
    ],
    correct: [2],
    explanation: "With a 4-hour RTO, the application tier does not need to run in the DR Region; it can be launched from AMIs and templates during failover, while continuous database replication keeps the RPO within 15 minutes (pilot light). Backup and restore would be cheaper still but cannot meet a 15-minute RPO with daily copies.",
    optionExplanations: [
      "A discount on an idle full-size fleet still pays for capacity that a 4-hour RTO does not require.",
      "Daily backup copies allow up to 24 hours of data loss, which violates the 15-minute RPO.",
      "Correct — This pilot light approach keeps continuous database replication for the 15-minute RPO and provisions the application tier from AMIs and infrastructure as code within the 4-hour RTO, avoiding an idle fleet.",
      "Active-active is the most expensive strategy and requires multi-writer data design; it far exceeds a 4-hour RTO."
    ]
  },
  {
    id: 1424,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company exposes a public API through an Amazon API Gateway REST API that invokes AWS Lambda functions and handles billions of requests per month. The API uses only JWT authorization from an OIDC provider, Lambda proxy integrations and CORS. It does not use API keys, usage plans, request validation or AWS WAF. The company wants to reduce API Gateway costs without changing the backend. Which solution will meet these requirements?",
    options: [
      "Enable API Gateway caching on the REST API stage to reduce the number of billed requests.",
      "Replace API Gateway with a Network Load Balancer that sends requests to the Lambda functions directly.",
      "Create a private REST API and expose it to clients through an interface VPC endpoint.",
      "Migrate the API to an API Gateway HTTP API with a JWT authorizer and Lambda proxy integrations."
    ],
    correct: [3],
    explanation: "HTTP APIs cost much less per request than REST APIs and support every feature this API uses: JWT authorizers, Lambda proxy integrations and CORS. The REST-only features that would justify the higher price (API keys, usage plans, request validation, AWS WAF) are not in use; caching does not reduce billed requests.",
    optionExplanations: [
      "Cached requests are still billed as API calls, and the cache adds an hourly charge, so this does not lower the per-request cost.",
      "Network Load Balancers cannot use Lambda functions as targets and provide no JWT authorization.",
      "A private API is reachable only from VPCs, so public clients could no longer call it, and REST API pricing still applies.",
      "Correct — HTTP APIs natively support JWT authorizers, Lambda proxy integrations and CORS at a significantly lower request price than REST APIs."
    ]
  },
  {
    id: 1425,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company runs an Amazon Redshift cluster of DC2 nodes. The team keeps adding nodes only because the cluster is running out of storage, while CPU utilization stays low. About 80% of the data is more than a year old and is queried a few times per quarter, but analysts must still be able to query it with SQL together with recent data. Which combination of actions will reduce costs the MOST? (Select TWO)",
    options: [
      "Migrate the cluster to RA3 nodes so that storage scales in managed storage independently of compute.",
      "Enable concurrency scaling so that peak queries run on additional transient clusters.",
      "Move the historical data to an Amazon RDS for PostgreSQL instance with gp3 storage.",
      "Unload the historical data to Amazon S3 in Parquet format and query it with Redshift Spectrum.",
      "Purchase 3-year reserved nodes for the current number of DC2 nodes."
    ],
    correct: [0, 3],
    explanation: "The cluster is storage-bound, so decoupling storage from compute (RA3 with managed storage) and moving rarely queried data to S3 (queried through Redshift Spectrum) both remove the need for extra nodes while keeping SQL access across all data. Reserved nodes would only discount an architecture that is the wrong size.",
    optionExplanations: [
      "Correct — RA3 nodes separate compute from Redshift Managed Storage, so the cluster can be sized for its low compute needs instead of for storage.",
      "Concurrency scaling adds compute for query bursts; it does nothing for a storage-bound cluster and can add cost.",
      "This adds another database to run and prevents analysts from querying old and recent data together in Redshift SQL.",
      "Correct — Cold data stored in S3 is far cheaper than cluster storage, and Redshift Spectrum lets analysts join it with recent data in the same SQL queries.",
      "Reserving would lock in a cluster that is oversized for compute only to hold storage, instead of removing the excess nodes."
    ]
  },
  {
    id: 1426,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company uses AWS Organizations and gives each developer a sandbox account in a Sandbox OU. Recently, developers launched large GPU instances in several Regions that the company does not use, and some ran unnoticed for weeks. The company wants to prevent this centrally for all current and future sandbox accounts, while still allowing small instance types in approved Regions. Which combination of actions will meet these requirements? (Select TWO)",
    options: [
      "Create an AWS Budgets alert in each sandbox account that emails the developer when spending is high.",
      "Attach an SCP to the Sandbox OU that denies actions outside the approved Regions.",
      "Attach an SCP to the Sandbox OU that denies launching EC2 instance types not on an allowed list.",
      "Create an IAM permissions boundary in the management account that limits instance types.",
      "Enable AWS Trusted Advisor checks in each account to flag idle and expensive instances."
    ],
    correct: [1, 2],
    explanation: "Service control policies attached to an OU are the central, preventive control that is inherited by all accounts in it, including new ones. One SCP restricts Regions and another restricts allowed instance types; Budgets and Trusted Advisor only detect spending after it has occurred.",
    optionExplanations: [
      "Budget alerts only notify after money is spent and must be set up per account, so they do not prevent the launches.",
      "Correct — An SCP on the OU applies automatically to every current and future sandbox account and blocks resource creation in unapproved Regions.",
      "Correct — This preventive guardrail blocks expensive instance types such as GPU instances in all sandbox accounts while allowing approved small types.",
      "Permissions boundaries apply only to IAM principals in the account where they are attached, so a boundary in the management account does not restrict member accounts.",
      "Trusted Advisor is detective and per account; it reports issues after the instances are already running."
    ]
  },
  {
    id: 1427,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company has 120 accounts in AWS Organizations. Last quarter, a misconfigured job in one account generated a spike in data transfer charges that was noticed only when the monthly invoice arrived. Spending patterns vary widely between accounts and services, so maintaining fixed thresholds for each one is impractical. The company wants to be alerted within a day of unusual spending with the LEAST operational overhead. Which solution will meet these requirements?",
    options: [
      "Configure AWS Cost Anomaly Detection monitors for the linked accounts with alert subscriptions.",
      "Create AWS Budgets with fixed monthly thresholds for every combination of account and service in use.",
      "Export the Cost and Usage Report to Amazon S3 and build daily anomaly queries in Athena.",
      "Create Amazon CloudWatch billing alarms on the estimated charges metric for the organization."
    ],
    correct: [0],
    explanation: "AWS Cost Anomaly Detection learns spending baselines per account, service or cost category and sends alerts when spending deviates, which suits widely varying patterns with no thresholds to maintain. AWS Budgets is the tempting choice, but it requires a fixed threshold for each scope.",
    optionExplanations: [
      "Correct — Cost Anomaly Detection uses machine learning to learn each account's and service's normal spending and alerts on unusual spikes without manually set thresholds.",
      "Hundreds of fixed thresholds would have to be maintained manually, which the company has already found impractical.",
      "Building and maintaining custom anomaly logic is far more operational effort than a managed service.",
      "Billing alarms use static thresholds on total charges and cannot detect an unusual pattern in one account or service."
    ]
  },
  {
    id: 1428,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A QA team needs a fresh copy of a 10 TB production Amazon Aurora PostgreSQL-compatible database every morning to run destructive tests for a few hours. Today, a script restores the latest snapshot into a new cluster, which takes hours and duplicates the full storage while the copy exists. The tests modify only a small fraction of the data. Which solution will reduce cost and preparation time the MOST?",
    options: [
      "Add an Aurora Replica to the production cluster and run the QA tests against it.",
      "Create an Aurora clone of the production cluster each morning and delete it after testing.",
      "Export a daily snapshot to Amazon S3 and load it into a new cluster for each test run.",
      "Use AWS DMS to replicate production continuously into a permanent, separately provisioned QA cluster."
    ],
    correct: [1],
    explanation: "Aurora fast database cloning creates a writable copy in minutes that shares storage pages with the source, so storage is only consumed for changed data — ideal for short-lived destructive tests. An Aurora Replica is quick to create but is read-only and part of the production cluster.",
    optionExplanations: [
      "Aurora Replicas are read-only and share production storage, so destructive tests cannot run on them and could affect production performance.",
      "Correct — Aurora cloning uses copy-on-write, so the clone is created quickly and only the pages the tests change consume additional storage.",
      "Exporting and reloading 10 TB every day is slower than a snapshot restore and still creates a full copy of the data.",
      "A permanent full-size cluster costs more, and destructive tests would conflict with the ongoing replication."
    ]
  },
  {
    id: 1429,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A security team enables VPC Flow Logs for 200 VPCs and publishes them to Amazon CloudWatch Logs. The flow logs are used only for occasional investigations, run as SQL queries over a few days or weeks of data, and must be kept for 1 year. CloudWatch Logs ingestion and storage for the flow logs have become a major cost. Which solution is the MOST cost-effective?",
    options: [
      "Keep publishing to CloudWatch Logs and set a 1-year retention period on all of the flow log groups.",
      "Keep publishing to CloudWatch Logs and export the log groups to Amazon S3 every day.",
      "Publish the flow logs directly to Amazon S3 in Parquet format and query them with Athena.",
      "Send the flow logs to Amazon OpenSearch Service and keep older data in UltraWarm."
    ],
    correct: [2],
    explanation: "VPC Flow Logs can be published directly to S3 in Apache Parquet with Hive-compatible hourly partitions, which eliminates CloudWatch Logs ingestion and makes Athena queries cheap and fast. Setting retention in CloudWatch Logs helps storage but leaves the ingestion charges untouched.",
    optionExplanations: [
      "Retention limits storage growth, but CloudWatch Logs ingestion charges, the main cost, remain.",
      "The logs are still ingested into CloudWatch Logs first, so the ingestion charges remain and an export process is added.",
      "Correct — Delivering flow logs straight to S3 avoids CloudWatch Logs ingestion, Parquet with partitions reduces storage and query scan costs, and Athena charges only when investigations run.",
      "A continuously running OpenSearch domain is expensive for data that is queried only occasionally."
    ]
  },
  {
    id: 1430,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An application emits large volumes of verbose debug logs to Amazon CloudWatch Logs. Engineers use these logs only to troubleshoot incidents with CloudWatch Logs Insights queries; no metric filters, subscription filters or alarms depend on them. Ingestion charges for these logs are the largest part of the CloudWatch bill, and the logs must stay searchable in CloudWatch. Which solution will reduce costs with the LEAST effort?",
    options: [
      "Stream the debug logs to Amazon S3 through Data Firehose and query them with Athena.",
      "Reduce the retention period of the debug log groups from 30 days to 7 days.",
      "Publish the debug output as custom metrics in embedded metric format instead of logs.",
      "Send the debug logs to new log groups that use the Infrequent Access log class."
    ],
    correct: [3],
    explanation: "The CloudWatch Logs Infrequent Access log class is designed for logs that are kept for ad-hoc querying and forensics: ingestion is cheaper and Logs Insights still works. Shortening retention is the tempting choice, but it does not reduce the ingestion charges that dominate the bill.",
    optionExplanations: [
      "The logs would no longer be searchable in CloudWatch, and the team would have to build a new delivery and query setup.",
      "Retention affects storage charges only, while ingestion is the dominant cost here.",
      "Metrics cannot replace the detailed log lines needed for troubleshooting, and high-cardinality custom metrics add their own cost.",
      "Correct — The Infrequent Access log class has a lower ingestion price and still supports Logs Insights queries; it lacks features such as metric filters that these logs do not use."
    ]
  },
  {
    id: 1431,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A gaming company stores player profiles in an Amazon DynamoDB table in provisioned capacity mode. During tournaments, a few thousand popular profiles are read millions of times per minute, and the team keeps raising read capacity to avoid throttling, which is expensive. Reads can be eventually consistent, and the application must keep using the DynamoDB API with minimal code changes. Which solution is the MOST cost-effective?",
    options: [
      "Add a DynamoDB Accelerator (DAX) cluster in front of the table to serve repeated reads.",
      "Switch the table to on-demand capacity mode so that reads scale automatically.",
      "Create global secondary indexes to spread the reads of popular profiles across partitions.",
      "Add an Amazon ElastiCache cluster and rewrite data access to use cache-aside logic."
    ],
    correct: [0],
    explanation: "DAX is a write-through, in-memory cache that uses the same DynamoDB API, so repeated reads of hot items are served without consuming table read capacity and with minimal code changes. ElastiCache could also absorb the reads but requires custom cache-aside code.",
    optionExplanations: [
      "Correct — DAX is API-compatible with DynamoDB and serves repeated eventually consistent reads from memory, so the table no longer needs read capacity for the hot items.",
      "On-demand still charges for every read request, which is more expensive than provisioned capacity at this sustained volume.",
      "Indexes add storage and write costs and do not reduce the number of reads of the same hot items.",
      "Caching would work, but it requires rewriting the data access layer, unlike DAX, which uses the DynamoDB API."
    ]
  },
  {
    id: 1432,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company plans to migrate 600 on-premises VMware VMs to AWS and needs a business case for management. Many VMs were provisioned for peak loads years ago and are lightly used. Management wants a projected AWS cost based on measured utilization of the servers, with right-sized instance recommendations and licensing options, before any migration work starts. Which solution will meet these requirements with the LEAST effort?",
    options: [
      "Map each VM's allocated vCPUs and memory to an equivalent EC2 instance in AWS Pricing Calculator.",
      "Use AWS Migration Evaluator to collect utilization data and produce a right-sized assessment.",
      "Migrate a sample of servers with AWS Application Migration Service and extrapolate their costs.",
      "Run AWS Compute Optimizer against the on-premises servers to get rightsizing recommendations."
    ],
    correct: [1],
    explanation: "AWS Migration Evaluator is built for pre-migration business cases: it uses actual utilization from on-premises servers to recommend right-sized instances and estimate cost, including licensing scenarios such as BYOL. Compute Optimizer gives similar recommendations but only for workloads already in AWS.",
    optionExplanations: [
      "Allocated resources overstate the needs of lightly used VMs, and mapping 600 VMs manually takes significant effort.",
      "Correct — Migration Evaluator collects on-premises utilization data and produces a business case with right-sized EC2 recommendations and licensing options.",
      "This requires migration work before approval, and a sample does not reflect the utilization of all 600 VMs.",
      "Compute Optimizer analyzes only resources already running in AWS, not on-premises servers."
    ]
  },
  {
    id: 1433,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a self-managed Jenkins build farm on six large On-Demand EC2 instances that run 24/7. Builds occur in bursts during working hours, the instances sit idle most nights and weekends, and engineers spend time patching the build servers. The company wants to reduce cost and maintenance while keeping its existing containerized build scripts. Which solution will meet these requirements?",
    options: [
      "Purchase an EC2 Instance Savings Plan that covers the six build instances for 3 years.",
      "Consolidate the build farm onto fewer, larger On-Demand instances that keep running continuously.",
      "Run the builds in AWS CodeBuild so that compute is billed only for the minutes builds run.",
      "Run the Jenkins agents as Amazon EKS pods on a managed node group sized for peak load."
    ],
    correct: [2],
    explanation: "Bursty build workloads fit a pay-per-use managed service: AWS CodeBuild runs builds in container images and bills only for build minutes, so idle time and patching disappear. A Savings Plan lowers the rate but still pays for every idle hour.",
    optionExplanations: [
      "This lowers the hourly rate but keeps paying for idle instances, and the servers still need patching.",
      "The consolidated instances would still be idle at night and on weekends and would still require patching.",
      "Correct — CodeBuild is a managed build service that runs builds in containers and charges per build minute, eliminating idle capacity and server patching.",
      "A node group sized for peak load is idle most of the time and adds cluster management."
    ]
  },
  {
    id: 1434,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs dozens of microservices on an Amazon EKS cluster that uses managed node groups with a fixed set of large instance types. Nodes often run at low utilization because pods are spread thinly across them. Most services are stateless and tolerate interruption. The company wants to reduce compute costs with the LEAST ongoing manual effort. Which solution will meet these requirements?",
    options: [
      "Review node utilization every week and manually resize the managed node groups.",
      "Enable the Kubernetes Horizontal Pod Autoscaler for every deployment in the cluster.",
      "Move every microservice to AWS Fargate profiles so that there are no worker nodes left to manage.",
      "Use Karpenter with consolidation enabled and allow diverse instance types, including Spot."
    ],
    correct: [3],
    explanation: "Karpenter provisions nodes that fit pending pods from a broad set of instance types, continuously consolidates underutilized nodes and can use Spot for interruption-tolerant workloads, all without manual tuning. The Horizontal Pod Autoscaler scales pods, not the efficiency of the underlying nodes.",
    optionExplanations: [
      "Manual weekly resizing requires ongoing effort and reacts slowly to changing pod demand.",
      "The Horizontal Pod Autoscaler changes the number of pods but does not repack pods onto fewer or cheaper nodes.",
      "Fargate on EKS charges per pod at a premium and does not support Spot for EKS, so steady microservices can cost more.",
      "Correct — Karpenter launches right-sized nodes, consolidates pods onto fewer nodes and can use Spot capacity for interruption-tolerant pods automatically."
    ]
  },
  {
    id: 1435,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company uses Amazon FSx for Windows File Server with SSD storage in a Multi-AZ deployment for the home directories of 3,000 employees. The data is mostly office documents with many duplicate copies, access is light, and storage capacity is the main cost driver. The file system must remain Multi-AZ and keep SMB access with Active Directory integration. Which solution is the MOST cost-effective?",
    options: [
      "Move the data to a new Multi-AZ file system with HDD storage and enable data deduplication.",
      "Migrate the home directories to Amazon S3 and give users access through the S3 console.",
      "Change the file system to a Single-AZ deployment and keep SSD storage.",
      "Migrate the home directories to Amazon EFS and use lifecycle management to move them to EFS Infrequent Access."
    ],
    correct: [0],
    explanation: "For light, capacity-driven workloads FSx for Windows File Server HDD storage is the lower-cost option, and data deduplication typically cuts the space used by general-purpose file shares significantly. Single-AZ would also lower cost but violates the stated availability requirement.",
    optionExplanations: [
      "Correct — HDD storage is much cheaper per GB and suits light workloads, and data deduplication removes the duplicate copies, while Multi-AZ, SMB and AD integration are kept.",
      "S3 does not provide SMB file shares with Active Directory permissions for home directories.",
      "This violates the requirement to remain Multi-AZ, and SSD storage remains the costly component.",
      "Amazon EFS provides NFS access and does not support SMB with Active Directory integration for Windows clients."
    ]
  },
  {
    id: 1436,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A research team runs a large HPC simulation once a month over a weekend. The input dataset is stored in Amazon S3, the job needs a high-throughput shared POSIX file system for hundreds of compute nodes, and results are written back to S3 at the end. Today, a persistent file system holding a full copy of the data runs all month. Which solution is the MOST cost-effective?",
    options: [
      "Use an Amazon EFS file system in Max I/O mode that is kept between monthly runs.",
      "Create an FSx for Lustre scratch file system linked to the bucket for each run, then delete it.",
      "Keep the persistent FSx for Lustre file system and lower its throughput between runs.",
      "Mount the bucket on every compute node with Mountpoint for Amazon S3 and perform all simulation I/O there."
    ],
    correct: [1],
    explanation: "FSx for Lustre scratch file systems are designed for short-term, high-throughput processing, and the S3 data repository link imports input data and exports results, so the file system can exist only for the duration of the job. A persistent file system bills for storage for the whole month even when idle.",
    optionExplanations: [
      "EFS keeps charging for the full dataset all month and does not deliver the throughput of Lustre for this HPC workload.",
      "Correct — A scratch Lustre file system linked to S3 loads the data for the run, exports results back to S3 and costs nothing once deleted after the weekend.",
      "Storage is still billed all month for a file system used only one weekend.",
      "Mountpoint for Amazon S3 does not provide full POSIX semantics such as in-place file modification, which shared HPC workloads require."
    ]
  },
  {
    id: 1437,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An application tier keeps a 2 TB local cache on each EC2 instance, stored on io2 Amazon EBS volumes with high provisioned IOPS. The cache is rebuilt automatically from Amazon S3 whenever an instance starts, so losing it only causes a short warm-up period. The instances run in an Auto Scaling group across two Availability Zones. Which change will reduce costs while keeping very low-latency cache access?",
    options: [
      "Replace the io2 volumes with st1 volumes of the same size to lower the storage price.",
      "Move the cache to a shared Amazon EFS file system mounted by all instances.",
      "Use an instance type with NVMe instance store volumes and keep the cache there.",
      "Keep the io2 volumes and take daily snapshots so that caches can be restored faster."
    ],
    correct: [2],
    explanation: "Data that can be regenerated does not need durable block storage: NVMe instance store provides very high IOPS and low latency at no additional charge beyond the instance. st1 volumes are cheaper per GB but are HDD-based and unsuitable for a random-access cache.",
    optionExplanations: [
      "Throughput Optimized HDD volumes have high latency for random I/O, which defeats the purpose of a low-latency cache.",
      "A network file system adds latency compared with local storage and still incurs storage charges.",
      "Correct — Instance store is included in the instance price and offers very low latency; its data loss on stop or failure is acceptable because the cache is rebuilt.",
      "Snapshots add cost and do not reduce the expensive provisioned IOPS charges."
    ]
  },
  {
    id: 1438,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs a line-of-business application on Amazon RDS for SQL Server Enterprise Edition (License Included) in a Multi-AZ deployment. A review shows that the database uses no Enterprise-only features and needs fewer cores and less memory than the Standard Edition limits. The company must keep Multi-AZ high availability and avoid application changes, and expects to run the database for 3 more years. Which solution is the MOST cost-effective?",
    options: [
      "Purchase 3-year Reserved Instances for the current Enterprise Edition DB instance.",
      "Migrate to Aurora PostgreSQL-compatible with Babelfish to remove SQL Server licensing.",
      "Move the database to EC2 Dedicated Hosts and license SQL Server Enterprise Edition per physical core.",
      "Move to RDS for SQL Server Standard Edition in Multi-AZ and buy Reserved Instances."
    ],
    correct: [3],
    explanation: "When no Enterprise-only features are used and resource needs fit within Standard Edition limits, moving to Standard Edition removes the large Enterprise license premium while RDS keeps Multi-AZ availability; Reserved Instances then discount the steady usage. Reserved Instances alone still pay for Enterprise licensing every hour.",
    optionExplanations: [
      "Reserved Instances discount the instance, but the much higher Enterprise Edition license cost included in the price remains.",
      "Babelfish requires compatibility testing and possible code changes, which conflicts with the requirement to avoid application changes.",
      "This keeps Enterprise licensing and adds the administration of self-managed SQL Server and its high availability.",
      "Correct — Standard Edition License Included costs much less than Enterprise, supports Multi-AZ on RDS, and Reserved Instances further reduce the steady 3-year cost."
    ]
  },
  {
    id: 1439,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company replicates an entire 2 PB S3 bucket to another Region with S3 Cross-Region Replication for disaster recovery and stores the replicas in S3 Standard. Only objects under the contracts/ prefix are business-critical and must be recoverable in the second Region; all other data can be regenerated. The replicas are read only during a disaster, when millisecond retrieval is still required. Which combination of actions will reduce costs the MOST while meeting these requirements? (Select TWO)",
    options: [
      "Replace Cross-Region Replication with Same-Region Replication into a second bucket.",
      "Enable S3 Transfer Acceleration on the source bucket to lower replication costs.",
      "Add a filter to the replication rule so that only the contracts/ prefix is replicated.",
      "Set the destination storage class of the replicas to S3 Glacier Deep Archive.",
      "Set the destination storage class of the replicas to S3 Glacier Instant Retrieval."
    ],
    correct: [2, 4],
    explanation: "Replication rules can be scoped by prefix or tag and can write replicas directly into a cheaper storage class. Replicating only contracts/ and storing replicas in S3 Glacier Instant Retrieval keeps millisecond access for the rarely read DR copy; Deep Archive would be cheaper but cannot meet the retrieval time.",
    optionExplanations: [
      "A copy in the same Region does not protect against a Regional disaster.",
      "Transfer Acceleration is for client uploads and downloads over long distances, adds charges and does not apply to replication.",
      "Correct — Replicating only the critical prefix removes inter-Region transfer and replica storage for data that can be regenerated.",
      "Deep Archive retrieval takes hours, which violates the millisecond retrieval requirement during a disaster.",
      "Correct — Glacier Instant Retrieval has much lower storage cost for rarely read data and still returns objects in milliseconds."
    ]
  },
  {
    id: 1440,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company connects 40 VPCs in one Region through an AWS Transit Gateway. Two of them, an analytics VPC and a data ingestion VPC, exchange hundreds of terabytes per month, and transit gateway data processing charges for this traffic dominate the networking bill. All other VPCs must keep their existing connectivity and centralized routing. Which solution is the MOST cost-effective?",
    options: [
      "Create a VPC peering connection between the two VPCs and route their mutual traffic over it.",
      "Create a second transit gateway dedicated to the traffic between the two VPCs.",
      "Replace the transit gateway with VPC peering connections between all 40 VPCs.",
      "Route the traffic between the two VPCs through an AWS Site-to-Site VPN connection."
    ],
    correct: [0],
    explanation: "Transit Gateway charges per GB processed, while VPC peering does not have a processing charge, so a targeted peering connection for the single high-volume pair is the cheapest option; the transit gateway keeps centralized routing for everything else. Replacing the transit gateway entirely would violate the routing requirement.",
    optionExplanations: [
      "Correct — VPC peering has no data processing charge, so moving only the heavy pair to peering removes most of the cost while the transit gateway still serves all other VPCs.",
      "Every transit gateway charges for attachments and data processing, so this does not remove the processing charges.",
      "A full mesh of hundreds of peering connections is hard to operate and gives up the centralized routing that must be kept.",
      "VPN connections add hourly charges, limit throughput and still send traffic through a gateway, so they are neither cheaper nor faster."
    ]
  },
  {
    id: 1441,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An application stores user session items in an Amazon DynamoDB table. Sessions expire after 24 hours, and a nightly job scans the entire table and deletes expired items, consuming large amounts of read and write capacity. Expired items do not need to be removed at an exact time, but they must never be returned to users. Which solution will reduce costs with the LEAST operational overhead?",
    options: [
      "Run the cleanup job hourly instead of nightly so that each run deletes fewer items.",
      "Enable DynamoDB TTL on an expiration attribute and filter out expired items when reading.",
      "Create a new table every day and drop the table that holds the previous day's sessions.",
      "Add a global secondary index on the expiration time so that the job can query instead of scan."
    ],
    correct: [1],
    explanation: "DynamoDB Time to Live removes expired items automatically at no write capacity cost; because deletion can be delayed, the application filters out items whose expiration time has passed. A GSI would make finding expired items cheaper but still pays for every delete and for the index itself.",
    optionExplanations: [
      "The total number of scans and deletes, and therefore the capacity consumed, stays the same or grows.",
      "Correct — TTL deletes expired items in the background without consuming write capacity, and a read-time filter covers items that are not yet deleted.",
      "Rotating tables adds operational complexity and breaks sessions that span midnight.",
      "The index adds write and storage costs, and the deletes still consume write capacity."
    ]
  },
  {
    id: 1442,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "Each night, a data team runs a Spark job that scans a 5 TB Amazon DynamoDB table in provisioned mode to build reports in Amazon S3. To avoid throttling the production application, the team raises read capacity for several hours every night, which has become expensive. The reports can use the data as of the previous night. Which solution will reduce costs with the LEAST impact on production?",
    options: [
      "Switch the table to on-demand capacity mode during the nightly scan window.",
      "Create a global table replica in another Region and run the scan against the replica.",
      "Use DynamoDB export to S3 from point-in-time recovery and query the exported data.",
      "Add a DAX cluster so that the nightly full scan is served from the cache."
    ],
    correct: [2],
    explanation: "DynamoDB export to S3 reads from point-in-time recovery backups, so it consumes no read capacity and has no performance impact on the table; Athena or Spark can then process the exported data in S3. On-demand mode avoids capacity planning but still bills every read of the full scan.",
    optionExplanations: [
      "On-demand still charges for every read of the 5 TB scan and shares the table with production traffic.",
      "A replica adds replicated write and storage costs and still consumes read capacity for the scan.",
      "Correct — Exports use point-in-time recovery data and consume no table read capacity, so production is unaffected and the scan capacity is no longer needed.",
      "A full table scan reads almost every item once, so a cache provides no benefit and adds cluster cost."
    ]
  },
  {
    id: 1443,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company ingests clickstream events into Amazon Kinesis Data Streams with provisioned shards. An AWS Lambda function reads the stream only to batch the records and write them to Amazon S3 for later querying; there are no other consumers, and a delivery delay of a few minutes is acceptable. The team spends time resharding the stream as traffic changes. Which solution will reduce cost and operational overhead the MOST?",
    options: [
      "Switch the data stream to on-demand capacity mode and keep the Lambda function.",
      "Replace the Lambda function with a fleet of EC2 consumers that use the Kinesis Client Library.",
      "Enable enhanced fan-out so that the Lambda function reads with dedicated throughput.",
      "Send the events to Amazon Data Firehose, which buffers and delivers them directly to S3."
    ],
    correct: [3],
    explanation: "When the only purpose of a stream is to land data in S3 with minutes of latency, Amazon Data Firehose does the buffering, batching and delivery itself, with no shards or consumer code to manage. On-demand Kinesis removes resharding but keeps paying for a stream plus a custom consumer.",
    optionExplanations: [
      "Resharding goes away, but the stream and the Lambda function are both still paid for and maintained.",
      "Running EC2 consumers adds servers to manage and does not remove the stream costs.",
      "Enhanced fan-out adds charges and is useful only for multiple consumers that need low latency.",
      "Correct — Firehose is fully managed, scales automatically, buffers and batches records into S3, and replaces both the stream and the Lambda function."
    ]
  },
  {
    id: 1444,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company uses AWS Step Functions Standard workflows to orchestrate an order-enrichment process that runs millions of times per day. Each execution completes in a few seconds, calls three Lambda functions, and is idempotent, so at-least-once execution is acceptable. State transition charges have become a large part of the bill. Which solution will reduce costs with the LEAST effort?",
    options: [
      "Change the state machines to Step Functions Express workflows.",
      "Replace the state machine with Amazon SQS queues between the three Lambda functions.",
      "Merge the three Lambda functions into one function and keep the Standard workflow.",
      "Increase the memory of the Lambda functions so that each execution completes faster."
    ],
    correct: [0],
    explanation: "Express workflows are designed for high-volume, short-duration event processing and are billed by executions, duration and memory rather than state transitions; their at-least-once semantics are acceptable for idempotent work. Merging functions reduces transitions somewhat but requires code changes and still uses the expensive pricing model.",
    optionExplanations: [
      "Correct — Express workflows are priced by number of executions and duration rather than per state transition, which suits high-volume, short, idempotent executions.",
      "This requires redesigning the orchestration and error handling, which is much more effort.",
      "Merging functions requires code changes and still pays per state transition.",
      "Standard workflows are billed per state transition, not duration, so faster functions do not lower these charges."
    ]
  },
  {
    id: 1445,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company's customer-facing AWS Lambda functions use provisioned concurrency set to the level required for the business-hours peak, 24 hours a day. Traffic is predictable: high from 8 AM to 8 PM and very low overnight, when occasional cold starts are acceptable. The company wants to avoid cold starts during business hours. Which solution will reduce costs the MOST while meeting this requirement?",
    options: [
      "Remove provisioned concurrency and rely on on-demand concurrency at all times.",
      "Use scheduled scaling actions to apply provisioned concurrency only during business hours.",
      "Set reserved concurrency on the functions equal to the business-hours peak level.",
      "Keep provisioned concurrency constant all day and purchase a Compute Savings Plan to cover its cost."
    ],
    correct: [1],
    explanation: "Provisioned concurrency can be managed with Application Auto Scaling, including scheduled actions, so it is applied only during the predictable business-hours peak. A Savings Plan lowers the price of the always-on configuration but still pays for capacity that is unnecessary overnight.",
    optionExplanations: [
      "Cold starts would occur during business hours, which violates the requirement.",
      "Correct — Scheduled scaling keeps functions pre-initialized during the predictable peak and removes the provisioned concurrency charges overnight.",
      "Reserved concurrency only caps and guarantees concurrency; it does not pre-initialize execution environments, so cold starts remain.",
      "A Savings Plan discounts the rate, but paying for unused provisioned concurrency for half of every day wastes far more."
    ]
  },
  {
    id: 1446,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "An e-commerce company runs its web tier on a fixed fleet of 30 EC2 instances sized for the daily evening peak. Traffic follows a consistent daily and weekly pattern, and new instances take about 10 minutes to boot and warm up, so purely reactive scaling causes slow responses at the start of the evening ramp. The company wants to reduce cost without degrading performance. Which solution will meet these requirements?",
    options: [
      "Use a simple scaling policy based on CPU utilization with a short cooldown period.",
      "Run the full fixed fleet on Spot Instances to lower the cost of the peak-sized fleet.",
      "Use predictive scaling in the Auto Scaling group together with a target tracking policy.",
      "Reduce the fleet to the size needed for average load and rely on the load balancer during peaks."
    ],
    correct: [2],
    explanation: "Predictive scaling uses historical load to schedule capacity in advance of cyclical demand, which solves the long warm-up problem, and target tracking reacts to unexpected changes; together they remove the cost of keeping peak capacity all day. Simple reactive scaling saves money but lags the morning and evening ramps.",
    optionExplanations: [
      "Reactive scaling starts launching instances only after load rises, so the 10-minute warm-up still causes slow responses.",
      "The fleet would still be sized for peak all day, and Spot interruptions could degrade a customer-facing web tier.",
      "Correct — Predictive scaling forecasts the recurring pattern and launches capacity ahead of the ramp, while target tracking handles deviations, so the fleet shrinks off-peak.",
      "A load balancer does not add capacity, so the undersized fleet would degrade performance at peak."
    ]
  },
  {
    id: 1447,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company has 60 VPCs across several accounts, all attached to a transit gateway in one Region. Each VPC has its own interface VPC endpoints for the same 12 AWS services in three Availability Zones, and endpoint hourly charges are now significant. Traffic to these services is moderate, and workloads must keep reaching them privately without traversing the internet. Which solution is the MOST cost-effective?",
    options: [
      "Delete the interface endpoints and send AWS service traffic through NAT gateways in each VPC.",
      "Replace all of the interface endpoints with gateway VPC endpoints in every VPC.",
      "Keep the endpoints in every VPC but deploy each endpoint in only one Availability Zone to cut hourly charges.",
      "Centralize the endpoints in a shared services VPC and share DNS through Route 53 private hosted zones."
    ],
    correct: [3],
    explanation: "Centralizing interface endpoints in a shared services VPC, reachable over the existing transit gateway and resolved through Route 53 private hosted zones associated with all VPCs, removes most of the duplicate hourly endpoint charges while keeping traffic private. With moderate traffic, the added transit gateway processing costs are smaller than the eliminated endpoint hours.",
    optionExplanations: [
      "Traffic would use public service endpoints over the internet path, violating the private access requirement, and NAT gateways add their own charges.",
      "Gateway endpoints exist only for Amazon S3 and DynamoDB, not for the other services.",
      "This still pays for 60 copies of every endpoint and makes access depend on a single Availability Zone.",
      "Correct — One set of endpoints reached through the transit gateway replaces 60 copies, and shared private hosted zones let every VPC resolve the service names to them."
    ]
  },
  {
    id: 1448,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company backs up its on-premises servers to a physical tape library with its existing backup software and ships the tapes to an offsite vault. Tape hardware maintenance and vault fees are high, backups older than 90 days are almost never restored, and restores of old backups can take up to 2 days. The company wants to keep its backup software and processes. Which solution is the MOST cost-effective?",
    options: [
      "Deploy Tape Gateway and archive older virtual tapes to S3 Glacier Deep Archive.",
      "Deploy S3 File Gateway and have the backup software write backup files to an SMB share.",
      "Replace the tape library with an on-premises disk array and replicate it to Amazon EBS.",
      "Ship backup data to Amazon S3 Standard every month on AWS Snowball Edge devices."
    ],
    correct: [0],
    explanation: "Tape Gateway replaces physical tapes with virtual tapes without changing the backup application, and archiving tapes to S3 Glacier Deep Archive gives the lowest storage cost with retrieval inside the accepted 2-day window. S3 File Gateway would also reach S3 but forces a change from tape-based to file-based backup processes.",
    optionExplanations: [
      "Correct — Tape Gateway presents a virtual tape library to the existing backup software, and archived tapes in Deep Archive are the lowest-cost storage with retrieval within the 2-day window.",
      "Switching from tape targets to file shares changes the backup jobs and processes, which the company wants to keep.",
      "This requires new hardware and expensive block storage for rarely restored backups.",
      "Monthly device shipments add ongoing effort, and S3 Standard is expensive for data that is almost never restored."
    ]
  },
  {
    id: 1449,
    domain: "Design Cost-Optimized Architectures",
    type: "single",
    question: "A company runs dozens of AWS Glue Spark ETL jobs each night to prepare data for reports that are needed the next afternoon. The jobs are not time-sensitive, and it is acceptable for them to start later or take longer when capacity is limited. The company wants to reduce Glue costs without rewriting the jobs. Which solution will meet these requirements?",
    options: [
      "Rewrite the jobs as Python shell jobs that run on a single small worker.",
      "Run the jobs with the AWS Glue Flex execution class instead of the standard one.",
      "Move the jobs to a long-running Amazon EMR cluster that uses On-Demand instances.",
      "Increase the number of workers for each job so that the jobs complete faster."
    ],
    correct: [1],
    explanation: "AWS Glue Flex is designed for non-urgent ETL such as nightly preparation and testing: jobs run on spare compute at a lower rate and may start later or run longer. Adding workers only shortens runs, while the billed capacity stays the same or increases.",
    optionExplanations: [
      "This requires rewriting the Spark jobs and may not handle the data volume.",
      "Correct — The Flex execution class runs non-urgent jobs on spare capacity at a lower price, accepting variable start and run times, with no code changes.",
      "A permanent cluster is idle most of the day and requires migration and cluster management.",
      "More workers increase the capacity billed per run, so total DPU-hours do not go down."
    ]
  },
  {
    id: 1450,
    domain: "Design Cost-Optimized Architectures",
    type: "multiple",
    question: "A company runs a web application on eight large On-Demand EC2 instances in two Availability Zones behind an Application Load Balancer, sized for a launch event two years ago. Average CPU utilization is now below 10%, traffic varies moderately during the day, sessions are stored in Amazon ElastiCache, and the application must remain available if one Availability Zone fails. Which combination of actions will reduce costs while meeting these requirements? (Select TWO)",
    options: [
      "Move all instances into a single Availability Zone to eliminate cross-AZ data transfer.",
      "Replace the fleet with smaller instance types in an Auto Scaling group that spans both AZs.",
      "Run the entire fleet on Spot Instances from a single instance pool to maximize the discount.",
      "Add a target tracking scaling policy with a minimum capacity that keeps instances in both AZs.",
      "Purchase 3-year Reserved Instances for the eight current instances."
    ],
    correct: [1, 3],
    explanation: "The fleet is heavily overprovisioned, so the largest savings come from smaller instances and letting an Auto Scaling group adjust capacity to demand, with a minimum that keeps instances running in both AZs. Reserved Instances on the current fleet would discount capacity the application does not need.",
    optionExplanations: [
      "A single AZ violates the requirement to remain available if an Availability Zone fails.",
      "Correct — Rightsizing to smaller instances matches the low utilization, and spanning both AZs preserves availability.",
      "A single Spot pool can be reclaimed all at once, which could take the whole application offline.",
      "Correct — Target tracking adds and removes instances as daily traffic changes, and the minimum keeps capacity in each AZ for availability.",
      "Reserving would lock in an oversized fleet for three years instead of removing the excess capacity."
    ]
  }
];
