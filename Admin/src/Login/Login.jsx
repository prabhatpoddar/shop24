import { Container, Flex, Grid, Heading, Image, InputGroup, InputLeftAddon, Input, Text, Button,  useToast } from '@chakra-ui/react'
import React, {  useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { publicRequest } from '../requestMethod'


const Login = () => {
    const navigate = useNavigate()
    const [Mobilenumber, setNumber] = useState("")
    const [alert, setAlert] = useState(false)
    const toast = useToast({
        position: 'top'
    })
    const submitOTP = () => {
        if (Mobilenumber.length === 10) {

            publicRequest.post("/auth/loginbynumber", {
                mobile: Mobilenumber
            }).then((res) => {
                localStorage.clear()
                localStorage.setItem("token", JSON.stringify(res.data.token))
                localStorage.setItem("isAdmin", JSON.stringify(res.data.isAdmin))
                console.log(res.data)
                // localStorage.setItem("isAdmin", JSON.stringify(res.data.isAdmin))
                // localStorage.setItem("isAdmin", JSON.stringify(res.data.isAdmin))

                navigate("/otp")

            }).catch(err => {
                toast({
                    title: `Wrong Credential`,
                    status: "error",
                    isClosable: true,
                })
            })


        } else {
            setAlert(true)

        }

    }

    return (
        <>
            <Grid bg="#FFF5F5" w="100%" h="100vh" display="grid" justifyContent="center" alignItems="center" position="absolute" top="0">
                <Container  >
                    <Grid w="400px" bg="#FFF" boxShadow="xl">
                        <Grid>
                            <Image w="400px" h="160px" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg" alt="" />
                        </Grid>
                        <Grid gap={5} p={8} display="grid" justifyContent="center">

                            <Grid display="grid" alignItems="baseline" textAlign="left" gap={2} ><Heading size="md">Login or Signup</Heading>

                                <Text>Enter Your Mobile Number</Text>

                            </Grid>
                            <Flex>

                                <InputGroup >

                                    <InputLeftAddon children='+91' />
                                    <Input type='tel' placeholder='phone number' value={Mobilenumber} _focus={{ outline: 'none' }} onChange={(e) => setNumber(e.target.value)} />
                                </InputGroup>


                            </Flex>
                            {alert && <Text color="red">Invalid Mobile Number</Text>}



                            <Flex >
                                <Text  >By Continuing, I agree To the Terms of Use & Privacy Policy</Text>

                            </Flex>
                            <Flex>
                                <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={submitOTP}>
                                    <b>CONTINUE</b>
                                </Button>
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
