import { useNavigate } from 'react-router-dom'

function CtaCard() {
	const navigate = useNavigate()
	return (
		<section className='fotter-card'>
			<div className=' f-card'>
				<div className='cta-upper'>
					<h1 className='f-c-title'>
						Ready to Automate What's Slowing You Down?
					</h1>
					<p className='f-c-subtitle'>
						At TechTicks, we design AI workflows, n8n automations,
						scraping pipelines, and custom Python services that
						replace hours of manual ops with systems that just
						run. Tell us the bottleneck — we'll architect the fix,
						ship it in production, and stay on to monitor and
						iterate.
					</p>
				</div>
				<div className='cta-lower'>
					<h5 className='unlock-text'>
						Your next workflow, automated end-to-end.
					</h5>
					<button
						onClick={() => navigate('/contactUs')}
						className=' contact-btn'>
						Contact Us
					</button>
				</div>
			</div>
		</section>
	)
}

export default CtaCard
