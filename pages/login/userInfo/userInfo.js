// pages/login/userInfo/userInfo.js
const hsc = getApp().hsc;
const globalData = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectNum: 1,
    engineerId: null,
    engineerName: null,
    engineerPhone: '17721057774',
    engineerEmail: null,
    engineerCompany: null
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
  },

  onSubmit: function(){
    const _this = this;
    const params = {
      'phone': _this.data.engineerPhone,
      'email': _this.data.engineerEmail,
      'company': _this.data.engineerCompany,
      'enId': _this.data.engineerId,
      'name': _this.data.engineerName,
      'type': _this.data.selectNum === 1 ? 'asp' : 'phi'
    }
    const obj = {
      url: 'hsc/hololens/user/checkinfo',
      method: 'POST',
      data: params
    }
    hsc.request(obj).then(res => {
      if(res.statusCode == 200){
        globalData.name = res.data.name;
        wx.redirectTo({
          url: '/pages/main/main',
        })
      }
    }).catch(res => {
      console.log(res.errMsg)
    })
    
  },

  onInput: function(e){
    const _this = this;
    const value = e.detail.value;
    const field = e.currentTarget.dataset.field;
    _this.setData({ [field]: value });
  }
})