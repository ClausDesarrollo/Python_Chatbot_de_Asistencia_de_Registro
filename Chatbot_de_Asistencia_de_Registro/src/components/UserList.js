import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance.get('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
