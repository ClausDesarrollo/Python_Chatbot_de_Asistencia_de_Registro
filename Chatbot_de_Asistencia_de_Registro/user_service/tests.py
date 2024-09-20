from django.test import TestCase
from user_service.models.user import User

class UserModelTest(TestCase):
    def setUp(self):
        User.objects.create(name="Test User", email="test@example.com", password="password123")

    def test_user_creation(self):
        user = User.objects.get(email="test@example.com")
        self.assertEqual(user.name, "Test User")
