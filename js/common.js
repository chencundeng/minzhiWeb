$(function(){
    $('.navBanner').on('click','li',function(){
        $(this).addClass('active').siblings('li').removeClass('active')
    })
})