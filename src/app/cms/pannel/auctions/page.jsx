'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import AuctionForm from '@/components/cms/auction/AuctionForm';
import AuctionList from '@/components/cms/auction/AuctionList';
import { API_BASE_URL } from '@/lib/api';

export default function AuctionsPage() {
  const { user } = useUser();
  const [editingAuction, setEditingAuction] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();

  const { data: auctions = [], isLoading: loading } = useQuery({
    queryKey: ['auctions'],
    queryFn: async () => {
      const res = await axios.get(`${API_BASE_URL}/auction`, { withCredentials: true });
      return res.data.success ? res.data.data : [];
    },
    enabled: !!user,
  });

  const createMutation = useMutation({
    mutationFn: (auctionData) => axios.post(`${API_BASE_URL}/auction`, auctionData, { withCredentials: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auctions'] });
      setShowForm(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => axios.put(`${API_BASE_URL}/auction/${id}`, data, { withCredentials: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auctions'] });
      setEditingAuction(null);
      setShowForm(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (auctionId) => axios.delete(`${API_BASE_URL}/auction/${auctionId}`, { withCredentials: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auctions'] });
    },
  });

  const handleEdit = (auction) => {
    setEditingAuction(auction);
    setShowForm(true);
  };

  const handleFormSubmit = async (auctionData) => {
    if (editingAuction) {
      updateMutation.mutate({ id: editingAuction.id, data: auctionData });
    } else {
      createMutation.mutate(auctionData);
    }
  };

  const handleCancel = () => {
    setEditingAuction(null);
    setShowForm(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Auctions Management</h1>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 hover:bg-blue-600"
        >
          {showForm ? 'Cancel' : 'Add New Auction'}
        </Button>
      </div>

      {showForm && (
        <AuctionForm
          onSubmit={handleFormSubmit}
          initialData={editingAuction || {}}
          isEditing={!!editingAuction}
        />
      )}

      <AuctionList
        auctions={auctions}
        onEdit={handleEdit}
        onDelete={(id) => deleteMutation.mutate(id)}
        loading={loading}
      />
    </div>
  );
}