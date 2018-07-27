"use strict";

$(function () {
    /* 轮播图 */
    var imgLen = $(".flashImg img").length,
        i = 0;
    setInterval(function () {
        i === imgLen - 1 ? i = 0 : i++;
        $(".flashImg img").eq(i).css("opacity", "1");
        $(".flashImg img").not($(".flashImg img").eq(i)).css("opacity", "0");
    }, 4000);

    /* 热卖商品  */
    var strHtml = '';
    home_goods_datas.forEach(function (element) {
        strHtml += "\n            <li>\n                <div class=\"imgwp\"> <img src=\"./img/" + element.goodsImg + "\" alt=\"\"></div>\n                <span class=\"desc\">" + element.goodsName + "</span>\n                <span class=\"price\">" + element.goodsPrice + "</span>\n                <a class=\"hoverLink\" href=\"javascript:;\"> </a>\n            </li>\n        ";
    });
    $(".goodsList ul").html(strHtml);

    /* 最热资讯  */
    var strHtmlNew = "";
    home_hotnews_datas.forEach(function (element) {
        strHtmlNew += "\n        <div class=\"newsdesc clearFix\">\n            <img class=\"art-img\" src=\"./img/" + element.imgName + "\" alt=\"\">\n            <div class=\"arc-infocs\">\n                <h3 class=\"title\">" + element.title + "</h3>\n                <span class=\"time\">" + element.date + "</span>\n                <p>\n                    " + element.des + "\n                </p>\n            </div>\n        </div>\n        ";
    });
    $(".articlew").html(strHtmlNew);

    /* 回到顶部 */
    $(".gotop").click(function () {
        var scTop = $(window).scrollTop();
        var timer = null;
        var interval = 15,
            duration = 1000,
            frames = duration / interval,
            speed = Math.ceil(scTop / frames);
        $(window).scroll(function () {
            scTop = $(window).scrollTop();
        });
        timer = setInterval(function () {
            if (scTop > 0) {
                $(window).scrollTop(scTop - speed);
            } else {
                scTop = 0;
                clearInterval(timer);
            }
        }, interval);
    });

    /* 动画效果 */
    $(window).scroll(function () {
        var $scrollTop = $(window).scrollTop();
        var $screW = $(window).height();
        $(".lydesc").each(function (idx, ele) {
            var $lydesc = $(ele).offset().top;
            if ($scrollTop > $lydesc - $screW && $scrollTop < $lydesc) {
                $(ele).css({ "animation-play-state": "running" });
            }
        });

        $(".head").each(function (idx, ele) {
            var $eleT = $(ele).offset().top;
            if ($scrollTop > $eleT - $screW && $scrollTop < $eleT) {
                $(ele).css({ "animation-play-state": "running" });
            }
        });
    });
});