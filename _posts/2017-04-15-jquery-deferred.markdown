---
layout: post
title: "jQuery: Deferred"
date: 2017-04-20
lang: en-us
---

### {{ page.title }}

#### `Loading Dynamic Content Example`

"$.get" method uses Deferred

```javascript
$("#load").click(function () {
    // when these tasks are done "then" enable the proceed button
    $.when(
        $.get("content1.html", function (result) {
            $("#section1").html(result);
        }, "html"), // this 'html' tells the call that we're expecting a 'html' file
        $.get("content2.html", function (result) {
            $("#section2").html(result);
        }, "html"),
        $.get("content3.html", function (result) {
            $("#section3").html(result);
        }, "html"),
    )
    .then(function () {
        $("#proceed").removeAttr("disabled");   
    });
});
```

#### `Error Checking`

Extend the previous example to handle positive and negative results

```javascript
var loadSection = function (options) {
    if (typeof options !== "object") options = {};

    options.selector = options.selector || "";
    options.url = options.url || "";

    return $.get(options.url, function (result) {
        $(options.selector).html(result);
    }, "html");
}

$("#load").click(function () {
    $.when(
        loadSection({ selector: "#section1", url: "content1.html" }),
        loadSection({ selector: "#section2", url: "content2.html" }),
        loadSection({ selector: "#section3", url: "content3.html" })
    )
    .then(function () {
        $("#proceed").removeAttr("disabled");   
    });
});
```