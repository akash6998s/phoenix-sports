import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-6 shadow-md" style={{ zIndex: 100 }}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-semibold">
          <Link to="/">Cricket Turf</Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/services" className="hover:text-blue-300">Services</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-blue-900 text-white flex justify-around p-4">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/services" className="hover:text-blue-300">Services</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
