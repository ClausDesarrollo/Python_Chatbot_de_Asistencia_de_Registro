import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance.post('/users', { name, email })
      .then(response => {
        console.log('User created successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;
