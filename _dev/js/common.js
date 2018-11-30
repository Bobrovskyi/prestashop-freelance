$(document).ready(function() {

// Mobile nav
	$('#tooggleNav').click(function(event) {
		$(this).toggleClass('active');
		$('.mobile-nav').slideToggle('400');
	});

// Hero animation
    $('.hero__people').stop(true).delay( 1800 )
    		  .animate({opacity: '1'}, 1500);

	$('.hero__cube').stop(true)
    		  .animate({bottom: '57'}, 1800)
    		  .animate({bottom: '47'}, 100)
    		  .animate({bottom: '52'}, 200)
    		  .animate({bottom: '57'}, 300);

	$('.hero__cube-big').stop(true)
    		  .animate({bottom: '0'}, 1000)

});