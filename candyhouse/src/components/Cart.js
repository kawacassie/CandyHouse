import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, candyType) => acc + candyType.amount * candyType.price,
		0
	)
	return isOpen ? (
		<div className='ch-cart'>
			<button
				className='ch-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
      						<div key={`${name}-${index}`} className="ch-price-item">
						        <div className="ch-left-content">
  							        {amount} ✖️ {name}
 						        </div>
					    		<div className="ch-right-content">
						          <span>{price} €</span>
						        </div>
							</div>
						))}
					</ul>
					<h3>Total : {total} €</h3>
					<button 
					className='ch-colored-button'
					onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
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