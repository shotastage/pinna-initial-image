from django.views import View
from django.shortcuts import render
from django.http import HttpResponseRedirect
from maps.models import PostMedia
import spotipy

# For debug
from pprint import pprint



# Create an Spotipy instance
spotify = spotipy.Spotify()



class LandingView(View):
    def get(self, request):
        if request.user.is_authenticated:
            for db in PostMedia.objects.all():
                i = 0
                pins = 'pins['i'] = {' + 'name: "' + db.post_url + '",' + 'lat: ' + db.lat + ', lng:' + db.lng + '}'
                i = i + 1

            return render(request, 'index.html', {'pins': pins})
        else:
            return render(request, 'landing.html')

    def post(self, request):
        post_pin = request.POST['post_pin']
        lat      = request.POST['lat']
        lng      = request.POST['lng']

        if 'youtube' in post_pin:
            type = "youtube"
        elif 'spotify' in post_pin:
            type = "spotify"
        elif 'youtu.be' in post_pin:
            type= "youtube"
        else:
            type="other"

        post_info = PostMedia(
            post_type = type,
            post_url = post_pin,
            lat = lat,
            lng = lng,
        )
        post_info.save()
        return render(request, 'index.html')
