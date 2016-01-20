var myApp = myApp || {};
myApp.navigation = myApp.navigation || {};


(function() {
	myApp.navigation = {
		toggle : {
			menuToggle : function() {
				$(window).resize(function() {
					if (window.innerWidth >= 550) {
						$("nav ul").show();
						$(".hamburger").hide();
					} else {
						$(".hamburger").show();
						$("nav ul").hide();
					}
				});
			},
			hamburgerToggle : function() {
				$(".hamburger").on("click", function(e) {
					e.preventDefault();
					$(".jt-header-wrapper nav ul").slideToggle();
				});
			}
		},
		linkHover : function() {
			$("a").hover(function() { // inFunction : mouse over
				$(this).css("color", "#ce2c38");
			}, function() { // outFunction : mouse out
				$(this).css("color", "");
			});
			$(".btn").css("border-radius", "0px	")
			$(".btn-primary").hover(function() {
				$(this).css({
					"background-color" : "#ce2c38",
					"color" : "#ffffff",
					"border-color" : "#ce2c38"
				});
			}, function() {
				$(this).css({
					"background-color" : "",
					"color" : "",
					"border-color" : ""
				});
			});
		},
		misc : function() {
			$(".year").text(new Date().getFullYear());
		}
	} 
})();

var init = function() {
	// cached reference
	var appNav = myApp.navigation
	var appToggle = myApp.navigation.toggle;

	appToggle.hamburgerToggle()
	appToggle.menuToggle();

	appNav.linkHover();
	appNav.misc();
}

$(function() {
	init();
});