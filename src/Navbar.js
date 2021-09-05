import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <ul id="nav">
      <li className="nav-item">
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
    </ul>
  );
}

export default Navbar;
