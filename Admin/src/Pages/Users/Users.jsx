import React, { useState } from 'react'
import { useEffect } from 'react';
import { userRequest } from '../../requestMethod';
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
import Confirm from './Confirm';
import UpdateUser from '../user/UpdateUser';
const Users = () => {
  const [data, setData] = useState([])
  const getData=()=>{
    
    userRequest.get("/users?limit=8").then(res => {
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
                  <Td> <Avatar name='Dan Abrahmov' src={el.profilePic} /></Td>
                  <Td >{el.fullName}</Td>
                  <Td >{el.email}</Td>
                  <Td >{el.gender}</Td>
                  <Td >{el.isAdmin}</Td>
                  <Td ><UpdateUser el={el}/></Td>
                  <Td ><Confirm id={el._id} parem="users" getData={getData}/></Td>
                </Tr>
              )
            })}

          </Tbody>

        </Table>
      </TableContainer>
    </div>
  )
}

export default Users