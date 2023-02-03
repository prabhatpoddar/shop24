import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay,   Stack,  useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./Slider.css"


const SliderNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>

            <Button variant='ghost' onClick={onOpen}>
                <AiOutlineMenu fontSize="20px"/>
            </Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
        <Link to="/"><img src="https://user-images.githubusercontent.com/98205449/213233396-1caf5409-150c-4862-bb2b-03fbd8e3bbf5.jpg" alt="logo" className="logo" /></Link>
                        
                    </DrawerHeader>
                    <DrawerBody>
  <Stack spacing={2} direction='column'  >
  <Link to="/mens" colorScheme="red"  borderColor="rgb(187, 186, 186)" color="black" >Mens</ Link>
<Link to="/womens" colorScheme="red" borderColor="rgb(187, 186, 186)" color="black"> Womens</ Link>
<Link to="/kids" colorScheme="red" borderColor="rgb(187, 186, 186)" color="black"> Kids</ Link>
<Link to="/" colorScheme="red" borderColor="rgb(187, 186, 186)" color="black"> Home & Living</ Link>
<Link to="/" colorScheme="red" borderColor="rgb(187, 186, 186)" color="black"> Beauty</ Link>
<Link to="/" colorScheme="red" borderColor="rgb(187, 186, 186)" color="black"> Studio</ Link>


  </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SliderNav
