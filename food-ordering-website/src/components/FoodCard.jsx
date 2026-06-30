function FoodCard({ food }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <h3>{food.name}</h3>

      <p className="price">₹{food.price}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default FoodCard;