import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import {
	FaLinkedin,
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaWhatsapp,
	FaArrowRight,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import logo from '../component/images/logo.png'

const FooterSection = () => {
	const year = new Date().getFullYear()
	const [email, setEmail] = useState('')
	const [subscribed, setSubscribed] = useState(false)

	const handleSubscribe = (e) => {
		e.preventDefault()
		if (!email) return
		setSubscribed(true)
		setEmail('')
		setTimeout(() => setSubscribed(false), 4000)
	}

	return (
		<footer
			id='Footer'
			className='footer-section'>
			{/* TOP ROW — brand left, newsletter right */}
			<div className='tt-footer-top'>
				<div className='tt-footer-brand'>
					<img
						src={logo}
						alt='TechTicks'
						className='tt-footer-logo'
					/>
					<p className='tt-footer-tag'>
						AI automation & workflow engineering. We ship production
						automations that actually run the business.
					</p>
					<div className='tt-footer-socials'>
						<a
							href='https://www.linkedin.com/company/aatechticks/posts/?feedView=all'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='LinkedIn'>
							<FaLinkedin />
						</a>
						<a
							href='https://www.facebook.com/share/16iV8H9B6q/?mibextid=wwXIfr'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Facebook'>
							<FaFacebook />
						</a>
						<a
							href='https://www.instagram.com/techticks2020?igsh=MWEyenBrdHlhYjVueQ=='
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Instagram'>
							<FaInstagram />
						</a>
						<a
							href='https://x.com/techticks2020?s=21&t=dUXp1ZW478y4kVDJKGGyGQ'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='X'>
							<FaTwitter />
						</a>
						<a
							href='mailto:info@techticks.org'
							aria-label='Email'>
							<MdEmail />
						</a>
					</div>
				</div>

				<div className='tt-footer-news'>
					<h4>Get one automation idea per week.</h4>
					<p>
						Short, opinionated emails from the team. Real workflows,
						real numbers, no fluff. Unsubscribe any time.
					</p>
					<form
						className='tt-footer-news-form'
						onSubmit={handleSubscribe}>
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='your@email.com'
							required
							aria-label='Email for newsletter'
						/>
						<button type='submit'>
							{subscribed ? '✓ Thanks!' : 'Subscribe'}{' '}
							{!subscribed && <FaArrowRight />}
						</button>
					</form>
				</div>
			</div>

			{/* NAV ROW */}
			<div className='tt-footer-nav'>
				<div className='tt-footer-col'>
					<h5>Explore</h5>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/services'>Services</Link>
						</li>
						<li>
							<Link to='/portfolio'>Portfolio</Link>
						</li>
						<li>
							<Link to='/automations'>Automations</Link>
						</li>
					</ul>
				</div>
				<div className='tt-footer-col'>
					<h5>Company</h5>
					<ul>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/contactUs'>Contact</Link>
						</li>
						<li>
							<Link to='/about'>Team</Link>
						</li>
					</ul>
				</div>
				<div className='tt-footer-col'>
					<h5>Support</h5>
					<ul>
						<li>
							<Link to='/contactUs'>Help Center</Link>
						</li>
						<li>
							<Link to='/contactUs'>Ticket Support</Link>
						</li>
						<li>
							<a href='/#Faq'>FAQs</a>
						</li>
					</ul>
				</div>
				<div className='tt-footer-col'>
					<h5>Reach Us</h5>
					<ul>
						<li>
							<a href='mailto:info@techticks.org'>
								<MdEmail /> info@techticks.org
							</a>
						</li>
						<li>
							<a
								href='https://wa.me/+13205440303'
								target='_blank'
								rel='noopener noreferrer'>
								<FaWhatsapp /> +1 (320) 544-0303
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* BOTTOM ROW */}
			<div className='tt-footer-bottom'>
				<span>© {year} TechTicks. All rights reserved.</span>
				<div className='tt-footer-links'>
					<Link to='/privacy-policy'>Privacy</Link>
					<Link to='/terms'>Terms</Link>
					<Link to='/cookie-policy'>Cookies</Link>
				</div>
			</div>
		</footer>
	)
}

export default FooterSection
