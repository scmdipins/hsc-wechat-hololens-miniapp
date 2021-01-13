// components/dropDownSelectInput/select.js
Component({
  /**
   * Component properties
   */
  properties: {
    propArray: {
      type: Array
    },
    result: {
      type: String
    }
  },

  /**
   * Component initial data
   */
  data: {
    selectShow: false,
    selectText: 'Select'
  },

  ready: function() {
    var selectText = this.data.result ? this.data.result : 'Select'
    this.setData({
      selectText: selectText
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
      var currentText = currentItem.text || currentItem.value || currentItem
      this.setData({
        selectShow: false
      })
      if (currentText !== '手工输入') {
        this.setData({
          selectText: currentText
        })
      }
      this.triggerEvent('select', currentText)
    }
  }
})
