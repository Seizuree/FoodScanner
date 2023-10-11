from rest_framework import serializers
from .models import Post, Predict

# class PostSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Post
#     fields = ("id", "title", "body", "image", "created_at")