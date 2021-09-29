import React from "react";
import "./CartItemCard.css";

const CartItemCard = (props) => {
  let counter = 0;
  const remove = (e, cartObj = ["PLACEHOLDER"], count) => {
    for (let i = 0; i < cartObj.length; i++) {
      if (cartObj[i]["itemName"] === props.itemName) {
        cartObj.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("objContainer", JSON.stringify(cartObj));
    if (JSON.parse(localStorage.getItem("objContainer")) !== null) {
      count = JSON.parse(localStorage.getItem("objContainer")).length;
    } else {
      count = 0;
    }
    let amount = 0;
    cartObj.forEach((i) => {
      let newPrice = i.price.replace("$", "");
      newPrice = newPrice.replace(",", "");
      amount += parseFloat(newPrice, 10);
    });
    console.log(count);
    console.log(cartObj);
    return [count, amount];
  };
  return (
    <div className="cart-card">
      <img src={props.imgLink} alt="" className="cart-item-image" />
      <p className="cart-item-name">{props.itemName}</p>
      <p className="cart-price">{props.price}</p>
      <button
        className="cart-remove-from-cart"
        onClick={(e) => {
          props.getCounter(
            props.getAmount(remove(e, props.cartContainer, counter))
          );
        }}
      >
        Remove from cart
      </button>
    </div>
  );
};

export default CartItemCard;
