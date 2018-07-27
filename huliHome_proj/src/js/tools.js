import example_0 from '../images/nav-img/example_0.jpg';

exports.loadgdsHtml = function(){
    let str = '';
    $.ajax({
        url: "../json/data.json",
        port: "GET",
        dataType: "json",
        success: function (response) {
            loadHtmlCom(response.ifocs);
        },
        
    })
    function loadHtmlCom(data){
        $(data).each(function(index,ele){
            str += `
                <div class="goodsList">
                    <div class="goodsImg">
                        <img src="${example_0}" alt="" />
                    </div>
                    <div class="goodsBaseInfo">
                        <span class="goodsName">商品名称</span>
                            ${(()=>{
                                let tempStr =  '';
                                if(ele.oPrice!=0){
                                    tempStr = `
                                    <span>
                                        <span class="oldPrice">￥${ele.oPrice}</span>
                                        <span style="position: relative;">
                                            <span class="newPrice">￥${ele.cPrice}</span>
                                            <span class="slash_2"></span>
                                        </span>
                                    </span>`
                                }else{
                                    tempStr= `
                                    <span>
                                        <span class="oldPrice">￥${ele.cPrice}</span>
                                        <span></span>
                                    </span>`
                                }
                                return tempStr;
                            })()}
                        
                    </div>
                    <a href="javascrip:void(0);" class="link"></a>
                </div>
            `;
        })
        $(".goodsChoose").html(str);
        let baseUrl = "http://localhost:8080/dist/";
        $(".link").attr("href",baseUrl+"static/pages/goodsDetails.html");
        
    }
}
