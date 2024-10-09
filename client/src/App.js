//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Box from '@mui/material/Box';
import Contact from './components/Contact';
function App() {
  return (
    <React.Fragment>
      
      
      <Header />
        
        
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/Login' element={<Login />} exact />
            <Route path='/Register' element={<Register />} exact />
            <Route path='/Contact' element={<Contact />} exact />
            
          </Routes>
        
      

    </React.Fragment>
  );
}

export default App;