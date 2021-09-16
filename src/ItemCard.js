import React from "react";
import "./ItemCard.css";
let x = "Hello World!";
function ItemCard(props) {
  const addToCart = (e, cartObj = "PLACEHOLDER") => {
    console.log(cartObj);
  };
  let b = "hello world";
  return (
    <div className="card">
      <img src={props.imgLink} alt="" className="item-image" />
      <p className="item-name">{props.itemName}</p>
      <p className="price">{props.price}</p>
      <button className="add-to-cart" onClick={(e) => addToCart(e, x)}>
        Add to cart
      </button>
    </div>
  );
}

export default ItemCard;
