---
layout: post
title: "PWA - Manifest"
date: 2017-10-17
lang: en-us
---

### {{ page.title }}

#### `Manifest`
You'll need to create a `manifest` JSON file to tell the browser this is an extra info for the web app.

```javascript
{
    "name": "Sweaty - Activity Tracker", // Long name of app (e.g. on Splashscreen)
    "short_name": "Sweaty", // Short name of app (g.g. below icon)
    "start_url": "/index.html", // Which page to load on startup
    "scope": ".", // Whcih pages are included in "PWA experience"
    "display": "standalone", // Standalone makes your app looks like native app
    "background_color": "#fff", // Background while loading & on Splashscreen
    "theme_color": "#3F51B5", // Theme color (e.g. on top bar in task switcher)
    "description" : "Keep running until you're super sweaty", // Description (e.g. as favorite)
    "dir": "ltr", // read direction of your app
    "lang": "en-US", // Main language of app
    "orientation": "portrait-primary", // Set (and enforce) default orientation
    "icons": "[...]" // Config icons (e.g. homescreen)
}
```

Example for `icons`

```javascript
{
    "icons": [
        {
            "src": "/src/images/icons/app-icon-48x48.png", // icon path
            "type": "image/png", // image type
            "sizes": "48x48" // Icon size, browser chooses best one for given device
        },
        {
            "src": "/src/images/icons/app-icon96x96.png", // icon path
            "type": "image/png", // image type
            "sizes": "96x96" // image size
        }
    ]
}
```

#### `Meta Properties for Safari & IE`

Manifest only support for Chrome 49+ and Opera 47+. You can add the meta tags below to enchant Safari and IE. MS Edge and Firefox also have this feature in development. Check [manifest](https://caniuse.com/#search=manifest) for more info.

```html
<!-- safari -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" title="PWAGram">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-57x57.png" sizes="57x57">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-60x60.png" sizes="60x60">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-72x72.png" sizes="72x72">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-76x76.png" sizes="76x76">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-144x144.png" sizes="144x144">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-120x120.png" sizes="120x120">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-144x144.png" sizes="144x144">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-152x152.png" sizes="152x152">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-180x180.png" sizes="180x180">
  <!-- IE -->
  <meta name="msapplication-TileImage" content="/src/images/icons/app-icon-144x144.png">
  <meta name="msapplication-TitleColor" content="#fff">
  <meta name="theme-color" content="#3f51b5">
```