// components/select/select.js
Component({
  /**
   * Component properties
   */
  properties: {
    propArray: {
      type: Array
    },
    selectIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * Component initial data
   */
  data: {
    selectShow: false,
    selectText: '请选择'
  },

  ready: function() {
    var selectItem = this.data.propArray[this.data.selectIndex]
    this.setData({
      selectText: selectItem.text || selectItem.value || selectItem.title || selectItem
    })
  },

  /**
   * Component methods
   */
  methods: {

    selectToggle: function () {
      this.setData({
        selectShow: !this.data.selectShow
      })
    },

    setText: function(e) {
      var currentIndex = e.target.dataset.index
      var currentItem = this.properties.propArray[currentIndex]
      var currentText = currentItem.text || currentItem.value || currentItem.title || currentItem
      this.setData({
        selectShow: false,
        selectText: currentText
      })
      this.triggerEvent('select', currentIndex)
    }
  }
})
