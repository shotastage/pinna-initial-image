from django.db import models

# Create your models here.
class PostMedia(models.Model):
    post_type = models.CharField(max_length=100)
    post_url = models.CharField(max_length=200)
    lat = models.CharField(max_length=200)
    lng = models.CharField(max_length=200)

