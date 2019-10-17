from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def index(request):
    context = {'data': [1,2,3]}
    return render(request, 'app/index.html', context)
