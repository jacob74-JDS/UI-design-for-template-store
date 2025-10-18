
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AccountPage: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-bold text-gray-600">Name</label>
          <p className="text-lg">{user?.name}</p>
        </div>
        <div>
          <label className="text-sm font-bold text-gray-600">Email</label>
          <p className="text-lg">{user?.email}</p>
        </div>
         <div className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
            <p className="text-gray-500">You have no recent orders.</p>
         </div>
        <button
          onClick={logout}
          className="w-full mt-6 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
