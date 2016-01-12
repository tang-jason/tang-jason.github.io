var myApp = myApp || {};

(function() {
	myApp.navigation = {

	}
})();

// document.ready
$(function() {
	$("nav a i.hamburger").on("click", function(e) {
		e.preventDefault();
		$(".jt-header-wrapper nav ul").toggle("fast", 1000);
	});
});

console.log(myApp);