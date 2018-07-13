---
layout: post
title: "Parcel - Set-up"
date: 2018-07-12
lang: en-us
---

### {{ page.title }}

Parcel is the build tool for front-end development. If you hate the hassel of setting the build environment with Webpack. Go with Parcel. It has zero configuration and hot-loading out-the-box. Parcel is suitable for small to medium project. Following the steps below to get it set up.

#### `#1: Install Parcel`
```javascript
npm install -g parcel-bundler
```

#### `#2: package.json`
```javascript
npm init -y
```

#### `#3: Create index.html and index.js`
```javascript
type nul > index.html
type nul > index.js
```

#### `#4: Connecting index.js and index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Parcel build envronment set up</title>
</head>
<body>
   <div id="root"></div>

   <script src="index.js"></script>
</body>
</html>
```

#### `#5: Add Parcel script to package.json`
```javascript
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.js -d build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

#### `#6: Start up server`
```javascript
npm start
```

#### `#7: Install babel and react`
```javascript
npm install -S babel-core babel-preset-env bable-preset-react react react-dom
```

#### `#8: Create .babelrc`
```javascript
type nul > .babelrc
```

#### `#9: Config .babelrc`
```javascript
{
   "presets": [
      "env",
      "react"
   ]
}
```

#### `#10: React component`
```javascript
import React from "react";
import ReactDOM from "react-dom";

const App = () = (
   <h1>Hello, React</h1>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

#### `Build production file`
```javascript
npm run build
```

### `DONE!`