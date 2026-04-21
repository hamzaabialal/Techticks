import { useEffect, useRef, useState } from 'react'

const METRICS = [
	{ value: 120, suffix: '+', label: 'Automations Shipped' },
	{ value: 40, suffix: 'K', prefix: '$', label: 'Client Hours Saved / Mo' },
	{ value: 99.9, suffix: '%', label: 'Uptime on Workflows' },
	{ value: 7, suffix: ' days', label: 'Avg. Delivery Time' },
]

function useInViewOnce(ref) {
	const [seen, setSeen] = useState(false)
	useEffect(() => {
		if (!ref.current || seen) return
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setSeen(true)
					obs.disconnect()
				}
			},
			{ threshold: 0.3 },
		)
		obs.observe(ref.current)
		return () => obs.disconnect()
	}, [ref, seen])
	return seen
}

function Counter({ to, prefix = '', suffix = '', active, duration = 1400 }) {
	const [v, setV] = useState(0)
	useEffect(() => {
		if (!active) return
		const start = performance.now()
		const isFloat = to % 1 !== 0
		let raf
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1)
			const eased = 1 - Math.pow(1 - p, 3)
			setV(isFloat ? +(to * eased).toFixed(1) : Math.round(to * eased))
			if (p < 1) raf = requestAnimationFrame(tick)
		}
		raf = requestAnimationFrame(tick)
		return () => raf && cancelAnimationFrame(raf)
	}, [active, to, duration])
	return (
		<span>
			{prefix}
			{v}
			{suffix}
		</span>
	)
}

function MetricsSection() {
	const ref = useRef(null)
	const active = useInViewOnce(ref)
	return (
		<section
			ref={ref}
			className='tt-metrics'
			aria-labelledby='metrics-title'>
			<h2
				id='metrics-title'
				style={{ display: 'none' }}>
				Results
			</h2>
			<div className='tt-metrics-grid'>
				{METRICS.map((m, i) => (
					<div
						key={i}
						className='tt-metric'>
						<span className='tt-metric-value'>
							<Counter
								to={m.value}
								prefix={m.prefix}
								suffix={m.suffix}
								active={active}
							/>
						</span>
						<div className='tt-metric-label'>{m.label}</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default MetricsSection
