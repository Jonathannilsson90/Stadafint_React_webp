import { useLocation } from "react-router-dom";
import '../styles/CustomerHero.css';
import { useParams } from "react-router-dom"
import CleanerScrub from '../../../assets/CleanerScrub.png'

function CustomerHero () {

    let {name} = useParams()

    return(
    
    <div className="hero">
            <div className="main-hero">

            <h1>Welcome {name}!</h1>
            <p>Hurry and get your chance for <br/> the most incredible cleaning service <br/> you've ever experienced</p>

            <img src= {CleanerScrub} alt="Hero picture"></img>

            </div>
    </div>)
}

export default CustomerHero;