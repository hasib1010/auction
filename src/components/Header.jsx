"use client";
// components/Header.js
import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="relative">
        <img src="/logo.svg" className='w-full h-auto object-cover' alt="logo backgroundImage" />
        
        {/* Desktop layout - hidden on mobile */}
        <div className="hidden lg:flex flex-col py-10 pb-1 items-center justify-end h-full w-full absolute bottom-0">
          <div className="flex items-center justify-between w-full px-10 space-x-3">

            {/* Search input with dropdown */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search auctions"
                className="px-4 py-2.5 pr-24 rounded-full border-none bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300 w-72 text-sm text-gray-700 placeholder-gray-500"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <select className="text-sm bg-transparent border-none focus:outline-none text-gray-600 pr-1 cursor-pointer">
                  <option>Upcoming</option>
                  <option>Live</option>
                  <option>Ended</option>
                </select>
                <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-1.5 w-7 h-7 flex items-center justify-center transition-colors">
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* User action buttons */}
            <div className="flex space-x-2">
              <button className="bg-white hover:bg-gray-50 rounded-full p-2.5 shadow-lg border border-gray-200 w-10 h-10 flex items-center justify-center transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="bg-white hover:bg-gray-50 rounded-full p-2.5 shadow-lg border border-gray-200 w-10 h-10 flex items-center justify-center transition-colors">
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile layout - hamburger menu */}
        <div className="lg:hidden flex items-center justify-end h-full w-full absolute bottom-0 p-4">
          <button
            onClick={toggleMenu}
            className="bg-white hover:bg-gray-50 rounded-full p-2.5 shadow-lg border border-gray-200 w-10 h-10 flex items-center justify-center transition-colors z-50"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/45 bg-opacity-50 z-40" onClick={toggleMenu}>
            <div 
              className="absolute top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 pt-16">
                {/* Mobile search */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search auctions"
                      className="px-4 py-3 pr-24 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 w-full text-sm text-gray-700 placeholder-gray-500"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                      <select className="text-sm bg-transparent border-none focus:outline-none text-gray-600 pr-1 cursor-pointer">
                        <option>Upcoming</option>
                        <option>Live</option>
                        <option>Ended</option>
                      </select>
                      <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-1.5 w-7 h-7 flex items-center justify-center transition-colors">
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile menu items */}
                <div className="space-y-4">
                  <button className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Shopping Cart</span>
                  </button>
                  <button className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <User className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;