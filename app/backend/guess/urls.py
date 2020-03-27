from django.urls import path

from .views import (
    GuessListView,
    GuessDetailView,
    GuessCreateView,
    GuessUpdateView,
    GuessDeleteView,
    GuessForImageListView,
)

urlpatterns = [
    path('', GuessListView.as_view()),
    path('create/', GuessCreateView.as_view()),
    path('<pk>', GuessDetailView.as_view()),
    path('<pk>/update/', GuessUpdateView.as_view()),
    path('<pk>/delete/', GuessDeleteView.as_view()),
    path('image/<pk>/', GuessForImageListView.as_view()),
]