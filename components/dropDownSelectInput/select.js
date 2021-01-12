// components/dropDownSelectInput/select.js
Component({
  /**
   * Component properties
   */
  properties: {
    propArray: {
      type: Array
    }
  },

  /**
   * Component initial data
   */
  data: {
    selectShow: false,
    selectText: '请选择'
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
      if (currentItem.showModal) {
        
      }
      var currentText = currentItem.text || currentItem.value || currentItem
      this.setData({
        selectShow: false,
        selectText: currentText
      })
      this.triggerEvent('select', currentItem)
    }
  }
})
