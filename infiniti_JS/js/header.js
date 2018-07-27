 (function () {
    /* 登录状态 */
     onload = function () {
         var loginText = getEl(".loginText"),
             loginName = getEl(".loginName"),
             logincancel = getEl(".logincancel");
         var session = sessionStorage.getItem("LOGINIFOCS") || localStorage.getItem("LOGINIFOCS");
        /* 已登陆 */
         if (session) {
             loginText.style.display = 'none';
             var t = JSON.parse(session);
             loginName.innerText = t[0].Name;
             loginName.style.display = 'inline';
             logincancel.style.display = 'inline';
             /* 注销 */
             logincancel.onclick = function () {
                 new LHYAlertView({
                     "type": "confirm",
                     "title": "温馨提示",
                     "message": "您确定要注销吗？",
                     "autoClose": 0,
                     "placeholder": "",
                     "cancelTitle": "取消",
                     "sureTitle": "确定",
                     "cancelCallBack": "",
                     "sureCallBack": function () {
                         if (sessionStorage.removeItem("LOGINIFOCS")) {
                             sessionStorage.removeItem("LOGINIFOCS");
                         }
                         if (localStorage.removeItem("LOGINIFOCS")) {
                             localStorage.removeItem("LOGINIFOCS");
                         }
                         onload();
                     }
                 })
             }
         } else {
            /* 未登录 */
             loginText.style.display = 'inline';
             loginName.innerText = "";
             loginName.style.display = 'none';
             logincancel.style.display = 'none';
         }
     }

    /* 搜索 */
     $(".searchBtn").on("click", function () {
         $('.serachWrap').toggle();
         $(".sub_menu_list").hide();
     })
     $('.searchIcon').on("click", function () {
         if($(".scText").val()){
             location.href = "../pages/search_result.html?q=" + $(".scText").val();
         }
     })

     /* 显示二级菜单 */
     $(".serverLink").on("click",function(){
        $(".sub_menu_list").toggle();
        $(".serachWrap").hide();
    })
 })();
 