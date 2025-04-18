import React from "react";
const CartItemCard = ({ item, onRemove, onQuantityChange }) => (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
      </div>
      <div className="flex items-center gap-2">
        <input type="number" min="1" value={item.quantity} onChange={(e) => onQuantityChange(item.id, e.target.value)} className="w-12 border rounded px-2 py-1" />
        <button onClick={() => onRemove(item.id)} className="text-red-500 hover:underline text-sm">Remove</button>
      </div>
    </div>
  );
  export default CartItemCard;