// on button click
// loop through and find each .page in the html
// on the next click, hide $this and display nexxt

// $('#next').click(function(){
//     $(this).css('color', 'red');
// });

// $('.body .page:nth-child(3)').attr('id', 'active');
$( ".page" ).first().addClass('active');

// $("a.next").click(function() {
//     $('.first').toggleClass("first");
//     var $toHighlight = $('.doShow').next('li').length > 0 ? $('.doShow').next('li') : $('.event_months li').first();
//     $('.doShow').removeClass('doShow');
//     $toHighlight.addClass('doShow');
// });


$('#next').click(function(){
	 // $('#active').hide();
	 var $toShow = $('.active').next('.page');
	  // > 0 ? $('#first');
	 $('.active').removeClass('active');
	 $toShow.addClass('active');
});



