# Database Schema
# Used By views.py
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.views.generic.edit import CreateView, UpdateView, DeleteView

# Create your models here.
import datetime

class User(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False, unique=True)
    date_added = models.DateField(default=datetime.datetime.now())

    def __str__(self):
        return(self.name)

class Item(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False, unique=True)
    date_added = models.DateField(default=datetime.datetime.now())
    image = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(max_length=5000, null=True, blank=True)

    def __str__(self):
        return(self.name)

class ItemDetail(models.Model):
    name = models.ForeignKey(Item, on_delete=models.CASCADE)
    rating = models.IntegerField()
    Category = models.CharField(max_length = 128)
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return(self.name)

class ItemCreate(CreateView):
    model = Item
    fields = ['name', 'date_added', 'bio']
