import React from "react";
import StatsCard from "../components/StatsCard";
import { FaMoneyBillWave, FaShoppingBasket, FaUser } from "react-icons/fa";

const Dashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
    <StatsCard label="Total Sales" value="₹12,000" icon={FaMoneyBillWave} />
    <StatsCard label="Orders" value="130" icon={FaShoppingBasket} />
    <StatsCard label="Users" value="85" icon={FaUser} />
  </div>
);
export default Dashboard;