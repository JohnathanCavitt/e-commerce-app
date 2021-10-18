import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div id="checkout-page">
      <div id="info-container">
        <h1 className="head-text">Payment Information</h1>
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
          <div id="payment-right">
            <label htmlFor="" className="horizontal">
              Expiration date
            </label>
            <input type="text" autoComplete="off" className="input-checkout" />
            <label htmlFor="" className="horizontal">
              Security code
            </label>
            <input
              type="text"
              autoComplete="off"
              className="input-checkout security-code"
            />
          </div>
        </div>
        <h1 className="head-text">Billing Information</h1>
        <div id="billing-info">
          <div id="billing-left">
            <label htmlFor="">First name</label>
            <input type="text" className="input-checkout" autoComplete="off" />
            <label htmlFor="">Last name</label>
            <input type="text" className="input-checkout" autoComplete="off" />
            <label htmlFor="">Billing address</label>
            <input type="text" className="input-checkout" autoComplete="off" />
            <label htmlFor="">Billing address, line 2</label>
            <input type="text" className="input-checkout" autoComplete="off" />
            <label htmlFor="">Country</label>
            <input type="text" className="input-checkout" autoComplete="off" />
          </div>
          <div id="billing-right">
            <label htmlFor="">City</label>
            <input type="text" className="input-checkout" autoComplete="off" />
            <label htmlFor="">Zip or postal code</label>
            <input type="text" className="input-checkout" autoComplete="off" />
            <label htmlFor="">Phone number</label>
            <input type="text" className="input-checkout" autoComplete="off" />
          </div>
        </div>
        <a href="thanks-page">
          <button className="cart-checkout">Submit</button>
        </a>
      </div>
    </div>
  );
};

export default Checkout;
