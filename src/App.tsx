import React, { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import LogInPage from './components/logInPage/LoginPage';
import NavigationMenu from './components/global/components/NavigationMenu';
import Footer from './components/global/components/Footer';
import CustomerPage from './components/customerPage/CustomerPage';
import CleanerPage from './components/cleanerPage/CleanerPage';





function App() {



  const [login, setLogin] = useState(false);
  const [loginText, setLoginText] = useState('Log in'); 
  const [load, setLoad] = useState('/login');


  const loginButtonTestHandler = (login: boolean) => {
    console.log('loginButtonTestHandler in app.tsx');
    console.log('login');
    console.log(login);

    if (login)
    {
      setLoginText('Log out');
      setLoad('/');
    };
    if (!login)
    {
      setLoginText('Log in');
      setLoad('/login');
    };
    console.log('loginText');
    console.log(loginText);

}

  const  onScrollToElementClickHandler = (el : string) =>{
    setLogin(false);
    setLoginText('Log in');
    setLoad('/login');
    console.log('scrollToElementClickHandler in app');
    console.log('El');
    console.log(el);

    let element = document.querySelector('.' + el);
    console.log('Element');
    console.log(element);

    if (element) {
        element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
      }
  }

/*   useEffect(() => { 
    //setLogin(false);
    //setLoginText('Log in');
  }, []);  */


  return (
    <div className="App">
      
      <Router>
       <NavigationMenu 
          onScrollToElementClickHandler={onScrollToElementClickHandler}
          loginText={loginText}
          login={login}
          load={load}></NavigationMenu> 
        <Routes>
          <Route path='/' element={<HomePage
            onScrollToElementClickHandler={onScrollToElementClickHandler}/>} />
          <Route path='/login' element={<LogInPage loginButtonTestHandler={loginButtonTestHandler}/>} />
          <Route path='/login/customer' element={<CustomerPage/>} />
          <Route path='/login/cleaner' element={<CleanerPage/>} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        <Footer onScrollToElementClickHandler={onScrollToElementClickHandler}></Footer>
      </Router>

    </div>
  );
}

export default App;
