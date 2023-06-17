import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='CandyHouse' className='ch-logo' />
				<h1 className='ch-title'>CandyHouse</h1>
			</Banner>
			<div className='ch-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)
}

export default App
