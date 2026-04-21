import { useEffect, useRef, useState } from 'react'
import founderimage1 from '../component/images/about-card1.png'
import founderimage2 from '../component/images/about-card2.png'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import FinalCTA from './FinalCTA'

function About() {
	const navigate = useNavigate()
	const StatsCounter = ({ end, duration = 2000, suffix = '+' }) => {
		const [count, setCount] = useState(0)
		const ref = useRef()
		const [start, setStart] = useState(false)

		useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						setStart(true)
					}
				},
				{ threshold: 0.5 },
			)

			if (ref.current) observer.observe(ref.current)

			return () => observer.disconnect()
		}, [])

		useEffect(() => {
			if (!start) return

			let startTime
			const animate = (time) => {
				if (!startTime) startTime = time
				const progress = Math.min((time - startTime) / duration, 1)

				setCount(Math.floor(progress * end))

				if (progress < 1) {
					requestAnimationFrame(animate)
				}
			}

			requestAnimationFrame(animate)
		}, [start, end, duration])

		return (
			<span ref={ref}>
				{count}
				{suffix}
			</span>
		)
	}
	const useFadeInOnScroll = () => {
		const ref = useRef()

		useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('show')
						}
					})
				},
				{ threshold: 0.2 },
			)

			if (ref.current) observer.observe(ref.current)

			return () => observer.disconnect()
		}, [])

		return ref
	}
	const headingRef = useFadeInOnScroll()
	const statsRef = useFadeInOnScroll()
	const contentRef = useFadeInOnScroll()
	const chooseRef = useFadeInOnScroll()
	const foundersRef = useFadeInOnScroll()
	return (
		<div>
			<section
				id='about'
				className='about-page '>
				<hr style={{ color: 'white' }}></hr>
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
				<div
					ref={headingRef}
					className='main-content fade-in '>
					<div className='about'>
						<div className='heading'>
							<h1>
								<span>We</span>
								<span>automate</span>
								<span> the </span>
								<span>operations</span>
								<span>that</span>
								<span>run</span>
								<span> your </span>
								<span>business.</span>
							</h1>
						</div>
						<div className='sub-heading'>
							<p>
								TechTicks is an AI Automation studio. We design
								and ship intelligent workflows with n8n,
								Make.com, Zapier, and custom Python — connecting
								CRMs, AI models, and data sources into systems
								that run themselves. Every workflow ships with
								error handling, documentation, and one rule:
								if it can break silently, it must alert loudly.
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
							See Our Work
						</button>
					</div>

					<div className='tt-hero-trust'>
						<span className='tt-stars'>★★★★★</span>
						<span>Trusted by 30+ operators worldwide</span>
					</div>
				</div>
			</section>

			<div
				ref={statsRef}
				class='stats fade-in'>
				<div class='stat'>
					<h2>
						<StatsCounter end={50} />
					</h2>
					<p>Automations Shipped to Production</p>
				</div>
				<span class='divider'></span>
				<div class='stat'>
					<h2>
						<StatsCounter
							end={100}
							suffix='%'
						/>
					</h2>
					<p>Client Success Rate</p>
				</div>
				<span class='divider'></span>
				<div class='stat'>
					<h2>
						<StatsCounter end={20} />
					</h2>
					<p>Integrated Platforms &amp; APIs</p>
				</div>
			</div>

			<div
				ref={contentRef}
				class='content fade-in'>
				<div class='left'>
					<div className='left-heading'>
						{' '}
						<h1>
							We Engineer Systems.
							<br />
							Not Just Scripts.
						</h1>
					</div>
					<div className='about-card'>
						<div class='top-right'>
							<div class='text-card'>
								<p>
									TechTicks is a specialist AI Automation
									studio. We turn messy, manual operations
									into production workflows — CRM automations,
									AI agents, PDF extraction pipelines,
									scraping systems, and custom Python
									services.
									<br />
									<br />
									Every engagement starts with strategy: we
									map the real bottleneck before touching a
									single node. Then we build for scale —
									versioned, documented, monitored. Because
									an automation that fails silently is worse
									than no automation at all.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/** chosee */}
			<section
				ref={chooseRef}
				className='why-choose fade-in'>
				<div className='container'>
					<div className='left'>
						<h2>
							Why Teams Choose
							<br />
							TechTicks
						</h2>
						<span>
							Because shipped automations beat polished decks,
							every time.
						</span>
					</div>

					<div className='right'>
						<div className='cards'>
							<span>01</span>
							<h3>Strategy-first engineering</h3>
							<span>
								We map the bottleneck before touching a node.
							</span>
						</div>

						<div class='cards'>
							<span>02</span>
							<h3>Production-grade workflows</h3>
							<span>
								Error handling, retries, alerts — built in.
							</span>
						</div>

						<div class='cards'>
							<span>03</span>
							<h3>Platform-agnostic</h3>
							<span>
								n8n, Make.com, Zapier, Python — the right tool
								for the job.
							</span>
						</div>

						<div class='cards'>
							<span>04</span>
							<h3>Ongoing ownership</h3>
							<span>
								Monitoring, iteration, and new feature delivery
								after launch.
							</span>
						</div>
					</div>
				</div>
			</section>

			{/** HOW WE WORK SECTION */}
			<section
				ref={foundersRef}
				class='founders fade-in'>
				<h2>How We Work</h2>
				<p>
					A proven, execution-driven process — from first call to
					production rollout.
				</p>

				<div class='founder-boxes'>
					<div class='founder-card'>
						<div className='founder-detail'>
							<h3>01 · Discovery Call</h3>
							<span>
								We diagnose the actual bottleneck — what
								breaks, where time leaks, and what "done"
								looks like in numbers.
							</span>
						</div>
						<img
							src={founderimage1}
							alt='Discovery'
						/>
					</div>

					<div class='founder-card'>
						<div className='founder-detail '>
							<h3>02 · Build &amp; Ship</h3>
							<span>
								We architect, build, test, and deploy the
								workflow — with documentation, monitoring, and
								handover training included.
							</span>
						</div>
						<img
							src={founderimage2}
							alt='Build'
							style={{ width: '32rem' }}
						/>
					</div>
				</div>
			</section>

			<FinalCTA />
		</div>
	)
}

export default About
