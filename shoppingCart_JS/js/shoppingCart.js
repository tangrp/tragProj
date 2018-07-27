$(function () {

    let newDataL = null;

    /* 加载页面 */
    function loadHtml() {
        let dataList = localStorage.getItem("addGoodsList");
        if (dataList) {
            let strHtml = '',
                allMoney = 0;
            newDataL = JSON.parse(dataList);
            for (var i = 0; i < newDataL.length; i++) {
                strHtml += `
                    <li class="clearFix">
                        <div class="gdsPic fl">
                            <img class="cursimg" src="../img/${newDataL[i].dgdPic}" alt="">
                        </div>
                        <div class="descW fl">
                            <span class="gdsDesc">${newDataL[i].dgdDesc}</span>
                            <strong class="gdsPrice">￥${newDataL[i].dgdPrice}</strong>
                            <div class="gNumWrap">
                                <span class="reduceBtn">-</span>
                                <input type="text" class="gNums" value="${newDataL[i].dgdNum}">
                                <span class="addBtn">+</span>
                            </div>
                        </div>
                        
                        <div class="fr delBtn">删除</div>
                    </li>
                `;
                allMoney += newDataL[i].dgdNum * newDataL[i].dgdPrice;
            }

            // 加载数据到页面
            $(".goodsList").html(strHtml);
            // 总额
            $(".money").text(allMoney.toFixed(2));

            addNum();
            reduceNum();
            delB();
            inputEven();
        }
    }

    loadHtml();

    /* 添加数量 */
    function addNum() {
        $(".addBtn").on("click", function () {
            let oCurNum = $(this).siblings(".gNums"),
                curNum = oCurNum.val();
            curNum++;
            let curIndex = $(this).parent().parent().parent().index();
            let obj = {
                "oCurNum":oCurNum,
                "curNum":curNum,
                "curIndex":curIndex
            }
            updateNum(obj);
        })
    }

    /* 减数量 */
    function reduceNum() {
        $(".reduceBtn").on("click", function () {
            let oCurNum = $(this).siblings(".gNums");
            curNum = oCurNum.val();
            curNum--;
            let curIndex = $(this).parent().parent().parent().index();
            if (curNum === 0) {
                delData(curIndex);
                return;
            }
            let obj = {
                "oCurNum":oCurNum,
                "curNum":curNum,
                "curIndex":curIndex
            }
            updateNum(obj);
        })
    }

    /* 更新localStorage数量 */
    function updateNum(obj) {
        if(obj.oCurNum){
            obj.oCurNum.val(obj.curNum);
        }        
        newDataL[obj.curIndex].dgdNum = obj.curNum;
        localStorage.setItem("addGoodsList", JSON.stringify(newDataL));
        loadHtml();
    }

    /* 删除数据事件 */
    function delData(index) {
        newDataL.splice(index, 1);
        localStorage.setItem("addGoodsList", JSON.stringify(newDataL));
        loadHtml();
    }

    /* 删除按钮 */
    function delB() {
        $(".delBtn").on("click", function () {
            let curIndex = $(this).parent().index();
            delData(curIndex);
        })
    }

   /*  输入框（数量） */
    function inputEven(){
        $(".gNums").on("blur", function () {
            let curNum = $(this).val(),
                curIndex = $(this).parent().parent().parent().index();
            if (curNum < 0  || isNaN(curNum)) {
                $(this).val(1);
                return;
            }
            let obj = {
                "curNum":curNum,
                "curIndex":curIndex
            }
            updateNum(obj);
        })
    }
})