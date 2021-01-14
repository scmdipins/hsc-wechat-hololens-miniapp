Component({
  /**
   * Component properties
   */
  properties: {
    checkItem: {
      type: Object
    },
    min: Number,
    max: Number
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

    inputs: function (e) {
      var value = e.detail.value;
      var len = parseInt(value.length);
      this.setData({
        currentWordNumber: len 
      })
      if (len > this.data.max) return;

      var checkItem = this.data.checkItem
      checkItem.failedReason = value
      this.setData({
        checkItem: checkItem
      })

      console.log(this.data.checkItem)
    }

  }
})