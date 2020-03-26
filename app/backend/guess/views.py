from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from .models import Guess
from .serializers import GuessSerializer, PostGuessSerializer


class GuessForImageListView(ListAPIView):
    serializer_class = GuessSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def get_queryset(self):
        image = self.kwargs['image']
        return Guess.objects.filter(Guess__image__id=image)

class GuessListView(ListAPIView):
    queryset = Guess.objects.all()
    serializer_class = GuessSerializer
    permission_classes = (permissions.AllowAny, )


class GuessDetailView(RetrieveAPIView):
    queryset = Guess.objects.all()
    serializer_class = GuessSerializer
    permission_classes = (permissions.AllowAny, )


class GuessCreateView(CreateAPIView):
    queryset = Guess.objects.all()
    serializer_class = PostGuessSerializer
    permission_classes = (permissions.IsAuthenticated, )


class GuessUpdateView(UpdateAPIView):
    queryset = Guess.objects.all()
    serializer_class = PostGuessSerializer
    permission_classes = (permissions.IsAuthenticated, )


class GuessDeleteView(DestroyAPIView):
    queryset = Guess.objects.all()
    serializer_class = PostGuessSerializer
    permission_classes = (permissions.IsAuthenticated, )