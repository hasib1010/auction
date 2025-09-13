import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterComponent from '@/components/AuctionPage/FilterComponent';

export default function page() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
        {/* Main Content */}
        <div className='px-5 py-7 md:px-24 md:pt-20 md:pb-96'>
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
