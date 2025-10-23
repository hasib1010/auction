'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AuctionForm from '@/components/cms/auction/AuctionForm';
import AuctionList from '@/components/cms/auction/AuctionList';
import { API_BASE_URL } from '@/lib/api';

export default function AuctionsPage() {
  const { user } = useUser();
  const [editingAuction, setEditingAuction] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
      setIsDialogOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => axios.put(`${API_BASE_URL}/auction/${id}`, data, { withCredentials: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auctions'] });
      setEditingAuction(null);
      setIsDialogOpen(false);
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
    setIsDialogOpen(true);
  };

  const handleFormSubmit = async (auctionData) => {
    if (editingAuction) {
      updateMutation.mutate({ id: editingAuction.id, data: auctionData });
    } else {
      createMutation.mutate(auctionData);
    }
  };

  const handleDialogClose = () => {
    setEditingAuction(null);
    setIsDialogOpen(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Auctions Management</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600">
              Add New Auction
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingAuction ? 'Edit Auction' : 'Create New Auction'}
              </DialogTitle>
            </DialogHeader>
            <AuctionForm
              onSubmit={handleFormSubmit}
              initialData={editingAuction || {}}
              isEditing={!!editingAuction}
            />
          </DialogContent>
        </Dialog>
      </div>

      <AuctionList
        auctions={auctions}
        onEdit={handleEdit}
        onDelete={(id) => deleteMutation.mutate(id)}
        loading={loading}
      />
    </div>
  );
}