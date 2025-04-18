import React from "react";
import registerImage from "../assets/images/userActions/register.png"; // Add your register image here
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg w-full max-w-4xl mx-4 flex flex-col md:flex-row">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center p-6">
          <img src={registerImage} alt="Register" className="w-full h-auto rounded-xl" />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-primary">Create Your Account</h2>
            <p className="text-gray-600 text-sm">Join Eazy-Bite and simplify your campus meals</p>
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
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
              Register
            </button>
          </form>

          <div className="text-sm text-center mt-4 text-gray-500">
            <Link to="/login">Already have an account? <span className="text-primary cursor-pointer">Login</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
