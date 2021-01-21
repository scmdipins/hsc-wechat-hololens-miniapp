// pages/signPhoto/signPhoto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: '',
    photo: true,
    signSite: "贵州医科大学附属医院",
    signTime: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.authModal = this.selectComponent('#authModal');

    var date = new Date();
    var seperator1 = "/";
    var seperator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate +"      "+ hours + seperator2 + minutes;
    this.setData({
      signTime: currentdate,
    })



  },

  hasCameraAuth: function () {
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
  nextStep: function () {
    // wx.request({
    //   method:"POST",
    //   url: 'http://localhost:8080/report/sign',
    //   data: {
    //     ticketId:"01BD5357-2E0C-4A3D-A253-2C48500316A7",
    //     signPic:this.data.path,
    //     signSite:this.data.signSite,
    //     signTime:this.data.signTime
    //   },
    //   header: {'Content-Type': 'application/json'},  // http 请求是 JSON 数据格式
    //   success: function (res) {
    //     console.log("res")
    //     console.log(res)
    //   }

    // })


    wx.navigateTo({
      url: '/pages/upkeep/upkeep',
    })
  },

})