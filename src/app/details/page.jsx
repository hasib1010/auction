import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PagePath from '@/components/PagePath';
import GridViewCard from '@/components/AuctionPage/GridViewCard';


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
            <div className='mt-9 mb-40'>
                {/* pagination */}
                <PagePath items={pageWithPath} />
                {/* image and details */}
                <div className='grid grid-cols-[540px_1fr] gap-8 mt-16 max-w-7xl mx-auto'>
                    {/* image */}
                    <div className='bg-[#f7f7f7] rounded-xl max-w-full object-contain flex justify-center items-center'>
                        <img src="/Rectangle 662.png" alt="Product image" />
                    </div>
                    {/* details */}
                    <div className='border border-[#E3E3E3] rounded-[10px] p-6 space-y-8'>
                        <div className='flex gap-10 items-center border-b border-[#E3E3E3] pb-5'>
                            <div className='relative'>
                                <input
                                    type="text"
                                    placeholder='Search by lot number'
                                    className='p-3 focus:outline-0 border border-[#e3e3e3] bg-[#f7f7f7] rounded-lg'
                                />
                                <div className='absolute right-3 top-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.9424 17.058L14.0306 13.1471C15.1644 11.7859 15.7298 10.04 15.6091 8.27263C15.4884 6.50524 14.691 4.85241 13.3828 3.65797C12.0745 2.46353 10.3561 1.81944 8.5851 1.85969C6.81406 1.89994 5.12671 2.62143 3.87407 3.87407C2.62143 5.12671 1.89994 6.81406 1.85969 8.5851C1.81944 10.3561 2.46353 12.0745 3.65797 13.3828C4.85241 14.691 6.50524 15.4884 8.27263 15.6091C10.04 15.7298 11.7859 15.1644 13.1471 14.0306L17.058 17.9424C17.1161 18.0004 17.185 18.0465 17.2609 18.0779C17.3367 18.1094 17.4181 18.1255 17.5002 18.1255C17.5823 18.1255 17.6636 18.1094 17.7395 18.0779C17.8154 18.0465 17.8843 18.0004 17.9424 17.9424C18.0004 17.8843 18.0465 17.8154 18.0779 17.7395C18.1094 17.6636 18.1255 17.5823 18.1255 17.5002C18.1255 17.4181 18.1094 17.3367 18.0779 17.2609C18.0465 17.185 18.0004 17.1161 17.9424 17.058ZM3.12518 8.75018C3.12518 7.63766 3.45508 6.55012 4.07316 5.6251C4.69124 4.70007 5.56975 3.9791 6.59758 3.55336C7.62542 3.12761 8.75642 3.01622 9.84756 3.23326C10.9387 3.4503 11.941 3.98603 12.7277 4.7727C13.5143 5.55937 14.0501 6.56165 14.2671 7.6528C14.4841 8.74394 14.3727 9.87494 13.947 10.9028C13.5213 11.9306 12.8003 12.8091 11.8753 13.4272C10.9502 14.0453 9.8627 14.3752 8.75018 14.3752C7.25884 14.3735 5.82906 13.7804 4.77453 12.7258C3.72 11.6713 3.12683 10.2415 3.12518 8.75018Z" fill="#6E6E6E" />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex gap-28'>
                                <div className='flex gap-2 pb-1 border-b border-[#0E0E0E]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M17.5 10.4999C17.5 10.6656 17.4342 10.8246 17.3169 10.9418C17.1997 11.059 17.0408 11.1249 16.875 11.1249H4.6336L9.19219 15.6827C9.25026 15.7407 9.29632 15.8097 9.32775 15.8855C9.35918 15.9614 9.37535 16.0427 9.37535 16.1249C9.37535 16.207 9.35918 16.2883 9.32775 16.3642C9.29632 16.44 9.25026 16.509 9.19219 16.567C9.13412 16.6251 9.06518 16.6712 8.98931 16.7026C8.91344 16.734 8.83213 16.7502 8.75 16.7502C8.66788 16.7502 8.58656 16.734 8.51069 16.7026C8.43482 16.6712 8.36588 16.6251 8.30782 16.567L2.68282 10.942C2.62471 10.884 2.57861 10.8151 2.54715 10.7392C2.5157 10.6633 2.49951 10.582 2.49951 10.4999C2.49951 10.4177 2.5157 10.3364 2.54715 10.2605C2.57861 10.1846 2.62471 10.1157 2.68282 10.0577L8.30782 4.43267C8.42509 4.3154 8.58415 4.24951 8.75 4.24951C8.91586 4.24951 9.07492 4.3154 9.19219 4.43267C9.30947 4.54995 9.37535 4.70901 9.37535 4.87486C9.37535 5.04071 9.30947 5.19977 9.19219 5.31705L4.6336 9.87486H16.875C17.0408 9.87486 17.1997 9.94071 17.3169 10.0579C17.4342 10.1751 17.5 10.3341 17.5 10.4999Z" fill="#4D4D4D" />
                                    </svg>
                                    <div>
                                        <h4>Previous : Lot 3A</h4>
                                    </div>
                                </div>
                                <div className='flex gap-2 pb-1 border-b border-[#0E0E0E]'>
                                    <div>
                                        <h4>Next : Lot Z5</h4>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M2.5 10.5001C2.5 10.3344 2.56584 10.1754 2.68305 10.0582C2.80027 9.94099 2.95924 9.87514 3.125 9.87514L15.3664 9.87514L10.8078 5.31733C10.7497 5.25926 10.7037 5.19032 10.6723 5.11445C10.6408 5.03858 10.6246 4.95726 10.6246 4.87514C10.6246 4.79302 10.6408 4.7117 10.6723 4.63583C10.7037 4.55996 10.7497 4.49102 10.8078 4.43295C10.8659 4.37488 10.9348 4.32882 11.0107 4.29739C11.0866 4.26597 11.1679 4.24979 11.25 4.24979C11.3321 4.24979 11.4134 4.26597 11.4893 4.29739C11.5652 4.32882 11.6341 4.37488 11.6922 4.43295L17.3172 10.058C17.3753 10.116 17.4214 10.1849 17.4528 10.2608C17.4843 10.3367 17.5005 10.418 17.5005 10.5001C17.5005 10.5823 17.4843 10.6636 17.4528 10.7395C17.4214 10.8154 17.3753 10.8843 17.3172 10.9423L11.6922 16.5673C11.5749 16.6846 11.4158 16.7505 11.25 16.7505C11.0841 16.7505 10.9251 16.6846 10.8078 16.5673C10.6905 16.4501 10.6246 16.291 10.6246 16.1251C10.6246 15.9593 10.6905 15.8002 10.8078 15.683L15.3664 11.1251L3.125 11.1251C2.95924 11.1251 2.80027 11.0593 2.68305 10.9421C2.56584 10.8249 2.5 10.6659 2.5 10.5001Z" fill="#6E6E6E" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className='px-5 py-1 rounded-full border text-lg'>Lot 1A</div>
                            <div className='flex text-[16px]'>
                                <h4 className='text-[#6E6E6E]'>Bidding Ends: &nbsp;</h4>
                                <h4 className='font-bold'>25/08/25</h4>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-4xl text-[#0E0E0E] font-bold'>
                                Round 2.34t Diamond, H Color, VS2 Clarity, IGI Certified
                            </h2>
                        </div>
                        <div className='flex gap-8'>
                            <div className='relative w-96'>
                                <input
                                    type="text"
                                    placeholder='Enter Your Bid'
                                    className='py-4 px-5 rounded-full border border-[#9F13FB] focus:outline-0 w-full' />
                                <button className='bg-linear-to-br from-[#E95AFF] to-[#9F13FB] rounded-full px-8 py-3 absolute top-1.5 right-2 text-white'>Place Bid</button>
                            </div>
                            <div className='text-[#6E6E6E]'>
                                <h2>Current Bid:&nbsp;
                                    <span className='text-[#0E0E0E]'>£ 1600</span>
                                    &nbsp;&nbsp;
                                    <span className='text-[#0E0E0E] underline'>4 bids</span>
                                </h2>
                                <h2>(Bid 700 GBP or more)</h2>
                            </div>
                        </div>
                        <div className='text-[#6E6E6E]'>
                            <h2>Auctioneer's estimate:&nbsp;
                                <span className='text-[#0E0E0E] font-bold'>£ 1000 - £ 1200</span>
                            </h2>
                            <h2>Additional fees apply:&nbsp;
                                <span className='text-[#0E0E0E] font-bold'>29.94% Inc.VAT/sales tax</span>
                            </h2>
                        </div>
                        <div className='w-full'>
                            <button className='px-5 py-3 border border-[#0E0E0E] text-[#0E0E0E] font-semibold rounded-full w-full'>Resgister to Bid Online</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Info tab buttons (undecorated, flex) */}
            <div className='max-w-7xl mx-auto mb-20'>
                <div className='flex gap-3 text-[#6E6E6E] border-b border-[#E3E3E3]'>
                    <button className='p-4 font-semibold focus:border-b-2 focus:border-[#0E0E0E] focus:text-[#0E0E0E]'>Product Description</button>
                    <button className='p-4 font-semibold focus:border-b-2 focus:border-[#0E0E0E] focus:text-[#0E0E0E]'>Payment Details</button>
                    <button className='p-4 font-semibold focus:border-b-2 focus:border-[#0E0E0E] focus:text-[#0E0E0E]'>Auction Details</button>
                    <button className='p-4 font-semibold focus:border-b-2 focus:border-[#0E0E0E] focus:text-[#0E0E0E]'>Shipping Options</button>
                </div>
                <div className='mt-8 font-medium text-lg'>
                    <h2>Round 2.34ct Diamond, H Colour, VS2 Clarity, IGI Certified</h2>
                    <div className='space-y-1.5 mt-5'>
                        <h4>Carat Weight: 2.34ct</h4>
                        <h4>Shape: Round</h4>
                        <h4>Colour Grade: H</h4>
                        <h4>Clarity Grade: VS2</h4>
                        <h4>Fluorescence: None</h4>
                        <h4>Diamond Type: Lab</h4>
                        <h4>Certification: IGI</h4>
                        <h4>Measurements: 8.55 - 8.58 x 5.27</h4>
                        <h4>VAT Status: Plus VAT</h4>
                    </div>
                </div>
            </div>
            {/* Similar section */}
            <div className='bg-[#F2F0E9] pt-20 pb-80'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='font-bold text-2xl text-[#0E0E0E] mb-8'>Similar Items Available Now</h2>
                    <div className='grid grid-cols-5 gap-y-6'>
                        <GridViewCard />
                        <GridViewCard />
                        <GridViewCard />
                        <GridViewCard />
                        <GridViewCard />
                        <GridViewCard />
                        <GridViewCard />
                        <GridViewCard />
                        <GridViewCard />
                        <GridViewCard />
                    </div>
                </div>
            </div>
            <div>

            </div>
            <Footer />
        </div>
    )
}
