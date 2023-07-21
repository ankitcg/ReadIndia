import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex text-lg font-medium cursor-pointer justify-center my-5 border-b-2">
      <Link to="/motivational">
        <h1 className="mx-10">Motivational Books</h1>
      </Link>
      <Link to="/bestseller">
        <h1 className="mx-20">Best Sellers Books</h1>
      </Link>
      <Link to="/international">
        <h1 className="mx-10">International Best Sellers Books</h1>
      </Link>
    </div>
  );
};

export default Category;
