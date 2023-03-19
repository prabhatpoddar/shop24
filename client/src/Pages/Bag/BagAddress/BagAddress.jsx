import React, { useState } from "react";

import { useSelector } from "react-redux";

const BagAddress = ({handleAddAddress}) => {
    const cartItems = useSelector(store => store.bag.products)

    const x = useSelector(store => store.bag.total)
    const [address, setAddress] = useState(false);
    const [payment, setPayment] = useState(true);
    const [red, setRed] = useState(true);




    const handleSubmit = (e) => {

    }


   

  return (
    

    <div>
    <div style={{ display: "flex", gap: "25px", width: "70%", margin: "auto" }} >
        <div>
            <form onSubmit={() => handleSubmit()} style={{ display: "flex", flexDirection: "column", gap: "20px", border: "1px solid #eaeaec", padding: "20px" }}>
                <p style={{ fontSize: "12px", fontWeight: "700" }}>CONTACT DETAILS</p>
                <input style={{ border: "2px solid #eaeaec", borderRadius: "7px", height: "45px", paddingLeft: "5px", outline: "none" }} placeholder="Name*" />
                <input style={{ border: "2px solid #eaeaec", borderRadius: "7px", height: "45px", paddingLeft: "5px", outline: "none" }} placeholder="Mobile No*" />
                <p style={{ fontSize: "12px", fontWeight: "700" }}>ADDRESS</p>
                <input style={{ border: "2px solid #eaeaec", borderRadius: "7px", height: "45px", paddingLeft: "5px", outline: "none" }} placeholder="Pin Code*" />
                <input style={{ border: "2px solid #eaeaec", borderRadius: "7px", height: "45px", paddingLeft: "5px", outline: "none" }} placeholder="Address (House No, Bulding, Street, Area)*" />
                <input style={{ border: "2px solid #eaeaec", borderRadius: "7px", height: "45px", paddingLeft: "5px", outline: "none" }} placeholder="Locality / Town*" />
                <div>
                    <input style={{ border: "2px solid #eaeaec", backgroundColor: "#eaeaec", borderRadius: "7px", paddingLeft: "5px", height: "45px", width: "190px", outline: "none" }} placeholder="City / District*" />
                    <input style={{ border: "2px solid #eaeaec", backgroundColor: "#eaeaec", borderRadius: "7px", paddingLeft: "5px", height: "45px", width: "190px", marginLeft: "20px", outline: "none" }} placeholder="State*" />
                </div>
                <p style={{ fontSize: "12px", fontWeight: "700" }}>SAVE ADDRESS AS</p>
                <div>
                    <button style={{ fontSize: "12px", border: red ? "1px solid red" : "1px solid black", borderRadius: "10px", color: red ? "red" : "black", height: "30px", width: "50px", outline: "none" }} onClick={() => setRed(prev => !prev)}>Home</button>
                    <button style={{ fontSize: "12px", border: red ? "1px solid black" : "1px solid red", borderRadius: "10px", color: red ? "black" : "red", height: "30px", width: "50px", marginLeft: "20px", outline: "none" }} onClick={() => setRed(prev => !prev)}>Work</button>
                </div>
                <div style={{ display: "flex", gap: "20px" }}><input type="checkbox" /> <p>Make this my default address.</p></div>
                <button type="submit" style={{ backgroundColor: "#ff3e6c", height: "40px", paddingLeft: "20px", paddingRight: "20px", color: "white", marginTop: "20px" }} onClick={handleAddAddress}>ADD ADDRESS</button>
            </form>
        </div>
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
</div>




  )
}

export default BagAddress