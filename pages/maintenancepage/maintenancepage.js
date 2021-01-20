// pages/maintenancepage/maintenancepage.js
const hsc = getApp().hsc;

Page({

  data: {
    maintenanceItems: [
      {
          "className": "TubePanel",
          "exposureSecondsValue": null,
          "installDateValue": null
      },
      {
          "className": "RadioGroup",
          "caption": "整机相关部件清洁与润滑",
          "options": []
      },
      {
          "className": "RadioGroup",
          "caption": "机架部件功能测试与安全检查",
          "options": []
      },
      {
          "className": "RadioGroup",
          "caption": "扫描床部件功能测试与安全检查",
          "options": []
      },
      {
          "className": "RadioGroup",
          "caption": "控制台部件功能测试与安全检查",
          "options": []
      },
      {
          "className": "RadioGroup",
          "caption": "软件功能测试与系统日志查阅",
          "options": []
      },
      {
          "className": "RadioGroup",
          "caption": "系统校正与图像质量检测",
          "options": []
      }
    ]
  },

  onShow: function(){
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },   

  onChangeTubePanel: function(e) {
    console.log('onChangeTubePanel', e.currentTarget.dataset.index, e.detail);
  },

  onChangeRadioGroup: function(e) {
    console.log('onChangeRadioGroup', e.currentTarget.dataset.index, e.detail);
  },

  saveNameToDB : function(newName) {
    const obj = {
      url: 'hsc/template/user/name',
      method: 'POST',
      data: {name : newName}
    }
    hsc.request(obj).then(res => {
      if(res.statusCode == 200){
        globalData.name = newName;
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask:true
        })
      }
    }).catch(res => {
      console.log(res.errMsg)
    })
  },  

})