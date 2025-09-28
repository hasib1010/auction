import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterComponent from '@/components/AuctionPage/FilterComponent';
import ProductCard from '@/components/AuctionPage/ProductCard';
import Sort from '@/components/AuctionPage/SortingComp';
import GridCard from '@/components/AuctionPage/GridViewCard';

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Main Content */}
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='px-5 py-7 md:px-24 md:pt-20 md:pb-96'>
          <div className='mb-16'>
            <h2 className='font-bold text-5xl'>Auction Lists</h2>
          </div>
          <div>
            <FilterComponent />
          </div>
        </div>
        <div className='px-5 md:px-0 md:mt-48 space-y-4 md:space-y-8'>
          <Sort />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          
        </div>
      </div>
      <Footer />
    </div>
  )
}
