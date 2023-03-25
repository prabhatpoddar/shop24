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
    Grid,
    Spinner,
} from '@chakra-ui/react'
import { userRequest } from '../../requestMethod';
const Sale = () => {
    const [data, setData] = useState([])
    console.log('data:', data)
    const [loading, setLoading] = useState(false)

    const getData = () => {
        setLoading(true)
        userRequest.get("/order", {
        }).then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            console.log('err:', err)
        })
    }
    useEffect(() => {
        getData()

    }, [])

    const ConvertDate = (dateString) => {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}/${month}/${day}`
    }


    const handelUpdate = (id, status) => {

        userRequest.put(`/order/${id}`, {

            "status": status === "pending" ? "Approved" : "pending"


        }).then(res => {


            getData()

        }).catch(err => {
            console.log('err:', err)

        })
    }


    const handelDelete = (id) => {

        userRequest.delete(`/order/${id}`).then(res => {
            getData()
            alert("delete")

        }).catch(err => {
            console.log('err:', err)

        })
    }

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
                    <Thead >
                        <Tr>
                            <Th>User Id</Th>
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
                                    <Td >{
                                        ConvertDate(el.createdAt)
                                    }</Td>
                                    <Td >{el.status}</Td>
                                    <Td ><Button colorScheme="whatsapp" onClick={() => handelUpdate(el._id, el.status)}>{el.status === "pending" ? "Approve" : "Pending"}</Button></Td>
                                    <Td ><Button colorScheme="red" onClick={() => handelDelete(el._id)}>Reject</Button></Td>
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