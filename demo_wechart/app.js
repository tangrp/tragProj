//app.js
App({
  onLaunch: function () {
   console.log('onLaunch 程序加载完毕')
  },
  onShow(){
    console.log('onShow 程序进入前台')
  },
  onHide(){
    console.log('onHide 程序进入后台')
  },
  globalData: {
    userInfo: null
  }
})