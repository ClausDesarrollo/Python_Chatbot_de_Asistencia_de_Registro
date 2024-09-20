from django.test import TestCase
from notification_service.models.notification import Notification

class NotificationModelTest(TestCase):
    def setUp(self):
        Notification.objects.create(message="Test Notification")

    def test_notification_creation(self):
        notification = Notification.objects.get(message="Test Notification")
        self.assertEqual(notification.message, "Test Notification")
