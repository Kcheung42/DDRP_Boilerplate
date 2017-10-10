# Database Schema
# Used By views.py
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
import datetime

class Band(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False, unique=True)
    date_added = models.DateField(default=datetime.datetime.now())
    image = models.CharField(max_length=255, null=True, blank=True)
    bio = models.TextField(max_length=5000, null=True, blank=True)
