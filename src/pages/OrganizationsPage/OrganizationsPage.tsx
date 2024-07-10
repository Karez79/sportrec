import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../components/supabaseClient';
import './OrganizationsPage.css';

// Создайте интерфейс для организации
interface Organization {
  id: number;
  name: string;
  description: string;
}

const OrganizationsPage: React.FC = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const { data, error } = await supabase.from('organizations').select('*');
      if (error) {
        console.error('Error fetching organizations:', error);
      } else {
        setOrganizations(data as Organization[]);
      }
    };

    fetchOrganizations();
  }, []);

  return (
    <div className="organizations-page">
      <h1>Organizations</h1>
      <div className="organizations-list">
        {organizations.map((organization) => (
          <Link key={organization.id} to={`/organizations/${organization.id}`} className="organization-card">
            <h2>{organization.name}</h2>
            <p>{organization.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrganizationsPage;
