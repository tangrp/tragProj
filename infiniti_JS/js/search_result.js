(function () {
    var url = decodeURI(location.search),
        idIndex = url.indexOf("="),
        reg = new RegExp(url.slice(idIndex + 1), "i"),
        data = null,
        starIndex = 0,
        endIndex = 5,
        contArr = [], // 数据集合
        listLen = 0,
        queryflag = true;
    $(".scIpt").attr("placeholder", url.slice(idIndex + 1));
    /** 请求JSON 数据 */
    function loadJson() {
        $.ajax({
            url: "../JSON/search_result.json",
            type: "GET",
            success: function (response) {
                data = response.vcinfocus;
                loadData(data);
            }
        })
    }
    loadJson();

    /** 加载数据 */
    function loadData(data) {
        // 过滤查询结果
        var filArr = data.filter(function (num) {
            return reg.test(num.vcType);
        })
        // 清空既存数据
        $(".moreBtn").remove();
        $(".resultList").html("");
        
        if (filArr.length === 0) {
            $(".noResults").html("<div class='no-results'>很抱歉，没有找到您要的结果。请换其他词试试。</div>");
        } else {
            for (var i in filArr) {
                contArr = contArr.concat(filArr[i].vcifList);
            }
            loadHtml();
        }
    }

    /** 加载页面 */
    function loadHtml() {
        listLen = contArr.length;
        var htmlStr = '';
        endIndex = endIndex > listLen ? listLen : endIndex;
        for (var j = starIndex; j < endIndex; j++) {
            htmlStr += `
                <li>
                    <a class="link" href="${contArr[j].tlhref}">${contArr[j].title}
                        <span class="pitIcon"></span>
                    </a>
                    <span class="text">${contArr[j].text}</span>
                </li>
                `;
        }

        if (queryflag) {
            // 清空既存数据
            $(".noResults").html("");
            $(".resultList").html(htmlStr);
            $(".no-more").remove();
        } else {
            $(".resultList").append(htmlStr);
        }

        // 添加”加载更多“
        if (listLen > 5 && queryflag) {
            if ($(".moreBtn")) {
                $(".moreBtn").remove();
            }
            $(".search_result").append('<span class="moreBtn linkBtn">加载更多</span>');
            moreBtncl();
        }
        // 移除"加载更多"
        if (listLen > 5 && endIndex === listLen) {
            $(".moreBtn").remove();
            $(".search_result").append('<span class="no-more">没有更多数据</span>');
        }
    }

    /** 加载更多 */
    function moreBtncl() {
        queryflag = false;
        $(".moreBtn").on("click", function () {
            // 如果数据加载完
            if (endIndex === listLen) {
                return;
            }
            starIndex = endIndex;
            endIndex += 5;
            loadHtml();
        })
    }

    /** 查询 */
    $(".scBtn").on("click", function () {
        // 初期化值
        data = null;
        starIndex = 0;
        endIndex = 5;
        queryflag = true;
        contArr = [];
        listLen = 0;

        if ($(".scIpt").val()) {
            reg = new RegExp($(".scIpt").val(), "i");
            loadJson();
        } else {
            reg = new RegExp($(".scIpt").attr("placeholder"), "i");
            loadJson();
        }
    })
})();
