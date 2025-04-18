import React from "react"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isAuthenticated = false; // Replace with your auth logic

  const navLinks = [
    { name: "Menu", path: "/menu" },
    { name: "Orders", path: "/order" },
    { name: "Wallet", path: "/wallet" },
    { name: "Events", path: "/events" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary flex items-center">
          <img src="/logo192.png" alt="Eazy-Bite" className="w-8 h-8 mr-2" />
          Eazy<span className="text-orange-500">Bite</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition duration-200 ${
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <button className="text-sm font-semibold text-red-500 hover:underline">
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-orange-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-orange-600 transition"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl text-gray-700" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive ? "text-orange-500" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <button className="text-sm font-semibold text-red-500">Logout</button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block bg-orange-500 text-white text-center py-1.5 rounded-md text-sm mt-2"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
