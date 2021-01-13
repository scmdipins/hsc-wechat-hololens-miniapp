const stringUril = require('../../utils/string.js')

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

    cancel: function() {
      this.hideModal()
      this.triggerEvent('cancel', true)
    },

    confirm: function() {
      this.hideModal()
      if (!stringUril.isStrBlank(this.data.inputValue)) {
        this.triggerEvent('confirm', this.data.inputValue)
      }
    }
  }
})
