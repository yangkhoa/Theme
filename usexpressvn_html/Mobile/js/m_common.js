$(document).ready(function () {
  //Block tương tự
  var swiper_spdaxem = new Swiper('.slide_product .swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  /*SLIDE BOX ĐÃ XEM*/
  var block_slide_sp = new Swiper('.block_slide_sp .swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  /*END SLIDE BOX ĐÃ XEM*/

  //Slide top
  var slider_top = new Swiper('.slider-top .swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });
  var slider_sugesst = new Swiper('.bg_sugesst .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      340: {
        spaceBetween: 0,
      }
    }
  });
  //Block slide đồng hành
  var swiper_dh = new Swiper('.dong_hanh .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 32,
    autoplay: {
      delay: 3000,
    }
  });
  //Slide Follow
  var slider_follow = new Swiper('#tab-user .swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });
  //Block truy cập nhanh
  var swiper_tc = new Swiper('.truycap_nhanh .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay: {
      delay: 3000,
    },
  });

  //Slide trai nghiệm
  var slider_trainghiem = new Swiper('.box_trainghiem .swiper-container', {
    slidesPerView: 1,
    loop: false,
    // autoplay: {
    //   delay: 3000,
    // },  
  });

  $('.block_follow').find('.txt_down').click(
    function () {
      if ($(this).next().css('display') == 'none') {
        $('.block_follow .content').slideUp();
        $(this).next().stop(true, true).slideDown();
        $('.block_follow .item').removeClass('active');
        $(this).parent().addClass('active');
        //Block slide báo chí
        var swiper_new = new Swiper('#tab-new .swiper-container, #tab-vip .swiper-container', {
          slidesPerView: 3,
          spaceBetween: 10,
          autoplay: {
            delay: 3000,
          },
        });
      } else {
        $(this).parent().find('.content').slideUp();
        $('.block_follow .item').removeClass('active');
      }
    }
  )

  $('.qa-home').find('.txt_down').click(
    function () {
      if ($(this).next().css('display') == 'none') {
        $('.qa-home .content').slideUp();
        $(this).next().stop(true, true).slideDown();
        $('.qa-home .item').removeClass('active');
        $(this).parent().addClass('active');

      } else {
        $(this).parent().find('.content').slideUp();
        $('.qa-home .item').removeClass('active');
      }
    }
  )

  $('.kho-hang-home').find('.onclick').click(
    function () {
      if ($(this).next().css('display') == 'none') {
        $('.kho-hang-home .info').hide();
        $(this).next().stop(true, true).show();
        $('.kho-hang-home .item').removeClass('active');
        $(this).parent().addClass('active');

      } else {
        $(this).parent().find('.info').hide();
        $('.kho-hang-home .item').removeClass('active');
      }
    }
  )
  $(".kho-hang-home").find(".close").click(function () {
    $(".kho-hang-home").find(".item").removeClass('active');
    $('.kho-hang-home .info').hide();
  });


  $('.header-block .input_form').click(function () {
    $('.header-block').addClass('focus');
  });
  $('.header-block .btn_reset, .back').click(function () {
    $('.header-block').removeClass('focus');
  });

  /*OPEN & CLOSE MAIN MENU*/
  $(function () {
    $('.arrow_back').click(function () {
      $('body').addClass('show_main_menu');
    });

    $('.close_main_menu, .site-overlay').click(function () {
      $('body').removeClass('show_main_menu');
    });
    $('.main_menu').find(".view-all").click(function () {
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $('.main_menu .level2').addClass('show');
        $(this).html("Thu gọn");
      } else {
        $(this).removeClass("active");
        $('.main_menu .level2').removeClass('show');
        $(this).html("Xem thêm");
      }
    });
  })
  /*END OPEN & CLOSE MAIN MENU*/

  $('.footer-bottom').find('h3').click(
    function () {
      if ($(this).next().css('display') == 'none') {
        $('.inf').slideUp();
        $(this).next().stop(true, true).slideDown();
        $('.footer-bottom .td').removeClass('active');
        $(this).parent().addClass('active');

      } else {
        $(this).parent().find('.inf').slideUp();
        $('.footer-bottom .td').removeClass('active');
      }
    }
  )
  $("#login-popup .form .tab").find("a").click(function (event) {
    $("#login-popup .form .tab").find("a").removeClass("active")
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
    event.preventDefault();
    var tab = $(this).attr("href");
    $("#login-popup .form .tab-content").not(tab).css("display", "none");
    $(tab).css("display", "block");
  });

  $(".tab_donhang a").click(function (event) {
    $(".tab_donhang a").removeClass("active")
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
    event.preventDefault();
    var tab = $(this).attr("href");
    $(".dtcontent > div").not(tab).css("display", "none");
    $(tab).fadeIn();
  });

  $(".qa-home .tab a").click(function (event) {
    $(".qa-home .tab a").removeClass("active")
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
    event.preventDefault();
    var tab = $(this).attr("href");
    $(".qa-home .tab-container > div").not(tab).css("display", "none");
    $(tab).fadeIn();
  });

  $(".warp_drown .input").find("a").click(function () {
    var html = $(this).html();
    $(".warp_drown .output span").html(html);
  });

  $(".warp_drown").find(".output").click(function () {
    $(".warp_drown").find('.input').slideUp();
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).next('.input').slideDown();
    } else {
      $(this).removeClass("active");
      $(this).next('.input').slideUp();
    }
  });
  $(document).click(function () {
    $(".warp_drown").find(".output").removeClass('active');
    $(".warp_drown").find('.input').slideUp();
    $('.onclick >div').slideUp();
  });
  $(".warp_drown .output, .onclick").click(function (event) {
    event.stopPropagation();
  });

  $('.onclick >a').click(function () {
    $('.onclick >div').slideUp();
    if ($(this).next().css('display') == 'none') {
      $(this).next().slideDown();
    } else {
      $(this).next().slideUp();
    }
  });

  /**BUTTON BACK TO TOP**/
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $('#to_top').fadeIn();
    } else {
      $('#to_top').fadeOut();
    }
  });

  $("#to_top,.on_top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    });
    return false;
  });
  /**END BUTTON BACK TO TOP**/
});