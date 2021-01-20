// components/phEdit/phEdit.js
Component({

  properties: {
    caption:{
      type: String,
      value: null
    },
    editType:{
      type: String,
      value: null
    },
    editValue:{
      type: String,
      value: null
    }
  },

  methods: {
    onChange : function (e) {
      var detail = {};
      detail.className = 'Edit';
      detail.funcName = 'onChange';
      detail.caption = this.data.caption;
      detail.newValue = e.detail.value;
      // console.log(detail);
      this.triggerEvent('onChange', detail);
    }
  }  
  
})
