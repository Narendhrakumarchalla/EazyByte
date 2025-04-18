// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-gray-700 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Intro */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600">Eazy-Bite</h2>
          <p className="mt-2 text-sm">
            Transforming campus canteens with smart technology — order, pay, and manage with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="/login" className="hover:underline">Sign In</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-orange-500">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Eazy-Bite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
