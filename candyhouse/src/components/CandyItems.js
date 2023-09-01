import { Link } from 'react-router-dom'
import '../styles/CandyItems.css'

function CandyItem({ cover, name, price }) {
	return (
		<li className='ch-candy-item'>
			<Link to={`/${name}`}>
				<span className='ch-candy-item-price'>{price} €</span>
				<img className='ch-candy-item-cover' src={cover} alt={`${name} cover`} />
				{name}
			</Link>
		</li>
	)
}


export default CandyItem