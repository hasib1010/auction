// components/NewAuctionItems.js
import React from 'react';
import AuctionItemCard from './AuctionItemCard';

const NewAuctionItems = () => {
  const auctionItems = [
    {
      title: "LEGO Super Heroes The Batcave 6860",
      status: "Live",
      date: "17/5/2025, 2:00pm",
      image: "/images/lego-batcave.jpg" // Add actual image paths
    },
    {
      title: "Dungeons & Dragons - Starter Set: Heroes of The...",
      status: "Live", 
      date: "17/5/2025, 2:00pm",
      image: "/images/dnd-starter.jpg"
    },
    {
      title: "Marvel Super Hero Trainer - Interactive Fitness Toy for...",
      status: "Upcoming",
      date: "17/5/2025, 2:00pm",
      image: "/images/marvel-trainer.jpg"
    },
    {
      title: "LEGO Super Heroes The Batcave 6860",
      status: "Live",
      date: "17/8/2025, 2:00pm",
      image: "/images/lego-batcave-2.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            New Auctions Items
          </h2>
          <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-8 py-3 rounded-full text-sm font-semibold transition-colors flex items-center space-x-2 border border-purple-200">
            <span>View More</span>
            <span>→</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {auctionItems.map((item, index) => (
            <AuctionItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewAuctionItems;