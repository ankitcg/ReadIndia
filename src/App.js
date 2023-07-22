import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import MotivationalBooks from "./component/MotivationalBooks";
import BestSeller from "./component/BestSeller";
import InternationalBooks from "./component/InternationalBooks";
import Cart from "./component/Cart";

function App() {
  const [cart, setCart] = useState([]); 
  console.log("cart state from app:", cart);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/international" element={<InternationalBooks />} />
        <Route
          path="/motivational"
          element={<MotivationalBooks cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
