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

  /**
   * select chapter
   */
  select: function(e) {
    console.log(e.detail)
    this.setItems(e.detail)
  },

  /**
   * set actionList 
   */
  setItems: function(index) {
    var chapter = this.data.chapterList[index]
    this.setData({
      actionList: chapter.actions
    })
  },

  /**
   * get action result 
   */
  getResult: function(e) {
    var action = e.detail
    var oriAction = this.data.actionList.filter(item => item.id == action.id)[0]
    if (action.result === '手工输入') {
      this.setData({
        currentAction: oriAction
      })
      this.showInputModal()
    }
  },

  /**
   * get input when choose '手工输入' action
   */
  getInput: function(e) {
    var action = this.data.currentAction
    action.result = e.detail
    var actionList = this.data.actionList
    var index = 0
    actionList.forEach((item, i) => {
      if (action.id === item.id) {
        index = i
      }
    })
    actionList.slice(index, 1, action)
    this.setData({
      actionList: actionList
    })
    console.log(this.data.actionList)
  },

  prev: function() {

  },

  next: function() {
    
  },

  showInputModal: function() {
    this.inputModal.showModal();
  }

})