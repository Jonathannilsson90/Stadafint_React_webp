import { Link } from 'react-router-dom'
import '../homePage/Footer.css'
import Diamond from '../images/logo2.webp'

const LogInFooter = ()  => {

    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-about">
                    <div className="footer-logo">
                        <img className='logo-img' src={Diamond}></img>
                        <span>Diamond Clean</span>
                    </div>
                    <p className='footer-about-text'>We are a professional cleaning company offering all types of cleaning services</p>
                </div>
                <div 
                    className="vertical-line">
                </div> 
                <ul className="login-footer-list">

                    <li className="list-title">Main menu</li>
                    <Link to= {"/"}><li className="list" data-element='header-section-wrapper' style={{}}>Home</li></Link>

                </ul>

                <ul className="login-footer-list">
                    <li className="list-title">Address locations </li>
                    <li className="list">Skarpnäck</li>
                    <li className="list">Sätra</li>
                    <li className="list">Årsta</li>
                    <li className="list">Kista</li>
                </ul>
                <ul className="login-footer-list">
                    <li className="list-title">Follow us</li>
                    <li className="list">Facebook</li>
                    <li className="list">Linkedin</li>
                    <li className="list">Instagramm</li>
                    <li className="list">Twitter</li>
                </ul>
            </div>
        </footer>
    )
}

export default LogInFooter