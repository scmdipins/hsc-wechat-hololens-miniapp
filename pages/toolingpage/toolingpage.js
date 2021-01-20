// pages/toolingpage/toolingpage.js

Page({

  data: {
    toolItems:[
      {
        'toolType': 'TC091-47', // 使用工具型号
        'toolSN': '92905226', // 工具序列号
        'toolAdjustDate': '06/13/2020', // 工具校准日期
        'toolAdjustNextDate': 'MM/DD/YYYY' // 工具下次校准日期 MM/DD/YYYY
      },
      {
        'toolType': 'TC091-47', // 使用工具型号
        'toolSN': '92905226', // 工具序列号
        'toolAdjustDate': '06/13/2020', // 工具校准日期
        'toolAdjustNextDate': null // 工具下次校准日期 MM/DD/YYYY
      },
    ]
  },

  onShow: function(){
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  }, 
  
  OnAddTool: function() {
    const that = this;
    const toolItems = this.data.toolItems;
    const item = {}; // 'toolType': null, 'toolSN': null, 'toolAdjustDate': null, 'toolAdjustNextDate': null
    toolItems.push(item);
    console.log('OnAddNewTool', toolItems.length);
    that.setData({toolItems}, () => {
      console.log('新增成功');
      that.gotoEndView();
    });
  },

  OnDelTool: function(e) {
    console.log('OnDelTool', e);
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

  OnUpdateTool: function(e) {
    console.log('OnUpdateTool', e);

  },

  gotoEndView: function() {
    console.log('gotoEndView')
    this.setData({
      toView:"end"
    })
  },

  onLoad: function () {
    // this.setData({txtValue: globalData.name ? globalData.name : mypageData.MyPageConsts.txtValue});
    // this.setData({tipValue: globalData.phone ? globalData.phone : mypageData.MyPageConsts.tipValue});
    // if (!globalData.image) {
    //   this.setData({imgValue : mypageData.MyPageConsts.imgValue});
    // } else {
    //   oss.getRealImageUrlFromOSS(globalData.image).then(res => {
    //     this.setData({imgValue: res});
    //   }).catch(res => {
    //     console.log('Fail getRealImageUrlFromOSS = ' + res);
    //   });
    // }
  }  

})