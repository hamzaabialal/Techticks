import {
	SiN8N,
	SiZapier,
	SiOpenai,
	SiAnthropic,
	SiHubspot,
	SiSalesforce,
	SiNotion,
	SiAirtable,
	SiSlack,
	SiGoogle,
	SiPython,
	SiFastapi,
	SiStripe,
	SiDjango,
	SiPostgresql,
	SiSupabase,
} from 'react-icons/si'
import { TbApiApp } from 'react-icons/tb'

const BRANDS = [
	{ Icon: SiN8N, name: 'n8n' },
	{ Icon: TbApiApp, name: 'Make.com' },
	{ Icon: SiZapier, name: 'Zapier' },
	{ Icon: SiOpenai, name: 'OpenAI' },
	{ Icon: SiAnthropic, name: 'Claude' },
	{ Icon: SiHubspot, name: 'HubSpot' },
	{ Icon: SiSalesforce, name: 'Salesforce' },
	{ Icon: SiNotion, name: 'Notion' },
	{ Icon: SiAirtable, name: 'Airtable' },
	{ Icon: SiSlack, name: 'Slack' },
	{ Icon: SiGoogle, name: 'Google Workspace' },
	{ Icon: SiPython, name: 'Python' },
	{ Icon: SiFastapi, name: 'FastAPI' },
	{ Icon: SiDjango, name: 'Django' },
	{ Icon: SiPostgresql, name: 'Postgres' },
	{ Icon: SiSupabase, name: 'Supabase' },
	{ Icon: SiStripe, name: 'Stripe' },
]

function AutomationBrands({ title = 'Tools & Platforms We Master' }) {
	const doubled = [...BRANDS, ...BRANDS]
	return (
		<section className='tt-brands'>
			<h2 className='tt-brands-title'>{title}</h2>
			<p className='tt-brands-sub'>
				We design production-grade automations across the modern operator stack.
			</p>
			<div className='tt-brands-track-wrap'>
				<div className='tt-brands-track'>
					{doubled.map(({ Icon, name }, i) => (
						<div
							key={i}
							className='tt-brand-chip'>
							<Icon className='tt-brand-icon' />
							<span>{name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AutomationBrands
