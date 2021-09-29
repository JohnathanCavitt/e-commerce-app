import React, { useState } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard.js";

let cartInit = JSON.parse(localStorage.getItem("objContainer"));
if (cartInit === null) {
  cartInit = [{ price: "0" }];
}
console.log(cartInit);
let amount = 0;
cartInit.forEach((i) => {
  let newPrice = i.price.replace("$", "");
  newPrice = newPrice.replace(",", "");
  amount += parseFloat(newPrice, 10);
});
console.log(typeof amount);

const Cart = (props) => {
  const [updateAmount, setAmount] = useState(amount);
  const getNewAmount = (amountData) => {
    setAmount(amountData[1]);
    return amountData[0];
  };
  console.log(typeof updateAmount);
  let tax = updateAmount * 0.08;
  let total = updateAmount + tax;
  return (
    <div id="cart-main">
      <div id="cart-itemcard-container">
        {cartInit.map((item, index) => {
          return (
            <CartItemCard
              key={index}
              imgLink={cartInit[index].imgLink}
              itemName={cartInit[index].itemName}
              price={cartInit[index].price}
              cartContainer={cartInit}
              getCounter={props.countFunc}
              getAmount={getNewAmount}
            />
          );
        })}
        <div id="checkout">
          <p className="amount">Amount: ${updateAmount.toFixed(2)}</p>
          <p className="tax">tax: ${tax.toFixed(2)}</p>
          <p className="total">total: ${total.toFixed(2)}</p>
          <button className="cart-checkout">Continue to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
