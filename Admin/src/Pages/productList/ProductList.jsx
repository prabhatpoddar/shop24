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
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const getData = () => {
    setLoading(true)


    userRequest.get(`/product?page=${page}&&limit=30`).then(res => {
      setLoading(false)

      setData(res.data.data)

    }).catch(err => {
      console.log('err:', err)
    })
  }
  useEffect(() => {
    getData()

  }, [page])


  if (loading) {
    return (
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
              <Th >Quantity</Th>
              <Th >Rating</Th>
              <Th >Actions</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.length > 0 && data.map((el) => {
              return (
                <Tr key={el._id} h="200px">
                  <Td> <Image src={el.image} h="200px" /></Td>
                  <Td > {el.brand}</Td>
                  <Td >{el.price}₹</Td>
                  <Td >{el.quantity}</Td>
                  <Td color={el.rating >= 4 ? "green" : "red"}>{el.rating}</Td>

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
      <Flex gap={5} justifyContent="center" alignItems="center" h="80px">
        <Button colorScheme="facebook" onClick={() => setPage(prev => prev === 1 ? prev - 0 : prev - 1)}>Prev</Button>
        <Button colorScheme="facebook" onClick={() => setPage(prev => prev + 1)}>Next</Button>
      </Flex>
    </div>
  )
}

export default ProductList