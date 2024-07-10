import React, { useState, useEffect } from 'react';
import { supabase } from '../../components/supabaseClient';
import { useNavigate, useParams } from 'react-router-dom';

const OrganizationDetailPage: React.FC = () => {
  const [organization, setOrganization] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const fetchOrganization = async () => {
    try {
      const { data: organizationDetails, error: organizationError } = await supabase
        .from('organizations')
        .select('*')
        .eq('id', id)
        .single();

      if (organizationError) {
        console.error('Error fetching organization details:', organizationError);
        setError(`Error fetching organization details: ${organizationError.message}`);
        return;
      }

      if (!organizationDetails) {
        console.error('Organization not found.');
        setError('Organization not found.');
        return;
      }

      console.log('Organization details from DB:', organizationDetails);
      setOrganization(organizationDetails);
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
    fetchOrganization();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!organization) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Organization Details</h1>
      <p>Name: {organization.name}</p>
      <p>Description: {organization.description}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default OrganizationDetailPage;
