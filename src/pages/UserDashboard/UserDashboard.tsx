import React, { useState, useEffect } from 'react';
import { supabase } from '../../components/supabaseClient';
import { useNavigate } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    const userString = localStorage.getItem('user');
    if (!userString) {
      console.error('User not found in localStorage.');
      setError('User not found in localStorage.');
      navigate('/login');
      return;
    }

    try {
      const user = JSON.parse(userString);
      console.log('User from localStorage:', user);

      if (user && user.id) {
        const { data: userDetails, error: userDetailsError } = await supabase
          .from('users')
          .select('id, email, organization_id')
          .eq('id', user.id)
          .single();

        if (userDetailsError) {
          console.error('Error fetching user details:', userDetailsError);
          setError(`Error fetching user details: ${userDetailsError.message}`);
          return;
        }

        if (!userDetails) {
          console.error('User not found in database.');
          setError('User not found in database.');
          return;
        }

        console.log('User details from DB:', userDetails);
        setUser(userDetails);
      } else {
        console.error('User ID not found in localStorage.');
        setError('User ID not found in localStorage.');
        navigate('/login');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setError('Unexpected error occurred. Please try again.');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Email: {user.email}</p>
      <p>Organization ID: {user.organization_id}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
