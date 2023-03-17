$('.about_slide').slick({
    infinite: true,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '.abt_right',
    prevArrow: '.abt_left',
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.leatest_slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.next_leat',
    prevArrow: '.prev_leat',
});
$(function(){
    $('input[type="number"]').niceNumber();
});
$('.counter_tbl h4').counterUp({
    delay: 10,
    time: 1000
});