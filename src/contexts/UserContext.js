'use client';

import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/api';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/user/me`, { withCredentials: true });
      if (res.data.success) {
        setUser(res.data.data);
      } else {
        setUser(null);
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        window.location.href = '/login';
      } else {
        setUser(null);
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
