// ===== AIF-C01 CHEAT SHEET DATA =====
// Same shape as CHEATSHEET in cheatsheet.js (rendered by renderCheatsheet()).

const AIF_CHEATSHEET = [
  {
    domain: "Fundamentals of AI and ML",
    icon: "🧠",
    color: "#0073BB",
    sections: [
      {
        title: "AI vs ML vs Deep Learning vs GenAI vs Agentic AI",
        items: [
          "AI — umbrella term: machines performing tasks that normally need human intelligence",
          "ML — subset of AI: learns patterns from data instead of hand-written rules",
          "Deep learning — ML with multi-layer neural networks; shines on images, audio, text",
          "GenAI — deep learning that creates new content (text, images, code) from a prompt",
          "Agentic AI — GenAI that plans, calls tools and takes multi-step actions toward a goal",
          "Model vs algorithm — the algorithm is the recipe; the model is the trained result",
          "Training vs inference — training learns the weights; inference uses them to predict",
          "Computer vision = understand images/video; NLP = understand and generate human language",
          "LLM — very large transformer model trained on text; one kind of foundation model",
        ]
      },
      {
        title: "Learning Types & Data",
        items: [
          "Supervised — labeled data (input + right answer) → classification, regression",
          "Unsupervised — unlabeled data, finds structure → clustering, anomaly detection, segmentation",
          "Reinforcement learning — agent learns by reward/penalty through trial and error (robotics, games, RLHF)",
          "Self-supervised — model creates its own labels from raw data (how LLMs are pre-trained)",
          "Structured (tabular rows/columns) vs unstructured (text, images, audio, video)",
          "Time-series — ordered by time → forecasting demand, sensor readings",
          "Labeled data is costly — SageMaker Ground Truth helps humans label at scale",
        ]
      },
      {
        title: "Pick the Technique",
        items: [
          "Regression — predict a number (house price, sales next month)",
          "Classification — predict a category (spam / not spam, fraud / legit)",
          "Clustering — group similar items with no labels (customer segments)",
          "Use AI for scale, automation, and assisting human decisions on patterns too big for rules",
          "Don't use AI when a deterministic, exact outcome is required or a simple rule works",
          "Don't use AI when cost outweighs benefit or there isn't enough quality data",
          "Traditional ML over FM — strict explainability/regulatory needs, narrow tabular task, low latency/cost",
          "FM over traditional ML — open-ended language/image tasks, little labeled data, fast time to market",
        ]
      },
      {
        title: "AWS AI Services ↔ Use Cases",
        items: [
          "Amazon Comprehend — NLP: sentiment, entities, key phrases, PII detection, topics in text",
          "Amazon Rekognition — image/video analysis: objects, faces, labels, content moderation",
          "Amazon Textract — extract text, forms and tables from scanned documents (beyond plain OCR)",
          "Amazon Transcribe — speech → text (call transcripts, subtitles)",
          "Amazon Polly — text → lifelike speech",
          "Amazon Translate — neural machine translation between languages",
          "Amazon Lex — chatbots and voice bots (intents, slots) — same tech as Alexa",
          "Amazon Personalize — real-time recommendations (\"customers also bought\")",
          "Amazon SageMaker AI — build, train and deploy your own custom ML models",
        ]
      },
      {
        title: "ML Pipeline ↔ SageMaker AI & Inference",
        items: [
          "Collect & prepare data — S3, Glue, Glue DataBrew, SageMaker Data Wrangler, Ground Truth (labeling)",
          "Feature engineering — SageMaker Feature Store shares reusable features across teams",
          "Train & tune — SageMaker training jobs, automatic model tuning, Autopilot (AutoML), JumpStart (pre-trained)",
          "Evaluate & register — SageMaker Experiments, Model Registry (versions + approval)",
          "Deploy & monitor — SageMaker endpoints, Model Monitor (drift), Pipelines (automated MLOps)",
          "Real-time inference — persistent endpoint, low latency, one request at a time",
          "Batch transform — score a whole dataset offline, no endpoint kept running",
          "Asynchronous inference — large payloads / long processing, queued, can scale to zero",
          "Serverless inference — intermittent traffic, no instances to manage, tolerates cold starts",
        ]
      },
      {
        title: "Metrics & MLOps",
        items: [
          "Accuracy — share of correct predictions; misleading on imbalanced data",
          "Precision — of predicted positives, how many are right → when false positives are costly (spam filter)",
          "Recall — of actual positives, how many found → when false negatives are costly (fraud, disease)",
          "F1 score — balance of precision and recall on imbalanced classes",
          "AUC-ROC — how well a classifier separates classes across all thresholds",
          "RMSE / MAE — average error size for regression (RMSE punishes big errors more)",
          "Business metrics — ROI, cost per user, development cost, customer feedback",
          "MLOps — experimentation, repeatable pipelines, monitoring, re-training on drift, managing tech debt",
          "Model sources — open-source pre-trained, managed FM API (Bedrock), or train your own custom model",
        ]
      },
    ],
    links: [
      { label: "AIF-C01 Exam Guide", url: "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html" },
      { label: "What is Amazon SageMaker AI?", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html" },
      { label: "What is Machine Learning?", url: "https://aws.amazon.com/what-is/machine-learning/" },
    ]
  },
  {
    domain: "Fundamentals of GenAI",
    icon: "✨",
    color: "#8B5CF6",
    sections: [
      {
        title: "Core GenAI Concepts",
        items: [
          "Token — chunk of text (word piece) the model reads and writes; unit of pricing and limits",
          "Context window — max tokens (prompt + answer) a model can handle in one call",
          "Chunking — splitting documents into smaller pieces before embedding them for search",
          "Embedding — numeric vector capturing meaning; similar meaning = vectors close together",
          "Vector database — stores embeddings and finds the nearest ones (semantic search)",
          "Transformer — architecture using self-attention; the basis of LLMs",
          "Foundation model (FM) — large model pre-trained on broad data, adaptable to many tasks",
          "Multimodal model — accepts/produces several types: text, image, audio, video",
          "Diffusion model — generates images by gradually removing noise (text-to-image)",
        ]
      },
      {
        title: "Strengths vs Limitations",
        items: [
          "Strengths — adaptability, conversational, fast content generation, responsive to new tasks",
          "Use cases — summarization, assistants, translation, code generation, search, customer service agents",
          "Hallucination — confident but false output → ground with RAG, validate outputs",
          "Nondeterminism — same prompt can give different answers (lower temperature to reduce)",
          "Interpretability — hard to explain why an FM produced a given answer",
          "Inaccuracy & stale knowledge — training data has a cutoff date; add fresh data with RAG",
          "Business metrics — ROI, efficiency, conversion rate, ARPU, customer lifetime value, accuracy",
        ]
      },
      {
        title: "FM Lifecycle & Model Selection",
        items: [
          "Lifecycle — data selection → model selection → pre-training → fine-tuning → evaluation → deployment → feedback",
          "Choose by modality and capability — text, image, code, embeddings, multilingual",
          "Performance vs cost — bigger model = more capable but slower and more expensive",
          "Latency needs — real-time chat favors smaller/faster models",
          "Compliance & constraints — data residency, licensing, Region availability",
          "Start with the smallest model that meets quality, then scale up only if needed",
        ]
      },
      {
        title: "Agentic AI Concepts",
        items: [
          "AI agent — FM + tools + memory + goal; reasons, plans and acts in steps",
          "Tool use — agent calls APIs, functions, databases to get data or take actions",
          "MCP (Model Context Protocol) — open standard connecting agents to external tools and data",
          "Memory — short-term (current session) and long-term (persists across sessions)",
          "Multi-agent patterns — supervisor/orchestrator delegating to specialist agents",
          "Workflow orchestration — chaining steps and agents with clear hand-offs",
          "Context engineering — deciding what goes in the context window (instructions, retrieved data, memory, tool results)",
        ]
      },
      {
        title: "AWS GenAI Stack",
        items: [
          "Amazon Bedrock — fully managed, serverless API to many FMs; your data is not used to train base models",
          "SageMaker JumpStart — hub of pre-trained/open models you deploy and fine-tune in SageMaker AI",
          "Amazon Nova — Amazon's own family of foundation models, available in Bedrock",
          "Amazon Bedrock AgentCore — deploy and operate AI agents securely at scale",
          "Strands Agents — open-source SDK for building AI agents in code",
          "Kiro — AWS agentic AI IDE with spec-driven development",
          "Amazon Q — GenAI assistant (Q Developer for coding and AWS tasks)",
          "Amazon Quick — AI-powered BI and workplace assistant suite (successor brand of QuickSight)",
          "AWS Transform — agentic AI for migration and modernization",
        ]
      },
      {
        title: "Cost Trade-offs",
        items: [
          "Token-based pricing — pay per input and output token; long prompts and answers cost more",
          "On-demand — pay per use, best for variable or unpredictable traffic",
          "Provisioned throughput — reserved capacity for steady high volume; required for custom models in Bedrock",
          "Batch inference — process many prompts asynchronously at lower cost when no real-time need",
          "Prompt caching — reuse a repeated prompt prefix to cut cost and latency",
          "Custom models cost more — training plus hosting; try prompting and RAG first",
          "Managed services lower barrier to entry and speed to market vs self-hosting",
        ]
      },
    ],
    links: [
      { label: "What is Generative AI?", url: "https://aws.amazon.com/what-is/generative-ai/" },
      { label: "Amazon Bedrock", url: "https://aws.amazon.com/bedrock/" },
      { label: "Amazon Bedrock AgentCore", url: "https://aws.amazon.com/bedrock/agentcore/" },
    ]
  },
  {
    domain: "Applications of Foundation Models",
    icon: "🛠️",
    color: "#FF9900",
    sections: [
      {
        title: "Inference Parameters",
        items: [
          "Temperature — randomness: low = focused and consistent, high = creative and varied",
          "Top-p — sample only from the most likely tokens whose probabilities add up to p",
          "Top-k — sample only from the k most likely next tokens",
          "Max tokens (output length) — caps answer length, controls cost and latency",
          "Stop sequences — strings that end generation early",
          "Factual Q&A → low temperature; brainstorming / creative writing → higher temperature",
        ]
      },
      {
        title: "Customize: Cheapest → Most Effort",
        items: [
          "Prompt engineering / in-context learning — examples in the prompt, no training, cheapest and fastest",
          "RAG — fetch your documents at query time; fresh/private data, citations, no retraining",
          "Fine-tuning — train on labeled prompt/response pairs to change style or task behavior",
          "Instruction tuning — fine-tuning with instruction → answer examples to follow directions better",
          "Continued pre-training — unlabeled domain data to teach domain vocabulary (legal, medical)",
          "Pre-training from scratch — huge data and compute; rarely the right answer",
          "Distillation — a large teacher model trains a smaller, cheaper, faster student",
          "Transfer learning — reuse a pre-trained model's knowledge for a new related task",
          "Data changes often → RAG; behavior/tone must change → fine-tune",
        ]
      },
      {
        title: "RAG & Vector Stores",
        items: [
          "RAG flow — chunk docs → embed → store vectors → retrieve relevant chunks → add to prompt",
          "Bedrock Knowledge Bases — fully managed RAG: ingestion, embeddings, retrieval, source citations",
          "Amazon OpenSearch Service — vector search (incl. serverless vector engine)",
          "Amazon Aurora / RDS for PostgreSQL — vectors via the pgvector extension",
          "Amazon Neptune — graph database; GraphRAG over relationships",
          "Business uses — internal knowledge assistants, support bots, document Q&A",
        ]
      },
      {
        title: "Prompt Engineering",
        items: [
          "Prompt parts — instruction, context, input data, output format; negative prompts say what to avoid",
          "Zero-shot — just the task, no examples",
          "One-shot / few-shot — one or a few examples to show the expected pattern",
          "Chain-of-thought — ask the model to reason step by step (math, logic)",
          "Prompt templates — reusable prompts with variables for consistency",
          "Best practices — be specific and concise, set a role, give format, iterate and experiment",
          "Prompt injection / hijacking — malicious input overrides your instructions",
          "Jailbreaking — tricks the model into bypassing safety rules",
          "Poisoning — malicious data in training or retrieval sources; exposure — leaking sensitive data in outputs",
        ]
      },
      {
        title: "Amazon Bedrock Features",
        items: [
          "Bedrock Agents — FM orchestrates multi-step tasks calling APIs (action groups) and knowledge bases",
          "Bedrock Guardrails — filter harmful content, denied topics, PII, prompt attacks; contextual grounding checks",
          "Prompt Management — store, version and test prompts; reuse them across apps",
          "Model Evaluation — compare models with automatic metrics, human review or LLM-as-a-judge",
          "Model customization — fine-tuning, continued pre-training and distillation inside Bedrock",
          "Bedrock Flows — link prompts, knowledge bases and agents into a workflow",
          "Provisioned throughput — guaranteed capacity for steady workloads and custom models",
        ]
      },
      {
        title: "Evaluating FMs & Apps",
        items: [
          "ROUGE — overlap with reference text → summarization",
          "BLEU — n-gram precision vs reference → translation",
          "BERTScore — semantic similarity using embeddings, not exact words",
          "LLM-as-a-judge — a strong model grades outputs at scale",
          "Human-in-the-loop evaluation — subjective quality: tone, helpfulness, brand fit",
          "Benchmark datasets — standard tests to compare models fairly",
          "RAG eval — retrieval relevance plus answer faithfulness; agent eval — task completion",
          "Business alignment — task completion rate, user satisfaction, engagement, cost per interaction",
        ]
      },
    ],
    links: [
      { label: "What is RAG?", url: "https://aws.amazon.com/what-is/retrieval-augmented-generation/" },
      { label: "Bedrock Knowledge Bases", url: "https://aws.amazon.com/bedrock/knowledge-bases/" },
      { label: "Bedrock Prompt Engineering Guidelines", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html" },
    ]
  },
  {
    domain: "Guidelines for Responsible AI",
    icon: "⚖️",
    color: "#1E8A44",
    sections: [
      {
        title: "Dimensions of Responsible AI",
        items: [
          "Fairness — outcomes don't disadvantage demographic groups",
          "Explainability — humans can understand why a model gave an output",
          "Privacy & security — protect data and models from misuse",
          "Safety — prevent harmful output and misuse",
          "Controllability — mechanisms to monitor and steer AI behavior",
          "Veracity & robustness — correct output, even with unexpected or adversarial input",
          "Transparency & governance — disclose AI use, limits; define accountable processes",
          "Inclusivity — works well for diverse users and languages",
        ]
      },
      {
        title: "Bias, Variance & Datasets",
        items: [
          "Bias in data — under-represented groups → unfair, inaccurate predictions for them",
          "Overfitting — great on training data, poor on new data (high variance) → more data, regularization",
          "Underfitting — poor on both training and new data (high bias) → more features, more complex model",
          "Good datasets — diverse, inclusive, balanced, curated from trusted sources, well labeled",
          "Detect bias — subgroup analysis, label quality checks, human audits",
          "Bias can drift in production — keep monitoring after deployment",
        ]
      },
      {
        title: "Responsible AI Tools on AWS",
        items: [
          "SageMaker Clarify — detects bias in data and models, explains predictions (feature importance)",
          "SageMaker Model Monitor — alerts on data, quality, bias and feature-attribution drift in production",
          "Amazon Augmented AI (A2I) — sends low-confidence predictions to human reviewers",
          "SageMaker Model Cards — document intended use, training data, risks and evaluation",
          "Bedrock Guardrails — content filters, denied topics, PII redaction, grounding checks for GenAI",
          "Bedrock Model Evaluation — test models for toxicity, robustness and accuracy before choosing",
          "SageMaker Ground Truth — human labeling (and RLHF data) to improve label quality",
        ]
      },
      {
        title: "Transparency & Explainability",
        items: [
          "Transparent models (linear regression, decision trees) — easy to explain, may be less accurate",
          "Black-box models (deep neural nets, LLMs) — higher performance, harder to explain",
          "Trade-off — more interpretability often means less performance; choose by regulation and risk",
          "Regulated decisions (loans, hiring) → favor explainable models + Clarify explanations",
          "Open-source models, open data and clear licensing increase transparency",
          "Human-centered design — show AI decisions clearly, give users feedback mechanisms",
        ]
      },
      {
        title: "Legal Risks & Responsible Choices",
        items: [
          "IP infringement — generated content may copy protected material",
          "Biased outputs — discrimination claims and reputational damage",
          "Hallucinations — wrong answers presented as facts harm end users",
          "Loss of customer trust — from unsafe, biased or undisclosed AI use",
          "Sustainability — prefer smaller/efficient models and reuse pre-trained FMs to cut energy use",
          "Keep a human in the loop for high-impact decisions",
        ]
      },
    ],
    links: [
      { label: "Responsible AI at AWS", url: "https://aws.amazon.com/ai/responsible-ai/" },
      { label: "SageMaker Clarify", url: "https://aws.amazon.com/sagemaker/ai/clarify/" },
      { label: "Bedrock Guardrails", url: "https://aws.amazon.com/bedrock/guardrails/" },
    ]
  },
  {
    domain: "Security, Compliance, and Governance for AI Solutions",
    icon: "🛡️",
    color: "#D13212",
    sections: [
      {
        title: "Securing AI Systems",
        items: [
          "IAM — least-privilege roles and policies for who can invoke models and read training data",
          "AWS KMS — encrypt data, models and logs at rest; TLS for data in transit",
          "Amazon Macie — finds PII/sensitive data in S3 before it reaches training or RAG",
          "AWS PrivateLink / VPC endpoints — call Bedrock and SageMaker without traversing the internet",
          "AWS Secrets Manager — store API keys and credentials used by apps and agents",
          "AgentCore Identity — manages agent identities and their access to AWS and third-party tools",
          "Policy in AgentCore — sets boundaries on which actions and tools an agent may use",
          "Shared responsibility — AWS secures the infrastructure/managed service; you secure data, access, prompts, outputs",
        ]
      },
      {
        title: "AI Threats & Defenses",
        items: [
          "Prompt injection — validate inputs, use Guardrails prompt-attack filters",
          "Data leakage — PII redaction, output filtering, least-privilege retrieval",
          "Toxicity — Guardrails content filters on inputs and outputs",
          "Data/model poisoning — trusted, curated sources and data integrity checks",
          "Amazon Inspector — vulnerability scanning of EC2, container images, Lambda",
          "Threat detection & logging — CloudWatch and CloudTrail for an audit trail of AI interactions",
          "Bedrock model invocation logging — capture prompts and responses for audits",
        ]
      },
      {
        title: "Hallucinations & Grounding",
        items: [
          "RAG grounding — answer from retrieved trusted documents",
          "Source citations — show where an answer came from (Knowledge Bases)",
          "Guardrails contextual grounding check — blocks answers not supported by the source",
          "Output validation — check format, facts and rules before showing the answer",
          "Confidence scoring — route low-confidence answers to a human (A2I)",
          "Lower temperature — fewer creative, made-up answers",
        ]
      },
      {
        title: "Data Governance & Lineage",
        items: [
          "Data lineage — track where data came from and how it was transformed",
          "Data cataloging — AWS Glue Data Catalog for discoverable, documented datasets",
          "AWS Lake Formation — fine-grained access control on data lake tables",
          "SageMaker Model Cards — record model origin, training data and intended use",
          "Data lifecycle — residency (Region choice), retention, deletion, S3 Glacier for archives",
          "Secure data engineering — assess quality, access control, integrity, privacy-enhancing tech (masking, anonymization)",
        ]
      },
      {
        title: "Compliance & Governance Services",
        items: [
          "AWS Artifact — download AWS compliance reports (SOC, ISO) and agreements",
          "AWS Config — records resource configuration and checks it against rules",
          "AWS CloudTrail — logs who called which API and when (audit)",
          "Amazon Inspector — continuous vulnerability management",
          "AWS Trusted Advisor — best-practice checks: security, cost, limits",
          "AWS Well-Architected Tool — review workloads against best practices",
        ]
      },
      {
        title: "Governance Processes",
        items: [
          "Generative AI Security Scoping Matrix — classifies GenAI use (consumer app → self-trained model) to scope controls",
          "Policies — acceptable use, data handling, model approval",
          "Review cadence — regular reviews of models, data and access",
          "Transparency standards — document and disclose AI use",
          "Team training — teach staff responsible and secure AI use",
          "Monitoring & observation — continuous checks for drift, misuse and compliance",
        ]
      },
    ],
    links: [
      { label: "GenAI Security Scoping Matrix", url: "https://aws.amazon.com/ai/generative-ai/security/scoping-matrix/" },
      { label: "Security in Amazon Bedrock", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/security.html" },
      { label: "Shared Responsibility Model", url: "https://aws.amazon.com/compliance/shared-responsibility-model/" },
    ]
  },
];
