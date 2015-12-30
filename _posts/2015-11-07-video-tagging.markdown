---
layout: default
title:  "Video Tagging"
date:   2015-11-07 17:15:25 -0800
---

jQuery and JavaScript solutions for HTML5 and YouTube custom video tagging.

{% highlight javascript %}
// jQuery HTML 5 video tagging
$(function() {
  $("video").on("play", function() {
    // custom tag here...
  });
})
{% endhighlight %}

{% highlight javascript %}
// JavaScript YouTube tagging
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstTag = document.getElementsByTagName("script")[0];
firstTag.parentNode.insertBefore(tag, firstTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "YT_ID",
    events: {
      "onReady": onPlayerReady
    }
  });
}

function onPlayerReady() {
  player.addEventListener("onStateChange", function(e) {
    if (e.data == 1) {
      // custom tag here...
    };
  });
}
{% endhighlight %}
