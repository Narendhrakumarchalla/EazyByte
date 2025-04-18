import React from "react";
import FoodItemCard from "../components/FoodItemCard";

// Beverages
import Coffee from "../assets/images/Beverages/Coffee.png";
import CoolDrink from "../assets/images/Beverages/CoolDrink.png";
import Milk from "../assets/images/Beverages/Milk.png";
import Tea from "../assets/images/Beverages/Tea.png";

// Fast Food
import ChickenFriedRice from "../assets/images/FastFood/ChickenFriedRice.png";
import ChickenManchuria from "../assets/images/FastFood/ChickenManchuria.png";
import ChickenNoodles from "../assets/images/FastFood/ChickenNoodles.png";
import VegFriedRice from "../assets/images/FastFood/VegFriedRice.png";
import VegNoodles from "../assets/images/FastFood/VegNoodles.png";

// Desserts
import Cake from "../assets/images/Desserts/Cake.png";
import IceCream from "../assets/images/Desserts/IceCream.png";

// Menu Data
const menuCategories = {
  Beverages: [
    { id: 1, name: "Coffee", price: 40, image: Coffee },
    { id: 2, name: "Cool Drink", price: 30, image: CoolDrink },
    { id: 3, name: "Milk", price: 25, image: Milk },
    { id: 4, name: "Tea", price: 20, image: Tea },
  ],
  FastFood: [
    { id: 5, name: "Chicken Fried Rice", price: 120, image: ChickenFriedRice },
    { id: 6, name: "Chicken Manchurian", price: 130, image: ChickenManchuria },
    { id: 7, name: "Chicken Noodles", price: 110, image: ChickenNoodles },
    { id: 8, name: "Veg Fried Rice", price: 100, image: VegFriedRice },
    { id: 9, name: "Veg Noodles", price: 95, image: VegNoodles },
  ],
  Desserts: [
    { id: 10, name: "Cake", price: 60, image: Cake },
    { id: 11, name: "Ice Cream", price: 50, image: IceCream },
  ],
};

const MenuPage = () => {
  return (
    <div className="p-6 space-y-8">
      {Object.entries(menuCategories).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <FoodItemCard
                key={item.id}
                {...item}
                onAdd={() => alert(`Added ${item.name}`)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
