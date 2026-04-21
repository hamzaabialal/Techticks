import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FinalCTA from './FinalCTA'
import MetricsSection from './MetricsSection'

gsap.registerPlugin(ScrollTrigger)

const projects = [
	{
		category: 'n8n Automation',
		title: 'Automated Calendar Task Scheduling with n8n',
		image: encodeURI(
			'/Add Task in Calendor Automatically using n8n.png',
		),
		left: "An n8n workflow that listens for new tasks across CRM, email, and project tools — then auto-creates calendar events with the right attendees, timezone, and buffer logic. No more manually dragging events onto a calendar; the schedule builds itself as work comes in.",
		right:
			'Handles recurring patterns, conflict detection, and reschedule propagation across Google Calendar and Outlook. Includes a dedupe layer and audit log so nothing gets double-booked — even when the same task triggers through two paths.',
		stack: 'Stack: n8n, Google Calendar API, Microsoft Graph, webhooks.',
	},
	{
		category: 'LinkedIn Outreach Automation',
		title: 'Automated LinkedIn Outreach with n8n + Unipile',
		image: encodeURI(
			'/Linkedin Out Rreadh Using n8n and Unipile.png',
		),
		left: 'An end-to-end outbound engine that scrapes target personas, enriches them with firmographic data, and runs multi-step LinkedIn outreach through Unipile — with human-like delays, reply detection, and automatic pause-on-response logic.',
		right:
			'Built with rotating sender accounts, limit-aware pacing, and full conversation tracking back into the CRM. The system knows when a lead is warm and routes them to a rep before a generic follow-up ever fires.',
		stack: 'Stack: n8n, Unipile API, Dripify, HubSpot, Supabase.',
	},
	{
		category: 'AI Document Processing',
		title: 'Slack File Downloader + AI PDF Extraction Pipeline',
		image: encodeURI(
			'/File Downloader Slack + PDF Extraction Data from PDFs .png',
		),
		left: 'A Slack-native workflow: drop a PDF into a channel, and within seconds a GPT-powered pipeline downloads it, extracts structured fields — invoice lines, dates, parties, amounts — and posts clean JSON back into the thread plus the target system of record.',
		right:
			'Includes confidence scoring, human-in-the-loop review for low-certainty extractions, and a retry layer for image-heavy PDFs using vision models. What used to take 20+ minutes per document now closes in under 30 seconds end-to-end.',
		stack: 'Stack: Python, OpenAI GPT-4o Vision, Slack API, pdfplumber, FastAPI.',
	},
	{
		category: 'Full-Stack Automation Platform',
		title: 'Hostyo — Property Management Owner Portal (Next.js + Notion)',
		image: encodeURI(
			'/Hostyo Owner Portal Dashbord Build On Nest JS.png',
		),
		left: "A full-stack owner portal where Notion acts as the operational database, Next.js serves real-time dashboards to property owners, and n8n keeps bookings, payouts, and property data in sync across Revolut, calendars, and listing platforms.",
		right:
			'Owners log in to see live reservations, revenue splits, payout history, and property performance — zero support tickets, zero spreadsheet emails. The property manager keeps working in Notion; the portal reflects reality in real time.',
		stack: 'Stack: Next.js 15, Notion API, Tailwind, n8n, Supabase, Vercel.',
	},
	{
		category: 'Financial Automation',
		title: 'Automated Owner Payouts — n8n + Revolut + Notion',
		image: encodeURI('/Howstyo Owner Portal Revolut.png'),
		left: 'A production n8n workflow that segregates owner payouts across multiple Revolut Business accounts, reconciles bookings from Notion, and generates monthly owner statements with a full audit trail — replacing an entire week of finance operations per property manager, every month.',
		right:
			'Every step is instrumented: failed transfers retry automatically, reconciliation mismatches alert the finance Slack, and month-end statements auto-deliver to owners. Hundreds of transactions per month now run without a single manual touch.',
		stack: 'Stack: n8n (self-hosted), Revolut Business API, Notion API, PostgreSQL, Slack.',
	},
	{
		category: 'AI Agent Development',
		title: 'Lavanhu — AI Agent Built with Django + Agno',
		image: encodeURI(
			'/Lavanhu Build By DJango and Using The Agno For AI AGent .png',
		),
		left: 'Architected an AI agent platform on Django and the Agno framework — multi-tool, multi-step reasoning agents that plan, research, and execute tasks across the user\'s connected apps. Includes memory, tool-use, and structured output guardrails out of the box.',
		right:
			'Deployed as a Django backend with a clean REST layer, token-usage monitoring, and streaming response support. Every agent run is observable end-to-end — tool calls, intermediate reasoning, and final output are all logged and replayable.',
		stack: 'Stack: Django, Agno, OpenAI + Claude, PostgreSQL, Redis, Docker.',
	},
]

function Portfolio() {
	const sectionRef = useRef()

	const horizontalRef = useRef()

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia()

			mm.add('(min-width: 1024px)', () => {
				const totalWidth = horizontalRef.current.scrollWidth

				gsap.to(horizontalRef.current, {
					x: -(totalWidth - window.innerWidth),
					ease: 'none',
					scrollTrigger: {
						trigger: sectionRef.current,
						start: 'top top',
						end: () => `+=${totalWidth}`,
						scrub: 1.5,
						pin: true,
						anticipatePin: 1,
						invalidateOnRefresh: true,
					},
				})
			})

			return () => mm.revert()
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<>
			<section
				className='portfolioPage'
				ref={sectionRef}>
				<div
					className='portfolioPage-horizontal'
					ref={horizontalRef}>
					<div className='portfolioPage-container'>
						<div className='main-content'>
							<div className='heading p-m-heading'>
								<h1>
									<span>Automations</span>
									<span>We</span>
									<span>Ship.</span>
									<br />
									<span>Systems</span>
									<span>That</span>
									<span>Run.</span>
								</h1>
							</div>
						</div>
					</div>

					{projects.map((project, index) => (
						<div
							key={index}
							className='portfolioPage-container'>
							<h2 className='portfolioPage-heading'>
								{project.category}
							</h2>

							<div className='portfolioPage-card'>
								<img
									src={project.image}
									alt={project.title}
									loading='lazy'
								/>
							</div>

							<div className='portfolioPage-content'>
								<div className='portfolioPage-left'>
									<h3>{project.title}</h3>
									<p>{project.left}</p>
								</div>

								<div className='portfolioPage-right'>
									<p>{project.right}</p>
									<p>{project.stack}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<MetricsSection />
			<FinalCTA />
		</>
	)
}

export default Portfolio
