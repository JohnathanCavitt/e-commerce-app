import React from "react";
import "./ItemCard.css";

function ItemCard(props) {
  let countVar = 0;
  const addToCart = (e, cartObj = ["PLACEHOLDER"], count) => {
    let itemObj = {
      itemName: props.itemName,
      imgLink: props.imgLink,
      price: props.price,
    };
    cartObj.push(itemObj);
    localStorage.setItem("objContainer", JSON.stringify(cartObj));
    if (JSON.parse(localStorage.getItem("objContainer")) !== null) {
      count = JSON.parse(localStorage.getItem("objContainer")).length;
    } else {
      count = 0;
    }
    console.log(count);
    console.log(cartObj);
    return count;
  };
  return (
    <div className="card">
      <img src={props.imgLink} alt="" className="item-image" />
      <p className="item-name">{props.itemName}</p>
      <p className="price">{props.price}</p>
      <button
        className="add-to-cart"
        onClick={(e) => {
          props.getCounter(addToCart(e, props.cartContainer, countVar));
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ItemCard;
