import { useEffect, useState } from 'react'
import Booking from '../../models/Booking';
import User from '../../models/User';
import LogInFooter from './LogInFooter';

import LogInForm from './LogInForm'
import LogInMenu from './LogInMenu';

import './LogInPage.css'



const LogInPage = () => {

  const[users, setUsers]= useState<User[]>([]);
  const [isCustomer, setIsCustomer] = useState(false);
  const [display, setDisplay]  =  useState(true)
  const [text, setText] = useState('');
     

  const fetchData = () => {
    try
    {
        fetch('https://stadafint-server-production.up.railway.app/user/all') 
        //fetch('http://localhost:5001/members/')
        .then(res => res.json())
        .then((data) => {
          console.log('data:'); 
          console.log(data);  
           
          const transformData = data.users.map((d :User) => {
            return{
              _id : d._id,
              name: d.name,
              isCustomer : d.isCustomer
            }
          })

          setUsers(transformData);
          console.log('users: no data??'); 
          console.log(users);   
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

  console.log('users1 between functions');
  console.log(users);

  const onSubmitHandler = (name :string) => {
    console.log('In onSubmitHandler');
    console.log(name);
    console.log('users onside submithandler before map')
    console.log(users);

    const filtered = users.filter((value) => value.name === name);
    console.log('Filtered')
    console.log(filtered);

    if (filtered.length !== 0)
    {
      setText(name);
      setDisplay(false);
      setIsCustomer(filtered[0].isCustomer);    
    };

    if (filtered.length === 0)
    {
      setText('Not exists');
      setDisplay(true)
    };
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

