'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@/contexts/UserContext';
import CategoryForm from '@/components/cms/category/CategoryForm';
import CategoryList from '@/components/cms/category/CategoryList';

export default function CategoriesPage() {
  const { user } = useUser();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const createCategory = async (categoryData) => {
    try {
      const res = await axios.post('http://localhost:8000/api/category', categoryData, { withCredentials: true });
      if (res.data.success) {
        await fetchCategories();
        setShowForm(false);
      }
    } catch (err) {
      console.error('Error creating category:', err.message);
      throw err;
    }
  };

  const updateCategory = async (categoryData) => {
    try {
      const res = await axios.put(`http://localhost:8000/api/category/${editingCategory.id}`, categoryData, { withCredentials: true });
      if (res.data.success) {
        await fetchCategories();
        setEditingCategory(null);
        setShowForm(false);
      }
    } catch (err) {
      console.error('Error updating category:', err.message);
      throw err;
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/category/${categoryId}`, { withCredentials: true });
      if (res.data.success) {
        await fetchCategories();
      }
    } catch (err) {
      console.error('Error deleting category:', err.message);
      throw err;
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setShowForm(true);
  };

  const handleFormSubmit = async (categoryData) => {
    if (editingCategory) {
      await updateCategory(categoryData);
    } else {
      await createCategory(categoryData);
    }
  };

  const handleCancel = () => {
    setEditingCategory(null);
    setShowForm(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Categories Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {showForm ? 'Cancel' : 'Add New Category'}
        </button>
      </div>

      {showForm && (
        <CategoryForm
          onSubmit={handleFormSubmit}
          initialData={editingCategory || {}}
          isEditing={!!editingCategory}
        />
      )}

      <CategoryList
        categories={categories}
        onEdit={handleEdit}
        onDelete={deleteCategory}
        loading={loading}
      />
    </div>
  );
}