---
layout: post
title: "Application Cache"
date: 2016-02-06
lang: en-us
---

# {{ page.title }}
HTML5 provides an application caching mechanism that lets web-based applications run offline. Developers can use the Application Cache (AppCache) interface to specify resources that the browser should cache and make available to offline users. Applications that are cached load and work correctly even if users click the refresh button when they are offline.

Resources:
[ [ 1 ] ](http://www.html5rocks.com/en/tutorials/appcache/beginner/)
[ [ 2 ] ](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache)

#### Application Cache (AppCache) ####

Using AppCache gives the these advantages.

1. <u>Offline browsing</u>: user can navigate even they're offline.
2. <u>Speed</u>: cached references are local, and therefore load faster.
3. <u>Reduce server load</u>: browser only downloads the resources that have changed from the server.

#### Functionalities ####

1. Allow developers to specify which files should cached for offline users.

#### Step One ####

To enable the AppCache for your web based application, include the <u>manifest</u> attribute on the HTML tag.

	<html manifest="site.appcache">
	  // code here...
	</html>

The <u>manifest</u> attribute should be included for every pages that you want the browser to cached the page.

You can view the these URLs by go to <u>chrome://appcache-internals</u> in Chrome. 

#### Step Two ####

Add "cache-manifest" to .htaccess

	AddType text/cache-manifest .appcache

