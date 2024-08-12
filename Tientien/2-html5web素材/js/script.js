$(function(){    /* document ready 一個js檔只要執行一次即可 */
    // 移除#about的背景影片
    if($(window).width()<821){
        $('#about video').remove();
    }

    // 交替漢堡按鈕
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });
    
    //滑動至指定位置
    $('.menu a').click(function () {
        let btn=$(this).attr('href');  //返回取得屬性與值
        let pos=$(btn).offset();  //抓取相對的座標位置
        $('html,body').animate({scrollTop:pos.top},1000);
    })
});