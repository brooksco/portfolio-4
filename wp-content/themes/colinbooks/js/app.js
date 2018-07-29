$.fancybox.defaults.buttons = [
"close"
]

$.fancybox.defaults.infobar = false;

var $gallery = $('.gallery').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.gallery-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.gallery-item'
}
})

$gallery.one( 'arrangeComplete', function() {
	console.log('arrange done, just this one time');
});

$(document).ready(function() {
	$gallery.isotope();
	$gallery.addClass('active');
});
