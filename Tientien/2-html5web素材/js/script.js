$(function(){    /* document ready 一個js檔只要執行一次即可 */
    // 移除#about的背景影片
    if($(window).width()<821){
        $('#about video').remove();
    }

    // 交替漢堡按鈕
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
    });

});