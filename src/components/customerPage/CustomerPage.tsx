import './styles/CustomerPage.css';
import CustomerHero from './components/CustomerHero';
import CustomerButtonBar from './components/CustomerButtonBar';
import CustomerBooking from './components/CustomerBooking';
import CustomerAppointments from './components/CustomerAppointments'
import CustomerCompleted from './components/CustomerCompleted'
import APIContext from './api';

//TODO: FIX CSS BY COMPILING

const CustomerPage = () => {
    const apiUrl = 'https://stadafint-server-production.up.railway.app/'
    return(
           <APIContext.Provider value={{apiUrl}}>
        <div className="main-page">
            <CustomerHero />
            <CustomerButtonBar />
            <CustomerBooking />
            <CustomerAppointments />
            <CustomerCompleted />
        </div>
            </APIContext.Provider>
    )
}

export default CustomerPage