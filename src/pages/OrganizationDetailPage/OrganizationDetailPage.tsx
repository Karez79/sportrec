import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../components/supabaseClient';

// Определяем типы данных
interface Organization {
  id: string;
  name: string;
  description: string;
}

const OrganizationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const { data, error } = await supabase
          .from('organizations')
          .select('*')
          .eq('id', id)
          .single(); // Добавляем .single() для получения одной организации

        if (error) {
          throw error;
        }

        if (data) {
          setOrganization(data as Organization);
        } else {
          throw new Error('Organization data not found.');
        }
      } catch (error: any) {
        console.error('Error fetching organization:', error.message);
        setError('Error fetching organization data. Please try again.');
      }
    };

    fetchOrganization();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!organization) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{organization.name}</h1>
      <p>{organization.description}</p>
    </div>
  );
};

export default OrganizationDetailPage;
