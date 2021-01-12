// pages/checklist/checklist.js
Page({

  /**
   * Page initial data
   */
  data: {
    selectArray: [{
        "id": "10",
        "value": "会计类hohffffffffffffffffffffff"
      }, {
        "id": "21",
        "text": "工程类"
      },
      '技术类',
      {
        'value': '其他'
      }
    ],
    cardList: [
      {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      },
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  select: function(e) {
    console.log(e.detail)
  },

  prev: function() {

  },

  next: function() {
    
  }
})