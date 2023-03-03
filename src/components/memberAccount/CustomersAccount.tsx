import './CustomerAccount.css'
import { useLocation } from "react-router-dom";



const CustomerAccount = () => {
    const location = useLocation();
    const data =location.state;
    console.log('data in customer account')
    console.log(data)
    return(<>
     <div className="customer-account-wrapper">
        <p> Customer page</p>
        <p>{data}</p>
     </div>
    
    </>)
}

export default CustomerAccount