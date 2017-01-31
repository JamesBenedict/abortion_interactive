var jordanData = "jordantest"
emmaData =  'emmatest' ,
leahData =  "leahtest" ,
context = 'test';

var handlebarsInit = function (context) {
    var template = $('#handlebars-demo').html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(context);

    if ( $('.denied_insurance').length < 2 ){
      $('#content').append(html);
    }
}


var characterSelection = function () {
  $('.characterCard').click(function () {
    var name = $(this).attr('data');

    if (name == 'leah'){
      context = leahData;
      console.log(context);
      return context;
      this.context = function () {};  
    } else if (name == 'emma'){
      context = emmaData;
      console.log(context);
      return context;
      this.context = function () {};  
    } else {
      context = jordanData;
      console.log(context);
      return context;
      this.context = function () {};  
    }
  })
}

var insuranceCard = function(){
  $('.insurance').click(function () {
      var x = context;
      console.log(x);
  })

}


var charCardHeight = function () {
	$('.jordan_img').css('height', $('.jordan').height() );
	$('.emma_img').css('height', $('.emma').height() );
	$('.leah_img').css('height', $('.leah').height() );
	console.log(parseInt($('.jordan').height()))
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
   characterSelection();
   
   insuranceCard();

   // checkInsurance();
   // handlebarsInit();
    window.onresize = function () { 
        charCardHeight();

    }

    
});


