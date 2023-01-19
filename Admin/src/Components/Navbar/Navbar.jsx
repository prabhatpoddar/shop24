import { Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div id="navbar">
        <div className="logo">
            <img src="https://user-images.githubusercontent.com/98205449/213233396-1caf5409-150c-4862-bb2b-03fbd8e3bbf5.jpg"/>
        </div>
        <div className="links">
            <Link >Mens</Link>
            <Link >Women</Link>
            <Link >Kids</Link>
            <Link >Women</Link>
            <Link >Women</Link>
        </div>

        <div className="search">
            <Input type="text" placeholder='Search ' name="" id="" border="1px solid black" />
        </div>

        <div className="icons">
            <Link>bag</Link>
            <Link>bag</Link>
            <Link>bag</Link>
        </div>
    </div>
    
   
  )
}

export default Navbar
