---
layout: post
title: Require JS
date: 2016-01-24
lang: en-us
---

# {{ page.title }}

How to use require.js in your project. You can find the [documentation](http://requirejs.org/). 

#### Step 1 ####

load your script after requirejs loads. "data-main" is the entry point of your script.js.

{% highlight html %}
<head>
  // data-main attr tells the require.js to load script.js after require.js loads.
  <script src="require.js" data-main="your script.js"></script>

  // example
  <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.22/require.min.js" data-main="js/main.js"></script>
</head>
{% endhighlight %}

#### Step 2 ####

Set up the library path (baseUrl). This is where you store your dependencies, like jQuery.

{% highlight javascript %}
require.config({
  // I put my jquery copy in this path location.
  baseUrl: "js/lib",
  paths : {
    // here we're telling requirejs what to load. In this case, we're loading jQuery.
    // requirejs will also add the .js extention automatically.
    jquery : 'jquery-2.1.1.min'
  }
});
{% endhighlight %}

#### Step 3 ####

To create a module using define(). The first parameter is the module name. Second parameter is the dependency array. Thrid parameter is the callback function.

Let's this module doesn't have any dependencies, so we leave the 2nd parameter empty.

{% highlight javascript %}

define("module1", [], function() {
  // private variable and method
  var name = "require JS";

  function privateSave() {
    // code here...
  }

  function privateLoad() {
    // code here...
  }

  function privateClear() {
    // code here...
  }

  // public
  return {
    save: privateSave,
    load: privateLoad,
    clear: privateClear
  }
});
{% endhighlight %}

#### Step 4 ###

Create another module but this module is calling the jquery dependency.

{% highlight javascript %}
// because we're using jquery within this moudle, we need to pass in the jquery dependency.
define("module2", [jquery], function($) {
  $(".container h1").css("background-color", "red");

  // private methods
  function privateCreate() {
    // code here...
  }

  function privateRead() {
    // code here...
  }

  // public
  return {
    create: privateCreate,
    read: privateRead
  }
});
{% endhighlight %}

#### Step 5 ####

Create a moudle that have dependencies of module1 and module2.

Priviously, we created two modules (module1 and module2). Each of these dependencies have its own methods. Now, in this module, we're going to utilize these methods.

{% highlight javascript %}
define("module3", ["jquery", "module1", "module2"], function() {
  // private methods
  function privateUtilities() {
    module1.save();
    module1.load();
    module1.clear();

    module2.creat();
    module2.read();
  }

  // public
  return {
    utilities: privateUtilities
  }
});
{% endhighlight %}

### Step 6 ####

Create an app module to use the simplified wrapper design pattern.

{% highlight javascript %}
// app is the name of the module. 1st param of the callback is jquery. 2nd param is the module3. 3rd param is optional.
define("app", function(require, export, module) {
  var $ = require("jquery");
  var module3 = require("module3");

  // private methods
  function registerEventHandlers() {
    // local scope
    function getUtilities() {
      module3.utilities();
    }

    // let's say we have this id in our DOM
    $("#utilities-button").on("click", getUtilities);
  }

  // public
  export.init = function() {
    registerEventHandlers();
  }
});
{% endhighlight %}

#### Step 7 ####

{% highlight javascript %}
// require a module which is "app".
require(["app"], function(app) {
  app.init();
});
{% endhighlight %}

#### Module dependencies diagram ####

<img class="img-responsive" src="{{ site.baseurl }}/img/dependencies.png" alt="module dependency diagram" />