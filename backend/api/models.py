from django.db import models

# Create your models here.

def upload_to(instance, filename):
  return 'images/{filename}'.format(filename=filename)