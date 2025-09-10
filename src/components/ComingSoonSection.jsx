// components/ComingSoonSection.js
import React from 'react';

const ComingSoonSection = () => {
  const features = [
    {
      title: "Our Official Store",
      status: "Coming Soon",
      character: "simple-pig"
    },
    {
      title: "Grading",
      status: "Coming Soon", 
      character: "soldier-pig"
    },
    {
      title: "Competitions",
      status: "Coming Soon",
      character: "masked-pig"
    }
  ];

  const renderCharacter = (type) => {
    switch(type) {
      case "simple-pig":
        return (
          <div className="relative w-20 h-20">
            {/* Simple Pig */}
            <div className="absolute inset-0 bg-pink-200 rounded-full"></div>
            <div className="absolute top-2 left-2 w-4 h-6 bg-pink-300 rounded-full transform rotate-12"></div>
            <div className="absolute top-2 right-2 w-4 h-6 bg-pink-300 rounded-full transform -rotate-12"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-pink-300 rounded-full">
              <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-pink-400 rounded-full">
                <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
                <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-2 right-1 w-3 h-6 bg-pink-300 rounded-full transform rotate-45"></div>
          </div>
        );
      case "soldier-pig":
        return (
          <div className="relative w-20 h-20">
            {/* Soldier Pig */}
            <div className="absolute inset-0 bg-pink-200 rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-400 rounded-t-full"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-10 bg-pink-300 rounded-full">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-pink-400 rounded-full">
                <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
                <div className="absolute top-0 right-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-green-600 rounded-lg"></div>
          </div>
        );
      case "masked-pig":
        return (
          <div className="relative w-20 h-20">
            {/* Masked Pig */}
            <div className="absolute inset-0 bg-pink-200 rounded-full"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-black rounded-full"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-pink-300 rounded-full">
              <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-pink-400 rounded-full">
              <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
              <div className="absolute top-0 right-0.5 w-0.5 h-0.5 bg-black rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-700 rounded-lg"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Many more coming soon...
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-8 text-white transition-all duration-300 hover:bg-opacity-20 hover:scale-105">
                <div className="w-32 h-32 bg-white bg-opacity-25 rounded-2xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                  {renderCharacter(feature.character)}
                </div>
                <div className="bg-purple-400 bg-opacity-80 text-purple-900 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  {feature.status}
                </div>
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;