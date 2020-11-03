// pages/home/home.js

// import getMutiData from '../../service/home.js'
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

const types = ['pop', 'new', 'sell']
const TOP_DISTANCE = 1000

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },

  onLoad: function (options) {
    // 请求轮播图、以及推荐数据
    this._getMultiData()
    // 请求商品数据
    this._getGoodsData('new')
    this._getGoodsData('pop')
    this._getGoodsData('sell')
  },

  _getMultiData() {
    getMultiData().then(res => {
      console.log('banners----', res)
      // 取出数据
      const banners = res.data.banner.list
      const recommends = res.data.recommend.list
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
      const list = res.data.list
      // 设置数据
      const goods = this.data.goods
      goods[type].list.push(...list)
      goods[type].page = page
      this.setData({
        goods: goods
      })
    })
  },

  handleTabClick(event) {
    // 1.取出index
    const index = event.detail.index
    console.log(index)
    this.setData({
      currentIndex: index
    })
    // 2.修改currentType
    this.setData({
      currentType: types[index]
    })
  },
  onReachBottom() {
    // 上拉加载更多
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll(options) {
    // console.log(options)
    // 1.取出scrollTop
    const scrollTop = options.scrollTop

    // 2.修改showBackTop属性
    const flag = scrollTop >= TOP_DISTANCE
    if (flag != this.data.showBackTop) {
      this.setData({
        showBackTop: flag
      })
    }

    // 3.修改 isTabFixed 属性
    const tabFlag = scrollTop >= this.data.tabScrollTop
    if (tabFlag != this.data.isTabFixed) {
      this.setData({
        isTabFixed: tabFlag
      })
    }
  },

  // onShow() {
  //   setTimeout(() => {
  //     wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
  //       console.log('rect----', rect)
  //     }).exec()
  //   }, 1000);
  // }

  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      console.log('rect----', rect)
      this.data.tabScrollTop = rect.top
    }).exec()
  }
})

/*
 _getGoodsData(type) {
    // 获取页码
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      console.log(type, '----', res)
      // 取出数据
      const list = res.data.list

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
*/