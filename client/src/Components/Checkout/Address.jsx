import React, { useState } from "react";
import "./address.css";
import Summary from "./Summary";

const Address = () => {
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div className="main">
      {/* <div className="left">
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
      </div> */}
      <div className="left">
        <div className="div-1">
          <h1>Select Delivery Address</h1>
          <button onClick={() => setShowAdd(!showAdd)}>ADD NEW ADDRESS</button>
        </div>
        <h3>DEFAULT ADDRESS</h3>
        <div className="div-2">
          <h2>Sahil Khan</h2>
          <p>4D West Chowbhaga, Gulshan Colony</p>
          <p>Kolkata, West Bengal - 700100</p>
          <p>
            Mobile: <b>9333876203</b>
          </p>
          <li>Pay on Delivery available</li>
          <div className="btn-div1">
            <button>REMOVE</button>
            <button>EDIT</button>
          </div>
        </div>
        <div className="div-3" onClick={() => setShowAdd(!showAdd)}>
          <h1>+ Add New Address</h1>
        </div>
        {showAdd && (
          <div className="modal1">
            <div className="content1">
              <div className="div-4">
                <p>ADD NEW ADDRESS</p>
                <span className="close1" onClick={() => setShowAdd(!showAdd)}>
                  &times;
                </span>
              </div>
              <h3>CONTACT DETAILS</h3>
              <input type="text" placeholder="Name*" />
              <input type="number" placeholder="Mobile No*" />
              <h3>ADDRESS</h3>
              <input type="number" placeholder="Pin Code" />
              <input
                type="number"
                placeholder="Address (House No, Building, Street, Area)*"
              />
              <button className="address-btn">ADD ADDRESS</button>
            </div>
          </div>
        )}
      </div>
      <div className="right">
        <Summary />
        <button>CONTINUE</button>
      </div>
    </div>
  );
};

export default Address;
