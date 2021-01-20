// pages/login/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectNum: 1,
    phiItems: [
      {
        'field': 'ID',
        'placeholder': '输入您的工程师ID',
        'enable': true
      },
      {
        'field': '姓名',
        'placeholder': '输入您的姓名',
        'enable': true
      },
      {
        'field': '手机',
        'placeholder': '139282332323',
        'enable': false
      },
      {
        'field': '邮箱',
        'placeholder': '输入您的飞利浦邮箱',
        'enable': true
      }
    ],
    aspItems: [
      {
        'field': '姓名',
        'placeholder': '输入您的姓名',
        'enable': true
      },
      {
        'field': '公司',
        'placeholder': '输入您的公司',
        'enable': true
      },
      {
        'field': '手机',
        'placeholder': '139282332323',
        'enable': false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  onSelect: function(e) {
    const _this = this;
    const index = Number(e.currentTarget.dataset.index);
    _this.setData({ selectNum: index});
  }
})