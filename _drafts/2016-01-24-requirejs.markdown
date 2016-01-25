---
layout: post
title: Require JS
date: 2016-01-24
lang: en-us
---

# {{ page.title }}

How to use require.js in your project. You can find the [documentation](http://requirejs.org/). 

#### Step 1 ####

load your script after requirejs loads.

{% highlight html %}
<head>
  // data-main attr tells the require.js to load script.js after require.js loads.
  <script src="require.js" data-main="your script.js"></script>
</head>
{% endhighlight %}

#### Step 2 ####

We can also load the required libraries like jQuery in config.

{% highlight javascript %}
require.config({
  paths : {
    // here we're telling requirejs what to load. In this case, we're loading jQuery.
    // requirejs will also add the extension (.js)
    jquery : 'jquery-2.1.1.min'
  }
});
{% endhighlight %}

To specific what module we're depending on. RequireJS adds a function named "require()" to the global scope. It loads this dependancy before we can proceed.

{% highlight javascript %}
// 1st param is the depandency and 2nd param is the callback function
// module laoding in requirejs is async
require([jquery], function() {
  // code here
});
{% endhighlight %}

Syntax
	require({dependencyArray}, {callbackFunction});
	require(["dependency1", "dependency2"], function() {...});

#### Step 3 ####

Create the module using define() function.

{% highlight javascript %}
define("module", [], function() {
  "use strict";
  // code here...
})
{% endhighlight %}

Syntax 

	define({moduleNameString}, {dependencyArray}, {callbackFunction});
	
	// simplified common JS wrapper
	define({moduleNameString}, function(require, export, module) {
	  var {module} = require({moduleName});

	  export.{publicMember} = {publicValue};
	})