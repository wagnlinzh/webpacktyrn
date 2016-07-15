function CCC(){



//Cont4 Btn
$('.RAV4Btn4').click(function() {
  if ($('.RAV4Container').css("display") === "none") {
    $('.KaLuoLaBtn4').removeClass("activeed");
    $(this).addClass("activeed");
    $('.KALuoLaContainer').stop().fadeOut(500);
    $('.RAV4Container').stop().fadeIn(500);
  }
});
$('.KaLuoLaBtn4').click(function() {
  if ($('.KALuoLaContainer').css("display") === "none") {
    $('.RAV4Btn4').removeClass("activeed");
    $(this).addClass("activeed");
    $('.RAV4Container').stop().fadeOut(500);
    $('.KALuoLaContainer').stop().fadeIn(500);
  }
});
// cont5 slideBox
jQuery(".slideBox").slide({
  mainCell: ".bd",
  autoPlay: true
});
jQuery(".slideBox2").slide({
  mainCell: ".bd2",
  autoPlay: true,
  prevCell: ".prev2",
  nextCell: ".next2"
});
//cont5 Btn
$('.RAV4Btn').click(function() {
  if ($('.RAV4Slide').css("display") === "none") {
    $('.KaLuoLaBtn').removeClass("activeed");
    $(this).addClass("activeed");
    $('.KaLuoLaSlide').stop().fadeOut(500);
    $('.RAV4Slide').stop().fadeIn(500);
  }
});
$('.KaLuoLaBtn').click(function() {
  if ($('.KaLuoLaSlide').css("display") === "none") {
    $('.RAV4Btn').removeClass("activeed");
    $(this).addClass("activeed");
    $('.RAV4Slide').stop().fadeOut(500);
    $('.KaLuoLaSlide').stop().fadeIn(500);
  }
});
//roll
if (jQuery.browser.version < 7) {
  $(".roll").css({
    "overflow-y": "auto"
  });
} else {
  $(".roll").mCustomScrollbar({
    scrollInertia: 600,
    autoDraggerLength: false,
    advanced: {
      updateOnContentResize: true
    }
  });
}

$.fn.extend({
  animateCss: function(animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(this).addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
  }
});
$(".coinsDiv").on("mouseenter", function() {
  $(".coinsDiv img").stop().animateCss('bounce');
});
$(".giftDiv").on("mouseenter", function() {
  $(".giftDiv img").stop().animateCss('bounce');
});
// 弹出层
$(".popDetailInfo").on('click', function() {
  $(".mask, .DetailMessagePanel").show();
});
$(".closeMessagePanelBtn,.mask").click(function() {
  $(".mask,.DetailMessagePanel").hide();
});


//滚动条
$(function() {
  if (jQuery.browser.version < 7) {
    $(".roll3").css({
      "overflow-y": "auto"
    });
  } else {
    $(".roll3").mCustomScrollbar({
      scrollInertia: 600,
      autoDraggerLength: false,
      advanced: {
        updateOnContentResize: true
      }
    });
  }
});

//滚动条
$(function() {
  if (jQuery.browser.version < 7) {
    $(".roll5").css({
      "overflow-y": "auto"
    });
  } else {
    $(".roll5").mCustomScrollbar({
      scrollInertia: 600,
      autoDraggerLength: false,
      advanced: {
        updateOnContentResize: true
      }
    });
  }
});



}


module.exports=CCC;