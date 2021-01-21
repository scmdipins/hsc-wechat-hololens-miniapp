Page({

  /**
   * 页面的初始数据
   */
  data: {

    selectedItem: null,
    tabBarList: [
      {
        "title": "未完成",
        "pagePath": "/pages/main/nocomplete/nocomplete"
      },
      {
        "title": "已完成",
        "pagePath": "/pages/main/complete/complete"
      }  
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({selectedItem: this.data.tabBarList[0]});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  itemTaped: function (event) {
    const _this = this;
    const item = event.currentTarget.dataset.item;
    _this.selectItem(item);
  },

  selectItem: function(object) {
    if (this.data.selectedItem == null || object.pagePath !== this.data.selectedItem.pagePath) {
      this.setData({ "selectedItem": object });
    }
  }
});