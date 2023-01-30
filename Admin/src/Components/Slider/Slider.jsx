import "./Slider.css";

import { Link } from "react-router-dom";

export default function Slider() {
  const handleClick = event => {
    // document.getElementsByClassName("active").classList.remove("active")
    event.target.classList.add('active')
  
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active"  onClick={handleClick}>
              Home
            </li>
            </Link>
            <li className="sidebarListItem" onClick={handleClick}>
              Analytics
            </li>
            <li className="sidebarListItem"  onClick={handleClick}>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem"  onClick={handleClick}>
                Users
              </li>
            </Link>
            <Link to="/products" className="link"  onClick={handleClick}>
              <li className="sidebarListItem">
                Products
              </li>
            </Link>
            <li className="sidebarListItem"  onClick={handleClick}>
              Transactions
            </li>
            <li className="sidebarListItem"  onClick={handleClick}>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem"  onClick={handleClick}>
            
              Mail
            </li>
            <li className="sidebarListItem"  onClick={handleClick}>
          
              Feedback
            </li>
            <li className="sidebarListItem"  onClick={handleClick}>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem"  onClick={handleClick}>
              Manage
            </li>
            <li className="sidebarListItem"  onClick={handleClick}>
              Analytics
            </li>
            <li className="sidebarListItem"  onClick={handleClick}>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
