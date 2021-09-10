import React from "react";
import "./ItemCard.css";

function ItemCard(props) {
  return (
    <div className="card">
      <img src={props.imgLink} alt="" className="item-image" />
      <p className="item-name">{props.itemName}</p>
      <p className="price">{props.price}</p>
      <button id="add-to-cart">Add to cart</button>
    </div>
  );
}

export default ItemCard;
