from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('latestRelease', views.latestRelease, name='latestRelease'),
    path('gallery', views.gallery, name='gallery'),
    path('galleryDetail', views.galleryDetail, name='galleryDetail'),
    path('officialRelease', views.officialRelease, name='officialRelease'),
    path('singleRelease', views.singleRelease, name='singleRelease'),
    path('videoGallery', views.videoGallery, name='videoGallery'),
    path('video', views.video, name='video'),
    path('music', views.music, name='music'),
    path('book', views.book, name='book'),
    path('blog', views.blog, name='blog'),
    path('blogDetail', views.blogDetail, name='blogDetail'),
    path('aboutMe', views.aboutMe, name='aboutMe'),
]