import '../styles/CustomerAppointments.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Booking {
    _id: string;
    cleanername: string;
    time: string;
    level: string;
    date: string;
  }
  
  function CustomerAppointments() {
    const [booking, setBooking] = useState<Booking[]>([]);
  
    useEffect(() => {
      async function fetchBookings() {
        try {
          const response = await axios.get('https://stadafint-server-production.up.railway.app/booking/allbookings');
          setBooking(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchBookings();
    }, []);
  
    return (
      <div className="customer-containers">
        <div className="appointments-header">
          <h2><span className="colored-word">Booked</span> appointments</h2>
        </div>
        <table className="appointments-container-table">
          <thead>
            <tr className="appointments-table-header">
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Cleaner</th>
              <button id="appointments-delete-button">Delete</button>
            </tr>
          </thead>
          <tbody>
            {booking.map((booking, index) => (
              <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.level}</td>
                <td>{booking.cleanername}</td>
                <td><input type="checkbox"></input></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  

export default CustomerAppointments;