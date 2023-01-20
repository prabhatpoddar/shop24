import { Container, Flex, Grid, Heading, HStack, PinInputField, PinInput, Alert, Image, InputGroup, InputLeftAddon, Input, Text, Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Link, } from 'react-router-dom'


const Otp = () => {
    const [otpAlert, setOtpAlert] = useState(false)

    const [Mobilenumber, setNumber] = useState("")
    const [otp, setOtp] = useState(null)
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);


    const auth = () => {



    }


    const submitOTP = () => {




    }





    return (
        <>


            <Grid bg="#FFF5F5" w="100%" h="100vh" display="grid" justifyContent="center" alignItems="center">
                <Container  >
                    <Grid w="400px" bg="#FFF" boxShadow="xl">
                        <Grid>
                            <Image w="400px" h="160px" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg" alt="" />
                        </Grid>
                        <Grid gap={5} p={8} display="grid" justifyContent="center">

                            <Grid display="grid" alignItems="baseline" textAlign="left" gap={2} ><Heading size="md">Login or Signup</Heading>
                                <Text>Enter Your OTP</Text>

                            </Grid>
                            <Flex display="grid">


                                <HStack>
                                    <PinInput 
                                        value={otp}
                                        onChange={({ target }) => {
                                            setOtp(target.value);
                                        }}>
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                    </PinInput>
                                    <br/>
                                  




                                </HStack>
                                <Flex gap={10} mt={5}>
                                        {seconds > 0 || minutes > 0 ? (
                                            <p>
                                                Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                                                {seconds < 10 ? `0${seconds}` : seconds}
                                            </p>
                                        ) : (
                                            <p>Didn't recieve code?</p>
                                        )}

                                        <button
                                            disabled={seconds > 0 || minutes > 0}
                                            style={{
                                                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                                            }}

                                        >
                                            Resend OTP
                                        </button>

                                    </Flex>








                            </Flex>


                            <Flex >
                                <Text  >By Continuing, I agree To the Terms of Use & Privacy Policy</Text>

                            </Flex>
                            <Flex>
                                <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={auth}>
                                    <b>LOGIN</b>
                                </Button>

                            </Flex>
                            <Flex color="#FF3F6C"> <Link to="/loginbyemail" >Want's To Login With Email ?</Link></Flex>
                            <Flex color="#FF3F6C"> <Link to="/signup" >Don't Have Account?</Link></Flex>

                        </Grid>
                    </Grid>

                </Container>
            </Grid>

        </>
    )
}

export default Otp
