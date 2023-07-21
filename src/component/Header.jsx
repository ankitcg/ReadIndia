import React from "react";
import cart from "../assets/shopping-cart.png";
import user from "../assets/user.png";

const Header = () => {
  return (
    <nav className="flex justify-between border">
      <a href="/">
        <h1 className="my-2 font-bold text-orange-600 text-2xl mx-4">
          ReadIndia
        </h1>
      </a>
      <div className="flex h-10 my-2 mx-5">
        <a href="/user">
          <img className="cursor-pointer h-10" src={user} alt="user" />
        </a>
        <a href="/cart">
          <img className="mx-4 cursor-pointer h-10" src={cart} alt="cart" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
