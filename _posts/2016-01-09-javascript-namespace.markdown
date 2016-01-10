---
layout: default
title: "JavaScript Namespacing"
date: 2016-01-09
---

What is namespacing?

In many programming languages, namespacing is a technique employed to avoid collisions with other objects or variables in the global namespace. 


Single Global Variable Example

{% highlight javascript %}
var myApp = (function() {
	function func = {...};
	return {...}
})();
{% endhighlight %}

Literal Object Notation

{% highlight javascript %}
var myApp = {
	models : {}, // obj
	views : {}, // obj
	controllers : function() { // function
		sub-controller : {} // obj
	}	
};
{% endhighlight %}

Namespacing pattern 01

{% highlight javascript %}
// commom way to check the namespace existence. If already defined, use that instance, otherwise assign a new object.
var myApp = myApp || {};

// attach 'accessibility' namespace to myApp and perform a check.
myApp.accessibility = myApp.accessibility || {};

// anonymous function or closure
(function() {
	myApp.accessibility.updateAccessibility = function() {...};
	myApp.accessibility.removeAccessibility = function() {...};
})();

// You can check the namespace existence using the following.
Option 1: var myApp = myApp || {}; // common way to do it
Option 2  if(!myApp) myApp = {};
Option 3: var myApp = myApp = myApp || {} // more thorough
Option 4: myApp || (myApp = {}); // considered a good practice
Option 5: var myApp = myApp === undefined ? {} : myApp; // more thorough

{% endhighlight %}

Namespacing pattern 02 - nested namespacing

{% highlight javascript %}
// perform a check
var myApp = myApp || {};

// perform a similar check when defining children
myApp.models = myApp.models || {};

myApp.views = myApp.views || {};
myApp.views.landescape = myApp.views.landescape || {};

myApp.controllers = myApp.controllers || {};

myApp.utilities = myApp.utilities || {};
myApp.utilities.destroy = myApp.utilities.destroy || {};

// see a list of namespacing by console it out
console.log(myApp);

{% endhighlight %}

Namespacing parttern 03 - passing namespace to closure

{% highlight javascript %}
// perform a check
var myApp = myApp === undefined ? {} : myApp; // using tenary operator

(function(o) { // namespace reference. o = myApp (true)
	o.foo = "foo"; // public property
	o.bar = function() { // public method
		console.log("bar");
	};
	var moo = "moo"; private property
	function speak() {
		console.log("I can speak!");
	};
})(myApp); // passing in a namespace
{% endhighlight %}


Automated Nested Namespacing

{% highlight javascript %}
var myApp = myApp || {};

function extend(ns, ns_string) {
	var parts = ns_string.split("."),
		parent = ns,
		pl, i;

	if (parts[0] == "myApp") {
		parts = parts.slice(1);
	};

	pl = parts.length;
	for (i = 0; i < pl; i++) {
		if (typeof parent[parts[i]] == "undefined") {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};

// extend myApp with a deeply nested namespace.
var mod = extend(myApp, "myApp.module.module2");

// output to console
console.log(mod);

extend(myApp, "models.views.controllers");

console.log(myApp);

{% endhighlight %}