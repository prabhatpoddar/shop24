import React from "react";
import "./payment.css";
import Summary from "./Summary";
import { useCallback, useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import logo from "./Shop24.jpeg";
// import SuccessAlert from "./SuccessAlert";
import swal from "sweetalert";
import { publicRequest } from "../../requestMethod";
let bagData = JSON.parse(localStorage.getItem("bagData"));

const Payment = () => {
  const [bagg, setBagg] = useState(bagData || []);

  let Total_Amount = 549 * bagg?.length;

  const Razorpay = useRazorpay();
  const orderPayment = () => {
    const data = {
      amount: Total_Amount,
    };

    publicRequest
      .post("/order", data, {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => console.log("asdf", res.data));
  };

  const handlePayment = useCallback(async () => {
    const order = {
      //   amount: 500,
      currency: "INR",
      receipt: "qwsaq1",
    };

    const options = {
      key: "rzp_test_qho4K1vu3eyRqY",
      amount: 1000 * 100,
      currency: "INR",
      name: "SHOP 24",
      description: "Test Transaction",
      image: logo,
      order_id: order.id,
      handler: (res) => {
        swal({
          title: "Payment Successful",
          text: "Your order has been placed!",
          icon: "success",
        });
        // navigate("/");
      },
      prefill: {
        name: "John Doe",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0D0D0D",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  //get order
  const getoders = () => {
    publicRequest
      .get("/order", {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => console.log("allorder", res.data));
  };

  useEffect(() => {
    setBagg(bagData);
  }, []);
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
            {/* <span id="dots"></span> */}
            {/* <span id="more"> */}
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
                10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA
              </span>
            </li>
            {/* </span> */}
          </div>
          <button id="myBtn">Show More</button>
        </div>
      </div>
      <div className="right">
        <Summary />
        <button
          onClick={() => {
            handlePayment();
            orderPayment();
          }}
        >
          Proceed to Payment
        </button>
        <button onClick={getoders}>dxfghjndfgh</button>
      </div>
    </div>
  );
};

export default Payment;
