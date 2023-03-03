import { useEffect, useState } from 'react'
import Booking from '../../models/Booking';
import Member from '../../models/Member';
import LogInFooter from './LogInFooter';

import LogInForm from './LogInForm'
import LogInMenu from './LogInMenu';

import './LogInPage.css'



const LogInPage = () => {

     const[members, setMembers]= useState<Member[]>([]);
     const [isCustomer, setIsCustomer] = useState(false);
     const [display, setDisplay]  =  useState(true)
     const [text, setText] = useState('');
     

      const fetchData =  () => {
        try
        {
            fetch('http://localhost:5001/members')
            .then(res => res.json())
            .then((data) => {
              console.log(data);  
              setMembers(data); 
              console.log(members);   
            })                
        }    
        catch(error)
        {
            console.log(error);
        }   
      }
     
      useEffect(() => {
        fetchData();
      }, []); 


      console.log('booking1');
      console.log(members);
/* 
      useEffect(() => {
        const api = async () => {
          const data = await fetch("http://localhost:5001/bookings", {
            method: "GET"
          });
          const jsonData = await data.json();
          setBooking(jsonData.results);
          console.log(jsonData);

        };   
        api();
      }, []); */

      const onSubmitHandler = (name :string) => {
            console.log('In onSubmitHandler');
            console.log(name);
            console.log('booking2')
            console.log(members);
            const filtered = members.filter((value) => value.name === name);

            if (filtered.length !== 0){
              setText(filtered[0].name);
              setDisplay(false)

              if (filtered[0].isCustomer === true)
              {
                 console.log('filtered[0].isCustomer')
                 console.log(filtered[0].isCustomer)
                  setIsCustomer(true)
              };
              if (filtered[0].isCustomer === false)
              {
                console.log('filtered[0].isCustomer')
                console.log(filtered[0].isCustomer)
                setIsCustomer(false)
              }; 
            
            };

            if (filtered.length === 0){
              setText('Not exist');
              setDisplay(true)};
        // console.log(filtered); 
    
      }


    console.log('isCustomer');
    console.log(isCustomer);  
    
    
    return (
        <>
            <LogInMenu></LogInMenu>
            <LogInForm  onSubmitHandler={onSubmitHandler}
                        text={text}
                        display={display}
                        isCustomer={isCustomer} ></LogInForm>
            <LogInFooter></LogInFooter>             
        </>
     
    )
}
export default LogInPage

