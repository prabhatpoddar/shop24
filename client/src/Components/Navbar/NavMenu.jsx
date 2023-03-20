import { Avatar, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./navMenu.css"


const NavMenu = ({ data }) => {
    console.log('data:', data)
    return (
        <Grid className='NavMenu' id='NavMenu'>
            {
                data.length > 0 ? data.map((el) => {
                    return (

                        <Link to={`/singlepage/${el._id}`} key={el._id}>
                            <Flex className='innerItem' >
                                <Avatar src={el.image} />
                                <Text> {el.productname}</Text>

                            </Flex>
                            <hr />
                        </Link>



                    )
                }) : <div className='NoData'>
                    <h4>OOps Nothing to show...</h4>
                </div>
            }


        </Grid>
    )
}

export default NavMenu