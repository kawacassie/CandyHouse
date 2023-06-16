import { candyList } from '../datas/candyList'

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
			<ul>
				{candyList.map((candy) => (
					<li key={candy.id}>{candy.name}</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList