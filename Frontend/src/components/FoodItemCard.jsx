import React from "react";

const FoodItemCard = ({ name, price, image, onAdd }) => (
  <div className="bg-white rounded-xl shadow-md p-4 transition-transform hover:scale-[1.02]">
    <img
      src={image}
      alt={name}
      className="max-h-52 w-full object-cover rounded-lg"
    />
    <div className="mt-3 text-lg font-semibold truncate">{name}</div>
    <div className="text-primary font-bold">₹{price}</div>
    <button
      onClick={onAdd}
      className="bg-blue-500 hover:bg-blue-700 transition-colors duration-200 text-white px-4 py-1.5 mt-3 rounded-md w-full"
    >
      Add to Cart
    </button>
  </div>
);

export default FoodItemCard;
