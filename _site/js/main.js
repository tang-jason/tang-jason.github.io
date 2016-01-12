var myApp = myApp || {};

(function() {
	myApp.navigation = {

	}
})();

// document.ready
$(function() {
	$(".hamburger").on("click", function(e) {
		e.preventDefault();
		$(".jt-header-wrapper nav ul").slideToggle();
	});
});

console.log(myApp);