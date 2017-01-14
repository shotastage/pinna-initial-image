from django.views import View
from django.shortcuts import render
from django.http import HttpResponseRedirect



class LandingView(View):
    def get(self, request):
        if request.user.is_authenticated:
            return render(request, 'index.html')
        else:
            return render(request, 'landing.html')

    def post(self, request):
        post_pin = request.POST['post_pin']
        print(post_pin)

