'use client';

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

function Store() {
    const router = useRouter();
    return (
        <>
            <div className=" min-h-screen  flex flex-col bg-gradient-to-b from-yellow-50 to-yellow-100">
                <Header />

                {/* Main content */}
                <main className="flex-grow h-full flex flex-col items-center justify-center text-center px-6">
                    {/* Animated Pikachu / placeholder image */}
                    <motion.img
                        src="/pikachu.png"
                        alt="Store Coming Soon"
                        className="w-52 h-52 mb-6 drop-shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    {/* Title */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Store Coming Soon
                    </motion.h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 max-w-md mb-6">
                        Our auction platform is live, but the store is still under construction.
                        Stay tuned for exclusive items and deals launching soon!
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => alert('You will be notified!')}
                            className="rounded-2xl bg-amber-600 py-2 px-5 shadow-md cursor-pointer hover:bg-amber-300 transition"
                        >
                            Notify Me
                        </button>

                        <button
                            onClick={() => router.push('/')}
                            className="rounded-2xl bg-gray-700 text-white py-2 px-5 shadow-md cursor-pointer hover:bg-gray-500 transition">
                            Return Home
                        </button>

                    </div>
                </main>

            </div>

            <div className=" "><Footer /></div>
        </>
    )
}

export default Store
