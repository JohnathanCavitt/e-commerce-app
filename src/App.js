import "./App.css";
import Navbar from "./Navbar.js";
import ItemCard from "./ItemCard.js";
const data = require("./items.json");
let items = data;
console.log(typeof items);
console.log("test");
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 id="test"> </h1>
      <div id="card-container">
        {items.map((item, index) => {
          return (
            <ItemCard
              key={index}
              imgLink={item.img}
              itemName={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
