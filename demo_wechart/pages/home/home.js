// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newslist:[]
  },
  request(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    // 数据加载
    wx,wx.request({
      url:'https://route.showapi.com/181-1',
      data:{
        'showapi_appid':'66527',
        'showapi_sign':'4d96ef2bbc4f459c8ff708ce0c264036',
        'num':20
      },
      header:{},
      method:"GET",
      dataType:'json',
      success:function(res){
        _this.setData({
          newslist: res.data.showapi_res_body.newslist
        })
        console.log(_this.data.newslist)
        // res.data.showapi_res_body.newslist
        // wx.setStorage({
        //   key: 'newslist',
        //   data: res.data.showapi_res_body.newslist,
        // })
      }
    })

    // 2. 判断网络状态
    wx.getNetworkType({
      success: function(res) {
        console.log('当前网络状态'+res.networkType)
        if (res.networkType =='none'){
          // 无网络状态 -> 从本地获取数据
        }else{
          // 直接进行数据请求
        }
      },
    })

/*     wx.makePhoneCall({
      phoneNumber: '15680739561' //仅为示例，并非真实的电话号码
    }) */

  },

  
})