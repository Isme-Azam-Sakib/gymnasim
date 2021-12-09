$(document).ready(function(){
    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        dots:true,
    });

    //about video popup
    $('.venobox').venobox();
    
    
    //testimonial slider
    $('.testimonial-slider').slick({
        arrows: false,
        slidesToShow:2,
        dots: true,
    });


    //counter
    $('.counter').counterUp();


    //partner slider
    $('.partner-slider').slick({    
        slidesToShow: 5,
        centerMode:true,
        centerPadding: 0,
        prevArrow: '<i class="fas fa-chevron-left slick-prev prev-arrow"></i>' ,
        nextArrow: '<i class="fas fa-chevron-right slick-next next-arrow"></i>' ,
    });

});