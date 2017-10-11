---
layout: post
title: "django - Create Project"
date: 2017-10-02
lang: en-us
---

### {{ page.title }}

#### `Creating a project`

`cd` into a director where you like to store your project/codes and run the command below
```python
django-admin startproject mysite
```

#### `Run server`
Run the command below to start the dev server
```python
python manage.py runserver
```

#### `Start app`
In Python Django `app` means different section of your application. If you have a shop then it's shop app. If you have a forum, then it's a forum app. To start an app, call the command below and it will create a folder name called `music`
```python
python manage.py startapp music
```

#### `Create a home page view`
Under `/music/views.py`
```python
from django.http import HttpResponse

def index(request):
    return HttpResponse('<h1>hello world</h1>')
```

Under `/mysite/settings.py`
```python
INSTALLED_APPS = [
    ...
    'music.apps.MusicConfig'
]
```

Under `/mysite/urls.py`
```python
from django.conf.urls import include, url

urlpatterns = [
    url(r'^music/', include('music.urls'))
]
```

#### `Create model/database`

```python
from django.db import models

# pk will be created
class Album(models.Model):
    artist = models.CharField(max_length=250)
    album_title = models.CharField(max_length=250)
    genre = models.CharField(max_length=250)
    album_logo = models.CharField(max_length=1000)

# associate with any album. 'on_delete=models.CASCADE' is whenever album is deleted, song associate with it will be deleted as well
class Song(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    file_type = models.CharField(max_length=10)
    song_title = models.CharField(max_length=250)
```

#### `Activiting models`
Once you have defined or updated the model. Run the command below to ensure it works with the DB correctly.

```python
python manage.py makemigrations music
``` 

#### `Sync the DB`
Run the following command once you successfully made the migration. This will sync up the changes with the DB

```python
python manage.py migrate
```

#### `DJango shell`
You can open up django interactive shell in your terminal from the command below. With this shell, you can write database commnads.

```python
python manage.py shell

# once you are in the shell, you can add album object via the commands below
# retreive all album objects
Album.objects.all()

# import Album and Song
from music.models import Album, Song

# Add album
a = Album(artist="artist_1", album_title="title_1", genre="genre_1", album_logo="logo_1")
b = Album()
b.artist="artist_2"
b.album_title="title_2"
b.genre="genre_2"
b.album_logo="logo_2"

# Save the changes
a.save()
b.save()
```

#### `Special representation of an instance`
When you type in `Album.objects.all()` you'll always see something like `Query[objects]`. This is not useful. To change that in your Album class add the following def

```python
def __str__(self):
    return self.album_title + ' - ' + self.artist
```

#### `Filter`
You can use filter method to filter through the albums

```python
# return first album
Album.objects.filter(pk=1)

# return an album that has artist name starts with 'my'
# output: [<Album: Punk - Myth>]
Album.objects.filter(artist__startswith="my")
```

#### `Admin interface`
To create an admin, use the commands below

```python
python manage.py createsuperuser
```

Once you filled up the info, go to your admin path. (e.g. 127.0.0.1/admin)

#### `How to add music to the admin site`
We want to able to make CRUD operation to the ablum

Under `music/admin.py`
```python
from django.contrib import admin
from .models import Album

# Register your models here.
admin.site.register(Album)
```

#### `Add view`
We want to add another view after music url. Something like `/music/80`

In your `music/urls.py` add a detail view
```python
urls(r'^(?P<album_id>[0-9]+)/$', views.detail, name='detail')
```

In your `music/views.py`
```python
def detail(request, album_id):
    return HttpResponse(f"<h2>Details for album id { album_id }</h2>")
```

Go to your `http://127.0.0.1:8000/music/1/`

#### `Connecting to the database`

```python
from .models import Album

# Album.objects.all() will return all album objects
def index(request):
    all_album = Album.objects.all()
```

#### `Templates`

Create a `templates/music/index.html` index file under `music` folder

In the `views.py` file
```python
from django.http import HttpResponse
from django.shortcuts import render
from .models import Album

def index(request):
    # get all albums from the DB
    all_album = Album.objects.all()
    
    # data context
    context = { 'all_album': all_album }

    # note that we don't need to pass in templates path as django already mapped behind the code
    return render(request, 'music/index.html', context)
```

in the `index.html` file
```python
{% if all_album %}
    <ul>
        {% for album in all_album %}
        <li><a href="/music/{{ album.pk }}">{{ album.album_title }}</a></li>
        {% endfor %}
    </ul>
{% else %}
    <h3>You do not have any albums</h3>
{% endif %}
```

#### `Related Ojbects Set`
This is faster better way to add related objects.

```python
# fire up your django interactive shell
python manage.py shell

# import Album and Song
from music.models import Album, Song

# add songs to a specific album
album1 = Album.objects.get(pk=1)

# add song
album1.objects.create(song_title = 'song 1', file_type = 'mp3')

# to see all the songs we've added
album1.objects.all()
```