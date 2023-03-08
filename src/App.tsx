import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import LogInPage from './components/logInPage/LogInPage';
import CustomerPage from './components/customerPage/CustomerPage';
import CleanerPage from './components/cleanerPage/CleanerPage';





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LogInPage/>} />
          <Route path='/login/customer' element={<CustomerPage/>} />
          <Route path='/login/cleaner' element={<CleanerPage/>} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
