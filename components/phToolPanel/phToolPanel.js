// components/phToolPanel/phToolPanel.js
Component({

  properties: {
    // 使用工具型号
    toolType: {
      type: String,
      value: null
    },
    // 工具序列号
    toolSN: {
      type: String,
      value: null
    },
    // 工具校准日期
    toolAdjustDate: {
      type: String,
      value: null
    },
    // 工具下次校准日期
    toolAdjustNextDate: {
      type: String,
      value: null
    }
  },

  methods: {
    onChangeEdit1: function (e) {
      var detail = {
        className : 'ToolPanel', 
        funcName : 'onChangeEdit1',
        caption : e.detail.caption,
        newValue : e.detail.newValue
      };
      // console.log(detail);
      this.triggerEvent('onChange', detail);
    },

    onChangeEdit2: function (e) {
      var detail = {
        className : 'ToolPanel', 
        funcName : 'onChangeEdit2',
        caption : e.detail.caption,
        newValue : e.detail.newValue
      };
      // console.log(detail);
      this.triggerEvent('onChange', detail);
    },    

    onChangeDatePicker1: function (e) {
      var detail = {
        className : 'ToolPanel', 
        funcName : 'onChangeDatePicker1',
        caption : e.detail.caption,
        newValue : e.detail.newValue
      };
      // console.log(detail);
      this.triggerEvent('onChange', detail);
    },

    onChangeDatePicker2: function (e) {
      var detail = {
        className : 'ToolPanel', 
        funcName : 'onChangeDatePicker2',
        caption : e.detail.caption,
        newValue : e.detail.newValue
      };
      // console.log(detail);
      this.triggerEvent('onChange', detail);
    },

  }
})
