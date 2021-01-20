// pages/login/login.js
const hsc = getApp().hsc
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  getPhoneNumber: function(e) {
    if(e.detail.iv && e.detail.encryptedData){
      var phoneInfo= {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv
      }
      var obj = {
        url: 'hsc/hololens/user/add',
        method: 'POST',
        data: phoneInfo
      }
      hsc.request(obj).then(res => {
        if(res.statusCode == 200){
          // globalData.phone = res.data.phone;
          // globalData.name = res.data.name;
          // globalData.isLogin = true;
          wx.navigateTo({
            url: '/pages/login/userInfo/userInfo',
          })
        }
      }).catch(res => {
        console.log(res.errMsg)
      })
    
    }
  }
})