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
})();
