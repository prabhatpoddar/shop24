import React from 'react'

import { Router, Route } from "react-router-dom";

import Home from './Pages/Home/Home';
import Product from './Pages/Products/Product';
import User from './Pages/Users/User';

const Dashboard = () => {
  return (
    <Router >

      <Route path="/admin" element={<Home />} />



      <Route path="/admin/users" element={<User />} />

      <Route path="/admin/products" element={<Product />} />






    </Router>
  )
}

export default Dashboard