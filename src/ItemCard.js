import React from "react";
import "./ItemCard.css";

function ItemCard(props) {
  return (
    <div className="card">
      <img src={props.imgLink} alt="" className="item-image" />
      <p className="item-name">{props.itemName}</p>
      <p className="price">{props.price}</p>
    </div>
  );
}

export default ItemCard;
