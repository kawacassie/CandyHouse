import { candyList } from '../datas/candyList'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = candyList.reduce(
		(acc, candy) =>
			acc.includes(candy.category) ? acc : acc.concat(candy.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='ch-candy-list'>
				{candyList.map((candy) => (
					<li key={candy.id} className='ch-candy-item'>
						{candy.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList