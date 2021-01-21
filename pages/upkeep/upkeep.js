// pages/upkeep/upkeep.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose: true,
    dateValue: '',
    ticketBody: {},
    ticketId: null,
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

    var ticketId = "01BD5357-2E0C-4A3D-A253-2C48500316A7"

    var this_ = this

    wx.request({
      method: "GET",
      url: 'http://localhost:8080/ticket/info?ticketId=' + ticketId,

      success: function (res) {
        this_.setData({
          ticketBody: res.data
        })
      

      }
    })
    this.setData({
      dateValue: currentdate,

    })
  },


  chooseYes: function () {
    var ticketBody = this.data.ticketBody
    ticketBody.hololens = !ticketBody.hololens
    this.setData({
      ticketBody: ticketBody
    })
  },

  chooseNo: function () {
    var ticketBody = this.data.ticketBody
    ticketBody.hololens = !ticketBody.hololens
    this.setData({
      ticketBody: ticketBody
    })
  },
  datePickerBindchange: function (e) {
    var ticketBody = this.data.ticketBody
    ticketBody.deliveryDate = e.detail.value
    this.setData({
      ticketBody: ticketBody
    })
    console.log(this.data.ticketBody)
  },

  backPage: function () {
    wx.navigateTo({
      url: '/pages/signPhoto/signPhoto',
    })
  },

  nextPage: function () {
    wx.request({
      method: "POST",
      url: 'http://localhost:8080/ticket/updateInfo',
      data:this.data.ticketBody,
      header: {'Content-Type': 'application/json'},

      success: function (res) {
        console.log(res)
      }
    })

  },


  updateHospitalName: function (e) {
    var ticketBody = this.data.ticketBody
    ticketBody.hospitalName = e.detail.value
    this.setData({
      ticketBody: ticketBody
    })
  },

  updateProModal: function (e) {
    var ticketBody = this.data.ticketBody
    ticketBody.proModal = e.detail.value
    this.setData({
      ticketBody: ticketBody
    })
  },

  updateProSerialNumber: function (e) {
    var ticketBody = this.data.ticketBody
    ticketBody.proSerialNumber = e.detail.value
    this.setData({
      ticketBody: ticketBody
    })
  },

  updateEquipNumber: function (e) {
    var ticketBody = this.data.ticketBody
    ticketBody.equipNumber = e.detail.value
    this.setData({
      ticketBody: ticketBody
    })
  },

  updateUpkeepInfo: function (e) {
    var ticketBody = this.data.ticketBody
    ticketBody.upkeepInfo = e.detail.value
    this.setData({
      ticketBody: ticketBody
    })
  },

  updateSoftwareVersion: function (e) {
    var ticketBody = this.data.ticketBody
    ticketBody.softwareVersion = e.detail.value
    this.setData({
      ticketBody: ticketBody
    })
  },

  updateEngineerName: function (e) {
    var ticketBody = this.data.ticketBody
    ticketBody.engineerName = e.detail.value
    this.setData({
      ticketBody: ticketBody
    })
  },



})