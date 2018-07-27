/***
 * 获取非行内样式
 * @param {string} el 
 * @param {}
 * 
 */
function getStyle(el, attr) {
    // 兼容IE
    if (el.currentStyle) {
        return el.currentStyle[attr];
    } else {
        return getComputedStyle(el, null)[attr];
    }
}

/**
 * 随机验证码
 * @param {string} len 生成几位随机码
 */
function ramdomCode(len) {
    var arr = []
    for (var i = 0; i < 10; i++) {
        arr.push(i);
    }
    // 大写ascii(65-90)、小写ascii(97-122)
    for (var j = 65; j < 123; j++) {
        if (j > 90 && j < 97) {
            continue;
        } else {
            arr.push(String.fromCharCode(j));
        }
    }
    var t = '';
    for (var i = 0; i < len; i++) {
        t += arr[Math.floor(Math.random() * arr.length)];
    }
    return t;
}

/**
 * 功能：获取元素集
 * @param {*} Sel 
 * @param {*} isAll 
 */
function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
}
