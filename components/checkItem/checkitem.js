Component({
  /**
   * Component properties
   */
  properties: {
    checkItem: {
      type: Object
    }
  },

  /**
   * Component initial data
   */
  data: {
    selectShow: false
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
      var checkItem = this.data.checkItem
      var currentIndex = e.target.dataset.index
      checkItem.oriResult = checkItem.result
      checkItem.result = checkItem.status[currentIndex]
      this.setData({
        checkItem: checkItem,
        selectShow: false
      })
      this.triggerEvent('select', checkItem)
    },

    getFailedReason: function (e) {
      var checkItem = this.data.checkItem
      checkItem.failedReason = e.detail
      this.setData({
        checkItem: checkItem
      })
    }

  }
})