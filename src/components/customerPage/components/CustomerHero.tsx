import { useLocation } from "react-router-dom";

function CustomerHero () {

    const location = useLocation();
    const data = location.state;
    console.log('data in customer account')
    console.log(data)

    return(
    
    <div>
            <h1>Välkommen {data}</h1>
        
    </div>)
}

export default CustomerHero;