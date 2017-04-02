---
layout: post
title: "JS: Hoisting"
date: 2016-01-25
lang: en-us
---

# {{ page.title }} #

Hoisting is the mechanism in JavaScript where variables are moved to the top of the script and then run. This is because, JavaScript doesn't have lexical scoping. 

{% highlight javascript %}
function hoisted() {
  i = 5;

  // output: 5
  console.log(i);
  // output: type error, testOne is not a function
  console.log(testOne());
  // output: "I am test two"
  console.log(testTWo());

  var testOne = function() {
    return "I am test one";
  }

  function testTwo() {
    return "I am test two";
  }

  var i = 10;
}
{% endhighlight %}

This is how JavaScript sees your declaration.

{% highlight javascript %}
function hoisted() {
  var testOne;

  function testTwo() {
    return "I am test two";
  }

  var i;

  i = 5;

  // output: 5
  console.log(i);
  // output: type error, testOne is not a function
  console.log(testOne());
  // output: "I am test two"
  console.log(testTWo());

  testOne = function() {
    return "I am test one";
  }

  i = 10;
}
{% endhighlight %}

The difference is that the function testOne didn't get hoisted because it was a variable declaration. Variable "i" gets its declaration hoisted and assigned.

It's ideal to declare your variables at the top of your function and declare your function next.