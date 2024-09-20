from rest_framework import viewsets
from user_service.models.user import User
from user_service.serializers.user_serializer import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
