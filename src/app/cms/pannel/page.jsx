'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pannel() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 sm:space-y-10">
      {/* Fun header */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center drop-shadow-lg animate-pulse px-4">
        Welcome to the Admin Galaxy 🚀
      </h1>

      {/* Witty subtext */}
      <p className="text-lg sm:text-xl text-white/80 text-center max-w-xl animate-bounce px-4">
        Here you can rule the universe… or at least keep tabs on your users and auctions. 🌌
      </p>

      {/* Funny cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl px-4 sm:px-0">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:scale-105 transition-all duration-500 animate-bounce-slow">
          <h2 className="text-lg sm:text-xl font-bold text-purple-600 mb-2">👑 Users</h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Check on your minions… I mean, users. They are plotting something.</p>
          <Link href="/cms/pannel/users">
            <Button variant="outline" className="w-full text-sm sm:text-base">
              Manage Users
            </Button>
          </Link>
        </div>
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:scale-105 transition-all duration-500 animate-spin-slow">
          <h2 className="text-lg sm:text-xl font-bold text-pink-600 mb-2">💰 Auctions</h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Keep those bids coming! Someone's trying to get rich fast.</p>
          <Link href="/cms/pannel/auctions">
            <Button variant="outline" className="w-full text-sm sm:text-base">
              Manage Auctions
            </Button>
          </Link>
        </div>
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:scale-105 transition-all duration-500 animate-ping-slow sm:col-span-2 lg:col-span-1">
          <h2 className="text-lg sm:text-xl font-bold text-yellow-600 mb-2">📈 Analytics</h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Charts, graphs… and occasional magic. Watch your empire grow!</p>
          <Button variant="outline" className="w-full text-sm sm:text-base" disabled>
            Coming Soon
          </Button>
        </div>
      </div>

      {/* Footer fun */}
      <p className="text-white/70 text-center mt-8 sm:mt-12 animate-pulse text-sm sm:text-base px-4">
        P.S. Don't press all the buttons at once. We haven't fixed the space-time continuum yet. 🛸
      </p>

      {/* Tailwind animations */}
      <style jsx>{`
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }

        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }

        @keyframes ping-slow { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(1.3); opacity: 0; } }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </div>
  );
}
