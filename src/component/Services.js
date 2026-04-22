import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Testimonials from './testonomial'
import { AiOutlineChrome } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa6'
import { GrReactjs } from 'react-icons/gr'
import { IoMdLaptop } from 'react-icons/io'
import { TfiMobile } from 'react-icons/tfi'
import { GoFileDirectory } from 'react-icons/go'
import { LuRadioTower } from 'react-icons/lu'
import { HiOutlineShare } from 'react-icons/hi'
import { MdCellTower } from 'react-icons/md'
import { GiBullseye } from 'react-icons/gi'
import { TbArrowsCross } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import MetricsSection from './MetricsSection'
import FinalCTA from './FinalCTA'
import AutomationBrands from './AutomationBrands'

function Services() {
	const navigate = useNavigate()
	const faqData = [
		{
			question: 'What services does TechTicks offer?',
			answer: 'We specialize in AI Automation and workflow engineering — building end-to-end systems with n8n, Make.com, Zapier, and custom Python. Services include AI agents, CRM automation, web scraping, PDF data extraction, API integrations, and data pipelines.',
		},
		{
			question: 'How long does it take to deliver an automation?',
			answer: 'Simple Zapier/Make integrations ship in 2–5 days. Production n8n workflows typically complete in 1–2 weeks. Complex multi-system AI pipelines, CRM rollouts, and enterprise scraping systems run 2–4 weeks. You get a firm timeline before we start.',
		},
		{
			question: 'Do you offer ongoing support after delivery?',
			answer: 'Yes. Every workflow ships with error handling, monitoring, and documentation. We offer optional monthly retainers for proactive monitoring, optimization, and new-feature rollouts as your stack evolves.',
		},
		{
			question: 'Can you migrate my Zapier or Make.com workflows to n8n?',
			answer: 'Absolutely. We regularly migrate workflows to self-hosted n8n to cut operational costs and unlock advanced logic, custom code, and unlimited executions — without losing any existing functionality.',
		},
		{
			question:
				'Which AI models and platforms do you integrate with?',
			answer: 'OpenAI (GPT-4/4o/o1), Anthropic Claude, LangChain, and custom fine-tuned models. We also integrate with vector DBs (Pinecone, Weaviate), and any API that has a webhook or HTTP endpoint.',
		},
	]

	const [openIndex, setOpenIndex] = useState(null)

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}
	return (
		<div>
			<img
				src='/contactrectleft.png'
				alt=''
				className='leftrect-amazon'
			/>
			<img
				src='/contactrectright.png'
				alt=''
				className='rightrect-amazon'
			/>
			<section
				id='about '
				className='about-page '>
				<hr style={{ color: 'white' }}></hr>
				<div className='main-content '>
					<div className='about'>
						<div className='heading'>
							<h1>
								<span>We</span>
								<span>don't</span> <span> ship</span>{' '}
								<span> demos.</span> <span> We</span>
								<span> ship</span> <span> systems.</span>
							</h1>
						</div>
						<div className='sub-heading'>
							<p className='s-subheading'>
								Every service below is built to run in production
								— with monitoring, error handling, documentation,
								and a path to scale. Pick one, or combine them into
								a full operations stack.
							</p>
						</div>
					</div>
					<div className='tt-hero-cta-row'>
						<button
							className='tt-btn tt-btn-primary tt-btn-lg'
							onClick={() => navigate('/contactUs')}>
							Book a Free Audit <FaArrowRight />
						</button>
						<button
							className='tt-btn tt-btn-ghost tt-btn-lg'
							onClick={() => navigate('/portfolio')}>
							See Case Studies
						</button>
					</div>

					<div className='tt-hero-trust'>
						<span className='tt-stars'>★★★★★</span>
						<span>120+ production automations shipped</span>
						<span className='tt-divider'></span>
						<span>7-day average delivery</span>
					</div>
				</div>
			</section>

			<AutomationBrands title='The Stack We Build On' />

			<MetricsSection />
			{/** why choose techticks */}
			<section class='why-choose-section'>
				<h1>Why Choose TechTicks?</h1>
				<p class='why-choose-subtitle'>
					Because a broken automation is worse than no automation.
				</p>

				<div class='why-choose-cards'>
					<div class='why-choose-card'>
						<div class='icon'>
							<MdCellTower />
						</div>
						<h3>Automation-Specialist Team</h3>
						<p>
							We don't dabble in automation between design and SEO
							projects — it is what we do, full-time, across
							every major platform.
						</p>
					</div>

					<div class='why-choose-card'>
						<div class='icon'>
							<GiBullseye />
						</div>
						<h3>Transparent Execution</h3>
						<p>
							Firm timelines, clear scope, weekly updates, and a
							single point of contact. No guessing where the
							project stands.
						</p>
					</div>

					<div class='why-choose-card'>
						<div class='icon'>
							<TbArrowsCross />
						</div>
						<h3>Full-Stack Capability</h3>
						<p>
							Workflow design, AI integration, backend services,
							and frontend dashboards — handled under one roof,
							no handoff gaps.
						</p>
					</div>
				</div>
			</section>

			{/** What We Do section */}

			<section class='service-what-we-do'>
				<div class='swwd-header'>
					<h1>What We Do</h1>
					<button
						onClick={() => navigate('/portfolio')}
						className='swwd-btn'>
						Show Portfolio
					</button>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<HiOutlineShare /> AI Automation
					</div>
					<p class='swwd-desc'>
						AI isn't a feature — it's a decision engine. We design
						end-to-end intelligent workflows that combine OpenAI,
						LangChain, and custom logic to classify, enrich, route,
						and act on your data automatically.<br></br> Every agent
						we ship is monitored, version-controlled, and built to
						handle real-world edge cases — not just happy-path
						demos.
					</p>

					<div class='swwd-subcards'>
						<div class='card'>
							<h5>AI Agents &amp; Decision Workflows</h5>
							<p style={{ color: 'gray' }}>
								Custom AI agents built on OpenAI, Claude, or
								LangChain — making classification, routing, and
								enrichment decisions across your CRM, inbox,
								and data pipelines. Every agent includes
								fallback logic, cost monitoring, and
								observability.
							</p>
						</div>
						<div class='card'>
							<h5>AI-Powered Document Processing</h5>
							<p style={{ color: 'gray' }}>
								GPT-driven extraction from invoices, contracts,
								statements, and multi-page PDFs — turning
								unstructured documents into structured JSON
								with 100% field accuracy, ready to feed your
								CRM or database.
							</p>
						</div>
						<div class='card'>
							<h5>Conversational AI &amp; RAG Systems</h5>
							<p style={{ color: 'gray' }}>
								Retrieval-augmented chat agents grounded on
								your documents, CRM, or knowledge base — for
								internal ops, customer support, or lead
								qualification. Built with Pinecone / Weaviate
								and modern embedding stacks.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						{' '}
						<AiOutlineChrome /> n8n Workflows
					</div>
					<p class='swwd-desc'>
						n8n is our weapon of choice for production automation.
						Self-hosted, unlimited executions, and code-level
						flexibility when visual nodes aren't enough.<br></br>
						We build, version, and host n8n workflows that connect
						400+ services with advanced branching, webhooks, and
						custom JavaScript.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5> Custom n8n Workflow Design</h5>
							<p style={{ color: 'gray' }}>
								Multi-step workflows with conditional logic,
								error handling, retry loops, and custom Code
								nodes. Every flow is documented, credential-safe,
								and ready to survive real-world failures.
							</p>
						</div>
						<div class='card'>
							<h5>Self-Hosted n8n Setup</h5>
							<p style={{ color: 'gray' }}>
								We deploy self-hosted n8n on your infrastructure
								(VPS, Docker, or Kubernetes) with SSL, backups,
								and monitoring — cutting Zapier-tier billing and
								unlocking unlimited workflow executions.
							</p>
						</div>
						<div class='card'>
							<h5>Workflow Debugging &amp; Optimization</h5>
							<p style={{ color: 'gray' }}>
								Existing n8n stack running slow or silently
								failing? We audit, refactor, and optimize
								workflows — reducing execution time, API costs,
								and error rates across the board.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<FaCode /> Make.com Scenarios
					</div>
					<p class='swwd-desc'>
						Make.com is perfect for visual, complex branching logic
						with built-in data stores, iterators, and routers.
						We design scenarios that hold up under production load
						— with error handling modules, data validation, and
						cost-efficient operation usage.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Advanced Scenario Architecture</h5>
							<p style={{ color: 'gray' }}>
								We design Make.com scenarios with routers,
								iterators, aggregators, and data stores —
								handling complex branching, bulk operations,
								and stateful processing without running into
								operation limits.
							</p>
						</div>
						<div class='card'>
							<h5>Error Handlers &amp; Monitoring</h5>
							<p style={{ color: 'gray' }}>
								Every scenario includes break handlers, retry
								logic, and error notifications — so you know
								about failures in minutes, not days. Paired
								with execution logs and cost tracking for full
								observability.
							</p>
						</div>
						<div class='card'>
							<h5>Operation-Cost Optimization</h5>
							<p style={{ color: 'gray' }}>
								Make.com bills per operation. We audit existing
								scenarios and refactor them to use fewer
								operations per run — often cutting the monthly
								bill by 40–70% without losing functionality.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<GrReactjs /> Zapier Integration
					</div>
					<p class='swwd-desc'>
						Zapier shines for fast, reliable, one-to-one
						integrations across 6,000+ apps. We build Zaps that
						just work — with Code by Zapier, Paths, and Filters for
						logic that visual steps alone can't handle.<br></br>
						When a Zap hits its limits, we migrate to Make or n8n.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Multi-Step Zaps with Paths &amp; Filters</h5>
							<p style={{ color: 'gray' }}>
								Branching logic, conditional triggers, and
								filtered paths — built cleanly so you can read
								the logic six months later. Perfect for lead
								routing, notifications, and cross-app data
								sync.
							</p>
						</div>
						<div class='card'>
							<h5>Code by Zapier (Python / JS)</h5>
							<p style={{ color: 'gray' }}>
								When native steps can't do it, we drop in
								custom Python or JavaScript — transforming
								payloads, calling external APIs, or handling
								complex logic inside the Zap itself.
							</p>
						</div>
						<div class='card'>
							<h5>Zapier → n8n / Make Migration</h5>
							<p style={{ color: 'gray' }}>
								Outgrowing Zapier's task limits or pricing?
								We rebuild your Zaps on n8n or Make — keeping
								all functionality while cutting monthly cost
								and unlocking advanced logic.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<IoMdLaptop /> Python Development
					</div>
					<p class='swwd-desc'>
						Python is the engine behind every serious automation
						stack. We build custom services, APIs, data pipelines,
						and backend tools — filling the gaps no-code can't
						reach, and powering the intelligence behind your
						workflows.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Custom APIs &amp; Backends</h5>
							<p style={{ color: 'gray' }}>
								FastAPI / Django REST backends with clean
								schemas, auth, and documentation — exposed as
								the central nervous system your automations
								and frontends talk to.
							</p>
						</div>
						<div class='card'>
							<h5>Data Pipelines &amp; ETL</h5>
							<p style={{ color: 'gray' }}>
								Ingestion, transformation, and loading
								pipelines that move data between databases,
								warehouses, and SaaS tools — scheduled,
								monitored, and idempotent.
							</p>
						</div>
						<div class='card'>
							<h5>ML &amp; Computer Vision</h5>
							<p style={{ color: 'gray' }}>
								Classification, detection, and image
								processing services — including production-
								ready medical imaging and document-recognition
								models deployed as APIs.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<TfiMobile /> Web Scraping
					</div>
					<p class='swwd-desc'>
						Enterprise-grade scraping pipelines that extract
						clean, structured data at scale — handling pagination,
						JavaScript rendering, proxy rotation, and anti-bot
						detection.<br></br> From one-off crawls to real-time
						monitoring, our scrapers feed CRMs, analytics, and
						decision systems reliably.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Directory &amp; Lead Scraping</h5>
							<p style={{ color: 'gray' }}>
								Extract business directories, LinkedIn-style
								profiles, and B2B sources at scale — with
								email enrichment and direct push into HubSpot,
								Close.io, or any CRM via n8n.
							</p>
						</div>
						<div class='card'>
							<h5>JS-Rendered &amp; Anti-Bot Scraping</h5>
							<p style={{ color: 'gray' }}>
								Playwright / Puppeteer-based scraping for
								heavily-protected sites — with session
								handling, fingerprint rotation, and residential
								proxy integration.
							</p>
						</div>
						<div class='card'>
							<h5>Real-Time Monitoring Pipelines</h5>
							<p style={{ color: 'gray' }}>
								Scheduled scrapers that track prices,
								inventory, competitor changes, or market data
								— piping diffs into Slack, Notion, or your
								internal dashboards as events occur.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<GoFileDirectory /> CRM Automation
					</div>
					<p class='swwd-desc'>
						Your CRM should be an active operator, not a read-only
						database.<br></br> We automate lead capture, scoring,
						enrichment, and outreach across HubSpot, GoHighLevel,
						Salesforce, and Close.io — so your sales team only
						touches deals that are ready to close.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Lead Capture &amp; Enrichment</h5>
							<p style={{ color: 'gray' }}>
								Ingest leads from forms, scrapers, and paid
								channels — auto-enrich with email, phone,
								company data — and drop cleanly scored records
								into the right CRM pipeline.
							</p>
						</div>
						<div class='card'>
							<h5>Cross-Platform CRM Sync</h5>
							<p style={{ color: 'gray' }}>
								Keep HubSpot, GoHighLevel, Close.io, and
								Salesforce in sync with each other — or with
								Notion, Airtable, and Google Sheets — using
								webhook-driven automations that don't double-
								write or lose data.
							</p>
						</div>
						<div class='card'>
							<h5>Outreach &amp; Follow-Up Automation</h5>
							<p style={{ color: 'gray' }}>
								Automated email / SMS sequences, meeting
								scheduling, and follow-up reminders —
								triggered by behavior, lead score, or
								pipeline stage, not manual rep effort.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<LuRadioTower /> Custom Integrations
					</div>
					<p class='swwd-desc'>
						Your stack will always include tools nobody has
						integrated before.<br></br> We build custom webhooks,
						middleware services, and API bridges that connect any
						two systems — turning isolated tools into a unified
						operations layer.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Webhook &amp; API Bridges</h5>
							<p style={{ color: 'gray' }}>
								Middleware services that translate, transform,
								and route payloads between systems — with
								auth, retry, and logging baked in. Perfect for
								"this tool doesn't talk to that tool" problems.
							</p>
						</div>
						<div class='card'>
							<h5>Notion &amp; Airtable Ops Systems</h5>
							<p style={{ color: 'gray' }}>
								Notion and Airtable databases wired into your
								workflow stack — becoming the operational
								source of truth for projects, payouts,
								customer data, and team workflows.
							</p>
						</div>
						<div class='card'>
							<h5>Google Workspace Automation</h5>
							<p style={{ color: 'gray' }}>
								Sheets, Gmail, Calendar, and Drive automations
								— from row-triggered workflows to auto-
								generated docs and calendar invites — with
								proper OAuth and quota management.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/** faqs section */}
			<div className='faq-section'>
				<h2>Frequently Asked Questions</h2>
				<p className='subtitle'>
					Quick answers to what teams ask us most before starting a
					project.
				</p>

				<div className='faq-list'>
					{faqData.map((item, index) => (
						<div
							key={index}
							className={`faq-item ${openIndex === index ? 'active' : ''}`}>
							<button
								className='faq-question'
								onClick={() => toggleFAQ(index)}
								aria-expanded={openIndex === index}>
								<span>{item.question}</span>
								<span className='arrow'>
									{openIndex === index ? (
										<FaChevronUp />
									) : (
										<FaChevronDown
											style={{ color: 'white' }}
										/>
									)}
								</span>
							</button>

							<div className='faq-answer-wrapper'>
								<div className='faq-answer'>
									{item.answer || (
										<em style={{ color: '#888' }}>
											Project timelines depend on scope.
											Simple integrations deliver in 2–5
											days, while multi-system AI
											workflows, CRM rollouts, and
											scraping pipelines typically
											complete within 1–3 weeks.
										</em>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/**testimonials */}

			<Testimonials />

			<FinalCTA />
		</div>
	)
}

export default Services
