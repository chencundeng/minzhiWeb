$(function(){
    $('.navBanner').on('click','.navList li',function(){
        $(this).addClass('active').siblings('li').removeClass('active')
    }).on('click','.navBtn',function(){
        $(this).toggleClass('active');
        var height = $('.navBanner').height();
        if(!$(this).hasClass('active')){
            $('.nav-con').animate({'right':'-100%'});
        }else{
            $('.nav-con').css({
                'height':parseInt(document.body.clientHeight)-parseInt(height)
            }).animate({'right':0});
        }


    });

})