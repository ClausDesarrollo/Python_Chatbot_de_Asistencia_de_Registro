import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance.post('/events', { title, description, date })
      .then(response => {
        console.log('Event created successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the event!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
