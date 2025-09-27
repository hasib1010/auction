import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePath from '@/components/PagePath';


export default function page() {
    const pageWithPath = [
        { label: 'Home', href: '/' },
        { label: 'Auction lists', href: '/auction' },
        { label: 'Two Day Sale of Antiques & Coll...', href: '/' },
        { label: 'Round 2. 34t Diamond, H Color, VS2 C...' }
    ];
    return (
        <div>
            <Header />
            {/* product showcase with bidding details */}
            <div className='mt-9'>
                {/* pagination */}
                <PagePath items={pageWithPath} />
                <div>
                    
                </div>

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
