import '../css/Footer.css'

import { Link }    from "react-router-dom"
import { IFooter } from "../interfases";

import Diamond from '../../../assets/logo2.webp'


const Footer = (props: IFooter) => {
   
    //-------------------------------------------------------------------
    const scrollToElementClickHandler = (event : React.MouseEvent<HTMLElement>) => {
        let el = event.currentTarget.dataset.element!;
        props.onScrollToElementClickHandler(el)
    }

    //-------------------------------------------------------------------
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-about">
                    <div className="footer-logo">
                        <img className='logo-img' src={Diamond} alt='logo-picture'></img>
                        <span style={{fontFamily : 'fantasy'}}>Diamond Clean</span>
                    </div>
                    <p className='footer-about-text'>We are a professional cleaning company offering all types of cleaning services</p>
                </div>
                <div 
                    className="vertical-line">
                </div> 
                <ul className="footer-list">
                    <li className="list-title">Main menu</li>
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className="list" data-element='header-section-wrapper' onClick={scrollToElementClickHandler}>Home</li></Link> 
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className="list" data-element='contact-section-wrapper' onClick={scrollToElementClickHandler}>Contact</li></Link> 
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className="list" data-element='offered-services-section-wrapper' onClick={scrollToElementClickHandler}>Services</li></Link> 
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className="list" data-element='choose-us-section-wrapper' onClick={scrollToElementClickHandler}>Why choose us</li></Link> 
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className="list" data-element='how-section-wrapper' onClick={scrollToElementClickHandler}>How it works</li></Link> 

                </ul>
                <ul className="footer-list">
                    <li className="list-title">Address locations </li>
                    <li className="list">Skarpnäck</li>
                    <li className="list">Sätra</li>
                    <li className="list">Årsta</li>
                    <li className="list">Kista</li>
                </ul>
                <ul className="footer-list">
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
