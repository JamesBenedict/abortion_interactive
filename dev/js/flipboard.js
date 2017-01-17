// on button click
// loop through and find each .page in the html
// on the next click, hide $this and display nexxt
// http://jsfiddle.net/794f4yvw/12/
$( ".page" ).first().addClass('active');
$( ".page" ).first().addClass('first');
$(".page").last().addClass('last');

function checkNavigation() {
    if ($('.active').hasClass('first')) {
        $('#prev').hide();
        $('#next').show();
    } else if ($('.active').hasClass('last')) {
        $('#next').hide();
        $('#prev').show();
    } else {
        $('#prev').show();
        $('#next').show();
    }
}

// var advancment = function () {
// 	nextPage.addClass('active').slideDown(700);

// }

var main = function () {
    checkNavigation();
    
    $('#next').click(function () {
        
        var activePage = $('.active');
        var nextPage = activePage.next('.page');

        
        if (nextPage.length === 0) {
            nextPage = $('.page').first();
        }

        if (nextPage.hasClass('time_delay')){
        
        	nextPage.slideDown(700).addClass('active').removeClass('time_delay');
        	activePage.removeClass('active');
        
        	// time delay for coun
        	setTimeout(function(){
        		$('#next').prop('disabled', true);
        		
        	}, 1000)


        	setTimeout(function(){
        		$('#next').prop('disabled', false);
        		// nextPage.slideDown(700).addClass('active').removeClass('time_delay');
        		// activePage.removeClass('active');
        	}, 5000)
	        	



        	// setTimeout(advancment(activePage, nextPage), 5000);
        	// activePage.delay(200000).removeClass('active');
        } else{
        	// $('#next').prop('disabled', false);
        	activePage.slideDown(100).delay(10).removeClass('active');
        	nextPage.slideDown(700).addClass('active');
        }
  		

  		
      
     	
        // activePage.slideUp(1200).removeClass('active');
        // activePage.removeClass('active');
        // activePage.effect("slide", {"direction" : "up", "mode" : "hide"} , 600).removeClass('active');
        // nextPage.effect("slide", {"direction" : "down", "mode" : "show"} , 1200).addClass('active');
        checkNavigation();
    });

    //prev slide function
    $('#prev').click(function () {
        var activePage = $('.active');
        var prevSlide = activePage.prev('.page');

        if (prevSlide.length === 0) {
            prevSlide = $('.page').last();
        }

        // prevSlide.slideDown(1200).addClass('active');
        // activePage.slideUp(1200).removeClass('active');
// 

		prevSlide.fadeIn(700).addClass('active');
		activePage.fadeIn(600).removeClass('active');
        // activePage.effect("slide", {"direction" : "up", "mode" : "hide"} , 600).removeClass('active');
        // nextPage.effect("slide", {"direction" : "down", "mode" : "show"} , 1200).addClass('active');

        checkNavigation();
    });
   

};

$(document).ready(main);



