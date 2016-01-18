var myApp = myApp || {};
myApp.navigation = myApp.navigation || {};

(function() {
	// private function
	myApp.navigation = {
		publicMenuToggle : function() {
			$(window).resize(function() {
				if (window.innerWidth >= 550) {
					$("nav ul").show();
					$(".hamburger").hide();
				} else {
					$(".hamburger").show();
					$("nav ul").hide();
				}
			});
		}
	} 
})();



$(function() {
	myApp.navigation.publicMenuToggle();

	$(".year").text(new Date().getFullYear());

	$(".hamburger").on("click", function(e) {
		e.preventDefault();
		$(".jt-header-wrapper nav ul").slideToggle();
	});
});