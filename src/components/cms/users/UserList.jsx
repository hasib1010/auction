'use client';

import { useState } from 'react';
import UserModal from './UserModal';

export default function UserList({ users, loading }) {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const closeModal = () => {
        setSelectedUser(null);
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
            <h3 className="text-lg font-semibold mb-4">All Users</h3>
            {users.length === 0 ? (
                <p className="text-gray-500">No users found.</p>
            ) : (
                <div className="space-y-3">
                    {users.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer" onClick={() => handleUserClick(user)}>
                            <div>
                                <h4 className="font-medium text-gray-900">{user.firstName} {user.lastName}</h4>
                                <p className="text-sm text-gray-500">{user.email}</p>
                                <p className="text-sm text-gray-500">
                                    Account Type: {user.accountType} | Verified: {user.isVerified ? 'Yes' : 'No'}
                                </p>
                            </div>
                            <div className="text-sm text-gray-500">
                                Created: {new Date(user.createdAt).toLocaleDateString()}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {selectedUser && <UserModal user={selectedUser} onClose={closeModal} />}
        </div>
    );
}