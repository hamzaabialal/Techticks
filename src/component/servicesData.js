import {
	SiN8N,
	SiZapier,
	SiOpenai,
	SiPython,
	SiHubspot,
} from 'react-icons/si'
import { TbApiApp, TbSpider, TbFileText } from 'react-icons/tb'
import {
	FaBolt,
	FaShieldAlt,
	FaCogs,
	FaLayerGroup,
	FaExchangeAlt,
	FaFilePdf,
	FaRobot,
	FaDatabase,
	FaNetworkWired,
	FaRocket,
	FaClock,
	FaCheckCircle,
} from 'react-icons/fa'

export const SERVICES = [
	{
		slug: 'ai-automation',
		title: 'AI Automation',
		tagline: 'Intelligent workflows that make decisions, not just move data.',
		Icon: SiOpenai,
		iconColor: '#10a37f',
		shortDescription:
			'End-to-end intelligent workflows with AI agents, OpenAI, and LangChain — making decisions, enriching data, and running operations on autopilot.',
		heroBadges: ['OpenAI GPT-4o', 'Claude 3.5', 'LangChain', 'RAG Systems'],
		longDescription:
			'AI is not a feature bolted onto a dashboard — it is a decision engine that classifies, enriches, and acts on data in real time. We architect production AI workflows that survive edge cases, monitor their own cost, and ship structured output ready to plug into your CRM, database, or support stack.',
		features: [
			{
				Icon: FaRobot,
				title: 'AI Agents & Decision Workflows',
				body: 'Custom multi-tool agents built on OpenAI, Claude, or LangChain — classifying, routing, and enriching data across CRM, inbox, and pipelines. Every agent ships with fallback logic, cost monitoring, and observability.',
			},
			{
				Icon: FaFilePdf,
				title: 'AI Document Processing',
				body: 'GPT-driven extraction from invoices, contracts, and multi-page PDFs — turning unstructured documents into structured JSON with 100% field accuracy, ready to feed your CRM or database.',
			},
			{
				Icon: FaDatabase,
				title: 'RAG & Conversational AI',
				body: 'Retrieval-augmented chat agents grounded on your docs, CRM, or knowledge base — for internal ops, support, or lead qualification. Pinecone, Weaviate, or pgvector under the hood.',
			},
			{
				Icon: FaShieldAlt,
				title: 'Guardrails & Observability',
				body: 'Every AI call is logged, traced, cost-tracked, and output-validated. No silent hallucinations. No runaway token bills. Full replay for any production incident.',
			},
		],
		outcomes: [
			'50-80% reduction in manual classification / routing work',
			'30-second document processing vs 20+ min manual review',
			'Structured output plugged into HubSpot, Salesforce, or any CRM',
			'Cost-aware agents with per-run budget caps',
		],
		useCases: [
			'Auto-score and route inbound leads by fit + intent',
			'Extract invoice line items into accounting systems',
			'RAG-based internal ops assistant trained on your Notion / Drive',
			'AI email triage and reply drafting inside your inbox',
		],
	},

	{
		slug: 'n8n',
		title: 'n8n Workflows',
		tagline: 'Self-hosted, unlimited-execution automation without Zapier-tier billing.',
		Icon: SiN8N,
		iconColor: '#ea4b71',
		shortDescription:
			'Self-hosted, scalable no-code automations built on n8n — complex branching logic, webhooks, and 400+ integrations without Zapier-tier billing.',
		heroBadges: ['Self-hosted', 'Unlimited executions', '400+ integrations', 'Custom Code'],
		longDescription:
			'n8n is our weapon of choice for production automation. Self-hosted, unlimited executions, and code-level flexibility when visual nodes are not enough. We build, version, and host n8n workflows that connect 400+ services with advanced branching, webhooks, and custom JavaScript — all while cutting your per-operation SaaS bill to zero.',
		features: [
			{
				Icon: FaCogs,
				title: 'Custom Workflow Design',
				body: 'Multi-step workflows with conditional logic, error handling, retry loops, and custom Code nodes. Every flow is documented, credential-safe, and built to survive real-world failures.',
			},
			{
				Icon: FaNetworkWired,
				title: 'Self-Hosted Setup',
				body: 'We deploy self-hosted n8n on your VPS, Docker, or Kubernetes with SSL, backups, and monitoring — cutting Zapier-tier billing and unlocking unlimited workflow executions.',
			},
			{
				Icon: FaBolt,
				title: 'Debugging & Optimization',
				body: 'Existing n8n stack running slow or failing silently? We audit, refactor, and optimize workflows — reducing execution time, API costs, and error rates across the board.',
			},
			{
				Icon: FaExchangeAlt,
				title: 'Zapier / Make Migration',
				body: 'We migrate existing Zapier and Make.com workflows to self-hosted n8n — keeping all functionality, slashing monthly cost, and unlocking advanced logic you could not reach before.',
			},
		],
		outcomes: [
			'Cut Zapier / Make monthly bill by 70-100%',
			'Unlimited workflow executions, no per-task caps',
			'Complex branching logic no visual tool can replicate',
			'Full ownership of your automation infrastructure',
		],
		useCases: [
			'Lead routing from forms, ads, and scrapers into CRM',
			'Cross-platform CRM sync (HubSpot ↔ Close.io ↔ Notion)',
			'Scheduled scrapers + data enrichment pipelines',
			'Slack / email alerting on pipeline events',
		],
	},

	{
		slug: 'make',
		title: 'Make.com Scenarios',
		tagline: 'Visual, complex branching automation with production-grade error handling.',
		Icon: TbApiApp,
		iconColor: '#6d00cc',
		shortDescription:
			'Advanced Make.com scenarios with error handling, routers, iterators, and data stores — production-grade automation that never silently fails.',
		heroBadges: ['Visual builder', 'Routers & iterators', 'Data stores', 'Error handlers'],
		longDescription:
			'Make.com is perfect for visual, complex branching logic with built-in data stores, iterators, and routers. We design scenarios that hold up under production load — with error handling modules, data validation, and cost-efficient operation usage. When a scenario hits Make\'s limits, we migrate it to n8n and keep you running.',
		features: [
			{
				Icon: FaLayerGroup,
				title: 'Advanced Scenario Architecture',
				body: 'Make.com scenarios with routers, iterators, aggregators, and data stores — handling complex branching, bulk operations, and stateful processing without running into operation limits.',
			},
			{
				Icon: FaShieldAlt,
				title: 'Error Handlers & Monitoring',
				body: 'Every scenario ships with break handlers, retry logic, and error notifications — so you know about failures in minutes, not days. Paired with execution logs and cost tracking for full observability.',
			},
			{
				Icon: FaBolt,
				title: 'Operation-Cost Optimization',
				body: 'Make.com bills per operation. We audit existing scenarios and refactor them to use fewer operations per run — often cutting the monthly bill by 40-70% without losing functionality.',
			},
			{
				Icon: FaExchangeAlt,
				title: 'Scenario Auditing',
				body: 'Inherited a Make.com account from a departing contractor? We audit every scenario, map dependencies, document the stack, and rebuild what is brittle.',
			},
		],
		outcomes: [
			'40-70% reduction in Make.com operation bill',
			'Zero silent failures via error handler modules',
			'Fully documented scenarios your team can own',
			'Migration path to n8n when scale demands it',
		],
		useCases: [
			'E-commerce order routing to fulfillment + accounting',
			'Bulk data transforms across Airtable / Google Sheets',
			'Webhook → multi-path routing with conditional triggers',
			'Stateful workflows using Make data stores',
		],
	},

	{
		slug: 'zapier',
		title: 'Zapier Integration',
		tagline: 'Fast, reliable Zaps for lead routing, notifications, and cross-app sync.',
		Icon: SiZapier,
		iconColor: '#ff4a00',
		shortDescription:
			'Fast, reliable Zaps for lead routing, notifications, and cross-app sync — plus Code by Zapier for logic that visual tools cannot handle alone.',
		heroBadges: ['6,000+ apps', 'Code by Zapier', 'Paths & Filters', 'Multi-step'],
		longDescription:
			'Zapier shines for fast, reliable, one-to-one integrations across 6,000+ apps. We build Zaps that just work — with Code by Zapier, Paths, and Filters for logic that visual steps alone cannot handle. When a Zap hits its limits (pricing, complexity, or volume), we migrate to Make or n8n.',
		features: [
			{
				Icon: FaLayerGroup,
				title: 'Multi-Step Zaps with Paths & Filters',
				body: 'Branching logic, conditional triggers, and filtered paths — built cleanly so you can read the logic six months later. Perfect for lead routing, notifications, and cross-app sync.',
			},
			{
				Icon: SiPython,
				title: 'Code by Zapier (Python / JS)',
				body: 'When native steps cannot do it, we drop in custom Python or JavaScript — transforming payloads, calling external APIs, or handling complex logic inside the Zap itself.',
			},
			{
				Icon: FaExchangeAlt,
				title: 'Zapier → n8n / Make Migration',
				body: 'Outgrowing Zapier task limits or pricing? We rebuild your Zaps on n8n or Make — keeping all functionality while cutting monthly cost and unlocking advanced logic.',
			},
			{
				Icon: FaBolt,
				title: 'Task Optimization',
				body: 'Zapier bills per task. We audit your Zaps, collapse redundant steps, and filter early — often cutting task consumption by 30-60% without losing functionality.',
			},
		],
		outcomes: [
			'Production-grade Zaps with Paths and Filters',
			'30-60% reduction in Zapier task consumption',
			'Migration plan when scale demands n8n / Make',
			'Full documentation every team member can follow',
		],
		useCases: [
			'Form submission → CRM + Slack + email sequence',
			'Calendly booking → HubSpot + Notion + email prep',
			'Shopify order → accounting + warehouse + Slack',
			'RSS / blog → LinkedIn + Twitter + internal archive',
		],
	},

	{
		slug: 'python',
		title: 'Python Development',
		tagline: 'Custom services, APIs, and data pipelines under every serious automation.',
		Icon: SiPython,
		iconColor: '#3776ab',
		shortDescription:
			'Custom Python services, FastAPI / Django backends, data pipelines, and AI tooling — the engine under every serious automation stack.',
		heroBadges: ['FastAPI', 'Django', 'Celery', 'pytest'],
		longDescription:
			'Python is the engine behind every serious automation stack. We build custom services, APIs, data pipelines, and backend tools — filling the gaps no-code cannot reach, and powering the intelligence behind your workflows. Production-grade code with tests, monitoring, and documentation.',
		features: [
			{
				Icon: FaNetworkWired,
				title: 'Custom APIs & Backends',
				body: 'FastAPI or Django REST backends with clean schemas, auth, and documentation — exposed as the central nervous system your automations and frontends talk to.',
			},
			{
				Icon: FaDatabase,
				title: 'Data Pipelines & ETL',
				body: 'Ingestion, transformation, and loading pipelines moving data between databases, warehouses, and SaaS tools — scheduled, monitored, and idempotent.',
			},
			{
				Icon: FaRobot,
				title: 'ML & Computer Vision',
				body: 'Classification, detection, and image-processing services — including production medical imaging and document-recognition models deployed as APIs.',
			},
			{
				Icon: FaShieldAlt,
				title: 'Testing & Observability',
				body: 'pytest coverage, Sentry integration, structured logging, and CI/CD pipelines — because production Python should be boringly reliable.',
			},
		],
		outcomes: [
			'Production REST APIs with auto-generated docs',
			'ETL pipelines that survive schema drift and retries',
			'Custom services that fill no-code gaps',
			'Dockerized, testable, CI-ready from day one',
		],
		useCases: [
			'Central API powering both automations and dashboards',
			'Batch data transformers (CSV / JSON / XML → DB)',
			'Vision models for document classification',
			'Webhook receivers with queue + retry logic',
		],
	},

	{
		slug: 'web-scraping',
		title: 'Web Scraping',
		tagline: 'Enterprise scraping with proxy rotation, anti-bot handling, and clean output.',
		Icon: TbSpider,
		iconColor: '#22d3ee',
		shortDescription:
			'Enterprise-grade scraping with proxy rotation, anti-bot handling, and structured output — from directory crawls to real-time market data.',
		heroBadges: ['Playwright', 'Residential proxies', 'Anti-bot bypass', 'Structured output'],
		longDescription:
			'Enterprise-grade scraping pipelines that extract clean, structured data at scale — handling pagination, JavaScript rendering, proxy rotation, and anti-bot detection. From one-off crawls to real-time monitoring, our scrapers feed CRMs, analytics, and decision systems reliably.',
		features: [
			{
				Icon: FaDatabase,
				title: 'Directory & Lead Scraping',
				body: 'Extract business directories, LinkedIn-style profiles, and B2B sources at scale — with email enrichment and direct push into HubSpot, Close.io, or any CRM via n8n.',
			},
			{
				Icon: FaShieldAlt,
				title: 'JS-Rendered & Anti-Bot',
				body: 'Playwright / Puppeteer-based scraping for heavily protected sites — with session handling, fingerprint rotation, and residential proxy integration.',
			},
			{
				Icon: FaClock,
				title: 'Real-Time Monitoring Pipelines',
				body: 'Scheduled scrapers that track prices, inventory, competitor changes, or market data — piping diffs into Slack, Notion, or your internal dashboards as events occur.',
			},
			{
				Icon: FaCheckCircle,
				title: 'Clean, Validated Output',
				body: 'Every field is validated, deduped, and typed. JSON, CSV, or direct DB push — your scraper never ships broken data into downstream systems.',
			},
		],
		outcomes: [
			'Ingest thousands of records daily, no manual touch',
			'Bypass Cloudflare, PerimeterX, and DataDome defenses',
			'Feed CRMs directly — no intermediate spreadsheet',
			'Diff detection for real-time event triggers',
		],
		useCases: [
			'Lead list generation from directory sites',
			'Competitor pricing / inventory monitoring',
			'Real-estate listing ingestion + dedup',
			'Job board aggregation into internal dashboards',
		],
	},

	{
		slug: 'crm-automation',
		title: 'CRM Automation',
		tagline: 'Lead capture, scoring, and outreach — feeding the sales engine on autopilot.',
		Icon: SiHubspot,
		iconColor: '#ff7a59',
		shortDescription:
			'HubSpot, Salesforce, Zoho, GoHighLevel, Close.io — lead scoring, outreach sequences, deal-won automations, and cross-platform syncs that feed the sales engine.',
		heroBadges: [
			'HubSpot',
			'Salesforce',
			'Zoho CRM',
			'GoHighLevel',
			'Close.io',
		],
		longDescription:
			'Your CRM should be an active operator, not a read-only database. We automate lead capture, scoring, enrichment, outreach, and deal-won handoffs across HubSpot, Zoho CRM, Salesforce, GoHighLevel, and Close.io — so your sales team only touches deals that are ready to close, and operations kick off automatically the moment they do.',
		features: [
			{
				Icon: FaRocket,
				title: 'Lead Capture & Enrichment',
				body: 'Ingest leads from forms, scrapers, and paid channels — auto-enrich with email, phone, and firmographic data — and drop cleanly scored records into the right CRM pipeline.',
			},
			{
				Icon: FaExchangeAlt,
				title: 'Cross-Platform CRM Sync',
				body: 'Keep HubSpot, Zoho CRM, GoHighLevel, Close.io, and Salesforce in sync with each other — or with Notion, Airtable, and Google Sheets — using webhook-driven automations that never double-write or lose data.',
			},
			{
				Icon: FaCogs,
				title: 'Zoho CRM + Zoho Projects Automation',
				body: 'Deal-won in Zoho CRM → auto-create a fully structured Zoho Project with extracted scope, dates, standardised task lists, and line-item subtasks. Cuts 30–60 minutes of manual project setup per deal down to under a minute.',
			},
			{
				Icon: FaBolt,
				title: 'Outreach & Follow-Up',
				body: 'Automated email and SMS sequences, meeting scheduling, and follow-up reminders — triggered by behavior, lead score, or pipeline stage, not manual rep effort.',
			},
			{
				Icon: FaRobot,
				title: 'AI Lead Scoring',
				body: 'GPT-powered scoring that reads email context, intent signals, and behavior — routing only the hot leads to human reps, everything else into nurture.',
			},
		],
		outcomes: [
			'Reps only touch deals ready to close',
			'Zero duplicate contacts across systems',
			'Outreach firing 24/7 on behavior + score',
			'Deal-won → fully structured project in under 60 seconds',
			'AI-scored lead routing with full audit trail',
		],
		useCases: [
			'Inbound lead → enrich → score → route to rep',
			'Zoho CRM deal-won → auto-create Zoho Project with AI-extracted scope',
			'HubSpot ↔ Close.io (or Zoho ↔ HubSpot) bidirectional sync',
			'Booked meeting → prep email + Notion doc auto-created',
			'Cold list → automated multi-channel cadence',
		],
	},

	{
		slug: 'pdf-extraction',
		title: 'PDF & Data Extraction',
		tagline: '100% accuracy on invoices, contracts, and PDFs that OCR alone cannot touch.',
		Icon: FaFilePdf,
		iconColor: '#ef4444',
		shortDescription:
			'AI-powered extraction of structured data from invoices, contracts, and complex PDFs — 100% accuracy on documents that OCR alone cannot touch.',
		heroBadges: ['GPT-4o Vision', 'Claude 3.5', 'pdfplumber', 'Textract'],
		longDescription:
			'Old-school OCR breaks on real-world documents — scanned PDFs, multi-column layouts, handwritten fields, mixed languages. We combine GPT-4o Vision, Claude, and classical tools like pdfplumber into extraction pipelines that deliver 100% field accuracy on messy, inconsistent documents at production scale.',
		features: [
			{
				Icon: TbFileText,
				title: 'Invoice & Contract Extraction',
				body: 'Line items, totals, parties, dates, and clauses extracted into structured JSON — ready to push into accounting, ERP, or your database.',
			},
			{
				Icon: FaRobot,
				title: 'Vision Models for Scanned PDFs',
				body: 'GPT-4o and Claude vision models tackle scanned, rotated, and image-based PDFs that classical OCR fails on — with confidence scoring and human-review fallback.',
			},
			{
				Icon: FaShieldAlt,
				title: 'Confidence Scoring & Review',
				body: 'Every extracted field comes with a confidence score. Low-certainty fields auto-route to human review; high-certainty fields flow straight through.',
			},
			{
				Icon: FaClock,
				title: 'Real-Time Slack Pipelines',
				body: 'Drop a PDF in Slack, get structured data back in the thread within 30 seconds — plus automatic push into the target system of record.',
			},
		],
		outcomes: [
			'30-second processing vs 20+ min manual review',
			'100% accuracy on documents OCR breaks on',
			'Confidence-scored output with human fallback',
			'Direct push into accounting, CRM, or custom DB',
		],
		useCases: [
			'Invoice → accounting system (QuickBooks, Xero, Netsuite)',
			'Contract clause extraction for legal ops',
			'Financial statement line-item parsing',
			'Medical record / insurance form ingestion',
		],
	},
]

export const getServiceBySlug = (slug) =>
	SERVICES.find((s) => s.slug === slug)
