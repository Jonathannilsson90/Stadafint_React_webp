import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { addData, fetchData}            from './api';
import { ILogInPage }          from './interfaces';

import LogInForm from './components/LogInForm'
import User      from '../../models/User';


interface INameContext{
  text: string
  setText : Dispatch<SetStateAction<string>>
}


export const NameContext = createContext<INameContext>({
  text: "", 
  setText: () => {}
});

const LogInPage = (props: ILogInPage) => {

  //-------------------------- UseStates ------------------------------
  const [users, setUsers]= useState<User[]>([]);
  const [isCustomer, setIsCustomer] = useState(false);
  const [display, setDisplay]  =  useState(true)
  const [text, setText] = useState('');
  const [login, setLogin] = useState(false);
  const [newCustomer, setNewCustomer] = useState(true);
     
   /* const fetchData = async () => {
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
  }   */
   
  //-------------------------------------------------------------------
  useEffect(() => 
  { (
      async function() 
      {
      let res : User[] = await fetchData() as User[];
      setUsers(res);
      } 
    )()  
  }, []); 

  //-------------------------------------------------------------------
  const onSubmitHandler = (name :string) => {
    
    const filtered = users.filter((value) => value.name === name);

    if (filtered.length !== 0)
    {
      //console.log('inside filtered.length !== 0'); 
      setText(name);
      setDisplay(false);
      setIsCustomer(filtered[0].isCustomer);  
      setLogin(true); 
      setNewCustomer(true);   
    };

    if (filtered.length === 0)
    {
      setText('Would you like to became our new customer?');
      setDisplay(true);
      setLogin(false);
      setNewCustomer(false);
    };

  }

  //-------------------------------------------------------------------
  const onAddNewCustomerHandler = (name: string) => {
    //console.log('inside onAddNewCustomerHandler'); 
    

/*     const addData = async (name: string) => 
    {
                 
      let newCustomer = {
          name: name,
          isCustomer: true
          
      } 
  
          try
      {
          const res = await fetch('https://stadafint-server-production.up.railway.app/user/register', 
          {
              method: 'POST',
              body: JSON.stringify(newCustomer),
              headers: 
              {
                  'Content-Type': 'application/json',
              }
          })    
      }
      catch(error) 
      {
          console.log(error);     
      } 
    } */

    setText(name);
    setDisplay(false);
    setIsCustomer(true);  
    setLogin(true); 
    setNewCustomer(true);  

  props.loginButtonTextHandler(login);
  addData(name); 

  }

  //-------------------------------------------------------------------
  
 props.loginButtonTextHandler(login);

   
  //-------------------------------------------------------------------
  return (
      <>
      <NameContext.Provider value={{text, setText}}>
          <LogInForm  onSubmitHandler={onSubmitHandler}
                          onAddNewCustomerHandler={onAddNewCustomerHandler}
                          // text={text}
                          display={display}
                          newCustomer={newCustomer}
                          isCustomer={isCustomer} ></LogInForm> 
          </NameContext.Provider>
      </> 
  )
}

export default LogInPage

