import React from "react";
import "./ItemCard.css";

function ItemCard(props) {
  const addToCart = (e, cartObj = ["PLACEHOLDER"]) => {
    let itemObj = {
      itemName: props.itemName,
      imgLink: props.imgLink,
      price: props.price,
    };
    cartObj.push(itemObj);
    localStorage.setItem("objContainer", JSON.stringify(cartObj));
    console.log(cartObj);
  };
  return (
    <div className="card">
      <img src={props.imgLink} alt="" className="item-image" />
      <p className="item-name">{props.itemName}</p>
      <p className="price">{props.price}</p>
      <button
        className="add-to-cart"
        onClick={(e) => addToCart(e, props.cartContainer)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ItemCard;
