import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaArrowRight, FaTimes } from 'react-icons/fa'

const SHOWN_KEY = 'tt_exit_intent_shown'
const SESSION_TTL_MS = 24 * 60 * 60 * 1000

function ExitIntent() {
	const [open, setOpen] = useState(false)
	const triggeredRef = useRef(false)
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		const prev = Number(localStorage.getItem(SHOWN_KEY) || 0)
		if (Date.now() - prev < SESSION_TTL_MS) return
		if (location.pathname === '/contactUs') return

		const onMouseOut = (e) => {
			if (triggeredRef.current) return
			if (e.clientY <= 0 && !e.relatedTarget && !e.toElement) {
				triggeredRef.current = true
				setOpen(true)
				localStorage.setItem(SHOWN_KEY, Date.now().toString())
			}
		}
		const onKey = (e) => {
			if (e.key === 'Escape') setOpen(false)
		}

		window.addEventListener('mouseout', onMouseOut)
		window.addEventListener('keydown', onKey)
		return () => {
			window.removeEventListener('mouseout', onMouseOut)
			window.removeEventListener('keydown', onKey)
		}
	}, [location.pathname])

	if (location.pathname === '/contactUs') return null

	return (
		<div
			className={`tt-exit-overlay ${open ? 'show' : ''}`}
			onClick={() => setOpen(false)}
			aria-hidden={!open}>
			<div
				className='tt-exit-modal'
				onClick={(e) => e.stopPropagation()}
				role='dialog'
				aria-modal='true'
				aria-labelledby='exit-title'>
				<button
					className='tt-exit-close'
					onClick={() => setOpen(false)}
					aria-label='Close'>
					<FaTimes />
				</button>
				<h3 id='exit-title'>
					Before you go — <span>book a free audit</span> on us.
				</h3>
				<p>
					30 minutes. We'll map one workflow you can automate this
					month and send you a scoped plan. No pitch, no pressure.
				</p>
				<button
					className='tt-btn tt-btn-primary tt-btn-lg'
					onClick={() => {
						setOpen(false)
						navigate('/contactUs')
					}}>
					Grab My Free Audit <FaArrowRight />
				</button>
				<p className='tt-exit-modal-small'>
					We reply within a few hours · 100% free · No credit card
				</p>
			</div>
		</div>
	)
}

export default ExitIntent
