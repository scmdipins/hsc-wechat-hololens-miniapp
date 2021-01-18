// components/authModal/authModal.js
Component({
  /**
   * Component properties
   */
  properties: {
    authText: String
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

    /**
     * show auth setting modal
     */
    showAuthModal: function() {
      this.setData({
        showAuthSettingModal: true
      })
    },

    /**
     * hide auth setting modal
     */
    hideAuthModal: function() {
      this.setData({
        showAuthSettingModal: false
      })
    },

    /**
     * open setting page 
     * remark: must use bind event
     */
    openSettingPage: function() {
      this.hideAuthModal()
      wx.openSetting({
        success(settingdata) {
          if (settingdata.authSetting["scope.writePhotosAlbum"]) {
            console.log('获取权限成功')
          } else {
            console.log('获取权限失败')
          }
        }
      })
    }
  }
})