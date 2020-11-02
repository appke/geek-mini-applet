// components/w-tab-control/w-tab-control.js
Component({
  properties: {
    titles: {
      type: Array,
      value: ['衣服', '裤子', '鞋子', '帽子']
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleItemClick(event) {
      console.log(event)
      // 1.取出index
      const index = event.currentTarget.dataset.index
      // 2.修改currentIndex
      this.setData({
        currentIndex: index
      })
      // 3.通知页面内部的点击事件
      this.triggerEvent("itemclick", {
        index,
        title: this.properties.titles[index]
      }, {})
    }
  }
})