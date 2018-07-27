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

    /** 跳转登录页面 */
    $(".loginGoLink").click(function () {
        $(".loginGoLink").attr("href", baseUrl + "static/pages/login.html");

    })

    /* 功能： Focus清除Error样式 */
    function itpOnFocus(iptId) {
        iptId.focus(function () {
            iptId.css({
                "border": "1px solid #0066ff"
            });
            iptId.nextAll('.msg').text('');
        })
    }

    let errFlag = 1;
    /** 输入框格式验证 */
    function formatCheck(Ipt, reg, ermsg) {
        Ipt.blur(function () {
            itpOnFocus(Ipt);
            // 输入值为空
            if (!Ipt.val()) {
                Ipt.nextAll('.msg').text("必须输入！");
                Ipt.css({
                    "border": "1px solid red"
                });
                errFlag = 1;
            } else if (reg.test(Ipt.val())) {
                Ipt.nextAll('.msg').text('');
                Ipt.css({
                    "border": "1px solid #bbb"
                });
                errFlag = 0;
            } else {
                Ipt.nextAll('.msg').text(ermsg);
                Ipt.css({
                    "border": "1px solid red"
                });
                errFlag = 1;
            }
            return errFlag;
        })
    }
    /** 密码再确认验证 */
    $(".rgRpsdIpt").blur(function () {
        itpOnFocus($(".rgRpsdIpt"));
        let psdv = $(".rgPsdIpt").val();
        if ($(".rgRpsdIpt").val() === psdv) {
            $(".rgRpsdIpt").nextAll('.msg').text('');
            $(".rgRpsdIpt").css({
                "border": "1px solid #bbb"
            });
            errFlag = 0;
        } else {
            $(".rgRpsdIpt").nextAll('.msg').text("密码输入不一致");
            $(".rgRpsdIpt").css({
                "border": "1px solid red"
            });
            errFlag = 1;
        }
        return errFlag;
    })
    formatCheck($(".rgEmailIpt"), /^\w+@[a-z0-9]+\.[a-z]{2,}$/i, "邮箱不合法");
    formatCheck($(".rgPsdIpt"), /^[\w-]{4,16}$/, "密码不合法，4到16位(字母，数字，下划线，减号)");

    let obj = {
        rgEmailIptFlag: 1,
        rgPsdIptFlag: 1,
        rgRpsdIptFlag: 1,
    }
    let rootArr = [];
    /** 注册按钮 */
    $(".registerBtn").click(
        function () {
            // 验证输入是否合法、否则跳出注册
            $(".rgEmailIpt").blur();
            obj.rgEmailIptFlag = errFlag;
            $(".rgPsdIpt").blur()
            obj.rgPsdIptFlag = errFlag;
            $(".rgRpsdIpt").blur();
            obj.rgRpsdIptFlag = errFlag;

            for (var i in obj) {
                if (obj[i] === 1) {
                    return;
                }
            }
            $(".registerBtn").addClass("rgdot");
            $(".registerBtn").html("");
            $(".registerBtn").attr("disabled", true);
            setTimeout(function () {
                // 定义存储注册数据集合
                if (!localStorage.getItem("LOGINIFOCS")) {
                    rootArr = [];
                } else {
                    /*
                     * 如果数据存在
                     * 将键LOGINIFOCS 里存储的字符串值，转换为数组类型的值
                     * */
                    rootArr = JSON.parse(localStorage.getItem("LOGINIFOCS"));
                    for (var i = 0, len = rootArr.length; i < len; i++) {
                        if (rootArr[i].rgEmailIpt == $(".rgEmailIpt").val()) {
                            $(".registerBtn").removeClass("rgdot");
                            $(".registerBtn").html("注册");
                            $(".registerBtn").attr("disabled", false);
                            alert("用户名已存在，请重新输入！");
                            return;
                        }
                    }
                }
                rootArr.push({
                    rgEmailIpt: $(".rgEmailIpt").val(),
                    rgtPsdIpt: $(".rgPsdIpt").val()
                });
                // 将字符串值 存储在键（key)中
                localStorage.setItem("LOGINIFOCS", JSON.stringify(rootArr));

                var arr = [{
                    LoginState: true,
                    rgEmailIpt: $(".rgEmailIpt").val()
                }];
                sessionStorage.setItem('tempUsers', JSON.stringify(arr));
                localStorage.removeItem("tempUsers");
                location.href = baseUrl + "index.html";
            }, 2000)
        }
    )

});