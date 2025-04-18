import React from 'react';
const StatsCard = ({ label, value, icon: Icon }) => (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
      <Icon className="text-primary text-2xl" />
      <div>
        <div className="text-gray-500 text-sm">{label}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  );
  export default StatsCard;