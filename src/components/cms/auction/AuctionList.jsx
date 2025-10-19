'use client';

import { useState } from 'react';

export default function AuctionList({ auctions, onEdit, onDelete, loading }) {
  const [deleteLoading, setDeleteLoading] = useState(null);

  const handleDelete = async (auctionId) => {
    setDeleteLoading(auctionId);
    try {
      await onDelete(auctionId);
    } catch (error) {
      console.error('Error deleting auction:', error);
    } finally {
      setDeleteLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">All Auctions</h3>
      {auctions.length === 0 ? (
        <p className="text-gray-500">No auctions found.</p>
      ) : (
        <div className="space-y-4">
          {auctions.map((auction) => (
            <div key={auction.id} className="border border-gray-200 rounded-md p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-lg">{auction.name}</h4>
                  <p className="text-gray-600 mt-1">{auction.description}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <p><strong>Location:</strong> {auction.location}</p>
                    <p><strong>Status:</strong> <span className={`px-2 py-1 rounded text-xs ${
                      auction.status === 'Active' ? 'bg-green-100 text-green-800' :
                      auction.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>{auction.status}</span></p>
                    <p><strong>Start:</strong> {new Date(auction.startDate).toLocaleString()}</p>
                    <p><strong>End:</strong> {new Date(auction.endDate).toLocaleString()}</p>
                    <p><strong>Category:</strong> {auction.category?.name}</p>
                    <p><strong>Tags:</strong> {auction.tags?.map(tag => tag.tag?.name || tag.name).join(', ') || 'None'}</p>
                    <p><strong>Created:</strong> {new Date(auction.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => onEdit(auction)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(auction.id)}
                    disabled={deleteLoading === auction.id}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                  >
                    {deleteLoading === auction.id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}