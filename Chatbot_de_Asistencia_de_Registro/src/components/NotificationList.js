import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axiosInstance.get('/notifications')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the notifications!', error);
      });
  }, []);

  return (
    <div>
      <h1>Notification List</h1>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
