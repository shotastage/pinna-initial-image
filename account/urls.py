from django.conf.urls import url
from django.contrib.auth import views as auth_views
from account.views import AuthView;


urlpatterns = [
    url(r'^', auth_views.login, {'template_name': 'auth.html'}, name='login'),
    url(r'^logout/', auth_views.logout, {'next_page': '/'}, name='logout'),
    url(r'^signup/', AuthView.as_view(), name='signup'),
]
