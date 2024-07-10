import React, { useEffect, useState } from 'react';
import { supabase } from '../../components/supabaseClient';

const AdminDashboard: React.FC = () => {
  const [organization, setOrganization] = useState<any>(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data, error } = await supabase
          .from('organizations')
          .select('*')
          .eq('admin_id', session.user.id)
          .single();
        
        if (error) {
          console.error('Error fetching organization:', error);
        } else {
          setOrganization(data);
        }
      }
    };

    fetchOrganization();
  }, []);

  if (!organization) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Organization Name: {organization.name}</p>
      <p>Organization Description: {organization.description}</p>
      {/* Добавьте другие детали профиля организации */}
    </div>
  );
};

export default AdminDashboard;
