import { Container, Flex, Grid, Heading, InputRightElement, Alert, Image, InputGroup, Input, Text, Button, GridItem, useToast } from '@chakra-ui/react'
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { publicRequest } from '../../requestMethod'
const initialState = {
    email: "",
    password: "",
}

const LoginByEmail = () => {
    const [user, setUser] = useState(initialState)
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const toast = useToast({
        position: 'top'
    })




    let handelChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;

        setUser({ ...user, [name]: val });
    };

    const submitOTP = () => {
        publicRequest.post("/auth/login", user).then(res => {
            localStorage.clear()
            localStorage.setItem("token", JSON.stringify(res.data.token))
            localStorage.setItem("isAdmin", JSON.stringify(res.data.isAdmin))

         
                if (res.data.isAdmin === "user") {
                    toast({
                        title: `You Are Redirected To Home Page in 3 sec`,
                        status: "success",
                        variant: "subtle",
                        isClosable: true,
                    })

                    setTimeout(() => {
                        navigate("/")
                    }, 3000)
                }
                else {
                    toast({
                        title: `You Are Redirected To admin Page in 3 sec`,
                        status: "success",
                        isClosable: true,
                    })

                    setTimeout(() => {
                        window.location = 'https://google.com';
                    }, 3000)
                }
         
        }).catch(err=>{
            toast({
                title: `Wrong Credential`,
                status: "error",
                isClosable: true,
            })

        })
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

                            <Grid display="grid" alignItems="baseline" textAlign="left" gap={2} >
                                <Heading size="md">Login</Heading>
                                <Text>Enter Your Email and Password</Text>
                            </Grid>
                            <Grid>

                                <GridItem>
                                    <Input variant='outline' placeholder='Enter Your Email' value={user.email} onChange={handelChange} name="email" />
                                </GridItem>
                                <GridItem>
                                    <InputGroup size='md'>
                                        <Input
                                            pr='4.5rem'
                                            type={show ? 'text' : 'password'}
                                            placeholder='Enter Your  Password'
                                            value={user.password} onChange={handelChange} name="password"
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                {show ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </GridItem>

                            </Grid>
                            <Flex >
                                <Text  >By Continuing, I agree To the Terms of Use & Privacy Policy</Text>

                            </Flex>
                            <Flex>
                                <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={submitOTP}>
                                    <b>   CONTINUE</b>
                                </Button>
                            </Flex>
                            <Flex color="#FF3F6C"> <Link to="/login" >Want's To Login With Mobile ?</Link></Flex>
                            <Flex color="#FF3F6C"> <Link to="/signup" >Don't Have Account?</Link></Flex>


                        </Grid>
                    </Grid>

                </Container>
            </Grid>



        </>

    )
}

export default LoginByEmail