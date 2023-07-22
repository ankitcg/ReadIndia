import React from "react";
import Books from "./Motivation";
import { useNavigate } from "react-router-dom";

const MotivationalBooks = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const handleClick = (book) => {
    console.log("Adding to cart:", book);
<<<<<<< HEAD
    const bookInCart = cart.find((item) => item.id === book.id); 
=======
    const bookInCart = cart.find((item) => item.id === book.id); // Use cart here
>>>>>>> 14543f3d92e06f35239e1f2097bb65f089b00245

    if (!bookInCart) {
      setCart([...cart, { ...book, quantity: 1 }]);
      navigate("/cart");
    } else {
      const updatedCart = cart.map((item) =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      navigate("/cart");
    }
  };

<<<<<<< HEAD
  console.log("Cart State:", cart); 
=======
  console.log("Cart State:", cart); // Use cart here
>>>>>>> 14543f3d92e06f35239e1f2097bb65f089b00245

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl text-red-600 my-4">
        Motivational Books
      </h1>

      <div className="flex flex-wrap justify-center">
        {Books.map((b, id) => (
          <div
            key={id}
            className="m-4 max-w-sm rounded-lg overflow-hidden shadow-lg"
          >
            <img
              className="h-52 w-full object-contain"
              src={b.img}
              alt="power"
            />
            <div className="p-4">
              <h1 className="font-bold text-lg">{b.name}</h1>
              <h1 className="font-medium">{b.author}</h1>
              <h1 className="font-medium">₹{b.price}</h1>
              <button
                className="bg-slate-400 w-28 rounded-3xl mt-4"
                onClick={() => handleClick(b)}
              >
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
