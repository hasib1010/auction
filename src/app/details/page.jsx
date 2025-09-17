import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const PagePath = ({ items, maxLength = 16 }) => {

    const truncateText = (text, maxLen) => {
        if (text.length <= maxLen) return text;
        return text.slice(0, maxLen) + '...';
    };

    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-600 py-4">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    {index > 0 && (
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    )}
                    {item.href && index < items.length - 1 ? (
                        <Link
                            href={item.href}
                            className="hover:text-blue-600 transition-colors duration-200"
                            title={item.label}
                        >
                            {truncateText(item.label, maxLength)}
                        </Link>
                    ) : (
                        <span className={index === items.length - 1 ? 'text-gray-900 font-medium' : ''} title={item.label}>
                            {truncateText(item.label, maxLength)}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default function page() {
    const pageWithPath = [
        { label: 'Home', href: '/' },
        { label: 'Auction lists', href: '/auction' },
        { label: 'Two Day Sale of Antiques & Coll...', href: '/' },
        { label: 'Round 2. 34t Diamond, H Color, VS2 C...' } // No href for current page
    ];
    return (
        <div>
            <Header />
            {/* product showcase with bidding details */}
            <div className='mt-9'>
                {/* pagination */}
                <PagePath items={pageWithPath} />
                <div></div>

            </div>
            {/* Products information */}
            <div>

            </div>
            {/* Similar section */}
            <div>

            </div>
            <Footer />
        </div>
    )
}
