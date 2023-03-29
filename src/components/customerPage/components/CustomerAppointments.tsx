import '../styles/CustomerAppointments.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BookedAppointments} from './interface';
import { useParams } from "react-router-dom"

function CustomerAppointments() {
  const [booking, setBooking] = useState<BookedAppointments[]>([]);
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  let {name} = useParams()
  
  useEffect(() => {
      const fetchBookings = async () => {
        const response = await axios.get(
          `https://stadafint-server-production.up.railway.app/booking/allbookings`
        );
        setBooking(response.data);
      } 
      fetchBookings();
    }, []);

  function HandleChecked(id: string) {
    if (checkedRows.includes(id)) {

      setCheckedRows(checkedRows.filter((rowId) => rowId !== id));
    } else {

      setCheckedRows([...checkedRows, id]);
    }
  }

  async function handleDelete(checkedRows: string[]) {

    console.log("starting array " + checkedRows)

    while (checkedRows.length > 0) {
      const removeId = checkedRows.shift();

      console.log("deleted " + removeId);
      console.log("Array contains: " + checkedRows);

      try {
        const response = await axios.delete(
          `https://stadafint-server-production.up.railway.app/booking/deletebooking/${removeId}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
  
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
              <td>{booking._id}</td>

              <input className="appointments-tr-input" id={booking._id} type="checkbox" onClick={() => HandleChecked(booking._id)}></input>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="appointments-delete-container">
        <button id="appointments-delete-button" onClick={() => handleDelete(checkedRows)}>Cancel</button>
      </div>
    </div>
  );
}
  

export default CustomerAppointments;