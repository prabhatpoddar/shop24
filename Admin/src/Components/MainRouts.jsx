import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import LoginByEmail from "../Login/LoginByEmail";
import Otp from "../Login/Otp";
import Home from "../Pages/Home/Home";
import NewProduct from "../Pages/newProduct/NewProduct";
import NewUser from "../Pages/newUser/NewUser";
import ProductList from "../Pages/productList/ProductList";
import Product from "../Pages/Products/Product";
import Sale from "../Pages/Sale/Sale";
import Users from "../Pages/Users/Users";



const MainRoute = () => {

  const Token = (child) => {
    let token = JSON.parse(localStorage.getItem("token"));
    let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    if (token != null && isAdmin !== "user") {
      return child;
    } else {

      return <Navigate to="/login" />
    }
  };
  return (
    <Routes>
      <Route path="/" element={Token(<Home />)} />
      <Route path="/users" element={Token(<Users />)} />
      <Route path="/newUser" element={Token(<NewUser />)} />
      <Route path="/products" element={Token(<ProductList />)} />
      <Route path="/product/:id" element={Token(<Product />)} />
      <Route path="/newproduct" element={Token(<NewProduct />)} />
      <Route path="/sale" element={Token(<Sale />)} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginbyemail" element={<LoginByEmail />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  );
};

export default MainRoute;
