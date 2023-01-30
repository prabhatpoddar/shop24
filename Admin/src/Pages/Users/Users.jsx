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
  Grid,
  Spinner,
} from '@chakra-ui/react'
import Confirm from './Confirm';
import UpdateUser from '../user/UpdateUser';
const Users = () => {
  const [data, setData] = useState([])
  const [loading,setLoadng]=useState(false)

  const getData=()=>{
    setLoadng(true)
    
    userRequest.get("/users?limit=8").then(res => {
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