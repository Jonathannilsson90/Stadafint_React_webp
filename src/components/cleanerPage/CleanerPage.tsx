import { apiUrl } from "../global/api";
import { useParams } from "react-router-dom";
import { ICleanerPage } from "./inteface";
import { useEffect, useState } from "react";
import { TableItemdone } from "./components/Tableitemdone";
import { TableItem } from "./components/Tableitem";
import './css/CleanerPage.css'
import axios from "axios";
import Booking from "src/models/Booking";

const CleanerPage = ({loginButtonTextHandler}: ICleanerPage) => {
  loginButtonTextHandler(true) //Log out Logick
    let {name} = useParams(); //data from login page
    const [stadningData, setStadningData] = useState<Booking[]>([]);    //Data in from server side

  //get rquest. getting all bookingas from server
    useEffect(() => {
      const fetchBookings = async () => {
        const response = await axios.get(
          `${apiUrl}booking/allbookings`
        );
        //Filter datta and compare all cleanername with the name given
          const cleaner: Booking[] = response.data.filter((item: Booking)  => item.cleanername === name) ; 
          setStadningData(cleaner);
      } 
      fetchBookings();
    }, [stadningData]);

    //change status of booking to true when cleaner is done
    const handleToggle = async (id: string ) => {
      const completedata = {status: true}
      const responce = await axios.patch(`${apiUrl}booking/updatebooking/${id}`, completedata)

      console.log(responce)
    };


    const map = stadningData.map((c) => {
      if(c.status === false){
        return    <TableItem
        key={c._id}
        id={c._id}
        date={c.date}
        customerName={c.customername}
        time={c.time}
        level={c.level}
        status={c.status}
        handleToggle={handleToggle}
      ></TableItem>
      }
      return null
    })
    const mapd = stadningData.map((c) => {
      if(c.status === true){
        return<>
  
        <TableItemdone    
          key={c._id}  
          id={c._id} 
          date={c.date}
          customerName={c.customername}
          time={c.time}
          level={c.level}
          status={c.status}
          handleToggle={handleToggle} 
          ></TableItemdone>
        </>
      }
      return null
    })
  
    const Thead = (
      <thead className="thead-cleaner "><tr><td>Customer name</td><td>Date</td><td>Time</td><td>Level</td><td>Status</td></tr></thead>
    )
  
  
    return (
      <>
        <div className="contrainer">

          <div className="header">
            <h1 className="greating-cleaner" >Welcome {name}</h1>
            <p>Here are all your appointments</p>
          </div>
          
          {/* //----------------Boked Jobs----------------*/}
          <div className="contentspreader">
          <h2>Booked appointment's</h2>
          <table className="table-cleaner">
            {Thead}
            <tbody>{map}</tbody>
          </table>
          </div>
          {/* //----------------Done Jobs----------------*/}
          <div className="contentspreader">
          <h2>Completed appointment's</h2>
          <table className="table-cleaner">
            {Thead}
            <tbody>{mapd}</tbody>
          </table>
          </div>
        </div>
      </>
    );
}
export default CleanerPage