// pages/home/home.js

// import getMutiData from '../../service/home.js'
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    currentIndex: 0,
    goods:{
      pop: {page:0, list:[]},
      new: {page:0, list:[]},
      sell: {page:0, list:[]}
    }
  },

  onLoad: function (options) {
    // 请求轮播图、以及推荐数据
    this._getMultiData()
    // 请求商品数据
    this._getGoodsData('new')
    this._getGoodsData('pop')
    // this._getGoodsData('sell')
    
  },

  _getMultiData() {
    getMultiData().then(res => {
      console.log('banners----', res)
      // 取出数据
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list

      this.setData({
        banners,
        recommends: recommends
      })
    })
  },

  _getGoodsData(type) {
    // 获取页码
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      console.log(type, '----', res)

      // 取出数据
      const list = res.data.data.list

      // 将数据设置到goods中对应type中
      // this.data.goods[type].list.push(...list)

      const oldList = this.data.goods[type].list
      oldList.push(...list) //把数组展开塞进去
      // 将数据设置到data中的goods中, 拼接类型
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },

  handleItemClick(event) {
    // 1.取出index
    const index = event.detail.index 
    console.log(index)

    this.setData({
      currentIndex : index
    }) 

    // 2.请求相应商品数据



  }

})