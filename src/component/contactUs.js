import { useState } from 'react'
import {
	FaLinkedin,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaAt,
	FaEnvelope,
	FaWhatsapp,
	FaShieldAlt,
	FaBolt,
	FaCheckCircle,
} from 'react-icons/fa'
import { sendContactEmail } from '../lib/sendContactEmail'

function ContactUs() {
	const [sending, setSending] = useState(false)
	const [showToast, setShowToast] = useState(false)

	const handleSubmit = (e) => {
		setSending(true)
		sendContactEmail(e, {
			onSuccess: () => {
				setSending(false)
				setShowToast(true)
				setTimeout(() => setShowToast(false), 4500)
			},
			onError: () => setSending(false),
		}).catch(() => {})
	}

	return (
		<div>
			<div className={`tt-form-success ${showToast ? 'show' : ''}`}>
				✅ Message sent. We'll get back to you within a few hours.
			</div>

			<img
				src='/contactrectleft.png'
				alt=''
				className='contact-leftrect'
			/>
			<img
				src='/contactrectright.png'
				alt=''
				className='contact-rightrect'
			/>
			<section
				id='about'
				className='about-page '>
				<hr style={{ color: 'white' }}></hr>
				<div className='main-content '>
					<div className='about'>
						<div className='heading amazon-heading'>
							<h1>
								<span>Contact Us — </span>
								<span>Let's </span>
								<span>Automate</span>

								<span>What's </span>
								<span>Slowing </span>
								<span>You </span>
								<span>Down</span>
							</h1>
						</div>
						<div className='sub-heading'>
							<p>
								Tell us about the workflow, CRM pain, or data
								problem you want to kill. We respond within a
								few hours — usually with a scoped plan, not a
								sales pitch.
							</p>
						</div>
					</div>

					<div className='tt-hero-cta-row'>
						<button
							className='tt-btn tt-btn-primary tt-btn-lg'
							onClick={() => {
								document
									.getElementById('contact-p-right')
									.scrollIntoView({ behavior: 'smooth' })
							}}>
							Send Message
						</button>
					</div>

					<div className='tt-hero-trust'>
						<span className='tt-stars'>★★★★★</span>
						<span>Response within hours · No sales pitch</span>
					</div>
				</div>
			</section>

			<section className='contact-page'>
				<div className='contact-p-container'>
					{/* LEFT SIDE */}
					<div className='contact-p-left'>
						<h1>
							<span>Get</span> <span>In</span>{' '}
							<span>Touch</span>{' '}
						</h1>

						<p>
							Have any questions or ready to scale your business
							to next level?
						</p>

						<div className='contact-p-card'>
							<div className=''>
								<div className='icons'> </div>
								<div className='contact-card-content'>
									<div className='icon'>
										<FaEnvelope />
									</div>
									<div>
										<h4>Email Us</h4>
										<p>info@techticks.org</p>
									</div>
								</div>
							</div>
						</div>

						<div className='contact-card-content contact-p-card'>
							<div className=''>
								<div className='icons'> </div>
								<div className='c-card-content'>
									<div className='icon'>
										<FaWhatsapp />
									</div>
									<div>
										<h4>Call Us</h4>
										<p>+1 (320) 544-0303</p>
									</div>
								</div>
							</div>
						</div>

						<div className='follow-contact contact-card-content contact-p-card'>
							<h4>Follow Us</h4>

							<div className='socials'>
								<div>
									<a
										href='https://www.linkedin.com/company/aatechticks/posts/?feedView=all'
										target='blank'>
										<FaLinkedin className='contact-icon' />{' '}
									</a>
								</div>
								<div>
									<a
										href='https://www.facebook.com/share/16iV8H9B6q/?mibextid=wwXIfr'
										target='blank'>
										{' '}
										<FaFacebook />{' '}
									</a>
								</div>
								<div>
									{' '}
									<a
										href='https://www.instagram.com/techticks2020?igsh=MWEyenBrdHlhYjVueQ=='
										target='blank'>
										{' '}
										<FaInstagram />{' '}
									</a>
								</div>
								<div>
									<a href='https://x.com/techticks2020?s=21&t=dUXp1ZW478y4kVDJKGGyGQ'>
										{' '}
										<FaTwitter />{' '}
									</a>
								</div>
								<div>
									{' '}
									<a href='https://www.threads.com/@techticks2020?igshid=NTc4MTIwNjQ2YQ=='>
										<FaAt />
									</a>
								</div>
							</div>
						</div>

						{/* Trust reassurance row */}
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: 12,
								marginTop: 28,
							}}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 10,
									color: 'rgba(255,255,255,0.75)',
								}}>
								<FaShieldAlt style={{ color: '#10b981' }} />
								<span>Your info stays private. Never shared.</span>
							</div>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 10,
									color: 'rgba(255,255,255,0.75)',
								}}>
								<FaBolt style={{ color: '#10b981' }} />
								<span>Reply within a few hours (Mon-Fri).</span>
							</div>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 10,
									color: 'rgba(255,255,255,0.75)',
								}}>
								<FaCheckCircle style={{ color: '#10b981' }} />
								<span>Free scoped plan — no sales pitch.</span>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE FORM */}
					<div
						id='contact-p-right'
						className='contact-p-right'>
						<form
							className='contact-p-form'
							onSubmit={handleSubmit}>
							<input
								type='text'
								name='user_name'
								placeholder='Your name'
								required
								minLength={2}
							/>
							<input
								type='email'
								name='user_email'
								placeholder='Work email'
								required
							/>
							<textarea
								name='message'
								placeholder='What workflow should we kill? (e.g., lead routing, PDF extraction, CRM sync…)'
								required
								minLength={10}></textarea>

							<button
								type='submit'
								disabled={sending}
								style={{ opacity: sending ? 0.6 : 1 }}>
								{sending ? 'Sending…' : 'Send Message'}
							</button>
							<p
								style={{
									fontSize: 12,
									color: 'rgba(255,255,255,0.5)',
									marginTop: 12,
								}}>
								We reply within a few hours. No spam, no sales
								pitch.
							</p>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactUs
