# Used

from django.shortcuts import render
from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

#Generic Views
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy

class ItemList(APIView):

    def get(self, request, format=None):
        band = Item.objects.all()
        serializer_class = ItemSerializer(band, many=True)
        return Response(serializer_class.data)

    def post(self):
        pass

class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
       queryset = Item.objects.all()
       serializer_class = ItemSerializer
       
class ItemCreate(CreateView):
    model = Item
    fields = ['artist', 'album_title', 'genre', 'logo']

class ItemUpdate(UpdateView):
    model = Item
    fields = ['artist', 'album_title', 'genre', 'logo']

class ItemDelete(DeleteView):
    model = Item
    success_url = reverse_lazy('Item:index')

