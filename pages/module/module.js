// pages/module/module.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  goChapterList: function() {
    wx.navigateTo({
      url: '../checklist/checklist',
    })
  }
})