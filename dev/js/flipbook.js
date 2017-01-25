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

function indexPages() {
    // adds index number to each instance of the page class
    $('.page').each(function (index, value) { 
        $(this).attr('data-item', index+1);    
    });
}

// resize the window
// function checkWindow() {
//     var winHeight = $(window).height(),
//     winWidth = $(window).width(),
//     docHight = $(document).height(),
//     docWidth = $(document).width();

// }



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


var advance = function (activePage, nextPage){
    // transition to advance to next slide
    nextPage.addClass('active')
    activePage.removeClass('active')
    var nextWindow = activePage.height() * parseInt(activePage.attr('data-item'));
    $('#book').css('transform', 'translateY(-' +nextWindow +'px)').css('transition', '.6s ease-in-out');
    // alert(nextWindow)
}


var retreat = function (activePage, prevPage){
    // transitions to the previous slide
    prevPage.addClass('active')
    activePage.removeClass('active')
    // transition to the previous window
    var depth = activePage.height() * parseInt(activePage.attr('data-item'));
    var prevWindow =  depth - (2 * activePage.height() );
    // alert(depth)
    $('#book').css('transform', 'translateY(-' + prevWindow+'px)').css('transition', '.6s ease-in-out');   
}



var navigation = function () {
	// calls the advance/retreat functions based on button clicks
    // adds conditional transitions
    checkNavigation();

    $('#next').click(function () {
    	 // code for next button
        var activePage = $('.active'),
        nextPage = activePage.next('.page');

        // conditional events for certain slides.
        if (nextPage.hasClass('time_delay')){
        // this adds a delay stopping the next button from working for 2 seconds 
            advance(activePage, nextPage)
            $('.button_wrap').hide();
        
        	// gives user back control after time delay
        	setTimeout(function(){
                $('.button_wrap').show();
        	}, 1000)
            // more conditionals can go here as elifs
        } else{
        	// regular slide transition
        	advance(activePage, nextPage)
            }

        checkNavigation();
    });

    $('#prev').click(function () {
    	//prev slide function
        var activePage = $('.active'),
        prevPage = activePage.prev('.page');

        retreat(activePage, prevPage)

        checkNavigation();
    });

   

}

var resizeWindow = function () {
  // sumthin here
}

// loads the script duuuuuuuude
$(document).ready(function () {
    indexPages();
    navigation();
    //  $(window).scroll(function(){
    //     alert('hey ya');
    // });

    // $(window).bind('mouseover', function() {
    //     alert('swoop');
    // });


});

window.onresize = function () { 
    resizeWindow()
}

$(document).scroll(function() {
    // alert('hey')
});


// $(window).scroll(function() {
//    if($(window).scrollTop() + $(window).height() == $(document).height()) {
//        alert("bottom!");
//    }
// });


// works referenced 
// http://jsfiddle.net/794f4yvw/12/
// www.nytimes.com/interactive/2016/08/05/sports/olympics-gymnast-simone-biles.html?_r=0
