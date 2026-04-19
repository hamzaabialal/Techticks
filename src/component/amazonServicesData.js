import frame1 from '../component/images/frame1.png'
import frame2 from '../component/images/frame2.png'
import frame3 from '../component/images/frame3.png'
import frame4 from '../component/images/frame4.png'

export const navItems = [
	'AI Agents & Workflows',
	'n8n Workflow Engineering',
	'Make.com & Zapier',
	'Python & Custom APIs',
	'Web Scraping & Data',
	'CRM Automation',
]

export const servicesData = [
	{
		id: 0,
		navLabel: 'AI Agents & Workflows',
		heading: 'Intelligent Agents That Run the Business',
		description1:
			"AI agents aren't chat gimmicks — they're decision engines. We design workflows where OpenAI, Claude, or LangChain classifies, enriches, routes, and acts on real data in production.",
		description2:
			'You get autonomous systems that eliminate manual triage — with fallback logic, cost monitoring, and full observability.',
		keyFeaturesTitle: 'Key Features',
		features: [
			{
				icon: frame1,
				title: 'Custom AI Agent Design',
				desc: 'Purpose-built agents for classification, enrichment, routing, and automated decisions.',
			},
			{
				icon: frame2,
				title: 'Multi-Model Orchestration',
				desc: 'OpenAI, Claude, and fine-tuned models coordinated per step for cost and accuracy.',
			},
			{
				icon: frame3,
				title: 'Fallback & Guardrails',
				desc: 'Every agent fails safely — human-in-the-loop and retry paths are baked in.',
			},
			{
				icon: frame4,
				title: 'Cost &  Observability',
				desc: 'Token tracking, latency monitoring, and usage alerts by workflow.',
			},
		],
		resultsTitle: 'AI Automation Results',
		resultsSub: 'A few of our recent AI workflow deployments',
	},
	{
		id: 1,
		navLabel: 'n8n Workflow Engineering',
		heading: 'Production-Grade n8n, Self-Hosted, Unlimited Runs',
		description1:
			"n8n is our default platform for workflows that need to survive real traffic. Self-hosted, code-level flexibility, and 400+ integrations — without Zapier's per-task billing.",
		description2:
			'Every workflow ships versioned, documented, monitored, and retryable.',
		keyFeaturesTitle: 'Key Features',
		features: [
			{
				icon: frame1,
				title: 'Custom Workflow Design',
				desc: 'Branching logic, webhooks, and Code nodes for any business rule.',
			},
			{
				icon: frame2,
				title: 'Self-Hosted Deployment',
				desc: 'VPS, Docker, or Kubernetes with SSL, backups, and monitoring.',
			},
			{
				icon: frame3,
				title: 'Error Handling & Retries',
				desc: 'Every failure is caught, logged, retried, and alerted.',
			},
			{
				icon: frame4,
				title: 'Debug & Optimization',
				desc: 'Audit and refactor existing n8n stacks for cost and speed.',
			},
		],
		resultsTitle: 'n8n Workflow Results',
		resultsSub: 'Select n8n deployments we have shipped to production',
	},
	{
		id: 2,
		navLabel: 'Make.com & Zapier',
		heading: 'Visual Automation That Actually Holds Up in Production',
		description1:
			'Make.com and Zapier are perfect when you need fast, reliable integrations across 6,000+ apps. We design scenarios and Zaps that survive real volume — with error handlers, data stores, and retry logic.',
		description2:
			"When a Zap hits its limits, we migrate to Make or n8n — you don't lose functionality, you cut cost.",
		keyFeaturesTitle: 'Key Features',
		features: [
			{
				icon: frame1,
				title: 'Advanced Scenarios',
				desc: 'Routers, iterators, data stores, and aggregators for stateful workflows.',
			},
			{
				icon: frame2,
				title: 'Code by Zapier / Make',
				desc: 'Custom Python or JS when visual steps are not enough.',
			},
			{
				icon: frame3,
				title: 'Cost Optimization',
				desc: 'Cut Make operations or Zapier tasks by 40–70% through clean design.',
			},
			{
				icon: frame4,
				title: 'Platform Migration',
				desc: 'Zapier → Make or n8n — same functionality, fraction of the bill.',
			},
		],
		resultsTitle: 'Make & Zapier Results',
		resultsSub: 'Scenarios and Zaps running in production today',
	},
	{
		id: 3,
		navLabel: 'Python & Custom APIs',
		heading: 'The Code Layer Behind Every Serious Automation',
		description1:
			'No-code platforms cover the 80% — Python covers the impossible 20%. We build custom services, APIs, and data tooling that power the intelligence behind your workflows.',
		description2:
			'From FastAPI backends to ML inference services — production-ready, containerized, observable.',
		keyFeaturesTitle: 'Key Features',
		features: [
			{
				icon: frame1,
				title: 'FastAPI / Django Backends',
				desc: 'Clean REST APIs with auth, docs, and validation out of the box.',
			},
			{
				icon: frame2,
				title: 'ETL & Data Pipelines',
				desc: 'Scheduled, idempotent pipelines across databases and SaaS tools.',
			},
			{
				icon: frame3,
				title: 'ML & Computer Vision',
				desc: 'Classification, detection, and imaging services deployed as APIs.',
			},
			{
				icon: frame4,
				title: 'Python Microservices',
				desc: 'Single-purpose services that automations call on demand.',
			},
		],
		resultsTitle: 'Python Development Results',
		resultsSub: 'Custom Python services powering our automation stack',
	},
	{
		id: 4,
		navLabel: 'Web Scraping & Data',
		heading: 'Structured Data From Any Source, At Any Scale',
		description1:
			'We build scraping pipelines that survive JavaScript rendering, anti-bot protection, session handling, and proxy rotation — delivering clean, typed data directly into your workflows.',
		description2:
			'From one-off directory crawls to real-time price monitoring, our scrapers feed CRMs, analytics, and decision systems reliably.',
		keyFeaturesTitle: 'Key Features',
		features: [
			{
				icon: frame1,
				title: 'Lead & Directory Scraping',
				desc: 'B2B sources at scale with email enrichment and CRM push.',
			},
			{
				icon: frame2,
				title: 'JS-Rendered & Anti-Bot',
				desc: 'Playwright / Puppeteer with fingerprinting and residential proxies.',
			},
			{
				icon: frame3,
				title: 'Real-Time Monitoring',
				desc: 'Scheduled scrapers tracking prices, stock, or competitor changes.',
			},
			{
				icon: frame4,
				title: 'Structured Data Output',
				desc: 'Clean JSON / CSV delivered to S3, sheets, or your database.',
			},
		],
		resultsTitle: 'Web Scraping Results',
		resultsSub: 'Pipelines delivering structured data daily',
	},
	{
		id: 5,
		navLabel: 'CRM Automation',
		heading: 'Your CRM, Running Itself',
		description1:
			"HubSpot, GoHighLevel, Salesforce, Close.io — we automate lead capture, scoring, enrichment, and outreach so your sales team only touches deals that are ready to close.",
		description2:
			'Cross-platform sync, behavior-triggered sequences, and dashboards that reflect reality — not stale spreadsheets.',
		keyFeaturesTitle: 'Key Features',
		features: [
			{
				icon: frame1,
				title: 'Lead Capture & Enrichment',
				desc: 'Auto-enrich leads with email, phone, and company intel on ingest.',
			},
			{
				icon: frame2,
				title: 'Cross-Platform Sync',
				desc: 'HubSpot, GHL, Close, Salesforce — no double-writes, no drift.',
			},
			{
				icon: frame3,
				title: 'Outreach Sequences',
				desc: 'Behavior-triggered email / SMS flows, not blind blasts.',
			},
			{
				icon: frame4,
				title: 'Lead Scoring & Routing',
				desc: 'AI-scored leads routed to the right rep automatically.',
			},
		],
		resultsTitle: 'CRM Automation Results',
		resultsSub: 'Sales pipelines we have put on autopilot',
	},
]
