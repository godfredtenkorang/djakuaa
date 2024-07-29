from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'mysite/index.html')


def latestRelease(request):
    return render(request, 'mysite/latest-release.html')

def gallery(request):
    return render(request, 'mysite/gallery.html')

def galleryDetail(request):
    return render(request, 'mysite/galleryDetail.html')

def officialRelease(request):
    return render(request, 'mysite/officialRelease.html')

def singleRelease(request):
    return render(request, 'mysite/singleRelease.html')

def videoGallery(request):
    return render(request, 'mysite/videoGallery.html')

def video(request):
    return render(request, 'mysite/video.html')

def music(request):
    return render(request, 'mysite/music.html')

def book(request):
    return render(request, 'mysite/book.html')

def blog(request):
    return render(request, 'mysite/blog.html')


def blogDetail(request):
    return render(request, 'mysite/blogDetail.html')

def aboutMe(request):
    return render(request, 'mysite/aboutMe.html')