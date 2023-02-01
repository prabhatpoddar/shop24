import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, RadioGroup, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

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
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SliderNav
