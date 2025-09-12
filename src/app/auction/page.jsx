import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterComponent from '@/components/AuctionPage/FilterComponent';

export default function page() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
        {/* Main Content */}
        <div className='px-24 pt-20 pb-96'>
            <div className='mb-16'>
                <h2 className='font-bold text-5xl'>Auction Lists</h2>
            </div>
            <div>
                <FilterComponent />
            </div>
        </div>
        <Footer />
    </div>
  )
}
