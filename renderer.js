// $(".tab-contents").addClass("fullheight");
// $(".tab-contents").children().addClass("fullheight");
// $(".tab-contents").children().addClass("is-align-self-stretch1");

$(".tabs-no-border>ul>li").click(function (e) {
  $(this).addClass("is-active").siblings().removeClass("is-active");
  $(".tab-contents").children().eq($(this).index()).addClass("is-block").siblings().removeClass("is-block");
});
