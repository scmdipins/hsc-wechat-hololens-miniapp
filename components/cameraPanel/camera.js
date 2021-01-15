// components/cameraView/camera.js
Component({
  /**
   * Component properties
   */
  properties: {
    picture: {
      type: Object
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {

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
                that.takePhoto()
              },
              fail: function (e) {
                console.log(e)
                if (isFirstAuth === 0) {
                  wx.setStorageSync('isCameraFirstAuth', 1)
                } else {
                  that.triggerEvent('auth', '无法使用相机，需要打开权限哦')
                }
              }
            })
          } else {
            that.takePhoto()
          }
        },
        fail: function (e) {
          console.log(e)
        }
      })
    },

    takePhoto: function() {
      var that = this
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          var picture = that.data.picture
          picture.path = res.tempImagePath
          that.setData({
            picture: picture
          })
        },
        fail: (e) => {
          console.log(e.detail)
        }
      })
    },

    deletePic: function() {
      var picture = this.data.picture
      picture.path = ''
      this.setData({
        picture: picture
      })
      this.triggerEvent('pic', picture)
    }
  }
})
