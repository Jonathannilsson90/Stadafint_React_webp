import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';

import CustomerAccount from './components/usersAccount/CustomersAccount';
import CleanerAccount from './components/usersAccount/CleanerAccount';
import LogInPage from './components/loginPage/LoginPage'




function App() {

  const  onScrollToElementClickHandler =(el : string) =>{
    let element = document.querySelector('.' + el);
    console.log('Element');
    console.log(element);
    if (element) {
        element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
      }
  }

  return (
    <div className="App">
      
      <Router>
      {/* <NavigationMenu onScrollToElementClickHandler={onScrollToElementClickHandler}></NavigationMenu> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LogInPage/>} />
          <Route path='/login/customer' element={<CustomerAccount/>} />
          <Route path='/login/cleaner' element={<CleanerAccount/>} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
