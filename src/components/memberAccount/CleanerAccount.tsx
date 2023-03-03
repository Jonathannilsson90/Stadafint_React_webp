import { useLocation } from 'react-router-dom';
import './CleanerAccount.css'


const CLeanerAccount = () => {

    const location = useLocation();
    const data =location.state;
    console.log('data in customer account')
    console.log(data)
    return(<>
     <div className="cleaner-account-wrapper">
        <p> Cleaner page</p>
        <p>{data}</p>
     </div>
    
    </>)
}

export default CLeanerAccount