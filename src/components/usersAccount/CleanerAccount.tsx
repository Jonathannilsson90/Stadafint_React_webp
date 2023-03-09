
import { useLocation } from 'react-router-dom';
import CustomerPage from '../customerPage/CustomerPage';

import './CleanerAccount.css'



const CLeanerAccount = () => {
    const location = useLocation();
    const data =location.state;
    console.log('data in customer account')
    console.log(data)

   

    return(<>
            <p>Name of cleaner: {data}</p>
    </>)
}

export default CLeanerAccount