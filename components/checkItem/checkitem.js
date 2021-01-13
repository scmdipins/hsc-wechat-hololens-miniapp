// components/checkItem/checkitem.js
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
    
  },

  /**
   * Component methods
   */
  methods: {

    getFailedReason: function(e) {
      var checkItem = this.data.checkItem
      checkItem.failedReason = e.detail
      this.setData({
        checkItem: checkItem
      })
    },

    select: function(e) {
      this.triggerEvent('select', e.detail)
      var checkItem = this.data.checkItem
      checkItem.result = e.detail
      this.setData({
        checkItem: checkItem
      })
    }
  }
})
