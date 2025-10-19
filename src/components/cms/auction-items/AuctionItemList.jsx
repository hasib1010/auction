'use client';

import { useState } from 'react';

export default function AuctionItemList({ auctionItems, onEdit, onDelete, loading }) {
  const [deleteLoading, setDeleteLoading] = useState(null);

  const handleDelete = async (itemId) => {
    setDeleteLoading(itemId);
    try {
      await onDelete(itemId);
    } catch (error) {
      console.error('Error deleting auction item:', error);
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
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deleteLoading === item.id}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
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
  );
}