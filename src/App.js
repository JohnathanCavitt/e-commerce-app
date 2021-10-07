import "./App.css";
import React, { useState } from "react";
import Home from "./Home.js";
import Cart from "./Cart.js";
import Checkout from "./Checkout.js";
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let count1 = 0;

if (JSON.parse(localStorage.getItem("objContainer")) !== null) {
  count1 = [JSON.parse(localStorage.getItem("objContainer")).length];
}

function App() {
  const [count, setCount] = useState(count1);

  const getCount = (countData) => {
    console.log(countData, typeof countData);
    if (typeof countData === "number") {
      setCount(countData);
    } else {
      setCount(countData[0]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar itemCounter={count} />
        <Switch>
          <Route path="/" exact>
            <Home countFunc={getCount} />
          </Route>
          <Route path="/cart" exact>
            <Cart countFunc={getCount} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
