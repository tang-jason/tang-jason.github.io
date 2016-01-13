var myApp = myApp || {};

(function() {
	myApp.navigation = {
		menuLink : function () {
			var $navSelected = $(".jt-header-wrapper nav li");
			$navSelected.on("click", function(e) {
				//e.preventDefault();
				var index = $navSelected.index(this);
				switch(index) {
					case 0:
						"{{ site.baseurl }}/{{ page.lang }}";
						break;
					case 1:
						"{{ site.baseurl }}/{{ page.lang }}/profile.html";
						break;
				}
				console.log(index);
			});
		}
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