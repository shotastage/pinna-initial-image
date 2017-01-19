from django.views import View
from django.shortcuts import render
from django.http import HttpResponseRedirect
from maps.models import PostMedia
from maps.validator import Validation
import spotipy



# Create an Spotipy instance
spotify = spotipy.Spotify()
validation = Validation()


class LandingView(View):
    def get(self, request):
        pins = []
        count = 0
        if request.user.is_authenticated:
            for db in PostMedia.objects.all():
                createArray = 'var pins = new Array(' + str(len(PostMedia.objects.all())) + ');'
                pins.append('pins[' + str(count) + '] = {' + 'name:"' + str(db.post_url) + '", type: "' + str(db.post_type) + '", lat: ' + db.lat + ', lng:' + db.lng + '};')
                count += 1
            error = "None"

            return render(request, 'index.html', {'pins': pins, 'array_declaration': createArray, 'error': error})
        else:
            return render(request, 'landing.html')




    def post(self, request):


        """ Post variables """
        post_pin = request.POST['post_pin']
        lat = request.POST['lat']
        lng = request.POST['lng']


        if 'youtube' in post_pin:
            type = "youtube"
        elif 'spotify' in post_pin:
            type = "spotify"
        elif 'youtu.be' in post_pin:
            type= "youtube"
        else:
            type="other"


        if validation.empty(lat) and validation.empty(lng) and validation.empty(post_pin):
            error = "Empty"
        else:
            for db in PostMedia.objects.all():
                url = db.post_url
                is_lat = db.lat
                is_lng = db.lng

            if url == post_pin and lat == is_lat and lng == is_lng:
                error == "invalid"
            else:
                post_info = PostMedia(
                    post_type = type,
                    post_url = post_pin,
                    lat = lat,
                    lng = lng,
                )
                post_info.save()
                error = "None"


        pins = []
        count = 0
        for db in PostMedia.objects.all():
            createArray = 'var pins = new Array(' + str(len(PostMedia.objects.all())) + ');'
            pins.append('pins[' + str(count) + '] = {' + 'name:"' + str(db.post_url) + '", type: "' + str(db.post_type) + '", lat: ' + db.lat + ', lng:' + db.lng + '};')
            count += 1

        return render(request, 'index.html', {'pins': pins, 'array_declaration': createArray, 'error': error})
