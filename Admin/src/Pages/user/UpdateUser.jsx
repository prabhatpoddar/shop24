import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
  } from '@chakra-ui/react'

const UpdateUser = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <Button onClick={onOpen} colorScheme="facebook">Update</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Update User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder=''/>
            <Input />
            <Input/>
            <Input/>
           
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </div>
  )
}

export default UpdateUser
