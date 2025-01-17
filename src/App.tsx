import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom'

import './App.css'

import About from './components/About/About'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import MyNavbar from './components/Navbar'
import Preloader from './components/Preloader'
import Projects from './components/Projects/Projects'
import ScrollToTop from './components/ScrollToTop'
import './style.css'
function App() {
	const [isLoad, setIsLoad] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoad(false)
		}, 1200)

		return () => clearTimeout(timer)
	}, [])

	return (
		<Router>
			<Preloader isLoad={isLoad} />
			<div className='App' id={isLoad ? 'no-scroll' : 'scroll'}>
				<MyNavbar />
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/project' element={<Projects />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
