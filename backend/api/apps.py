from django.apps import AppConfig
from django.conf import settings
import os
from keras.models import load_model

class ApiConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "api"
    MODEL_FILE = os.path.join(settings.MODELS, "FV.h5")
    main_model = load_model(MODEL_FILE)