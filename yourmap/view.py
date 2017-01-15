from django.views import View
from django.shortcuts import render
from django.http import HttpResponseRedirect
from yourmap.models import PostMedia


class LandingView(View):
    def get(self, request):
        if request.user.is_authenticated:
            return render(request, 'index.html')
        else:
            return render(request, 'landing.html')

    def post(self, request):
        post_pin = request.POST['post_pin']
        lat = request.POST['lat']
        lng = request.POST['lng']
        return render(request, 'index.html')

