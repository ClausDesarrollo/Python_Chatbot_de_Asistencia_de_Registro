from django.urls import path, include
from rest_framework.routers import DefaultRouter
from notification_service.views.notification_view import NotificationViewSet

router = DefaultRouter()
router.register(r'notifications', NotificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
