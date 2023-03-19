import React from 'react'

const BagNav = ({payment,address,bag}) => {
  return (
    <div id="cartNavbar">

    <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", height: "80px" }}>
        <div style={{ fontSize: "18px", fontWeight: "500", color: bag ? "teal" : "black", textDecoration: bag ? "underline" : "none" }}>B A G</div>
        <div>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
        <div style={{ fontSize: "18px", fontWeight: "500", color: address ? "teal" : "black", textDecoration: address ? "underline" : "none" }} >A D D R E S S</div>
        <div>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
        <div style={{ fontSize: "18px", fontWeight: "500", color: payment ? "teal" : "black", textDecoration: payment ? "underline" : "none" }} >P A Y M E N T</div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "20px", marginLeft: "220px", marginTop: "-60px" }}>
        <img width="35px" src="https://thumbs.dreamstime.com/z/shield-check-mark-icon-d-vector-illustration-security-guaranteed-secure-protection-symbol-free-to-edit-233403684.jpg" alt="secure" />
        <p style={{ fontSize: "14px", fontWeight: "700" }}> 100 % S E C U R E</p>
    </div>
</div>
  )
}

export default BagNav