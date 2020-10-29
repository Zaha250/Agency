
$(document).ready(function(){
	//SCROLL

   $(".nav-menu__link").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1000,
         easing: "swing"
      });
      
   });

   //DOWN

 	$(".arows-down").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1000,
         easing: "swing"
      });
      
   });

 	//UP

 	let buttonUp = $('.button__up');
 	
 	$(window).scroll (function () {
	    if ($(this).scrollTop () > 500) {
	      buttonUp.fadeIn();
	    } else {
	      buttonUp.fadeOut();
	    }
	});

 	buttonUp.click(function() {
      $("html, body").animate({
         scrollTop: 0
      }, {
         duration: 1000,
         easing: "swing"
      });
      
   });

 	// MENU-BURGER

 $('.menu-burger').click(function() {
	 $(this).toggleClass('menu-burger_active');
	 $('.nav').toggleClass('nav_active');
	});

 $('.nav-menu__link').click(function() {
	 $('.menu-burger').removeClass('menu-burger_active');
	 $('.nav').removeClass('nav_active');
	});

 	// SLIDER

  $('.profile-slider').slick({
  	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	  {
      breakpoint: 1130,
      settings: {
        slidesToShow:3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  });
});