'use client'
import React, { useState } from 'react'

export default function GridViewCard() {
    const [bidAmount, setBidAmount] = useState('');

    return (
        <div className='border border-[#E3E3E3] rounded-[20px] p-[6px] max-w-52 flex flex-col mx-auto justify-center gap-2.5 group'>
            <div className='bg-[#f7f7f7] rounded-[14px] relative'>
                <img src="/Rectangle 662 (3).png" alt="Product Image" />
                <div className='absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity  max-w-52'>
                    <div>
                        <input
                            type="number"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                            placeholder="Enter your bid"
                            className='flex-1 px-2 py-2 text-sm rounded-full border border-[#9F13FB] bg-white focus:outline-0 relative'
                        />
                        <button className='px-5 text-white py-1 rounded-full bg-gradient-to-br from-[#E95AFF] to-[#9F13FB] absolute top-3 right-1'>
                            Bid
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-4 pb-5'>
                <h4 className='text-[#4D4D4D] text-sm font-medium mb-4'>
                    Lot 2D
                </h4>
                <h2 className='text-[#0E0E0E] text-xl font-bold mb-4 text-ellipsis overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]'>
                    Round 2.34t Diamond, H Color, VS2 Clarity, IGI Certified
                </h2>
                <h3 className='text-[#6E6E6E] text-sm font-medium'>
                    Opening Bid: <span className='text-[#0E0E0E] font-bold ml-1'>$ 1600</span>
                </h3>
                <h3 className='text-[#6E6E6E] text-sm font-medium'>
                    Bidding Ends: <span className='text-[#0E0E0E] font-bold ml-1'>25/08/25</span>
                </h3>
            </div>
        </div>
    )
}
