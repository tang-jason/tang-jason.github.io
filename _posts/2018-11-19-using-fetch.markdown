---
layout: post
title: "ES6 - Fetch"
date: 2018-11-19
lang: en-us
---

### {{ page.title }}

Using `fetch` over `ajax` for send/retrieve information with JavaScript. `fetch` is not supported in IE.

#### `GET with Fetch`

There are other methods to deal with different types of response. If you are requesting an `XML` file, then use `response.text`. For image, you call `response.blob`.

The conversion methods `response.json` returns another promise, so we can get the data we wanted with another `.then` call.

```javascript
fetch("https://api.github.com/users/tang-jason/repos")
  .then(response => response.json())
  .then(data => {
    console.log("data", data);
  });
```

#### `POST with Fetch`

```javascript
let data = { blob: 'data to post to server' };

fetch("url", {
  method: "post",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(data)
})
```

#### `Handling Errors with Fetch`

To get `status` and `statusText` into the `.catch` call, we can reject a JavaScript object.

```javascript
fetch("invalid_url")
  .then(response => {
    if (response.ok)
      return response.json();
    else
      return Promise.reject({
        status: response.status,
        statusText: response.statusText
      });
  })
  .then(data => {
    console.log("data: ", data);
  })
  .catch(error => {
    if (error.status === 404) {
      // do something about 404
    }
    else if (error.status === 400) {
      // do something about 400 (bad request)
    }
  });
```