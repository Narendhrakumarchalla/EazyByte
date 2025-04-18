import React from "react"
import CartItemCard from "../components/CardItemCard";

const cartItems = [
  {
    id: 1,
    name: "Pizza Margherita",
    price: 299,
    quantity: 2,
  },
  {
    id: 2,
    name: "Veggie Burger",
    price: 149,
    quantity: 1,
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    price: 249,
    quantity: 3,
  },
];
const CartPage = ({onRemove, onQuantityChange }) => (
  <div className="max-w-3xl mx-auto p-4">
    <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
    {cartItems.map(item => (
      <CartItemCard key={item.id} item={item} onRemove={onRemove} onQuantityChange={onQuantityChange} />
    ))}
  </div>
);
export default CartPage;