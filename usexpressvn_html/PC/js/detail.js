$(document).ready(function (){
    // ONCLICK TOGLE           

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

    // SLIDE PRODUCT
    var galleryTop = new Swiper('.gallery-top', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
              loop: true,
              loopedSlides: 7
      });
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        // centeredSlides: false,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        autoplay: {
          delay: 250000,
          disableOnInteraction: false,
        },          
        slideToClickedSlide: true,
              loop: true,
              loopedSlides: 7
      });
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;            
      // END SLIDE PRODUCT        

}); 