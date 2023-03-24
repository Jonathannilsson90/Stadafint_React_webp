import '../styles/CustomerAppointments.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Booking {
    _id: string;
    customername: string;
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
            </tr>
          </thead>
          <tbody>
            {booking.map((booking, index) => (
              <tr key={index}>
                <td className="hejda">{booking.date}</td>
                <td className="hejda">{booking.time}</td>
                <td className="hejda">{booking.level}</td>
                <td className="hejda">{booking.cleanername}</td>
                <input type="checkbox"></input>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="appointments-delete-container">
          <button id="appointments-delete-button">Delete</button>
        </div>
      </div>
    );
  }
  

export default CustomerAppointments;