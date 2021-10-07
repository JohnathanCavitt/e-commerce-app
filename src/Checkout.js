import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div id="checkout-page">
      <div id="payment-method">
        <div id="payment-left">
          <label htmlFor="">Select payment option</label>
          <select name="" id="payment-options">
            <option className="options" value="Visa">
              Visa
            </option>
            <option className="options" value="Mastercard">
              Mastercard
            </option>
          </select>
          <label htmlFor="">Card number</label>
          <input type="text" className="input-checkout" autoComplete="off" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
