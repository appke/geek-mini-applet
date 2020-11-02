// pages/home/home.js

// import getMutiData from '../../service/home.js'
import {
  getMultiData
} from '../../service/home.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: []
  },

  onLoad: function (options) {
    // 请求轮播图、以及推荐数据
    getMultiData().then(res => {
      console.log('res----', res)
      // 取出数据
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      
      this.setData({
        banners,
        recommends: recommends
      })
    })
  },

})