---
layout: post
title: "JS: Retrieving property name"
date: 2016-12-06
lang: en-us
---

# {{page.title}}

### Retrieve object name without "hasOwnProperty"

Check object property with 'hasOwnProperty' before push it to array.

	var books = {
	  b1: "Star war",
	  b2: "Lord of the ring"
	}

	var bookHub = [];

	for (var key in books) {
	  // don't get the names of inherited properties
	  if (books.hasOwnProperty(key)) {
	    bookHub.push(key);
	  }
	}

	// output: ["b1", "b2"]
	console.log(bookHub);

Using 'Object.keys'

	var books = {
	  b1: "Star war",
	  b2: "Lord of the ring"
	}

	var bookHub = Object.keys(books);

	// output: ["b1", "b2"]
	console.log(bookHub);

#### Browser compatibility

[Object.key()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Browser_compatibility)