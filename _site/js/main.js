var myApp = myApp || {};
myApp.navigation = myApp.navigation || {};

(function () {
	// private functions
	function privateMenuToggle() {
		$(window).resize(function () {
			if (window.innerWidth >= 550) {
				$("nav ul").show();
				$(".hamburger").hide();
			} else {
				$(".hamburger").show();
				$("nav ul").hide();
			}
		});
	}

	function privateHamburgerToggle() {
		$(".hamburger").on("click", function(e) {
			e.preventDefault();
			$(".jt-header-wrapper nav ul").slideToggle();
		});
	}

	function privateLinkHover() {
		$("a").hover(function() { // inFunction : mouse enter
			$(this).css({
				"color" : "#ce2c38",
				"text-decoration" : "none"
			});
		}, function() { // outFunction : mouse leave
			$(this).css("color", "");
		});
		$(".btn").css("border-radius", "0px	");
		$(".btn-primary").hover(function() { // inFunction
			$(this).css({
				"background-color" : "#ce2c38",
				"color" : "#ffffff",
				"border-color" : "#ce2c38"
			});
		}, function() { // outFunction
			$(this).css({
				"background-color" : "",
				"color" : "",
				"border-color" : ""
			});
		});
	}

	function privateGetYear() {
		$(".year").text(new Date().getFullYear());
	}

	// public
	myApp.navigation = {
		navManipulation : {
			menuToggle : function() {
				privateMenuToggle();
			},
			hamburgerToggle : function() {
				privateHamburgerToggle();
			}
		},
		linkManipulation : { 
			linkHover: function() {
				privateLinkHover(); 
			}
		},
		miscManipulation : {
			getYear : function() {
				privateGetYear();
			}
		}
	} 
})();

// initilize the public methods
var init = function() {
	myApp.navigation.navManipulation.menuToggle();
	myApp.navigation.navManipulation.hamburgerToggle();
	myApp.navigation.linkManipulation.linkHover();
	myApp.navigation.miscManipulation.getYear();
}

// Call the init method when document is loaded
$(function() {
	init();
});