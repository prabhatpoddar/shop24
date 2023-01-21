import React from "react";
import { Routes, Route } from "react-router-dom";
import Beauty from "../Pages/Beauty/Beauty";
import { Home } from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import LoginByEmail from "../Pages/Login/LoginByEmail";
import Otp from "../Pages/Login/Otp";
import Signup from "../Pages/Login/Signup";
import Wishlist from "../Pages/wishlist/Wishlist";

const MainRoute = () => {
  return (
    <Routes>

      <Route path="/" element={<Home/>}/>
   
      
      <Route path="/personalcare" element={<Beauty/>}/>




      <Route path="/login" element={<Login />} />
      <Route path="/loginbyemail" element={<LoginByEmail />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/wishlist" element={<Wishlist />} />

    </Routes>
  );
};

export default MainRoute