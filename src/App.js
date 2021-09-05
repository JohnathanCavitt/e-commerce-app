import "./App.css";
import Navbar from "./Navbar.js";
import ItemCard from "./ItemCard.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 id="test"> </h1>
      <ItemCard
        imgLink="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png"
        itemName="AWP | Dragon Lore"
        price="$456"
      />
    </div>
  );
}

export default App;
