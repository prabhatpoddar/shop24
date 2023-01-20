import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Wishlist from "../Pages/wishlist/Wishlist";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default MainRoute;
