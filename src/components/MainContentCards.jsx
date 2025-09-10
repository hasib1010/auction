// components/MainContentCards.js
import React from 'react';

const MainContentCards = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Auction Site Card */}
          <div className="border-r border-gray-100 p-8 flex items-center">
            {/* Character Illustration */}
            <div className="flex flex-1 items-center justify-center">
              <img src="/Thor_Babi copy 1.png" alt="Main content pig" />
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
          <div className="border-l border-gray-100 p-8 flex items-center">
            {/* Character Illustration */}
            <div className="flex flex-1 items-center justify-center bg-gray-100 px-9 py-12 rounded-4xl">
              <img src="/pikachu copy 2 (1).png" alt="Pig Pikachu" className="w-full h-full object-contain" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The store</h3>
              <p className="text-gray-600 text-base mb-52 leading-relaxed">
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