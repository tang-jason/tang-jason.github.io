var myApp = (function() {

	// private method
	

	return {

	}

})();

// document.ready
$(function() {

	$(".hamburger").on("click", function(e) {
		e.preventDefault();
		$(".jt-header-wrapper nav ul").slideToggle();
	});

	//myApp.navigation.menuLink();
});

//console.log(myApp.navigation.menuLink());