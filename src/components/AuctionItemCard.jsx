// components/AuctionItemCard.js
import React from 'react';
import { Eye, Heart, Clock } from 'lucide-react';

const AuctionItemCard = ({ item }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Live':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Upcoming':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
        <div className="w-40 h-40 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-200 group-hover:scale-105 transition-transform duration-300">
          {/* Product placeholder - replace with actual images */}
          <div className="text-center text-gray-400">
            <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
              📦
            </div>
            <span className="text-xs">Product Image</span>
          </div>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${getStatusColor(item.status)}`}>
            {item.status}
          </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-bold text-gray-900 text-base mb-3 line-clamp-2 leading-tight min-h-[3rem]">
          {item.title}
        </h3>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{item.date}</span>
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors flex-1 mr-3">
            Bid Now
          </button>
          
          <div className="flex space-x-2">
            <button className="p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-full transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionItemCard;