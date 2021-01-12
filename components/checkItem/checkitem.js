// components/checkItem/checkitem.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    selectArray: [{
      "value": "passed",
      "showModal": false
    }, {
      "value": "Failed",
      "showModal": false
    },
    {
      "value": "手工输入",
      "showModal": true
    }
  ]
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
