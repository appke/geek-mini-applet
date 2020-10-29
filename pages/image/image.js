// pages/image/image.js
Page({
  
  data: {
    imgPath: ''
  },
  chosePhoto() {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const path = res.tempFilePaths[0]
        this.setData({
          imgPath: path
        })
      },
    })
  }
})