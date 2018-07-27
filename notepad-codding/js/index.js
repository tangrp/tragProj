var noteData = localStorage.getItem('noteData'),
    noteArr = JSON.parse(noteData);

function loadData() {
    var data_ul = document.querySelector('.data_ul');
    noteData = localStorage.getItem('noteData');
    noteArr = JSON.parse(noteData);
    if (noteArr) {
        var textHtml = '';
        for (var i = 0; i < noteArr.length; i++) {
            textHtml += `
            <li class="data_list clearFix">
                <i class="sltIcon">√</i>
                <div class="list_desc">
                    <div class="artcContent">${noteArr[i].crtData}</div>
                    <div class="craTime">${noteArr[i].crtTime}</div>
                </div>
            </li>`
        }
        data_ul.innerHTML = textHtml;
    }
}

loadData();


var edtBtn = document.querySelector('.edtBtn'),
    cancelBtn = document.querySelector('.cancelBtn'),
    sltd = document.querySelector('.sltd'),
    data_list = document.querySelectorAll('.data_list'),
    data_len = data_list.length,
    sltIcon = document.querySelectorAll('.sltIcon'),
    list_desc = document.querySelectorAll('.list_desc'),
    addBtn = document.getElementById('addBtn'),
    delBtn = document.getElementById('delBtn'),
    datacount = document.querySelector('.datacount');

/* 添加数据 */
function editBtnfun() {
    data_list = document.querySelectorAll('.data_list'),
        data_len = data_list.length,
        sltIcon = document.querySelectorAll('.sltIcon'),
        list_desc = document.querySelectorAll('.list_desc');

    // 编辑按钮非活性
    if (data_len === 0) {
        edtBtn.style.color = '#d3d3d3';
    } else {
        edtBtn.style.color = '#E9B114';
    }

    // 编辑按钮
    edtBtn.onclick = function () {
        modifyData = null;
        // 初期加载时，如果数据存在，执行点击事件   但如果删除数据后，数据不存在 ，点击事件不执行 但是保存了初期加载的数据
        if (data_len !== 0) {
            edtBtn.style.color = '#E9B114';
            edtBtn.style = 'display: none';
            addBtn.style = 'display: none';
            cancelBtn.style = 'display: block';
            delBtn.style = 'display: block';
            sltd.textContent = '已选中0项';
            // 显示选择按钮
            for (var i = 0; i < data_len; i++) {
                sltIcon[i].style = 'display: block';
                list_desc[i].style = 'margin-left: 18px;'
            }
        }
    }

}

editBtnfun();


// 返回备忘录
var backNote = document.querySelector('.backNote');
backNote.onclick = function () {
    editWrap.style.left = '100%';
}

// 保存数据（添加数据）
var save = document.querySelector('.save');
save.onclick = function () {
    addText = document.querySelector('.addText');
    var addTexV = addText.value,
        addTextLen = addTexV.length,
        arrNote = [];

    if (addTextLen !== 0) {
        noteData = localStorage.getItem('noteData');
        if (noteData) {
            arrNote = JSON.parse(noteData);
        }
        var curDate = new Date;
        arrNote.push({
            crtData: addTexV,
            crtTime: curDate.toLocaleString()
        })
        localStorage.setItem('noteData', JSON.stringify(arrNote));

        editWrap.style.left = '100%';
    }

    loadData();
    editBtnfun();
    bindEven();
    dataCount();
    modifyData();
}




// 取消按钮
cancelBtn.onclick = function () {
    hideSltd(data_len, sltIcon, list_desc);
}


/**
 * 功能：隐藏选择按钮
 * @param1: 数据的总和
 * @param2: 选择按钮
 * @param3: 数据内容
 */
// 
function hideSltd(len, icon, desc) {
    cancelBtn.style = 'display: none';
    delBtn.style = 'display: none';
    for (var i = 0; i < len; i++) {
        icon[i].style = 'display: none';
        icon[i].className = 'sltIcon';
        desc[i].style = 'margin-left: 0px;'
    }
    edtBtn.style = 'display: block';
    addBtn.style = 'display: block';
    sltd.textContent = '备忘录';
}


// 数据统计
function dataCount() {
    data_list = document.querySelectorAll('.data_list'),
        data_len = data_list.length;
    if (data_len > 0) {
        datacount.textContent = data_len + '个备忘录'
    } else {
        datacount.textContent = '无备忘录'
    }
}
dataCount();



// 编辑页面
var editWrap = document.querySelector('.editWrap'),
    addText = document.querySelector('.addText');
addBtn.onclick = function () {
    addText.value = '';
    editWrap.style.left = '0';
}


// 选择数量
var sltFlag = 0,
    arrIndex = [];
// 选择
function bindEven() {
    for (var i = 0; i < data_len; i++) {
        (function (index) {
            sltIcon[index].onclick = function () {
                noteData = localStorage.getItem('noteData');
                noteArr = JSON.parse(noteData);
                if (this.className === 'checd') {
                    this.style.background = '#fff';
                    this.style.border = '1px solid #d3d3d3';
                    this.className = 'sltIcon'
                    sltFlag--;
                    var cuIndex = arrIndex.indexOf(index)
                    arrIndex.splice(cuIndex, 1);
                } else {
                    this.style.background = '#e9b114';
                    this.style.border = '1px solid #e9b114';
                    this.className = 'checd';
                    sltFlag++;
                    arrIndex.push(index);
                }
                sltd.textContent = '已选中' + sltFlag + '项';
                console.log(arrIndex);
            }
        })(i);

    }
}
bindEven();



// 删除选择项及对应数据（删除数据）
delBtn.onclick = function () {
    var checd = document.querySelectorAll('.checd');
    noteData = localStorage.getItem('noteData');
    noteArr = JSON.parse(noteData);

    if (checd.length !== 0) {
        for (var i = 0, len = checd.length; i < len; i++) {
            checd[i].parentElement.parentNode.removeChild(checd[i].parentElement);
            noteArr.splice(arrIndex[i]);
        }
        localStorage.setItem('noteData', JSON.stringify(noteArr));


        // 加载当前数据
        data_list = document.querySelectorAll('.data_list');
        data_len = data_list.length;
        sltIcon = document.querySelectorAll('.sltIcon');
        list_desc = document.querySelectorAll('.list_desc');

        hideSltd(data_len, sltIcon, list_desc);
        editBtnfun();
        dataCount();
        modifyData();
    }

}




// 修改数据
function modifyData() {
    var artcContent = document.querySelectorAll('.artcContent');
    data_list = document.querySelectorAll('.data_list');
    data_len = data_list.length;
    addText = document.querySelector('.addText');

    for (var i = 0; i < data_len; i++)
        (function (index) {
            data_list[index].onclick = function () {
                addText.value = artcContent[index].textContent;
                editWrap.style.left = '0';
            }
        })(i)
}
modifyData();