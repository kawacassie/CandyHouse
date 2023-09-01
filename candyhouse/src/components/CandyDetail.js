import { useParams } from 'react-router-dom'
import { candyList } from '../datas/candyList'
import '../styles/CandyDetail.css'

function CandyDetail() {
	const { name } = useParams()
	const candy = candyList.find(c => c.name === name)
	return (
		<div className='ch-candy-detail'>
			<h2>{candy.name}</h2>
			<img src={candy.cover} alt={`${candy.name} cover`} />
			<p className='ch-candy-detail-price'>Prix : {candy.price} €</p>
			<p className='ch-candy-detail-description'>
				<span>Description :</span>
				<br />{candy.description}
			</p>
		</div>
	)
}

export default CandyDetail