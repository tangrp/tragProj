/**
 * 功能：    获取元素
 * @param   {string}    slct 选择器
 * @return  {object}返回匹配该选择器的元素节点
 */
function getElet(slct) {
    return document.querySelector(slct);
}

/**
 * 功能：    获取元素集
 * @param   {string}    slct 选择器
 * @return  {object}返回匹配该选择器的集元素节点
 */
function getElets(slct) {
    return document.querySelectorAll(slct);
}


/**
 * 功能：    回到网页顶部（帧动画）
 * @param   {string}    slct 选择器
 * @param   {int}       duration 持续时间
 * @param   {int}       interval 每一帧持续时间
 */
function goTop(slct,duration,interval) {
    var goBtn = getElet(slct),
        offset = 0;
    window.onscroll = function () {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
    }
    goBtn.onclick = function () {
        var duration = duration,
            interval = interval,
            frames = duration / interval, // 帧数
            speed = Math.ceil(offset / frames); // 每一幀位移的距離
        var t = setInterval(function () {
            if (offset > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            } else {
                clearInterval(t);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        }, interval)
    }
}

/**
 * 功能： 事件添加
 * @param element   事件对象
 * @param type      事件类型
 * @param callBack  回调函数
 */
function addEvent(element,type,callBack){
    if(element.attachEvent){
        element.attachEvent('on' + type, callBack);
    }else{
        element.addEventListener(type, callBack, false);
    }
}