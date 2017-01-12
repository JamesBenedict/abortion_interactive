// on button click
// loop through and find each .page in the html
// on the next click, hide $this and display nexxt

// no slide up but looping
// $('#next').click(function(){
// 	 // $('#active').hide();
// 	 var $toShow = $('.active').next('.page').length > 0 ?  $('.active').next('.page') : $('#cover_page');
// 	 $('.active').removeClass('active');
// 	 $toShow.addClass('active');
// });


// $( ".page" ).first().addClass('active');
// $( ".page" ).first().addClass('cover_page');
// $(".page").last().addClass('back_page');

// function checkNavigation() {
	
// 	if ($('.page').hasClass('cover_page')) {
//         $('.prev').hide();
//         $('#next').show();
//     } else if ($('.page').hasClass('back_page')) {
//         $('#next').hide();
//         $('.prev').show();
//     } else {
//         $('.prev').show();
//         $('#next').show();
//     }
// }

// var flipbook = function () {
// 	$('#next').click(function(){
// 	checkNavigation();
// 	 	 var $toShow = $('.active').next('.page').length > 0 ?  $('.active').next('.page') : $('#cover_page');
// 		 $('.active').fadeOut('slow', function() {
// 		 	$(this).remove();
// 		 });
// 		 // removeClass('active');
// 		 $toShow.fadeIn('slow', function() {
// 		 	$(this).addClass('active');
// 		 });
// 	});

	// $('#prev').click(function(){
	// 	checkNavigation();
	//  	 var $toShow = $('.active').prev('.page').length > 0 ?  $('.active').prev('.page') : $('#cover_page');
	// 	 $('.active').slideDown('slow', function() {
	// 	 	$(this).remove();
	// 	 });
	// 	 // removeClass('active');
	// 	 $toShow.fadeOut('slow', function() {
	// 	 	$(this).addClass('active');
	// 	 });
	// });
 
// };
// $(document).ready(flipbook);


$( ".page" ).first().addClass('active-slide');
$( ".page" ).first().addClass('first');
$(".page").last().addClass('last');

function checkNavigation() {

    if ($('.active-slide').hasClass('first')) {
        $('#prev').hide();
        $('#next').show();
    } else if ($('.active-slide').hasClass('last')) {
        $('#next').hide();
        $('#prev').show();
    } else {
        $('#prev').show();
        $('#next').show();
    }

}

var main = function () {
    checkNavigation();
    
    $('#next').click(function () {
        
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next('.page');

        //if nextslide is last slide, go back to the first
        if (nextSlide.length === 0) {
            nextSlide = $('.page').first();
        }

        currentSlide.fadeOut(500).removeClass('active-slide');
        nextSlide.fadeIn(1100).addClass('active-slide');

        checkNavigation();
    });

    //prev slide function
    $('#prev').click(function () {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev('.page');

        if (prevSlide.length === 0) {
            prevSlide = $('.page').last();
        }

        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
         checkNavigation();
    });
   

};

$(document).ready(main);



