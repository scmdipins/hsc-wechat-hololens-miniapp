Component({
  /**
   * Component properties
   */
  properties: {
    min: Number,
    max: Number,
    content: String
  },

  /**
   * Component initial data
   */
  data: {
    currentWordNumber: 0
  },

  /**
   * Component methods
   */
  methods: {

    inputs: function (e) {
      var value = e.detail.value;
      var len = parseInt(value.length);
      this.setData({
        currentWordNumber: len 
      });
      if (len > this.data.max) return;
      this.triggerEvent('reason', value);
    }
  }
})