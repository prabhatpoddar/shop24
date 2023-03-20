import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Select,
    useToast,
} from '@chakra-ui/react'

import "./Move.css"
import { useDispatch } from 'react-redux'
import { addProductBag } from '../../redux/BagRedux'

const MoveToBagModel = ({ data }) => {
    const dispatch = useDispatch()
    const { image, name, brand, price, off_price } = data
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast1 = useToast({
        position: 'top-bottom',
    })
    const toast2 = useToast({
        position: 'top',
    })


    const addToBag = (quantity = 1) => {
        if (size) {
            if (color) {

                dispatch(addProductBag({ ...data, color, size, quantity }))
                onClose()
                toast1({
                    title: `Successfully added Bag`,
                    status: "success",
                    isClosable: true,
                })

            }
            else {
                toast2({
                    title: `Select Color First`,
                    status: "warning",
                    isClosable: true,
                })
            }

        } else {
            toast2({
                title: `Select Size First`,
                status: "warning",
                isClosable: true,
            })
        }
    }
    return (
        <>


            <p onClick={onOpen}>
                MOVE TO BAG
            </p>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>
                    <div className="detailsDiv">
                        <div >
                            <img src={image} alt="" />

                        </div>
                        <div className='detailsContainer'>
                            <p>{name}</p>
                            <p>{brand}</p>
                            <div className='pricedWishlist'>
                                <h4>₹ {price}</h4>
                                <p className='offPrice'>{off_price}</p>
                            </div>


                        </div>

                    </div>
                    <hr />

                    <div className="selectDivWishlist">
                        <div>
                            <Select onChange={(e) => setSize(e.target.value)}>
                                <option value="">Size</option>
                                <option value="S">S</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </Select>
                        </div>
                        <div>
                            <Select onChange={(e) => setColor(e.target.value)}                            >
                                <option value="">Color</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Black">Black</option>
                                <option value="Red">Red</option>
                                <option value="White">White</option>
                            </Select>
                        </div>
                    </div>

                    <ModalFooter>
                        <Button colorScheme='pink' mr={3} onClick={() => {
                            addToBag()

                        }} w="100%">
                            Done
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default MoveToBagModel