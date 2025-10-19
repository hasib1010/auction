'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@/contexts/UserContext';

export default function CMSLayout({ children }) {
  const { user, fetchUser } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user && user.accountType !== 'Admin') {
      router.push('/');
    }
  }, [user, router]);

  const menuItems = [
    { name: 'Dashboard', href: '/cms/pannel', icon: '🏠' },
    { name: 'Categories', href: '/cms/pannel/categories', icon: '📁' },
    { name: 'Auctions', href: '/cms/pannel/auctions', icon: '🔨' },
    { name: 'Auction Items', href: '/cms/pannel/auction-items', icon: '📦' },
    { name: 'Users', href: '/cms/pannel/users', icon: '👥' },
    { name: 'Settings', href: '/cms/pannel/settings', icon: '⚙️' },
  ];

  if (!user) {
    return <div>Loading...</div>;
  }

  if (user.accountType !== 'Admin') {
    return <div>Access Denied</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className={`font-bold text-xl ${!sidebarOpen && 'hidden'}`}>Admin CMS</h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded hover:bg-gray-200"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 transition-colors ${
                pathname === item.href ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-700' : ''
              }`}
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.firstName} {user?.lastName}</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}