import React from "react";
import "./address.css";
import Summary from "./Summary";

const Address = () => {
  return (
    <div className="main">
      <div className="left">
        <div className="container">
          <h3>CONTACT DETAILS</h3>
          <input type="text" placeholder="Name*" />
          <input type="number" placeholder="Mobile No*" />
          <h3>ADDRESS</h3>
          <input type="number" placeholder="Pin Code*" />
          <input
            type="text"
            placeholder="Address (House No, Building, Street, Area)*"
          />
          <input type="text" placeholder="Locality / Town*" />
          <div className="city">
            <button>Kolkata</button>
            <button>WEST BENGAL</button>
          </div>
          <button className="address-btn">ADD ADDRESS</button>
        </div>
      </div>
      {/* <div className="left">
        <div className="div-1">
          <h1>Select Delivery Address</h1>
          <button>ADD NEW ADDRESS</button>
        </div>
        <h3>DEFAULT ADDRESS</h3>
        <div className="div-2"></div>
      </div> */}
      <div className="right">
        <Summary />
      </div>
    </div>
  );
};

export default Address;
