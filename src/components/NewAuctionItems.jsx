'use client';

import { useState, useCallback, memo, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ChevronLeft, ChevronRight, Eye, Calendar } from 'lucide-react';
import Link from 'next/link';

// Memoized auction card component for better performance
const AuctionCard = memo(({ item }) => {
  const parseDate = (str) => {
    if (!str) return null;
    const match = str.match(/(\d+)\w*\s+([A-Za-z]+)\s+(\d{4}),\s+(\d+):(\d+)(AM|PM)/);
    if (!match) return null;

    const [_, day, month, year, hour, minute, meridiem] = match;
    let hours = parseInt(hour);
    if (meridiem === 'PM' && hours !== 12) hours += 12;
    if (meridiem === 'AM' && hours === 12) hours = 0;

    const dateStr = `${month} ${day}, ${year} ${hours.toString().padStart(2, '0')}:${minute}:00`;
    return new Date(dateStr);
  };

  const endDate = parseDate(item.biddingEnds);
  const now = new Date();
  const isToday = endDate?.toDateString() === now.toDateString();
  const isPast = endDate && endDate < now && !isToday;

  return (
    <div className="px-1 sm:px-2 h-full">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-1 h-full transform hover:-translate-y-1">
        {/* Image with lazy loading */}
        <div className="aspect-square rounded-[14px] bg-gray-100 overflow-hidden">
          <img
            src={item.imagePath}
            alt={item.imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Content */}
        <div className="p-2 sm:p-3 lg:p-4">
          <h3 className="font-semibold text-gray-700 text-xs sm:text-sm lg:text-base xl:text-lg mb-2 line-clamp-2 leading-tight min-h-[2rem] sm:min-h-[2.5rem] lg:min-h-[3rem]">
            {item.title}
          </h3>

          <div className="flex flex-col gap-2 mb-3">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span>
                {
                  !endDate ? (
                    <div className="text-gray-500">Invalid date</div>
                  ) : isToday ? (
                    <div className='flex items-center justify-center bg-[#FEF8ED] border border-[#F6BC48] text-[#DB9914] text-xs rounded-full p-1 w-20'>
                      <h2>Ends Today</h2>
                    </div>
                  ) : isPast ? (
                    <div className='flex items-center justify-center bg-[#F7F7F7] border border-[#E3E3E3] text-[#4D4D4D] text-xs rounded-full p-1 w-14'>

                      <h2>Closed</h2>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center bg-[#feeded] border border-[#FA9A9C] text-[#F6484B] text-xs rounded-full p-1 w-10'>
                      <h2>Live</h2>
                    </div>
                  )
                }
              </span>
              <span className="text-xs text-gray-600 font-medium">
                {item.biddingEnds}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className={`flex-1 py-2 px-2 sm:px-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${isPast
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-br from-[#e253ff] to-[#9f14fc] text-white hover:shadow-md active:scale-95'
                }`}
              disabled={isPast}
            >
              {isPast ? 'Auction Closed' : 'Bid Now'}
            </button>
            <Link href={`/auction/${item.lotNumber}/details`}>
              <button className="flex items-center justify-center bg-[#F7F7F7] rounded-full p-3 border border-[#E3E3E3] hover:border-purple-600 text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 hover:scale-110">
                <Eye size={12} className="sm:w-4 sm:h-4" />
              </button>
            </Link>
            <button className="flex items-center justify-center bg-[#F7F7F7] rounded-full p-3 border border-[#E3E3E3] hover:border-purple-600 text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 hover:scale-110">
              <Calendar size={12} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

AuctionCard.displayName = 'AuctionCard';

const AuctionItemsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error loading data.json:', err));
  }, []);

  // const auctionItems = [
  //   { id: 1, title: "LEGO Super Heroes The Batcave 6860", image: "Rectangle 662.png", status: "Live", endTime: "17/5/2025, 2:00pm" },
  //   { id: 2, title: "Dungeons & Dragons - Starter Set: Heroes of The...", image: "Rectangle 662 (3).png", status: "Live", endTime: "17/5/2025, 2:00pm" },
  //   { id: 3, title: "Marvel Super Hero Trainer - Interactive Fitness Toy for...", image: "Rectangle 662 (1).png", status: "Upcoming", endTime: "17/5/2025, 2:00pm" },
  //   { id: 4, title: "LEGO Super Heroes The Batcave 6860", image: "Rectangle 662.png", status: "Live", endTime: "17/5/2025, 2:00pm" },
  //   { id: 5, title: "Pokemon Trading Cards Collection", image: "Rectangle 662 (2).png", status: "Live", endTime: "18/5/2025, 3:00pm" },
  //   { id: 6, title: "Vintage Action Figures Set", image: "Rectangle 662.png", status: "Upcoming", endTime: "19/5/2025, 1:00pm" },
  //   { id: 7, title: "Board Game Collection", image: "Rectangle 662.png", status: "Live", endTime: "20/5/2025, 4:00pm" },
  //   { id: 8, title: "Comic Books Bundle", image: "Rectangle 662.png", status: "Upcoming", endTime: "21/5/2025, 2:30pm" }
  // ];

  // Optimized responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 4,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 4,
      slidesToSlide: 2
    },
    laptop: {
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
      breakpoint: { max: 640, min: 480 },
      items: 2,
      slidesToSlide: 1
    },
    smallMobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  // Memoized custom arrow components
  const CustomLeftArrow = memo(({ onClick, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <button
        onClick={onClick}
        disabled={currentSlide === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full shadow-md flex items-center justify-center transition-all duration-200 -translate-x-3 sm:-translate-x-4 lg:-translate-x-5 ${currentSlide === 0
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-lg hover:scale-105 active:scale-95'
          }`}
        aria-label="Previous items"
      >
        <ChevronLeft size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>
    );
  });

  const CustomRightArrow = memo(({ onClick, ...rest }) => {
    const { carouselState: { currentSlide, totalItems, deviceType } } = rest;
    const itemsToShow = responsive[deviceType]?.items || 4;
    const isAtEnd = currentSlide >= totalItems - itemsToShow;

    return (
      <button
        onClick={onClick}
        disabled={isAtEnd}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full shadow-md flex items-center justify-center transition-all duration-200 translate-x-3 sm:translate-x-4 lg:translate-x-5 ${isAtEnd
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-lg hover:scale-105 active:scale-95'
          }`}
        aria-label="Next items"
      >
        <ChevronRight size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>
    );
  });

  CustomLeftArrow.displayName = 'CustomLeftArrow';
  CustomRightArrow.displayName = 'CustomRightArrow';

  // Memoized view more button
  const ViewMoreButton = memo(() => (
    <Link href={"/auction"} className="group">
      <button className="flex items-center gap-2 px-4 mb-10 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border border-purple-600 rounded-full hover:bg-purple-50 transition-all duration-200 hover:shadow-md active:scale-95 shrink-0">
        <span className="font-semibold text-sm sm:text-base lg:text-lg text-purple-600">View More</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 24 25" fill="none" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1">
          <path d="M17.0306 12.804L9.53055 20.304C9.46087 20.3737 9.37815 20.4289 9.2871 20.4667C9.19606 20.5044 9.09847 20.5238 8.99993 20.5238C8.90138 20.5238 8.8038 20.5044 8.71276 20.4667C8.62171 20.4289 8.53899 20.3737 8.4693 20.304C8.39962 20.2343 8.34435 20.1516 8.30663 20.0605C8.26892 19.9695 8.24951 19.8719 8.24951 19.7734C8.24951 19.6748 8.26892 19.5772 8.30663 19.4862C8.34435 19.3952 8.39962 19.3124 8.4693 19.2427L15.4396 12.2734L8.4693 5.30399C8.32857 5.16326 8.24951 4.97239 8.24951 4.77337C8.24951 4.57434 8.32857 4.38347 8.4693 4.24274C8.61003 4.10201 8.80091 4.02295 8.99993 4.02295C9.19895 4.02295 9.38982 4.10201 9.53055 4.24274L17.0306 11.7427C17.1003 11.8124 17.1556 11.8951 17.1933 11.9862C17.2311 12.0772 17.2505 12.1748 17.2505 12.2734C17.2505 12.3719 17.2311 12.4695 17.1933 12.5606C17.1556 12.6516 17.1003 12.7343 17.0306 12.804Z" fill="#9F13FB" />
        </svg>
      </button>
    </Link>
  ));

  ViewMoreButton.displayName = 'ViewMoreButton';

  const handleBeforeChange = useCallback((nextSlide) => {
    setCurrentSlide(nextSlide);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-amber-50 pb-0 py-10 md:pb-20 rounded-b-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight">
            New Auction Items
          </h2>
          <div className="hidden md:block">
            <ViewMoreButton />
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative auction-carousel">
          <Carousel
            responsive={responsive}
            infinite={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            beforeChange={handleBeforeChange}
            itemClass="px-0"
            containerClass="mx-4 sm:mx-6 lg:mx-8"
            removeArrowOnDeviceType={[]}
            swipeable={true}
            draggable={true}
            keyBoardControl={true}
            customTransition="transform 250ms ease-out"
            transitionDuration={250}
            renderButtonGroupOutside={false}
            partialVisible={false}
            centerMode={false}
            shouldResetAutoplay={false}
            rewind={false}
            rewindWithAnimation={false}
          >
            {
              data && data.length > 0 ? (
                data.slice(0, 10).map(item => (
                  <AuctionCard key={item.lotNumber} item={item} />
                ))
              ) : (
                <p>No similar items found.</p>
              )
            }
          </Carousel>
        </div>

        {/* Mobile View More Button */}
        <div className="md:hidden mt-6 flex justify-center">
          <ViewMoreButton />
        </div>
      </div>

      {/* Optimized CSS with better performance */}
      <style jsx global>{`
        .auction-carousel {
          will-change: transform;
        }
        
        .auction-carousel .react-multi-carousel-list {
          padding: 0 !important;
          overflow: visible !important;
        }
        
        .auction-carousel .react-multi-carousel-track {
          display: flex !important;
          gap: 0.25rem;
          will-change: transform;
        }
        
        @media (min-width: 640px) {
          .auction-carousel .react-multi-carousel-track {
            gap: 0.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .auction-carousel .react-multi-carousel-track {
            gap: 0.75rem;
          }
        }
        
        .auction-carousel .react-multi-carousel-item {
          display: flex !important;
          height: 100% !important;
        }
        
        .auction-carousel .react-multiple-carousel__arrow {
          z-index: 20 !important;
          position: absolute !important;
        }
        
        .auction-carousel .react-multiple-carousel__arrow--left {
          left: -1rem !important;
        }
        
        .auction-carousel .react-multiple-carousel__arrow--right {
          right: -1rem !important;
        }
        
        @media (min-width: 640px) {
          .auction-carousel .react-multiple-carousel__arrow--left {
            left: -1.5rem !important;
          }
          
          .auction-carousel .react-multiple-carousel__arrow--right {
            right: -1.5rem !important;
          }
        }
        
        @media (min-width: 1024px) {
          .auction-carousel .react-multiple-carousel__arrow--left {
            left: -2rem !important;
          }
          
          .auction-carousel .react-multiple-carousel__arrow--right {
            right: -2rem !important;
          }
        }

        /* Performance optimizations */
        .auction-carousel * {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000px;
          perspective: 1000px;
        }
        
        .auction-carousel img {
          transform: translateZ(0);
          will-change: transform;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .auction-carousel * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AuctionItemsCarousel;