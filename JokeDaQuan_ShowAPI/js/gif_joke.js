$(function () {
    // 抓取数据
    // 90f97dc5e86442c0a580165d4c10efa8
    // 
    // showapi_appid:66413
    // showapi_sign:90f97dc5e86442c0a580165d4c10efa8
    // http://route.showapi.com/341-3?showapi_appid=66413&showapi_sign=90f97dc5e86442c0a580165d4c10efa8
    $.ajax({
        // 请求地址
        url: "http://route.showapi.com/341-3",
        // 请求方法
        type: "GET",
        dataType: "json",
        data: {
            "showapi_appid": "66413",
            "showapi_sign": "90f97dc5e86442c0a580165d4c10efa8"
        },
        success: function (response) {
            var contentlist = response.showapi_res_body.contentlist,
                textHtml = '';
            contentlist.forEach(function (data) {
                textHtml += `
                <li>
                    <p class="title">${data.title}</p>
                    <p class="date">${data.ct}</p>
                    <img src="${data.img}" alt="">
                </li>
                `;
            });
         // 更新页面
            $(".content_list").html(textHtml);
        }
    });
})