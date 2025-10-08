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
      <div className='flex flex-col md:flex-row gap-5 mb-8'>
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
            <div className="flex justify-end items-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.78 5.21983C11.9205 5.36045 11.9994 5.55108 11.9994 5.74983C11.9994 5.94858 11.9205 6.1392 11.78 6.27983L8.06001 9.99983L11.78 13.7198C11.8537 13.7885 11.9128 13.8713 11.9538 13.9633C11.9948 14.0553 12.0168 14.1546 12.0186 14.2553C12.0204 14.356 12.0019 14.456 11.9641 14.5494C11.9264 14.6428 11.8703 14.7276 11.799 14.7989C11.7278 14.8701 11.643 14.9262 11.5496 14.964C11.4562 15.0017 11.3562 15.0202 11.2555 15.0184C11.1548 15.0166 11.0555 14.9946 10.9635 14.9536C10.8715 14.9126 10.7887 14.8535 10.72 14.7798L6.47001 10.5298C6.32956 10.3892 6.25067 10.1986 6.25067 9.99983C6.25067 9.80108 6.32956 9.61045 6.47001 9.46983L10.72 5.21983C10.8606 5.07938 11.0513 5.00049 11.25 5.00049C11.4488 5.00049 11.6394 5.07938 11.78 5.21983Z" fill="#4D4D4D" />
                </svg>
              </button>

              <span className="font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.21995 5.21983C8.36058 5.07938 8.5512 5.00049 8.74995 5.00049C8.9487 5.00049 9.13932 5.07938 9.27995 5.21983L13.53 9.46983C13.6704 9.61045 13.7493 9.80108 13.7493 9.99983C13.7493 10.1986 13.6704 10.3892 13.53 10.5298L9.27995 14.7798C9.13778 14.9123 8.94973 14.9844 8.75543 14.981C8.56113 14.9776 8.37574 14.8989 8.23833 14.7614C8.10092 14.624 8.0222 14.4387 8.01877 14.2444C8.01535 14.05 8.08747 13.862 8.21995 13.7198L11.9399 9.99983L8.21995 6.27983C8.0795 6.1392 8.00061 5.94858 8.00061 5.74983C8.00061 5.55108 8.0795 5.36045 8.21995 5.21983Z" fill="#4D4D4D" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
