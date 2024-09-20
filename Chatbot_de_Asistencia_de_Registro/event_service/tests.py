from django.test import TestCase
from event_service.models.event import Event

class EventModelTest(TestCase):
    def setUp(self):
        Event.objects.create(title="Test Event", description="This is a test event.", date="2024-09-20")

    def test_event_creation(self):
        event = Event.objects.get(title="Test Event")
        self.assertEqual(event.description, "This is a test event.")
