'use client';
import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterComponent from '@/components/AuctionPage/FilterComponent';
import ProductCard from '@/components/AuctionPage/ProductCard';
import Sort from '@/components/AuctionPage/SortingComp';

export default function Page() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error loading data.json:', err));
  }, []);

  // Calculate pagination
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data ? data.slice(startIndex, startIndex + itemsPerPage) : [];

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Main Content */}
      <div className='flex flex-col md:flex-row gap-5 mb-64'>
        <div className='px-5 py-7 md:px-24 md:pt-20 md:pb-96'>
          <div className='mb-16'>
            <h2 className='font-bold text-5xl'>Auction Lists</h2>
          </div>
          <div>
            <FilterComponent />
          </div>
        </div>

        {/* Product Section */}
        <div className='px-5 md:px-0 md:mt-48 space-y-4 md:space-y-8 w-full'>
          <Sort />
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <ProductCard key={item.lotNumber} item={item} />
            ))
          ) : (
            <p>No auction items available.</p>
          )}

          {/* Pagination Controls */}
          {data && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                Previous
              </button>

              <span className="font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
