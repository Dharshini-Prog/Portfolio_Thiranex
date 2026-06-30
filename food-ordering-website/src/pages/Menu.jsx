import { useState } from "react";
import FoodCard from "../components/FoodCard";
import foodItems from "../data/food";

function Menu({ addToCart }) {

  const [search, setSearch] = useState("");

  const filteredFoods = foodItems.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="menu-page">

      <h1>Our Menu</h1>

      <input
        className="search-box"
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="food-grid">
        {filteredFoods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            addToCart={addToCart}
          />
        ))}
      </div>

    </div>
  );
}

export default Menu;

export default Menu;