import React from "react";
import "./cart.css";

const Summary = () => {
  return (
    <div>
      <h3>COUPONS</h3>
      <div className="coupon-div">
        <h3>Apply Coupons</h3>
        <button>APPLY</button>
      </div>
      <h3>PRICE DETAILS(1 item)</h3>
      <div className="list">
        <p>Total MRP</p>
        <p>₹1899</p>
      </div>
      <div className="list">
        <p>Discount on MRP</p>
        <p style={{ color: "#14CDA8" }}>-₹1250</p>
      </div>
      <div className="list">
        <p>Convenience Fee</p>
        <div style={{ display: "flex", gap: "5px" }}>
          <p style={{ textDecoration: "line-through" }}>₹99</p>
          <p style={{ color: "#14CDA8" }}>FREE</p>
        </div>
      </div>
      <hr style={{ marginTop: "15px" }} />
      <div className="list">
        <h2>Total Amount</h2>
        <p>₹549</p>
      </div>
    </div>
  );
};

export default Summary;
