import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiUrl } from 'src/components/global/api';
import '../styles/CustomerCompleted.css';
import { BookedAppointments } from './interface';

function CustomerCompleted() {
    let { name } = useParams();
    const [completed, setCompleted] = useState<BookedAppointments[]>([]);
    useEffect(() => {
        const fetchBookings = async () => {
          const response = await axios.get(`${apiUrl}booking/allbookings`);
    
          const customer: BookedAppointments[] = response.data.filter(
            (item: BookedAppointments) =>
              item.customername === name && item.status === true
          );
          setCompleted(customer);
        };
    
        fetchBookings();
      }, [name]);
  
    return (
      <div className="customer-containers">
        <div className="completed-header">
          <h2>
            <span className="colored-word">Completed</span> appointments
          </h2>
        </div>
  
        <table className="completed-container-table">
          <thead className="completed-table-header">
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Cleaner</th>
            </tr>
          </thead>
          <tbody>
            {completed.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.level}</td>
                <td>{booking.cleanername}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CustomerCompleted;