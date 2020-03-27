from django.db import models
from image.models import Image

# Create your models here.


class Guess(models.Model):
  guess = models.CharField(max_length=50, null=True, blank=True)
  user = models.ForeignKey('auth.User', on_delete=models.CASCADE, default=None)
  image = models.ForeignKey(Image, on_delete=models.CASCADE, default=None)
  correct = models.BooleanField(default=False, null=True, blank=True)

  def __str__(self):
        return f'{self.guess} {self.user}'
