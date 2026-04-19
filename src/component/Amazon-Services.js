import React, { useState, useRef, useEffect } from 'react'
import {
	AnimatePresence,
	motion,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion'
import line1 from '../component/images/line1.png'
import line2 from '../component/images/line2.png'
import rectcore2 from '../component/images/rectcore2.png'
import rightarrow from '../component/images/rightarrow.png'
import arrow from '../component/images/arrow.png'
import arrowdis from '../component/images/arrowdis.png'
import { navItems, servicesData } from './amazonServicesData'

const TOTAL = navItems.length

const AmazonServicesComponent = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isLargeDevice, setIsLargeDevice] = useState(false)
	const stickyOuterRef = useRef(null)

	useEffect(() => {
		const checkDeviceSize = () => {
			setIsLargeDevice(window.innerWidth >= 1024)
		}
		checkDeviceSize()
		window.addEventListener('resize', checkDeviceSize)
		return () => window.removeEventListener('resize', checkDeviceSize)
	}, [])

	const { scrollYProgress } = useScroll({
		target: stickyOuterRef,
		offset: ['start start', 'end end'],
	})

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		if (isLargeDevice) {
			const index = Math.min(Math.floor(latest * TOTAL), TOTAL - 1)
			setActiveIndex(index)
		}
	})

	const activeService = servicesData[activeIndex]
	const outerHeight = `${TOTAL * 50}vh`

	const handleNavClick = (index) => {
		setActiveIndex(index)
	}

	// ── MOBILE / TABLET LAYOUT (< 1024px) ──────────────────────────
	if (!isLargeDevice) {
		return (
			<div className='corr-container'>
				<header className='corr-main-header'>
					<h2>Core Services</h2>
					<p>
						We don't bolt automations onto your stack — we
						engineer operational systems that replace manual work
						end-to-end.
					</p>
				</header>

				{/* Content renders in normal flow — no sticky, no scroll trap */}
				<div className='corr-mobile-layout'>
					{/* TOP: content area */}
					<main className='corr-content-area corr-mobile-content'>
						<article className='corr-intro'>
							<h3>{activeService.heading}</h3>
							<p>{activeService.description1}</p>
							<p>{activeService.description2}</p>
						</article>

						<div className='corr-glass-card'>
							<h4>{activeService.keyFeaturesTitle}</h4>
							{/* No AnimatePresence / motion on mobile */}
							<div className='corr-features-grid'>
								<div className='corr-feature'>
									<img
										src={activeService.features[0].icon}
										alt=''
									/>
									<h5>{activeService.features[0].title}</h5>
									<p>{activeService.features[0].desc}</p>
								</div>
								<img
									src={line1}
									className='corr-divider'
									alt=''
								/>
								<div className='corr-feature'>
									<img
										src={activeService.features[1].icon}
										alt=''
									/>
									<h5>{activeService.features[1].title}</h5>
									<p>{activeService.features[1].desc}</p>
								</div>
								<img
									src={line2}
									className='corr-divider2'
									alt=''
								/>
								<div className='corr-feature'>
									<img
										src={activeService.features[2].icon}
										alt=''
									/>
									<h5>{activeService.features[2].title}</h5>
									<p>{activeService.features[2].desc}</p>
								</div>
								<img
									src={line1}
									className='corr-divider3'
									alt=''
								/>
								<div className='corr-feature'>
									<img
										src={activeService.features[3].icon}
										alt=''
									/>
									<h5>{activeService.features[3].title}</h5>
									<p>{activeService.features[3].desc}</p>
								</div>
							</div>
							<img
								src={rectcore2}
								alt='decorative'
								className='corr-decorativeimg2'
							/>
						</div>

						<div className='corr-glass-card corr-results-section'>
							<h4>{activeService.resultsTitle}</h4>
							<p className='corr-results-sub'>
								{activeService.resultsSub}
							</p>
							<div className='corr-results-grid'>
								<div className='corr-result-img1'></div>
								<div className='corr-result-img2'></div>
							</div>
							<div className='corr-action-footer'>
								<button className='corr-view-btn'>
									View All Projects{' '}
									<img
										src={rightarrow}
										alt=''
									/>
								</button>
							</div>
						</div>
					</main>

					{/* BOTTOM: horizontal tab nav */}
					<aside className='corr-sidebar corr-mobile-sidebar'>
						<nav className='corr-side-nav'>
							{navItems.map((item, index) => {
								const isActive = activeIndex === index
								return (
									<button
										key={index}
										className={`corr-nav-btn ${isActive ? 'corr-active' : ''}`}
										onClick={() => handleNavClick(index)}>
										<img
											src={isActive ? arrow : arrowdis}
											alt='icon'
										/>
										{item}
									</button>
								)
							})}
						</nav>
					</aside>
				</div>
			</div>
		)
	}

	// ── DESKTOP LAYOUT (≥ 1024px) — unchanged scroll-based logic ───
	return (
		<div className='corr-container'>
			<header className='corr-main-header'>
				<h2>Core Services</h2>
				<p>
					We don't bolt automations onto your stack — we engineer
					operational systems that replace manual work end-to-end.
				</p>
			</header>

			<div
				ref={stickyOuterRef}
				style={{ height: outerHeight, position: 'relative' }}>
				<div
					style={{
						position: 'sticky',
						top: 0,
						height: '100vh',
						overflow: 'hidden',
					}}>
					<div
						className='corr-layout-grid'
						style={{ height: '70%' }}>
						<aside className='corr-sidebar'>
							<nav className='corr-side-nav'>
								{navItems.map((item, index) => {
									const isActive = activeIndex === index
									return (
										<button
											key={index}
											className={`corr-nav-btn ${isActive ? 'corr-active' : ''}`}
											onClick={() =>
												handleNavClick(index)
											}>
											<img
												src={
													isActive ? arrow : arrowdis
												}
												alt='icon'
											/>
											{item}
										</button>
									)
								})}
							</nav>
						</aside>

						<main className='corr-content-area'>
							<article className='corr-intro'>
								<h3>{activeService.heading}</h3>
								<p>{activeService.description1}</p>
								<p>{activeService.description2}</p>
							</article>

							<div className='corr-glass-card'>
								<h4>{activeService.keyFeaturesTitle}</h4>
								<AnimatePresence mode='wait'>
									<motion.div
										key={activeIndex}
										className='corr-features-grid'
										initial={{ opacity: 0, y: 16 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -16 }}
										transition={{
											duration: 0.28,
											ease: 'easeInOut',
										}}>
										<div className='corr-feature'>
											<img
												src={
													activeService.features[0]
														.icon
												}
												alt=''
											/>
											<h5>
												{
													activeService.features[0]
														.title
												}
											</h5>
											<p>
												{activeService.features[0].desc}
											</p>
										</div>
										<img
											src={line1}
											className='corr-divider'
											alt=''
										/>
										<div className='corr-feature'>
											<img
												src={
													activeService.features[1]
														.icon
												}
												alt=''
											/>
											<h5>
												{
													activeService.features[1]
														.title
												}
											</h5>
											<p>
												{activeService.features[1].desc}
											</p>
										</div>
										<img
											src={line2}
											className='corr-divider2'
											alt=''
										/>
										<div className='corr-feature'>
											<img
												src={
													activeService.features[2]
														.icon
												}
												alt=''
											/>
											<h5>
												{
													activeService.features[2]
														.title
												}
											</h5>
											<p>
												{activeService.features[2].desc}
											</p>
										</div>
										<img
											src={line1}
											className='corr-divider3'
											alt=''
										/>
										<div className='corr-feature'>
											<img
												src={
													activeService.features[3]
														.icon
												}
												alt=''
											/>
											<h5>
												{
													activeService.features[3]
														.title
												}
											</h5>
											<p>
												{activeService.features[3].desc}
											</p>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AmazonServicesComponent
