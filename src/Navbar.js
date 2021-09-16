import React from "react";
import "./Navbar.css";
import shopping_cart from "./test4.png";

function Navbar() {
  return (
    <nav id="nav">
      <ul id="nav-list">
        <li className="nav-item" id="first">
          <a className="nav-link" href="default.asp">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="news.asp">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.asp">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about.asp">
            About
          </a>
        </li>
        <input type="image" src={shopping_cart} alt="" id="shopping-cart" />
      </ul>
    </nav>
  );
}

export default Navbar;
