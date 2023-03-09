import { useLocation } from "react-router-dom";

function CustomerHero () {

    const location = useLocation();
    const data = location.state;

    return(
    
    <div className="hero">
            <h1>Välkommen {data}!</h1>
            <h2>Boka din städning hos oss</h2>
    
    </div>)
}

export default CustomerHero;