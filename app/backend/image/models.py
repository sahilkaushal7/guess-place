from django.db import models

# Create your models here.

class Image(models.Model):
  url = models.ImageField(upload_to='images/', null=True, blank=True)
  location = models.CharField(max_length=50, null=True, blank=True)
  user = models.ForeignKey('auth.User', on_delete=models.CASCADE, default=None)

  def __str__(self):
        return f'{self.url} {self.location}'