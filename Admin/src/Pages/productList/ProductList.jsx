import "./productList.css";
import React, { useState } from 'react'
import { useEffect } from 'react';
import { userRequest } from '../../requestMethod';
import { Link } from "react-router-dom"
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


export default function ProductList() {
  const [data, setData] = useState([])
  console.log('data:', data)
  useEffect(() => { 


    userRequest.get("/?limit=8").then(res => {
      setData(res.data)

    }).catch(err => {
      console.log('err:', err)


    })


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
          {/* {data.length > 0 && data.map((el) => {
            return (
              <Tr key={el._id}>
                <Td> <Avatar name='Dan Abrahmov' src={el.profilePic} /></Td>
                <Td >{el.fullName}</Td>
                <Td >{el.email}</Td>
                <Td >{el.gender}</Td>
                <Td >{el.isAdmin}</Td>
                <Td ><Link to={`/user/:${el._id}`}><Button colorScheme="facebook">Update</Button></Link></Td>
                <Td ><Confirm id={el._id}/></Td>
              </Tr>
            )
          })} */}

        </Tbody>

      </Table>
    </TableContainer>
  </div>
  );
}
