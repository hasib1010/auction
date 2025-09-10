// components/HeroCTASection.js
import React from 'react';

const HeroCTASection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 py-20 relative overflow-hidden rounded-3xl mx-8 my-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block mb-6">
              <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                Listing Invitations
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              List your products for auction
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-lg">
              Unlock a world of imagination with our curated collection of original heroes.
            </p>
            
            <button className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-3 group">
              <span>Request to list</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          {/* Right Content - Character Cards and Person */}
          <div className="relative">
            {/* Businessman */}
            <div className="relative z-20 flex justify-center">
              <div className="w-80 h-96 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for businessman image */}
                <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-200 flex items-end justify-center">
                  <div className="w-48 h-72 bg-gray-300 rounded-t-full mb-0 flex items-center justify-center text-gray-600">
                    👔 Business Person
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Character Cards */}
            {/* Wario Card - Top Left */}
            <div className="absolute top-8 left-0 z-30 transform -rotate-12">
              <div className="bg-white rounded-2xl p-4 shadow-2xl w-32 h-40">
                <div className="w-full h-24 bg-yellow-100 rounded-xl mb-3 flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    {/* Wario character */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-purple-600 rounded-lg"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-yellow-300 rounded-full">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-yellow-400 rounded-t-full">
                        <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-white rounded text-xs flex items-center justify-center font-bold text-purple-600">W</div>
                      </div>
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-purple-500 text-white text-xs py-2 rounded-lg font-medium">
                  Bid Now
                </button>
              </div>
            </div>
            
            {/* Mario Card - Bottom Left */}
            <div className="absolute bottom-12 left-8 z-30 transform rotate-6">
              <div className="bg-white rounded-2xl p-4 shadow-2xl w-28 h-36">
                <div className="w-full h-20 bg-red-100 rounded-xl mb-3 flex items-center justify-center">
                  <div className="relative w-12 h-12">
                    {/* Mario character */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-blue-600 rounded-lg"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-pink-300 rounded-full">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-red-500 rounded-t-full"></div>
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-purple-500 text-white text-xs py-1.5 rounded-lg font-medium">
                  Bid Now
                </button>
              </div>
            </div>
            
            {/* Gold Character Card - Top Right */}
            <div className="absolute top-4 right-4 z-30 transform rotate-12">
              <div className="bg-white rounded-2xl p-4 shadow-2xl w-32 h-40">
                <div className="w-full h-24 bg-yellow-50 rounded-xl mb-3 flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    {/* Gold character */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-yellow-600 rounded-lg"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-yellow-300 rounded-full">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-yellow-500 rounded-t-full"></div>
                      <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full"></div>
                      <div className="absolute top-2 right-2 w-1 h-1 bg-black rounded-full"></div>
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-purple-500 text-white text-xs py-2 rounded-lg font-medium">
                  Bid Now
                </button>
              </div>
            </div>
            
            {/* Decorative curved arrow */}
            <div className="absolute top-20 right-16 z-10">
              <svg width="120" height="80" viewBox="0 0 120 80" className="text-white opacity-30">
                <path 
                  d="M10 70 Q 60 10, 110 40" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="4,4"
                />
              </svg>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroCTASection;