import { useState, useLayoutEffect, useRef, lazy, Suspense } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import picture1 from '../component/images/slideriImages/Group 319.png'
import picture2 from '../component/images/slideriImages/Mask group.png'
import picture3 from '../component/images/slideriImages/Mask group-1.png'
import picture4 from '../component/images/slideriImages/Mask group-2.png'
import picture5 from '../component/images/slideriImages/Mask group-3.png'
import picture6 from '../component/images/slideriImages/Mask group-4.png'
import picture7 from '../component/images/slideriImages/Group 308.png'
import picture8 from '../component/images/slideriImages/Group 309.png'
import picture9 from '../component/images/slideriImages/Group 310.png'
import picture10 from '../component/images/slideriImages/Group 311.png'
import picture11 from '../component/images/slideriImages/Group 312.png'
import picture12 from '../component/images/slideriImages/Group 313.png'
import picture13 from '../component/images/slideriImages/Group 314.png'
import picture14 from '../component/images/slideriImages/Group 315.png'
import picture15 from '../component/images/slideriImages/Group 316.png'
import picture16 from '../component/images/slideriImages/Group 317.png'
import picture17 from '../component/images/slideriImages/Group 318.png'
import picture18 from '../component/images/slideriImages/Group 319.png'
import picture19 from '../component/images/slideriImages/Group 320.png'
import picture20 from '../component/images/slideriImages/Group 321.png'
import picture21 from '../component/images/slideriImages/Group 322.png'
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

import { Activity, Globe, Code } from 'lucide-react'
import { FaReact } from 'react-icons/fa'
import { BsLaptop } from 'react-icons/bs'
import { FaMobileScreen } from 'react-icons/fa6'
import { PiFolderLockFill, PiCellTowerDuotone } from 'react-icons/pi'
import 'bootstrap/dist/css/bootstrap.min.css'
import Testimonials from './testonomial'
import { useNavigate } from 'react-router-dom'
import { sendContactEmail } from '../lib/sendContactEmail'
import MetricsSection from './MetricsSection'
import HowItWorks from './HowItWorks'
import TrustBar from './TrustBar'
import FinalCTA from './FinalCTA'

const EnhancedParticlesLikeSpline = lazy(() =>
	import('../component/SplineBackground'),
)

const ourWork1 = encodeURI('/Howstyo Owner Portal Revolut.png')
const ourWork2 = encodeURI(
	'/File Downloader Slack + PDF Extraction Data from PDFs .png',
)

gsap.registerPlugin(ScrollTrigger)

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
	const containerRef = useRef(null)
	const cardsRef = useRef(null)

	useLayoutEffect(() => {
		const cards = gsap.utils.toArray('.s-card')
		const totalCards = cards.length

		if (totalCards === 0 || !containerRef.current) return

		const ctx = gsap.context(() => {
			gsap.to(cardsRef.current, {
				x: () => -(cardsRef.current.scrollWidth - window.innerWidth),
				ease: 'none',
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top top',
					end: () =>
						`+=${cardsRef.current.scrollWidth - window.innerWidth}`,
					scrub: 1.5,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
					invalidateOnRefresh: true,

					snap: {
						snapTo: 1 / (totalCards - 1),
						duration: { min: 0.3, max: 0.8 },
						ease: 'power1.out',
					},

					markers: false,
				},
			})
		}, containerRef)

		return () => ctx.revert()
	}, [])

	const partnerLogos = [
		{ src: picture1, style: { height: '30px' } },
		{ src: picture2 },
		{ src: picture3 },
		{ src: picture4 },
		{ src: picture5 },
		{ src: picture6 },
		{ src: picture7, style: { height: '30px' } },
		{ src: picture8, style: { height: '30px' } },
		{ src: picture9, style: { height: '30px' } },
		{ src: picture10, style: { height: '30px' } },
		{ src: picture11, style: { height: '30px' } },
		{ src: picture12, style: { height: '30px' } },
		{ src: picture13, style: { height: '30px' } },
		{ src: picture14, style: { height: '30px' } },
		{ src: picture15, style: { height: '30px' } },
		{ src: picture16, style: { height: '30px' } },
		{ src: picture17, style: { height: '30px' } },
		{ src: picture18, style: { height: '30px' } },
		{ src: picture19, style: { height: '30px' } },
		{ src: picture20, style: { height: '30px' } },
		{ src: picture21, style: { height: '30px' } },
	]

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

			{/**slider */}
			<section>
				<div
					id='Slider'
					className='heading_brands'>
					<h1>Tools &amp; Platforms We Master</h1>
					<div className='slider'>
						<div className='slide-track'>
							{[...partnerLogos, ...partnerLogos, ...partnerLogos].map(
								(logo, i) => (
									<div
										key={i}
										className='slide'>
										<img
											src={logo.src}
											alt=''
											style={logo.style}
										/>
									</div>
								),
							)}
						</div>
					</div>
				</div>
			</section>
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
				className='services-section'
				ref={containerRef}>
				{/* Heading Bahar rakho - yeh pin nahi hoga */}
				<div className='text-center mb-12'>
					<h2 className='title'>Our Services</h2>
					<p className='subtitle'>
						Production-grade automation, AI, and data engineering —
						shipped end-to-end.
					</p>
				</div>

				<div
					className='horizontal-wrapper'
					ref={containerRef}>
					<div
						className='s-cards'
						ref={cardsRef}>
						{/* Card 1 */}
						<div className='s-card'>
							<div className='s-icon '>
								<Activity />
							</div>

							<div className='s-card-content'>
								<h5> AI AUTOMATION</h5>
								<p className='s-text'>
									End-to-end intelligent workflows with AI
									agents, OpenAI, and LangChain — making
									decisions, enriching data, and running
									operations on autopilot.
								</p>
							</div>
						</div>
						{/**card-2 */}
						<div className='s-card'>
							<div className='s-icon '>
								<Globe />
							</div>

							<div className='s-card-content'>
								<h5> n8n WORKFLOWS</h5>
								<p className='s-text'>
									Self-hosted, scalable no-code automations
									built on n8n — complex branching logic,
									webhooks, and 400+ integrations without
									Zapier-tier billing.
								</p>
							</div>
						</div>
						{/**card-3 */}
						<div className='s-card'>
							<div className='s-icon '>
								<Code />
							</div>

							<div className='s-card-content'>
								<h5> MAKE.COM</h5>
								<p className='s-text'>
									Advanced Make.com scenarios with error
									handling, routers, iterators, and data
									stores — production-grade automation that
									never silently fails.
								</p>
							</div>
						</div>
						{/**card-4 */}
						<div className='s-card'>
							<div className='s-icon '>
								<FaReact />
							</div>

							<div className='s-card-content'>
								<h5> ZAPIER</h5>
								<p className='s-text'>
									Fast, reliable Zaps for lead routing,
									notifications, and cross-app sync — plus
									Code by Zapier for logic that visual tools
									can't handle alone.
								</p>
							</div>
						</div>
						{/**card-5 */}
						<div className='s-card'>
							<div className='s-icon '>
								<BsLaptop />
							</div>

							<div className='s-card-content'>
								<h5> PYTHON DEVELOPMENT</h5>
								<p className='s-text'>
									Custom Python services, FastAPI / Django
									backends, data pipelines, and AI tooling
									— the engine under every serious automation
									stack.
								</p>
							</div>
						</div>
						{/**card-6 */}
						<div className='s-card'>
							<div className='s-icon '>
								<FaMobileScreen />
							</div>

							<div className='s-card-content'>
								<h5> WEB SCRAPING</h5>
								<p className='s-text'>
									Enterprise-grade scraping with proxy
									rotation, anti-bot handling, and structured
									output — from directory crawls to real-time
									market data.
								</p>
							</div>
						</div>
						{/**card-7 */}
						<div className='s-card'>
							<div className='s-icon '>
								<PiFolderLockFill />
							</div>

							<div className='s-card-content'>
								<h5> CRM AUTOMATION</h5>
								<p className='s-text'>
									HubSpot, Salesforce, GoHighLevel, Close.io —
									lead scoring, outreach sequences, and
									cross-platform syncs that feed the sales
									engine.
								</p>
							</div>
						</div>
						{/**card-8 */}
						<div className='s-card'>
							<div className='s-icon '>
								<PiCellTowerDuotone />
							</div>

							<div className='s-card-content'>
								<h5> PDF & DATA EXTRACTION</h5>
								<p className='s-text'>
									AI-powered extraction of structured data
									from invoices, contracts, and complex PDFs
									— 100% accuracy on documents that OCR alone
									can't touch.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Button bhi bahar */}
				<div className='s-button  text-center'>
					<a
						href='/Services'
						rel='noopener noreferrer'>
						{' '}
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
						<div className='subWork'>
							<div className='workImageBtn'>
								<img
									src={ourWork1}
									alt=''
									className='workImage'
								/>
								<button className='work-btn gradient-btn'>
									View Project Details
								</button>
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
						</div>
					</div>
					<div className='subWorkContainer'>
						<div className='subWork'>
							<div className='workImageBtn'>
								<img
									src={ourWork2}
									alt=''
									className='workImage'
								/>
								<button className='work-btn gradient-btn'>
									View Project Details
								</button>
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
