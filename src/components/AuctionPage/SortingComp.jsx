'use client';

import React, { useEffect, useState } from 'react'

export default function SortingComp() {

    const [sort, setSort] = useState("");
    const [value, setValue] = useState("");
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const filterData = {
            sort: sort,
            value: value
        };
        console.log("Selected Filters:", filterData);
    }, [sort, value]);

    const sortBy = [
        "Most Lot",
        "Less Lot",
        "Ended"
    ];
    const byValue = [
        "Highest",
        "Lowest"
    ];
    return (
        <div className='flex flex-col md:flex-row md:justify-between gap-5 text-[#4D4D4D] text-lg font-semibold'>
            <div className='flex gap-5 items-center'>
                <h2>530 auctions</h2>
                <div className='flex gap-2 items-center'>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={isLive}
                            onChange={() => setIsLive(!isLive)}
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer 
                            peer-checked:after:translate-x-full peer-checked:after:border-white 
                            after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
                            after:bg-white after:border-gray-300 after:border after:rounded-full 
                            after:h-5 after:w-5 after:transition-all 
                            peer-checked:bg-[#9f13fb]">
                        </div>
                    </label>
                    <h2 className={isLive ? 'text-[#0E0E0E]' : ''}>Now Live</h2>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='flex gap-1 items-center'>
                    <h2>Sort by:</h2>
                    <select value={sort} onChange={e => setSort(e.target.value)} className='text-[#0E0E0E]'>
                        {sortBy.map((sort) => (
                            <option key={sort} value={sort}>
                                {sort}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex gap-1 items-center'>
                    <h2>By Value:</h2>
                    <select value={value} onChange={e => setValue(e.target.value)} className='text-[#0E0E0E]'>
                        {byValue.map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
