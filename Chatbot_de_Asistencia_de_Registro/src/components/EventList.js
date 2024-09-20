import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axiosInstance.get('/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
