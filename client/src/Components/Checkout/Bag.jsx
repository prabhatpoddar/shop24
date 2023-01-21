import React, { useState } from "react";
import "./cart.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Bag = () => {
  const [showModal, setShowModal] = useState(false);

  const myFunction = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show Less";
      moreText.style.display = "inline";
    }
  };

  return (
    <div id="container">
      <hr />
      <div className="main">
        <div className="left">
          <div className="address">
            <p className="p1">
              <b>Check delivery time & services</b>
            </p>
            <button className="pinBtn" onClick={() => setShowModal(!showModal)}>
              ENTER PIN CODE
            </button>
            {showModal && (
              <div id="myModal" className="modal">
                <div className="modal-content">
                  <span
                    className="close"
                    onClick={() => setShowModal(!showModal)}
                  >
                    &times;
                  </span>
                  <h2>Enter Delivery Pincode</h2>
                  <input
                    type="number"
                    className="pinInput"
                    placeholder="Enter Pincode"
                    maxLength={6}
                  />
                  <button
                    style={{
                      width: "90%",
                      height: "40px",
                      backgroundColor: "#e93d67",
                      borderRadius: "5px",
                      marginTop: "15px",
                      color: "white",
                    }}
                  >
                    Check
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="accordion">
            <h2>Available Offers</h2>
            <div>
              <li className="offers">
                <span>
                  10% Instant Discount on Citi Credit and Debit Cards on a min
                  spend of Rs 3,000. TCA
                </span>
              </li>
              <span id="dots"></span>
              <span id="more">
                <li className="offers">
                  <span>
                    10% Instant Discount on ICICI Bank Credit Cards on a min
                    spend of Rs 4,000. TCA
                  </span>
                </li>
                <li className="offers">
                  <span>
                    5% Cashback on Paytm Wallet and Postpaid Transactions on a
                    min spend of Rs 1,500. TCA
                  </span>
                </li>
                <li className="offers">
                  <span>
                    Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of
                    Rs 1,000. TCA
                  </span>
                </li>
                <li className="offers">
                  <span>
                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                  </span>
                </li>
                <li className="offers">
                  <span>
                    10% Cashback upto Rs 150 on Freecharge Paylater transaction.
                    TCA
                  </span>
                </li>
              </span>
            </div>
            <button onClick={myFunction} id="myBtn">
              Show More
            </button>
          </div>
          <div className="fee">
            <p>
              Yay! <b>No convenience fee</b> on this order.
            </p>
          </div>
          <div className="select"></div>
          <div className="items">
            <div className="card">
              <div>
                <img
                  className="item-img"
                  src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3>HERE&NOW</h3>
                <p>Men Black Slim Fit Casual Shirt</p>
                <p>Sold by: Sixth Sense</p>
                <div>
                  <button>
                    <b>Size: 40</b>
                  </button>
                  <button>
                    <b>Qty: 1</b>
                  </button>
                </div>
                <div className="price">
                  <p>₹ 649</p>
                  <p>₹1899</p>
                  <p>₹1250 OFF</p>
                </div>
                <p style={{ color: "#14CDA8" }}>Coupon Discount: ₹100</p>
                <p>
                  <b>30 days</b> return available
                </p>
                <p>
                  Delivery by <b>29 Jan 2023</b>
                </p>
              </div>
            </div>
            <div className="wishBtn">
              <h2>Add More From Wishlist</h2>
              <MdKeyboardArrowRight className="arw" />
            </div>
          </div>
        </div>
        <div className="right">
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
          <button className="order-btn">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
