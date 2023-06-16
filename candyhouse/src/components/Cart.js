import '../styles/Cart.css'

function Cart() {
	const sucettePrix = 5
	const megarollPrix = 3
	const chocolatNoirPrix = 10
	return (
		<div className='ch-cart'>
			<h2>Panier</h2>
			<ul>
				<li>Sucette : {sucettePrix}€</li>
				<li>Mega Roll : {megarollPrix}€</li>
				<li>Chocolat Noir : {chocolatNoirPrix}€</li>
			</ul>
			Total : {sucettePrix + megarollPrix + chocolatNoirPrix}€
		</div>
	)
}

export default Cart