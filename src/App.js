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
<<<<<<< HEAD
  const [cart, setCart] = useState([]);
=======
  const [cart, setCart] = useState([]); 
>>>>>>> 14543f3d92e06f35239e1f2097bb65f089b00245
  console.log("cart state from app:", cart);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
<<<<<<< HEAD
        <Route
          path="/bestseller"
          element={<BestSeller cart={cart} setCart={setCart} />}
        />
        <Route
          path="/international"
          element={<InternationalBooks cart={cart} setCart={setCart} />}
        />
=======
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/international" element={<InternationalBooks />} />
>>>>>>> 14543f3d92e06f35239e1f2097bb65f089b00245
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
