function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr />

          <h2>Total: ₹{total}</h2>

          <button
            className="checkout-btn"
            onClick={() => alert("🎉 Order Placed Successfully!")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;