(function () {
    /** 请求JSON 数据 */
    $.ajax({
        url: "../JSON/brochure.json",
        type: "GET",
        success: function (response) {
            var len = response.infocs.length,
                strHtml = '';
            for (var i = 0; i < len; i++) {
                // 正则匹配 金额
                var price = response.infocs[i].price[1].full_price.replace(/\B(?=(\d{3})+$)/g, ',');
                strHtml += `
                    <li>
                        <div class="vehicle_data">
                            <a href=${response.infocs[i].href}>
                                <h4 class="title">${response.infocs[i].title}</h4>
                                <img class="ihScale" src=${response.infocs[i].imgsrc} alt="">
                            </a>
                            <div class="price">
                                <span class="disclaimer">${response.infocs[i].price[0].disclaimer}</span>
                                <span class="full-price">¥${price}</span>
                            </div>
                            <a class="more_link_Btn linkBtn" href=${response.infocs[i].dochref}>下载型录</a>
                            <a class="more_link_Btn linkBtn" href=${response.infocs[i].href}>了解更多</a>
                        </div>
                    </li>`
            }
            $('.vcList').html(strHtml);
        }
    })
})();
