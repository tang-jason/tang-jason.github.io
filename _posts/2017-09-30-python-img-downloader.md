---
layout: post
title: "Py - Build image downloader"
date: 2017-09-30
lang: en-us
---

### {{ page.title }}

The python program below is demostrates how to bild a simple image downloader. It utilizes modules of `beautifulsup`, `urllib`, `re`, `os`. 

```python
# used it to scrape the website
from bs4 import BeautifulSoup

# import the library to query the website
import urllib

# import regular expression
import re

# os module
import os

# download the url content
url = urllib.request.urlopen("https://developer.microsoft.com/en-us/windows")

# read the website content
content = url.read()

# create a new BeautifulSoup class to take advantage of its simple API
soup = BeautifulSoup(content, "html5lib")

# find all https img links that matched the regex
img_urls = soup.findAll("img", attrs={"src": re.compile("^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$")})

# a defined function that download the image to /images folder
def download_img(url, file_path, img_name):
    # construct a full path to store an image
    full_path = file_path + img_name

    # download the image to the destinated location
    urllib.request.urlretrieve(url, full_path)

    # msg
    print(f"{img_name} - downloaded")

# download image
for url in img_urls:
    # get the src attribute value from img tag
    url = url.get("src")

    # extract the image file name (e.g. https://www.someimage.com/image/console.png => console.png)
    img_name = os.path.basename(url)

    # invoke download_img function
    download_img(url, "images/", img_name)

```