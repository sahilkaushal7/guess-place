from rest_framework import serializers
from . import models

class UserField(serializers.Field):
    def to_representation(self, value):
        user = {
            'username': value.user.username,
            'id': value.user.id,
        }
        return user

class ImageSerializer(serializers.ModelSerializer):
    user = UserField(source='*')

    class Meta:
        model = models.Image
        fields = ['location', 'url', 'id', 'user']


class PostImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = ['location', 'url', 'id', 'user']