import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaArrowRight, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import { getServiceBySlug, SERVICES } from './servicesData'
import FinalCTA from './FinalCTA'
import MetricsSection from './MetricsSection'

function ServiceDetail() {
	const { slug } = useParams()
	const navigate = useNavigate()
	const service = getServiceBySlug(slug)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [slug])

	if (!service) {
		return (
			<div className='tt-service-notfound'>
				<h1>Service not found</h1>
				<p>
					That service does not exist.{' '}
					<Link to='/services'>Browse all services</Link>.
				</p>
			</div>
		)
	}

	const { Icon, iconColor, title, tagline, heroBadges, longDescription, features, outcomes, useCases } = service

	const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 4)

	return (
		<div className='tt-svc'>
			{/* HERO */}
			<section className='tt-svc-hero'>
				<div className='tt-svc-hero-inner'>
					<button
						onClick={() => navigate('/services')}
						className='tt-svc-back'>
						<FaArrowLeft /> All Services
					</button>

					<div
						className='tt-svc-icon-wrap'
						style={{ '--icon-color': iconColor }}>
						<Icon />
					</div>

					<h1 className='tt-svc-title'>{title}</h1>
					<p className='tt-svc-tagline'>{tagline}</p>

					<div className='tt-hero-badges'>
						{heroBadges.map((b, i) => (
							<span
								key={i}
								className='tt-badge'>
								{b}
							</span>
						))}
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
				</div>
			</section>

			{/* OVERVIEW */}
			<section className='tt-svc-overview'>
				<span className='tt-section-eyebrow'>Overview</span>
				<h2 className='tt-svc-h2'>What this actually means.</h2>
				<p className='tt-svc-overview-body'>{longDescription}</p>
			</section>

			{/* FEATURES */}
			<section className='tt-svc-features'>
				<div className='tt-svc-features-head'>
					<span className='tt-section-eyebrow'>Capabilities</span>
					<h2 className='tt-svc-h2'>What we build for you.</h2>
				</div>
				<div className='tt-svc-feat-grid'>
					{features.map((f, i) => {
						const FIcon = f.Icon
						return (
							<div
								key={i}
								className='tt-svc-feat'>
								<div className='tt-svc-feat-icon'>
									<FIcon />
								</div>
								<h3>{f.title}</h3>
								<p>{f.body}</p>
							</div>
						)
					})}
				</div>
			</section>

			{/* OUTCOMES + USE CASES (two cols) */}
			<section className='tt-svc-two-col'>
				<div className='tt-svc-col'>
					<span className='tt-section-eyebrow'>Outcomes</span>
					<h2 className='tt-svc-h3'>What you get.</h2>
					<ul className='tt-svc-check-list'>
						{outcomes.map((o, i) => (
							<li key={i}>
								<FaCheckCircle />
								<span>{o}</span>
							</li>
						))}
					</ul>
				</div>
				<div className='tt-svc-col'>
					<span className='tt-section-eyebrow'>Use Cases</span>
					<h2 className='tt-svc-h3'>Where it shines.</h2>
					<ul className='tt-svc-check-list'>
						{useCases.map((u, i) => (
							<li key={i}>
								<FaCheckCircle />
								<span>{u}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			<MetricsSection />

			{/* RELATED SERVICES */}
			<section className='tt-svc-related'>
				<span className='tt-section-eyebrow'>Explore more</span>
				<h2 className='tt-svc-h2'>Other services we ship.</h2>
				<div className='tt-svc-related-grid'>
					{others.map((o) => {
						const OIcon = o.Icon
						return (
							<Link
								key={o.slug}
								to={`/services/${o.slug}`}
								className='tt-svc-related-card'
								style={{ '--icon-color': o.iconColor }}>
								<div className='tt-svc-related-icon'>
									<OIcon />
								</div>
								<h3>{o.title}</h3>
								<p>{o.tagline}</p>
								<span className='tt-svc-related-arrow'>
									<FaArrowRight />
								</span>
							</Link>
						)
					})}
				</div>
			</section>

			<FinalCTA />
		</div>
	)
}

export default ServiceDetail
