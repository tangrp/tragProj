$(function () {
    var curIndex;
    // 定义地址
    var links = [
            "../page-vehicles/new-vehicles.html",
            "../page-vehicles/brochure.html",
        ],
        curadd = [
            "全新车系",
            "下载型录"
        ];
    // 为菜单项添加点击事件
    function tabC() {
        $('.navTab').on('click', function () {
                flagS = false;
                var index = $(this).index();
                // 避免用户重复点击
                if (index === curIndex) {
                    return;
                }
                $(".curads").html(curadd[$(this).index()]);
                // 更新当前显示页面下标
                curIndex = index;
                $.ajax({
                    url: links[$(this).index()],
                    type: "GET",
                    success: function (response) {
                        $(".col_02").html(response);
                    }
                })

                $('.navLink').on('click', function () {
                    $(this).removeClass("link").parent().siblings().children().addClass("link");
                    $(this).addClass("udline").parent().siblings().children().removeClass("udline");
                })
            
        }).first().trigger("click");
    }
    tabC();
});
