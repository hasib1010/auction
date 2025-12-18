'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/api';

export default function AuctionItemForm({ onSubmit, initialData = {}, isEditing = false }) {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    description: initialData.description || '',
    auctionId: initialData.auctionId || '',
    shipping: {
      address: initialData.shipping?.address || '',
      cost: initialData.shipping?.cost || '',
      deliveryTime: initialData.shipping?.deliveryTime || ''
    },
    terms: initialData.terms || '',
    baseBidPrice: initialData.baseBidPrice || '',
    additionalFee: initialData.additionalFee || '',
    currentBid: initialData.currentBid || '',
    estimatedPrice: initialData.estimatedPrice || '',
    productImages: initialData.productImages || []
  });
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadingImages, setUploadingImages] = useState(false);

  useEffect(() => {
    fetchAuctions();
  }, []);

  const fetchAuctions = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/auction`, { withCredentials: true });
      if (res.data.success) {
        setAuctions(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching auctions:', err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('shipping.')) {
      const shippingField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        shipping: { ...prev.shipping, [shippingField]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    setImageFiles(Array.from(e.target.files));
  };

  const uploadImagesToCloudinary = async (files) => {
    setUploadingImages(true);
    const uploadedImages = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET); // Use environment variable
      try {
        const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData); // Use environment variable
        uploadedImages.push({
          url: res.data.secure_url,
          altText: file.name
        });
      } catch (err) {
        console.error('Error uploading image:', err);
      }
    }
    setUploadingImages(false);
    return uploadedImages;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.auctionId) return;

    setLoading(true);
    try {
      let productImages = formData.productImages;
      if (imageFiles.length > 0) {
        const uploadedImages = await uploadImagesToCloudinary(imageFiles);
        productImages = [...productImages, ...uploadedImages];
      }

      const payload = {
        ...formData,
        shipping: formData.shipping.address || formData.shipping.cost || formData.shipping.deliveryTime ? {
          ...formData.shipping,
          cost: formData.shipping.cost ? parseFloat(formData.shipping.cost) : 0,
        } : undefined,
        baseBidPrice: parseFloat(formData.baseBidPrice),
        ...(formData.additionalFee && { additionalFee: parseFloat(formData.additionalFee) }),
        ...(formData.currentBid && { currentBid: parseFloat(formData.currentBid) }),
        ...(formData.estimatedPrice && { estimatedPrice: parseFloat(formData.estimatedPrice) }),
        productImages
      };
      await onSubmit(payload);
      if (!isEditing) {
        setFormData({
          name: '',
          description: '',
          auctionId: '',
          shipping: { address: '', cost: '', deliveryTime: '' },
          terms: '',
          baseBidPrice: '',
          additionalFee: '',
          currentBid: '',
          estimatedPrice: '',
          productImages: []
        });
        setImageFiles([]);
      }
    } catch (error) {
      console.error('Error submitting auction item:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Item Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter item name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>

      <div>
        <label htmlFor="auctionId" className="block text-sm font-medium text-gray-700 mb-2">
          Auction
        </label>
        <select
          id="auctionId"
          name="auctionId"
          value={formData.auctionId}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select an auction</option>
          {auctions.map(auction => (
            <option key={auction.id} value={auction.id}>{auction.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="shipping.address" className="block text-sm font-medium text-gray-700 mb-2">
            Shipping Address
          </label>
          <input
            type="text"
            id="shipping.address"
            name="shipping.address"
            value={formData.shipping.address}
            onChange={handleChange}
            placeholder="Enter shipping address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="shipping.cost" className="block text-sm font-medium text-gray-700 mb-2">
            Shipping Cost
          </label>
          <input
            type="number"
            step="0.01"
            id="shipping.cost"
            name="shipping.cost"
            value={formData.shipping.cost}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="shipping.deliveryTime" className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Time
          </label>
          <input
            type="text"
            id="shipping.deliveryTime"
            name="shipping.deliveryTime"
            value={formData.shipping.deliveryTime}
            onChange={handleChange}
            placeholder="e.g., 3-5 business days"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="terms" className="block text-sm font-medium text-gray-700 mb-2">
          Terms
        </label>
        <textarea
          id="terms"
          name="terms"
          value={formData.terms}
          onChange={handleChange}
          placeholder="Enter terms and conditions"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="baseBidPrice" className="block text-sm font-medium text-gray-700 mb-2">
            Base Bid Price
          </label>
          <input
            type="number"
            step="0.01"
            id="baseBidPrice"
            name="baseBidPrice"
            value={formData.baseBidPrice}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="additionalFee" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Fee
          </label>
          <input
            type="number"
            step="0.01"
            id="additionalFee"
            name="additionalFee"
            value={formData.additionalFee}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="currentBid" className="block text-sm font-medium text-gray-700 mb-2">
            Current Bid
          </label>
          <input
            type="number"
            step="0.01"
            id="currentBid"
            name="currentBid"
            value={formData.currentBid}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="estimatedPrice" className="block text-sm font-medium text-gray-700 mb-2">
            Estimated Price
          </label>
          <input
            type="number"
            step="0.01"
            id="estimatedPrice"
            name="estimatedPrice"
            value={formData.estimatedPrice}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="productImages" className="block text-sm font-medium text-gray-700 mb-2">
          Product Images
        </label>
        <input
          type="file"
          id="productImages"
          name="productImages"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {uploadingImages && <p className="text-sm text-blue-500 mt-2">Uploading images...</p>}
        {formData.productImages.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.productImages.map((image, index) => (
              <img key={index} src={image.url} alt={image.altText} className="w-20 h-20 object-cover rounded" />
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading || uploadingImages}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {loading ? 'Saving...' : (isEditing ? 'Update Auction Item' : 'Create Auction Item')}
      </button>
    </form>
  );
}