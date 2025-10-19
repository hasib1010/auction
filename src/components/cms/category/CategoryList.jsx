'use client';

import { useState } from 'react';

export default function CategoryList({ categories, onEdit, onDelete, loading }) {
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const handleDelete = (categoryId) => {
    setCategoryToDelete(categoryId);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (categoryToDelete) {
      setDeleteLoading(categoryToDelete);
      setShowModal(false);
      try {
        await onDelete(categoryToDelete);
      } catch (error) {
        console.error('Error deleting category:', error);
      } finally {
        setDeleteLoading(null);
        setCategoryToDelete(null);
      }
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setCategoryToDelete(null);
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
        <h3 className="text-lg font-semibold mb-4">All Categories</h3>
        {categories.length === 0 ? (
          <p className="text-gray-500">No categories found.</p>
        ) : (
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                <div>
                  <h4 className="font-medium text-gray-900">{category.name}</h4>
                  <p className="text-sm text-gray-500">
                    Created: {new Date(category.createdAt).toLocaleDateString()} |
                    Updated: {new Date(category.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
                  <button
                    onClick={() => onEdit(category)}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    disabled={deleteLoading === category.id}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    {deleteLoading === category.id ? 'Deleting...' : 'Delete'}
                  </button>
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
            <p className="text-gray-700 mb-4 text-sm">Are you sure you want to delete this category? This action cannot be undone.</p>
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