// src/pages/OrganizationDetailPage/OrganizationDetailPage.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../components/supabaseClient';
import './OrganizationDetailPage.css';

// Создайте интерфейс для организации
interface Organization {
  id: number;
  name: string;
  description: string;
}

const OrganizationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [organization, setOrganization] = useState<Organization | null>(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      const { data, error } = await supabase.from('organizations').select('*').eq('id', id).single();
      if (error) {
        console.error('Error fetching organization:', error);
      } else {
        setOrganization(data as Organization);
      }
    };

    fetchOrganization();
  }, [id]);

  if (!organization) {
    return <div>Loading...</div>;
  }

  return (
    <div className="organization-detail-page">
      <h1>{organization.name}</h1>
      <p>{organization.description}</p>
      {/* Добавьте здесь дополнительную информацию и функциональность */}
    </div>
  );
};

export default OrganizationDetailPage;
