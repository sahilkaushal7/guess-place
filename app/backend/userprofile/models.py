from django.db import models

class UserProfile(models.Model):
  name = models.CharField(max_length=50, null=True, blank=True)
  place = models.CharField(max_length=50, null=True, blank=True)
  age = models.IntegerField(null=True, blank=True)
  user = models.ForeignKey('auth.User', on_delete=models.CASCADE, default=None)

  def __str__(self):
        return f'{self.name} {self.place}'