// basic algoithm
// on button click
	// loop through and find each .page in the html
	// locates the active and next page in the list
	// if next page has special cirumstances (time delay for instance) do them 
	// hides the active page and transitions to the next page
	// updates the active page
// disable next/back for first/last page respectively

// helpful terms
	// card: the container for your content, in this example it is the white rectangle
	// page: the container for your card(s) and the div that the animations/transitions are applied to. In this example it is the color background
	// book: the entire interactive that contains all pages 

// sets up the domain and defines the start page
$( ".page" ).first().addClass('active');
$( ".page" ).first().addClass('first');
$(".page").last().addClass('last');

function checkNavigation() {
	// hides / shows the next/back buttons depending if the page is the first or last page in the book
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


var navigation = function () {
	// manages the next/back button navigation
    checkNavigation();
    
    $('#next').click(function () {
    	 // code for next button
        var activePage = $('.active'),
        nextPage = activePage.next('.page'),
        nextTransition = nextPage.slideDown(700).addClass('active'),
        activeTransition = activePage.slideDown(100).delay(100).removeClass('active');
        // would be useful if I wanted to loop, but for now I don't. Didnt want to delete yet
        // if (nextPage.length === 0) {
        //     nextPage = $('.page').first();
        // }

        // conditional events for certain slides 
        if (nextPage.hasClass('time_delay')){
        // this adds a delay stopping the next button from working for 2 seconds 
        	nextTransition
        	activeTransition
        	// initally disables the next button
        	$('#next').prop('disabled', true);
        
        	// gives user back control after time delay
        	setTimeout(function(){
        		$('#next').prop('disabled', false);
        	}, 2000)
        } else{
        	// regular slide transition
        	activeTransition
        	nextTransition
        }

        checkNavigation();
    });

    
    $('#prev').click(function () {
    	//prev slide function
        var activePage = $('.active'),
        prevPage = activePage.prev('.page'),
        nextTransition = prevPage.slideDown(700).addClass('active'),
        activeTransition = activePage.slideDown(100).delay(100).removeClass('active');
        // old transition style
        // prevPage.slideDown(1200).addClass('active');
        // activePage.slideUp(1200).removeClass('active');
		
		nextTransition
		activeTransition

        checkNavigation();
    });
};

// loads the script duuuuuuuude
$(document).ready(navigation);


// works referenced 
// http://jsfiddle.net/794f4yvw/12/
// www.nytimes.com/interactive/2016/08/05/sports/olympics-gymnast-simone-biles.html?_r=0
