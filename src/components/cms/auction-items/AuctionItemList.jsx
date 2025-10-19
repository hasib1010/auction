'use client';

import { useState } from 'react';

export default function AuctionItemList({ auctionItems, onEdit, onDelete, loading }) {
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDelete = (itemId) => {
    setItemToDelete(itemId);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      setDeleteLoading(itemToDelete);
      setShowModal(false);
      try {
        await onDelete(itemToDelete);
      } catch (error) {
        console.error('Error deleting auction item:', error);
      } finally {
        setDeleteLoading(null);
        setItemToDelete(null);
      }
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setItemToDelete(null);
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
        <h3 className="text-lg font-semibold mb-4">All Auction Items</h3>
        {auctionItems.length === 0 ? (
          <p className="text-gray-500">No auction items found.</p>
        ) : (
          <div className="space-y-4">
            {auctionItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-md p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-lg">{item.name}</h4>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <p><strong>Auction:</strong> {item.auction.name}</p>
                      <p><strong>Shipping:</strong> {item.shipping?.address} - ${item.shipping?.cost} ({item.shipping?.deliveryTime})</p>
                      <p><strong>Terms:</strong> {item.terms}</p>
                      <p><strong>Base Bid Price:</strong> ${item.baseBidPrice}</p>
                      <p><strong>Additional Fee:</strong> ${item.additionalFee}</p>
                      <p><strong>Current Bid:</strong> ${item.currentBid}</p>
                      <p><strong>Estimated Price:</strong> ${item.estimatedPrice}</p>
                      <p><strong>Created:</strong> {new Date(item.createdAt).toLocaleDateString()}</p>
                    </div>
                    {item.productImages && item.productImages.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Product Images:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.productImages.map((image, index) => (
                            <img
                              key={image.id || index}
                              src={image.url}
                              alt={image.altText}
                              className="w-20 h-20 object-cover rounded border"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2 ml-4">
                    <button
                      onClick={() => onEdit(item)}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      disabled={deleteLoading === item.id}
                      className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                    >
                      {deleteLoading === item.id ? 'Deleting...' : 'Delete'}
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
            <p className="text-gray-700 mb-4 text-sm">Are you sure you want to delete this auction item? This action cannot be undone.</p>
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