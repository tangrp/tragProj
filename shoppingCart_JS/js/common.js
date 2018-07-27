/* 存储数据 */
function addJson(data,Num) {
    var addGoodsList = localStorage.getItem("addGoodsList"),
        dataSession = addGoodsList ? JSON.parse(addGoodsList) : [];
    var addIfoc = {
        gdModel: "",
        gdDesc: "",
        gdPrice: "",
        gdPic: "",
        data: dataSession,
        allMoney: ""
    }

    addIfoc.gdDesc = data.goodsDesc;
    addIfoc.gdModel = data.SgModel;
    addIfoc.gdPrice = data.gdsPrice;
    addIfoc.gdPic = data.gdsImgSrc;
    let dataC = addIfoc.data;

    for (var i = 0, len = dataC.length; i < len; i++) {
        if (dataC[i].dgdModel == addIfoc.gdModel) {
            if(parseInt(Num) || parseInt(Num)===0){
                dataC[i].dgdNum = parseInt(dataC[i].dgdNum) + parseInt(Num);
            }else{
                dataC[i].dgdNum++;
            } 
            localStorage.setItem("addGoodsList", JSON.stringify(dataC));
            location.href = "../pages/shoppingCart.html";
            return;
        }
    }
    dataC.push({
        dgdDesc: addIfoc.gdDesc,
        dgdPrice: addIfoc.gdPrice,
        dgdPic: addIfoc.gdPic,
        dgdModel: addIfoc.gdModel,
        dgdNum: (function(){
            if(parseInt(Num) || parseInt(Num)===0){
                return parseInt(Num);
            }else{
                return 1;
            }
        })()
    });
    localStorage.setItem("addGoodsList", JSON.stringify(dataC));
    location.href = "../pages/shoppingCart.html";
}

/* 加载页面 */
function loadHtmlCom(obj) {
    switch (obj.page) {
        case "goodsDesc":
            {
                $(".imgWrap").html(`
                    <div class="small-box">
                        <div class="glass"></div>
                        <img class="cursimg" src="../img/${obj.data.gdsIfocDesPic[0].smallImg[0]}" alt="">
                        <div class="big-box">
                            <img class="curbimg" src="../img/${obj.data.gdsIfocDesPic[1].bigImg[0]}" alt="">
                        </div>
                    </div>
                    <ul class="imgList clearFix">
                        ${
                            (function(){
                                var strHtml = '';
                                obj.data.gdsIfocDesPic[0].smallImg.forEach(function(ele,index){
                                    strHtml+=`
                                    <li>
                                        <img data-bigimg="../img/${obj.data.gdsIfocDesPic[1].bigImg[index]}" src="../img/${ele}" alt="">
                                    </li>`
                                })
                                return strHtml;
                            })()
                        }
                    </ul>`);
                $(".goddsIfocs").html(`
                    <div class="goodsDes">
                        ${obj.data.goodsDesc}
                    </div>
                    <div class="price">
                        <strong>￥${obj.data.gdsPrice}</strong>
                    </div>
                    <div class="gNumWrap">
                        <span class="reduceBtn">-</span>
                        <input type="text" pattern=[0-9] class="gNums" value="1">
                        <span class="addBtn">+</span>
                    </div>
                    <div class="addToCBtn">加入购物车</div>
                    <div class="gotoCartBtn">查看购物车</div>
                `);
                addtoCart($(".addToCBtn"),obj.data);
                gotoCart($(".gotoCartBtn"));
                
                
            }
            break;
        case "goodsList":
            {
                let strHtml = '';
                obj.data.forEach((element, index) => {
                    strHtml += `
                        <li>
                            <div class="imgWp">
                                <a href="./pages/goodsDesc.html?model=${element.SgModel}&index=${index}" title=${element.gdsTitle}>
                                    <img src="./img/${element.gdsImgSrc}" >
                                </a>
                            </div>
                            <div class="priceWp">
                                ￥<strong>${element.gdsPrice}</strong>
                            </div>
                            <div class="goodsDescWp">
                                <a href="./pages/goodsDesc.html?model=${element.SgModel}&index=${index}" title=${element.gdsTitle}>
                                ${element.goodsDesc}
                                </a>
                            </div>
                            <div class="addToCBtn" data-index="${index}">加入购物车</div>
                            <div class="gotoCartBtn">查看购物车</div>
                        </li>
                    `
                });
                $(".goodsList").html(strHtml);
                addtoCart($(".addToCBtn"),obj.data);
                gotoCart($(".gotoCartBtn"));
            }
            break;
    }

    /* 加入购物车 */
    function addtoCart($ele,data) {
        $ele.on("click", function () {
            var curgdsIndex = $(this).attr("data-index");
            if(curgdsIndex){
                addJson(data[curgdsIndex]);
            }else{
                let curNum = $(".gNums").val();
                addJson(data,curNum);
                $(".gNums").val(1);
            }
        })
    }

    function gotoCart($ele) {
        $ele.on("click", function () {
            location.href = "../pages/shoppingCart.html";

        })
    }
}