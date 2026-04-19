import { useNavigate } from 'react-router-dom'
import rectcore1 from '../component/images/rectcore1.png'
import AmazonServicesComponent from './Amazon-Services'

const HowItworks = () => {
	const navigate = useNavigate()
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
				id='about'
				className='about-page '>
				<hr style={{ color: 'white' }}></hr>
				<div className='main-content '>
					<div className='about'>
						<div className='heading amazon-heading'>
							<h1>
								<span> AI </span>
								<span>Automations </span>
								<span> Engineered </span>
								<br></br>
								<span>for </span>
								<span>Real</span>
								<span> Business</span>
								<span>Operations</span>
							</h1>
						</div>
						<div className='sub-heading'>
							<p>
								From AI agents to CRM sync, scraping pipelines,
								and custom Python services — we design, build,
								and ship production-ready automation systems
								end-to-end, so your team stops doing work that
								software should do.
							</p>
						</div>
					</div>
					<div>
						<button onClick={() => navigate('/contactUs')}>
							Book a Call
						</button>
					</div>
				</div>
			</section>

			<section className='itworks-section itworks-process-section'>
				<div className='itworks-container'>
					<div className='itworks-header'>
						<h2>How it works</h2>
						<p>
							A proven, execution-driven process designed to
							remove guesswork, ship fast, and deliver
							automations that run reliably in production.
						</p>
					</div>

					<div className='itworks-process-steps'>
						<div className='itworks-step'>
							<div className='itworks-number-box'>01</div>
							<h3>Discovery Call</h3>
							<p>
								We diagnose the real bottleneck and define what
								"done" looks like in numbers.
							</p>
						</div>

						<div className='itworks-step'>
							<div className='itworks-number-box'>02</div>
							<h3>Workflow Architecture</h3>
							<p>
								We map the system, pick the right stack, and
								lock scope before a single node is built.
							</p>
						</div>

						<div className='itworks-step'>
							<div className='itworks-number-box'>03</div>
							<h3>Build, Test &amp; Ship</h3>
							<p>
								Production workflows with error handling,
								monitoring, and handover docs included.
							</p>
						</div>

						<div className='itworks-step'>
							<div className='itworks-number-box'>04</div>
							<h3>Monitor &amp; Iterate</h3>
							<p>
								Optional monthly retainer for monitoring,
								optimization, and new-feature rollouts.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='corr-services-wrapper'>
				<img
					src={rectcore1}
					alt='decorative'
					className='corr-decorativeimg1'
				/>

				<AmazonServicesComponent />
			</section>
		</div>
	)
}

export default HowItworks
