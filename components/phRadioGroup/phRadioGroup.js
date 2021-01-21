// components/phRadioGroup/phRadioGroup.js
Component({

  properties: {
    caption: {
      type: String,
      value: '标题'
    },
    options: {
      type: Array,
      value: [
        {caption: '完成'},
        {caption: '待完成'}
        // {caption: '选中时候范例', checked: true}
      ]
    }
  },

  methods: {
    onChange : function (e) {
      // console.log(e.currentTarget.dataset.id);
      const selectedIndex = e.currentTarget.dataset.id;
      const options = this.data.options;
      options.forEach(function(opt, index) {
        opt.checked = index == selectedIndex; 
      });
      this.setData({options});
      var detail = {};
      detail.className = 'RadioGroup';
      detail.funcName = 'onChange';
      detail.caption = this.data.caption;
      detail.newValue = selectedIndex;
      detail.memo = options[selectedIndex].caption;
      // console.log(detail);
      this.triggerEvent('onChange', detail);
    }
  }
})
