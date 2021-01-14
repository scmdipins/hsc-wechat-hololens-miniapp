const moduleServe = require('../../service/moduleService.js')

Page({

  /**
   * Page initial data
   */
  data: {
    chapterList: moduleServe.chapterList,
    chapterSelectIndex: 0,
    actionList: [],
    picList: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setActionList(this.data.chapterSelectIndex)
    this.setPicList()
    this.inputModal = this.selectComponent('#inputModal');
  },

  setPicList: function() {
    var chapter = this.data.chapterList[this.data.chapterSelectIndex]
    this.setData({
      picList: chapter.pics
    })
  },

  /**
   * select chapter
   */
  select: function(e) {
    this.updateChapterList()
    this.setData({
      chapterSelectIndex: e.detail
    })
    this.setActionList(e.detail)
  },

  /**
   * set actionList 
   */
  setActionList: function(index) {
    var chapter = this.data.chapterList[index]
    this.setData({
      actionList: chapter.actions
    })

  },

  /**
   * set action result 
   */
  setResult: function(e) {
    var action = e.detail
    if (action.result === '手动输入') {
      this.setData({
        currentAction: action
      })
      this.showInputModal()
    } else {
      delete action.oriResult
      this.updateActionList(action)
    }
  },

  cancelInput: function() {
    var action = JSON.parse(JSON.stringify(this.data.currentAction))
    action.result = action.oriResult
    delete action.oriResult
    this.updateActionList(action)
  },

  /**
   * get input when choose '手动输入' action
   */
  getInput: function(e) {
    var action = JSON.parse(JSON.stringify(this.data.currentAction))
    action.result = e.detail
    delete action.oriResult
    this.updateActionList(action)
  },

  /**
   * set failed reason of the action
   */
  setReason: function(e) {
    var action = e.detail
    this.updateActionList(action)
  },

  updateActionList(action) {
    var actionList = this.data.actionList
    actionList.forEach((item, index) => {
      if (action.id == item.id) {
        actionList[index] = action
      }
    })
    this.setData({
      actionList: actionList
    })
    
  },

  updateChapterList: function() {
    var chapterList = this.data.chapterList
    var currentIndex = this.data.chapterSelectIndex
    var chapter = chapterList[currentIndex]
    chapter.actions = this.data.actionList
    chapterList[currentIndex] = chapter
    this.setData({
      chapterList: chapterList
    })
  },
  
  prev: function() {

  },

  next: function() {
    
  },

  showInputModal: function() {
    this.inputModal.showModal();
  }

})