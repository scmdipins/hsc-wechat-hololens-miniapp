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
    if (2 == e.currentTarget.dataset.index) {
      wx.navigateTo({url: '../maintenancepage/maintenancepage'});
      return
    }
    if (3 == e.currentTarget.dataset.index) {
      wx.navigateTo({url: '../toolingpage/toolingpage'});
      return
    }    
    wx.navigateTo({
      url: '../checklist/checklist',
    })
  }
})