
from django.conf.urls import include, url
from django.contrib import admin
from maps.views import LandingView

urlpatterns = [
    url(r'^', LandingView.as_view(), name='index'),
]
