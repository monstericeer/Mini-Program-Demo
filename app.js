//app.js
App({
  onLaunch: function () {},
  //调用登录接口获取用户信息
  getUserInfo:function(){
    let that = this
    return new Promise(function (resolve, reject) {
      wx.login({
        success: function (e) {
          that.globalData.code = e.code;
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              resolve();
            },
            fail: function () {
              reject();
            }
          })
          
        },
        fail: function (e) {
          wx.showToast({
            title: '网络错误',
            icon: 'none',
            duration: 2000,
            mask: true
          })
          reject('error');
        }
      })
    })
  },
  globalData:{
    userInfo: null,
    code: '',
    baseUrl: 'http://192.168.1.102:8013/'
  }
})