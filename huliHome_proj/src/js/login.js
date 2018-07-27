require("../less/login_register.less");
require("footer-LESS");
require("header-LESS");
require("normalized-LESS");
require("common-LESS");
require("../js/header.js");

$(function () {

    let baseUrl = "http://localhost:8080/dist/";
    /** 如果已经登录、返回主页 */
    var session = sessionStorage.getItem("tempUsers") || localStorage.getItem("tempUsers");
    if (session) {
        location.href = baseUrl + "index.html";
        return;
    }
    /** 跳转注册页面 */
    $(".registerGoLink").click(function () {
        $(".registerGoLink").attr("href", baseUrl + "static/pages/register.html");
    })

    /* 登录页面 清除错误信息 */
    function clError(ele) {
        ele.focus(function () {
            $(".lgMsg").text("");
        })
    }
    /** 登录按钮 */
    $(".loginBtn").click(function () {
        if (!$(".lgEmailIpt").val() || !$(".lgPsdIpt").val()) {
            $(".lgMsg").html("邮箱或密码不能为空！");
            clError($(".lgEmailIpt"));
            clError($(".lgPsdIpt"));
            return;
        }

        // 登录状态中，防止重复登录
        $(".loginBtn").addClass("lgdot");
        $(".loginBtn").html("");
        $(".loginBtn").attr("disabled", true);

        var countUser = 0;
        let rootArr = JSON.parse(localStorage.getItem("LOGINIFOCS"));
        if (rootArr) {
            for (var i = 0, len = rootArr.length; i < len; i++) {
                if (rootArr[i].rgEmailIpt == $(".lgEmailIpt").val() && rootArr[i].rgtPsdIpt == $(".lgPsdIpt").val()) {
                    // 是否记住密码
                    let arr = [{
                        LoginState: true,
                        rgEmailIpt: $(".lgEmailIpt").val()
                    }];
                    if ($("#rmbPsd")[0].checked == true) {
                        localStorage.setItem('tempUsers', JSON.stringify(arr));
                    } else {
                        sessionStorage.setItem('tempUsers', JSON.stringify(arr));
                    }
                    location.href = baseUrl + "index.html";
                } else {
                    if (rootArr[i].rgEmailIpt == $(".lgEmailIpt").val() && rootArr[i].rgtPsdIpt != $(".lgPsdIpt").val()) {
                        clearFail();
                        alert("用户名或密码错误，请重新输入！");
                    } else {
                        countUser++;
                    }
                }
            }
            if (countUser == rootArr.length) {
                clearFail();
                alert("用户名不存在！");
            }
        } else {
            clearFail();
            alert("用户名不存在！");
        }

        function clearFail() {
            $(".loginBtn").removeClass("lgdot");
            $(".loginBtn").html("登&nbsp;&nbsp;&nbsp;录");
            $(".loginBtn").attr("disabled", false);
        }
    })
});