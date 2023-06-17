import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Il manque un @ pour que l'adresse mail soit valide")
		}
	}

	return (
		<footer className='ch-footer'>
			<div className='ch-footer-elem'>
				Pour les gourmands 🍫🍬🍭
			</div>
			<div className='ch-footer-elem'>Laissez-nous votre mail :</div>
			<input
                className='ch-footer-input'
				placeholder='Votre adresse e-mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer