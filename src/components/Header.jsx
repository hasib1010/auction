"use client";
// components/Header.js
import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();

  return (
    <>
      {/* Fixed Header with width constraint */}
      <div className="w-full bg-[#F7F7F7] border-b border-[#E3E3E3] fixed top-0 left-0 z-[9999]">
        <div className="w-full max-w-[100vw] overflow-hidden">
          <div className="py-3 container mx-auto  ">
            {/* Desktop layout - hidden on mobile */}
            <div className="hidden lg:flex flex-col items-center justify-end h-full w-full">
              <div className="flex items-center justify-between w-full   space-x-3">
                {/* Search input with dropdown */}
                <div className="relative flex items-center">
                  {/* text Logo */}
                  <Link href="/" className='text-2xl text-[#0E0E0E] font-bold mr-5 cursor-pointer w-20'>
                    <img src="/logo.png" alt="SMBros Logo" />
                  </Link>
                  <div>
                    <input
                      type="text"
                      placeholder="Search auctions"
                      className="pl-5 py-3.5 pr-32  rounded-full border-none bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300 w-72 text-sm text-gray-700 placeholder-gray-500"
                    />
                    <div className="absolute bg-white right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
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

                {/* User action buttons */}
                <div className="flex space-x-4 items-center">
                  <button onClick={() => router.push('/login')} className='text-[#0E0E0E] text-[16px] font-semibold cursor-pointer'>
                    Login
                  </button>
                  <button onClick={() => router.push('/signup')} className='text-white text-[16px] font-semibold px-6 py-3 rounded-full bg-[#0E0E0E] cursor-pointer'>
                    Sign Up
                  </button>
                  <button className="bg-white hover:bg-gray-50 rounded-full p-2.5 shadow-lg border border-gray-200 w-10 h-10 flex items-center justify-center transition-colors cursor-pointer">
                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile layout - visible only on mobile */}
            <div className="lg:hidden flex items-center justify-between w-full">
              {/* Logo on left */}
               <Link href="/" className='text-2xl text-[#0E0E0E] font-bold mr-5 ml-4 cursor-pointer w-20'>
                    <img src="/logo.png" alt="SMBros Logo" />
                  </Link>

              {/* Hamburger button on right */}
              <button
                onClick={toggleMenu}
                className="bg-white hover:bg-gray-50 rounded-full p-2.5 shadow-lg border border-gray-200 w-10 h-10 flex items-center justify-center transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header - adjusted height */}
      <div className="h-16 lg:h-20"></div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[9998] bg-black/40"
          onClick={toggleMenu}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-6 overflow-y-auto z-[9999]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search auctions"
                  className="px-4 py-3 pr-24 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 w-full text-sm text-gray-700 placeholder-gray-500"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
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

            {/* Menu items */}
            <div className="space-y-4">
              <button
                onClick={() => {
                  router.push("/cart");
                  toggleMenu();
                }}
                className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Shopping Cart</span>
              </button>
              <button
                onClick={() => {
                  router.push("/profile");
                  toggleMenu();
                }}
                className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Profile</span>
              </button>
              <button
                onClick={() => {
                  router.push("/login");
                  toggleMenu();
                }}
                className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Login</span>
              </button>
              <button
                onClick={() => {
                  router.push("/signup");
                  toggleMenu();
                }}
                className="block w-full mt-2 text-white font-semibold px-6 py-3 rounded-full bg-[#0E0E0E] hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;