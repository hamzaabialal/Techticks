import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react'

import Slider from '../slider'
import CtaCard from './Cta-card'

import {
	FaArrowRight,
	FaLinkedin,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaAt,
	FaEnvelope,
	FaWhatsapp,
	FaChevronDown,
	FaChevronUp,
} from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.min.css'
import Testimonials from './testonomial'
import { useNavigate } from 'react-router-dom'
import { sendContactEmail } from '../lib/sendContactEmail'
import MetricsSection from './MetricsSection'
import HowItWorks from './HowItWorks'
import TrustBar from './TrustBar'
import FinalCTA from './FinalCTA'
import AutomationBrands from './AutomationBrands'
import { SERVICES } from './servicesData'

const EnhancedParticlesLikeSpline = lazy(() =>
	import('../component/SplineBackground'),
)

const encodePath = (p) =>
	p
		.split('/')
		.map((seg) => encodeURIComponent(seg))
		.join('/')
const ourWork1 = encodePath('/Howstyo Owner Portal Revolut.png')
const ourWork2 = encodePath('/File Downloader Slack PDF Extraction.png')

function Home() {
	const navigate = useNavigate()

	const faqData = [
		{
			question: 'What kind of automations do you build?',
			answer: 'We design end-to-end AI workflows — CRM automations, lead scoring, AI agents (OpenAI, LangChain), PDF data extraction, web scraping pipelines, and custom API integrations using n8n, Make.com, and Zapier. If it can be automated, we have probably already built it.',
		},
		{
			question: 'Which tools and platforms do you work with?',
			answer: 'n8n, Make.com, Zapier, OpenAI / LangChain, HubSpot, GoHighLevel (GHL), Salesforce, Close.io, Notion, Airtable, Google Workspace, and custom Python services. We also build full-stack applications when automations need a dashboard or admin panel.',
		},
		{
			question: 'Can you migrate my existing Zapier / Make.com workflows to n8n?',
			answer: 'Absolutely. We regularly migrate workflows from Zapier or Make.com to self-hosted n8n to cut operational costs and unlock advanced logic — without losing any existing functionality.',
		},
		{
			question: 'Do you offer ongoing monitoring and support?',
			answer: 'Yes. Every automation we ship includes error handling, alerting, documentation, and an optional monthly retainer for monitoring, optimization, and new feature rollouts.',
		},
		{
			question: 'How fast can you deliver?',
			answer: 'Simple integrations ship in 2–5 days. Complex multi-step AI workflows, CRM rollouts, and scraping pipelines typically deliver within 1–3 weeks depending on scope. You will get a firm timeline before we start.',
		},
	]

	const [openIndex, setOpenIndex] = useState(null)
	const [sending, setSending] = useState(false)
	const [showToast, setShowToast] = useState(false)

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	const handleSubmit = (e) => {
		setSending(true)
		sendContactEmail(e, {
			onSuccess: () => {
				setSending(false)
				setShowToast(true)
				setTimeout(() => setShowToast(false), 4000)
			},
			onError: () => setSending(false),
		}).catch(() => {})
	}
	const servicesTrackRef = useRef(null)
	const servicesPausedRef = useRef(false)
	const servicesInteractRef = useRef(false)
	const servicesInteractTimerRef = useRef(null)

	const markServicesInteracting = useCallback(() => {
		servicesInteractRef.current = true
		if (servicesInteractTimerRef.current)
			clearTimeout(servicesInteractTimerRef.current)
		servicesInteractTimerRef.current = setTimeout(() => {
			servicesInteractRef.current = false
		}, 1600)
	}, [])

	useEffect(() => {
		const el = servicesTrackRef.current
		if (!el) return

		let rafId
		let last = performance.now()
		const SPEED = 28 // px/sec — slow and continuous

		const tick = (now) => {
			const dt = (now - last) / 1000
			last = now

			if (!servicesPausedRef.current && !servicesInteractRef.current) {
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

	const scrollServicesBy = (dir) => {
		const el = servicesTrackRef.current
		if (!el) return
		const card = el.querySelector('.s-card')
		const gap = 32
		const cardWidth = card ? card.offsetWidth + gap : 420
		markServicesInteracting()
		el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
	}


	return (
		<div>
			<div className={`tt-form-success ${showToast ? 'show' : ''}`}>
				✅ Message sent. We'll get back to you within a few hours.
			</div>
			<section
				id='Home'
				className='home-page'>
				{/* 3D Background - lazy loaded so it doesn't block first paint */}
				<Suspense fallback={null}>
					<EnhancedParticlesLikeSpline />
				</Suspense>

				<hr style={{ color: 'white' }} />

				<div className='main-content'>
					<div className='heading'>
						<h1>
							<span>Automate.</span>
							<span>Integrate.</span>
							<span>Scale.</span>
							<br />
							<span>AI</span>
							<span>Workflows</span>
							<span>Built</span>
							<span>for</span>
							<span>Operators.</span>
						</h1>
					</div>

					<div className='sub-heading'>
						<p>
							We design intelligent automation systems with n8n,
							Make.com, Zapier, and Python — connecting your CRM,
							<br></br> data, and AI into workflows that actually run
							the business.
						</p>
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
						<span>Rated 5.0 by 30+ operators</span>
						<span className='tt-divider'></span>
						<span>Based in the US · Serving global teams</span>
					</div>

					<div className='tt-hero-badges'>
						<span className='tt-badge'>
							<span className='tt-badge-dot'></span>
							Accepting 3 new projects in May
						</span>
						<span className='tt-badge'>n8n Certified</span>
						<span className='tt-badge'>OpenAI · LangChain</span>
						<span className='tt-badge'>HubSpot · Salesforce</span>
						<span className='tt-badge'>Make.com · Zapier</span>
					</div>
				</div>
			</section>

			{/* TRUST BAR */}
			<TrustBar />

			{/* METRICS */}
			<MetricsSection />

			{/* AUTOMATION BRAND STRIP */}
			<AutomationBrands />
			{/**services */}
			<section>
				{' '}
				<div
					id='Service'
					className='servSection'
					style={{ paddingBottom: '200px' }}>
					<div className='servHeading'>
						<h1>
							Intelligent automation,
							<br /> engineered for real
							<br /> business outcomes.
						</h1>
						<p>
							From AI agents to multi-system workflows — we ship
							automations that pay for themselves.
						</p>
						<a href='/portfolio'>
							{' '}
							<button class='gradient-btn'>
								Show Case Studies
							</button>
						</a>
					</div>
					<div className='servBlock'>
						<div
							className='servBlockOne'
							id='serBlockBottom'>
							<div className='subServBlockOne'>
								<h3>Built to Scale</h3>
								<p>
									Workflows that <br />
									grow with you.
								</p>
							</div>
							<div className='subServBlockOne'>
								<h3>Zero Downtime</h3>
								<p>
									Error handling + <br />
									alerting, always on.
								</p>
							</div>
						</div>
						<div className='servBlockOne'>
							<div className='subServBlockOne'>
								<h3>Strategy First</h3>
								<p>
									We automate <br />
									business, not tasks.
								</p>
							</div>
							<div className='subServBlockOne'>
								<h3>Ship Fast</h3>
								<p>
									Production-ready <br />
									in days, not months.
								</p>
							</div>
						</div>
						<div className='lines lineone'></div>
						<div className='lines linetwo'></div>
						<div className='lines linethree'></div>
						<div className='lines linefour'></div>
					</div>
				</div>
			</section>

			{/**  services sectionnnn  */}

			<section
				id='Testonomials'
				className='services-section'>
				<div className='services-heading'>
					<div className='text-center mb-12'>
						<h2 className='title'>Our Services</h2>
						<p className='subtitle'>
							Production-grade automation, AI, and data engineering —
							shipped end-to-end.
						</p>
					</div>
					<div className='s-controls'>
						<button
							type='button'
							aria-label='Previous service'
							className='s-nav-btn'
							onClick={() => scrollServicesBy(-1)}>
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
							aria-label='Next service'
							className='s-nav-btn'
							onClick={() => scrollServicesBy(1)}>
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
					className='s-marquee'
					ref={servicesTrackRef}
					onMouseEnter={() => (servicesPausedRef.current = true)}
					onMouseLeave={() => (servicesPausedRef.current = false)}
					onWheel={markServicesInteracting}
					onTouchStart={() => {
						servicesPausedRef.current = true
						markServicesInteracting()
					}}
					onTouchEnd={() => (servicesPausedRef.current = false)}
					onScroll={markServicesInteracting}>
					{[...SERVICES, ...SERVICES].map((svc, i) => {
						const SvcIcon = svc.Icon
						return (
							<div
								key={`${svc.slug}-${i}`}
								className='s-card'
								role='button'
								tabIndex={0}
								onClick={() => navigate(`/services/${svc.slug}`)}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault()
										navigate(`/services/${svc.slug}`)
									}
								}}>
								<div
									className='s-icon'
									style={{ color: svc.iconColor }}>
									<SvcIcon />
								</div>
								<div className='s-card-content'>
									<h5>{svc.title.toUpperCase()}</h5>
									<p className='s-text'>
										{svc.shortDescription}
									</p>
									<span className='s-card-footer'>
										Learn more <FaArrowRight size={12} />
									</span>
								</div>
							</div>
						)
					})}
				</div>

				<div className='s-button text-center'>
					<a
						href='/Services'
						rel='noopener noreferrer'>
						<button className='s-btn'>Show all Services</button>
					</a>
				</div>
			</section>

			{/* HOW IT WORKS */}
			<HowItWorks />

			{/**recomend */}
			<section>
				{' '}
				<section
					id='Recomend'
					className='why-choose-us bg'>
					<div className='gradient-bg'></div>

					<div className='container-lg  px-lg-0'>
						<div className='row all min-vh-100 '>
							{/* Left Side - Title */}
							<div className='col-lg-5 mb-5 mb-lg-0'>
								<h1 className='title-main'>Why Choose Us?</h1>
								<p className='subtitle-main'>
									We engineer automations that outlast the
									hype cycle.
								</p>
							</div>

							{/* Right Side - 3 Hardcoded Cards */}
							<div className='col-lg-7'>
								<div className='cards-wrapper'>
									{/* Card 1 */}
									<div
										className='glass-card'
										style={{ '--card-index': 0 }}>
										<h3 className='card-title text-white'>
											Strategy First
										</h3>
										<p className='card-text'>
											We don't just automate tasks — we
											redesign the workflow around the
											actual business bottleneck, then
											build only what moves the needle.
										</p>
									</div>

									{/* Card 2 */}
									<div
										className='glass-card'
										style={{ '--card-index': 1 }}>
										<h3 className='card-title text-white'>
											Production-Grade
										</h3>
										<p className='card-text'>
											Every workflow ships with error
											handling, retries, alerting, and
											documentation. No silent failures,
											no 3 AM surprises.
										</p>
									</div>

									{/* Card 3 */}
									<div
										className='glass-card'
										style={{ '--card-index': 2 }}>
										<h3 className='card-title text-white'>
											Long-Term Partner
										</h3>
										<p className='card-text'>
											Automations evolve as your stack
											grows. We offer ongoing monitoring,
											optimization, and new-feature
											delivery — not just launch-and-go.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
			{/**slider */}
			<Slider />

			{/** work section */}

			<div
				id='Work'
				className='workSection'>
				<div className='workHeading'>
					<h1>Our Work</h1>
					<p>
						Production automations and AI systems shipped for real
						companies.{' '}
						<br class='d-none d-md-block' />
						Each project replaced hours of manual operations or
						unlocked data that was previously
						<br class='d-none d-md-block' />
						stuck behind spreadsheets and PDFs.
					</p>
				</div>
				<div className='workContainer'>
					<div className='subWorkContainer'>
						<div
							className='subWork'
							role='button'
							tabIndex={0}
							onClick={() => navigate('/portfolio')}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault()
									navigate('/portfolio')
								}
							}}>
							<div className='workImageBtn'>
								<img
									src={ourWork1}
									alt='Automated Payouts with n8n + Revolut + Notion'
									className='workImage'
									loading='lazy'
									onError={(e) => {
										e.currentTarget.onerror = null
										e.currentTarget.src =
											"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%230a0e1a'/%3E%3Crect x='2' y='2' width='796' height='496' rx='16' fill='none' stroke='%236366f1' stroke-width='2'/%3E%3Ctext x='400' y='260' font-family='system-ui,sans-serif' font-size='22' font-weight='700' fill='%23ffffff' text-anchor='middle'%3EProject Preview%3C/text%3E%3C/svg%3E"
									}}
								/>
							</div>
							<div className='workDetails'>
								<h1>
									Automated Payouts — n8n + Revolut + Notion
								</h1>
								<div className='cat-date'>
									<h3>Category: Financial Automation.</h3>
									<h3>2026</h3>
								</div>
								<p>
									A production n8n workflow segregating owner
									payouts across Revolut Business accounts,
									reconciling bookings from Notion, and
									generating monthly statements — replacing a
									full week of finance ops every month.
								</p>
							</div>
							<button
								type='button'
								className='work-btn'
								onClick={(e) => {
									e.stopPropagation()
									navigate('/portfolio')
								}}>
								View Project Details{' '}
								<FaArrowRight size={12} />
							</button>
						</div>
					</div>
					<div className='subWorkContainer'>
						<div
							className='subWork'
							role='button'
							tabIndex={0}
							onClick={() => navigate('/portfolio')}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault()
									navigate('/portfolio')
								}
							}}>
							<div className='workImageBtn'>
								<img
									src={ourWork2}
									alt='Slack File Downloader + AI PDF Extraction'
									className='workImage'
									loading='lazy'
									onError={(e) => {
										e.currentTarget.onerror = null
										e.currentTarget.src =
											"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%230a0e1a'/%3E%3Crect x='2' y='2' width='796' height='496' rx='16' fill='none' stroke='%236366f1' stroke-width='2'/%3E%3Ctext x='400' y='260' font-family='system-ui,sans-serif' font-size='22' font-weight='700' fill='%23ffffff' text-anchor='middle'%3EProject Preview%3C/text%3E%3C/svg%3E"
									}}
								/>
							</div>
							<div className='workDetails'>
								<h1>
									Slack File Downloader + AI PDF Extraction
								</h1>
								<div className='cat-date'>
									<h3>Category: AI &amp; Document AI.</h3>
									<h3>2026</h3>
								</div>
								<p>
									Drop any PDF in Slack and within seconds a
									GPT-4o pipeline downloads it, extracts
									structured fields, and posts clean JSON back
									to the thread plus the target system —
									20 minutes of work closes in 30 seconds.
								</p>
							</div>
							<button
								type='button'
								className='work-btn'
								onClick={(e) => {
									e.stopPropagation()
									navigate('/portfolio')
								}}>
								View Project Details{' '}
								<FaArrowRight size={12} />
							</button>
						</div>
					</div>
				</div>

				<div className='workButton'>
					<a
						style={{ textDecoration: 'none' }}
						href='/Portfolio'
						rel='noopener noreferrer'>
						{' '}
						<button className='gradient-btn'>
							View All Projects
							<FaArrowRight size={16} />
						</button>
					</a>
				</div>
			</div>
			{/**testonomial */}

			<Testimonials />

			{/** contact section */}

			<section className='contact-section'>
				<div className='contact-container'>
					{/* LEFT SIDE */}
					<div className='contact-left'>
						<h1>
							<span>Let's</span> <span>automate</span>{' '}
							<span>what's</span> <br />
							<span>slowing</span> <span>you</span>{' '}
							<span>down.</span>
						</h1>

						<p>
							Tell us about the workflow, CRM pain, or data
							problem you want to kill — we'll reply within a few
							hours.
						</p>

						<div className='contact-card'>
							<div className=''>
								<div className='icons'> </div>
								<div className='c-card-content'>
									<div className='icon'>
										<FaEnvelope />
									</div>
									<div>
										<h4>Email Us</h4>
										<p>info@techticks.org</p>
									</div>
								</div>
							</div>
						</div>

						<div className='contact-card'>
							<div className=''>
								<div className='icons'> </div>
								<div className='c-card-content'>
									<div className='icon'>
										<FaWhatsapp />
									</div>
									<div>
										<h4>Call Us</h4>
										<p>+1 (320) 544-0303</p>
									</div>
								</div>
							</div>
						</div>

						<div className='follow contact-card'>
							<h4>Follow Us</h4>

							<div className='socials'>
								<div>
									<a
										href='https://www.linkedin.com/company/aatechticks/posts/?feedView=all'
										target='blank'>
										<FaLinkedin className='contact-icon' />{' '}
									</a>
								</div>
								<div>
									<a
										href='https://www.facebook.com/share/16iV8H9B6q/?mibextid=wwXIfr'
										target='blank'>
										{' '}
										<FaFacebook />{' '}
									</a>
								</div>
								<div>
									{' '}
									<a
										href='https://www.instagram.com/techticks2020?igsh=MWEyenBrdHlhYjVueQ=='
										target='blank'>
										{' '}
										<FaInstagram />{' '}
									</a>
								</div>
								<div>
									<a href='https://x.com/techticks2020?s=21&t=dUXp1ZW478y4kVDJKGGyGQ'>
										<FaTwitter />
									</a>
								</div>
								<div>
									<a href='https://www.threads.com/@techticks2020?igshid=NTc4MTIwNjQ2YQ=='>
										{' '}
										<FaAt />
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE FORM */}
					<div className='contact-right'>
						<form
							className='contact-form'
							onSubmit={handleSubmit}>
							<input
								type='text'
								name='user_name'
								placeholder='Your name'
								required
								minLength={2}
							/>
							<input
								type='email'
								name='user_email'
								placeholder='Work email'
								required
							/>
							<textarea
								name='message'
								placeholder='What workflow should we kill? (e.g., lead routing, PDF extraction, CRM sync…)'
								required
								minLength={10}></textarea>

							<button
								type='submit'
								disabled={sending}
								style={{ opacity: sending ? 0.6 : 1 }}>
								{sending ? 'Sending…' : 'Send Message'}
							</button>
							<p
								style={{
									fontSize: 12,
									color: 'rgba(255,255,255,0.5)',
									marginTop: 12,
								}}>
								We reply within a few hours. No spam, no sales pitch.
							</p>
						</form>
					</div>
				</div>
			</section>

			{/** faqs section */}
			<div className='faq-section'>
				<h2>Frequently Asked Questions</h2>
				<p className='subtitle'>
					Everything teams ask before kicking off an automation
					project with us.
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
											complete within 1–3 weeks. You get a
											firm timeline upfront.
										</em>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<CtaCard />

			{/* FINAL CTA */}
			<FinalCTA />
		</div>
	)
}

export default Home
