import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const CreateNotification = () => {
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance.post('/notifications', { message, date })
      .then(response => {
        console.log('Notification created successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the notification!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Message:</label>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit">Create Notification</button>
    </form>
  );
};

export default CreateNotification;
