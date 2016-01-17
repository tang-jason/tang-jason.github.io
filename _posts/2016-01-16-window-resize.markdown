---
layout: post
title: "Window resize()"
date: 2016-01-16
lang: en-us
---

# jQuery resize() method

Using jQuery resize() method to simpliy get the window inner width and determine what to do when in that breakpoint.

#### resize() method

{% highlight jquery %}
$(window).resize(function() {
	if (window.innerWidth >= 540) {
		$("nav ul").show();
	} else {
		$("nav ul").hide();
	}
});
{% endhighlight %}

