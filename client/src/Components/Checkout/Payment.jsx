import React from "react";
import "./payment.css";
import Summary from "./Summary";

const Payment = () => {
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
    <div className="main-div">
      <div className="left">
        <div className="accordion">
          <h2>Bank Offer</h2>
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
                  10% Instant Discount on ICICI Bank Credit Cards on a min spend
                  of Rs 4,000. TCA
                </span>
              </li>
              <li className="offers">
                <span>
                  5% Cashback on Paytm Wallet and Postpaid Transactions on a min
                  spend of Rs 1,500. TCA
                </span>
              </li>
              <li className="offers">
                <span>
                  Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of Rs
                  1,000. TCA
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
      </div>
      <div className="right">
        <Summary />
      </div>
    </div>
  );
};

export default Payment;
