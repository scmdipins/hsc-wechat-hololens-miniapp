// components/hintModal/hintModal.js
Component({
  /**
   * Component properties
   */
  properties: {
    hints: {
      type: Array
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

    showModal: function() {
      this.setData({
        showHintModal: true
      })
    },

    hideModal: function() {
      this.setData({
        showHintModal: false
      })
    },

    close() {
      this.hideModal()
    }

  }
})
