import FoodCard from "../components/FoodCard";
import foodItems from "../data/food";

function Menu() {
  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      <div className="food-grid">
        {foodItems.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default Menu;