import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Products/Product";
import Users from "../Pages/Users/Users";


const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Users />} />
            <Route path="/product" element={<Product />} />

        </Routes>
    );
};

export default MainRoute;
