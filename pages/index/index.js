//index.js
var app = getApp()
Page({
  data: {
    userInfo: {
      avatar: '',
      name: ''
    },
    getUserInfoDialog: false
  },
  //事件处理函数
  onLoad: function () {},
  onShow: function () {
    if (!app.globalData.userInfo) {
      this.getAppLogin(0)
    }
  },
  // 用户登录接口
  getAppLogin: function () {
    const that = this;
    app.getUserInfo().then(() => {
      that.checkUserInfo()
    }).catch(() => {
      that.setData({
        userInfo: {
          name: '用户尚未登录'
        },
        getUserInfoDialog: true
      })
    })
  },
  onClose: function () {
    this.setData({
      getUserInfoDialog: false
    })
  },
  // 点击授权用户信息
  getUserInfo: function (e) {
    if (e.detail.iv && e.detail.encryptedData) {
      const { userInfo } = e.detail
      app.globalData.userInfo = userInfo
      this.checkUserInfo()
    }
  },
  checkUserInfo: function() {
    let that = this
    if (app.globalData.userInfo) {
      const { avatarUrl = '', nickName = '' } = app.globalData.userInfo
      that.setData({
        userInfo: {
          avatar: avatarUrl,
          name: nickName
        }
      })
    } else {
      that.setData({
        userInfo: {
          name: '用户尚未登录'
        },
        getUserInfoDialog: true
      })
    }
  }
})
