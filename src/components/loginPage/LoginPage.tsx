import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { addData, fetchData} from './api';
import { ILogInPage } from './interfaces';

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
  const onSubmitHandler = async (name :string) => {

    const filtered = users.filter((value) => value.name === name);

    if (filtered.length !== 0)
    {
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
  const onAddNewCustomerHandler = async (name: string) => {
    setText(name);
    setDisplay(false);
    setIsCustomer(true);  
    setLogin(true); 
    setNewCustomer(true);  

    props.loginButtonTextHandler(login);
    let res = await addData(name);
  }

  //-------------------------------------------------------------------
  props.loginButtonTextHandler(login);
 
  //-------------------------------------------------------------------
  return (
      <>
      <NameContext.Provider value={{text, setText}}>
          <LogInForm  onSubmitHandler={onSubmitHandler}
                      onAddNewCustomerHandler={onAddNewCustomerHandler}
                      display={display}
                      newCustomer={newCustomer}
                      isCustomer={isCustomer} ></LogInForm> 
          </NameContext.Provider>
      </> 
  )
}

export default LogInPage

