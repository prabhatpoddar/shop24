import React, { useState } from 'react'
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
  Text,
  Textarea,
  Select
} from '@chakra-ui/react'
import { MdTipsAndUpdates } from 'react-icons/md';
import { userRequest } from '../../requestMethod';



const UpdateUser = ({ el, getData }) => {
  const [user, setUser] = useState(el)
  console.log('user:', user)
  const [alert, setAlert] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()
  let handelChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setUser({ ...user, [name]: val });
  };

  const handelSubmit = (id) => {
    console.log('id:', id)

    userRequest.put(`/users/${id}`, user).then((res) => {
      console.log('res:', res)
      getData()

    }).catch((err) => {
      console.log('err:', err)



    })
  }
  return (
    <div>
      <Button onClick={onOpen} colorScheme="facebook"><MdTipsAndUpdates /></Button>
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
            <Text>Name</Text>
            <Input name='fullName' value={user.fullName} onChange={handelChange} />
            <Text>Email</Text>


            <Input name='email' value={user.email} onChange={handelChange} />
            <Text>Mobile</Text>

            <Input name='mobile' value={user.mobile} onChange={handelChange} />
            <Text>Address</Text>

            <Textarea name='address' value={user.address} onChange={handelChange} />

            <Select placeholder='Gender' name='gender' value={user.gender} onChange={handelChange} >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </Select>

          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            {user.isAdmin === "admin" ? <Button variant='ghost' isDisabled >Update</Button> : <Button variant='ghost' onClick={() => handelSubmit(el._id)}>Update</Button>}

          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default UpdateUser
