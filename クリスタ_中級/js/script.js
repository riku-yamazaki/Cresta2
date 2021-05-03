$(function(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:2000,
        fade: true,
        speed: 1000,
        cssEase: 'linear'
    });
});

$(function(){
    $('.burger-btn').on('click',function(){
        $(this).toggleClass('close');
        $('.header-nav-sp').fadeToggle(500);
        $('body').toggleClass('noscroll');
    });

    if($(window).width() < 768) {
        $('.header-nav-sp>ul>li>a').on('click',function(){
            $('.header-nav-sp').fadeToggle(500);
            $('.burger-btn').removeClass('close');
            $('body').removeClass('noscroll');
        });
    }

    
    var fv = $('.fv').outerHeight();
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if($(window).width() > 768){
            if( fv < top ){
                $('.header__main').addClass('fixed');
            }else{
                $('.header__main').removeClass('fixed');
            }
        }
    });

});