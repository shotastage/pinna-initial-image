from django.views import View
from django.shortcuts import render
from django.http import HttpResponseRedirect



class LandingView(View):
    def get(self, request):
        if request.user.is_authenticated:
            return render(request, 'index.html')
        else:
            return render(request, 'landing.html')

    def post(self):
        pass


class SignUpView(View):
    def get(self, request):
        return render(request, 'signup.html')
