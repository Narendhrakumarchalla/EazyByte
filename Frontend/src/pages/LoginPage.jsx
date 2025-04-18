import React from "react";
import AuthContent from "../contexts/AuthContent";
import logo from "../assets/images/userActions/login.png"; // Replace with your actual logo path
 // Optional background image

const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
      
        backgroundColor: "#f0f4f8", // fallback color
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md mx-4">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Eazy-Bite Logo" className="h-16 mb-2" />
          <h2 className="text-2xl font-bold text-primary">Welcome Back</h2>
          <p className="text-gray-600 text-sm">Login to continue to Eazy-Bite</p>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark transition-colors text-white py-2 rounded mt-2"
          >
            Login
          </button>
        </form>

        <div className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account? <span className="text-primary cursor-pointer">Register</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
