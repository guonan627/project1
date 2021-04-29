$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $("nav").addClass("sticky");
      $(".goTop").fadeIn();
    } else {
      $("nav").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function () {
    scroll(0, 0);
  });

  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".menu-full").toggleClass("active");
  });
});

var currentImg = 0;
var imgArr = ["bg2.jpg","bg4.jpg","bg6.jpg","bg7.jpg"]; //定义一个数组来存放所有的图片

function changeImg() {
  if (currentImg >= imgArr.length - 1) {
    currentImg = 0;
  } //当图片的索引超过图片数量就从第一个开始
  else {
    currentImg++;
  }
  var img = document.getElementById("header");

  img.style.backgroundImage = "url(./images/" + imgArr[currentImg] + ")"; //这里特别要注意引号的使用，因为img[curentImg]是个变量，所以用"+变量+"
}

setInterval(changeImg, 3000); //每隔5s就换一个
