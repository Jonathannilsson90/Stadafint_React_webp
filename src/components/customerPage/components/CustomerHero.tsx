import { useLocation } from "react-router-dom";
import '../styles/CustomerHero.css';
import CleanerScrub from '../../../assets/CleanerScrub.png'

function CustomerHero () {

    const location = useLocation();
    const data = location.state;

    return(
    
    <div className="hero">
            <div className="main-hero">

            <h1>Welcome {data}!</h1>
            <p>Hurry and get your chance for <br/> the most incredible cleaning service <br/> you've ever experienced</p>

            <img src= {CleanerScrub} alt="Hero picture"></img>

            </div>
    </div>)
}

export default CustomerHero;