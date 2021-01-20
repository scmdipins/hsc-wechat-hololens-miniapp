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

    setText: function (e) {
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
    },

    blur: function (e) {
      var value = e.detail.value
      var checkItem = this.data.checkItem
      checkItem.failedReason = value
      this.setData({
        checkItem: checkItem
      })
      this.triggerEvent('reason', checkItem)
    },

    showCameraAuthModal: function (e) {
      this.triggerEvent('cameraAuth', e.detail)
    },

    goCameraPage: function (e) {
      this.triggerEvent('camera', true)
    },

    setPic: function (e) {
      var pic = e.detail
      var checkItem = this.data.checkItem
      var picList = checkItem.pics
      picList.forEach((_item, index) => {
        if (index == e.currentTarget.dataset.index) {
          picList[index] = pic
        }
      })
      checkItem.pics = picList
      this.setData({
        checkItem: checkItem
      })

      this.triggerEvent('pics', this.data.checkItem)
      // TODO update chapter
    }

  }
})