import React from "react";
import AuthContent from "../contexts/AuthContent";
import loginImage from "../assets/images/userActions/login.png"; // Your image path here
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundColor: "#f0f4f8", // fallback color
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg w-full max-w-4xl mx-4 flex">
       {/* Form Section */}
      <div className="w-1/2 p-8">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl font-bold text-primary">Welcome Back</h2>
            <p className="text-gray-600 text-sm mb-4">Login to continue to Eazy-Bite</p>
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
              className="bg-blue-200 hover:bg-blue-500 transition-colors text-white py-2 rounded mt-2"
            >
              Login
            </button>
          </form>

          <div className="text-sm text-center mt-4 text-gray-500">
           <Link to="/register"> Don’t have an account? <span className="text-primary cursor-pointer">Register</span></Link>
          </div>
        </div>
        {/* Image Section */}

        <div className="w-1/2 flex justify-center items-center p-8">
          <img src={loginImage} alt="Login Visual" className="w-full h-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
