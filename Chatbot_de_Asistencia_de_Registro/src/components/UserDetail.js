import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/users/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user!', error);
      });
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
