import React from 'react';

const UserDashboard: React.FC = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
