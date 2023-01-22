import React, { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../requestMethod";
import "./cart.css";
let bagData = JSON.parse(localStorage.getItem("bagData"));
const Summary = () => {
  const [bagg, setBagg] = useState(bagData || []);
  console.log("bagg:", bagg);

  let MRP = 1899 * bagg?.length;
  let Discount_MRP = 1250 * bagg?.length;
  let Total_Amount = 549 * bagg?.length;

  useEffect(() => {
    setBagg(bagData);
  }, []);

  return (
    <div>
      {/* <h3>COUPONS</h3>
      <div className="coupon-div">
        <h3>Apply Coupons</h3>
        <button>APPLY</button>
      </div> */}
      <h3 style={{ marginTop: "10px", fontWeight: "bold" }}>
        PRICE DETAILS (1 item)
      </h3>
      <div className="list">
        <p>Total MRP</p>
        <p>₹{MRP}</p>
      </div>
      <div className="list">
        <p>Discount on MRP</p>
        <p style={{ color: "#14CDA8" }}>-₹{Discount_MRP}</p>
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
        <h2>
          <b>Total Amount</b>
        </h2>
        <p>
          <b>₹{Total_Amount}</b>
        </p>
      </div>
    </div>
  );
};

export default Summary;
