import React from "react";
import Footer from "../../Components/Footer/Footer";

import "../Home/Home.css";
import MainNavbar from "../Navbar/MainNavbar";
import { HomeMid } from "./HomeMid";
// import MainNavbar from "../Navbar/MainNavbar";
export const Home = () => {
  return (
    <div className="home">
      <MainNavbar/>
      <HomeMid />
      <Footer/>
    </div>
  );
};
