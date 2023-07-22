import React from "react";

const MAX_BOOK_QUANTITY = 10;

const Cart = ({ cart, setCart }) => {
  const handleDecreaseQuantity = (bookId) => {
    const bookInCart = cart.find((item) => item.id === bookId);

    if (bookInCart && bookInCart.quantity > 1) {
      const updatedCart = cart.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  const handleIncreaseQuantity = (bookId) => {
    const bookInCart = cart.find((item) => item.id === bookId);

    if (bookInCart && bookInCart.quantity < MAX_BOOK_QUANTITY) {
      const updatedCart = cart.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    }
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl">Your Cart</h1>
      {cart.map((book) => (
        <div key={book.id} className="flex border mx-10 my-10">
          <img className="h-32" src={book.img} alt="book" />
          <div className="mx-4">
            <h1 className="font-bold text-lg my-2">{book.name}</h1>
            <h1 className="font-medium my-2">{book.author}</h1>
            <h1 className="font-medium my-2">₹{book.price}</h1>
          </div>
          <div className="my-4">
            <button
              className="w-5 font-extrabold text-lg"
              onClick={() => handleDecreaseQuantity(book.id)}
            >
              -
            </button>
            <input
              className="border bg-slate-400 w-10"
              value={book.quantity}
              type="text"
              readOnly
            />
            <button
              className="w-5 font-extrabold text-lg"
              onClick={() => handleIncreaseQuantity(book.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Cart);
