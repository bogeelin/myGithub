$(document).ready(function() {
    var $slider = $('.slideshow .slider'),
        maxItems = $('.item', $slider).length,
        $sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

    var rightItems = $('.item', $sliderRight).toArray();
    var reverseItems = rightItems.reverse();
    $('.slider', $sliderRight).html('');
    for (var i = 0; i < maxItems; i++) {
        $(reverseItems[i]).appendTo($('.slider', $sliderRight));
    }

    $slider.addClass('slideshow-left');
    $('.slideshow-left').slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        adaptiveHeight: true
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
        $('.slideshow-text').slick('slickGoTo', nextSlide);
    });

    $('.slideshow-right .slider').slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 950,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        adaptiveHeight: true,
        initialSlide: maxItems - 1
    });

    $('.slideshow-text').slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        adaptiveHeight: true
    });
});





