var charCardHeight = function () {
	$('.jordan_img').css('height', $('.jordan').height() );
	$('.emma_img').css('height', $('.emma').height() );
	$('.leah_img').css('height', $('.leah').height() );
	console.log(parseInt($('.jordan').height()))
}

$(document).ready(function () {
   charCardHeight();

    window.onresize = function () { 
        charCardHeight();
        
    }


});
