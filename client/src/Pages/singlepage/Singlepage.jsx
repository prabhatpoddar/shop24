import React, { useEffect, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import "./Single.css"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FcApproval } from 'react-icons/fc';
import {
  Img,
  WishDiv,
  BagDiv,
  RatingDiv,
} from "./detailed";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { publicRequest } from "../../requestMethod";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../redux/CartRedux";
import { Button, Select, useToast } from "@chakra-ui/react";
import { addProductBag } from "../../redux/BagRedux";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';



function SinglePage() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  const { direction } = useParams();
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [pin, setPin] = useState(null)
  const [verbifying, setVerifyPin] = useState(false)
  const [addWish, setAddWish] = useState(false)

  const toast1 = useToast({
    position: 'right-bottom',
  })
  const toast2 = useToast({
    position: 'top',
  })

  useEffect(() => {
    publicRequest(`/product/${direction}`).then((res) => {
      setData(res.data)
    })
  }, []);

  const addToBag = () => {
    if (size) {
      if (color) {

        dispatch(addProductBag({ ...data, color, size, quantity }))
        toast1({
          title: `Successfully added Bag`,
          status: "success",
          isClosable: true,
        })

      }
      else {
        toast2({
          title: `Select Color First`,
          status: "warning",
          isClosable: true,
        })
      }

    } else {
      toast2({
        title: `Select Size First`,
        status: "warning",
        isClosable: true,
      })
    }
  }

  const addToWishlist = () => {
    dispatch(addProductCart({ data }))
   setAddWish(true)


  }


  return (
    <>
      <Navbar />

      <div className="mainContainer" >
        <div className="ImageContainer">
          <div className="ImgDiv">
            <Img src={data.image} />
          </div>

        </div>
        <div style={{ width: "80%" }}>
          <div style={{ width: "95%", margin: "auto" }}>
            <div style={{ textAlign: "left" }}>
              <div>
                <b>
                  {" "}
                  <p
                    style={{
                      fontSize: "24px",
                      margin: "25px 0px -15px 0px ",
                      color: "darkslategray",
                    }}
                  >
                    {data.brand}
                  </p>
                </b>
                <p style={{ fontSize: "20px", color: "#8b8d97", marginTop: "10px" }}>
                  {data.productname}
                </p>
              </div>
              <RatingDiv style={{ marginTop: "15px", padding: "5px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    alignItems: "center",
                    width: "40px",
                  }}
                >
                  <b>
                    {" "}
                    <p>{data.rating} </p>
                  </b>
                  <p style={{ color: "#48958f" }}>
                    <StarIcon style={{ marginTop: "7px" }} fontSize="small" />
                  </p>
                </div>
                <div
                  style={{
                    color: "#8b8d97",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  {" "}
                  <p> | {data.ratingsCount} Ratings</p>
                </div>
              </RatingDiv>
            </div>
            <hr style={{ marginTop: "15px", marginBottom: "15px" }}></hr>
            <div style={{ textAlign: "left", marginTop: "-5px", marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  width: "80%",
                  marginBottom: "17px"
                }}
              >
                <p>
                  {" "}
                  <b
                    style={{ color: "darkslategray", fontSize: "22px" }}
                  >{`₹  ${data.price}`}</b>
                </p>
                <p
                  style={{
                    color: "#8b8d97",
                    fontSize: "18px",
                    marginTop: "-5px",
                  }}
                >
                  {" "}

                  <span style={{ textDecoration: "line-through" }}>
                  </span>
                </p>
                <p style={{ color: "#ee9d20" }}>
                  <b style={{ fontSize: "22px" }}>
                    {" "}
                    {`${data.discountPercentage}`}{" "}
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

            <div className="selectDiv">
              <div>
                <Select onChange={(e) => setSize(e.target.value)}>
                  <option value="">Size</option>
                  <option value="S">S</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </Select>
              </div>
              <div>
                <Select onChange={(e) => setColor(e.target.value)}>
                  <option value="">Color</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Black">Black</option>
                  <option value="Red">Red</option>
                  <option value="White">White</option>
                </Select>
              </div>
            </div>

            <div className="quantityDiv">
              <div>
                <Button onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev - 0)}><AiOutlineMinus /></Button>
                <Button>{quantity}</Button>
                <Button onClick={() => setQuantity((prev) => prev + 1)}><AiOutlinePlus /></Button>

              </div>
            </div>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "20px",
              }}
            >
              <BagDiv onClick={addToBag} >
                <ShoppingBagIcon />
                <p>
                  <b>ADD TO BAG</b>
                </p>
              </BagDiv>
              <WishDiv
                onClick={() => addToWishlist()}
              >
                {
                  addWish ? <AiFillHeart fontSize="20px" /> : <AiOutlineHeart fontSize="20px" />
                }
                <b>
                  {" "}
                  <p>WISHLIST</p>
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
                  placeholder="Enter pin code"
                  style={{
                    height: "100%",
                    border: "none",
                    width: "120px",
                    fontWeight: "200",
                    fontSize: "18px",
                    outline: "none"
                  }}
                  type="number"
                  onChange={(e) => setPin(e.target.value)}
                />
                <p style={{ color: "#e7396a", fontWeight: "600" }} onClick={() => {
                  if (pin.length > 5) {
                    setVerifyPin(true)
                  }

                }}>
                  {
                    verbifying ? <FcApproval fontSize="35px" /> : "CHECK"
                  }
                </p>
              </div>
              <p style={{ marginTop: "2px", color: "#696969" }}>
                Please enter PIN code to check delivery time & Pay on
                Delivery Availability
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
                    Rs.{data.price}
                  </span>
                </b>
              </p>
              <ul>
                <li style={{ background: "white" }}>
                  Applicable on: Orders above Rs. 3999 (only on first
                  purchase)
                </li>
                <li>
                  Coupon code:<b style={{ color: "black" }}> MYNTRA10</b>
                </li>
                <li>
                  Coupon Discount: 10% off upto Rs. 600 (check cart for
                  final savings)
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
              <p style={{ color: "#e7396a", fontWeight: "570" }}>
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default SinglePage;