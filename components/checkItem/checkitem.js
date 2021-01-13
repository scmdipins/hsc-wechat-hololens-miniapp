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

    getFailReason: function(e) {
      console.log(e.detail)
    }
  }
})
