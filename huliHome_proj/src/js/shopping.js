require("../less/shopping.less");
require("header-LESS");
require("footer-LESS");
require("normalized-LESS");
require("common-LESS");
require("../js/header.js");


$(function () {
    let shopGoods = sessionStorage.getItem("shopGoods");
    if (shopGoods) {
        let goodsList = JSON.parse(shopGoods);
        let str = ``;
       $(goodsList).each(function(index,ele){
            str += `
            <li class="clearFix">
                <div class="iptcheckbox rowList">
                    <input type="checkbox" name="" class="sCheckbox" id="checkbox${index}">
                    <label for="checkbox${index}" class="iptcLabel"></label>
                </div>
                <div class="gdIfos rowList">
                    <div class="ifos">
                        <img src="${ele.gdsImgH}" alt="">
                        <a href="javascrip:void(0);">${ele.gdsName}</a>
                    </div>
                    <div class="ifos">
                        <span>产品尺寸</span>
                        <span>产品素材</span>
                        <span>产品颜色</span>
                    </div>
                </div>
                <div class="price rowList">
                    <strong class="gdsPrice">￥${ele.gdsMoney}</strong>
                </div>
                <div class="gNumWrap rowList">
                    <span class="reduceBtn">-</span>
                    <input type="number" class="gNums" value="${ele.gdsNums}">
                    <span class="addBtn">+</span>
                </div>
                <div class="sPrice rowList">￥${ele.gdsMoney * ele.gdsNums}</div>
                <div class="opera rowList">
                    <span class="delBtn">删除</span>
                </div>
            </li>`
       })
       $(".goodsList").append(str);
    }
    addNum();
    reduceNum();
    /* 添加数量 */
    function addNum() {
        $(".addBtn").on("click", function (e) {
            let oCurNum = $(this).siblings(".gNums"),
                curNum = oCurNum.val(),
                target = e.currentTarget;
            curNum++;
            oCurNum.val(curNum);
            let sprice = ($(target).parent().prev().text().trim().slice(1)) * curNum
            $(target).parent().next().text("￥" + sprice);
            totalF();
        })
    }

    /* 减数量 */
    function reduceNum() {
        $(".reduceBtn").click(function (e) {
            let oCurNum = $(this).siblings(".gNums"),
                curNum = oCurNum.val(),
                target = e.currentTarget;
            if (curNum > 1) {
                --curNum
            } else {
                alert("数量不能小于一件！")
                curNum = 1;
            }

            oCurNum.val(curNum);
            let sprice = ($(target).parent().prev().text().trim().slice(1)) * curNum
            $(target).parent().next().text("￥" + sprice)
            totalF();
        })
    }

    slt();
    /* 选中 */
    function slt() {
        $(".sCheckbox").click(function (e) {
            if ($(this).prop("checked")) {
                $(this).next().css({
                    "backgroundPosition": "-412px -100px"
                })
            } else {
                $(this).next().css({
                    "backgroundPosition": "-412px -46px"
                })
            }

            totalF();
            // 判断选中  改变所有选择
            let sled = 0;
            $(".sCheckbox").each(function (index, ele) {
                if ($(ele).prop("checked")) {
                    ++sled;
                }
            })
            if (sled === 0) {
                $(".aCheckbox").prop("indeterminate", false);
                $(".aCheckbox").prop("checked", false);
                $(".iptcLabelA").css({
                    "backgroundPosition": "-412px -46px"
                });
            } else if (sled < $(".iptcLabel").length) {
                $(".aCheckbox").prop("indeterminate", true);
                $(".iptcLabelA").css({
                    "backgroundPosition": "-412px -73px"
                });
            } else {
                $(".aCheckbox").prop("indeterminate", false);
                $(".aCheckbox").prop("checked", true);
                $(".iptcLabelA").css({
                    "backgroundPosition": "-412px -100px"
                });
            }
            $(".selted strong").text(sled);
        })

        $(".aCheckbox").click(function () {
            if ($(this).prop("checked")) {
                $('input[type="checkbox"]').prop("checked", true);
                $(".iptcLabelA").css({
                    "backgroundPosition": "-412px -100px"
                });
                $(".iptcLabel").css({
                    "backgroundPosition": "-412px -100px"
                });
            } else {
                $('input[type="checkbox"]').prop("checked", false);
                $(".iptcLabelA").css({
                    "backgroundPosition": "-412px -46px"
                })
                $(".iptcLabel").css({
                    "backgroundPosition": "-412px -46px"
                })
            }
            totalF();
            let sled = 0;
            $(".sCheckbox").each(function (index, ele) {
                if ($(ele).prop("checked")) {
                    ++sled;
                }
            })
            $(".selted strong").text(sled);
        })
    }


    $(".delBtn").click(function (e) {
        let cf = confirm("您确认要删除吗？")
        if (cf) {
            $(e.currentTarget).parents("li").remove();
        }
    })

    /* 金额 */
    function totalF() {
        let total = 0;
        $(".sCheckbox").each(function (index, ele) {
            if ($(ele).prop("checked")) {
                total += parseFloat($(ele).parent().siblings(".sPrice").text().slice(1));
            }
        })
        $(".money").text("￥：" + total);
    }

})