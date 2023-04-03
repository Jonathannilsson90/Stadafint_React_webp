import '../styles/CustomerAppointments.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BookedAppointments} from './interface';
import { apiUrl } from 'src/components/global/api';
import { useParams } from "react-router-dom"
import Booking from 'src/models/Booking';

function CustomerAppointments() {
  const [booking, setBooking] = useState<BookedAppointments[]>([]);
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const [resetAllCheckBoxes, setResetAllCheckBoxes] = useState(false);

  let {name} = useParams()
  
  useEffect(() => {
    const fetchBookings = async () => {
      
      const response = await axios.get(`${apiUrl}booking/allbookings`);
      const completedBookings = response.data.filter((booking: Booking) => booking.status === false);
      
      setBooking(completedBookings);
    };
    fetchBookings();
  }, [booking]);

  function HandleChecked(id: string) {
    if (checkedRows.includes(id)) {
      setCheckedRows(checkedRows.filter((rowId) => rowId !== id));

    } else {
      setCheckedRows([...checkedRows, id]);

    }
  }

  
  async function handleDelete(checkedRows: string[]) {
    
    while (checkedRows.length > 0) {
      const removeId = checkedRows.shift();
      
      try {
        const response = await axios.delete(`${apiUrl}booking/deletebooking/${removeId}`);

        } catch (error) {
          console.log(error);
        }
      }
      setCheckedRows([]);
    }

    async function handleSingleDelete (props: BookedAppointments) {
      try {
        const response = await axios.delete(`${apiUrl}booking/deletebooking/${props._id}`);
        
      } catch (error) {
        console.log(error)
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

              <th className="appointments-button-th">
                <button 
                  id={booking._id} 
                  className="appointments-small-delete-button"
                  onClick={() => handleSingleDelete(booking)}>Cancel
                </button>
              </th>

              <th className="appointments-button-th">
                <input 
                  className="appointments-tr-input" 
                  id={booking._id} type="checkbox" 
                  checked={resetAllCheckBoxes ? false : checkedRows.includes(booking._id)} 
                  onClick={() => HandleChecked(booking._id)}>
                </input>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="appointments-delete-container">
        <button id="appointments-delete-button" onClick={() => handleDelete(checkedRows)}>Cancel Selected</button>
      </div>
    </div>
  );
}
  

export default CustomerAppointments;
