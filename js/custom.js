//判断访问设备
// var u = navigator.userAgent;
// var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
// var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
// var windowWidth = $(window).width();
NProgress.start();

const textList = [
  "優しい人にならなくちゃ、心が悴む前に。",
  "Take a deep breath.",
  "have a rest ~ ☕️",
  "cursed.",
  "这里沉睡着Anuluca的灵魂。",
  "网站越做越重了，已经回不了头了...",
  "现在在想什么？不妨记录一下灵感吧！",
];

document.getElementById("intro_text").innerText = textList.sort(
  () => 0.5 - Math.random()
)[0];


// //获取当前时间
// var ifDrink = (new Date()).getHours()

$(function () {
  var str = function () {
    /*

     _                _                 
    / \   _ __  _   _| |_   _  ___ __ _ 
   / _ \ | '_ \| | | | | | | |/ __/ _` |
  / ___ \| | | | |_| | | |_| | (_| (_| |
 /_/   \_\_| |_|\__,_|_|\__,_|\___\__,_|
                                        
                              
        */
  };
  console.log(str.getMultiLine());
  // let theme = sessionStorage.getItem("theme");
  // if (theme === "light") {
  //   $("#toLightButton").css({ display: "none" });
  //   $("#toDarkButton").css({ display: "block" });
  // } else {
  //   $("#toLightButton").css({ display: "block" });
  //   $("#toDarkButton").css({ display: "none" });
  // }
  // showOrHideToTop();
});

// $(window).scroll(function () {
//   showOrHideToTop();
// });

Function.prototype.getMultiLine = function () {
  var lines = new String(this);
  lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
  return lines;
};

// function showOrHideToTop() {
//   if ($(window).scrollTop() > $("html").height() / 2) {
//     $(".to_top").fadeIn(300);
//   } else {
//     $(".to_top").fadeOut(200);
//   }
// }

//gitalk&valine双评论端
$(".gitalk_btn").click(function () {
  $("#vcomments").css({ display: "none" });
  $("#gitalk-container").css({ display: "block" });

  $(".valine_btn").css({ color: "black" });
  $(".gitalk_btn").css({ color: "blue" });
  $(".moving").animate({
    width: "180px",
    marginLeft: "120px",
  });
});
$(".valine_btn").click(function () {
  $("#gitalk-container").css({ display: "none" });
  $("#vcomments").css({ display: "block" });

  $(".valine_btn").css({ color: "blue" });
  $(".gitalk_btn").css({ color: "white" });
  $(".moving").animate({
    width: "120px",
    marginLeft: "0px",
  });
});

//右下角链接互动
$(".link_l")
  .mouseenter(function () {
    $(this).stop().css({ backgroundColor: "white" });
    $(this).find("span").css({ color: "#3B3E40" });
    $(this).find("div").css({ "background-position": "0 -29px" });
  })
  .stop()
  .mouseleave(function () {
    $(this).stop().css({ backgroundColor: "rgba(0, 0, 0, 0.5)", border: "0" });
    $(this).find("span").css({ color: "white" });
    $(this).find("div").css({ "background-position": "0 0" });
  });

window.onload = function () {
  NProgress.done();
};

function changeSidebarSize() {
  if (!$(".book-sidebar-bottom").hasClass("sidebar-open")) {
    $(".book-sidebar-bottom").addClass("sidebar-open");
  } else {
    $(".book-sidebar-bottom").removeClass("sidebar-open");
  }
}

function changeTheme(type) {
  localStorage.setItem("theme", type);
  getTheme();
}

function jumpToPage(url) {
  window.location.href = url;
}

function openPage(url) {
  window.open(url);
}

function decodeAndOpenPage(url) {
  let decodedUurl = decodeBase64(url);
  window.open(decodedUurl);
}

// base64加密
function encodeBase64(str) {
  const utf8Bytes = new TextEncoder().encode(str);
  return btoa(String.fromCharCode(...utf8Bytes));
}

// base64解密
function decodeBase64(str) {
  const bytes = atob(str)
    .split("")
    .map((char) => char.charCodeAt(0));
  return new TextDecoder().decode(new Uint8Array(bytes));
}

// 页面加密
const encodePageList = [
  {
    id: "oldPhoto",
    dataId: "M2jkyNTQ=",
  },
  {
    id: "2016",
    dataId: "NsTM3Nzc=",
  },
  {
    id: "2019",
    dataId: "NdDA5OTI=",
  },
  {
    id: "2020",
    dataId: "MljIyNDA=",
  },
  {
    id: "2021",
    dataId: "MGzg0MzM=",
  },
  {
    id: "2022",
    dataId: "N0jY2",
  },
  {
    id: "2023",
    dataId: "NDk3NTU=",
  },
];
encodePageList.map((item) => {
  $(`#${item.id}`).click(() => {
    // if (localStorage.getItem("sk") === "9808") {
    //   let decodedUurl = item.dataId.substring(0, 1) + item.dataId.substring(2);
    //   window.location.href = "/" + decodeBase64(decodedUurl);
    // }
    // localStorage.setItem("sk", "[{}]");
    localStorage.setItem("egap", item.dataId);
    window.location.href = "/decode";
  });
});

$("#encodeSubmit").click(() => {
  const base64Answer = encodeBase64($("#encodeInput").val());
  if (base64Answer === "6L6J") {
    // localStorage.setItem("sk", "9808");
    let str = localStorage.getItem("egap");
    window.location.href =
      "/" + decodeBase64(str.substring(0, 1) + str.substring(2));
  }else{
    $('#encodeInput').val("")
    $('#encodeInput').attr('placeholder', '密钥错误');
  }
});

//  获取当前主题
function getTheme() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "p3r");
  }
  $("#body-color").addClass(localStorage.getItem("theme"));
    $("#body-color").attr("class").split(" ").map(item => {
      if(item !== localStorage.getItem("theme")){

        $("#body-color").removeClass(item);
      }
    })
}
getTheme();