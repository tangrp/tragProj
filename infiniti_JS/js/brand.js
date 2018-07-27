(function () {
    /* tab选项切换样式 */
    $('.navLink').on('click', function () {
        $(this).removeClass("link").parent().siblings().children().addClass("link");
        $(this).addClass("udline").parent().siblings().children().removeClass("udline");
    });
    /* 窗口滚动 菜单栏位于顶部 */
    var subNavT = $(".subNav").offset().top,
        offset = 0;
    window.onscroll = function () {
        offset = document.documentElement.scrollTop || document.body.scrollTop;
        if (subNavT <= offset) {
            $(".subNav").addClass("subNavFix");
            $(".subNav").removeClass("wrapper");

        }
        if (subNavT > offset) {
            $(".subNav").removeClass("subNavFix");
            $(".subNav").addClass("wrapper");
        }
    }

    /** 优酷视频 */
    function playVideo() {
        player = new YKU.Player('youkuplayer', {
            styleid: '0',
            client_id: 'UMTI4ODIwNzc3Mg',
            vid: 'XMTY0ODAzMjY4MA',
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
    $(".videoWrapper").on("click", function () {
        $(this).hide();
        $("#youkuplayer").children().remove();
    })
    /* 视频播放 */
    $(".bdPlay").on("click", function () {
        playVideo();
        $(this).next().show();
    })
})();
