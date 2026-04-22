import './App.css'
import './enhancements.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './component/Home'
import ContactUs from './component/contactUs'
import About from './component/About'
import Automations from './component/Amazon'
import Services from './component/Services'
import ServiceDetail from './component/ServiceDetail'
import Portfolio from './component/portfolio'
import Header from './component/header'
import FooterSection from './component/Footer'
import StickyCTA from './component/StickyCTA'
import ExitIntent from './component/ExitIntent'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/contactUs'
						element={<ContactUs />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/automations'
						element={<Automations />}
					/>
					<Route
						path='/services'
						element={<Services />}
					/>
					<Route
						path='/services/:slug'
						element={<ServiceDetail />}
					/>
					<Route
						path='/portfolio'
						element={<Portfolio />}
					/>
				</Routes>
				<FooterSection />
				<StickyCTA />
				<ExitIntent />
			</BrowserRouter>
		</div>
	)
}

export default App
