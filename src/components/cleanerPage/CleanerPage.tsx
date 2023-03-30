
@viktor472
viktor472 test
Latest commit 3b1376b 1 hour ago
 History
 2 contributors
@viktor472@yulia-gutorova
117 lines (100 sloc)  3.14 KB

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookedAppointments } from "../customerPage/components/interface";
import './css/CleanerPage.css'
import { TableItem, TableItemd } from "./components/CleanerItem";
import axios from "axios";
import { apiUrl } from "../global/api";

const CleanerPage = () => {

    //-------------Data in from home(landing) page start-------------
    let {name} = useParams();
    
    //-------------Data in from home(landing) page end-------------
    //Data in from server side
    const [stadningData, setstadningData] = useState<BookedAppointments[]>([]);
    /* class Booking
    _id: string;
    customername: string;
    cleanername: string;
    time: string;
    level: string;
    date: string;
    status: boolean;
    */

  //get rquest. getting all bookingas from server
    useEffect(() => {
      const fetchBookings = async () => {
        const response = await axios.get(
          `${apiUrl}booking/allbookings`
        );
          const cleaner: BookedAppointments[] = response.data.filter((item: BookedAppointments)  => item.cleanername === name) ; 
          setstadningData(cleaner);
      } 
      fetchBookings();
    }, [stadningData]);




    const handleToggle = (customername: string, _id: string) => {
        //-----patch request start--------


        
        //-----patch request end--------
        setstadningData(
          stadningData.map((item) => {
          if (item._id === _id) {
            return { ...item, status: !item.status };
          }
          return item;
        })
      );
    };


    const map = stadningData.map((c) => {
      if(c.status === false){
        return    <TableItem
        key={c._id}
        id={c._id}
        customerName={c.customername}
        cleanerName={c.cleanername}
        time={c.time}
        level={c.level}
        status={c.status}
        handleToggle={handleToggle}
      ></TableItem>
      }
    })
    const mapd = stadningData.map((c) => {
      if(c.status === true){
        return<>
  
        <TableItemd    
        key={c._id}  
        id={c._id} 
          customerName={c.customername}
          cleanerName={c.cleanername}
          time={c.time}
          level={c.level}
          status={c.status}
          handleToggle={handleToggle} 
          ></TableItemd>
        </>
      }
    })
  
    const Thead = (
      <thead className="thead-cleaner "><tr><td>Cleaner name</td><td>Customer name</td><td>Time</td><td>Level</td><td>Status</td></tr></thead>
    )
  
    return (
      <>
        <div className="contrainer">
          <h1 className="greating-cleaner" >hello {name}</h1>
          <h3>These are youre jobes</h3>
          
          {/* //----------------Boked Jobs----------------*/}
          <h2>Booked Jobs</h2>
          <table className="table-cleaner">
            {Thead}
            <tbody>{map}</tbody> 
          </table>
          {/* //----------------Done Jobs----------------*/}
          <h2>Jobs Done</h2>
          <table className="table-cleaner">
            {Thead}
            <tbody>{mapd}</tbody>
          </table>
        </div>
      </>
    );
}
export default CleanerPage