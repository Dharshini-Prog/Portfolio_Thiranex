import FoodCard from "../components/FoodCard";
import foodItems from "../data/food";

function Menu({ addToCart }) {
  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      <div className="food-grid">
        {foodItems.map((food) => (
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