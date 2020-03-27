from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from .models import UserProfile
from .serializers import UserProfileSerializer, PostUserProfileSerializer


class UserProfileListView(ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = (permissions.AllowAny, )


class UserProfileDetailView(RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = (permissions.AllowAny, )


class UserProfileCreateView(CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = PostUserProfileSerializer
    permission_classes = (permissions.IsAuthenticated, )


class UserProfileUpdateView(UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = PostUserProfileSerializer
    permission_classes = (permissions.IsAuthenticated, )


class UserProfileDeleteView(DestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = PostUserProfileSerializer
    permission_classes = (permissions.IsAuthenticated, )
