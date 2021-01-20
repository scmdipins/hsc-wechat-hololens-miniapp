// pages/upkeep/upkeep.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose: true,
    dateValue: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;

    this.setData({
      dateValue:currentdate,
    })
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


  chooseYes: function () {
    this.setData({
      choose: !this.data.choose
    })
  },

  chooseNo: function () {
    this.setData({
      choose: !this.data.choose
    })
  },
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value,
    })
  },

  backSignPhoto: function(){
    wx.navigateTo({
      url: '/pages/signPhoto/signPhoto',
    })
  }

})