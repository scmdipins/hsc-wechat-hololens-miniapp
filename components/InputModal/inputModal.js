// components/InputModal/inputModal.js
Component({
  /**
   * Component properties
   */
  properties: {
    title: String
  },

  /**
   * Component initial data
   */
  data: {
    inputValue: ''
  },

  /**
   * Component methods
   */
  methods: {

    showModal: function() {
      this.setData({
        showInputModal: true
      })
    },

    hideModal: function() {
      this.setData({
        showInputModal: false
      })
    },

    blur: function(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },

    confirm: function() {
      this.hideModal()
      this.triggerEvent('confirm', this.data.inputValue)
    }
  }
})
