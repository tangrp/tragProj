require("../less/personInfo.less");
require("header-LESS");
require("footer-LESS");
require("normalized-LESS");
require("common-LESS");
require("../js/header.js");
// const tools = require("tools-JS");

$(function(){
    let baseUrl = "http://localhost:8080/dist/";
    /** 如果已经登录、返回主页 */
    var session = sessionStorage.getItem("tempUsers") || localStorage.getItem("tempUsers");
    if (!session) {
        location.href = baseUrl + "index.html";
        return;
    }
    $(".list p").on("click",(event) => {
            $(event.target).next().css("display","block");
  
    })
    $(".sele_list").mouseleave(function(){
        $(this).hide();
    })
    $(".sele_list li").on("click",(event) => {
        $(event.target).parent().prev().text($(event.target).text());
    })
})