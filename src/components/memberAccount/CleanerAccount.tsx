import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Booking from '../../models/Booking';
import './CleanerAccount.css'


const CLeanerAccount = () => {
    const location = useLocation();
    const data =location.state;
    console.log('data in customer account')
    console.log(data)

    const[bookings, setBookings]= useState<Booking[]>([]);

     const fetchData = () => {
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
     }

    
    useEffect(() => {
        fetchData();
    }, []); 


    console.log('Bookings1'); 
    console.log(bookings); 

    const bookingsList = bookings.filter(booking => booking.cleanerName === data).map((booking) => (
    <ul>
                <li>{booking.customerName}</li>
                <li>{booking.cleanerName}</li>
                <li>{booking.level}</li>
                <li>{booking.time}</li>
    </ul>
) )


    return(<>
     <div className="cleaner-account-wrapper">
        <p> Cleaner page</p>
        <p>{data}</p>
        {bookingsList}
     </div>
    
    </>)
}

export default CLeanerAccount