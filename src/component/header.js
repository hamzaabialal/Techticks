import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../component/images/logo.png'
import { FaWhatsapp, FaEnvelope, FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import SideTinyStarsBg from './sidesTinyStarsBg'

function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		setIsMobileMenuOpen(false)
	}, [location])

	return (
		<div>
			<SideTinyStarsBg />
			<div className='Navbar'>
				<div className='upper-content'>
					<a
						href='https://wa.me/+13205440303'
						target='_blank'
						rel='noopener noreferrer'>
						<FaWhatsapp /> +1 (320) 544-0303
					</a>
					<a href='mailto:info@techticks.org'>
						<FaEnvelope /> info@techticks.org
					</a>
				</div>

				<hr style={{ color: 'white' }} />

				<div className='lower-content'>
					<div className='image'>
						<img
							src={logo}
							alt='logo'
						/>
					</div>

					<div className='links'>
						<nav className='navigation'>
							<NavLink
								to='/'
								className='nav-link'>
								Home
							</NavLink>

							<NavLink
								to='/services'
								className='nav-link'>
								Services
							</NavLink>

							<NavLink
								to='/automations'
								className='nav-link'>
								Automations
							</NavLink>

							<NavLink
								to='/portfolio'
								className='nav-link'>
								Portfolio
							</NavLink>

							<NavLink
								to='/about'
								className='nav-link'>
								About Us
							</NavLink>

							<button
								onClick={() => navigate('/contactUs')}
								className='header-btn'>
								Contact Us
							</button>
						</nav>
					</div>

					<button
						className='mobile-menu-toggle'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label='Toggle menu'
						aria-expanded={isMobileMenuOpen}>
						<FaBars />
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className='mobile-menu'>
						<nav className='navigation mobile-navigation'>
							<NavLink
								to='/'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								Home
							</NavLink>

							<NavLink
								to='/services'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								Services
							</NavLink>

							<NavLink
								to='/automations'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								Automations
							</NavLink>

							<NavLink
								to='/portfolio'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								Portfolio
							</NavLink>

							<NavLink
								to='/about'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								About Us
							</NavLink>

							<button
								onClick={() => {
									setIsMobileMenuOpen(false)
									navigate('/contactUs')
								}}>
								Contact us
							</button>
						</nav>
					</div>
				)}
			</div>
		</div>
	)
}

export default Header
