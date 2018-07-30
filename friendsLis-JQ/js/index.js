$(function () {
    /* 数据加载 */
    function bingEven() {
        if (sessionStorage["gdsIfocsList"]) {
            loadHtml(JSON.parse(sessionStorage["gdsIfocsList"]));
        } else {
            $.ajax({
                url: "./JSON/data.json",
                post: "get",
                dataType: "json",
                success: (function (response) {
                    loadHtml(response.friendsIfoc);
                })
            });
        }
    }

    bingEven();
    /* 加载页面 */
    function loadHtml(data) {
        let dataLen = data.length;
        if (dataLen > 0) {
            sessionStorage["gdsIfocsList"] = JSON.stringify(data);
            let strHtmlH = '',
                strHtml = '',
                strHtmlAll = '';
            data.forEach((element) => {
                let groupName = element.groupName,
                    onlinePs = 0; // 在线人数
                if (element.listIfoc.length > 0) {
                    element.listIfoc.forEach((ele) => {
                        strHtml += `
                            <li class="clearFix">
                            ${(function(){
                                let tStr = '';
                                if(ele.online===1){
                                    onlinePs++;
                                    tStr=`
                                        <div class="frds-img fl"><img  src="${ele.frdsImgUrl}" alt="loding error"></div>
                                        <div class="infoc-desc fl">
                                            <span class="frds-name">${ele.frdsName}</span>
                                            <span class="frds-desc" contenteditable="false">${ele.frdsDesc}</span>
                                        </div>
                                    `
                                }else{
                                    tStr=`
                                    <div class="frds-img fl"><img class="notonline"  src="${ele.frdsImgUrl}" alt="loding error"></div>
                                        <div class="infoc-desc fl">
                                            <span class="frds-name">${ele.frdsName}</span>
                                            <span class="frds-desc" contenteditable="false"><span>[离线请留言]&nbsp;</span>${ele.frdsDesc}</span>
                                        </div>

                                    `    
                                }
                                return tStr;
                            })()}
                            </li>                       
                        `
                    })
                }

                strHtmlH = `
                    <div class="group-header">
                        <span class="slide-icon"></span>
                        <span class="groupName">${element.groupName}</span>
                        <span class="count">
                            <span class="online-person">${onlinePs}</span>/<span class="count-person">${element.listIfoc.length}</span>
                        </span>
                    </div>
                `
                strHtmlAll += ` <li>${strHtmlH}<ul class="friends-list">${strHtml}</ul></li>`;
                strHtml = '';
                strHtmlH = '';

            })
            $(".group-list").html(strHtmlAll)
        }
        slide();
        addGroup();
    }
    /* 下拉显示/隐藏 */
    function slide() {
        $(".group-header").click((e) => {
            let $target = e.currentTarget;
            let $targetImg = $($target).children(".slide-icon");
            if (/arrow01.png/g.test($targetImg.css("backgroundImage"))) {
                $targetImg.css({
                    "background": "url('./img/arrow02.png')"
                });
            } else {
                $targetImg.css({
                    "background": "url('./img/arrow01.png')"
                });
            }
            $($target).next().slideToggle(200);
        })
    }
    /* 添加分组 */
    function addGroup() {
        $(".addGroupBtn").click(function () {
            $(".group-list").append(`<li>
                <div class="group-header">
                    <span class="slide-icon"></span>
                    <span class="groupName">未命名</span>
                    <span class="count">
                        <span class="online-person">0</span>/<span class="count-person">0</span>
                    </span>
                </div>
            </li>`);
            $(".groupName").last().prop("contenteditable", "true").focus();
            editGroup();
        })
    }
    /* 编辑组名 */
    function editGroup() {
        $(".groupName").last().blur(function () {
            if (sessionStorage["gdsIfocsList"]) {
                let siData = JSON.parse(sessionStorage["gdsIfocsList"]);
                let curText = $(this).text();
                siData.push({
                    "groupName": curText,
                    "listIfoc": ""
                });
                sessionStorage["gdsIfocsList"] = JSON.stringify(siData);
               $(this).prop("contenteditable", "false");
            }
            bingEven();
        });
    }
});