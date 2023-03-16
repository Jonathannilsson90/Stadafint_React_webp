import '../css/NavigationMenu.css'
import { Link }            from 'react-router-dom';
import { INavigationMenu } from '../interfases';

import Diamond from '../../../assets/logo2.webp'

const NavigationMenu = (props : INavigationMenu) => {

    //-------------------------------------------------------------------
    const scrollToElementClickHandler = (event : React.MouseEvent<HTMLElement>) => {
        console.log('scrollToElementClickHandler in navigation menu');   
        let el = event.currentTarget.dataset.element!;
        props.onScrollToElementClickHandler(el)
    }

    //-------------------------------------------------------------------
    const onScrollToTopHandler = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
            });
    }

    //-------------------------------------------------------------------
    return (
        <div className='navigation-menu-wrapper'>
            <header className="navigation">
                <div className="menu">
                    <div className="menu-logo">
                        <img className='logo-img' src={Diamond}></img>
                        <span>Diamond Clean</span>
                    </div>
                    <div className="menu-center">
                        <Link to={"/"}><button className="menubtn" data-element='header-section-wrapper' onClick={scrollToElementClickHandler}>Home</button></Link>            
                        <Link to={"/"}><button className="menubtn" data-element='contact-section-wrapper' onClick={scrollToElementClickHandler}>Contact</button></Link> 
                        <Link to={"/"}><button className="menubtn" data-element='offered-services-section-wrapper' onClick={scrollToElementClickHandler}>Services</button></Link>
                        <Link to= {"/"}><button className="menubtn" data-element='choose-us-section-wrapper' onClick={scrollToElementClickHandler}>Why choose us</button></Link>
                        <Link to= {"/"}><button className="menubtn" data-element='how-section-wrapper' onClick={scrollToElementClickHandler}>How it works</button></Link>
                    </div>
                    
                    <div className="menu-right">
                        <Link to= {props.load} onClick={onScrollToTopHandler}><button className="menubtn loginbtn">{props.loginText + '!'}</button></Link>
                    </div>
                </div>
            </header>
        </div>
    )
    }

export default NavigationMenu