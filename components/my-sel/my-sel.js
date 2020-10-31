// components/my-sel/my-sel.js
Component({
  data: {
    counter: 1
  },
  methods: {
    // 暴露接口，让别人修改组件内部数据
    incrementCounter(num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
