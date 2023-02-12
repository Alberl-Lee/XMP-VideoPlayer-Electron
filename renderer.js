$(".tabs-no-border>ul>li").click(function (e) {
  $(this).addClass("is-active").siblings().removeClass("is-active");
  $(".tab-contents").children().eq($(this).index()).addClass("is-block").siblings().removeClass("is-block");
});
