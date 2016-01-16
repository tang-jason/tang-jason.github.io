$(function() {
	$(".year").text(new Date().getFullYear());

	$(".hamburger").on("click", function(e) {
		e.preventDefault();
		$(".jt-header-wrapper nav ul").slideToggle();
	});
});