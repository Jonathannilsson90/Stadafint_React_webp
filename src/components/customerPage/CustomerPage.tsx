import './styles/CustomerPage.css';
import CustomerHero from './components/CustomerHero';
import CustomerButtonBar from './components/CustomerButtonBar';
import CustomerBooking from './components/CustomerBooking';
import CustomerAppointments from './components/CustomerAppointments'
import CustomerCompleted from './components/CustomerCompleted'
import { ICustomerPage } from './components/interface';



const CustomerPage = ({loginButtonTextHandler}:ICustomerPage) => {
    loginButtonTextHandler(true);
    return(
        <div className="main-page">
      
            <CustomerHero />
            <CustomerButtonBar />
            <CustomerBooking />
            <CustomerAppointments/>
            <CustomerCompleted />
          
        </div>
    )
}

export default CustomerPage