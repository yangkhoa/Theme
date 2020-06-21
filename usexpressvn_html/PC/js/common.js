$(document).ready(function (){

    $(".frame-cate,.user-segment").hover(function(){
      $('.op_thuonghieu').removeClass('active');
      $('.onclick >div').slideUp();
    });
    $('.onclick >a').click(function () {  
      $('.onclick >div').slideUp();
      if($(this).next().css('display') == 'none'){
        $(this).next().slideDown();
      }
      else{
        $(this).next().slideUp();   
      }       
    });

    var $wid = $('#search').width();
    var $wid1 = ($('.op_thuonghieu').width() + 25);
    var $wid2 = $wid - $wid1; 
    $('.op_thuonghieu').css('width', $wid1 + 'px'); 
    $('#search .warp-search').css('width', $wid2 + 'px');     
    $(".op_thuonghieu").find(".txt_hang").click(function () {
       $(".op_thuonghieu").addClass("active");
       $('.onclick >div').slideUp();
    });    
    $(".op_thuonghieu").find("a").click(function () {
        var html = $(this).html();
        $( ".op_thuonghieu .txt_hang span" ).html(html);
        $(".op_thuonghieu").removeClass("active");
        $('.op_thuonghieu').css('width', 'auto');
        var $wid = $('#search').width();
        var $wid1 = ($('.op_thuonghieu').width() + 25);
        var $wid2 = $wid - $wid1;     
        $('.op_thuonghieu').css('width', $wid1 + 'px');        
        $('#search .warp-search').css('width', $wid2 + 'px');      
    });

    $(".warp-search").find(".input_search").click(function(){
        $('.onclick >div').slideUp();
        $(".warp-search").find('.suggest-search').hide();    
        $(".op_thuonghieu").removeClass('active');       
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).next('.suggest-search').show();
        }
        else{
            $(this).removeClass("active");
            $(this).next('.suggest-search').hide();
        }
    }); 
    $(document).click(function() {      
        $(".warp-search").find(".input_search").removeClass('active');     
        $(".op_thuonghieu").removeClass('active');     
        $(".warp-search").find('.suggest-search').hide(); 
        $('.onclick >div').slideUp();    
    }); 
    $(".warp-search .input_search, .op_thuonghieu, .onclick").click(function(event) {
        event.stopPropagation();
    });         

  // End onclick header-block  

    $(".warp_drown .input").find("a").click(function () {
        var html = $(this).html();
        $( ".warp_drown .output span" ).html(html);       
    }); 
    $(".warp_drown").find(".output").click(function(){
        $(".warp_drown").find('.input').slideUp();
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).next('.input').slideDown();
        }
        else{
            $(this).removeClass("active");
            $(this).next('.input').slideUp();
        }
    }); 
    $(document).click(function() {      
        $(".warp_drown").find(".output").removeClass('active');     
        $(".warp_drown").find('.input').slideUp();     
    }); 
    $(".warp_drown .output").click(function(event) {
        event.stopPropagation();
    });            

    //Block tương tự
    var swiper_sptuongtu = new Swiper('.sp_tt .swiper-container', {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1169: {
          slidesPerView: 4
        },            
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        }
      }
    });

  //Block sp ddax xem
    var swiper_spdaxem = new Swiper('.sp_daxem .swiper-container', {
      slidesPerView: 5,
      slidesPerGroup: 2,
      simulateTouch: false,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },     
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },     
      breakpoints: {
        1169: {
          slidesPerView: 5,
          slidesPerGroup: 2,
        },            
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 2,
        }
      }
    });


  //Slide top
    var slider_top = new Swiper('.slider-top .swiper-container', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
      },  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    $(".swiper-container").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

  //Block slide đồng hành
    var swiper_dh = new Swiper('.dong_hanh .swiper-container', {
      slidesPerView: 6,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
      },  
      breakpoints: {
        1169: {
          slidesPerView: 6
        },            
        1024: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 3
        }
      }
    });

    var swiper_dh2 = new Swiper('.dong_hanh2 .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },  
      breakpoints: {
        1169: {
          slidesPerView: 5
        },            
        1024: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 3
        }
      }
    });    

  //Slide Follow
    var slider_follow = new Swiper('#tab-user .swiper-container', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
      },  
      pagination: {
        el: '.swiper-pagination',
      },
    });  
    //Block slide báo chí
    var swiper_new = new Swiper('#tab-new .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
      },  
      pagination: {
        el: '.swiper-pagination',
      },      
      breakpoints: {
        1169: {
          slidesPerView: 4
        },            
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        }
      }
    });

    //Block slide VIP
    var swiper_vip = new Swiper('#tab-vip .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
      },        
      breakpoints: {
        1169: {
          slidesPerView: 5
        },            
        1024: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 3
        }
      }
    });

    //Block truy cập nhanh
    var swiper_tc = new Swiper('.truycap_nhanh .swiper-container', {
      slidesPerView: 10,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },       
      breakpoints: {
        1169: {
          slidesPerView: 10
        },            
        1024: {
          slidesPerView: 8
        },
        768: {
          slidesPerView: 6
        }
      }
    });

    $(".block_follow .tab a").click(function (event) {
        $(".block_follow .tab a").removeClass("active")
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
        event.preventDefault();
        var tab = $(this).attr("href");
        $(".block_follow .tab-container > div").not(tab).css("display", "none");
        $(tab).css("display", "block");
    });

    $("#login-popup .form .tab").find("a").click(function (event) {
        $("#login-popup .form .tab").find("a").removeClass("active")
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
        event.preventDefault();
        var tab = $(this).attr("href");
        $("#login-popup .form .tab-content").not(tab).css("display", "none");
        $(tab).css("display", "block");
    });

	/**BUTTON BACK TO TOP**/
	$(window).scroll(function() {
	  if($(window).scrollTop() >= 200)
	  {
	    $('#to_top').fadeIn();
	  }
	  else
	  {
	    $('#to_top').fadeOut();
	  }
	});

	$("#to_top,.on_top").click(function() {
	  $("html, body").animate({ scrollTop: 0 });
	  return false;
	});
	/**END BUTTON BACK TO TOP**/

  $(".qa-home .tab a").click(function (event) {
      $(".qa-home .tab a").removeClass("active")
      if(!$(this).hasClass("active")){
          $(this).addClass("active");
      }
      else{
          $(this).removeClass("active");
      }
      event.preventDefault();
      var tab = $(this).attr("href");
      $(".qa-home .tab-container > div").not(tab).css("display", "none");
      $(tab).fadeIn();
  });   
});