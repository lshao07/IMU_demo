// index.js
// 获取应用实例
const app = getApp()

Page({
  startAccelerometer(){
    wx.startAccelerometer({
      interval: 'ui'
    })
  },
  stopAccelerometer() {
    wx.stopAccelerometer()
  },

  startGyroscope(){
    wx.startGyroscope({
      interval: 'ui'
    })
  },
  stopGyroscope() {
    wx.stopGyroscope()
  },
 
  onShow: function () {
    var myAccelerometer = this;
    var myGyroscope = this;
    wx.onAccelerometerChange(function (res) {
      myAccelerometer.setData({
        x_a: res.x,
        y_a: res.y,
        z_a: res.z
      })
    }),
    wx.onGyroscopeChange(function (res) {
      myGyroscope.setData({
        x_g: res.x,
        y_g: res.y,
        z_g: res.z
      })
    })
  }
})
