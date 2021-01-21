// pages/toolingpage/toolingpage.js

Page({

  data: {
    toolItems:[
      // {
      //   'toolType': 'TC091-47', // 使用工具型号
      //   'toolSN': '92905226', // 工具序列号
      //   'toolAdjustDate': '06/13/2020', // 工具校准日期
      //   'toolAdjustNextDate': 'MM/DD/YYYY' // 工具下次校准日期 MM/DD/YYYY
      // },
      // {
      //   'toolType': 'TC091-47', // 使用工具型号
      //   'toolSN': '92905226', // 工具序列号
      //   'toolAdjustDate': '06/13/2020', // 工具校准日期
      //   'toolAdjustNextDate': null // 工具下次校准日期 MM/DD/YYYY
      // },
    ]
  },

  onShow: function(){
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  }, 
  
  onLoad: function(){
    this.doLoadDB();
  },

  onHide: function() {
    this.doApplyDB();
  },

  canAddTool: function() {
    const toolItems = this.data.toolItems;
    if ((!toolItems) || (toolItems.length == 0)) {
      return true;
    }
    const item = toolItems[toolItems.length - 1];
    if ((item.toolType) || (item.toolSN) || (item.toolAdjustDate) || (item.toolAdjustNextDate)) {
      return true;
    }
    return false;
  },

  onAddTool: function() {
    if (!this.canAddTool()) {
      wx.showModal({
        title: '提示',
        content: '最后一条记录内容为空',
        showCancel: false
      })
      return;
    }
    const that = this;
    var toolItems = this.data.toolItems ? this.data.toolItems : [];
    var item = {}; // 'toolType': null, 'toolSN': null, 'toolAdjustDate': null, 'toolAdjustNextDate': null
    toolItems.push(item);
    console.log('onAddTool', toolItems);
    this.setData({toolItems : toolItems}, () => {
      console.log('新增成功');
      that.gotoEndView();
    });
  },

  onDelTool: function(e) {
    console.log('onDelTool', e);
    const that = this;
    const index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '是否删除当前记录？',
      success: function(res) {
        if (res.confirm) {
          const toolItems = that.data.toolItems;
          toolItems.splice(index, 1);
          that.setData({toolItems : toolItems}, () => {
            console.log('删除成功', index);
            // that.gotoEndView();
          });
        }
      }
    })
  },

  onUpdateTool: function(e) {
    console.log('onUpdateTool', e.detail);
    const index = e.currentTarget.dataset.index;
    const detail = e.detail;
    var toolItems = this.data.toolItems; // ? this.data.toolItems : [];
    console.log('toolItems =', toolItems);
    var item = toolItems[index];
    console.log('item =', item, index);

    if (detail.funcName == 'onChangeEdit1') {
      item.toolType = detail.newValue;
    } else if (detail.funcName == 'onChangeEdit2') {
      item.toolSN = detail.newValue;
    } else if (detail.funcName == 'onChangeDatePicker1') {
      item.toolAdjustDate = detail.newValue;
    } else if (detail.funcName == 'onChangeDatePicker2') {
      item.toolAdjustNextDate = detail.newValue;
    }
    this.setData({toolItems : toolItems});
  },

  gotoEndView: function() {
    console.log('gotoEndView')
    this.setData({
      toView:"end"
    })
  },

  doLoadDB: function() {
    console.log('doLoadDB');
    const that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/tooling/01BD5357-2E0C-4A3D-A253-2C48500316A7',
      success (res) {
        // console.log(res.data);
        that.setData({toolItems : res.data}, () => {
          console.log('doLoadDB success', res.data);
        });        
      }
    })  
  },

  doApplyDB: function() {
    console.log('doApplyDB');
    const toolItems = this.data.toolItems;
    wx.request({
      url: 'http://127.0.0.1:8080/tooling/01BD5357-2E0C-4A3D-A253-2C48500316A7',
      method: 'POST',     
      data: {toolItems : toolItems},  
      success (res) {
        console.log('doApplyDB success', toolItems);
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