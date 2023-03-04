import { Link } from 'react-router-dom'
import '../homePage/Footer.css'
import './LogInFooter.css'
import Diamond from '../images/logo2.webp'

const LogInFooter = () => {

    return (
        <footer className='footer'>
            <div className="login-footer-container">
                <div className="footer-about">
                    <div className="footer-logo">
                        <img className='logo-img' src={Diamond}></img>
                        <span>Diamond Clean</span>
                    </div>
                </div>

                <ul className="login-footer-list">
                    <Link to={"/"}><li className="list">Home page</li></Link>
                </ul>
            </div>
        </footer>
    )
}

export default LogInFooter