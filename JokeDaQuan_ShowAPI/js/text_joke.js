$(function () {
    // 抓取数据
    // 90f97dc5e86442c0a580165d4c10efa8
    // 
    // showapi_appid:66413
    // showapi_sign:90f97dc5e86442c0a580165d4c10efa8
    // http://route.showapi.com/341-1?showapi_appid=66413&showapi_sign=90f97dc5e86442c0a580165d4c10efa8

    var curPage = 1;
    // window.onscroll(function(){
    //     var scrollTop = $(this).scrollTop;
    //     console.log(scrollTop);
    // })

   


    $.ajax({
        // 请求地址
        url: "http://route.showapi.com/341-1",
        // 请求方法
        type: "GET",
        dataType: "json",
        data: {
            "showapi_appid": "66413",
            "showapi_sign": "90f97dc5e86442c0a580165d4c10efa8",
            "page":1
        },
        success: function (response) {
            var contentlist = response.showapi_res_body.contentlist,
                textHtml = '';
            contentlist.forEach(function (data) {
                textHtml += `
                <li>
                    <p class="title">${data.title}</p>
                    <p class="date">${data.ct}</p>
                    <p class="text">${data.text}</p>
                </li>
                `;
            });
            // 更新页面
            $(".content_list").html(textHtml);
        }

    });

   
})



