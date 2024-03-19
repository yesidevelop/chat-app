from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


# Create your views here.
def chats(request):
    template = loader.get_template('chats.html')
    return HttpResponse(template.render())
