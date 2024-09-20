import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/events/${id}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the event!', error);
      });
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>Description: {event.description}</p>
      <p>Date: {event.date}</p>
    </div>
  );
};

export default EventDetail;
