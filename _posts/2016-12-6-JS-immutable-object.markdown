---
layout: post
title: "JS: Immutable objects"
date: 2016-12-06
lang: en-us
---

# {{page.title}}

### Immutable objects with "Object.freeze"

Common technique in JavaScript is the use of an object to hold configuration values and we can sometimes accidentally modified the value. To avoid this, we can use "Object.freeze".

#### Using Object.freeze()

	var artist = {
	  name: "Hello Kitty",
	  album: "A pretty cat"
	}

	// make the object immutable (cannot modify)
	Object.freeze(artist);

	function annouce (artist) {
	  // assigning the name rather than testing equality
	  if (artist.name = "Bye kitty") {
	    console.log("meow meow");
	  }
	  else {
	    console.log(artist.name);
	  }
	}

	// output: meow meow
	annouce(artist);

	// output: {name: "Hello kitty", album: "A pretty cat"} <= no modification to the object
	console.log(artist);

#### Using Ojbect.isFroze()
In 'strict' mode, this will throw an error. Use 'isFroze' to check

	var artist = {
	  name: "Hello kitty",
	  album: "A pretty cat"
	}

	(function() {
	  "use strict";

	  // output: wink wink
	  if (Ojbect.isFroze(artist)) {
	    console.log("wink wink");
	  }
	})();

#### Browser compatibility
[Object.freeze()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#Browser_compatibility) - Made object immutable

[Ojbect.isFroze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen#Browser_compatibility) - Determines if an object is frozen. Return a boolean value.