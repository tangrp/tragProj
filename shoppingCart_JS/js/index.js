$(function () {
    let data = null;
    $.ajax({
        url: "./JSON/goodsList.json",
        post: "GET",
        success: function (response) {
            data = response.goodsLs;
            var obj = {
                "page":"goodsList",
                "data":data,
            }
            loadHtmlCom(obj);
        }
    })
});