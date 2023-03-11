import { Link } from 'react-router-dom';
import '../css/NavigationMenu.css'
import Diamond from '../../../assets/logo2.webp'
import { INavigationMenu } from '../interfases';
import { useState } from 'react';
import { TIMEOUT } from 'dns';

/* interface INavigationMenu {
    onScrollToElementClickHandler : (el : string) => void;
} */

const NavigationMenu = (props : INavigationMenu) => {
    //const [login, setLogin] = useState(props.login);

    console.log('Props log in text ');
    console.log(props.loginText);
    console.log('props login');
    console.log(props.login);
    console.log('props load');
    console.log(props.load);

    const scrollToElementClickHandler = (event : React.MouseEvent<HTMLElement>) => {
        console.log('scrollToElementClickHandler in navigation menu');   
        let el = event.currentTarget.dataset.element!;
        console.log(el);
        props.onScrollToElementClickHandler(el)
    }

/*     const loginButtonTestHandler = () => {      
        console.log('loginButtonTestHandler in navigation menu');
        setLogin(props.login)
    } */

    //console.log('login');
    //console.log(login);
  
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
                            <Link to= {props.load}><button className="menubtn loginbtn">{props.loginText + '!'}</button></Link>
{/*                         {props.login && <Link to= {"/"}><button className="menubtn loginbtn">{props.loginText}</button></Link>} 
                             <Link to= {login ? "/" : "/login"}><button className="menubtn loginbtn">{props.loginText}</button></Link>  */}
                        </div>
                    </div>
                </header>
            </div>
        )
    }

export default NavigationMenu