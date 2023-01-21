import React from "react";
import { Routes, Route } from "react-router-dom";
import Beauty from "../Pages/Beauty/Beauty";
import { Home } from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
      <Route path="/personalcare" element={<Beauty/>}/>



    
    </Routes>
  );
};

export default MainRoute