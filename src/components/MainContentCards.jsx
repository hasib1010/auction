// components/MainContentCards.js
import React from 'react';

const MainContentCards = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Auction Site Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex items-start space-x-6">
            {/* Character Illustration */}
            <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Pig Viking Character */}
                <div className="absolute inset-0 bg-pink-200 rounded-full"></div>
                {/* Helmet */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-400 rounded-t-full">
                  {/* Horns */}
                  <div className="absolute -top-2 left-2 w-3 h-8 bg-gray-300 rounded transform rotate-12"></div>
                  <div className="absolute -top-2 right-2 w-3 h-8 bg-gray-300 rounded transform -rotate-12"></div>
                </div>
                {/* Face */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-pink-300 rounded-full">
                  {/* Eyes */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-black rounded-full"></div>
                  {/* Snout */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-pink-400 rounded-full">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                {/* Body/Armor */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-blue-600 rounded-lg"></div>
                {/* Shield */}
                <div className="absolute bottom-0 right-0 w-8 h-12 bg-red-600 rounded"></div>
                {/* Sword */}
                <div className="absolute bottom-0 left-0 w-2 h-16 bg-gray-500 rounded"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auction site</h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Specialists in media, Toys and Games, movies, collectibles and everything pop culture.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-bold text-gray-800 text-sm mb-2 tracking-wide">SELLERS</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span>75% Best Price</span>
                      <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span>Collections available</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0 mt-0.5"></div>
                      <span>Connected to The Saleroom so maximum exposure to largest worldwide</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 text-sm mb-2 tracking-wide">BUYERS</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span>Bidding and Posting Options Available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>Easy Payment Methods</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors flex items-center space-x-2">
                <span>Explore Auctions</span>
                <span>→</span>
              </button>
            </div>
          </div>
          
          {/* The Store Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex items-start space-x-6">
            {/* Character Illustration */}
            <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Simple Pig Character */}
                <div className="absolute inset-0 bg-pink-200 rounded-full"></div>
                {/* Ears */}
                <div className="absolute top-4 left-2 w-6 h-8 bg-pink-300 rounded-full transform rotate-12"></div>
                <div className="absolute top-4 right-2 w-6 h-8 bg-pink-300 rounded-full transform -rotate-12"></div>
                {/* Face */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-pink-300 rounded-full">
                  {/* Eyes */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-black rounded-full"></div>
                  {/* Snout */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-pink-400 rounded-full">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                {/* Tail */}
                <div className="absolute bottom-8 right-0 w-4 h-8 bg-pink-300 rounded-full transform rotate-45"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The store</h3>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                New, used and retired sets. Games, steel books and many more.
              </p>
              
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors flex items-center space-x-2">
                <span>Visit Store</span>
                <span>→</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MainContentCards;