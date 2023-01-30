import React, { useState } from 'react'
import { useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
  Button,
  Image,
  Grid,
  Flex,
  Spinner,
} from '@chakra-ui/react'
import { userRequest } from '../../requestMethod';
import Confirm from '../Users/Confirm';
import UpdateUser from '../user/UpdateUser';
const ProductList = () => {
  const [data, setData] = useState([])
  const [loading,setLoadng]=useState(false)

  const getData = () => {
    setLoadng(true)


    userRequest.get("/product").then(res => {
    setLoadng(false)

      setData(res.data)

    }).catch(err => {
      console.log('err:', err)
    })
  }
  useEffect(() => {
    getData()

  }, [])


if(loading){
  return(
    <Grid flex="4" justifyContent="center" alignItems="center">
      <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
    </Grid>
  )
}


  return (
    <div style={{ flex: 4 }}>
      <TableContainer>
        <Table variant='simple'>
        <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Brand</Th>
              <Th >Price</Th>
              <Th >Color</Th>
              <Th >Rating</Th>
              <Th ></Th>
            </Tr>
          </Thead>
         
          <Tbody>
            {data.length > 0 && data.map((el) => {
              return (
                <Tr key={el._id} h="200px">
                  <Td> <Image name='Dan Abrahmov' src={el.images.image1} h="200px" /></Td>
                  <Td w={50}> {el.brand}</Td>
                  <Td >{el.price}₹</Td>
                  <Td >{el.color}</Td>
                  <Td color={el.rating>=4?"green":"red"}>{el.rating}</Td>
            
                  <Td >
                    <Flex gap={10}>
                    <UpdateUser el={el} />
                    <Confirm id={el._id} parem="product" getData={getData} />
                    </Flex>
                  </Td>
                </Tr>
              )
            })}

          </Tbody>

        </Table>
      </TableContainer>
    </div>
  )
}

export default ProductList