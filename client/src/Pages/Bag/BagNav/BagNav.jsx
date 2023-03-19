import React from 'react'
import "./BagNav.css"

const BagNav = ({payment,address,bag}) => {
  return (
    <div >

    <div id="cartNavbar">
        <div  className='navItems'  style={{  color: bag ? "teal" : "black", textDecoration: bag ? "underline" : "none" }}>B A G</div>
        <div>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
        <div className='navItems'  style={{  color: address ? "teal" : "black", textDecoration: address ? "underline" : "none" }} >A D D R E S S</div>
        <div>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
        <div  className='navItems' style={{  color: payment ? "teal" : "black", textDecoration: payment ? "underline" : "none" }} >P A Y M E N T</div>
    </div>
    <div className="BagNavImageContainer">
        <img width="35px" src="https://thumbs.dreamstime.com/z/shield-check-mark-icon-d-vector-illustration-security-guaranteed-secure-protection-symbol-free-to-edit-233403684.jpg" alt="secure" />
        <p className='navP'> 100 % S E C U R E</p>
    </div>
</div>
  )
}

export default BagNav