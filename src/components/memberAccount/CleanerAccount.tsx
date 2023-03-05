import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from '../../models/Booking';
import LogInFooter from '../logInPage/LogInFooter';
import LogInMenu from '../logInPage/LogInMenu';
import './CleanerAccount.css'
import OneCleaning from './OneCleaning';


const CLeanerAccount = () => {
    const location = useLocation();
    const data =location.state;
    console.log('data in customer account')
    console.log(data)

    const[bookings, setBookings]= useState<Booking[]>([]);

/*     const fetchData = () => 
    {
       try
       {
           fetch('http://localhost:5001/bookings')
           .then(res => res.json())
           .then((data) => {
             console.log('Data'); 
             console.log(data);  
             setBookings(data); 
             console.log('Bookings'); 
             console.log(bookings);   
           })                
       }    
       catch(error)
       {
           console.log(error);
       }   
    } */

    const fetchData = async() => 
    {
       try
       {
           const resp = await fetch('http://localhost:5001/bookings')
           const data = await resp.json();     
           setBookings(data); 
           console.log('Bookings'); 
           console.log(bookings);                  
       }    
       catch(error)
       {
           console.log(error);
       }   
    }
    
    useEffect(() => {
        fetchData();
    }, []); 

    console.log('Bookings1'); 
    console.log(bookings); 

    const bookingsList = bookings.filter(booking => booking.cleanerName === data).map((booking) => (
        <OneCleaning
        key={booking._id}
        customerName={booking.customerName}
        cleanerName={booking.cleanerName}
        level={booking.level}
        time={booking.time}
        date={booking.date.toString()}></OneCleaning>
) )

    return(<>
    <LogInMenu></LogInMenu>
    <div className="cleaner-account-wrapper">
        <div className="cleaner-account-content">
        <div className="cleaner-background-image"></div>
         <div className='cleaner-account-title'>
                <h1>Hello, {data}!!!</h1>
                <h2>Your cleanings:</h2>
         </div>   
         <div className='cleaner-list-of-bookings'> 
                {bookingsList.length === 0 && <h2>You don't have any planned cleanings!</h2>}  
                <table className='cleaner-table'>
                    <tbody>
                    {bookingsList}
                    </tbody>
                </table>      
            </div>
        </div>
        
     </div>
     <LogInFooter></LogInFooter>   
    </>)
}

export default CLeanerAccount