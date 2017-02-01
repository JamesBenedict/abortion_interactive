// var jordanData = {insurance: "denied_insurance", insurance_status: "Denied", cost_low: '400', cost_high:'600', clinic_hours: 'Monday / Tuesday 8AM-4PM'},
var context = {
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

  clinics: {
    0: {
      name: "clinicone",
      address: " ",
      hours: "<ul><li>m/w</li><li>yy</li></ul>",
      distance: "",
      time: " "
      },
    1: {
      name: "clinictwo",
      address: " ",
      hours: "t/w",
      distance: "",
      time: ""
    },
    2: {
     name: "clinicthree",
     address: " ",
     hours: "f/w",
     distance: "",
     time: ""
    },
  } 
}


emmaData =  'emmatest' ,
leahData =  "leahtest" ,
jordanData = '';

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
  var template = $('#map_hb').html();
  var templateScript = Handlebars.compile(template);
  var html = templateScript(context);

  // console.log(jordanData.insurance.class);
  console.log('mapCard')

  $('#map_content').append(html);

  clinicNum = 0

  $('.map_button').click(function (){
      // console.log(context.insurance.class);
      // clinicNum = 'clinic2';
      var localClinincNum = clinicNum.toString(),
      clinicCount = Object.size(context.clinics)-1;

      clinicName = context.clinics[clinicNum].hours;
      console.log(clinicName);

      $('.clinic').text('').append(clinicName);

      if (clinicNum < clinicCount){
        clinicNum ++
        console.log(clinicNum)
        return clinicNum;
        this.context = function () {};
      } else{
        clinicNum = 0;
        return clinicNum;
        this.context = function () {}; 
      }
     
     
   

  })
  
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
    insuranceCard();
  mapCard();
    characterSelection();
    window.onresize = function () { 
      charCardHeight();
    }    
});

