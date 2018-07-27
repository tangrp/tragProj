
require("header-LESS");
require("footer-LESS");
require("normalized-LESS");
require("common-LESS");
require("../js/header.js");
require("../less/goodsDetails_assem.less");

// const tools = require("tools-JS");
$(function(){
    // 切换
    $(".smallImg img").on("click",(event) => {
        $(event.target).siblings().css("border-color", "transparent");
        $(event.target).css("border-color", "#82c353");
        $(".bigImg").attr("src",$(event.target).attr("src"))
        console.log($(".now").text())
    })


    // 购物车
    let baseUrl = "http://localhost:8080/dist/";
    $(".addCar").click(function () {
        let sesArr = [];
        let shopGoods = sessionStorage.getItem("shopGoods");
        if (shopGoods) {
            sesArr = JSON.parse(shopGoods);
        } else {
            sesArr = [];
        }
        sesArr.push({
            "gdsImgH": $(".bigImg").attr("src"),
            "gdsName": $(".name").text(),
            "gdsMoney":$(".now").text().slice(1),
            "gdsNums":$(".gNums").val()
        });
        sessionStorage.setItem("shopGoods",JSON.stringify(sesArr));
        location.href = baseUrl+"static/pages/shopping.html"
    })

    // 添加
    $(".add").on("click", function () {
        let curNum = $(".gNums").val();
        ++curNum;
        if (curNum > $(".quantity").text()) {
            curNum = $(".quantity").text();
        }
        $(".gNums").val(curNum)
    })
    //减
    $(".minus").click(function (e) {
        let curNum = $(".gNums").val();
        if (curNum > 1) {
            --curNum
        } else {
            alert("数量不能小于一件！")
            curNum = 1;
        }
        $(".gNums").val(curNum);



 

    
 
    })


    











    
})