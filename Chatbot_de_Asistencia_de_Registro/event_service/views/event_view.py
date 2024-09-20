from rest_framework import viewsets
from event_service.models.event import Event
from event_service.serializers.event_serializer import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
