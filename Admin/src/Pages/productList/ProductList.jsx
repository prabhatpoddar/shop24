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
} from '@chakra-ui/react'
import { userRequest } from '../../requestMethod';
import Confirm from '../Users/Confirm';
import UpdateUser from '../user/UpdateUser';
const ProductList = () => {
  const [data, setData] = useState([])
  const getData = () => {
    userRequest.get("/product").then(res => {
      setData(res.data)

    }).catch(err => {
      console.log('err:', err)
    })
  }
  useEffect(() => {
    getData()

  }, [])





  return (
    <div style={{ flex: 4 }}>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Avtar</Th>
              <Th>Name</Th>
              <Th >email</Th>
              <Th >Gender</Th>
              <Th >Status</Th>
              <Th >Action</Th>
              <Th >Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length > 0 && data.map((el) => {
              return (
                <Tr key={el._id}>
                  <Td> <Avatar name='Dan Abrahmov' src={el.image} /></Td>
                  <Td >{el.category}</Td>
                  <Td >{el.subcategory}</Td>
                  <Td >{el.color}</Td>
                  <Td >{el.rating}</Td>
                  <Td ><UpdateUser el={el} /></Td>
                  <Td ><Confirm id={el._id} parem="product" getData={getData} /></Td>
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