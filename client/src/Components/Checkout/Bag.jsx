import React, { useState } from "react";
import "./cart.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import Summary from "./Summary";
import { publicRequest } from "../../requestMethod";
import { AiFillDelete } from "react-icons/ai";
import { Link as NavLink } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const Bag = ({ retriveData }) => {
  const [showModal, setShowModal] = useState(false);
  const [bagData, setBagData] = useState([]);
  localStorage.setItem("bagData", JSON.stringify(bagData));
  const toast = useToast();
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

  const quantityHandler = (num, item) => {
    console.log("num,item:", num, item);
    let id = item._id;
    let qun = item.quantity + num;
    updateBag(id, qun);
  };

  const updateBag = (id, qun) => {
    // let id = "63cc1bcf7ce1b7155c36bd48";
    let data = { quantity: qun };
    publicRequest
      .patch(`/bag/${id}`, data, {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);
        getBagData();
      });
  };

  const getBagData = () => {
    publicRequest
      .get("/bag", {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res?.data) {
          setBagData(res.data);
        }
      });
  };

  const deleteBag = (id) => {
    publicRequest
      .delete(`/bag/${id}`, {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);
        getBagData();
      });
  };

  useState(() => {
    getBagData();
  }, []);

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
                      height: "50px",
                      backgroundColor: "#e93d67",
                      borderRadius: "5px",
                      marginTop: "15px",
                      color: "white",
                    }}
                    onClick={() => {
                      toast({
                        description: "You are eligible for this pincode!",
                        status: "success",
                        position: "bottom-right",
                        duration: 5000,
                        isClosable: true,
                      });
                      setShowModal(!showModal);
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
            {/* map here */}

            {bagData &&
              bagData.length > 0 &&
              bagData.map((item) => {
                return (
                  <div className="card">
                    <div>
                      <img className="item-img" src={item?.img} alt="" />
                    </div>

                    <div>
                      <h3>{item?.brand}</h3>
                      <p>{item?.title}</p>
                      <p>Sold by: {item?.brand}e</p>
                      <div>
                        <button>
                          <b>Size: {item?.size}</b>
                        </button>
                        <button>
                          <b>Qty: {item?.quantity}</b>
                        </button>

                        <button
                          disabled={item?.quantity === 1}
                          onClick={() => quantityHandler(-1, item)}
                        >
                          -
                        </button>
                        <button onClick={() => quantityHandler(+1, item)}>
                          +
                        </button>

                        <button onClick={() => deleteBag(item._id)}>
                          <AiFillDelete />
                        </button>
                      </div>
                      <div className="price">
                        {console.log(parseInt(item?.price?.split(" ")[1]))}
                        <p>
                          {parseInt(item?.price?.split(" ")[1]) *
                            item?.quantity}
                        </p>
                        <p>
                          {parseInt(item?.off_price?.split(" ")[1]) *
                            item?.quantity}
                        </p>
                        <p>{item?.discount}</p>
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
                );
              })}
            {bagData && bagData.length === 0 && (
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
            )}

            {/* map here */}
            <div className="wishBtn">
              <NavLink to="/wishlist">Add More From Wishlist</NavLink>
              {/* <h2   ></h2> */}
              <MdKeyboardArrowRight className="arw" />
            </div>
          </div>
        </div>
        <div className="right">
          <Summary />
          <button className="order-btn">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
