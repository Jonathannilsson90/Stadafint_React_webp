import { useLocation } from "react-router-dom";
import './CleanerPage.css'

const CleanerPage = () => {

    const location = useLocation();
    const data =location.state;
    console.log('data in customer account')
    console.log(data)
        
    return(
        <p className="p">Cleaner page  {data}</p>
    )
}
export default CleanerPage