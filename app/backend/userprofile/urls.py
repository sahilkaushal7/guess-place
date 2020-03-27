from django.urls import path

from .views import (
    UserProfileListView,
    UserProfileDetailView,
    UserProfileCreateView,
    UserProfileUpdateView,
    UserProfileDeleteView
)

urlpatterns = [
    path('', UserProfileListView.as_view()),
    path('create/', UserProfileCreateView.as_view()),
    path('<pk>', UserProfileDetailView.as_view()),
    path('<pk>/update/', UserProfileUpdateView.as_view()),
    path('<pk>/delete/', UserProfileDeleteView.as_view())
]