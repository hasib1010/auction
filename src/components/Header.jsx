// components/Header.js
import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden"
      style={{
        backgroundImage: 'url("/logo.svg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>

      {/* Search bar overlay - positioned exactly as in design */}
      <div className=" flex flex-col py-10 items-center justify-end h-full w-full ">
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
    </div>
  );
};

export default Header;