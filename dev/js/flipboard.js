// im testing pc stuff pc stuf pc stuff
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

var main = function () {
    checkNavigation();
    
    $('#next').click(function () {
        
        var activePage = $('.active');
        var nextPage = activePage.next('.page');

        
        if (nextPage.length === 0) {
            nextPage = $('.page').first();
        }

        nextPage.slideDown(700).addClass('active');
        activePage.removeClass('active');
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

		prevSlide.slideDown(700).addClass('active');
		activePage.slideUp(600).removeClass('active');
        // activePage.effect("slide", {"direction" : "up", "mode" : "hide"} , 600).removeClass('active');
        // nextPage.effect("slide", {"direction" : "down", "mode" : "show"} , 1200).addClass('active');

        checkNavigation();
    });
   

};

$(document).ready(main);



