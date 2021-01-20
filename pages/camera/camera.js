Page({

  /**
   * Page initial data
   */
  data: {
    eventDetail: {},
    actionList: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (options.eventDetail) {
      this.data.eventDetail = JSON.parse(decodeURIComponent(options.eventDetail))
    }
    if (options.actionList) {
      this.data.actionList = JSON.parse(decodeURIComponent(options.actionList))
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
      this.updateCheckList()
      prevPage.setData({
        actionList: this.data.actionList
      })
    }
    wx.navigateBack({
      delta: 1
    })
  },

  updateCheckList() {
    var action = this.updateAction()
    var actionList = this.data.actionList
    actionList.forEach((item, index) => {
      if (action.id == item.id) {
        actionList[index] = action
      }
    })
    this.setData({
      actionList: actionList
    })
  },

  updateAction() {
    var eventDetail = this.data.eventDetail
    var action = eventDetail.action
    var picList = action.pics
    var picIndex = eventDetail.picIndex
    picList[picIndex].path = this.data.photoUrl
    action.pics = picList
    return action
  }

})