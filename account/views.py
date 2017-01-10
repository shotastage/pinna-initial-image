""" View Render HttpDirect Auth """
from django.views import View
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from account.validator import Validation

# Create an instance of checking methods.
VALID = Validation()

class Signup(View):
    """ Signup View Controller """
    def get(self, request):
        """ Serve signup view """
        return render(request, 'auth/signup.html')

    def post(self, request):
        """ Serve signup method """
        # Get POST Data
        # Get inputed data from registering data.
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password']

        # Error Status
        error = "None"
        # Registering Data Validation

        # Empty Check
        if VALID.empty([email, username, password]):
            error = "empty"
        # Check overflow
        if VALID.overflow([email, username, password]):
            error = "overflow"
        # Check email and password format
        if VALID.email(email):
            error = "invalidmail"
        if VALID.password(password):
            error = "invalidpass"
        # Check already exists
        if User.objects.filter(username=username).exists():
            error = "ExistsUser"
        if User.objects.filter(email=email).exists():
            error = "ExistsMail"
      

        if error == "empty":
            return render(request, 'auth/signup.html', {
                'error': "empty",
            })
        elif error == "overflow":
            return render(request, 'auth/signup.html', {
                'error': "overflow",
            })
        elif error == "invalidmail":
            return render(request, 'auth/signup.html', {
                'error': "invalidEmail",
            })
        elif error == "invalidpass":
            return render(request, 'auth/signup.html', {
                'error': "invalidPass",
            })
        elif error == "ExistsUser":
            return render(request, 'auth/signup.html', {
                'error': "doubleUser",
            })
        elif error == "ExistsMail":
            return render(request, 'auth/signup.html', {
                'error': "doubleEmail",
            })
        else:
            # Create user and redirect to login screen.
            user = User.objects.create_user(username, email, password)
            user.save()
            return HttpResponseRedirect('/login/')

