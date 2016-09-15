---
layout: post
date: 2016-05-15
title: JS Interview Questions
lang: en-us
---

# {{ page.title }}

Small and possible JavaScript interview questions and solutions.

#### Reverse a string in JavaScript ####

1: Using built-in functions

	function reverseString(str) {
	  return str.split("").reverse().join("");
	}

	reverseString("hello");

2: Using for loop

	function reverseString(str) {
	  var newString = "";
	  
	  for (var i = str.length - 1; i >= 0; i--) {
	    newString += str[i];
	  }

	  return newString;
	}

	reverseString("hello");

3: Using recursion

	function reverseString(str) {
	  if (str === "") {
	    return "";
	  }
	  else {
	    return reverseString(str.substr(1)) + str.charAt(0);
	  }
	}

	reverseString("hello");
