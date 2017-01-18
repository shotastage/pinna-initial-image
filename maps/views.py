from django.views import View
from django.shortcuts import render
from django.http import HttpResponseRedirect
from maps.models import PostMedia
import spotipy



# Create an Spotipy instance
spotify = spotipy.Spotify()



class LandingView(View):
    def get(self, request):
        pins = []
        count = 0
        if request.user.is_authenticated:
            for db in PostMedia.objects.all():
                pins.append('pins[' + str(count) + '] = {' + 'name:"' + str(db.post_url) + '",' + 'lat: ' + db.lat + ', lng:' + db.lng + '}')
                count += 1


            return render(request, 'index.html', {'pins': pins})
        else:
            return render(request, 'landing.html')

    def post(self, request):
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

        post_info = PostMedia(
            post_type = type,
            post_url = post_pin,
            lat = lat,
            lng = lng,
        )
        post_info.save()


        pins = []
        count = 0
        for db in PostMedia.objects.all():
            pins.append('pins[' + str(count) + '] = {' + 'name:"' + str(db.post_url) + '",' + 'lat: ' + db.lat + ', lng:' + db.lng + '}')
            count += 1

        return render(request, 'index.html', {'pins': pins})
