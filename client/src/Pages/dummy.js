import React from "react";
import { publicRequest } from "./../requestMethod";
const Dummy = () => {
  const wislistHandler = () => {
    const data = {
      brand: "String",
      title: "String",
      size: "String",
      quantity: "String",
      price: "String",
      off_price: "String",
      discount: "String",
      img: "https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/19959630/2022/9/15/742336fc-2b14-4941-941b-1654651826961663237431569InddusWomenMagentaStripedCold-ShoulderSleevesGrandeurMajesti6.jpg",
    };
    publicRequest
      .post("/wishlist", data, {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => console.log(res.data));
    // console.log("item:", data);
  };
  return (
    <div>
      <button onClick={wislistHandler}>Click and check</button>
    </div>
  );
};

export default Dummy;
