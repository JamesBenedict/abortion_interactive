var charCardHeight = function () {
	$('.jordan_img').css('height', $('.jordan').height() );
	$('.emma_img').css('height', $('.emma').height() );
	$('.leah_img').css('height', $('.leah').height() );
	console.log(parseInt($('.jordan').height()))
}

$('#prev').click

var buttonDiv = function() {
  $('.jordan').click(function(){
    console.log('swoop');
  })
}

var navbar = function () {
  $(document).ready( function() {  
    var winHeight = $(window).height(), 
        docHeight = $(document).height(),
        progressBar = $('progress'),
        value = 0,
        max;

    /* Set the max scrollable area */
    max = docHeight - winHeight;
    progressBar.attr('max', max);

    $('#next').click(function () {

    // $(document).on('scroll', function(){
       // value = $(window).scrollTop();
       newValue = parseInt($('.active').height()),
       value += newValue;
       // console.log(newValue);
       // console.log(value);
       progressBar.attr('value', value);
    });

    $('#prev').click(function () {

    // $(document).on('scroll', function(){
       // value = $(window).scrollTop();
       newValue = parseInt($('.active').height()),
       value -= newValue;
       // console.log(newValue);
       // console.log(value);
       progressBar.attr('value', value);
    });
  });
}


$(document).ready(function () {
   charCardHeight();
   navbar();
   buttonDiv();
    window.onresize = function () { 
        charCardHeight();

    }


});
