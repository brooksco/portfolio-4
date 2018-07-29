$(document).ready(function() {
// Smooth anchor link scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
	var offset = -64;
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top + offset
			}, 1000);
			return false;
		}
	}
});
});
