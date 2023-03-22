import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import "./Slider.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { UserContext } from '../../UserContext/UserContext';


const SliderNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [{ decodedToken }] = useContext(UserContext)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
        return navigate("/");
      }

    return (
        <>
            <Button variant='ghost' onClick={onOpen}>
                <AiOutlineMenu fontSize="20px" />
            </Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                        <div className="sidebarNavTopDiv">
                            <div>
                                <Link to="/"><img src="https://user-images.githubusercontent.com/98205449/226549136-3d3a971c-0ed9-4cb5-9c08-4cb941fd5d8f.png" alt="logo" className="logo" /></Link>
                            </div>
                            <div>
                                <Text className='FlatOff'>
                                    {
                                        decodedToken === null ? "Flat 200 Off" : "Welcome"
                                    }

                                </Text>
                                <Text className='FlatOff'>
                                    {
                                        decodedToken === null ? "Free Shipping" : decodedToken.user.fullName
                                    }
                                </Text>
                                {
                                    decodedToken === null ? <Text className='OnFirst'>On First Order</Text>:<Text className='OnFirst'>{decodedToken.user.mobile}</Text>
                                }

                                {
                                    decodedToken === null ? <Link to="/login">  <Text className='SideNavLogin'>SIGNUP LOGIN</Text></Link> : <Text className='SideNavLogin' onClick={handleLogout} >LOGOUT</Text>
                                }

                            </div>
                        </div>
                    </DrawerHeader>
                    <DrawerBody >
                        <Stack spacing={2} direction='column'  >


                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="b" flex='1' textAlign='left'>
                                                Men
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <div className="flexure1">
                                            <Link to="/mens" className='sideDivNavLinks' > Topwear</ Link>
                                            <Link to="/mens" className='sideDivNavLinks' > Bottomwear</ Link>
                                            <Link to="/mens" className='sideDivNavLinks' > Footwear</ Link>
                                            <Link to="/mens" className='sideDivNavLinks' > Sports & Active Wear</ Link>
                                            <Link to="/mens" className='sideDivNavLinks' > Fashion Accessories</ Link>
                                            <Link to="/mens" className='sideDivNavLinks' > Indian & Festive Wear</ Link>
                                            <Link to="/mens" className='sideDivNavLinks' > Innerwear & Sleepwear</ Link>
                                            <Link to="/mens" className='sideDivNavLinks' > Plus Size</ Link>
                                            <Link to="/mens" className='sideDivNavLinks' > Gadgets</ Link>
                                        </div>

                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="b" flex='1' textAlign='left'>
                                                Women
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <div className="flexure1">
                                            <Link to="/womens" className='sideDivNavLinks' > Indian & Fusion Wear</ Link>
                                            <Link to="/womens" className='sideDivNavLinks' > Western Wear</ Link>
                                            <Link to="/womens" className='sideDivNavLinks' > Maternity</ Link>
                                            <Link to="/womens" className='sideDivNavLinks' > Lingerie & Sleepwear</ Link>
                                            <Link to="/womens" className='sideDivNavLinks' > Gadgets</ Link>
                                            <Link to="/womens" className='sideDivNavLinks' > Belts, Scarves & More</ Link>
                                            <Link to="/womens" className='sideDivNavLinks' > Watches & Wearables</ Link>
                                            <Link to="/womens" className='sideDivNavLinks' > Footwear</ Link>
                                            <Link to="/womens" className='sideDivNavLinks' > Sunglasses & Frames</ Link>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="b" flex='1' textAlign='left'>
                                                Kids
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <div className="flexure1">
                                            <Link to="/kids" className='sideDivNavLinks' > Boys Clothing</ Link>
                                            <Link to="/kids" className='sideDivNavLinks' > Girls Clothing</ Link>
                                            <Link to="/kids" className='sideDivNavLinks' > Footwear</ Link>
                                            <Link to="/kids" className='sideDivNavLinks' > Toys</ Link>
                                            <Link to="/kids" className='sideDivNavLinks' > Infants</ Link>
                                            <Link to="/kids" className='sideDivNavLinks' > Home & Bath</ Link>
                                            <Link to="/kids" className='sideDivNavLinks' > Personal Care</ Link>
                                            <Link to="/kids" className='sideDivNavLinks' > Kids Accessories</ Link>
                                            <Link to="/kids" className='sideDivNavLinks' > Brands</ Link>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="b" flex='1' textAlign='left'>
                                                Home & Living
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <div className="flexure1">
                                            <Link to="/home&leaving" className='sideDivNavLinks' > Bed Linen & Furnishing</ Link>
                                            <Link to="/home&leaving" className='sideDivNavLinks' > Flooring</ Link>
                                            <Link to="/home&leaving" className='sideDivNavLinks' > Bath</ Link>
                                            <Link to="/home&leaving" className='sideDivNavLinks' > Home Décor</ Link>
                                            <Link to="/home&leaving" className='sideDivNavLinks' > Home Gift Sets</ Link>
                                            <Link to="/home&leaving" className='sideDivNavLinks' > Brands</ Link>
                                            <Link to="/home&leaving" className='sideDivNavLinks' > Lamps & Lighting</ Link>
                                            <Link to="/home&leaving" className='sideDivNavLinks' > Storage</ Link>
                                            <Link to="/home&leaving" className='sideDivNavLinks' > Curtains</ Link>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="b" flex='1' textAlign='left'>
                                                Beauty
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <div className="flexure1">
                                            <Link to="/beauty" className='sideDivNavLinks' > Makeup</ Link>
                                            <Link to="/beauty" className='sideDivNavLinks' > Skincare, Bath & Body</ Link>
                                            <Link to="/beauty" className='sideDivNavLinks' > Baby Care</ Link>
                                            <Link to="/beauty" className='sideDivNavLinks' > Masks</ Link>
                                            <Link to="/beauty" className='sideDivNavLinks' > Haircare</ Link>
                                            <Link to="/beauty" className='sideDivNavLinks' > Fragrances</ Link>
                                            <Link to="/beauty" className='sideDivNavLinks' > Appliances</ Link>
                                            <Link to="/beauty" className='sideDivNavLinks' > Top Brands</ Link>
                                            <Link to="/beauty" className='sideDivNavLinks' > Premium Beauty</ Link>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>


                            </Accordion>

                        </Stack>
                        <div className="flexure2">
                            <Link to="/" className='sideDivNavLinks' > Shop Studio</ Link>
                            <Link to="/" className='sideDivNavLinks' > Shop Mall</ Link>
                            <Link to="/" className='sideDivNavLinks' > Shop Insider</ Link>
                            <Link to="/" className='sideDivNavLinks' > Gift Card</ Link>
                            <Link to="/" className='sideDivNavLinks' > Contact Us</ Link>
                            <Link to="/" className='sideDivNavLinks' > FAQs</ Link>
                            <Link to="/" className='sideDivNavLinks' > Legal</ Link>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SliderNav
