'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ChevronLeft, ChevronRight, Eye, Calendar } from 'lucide-react';

const AuctionItemsCarousel = () => {
  const auctionItems = [
    { id: 1, title: "LEGO Super Heroes The Batcave 6860", image: "/Rectangle 662 (1).png", status: "Live", endTime: "17/5/2025, 2:00pm" },
    { id: 2, title: "Dungeons & Dragons - Starter Set: Heroes of The...", image: "/Rectangle 662 (1).png", status: "Live", endTime: "17/5/2025, 2:00pm" },
    { id: 3, title: "Marvel Super Hero Trainer - Interactive Fitness Toy for...", image: "/Rectangle 662 (3).png", status: "Upcoming", endTime: "17/5/2025, 2:00pm" },
    { id: 4, title: "LEGO Super Heroes The Batcave 6860", image: "/Rectangle 662.png", status: "Live", endTime: "17/5/2025, 2:00pm" },
    { id: 5, title: "Pokemon Trading Cards Collection", image: "/Rectangle 662.png", status: "Live", endTime: "18/5/2025, 3:00pm" },
    { id: 6, title: "Vintage Action Figures Set", image: "/Rectangle 662.png", status: "Upcoming", endTime: "19/5/2025, 1:00pm" },
    { id: 7, title: "Board Game Collection", image: "/Rectangle 662.png", status: "Live", endTime: "20/5/2025, 4:00pm" },
    { id: 8, title: "Comic Books Bundle", image: "/Rectangle 662.png", status: "Upcoming", endTime: "21/5/2025, 2:30pm" }
  ];

  // Responsive breakpoints for react-multi-carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  // Custom arrow components
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const { onMove, carouselState: { currentSlide, deviceType } } = rest;
    return (
      <button
        onClick={() => onClick()}
        disabled={currentSlide === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg flex items-center justify-center transition-all -translate-x-4 sm:-translate-x-5 ${
          currentSlide === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-xl'
        }`}
      >
        <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const { onMove, carouselState: { currentSlide, totalItems, deviceType } } = rest;
    const itemsToShow = responsive[deviceType]?.items || 4;
    const isAtEnd = currentSlide >= totalItems - itemsToShow;
    
    return (
      <button
        onClick={() => onClick()}
        disabled={isAtEnd}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg flex items-center justify-center transition-all translate-x-4 sm:translate-x-5 ${
          isAtEnd
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-xl'
        }`}
      >
        <ChevronRight size={16} className="sm:w-5 sm:h-5" />
      </button>
    );
  };

  // Custom dots component
  const CustomDot = ({ onClick, active, index, carouselState }) => {
    return (
      <button
        onClick={() => onClick()}
        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 mx-1 ${
          active
            ? 'bg-purple-600 w-6 sm:w-8'
            : 'bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2'
        }`}
      />
    );
  };

  const AuctionCard = ({ item }) => (
    <div className="px-2 h-full">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-1 h-full">
        {/* Image */}
        <div className="aspect-square rounded-[14px] bg-[#F7F7F7] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <h3 className="font-semibold text-[#4D4D4D] text-sm sm:text-base lg:text-lg xl:text-xl mb-2 sm:mb-3 line-clamp-2 leading-tight min-h-[2.5rem] sm:min-h-[3rem]">
            {item.title}
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
            <span
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit ${
                item.status === 'Live' 
                  ? 'bg-[#F6484B12] text-[#FF4848]' 
                  : 'bg-[#F7F3E4] text-[#4D4D4D] border-[#E8DAA7] border'
              }`}
            >
              {item.status}
            </span>
            <span className="text-xs sm:text-sm text-[#1C1724B2] font-medium">
              {item.endTime}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                item.status === 'Live'
                  ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md'
                  : 'bg-gray-100 text-gray-500 cursor-not-allowed'
              }`}
              disabled={item.status !== 'Live'}
            >
              {item.status === 'Live' ? 'Bid Now' : 'Coming Soon'}
            </button>
            <button className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
              <Eye size={14} className="sm:w-4 sm:h-4" />
            </button>
            <button className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
              <Calendar size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#F2F0E9]  px-4 sm:px-6 lg:px-8 xl:px-[120px] py-10 lg:py-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 lg:mb-[120px] gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            New Auction Items
          </h2>
          <button className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-[#9F13FB] rounded-full hover:bg-purple-200 transition-colors shrink-0">
            <span className="font-semibold text-base sm:text-lg text-[#9F13FB]">View More</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 24 25" fill="none" className="sm:w-6 sm:h-6">
              <path d="M17.0306 12.804L9.53055 20.304C9.46087 20.3737 9.37815 20.4289 9.2871 20.4667C9.19606 20.5044 9.09847 20.5238 8.99993 20.5238C8.90138 20.5238 8.8038 20.5044 8.71276 20.4667C8.62171 20.4289 8.53899 20.3737 8.4693 20.304C8.39962 20.2343 8.34435 20.1516 8.30663 20.0605C8.26892 19.9695 8.24951 19.8719 8.24951 19.7734C8.24951 19.6748 8.26892 19.5772 8.30663 19.4862C8.34435 19.3952 8.39962 19.3124 8.4693 19.2427L15.4396 12.2734L8.4693 5.30399C8.32857 5.16326 8.24951 4.97239 8.24951 4.77337C8.24951 4.57434 8.32857 4.38347 8.4693 4.24274C8.61003 4.10201 8.80091 4.02295 8.99993 4.02295C9.19895 4.02295 9.38982 4.10201 9.53055 4.24274L17.0306 11.7427C17.1003 11.8124 17.1556 11.8951 17.1933 11.9862C17.2311 12.0772 17.2505 12.1748 17.2505 12.2734C17.2505 12.3719 17.2311 12.4695 17.1933 12.5606C17.1556 12.6516 17.1003 12.7343 17.0306 12.804Z" fill="#9F13FB" />
            </svg>
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative auction-carousel">
          <Carousel
            responsive={responsive}
            infinite={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            showDots={true}
            customDot={<CustomDot />}
            dotListClass="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8"
            itemClass="carousel-item-padding-40-px"
            containerClass="mx-6 sm:mx-8"
            sliderClass="gap-2 sm:gap-3 lg:gap-4"
            removeArrowOnDeviceType={[]}
            swipeable={true}
            draggable={true}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
          >
            {auctionItems.map((item) => (
              <AuctionCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>

      {/* Custom CSS to override default styles */}
      <style jsx global>{`
        .auction-carousel {
          margin: 0 1.5rem;
        }
        
        @media (min-width: 640px) {
          .auction-carousel {
            margin: 0 2rem;
          }
        }
        
        .auction-carousel .react-multi-carousel-list {
          padding: 0 !important;
          overflow: visible !important;
        }
        
        .auction-carousel .react-multi-carousel-track {
          gap: 0.5rem;
        }
        
        @media (min-width: 640px) {
          .auction-carousel .react-multi-carousel-track {
            gap: 0.75rem;
          }
        }
        
        @media (min-width: 1024px) {
          .auction-carousel .react-multi-carousel-track {
            gap: 1rem;
          }
        }
        
        .auction-carousel .react-multi-carousel-item {
          display: flex !important;
        }
        
        .auction-carousel .react-multi-carousel-dot-list {
          position: static !important;
          bottom: auto !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        
        .auction-carousel .react-multi-carousel-dot {
          border: none !important;
          background: transparent !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        
        .auction-carousel .react-multiple-carousel__arrow {
          z-index: 1000 !important;
        }
        
        .auction-carousel .react-multiple-carousel__arrow--left {
          left: -2rem !important;
        }
        
        .auction-carousel .react-multiple-carousel__arrow--right {
          right: -2rem !important;
        }
        
        @media (min-width: 640px) {
          .auction-carousel .react-multiple-carousel__arrow--left {
            left: -2.5rem !important;
          }
          
          .auction-carousel .react-multiple-carousel__arrow--right {
            right: -2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AuctionItemsCarousel;