Page({

  /**
   * Page initial data
   */
  data: {
    index: 0,
    picList: [],
    singlePic:null,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (options.index) {
      this.data.index = options.index
    }
    if (options.picList) {
      var picList = JSON.parse(decodeURIComponent(options.picList))
      this.data.picList = picList
    }
  },

  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          photoUrl: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },

  shootAgain: function () {
    this.setData({
      photoUrl: ''
    })
  },

  confirm: function () {
    let pages = getCurrentPages()
    let prevPage = pages[pages.length - 2]
    var route = prevPage.route
    if (route == 'pages/checklist/checklist') {
      debugger
      var picList = this.data.picList
      picList[this.data.index].path = this.data.photoUrl
      prevPage.setData({
        picList: picList
      })
    }
    if (route == 'pages/signPhoto/signPhoto'){
      prevPage.setData({
        path: this.data.photoUrl,
        photo:false,
      })
    }
      wx.navigateBack({
        delta: 1
      })
  }

})