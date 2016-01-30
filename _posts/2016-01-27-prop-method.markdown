---
layout: post
title: ".change() vs .on()"
date: 2016-01-27
lang: en-us
---

# {{ page.title }}

Refresh on the basic usage of .change(), .on(), .is(), .prop() in jQuery.

#### Example 1 ####

.attr() vs .prop() vs .is()

{% highlight javascript %}
// HTML setup
<div class="example1">
  <input id="check" type="checkbox" checked="checked" />
  <label for="check">click me</label>
  <div class="box"></div>
</div>


// jQuery
$("input").change(function () {
  var $this = $(this);
  $(".example .box").html(
    ".attr( \" checked \"): <b>" + $this.attr("checked") + "</b><br/>" +
    ".prop( \" checked \"): <b>" + $this.prop("checked") + "</b><br/>" +
    ".is( \" :checked \" ): <b>" + $this.is(":checked") + </b>
  );

}).change();
{% endhighlight %}

Result:
<div class="example1">
	<input id="check" type="checkbox" checked="checked" />
	<label for="check">check me</label>
	<div class="box"></div>
</div>
<script>
	$(".example1 input").change(function () {
		var $input = $(this);
		$(".example1 .box").html(
			".attr( \" checked \"): <b>" + $input.attr("checked") + "</b><br/>" +
		    ".prop( \" checked \"): <b>" + $input.prop("checked") + "</b><br/>" +
		    ".is( \" :checked \" ): <b>" + $input.is(":checked")
		);
	}).change();
</script>

#### Example 2 ####

The above is using .change() it's a shorthand of .on() and the above can be done this way.

{% highlight javascript %}
// HTML setup
<div class="example2">
  <input type="checkbox" id="check2" checked="checked" />
  <label for="check2">Check me</label>
    <div class="box2"></div>
</div>

// jQuery
function handler() {
  var $input = $(this);
  $(".example1 .box").html(
    ".attr( \" checked \"): <b>" + $input.attr("checked") + "</b><br/>" +
    ".prop( \" checked \"): <b>" + $input.prop("checked") + "</b><br/>" +
    ".is( \" :checked \" ): <b>" + $input.is(":checked")
  );
}

$(".example2 input").on("change", handler);
{%  endhighlight %}

Result:

<div class="example2">
	<input id="check" type="checkbox" checked="checked" />
	<label for="check">check me</label>
	<div class="box2"></div>
</div>

<script>
	function handler() {
		var $input = $(this);
		$(".example2 .box2").html(
			".attr( \" checked \"): <b>" + $input.attr("checked") + "</b><br/>" +
		    ".prop( \" checked \"): <b>" + $input.prop("checked") + "</b><br/>" +
		    ".is( \" :checked \" ): <b>" + $input.is(":checked")
		);
	}
	$(".example2 input").on("change", handler);
</script>

#### Example 3 ####

{% highlight javascript %}
// HTML setup
<div class="example3">
  <select multiple="multiple">
    <option selected="selected">Apple</option>
    <option>Banana</option>
    <option>Cherry</option>
  </select>
  <div></div>
</div>

// jQuery
$(".example3 select").change(function() {
  var string = "";
  $(".example3 select option:selected").each(function() {
    string += $(this).text() + " ";
  });
  $(".example3 div").text(string);
}).change();
{% endhighlight %}

Result

<div class="example3">
	<select multiple="multiple">
		<option selected="selected">Apple</option>
		<option>Banana</option>
		<option>Cherry</option>
	</select>
	<div></div>
</div>

<script>
$(".example3 select").change(function() {
	var string = "";
	$(".example3 select option:selected").each(function() {
		string += $(this).text() + " ";
	});
	$(".example3 div").text(string);
}).change();
</script>








