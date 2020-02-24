$(document).ready(function(){
    var window_width  = $(window).width();    
    if (window_width <= 992)
    {        
        $('#categories .row').addClass('slide-categories');
        $('.slide-categories').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3
          });
    }
});
$(window).resize(function(){
    var window_width  = $(window).width();    
    if (window_width <= 992)
    {        
        $('#categories .row').addClass('slide-categories');
        $('.slide-categories').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
          });
    } else if ($( "#categories .row" ).hasClass( "slide-categories" )) {
        console.log('sdcs');
        $( "#categories .row" ).reset()
        // $('#categories .row').removeClass('slick-prev slick-arrow slick-disabled');
        // $('div slick-list draggable').remove(this);
        // $('div slick-list draggable').remove(this);
        // $('div slick-track').remove(this);
    }
});