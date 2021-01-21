// pages/login/phone/phone.js
const hsc = getApp().hsc;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCheck: false
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

  onCheck: function(){
    const _this = this;
    _this.setData({ isCheck : !_this.data.isCheck});
  },

  inputData: function(e) {
    const value = e.detail.value;
    if(/^1[3|4|5|7|8|9]\d{9}$/.test(value)){
      this.setData({phoneNum: value, isvalid: true});
    } else{
      this.setData({phoneNum: value, isvalid: false});
    }
  },

  getVerificationCode: function(e) {
    if(!this.data.isvalid){
      return;
    }
    const phone = this.data.phoneNum;
    const data = {
      'phone': phone
    }
    const obj = {
      url: 'hsc/hololens/sms/send',
      method: 'POST',
      data: data
    }
    hsc.request(obj).then(res => {
      if(res.statusCode == 200){
        wx.redirectTo({
          url: '/pages/login/code/code?key='+ res.data.key+ '&phone='+phone,
        })
      }
    }).catch(res => {
      console.log(res.errMsg)
    })
  }
})