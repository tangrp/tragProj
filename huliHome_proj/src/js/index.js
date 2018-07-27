require("../less/index.less");
require("header-LESS");
require("footer-LESS");
require("normalized-LESS");
require("common-LESS");
require("../js/header.js");

let timer = null;
let $imgBox = $(".img_box li");
let $dotWarp = $(".dot_warp span");
let index = 0;

window.onload = function(){
    $imgBox.eq(index).addClass("show").siblings().removeClass("show");
}
timer = setInterval(function () {
    if (index < $imgBox.length) {
        $imgBox.eq(index).addClass("show").siblings().removeClass("show");
        $dotWarp.eq(index).addClass("dotShow").siblings().removeClass("dotShow");
        index++;
    } else {
        index = 0;
    }
}, 5000);
$dotWarp.click(function () {
    $imgBox.eq($(this).index()).addClass("show").siblings().removeClass("show");
    $dotWarp.eq($(this).index()).addClass("dotShow").siblings().removeClass("dotShow");
    index = $(this).index()
});