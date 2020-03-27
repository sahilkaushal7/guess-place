from rest_framework import serializers
from . import models


class UserField(serializers.Field):
    def to_representation(self, value):
        user = {
            'username': value.user.username,
            'email': value.user.email,
            'id': value.user.id,
        }
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserField(source='*')

    class Meta:
        model = models.UserProfile
        fields = ['name', 'place', 'age', 'id', 'user']


class PostUserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserProfile
        fields = ['name', 'place', 'age', 'id', 'user']
