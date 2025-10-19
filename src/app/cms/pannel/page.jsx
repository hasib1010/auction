'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@/contexts/UserContext';

export default function Pannel() {
  const { user, setUser } = useUser();
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('view');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/user/me",
          { withCredentials: true }
        );

        if (res.data?.success) {
          setUser(res.data.data);
        } else {
          console.warn('User not authenticated');
          setUser(null);
        }
      } catch (err) {
        console.error('Error fetching user:', err.message);
        if (err.response && err.response.status === 401) {
          window.location.href = '/login';
        } else {
          setUser(null);
        }
      }
    };

    fetchUser();
  }, [setUser]);

  useEffect(() => {
    if (user) {
      fetchCategories();
    }
  }, [user]);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:8000/api/category', { withCredentials: true });
      if (res.data.success) {
        setCategories(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching categories:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async () => {
    if (!newCategoryName.trim()) return;
    try {
      const res = await axios.post('http://localhost:8000/api/category', { name: newCategoryName }, { withCredentials: true });
      if (res.data.success) {
        setNewCategoryName('');
        fetchCategories();
      }
    } catch (err) {
      console.error('Error creating category:', err.message);
    }
  };

  if (!user) {
    return <p>Loading user...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome back, {user.firstName} {user.lastName}!</p>
      <p>Email: {user.email}</p>
      <p>Account Type: {user.accountType}</p>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Categories</h3>
          <p className="text-gray-600">Manage product categories</p>
          <button
            onClick={() => setActiveTab('view')}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm"
          >
            View All
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Auctions</h3>
          <p className="text-gray-600">Manage auctions</p>
          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm">
            View All
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Auction Items</h3>
          <p className="text-gray-600">Manage auction items</p>
          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm">
            View All
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Users</h3>
          <p className="text-gray-600">Manage users</p>
          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm">
            View All
          </button>
        </div>
      </div>

      {/* Categories Management Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Categories Management</h2>

        {/* Navigation Bar */}
        <nav className="mb-4">
          <button
            onClick={() => setActiveTab('view')}
            className={`mr-4 px-4 py-2 rounded ${activeTab === 'view' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            View Categories
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 rounded ${activeTab === 'create' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Create Category
          </button>
        </nav>

        {/* Content based on active tab */}
        {activeTab === 'view' && (
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">All Categories</h3>
            {loading ? (
              <p>Loading categories...</p>
            ) : (
              <ul className="list-disc pl-5">
                {categories.map((category) => (
                  <li key={category.id} className="mb-2">
                    <strong>{category.name}</strong> - Created: {new Date(category.createdAt).toLocaleDateString()} - Updated: {new Date(category.updatedAt).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {activeTab === 'create' && (
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Create New Category</h3>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Enter category name"
              className="border px-3 py-2 mr-2"
            />
            <button
              onClick={createCategory}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Create
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
