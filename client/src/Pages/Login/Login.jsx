import { Container, Flex, Grid, Heading, HStack, PinInputField, PinInput, Alert, Image, InputGroup, InputLeftAddon, Input, Text, Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import app from '../../firebase';

import Timer from "./Timer";
import { Navbar } from '../../Components/Navbar/Navbar';
import { publicRequest } from '../../requestMethod';
const Login = () => {
    const auth = getAuth(app);
    const [Authinicated, setAuthinicated] = useState(false);
    const [togalOtp, setTogalOtp] = useState(true)
    const [Number, setNumber] = useState("");
    const [otp, setOtp] = useState(null)
    const navigate = useNavigate()
    const [loading1, setLoading] = useState(false);
    const toast = useToast();






    const submitOTP = () => {

        sendOtp()
      
       



    }
    const sendOtp = () => {
        // signIn("credentials", { phone: Number, callbackUrl: "/" });
        if (
            Number.length > 10 ||
            Number.length < 10 ||
            Number === "" ||
            Number === undefined
        ) {
            console.log(Number + "number");

        }

        const phoneNumber = "+91" + Number;

        const appVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            { size: "invisible" },
            auth
        );
        appVerifier.render();
        return signInWithPhoneNumber(
            auth,
            phoneNumber,
            appVerifier
        )
            .then((res) => {
                setTogalOtp(false)

                console.log(res);
                setAuthinicated(res);
                toast({
                    title: `OTP Sent`,
                    position: "top",
                    isClosable: true,
                    status: "success",
                    duration: 2000
                });
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast({
                    title: `Try Again`,
                    position: "top",
                    isClosable: true,
                    status: "error",
                    duration: 2000
                });
            });
    };

    const verifyCode = async () => {
        setLoading(true);
        if (otp.length !== 6) {
            return;
        }
        let code = otp * 1;

        await Authinicated.confirm(code)
            .then((result) => {
                toast({
                    title: `OTP Verified`,
                    position: "top",
                    isClosable: true,
                    status: "success",
                    duration: 2000
                });
                publicRequest.post("/auth/loginbynumber", {
                    mobile: Number
                }).then((res) => {
                    localStorage.clear()
                    localStorage.setItem("token", JSON.stringify(res.data.token))
                    localStorage.setItem("isAdmin", JSON.stringify(res.data.isAdmin))
                    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
                    if (isAdmin === "user") {
                        toast({
                            title: `You Are Redirected To Home Page in 3 sec`,
                            status: "success",
                            isClosable: true,
                        })
        
                        setInterval(() => {
                            navigate("/")
        
        
                        }, 3000)
        
                    }
                    else {
                        toast({
                            title: `You Are Redirected To admin Page in 3 sec`,
                            status: "success",
                            isClosable: true,
                        })
        
                        setInterval(() => {
                            window.location = 'https://adminshop24-prabhatpoddar.vercel.app/';
        
        
                        }, 3000)
        
                    }
        
                   

                  
                }).catch(err => {

                    toast({
                        title: `You have To register First`,
                        status: "warning",
                        isClosable: true,
                    })

                    navigate("/signup")
                })

            })
            .catch((error) => {
                // onClose();

                localStorage.setItem("Number",JSON.stringify(Number))
                toast({
                    title: `Worng OTP`,
                    position: "top",
                    isClosable: true,
                    status: "error",
                    duration: 2000

                });
                setLoading(false);
            });
    };





    return (
        <>
            <div id="recaptcha-container"></div>
            <Navbar />

            <Grid bg="#FFF5F5" w="100%" h="100vh" display="grid" justifyContent="center" alignItems="center">
               
                <Container  >
                    <Grid w="400px" bg="#FFF" boxShadow="xl">
                        <Grid>
                            <Image w="400px" h="160px" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg" alt="" />
                        </Grid>
                        <Grid gap={5} p={8} display="grid" justifyContent="center">

                            <Grid display="grid" alignItems="baseline" textAlign="left" gap={2} ><Heading size="md">Login or Signup</Heading>
                                {
                                    togalOtp ? <Text>Enter Your Mobile Number</Text> : <Text>Enter Your OTP</Text>
                                }

                            </Grid>
                            <Flex>
                                {
                                    togalOtp ? <InputGroup >

                                        <InputLeftAddon children='+91' />
                                        <Input type='tel' placeholder='phone number' value={Number} onChange={(e) => setNumber(e.target.value)} />
                                    </InputGroup> :
                                        <Grid>

                                            <HStack>
                                                <PinInput value={otp} onChange={(e) => setOtp(e)}>
                                                    <PinInputField />
                                                    <PinInputField />
                                                    <PinInputField />
                                                    <PinInputField />
                                                    <PinInputField />
                                                    <PinInputField />
                                                </PinInput>
                                            </HStack>
                                            <Timer
                                                setTogalOtp={setTogalOtp}
                                            />

                                        </Grid>
                                }
                            </Flex>
                            <Flex >
                                <Text  >By Continuing, I agree To the Terms of Use & Privacy Policy</Text>

                            </Flex>
                            <Flex>
                                {
                                    togalOtp ? <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={submitOTP}>
                                        <b>CONTINUE</b>
                                    </Button> : <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={verifyCode}>
                                        <b>LOGIN</b>
                                    </Button>
                                }
                            </Flex>
                            <Flex color="#FF3F6C"> <Link to="/loginbyemail" >Want's To Login With Email ?</Link></Flex>

                        </Grid>
                    </Grid>

                </Container>
            </Grid>
        </>
    )
}

export default Login