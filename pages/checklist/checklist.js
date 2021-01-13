const checkListServe = require('../../service/checkListService.js')

Page({

  /**
   * Page initial data
   */
  data: {
    chapterList: checkListServe.chapterList,
    chapterSelectIndex: 0,
    actionList: [],
    itemTitle: '符合呵呵额庐计费和二二二二额鹅鹅鹅符合呵呵额庐计费和二二二二额鹅鹅鹅符合呵呵额庐计费和二二二二额鹅鹅鹅'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // var chapterList = this.data.checkList.map(({id, title}) => ({id, title}))
    this.setItems(this.data.chapterSelectIndex)
    this.inputModal = this.selectComponent('#inputModal');
    // this.showInputModal();
  },

  select: function(e) {
    console.log(e.detail)
    this.setItems(e.detail)
  },

  setItems: function(index) {
    var chapter = this.data.chapterList[index]
    this.setData({
      actionList: chapter.actions
    })
  },

  getResult: function(e) {
    console.log('result: ' + e.detail)
    if (e.detail === '手工输入') {
      this.showInputModal()
    }
  },

  prev: function() {

  },

  next: function() {
    
  },

  showInputModal: function() {
    this.inputModal.showModal();
  }

})