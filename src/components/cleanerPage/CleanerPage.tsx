import { useState } from "react";
import { useLocation } from "react-router-dom";
import Booking from "../../models/Booking";
import './css/CleanerPage.css'
import { TableItem, TableItemd } from "./components/CleanerItem";
import { getCleanersName } from "./api";
const apiUrl = 'https://stadafint-server-production.up.railway.app/'


//Commenting the code due to the nead of data in from data base, havent lernt how to yet tho :)
const dummyData = [
  new Booking ("1223", "kund1", "viktor", "diamant","13:00", "date", true),
  new Booking ("1223", "kund1", "viktor", "diamant","13:00", "date", true),
  new Booking ("1223", "kund1", "viktor", "diamant","13:00", "date", true),
  new Booking ("1223", "kund1", "viktor", "diamant","13:00", "date", true),
/* 
    _id: string;
    customerName: string;
    cleanerName: string;
    level: string;
    time: string;
    date: string;
    status: boolean
*/
];

    //-------------Data in from home(landing) page start-------------
    const location = useLocation();
    export const givenCleanerName = location.state;









const CleanerPage = () => {


  // Get










    //-------------Data in from home(landing) page end-------------
    //Data in from server side
    const [stadningData, setstadningData] = useState<Booking[]>(dummyData);

    const handleToggle = (customername: string) => {
        setstadningData(
          stadningData.map((item) => {
          if (item.customerName === customername) {
            return { ...item, status: !item.status };
          }
          return item;
        })
      );
    };


    const map = stadningData.map((c) => {
      if(c.status === false){
        return    <TableItem
        customername={c.customerName}
        cleanername={c.cleanerName}
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
          customername={c.customerName}
          cleanername={c.cleanerName}
          time={c.time}
          level={c.level}
          status={c.status}
          handleToggle={handleToggle} 
          ></TableItemd>
        </>
      }
    })
  
    const Thead = (
      <thead><tr><td>Cleaner name</td><td>Customer name</td><td>Time</td><td>Level</td><td>Status</td></tr></thead>
    )
  
    return (
      <>
        <div className="contrainer">
          <h1>Hello {givenCleanerName} </h1>
          <h3>These are youre jobes</h3>
          
          {/* //----------------Boked Jobs----------------*/}
          <h2>Booked Jobs</h2>
          <table>
            {Thead}
            <tbody>{map}</tbody> 
          </table>
          {/* //----------------Done Jobs----------------*/}
          <h2>Jobs Done</h2>
          <table>
            {Thead}
            <tbody>{mapd}</tbody>
          </table>
        </div>
      </>
    );
}
export default CleanerPage