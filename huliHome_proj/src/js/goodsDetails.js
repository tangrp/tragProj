require("../less/goodsDetails.less");
require("header-LESS");
require("footer-LESS");
require("normalized-LESS");
require("common-LESS");
require("../js/header.js");

// const tools = require("tools-JS");
$(function () {
    let baseUrl = "http://localhost:8080/dist/";
    $(".shoppingCar").click(function () {
        let sesArr = [];
        let shopGoods = sessionStorage.getItem("shopGoods");
        if (shopGoods) {
            sesArr = JSON.parse(shopGoods);
        } else {
            sesArr = [];
        }
        sesArr.push({
            "gdsImgH": $(".small img").attr("src"),
            "gdsName": $(".goodsName > h1").text(),
            "gdsMoney": $(".newPrice .rmbNum").text(),
            "gdsNums": $(".gNums").val()
        });
        sessionStorage.setItem("shopGoods", JSON.stringify(sesArr));
        location.href = baseUrl + "static/pages/shopping.html"
    })

    addNum();
    reduceNum();
    /* 添加数量 */
    function addNum() {
        $(".add").on("click", function (e) {
            let curNum = $(".gNums").val();
            ++curNum;
            if (curNum > $(".quantity").text()) {
                curNum = $(".quantity").text();
            }
            $(".gNums").val(curNum)
        })
    }

    /* 减数量 */
    function reduceNum() {
        $(".del").click(function (e) {
            let curNum = $(".gNums").val();
            if (curNum > 1) {
                --curNum
            } else {
                alert("数量不能小于一件！")
                curNum = 1;
            }
            $(".gNums").val(curNum);

        })
    }
    $(".small ul li").on("click", (e) => {
        $(e.currentTarget).addClass("tt").siblings().removeClass("tt");
    })
    $(".small ul li img").on("click", (e) => {
        let src = $(e.currentTarget).attr("src");
        $(".show img").attr("src", src)
    })

    // $(".link").attr("href", baseUrl + "static/pagesgoodsDetails_assem.html");
})