import React from 'react';

const OrganizationDashboard: React.FC = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Organization Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default OrganizationDashboard;
