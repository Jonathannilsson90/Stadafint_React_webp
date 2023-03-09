import { useLocation } from "react-router-dom";

function CustomerHero () {

    const location = useLocation();
    const data = location.state;

    return(
    
    <div className="hero">
            <div className="main-header">

            <h1>Welcome {data}!</h1>
            <p>Hurry and get your chance for the most incredible cleaning service you've ever experienced</p>
            
            </div>
    </div>)
}

export default CustomerHero;