(function () {
    var linkCss = document.querySelector('.linkCss');
    if (/Mobile/i.test(navigator.userAgent)) {
        var baiduLogo = document.querySelector('.baiduLogo');
        baiduLogo.setAttribute('src', './imgs/plus_logo.png')
        if (/iphone/i.test(navigator.userAgent)) {
            linkCss.setAttribute('href', './css/baidu_phone.css')
        } else {
            linkCss.setAttribute('href', './css/baidu_phone.css')
        }
    } else {
        linkCss.setAttribute('href', './css/baidu.css')
    }


})()