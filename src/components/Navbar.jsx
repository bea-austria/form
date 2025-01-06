// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-semibold">MyWebsite</div>
        <ul className="space-x-6 hidden md:flex">
          <li><a href="#" className="hover:text-blue-300">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
