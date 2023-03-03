import { Link } from 'react-router-dom';
import './NavigationMenu.css'
import Dimond from '../images/logo2.webp'

interface INavigationMenu {
    onScrollToElementClickHandler : (el : string) => void;
}

const NavigationMenu = (props : INavigationMenu) => {

    const scrollToElementClickHandler = (event : React.MouseEvent<HTMLElement>) => {
        let el = event.currentTarget.dataset.element!;
        props.onScrollToElementClickHandler(el)
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
                            <Link to= {"/"}><button className="menubtn" data-element='header-section-wrapper' onClick={scrollToElementClickHandler}><a>Home</a></button></Link> 
                            
                            <Link to= {"/"}><button className="menubtn" data-element='contact-section-wrapper' onClick={scrollToElementClickHandler}>Contact</button></Link> 
                            <Link to= {"/"}><button className="menubtn" data-element='offered-services-section-wrapper' onClick={scrollToElementClickHandler}>Services</button></Link>
                            <Link to= {"/"}><button className="menubtn" data-element='choose-us-section-wrapper' onClick={scrollToElementClickHandler}>Why choose us</button></Link>
                            <Link to= {"/"}><button className="menubtn" data-element='how-section-wrapper' onClick={scrollToElementClickHandler}>How it works</button></Link>
                        </div>
                        
                        <div className="menu-right">
                            <Link to= {"/login"}><button className="menubtn loginbtn">Sign up / Log in</button></Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

export default NavigationMenu