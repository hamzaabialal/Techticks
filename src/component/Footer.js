import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import logo from '../component/images/logo.png'

const FooterSection = () => {
	const year = new Date().getFullYear()

	return (
		<footer
			id='Footer'
			className='footer-section'>
			{/* Logo and Social */}
			<div className='logo-social-container d-flex justify-content-between align-items-center py-4'>
				<div className='image footer-image'>
					<img
						src={logo}
						alt='logo'
					/>
				</div>
				<div className='social-section'>
					<span className='social-text'>
						Follow Us On Social Media
					</span>
					<div className='social-icons'>
						{' '}
						<a
							href='https://www.linkedin.com/company/aatechticks/posts/?feedView=all'
							target='_blank'
							rel='noopener noreferrer'
							className='social-icon mx-2'>
							<FaLinkedin />
						</a>
						<a
							href='https://www.facebook.com/share/16iV8H9B6q/?mibextid=wwXIfr'
							target='_blank'
							rel='noopener noreferrer'
							className='social-icon mx-2'>
							<FaFacebook />
						</a>
						<a
							href='https://www.instagram.com/techticks2020?igsh=MWEyenBrdHlhYjVueQ=='
							target='_blank'
							rel='noopener noreferrer'
							className='social-icon mx-2'>
							<FaInstagram />
						</a>
						<a
							href='https://x.com/techticks2020?s=21&t=dUXp1ZW478y4kVDJKGGyGQ'
							target='_blank'
							rel='noopener noreferrer'
							className='social-icon mx-2'>
							<FaTwitter />
						</a>
						<a
							href='mailto:info@techticks.org'
							className='social-icon mx-2'>
							<MdEmail />
						</a>
					</div>
				</div>
			</div>

			{/* Navigation Menus */}
			<div className='container-3 navigation footer-nav py-4'>
				<div className='rows row justify-content-between col-md-12'>
					<div className='col-md-2'>
						<h5>Quick Links</h5>
						<ul className='list-unstyled'>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/services'>Services</Link></li>
							<li><Link to='/portfolio'>Portfolio</Link></li>
							<li><Link to='/automations'>Automations</Link></li>
						</ul>
					</div>
					<div className='col-md-2'>
						<h5>Support</h5>
						<ul className='list-unstyled'>
							<li><Link to='/contactUs'>Help Center</Link></li>
							<li><Link to='/contactUs'>Ticket support</Link></li>
							<li><Link to='/#Faq'>FAQs</Link></li>
						</ul>
					</div>
					<div className='col-md-2'>
						<h5>Company</h5>
						<ul className='list-unstyled'>
							<li><Link to='/about'>About Us</Link></li>
							<li><Link to='/about'>Team</Link></li>
							<li><Link to='/contactUs'>Contact Us</Link></li>
						</ul>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='container copyright py-3'>
				<div className='d-flex justify-content-between align-items-center flex-wrap'>
					<span className=''>
						©{year} TechTicks. All Rights Reserved.
					</span>
				</div>
				<div className='links'>
					<span>Version 1.0</span>
					<Link to='/privacy-policy'>Privacy Policy</Link>
					<Link to='/terms'>Terms & Conditions</Link>
					<Link to='/cookie-policy'>Cookie Policy</Link>
				</div>
			</div>
		</footer>
	)
}

export default FooterSection
