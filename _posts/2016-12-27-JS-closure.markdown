---
layout: post
title: "JS: Closure"
date: 2016-12-27
lang: en-us
---

# {{page.title}}

Closure are functions that refer to independent variables. In other words, these functions `remember` the environment in which they were created.

#### `Lexical Scoping`

In JavaScript, the scope of a variable is defined by its location within the source code and nested function have access to variables declared in their outer scope.

	function init() {
	  var name = "Tico";

	  function displayName() {
        console.log(name); // output: Tico
	  }

      displayName();
	}

	init();

#### `Closure`

A `Closure` is the combination of a function and the lexical environment within which that function was declared. `myFunc` is a reference to the instance of the function `displayName` created when `makeFunc` is run. the instance of `displayName` maintains a reference to its lexical environment, within which the variable name exists. Hence when invoking `myFunc`, the variable name remains available for use and `Tico` is plassed to console.log.

	function makeFunc() {
	  var name = "Tico";

      function displayName() {
        console.log(name);
      }

      return displayName;
	}

	var myFunc = makeFunc();

	myFunc();

#### Another `Closure` example

`add5` and `add10` are both `Closure`. They share the same function body definition, but store different environment. In add5's environment, x is 5. As far as add10 is concernted, x is 10.

	function add(x) {
      return function(y) {
        return x + y;
      };
	}

	var add5 = add(5);
	var add10 = add(10);

	console.log(add5(2)); // output: 7
	console.log(add10(5)); // output: 15

#### `Emulating Private methods with Closure`

Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code. This also known as `module pattern`.

The `Closure` example below has its own environment which is shared 3 functions. `counter.increment`, `counter.declared`, `counter.value`. The environment contains two private items. `privateCounter` and `changeBy`. Neither of these private items can be accessed ddirectly from outside the anonymous function. Instead, they must be accessed by the three public functions that are returned from the anonymous wrapper.

	var counter = (function() {
      var privateCounter = 0;

      function changeBy(value) {
        privateCounter += value
      }

      return {
        increment: function() { changeBy(1) },
        decrement: function() { changeBy(-1) },
        value: function() { return privateCounter }
      }
	})();

	console.log(counter.value()); // output: 0
	counter.increment(); // output +1
	counter.increment(); // output +1
	console.log(counter.value()); // output 2;
	counter.decrement(); // output: -1
	console.log(counter.value()); // output: 1

Notice if we defining an `anonymous function` that creates a counter, and then call it immedicately and assign the result to the counter variable. We could store this function in a separate variable `makeCounter` and use it to create several counters.

	// notice `()` is removed at the end of the function. It's no longer IIFE
	var makeCounter = function() {
      var privateCounter = 0;

      function changeBy(value) {
        privateCounter += value
      }

      return {
        increment: function() { changeBy(1) },
        decrement: function() { changeBy(-1) },
        value: function() { return privateCounter }
      }
	};
	
	var counterA = makeCounter();
	var counterB = makeCounter();

	console.log(counterA.value()); // output: 0
	counterA.increment(); // output +1
	counterA.increment(); // output +1
	console.log(counterA.value()); // output 2;
	counterA.decrement(); // output: -1
	console.log(counterA.value()); // output: 1

	console.log(counterB.value()); // output: 0

