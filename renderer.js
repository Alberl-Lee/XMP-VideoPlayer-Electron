$(".tabs-no-border .is-active").addClass("bkimg-light");
$(".tabs-no-border>ul>li").click(function (e) {
  $(this).addClass(["is-active", "bkimg-light"]).siblings().removeClass(["is-active", "bkimg-light"]);
  $(".tab-contents").children().eq($(this).index()).addClass("is-block").siblings().removeClass("is-block");
});

var heightTabScrollArea = window.innerHeight - $("#accordionExample").first().offset().top;
$("#accordionExample").css("height", heightTabScrollArea + "px");

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

initBtn4Img("#btn_open", 88, 16, "assets/skin/btn_open.png");
initBtn4Img("#btn_open2", 34, 40, "assets/skin/combo_open.png");
initBtn4Img("#btn_refresh", 18, 18, "assets/skin/btn_refresh.png");

initBtn4Img("#btnPlaylistShow", 18, 18, "assets/skin/btn_playlist.png");
initBtn4Img("#btnPlaylistHide", 18, 18, "assets/skin/btn_playlist_hide.png");

initBtn4Img("#btnStop", 40, 40, "assets/skin/btn_stop.png");
initBtn4Img("#btnPrevious", 40, 40, "assets/skin/btn_previous.png");
initBtn4Img("#btnPlay", 48, 48, "assets/skin/btn_play.png");
initBtn4Img("#btnPause", 48, 48, "assets/skin/btn_pause.png");
initBtn4Img("#btnNext", 40, 40, "assets/skin/btn_next.png");
initBtn4Img("#btnVolume", 16, 18, "assets/skin/btn_volume.png");
initBtn4Img("#btnVolumeZero", 16, 18, "assets/skin/btn_volume_zero.png");
initBtn4Img("#btnOpenMini", 24, 18, "assets/skin/btn_open_mini.png");
initBtn4Img("#btnScreenFull", 24, 18, "assets/skin/btn_screen_full.png");
initBtn4Img("#btnScreenNormal", 24, 18, "assets/skin/btn_screen_normal.png");

initBtn4Img("#btnPlayMode", 18, 18, "assets/skin/btn_play_mode.png");
initBtn4Img("#btnAdd", 18, 18, "assets/skin/btn_add.png");
initBtn4Img("#btnDelete", 18, 18, "assets/skin/btn_delete.png");
initBtn4Img("#btnFont", 27, 27, "assets/skin/btn_font.png");

var dataTreePlaylist = [
  {
    text: "迅雷下载",
    // icon: "fa fa-folder",

    expanded: true,
    nodes: [
      {
        text: "下载1",
        // icon: "fa fa-folder",
      },
      {
        text: "下载2",
      },
    ],
  },
];

var dataTreeMedia = [
  {
    text: "今日热播",
    expanded: true,
    nodes: [
      {
        text: "斗罗大陆",
      },
      {
        text: "天龙八部",
      },
    ],
  },
];

var dataTreeMedia2 = [
  {
    text: "热点新闻",
    expanded: true,
    nodes: [
      {
        text: "八公",
      },
      {
        text: "HACHI",
      },
    ],
  },
];

var dataTreeLiveCenter = [
  {
    text: "短视频广场",
    expanded: true,
    nodes: [
      {
        text: "热门视频",
      },
      {
        text: "美女视频",
      },
    ],
  },
  {
    text: "直播频道",
  },
  {
    text: "乡村振兴",
  },
];

$("#treePlaylist").bstreeview({
  data: dataTreePlaylist,
  expandIcon: "fa-solid fa-minus",
  collapseIcon: "fa-solid fa-plus",
  parentsMarginLeft: "0rem",
});

$("#treeMedia").bstreeview({
  data: dataTreeMedia,
  expandIcon: "fa-solid fa-minus",
  collapseIcon: "fa-solid fa-plus",
  parentsMarginLeft: "0rem",
});

$("#treeMedia2").bstreeview({
  data: dataTreeMedia2,
  expandIcon: "fa-solid fa-minus",
  collapseIcon: "fa-solid fa-plus",
  parentsMarginLeft: "0rem",
});

$("#treeLiveCenter").bstreeview({
  data: dataTreeLiveCenter,
  expandIcon: "fa-solid fa-minus",
  collapseIcon: "fa-solid fa-plus",
  parentsMarginLeft: "0rem",
});

let g_video = window.document.querySelector("#video");
// 点击切换暂停、播放
$("#video").click(function () {
  if (g_video.paused) {
    g_video.play();
  } else {
    g_video.pause();
  }
});

$("#btnPlay").click(function (e) {
  // canPlayType()
  if (!g_video.src) {
    g_video.src = "_movie_test.mp4";
  }
  g_video.play();

  // $(".hidden-when-play").hide(); // 对于加了important的无效，对有些flex也无效
  $(".hidden-when-play").addClass("hidden");
  $("#playPanel").addClass("bkg-color-translucent");

  $(".show-when-play").removeClass("hidden");
});

$("#btnStop").click(function (e) {
  g_video.pause();
  g_video.removeAttribute("src");
  g_video.load();

  $(".hidden-when-play").removeClass("hidden");
  $("#playPanel").removeClass("bkg-color-translucent");

  $(".show-when-play").addClass("hidden");
});

$("#btnPause").click(function (e) {
  g_video.pause();
});
