---
layout: post
title: "JS - $.when"
date: 2018-04-07
lang: en-us
---

### {{ page.title }}

The example below is to finish all async operation before invoke a function by using `$.when`.

```javascript
for (let url in $urls) {
   if (!$urls.hasOwnProperty(url)) continue;
   feedUrls.unshift($urls[url]);
}

feedUrls.forEach((url) => {
   ajaxRequests.push(
      $.ajax({
         method: "GET",
         url: url,
         success: (xml) => {
            let channel = xml.getElementsByTagName("channel")[0];
            xmlDocs.push(channel);
         },
         error: () => {
            // code here...
         }
      })
   );
});

$.when.apply(null, ajaxRequests).then(() => {
   createBlogEntry(xmlDocs);
});
```

If you don't care about the rendering order. The above solution is perfectly fine. If you want to render your item in the order you wanted, use the solution below.

```javascript
let requestIndex = 0;

let ajaxRequest = function (url) {
   $.get(url).done((xml) => {
      let channel = xml.getElementsByTagName("channel")[0];
      xmlDocs.push(channel);

      requestIndex++;

      if (requestIndex < feedUrls.length) 
         ajaxRequest(feedUrls[requestIndex]);
      else
         createBlogEntry(xmlDocs);
   }).fail(() => {
      // code here...
   });
};

// Initialize the first ajax request
ajaxRequest(feedUrls[requestIndex]);
```