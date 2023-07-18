import './App.css';
import React from 'react';  
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from './views/register.js'
import Login from './views/login';
import Mainbox from './views/mainbox';
import Profile from './views/profile';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/register" element ={<Register/>} />
    <Route exact path="/login" element ={<Login/>} />
    <Route exact path="/main" element ={<Mainbox/>} />
    <Route exact path="/profile" element ={<Profile/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
