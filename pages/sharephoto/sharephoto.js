// pages/sharephoto/sharephoto.js
Page({

  data: {
    counter: 0
  },

  onShareAppMessage() {
    return {
      title: "热门路线",
      imageUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2334330329,1820500093&fm=26&gp=0.jpg"
    }
  },
  handleCrement(event) {
    console.log('------' , this.data, event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event)
  }
})
// 