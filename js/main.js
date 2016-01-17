var myApp = myApp || {};
myApp.navigation = myApp.navigation || {};

(function() {
	// private function
	function privateMenuToggle() {
		$(window).resize(function() {
			if (window.innerWidth >= 540) {
				$("nav ul").show();
			} else {
				$("nav ul").hide();
			}
		});
	}

	// publich function
	myApp.navigation.publicMenuToggle = function() {
		privateMenuToggle();
	}
})();



$(function() {
	$(".year").text(new Date().getFullYear());

	$(".hamburger").on("click", function(e) {
		e.preventDefault();
		$(".jt-header-wrapper nav ul").slideToggle();
	});

	myApp.navigation.publicMenuToggle();
	
});