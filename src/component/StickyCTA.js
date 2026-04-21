import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function StickyCTA() {
	const navigate = useNavigate()
	const location = useLocation()
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 600)
		}
		window.addEventListener('scroll', onScroll, { passive: true })
		onScroll()
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	if (location.pathname === '/contactUs') return null

	return (
		<button
			className={`tt-sticky-cta ${visible ? 'visible' : ''}`}
			onClick={() => navigate('/contactUs')}
			aria-label='Book a free automation audit'>
			Book a Free Audit
			<FaArrowRight />
		</button>
	)
}

export default StickyCTA
