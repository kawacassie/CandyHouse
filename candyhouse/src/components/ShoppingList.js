import { useState } from 'react'
import { candyList } from '../datas/candyList'
import CandyItem from './CandyItems'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = candyList.reduce(
		(acc, candy) =>
			acc.includes(candy.category) ? acc : acc.concat(candy.category),
		[]
	)

	
	function addToCart(name, price) {
		const currentCandySaved = cart.find((candy) => candy.name === name)
		if (currentCandySaved) {
			const cartFilteredCurrentCandy = cart.filter(
				(candy) => candy.name !== name
			)
			updateCart([
				...cartFilteredCurrentCandy,
				{ name, price, amount: currentCandySaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='ch-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='ch-candy-list'>
				{candyList.map(({ id, cover, name, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<CandyItem
								cover={cover}
								name={name}
								price={price}
							/>
							<button 
							className='ch-colored-button'
							onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList