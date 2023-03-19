import React, { useState } from "react";
import { Link } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from "react-redux";
const BagPayment = ({COD}) => {
    const cartItems = useSelector(store => store.bag.products)
    const x = useSelector(store => store.bag.total)
   

    const [pay, setPay] = useState(true);
    const handleOrder = () => {

    }

    const token = (paymenttoken) => {
        console.log('token:', paymenttoken)

    }



  return (
    <div>
            <div style={{ display: "flex", width: "72%", gap: "25px", margin: "auto" }}>
                <div>
                    <div style={{ display: "flex", gap: "20px", border: "1px solid #eaeaec", height: "45px", justifyContent: "center", alignItems: "center" }}><img style={{ width: "20px", height: "20px" }} src="https://cdn-icons-png.flaticon.com/128/372/372754.png" alt="offer" /> <p style={{ fontSize: "14px", fontWeight: "500" }}>Bank Offer</p></div>
                    <p style={{ fontSize: "14px", fontWeight: "500", marginTop: "5px" }}>Choose Payment Mode</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ border: "1px solid #eaeaec", marginTop: "20px", height: "40px", width: "200px", justifyContent: "center", alignItems: "center", display: "flex" }} onClick={() => {
                            setPay(false)
                            COD()
                        }}>Cash On Delivery</div>
                        <div style={{ border: "1px solid #eaeaec", marginTop: "20px", height: "40px", width: "200px", justifyContent: "center", alignItems: "center", display: "flex" }} onClick={() => setPay(true)}>
                            <StripeCheckout
                                name="Shop 24"
                                image="https://user-images.githubusercontent.com/98205449/213233396-1caf5409-150c-4862-bb2b-03fbd8e3bbf5.jpg"
                                billingAddress
                                shippingAddress
                                description={`You have to pay ${x}`}
                                amount={x * 100}
                                token={token}
                                currency="INR"
                                stripeKey="pk_test_51MX7IZSIaUdW5gBoRyRUKxT6CcWcgKSCFzuRFgEDzq0E79KexRw0qotgAFizczmFr681wYyr1qQfVWncQGhXL4yC00MFl9AdHh"
                            ><button>Credit/Debit Card</button></StripeCheckout>
                        </div>
                    </div>
                    <div style={{ display: pay ? "block" : "none" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginTop: "5px" }}>
                            {/* <p style={{ fontSize: "14px", fontWeight: "500" }}>CREDIT / DEBIT CARD</p>
                            <p style={{ fontSize: "14px", fontWeight: "500" }}>Please ensure your card can be used fro online transactions.</p>
                            <p style={{ fontSize: "14px", fontWeight: "500" }}>Know More</p> */}
                            {/* <input style={{ border: "1px solid #eaeaec", borderRadius: "10px", height: "50px", marginBottom: "20px", marginTop: "20px", paddingLeft: "5px", outline: "none" }} type="number" placeholder="Enter Your Card Number" />
                            <input style={{ border: "1px solid #eaeaec", borderRadius: "10px", height: "50px", marginBottom: "20px", paddingLeft: "5px", outline: "none" }} type="number" placeholder="Name On Card" />
                            <div><input style={{ border: "1px solid #eaeaec", borderRadius: "10px", height: "50px", marginRight: "20px", paddingLeft: "5px", outline: "none" }} type="date" placeholder="Vaild Thru" /><input style={{ border: "1px solid #eaeaec", borderRadius: "10px", height: "50px", paddingLeft: "5px", outline: "none" }} type="number" placeholder="CVV" /></div> */}
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}><div style={{ display: "flex", gap: "20px" }}><img style={{ width: "20px", height: "20px" }} src="https://cdn.iconscout.com/icon/free/png-128/gift-3239302-2699141.png" alt="gift" />Have a gift card?</div> <div>APPLY GIFT CARD</div></div>
                </div>
                <div style={{ border: "1px solid #eaeaec", width: "2px", height: "100%" }}></div>
                <div style={{ width: "350px" }}>
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>PRICE DETAILS ({cartItems?.length} item)</p>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Total MRP</p><p>{x}</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Discount on MRP</p><p style={{ color: "teal" }}>- ₹0</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Coupon Discount</p><p style={{ color: "teal" }}>- ₹0</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Convenience Fee <p>Know More</p></p><p style={{ color: "teal", display: "flex", gap: "10px" }}><p style={{ textDecoration: "line-through", color: "black" }}>₹99</p> FREE</p></div>
                    <hr backgroundColor="#eaeaec" style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ fontWeight: "500", fontSize: "14px" }}>Total Amount</p><p>₹{x}</p></div>
                </div>
            </div>
            <button style={{ border: "4px solid #ff3e6c", color: "#ff3e6c", padding: "20px", marginLeft: "47%", marginTop: "20px" }} onClick={handleOrder}>
                <Link to="/"> PLACE ORDER</Link></button>
        </div>
  )
}

export default BagPayment