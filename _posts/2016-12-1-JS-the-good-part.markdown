---
layout: post
title: "Book: JS The Good Part"
date: 2016-12-10
lang: en-us
---

# {{page.title}}

#### `String`

Strings are immutable. Once it is made, a string can never be changed.

Strings containing exactly the sdame characters in the same order are considered to be the same string.

	// true
	"d" + "o" + "g" === "dog"

#### `for...in`

It is usually neccessary to test object.hasOwnProperty(variable) to determine whether the property name is truly a member of the object or was found instead on the prototype chain

	for (var prop in obj) {
	  if (obj.hasOwnProperty(prop)) {
	    ...
	  }
	}

#### `throw`

Throw an error in the console

	 throw new Error("You have an error...");

#### `Object Literals`

Quotes around a property's name in an object literal are optional if the name would be a legal JavaScript name and not a reserved word.

	var empty_obj = {};

	var names = {
	  "first-name": "John",
	  "last-name": "Smith"
	}

#### `OR ||`

The || operator can be used to fill in default values.

	var middle = stooge["middle-name"] || "(none)";
	var status = flight.status || "unknown";

#### `Reference`

Objects are passed around by reference. They are never copied.

	var x = stooge;
	x.nickname = "Curly";

	// nick is 'Curly' because x and stooge are references to the same object
	var nick = stooge.nickname; 

	// a, b, and c each refer to a different empty object 
	var a = {}, b = {}, c = {};

	// a, b, and c all refer to the same empty object
	a = b = c = {};

#### `Prototype`

Every object is linked to a prototype object from which it can inherit properties. All objects created from object literals are linked to object.prototype.

#### `Global Abatement`

single global variable for your application. This significantly reduce the chance of bad interactions with other application., widges, or libraries.

	MyApp = {};

	MyApp.names = {
	  "first-name": "John",
	  "last-name": "Smith"
	};

#### `arguments`

If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

	function add() {
	  for (var i = 0; i < arguments.length; i++) {
	    // output: 1, 2, 3, 4
	    console.log(arguments[i]);
	  }
	}

	add(1, 2, 3, 4);

#### `The method invocation pattern`

When a function is stored as property in an object, it's called `method`. When method is invoked, this is bound to that object.

	
	var obj = {
	  value: 0,
	  increment: function(inc) {
	    this.value += typeof inc === "number" ? inc : 1;
	  }
	}

	// output: 1
	obj.increment();

	// output: 20
	console.log(obj.increment(20));