import React from "react";
import Books from "./Book";

const MotivationalBooks = () => {
  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl text-red-600 my-4">
        Motivational Books
      </h1>

      <div className="flex flex-wrap justify-center">
        {Books.map((b) => (
          <div className="m-4 max-w-sm  rounded-lg overflow-hidden shadow-lg">
            <img
              className="h-52 w-full object-contain"
              src={b.img}
              alt="power"
            />
            <div className="p-4">
              <h1 className="font-bold text-lg">{b.name}</h1>
              <h1 className="font-medium">{b.author}</h1>
              <h1 className="font-medium">₹{b.price}</h1>
              <button className="bg-slate-400 w-28 rounded-3xl mt-4">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotivationalBooks;
