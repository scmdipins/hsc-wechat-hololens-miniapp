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
  }
})
