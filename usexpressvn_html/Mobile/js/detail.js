$(document).ready(function (){
    // SLIDE PRODUCT
        var swiper_galleryTop = new Swiper('.PD_Media .swiper-container', {
          slidesPerView: 1,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        });

    // END SLIDE PRODUCT

    // ONCLICK TOGLE
        $(".product_detail").find(".bl_giasp").click(function(){
            if(!$(this).hasClass("active")){
                $(this).addClass("active");
                $(this).next('div').slideToggle( "slow", function() {});
            }
            else{
                $(this).removeClass("active");
                $(this).next('div').slideToggle( "hide", function() {});
            }
        });            

        $(".product_detail").find(".txt_down").click(function(){
            if(!$(this).hasClass("active")){
                $(this).addClass("active");
                $(this).next('div').slideToggle( "slow", function() {});
            }
            else{
                $(this).removeClass("active");
                $(this).next('div').slideToggle( "hide", function() {});
            }
        });              

        // Show comment
        $(".pd-tab-block__comment-panel__view-more-btn").click(function() {
            $('.pd-tab-block__comment-panel__content-field').toggleClass('is-expand');
            $(this).text($(this).text() == '- Hide' ? '+ More' : '- Hide');
        });
        $(".tab_detail a").click(function (event) {
            $(".tab_detail a").removeClass("active")
            if(!$(this).hasClass("active")){
                $(this).addClass("active");
            }
            else{
                $(this).removeClass("active");
            }
            event.preventDefault();
            var tab = $(this).attr("href");
            $(".dtcontent > div").not(tab).css("display", "none");
            $(tab).fadeIn();
        });         
}); 
$(window).on('load', function() {
  var height_bl_mhangus  = $('.product_detail .bl_mhangus.fixed').height() + 25;
  $(".margin-fixed").css('height' ,height_bl_mhangus +'px');
})