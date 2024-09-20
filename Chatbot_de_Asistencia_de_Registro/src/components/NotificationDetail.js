import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const NotificationDetail = () => {
  const { id } = useParams();
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/notifications/${id}`)
      .then(response => {
        setNotification(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the notification!', error);
      });
  }, [id]);

  if (!notification) return <div>Loading...</div>;

  return (
    <div>
      <h1>{notification.message}</h1>
      <p>Date: {notification.date}</p>
    </div>
  );
};

export default NotificationDetail;
