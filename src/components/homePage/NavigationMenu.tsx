import { Link } from 'react-router-dom';
import './NavigationMenu.css'
import Dimond from '../images/logo2.webp'


export default function NavigationMenu() {


    function scrollToHomeElementClickHandler(event : React.MouseEvent<HTMLElement>){
        let dataElement = event.currentTarget.dataset.element
        let element = document.querySelector('.' + dataElement)
        if (element) {
            element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
          }
    }


    function scrollToContactElementClickHandler(event : React.MouseEvent<HTMLElement>){
        //let dataElement = event.currentTarget.getAttribute('data-element');
        let element = document.querySelector('.contact-wrapper')
        if (element) {
            element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
          }
    }

    function scrollToServicesElementClickHandler(event : React.MouseEvent<HTMLElement>){
        //let dataElement = event.currentTarget.getAttribute('data-element');
        let element = document.querySelector('.offered-services-section-title')
        if (element) {
            element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
          }
    }

    function scrollToChooseElementClickHandler(event : React.MouseEvent<HTMLElement>){
        //let dataElement = event.currentTarget.getAttribute('data-element');
        let element = document.querySelector('.why-wrapper')
        if (element) {
            element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
          }
    }

 
        return (
            <div className='navigation-menu-wrapper'>
                <header className="navigation">
                    <div className="menu">
                        <div className="menu-logo">
                            <img className='logo-img' src={Dimond}></img>
                            <span>Diamond Clean</span>
                        </div>
                        <div className="menu-center">
                        <Link to={"/"}><button className="menubtn" data-element='main-section-wrapper' onClick={scrollToHomeElementClickHandler}><a>Home</a></button></Link>
                        <Link to={"/"}><button className="menubtn" data-element='.contact-wrapper' onClick={scrollToContactElementClickHandler}>Contact</button></Link> 
                            <button className="menubtn" data-element='.offered-services-section-title' onClick={scrollToServicesElementClickHandler}>Services</button>
                            <button className="menubtn" data-element='.why-wrapper' onClick={scrollToChooseElementClickHandler}>Why choose us</button>
                            <button className="menubtn">About us</button>
                           
                        </div>
                        <div className="menu-right">
                        <Link to= {"/login"}><button className="menubtn loginbtn">Sign up / Log in</button></Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }