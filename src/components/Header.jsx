// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-semibold">
        <Link to="/">MyLogo</Link>
      </div>

      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/services" className="hover:text-gray-400">Services</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>

      {/* Mobile menu */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around p-2">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/services" className="hover:text-gray-400">Services</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
