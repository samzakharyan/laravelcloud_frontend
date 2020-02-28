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
    }
});