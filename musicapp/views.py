
# Used

from django.shortcuts import render
from rest_framework import generics
from .models import Band
from .serializers import BandSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

def all_bands(request):
    return render (request, 'band/all_bands.html')

class BandList(APIView):

    def get(self, request, format=None):
        band = Band.objects.all()
        serializer_class = BandSerializer(band, many=True)
        return Response(serializer_class.data)

    def post(self):
        pass

class BandDetail(generics.RetrieveUpdateDestroyAPIView):
       queryset = Band.objects.all()
       serializer_class = BandSerializer
