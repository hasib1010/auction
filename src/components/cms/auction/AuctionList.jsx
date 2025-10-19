'use client';

import { useState } from 'react';

export default function AuctionList({ auctions, onEdit, onDelete, loading }) {
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [auctionToDelete, setAuctionToDelete] = useState(null);

  const handleDelete = (auctionId) => {
    setAuctionToDelete(auctionId);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (auctionToDelete) {
      setDeleteLoading(auctionToDelete);
      setShowModal(false);
      try {
        await onDelete(auctionToDelete);
      } catch (error) {
        console.error('Error deleting auction:', error);
      } finally {
        setDeleteLoading(null);
        setAuctionToDelete(null);
      }
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setAuctionToDelete(null);
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
    <>
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
                  <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2 ml-4">
                    <button
                      onClick={() => onEdit(auction)}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(auction.id)}
                      disabled={deleteLoading === auction.id}
                      className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
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

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-80">
            <h3 className="text-lg font-semibold mb-3">Confirm Delete</h3>
            <p className="text-gray-700 mb-4 text-sm">Are you sure you want to delete this auction? This action cannot be undone.</p>
            <div className="flex space-x-3">
              <button
                onClick={cancelDelete}
                className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-lg hover:from-gray-500 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}