import React from 'react';
const AuthContent = ({ children, title }) => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
  export default AuthContent;