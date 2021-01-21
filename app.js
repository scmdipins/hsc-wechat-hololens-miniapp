// app.js
var hsc = require('utils/hsc-wx-sdk.js')
var track = require('utils/hsc-wx-sdk-user.js')

App({
  onLaunch() {
    const obj = {
      url: 'hsc/hololens/user/status',
      method: 'GET'
    }
    hsc.request(obj).then(res => {
      if(res.statusCode == 200){
        if(res.data.name){
          this.globalData.name = res.data.name;
          wx.redirectTo({
            url: '/pages/main/main',
          })
        }else{
          wx.redirectTo({
            url: '/pages/login/userInfo/userInfo',
          })
        }

      }
    }).catch(res => {
      console.log(res.errMsg)
    })
  },
  globalData: {
    userInfo: null,
    name: null
  },
  hsc: hsc
})
