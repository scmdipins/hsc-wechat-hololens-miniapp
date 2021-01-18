const moduleServe = require('../../service/moduleService')

Page({

  /**
   * Page initial data
   */
  data: {
    moduleList: moduleServe.moduleList
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  },

  // TODO
  goChapterList: function(e) {
    console.log(e.currentTarget.dataset.index)
    wx.navigateTo({
      url: '../checklist/checklist',
    })
  }
})