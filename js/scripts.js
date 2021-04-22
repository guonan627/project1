$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $("nav").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $("nav").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".menu-full").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});