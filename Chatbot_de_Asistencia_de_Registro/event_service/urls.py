from django.urls import path, include
from rest_framework.routers import DefaultRouter
from event_service.views.event_view import EventViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
