import './CustomerAccount.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Booking, { Level } from '../../models/Booking';
import LogInMenu from '../logInPage/LogInMenu';
import LogInFooter from '../logInPage/LogInFooter';
import OneBooking from './OneBooking';



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
        <OneBooking
        key={booking._id}
        customerName={booking.customerName}
        cleanerName={booking.cleanerName}
        level={booking.level}
        time={booking.time}
        date={booking.date.toString()}></OneBooking>
) )



    return(<>
    <LogInMenu></LogInMenu>
     <div className="customer-account-wrapper">
        <div className="customer-account-content">
        <div className='customer-background-image'></div>
         <div className='customer-account-title'>
                <h1>Hello, {data}!!!</h1>
                <h2>Your bookings:</h2>

         </div>   
         <div className='customer-list-of-bookings'>   
                <table className='customer-table'>
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

export default CustomerAccount