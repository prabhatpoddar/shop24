import React from "react";
import { publicRequest } from "./../requestMethod";
const Dummy = () => {
  const wislistHandler = () => {
    const data = {
      brand: "String",
      title: "String",
      size: "String",
      quantity: 1,
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

  const getwishlistData = () => {
    publicRequest
      .get("/wishlist", {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => console.log(res.data));
  };

  const deleteWish = (id) => {
    id = "63cc1bcf7ce1b7155c36bd46";
    return publicRequest.delete(`/wishlist/${id}`, {
      headers: {
        token: JSON.parse(localStorage.getItem("token")),
      },
    });
  };

  const bagHandler = () => {
    //this data move from the wishlist to bag card .
    deleteWish().then((res) => {
      console.log(res.data);
      publicRequest
        .post("/bag", res.data, {
          headers: {
            token: JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => console.log(res.data));
    });
  };

  const bagDirectHandler = () => {
    const data = {
      brand: "String",
      title: "String",
      size: "String",
      quantity: 2,
      price: "String",
      off_price: "String",
      discount: "String",
      img: "https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/19959630/2022/9/15/742336fc-2b14-4941-941b-1654651826961663237431569InddusWomenMagentaStripedCold-ShoulderSleevesGrandeurMajesti6.jpg",
    };
    publicRequest
      .post("/bag", data, {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => console.log(res.data));
  };

  const getBagData = () => {
    publicRequest
      .get("/bag", {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => console.log(res.data));
  };

  const updateBag = () => {
    let id = "63cc1bcf7ce1b7155c36bd48";
    let data = { quantity: 7 };
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

  const deleteBag = () => {
    let id = "63cc1bcf7ce1b7155c36bd48";

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
  return (
    <>
      <div>
        <button onClick={getwishlistData}>get wishlist </button>
        <br />
        <button onClick={wislistHandler}>create wishlist</button>
      </div>
      <br />
      <br />
      <br />
      <div>
        <button onClick={getBagData}>get bag </button>
        <br />
        <button onClick={bagDirectHandler}>bagDirectHandler bag</button>
        <br />
        <button onClick={bagHandler}>create bag</button>
        <br />
        <button onClick={updateBag}>update bag</button>
        <br />
        <button onClick={deleteBag}>delete bag</button>
      </div>
    </>
  );
};

export default Dummy;
