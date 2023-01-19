import "./Slider.css";

import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              Analytics
            </li>
            <li className="sidebarListItem">
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              Transactions
            </li>
            <li className="sidebarListItem">
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            
              Mail
            </li>
            <li className="sidebarListItem">
          
              Feedback
            </li>
            <li className="sidebarListItem">
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              Manage
            </li>
            <li className="sidebarListItem">
              Analytics
            </li>
            <li className="sidebarListItem">
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
