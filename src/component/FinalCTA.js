import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function FinalCTA() {
	const navigate = useNavigate()
	return (
		<section className='tt-final-cta'>
			<h2>
				Stop losing hours to <span>manual work.</span>
			</h2>
			<p>
				Book a free 30-minute audit. We'll map one workflow you can
				automate this month — no obligation, no pitch deck.
			</p>
			<div
				style={{
					display: 'flex',
					gap: 14,
					justifyContent: 'center',
					flexWrap: 'wrap',
				}}>
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
		</section>
	)
}

export default FinalCTA
