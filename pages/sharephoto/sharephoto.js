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
  },
  handleCrementCpn() {
    // 1.拿到组件对象
    const my_sel = this.selectComponent("#sel-id")
    console.log(my_sel)

    // 2.通过setData修改组件内部数据(不合理)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 1
    // })

    // 3.通过方法对数据进行修改
    my_sel.incrementCounter(10)
  }
})
// 