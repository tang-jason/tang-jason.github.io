---
layout: post
title: "JavaScript Namespacing"
date: 2016-01-09
lang: en-us
---

# What is namespacing?

In many programming languages, namespacing is a technique to avoid collisions with other objects or variables in the global namespace. Different design namespacing partterns.


#### Single Global Variable Example

{% highlight javascript %}
var myApp = (function() {
	// private property
	var privateProperty = "I am private property";

	// private function
	function privateMethod() {
		console.log("I am private method");
	}

	// make private property and method to public. Syntax is same as key : value.
	return {
		myApp.publicProperty : privateProperty,
		myApp.publicMethod : privateMethod()
	}
})();

console.log(myApp.publicProperty);
myApp.publicMethod();

{% endhighlight %}

#### Public Object Literal

{% highlight javascript %}
var myApp = {
	variable : "I am public variable",
	publicMethod : function() {
		console.log("I am public method");
	},
	// you can create as many objects within object as you want.
	collections : {
		controllers : {
			// nested object
		}
	}
}

// you can add property and method directly to namespace.
myApp.utilities = {
	variable : "added to myApp namespace directly",
	create : function() {
		// code here...
	},
	read : function() {
		// code here...
	},
	update : function() {
		// code here...
	},
	delete : function() {
		// code here...
	}
}

// for performance, you can cache the reference
var utils = myApp.utilities;

// print
console.log(myApp);
console.log(myApp.utilities.variable);
myApp.utilities.create();
myApp.utilities.read();
{% endhighlight %}


#### Privacy Namespace Design Pattern 01

{% highlight javascript %}
var myApp01 = (function() {
	// private property
	var privateProperty = "I am private property 01";
	// private method
	function privateMethod() {
		console.log("I am private method 01");
	}

	// public
	// use 'return' when the function is named
	return {
		publicProperty01 : privateProperty,
		publicMethod01 : privateMethod
	}
})();

// print
console.log(myApp01);
console.log(myApp01.publicProperty01);
myApp01.publicMethod01();
{% endhighlight %}


#### Privacy Namespace Design Pattern 02

{% highlight javascript %}
// in larger app, it's always good idea to check the instance. If exists, use it. If not create a new object.
// there are many ways to check and below is a common way to check
var myApp02 = myApp02 || {};

(function() {
	myApp02.collections = {
		variable : "I am a variable 02",
		method : function() {
			console.log("I am a method 02");
		},
		anotherObject : {
			anotherMethod : function() {
				console.log("I am another method 02");
			}
		}
	}
}());

// print
console.log(myApp02);
console.log(myApp02.collections.variable);
myApp02.collections.method();
myApp02.collections.anotherobject.anotherMethod();
{% endhighlight %}


#### Privacy Namespace Design Pattern 03

{% highlight javascript %}
// another way to check. This is more thorought.
var myApp03 = myApp03 === undefined ? {} : myApp03;

// notice we passed in a namespace object as a function parameter.
(function( ns ) {
	ns.variable = "I am a variable 03"
	ns.method = function() {
		console.log("I am a method 03");
	},
	ns.object = {
		anotherVariable : "I am another variable 03",
		anotherMethod : function() {
			console.log("I am another method");
		},
		anotherOjbect : {}
	}
})(myApp03);

// print
console.log(myApp03);
console.log(myApp03.variable);
myApp03.method();
console.log(myApp03.object.anotherVariable);
myApp03.object.anotherMethod();
console.log("Just an empty object: " + myApp03.object.anotherObject);
{% endhighlight %}


#### Privacy Namespace Design Pattern 04

{% highlight javascript %}
// another way to check. This is also considered more thorought.
var myApp04 = myApp04 = myApp04 || {};

(function() {
	// private property
	var privateProperty = "I am private property 04";
	// private method
	function privateMethod(num) {
		console.log("I am private method " + num);
	};
	// private empty object
	var privateObject = {};

	// make private property/method/object public
	myApp04.publicProperty = privateProperty;
	myApp04.publicMethod = function() {
		// invoke private method
		privateMethod("04");
	};
	myApp04.publicObject = privateObject;
})();

// print
console.log(myApp04);
console.log(myApp04.publicProperty);
myApp04.publicMethod();
console.log(myApp04.publicObject);

{% endhighlight %}


#### Namespace injection design pattern 05

{% highlight javascript %}
// another way to check. this is considered a good practice
var myApp05 = (myApp05 || {});
myApp05.collections = myApp05.collections || {};

(function() {
	// private variable
	var val = 5;

	this.getVal = function() {
		return val;
	};

	this.setVal = function(newVal) {
		val = newVal;
	};

	// add new namespace via myApp05.collections
	this.create = {};

// notice the '.apply()'. this is not jquery but a core javascript.
// It substituting 'this' to 'myApp05.collections'
}).apply(myApp05.collections);

(function() {
	this.createMethod = function() {
		console.log("I am injected 05");
	}
}).apply(myApp05.collections.create);

// print
console.log(myApp05);
console.log(myApp05.collections.getVal());
console.log(myApp05.collections.setVal(25));

myApp05.collections.create.createMethod();
{% endhighlight %}