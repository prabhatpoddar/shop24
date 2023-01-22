import React from "react";
import { Routes, Route } from "react-router-dom";
import Beauty from "../Pages/Beauty/Beauty";

import SingleProductPage from "../Pages/Beauty/SingleProductPage";

import Dummy from "../Pages/dummy";

import { Home } from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import LoginByEmail from "../Pages/Login/LoginByEmail";
import Otp from "../Pages/Login/Otp";
import Signup from "../Pages/Login/Signup";
import Wishlist from "../Pages/wishlist/Wishlist";
import { Womens } from "../Pages/Women/Womens";

import Cart from "./Checkout/Cart";
import Hotel from "../Pages/Home&Hotels/Hotel";
import Kids from "./Nav/NavComponent/Kids";
import { Mens } from "../Pages/Men/Mens";


const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Mens />} />
      <Route path="/women" element={<Womens />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/dummy" element={<Dummy />} />
      <Route path="/personalcare" element={<Beauty />} />
      <Route
        path="/personalcare/personalcare/:id"
        element={<SingleProductPage />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/loginbyemail" element={<LoginByEmail />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/bag" element={<Cart />} />
    </Routes>
  );
};

export default MainRoute;
