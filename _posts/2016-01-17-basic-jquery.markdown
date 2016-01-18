---
layout: post
title: "Basic jQuery usages"
date: 2016-01-17
lang: en-us
---

# {{ page.title }}

Refresh on some basic jQuery methods and usages.

#### How to create element and text

<u>createElement()</u> = create an HTML element

<u>createTextNode()</u> = create a text node

<u>appendChild()</u> = appends a node as the last child of a node

<u>insertuefore()</u> = inert an element uefore a targeted element

<u>childNodes()</u> = returns a collection of a node's child nodes, as a NodeList object

{% highlight javascript %}
// step 1: create an element
var newElement = document.createElement("li");

// step 2: create text node
var newText = document.createTextNode("Coffee");

// step 3: append the text to li
newElement.appendChild(newText);

// step 4: get the ul element to insert a text node
var list = document.getElementsByTagName("ul")[0];

// step 5: insert li before the first child of ul
list.insertBefore(newElement, list.childNodes[0]);
{% endhighlight %}

#### Wrapping elements

<u>wrap()</u> = wraps each of the selected elements

<u>wrapInner()</u> = wraps the content of each selected element

{% highlight javascript %}
// wrap all h1 element with i element
// output: <i><h1>...</h1></i>
$("h1").wrap(document.createElement("i"));

// wrap the content of selected elment
// output: <li><a href="#"></a></li>
$("li").wrapInner("<a/>"); // using a string argument is eaiser
$("ul li a").attr("href", "#");
{% endhighlight %}

#### append() vs appendTo()

	$(target).append(content);
	$(content).appendTo(target);

