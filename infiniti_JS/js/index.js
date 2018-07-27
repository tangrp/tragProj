(function () {
    /** 获取DOM元素 */
    var pre = getEl(".pre"),
        next = getEl(".next"),
        bannerFlash = getEl(".bannerFlash"),
        imgListWrap = getEl(".imgListWrap"),
        dot = getEl(".dot", true),
        imglen = 6,
        curIndex = 0,
        isAnimating = false,
        timer = null,
        bnImg = getEl(".bannerFlash img", true);

    /** 前一页 */
    pre.onclick = function () {
        if (isAnimating) {
            return;
        };
        if (curIndex === 0) {
            curIndex = dot.length - 1;
        } else {
            --curIndex;
        }
        tab(bannerFlash.offsetWidth);
        changeIdot();
    }

    /** 后一页 */
    next.onclick = function () {
        if (isAnimating) {
            return;
        };
        if (curIndex === (dot.length - 1)) {
            curIndex = 0;
        } else {
            ++curIndex;
        }
        tab(-bannerFlash.offsetWidth);
        changeIdot();
    }

    /** 图片切换 */
    function tab(offset) {
        isAnimating = true;
        // 帧动画
        var duration = 500,
            interval = 5,
            frames = duration / interval,
            speed = Math.ceil(offset / frames);
        var curLeft = parseInt(getStyle(imgListWrap, "left")),
            tarLeft = curLeft + offset;

        var t = setInterval(function () {
            curLeft = parseInt(getStyle(imgListWrap, "left"));
            if ((offset < 0 && curLeft > tarLeft) || (offset > 0 && curLeft < tarLeft)) {
                imgListWrap.style.left = curLeft + speed + "px";
            } else {
                clearInterval(t);
                t = null;
                isAnimating = false;
                // 现在距离的宽度 + 屏幕宽度 = 目标宽度
                imgListWrap.style.left = tarLeft + "px";
                var imgw = bannerFlash.offsetWidth;
                // 如果显示的最后一张   跳转到显示的第一张
                if (parseInt(imgListWrap.style.left) < -imglen * imgw) {
                    imgListWrap.style.left = -imgw + "px";
                } else if (parseInt(imgListWrap.style.left) > -imgw) {
                    imgListWrap.style.left = -imglen * imgw + "px";
                }
            }
        }, interval)
    }

    /** 控制点点击事件 */
    for (var i = 0, len = dot.length; i < len; i++) {
        dot[i].dataset.index = i;
        dot[i].onclick = function () {
            var tarIndex = this.dataset.index;
            if (tarIndex === curIndex || isAnimating) {
                return;
            }
            var offset = -bannerFlash.offsetWidth * (tarIndex - curIndex);
            curIndex = tarIndex;
            tab(offset);
            changeIdot();
        }
    }

    function changeIdot() {
        for (var i = 0, len = dot.length; i < len; i++) {
            if (dot[i].classList.contains("show")) {
                dot[i].classList.remove("show");
                break;
            }
        }
        dot[curIndex].classList.add("show");
    }

    /* 播放 */
    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 3000)
    }
    play();

    /* 停止播放 */
    function stop() {
        clearInterval(timer);
        timer = null;
    }
    bannerFlash.onmouseenter = stop;
    bannerFlash.onmouseleave = play;
})();
