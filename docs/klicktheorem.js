   $(document).ready(function() {
   $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.fade').addClass('animate__animated animate__animated animate__fadeInUp');
        } else {
            $('.fade').removeClass('animate__animated animate__animated animate__fadeInUp');
        }
    });
       
       $(window).scroll(function () {
        if ($(this).scrollTop() > 3300) {
            $('.rowf').addClass('animate__animated animate__backInLeft');
        } else {
            $('.rowf').removeClass('animate__animated animate__backInLeft');
        }
    });
       
       
       $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('.line').addClass('animate__animated animate__flash');
        } else {
            $('.line').removeClass('animate__animated animate__flash');
        }
    });
       
        $(window).scroll(function () {
        if ($(this).scrollTop() > 2400) {
            $('.btn-2').addClass('animate__animated animate__lightSpeedInLeft');
        } else {
            $('.btn-2').removeClass('animate__animated animate__lightSpeedInLeft');
        }
    });
       
       
       
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});  
       
        
       
       
       
});
  

/*$(document).ready(function() {
  var scrollFunction = function() {
    var scrollPosition = $(this).scrollTop();
    if(scrollPosition == 0) {
      $(this).removeClass('scrolled');
    }
    else {
      $(this).addClass('scrolled');
    }
  }animate__flip
      animate__flash
      $('.target1, .target2').scroll(scrollFunction);
});*/