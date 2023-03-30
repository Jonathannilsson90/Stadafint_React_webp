import { apiUrl } from "../global/api";
import { useParams } from "react-router-dom";
import { ICleanerApointments, ICleanerPage } from "./inteface";
import { useEffect, useState } from "react";
import { TableItemdone } from "./components/Tableitemdone";
import { TableItem } from "./components/Tableitem";
import './css/CleanerPage.css'
import axios from "axios";

const CleanerPage = ({loginButtonTextHandler}: ICleanerPage) => {
  loginButtonTextHandler(true) //Log out Logick
    let {name} = useParams(); //data from login page
    const [stadningData, setstadningData] = useState<ICleanerApointments[]>([]);    //Data in from server side

  //get rquest. getting all bookingas from server
    useEffect(() => {
      const fetchBookings = async () => {
        const response = await axios.get(
          `${apiUrl}booking/allbookings`
        );
        //Filter datta and compare all cleanername with the name given
          const cleaner: ICleanerApointments[] = response.data.filter((item: ICleanerApointments)  => item.cleanername === name) ; 
          setstadningData(cleaner);
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
  
        <TableItemdone    
        key={c._id}  
        id={c._id} 
          customerName={c.customername}
          cleanerName={c.cleanername}
          time={c.time}
          level={c.level}
          status={c.status}
          handleToggle={handleToggle} 
          ></TableItemdone>
        </>
      }
    })
  
    const Thead = (
      <thead className="thead-cleaner "><tr><td>Cleaner name</td><td>Customer name</td><td>Time</td><td>Level</td><td>Status</td></tr></thead>
    )
  
  
    return (
      <>
        <div className="contrainer">
          <h1 className="greating-cleaner" >Wellcome {name}</h1>
          
          {/* //----------------Boked Jobs----------------*/}
          <div className="contentspreader">
          <h2>Booked Jobes</h2>
          <table className="table-cleaner">
            {Thead}
            <tbody>{map}</tbody>
          </table>
          </div>
          {/* //----------------Done Jobs----------------*/}
          <div className="contentspreader">
          <h2>Jobs Done</h2>
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