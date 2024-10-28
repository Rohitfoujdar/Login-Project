import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import {  BrowserRouter, Routes ,Route,} from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
     <BrowserRouter>
     <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
