'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@/contexts/UserContext';
import UserList from "@/components/cms/users/UserList"

export default function Users(){
    const { user } = useUser();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            fetchUsers();
        }
    }, [user]);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:8000/api/user', { withCredentials: true });
            if (res.data.success) {
                setUsers(res.data.data);
            }
        } catch (err) {
            console.error('Error fetching users:', err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
            </div>

            <UserList users={users} loading={loading} />
        </div>
    )
}