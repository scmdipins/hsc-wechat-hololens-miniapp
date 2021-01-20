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
    console.log('onLoad');
    const that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/tooling/01BD5357-2E0C-4A3D-A253-2C48500316A7',
      success (res) {
        console.log(res.data)
        that.setData({toolItems : res.data ? res.data : []});
      }
    })  
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
    const toolItems = this.data.toolItems;
    const item = {}; // 'toolType': null, 'toolSN': null, 'toolAdjustDate': null, 'toolAdjustNextDate': null
    toolItems.push(item);
    console.log('onAddTool', toolItems.length);
    that.setData({toolItems}, () => {
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
          that.setData({toolItems}, () => {
            console.log('删除成功', index);
            // that.gotoEndView();
          });
        }
      }
    })
  },

  onUpdateTool: function(e) {
    console.log('onUpdateTool', e.detail);

  },

  gotoEndView: function() {
    console.log('gotoEndView')
    this.setData({
      toView:"end"
    })
  },

})