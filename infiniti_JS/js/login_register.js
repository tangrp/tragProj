(function () {
    /** 如果已经登录、返回主页 */
    var session = sessionStorage.getItem("LOGINIFOCS") || localStorage.getItem("LOGINIFOCS");
    if (session) {
        location.href = "../index.html";
        return;
    }
    /* 搜索功能 */
    $(".searchBtn").on("click", function () {
        $('.serachWrap').toggle();
        $(".sub_menu_list").hide();
    })
    $('.searchIcon').on("click", function () {
        if ($(".scText").val()) {
            location.href = "../pages/search_result.html?q=" + $(".scText").val();
        }
    })
    $(".serverLink").on("click", function () {
        $(".sub_menu_list").toggle();
        $(".serachWrap").hide();
    })


    /** 获取DOM元素 */
    var loginWrap = getEl(".loginWrap"),
        registerGo = getEl(".registerGoLink"),
        lgNameIpt = getEl(".lgNameIpt"),
        lgPsdIpt = getEl(".lgPsdIpt"),
        loginBtn = getEl(".loginBtn"),
        registerWrap = getEl(".registerWrap"),
        loginGo = getEl(".loginGoLink"),
        rgNameIpt = getEl(".rgNameIpt"),
        rgPsdIpt = getEl(".rgPsdIpt"),
        rgRpsdIpt = getEl(".rgRpsdIpt"),
        rgEmailIpt = getEl(".rgEmailIpt"),
        rginputCaptcha = getEl(".inputCaptcha"),
        registerBtn = getEl(".registerBtn"),
        canvas = getEl("#canvasCaptcha"),
        randomValue = '',
        errFlag = 1;

    /** 随机码生成 */
    function creatCanvas() {
        var ctx = canvas.getContext('2d'),
            x = canvas.width / 2,
            oImg = new Image();
        oImg.src = '../img/radom_bg.jpg';
        oImg.onload = function () {
            var pattern = ctx.createPattern(oImg, 'repeat');
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.textAlign = 'center';
            ctx.fillStyle = '#ccc';
            ctx.font = '26px Roboto Slab';
            ctx.setTransform(1, -0.12, 0.2, 1, 0, 12);
            randomValue = ramdomCode(6);
            ctx.fillText(randomValue, x, 30);
        }
    }

    /** 初期加载 生成随机码 */
    window.onload = function () {
        creatCanvas();
    }

    /** 点击随机码更新 */
    canvas.onclick = function () {
        creatCanvas();
    }

    /** 跳转注册页面 */
    registerGo.onclick = function () {
        document.title = "注册";
        location.hash = "register";
        loginWrap.style.display = "none";
        registerWrap.style.display = "block"
    }

    /** 跳转登录页面 */
    loginGo.onclick = function () {
        document.title = "登录";
        location.hash = "login";
        registerWrap.style.display = "none"
        loginWrap.style.display = "block";
    }


    /**
     * 功能： Focus清除Error样式
     * @param iptId {string}    元素ID
     * */
    function itpOnFocus(iptId) {
        iptId.onfocus = function () {
            this.style.border = '1px solid #0066ff';
            $(iptId).nextAll('.msg').text('');
        }
    }

    /** 输入框格式验证 */
    function formatCheck(Ipt, reg, ermsg) {
        Ipt.onblur = function () {
            itpOnFocus(Ipt);
            // 输入值为空
            if (!this.value) {
                $(Ipt).nextAll('.msg').text("必须输入！");
                Ipt.style.border = "1px solid red"
                errFlag = 1;
                return errFlag;
            }
            if (reg.test(this.value)) {
                $(Ipt).nextAll('.msg').text('');
                Ipt.style.border = "1px solid black";
                errFlag = 0;
            } else {
                $(Ipt).nextAll('.msg').text(ermsg);
                Ipt.style.border = "1px solid red"
                errFlag = 1;
            }
            return errFlag;
        }
    }
    formatCheck(rgNameIpt, /^[\w-]{4,16}$/, "用户名不合法，4到16位(字母，数字，下划线，减号)");
    formatCheck(rgPsdIpt, /^[\w-]{4,16}$/, "密码不合法，4到16位(字母，数字，下划线，减号)");
    formatCheck(rgEmailIpt, /^\w+@[a-z0-9]+\.[a-z]{2,}$/i, "邮箱不合法");


    /** 密码再确认验证 */
    rgRpsdIpt.onblur = function () {
        itpOnFocus(rgRpsdIpt);
        var psdv = rgPsdIpt.value;
        if (rgRpsdIpt.value === psdv) {
            $(rgRpsdIpt).nextAll('.msg').text('');
            rgRpsdIpt.style.border = "1px solid black";
            errFlag = 0;
        } else {
            $(rgRpsdIpt).nextAll('.msg').text("密码输入不一致");
            rgRpsdIpt.style.border = "1px solid red"
            errFlag = 1;
        }
        return errFlag;
    }


    /** 验证码验证 */
    rginputCaptcha.onblur = function () {
        itpOnFocus(rginputCaptcha);
        var reg = new RegExp(randomValue, "\i")
        if (reg.test(this.value)) {
            $(rginputCaptcha).nextAll('.msg').text('');
            rginputCaptcha.style.border = "1px solid black";
            errFlag = 0;
        } else {
            $(rginputCaptcha).nextAll('.msg').text("验证码错误");
            rginputCaptcha.style.border = "1px solid red"
            errFlag = 1;
        }
        return errFlag;
    }


    /* 登录页面 清除错误信息 */
    function clError(ele) {
        ele.onfocus = function () {
            $(".lgMsg").html("");
        }
    }

    Bmob.initialize("8fa3a848adcf0e209afbe797c5c7a426", "9f788cf63bffb62f3a9b57d93a607eea");
    /** 登录按钮 */
    loginBtn.onclick = function () {
        if (!lgNameIpt.value || !lgPsdIpt.value) {
            $(".lgMsg").html("用户名或密码不能为空！");
            clError(lgNameIpt);
            clError(lgPsdIpt);
            return;
        }

        // 登录状态中，防止重复登录
        $(".loginBtn").addClass("lgdot");
        $(".loginBtn").html("");
        $(".loginBtn").attr("disabled", true);
        // Bmob 云数据库
        Bmob.User.logIn(lgNameIpt.value, lgPsdIpt.value, {
            success: function (user) {
                setTimeout(function() {
                    var arr = [{
                        LoginState: true,
                        Name: lgNameIpt.value
                    }];
                    sessionStorage.setItem('LOGINIFOCS', JSON.stringify(arr));
                    var rmbPsd = getEl(".rmbPsd");
                    if (rmbPsd.checked) {
                        localStorage.setItem("LOGINIFOCS", JSON.stringify(arr));
                    } else {
                        localStorage.removeItem("LOGINIFOCS");
                    }
                    location.href = "../index.html";
                }, 2000);
            },
            error: function (user, error) {
                $(".loginBtn").removeClass("lgdot");
                $(".loginBtn").html("登录");
                $(".loginBtn").attr("disabled", false);
                var alertMsg = "";
                switch (error.code) {
                    case 101:
                        {
                            alertMsg = "用户名或密码不正确";
                        }
                        break;
                }
                $(".lgMsg").html(alertMsg);
                clError(lgNameIpt);
                clError(lgPsdIpt);
            }
        })
    }

    var obj = {
        rgNameIptFlag: 1,
        rgPsdIptFlag: 1,
        rgRpsdIptFlag: 1,
        rgEmailIptFlag: 1,
        rginputCaptcha: 1
    }
    /** 注册按钮 */
    registerBtn.onclick = function () {
        // 验证输入是否合法、否则跳出注册
        obj.rgNameIptFlag = rgNameIpt.onblur();
        obj.rgPsdIptFlag = rgPsdIpt.onblur();
        obj.rgRpsdIptFlag = rgRpsdIpt.onblur();
        obj.rgEmailIptFlag = rgEmailIpt.onblur();
        obj.rginputCaptcha = rginputCaptcha.onblur();
        for (var i in obj) {
            if (obj[i] === 1) {
                creatCanvas();
                return;
            }
        }

        // Bmob 云数据库
        var user = new Bmob.User();
        user.set("username", rgNameIpt.value);
        user.set("password", rgPsdIpt.value);
        user.set("email", rgEmailIpt.value);
        // 防止重复点击
        $(".registerBtn").addClass("rgdot");
        $(".registerBtn").html("");
        $(".registerBtn").attr("disabled", true);
        user.signUp(null, {
            success: function (user) {
                setTimeout(function() {
                    var arr = [{
                        LoginState: true,
                        Name: rgNameIpt.value
                    }];
                    sessionStorage.setItem('LOGINIFOCS', JSON.stringify(arr));
                    localStorage.removeItem("LOGINIFOCS");
                    location.href = "../index.html";  
                }, 2000);
            },
            error: function (user, error) {
                $(".registerBtn").removeClass("rgdot");
                $(".registerBtn").html("注册");
                $(".registerBtn").attr("disabled", false);
                var alertMsg = "";
                switch (error.code) {
                    case 202:
                        {
                            alertMsg = "用户名已存在";
                        }
                        break;
                    case 203:
                        {
                            alertMsg = "邮箱已被注册";
                        }
                        break;
                }
                new LHYAlertView({
                    autoClose: 1000,
                    title: "温馨提示",
                    message: alertMsg
                })
            }
        })
    }
})();
