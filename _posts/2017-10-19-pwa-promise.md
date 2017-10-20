---
layout: post
title: "PWA - Promise (Fetch)"
date: 2017-10-19
lang: en-us
---

### {{ page.title }}

#### `Javascript Promise Example`

```javascript
// takes in a callback with two params
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // either 
        resolve("This executed once timer is done");
        reject({code: 400, message: "Error occurred!"});
    }, 3000);
});

// either promise is resolved or rejected, this will get called
promise.then(function (text) { // resolved
    console.log(text);
}).catch(function (err) { // rejected
    console.log(err);
});

console.log("This executed after setTimeout()");
```

#### `Fetch - GET`

```javascript
// fetch returns a promise (resolve/reject)
fetch("https://httpbin.org/ip").then(function (response) {
    return response.json(); // convert the response to json format
}).then(function (data) {
    console.log(data); // output: {origin: "71.35.111.115"}
}).catch(function (err) {
    console.log(err);
});
```
#### `Fetch - POST`

```javascript
fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({message: "Does this work?"})
}).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});
```
