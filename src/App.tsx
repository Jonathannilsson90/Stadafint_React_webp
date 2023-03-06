import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import LoginPage from './components/logInPage/LoginPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
