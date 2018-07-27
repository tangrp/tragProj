var addEditBtn = getElet(".add_edit_btn"),
    tabHead = getElet(".tabBody"),
    goodsInfos,
    goodsInfArr,
    mask = getElet(".mask");


// 列表加载数据
function LoadData() {
    goodsInfos = localStorage.getItem("goodsInfos");
    if (goodsInfos) {
        goodsInfArr = JSON.parse(goodsInfos);
        var textHtml = '';
        for (var i = 0; i < goodsInfArr.length; i++) {
            textHtml += `
            <tr>
                <td>${i+1}</td>
                <td>${goodsInfArr[i].goodsNum}</td>
                <td>${goodsInfArr[i].goodsName}</td>
                <td>${goodsInfArr[i].goodsType}</td>
                <td>${goodsInfArr[i].goodsStock}</td>
                <td>${goodsInfArr[i].goodsPrice}</td>
                <td>${goodsInfArr[i].goodsDesc}</td>
                <td>${goodsInfArr[i].updateTime}</td>
                <td>
                    <span class="btn editBtn" >编辑</span>
                    <span class="btn delBtn">删除</span>
                </td>
            </tr>
            `
        }

        tabHead.innerHTML = textHtml;

        var delBtns = getElets(".delBtn"),
            editBtns = getElets(".editBtn");
        for (var i = 0; i < delBtns.length; i++) {
            (function (index) {
                /* 删除数据 */
                delBtns[index].onclick = function () {
                    delData(index);
                }
            })(i)
        }

        for (var i = 0; i < delBtns.length; i++) {
            (function (indexedt) {
                /* 编辑数据 */
                editBtns[indexedt].onclick = function () {
                    editData(indexedt);
                }
            })(i)
        }
    }
}

// 添加商品
function addShop() {
    addEditBtn.textContent = "确认添加";
    addEdit();
}

// 确认添加\编辑
function addEdit(indexedt) {
    mask.style.display = 'block';
    var goodsInputs = getElets(".goods_input"),
        goodsIptLen = goodsInputs.length;
    goodsInfos = localStorage.getItem("goodsInfos");
    goodsInfArr = JSON.parse(goodsInfos);

    // 修改
    if (indexedt >= 0) {
        goodsInputs[0].value = goodsInfArr[indexedt].goodsNum;
        goodsInputs[1].value = goodsInfArr[indexedt].goodsName;
        goodsInputs[2].value = goodsInfArr[indexedt].goodsType;
        goodsInputs[3].value = goodsInfArr[indexedt].goodsStock;
        goodsInputs[4].value = goodsInfArr[indexedt].goodsPrice;
        goodsInputs[5].value = goodsInfArr[indexedt].goodsDesc;
    } else {  // 添加
        for (var i in goodsInputs) {
            goodsInputs[i].value = '';
        }
    }
    addEditBtn.onclick = function () {
        goodsInputs = getElets(".goods_input");
        goodsIptLen = goodsInputs.length;
        for (var i = 0; i < goodsIptLen; i++) {
            if (!goodsInputs[i].value) {
                new LHYAlertView({
                    "type": "alert",
                    "title": "温馨提示",
                    "message": "请完善商品信息",
                    "autoClose": 0,
                    "placeholder": "",
                    "cancelTitle": "",
                    "sureTitle": "确定",
                    "cancelCallBack": "",
                    "sureCallBack": ""
                })
                return;
            }
        }
        // 本地存储
        goodsInfArr = [];
        goodsInfos = localStorage.getItem("goodsInfos");
        if (goodsInfos) {
            goodsInfArr = JSON.parse(goodsInfos);
        } else {
            goodsInfArr = [];
        }
        var d = new Date();

        // 修改
        if (indexedt >= 0) {
            goodsInfArr[indexedt] = {
                goodsNum: goodsInputs[0].value,
                goodsName: goodsInputs[1].value,
                goodsType: goodsInputs[2].value,
                goodsStock: goodsInputs[3].value,
                goodsPrice: goodsInputs[4].value,
                goodsDesc: goodsInputs[5].value,
                updateTime: d.toLocaleString(),
            }
        } else { // 添加
            goodsInfArr.push({
                goodsNum: goodsInputs[0].value,
                goodsName: goodsInputs[1].value,
                goodsType: goodsInputs[2].value,
                goodsStock: goodsInputs[3].value,
                goodsPrice: goodsInputs[4].value,
                goodsDesc: goodsInputs[5].value,
                updateTime: d.toLocaleString(),
            })
        }
        localStorage.setItem("goodsInfos", JSON.stringify(goodsInfArr));
        mask.style.display = 'none';
        LoadData();
    }
}




// 删除数据
function delData(index) {
    new LHYAlertView({
        "type": "confirm",
        "title": "温馨提示",
        "message": "您确定要删除该项数据吗？",
        "autoClose": 0,
        "placeholder": "",
        "cancelTitle": "取消",
        "sureTitle": "确定",
        "cancelCallBack": "",
        "sureCallBack": function () {
            goodsInfos = localStorage.getItem("goodsInfos");
            goodsInfArr = JSON.parse(goodsInfos);
            goodsInfArr.splice(index, 1);
            localStorage.setItem("goodsInfos", JSON.stringify(goodsInfArr));
            LoadData();
        }
    })
}

function editData(indexedt) {
    addEditBtn.textContent = "确认编辑";
    addEdit(indexedt);
}

// 关闭窗口
function goodsClose() {
    mask.style.display = 'none';
}