$(".tabs-no-border .is-active").addClass("bkimg-light");
$(".tabs-no-border>ul>li").click(function (e) {
  $(this).addClass(["is-active", "bkimg-light"]).siblings().removeClass(["is-active", "bkimg-light"]);
  $(".tab-contents").children().eq($(this).index()).addClass("is-block").siblings().removeClass("is-block");
});

function initBtn4Img(idBtn, imgWidth, imgHeight, imgSrc) {
  var className4img = ".btn-4img";
  $(idBtn + " " + className4img).css({
    width: imgWidth + "px",
    height: imgHeight + "px",
    "background-image": "url(" + imgSrc + ")",
    // "background-size": "355px 16px",
  });

  $(idBtn)
    .hover(
      function () {
        $(this)
          .children(className4img)
          .css("background-position", -1 * (imgWidth + 1) + "px 0px");
      },
      function () {
        $(this).children(className4img).css("background-position", "0px 0px");
      }
    )
    .mousedown(function () {
      $(this)
        .children(className4img)
        .css("background-position", -2 * (imgWidth + 1) + "px 0px");
    })
    .mouseup(function () {
      $(this)
        .children(className4img)
        .css("background-position", -1 * (imgWidth + 1) + "px 0px");
    });
}

initBtn4Img("#btn_open", 88, 16, "/assets/skin/btn_open.png");
initBtn4Img("#btn_open2", 34, 40, "/assets/skin/combo_open.png");
initBtn4Img("#btn_refresh", 18, 18, "/assets/skin/btn_refresh.png");

initBtn4Img("#btnPlaylistShow", 18, 18, "/assets/skin/btn_playlist.png");
initBtn4Img("#btnPlaylistHide", 18, 18, "/assets/skin/btn_playlist_hide.png");

initBtn4Img("#btnStop", 40, 40, "/assets/skin/btn_stop.png");
initBtn4Img("#btnPrevious", 40, 40, "/assets/skin/btn_previous.png");
initBtn4Img("#btnPlay", 48, 48, "/assets/skin/btn_play.png");
initBtn4Img("#btnPause", 48, 48, "/assets/skin/btn_pause.png");
initBtn4Img("#btnNext", 40, 40, "/assets/skin/btn_next.png");
initBtn4Img("#btnVolume", 16, 18, "/assets/skin/btn_volume.png");
initBtn4Img("#btnVolumeZero", 16, 18, "/assets/skin/btn_volume_zero.png");
initBtn4Img("#btnOpenMini", 24, 18, "/assets/skin/btn_open_mini.png");
initBtn4Img("#btnScreenFull", 24, 18, "/assets/skin/btn_screen_full.png");
initBtn4Img("#btnScreenNormal", 24, 18, "/assets/skin/btn_screen_normal.png");
