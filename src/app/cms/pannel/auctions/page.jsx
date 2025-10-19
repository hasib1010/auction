'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@/contexts/UserContext';
import AuctionForm from '@/components/cms/auction/AuctionForm';
import AuctionList from '@/components/cms/auction/AuctionList';

export default function AuctionsPage() {
  const { user } = useUser();
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingAuction, setEditingAuction] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (user) {
      fetchAuctions();
    }
  }, [user]);

  const fetchAuctions = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:8000/api/auction', { withCredentials: true });
      if (res.data.success) {
        setAuctions(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching auctions:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const createAuction = async (auctionData) => {
    try {
      const res = await axios.post('http://localhost:8000/api/auction', auctionData, { withCredentials: true });
      if (res.data.success) {
        await fetchAuctions();
        setShowForm(false);
      }
    } catch (err) {
      console.error('Error creating auction:', err.message);
      throw err;
    }
  };

  const updateAuction = async (auctionData) => {
    try {
      const res = await axios.put(`http://localhost:8000/api/auction/${editingAuction.id}`, auctionData, { withCredentials: true });
      if (res.data.success) {
        await fetchAuctions();
        setEditingAuction(null);
        setShowForm(false);
      }
    } catch (err) {
      console.error('Error updating auction:', err.message);
      throw err;
    }
  };

  const deleteAuction = async (auctionId) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/auction/${auctionId}`, { withCredentials: true });
      if (res.data.success) {
        await fetchAuctions();
      }
    } catch (err) {
      console.error('Error deleting auction:', err.message);
      throw err;
    }
  };

  const handleEdit = (auction) => {
    setEditingAuction(auction);
    setShowForm(true);
  };

  const handleFormSubmit = async (auctionData) => {
    if (editingAuction) {
      await updateAuction(auctionData);
    } else {
      await createAuction(auctionData);
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
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {showForm ? 'Cancel' : 'Add New Auction'}
        </button>
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
        onDelete={deleteAuction}
        loading={loading}
      />
    </div>
  );
}