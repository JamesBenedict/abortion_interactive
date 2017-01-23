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
    // window: the actively seen page

// sets up the domain and defines the start page
$( ".page" ).first().addClass('active');
$( ".page" ).first().addClass('first');
$(".page").last().addClass('last');

// resize the window
function checkWindow() {
    var winHeight = $(window).height(),
    winWidth = $(window).width(),
    docHight = $(document).height(),
    docWidth = $(document).width();

}

docHeight = $(document).height();

function pageHeight (page) {
    var winHeight = page.height();
    return winHeight;
}

function indexPages() {
    $('.page').each(function (index, value) { 
        $(this).attr('data-item', index+1);    
    });
}








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

var nextWindow, prevWindow;

var navigation = function () {
	// manages the next/back button navigation
    checkNavigation();
    
    $('#next').click(function () {
    	 // code for next button
        var activePage = $('.active'),
        nextPage = activePage.next('.page'),

        activeHeight = $(window).height(),
        nextHeight = nextPage.height(),

        nextTransition = nextPage.addClass('active'),
        activeTransition = activePage.removeClass('active');
        // would be useful if I wanted to loop, but for now I don't. Didnt want to delete yet
        // if (nextPage.length === 0) {
        //     nextPage = $('.page').first();
        // }

        activeTransition
        nextTransition

        var nextWindow = pageHeight(activePage) * parseInt(activePage.attr('data-item'));
        // alert(nextWindow)
        
        $('#book').css('transform', 'translateY(-' +nextWindow +'px)');   
        // nextWindow += activePage.scrollTop();
        // nextWindow += $(window).height();
        // activeHeight += nextHeight;
        // alert(activeHeight)



        // // conditional events for certain slides.
        // // so far only needed for time slide 
        // if (nextPage.hasClass('time_delay')){
        // // this adds a delay stopping the next button from working for 2 seconds 
        // 	activeTransition
        //     nextTransition

        // 	// initally disables the next button
        // 	// $('#next').prop('disabled', true);
        //     $('.button_wrap').hide();
        
        // 	// gives user back control after time delay
        // 	setTimeout(function(){
        // 		// $('#next').prop('disabled', false);
        //         $('.button_wrap').show();
        // 	}, 1000)
        // } else{
        // 	// regular slide transition
        // 	activeTransition
        // 	nextTransition
        // }

        checkNavigation();
    });

    
    $('#prev').click(function () {
    	//prev slide function
        var activePage = $('.active'),
        prevPage = activePage.prev('.page'),
        prevTransition = prevPage.addClass('active'),
        activeTransition = activePage.removeClass('active');
        // old transition style
        // prevPage.slideDown(1200).addClass('active');
        // activePage.slideUp(1200).removeClass('active');
		
		prevTransition
		activeTransition


        // var prevWindow = pageHeight(activePage) * parseInt(activePage.attr('data-item'));
        // alert(prevWindow)
        var depth = pageHeight(activePage) * parseInt(activePage.attr('data-item'));
       var prevWindow =  depth - (2 * pageHeight(activePage) )
       alert(depth)
        $('#book').css('transform', 'translateY(-' + prevWindow+'px)');   
        // nextWindow += activePage.scrollTop();

                // $('#book').css('transform', 'translateY(-25%)');   
                // prevWindow += 25
        checkNavigation();
    });
};

// loads the script duuuuuuuude
$(document).ready(function (){
    indexPages();
    checkWindow();
    navigation();

});



// works referenced 
// http://jsfiddle.net/794f4yvw/12/
// www.nytimes.com/interactive/2016/08/05/sports/olympics-gymnast-simone-biles.html?_r=0
