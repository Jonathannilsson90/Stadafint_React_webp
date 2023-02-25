import { Link } from "react-router-dom"
import './Footer.css'
import Dimond from '../images/logo2.webp'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-about">
                    <div className="footer-logo">
                        <img className='logo-img' src={Dimond}></img>
                        <span>Diamond Clean</span>
                    </div>
                    <p className='footer-about-text'>We are a professional cleaning company offering all types of cleaning services</p>
                </div>
{/*                 <div 
                    className="vertical-line">
                </div> */}
                <ul>
                    <li className="list-title">Main menu</li>
                    <li className="list">Home</li>
                    <li className="list">Contact</li>
                    <li className="list">Services</li>
                    <li className="list">Why choose us</li>

                </ul>
                <ul>
                    <li className="list-title">Addresses location </li>
                    <li className="list">Skarpnäck</li>
                    <li className="list">Sätra</li>
                    <li className="list">Årsta</li>
                    <li className="list">Kista</li>
                </ul>
                <ul>
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

export default Footer
