'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import CategoryForm from '@/components/cms/category/CategoryForm';
import CategoryList from '@/components/cms/category/CategoryList';

export default function CategoriesPage() {
  const { user } = useUser();
  const [editingCategory, setEditingCategory] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();

  const { data: categories = [], isLoading: loading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:8000/api/category', { withCredentials: true });
      return res.data.success ? res.data.data : [];
    },
    enabled: !!user,
  });

  const createMutation = useMutation({
    mutationFn: (categoryData) => axios.post('http://localhost:8000/api/category', categoryData, { withCredentials: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setShowForm(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => axios.put(`http://localhost:8000/api/category/${id}`, data, { withCredentials: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setEditingCategory(null);
      setShowForm(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (categoryId) => axios.delete(`http://localhost:8000/api/category/${categoryId}`, { withCredentials: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const handleEdit = (category) => {
    setEditingCategory(category);
    setShowForm(true);
  };

  const handleFormSubmit = async (categoryData) => {
    if (editingCategory) {
      updateMutation.mutate({ id: editingCategory.id, data: categoryData });
    } else {
      createMutation.mutate(categoryData);
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
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 hover:bg-blue-600"
        >
          {showForm ? 'Cancel' : 'Add New Category'}
        </Button>
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
        onDelete={(id) => deleteMutation.mutate(id)}
        loading={loading}
      />
    </div>
  );
}