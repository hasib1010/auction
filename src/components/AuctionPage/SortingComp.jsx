'use client';

import React, { useEffect, useState } from 'react'

export default function SortingComp() {

    const [sort, setSort] = useState("");
    const [value, setValue] = useState("");
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-toggle-right-icon lucide-toggle-right"><circle cx="15" cy="12" r="3" /><rect width="20" height="14" x="2" y="5" rx="7" /></svg>
                    <h2>Now Live</h2>
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
