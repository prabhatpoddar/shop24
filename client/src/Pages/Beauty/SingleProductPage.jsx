import React, { useEffect, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import StarIcon from "@mui/icons-material/Star";
import {
  DetailsMainDiv,
  ImageContainer,
  Img,
  SizesDIv,
  ImgDiv,
  SubDetailsDiv,
  WishDiv,
  BagDiv,
  RatingDiv,
} from "./detailStyled";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router";
import MainNavbar from "../Navbar/MainNavbar";

import { publicRequest } from "./../../requestMethod";
import { useToast } from "@chakra-ui/react";
// import Navbar from "../Components/Navbar";

function SingleProductPage() {
  const [data, setData] = useState({});
  const toast = useToast();
  const params = useParams();
  const id = params.id;
  const getData = async () => {
    let res = await fetch(`https://ill-ruby-frog-ring.cyclic.app/beauty/${id}`);
    let datas = await res.json();
    // console.log(datas);
    setData(datas);
  };

  //add to wishlist fuction
  const addWishlist = (item) => {
    // console.log("item:", item);
    const {
      brand,
      discountPercentage,
      discountedPrice,
      image,
      product,
      size,
      strike,
    } = item;
    const newItem = {
      brand: brand,
      title: product,
      size: size,
      quantity: 1,
      price: discountedPrice,
      off_price: strike,
      discountPercentage: discountPercentage,
      img: image,
    };
    // console.log("newItem:", newItem);
    publicRequest
      .post("/wishlist", newItem, {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);

        if (res.data === "Item already in your wishlist.") {
          toast({
            description: res?.data,
            status: "success",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            description: "Your Item added Successfully.",
            status: "success",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        toast({
          description: "Something went wrong.",
          status: "error",
          position: "bottom-right",
          duration: 5000,
          isClosable: true,
        });
      });
  };
  //add to wishlist fuction

  //add to bag Hander

  const addBagHandler = (item) => {
    // console.log("item:", item);
    const {
      brand,
      discountPercentage,
      discountedPrice,
      image,
      product,
      size,
      strike,
    } = item;
    const newItem = {
      brand: brand,
      title: product,
      size: size,
      quantity: 1,
      price: discountedPrice,
      off_price: strike,
      discountPercentage: discountPercentage,
      img: image,
    };
    // console.log("newItem:", newItem);
    publicRequest
      .post("/bag", newItem, {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);

        if (res.data === "Item already in your bag.") {
          toast({
            description: res?.data,
            status: "success",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            description: "Your Item added Successfully.",
            status: "success",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        toast({
          description: "Something went wrong.",
          status: "error",
          position: "bottom-right",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <Navbar/> */}
      <MainNavbar />
      <DetailsMainDiv>
        <ImageContainer>
          <ImgDiv style={{ margin: "20px" }}>
            <Img src={data.image} width={"50%"} />
          </ImgDiv>
        </ImageContainer>
        <SubDetailsDiv>
          <div style={{ width: "95%", margin: "auto" }}>
            <div style={{ textAlign: "left" }}>
              <div style={{ marginBottom: "25px" }}>
                <b>
                  {" "}
                  <p
                    style={{
                      fontSize: "24px",
                      margin: "25px 0px 15px 0px ",
                      color: "darkslategray",
                    }}
                  >
                    {data.brand}
                  </p>
                </b>
                <p style={{ fontSize: "20px", color: "#8b8d97" }}>
                  {data.product}
                </p>
              </div>
              <RatingDiv>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    alignItems: "center",
                    width: "30px",
                    padding: "5px",
                  }}
                >
                  <b>
                    {" "}
                    <p> {data.rating} </p>
                  </b>
                  <p style={{ color: "#48958f" }}>
                    <StarIcon fontSize="small" />
                  </p>
                </div>
                <div
                  style={{
                    color: "#8b8d97",
                    alignItems: "center",
                    alignSelf: "center",
                    paddingLeft: "8px",
                  }}
                >
                  {" "}
                  <p> |{data.ratingCount} Ratings</p>
                </div>
              </RatingDiv>
            </div>
            <hr></hr>
            <div style={{ textAlign: "left", marginTop: "-5px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  width: "270px",
                }}
              >
                <p>
                  <b style={{ color: "darkslategray", fontSize: "22px" }}>
                    {data.discountedPrice}
                  </b>
                </p>
                <p
                  style={{
                    color: "#8b8d97",
                    fontSize: "18px",
                    marginTop: "19px",
                  }}
                >
                  <span style={{ textDecoration: "line-through" }}>
                    {data.discount}
                  </span>
                </p>
                <p style={{ color: "#ee9d20" }}>
                  <b style={{ fontSize: "22px" }}>
                    {" "}
                    {data.discountedPercentage}
                  </b>
                </p>
              </div>
              <div
                style={{
                  marginTop: "-18px",
                  color: "#79a987",
                  fontSize: "14px",
                }}
              >
                <b>inclusive of all taxes</b>
              </div>
            </div>
            <div style={{ textAlign: "left", marginTop: "5px" }}>
              <div
                style={{
                  display: "flex",
                  width: "300px",
                  fontWeight: "500",
                  justifyContent: "space-between",
                  fontSize: "16px",
                  marginTop: "-5px",
                }}
              >
                <p>SELECT SIZE </p>

                <p
                  style={{
                    color: "#e7396a",
                    fontSize: "15px",
                    marginTop: "18px",
                    cursor: "pointer",
                    fontWeight: "700",
                  }}
                >
                  SIZE CHART
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    borderRadius: "50PX",
                    padding: "10px 8px 10px 8px",
                    textAlign: "center",
                  }}
                >
                  S {data.discountedPrice}
                </button>
                <button
                  style={{
                    borderRadius: "50PX",
                    padding: "10px 8px 10px 8px",
                    textAlign: "center",
                  }}
                >
                  M {data.discountedPrice}
                </button>
                <button
                  style={{
                    borderRadius: "50PX",
                    padding: "10px 8px 10px 8px",
                    textAlign: "center",
                  }}
                >
                  L {data.discountedPrice}
                </button>
              </div>
            </div>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "20px",
              }}
            >
              <BagDiv>
                <ShoppingBagIcon />
                <p>
                  <b onClick={() => addBagHandler(data)}>ADD TO BAG</b>
                </p>
              </BagDiv>
              <WishDiv>
                <div style={{ color: "gray" }}>
                  <FavoriteBorderIcon />
                </div>
                <b>
                  {" "}
                  <p onClick={() => addWishlist(data)}>WISHLIST</p>
                </b>
              </WishDiv>
            </div>
            <div
              style={{
                display: "flex",
                width: "200px",
                marginTop: "15px",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "15px", fontWeight: "500" }}>
                DELIVERY OPTIONS
              </p>
              <div style={{ color: "gray" }}>
                <LocalShippingOutlinedIcon />
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  height: "35px",
                  alignItems: "center",
                  textAlign: "left",
                  border: "0.2px solid lightgray",
                  display: "flex",
                  gap: "15px",
                  borderRadius: "4px",
                  fontSize: "15px",
                  justifyContent: "space-between",
                  width: "240px",
                  padding: "5px",
                }}
              >
                <input
                  placeholder="Enter pincode"
                  style={{
                    height: "100%",
                    border: "none",
                    width: "120px",
                    fontWeight: "200",
                    fontSize: "18px",
                  }}
                ></input>
                <p style={{ color: "#e7396a", fontWeight: "600" }}>CHECK</p>
              </div>
              <p style={{ marginTop: "2px", color: "#696969" }}>
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>
            </div>
            <div
              style={{
                textAlign: "left",
                marginTop: "30px",
                fontSize: "18px",
                fontWeight: "460",
              }}
            >
              <p>100% Original Products</p>
              <p>Pay on delivery might be available</p>
              <p>Easy 30 days returns and exchanges</p>
              <p>Try & Buy might be available</p>
            </div>
            <div
              style={{
                textAlign: "left",
                color: "darkslategray",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <p>
                  <b style={{ fontSize: "16px", color: "black" }}>
                    BEST OFFERS
                  </b>{" "}
                </p>
                <div style={{ color: "gray" }}>
                  <LocalOfferOutlinedIcon />
                </div>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "-5px",
                  color: "black",
                }}
              >
                {" "}
                <b style={{ fontSize: "16px" }}>
                  Best Price:
                  <span style={{ color: "#ee9d20", fontSize: "16px" }}>
                    {" "}
                    {data.discountedPrice}
                  </span>
                </b>
              </p>
              <ul>
                <li style={{ background: "white" }}>
                  Applicable on: Orders above Rs. 3999 (only on first purchase)
                </li>
                <li>
                  Coupon code:<b style={{ color: "black" }}> MYNTRA10</b>
                </li>
                <li>
                  Coupon Discount: 10% off upto Rs. 600 (check cart for final
                  savings)
                </li>
              </ul>
              <p style={{ color: "#e7396a", fontWeight: "570" }}>
                View Eligible Products
              </p>
              <p>
                <b>EMI option available</b>
              </p>
              <ul>
                <li>EMI starting from Rs.154/month</li>
              </ul>
              {/* <p style={{ color: "#e7396a", fontWeight: "570" }}>
                      View Plan
                    </p> */}
            </div>
          </div>
        </SubDetailsDiv>
      </DetailsMainDiv>
      <Footer />
    </>
  );
}

export default SingleProductPage;
