$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:800,
        easing:'ease',
        infinite:true,
        initialSlide:4,
        autoplay:true,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHovsr:true,
        pauseOnDotsHover:true,
    });
});
