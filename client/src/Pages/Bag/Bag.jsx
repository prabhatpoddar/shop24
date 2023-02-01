import React, { useState } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, CloseButton, Text } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { GoTag } from "react-icons/go";
import { useEffect } from "react";
import axios from "axios";
import Size from "./Size";

const Bag = () => {
    const [update, setUpdate] = React.useState(0);
    const [bag, setBag] = React.useState(true);
    const [address, setAddress] = React.useState(false);
    const [payment, setPayment] = React.useState(false);
    const [off, setOff] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const [red, setRed] = React.useState(true);
    const [pay, setPay] = React.useState(true);
    const [WishlistItems, setWishlistItems] = React.useState([]);
    const [userAddress, setUserAdress] = React.useState({});
    const [x, setTotal] = useState(0)
    const handleOrder = () => {
        const token = localStorage.getItem("token");
        axios.post("https://fine-ruby-rattlesnake-suit.cyclic.app/order/create", { items: cartItems, address: userAddress }, {
            headers: { "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYXJAZ21haWwuY29tIiwiVXNlcklkIjoiNjNjZDUwYzdlZGNkMDM5ZjA2YmYwYTE0IiwiaWF0IjoxNjc0NDA3MTQ5fQ.qj6hJr1rBM7SkvAdWfaiwuNhqawJTP3SejcdvqN6qOo" }
        }).then(res => console.log(res)).catch(err => console.log(err));

        axios.delete("https://fine-ruby-rattlesnake-suit.cyclic.app/cart/orderdelete", {
            headers: { "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYXJAZ21haWwuY29tIiwiVXNlcklkIjoiNjNjZDUwYzdlZGNkMDM5ZjA2YmYwYTE0IiwiaWF0IjoxNjc0NDA3MTQ5fQ.qj6hJr1rBM7SkvAdWfaiwuNhqawJTP3SejcdvqN6qOo" }
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    const navi = useNavigate();

    const handleAddToCart = (el) => {
        // addItemToCart(el);
        setUpdate(prev => prev + 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleHeightOffer = () => {
        setOff(prev => !prev);
    }

    const handlePlaceOrder = () => {
        setBag(false);
        setAddress(true);
    };
    const handleAddAddress = () => {
        setAddress(false);
        setPayment(true);
    }
    // const cartItems=[];
    const cartEmp = () => {
        alert("cart is empty please add something");
        return navi("/");
    }

    const getAmount = () => {
        cartItems && cartItems.map((el) => {
            return (

                // console.log('el.price.trim().split(" ")[1]:', el.price.trim().split(" ")[1])
                setTotal(prev => prev + Number(el.price.trim().split(" ")[1]))

            )
        })

    }


    useEffect(() => {


        axios.get("https://fine-ruby-rattlesnake-suit.cyclic.app/cart", {
            headers: { "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYXJAZ21haWwuY29tIiwiVXNlcklkIjoiNjNjZDUwYzdlZGNkMDM5ZjA2YmYwYTE0IiwiaWF0IjoxNjc0NDA3MTQ5fQ.qj6hJr1rBM7SkvAdWfaiwuNhqawJTP3SejcdvqN6qOo" }
        }).then(res => {
            if (res.data.length === 0) {
                cartEmp()
            } else {
                setCartItems(res.data)

              

            }
        }).catch((err) => console.log(err));
        axios.get("https://brainy-goat-shoulder-pads.cyclic.app/tshirt?_limit=5", {
            headers: { "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYXJAZ21haWwuY29tIiwiVXNlcklkIjoiNjNjZDUwYzdlZGNkMDM5ZjA2YmYwYTE0IiwiaWF0IjoxNjc0NDA3MTQ5fQ.qj6hJr1rBM7SkvAdWfaiwuNhqawJTP3SejcdvqN6qOo" }
        }).then(res => setWishlistItems(res.data)).catch((err) => console.log(err));


    }, []);


    useEffect(()=>{
        getAmount()
    },[])




  
    return <div>

        {/* ===================Bag Navbar Start=================== */}



        <div id="cartNavbar">

            <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent:"center",  height: "80px" }}>
                <div style={{ fontSize: "18px", fontWeight: "500", color: bag ? "teal" : "black", textDecoration: bag ? "underline" : "none" }}>B A G</div>
                <div>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
                <div style={{ fontSize: "18px", fontWeight: "500", color: address ? "teal" : "black", textDecoration: address ? "underline" : "none" }}>A D D R E S S</div>
                <div>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
                <div style={{ fontSize: "18px", fontWeight: "500", color: payment ? "teal" : "black", textDecoration: payment ? "underline" : "none" }}>P A Y M E N T</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginLeft: "220px", marginTop: "-60px" }}>
                <img width="35px" src="https://thumbs.dreamstime.com/z/shield-check-mark-icon-d-vector-illustration-security-guaranteed-secure-protection-symbol-free-to-edit-233403684.jpg" alt="secure" />
                <p style={{ fontSize: "14px", fontWeight: "700" }}> 100 % S E C U R E</p>
            </div>
        </div>


        <hr style={{ backgroundColor: "#eaeaec", marginTop: "20px", marginBottom: "40px" }} />


        {/* =================Bag Main Contartner======================== */}




        <div style={{ width: "100%", display: bag ? "block" : "none" }}>
            <div style={{ display: "flex", gap: "20px", width: "80%", margin: "auto" }}>
                <div>
                    <div style={{ border: "1px solid #eaeaec", width: "92.7%", margin: "auto", marginLeft: "55px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "55px", padding: "10px" }}>
                        <p style={{ fontSize: "14px", fontWeight: "500" }}>Check delivery time & services</p>
                        <button style={{ border: "1px solid red", paddingLeft: "10px", paddingRight: "10px", height: "35px", color: "red", fontSize: "12px", fontWeight: "500" }}>ENTER PIN CODE</button>
                    </div>
                    <div>
                        <Accordion allowMultiple h={off ? "400px" : "35px"} mt="10px">
                            <AccordionItem border="1px solid #eaeaec" h="55px" ml="55px">
                                <h2 style={{ width: "100%", height: "100%", display: "flex" }}>
                                    <AccordionButton onClick={handleHeightOffer}>
                                        <Box as="span" flex='1' textAlign='left' display="flex" gap="10">
                                            <img style={{ width: "20px", height: "20px" }} src="https://cdn-icons-png.flaticon.com/512/372/372754.png" alt="offerlogo" />
                                            <Text fontSize="14px" fontWeight="500">Availbale Offers</Text>
                                        </Box>
                                        <Box color="red" fontSize="14px" fontWeight="500">
                                            Show More
                                            <AccordionIcon color="red" />
                                        </Box>
                                    </AccordionButton>
                                </h2>
                                <div style={{ display: "block", width: "550px" }}>
                                    <AccordionPanel pb={0} >
                                        <Text>∙ 10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of Rs 3,500.TCA</Text>
                                        <Text>∙ 10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs 3,000.TCA</Text>
                                        <Text>∙ Flat Rs 150 Cashback on Paytm Wallet and Postpaid transaction on a min spend of Rs 1,500. TCA</Text>
                                        <Text>∙ Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of Rs 1000. Available only on Android Devices. TCA</Text>
                                        <Text>∙ Get up to Rs 500 Cashback on LazyPay transactions on a min spend of Rs 1999. TCA</Text>
                                        <Text>∙ 5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</Text>
                                        <Text>∙ 10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA</Text>
                                        <Text>∙ Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min spend of Rs 999.Use code MBK500 on Mobikwik.TCA</Text>
                                    </AccordionPanel>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #eaeaec", height: "45px", marginLeft: "55px", marginTop: "30px", fontSize: "14px" }}>
                        <img width="45px" src="https://cdn.shopify.com/s/files/1/0770/6953/files/iconmonstr-delivery-6-240_2_400x.png?v=1613795639" alt="deliverlogo" />
                        Yay! <span style={{ fontWeight: "500", marginLeft: "5px", marginRight: "5px" }}> No convenience fee </span>on this oreder
                    </div>
                    <div style={{ display: "flex", border: "1px solid #eaeaec", height: "50px", marginLeft: "55px", marginTop: "10px" }}>
                        <img style={{ with: "35px", height: "35px" }} src="https://constant.myntassets.com/checkout/assets/img/price-drop.webp" alt="pricerupee" />
                        <div>
                            <p style={{ fontWeight: "500", fontSize: "14px" }}>Prices Have Dropped</p>
                            <p style={{ fontSize: "14px" }}>The price of one or more item in your bag has dropped. But them now!</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px", height: "55px", alignItems: "center", marginLeft: "75px", marginLeft: "60%" }}>
                        <button style={{ fontSize: "14px", fontWeight: "500" }}>REMOVE</button> | <Link to="/wishlist"><button style={{ fontSize: "14px", fontWeight: "500" }}>MOVE TO WISHLIST</button></Link>
                    </div>

                    {/* ===================Cart Item Returning=========================== */}


                    <div>
                        {cartItems.map((el) => {
                            return <div style={{ border: "1px solid #eaeaec", marginLeft: "60px", marginBottom: "10px" }}>
                                <div style={{ display: "flex", padding: "10px", gap: "20px" }}>
                                <CloseButton size='sm' position="relative" left={500} />
                                    <img style={{ width: "110px", height: "150px" }} src={el.Image} alt={el.productName} />
                                    <div>
                                        {/* <p style={{fontSize:"14px",fontWeight:"500"}}>{el.brand}</p> */}
                                        <p style={{ fontSize: "14px" }}>{el.productName}</p>
                                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                            <div>
                                                <Size el={el} />

                                            </div>
                                            <div style={{ display: "flex", gap: "10px", fontSize: "14px", fontWeight: "500" }}>
                                                Qty: 1 <div><button style={{ border: "1px solid black", height: "20px", width: "20px", textAlign: "center" }} onClick={() => console.log("xx")}>+</button><button style={{ border: "1px solid black", height: "20px", width: "20px", textAlign: "center" }} onClick={() => console.log("xx")}>-</button></div>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <p style={{ fontSize: "16px", fontWeight: "500" }}>₹ {el.price}</p> {/* Rs.{el.price} */}
                                            <p style={{ fontSize: "16px", textDecoration: "line-through" }}>{el.off_price}</p> {/* Rs.{el.off_price} */}
                                            <p style={{ fontSize: "16px", color: "#ff905a" }}>({el.discount}% OFF)</p> {/* ({el.discount}% OFF) */}
                                        </div>
                                        <p style={{ color: "teal" }}>Coupen Discount ₹100</p>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <img style={{ width: "15px", height: "13px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7Wpi9EW9xNGc7kMjPO_rgzX8jjw2bsvSgMAk6qYYhYWQDgvqy041Zw8FPXaoac73xNE&usqp=CAU" alt="checked" />
                                            <p style={{ display: "flex", gap: "10px" }}>Delivery By <p style={{ fontWeight: "500" }}>{new Date().getDate() + 3} - {new Date().getMonth() + 1} - {new Date().getFullYear()}</p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })};
                    </div>
                    {/* =======Linking Wishlist====================== */}



                    <Link to="/mens"><div style={{ border: "1px solid #eaeaec", display: "flex", alignItems: "center", gap: "20px", marginLeft: "60px", paddingLeft: "10px" }}>
                        <img style={{ width: "12px", height: "18px" }} src="data:image/png;base64,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" alt="saveIcon" />
                        <div style={{ display: "flex", alignItems: "center", height: "45px", padding: "10px", width: "100%", justifyContent: "space-between" }}>
                            Add More From Wishlist
                            <AiOutlineRight />
                        </div>
                    </div></Link>
                </div>


                <hr style={{ backgroundColor: "#eaeaec", marginTop: "10px", marginBottom: "10px" }} />

                {/* ========Cart Secondary Div Started========= */}



                <div style={{ border: "1px solid #eaeaec", width: "0px", backgroundColor: "#eaeaec", marginTop: "-20px" }}></div>
                <div style={{ width: '360px' }} onClick={getAmount}>
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>COUPONS</p>
                    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                        <GoTag size="25px" />
                        <div>
                            <p style={{ fontSize: "14px" }}>1 Coupon applied</p>
                            <p style={{ color: "teal", fontSize: "14px" }}>You saved additional ₹100</p>
                        </div>
                        <button style={{ border: "1px solid #ff3e6c", color: "#ff3e6c", height: "30px", width: "60px", fontSize: "14px" }}>EDIT</button>
                    </div>
                    <hr style={{ backgroundColor: "#eaeaec", marginTop: "20px", marginBottom: "20px" }} />
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>GIFTING & PERSONILATION</p>
                    <div style={{ backgroundColor: "#FFF1EC", width: "100%", height: "100px", marginTop: "10px" }}>
                        <div style={{ position: "absolute", height: "100%", marginLeft: "80px" }}>
                            <p style={{ fontSize: "13px" }}>Buying for a loved one ?</p>
                            <p style={{ fontSize: "13px" }}>Gift wrap and personalise message on card,</p>
                            <p style={{ fontSize: "13px" }}>Only for ₹25</p>
                            <h3 style={{ fontWeight: "500", color: "red" }}>ADD GIFT WRAP</h3>
                        </div>
                        <img style={{ height: "100%", marginLeft: "20px" }} src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="giftLogo" />
                    </div>
                    <hr style={{ backgroundColor: "#eaeaec", marginTop: "20px", marginBottom: "20px" }} />
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</p>
                    <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                        <div style={{ border: "1px solid black", paddingLeft: "10px", paddingRight: "10px", borderRadius: "10px", width: "55px" }}>₹10</div>
                        <div style={{ border: "1px solid black", paddingLeft: "10px", paddingRight: "10px", borderRadius: "10px", width: "55px" }}>₹50</div>
                        <div style={{ border: "1px solid black", paddingLeft: "10px", paddingRight: "10px", borderRadius: "10px", width: "65px" }}>₹100</div>
                        <input style={{ border: "1px solid black", paddingLeft: "10px", paddingRight: "10px", borderRadius: "10px", width: "65px" }} value="Other" />
                    </div>
                    <button style={{ color: "#ff3e6c", fontWeight: "500", marginTop: "10px" }}>Know More</button>
                    <br />
                    <br />
                    <hr style={{ backgroundColor: "#eaeaec", marginTop: "20px", marginBottom: "20px" }} />


                    {/* =======Hard Code data End ================== */}
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>PRICE DETAILS ({cartItems?.length} item)</p>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Total MRP</p><p>{x}</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Discount on MRP</p><p style={{ color: "teal" }}>- ₹499</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Coupon Discount</p><p style={{ color: "teal" }}>- ₹99</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Convenience Fee <p>Know More</p></p><p style={{ color: "teal", display: "flex", gap: "10px" }}><p style={{ textDecoration: "line-through", color: "black" }}>₹99</p> FREE</p></div>
                    <hr style={{ backgroundColor: "#eaeaec", marginTop: "20px", marginBottom: "20px" }} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ fontWeight: "500", fontSize: "14px" }}>Total Amount</p><p>₹{x - 499 - 99}</p></div>

                </div>
            </div>
            <button style={{ backgroundColor: "#ff3e6c", height: "40px", paddingLeft: "20px", paddingRight: "20px", color: "white", marginTop: "20px" }} onClick={() => handlePlaceOrder()}>PLACE ORDER</button>
            <div style={{ backgroundColor: "#fff5f7", width: "84%", margin: "auto", paddingTop: "40px", paddingLeft: "20px", paddingRight: "20px", marginTop: "20px", marginBottom: "10px", paddingBottom: "20px" }}>
                <div style={{ marginBottom: "20px", color: "black", border: "0.1px solid black", backgroundColor: "black" }}></div>
                <h2>You may also like:</h2>

                {/* =============================Returning Wishlist Item================================ */}


                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    {WishlistItems.map((el) => {
                        return <div style={{ border: "1px solid black", width: "180px", padding: "7px", height: "350px" }}>
                            <img style={{ width: "100%" }} src={el["img-responsive src"]} alt="product" />
                            <p style={{ fontSize: "14px", maxLines: "1", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{el["product-product"]}</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <p style={{ fontSize: "14px", fontWeight: "500" }}>₹ {el["product-strike"]}</p>
                                <p style={{ fontSize: "14px", textDecoration: "line-through" }}>{el["product-discountedPrice"]}</p>
                                <p style={{ fontSize: "14px", color: "#ff905a" }}>({el["product-discountPercentage"]})</p>
                            </div>
                            <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                            <button style={{ color: "red", marginLeft: "20px", fontSize: "14px", fontWeight: "500" }} onClick={() => handleAddToCart(el)}>Add To Bag</button>
                        </div>
                    })};
                </div>
            </div>
        </div>










        {/* Adress is here */}










        <div style={{ width: "100%", display: address ? "block" : "none" }}>
            <div style={{ display: "flex", gap: "25px", width: "70%", margin: "auto" }}>
                <div>
                    <form onSubmit={(e) => handleSubmit(e)} style={{ display: "flex", flexDirection: "column", gap: "20px", border: "1px solid #eaeaec", padding: "20px" }}>
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
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Discount on MRP</p><p style={{ color: "teal" }}>- ₹499</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Coupon Discount</p><p style={{ color: "teal" }}>- ₹199</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Convenience Fee <p>Know More</p></p><p style={{ color: "teal", display: "flex", gap: "10px" }}><p style={{ textDecoration: "line-through", color: "black" }}>₹99</p> FREE</p></div>
                    <hr backgroundColor="#eaeaec" style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ fontWeight: "500", fontSize: "14px" }}>Total Amount</p><p>₹{x - 499 - 199}</p></div>
                </div>
            </div>
        </div>






        {/* =======================payment page start======================== */}

        <div style={{ display: payment ? "block" : "none" }}>
            <div style={{ display: "flex", width: "72%", gap: "25px", margin: "auto" }}>
                <div>
                    <div style={{ display: "flex", gap: "20px", border: "1px solid #eaeaec", height: "45px", justifyContent: "center", alignItems: "center" }}><img style={{ width: "20px", height: "20px" }} src="https://cdn-icons-png.flaticon.com/128/372/372754.png" alt="offer" /> <p style={{ fontSize: "14px", fontWeight: "500" }}>Bank Offer</p></div>
                    <p style={{ fontSize: "14px", fontWeight: "500", marginTop: "5px" }}>Choose Payment Mode</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ border: "1px solid #eaeaec", marginTop: "20px", height: "40px", width: "200px", justifyContent: "center", alignItems: "center", display: "flex" }} onClick={() => setPay(false)}>Cash On Delivery</div>
                        <div style={{ border: "1px solid #eaeaec", marginTop: "20px", height: "40px", width: "200px", justifyContent: "center", alignItems: "center", display: "flex" }} onClick={() => setPay(true)}>Credit/Debit Card</div>
                    </div>
                    <div style={{ display: pay ? "block" : "none" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginTop: "5px" }}>
                            <p style={{ fontSize: "14px", fontWeight: "500" }}>CREDIT / DEBIT CARD</p>
                            <p style={{ fontSize: "14px", fontWeight: "500" }}>Please ensure your card can be used fro online transactions.</p>
                            <p style={{ fontSize: "14px", fontWeight: "500" }}>Know More</p>
                            <input style={{ border: "1px solid #eaeaec", borderRadius: "10px", height: "50px", marginBottom: "20px", marginTop: "20px", paddingLeft: "5px", outline: "none" }} type="number" placeholder="Enter Your Card Number" />
                            <input style={{ border: "1px solid #eaeaec", borderRadius: "10px", height: "50px", marginBottom: "20px", paddingLeft: "5px", outline: "none" }} type="number" placeholder="Name On Card" />
                            <div><input style={{ border: "1px solid #eaeaec", borderRadius: "10px", height: "50px", marginRight: "20px", paddingLeft: "5px", outline: "none" }} type="date" placeholder="Vaild Thru" /><input style={{ border: "1px solid #eaeaec", borderRadius: "10px", height: "50px", paddingLeft: "5px", outline: "none" }} type="number" placeholder="CVV" /></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}><div style={{ display: "flex", gap: "20px" }}><img style={{ width: "20px", height: "20px" }} src="https://cdn.iconscout.com/icon/free/png-128/gift-3239302-2699141.png" alt="gift" />Have a gift card?</div> <div>APPLY GIFT CARD</div></div>
                </div>
                <div style={{ border: "1px solid #eaeaec", width: "2px", height: "100%" }}></div>
                <div style={{ width: "350px" }}>
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>PRICE DETAILS ({cartItems?.length} item)</p>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Total MRP</p><p>{x}</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Discount on MRP</p><p style={{ color: "teal" }}>- ₹499</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Coupon Discount</p><p style={{ color: "teal" }}>- ₹199</p></div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><p>Convenience Fee <p>Know More</p></p><p style={{ color: "teal", display: "flex", gap: "10px" }}><p style={{ textDecoration: "line-through", color: "black" }}>₹99</p> FREE</p></div>
                    <hr backgroundColor="#eaeaec" style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ fontWeight: "500", fontSize: "14px" }}>Total Amount</p><p>₹{x - 499 - 199}</p></div>
                </div>
            </div>
            <button style={{ border: "4px solid #ff3e6c", color: "#ff3e6c", padding: "20px", marginLeft: "47%", marginTop: "20px" }} onClick={handleOrder}><Link to="/"> PLACE ORDER</Link></button>
        </div>



        <div style={{ display: "flex", gap: "5px", width: "78%", margin: "auto", marginTop: "80px" }}>
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="lock" />
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="visa" />
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="mastercard" />
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="lock" />
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="lock" />
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="netbanking" />
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="cod" />
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="rupay" />
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="paypal" />
            <img style={{ border: "1px solid #eaeaec", width: "60px" }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="bhim" />
        </div>
      
    </div>
};

export default Bag;