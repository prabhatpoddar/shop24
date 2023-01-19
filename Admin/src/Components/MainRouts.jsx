import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NewProduct from "../Pages/newProduct/NewProduct";
import NewUser from "../Pages/newUser/NewUser";
import ProductList from "../Pages/productList/ProductList";
import Product from "../Pages/Products/Product";
import User from "../Pages/user/User";
import Users from "../Pages/Users/Users";


const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
    );
};

export default MainRoute;
