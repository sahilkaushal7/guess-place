from rest_framework import serializers
from . import models

class UserField(serializers.Field):
    def to_representation(self, value):
        user = {
            'username': value.user.username,
            'id': value.user.id,
        }
        return user

class GuessSerializer(serializers.ModelSerializer):
    user = UserField(source='*')

    class Meta:
        model = models.Guess
        fields = ['guess', 'id', 'user', 'image']


class PostGuessSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Guess
        fields = ['guess', 'id', 'user', 'image']