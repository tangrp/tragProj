$(function () {
    let baseUrl = "http://localhost:8080/dist/";
    $(".goIndex").attr("href", baseUrl + "index.html")
    $(".login").attr("href", baseUrl + "static/pages/login.html");
    $(".userEmail").attr("href", baseUrl + "static/pages/personInfo.html");

    var session = sessionStorage.getItem("tempUsers") || localStorage.getItem("tempUsers");
    if (session) {
        let loginIfocs = JSON.parse(session);
        $(".userEmail").text(loginIfocs[0].rgEmailIpt);
        $(".userEmail").show();
        $(".login").hide();

        //购物车小红点
        let redBtn = null;
        $(".goos_number").text($(".goods").children().length);
        shopBtn();
    } else {
        $(".goos_number").css('display', 'none');
        $(".userEmail").hide();
        $(".login").show();
    }
    function shopBtn() {
        // 点击购物车
        $(".shop").click(function () {
            if ($(".treas").css("display") == "none") {
                $(".treas").show();
                $(".shop").css({
                    "border": "1px solid #ccc",
                    "border-bottom-color": "transparent",
                    "z-index": "102",
                    "background-color": "#fff"
                })
            } else {
                $(".treas").hide();
                $(".shop").css({
                    "border-color": "transparent",
                    "background-color": "transparent"
                })
            }
        });
        $(".goShoppingCar a").click(function () {
            $(".goShoppingCar a").attr("href", baseUrl + "static/pages/shopping.html")
        })
    }


})