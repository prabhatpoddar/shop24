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
  Grid,
  Spinner,
} from '@chakra-ui/react'
import { userRequest } from '../../requestMethod';
import UpdateUser from '../user/UpdateUser';
import Confirm from '../Users/Confirm';
const Sale = () => {
  const [data, setData] = useState([])
  console.log('data:', data)
  const [loading,setLoadng]=useState(false)

  const getData=()=>{
    setLoadng(true)
    
    userRequest.get("https://plum-jay-wear.cyclic.app/order", {
      headers: {
        "token": localStorage.getItem("token")
      }
    }).then(res => {
      setData(res.data)
      setLoadng(false)

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
          <Thead >
            <Tr>
              <Th>Id</Th>
              <Th >Amount</Th>
              <Th >Date</Th>
              <Th >Status</Th>
              <Th >Update</Th>
              <Th >Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length > 0 && data.map((el) => {
              return (
                <Tr key={el._id}>
                  <Td >{el.userId}</Td>
                  <Td >{el.amount}</Td>
                  <Td >{el.date}</Td>
                  <Td >{el.status}</Td>
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

export default Sale