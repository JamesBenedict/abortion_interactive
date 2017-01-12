// on button click
// loop through and find each .page in the html
// on the next click, hide $this and display nexxt
$( ".page" ).first().addClass('active');
$( ".page" ).first().addClass('cover_page');
$(".page").last().addClass('back_page');

function checkNavigation() {
	
	if ($('.page').hasClass('cover_page')) {
        $('.prev').hide();
        $('#next').show();
    } else if ($('.page').hasClass('back_page')) {
        $('#next').hide();
        $('.prev').show();
    } else {
        $('.prev').show();
        $('#next').show();
    }
}
// no slide up but looping
// $('#next').click(function(){
// 	 // $('#active').hide();
// 	 var $toShow = $('.active').next('.page').length > 0 ?  $('.active').next('.page') : $('#cover_page');
// 	 $('.active').removeClass('active');
// 	 $toShow.addClass('active');
// });


var flipbook = function () {
	$('#next').click(function(){
	checkNavigation();
	 	 var $toShow = $('.active').next('.page').length > 0 ?  $('.active').next('.page') : $('#cover_page');
		 $('.active').fadeOut('slow', function() {
		 	$(this).remove();
		 });
		 // removeClass('active');
		 $toShow.fadeIn('slow', function() {
		 	$(this).addClass('active');
		 });
	});

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
 
};


$(document).ready(flipbook);




