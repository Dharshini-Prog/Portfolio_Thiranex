import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import "./styles/main.css";

function App() {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (food) => {
    const existingItem = cart.find((item) => item.id === food.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item completely
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;