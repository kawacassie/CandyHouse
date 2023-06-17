import '../styles/CandyItems.css'

function handleClick(candyName) {
	alert(`Vous voulez acheter 1 ${candyName}? Très bon choix ✨`)
}

function CandyItem({ cover, name }) {
	return (
		<li className='ch-candy-item' onClick={() => handleClick(name)}>
			<img className='ch-candy-item-cover' src={cover} alt={`${name} cover`} />
			{name}
		</li>
	)
}

export default CandyItem