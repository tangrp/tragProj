$(function () {
    var curHref = location.search.slice(1).split("&");
    var objSc = {}
    curHref.forEach(function (ele) {
        var newEle = ele.split("=");
        objSc[newEle[0]] = newEle[1];
    })
    var dataL = null;
    $.ajax({
        url: "../JSON/goodsList.json",
        port: "GET",
        dataType: "json",
        success: function (response) {
            dataL = response.goodsLs[objSc.index];
            var obj = {
                "page": "goodsDesc",
                "data": dataL
            }
            loadHtmlCom(obj);
            tabPic();
            addNum();
            reduceNum();
            inputEven();
        }
    })

    /* 添加数量 */
    function addNum() {
        $(".addBtn").on("click", function () {
            let oCurNum = $(this).siblings(".gNums"),
                curNum = oCurNum.val();
            curNum++;
            oCurNum.val(curNum);
        })
    }

    /* 减数量 */
    function reduceNum() {
        $(".reduceBtn").on("click", function () {
            let oCurNum = $(this).siblings(".gNums");
            curNum = oCurNum.val();
            curNum--;
            if (curNum === 0) {
                return;
            }
            oCurNum.val(curNum);
        })
    }

    /*  输入框（数量） */
    function inputEven() {
        $(".gNums").on("blur", function () {
            let curNum = $(this).val(),
                curIndex = $(this).parent().parent().parent().index();
            if (curNum < 0 || isNaN(curNum)) {
                $(this).val(1);
                return;
            }
        })
    }

    function tabPic() {
        /* 图片切换 */
        $(".imgList li").hover(function () {
            $(this).siblings().css("border-color", "transparent");
            $(this).css("border-color", "red");
            $(".cursimg").attr("src", $(this).children().attr("src"));
            $(".curbimg").attr("src", $(this).children().attr("data-bigimg"));
        });
        /* 放大镜 */
        $(".small-box").on("mouseenter", function () {
            $(".glass").show();
            $(".big-box").show();
        })
        $(".small-box").on("mousemove", function (e) {
            // var imgw = parseInt($(".cursimg").css("width")) * parseInt($(".big-box").css("width")) / parseInt($(".glass").css("width"));
            // var imgh = parseInt($(".cursimg").css("height")) * parseInt($(".big-box").css("height")) / parseInt($(".glass").css("height"));
            // $(".curbimg").css("width", imgw + "px");
            // $(".curbimg").css("height", imgh + "px");
            // console.log(e.clientX);
            // console.log($(".small-box").offset().left);


            /*  鼠标距离窗口的距离-小图片距离窗口的距离-放大镜/2 */
            var glw = e.clientX - $(".small-box").offset().left - $(".glass").width() / 2;
            var glh = e.clientY - $(".small-box").offset().top - $(".glass").height() / 2
            if (glw < 0) {
                glw = 0;
            } else if (glw > parseInt($(".small-box").width()) - parseInt($(".glass").width())) {
                glw = parseInt($(".small-box").width()) - parseInt($(".glass").width());
            }

            if (glh < 0) {
                glh = 0;
            } else if (glh > parseInt($(".small-box").height()) - parseInt($(".glass").height())) {
                glh = parseInt($(".small-box").height()) - parseInt($(".glass").height());
            }

            $(".glass").css("left", glw + "px");
            $(".glass").css("top", glh + "px");

            /*  -放大镜移动距离*（（大图片-大图片容器）/（小图片-放大镜）） */
            $(".curbimg").css("left", -glw*($(".curbimg").width()-$(".big-box").width())/($(".small-box").width()-$(".glass").width()) + "px");
            $(".curbimg").css("top", -glh*($(".curbimg").height()-$(".big-box").height())/($(".small-box").height()-$(".glass").height()) + "px");
        })
        $(".small-box").on("mouseleave", function () {
            $(".glass").hide();
            $(".big-box").hide();
        })
    }





})