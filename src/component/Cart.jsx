import React from "react";
import alchemist from "../assets/alchemist.jpg";

const Cart = () => {
  return (
    <>
    <h1 className="text-center font-extrabold text-3xl">Your Cart</h1>
    <div className="flex border mx-10 my-10">
      <img className="h-32" src={alchemist} alt="book" />
      <div className="mx-4">
        <h1 className="font-bold text-lg my-2">The Alchemist</h1>
        <h1 className="font-medium my-2">Paulo Coelho</h1>
        <h1 className="font-medium my-2">225</h1>
      </div>
      <div className="my-4">
        <button className="w-5 font-extrabold text-lg ">-</button>
        <input className="border bg-slate-400 w-10" value={1} type="text"/>
        <button className="w-5 font-extrabold text-lg ">+</button>
      </div>
    </div>
    </>
    
  );
};

export default Cart;
