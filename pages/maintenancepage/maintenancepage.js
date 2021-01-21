// pages/maintenancepage/maintenancepage.js
const hsc = getApp().hsc;

Page({

  data: {
    maintenanceItems: [
      // {
      //     "className": "TubePanel",
      //     "exposureSecondsValue": null,
      //     "installDateValue": null
      // },
      // {
      //     "className": "RadioGroup",
      //     "caption": "整机相关部件清洁与润滑",
      //     "options": []
      // },
      // {
      //     "className": "RadioGroup",
      //     "caption": "机架部件功能测试与安全检查",
      //     "options": []
      // },
      // {
      //     "className": "RadioGroup",
      //     "caption": "扫描床部件功能测试与安全检查",
      //     "options": []
      // },
      // {
      //     "className": "RadioGroup",
      //     "caption": "控制台部件功能测试与安全检查",
      //     "options": []
      // },
      // {
      //     "className": "RadioGroup",
      //     "caption": "软件功能测试与系统日志查阅",
      //     "options": []
      // },
      // {
      //     "className": "RadioGroup",
      //     "caption": "系统校正与图像质量检测",
      //     "options": []
      // }
    ]
  },

  onShow: function(){
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },   

  onLoad: function(){
    this.doLoadDB();
  },

  onHide: function() {
    this.doApplyDB();
  },

  onChangeTubePanel: function(e) {
    console.log('onChangeTubePanel', e.currentTarget.dataset.index, e.detail);
    const index = e.currentTarget.dataset.index;
    const detail = e.detail;
    var maintenanceItems = this.data.maintenanceItems ? this.data.maintenanceItems : [];
    var item = maintenanceItems[index];

    if (detail.funcName == 'onChangeEdit') {
      item.exposureSecondsValue = detail.newValue;      
    } else if (detail.funcName == 'onChangeDatePicker') {
      item.installDateValue = detail.newValue;
    }
    this.setData({maintenanceItems : maintenanceItems});
  },

  onChangeRadioGroup: function(e) {
    console.log('onChangeRadioGroup', e.currentTarget.dataset.index, e.detail);
    const index = e.currentTarget.dataset.index;
    const detail = e.detail;
    var maintenanceItems = this.data.maintenanceItems ? this.data.maintenanceItems : [];
    var item = maintenanceItems[index];
    var options = item.options ? item.options : [];
    var iLen = item.options.length > detail.newValue ? item.options.length : detail.newValue;
    for (var i = options.length; i < iLen; i++) {
      const opt = {checked : false};
      item.options.push(opt);
    }
    options.forEach(function(opt, index) {
      opt.checked = index == detail.newValue;
    });    
    this.setData({maintenanceItems : maintenanceItems}); 
  },

  doLoadDB: function() {
    console.log('doLoadDB');
    const that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/maintenance/01BD5357-2E0C-4A3D-A253-2C48500316A7',
      success (res) {
        // console.log(res.data);
        that.setData({maintenanceItems : res.data}, () => {
          console.log('doLoadDB success', res.data);
        });        
      }
    })  
  },

  doApplyDB: function() {
    console.log('doApplyDB');
    const maintenanceItems = this.data.maintenanceItems;
    wx.request({
      url: 'http://127.0.0.1:8080/maintenance/01BD5357-2E0C-4A3D-A253-2C48500316A7',
      method: 'POST',     
      data: {maintenanceItems : maintenanceItems},  
      success (res) {
        console.log('doApplyDB success', maintenanceItems);
      }
    })  
  },

  onBack: function() {
    this.doLoadDB();
    wx.showModal({
      title: 'Fake',
      content: 'doLoadDB',
      showCancel: false
    })     
  },

  onNext: function() {
    this.doApplyDB();
    wx.showModal({
      title: 'Fake',
      content: 'doApplyDB',
      showCancel: false
    })    
  }

})