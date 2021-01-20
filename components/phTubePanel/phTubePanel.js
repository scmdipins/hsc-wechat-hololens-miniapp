// components/phTubePanel/phTubePanel.js
Component({

  properties: {
    exposureSecondsCaption: {
      type: String,
      value: '当前球管曝光秒数'
    },
    exposureSecondsValue: {
      type: Number,
      value: null
    },
    installDateCaption: {
      type: String,
      value: '当前球管安装日期'
    },
    installDateValue: {
      type: String,
      value: ''
    }    
  },

  methods: {
    onChangeEdit: function (e) {
      var detail = {
        className : 'TubePanel', 
        funcName : 'onChangeEdit',
        caption : this.data.exposureSecondsCaption,
        newValue : e.detail.newValue
      };
      // console.log(detail, e);
      this.triggerEvent('onChange', detail);
    },

    onChangeDatePicker: function (e) {
      var detail = {};
      detail.className = 'TubePanel';
      detail.funcName = 'onChangeDatePicker';
      detail.caption = this.data.installDateCaption;
      detail.newValue = e.detail.newValue;
      // console.log(detail, e);
      this.triggerEvent('onChange', detail);
    },
  }
})
