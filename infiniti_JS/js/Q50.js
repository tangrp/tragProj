(function () {
    /* tab选项切换样式 */
    $('.navLink').on('click', function () {
        $(this).removeClass("link").parent().siblings().children().addClass("link");
        $(this).addClass("udline").parent().siblings().children().removeClass("udline");
    });
    /** 获取DOM元素 */
    var imgfls = getEl(".imgfl", true),
        imgfLen = imgfls.length,
        curIdex = 0,
        imgpre = getEl(".imgpre"),
        imgnext = getEl(".imgnext"),
        dot = getEl(".dot", true),
        vehicleFlash = getEl(".vehicle_flash");

    /** 前一页 */
    imgpre.onclick = function () {
        curIdex = curIdex === 0 ? imgfLen - 1 : --curIdex;
        tab();
    }
    /** 后一页 */
    imgnext.onclick = function () {
        curIdex = curIdex === (imgfLen - 1) ? 0 : ++curIdex;
        tab();
    }
    for (var i = 0, len = dot.length; i < len; i++) {
        dot[i].dataset.index = i;
        dot[i].onclick = function () {
            var index = parseInt(this.dataset.index);
            if (curIdex == index) {
                return;
            }
            curIdex = index;
            tab();
        }
    }

    /** 图片切换 */
    function tab() {
        for (var j = 0; j < imgfLen; j++) {
            if (imgfls[j].classList.contains("show")) {
                imgfls[j].classList.remove("show");
                dot[j].classList.remove("dotScale");
                break;
            }
        }
        imgfls[curIdex].classList.add("show");
        dot[curIdex].classList.add("dotScale");
    }

    /** 鼠标进入 */
    var timer = null;

    function play() {
        timer = setInterval(function () {
            imgnext.onclick();
        }, 2500)
    }
    play();

    /** 鼠标离开 */
    function stop() {
        clearInterval(timer);
        timer = null;
    }

    vehicleFlash.onmouseenter = stop;
    vehicleFlash.onmouseleave = play;

    /** 视频\轮播 */
    var videoListWrp = getEl(".videoListWrp"),
        vdlist = getEl(".vdlist"),
        vdpreBtn = getEl(".vdpre"),
        vdnextBtn = getEl(".vdnext"),
        imglen = 6,
        vddot = getEl(".vddot", true),
        isAnimating = false,
        vdCurIndex = 0;
    /* 上一页 */
    vdpreBtn.onclick = function () {
        if (isAnimating) {
            return;
        }
        vdCurIndex = vdCurIndex === 0 ? vddot.length - 1 : --vdCurIndex;
        vdtab(videoListWrp.offsetWidth);
        vdChangeIdot();
    }
    /* 下一页 */
    vdnextBtn.onclick = function () {
        if (isAnimating) {
            return;
        }
        vdCurIndex = vdCurIndex == vddot.length - 1 ? 0 : ++vdCurIndex;
        vdtab(-videoListWrp.offsetWidth);
        vdChangeIdot();
    }
    /* 图片切换 */
    function vdtab(vdWidth) {
        isAnimating = true;
        // 帧动画
        var duration = 500,
            interval = 5,
            frames = duration / interval,
            speed = Math.ceil(vdWidth / frames);
        var vdcurLeft = parseInt(getStyle(vdlist, "left")),
            vdtarLeft = vdcurLeft + vdWidth;
        var t = setInterval(function () {
            speed = Math.ceil(vdWidth / frames);
            vdcurLeft = parseInt(getStyle(vdlist, "left"));
            if ((vdWidth < 0 && vdcurLeft > vdtarLeft) || (vdWidth > 0 && vdcurLeft < vdtarLeft)) {
                if ((vdWidth < 0 && vdcurLeft + speed < vdtarLeft) || (vdWidth > 0 && vdcurLeft + speed > vdtarLeft)) {
                    vdlist.style.left = vdtarLeft + "px";
                    return;
                }
                vdlist.style.left = vdcurLeft + speed + "px";
            } else {
                clearInterval(t);
                t = null;
                isAnimating = false;
                var imgw = videoListWrp.offsetWidth;
                if (parseInt(vdlist.style.left) > -imgw) {
                    vdlist.style.left = -imgw * imglen + "px";
                }
                if (parseInt(vdlist.style.left) < -imgw * imglen) {
                    vdlist.style.left = -imgw + "px";
                }
            }
        }, interval);
    }
    /* 控制点点击事件 */
    for (var i = 0, len = vddot.length; i < len; i++) {
        vddot[i].dataset.index = i;
        vddot[i].onclick = function () {
            var vdIndex = this.dataset.index;
            vdtab(-videoListWrp.offsetWidth * (vdIndex - vdCurIndex));
            vdCurIndex = vdIndex;
            vdChangeIdot();
        }
    }

    function vdChangeIdot() {
        for (var i = 0, len = vddot.length; i < len; i++) {
            if (vddot[i].classList.contains("show")) {
                vddot[i].classList.remove("show");
                break;
            }
        }
        vddot[vdCurIndex].classList.add("show");
    }

    /* 优酷视频加载 */
    function playVideo() {
        player = new YKU.Player('youkuplayer', {
            styleid: '0',
            client_id: 'UMTI4ODIwNzc3Mg',
            vid: 'XMTQxNTgzODQ0MA',
            autoplay: true,
            show_related: true,
            events: {
                onPlayEnd: function () {},
                onPlayStart: function () {},
                onPlayerReady: function () {}
            }
        });

        function playVideo() {
            player.playVideo();
        }

        function pauseVideo() {
            player.pauseVideo();
        }

        function seekTo(s) {
            player.seekTo(s);
        }

        function currentTime() {
            return player.currentTime();
        }
    }

    /* 关闭视频 */
    $(".closeVideo").on("click", function () {
        $(this).parent().parent().hide();
        $(this).next().children().remove();

    })
    /* 视频播放 */
    $(".q50play").on("click", function () {
        if ($(this).attr('data-play') === "youku") {
            playVideo();
        }
        $(this).next().show();
    })
})();
