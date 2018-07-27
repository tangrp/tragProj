  
(function(){
    var addShipBtn  = getElet(".addShipBtn"),
    goods_close = getElet(".goods_close");

    // 初期加载
    onload = LoadData;

    /* 添加商品 */
    addEvent(addShipBtn,'click',addShop);

    /* 关闭商品添加商品 */
    addEvent(goods_close,'click',goodsClose);


    

})()