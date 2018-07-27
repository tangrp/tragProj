$(function () {
    /* 轮播图 */
    let imgLen = $(".flashImg img").length,
        i = 0;
    setInterval(function () {
        i === imgLen - 1 ? i = 0 : i++;
        $(".flashImg img").eq(i).css("opacity", "1");
        $(".flashImg img").not($(".flashImg img").eq(i)).css("opacity", "0");
    }, 4000);

    /* 热卖商品  */
    let strHtml = '';
    home_goods_datas.forEach(element => {
        strHtml += `
            <li>
                <div class="imgwp"> <img src="./img/${element.goodsImg}" alt=""></div>
                <span class="desc">${element.goodsName}</span>
                <span class="price">${element.goodsPrice}</span>
                <a class="hoverLink" href="javascript:;"> </a>
            </li>
        `
    });
    $(".goodsList ul").html(strHtml);

    /* 最热资讯  */
    let strHtmlNew = ``;
    home_hotnews_datas.forEach(element => {
        strHtmlNew += `
        <div class="newsdesc clearFix">
            <img class="art-img" src="./img/${element.imgName}" alt="">
            <div class="arc-infocs">
                <h3 class="title">${element.title}</h3>
                <span class="time">${element.date}</span>
                <p>
                    ${element.des}
                </p>
            </div>
        </div>
        `;
    });
    $(".articlew").html(strHtmlNew);

    /* 回到顶部 */
    $(".gotop").click(function () {
        let scTop = $(window).scrollTop();
        let timer = null;
        let interval = 15,
            duration = 1000,
            frames = duration / interval,
            speed = Math.ceil(scTop / frames);
        $(window).scroll(function () {
            scTop = $(window).scrollTop();
        })
        timer = setInterval(() => {
            if (scTop > 0) {
                $(window).scrollTop(scTop - speed);
            } else {
                scTop = 0;
                clearInterval(timer);
            }
        }, interval);
    })

    /* 动画效果 */
    $(window).scroll(function () {
        let $scrollTop = $(window).scrollTop();
        let $screW= $(window).height();
        $(".lydesc").each((idx,ele)=>{
            let $lydesc = $(ele).offset().top;
            if($scrollTop > ($lydesc-$screW) && $scrollTop < $lydesc){
                $(ele).css({"animation-play-state":"running"});
            }
        })
       
        $(".head").each((idx,ele)=>{
            let $eleT = $(ele).offset().top;
            if($scrollTop > ($eleT-$screW) && $scrollTop < $eleT){
                $(ele).css({"animation-play-state":"running"});
            }
        })
    })

});