import '../styles/CustomerAppointments.css';
import axios from 'axios';
import { useState } from 'react';
import BookedAppointments from './interface';
import { useParams } from "react-router-dom"

function CustomerAppointments() {
  const [booking, setBooking] = useState<BookedAppointments[]>([]);
  let {name} = useParams()

  // Filter like jonathan

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

  // async function handleDelete(props: BookedAppointments) {
  //   try {
  //     const response = await axios.delete(
  //       `https://stadafint-server-production.up.railway.app/deletebooking/:${props._id}`
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
          {booking.filter((bookingArray) => bookingArray.customername === name).map((booking, index) =>  (
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.level}</td>
              <td>{booking.cleanername}</td>
              {/* REMOVE FOLLOWING */}
              <td>{booking.customername}</td>
              <td>{booking._id}</td>
              <input type="checkbox" id={booking._id}></input>
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