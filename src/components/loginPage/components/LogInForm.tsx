import '../css/LogInForm.css'

import { useContext, useState }    from "react"
import { useNavigate } from "react-router-dom";

import { ILogInForm } from "../interfaces";
import { NameContext } from '../LoginPage';


const LogInForm = (props: ILogInForm) => { 

    let navigation = useNavigate();

    const {text} = useContext(NameContext)

    //-------------------------- UseStates ------------------------------
    const [name, setName] = useState('');

    //-------------------------------------------------------------------
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmitHandler(name);
    }

    //-------------------------------------------------------------------
    const addNewCustomerHandler = (name : string) => {
        props.onAddNewCustomerHandler(name);            
    }

    //-------------------------------------------------------------------
    return (
        <div className='login-section-wrapper'>

            <div className="login-section-background-image"></div>

            <form action="" className='login-form' onSubmit={submitHandler}>

                <div style={{ display: props.display ? 'block' : 'none' }}>
                    <h2>Enter your name: </h2>
                    <label className="login-lable" htmlFor="name"></label>
                    <input type="text"
                        id="name"
                        className="name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='login-form-h1'>
                    <h2 style={{ display: props.display ? 'none' : 'block' }}>Hello,</h2>
                    <h1 style={{ fontSize: props.display ? 16 : 46 }}>{text}</h1>
                </div>

                 <div >
                    {(props.newCustomer && props.display) && <button className="login-section-button" type="submit">Log in</button>}
                    {!props.newCustomer && <button className="login-section-button" 
                                                   type="button" 
                                                   onClick={() => {addNewCustomerHandler(name)}}>Yes</button>}
                    {!props.newCustomer && <button className="login-section-button" 
                                                   type="button" 
                                                   onClick={() => navigation('/')}>Not now</button>}
                </div> 


                <div className="logged-in-buttons" style={{ display: !props.display ? 'flex' : 'none' }}>
                    {props.isCustomer && <button className="login-section-button btn" 
                                                type="button"
                                                onClick={() => navigation(`/login/customer/${name}`)}>My Account</button>}
                    {!props.isCustomer &&<button className="login-section-button btn" 
                                                type="button"
                                                onClick={() => navigation(`/login/cleaner/${name}`)}>My Account</button>}
                </div>

            </form>
        </div>
    )
}
export default LogInForm