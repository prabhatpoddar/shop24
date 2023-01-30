import { Flex, Grid, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { GoReport } from 'react-icons/go';
const Navbar = () => {
    return (
        <div id="navbar">
            <div className="logo">
                <img src="https://user-images.githubusercontent.com/98205449/213233396-1caf5409-150c-4862-bb2b-03fbd8e3bbf5.jpg" />
            </div>


            <div className="search">
                <Input type="text" placeholder='Search ' name="" id="" border="1px solid black" />
            </div>

            <div className="icons">
                <Link>
                    <Grid >
                    <Flex ml={3}><GoReport  /></Flex>
                        <Text>Report</Text>
                    </Grid>
                </Link>
                <Link>
                    <Grid>
                    <Flex ml={1.5}><AiOutlineMail  /></Flex>
                        <Text>Mail</Text>
                    </Grid>
                </Link>
                <Link>
                    <Grid>
                       
                        <Flex ml={3}> <CgProfile  /></Flex>
                        <Text>Profile</Text>
                    </Grid>
                </Link>
            </div>
        </div>


    )
}

export default Navbar
