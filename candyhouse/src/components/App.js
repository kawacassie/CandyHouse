import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CandyDetail from './CandyDetail'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'

function App() {
	const [cart, updateCart] = useState([])
	return (
		document.title = `CandyHouse`,
		<div>
			<BrowserRouter>
				<Banner>
					<img src={logo} alt='CandyHouse' className='ch-logo' />
					<h1 className='ch-title'>CandyHouse</h1>
				</Banner>
				<div className='ch-layout-inner'>
					<Cart cart={cart} updateCart={updateCart} />
					<Routes>
						<Route path='/' element={<ShoppingList cart={cart} updateCart={updateCart} />} />
						<Route path='/:name' element={<CandyDetail />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
