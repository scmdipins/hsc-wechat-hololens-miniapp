// components/phDatePicker/phDatePicker.js
Component({

  properties: {
    caption:{
      type: String,
      value: null
    },
    defaultValue:{
      type: String,
      value: null
    },
    dateValue:{
      type: String,
      value: null
    }
  },

  methods: {

    onChange : function (e) {
      var that = this;
      that.setData({dateValue: e.detail.value});
      var detail = {};
      detail.className = 'DatePicker';
      detail.funcName = 'onChange';
      detail.caption = this.data.caption;
      detail.newValue = e.detail.value;
      // console.log(detail);
      this.triggerEvent('onChange', detail);
    },     

  }
})
