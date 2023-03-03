import { Link } from 'react-router-dom';
import '../homePage/NavigationMenu.css'
import Dimond from '../images/logo2.webp'



const LogInMenu = () => {
  
        return (
            <div className='navigation-menu-wrapper'>
                <header className="navigation">
                    <div className="menu">
                        <div className="menu-logo">
                            <img className='logo-img' src={Dimond}></img>
                            <span>Diamond Clean</span>
                        </div>
                        <div className="menu-center">
                            <Link to= {"/"}><button className="menubtn" data-element='header-section-wrapper'><a>Home</a></button></Link>                          
                        </div>
                        <div className="menu-right">
                            <Link to= {"/login"}><button className="menubtn loginbtn">Sign up / Log in</button></Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

export default LogInMenu