import { useEffect, useRef, useCallback } from 'react'
import FinalCTA from './FinalCTA'
import MetricsSection from './MetricsSection'

const encodePath = (p) =>
	p
		.split('/')
		.map((seg) => encodeURIComponent(seg))
		.join('/')

const FALLBACK_IMG =
	"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%236366f1'/%3E%3Cstop offset='100%25' stop-color='%2322d3ee'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='500' fill='%230a0e1a'/%3E%3Crect x='2' y='2' width='796' height='496' rx='16' fill='none' stroke='url(%23g)' stroke-width='2'/%3E%3Ctext x='400' y='260' font-family='system-ui,sans-serif' font-size='22' font-weight='700' fill='%23ffffff' text-anchor='middle'%3EProject Preview%3C/text%3E%3C/svg%3E"

const projects = [
	{
		category: 'n8n Automation',
		title: 'Automated Calendar Task Scheduling with n8n',
		image: encodePath('/Add Task in Calendor Automatically using n8n.png'),
		left: "An n8n workflow that listens for new tasks across CRM, email, and project tools — then auto-creates calendar events with the right attendees, timezone, and buffer logic. No more manually dragging events onto a calendar; the schedule builds itself as work comes in.",
		right:
			'Handles recurring patterns, conflict detection, and reschedule propagation across Google Calendar and Outlook. Includes a dedupe layer and audit log so nothing gets double-booked — even when the same task triggers through two paths.',
		stack: 'Stack: n8n, Google Calendar API, Microsoft Graph, webhooks.',
	},
	{
		category: 'LinkedIn Outreach Automation',
		title: 'Automated LinkedIn Outreach with n8n + Unipile',
		image: encodePath('/Linkedin Out Rreadh Using n8n and Unipile.png'),
		left: 'An end-to-end outbound engine that scrapes target personas, enriches them with firmographic data, and runs multi-step LinkedIn outreach through Unipile — with human-like delays, reply detection, and automatic pause-on-response logic.',
		right:
			'Built with rotating sender accounts, limit-aware pacing, and full conversation tracking back into the CRM. The system knows when a lead is warm and routes them to a rep before a generic follow-up ever fires.',
		stack: 'Stack: n8n, Unipile API, Dripify, HubSpot, Supabase.',
	},
	{
		category: 'AI Document Processing',
		title: 'Slack File Downloader + AI PDF Extraction Pipeline',
		image: encodePath('/File Downloader Slack PDF Extraction.png'),
		left: 'A Slack-native workflow: drop a PDF into a channel, and within seconds a GPT-powered pipeline downloads it, extracts structured fields — invoice lines, dates, parties, amounts — and posts clean JSON back into the thread plus the target system of record.',
		right:
			'Includes confidence scoring, human-in-the-loop review for low-certainty extractions, and a retry layer for image-heavy PDFs using vision models. What used to take 20+ minutes per document now closes in under 30 seconds end-to-end.',
		stack: 'Stack: Python, OpenAI GPT-4o Vision, Slack API, pdfplumber, FastAPI.',
	},
	{
		category: 'Full-Stack Automation Platform',
		title: 'Hostyo — Property Management Owner Portal (Next.js + Notion)',
		image: encodePath('/Hostyo Owner Portal Dashbord Build On Nest JS.png'),
		left: "A full-stack owner portal where Notion acts as the operational database, Next.js serves real-time dashboards to property owners, and n8n keeps bookings, payouts, and property data in sync across Revolut, calendars, and listing platforms.",
		right:
			'Owners log in to see live reservations, revenue splits, payout history, and property performance — zero support tickets, zero spreadsheet emails. The property manager keeps working in Notion; the portal reflects reality in real time.',
		stack: 'Stack: Next.js 15, Notion API, Tailwind, n8n, Supabase, Vercel.',
	},
	{
		category: 'Financial Automation',
		title: 'Automated Owner Payouts — n8n + Revolut + Notion',
		image: encodePath('/Howstyo Owner Portal Revolut.png'),
		left: 'A production n8n workflow that segregates owner payouts across multiple Revolut Business accounts, reconciles bookings from Notion, and generates monthly owner statements with a full audit trail — replacing an entire week of finance operations per property manager, every month.',
		right:
			'Every step is instrumented: failed transfers retry automatically, reconciliation mismatches alert the finance Slack, and month-end statements auto-deliver to owners. Hundreds of transactions per month now run without a single manual touch.',
		stack: 'Stack: n8n (self-hosted), Revolut Business API, Notion API, PostgreSQL, Slack.',
	},
	{
		category: 'AI Agent Development',
		title: 'Lavanhu — AI Agent Built with Django + Agno',
		image: encodePath(
			'/Lavanhu Build By DJango and Using The Agno For AI AGent .png',
		),
		left: "Architected an AI agent platform on Django and the Agno framework — multi-tool, multi-step reasoning agents that plan, research, and execute tasks across the user's connected apps. Includes memory, tool-use, and structured output guardrails out of the box.",
		right:
			'Deployed as a Django backend with a clean REST layer, token-usage monitoring, and streaming response support. Every agent run is observable end-to-end — tool calls, intermediate reasoning, and final output are all logged and replayable.',
		stack: 'Stack: Django, Agno, OpenAI + Claude, PostgreSQL, Redis, Docker.',
	},
]

function Portfolio() {
	const trackRef = useRef(null)
	const pausedRef = useRef(false)
	const userInteractingRef = useRef(false)
	const interactTimeoutRef = useRef(null)

	const markUserInteracting = useCallback(() => {
		userInteractingRef.current = true
		if (interactTimeoutRef.current) clearTimeout(interactTimeoutRef.current)
		interactTimeoutRef.current = setTimeout(() => {
			userInteractingRef.current = false
		}, 1500)
	}, [])

	useEffect(() => {
		const el = trackRef.current
		if (!el) return

		let rafId
		let last = performance.now()
		const SPEED = 28 // px/sec — slow + continuous (matches Home services)

		const tick = (now) => {
			const dt = (now - last) / 1000
			last = now

			if (!pausedRef.current && !userInteractingRef.current) {
				el.scrollLeft += SPEED * dt
				const half = el.scrollWidth / 2
				if (el.scrollLeft >= half) {
					el.scrollLeft -= half
				}
			}
			rafId = requestAnimationFrame(tick)
		}
		rafId = requestAnimationFrame(tick)

		return () => cancelAnimationFrame(rafId)
	}, [])

	const scrollByCard = (dir) => {
		const el = trackRef.current
		if (!el) return
		const card = el.querySelector('.portfolioPage-projectCard')
		const gap = 32
		const cardWidth = card ? card.offsetWidth + gap : 420
		markUserInteracting()
		el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
	}

	const handleEnter = () => {
		pausedRef.current = true
	}
	const handleLeave = () => {
		pausedRef.current = false
	}

	return (
		<>
			<section className='portfolioPage'>
				<div className='portfolioPage-inner'>
					<div className='portfolioPage-header'>
						<h1 className='portfolioPage-heroTitle'>
							<span>Automations We Ship.</span>
							<br />
							<span>Systems That Run.</span>
						</h1>
						<div className='portfolioPage-controls'>
							<button
								type='button'
								aria-label='Previous project'
								onClick={() => scrollByCard(-1)}>
								<svg
									width='18'
									height='18'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2.5'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<polyline points='15 18 9 12 15 6' />
								</svg>
							</button>
							<button
								type='button'
								aria-label='Next project'
								onClick={() => scrollByCard(1)}>
								<svg
									width='18'
									height='18'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2.5'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<polyline points='9 18 15 12 9 6' />
								</svg>
							</button>
						</div>
					</div>

					<div
						className='portfolioPage-marquee'
						ref={trackRef}
						onMouseEnter={handleEnter}
						onMouseLeave={handleLeave}
						onWheel={markUserInteracting}
						onTouchStart={() => {
							handleEnter()
							markUserInteracting()
						}}
						onTouchEnd={handleLeave}
						onScroll={markUserInteracting}>
						{[...projects, ...projects].map((project, index) => (
							<article
								key={`${project.title}-${index}`}
								className='portfolioPage-projectCard'>
								<div className='portfolioPage-projectCard-imgWrap'>
									<img
										src={project.image}
										alt={project.title}
										loading='lazy'
										onError={(e) => {
											e.currentTarget.onerror = null
											e.currentTarget.src = FALLBACK_IMG
										}}
									/>
								</div>
								<div className='portfolioPage-projectCard-body'>
									<span className='portfolioPage-projectCard-cat'>
										{project.category}
									</span>
									<h3>{project.title}</h3>
									<p className='portfolioPage-projectCard-desc'>
										{project.left}
									</p>
									<p className='portfolioPage-projectCard-stack'>
										{project.stack}
									</p>
								</div>
							</article>
						))}
					</div>

					<p className='portfolioPage-hint'>
						Hover to pause · drag or use arrows to explore
					</p>
				</div>
			</section>
			<MetricsSection />
			<FinalCTA />
		</>
	)
}

export default Portfolio
