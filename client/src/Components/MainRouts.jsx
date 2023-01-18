import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "../Pages/Admin/AdminPanel";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPanel/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>


    
    </Routes>
  );
};

export default MainRoute;
