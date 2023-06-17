import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
	const sucettePrix = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='ch-cart'>
			<button
				className='ch-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Sucette : {sucettePrix}€</div>
			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
			<h3>Total : {sucettePrix * cart}€</h3>
			<button onClick={() => updateCart(0)}>Vider le panier</button>
		</div>
	) : (
		<div className='ch-cart-closed'>
			<button
				className='ch-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart