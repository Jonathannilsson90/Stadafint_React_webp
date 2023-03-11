import { ResultType } from '@remix-run/router/dist/utils';
import { useEffect, useState } from 'react'
import User from '../../models/User';
import { fetchData2} from './api';
import LogInForm from './components/LogInForm'
//import './css/LogInPage.css'
import './css/LogInPage.css'
import { ILogInPage } from './interfaces';

const LogInPage = (props: ILogInPage) => {

  const[users, setUsers]= useState<User[]>([]);
  const [isCustomer, setIsCustomer] = useState(false);
  const [display, setDisplay]  =  useState(true)
  const [text, setText] = useState('');
  const [login, setLogin] = useState(false);
  const [paht, setPath] = useState("/")
     
   const fetchData = async () => {
    try
    {
        const resp = await fetch('https://stadafint-server-production.up.railway.app/user/all') 
        //fetch('http://localhost:5001/members/')
        const data = await resp.json();
           
          const transformData = data.users.map((d :User) => {
            return{
              _id : d._id,
              name: d.name,
              isCustomer : d.isCustomer
            }
          })
          setUsers(transformData);                       
    }    
    catch(error)
    {
        console.log(error);
    }   
  }  
     
  useEffect(() => { 
    fetchData()
  }, []); 

  


  const onSubmitHandler = (name :string) => {
/*     console.log('In onSubmitHandler');
    console.log(name);
    console.log('users onside submithandler before map')
    console.log(users); */

    const filtered = users.filter((value) => value.name === name);
    console.log('Filtered')
    console.log(filtered); 

    if (filtered.length !== 0)
    {
      console.log('inside filtered.length !== 0'); 
      setText(name);
      setDisplay(false);
      setIsCustomer(filtered[0].isCustomer);  
      setLogin(true);    
    };

    if (filtered.length === 0)
    {
      setText('Not exists');
      setDisplay(true);
      setLogin(false);
    };

  }

  console.log('login in login page'); 
  console.log(login); 
  props.loginButtonTestHandler(login)

/*   console.log('isCustomer');
  console.log(isCustomer); */  
    
  return (
      <>
           <LogInForm  onSubmitHandler={onSubmitHandler}
                      text={text}
                      display={display}
                      isCustomer={isCustomer} ></LogInForm> 
      </> 
  )
}

export default LogInPage

