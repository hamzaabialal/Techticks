const STEPS = [
	{
		title: 'Discovery & Audit',
		body: 'We map your current workflow, identify the costliest manual bottleneck, and scope the automation — free consultation, no pressure.',
	},
	{
		title: 'Build & Integrate',
		body: 'Our engineers ship a production-grade workflow in n8n, Make.com, or custom Python — with error handling, alerting, and retries baked in from day one.',
	},
	{
		title: 'Launch & Optimize',
		body: 'We monitor the first runs, iterate quickly on edge cases, and hand off docs. Optional monthly retainer keeps it evolving with your business.',
	},
]

function HowItWorks() {
	return (
		<section className='tt-how'>
			<div className='tt-how-head'>
				<span className='tt-how-eyebrow'>Our Process</span>
				<h2 className='tt-how-title'>Three steps from pain to production.</h2>
				<p className='tt-how-sub'>
					No 6-week discovery workshops. No endless meetings. We ship
					real, revenue-impacting automations fast.
				</p>
			</div>

			<div className='tt-how-grid'>
				{STEPS.map((s, i) => (
					<div
						key={i}
						className='tt-how-step'>
						<div className='tt-how-num'>{String(i + 1).padStart(2, '0')}</div>
						<h3>{s.title}</h3>
						<p>{s.body}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default HowItWorks
