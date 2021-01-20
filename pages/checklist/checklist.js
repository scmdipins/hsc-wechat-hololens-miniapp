const stringUtil = require('../../utils/string.js')

const moduleServe = require('../../service/moduleService.js')

Page({

  /**
   * Page initial data
   */
  data: {
    chapterList: moduleServe.chapterList,
    chapterSelectIndex: 0,
    actionList: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (_options) {
    this.setActionList(this.data.chapterSelectIndex)
    this.inputModal = this.selectComponent('#inputModal');
    this.authModal = this.selectComponent('#authModal');
    this.hintModal = this.selectComponent('#hintModal')
  },

  /**
   * select chapter
   */
  select: function (e) {
    this.updateChapterList()
    this.setData({
      chapterSelectIndex: e.detail
    })
    this.setActionList(e.detail)
  },

  /**
   * set actionList 
   */
  setActionList: function (index) {
    var chapter = this.data.chapterList[index]
    this.setData({
      actionList: chapter.actions
    })
  },

  /**
   * set action result 
   */
  setResult: function (e) {
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

  cancelInput: function () {
    var action = JSON.parse(JSON.stringify(this.data.currentAction))
    action.result = action.oriResult
    delete action.oriResult
    this.updateActionList(action)
  },

  /**
   * get input when choose '手动输入' action
   */
  getInput: function (e) {
    var action = JSON.parse(JSON.stringify(this.data.currentAction))
    action.result = e.detail
    delete action.oriResult
    this.updateActionList(action)
  },

  /**
   * set failed reason of the action
   */
  setReason: function (e) {
    var action = e.detail
    this.updateActionList(action)
  },

  updateActionList(action) {
    var actionList = this.data.actionList
    var groupId = action.groupId
    if (groupId && groupId.length > 0) {
      groupId.forEach(gId => {
        actionList.forEach((item, index) => {
          if (action.id == item.id) {
            actionList[index] = action
          }
          if (gId == item.id && gId !== action.id) {
            actionList[index].result = ''
          }
        })
      })
    } else {
      actionList.forEach((item, index) => {
        if (action.id == item.id) {
          actionList[index] = action
        }
      })
    }
    this.setData({
      actionList: actionList
    })
  },

  showInputModal: function () {
    this.inputModal.showModal()
  },

  showCameraAuthModal: function (e) {
    this.setData({
      authText: e.detail
    })
    this.authModal.showAuthModal()
  },

  goCameraPage: function (e) {
    var eventDetail = e.detail
    var actionList = this.data.actionList
    wx.navigateTo({
      url: '../camera/camera?eventDetail=' + encodeURIComponent(JSON.stringify(eventDetail)) + '&actionList='  + encodeURIComponent(JSON.stringify(actionList))
    })
  },

  updatePics(e) {
    var action = e.detail
    this.updateActionList(action)
    console.log(this.data.actionList)
  },

  updateChapterList: function () {
    var chapterList = this.data.chapterList
    var currentIndex = this.data.chapterSelectIndex
    var chapter = chapterList[currentIndex]
    chapter.actions = this.data.actionList
    chapterList[currentIndex] = chapter
    this.setData({
      chapterList: chapterList
    })
    console.log(this.data.chapterList)
  },

  prev: function () {
    this.saveAndUpload()
  },

  next: function () {
    if (this.hasUnfilledItem()) {
      this.hintModal.showModal()
    } else {
      this.saveAndUpload()
    }
  },

  onHide() {
    this.saveAndUpload()
  },

  // TODO save and upload modal
  saveAndUpload() {

  },

  hasUnfilledItem() {
    var hints = []
    var chapterList = this.data.chapterList
    for (var i = 0; i < chapterList.length; i++) {
      var item = chapterList[i]
      var pics = item.pics
      var actions = item.actions
      try {
        pics.forEach(pic => {
          if (stringUtil.isStrBlank(pic.path)) {
            throw new Error('Not completed.')
          }
        })
        actions.forEach(action => {
          if (stringUtil.isStrBlank(action.result) || action.result == 'Failed' && stringUtil.isStrBlank(action.failedReason)) {
            throw new Error('Not completed.')
          }
        })
      } catch (e) {
        hints.push(item.title)
        continue
      }
    }
    if (hints.length == 0) {
      return false
    } else {
      this.setData({
        hints: hints
      })
      return true
    }
  }

})