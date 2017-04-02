---
layout: post
title: "JS: Prototype"
date: 2016-02-17
lang: en-us
---

# {{ page.title }}

#### Step 1 ####

	function Cat(name, color) {
	  this.name = name;
	  this.color = color;
	}

When we first created the cat function, JavaScript also created another object in memory. At this point, it's just an empty object. 

#### Step 2 ####

	Cat.prototype.age = 3;

We can manipulate the function's prototype object like above. When we add the age to the Cat's prototype. It adds that property to the Cat object. Remember we haven't even created the a Cat object from our function yet. This object is just a hidden prototype object that JavaScript created behind the scenes.

#### Step 3 ####

	var fluffy = new Cat("Fluffy", "white");

The "new" keyword takes care of creating a new object. And it also created a new proto (<u>__proto__:Cat</u>) property to the new object. And that property is a pointer to the Cat function's prototype. Then the "new" keyword executes the Cat function, and the "this" keyword in this context is pointing to our new fluffy object. So it adds the name and color properties to the new object. 

#### Step 4 ####

	function Cat(name, color) {
	  this.name = name;
	  this.color = color;
	}

	Cat.prototype.age = 3;

	var fluffy = new Cat("fluffy", "white");

	console.log(fluffy.age); // return value 3

At this point, only prototype has the property "age" but not the fluffy object. If we ask for fluffy's age. JavaScript will first check fluffy's properties to see if age is exists. If not, it will check the prototype parent properties. Which in this case, it will return <u>age = 3</u>. 

#### Step 5 ####

	function Cat(name, color) {
	  this.name = name;
	  this.color = color;
	}

	Cat.prototype.age = 3;

	var fluffy = new Cat("fluffy", "white");

	fluffy.age = 5;

	console.log(fluffy.age); // return value 5

We can add the age property to fluffy instance and when we ask for fluffy's age. It will return the value of 5 because JavaScript will first check the fluffy instance if it has a age property. If it has, it will return the age value. So the instance properties will override the proptotype properties.

#### Step 6 ####

> <u>A function's prototype:</u> A function's prototype is the object <strong>instance</strong> that will become the prototype for all objects created using this function as a constructor.

> <u>An object's prototype:</u> An object's prototype is the object <strong>instance</strong> from which the object is inherited.

#### Diagram 1 ####

<img class="img-responsive" src="{{ site.baseurl }}/img/graphicalOverviewOfPrototypes.png" alt="Graphical Overview of Prototypes" />


### Changing Prototypes ###

	function Cat(name, color) {
	  this.name = name;
	  this.color = color;
	}

	Cat.prototype.age = 3;

	var fluffy = new Cat("Fluffy", "white");

	console.log(fluffy.age); // return age value 3

	Cat.prototype = { age : 5 }

	var snowBell = new Cat("Snowbell", "brown");

	console.log(snowBell.age); // return age value 5


When we create the new instance of a cat. It created a new object and set it prototype (__proto__) to the current prototype of the Cat function. This highlights the fact that prototypes really are the objects that live in memory.

#### Diagram 2 ####

<img class="img-responsive" src="{{ site.baseurl }}/img/changePrototype.png" alt="Changing prototypes" />

#### Notes ####

	Cat.size = "big";

You cannot add a new property to a prototype the same way as you add a new property to an existing object, because the prototype is not an existing object. 

	function Cat(name, color) {
	  this.name = name;
	  this.color = color;
	  this.size = "big";
	}

To add a new property to a constructor, you must add it to the constructor function.