import '../styles/CandyItems.css'

function handleClick(candyName) {
	alert(`Vous voulez acheter 1 ${candyName}? Très bon choix ✨`)
}

function CandyItem({ cover, name, price }) {
	return (
		<li className='ch-candy-item' onClick={() => handleClick(name)}>
			<span className='ch-candy-item-price'>{price} €</span>
			<img className='ch-candy-item-cover' src={cover} alt={`${name} cover`} />
			{name}
		</li>
	)
}

export default CandyItem