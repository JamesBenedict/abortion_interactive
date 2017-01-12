// on button click
// loop through and find each .page in the html
// on the next click, hide $this and display nexxt

// $('#next').click(function(){
//     $(this).css('color', 'red');
// });

// $('.body .page:nth-child(3)').attr('id', 'active');
$( ".page" ).first().addClass('active');
$(".page").last().addClass('back_page');
// no slide up but looping
// $('#next').click(function(){
// 	 // $('#active').hide();
// 	 var $toShow = $('.active').next('.page').length > 0 ?  $('.active').next('.page') : $('#cover_page');
// 	 $('.active').removeClass('active');
// 	 $toShow.addClass('active');
// });

$('#next').click(function(){

	 if($(this).hasClass('.back_page')){
	 	$('#next').hide();

	 } else{
	 	 var $toShow = $('.active').next('.page').length > 0 ?  $('.active').next('.page') : $('#cover_page');
		 $('.active').slideUp('slow', function() {
		 	$(this).remove();
		 });
		 // removeClass('active');
		 $toShow.fadeIn('slow', function() {
		 	$(this).addClass('active');
		 });



	 }


	

	 
});

