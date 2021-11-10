from django.urls import path
from . import views
urlpatterns = [
  path('', views.index),
  path('k314/', views.index),
  path('k315/', views.index),
  path('k316/', views.index),
]