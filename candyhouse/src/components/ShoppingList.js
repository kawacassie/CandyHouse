import { candyList } from '../datas/candyList'
import CandyItem from './CandyItems'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = candyList.reduce(
		(acc, candy) =>
			acc.includes(candy.category) ? acc : acc.concat(candy.category),
		[]
	)

	return (
		<div className='ch-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='ch-candy-list'>
				{candyList.map(({ id, cover, name }) => (
					<CandyItem
						key={id}
						cover={cover}
						name={name}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList