from django.views import View
from django.shortcuts import render
from django.http import HttpResponseRedirect



class LandingView(View):
    def get(self, request):
        return render(request, 'landing.html')

    def post(self):
        pass


class MainView(View):
    def get(self, request):
        return render(request, 'index.html')
