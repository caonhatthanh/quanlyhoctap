import React from "react";
import "./menu.css"
import { Link } from "react-router-dom";

class MenuComponents extends React.Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/product">About</Link>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="content">
          <h1>Welcome to Home Page</h1>
          <p>Đây là trang home</p>
        </div>
      </div>
    );
  }
}

export default MenuComponents;
