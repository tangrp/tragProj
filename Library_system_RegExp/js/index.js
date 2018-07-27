(function(){
    var indexCss = document.querySelector('.indexCss');
    if(/Mobile/i.test(navigator.userAgent)){
        indexCss.setAttribute('href','./css/index_phone.css');
    }else {
        indexCss.setAttribute('href','./css/index.css');
    }
})()



var bookInfoL = bookInfo.length;
    var tableContent = document.querySelector(".tableContent"),
        serachIpt = document.getElementById('serach'),
        countT = document.getElementById('count'),
        iconSearce = document.querySelector('.iconSearce'),
        textHtml = '',
        count = 0,
        checkedC = 0;
    var reg;
    onload = function(){
        reg = new RegExp('','gi');
        Search(reg);
    }
    function Search(strSearch){
        textHtml = '';
        count = 0;
        for(var i = 0; i < bookInfoL; i++){
            if(strSearch.test(bookInfo[i].name) || strSearch.test(bookInfo[i].author)){
                count ++;
                textHtml += `
                    <tr>
                    <td><div><input type="checkbox" class = "checkBox" onclick="checkBoxCount(this)"></div></td>
                    <td><div>${bookInfo[i].name}</div></td>
                    <td><div class="desc">${bookInfo[i].describe}</div></td>
                    <td><div>${bookInfo[i].author}</div></td>
                    </tr>
            `;
            }
        }
        tableContent.innerHTML = textHtml;
        checkedC = 0;
        countT.textContent = '共有：' +count + ' 本,  选中 '+ checkedC;
    }

    iconSearce.onclick = function(){
        if(serachIpt.value){
            reg = new RegExp(serachIpt.value,'gi');
            Search(reg);
            checkedC = 0;
        }
    }

    function checkBoxCount(sle){
        if(sle.checked){
            checkedC++;
        }else{
            checkedC--;
        }
        countT.textContent = '共有：' +count + ' 本,  选中 '+ checkedC;
    };



