// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // nowTime: new Date().toLocaleString()
    isShow: true,
    score: 42,
    price: 26.666666,
    time: 1598924276
  },

  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },

  addScore() {
    this.setData({
      score: this.data.score + 6
    })
  },
  // addScore: function() {
  //   this.setData({
  //     score: this.data.score + 6
  //   })
  // }

})