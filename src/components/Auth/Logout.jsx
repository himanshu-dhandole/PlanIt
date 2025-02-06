import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">You have been logged out</h1>
      <Link to="/login" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Sign In
      </Link>
    </div>
  );
}

export default Logout;