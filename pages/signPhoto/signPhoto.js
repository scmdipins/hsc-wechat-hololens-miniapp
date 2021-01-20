// pages/signPhoto/signPhoto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: '',
    photo:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.authModal = this.selectComponent('#authModal');
  },
  
  hasCameraAuth: function() {
    var that = this
    var isFirstAuth = wx.getStorageSync('isCameraFirstAuth') || 0
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.camera']) {
          // request auth
          wx.authorize({
            scope: 'scope.camera',
            success: function () {
              wx.navigateTo({
                url: '../camera/camera'
              })
            },
            fail: function (e) {
              console.log(e)
              if (isFirstAuth === 0) {
                wx.setStorageSync('isCameraFirstAuth', 1)
              } else {
                that.setData({
                  authText: '无法使用相机，需要打开权限哦'
                })
                that.authModal.showAuthModal()
              }
            }
          })
        } else {
          wx.navigateTo({
            url: '../camera/camera'
          })
        }
      },
      fail: function (e) {
        console.log(e)
      }
    })
  },
  nextStep: function(){
    wx.navigateTo({
      url: '/pages/upkeep/upkeep',
    })
  }

})