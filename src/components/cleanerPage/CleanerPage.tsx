import { useState } from "react";
import { useLocation } from "react-router-dom";
import Booking from "../../models/Booking";
import './css/CleanerPage.css'
import { TableItem, TableItemd } from "./components/CleanerItem";




//Commenting the code due to the nead of data in from data base, havent lernt how to yet tho :)



const CleanerPage = () => {
    
    //-------------Data in from home(landing) page start-------------
    const location = useLocation();
    const data =location.state;
    //-------------Data in from home(landing) page end-------------
    //Data in from server side
    const [stadningData, setstadningData] = useState("");

/*     //------Done togler-------
    const handleToggle = (customername: string) => {
        setstadningData(
        data.map((item) => {
          if (item.customername === customername) {
            return { ...item, status: !item.status };
          }
          return item;
        })
      );
    };
    //------Done togler end------- */

/*     const map = data.map((c) => {
      if(c.status === false){
        return    <TableItem
        customername={c.customername}
        cleanername={c.cleanername}
        time={c.time}
        level={c.level}
        status={c.status}
        handleToggle={handleToggle}
      ></TableItem>
      }
    })
    const mapd = data.map((c) => {
      if(c.status === true){
        return<>
  
        <TableItemd       customername={c.customername}
          cleanername={c.cleanername}
          time={c.time}
          level={c.level}
          status={c.status}
           handleToggle={handleToggle} ></TableItemd>
        </>
      }
    }) */
  
    const Thead = (
      <thead><tr><td>Cleaner name</td><td>Customer name</td><td>Time</td><td>Level</td><td>Status</td></tr></thead>
    )
  
    return (
      <><div className="contrainer">
        <h1>Table Template for Städafint</h1>
        {/* //----------------Boked Jobs----------------*/}
        <h2>Booked Jobs</h2>
        <table>
          {Thead}
{/*           <tbody>{map}</tbody> */}
        </table>
        {/* //----------------Done Jobs----------------*/}
        <h2>Jobs Done</h2>
        <table>
          {Thead}
{/*           <tbody>{mapd}</tbody> */}
        </table>
      </div>
      
      </>
    );
}
export default CleanerPage