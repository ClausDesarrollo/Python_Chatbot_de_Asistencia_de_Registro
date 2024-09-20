from rest_framework import serializers
from notification_service.models.notification import Notification

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'message', 'date']
