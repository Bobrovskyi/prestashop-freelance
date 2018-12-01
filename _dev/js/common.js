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


// Features
    $(".feature-options__links .feature-options__link").click(function(e) {
    	e.preventDefault();
        $(".feature-options__links .feature-options__link").removeClass("active").eq($(this).index()).addClass("active");
        $(".feature-options__descr-item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");

	// $('.feature-options__headings').hover(function() {
	//     $(document).bind('mousewheel DOMMouseScroll',function(){
	//         stopWheel();
	//     }).$(this).unbind('mousewheel DOMMouseScroll');

	// }, function() {
	//     $(document).unbind('mousewheel DOMMouseScroll');
	// });


	// function stopWheel(e){
	//     if(!e){ /* IE7, IE8, Chrome, Safari */
	//         e = window.event;
	//     }
	//     if(e.preventDefault) { /* Chrome, Safari, Firefox */
	//         e.preventDefault();
	//     }
	//     e.returnValue = false; /* IE7, IE8 */
	// }

	// var featuresArr = [];

	// $('.feature-options__links .feature-options__link').each(function(index, el) {
	// 	featuresArr.push($(el));
	// });

	// console.log(featuresArr);

	// $('.feature-options__headings').bind('mousewheel', function(event) {
	//     if (event.originalEvent.wheelDelta >= 0) {
	//         console.log('Scroll up');

	//         	$('.feature-options__links .feature-options__link').each(function(index, el) {
	// 				index -= 1;
	// 				if (index == 0) {
	// 					index = featuresArr.length - 1;
	// 				} else if (index == featuresArr.length - 1) {
	// 					index -= 1;
	// 				}

	// 				if ($('this').index = index) {
	// 					$('this').addClass('active');
	// 				}

	// 				console.log(index);
	// 			});

	//     }
	//     else {
	//         console.log('Scroll down');

	//         	$('.feature-options__links .feature-options__link').each(function(index, el) {
	// 				index+=1;
	// 				if (index == featuresArr.length) {
	// 					index = 0;
	// 				} else if (index == 0) {
	// 					index = 1;
	// 				}

	// 				console.log(index);
	// 			});


	//     }
	// });

});