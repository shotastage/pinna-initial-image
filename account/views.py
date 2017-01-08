""" View Render HttpDirect Auth """
from django.views import View
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User


class AuthView(View):
    def get(self, request):
        return render(request, 'auth.html')


    def post(self, request):
        pass
