import './CustomerAccount.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Booking from '../../models/Booking';



const CustomerAccount = () => {

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
             console.log(data);  
             setBookings(data); 
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


    const bookingsList = bookings.filter(booking => booking.customerName === data).map((booking) => (
    <ul>
                <li>{booking.customerName}</li>
                <li>{booking.cleanerName}</li>
                <li>{booking.level}</li>
                <li>{booking.time}</li>
    </ul>
) )



    return(<>
     <div className="customer-account-wrapper">
        <p> Customer page</p>
        <p>Customer name: {data}</p>
        {bookingsList}
     </div>
    
    </>)
}

export default CustomerAccount