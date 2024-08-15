$(function () {    /* document ready 一個js檔只要執行一次即可 */
    // 移除#about的背景影片
    if ($(window).width() < 821) {
        $('#about video').remove();
    }

    // 交替漢堡按鈕
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });

    //滑動至指定位置
    $('.menu a').click(function () {
        let btn = $(this).attr('href');  //返回取得屬性與值
        let pos = $(btn).offset();  //抓取相對的座標位置
        $('html,body').animate({ scrollTop: pos.top }, 1000);
    })

    // 滑動至頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    })

    // 至頂按鈕淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('', 1);
        } else {
            $('#gotop').stop().fadeOut();
        }
    });

});

$('.smoove').smoove({
    offset: '40%'
});
$('.smoove-z').smoove({
    moveZ: '400px',
    // rotateX: '90deg',
    moveY: '250px'
});
$('.smoove-z-1').smoove({
    moveZ: '-200px',
    // rotateX: '90deg',
    moveY: '100px'
});