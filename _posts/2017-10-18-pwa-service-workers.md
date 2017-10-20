---
layout: post
title: "PWA - Service Workers"
date: 2017-10-18
lang: en-us
---

### {{ page.title }}

#### `What is Service Workers`

Service workers doing a lot of work behind the scenes. They allow our application for offline cache, push notification, background sync.

Service worker runs on addtional thread, decoupled from HTML pages.

Manages `all pages` of given scope (e.g.all pages of a domain).

Lives on even after pages have been closed.

Service workers are background processor. they are good at reacting to events. Like showing notification to the user. You can think of SW as a network proxy.


#### `Listenable - Events (in service worker)`

`Fetch` - Browser or page-related JS initiates a Fetch (http request)

`Push Notifications` - Service worker receives web push notification (from server)

`Notification interaction` - User interacts with displayed notification

`Background sync` - Service worker receives background sync event (e.g. itnernet connection was restored)

`Service worker lifecycle` - Service worker phase changes

#### `Service Worker Lifecycle`

index.html `loads` app.js `registers` sw.js then installation and activation 


#### `Registering a Service Worker`

Service worker must reside in your web root folder which allow SW to control all page and resources.

In your app.js file
```javascript
// Check if service worker is supported in user's browser
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(function () {
        console.log("Service worker registered!");
    });
}
```

#### `Service Wroker Scope`
Scope can be defined to only control the targeted files.

```javascript
if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.js", {scope: "/help/"}).then(function () {
        console.log("SW registered!);
    });
}
```

Another important note that `Service Worker` only works in `HTTPS` protocol.

#### `Reacting to Incoming Events (in SW)`

In your sw.js file
```javascript
// Listening to install event
self.addEventListener("install", function(event) {
    console.log("[Service Worker] Install Service Worker ...", event);
});

// Listening to activate event
self.addEventListener("activate", function(event) {
    console.log("[Service Worker] Activating Service Worker ...", event);

    // Ensure SW is loaded & activated correctly
    return self.clients.claim();
});

// Listening to fetch event. This triggered by your application.
self.addEventListener("fetch", function (event) {
    console.log("[Service Worker] Fetch something ...", event);

    // Override the data that get send back
    event.respondWith(fetch(event.request));
});
```

