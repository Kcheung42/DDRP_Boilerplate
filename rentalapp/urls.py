from django.conf.urls import url,include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from django.views import generic

urlpatterns = [
	url(r'^$', generic.TemplateView.as_view(template_name='index.html'), name='index'),
        url(r'^api/$', views.ItemList.as_view()), 
        url(r'^api/(?P<pk>[0-9]+)/$', views.ItemDetail.as_view()), 
    ]

urlpatterns = format_suffix_patterns(urlpatterns)
