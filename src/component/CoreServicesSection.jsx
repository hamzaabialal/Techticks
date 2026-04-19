import React, { useState } from 'react'

const CoreServicesSection = () => {
	const [hoveredIndex, setHoveredIndex] = useState(0)

	const navItems = [
		'Full Account Management',
		'SEO & Organic Visibility',
		'PPC & Ads Management',
		'Dedicated Advertising Expert',
		'Buy with Prime Integration',
		'Seller & Vendor Central Management',
	]
	return (
		<section class='services-wrapper'>
			<img
				src='rectcore1.png'
				alt='decorative'
				class='decorativeimg1'
			/>
			<div class='container'>
				<header class='main-header'>
					<h2>Core Services</h2>
					<p>
						We're not a checkbox vendor, we're your tactical partner
						in scaling on Amazon.
					</p>
				</header>

				<div class='layout-grid'>
					<aside className='sidebar'>
						<nav className='side-nav'>
							{navItems.map((item, index) => {
								const isActive = hoveredIndex === index

								return (
									<button
										key={index}
										className={`nav-btn ${
											isActive ? 'active' : ''
										}`}
										onMouseEnter={() =>
											setHoveredIndex(index)
										}>
										<img
											src={
												isActive
													? 'arrow.png'
													: 'arrowdis.png'
											}
											alt='icon'
										/>
										{item}
									</button>
								)
							})}
						</nav>
					</aside>

					<main class='content-area'>
						<article class='intro'>
							<h3>We Run Your Amazon Business, End to End</h3>
							<p>
								Managing an Amazon account isn't one task, it's
								strategy, execution, monitoring, and constant
								optimization. We take full ownership of your
								Seller or Vendor Central account, handling
								everything from daily operations to long-term
								growth strategy.
							</p>
							<p>
								You don't get "support." You get control,
								consistency, and measurable growth.
							</p>
						</article>

						<div class='glass-card'>
							<h4>Key Features</h4>
							<div class='features-grid'>
								<div class='feature'>
									<img src='/src/component/images/frame1.png' />
									<h5>Complete Account Ownership</h5>
									<p>
										We craft bespoke designs tailored to
										match your brand personality and
										industry.
									</p>
								</div>
								<img
									src='/src/component/images/line1.png'
									class='divider'
								/>
								<div class='feature'>
									<img src='/src/component/images/frame2.png' />
									<h5>Performance-Driven Optimization</h5>
									<p>
										Ensuring your website adapts seamlessly
										to different devices and screen sizes.
									</p>
								</div>
								<img
									src='/src/component/images/line2.png'
									class='divider2'
								/>
								<div class='feature'>
									<img src='/src/component/images/frame3.png' />
									<h5>Proactive Issue & Risk Management</h5>
									<p>
										Prioritizing ease of navigation and
										intuitive user experience.
									</p>
								</div>
								<img
									src='/src/component/images/line1.png'
									class='divider3'
								/>
								<div class='feature'>
									<img src='/src/component/images/frame4.png' />
									<h5>
										Dedicated Experts & Daily Monitoring
									</h5>
									<p>
										Incorporating engaging visuals,
										graphics, and animations to enhance the
										overall appeal.
									</p>
								</div>
							</div>
							<img
								src='/src/component/images/rectcore2.png'
								alt='decorative'
								class='decorativeimg2'
							/>
						</div>

						<div class='glass-card results-section'>
							<h4>Account Management Results</h4>
							<p class='results-sub'>
								Check out some of our most recent Web Design
								projects in the table below
							</p>

							<div class='results-grid'>
								<div class='result-img1'></div>
								<div class='result-img2'></div>
							</div>

							<div class='action-footer'>
								<button class='view-btn'>
									View All Projects{' '}
									<img
										src='rightarrow.png'
										alt=''
									/>
								</button>
							</div>
						</div>
					</main>
				</div>
			</div>
		</section>
	)
}

export default CoreServicesSection
