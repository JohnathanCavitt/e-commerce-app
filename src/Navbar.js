import React from "react";
import "./Navbar.css";
import shopping_cart from "./test4.png";

function Navbar(props) {
  return (
    <nav id="nav">
      <ul id="nav-list">
        <li className="nav-item" id="first">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>

        <a href="cart" id="shopping-cart">
          <input
            type="image"
            src={shopping_cart}
            alt=""
            id="shopping-cart-img"
          />
        </a>
        <p className="cart-text">{props.itemCounter}</p>
      </ul>
    </nav>
  );
}

export default Navbar;
