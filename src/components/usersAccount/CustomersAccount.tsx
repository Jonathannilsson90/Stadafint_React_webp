import './CustomerAccount.css'
import { useLocation } from "react-router-dom";




const CustomerAccount = () => {

    const location = useLocation();
    const data = location.state;
    console.log('data in customer account')
    console.log(data)

    

    return (<>
        <p>Name of customer: {data}</p>
    </>)
}

export default CustomerAccount