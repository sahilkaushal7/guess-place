from django.urls import path

from .views import (
    ImageListView,
    ImageDetailView,
    ImageCreateView,
    ImageUpdateView,
    ImageDeleteView
)

urlpatterns = [
    path('', ImageListView.as_view()),
    path('create/', ImageCreateView.as_view()),
    path('<pk>', ImageDetailView.as_view()),
    path('<pk>/update/', ImageUpdateView.as_view()),
    path('<pk>/delete/', ImageDeleteView.as_view())
]