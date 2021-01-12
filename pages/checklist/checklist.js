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

    itemTitle: '符合呵呵额庐计费和二二二二额鹅鹅鹅符合呵呵额庐计费和二二二二额鹅鹅鹅符合呵呵额庐计费和二二二二额鹅鹅鹅'
  },

  showInputModal: function() {
    this.inputModal.showModal();
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.inputModal = this.selectComponent('#inputModal');
    this.showInputModal();
  },

  select: function(e) {
    console.log(e.detail)
  },

  prev: function() {

  },

  next: function() {
    
  }
})