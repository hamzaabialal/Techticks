import { FaShieldAlt, FaCheckCircle, FaBolt, FaLock } from 'react-icons/fa'

const ITEMS = [
	{ icon: <FaShieldAlt />, label: 'Production-grade reliability' },
	{ icon: <FaCheckCircle />, label: '99.9% workflow uptime' },
	{ icon: <FaBolt />, label: 'Ships in days, not months' },
	{ icon: <FaLock />, label: 'Full documentation & handoff' },
]

function TrustBar() {
	return (
		<section className='tt-trust-bar'>
			<div className='tt-trust-inner'>
				<div className='tt-trust-label'>Why teams choose TechTicks</div>
				<div className='tt-trust-items'>
					{ITEMS.map((it, i) => (
						<div
							key={i}
							className='tt-trust-item'>
							{it.icon}
							<span>{it.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TrustBar
