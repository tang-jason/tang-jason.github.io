---
layout: post
title: "Use Strict"
date: 2016-01-26
lang: en-us
---

# {{ page.title }}

Results in cleaner JavaScript, with fewer unsafe features, more warnings, and more logical behavior. The normal (nonstrict) mode is sometimes called “sloppy mode.”

#### "strict mode on" ####

To turn on the strict mode, in JavaScript include this.

	"use strict";

Or you can turn on the strict mode per function. Switch strict mode on a global scale will break the legacy code. 

	function strict() { 
	  "use strict";

	  // code here... 
	}

#### Variable must be declared ####

In strict mode, all variables must be declared or you'll get a reference error.

	// wrong
	function sloppyMode() {
	  "use strict";

	  sloppy = 123;
	  console.log(sloppy); // reference error
	}

	// right
	function strictMode() {
	  "use strict"
	  
	  var strict = 123;
	  console.log(strict); // 123
	}

#### Functions must be declared at the top ####

In strict mode, you can't put a function declaration inside a "block". You'll get a <u>syntax error</u> if you do. Function can only declared at the top or immediately within outer function.

	// wrong
	function sloppyMode() {
	  "use strict";

	  if (true) {
	    function innerSloppyMode() {
	      // code here...
	    }
	  }
	}

	// right
	function strictMode() {
	  "use strict";

	  function innerStrictMode() {
	    // code here...
	  }
	}

From the above you can't create function within a "block". However, there is a workaround. Create your function in named expression.
	
	// OK
	function strictMode() {
	  "use strict";

	  if (true) {
	    var innerStrictMode = function() {
	      // code here...
	    }
	  }
	}

#### Illegal manipulations of properties ####

Attempting to set a value to a read-only perperty will give you an error.

	var sloppy = "abc";
	function sloppyMode() {
	  sloppy.length = 4; // no effect, silent failure
	  console.log(sloppy.length); // 3
	}

	// strict mode
	var strict = "abc";
	function strictMode() {
	  "use strict";
	  strict.length = 10; // type error: can not assign to read-only property
	}