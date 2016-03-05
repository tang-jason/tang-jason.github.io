---
layout: post
title: "jQuery $.ajax"
date: 2016-02-19
lang: en-us
---

# {{ page.title }}

Perform an asynchronous HTTP (AJAX) request.

#### Set up for "POST" ####

	$.ajax({
	  type : "POST",
	  url : url,
	  data : data,
	  success : function() {
	    // function to be called if the request succeeds
	  },
	  error : function() {
	    // function to be called if the request failed
	  }
	});

<u>type</u>: An alias for "method" on your form element. String can be "GET" or "POST".

<u>url</u>: A string containing the URL to which the request is sent.

<u>data</u>: Data to be sent to the server. 

<u>success</u>: It's type of function that accept 3 parameters (data, textStatus, jqXHR).

<u>error</u>: It's type of function that accept 3 parameters (jqXHR, textStatus, errorThrown).

#### Example ####

The example below is to send data to the endpoint using $.ajax post.

1. Users enter their data in the input field.

2. Use jquery to get the user data and store them in the object (that we'll later convert it into json format).

3. send user data to the endpoint.

#### Step 1: HTML Setup ####

Let's put our input fields inside a form element.

	<form role="form" class="uploadForm">
	  <lable for="inputName">Name</label>
	  <input class="inputName" type="text" placeholder="Full name" />

	  <label for="inputEmail">Email</label>
	  <input class="inputEmail" type="email" placeholder="email" />

	  <label for="inputCompany">Company</label>
	  <input class="inputCompany" type="text" placeholder="Company name" />

	  <label for="inputFile">Upload your file...</label>
	  <input class="inputFile" type="file" accept=".html" enctype="multipart/form-data" />
	</form>

The enctype attribute specifies how the form-data should be encoded when submitting it to the server.

<u>Note</u>: The enctype attribute can be used only if method="post".

#### Step 2: Storing user data in an object ####

Assuming user already put in his/her data in the input field. Use jQuery to store the data in an object and convert it into json format. 

	var userName = $(".inputName").text();
	var userEmail = $(".inputEmail").text();
	var userCompany = $(".inputCompany").text();
	var userFile = App.userFile;

	App.userData = {
	  name : userName,
	  email : userEmail,
	  company : userCompany
	}

	var formData = new FormData();

	// "UserData" and "File" must match what you have in the database/server. 
	// Using JSON.stringify() to convert a javascript value to an json string.
	formData.append("UserData", JSON.stringify(App.userData));
	formData.append("File", userFile);

### Step 3: Sending data to the endpoint ####

Now we have the data we need and stored in a formData object. We can send the data to the endpoint.

	App.endpoint = "https://this-is-your-endpoint-url";

	$.ajax({
	  type : "POST",
	  url : App.endpoint,
	  data : formData,
	  processData : false,
	  contentType : false,
	  success : function() { ... },
	  error : function() { ... }
	});

#### Couple things to clarify... ####

I'm storing some data in a namespace like <u>App.endpoint</u> and <u>App.userFile</u>. 

	// create an App object
	var App = App === undefined ? {} : App;

You can get the file in couple way. In this demo I am using <u>change</u> event type.

	$("input[type='file']").on("change", function(event) {
	  
	  var file = event.target.files[0];

	  // assign the file to the global namespace
	  App.userFile = file;
	});


