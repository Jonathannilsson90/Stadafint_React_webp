import './styles/CustomerPage.css';
import CustomerHero from './components/CustomerHero';
import CustomerButtonBar from './components/CustomerButtonBar';
import CustomerBooking from './components/CustomerBooking';
import CustomerAppointments from './components/CustomerAppointments'
import CustomerCompleted from './components/CustomerCompleted'



const CustomerPage = () => {
   
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