'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@/contexts/UserContext';
import AuctionItemForm from '@/components/cms/auction-items/AuctionItemForm';
import AuctionItemList from '@/components/cms/auction-items/AuctionItemList';

export default function AuctionItemsPage() {
  const { user } = useUser();
  const [auctionItems, setAuctionItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (user) {
      fetchAuctionItems();
    }
  }, [user]);

  const fetchAuctionItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:8000/api/auction-item', { withCredentials: true });
      if (res.data.success) {
        setAuctionItems(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching auction items:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const createAuctionItem = async (itemData) => {
    try {
      const res = await axios.post('http://localhost:8000/api/auction-item', itemData, { withCredentials: true });
      if (res.data.success) {
        await fetchAuctionItems();
        setShowForm(false);
      }
    } catch (err) {
      console.error('Error creating auction item:', err.message);
      throw err;
    }
  };

  const updateAuctionItem = async (itemData) => {
    try {
      const res = await axios.put(`http://localhost:8000/api/auction-item/${editingItem.id}`, itemData, { withCredentials: true });
      if (res.data.success) {
        await fetchAuctionItems();
        setEditingItem(null);
        setShowForm(false);
      }
    } catch (err) {
      console.error('Error updating auction item:', err.message);
      throw err;
    }
  };

  const deleteAuctionItem = async (itemId) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/auction-item/${itemId}`, { withCredentials: true });
      if (res.data.success) {
        await fetchAuctionItems();
      }
    } catch (err) {
      console.error('Error deleting auction item:', err.message);
      throw err;
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleFormSubmit = async (itemData) => {
    if (editingItem) {
      await updateAuctionItem(itemData);
    } else {
      await createAuctionItem(itemData);
    }
  };

  const handleCancel = () => {
    setEditingItem(null);
    setShowForm(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Auction Items Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {showForm ? 'Cancel' : 'Add New Auction Item'}
        </button>
      </div>

      {showForm && (
        <AuctionItemForm
          onSubmit={handleFormSubmit}
          initialData={editingItem || {}}
          isEditing={!!editingItem}
        />
      )}

      <AuctionItemList
        auctionItems={auctionItems}
        onEdit={handleEdit}
        onDelete={deleteAuctionItem}
        loading={loading}
      />
    </div>
  );
}