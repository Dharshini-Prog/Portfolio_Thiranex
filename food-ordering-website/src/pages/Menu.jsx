import { useState } from "react";
import FoodCard from "../components/FoodCard";
import foodItems from "../data/food";

function Menu({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredFoods = foodItems.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="menu-page">
      <h1>🍽 Our Menu</h1>

      {/* Category Buttons */}
      <div className="category-buttons">
        <button
          className={category === "All" ? "active-category" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Burger" ? "active-category" : ""}
          onClick={() => setCategory("Burger")}
        >
          Burger
        </button>

        <button
          className={category === "Pizza" ? "active-category" : ""}
          onClick={() => setCategory("Pizza")}
        >
          Pizza
        </button>

        <button
          className={category === "Biryani" ? "active-category" : ""}
          onClick={() => setCategory("Biryani")}
        >
          Biryani
        </button>

        <button
          className={category === "Snacks" ? "active-category" : ""}
          onClick={() => setCategory("Snacks")}
        >
          Snacks
        </button>

        <button
          className={category === "Drinks" ? "active-category" : ""}
          onClick={() => setCategory("Drinks")}
        >
          Drinks
        </button>

        <button
          className={category === "Pasta" ? "active-category" : ""}
          onClick={() => setCategory("Pasta")}
        >
          Pasta
        </button>
      </div>

      {/* Search Box */}
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Food Cards */}
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