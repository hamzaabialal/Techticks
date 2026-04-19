import {
	FaLinkedin,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaAt,
	FaEnvelope,
	FaWhatsapp,
} from 'react-icons/fa'
import { sendContactEmail } from '../lib/sendContactEmail'

function ContactUs() {
	return (
		<div>
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
					<div>
						<button
							onClick={() => {
								document
									.getElementById('contact-p-right')
									.scrollIntoView({ behavior: 'smooth' })
							}}>
							Send Message
						</button>
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
					</div>

					{/* RIGHT SIDE FORM */}
					<div
						id='contact-p-right'
						className='contact-p-right'>
						<form
							className='contact-p-form'
							onSubmit={sendContactEmail}>
							<input
								type='text'
								name='user_name'
								placeholder='Name'
								required
							/>
							<input
								type='email'
								name='user_email'
								placeholder='Email'
								required
							/>
							<textarea
								name='message'
								placeholder='Message'
								required></textarea>

							<button>Send Message</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactUs
