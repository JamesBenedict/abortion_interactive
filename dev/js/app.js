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

  clinics: {
    0: {
      name: "Clinic A",
      address: " ",
      hours: "<ul><li>xx</li><li>yy</li></ul>",
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d783460.9461926215!2d-86.241716!3d39.910191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae06b59be2e1ba1a!2sPlanned+Parenthood+-+Georgetown+Health+Center!5e0!3m2!1sen!2sus!4v1485405853911" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      distance: "20 miles",
      time: " "
      },
    1: {
      name: "Clinic B",
      address: " ",
      hours: "yy",
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d783460.9461926215!2d-86.241716!3d39.910191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae06b59be2e1ba1a!2sPlanned+Parenthood+-+Georgetown+Health+Center!5e0!3m2!1sen!2sus!4v1485405853911" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
      distance: "",
      time: ""
    },
    2: {
     name: "Clinic C",
     address: " ",
     hours: "zz",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d783460.9461926215!2d-86.241716!3d39.910191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae06b59be2e1ba1a!2sPlanned+Parenthood+-+Georgetown+Health+Center!5e0!3m2!1sen!2sus!4v1485405853911" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },
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
  // var template = $('#map_hb').html();
  // var templateScript = Handlebars.compile(template);
  // var html = templateScript(context);

  // // console.log(jordanData.insurance.class);
  // console.log('mapCard')

  // $('#map_content').append(html);
  $('.clinic_name').append(context.clinics[0].name);
  $('.clinic_distance').append(context.clinics[0].distance);
  $('.clinic_hours').append(context.clinics[0].hours);
  $('.clinic_map').append(context.clinics[0].map);

  console.log('ye')
  clinicNum = 1

  $('.map_button').click(function (){
      // console.log(context.insurance.class);
      // clinicNum = 'clinic2';
      var localClinincNum = clinicNum.toString(),
      clinicCount = Object.size(context.clinics)-1;

      clinicName = context.clinics[clinicNum].name;
      console.log(clinicName);

      // $('.clinic').text('').append(clinicName);

      $('.clinic_name').text('').append(context.clinics[clinicNum].name);
      $('.clinic_distance').text('').append(context.clinics[clinicNum].distance);
      $('.clinic_hours').text('').append(context.clinics[clinicNum].hours);
      $('.clinic_map').text('').append(context.clinics[clinicNum].map);
      
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
  //   insuranceCard();
  // mapCard();
    characterSelection();
    window.onresize = function () { 
      charCardHeight();
    }    
});

