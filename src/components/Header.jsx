import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-blue-900 text-white p-6 shadow-md" style={{ zIndex: 100 }}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-semibold">
          <Link to="/">Cricket Turf</Link>
        </div>

        {/* Navigation and Profile */}
        <div className="flex items-center">
          {/* Navigation for larger screens */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/about" className="hover:text-blue-300">About</Link>
            <Link to="/services" className="hover:text-blue-300">Services</Link>
            <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          </nav>

          {/* Profile Icon */}
          <div className="relative ml-6">
            <button onClick={toggleProfileMenu} className="focus:outline-none hover:text-blue-300">
              <AccountCircle fontSize="large" />
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-blue-900 rounded shadow-lg z-10 w-40"> {/* Increased width here */}
                <Link to="/signIn" className="block px-4 py-2 hover:bg-blue-100">Sign In</Link>
                <Link to="/signUp" className="block px-4 py-2 hover:bg-blue-100">Sign Up</Link>
              </div>
            )}
          </div>
        </div>

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
