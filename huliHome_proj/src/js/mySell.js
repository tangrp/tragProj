require("../less/mySell.less");
require("header-LESS");
require("footer-LESS");
require("normalized-LESS");
require("common-LESS");
require("../js/header.js");
// const tools = require("tools-JS");

$(function(){
    if($(".now").text() == "售卖中"){
        $(".now").nextAll(".operate").children().children().children(".ban").css({
            "color":"#e3e9ef","cursor":"not-allowed"
        })
    }
})