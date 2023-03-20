import React, { useState } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, CloseButton, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { GoTag } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import "./BagHome.css"
import StripeCheckout from "react-stripe-checkout";
import SmallImages from "../SmallImages";
import { removeProductBag } from "../../../redux/BagRedux";

const BagHome = ({ handlePlaceOrder }) => {
    const cartItems = useSelector(store => store.bag.products)
    const x = useSelector(store => store.bag.total)
    const dispatch =useDispatch()
    const [pay, setPay] = useState(true);
    const [off, setOff] = useState(false);


    const handleHeightOffer = () => {
        setOff(prev => !prev);
    }
    const token = (paymenttoken) => {
        console.log('token:', paymenttoken)

    }
const handelDeleteBag=(id)=>{
    dispatch(removeProductBag(id))
}
    if (cartItems.length === 0) {
        return (
            <div className="noDataBag"><img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="" />
                <Heading size='md'>Hay Its Fell To light!</Heading>
                <Text>There is Nothing in Your Bag Lets add Something</Text>
                <Link to="/wishlist">
                    <Button variant='outline' colorScheme="red">ADD ITEMS FROM WISHLIST</Button>
                </Link>
            </div>
        )
    }

    return (


        <div >
            <div className="BagHomeContainer">
                <div>
                    <div className="BagCheckTime">
                        <p >Check delivery time & services</p>
                        <button >ENTER PIN CODE</button>
                    </div>
                    <div>
                        <Accordion allowMultiple h={off ? "400px" : "35px"} mt="10px">
                            <AccordionItem border="1px solid #eaeaec" h="55px" ml="55px">
                                <h2 style={{ width: "100%", height: "100%", display: "flex" }}>
                                    <AccordionButton onClick={handleHeightOffer}>
                                        <Box as="span" flex='1' textAlign='left' display="flex" gap="10">
                                            <img style={{ width: "20px", height: "20px" }} src="https://cdn-icons-png.flaticon.com/512/372/372754.png" alt="offerLogo" />
                                            <Text fontSize="14px" fontWeight="500">Available Offers</Text>
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
                                        <Text>∙ 10% Instant Discount on Kodak Credit and Debit Cards on a min spend of Rs 3,000.TCA</Text>
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
                    <div style={{ display: "flex", gap: "20px", height: "55px", alignItems: "center", marginLeft: "75px" }}>
                        <button style={{ fontSize: "14px", fontWeight: "500" }}>REMOVE</button> | <Link to="/wishlist"><button style={{ fontSize: "14px", fontWeight: "500" }}>MOVE TO WISHLIST</button></Link>
                    </div>

                    {/* ===================Cart Item Returning=========================== */}


                    <div>
                        {cartItems.map((el, i) => {
                            return <div style={{ border: "1px solid #eaeaec", marginLeft: "60px", marginBottom: "10px" }} key={i}>
                                <div style={{ display: "flex", padding: "10px", gap: "20px" }}>
                                    <CloseButton size='sm' position="relative" left={500} onClick={()=>handelDeleteBag(el._id)} />
                                    <img style={{ width: "110px", height: "150px" }} src={el.image} alt={el.name} />
                                    <div>
                                        {/* <p style={{fontSize:"14px",fontWeight:"500"}}>{el.brand}</p> */}
                                        <p style={{ fontSize: "14px" }}>{el.name}</p>
                                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                            <div>
                                                Size: {el.size}

                                            </div>
                                            <div>
                                                Color: {el.color}

                                            </div>
                                            <div style={{ display: "flex", gap: "10px", fontSize: "14px", fontWeight: "500" }}>
                                                Qty: {el.quantity}
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <p style={{ fontSize: "16px", fontWeight: "500" }}>₹ {el.price}</p> {/* Rs.{el.price} */}
                                            <p style={{ fontSize: "16px", textDecoration: "line-through" }}>{el.off_price}</p> {/* Rs.{el.off_price} */}
                                            <p style={{ fontSize: "16px", color: "#ff905a" }}>{el.discountPercentage}</p> {/* ({el.discount}% OFF) */}
                                        </div>
                                        <p style={{ color: "teal" }}>Coupon Discount ₹100</p>
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



                    <Link to="/wishlist"><div style={{ border: "1px solid #eaeaec", display: "flex", alignItems: "center", gap: "20px", marginLeft: "60px", paddingLeft: "10px" }}>
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
                <div style={{ width: '360px' }} >
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
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>GIFTING & PERSONATION</p>
                    <div style={{ backgroundColor: "#FFF1EC", width: "100%", height: "100px", marginTop: "10px" }}>
                        <div style={{ position: "absolute", height: "100%", marginLeft: "80px" }}>
                            <p style={{ fontSize: "13px" }}>Buying for a loved one ?</p>
                            <p style={{ fontSize: "13px" }}>Gift wrap and personalism message on card,</p>
                            <p style={{ fontSize: "13px" }}>Only for ₹25</p>
                            <h3 style={{ fontWeight: "500", color: "red" }}>ADD GIFT WRAP</h3>
                        </div>
                        <img style={{ height: "100%", marginLeft: "20px" }} src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="giftLogo" />
                    </div>
                    <hr style={{ backgroundColor: "#eaeaec", marginTop: "20px", marginBottom: "20px" }} />
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>SUPPORT TRANSFORMATION SOCIAL WORK IN INDIA</p>
                    <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                        <div className="divType1">₹10</div>
                        <div className="divType1">₹50</div>
                        <div className="divType1">₹100</div>
                        <input style={{ border: "1px solid black", paddingLeft: "10px", paddingRight: "10px", borderRadius: "10px", width: "65px" }} value="Other" />
                    </div>
                    <button style={{ color: "#ff3e6c", fontWeight: "500", marginTop: "10px" }}>Know More</button>
                    <br />
                    <br />
                    <hr style={{ backgroundColor: "#eaeaec", marginTop: "20px", marginBottom: "20px" }} />


                    {/* =======Hard Code data End ================== */}
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>PRICE DETAILS ({cartItems?.length} item)</p>
                    <div className="divType2"><p>Total MRP</p><p>{x}</p></div>
                    <div className="divType2"><p>Discount on MRP</p><p style={{ color: "teal" }}>- ₹0</p></div>
                    <div className="divType2"><p>Coupon Discount</p><p style={{ color: "teal" }}>- ₹0</p></div>
                    <div className="divType2"><p>Convenience Fee <p>Know More</p></p><p style={{ color: "teal", display: "flex", gap: "10px" }}><p style={{ textDecoration: "line-through", color: "black" }}>₹99</p> FREE</p></div>
                    <hr style={{ backgroundColor: "#eaeaec", marginTop: "20px", marginBottom: "20px" }} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ fontWeight: "500", fontSize: "14px" }}>Total Amount</p><p>₹{x}</p></div>

                    <div onClick={() =>

                        setPay(true)}>
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
                        >
                            <Button bg="#FF3F6C" color="#fff" w="200px" mt={5}>PLACE ORDER</Button>
                        </StripeCheckout>

                    </div>
                    <div style={{ display: pay ? "block" : "none" }}>

                    </div>


                </div>
            </div>

            <SmallImages />
        </div>





    )
}

export default BagHome