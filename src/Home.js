import React from "react";
import ItemCard from "./ItemCard.js";
const data = require("./items.json");
let items = data;
let test = JSON.parse(localStorage.getItem("objContainer"));
console.log(test);
if (test === null) {
  test = [];
}
const Home = () => {
  return (
    <div>
      <h1 id="test"> </h1>
      <div id="card-container">
        {items.map((item, index) => {
          return (
            <ItemCard
              key={index}
              imgLink={item.img}
              itemName={item.name}
              price={item.price}
              cartContainer={test}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
