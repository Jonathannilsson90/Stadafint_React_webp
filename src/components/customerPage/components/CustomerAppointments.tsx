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
        const response = await axios.get(
          `https://stadafint-server-production.up.railway.app/booking/allbookings`
          );
        setBooking(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBookings();
  }, []);

  // async function handleDelete() {
  //   try {
  //     const response = await axios.delete(
  //       `https://stadafint-server-production.up.railway.app/deletebooking/:bookingId`
  //       );
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
          {/* .filer() */}
          {booking.map((booking, index) => (
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.level}</td>
              <td>{booking.cleanername}</td>
              {/* REMOVE FOLLOWING */}
              <td>{booking.customername}</td>
              <td>{booking._id}</td>
              <input type="checkbox" id="appointment-checkbox"></input>
            </tr>
          ))}
        
        </tbody>
      </table>

      <div className="appointments-delete-container">
        <button id="appointments-delete-button">Cancel</button>
      </div>
    </div>
  );
}
  

export default CustomerAppointments;