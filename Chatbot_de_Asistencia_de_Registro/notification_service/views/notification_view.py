from rest_framework import viewsets
from notification_service.models.notification import Notification
from notification_service.serializers.notification_serializer import NotificationSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
