import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineDown} from "react-icons/ai";


const Size = ({el}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <Button onClick={onOpen} fontSize="14px">Size: sizes <AiOutlineDown /></Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <img style={{ border: "1px solid black", width: '70px', height: "90px" }} src={el.Image} alt="poster" />
                            <div>
                                <h3>{el.productName}</h3>
                                {/* <p>{el.description}</p> */}
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <p style={{ fontSize: "14px", fontWeight: "500" }}>₹ {el.price}</p> {/* Rs.{el.price} */}
                                    <p style={{ fontSize: "14px", textDecoration: "line-through" }}>{el.off_Price}</p> {/*Rs.{el.off_price} */}
                                    <p style={{ fontSize: "14px", color: "#ff905a" }}>({el.discount})</p> {/* ({el.discount}% OFF) */}
                                </div>
                            </div>
                        </div>
                        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                        <h3>Select Size :</h3>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <div style={{ border: "1px solid #eaeaec", borderRadius: "50%", width: "40px", textAlign: "center" }} className="SizeItemCart">S</div>
                            <div style={{ border: "1px solid #eaeaec", borderRadius: "50%", width: "40px", textAlign: "center" }} className="SizeItemCart">M</div>
                            <div style={{ border: "1px solid #eaeaec", borderRadius: "50%", width: "40px", textAlign: "center" }} className="SizeItemCart">L</div>
                            <div style={{ border: "1px solid #eaeaec", borderRadius: "50%", width: "40px", textAlign: "center" }} className="SizeItemCart">XL</div>
                            <div style={{ border: "1px solid #eaeaec", borderRadius: "50%", width: "40px", textAlign: "center" }} className="SizeItemCart">XXL</div>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button bgColor='#ff3e6c' color="white" w="100%" mr={3} onClick={onClose}>
                            Done
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Size