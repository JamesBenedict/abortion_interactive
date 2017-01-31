// var jordanData = {insurance: "denied_insurance", insurance_status: "Denied", cost_low: '400', cost_high:'600', clinic_hours: 'Monday / Tuesday 8AM-4PM'},
var jordanData = {
  // insurance: "denied_insurance",
  // insurance_status: "Denied",
  // cost_low: '400',
  // cost_high:'600',
  insurance: {
    class: 'denied_insurance',
    status: 'Denied',
    cost_low: '400',
    cost_high: '600'
  },

  
  clinic1: {
    name: " ",
    address: " ",
    hours: "m/w",
    distance: "",
    time: " "
   },
  clinic2: {
    name: " ",
    address: " ",
    hours: "m/w",
    distance: "",
    time: ""
  },
 clinic3: {
   name: " ",
   address: " ",
   hours: "m/w",
   distance: "",
   time: ""
 },
 clinic4: {
   name: " ",
   address: " ",
   hours: "m/w",
   distance: "",
   time: ""
 },
 clinic5: {
   name: " ",
   address: " ",
   hours: "m/w",
   distance: "",
   time: ""
 },
 clinic6: {
   name: " ",
   address: " ",
   hours: "m/w",
   distance: "",
   time: ""
 }
 
}


emmaData =  'emmatest' ,
leahData =  "leahtest" ,
context = '';

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


var characterSelection = function () {
  $('.characterCard').click(function () {
    var name = $(this).attr('data');
    if (name == 'leah'){
      context = leahData;
      console.log(context.length);
      loadData(); 
      return context;
      this.context = function () {}; 
      
    } else if (name == 'emma'){
      context = emmaData;
      // console.log(context);
      console.log(context.length);
      loadData(); 
      return context;
      this.context = function () {};
       
    } else {
      context = jordanData;
      // console.log(context);
      console.log(Object.size(context));
      loadData(); 
      return context;
      this.context = function () {}; 
    }

  })

}

var insuranceCard = function(){
  $('.insurance').click(function () {
      // var x = context;
      // console.log(x[0]);
      $('.insurance').css('transition', '2s ease-in-out').hide();
      // alert(context);
      var template = $('#insurance_hb').html();
      var templateScript = Handlebars.compile(template);
      var html = templateScript(context);
      console.log(context)
      $('#insurance_content').append(html);
  })
}

var mapCard = function () {
  // var template = $('#handlebars-demo').html();
  // var templateScript = Handlebars.compile(template);
  // var html = templateScript(context);
  // $('#content').append(html);
  var template = $('#map_hb').html();
  var templateScript = Handlebars.compile(template);
  var html = templateScript(context);
  console.log(context)
  $('#map_content').append(html);

}

var charCardHeight = function () {
	$('.jordan_img').css('height', $('.jordan').height() );
	$('.emma_img').css('height', $('.emma').height() );
	$('.leah_img').css('height', $('.leah').height() );
	// console.log(parseInt($('.jordan').height()))
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


var loadData = function (){
  insuranceCard();
  mapCard(); 
}

$(document).ready(function () {
    charCardHeight();
    navbar();
    characterSelection();
    window.onresize = function () { 
      charCardHeight();
    }    
});

