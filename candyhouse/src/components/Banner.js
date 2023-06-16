import '../styles/Banner.css'
import logo from '../assets/logo.png'


function Banner() {
    const title = 'CandyHouse'
    return (
        <div className='ch-banner'>
            <img src={logo} alt='CandyHouse' className='ch-logo' />
            <h1 className='ch-title'>{title}</h1>
        </div>
    )
}

export default Banner